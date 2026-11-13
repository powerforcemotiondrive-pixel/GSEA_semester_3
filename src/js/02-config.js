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
          s1: "Session 1 - Aerodynamics & Flight Principles",
          s2: "Session 2 - Aircraft Anatomy: Structure & Systems",
          s3: "Session 3 - Commercial Aircraft & Airlines",
          s4: "Session 4 - Significant Aviation Accidents & Aircraft Types",
          s5: "Session 5 - Significant Aviation Accidents & Aircraft Types",
          s6: "Session 6 - Significant Aviation Accidents & Aircraft Types",
          s7: "Session 7 - Significant Aviation Accidents & Aircraft Types"
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
          s1: `Welcome to Module 2 on MTF! In this opening session, we explore the four fundamental forces of flight, aircraft control axes, and wing airflow dynamics while developing spoken fluency and cause-and-effect structures.<br><br><em>Subject overview:</em> Lift, weight, thrust, and drag in equilibrium; pitch, roll, and yaw control surfaces; angle of attack, boundary layer separation, and stall recovery procedures.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We examine the external airframe and internal layout of modern commercial aircraft, practicing accurate spatial descriptions, functional explanations, and exterior pre-flight walkaround defect reporting.<br><br><em>Subject overview:</em> Fuselage, empennage, leading-edge slats, trailing-edge flaps, spoilers, landing gear, radome, pitot-static probes, flight deck controls, cabin amenities, and walkaround inspection dialogues.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze commercial aircraft classifications, fleet economics, global aerospace manufacturers, and airline business models.<br><br><em>Subject overview:</em> Regional turboprops, single-aisle narrowbodies, twin-aisle widebodies, freighters, Airbus vs. Boeing duopoly competition, airline fleet planning, and operational route cost comparisons.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`,
          s5: `Welcome to Session 5! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`,
          s6: `Welcome to Session 6! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`,
          s7: `Welcome to Session 7! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`
        }
      };

      const desc = aasDescriptions[modNumber] || aasDescriptions[1];

      const teachingSessionsCount = feSessionNum - 1;
      const teachingPages = [];
      for (let s = 1; s <= teachingSessionsCount; s++) {
        let tagLabel = `Module ${modNumber} • Session ${s}`;
        if (modNumber === 1) {
          tagLabel = s <= 3 ? `Module 1 • EASA Docs • Session ${s}` : `Module 1 • Safety, Audits & FE • Session ${s}`;
        }
        teachingPages.push({
          tag: tagLabel,
          title: titles[`s${s}`] || titles.s4,
          description: desc[`s${s}`] || desc.s4,
          imageUrl: images[`card${s}`] || images.card4
        });
      }

      const pages = [
        ...teachingPages,
        {
          tag: modNumber === 1 ? `Module 1 • FE • Session ${feSessionNum}` : `Module ${modNumber} • Session ${feSessionNum}`,
          title: `Session ${feSessionNum} - EASA Regulatory Extract & Class Activity Evaluation`,
          description: modNumber === 1
            ? `Welcome to Session ${feSessionNum}! In this Formative Evaluation, student teams of up to 4 take the floor to deliver an engaging 30-minute interactive session based on an official EASA documentation extract of their choice. Your team will deliver a comprehensive spoken breakdown in plain English, teach 3 to 5 new technical words, and lead creative reading and speaking exercises for classmates.<br><br><em>Subject overview:</em> Formative Evaluation 1 — EASA Regulatory Extract &amp; Class Activity: Regulatory breakdown, technical vocabulary teaching, creative classmate exercises, and final teacher feedback.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
            : (modNumber === 2
                ? `Welcome to Session ${feSessionNum}! In this Formative Evaluation, you and your partner will present a comprehensive technical profile of an aircraft or an airline of your choice.<br><br><em>Subject overview:</em> Formative Evaluation 2 — Aircraft / Airlines: Technical specifications, operational metrics, historical milestones, and safety analysis.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
                : `Welcome to Session ${feSessionNum}!`),
          isFe: true,
          imageUrl: images.fe
        },
        {
          tag: "GSEA 25A • Course Admin",
          title: "Course Admin",
          description: "Welcome to the GSEA 25A Course Administration Hub. Access your official class groups (Group A, Group B & Group C), teacher assignments, weekly schedules, and dynamic 30-minute Formative Evaluation tutorial rotas.<br><br><em>Subject overview:</em> Weekly classes for Technical English (AT • LV125E).<br><br>Consult your designated FE timeslots and arrive 5 minutes before your slot with your presentation supports and updated learning portfolio ready.",
          isAdmin: true,
          adminUrl: "admin.html",
          imageUrl: images.admin
        },
        {
          tag: "Technical English • Course Guidance",
          title: "Student Guide & Objectives",
          description: "Essential student guidance on how to succeed in English this semester, formative evaluation preparation, portfolio requirements, and the official ENAC course syllabus (English & French).",
          isObjectives: true,
          imageUrl: "images/semester_objectives.jpg"
        }
      ];

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
            subtitle: "MTF",
            supertitle: "GSEA AT SEMESTER 3 - MODULE 2: MTF",
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
