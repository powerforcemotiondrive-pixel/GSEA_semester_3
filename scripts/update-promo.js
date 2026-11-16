#!/usr/bin/env node
/**
 * ENAC GSEA Semester 3 — Automated Promotion & Admin Setup Engine
 * Reads `PROMO_SETUP.private.md` (local-only) and updates strictly the Course Admin
 * pages (`src/js/11-admin-hub.js`, `admin.html`), student portfolio selector (`portfolio.html`),
 * HUD callsign badge (`src/template.html`), and `students.private.json`.
 *
 * SAFETY INVARIANT: Never touches lesson content, activities, vocabulary, or course-data.js.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const privateFormPath = path.join(rootDir, 'PROMO_SETUP.private.md');
const exampleFormPath = path.join(rootDir, 'PROMO_SETUP.example.md');

// Strict File Lock Whitelist — this script is forbidden from writing outside this list
const ALLOWED_WRITE_FILES = new Set([
  path.join(rootDir, 'students.private.json'),
  path.join(rootDir, 'students.private.example.json'),
  path.join(rootDir, 'src/template.html'),
  path.join(rootDir, 'src/js/02-config.js'),
  path.join(rootDir, 'src/js/03-core-deck.js'),
  path.join(rootDir, 'src/js/11-admin-hub.js'),
  path.join(rootDir, 'admin.html'),
  path.join(rootDir, 'portfolio.html')
]);

function safeWriteFile(filePath, content) {
  const resolved = path.resolve(filePath);
  if (!ALLOWED_WRITE_FILES.has(resolved)) {
    throw new Error(`SECURITY LOCK: Attempted to write to non-admin file: ${resolved}`);
  }
  fs.writeFileSync(resolved, content, 'utf8');
}

// Load live deck session titles directly from src/js/02-config.js
function loadDeckSessionTitles() {
  const configPath = path.join(rootDir, 'src/js/02-config.js');
  const titles = { 1: {}, 2: {}, 3: {} };
  if (fs.existsSync(configPath)) {
    const src = fs.readFileSync(configPath, 'utf8');
    const blockMatch = src.match(/const\s+aasSessionTitles\s*=\s*(\{[\s\S]*?\n\s*\});/);
    if (blockMatch) {
      try {
        const parsed = new Function(`return ${blockMatch[1]};`)();
        Object.assign(titles, parsed);
      } catch (e) {}
    }
  }
  return titles;
}

// 1. Parse PROMO_SETUP.private.md
function parsePromoForm(rawText) {
  const deckTitles = loadDeckSessionTitles();
  const lines = rawText.split(/\r?\n/);
  const config = {
    promotion: 'GSEA 25A',
    semester: 3,
    academicYear: '2026-2027',
    totalStudents: 30,
    numGroups: 3,
    groupCounts: { A: 10, B: 10, C: 10, D: 0 },
    tracks: {
      AT: {
        code: 'LV125E',
        name: 'Technical English (AT)',
        totalWeeks: 15,
        scheduleSummary: 'Wednesdays 13h15 – 15h15',
        teachers: { A: 'Teacher A (TBC)', B: 'Teacher B (TBC)', C: 'Teacher C (TBC)', D: 'Teacher D (TBC)' },
        slots: { A: 'Wednesday 13h15 - 15h15', B: 'Wednesday 13h15 - 15h15', C: 'Wednesday 13h15 - 15h15', D: '' },
        weeks: []
      }
    },
    students: { A: [], B: [], C: [], D: [] }
  };

  let currentSection = 'ROOT';

  for (let rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith('#')) continue;

    if (line.startsWith('[') && line.endsWith(']')) {
      currentSection = line.slice(1, -1).trim().toUpperCase();
      continue;
    }

    if (currentSection === 'ROOT') {
      const m = line.match(/^([A-Z0-9_]+)\s*:\s*(.*)$/);
      if (m) {
        const key = m[1];
        const val = m[2].trim();
        if (key === 'PROMOTION') config.promotion = val;
        else if (key === 'SEMESTER') config.semester = parseInt(val, 10) || 3;
        else if (key === 'ACADEMIC_YEAR') config.academicYear = val;
        else if (key === 'TOTAL_STUDENTS') config.totalStudents = parseInt(val, 10) || 0;
        else if (key === 'NUMBER_OF_GROUPS') config.numGroups = Math.min(4, Math.max(1, parseInt(val, 10) || 3));
        else if (key === 'GROUP_A_COUNT') config.groupCounts.A = parseInt(val, 10) || 0;
        else if (key === 'GROUP_B_COUNT') config.groupCounts.B = parseInt(val, 10) || 0;
        else if (key === 'GROUP_C_COUNT') config.groupCounts.C = parseInt(val, 10) || 0;
        else if (key === 'GROUP_D_COUNT') config.groupCounts.D = parseInt(val, 10) || 0;
      }
    } else if (currentSection === 'TRACK: AT') {
      const m = line.match(/^([A-Z0-9_]+)\s*:\s*(.*)$/);
      if (m) {
        const key = m[1];
        const val = m[2].trim();
        const t = config.tracks.AT;
        if (key === 'COURSE_CODE' && val) t.code = val;
        else if (key === 'COURSE_NAME' && val) t.name = val;
        else if (key === 'TOTAL_WEEKS' && val) t.totalWeeks = parseInt(val, 10) || 15;
        else if (key === 'SCHEDULE_SUMMARY' && val) t.scheduleSummary = val;
        else if (key === 'GROUP_A_TEACHER') t.teachers.A = val || 'Teacher A (TBC)';
        else if (key === 'GROUP_B_TEACHER') t.teachers.B = val || 'Teacher B (TBC)';
        else if (key === 'GROUP_C_TEACHER') t.teachers.C = val || 'Teacher C (TBC)';
        else if (key === 'GROUP_D_TEACHER') t.teachers.D = val || 'Teacher D (TBC)';
        else if (key === 'GROUP_A_SLOT') t.slots.A = val || 'Wednesday 13h15 - 15h15';
        else if (key === 'GROUP_B_SLOT') t.slots.B = val || 'Wednesday 13h15 - 15h15';
        else if (key === 'GROUP_C_SLOT') t.slots.C = val || 'Wednesday 13h15 - 15h15';
        else if (key === 'GROUP_D_SLOT') t.slots.D = val || 'Wednesday 13h15 - 15h15';
      }
    } else if (currentSection === 'AT WEEKLY SCHEDULE & ROOMS' || currentSection === 'AT WEEKLY ROOMS & DATES') {
      const parts = line.split('|').map(p => p.trim());
      if (parts[0].toUpperCase() === 'HOLIDAY') {
        config.tracks.AT.weeks.push({
          isHoliday: true,
          text: parts[1] || 'Vacation Break (No Classes)'
        });
      } else if (parts.length >= 5) {
        // Supports both new Deck-Card format:
        // W01 | W37 | Wed 09 Sep | M1.S1 | GrpA | GrpB | GrpC | GrpD
        // and explicit format:
        // W01 | W37 | Wed 09 Sep | 1 | Session Title | Type | GrpA | GrpB | GrpC | GrpD
        const [courseWeek, calWeek, dateStr, col4] = parts;
        const deckMatch = (col4 || '').toUpperCase().match(/^M(\d+)\.(S(\d+)|FE(\d*))$/);

        let modNum = 1;
        let title = '';
        let typeUpper = 'TEACHING';
        let isFe = false;
        let feIndex = null;
        let tag = 'Teaching Session';
        let roomA, roomB, roomC, roomD;

        if (deckMatch) {
          modNum = parseInt(deckMatch[1], 10) || 1;
          const sessToken = deckMatch[2];
          roomA = parts[4];
          roomB = parts[5];
          roomC = parts[6];
          roomD = parts[7];

          if (sessToken.startsWith('FE')) {
            isFe = true;
            feIndex = parseInt(deckMatch[4], 10) || modNum;
            typeUpper = `FE${feIndex}`;
            tag = 'Grade /20';
            title = feIndex === 1
              ? 'Session 7 — FORMATIVE EVALUATION 1 (FE1): EASA Regulatory Extract & Class Activity Evaluation'
              : `Session 8 — FORMATIVE EVALUATION 2 (FE2) — Oral Tutorials`;
          } else {
            const sNum = parseInt(deckMatch[3], 10) || 1;
            const modTitles = deckTitles[modNum] || {};
            const rawDeckTitle = modTitles[`s${sNum}`] || `Session ${sNum}`;
            title = rawDeckTitle.replace(/\s-\s/, ' — ');
            // Last teaching session before FE gets Prep FE tag
            if (modNum === 2) {
              if (sNum === 5 || sNum === 6) {
                typeUpper = 'MTF_MOCK';
                tag = 'Mock Exam • 30-min Oral';
              } else if (sNum === 7 || sNum === 8) {
                typeUpper = 'TEACHING';
                tag = 'MTF Revision';
              }
            } else {
              const maxTeach = 6;
              if (sNum === maxTeach) {
                typeUpper = 'PREP_FE';
                tag = `Teaching Session • Prep FE${modNum}`;
              }
            }
          }
        } else {
          const [, , , modNumStr, explicitTitle, typeStr, rA, rB, rC, rD] = parts;
          modNum = parseInt(modNumStr, 10) || 1;
          title = explicitTitle || 'Session';
          typeUpper = (typeStr || 'TEACHING').toUpperCase();
          isFe = typeUpper.startsWith('FE');
          feIndex = isFe ? (parseInt(typeUpper.replace('FE', ''), 10) || 1) : null;
          if (typeUpper === 'PREP_FE') tag = 'Teaching Session • Prep FE';
          else if (isFe) tag = 'Grade /20';
          roomA = rA; roomB = rB; roomC = rC; roomD = rD;
        }

        config.tracks.AT.weeks.push({
          courseWeek,
          week: calWeek,
          date: dateStr,
          modNum,
          title,
          type: typeUpper,
          tag,
          isFe,
          feIndex,
          rooms: {
            A: (roomA && roomA !== '-' && roomA.toUpperCase() !== 'TBC' && roomA.toUpperCase() !== 'ROOM TBC') ? roomA : '',
            B: (roomB && roomB !== '-' && roomB.toUpperCase() !== 'TBC' && roomB.toUpperCase() !== 'ROOM TBC') ? roomB : '',
            C: (roomC && roomC !== '-' && roomC.toUpperCase() !== 'TBC' && roomC.toUpperCase() !== 'ROOM TBC') ? roomC : '',
            D: (roomD && roomD !== '-' && roomD.toUpperCase() !== 'TBC' && roomD.toUpperCase() !== 'ROOM TBC') ? roomD : ''
          }
        });
      }
    } else if (currentSection.startsWith('GROUP ') && currentSection.endsWith(' STUDENTS')) {
      const grpLetter = currentSection.replace('GROUP ', '').replace(' STUDENTS', '').trim();
      if (['A', 'B', 'C', 'D'].includes(grpLetter)) {
        const cleanName = line.replace(/^\d+[\.\)\-]\s*/, '').trim();
        if (cleanName) {
          config.students[grpLetter].push(cleanName);
        }
      }
    }
  }

  return config;
}

