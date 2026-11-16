    const createModulePages = (modNumber) => {
      const feSessionNum = modNumber === 1 ? 7 : 8;
      const aasSessionTitles = {
        1: {
          s1: "Session 1 - EASA Rules & Modal Precision",
          s2: "Session 2 - Safety Alerts & Ramp Briefings",
          s3: "Session 3 - Special Requests & Runway Safety Cases",
          s4: "Session 4 - Ground Inspection & Audit Findings",
          s5: "Session 5 - Multi-Source Incident Investigation & Root Cause Analysis",
          s6: "Session 6 - The Corrective Action Plan & CAP Review"
        },
        2: {
          s1: "Session 1 - Introduction to the MTF ICAO Level Test",
          s2: "Session 2 - The MTF Picture Exercise & Spoken Description Practice",
          s3: "Session 3 - The MTF Listening Section & Audio Comprehension Practice",
          s4: "Session 4 - The MTF Text Exercise & Technical Summary Practice",
          s5: "Session 5 - MTF Practice Test (Part 1 - Individual 30-Min Oral Trials)",
          s6: "Session 6 - MTF Practice Test (Part 2 - Individual 30-Min Oral Trials)",
          s7: "Session 7 - MTF Comprehensive Revision & Error Analysis",
          s8: "Session 8 - MTF Final Revision & Test Readiness"
        }
      };

      const titles = aasSessionTitles[modNumber] || aasSessionTitles[1];

      const moduleImages = {
        1: {
          card1: "images/s3_m1_session1_easa.jpg",
          card2: "images/s3_m1_session2_audit.jpg",
          card3: "images/s3_m1_session3_derogation.jpg",
          card4: "images/s3_m1_session4_aerodrome.jpg",
          card5: "images/s3_m1_session5_investigation.jpg",
          card6: "images/s3_m1_session6_cap.jpg",
          fe: "images/fe_progress_check.jpg",
          ddrs: "images/ddrs_aas_mod1.jpg",
          admin: "images/course_admin.jpg"
        },
        2: {
          card1: "images/aas_m2card1.jpg",
          card2: "images/aas_m2card2.jpg",
          card3: "images/aas_m2card3.jpg",
          card4: "images/aas_m2card4.jpg",
          fe: "images/fe_progress_check.jpg",
          ddrs: "images/ddrs_aas_mod2.jpg",
          admin: "images/course_admin.jpg"
        },
        3: {
          card1: "images/aas_m3card1.jpg",
          card2: "images/aas_m3card2.jpg",
          card3: "images/aas_m3card3.jpg",
          card4: "images/aas_m3card4.jpg",
          fe: "images/fe_progress_check.jpg",
          ddrs: "images/ddrs_aas_mod3.jpg",
          admin: "images/course_admin.jpg"
        }
      };

      const images = moduleImages[modNumber] || moduleImages[1];

      const formativeEvaluationNotice = `Everything we practice in class helps you build practical confidence for your evaluation in Session ${feSessionNum}. Remember that your teacher will adapt the pace and omit parts as needed—active speaking comes first. If you need help with your English at any time, contact: <a href="mailto:philip.parris@enac.fr" class="underline font-bold text-amber-950">philip.parris@enac.fr</a>.`;

      const aasDescriptions = {
        1: {
          s1: `Welcome to Session 1! In this class, we learn how to read official European airport regulations without getting lost in legal text.<br><br><em>Document skill:</em> Spotting mandatory rules (shall, must) vs. advisory guidance (should, may), discussing airport crane safety, and practicing the Obstacle Clarification role-play.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! Today we examine an official EASA Safety Information Bulletin on ramp collision risks and vehicle speed limits.<br><br><em>Document skill:</em> Scanning a dense safety bulletin quickly, finding the core danger, and delivering a punchy 90-second spoken ramp briefing.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this lesson, we explore an authentic EASA runway safety case and temporary exemption request.<br><br><em>Document skill:</em> Understanding conditional phrases (provided that, in lieu of) to explain safety solutions, reviewing temporary runway works, and giving a spoken briefing to airline pilots.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! Today we work with an authentic EASA airfield audit report to practice reporting ground safety non-compliances.<br><br><em>Document skill:</em> Sorting findings into immediate hazards (Level 1) vs. minor issues (Level 2), making past deductions (must have, could have), and giving a 2-minute briefing to the Airport Director.<br><br>${formativeEvaluationNotice}`,
          s5: `Welcome to Session 5! In this class, we act as safety investigators examining an authentic EASA and BEA technical incident dossier.<br><br><em>Document skill:</em> Cross-referencing three different evidence sources (air traffic radio transcripts, weather reports, and driver statements) to discover root causes, and delivering a 2-minute team debrief.<br><br>${formativeEvaluationNotice}`,
          s6: `Welcome to Session 6! Today we work with official EASA Corrective Action Plan (CAP) documentation and prepare for Session 7.<br><br><em>Document skill:</em> Using formal commitment language (we undertake to, subject to approval) to agree on CAP deadlines, and collaborating in teams of up to 4 to design your Session 7 peer activity.<br><br>${formativeEvaluationNotice}`
        },
        2: {
          s1: `Welcome to Module 2! In this opening session, we introduce the official MTF ICAO English examination approved by the DSAC. We break down the test structure, examine the six ICAO Level 4 language criteria (pronunciation, grammatical structures, vocabulary, fluency, comprehension, and interactions), and practice self-introductions and initial spoken questions.<br><br><em>Subject overview:</em> MTF test structure overview, ICAO rating scale benchmarks, pronunciation clarity, and speaking confidence strategies.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! Today we focus on the MTF Picture Exercise. We develop practical spoken methods for describing complex aviation scenes, positioning elements clearly in space, identifying hazards, and explaining cause and effect under timed test conditions.<br><br><em>Subject overview:</em> Spatial description vocabulary, operational hazard identification, chronological sequence language, and individual timed speaking simulations.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we practice the MTF Listening Section. We listen to authentic air-ground communications, emergency transmissions, and non-routine radio calls, practicing note-taking and delivering immediate spoken summaries.<br><br><em>Subject overview:</em> Telemetry audio comprehension, standard phraseology vs. plain English in non-routine events, repetition strategies, and timed spoken question responses.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! Today we tackle the MTF Text Exercise. We practice scanning technical aviation safety bulletins and reports under strict time limits, isolating essential facts, and delivering a clear 2-minute spoken summary.<br><br><em>Subject overview:</em> Technical text analysis, rapid paraphrasing, structured oral synthesis, and answering examiner follow-up questions.<br><br>${formativeEvaluationNotice}`,
          s5: `Welcome to Session 5! Today is Part 1 of the MTF Individual Practice Test. Each student takes part in an individual 30-minute oral mock trial with their teacher under realistic exam conditions, covering picture description, audio comprehension, and technical text explanation.<br><br><em>Subject overview:</em> Individual 30-minute oral mock test trials (Week 1 of 2) with immediate examiner feedback, individual scoring against ICAO Level 4 descriptors, and personal action points.<br><br>${formativeEvaluationNotice}`,
          s6: `Welcome to Session 6! Today is Part 2 of the MTF Individual Practice Test. We complete individual 30-minute oral mock trials for remaining candidates under authentic test conditions with targeted feedback from your teacher.<br><br><em>Subject overview:</em> Individual 30-minute oral mock test trials (Week 2 of 2) with immediate examiner feedback, individual scoring against ICAO Level 4 descriptors, and personal action points.<br><br>${formativeEvaluationNotice}`,
          s7: `Welcome to Session 7! In this comprehensive revision session, we review common errors from the practice tests, tackle high-frequency pronunciation and grammar pitfalls, and strengthen conversational strategies.<br><br><em>Subject overview:</em> Practice test debrief and error analysis, fluency repair strategies, technical vocabulary consolidation, and peer speaking clinics.<br><br>${formativeEvaluationNotice}`,
          s8: `Welcome to Session 8! Today is our final MTF revision and test readiness session before the official exam. We conduct final speed-speaking drills, review exam-day best practices, and answer any remaining questions.<br><br><em>Subject overview:</em> Final MTF exam readiness, timed speaking warm-ups, confidence-building drills, and examination guidelines.<br><br><strong>Note: The official DSAC ICAO MTF Examination is also scheduled during Week 11.</strong>`
        }
      };

      const desc = aasDescriptions[modNumber] || aasDescriptions[1];

      const sessionCount = modNumber === 1 ? 6 : 8;
      const teachingPages = [];
      for (let s = 1; s <= sessionCount; s++) {
        let tagLabel = `Module ${modNumber} • Session ${s}`;
        if (modNumber === 1) {
          tagLabel = s <= 3 ? `Module 1 • EASA Docs • Session ${s}` : `Module 1 • Safety, Audits & FE • Session ${s}`;
        } else if (modNumber === 2) {
          if (s === 1) tagLabel = "Module 2 • MTF Intro • Session 1";
          else if (s === 2) tagLabel = "Module 2 • Picture Test • Session 2";
          else if (s === 3) tagLabel = "Module 2 • Listening Test • Session 3";
          else if (s === 4) tagLabel = "Module 2 • Text Exercise • Session 4";
          else if (s === 5) tagLabel = "Module 2 • Mock Test Part 1 • Session 5";
          else if (s === 6) tagLabel = "Module 2 • Mock Test Part 2 • Session 6";
          else if (s === 7) tagLabel = "Module 2 • Revision & Errors • Session 7";
          else if (s === 8) tagLabel = "Module 2 • Final Revision • Session 8";
        }
        teachingPages.push({
          tag: tagLabel,
          title: titles[`s${s}`] || titles.s4,
          description: desc[`s${s}`] || desc.s4,
          imageUrl: images[`card${s}`] || images.card4
        });
      }

      const pages = [
        ...teachingPages
      ];

      if (modNumber === 1) {
        pages.push({
          tag: `Module 1 • FE • Session 7`,
          title: `Session 7 - EASA Regulatory Extract & Class Activity Evaluation`,
          description: `Welcome to Session 7! In this Formative Evaluation, student teams of up to 4 take the floor to deliver an engaging 30-minute interactive session based on an official EASA documentation extract of their choice. Your team will deliver a comprehensive spoken breakdown in plain English, teach 3 to 5 new technical words, and lead creative reading and speaking exercises for classmates.<br><br><em>Subject overview:</em> Formative Evaluation 1 — EASA Regulatory Extract &amp; Class Activity: Regulatory breakdown, technical vocabulary teaching, creative classmate exercises, and final teacher feedback.<br><br>All work in this session contributes directly toward your Formative Evaluation.`,
          isFe: true,
          imageUrl: images.fe
        });
      }

      pages.push({
        tag: "GSEA 25A • Course Admin",
        title: "Course Admin",
        description: "Welcome to the GSEA 25A Course Administration Hub. Access your official class groups (Group A, Group B & Group C), teacher assignments, weekly schedules, and dynamic 30-minute evaluation rotas.<br><br><em>Subject overview:</em> Weekly classes for Technical English (AT • LV125E).<br><br>Consult your designated timeslots and arrive 5 minutes before your slot with your presentation supports and updated learning portfolio ready.",
        isAdmin: true,
        adminUrl: "admin.html",
        imageUrl: images.admin
      });

      pages.push({
        tag: "Technical English • Course Guidance",
        title: "Student Guide & Objectives",
        description: "Essential student guidance for Semester 3: how to navigate European aerodrome regulations, MTF exam preparation, continuous speaking progress, evaluation guidelines, portfolio logging, and official ENAC course objectives (English &amp; French).",
        isObjectives: true,
        imageUrl: "images/semester_objectives.jpg"
      });

      if (modNumber === 1) {
        pages.push({
          tag: "Technical English • Documentation Hub",
          title: "Module 1 Student Book & Document Library",
          description: "Welcome to the Module 1 Documentation Hub. Access the complete, all-in-one Module 1 Student Book or directly download individual session PDF worksheets and authentic EASA technical dossiers.<br><br><em>Subject overview:</em> Comprehensive 79-page student course book (complete with syllabus objectives, study guide, 7 session worksheets, authentic EASA regulation dossiers, and FE1 flipped lesson guidelines) plus 1-click downloads for every session file.<br><br>Download the full Student Book for offline study on tablet or laptop, or consult individual dossiers during classroom discussions.",
          isDocsHub: true,
          imageUrl: "images/ddrs_aas_mod1.jpg"
        });
      }

      return pages;
    };

    const AAS_MODULE_THEMES = {
      1: {
        primary: "#152438", // Deep Midnight Navy (Aerodrome Apron at Dusk)
        primaryDark: "#0d1724",
        primaryDarker: "#070c14",
        accent: "#d97706", // Runway Amber / Beacon Gold
        accentDark: "#b45309",
        accentDarker: "#92400e",
        highlight: "#fef3c7",
        worksheet: "#152438",
        worksheetDark: "#0d1724",
        activeMenuBg: "rgba(217, 119, 6, 0.12)",
        activeMenuText: "#d97706",
        activeMenuBorder: "#d97706"
      },
      2: {
        primary: "#182b42", // Stratosphere Blue (Flight Physics & Cruising)
        primaryDark: "#101f31",
        primaryDarker: "#0a1420",
        accent: "#0284c7", // Aero Horizon Cyan
        accentDark: "#0369a1",
        accentDarker: "#075985",
        highlight: "#e0f2fe",
        worksheet: "#182b42",
        worksheetDark: "#101f31",
        activeMenuBg: "rgba(2, 132, 199, 0.12)",
        activeMenuText: "#0284c7",
        activeMenuBorder: "#0284c7"
      }
    };

    const MODULE_THEMES = AAS_MODULE_THEMES;

    const PROGRAMS_CONFIG = {
      aas: {
        id: "aas",
        code: "AT",
        name: "Technical English",
        footerDesc: "GSEA Semester 3 Technical English (AT) • Phil PARRIS (LH/LAN) • v1.0.0",
        modules: [
          {
            id: 1,
            name: "Module 1",
            subtitle: "EASA Docs, Safety & Audits",
            supertitle: "GSEA AT SEMESTER 3 - MODULE 1: EASA DOCS, SAFETY & AUDITS",
            ...AAS_MODULE_THEMES[1],
            pages: createModulePages(1, 'aas')
          },
          {
            id: 2,
            name: "Module 2",
            subtitle: "MTF ICAO Level 4 Test Preparation",
            supertitle: "GSEA AT SEMESTER 3 - MODULE 2: MTF ICAO LEVEL 4 TEST PREPARATION",
            disabled: true,
            isMuted: true,
            ...AAS_MODULE_THEMES[2],
            pages: createModulePages(2, 'aas')
          }
        ]
      }
    };

    let currentProgram = 'aas';
    let modulesData = PROGRAMS_CONFIG[currentProgram].modules;
    let currentModuleIndex = 0;
    let currentIndex = 0;