// 2. Parse a 2-hour slot string (e.g. "Wednesday 13h15 - 15h15") into 4 x 30-min intervals
function computeFour30MinSlots(slotStr) {
  const timeMatch = (slotStr || '').match(/(\d{1,2})[h:](\d{2})\s*[-–]\s*(\d{1,2})[h:](\d{2})/);
  let startTotalMins = 13 * 60 + 15; // default 13h15
  if (timeMatch) {
    startTotalMins = parseInt(timeMatch[1], 10) * 60 + parseInt(timeMatch[2], 10);
  }
  const fmt = (mins) => {
    const h = String(Math.floor(mins / 60)).padStart(2, '0');
    const m = String(mins % 60).padStart(2, '0');
    return `${h}h${m}`;
  };
  return [0, 1, 2, 3].map(i => `${fmt(startTotalMins + i * 30)} – ${fmt(startTotalMins + (i + 1) * 30)}`);
}

// 3. Compute Pair/Trio description badge for a group of size N across 4 slots
function getPairTrioSummary(count) {
  if (count <= 0) return '0 Students';
  if (count === 9) return '3 Teams of 3';
  if (count === 11) return '2 Teams of 4 + 1 Team of 3';
  if (count === 10) return '1 Team of 4 + 2 Teams of 3';
  if (count === 12) return '3 Teams of 4';
  if (count === 6) return '3 Pairs';
  if (count === 7) return '2 Pairs + 1 Trio';
  if (count === 8) return '4 Pairs';
  const trios = Math.max(0, Math.min(4, count - 8));
  const pairs = Math.max(0, 4 - trios);
  if (pairs > 0 && trios > 0) {
    return `${pairs} Pair${pairs > 1 ? 's' : ''} + ${trios} Trio${trios > 1 ? 's' : ''}`;
  } else if (trios === 0) {
    return `${pairs} Pairs`;
  } else {
    return `${trios} Trios`;
  }
}

// 4. Generate rotating Pair/Trio slots for FE1, FE2, FE3 for a group of student IDs
function generateGroupFeSlots(studentIds, fourTimeStrings, feNumber, groupIndex) {
  const n = studentIds.length;
  if (n === 0) return [];

  // FE1 Flipped Lesson: 3 student teams (3 to 4 students per team) + Slot 4 Whole-Class Feedback
  if (feNumber === 1) {
    let team1 = [];
    let team2 = [];
    let team3 = [];

    if (n === 11) {
      // Group A (11): Team 1 (4), Team 2 (4), Team 3 (3)
      team1 = [studentIds[0], studentIds[1], studentIds[2], studentIds[3]];
      team2 = [studentIds[4], studentIds[5], studentIds[6], studentIds[7]];
      team3 = [studentIds[8], studentIds[9], studentIds[10]];
    } else if (n === 9) {
      // Groups B & C (9): 3 Teams of 3
      team1 = [studentIds[0], studentIds[1], studentIds[2]];
      team2 = [studentIds[3], studentIds[4], studentIds[5]];
      team3 = [studentIds[6], studentIds[7], studentIds[8]];
    } else if (n === 10) {
      team1 = [studentIds[0], studentIds[1], studentIds[2], studentIds[3]];
      team2 = [studentIds[4], studentIds[5], studentIds[6]];
      team3 = [studentIds[7], studentIds[8], studentIds[9]];
    } else if (n === 12) {
      team1 = [studentIds[0], studentIds[1], studentIds[2], studentIds[3]];
      team2 = [studentIds[4], studentIds[5], studentIds[6], studentIds[7]];
      team3 = [studentIds[8], studentIds[9], studentIds[10], studentIds[11]];
    } else {
      const q = Math.floor(n / 3);
      const rem = n % 3;
      const s1 = q + (rem > 0 ? 1 : 0);
      const s2 = q + (rem > 1 ? 1 : 0);
      team1 = studentIds.slice(0, s1);
      team2 = studentIds.slice(s1, s1 + s2);
      team3 = studentIds.slice(s1 + s2);
    }

    return [
      {
        num: 1,
        time: fourTimeStrings[0],
        type: team1.length >= 4 ? 'team' : 'trio',
        students: team1
      },
      {
        num: 2,
        time: fourTimeStrings[1],
        type: team2.length >= 4 ? 'team' : 'trio',
        students: team2
      },
      {
        num: 3,
        time: fourTimeStrings[2],
        type: team3.length >= 4 ? 'team' : 'trio',
        students: team3
      },
      {
        num: 4,
        time: fourTimeStrings[3],
        type: 'feedback',
        students: ['Whole-Class Feedback & Teacher Debrief']
      }
    ];
  }

  // Pre-verified fair rotation permutations for 6, 7, 8, 9, 10, 11, 12 students
  // Guarantees 100% unique students per FE, diverse peer pairings across FE1/FE2/FE3,
  // and early/late timeslot rotation.
  const idx = (i) => studentIds[(i - 1) % n];
  const shift = (feNumber + groupIndex - 1) % 3 + 1;

  const ALL_MATRICES = {
    12: {
      // 4 Trios = 12 students across 4 slots
      1: [[idx(1), idx(2), idx(3)], [idx(4), idx(5), idx(6)], [idx(7), idx(8), idx(9)], [idx(10), idx(11), idx(12)]],
      2: [[idx(10), idx(4), idx(7)], [idx(11), idx(1), idx(8)], [idx(12), idx(2), idx(5)], [idx(3), idx(6), idx(9)]],
      3: [[idx(8), idx(12), idx(4)], [idx(9), idx(10), idx(2)], [idx(5), idx(11), idx(3)], [idx(1), idx(6), idx(7)]]
    },
    11: {
      // 1 Pair + 3 Trios = 11 students across 4 slots
      1: [[idx(1), idx(2)], [idx(3), idx(4), idx(5)], [idx(6), idx(7), idx(8)], [idx(9), idx(10), idx(11)]],
      2: [[idx(9), idx(3), idx(6)], [idx(10), idx(4)], [idx(11), idx(1), idx(7)], [idx(2), idx(5), idx(8)]],
      3: [[idx(7), idx(11), idx(4)], [idx(8), idx(9), idx(1)], [idx(5), idx(10)], [idx(2), idx(3), idx(6)]]
    },
    10: {
      // 2 Pairs + 2 Trios = 10 students across 4 slots
      1: [[idx(1), idx(3)], [idx(2), idx(5), idx(8)], [idx(4), idx(6)], [idx(7), idx(9), idx(10)]],
      2: [[idx(9), idx(2), idx(6)], [idx(10), idx(4)], [idx(7), idx(3), idx(5)], [idx(1), idx(8)]],
      3: [[idx(8), idx(6)], [idx(1), idx(10), idx(7)], [idx(2), idx(9)], [idx(3), idx(4), idx(5)]]
    },
    9: {
      // 3 Pairs + 1 Trio = 9 students across 4 slots
      1: [[idx(1), idx(4)], [idx(2), idx(6)], [idx(3), idx(7)], [idx(5), idx(8), idx(9)]],
      2: [[idx(8), idx(2)], [idx(9), idx(3), idx(1)], [idx(5), idx(7)], [idx(4), idx(6)]],
      3: [[idx(7), idx(9)], [idx(5), idx(1)], [idx(6), idx(8), idx(4)], [idx(2), idx(3)]]
    },
    8: {
      // 4 Pairs = 8 students across 4 slots
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6)], [idx(7), idx(8)]],
      2: [[idx(7), idx(3)], [idx(8), idx(5)], [idx(1), idx(6)], [idx(2), idx(4)]],
      3: [[idx(5), idx(4)], [idx(6), idx(7)], [idx(8), idx(1)], [idx(3), idx(2)]]
    },
    7: {
      // 2 Pairs + 1 Trio = 7 students across 3 active slots + 1 buffer slot
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6), idx(7)], []],
      2: [[idx(6), idx(3)], [idx(7), idx(1), idx(4)], [idx(2), idx(5)], []],
      3: [[idx(5), idx(7)], [idx(4), idx(6)], [idx(1), idx(3), idx(2)], []]
    },
    6: {
      // 3 Pairs = 6 students across 3 active slots + 1 buffer slot
      1: [[idx(1), idx(2)], [idx(3), idx(4)], [idx(5), idx(6)], []],
      2: [[idx(5), idx(3)], [idx(6), idx(1)], [idx(2), idx(4)], []],
      3: [[idx(4), idx(6)], [idx(2), idx(5)], [idx(1), idx(3)], []]
    }
  };

  if (ALL_MATRICES[n]) {
    const chosen = ALL_MATRICES[n][shift] || ALL_MATRICES[n][1];
    return chosen.map((stuArr, sIdx) => ({
      num: sIdx + 1,
      time: fourTimeStrings[sIdx],
      type: stuArr.length === 0 ? 'buffer' : (stuArr.length >= 3 ? 'trio' : 'pair'),
      students: stuArr
    }));
  }

  // Safe permutation fallback for any other group size (guarantees zero duplicates)
  const rotated = [...studentIds];
  if (shift === 2) {
    // Interleave halves and reverse
    const mid = Math.ceil(n / 2);
    const left = rotated.slice(0, mid);
    const right = rotated.slice(mid);
    rotated.length = 0;
    for (let i = 0; i < mid; i++) {
      if (right[i]) rotated.push(right[i]);
      if (left[i]) rotated.push(left[i]);
    }
  } else if (shift === 3) {
    rotated.reverse();
  }
  const buckets = [[], [], [], []];
  rotated.forEach((id, i) => {
    buckets[i % 4].push(id);
  });

  return buckets.map((stuArr, sIdx) => ({
    num: sIdx + 1,
    time: fourTimeStrings[sIdx],
    type: stuArr.length === 0 ? 'buffer' : (stuArr.length >= 3 ? 'trio' : 'pair'),
    students: stuArr
  }));
}

function run() {
  const sourcePath = fs.existsSync(privateFormPath) ? privateFormPath : exampleFormPath;
  console.log(`\n📋 Reading Promotion Setup Form: ${path.basename(sourcePath)}...`);
  const rawForm = fs.readFileSync(sourcePath, 'utf8');
  const cfg = parsePromoForm(rawForm);

  const activeGroupLetters = ['A', 'B', 'C', 'D'].slice(0, cfg.numGroups);
  const computedTotal = activeGroupLetters.reduce((sum, g) => sum + (cfg.groupCounts[g] || 0), 0);
  if (computedTotal > 0) {
    cfg.totalStudents = computedTotal;
  }

  console.log(`  ✓ Promotion: ${cfg.promotion} • Semester ${cfg.semester} (${cfg.academicYear})`);
  console.log(`  ✓ Groups (${cfg.numGroups}): ${activeGroupLetters.map(g => `Group ${g} (${cfg.groupCounts[g]})`).join(', ')} = ${cfg.totalStudents} Students`);

  // Build anonymous student IDs and private mapping
  const studentPrivateMap = {
    _comment: `Auto-generated from PROMO_SETUP.private.md for ${cfg.promotion} (Semester ${cfg.semester}). Do not commit to Git.`,
    _teachers: {}
  };
  const studentExampleMap = {
    _comment: "Example template for students.private.json. Copy this file to students.private.json and enter real student names."
  };

  const groupStudentIds = {};
  activeGroupLetters.forEach((g, gIdx) => {
    const count = cfg.groupCounts[g] || 0;
    const names = cfg.students[g] || [];
    if (names.length > 0 && names.length !== count) {
      console.warn(`  ⚠️ Notice: Group ${g} count is ${count}, but ${names.length} student lines were found in [GROUP ${g} STUDENTS]. Padding/truncating to ${count}.`);
    }
    groupStudentIds[g] = [];
    for (let i = 1; i <= count; i++) {
      const id = `GRP${g}${String(i).padStart(3, '0')}`;
      groupStudentIds[g].push(id);
      const providedName = names[i - 1] || 'LASTNAME Firstname';
      studentPrivateMap[id] = providedName;
      studentExampleMap[id] = 'LASTNAME Firstname';
    }

    // Teacher privacy mapping: Git always keeps "Teacher X (TBC)" while private map stores real teacher name if provided
    const placeholderTeacher = `Teacher ${g} (TBC)`;
    const rawTeacher = (cfg.tracks.AT.teachers[g] || '').trim();
    if (rawTeacher && rawTeacher !== placeholderTeacher) {
      studentPrivateMap._teachers[placeholderTeacher] = rawTeacher;
    }
  });

  // Save students.private.json and students.private.example.json
  safeWriteFile(path.join(rootDir, 'students.private.json'), JSON.stringify(studentPrivateMap, null, 2) + '\n');
  safeWriteFile(path.join(rootDir, 'students.private.example.json'), JSON.stringify(studentExampleMap, null, 2) + '\n');
  console.log(`  ✓ Updated students.private.json & students.private.example.json (${cfg.totalStudents} student IDs).`);

  // Archive snapshot to /Users/philparris/Documents/moodle_backups/promo_configs/ if accessible
  try {
    const archiveDir = '/Users/philparris/Documents/moodle_backups/promo_configs';
    if (fs.existsSync('/Users/philparris/Documents/moodle_backups')) {
      fs.mkdirSync(archiveDir, { recursive: true });
      const safePromo = cfg.promotion.replace(/\s+/g, '');
      const archivePath = path.join(archiveDir, `${safePromo}_Semester_${cfg.semester}.private.md`);
      fs.writeFileSync(archivePath, rawForm, 'utf8');
      console.log(`  ✓ Archived configuration snapshot to: ${archivePath}`);
    }
  } catch (e) {
    // Non-fatal if outside sandbox
  }

  // Build structured ADMIN_PROMO_CONFIG, ADMIN_CALENDAR_SCHEDULES, and ADMIN_ROTA_SCHEDULES
  const groupsConfig = activeGroupLetters.map((g, idx) => {
    const count = cfg.groupCounts[g];
    const headerColors = ['#1e293b', '#c2410c', '#334155', '#0f766e'];
    const dotColors = ['bg-emerald-400', 'bg-amber-400', 'bg-sky-400', 'bg-purple-400'];
    return {
      key: `group${g}`,
      letter: g,
      name: `Group ${g}`,
      count,
      pairTrioBadge: getPairTrioSummary(count),
      teacherPlaceholder: `Teacher ${g} (TBC)`,
      slot: cfg.tracks.AT.slots[g] || cfg.tracks.AT.scheduleSummary,
      headerBg: headerColors[idx] || '#1e293b',
      dotClass: dotColors[idx] || 'bg-emerald-400',
      students: groupStudentIds[g]
    };
  });

  // Group weeks into Module 1 and Module 2 for ADMIN_CALENDAR_SCHEDULES
  const mod1Weeks = [];
  const mod2Weeks = [];
  let currentModTarget = 1;
  const feWeeksList = [];

  for (const w of cfg.tracks.AT.weeks) {
    if (w.isHoliday) {
      if (currentModTarget === 1 && mod1Weeks.some(x => x.isFe)) {
        mod2Weeks.push(w);
        currentModTarget = 2;
      } else if (currentModTarget === 1) {
        mod1Weeks.push(w);
      } else {
        mod2Weeks.push(w);
      }
      continue;
    }
    currentModTarget = w.modNum || 1;
    if (w.isFe) {
      feWeeksList.push(w);
    }
    let sessSub = w.isFe ? `${w.date} • 30-min evaluation slots (${groupsConfig.map(g => g.teacherPlaceholder).join(' / ')})` : '';
    if (w.modNum === 2) {
      if (w.courseWeek === 'W12') {
        sessSub = `${w.date} • Individual 30-min oral test slots (Week 1 of 2)`;
      } else if (w.courseWeek === 'W13') {
        sessSub = `${w.date} • Individual 30-min oral test slots (Week 2 of 2)`;
      } else if (w.courseWeek === 'W15') {
        sessSub = `${w.date} • Official DSAC MTF Examination also administered in Week 11`;
      }
    }
    const sessionItem = {
      courseWeek: w.courseWeek,
      week: w.week,
      date: w.date,
      title: w.title,
      subtitle: sessSub,
      tag: w.tag,
      isFe: w.isFe,
      rooms: w.rooms
    };
    if (currentModTarget === 1) mod1Weeks.push(sessionItem);
    else mod2Weeks.push(sessionItem);
  }

  const getWeeksRangeLabel = (arr) => {
    const valid = arr.filter(x => !x.isHoliday && x.week);
    if (valid.length === 0) return 'TBC';
    return `${valid[0].week} – ${valid[valid.length - 1].week}`;
  };

  const calendarSchedules = {
    aas: {
      code: cfg.tracks.AT.code,
      name: cfg.tracks.AT.name,
      totalWeeks: cfg.tracks.AT.totalWeeks,
      dayTime: cfg.tracks.AT.scheduleSummary,
      faculty: groupsConfig.map(g => `${g.teacherPlaceholder} (Group ${g.letter})`).join(' • '),
      modules: [
        {
          num: 1,
          title: 'Module 1: EASA Docs, Safety & Audits (7 Sessions)',
          weeks: getWeeksRangeLabel(mod1Weeks),
          headerBg: '#1e293b',
          sessions: mod1Weeks
        },
        {
          num: 2,
          title: 'Module 2: MTF ICAO Level 4 Test Preparation (8 Sessions)',
          weeks: getWeeksRangeLabel(mod2Weeks),
          headerBg: '#1b382b',
          sessions: mod2Weeks
        }
      ]
    }
  };

  // Build FE1 Rota for Module 1 (Session 7 in Week 02)
  const fe1WeekInfo = feWeeksList[0] || {
    week: 'W02',
    date: 'Fri 15 Jan',
    rooms: { A: '', B: '', C: '', D: '' }
  };
  const fe1Entry = {
    num: 1,
    title: 'FE1 — EASA Regulatory Extract & Class Activity Evaluation',
    week: fe1WeekInfo.week,
    dateStr: fe1WeekInfo.date,
    groups: {}
  };
  groupsConfig.forEach((g, gIdx) => {
    const slotTimes = computeFour30MinSlots(g.slot);
    fe1Entry.groups[g.letter] = {
      teacher: g.teacherPlaceholder,
      slotSummary: g.slot,
      room: (fe1WeekInfo.rooms && fe1WeekInfo.rooms[g.letter]) || '',
      slots: generateGroupFeSlots(g.students, slotTimes, 1, gIdx + 1)
    };
  });

  const fesObj = { 1: fe1Entry };

  // Build Module 2 MTF Practice Test Oral Mock Trials (Weeks 8 & 9)
  const mtfPracticeObj = {
    title: 'MTF Practice Test — 30-min Individual Oral Mock Trials',
    weeks: 'W08 & W09',
    dates: 'Fri 26 Feb & Fri 05 Mar',
    timeSummary: 'Friday 13h15 – 15h15 (4 slots of 30 min)',
    slotTimes: ['13h15 – 13h45', '13h45 – 14h15', '14h15 – 14h45', '14h45 – 15h15'],
    primary: {
      A: {
        teacher: groupsConfig[0] ? groupsConfig[0].teacherPlaceholder : 'Teacher A (TBC)',
        groupName: 'Group A',
        slotSummary: groupsConfig[0] ? groupsConfig[0].slot : 'Friday 13h15 - 15h15',
        room: '',
        week8: [groupStudentIds.A[0], groupStudentIds.A[1], groupStudentIds.A[2], groupStudentIds.A[3]],
        week9: [groupStudentIds.A[4], groupStudentIds.A[5], groupStudentIds.A[6], groupStudentIds.A[7]]
      },
      B: {
        teacher: groupsConfig[1] ? groupsConfig[1].teacherPlaceholder : 'Teacher B (TBC)',
        groupName: 'Group B',
        slotSummary: groupsConfig[1] ? groupsConfig[1].slot : 'Friday 13h15 - 15h15',
        room: '',
        week8: [groupStudentIds.B[0], groupStudentIds.B[1], groupStudentIds.B[2], groupStudentIds.B[3]],
        week9: [groupStudentIds.B[4], groupStudentIds.B[5], groupStudentIds.B[6], groupStudentIds.B[7]]
      },
      C: {
        teacher: groupsConfig[2] ? groupsConfig[2].teacherPlaceholder : 'Teacher C (TBC)',
        groupName: 'Group C',
        slotSummary: groupsConfig[2] ? groupsConfig[2].slot : 'Friday 13h15 - 15h15',
        room: '',
        week8: [groupStudentIds.C[0], groupStudentIds.C[1], groupStudentIds.C[2], groupStudentIds.C[3]],
        week9: [groupStudentIds.C[4], groupStudentIds.C[5], groupStudentIds.C[6], groupStudentIds.C[7]]
      }
    },
    overflow: {
      teacher4: {
        teacher: 'Teacher 4 (TBC)',
        panel: 'Overflow Panel 1',
        week: 'Week 8 (Fri 26 Feb)',
        room: '',
        slots: [
          { num: 1, time: '13h15 – 13h45', student: groupStudentIds.A[8] || 'GRPA009', group: 'Group A' },
          { num: 2, time: '13h45 – 14h15', student: groupStudentIds.A[9] || 'GRPA010', group: 'Group A' },
          { num: 3, time: '14h15 – 14h45', student: groupStudentIds.A[10] || 'GRPA011', group: 'Group A' },
          { num: 4, time: '14h45 – 15h15', student: 'Buffer / Debrief', group: '—' }
        ]
      },
      teacher5: {
        teacher: 'Teacher 5 (TBC)',
        panel: 'Overflow Panel 2',
        week: 'Week 9 (Fri 05 Mar)',
        room: '',
        slots: [
          { num: 1, time: '13h15 – 13h45', student: groupStudentIds.B[8] || 'GRPB009', group: 'Group B' },
          { num: 2, time: '13h45 – 14h15', student: groupStudentIds.C[8] || 'GRPC009', group: 'Group C' },
          { num: 3, time: '14h15 – 14h45', student: 'Buffer / Debrief', group: '—' },
          { num: 4, time: '14h45 – 15h15', student: 'Buffer / Debrief', group: '—' }
        ]
      }
    }
  };

  const rotaSchedules = {
    aas: {
      code: cfg.tracks.AT.code,
      name: cfg.tracks.AT.name,
      dayTime: cfg.tracks.AT.scheduleSummary,
      feKeys: [1],
      fes: fesObj,
      mtfPractice: mtfPracticeObj
    }
  };

  const promoDataBlock = {
    promotion: cfg.promotion,
    semester: cfg.semester,
    academicYear: cfg.academicYear,
    totalStudents: cfg.totalStudents,
    numGroups: cfg.numGroups,
    trackCode: cfg.tracks.AT.code,
    trackName: cfg.tracks.AT.name,
    totalWeeks: cfg.tracks.AT.totalWeeks,
    scheduleSummary: cfg.tracks.AT.scheduleSummary,
    groups: groupsConfig
  };

  const replacementBlock = `/* === PROMO_DATA_START === */
    const ADMIN_PROMO_CONFIG = ${JSON.stringify(promoDataBlock, null, 2)};
    const ADMIN_CALENDAR_SCHEDULES = ${JSON.stringify(calendarSchedules, null, 2)};
    const ADMIN_ROTA_SCHEDULES = ${JSON.stringify(rotaSchedules, null, 2)};
    /* === PROMO_DATA_END === */`;

  // Update src/js/11-admin-hub.js
  const adminHubPath = path.join(rootDir, 'src/js/11-admin-hub.js');
  if (fs.existsSync(adminHubPath)) {
    let hubContent = fs.readFileSync(adminHubPath, 'utf8');
    if (hubContent.includes('/* === PROMO_DATA_START === */') && hubContent.includes('/* === PROMO_DATA_END === */')) {
      hubContent = hubContent.replace(/\/\* === PROMO_DATA_START === \*\/[\s\S]*?\/\* === PROMO_DATA_END === \*\//, replacementBlock);
      safeWriteFile(adminHubPath, hubContent);
      console.log('  ✓ Updated ADMIN_PROMO_CONFIG block in src/js/11-admin-hub.js');
    }
  }

  // Update admin.html
  const adminHtmlPath = path.join(rootDir, 'admin.html');
  if (fs.existsSync(adminHtmlPath)) {
    let adminHtml = fs.readFileSync(adminHtmlPath, 'utf8');
    if (adminHtml.includes('/* === PROMO_DATA_START === */') && adminHtml.includes('/* === PROMO_DATA_END === */')) {
      adminHtml = adminHtml.replace(/\/\* === PROMO_DATA_START === \*\/[\s\S]*?\/\* === PROMO_DATA_END === \*\//, replacementBlock);
    }
    // Also update static student group tables in admin.html so package-moodle.js / package-iso.js can inject >GRPA001<
    if (adminHtml.includes('<!-- === PROMO_GROUPS_STATIC_START === -->') && adminHtml.includes('<!-- === PROMO_GROUPS_STATIC_END === -->')) {
      const staticGroupsHtml = buildStaticAdminGroupsHtml(promoDataBlock);
      adminHtml = adminHtml.replace(/<!-- === PROMO_GROUPS_STATIC_START === -->[\s\S]*?<!-- === PROMO_GROUPS_STATIC_END === -->/, staticGroupsHtml);
    }
    safeWriteFile(adminHtmlPath, adminHtml);
    console.log('  ✓ Updated ADMIN_PROMO_CONFIG & group rosters in admin.html');
  }

  // Update portfolio.html student selector dropdown
  const portfolioPath = path.join(rootDir, 'portfolio.html');
  if (fs.existsSync(portfolioPath)) {
    let portHtml = fs.readFileSync(portfolioPath, 'utf8');
    const optgroupsHtml = groupsConfig.map(g => {
      const opts = g.students.map(sId => `              <option value="${sId}">${sId}</option>`).join('\n');
      return `            <optgroup label="Official ${cfg.promotion} Promotion — Group ${g.letter}">\n${opts}\n            </optgroup>`;
    }).join('\n');
    const selectRegex = /(<select\s+id="studentSelect"[^>]*>\s*<option value="">[^<]*<\/option>\s*)([\s\S]*?)(\s*<\/select>)/;
    if (selectRegex.test(portHtml)) {
      portHtml = portHtml.replace(selectRegex, `$1\n${optgroupsHtml}$3`);
      safeWriteFile(portfolioPath, portHtml);
      console.log('  ✓ Updated student <optgroup> dropdowns in portfolio.html');
    }
  }

  // Update HUD callsign in src/template.html
  const tplPath = path.join(rootDir, 'src/template.html');
  if (fs.existsSync(tplPath)) {
    let tpl = fs.readFileSync(tplPath, 'utf8');
    tpl = tpl.replace(/(Callsign:\s*<strong[^>]*>)[^<]+(<\/strong>)/, `$1${cfg.promotion}$2`);
    safeWriteFile(tplPath, tpl);
    console.log(`  ✓ Updated HUD Callsign badge in src/template.html (${cfg.promotion})`);
  }

  console.log('\n✅ Promo Admin configuration updated successfully!');
}

function buildStaticAdminGroupsHtml(promo) {
  const groupSentence = promo.groups.map(g => `<strong>Group ${g.letter} (${g.count} students)</strong>`).join(', ').replace(/, ([^,]*)$/, ', and $1');
  const gridColsClass = promo.numGroups === 4 ? 'lg:grid-cols-4' : (promo.numGroups === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2');
  const teacherGridCols = promo.numGroups === 4 ? 'md:grid-cols-4' : (promo.numGroups === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2');

  return `<!-- === PROMO_GROUPS_STATIC_START === -->
        <!-- Overview Card -->
        <div class="bg-gradient-to-r from-slate-50 to-orange-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
          <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white bg-slate-800">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Promotion: ${promo.promotion} • ${promo.totalStudents} Students
            </span>
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border border-orange-200 bg-orange-50 text-orange-700">
              Official Rosters &amp; Faculty Assignments
            </span>
          </div>
          <h2 class="text-base sm:text-lg font-bold text-slate-800">
            Class Groups, Assigned Teachers &amp; Course Timetables
          </h2>
          <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Official promotion structure for the academic semester. The ${promo.promotion} promotion is divided into ${groupSentence} for all ${promo.trackName} (${promo.trackCode}) classroom sessions (${promo.totalWeeks} weeks). For oral Formative Evaluations, students follow dynamic rotating pairings and trios across 4 slots of 30 minutes (2 hours total).
          </p>
        </div>

        <!-- Teachers Grid -->
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
            <h3 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
              Teachers &amp; Weekly Schedules
            </h3>
          </div>

          <!-- AT ${promo.trackCode} -->
          <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-2xs">
            <div class="flex flex-wrap items-center justify-between gap-2 pb-2.5 mb-3 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="px-2 py-0.5 rounded text-white font-mono text-[11px] font-black bg-orange-600">${promo.trackCode}</span>
                <span class="text-xs font-bold text-slate-800">${promo.trackName}</span>
              </div>
              <span class="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">${promo.numGroups} Groups • ${promo.totalWeeks} Weeks</span>
            </div>
            <div class="grid grid-cols-1 ${teacherGridCols} gap-3 text-xs">
              ${promo.groups.map(g => `
              <div class="flex flex-col justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-100 gap-1">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-slate-700">Group ${g.letter} Teacher</span>
                  <span class="font-bold text-slate-900 bg-white px-2.5 py-1 rounded shadow-2xs border border-slate-200">${g.teacherPlaceholder}</span>
                </div>
                <div class="text-[11px] text-slate-500 font-medium flex items-center justify-between pt-1 border-t border-slate-200/60">
                  <span>Weekly Slot:</span>
                  <span class="font-mono font-bold text-slate-700">${g.slot}</span>
                </div>
              </div>`).join('')}
            </div>
          </div>

          <!-- Coordination Note -->
          <div class="p-3 bg-white border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
            <span class="flex items-center gap-2">
              <svg class="w-4 h-4 text-slate-500 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              Course Coordination &amp; Administration: <strong>Phil PARRIS (LH/LAN)</strong> • <span class="font-mono text-slate-500 font-bold">v1.0.0</span>
            </span>
            <span class="text-slate-400 text-[11px]">Academic Year ${promo.academicYear}</span>
          </div>

          <!-- Pedagogical Transparency & AI Disclosure Notice -->
          <div class="p-3.5 bg-slate-50 border border-slate-200/90 rounded-xl flex items-start gap-2.5 text-xs text-slate-600 shadow-2xs">
            <svg class="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <div class="space-y-0.5">
              <span class="font-bold text-slate-800 text-[11px] uppercase tracking-wider block">Pedagogical Transparency Notice</span>
              <p class="text-[11px] text-slate-600 leading-relaxed">
                Selected exercises, case examples, and language drills used throughout this course have been developed with the aid of generative artificial intelligence. All exercises have been curated, verified, and finalized by the course instructor.
              </p>
            </div>
          </div>
        </div>

        <!-- Dynamic Rotation Callout Banner -->
        <div class="p-3.5 bg-amber-50/80 border border-amber-200 rounded-xl flex items-start gap-3 text-xs text-amber-950 shadow-2xs">
          <svg class="w-4 h-4 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div class="space-y-1">
            <span class="font-bold block">Dynamic Formative Evaluation (FE) Rotations:</span>
            <p class="text-[11px] text-amber-900 leading-relaxed">
              To ensure variety in group work and timeslot fairness, groups do <strong>not</strong> have fixed pairs or trios. Each group rotates across 4 slots of 30 minutes (2 hours total). Every student experiences different peers and rotates between early and late slots across each Formative Evaluation. Switch to the <strong>FE Tutorial Rotas</strong> tab to view your complete evaluation schedule.
            </p>
          </div>
        </div>

        <!-- Student Rosters -->
        <div class="space-y-3">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
              <h3 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                Official Student Group Lists
              </h3>
            </div>
            <span class="text-[11px] text-slate-400">${promo.totalStudents} Total Students</span>
          </div>

          <div class="grid grid-cols-1 ${gridColsClass} gap-4">
            ${promo.groups.map(g => `
            <!-- Group ${g.letter} Table -->
            <div class="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-2xs">
              <div class="p-3 text-white flex items-center justify-between" style="background-color: ${g.headerBg};">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full ${g.dotClass}"></span>
                  <h4 class="text-xs font-bold uppercase tracking-wider">Group ${g.letter} (${g.count} Students)</h4>
                </div>
                <span class="text-[10px] bg-white/20 px-2 py-0.5 rounded font-mono font-bold">${g.pairTrioBadge}</span>
              </div>
              <div class="overflow-x-auto">
                <table class="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr class="bg-slate-50 text-slate-500 border-b border-slate-200 text-[11px]">
                      <th class="py-2 px-3 w-10 font-bold">#</th>
                      <th class="py-2 px-3 font-bold">Student Identifier</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-100 text-slate-700">
                    ${g.students.map((sId, idx) => `
                    <tr class="hover:bg-slate-50/60"><td class="py-2 px-3 font-mono text-slate-400">${String(idx + 1).padStart(2, '0')}</td><td class="py-2 px-3 font-mono font-bold text-slate-800">${sId}</td></tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </div>`).join('')}
          </div>
        </div>
        <!-- === PROMO_GROUPS_STATIC_END === -->`;
}

if (require.main === module) {
  run();
}

module.exports = run;
