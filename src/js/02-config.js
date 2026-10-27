    const createModulePages = (modNumber) => {
      const aasSessionTitles = {
        1: {
          s1: "Session 1 - Introduction & Aviation Survey",
          s2: "Session 2 - Passenger Journey & Airfield Movement",
          s3: "Session 3 - Ground Operations & Turnaround",
          s4: "Session 4 - Jobs in Aviation"
        },
        2: {
          s1: "Session 1 - Aerodynamics & Flight Principles",
          s2: "Session 2 - Aircraft Anatomy: Structure & Systems",
          s3: "Session 3 - Commercial Aircraft & Airlines",
          s4: "Session 4 - Significant Aviation Accidents & Aircraft Types"
        },
        3: {
          s1: "Session 1 - Health & Human Factors in Aviation",
          s2: "Session 2 - Meteorology & Severe Weather in Aviation",
          s3: "Session 3 - Aviation Safety vs. Security: Airport & Aircraft Checks",
          s4: "Session 4 - Global Semester Review & 3-Team Quiz"
        }
      };

      const titles = aasSessionTitles[modNumber] || aasSessionTitles[1];

      const moduleImages = {
        1: {
          card1: "images/aas_m1card1.jpg",
          card2: "images/aas_m1card2.jpg",
          card3: "images/aas_m1card3.jpg",
          card4: "images/aas_m1card4.jpg",
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

      const formativeEvaluationNotice = "All our work this module builds progressively toward your Formative Evaluation in Session 5. Review the vocabulary from the vocabulary section on this page before your evaluation, along with the TOEIC exercises and your personal portfolio.";

      const aasDescriptions = {
        1: {
          s1: `Welcome to Technical English Module 1 on Documents & Maps! In this opening session, we explore airport operations, aviation security, commercial airline models, and environmental challenges while practicing discussion fluency and technical vocabulary.<br><br><em>Subject overview:</em> In-class survey interviews discussing key aviation themes: alcohol on board, armed pilots and air marshals, low-cost carrier economics, noise abatement, future propulsion, space tourism, airport security, and flight delay passenger rights.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We explore the passenger's journey through the airport—from landside check-in, security screening, and duty-free retail to the departure gate—as well as airside movement areas including aprons, taxiways, ground markings, and runway numbering.<br><br><em>Subject overview:</em> Passenger terminal flow, security checkpoints, airside apron operations, pushback tugs, taxiway guidance markings, and runway magnetic designators.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze ground handling workflows, baggage logistics, refueling protocols, and gate turnaround optimization.<br><br><em>Subject overview:</em> Ramp safety, ground support equipment (GSE), slot allocation, and minimizing turnaround time.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We examine aviation operational careers across landside, airside, flight operations, air traffic services, and civil aviation administration.<br><br><em>Subject overview:</em> Professional roles and jurisdictions: Passenger Service Agents, Ramp Coordinators, Flight Crew, ATCOs (Tower, Approach, En-Route), and TSEEAC functions (AFISO, aerodrome operations coordination, DGAC safety oversight). Expressing duties, authority, and handoff procedures.<br><br>${formativeEvaluationNotice}`
        },
        2: {
          s1: `Welcome to Module 2 on MTF! In this opening session, we explore the four fundamental forces of flight, aircraft control axes, and wing airflow dynamics while developing spoken fluency and cause-and-effect structures.<br><br><em>Subject overview:</em> Lift, weight, thrust, and drag in equilibrium; pitch, roll, and yaw control surfaces; angle of attack, boundary layer separation, and stall recovery procedures.<br><br>${formativeEvaluationNotice}`,
          s2: `Welcome to Session 2! We examine the external airframe and internal layout of modern commercial aircraft, practicing accurate spatial descriptions, functional explanations, and exterior pre-flight walkaround defect reporting.<br><br><em>Subject overview:</em> Fuselage, empennage, leading-edge slats, trailing-edge flaps, spoilers, landing gear, radome, pitot-static probes, flight deck controls, cabin amenities, and walkaround inspection dialogues.<br><br>${formativeEvaluationNotice}`,
          s3: `Welcome to Session 3! In this class, we analyze commercial aircraft classifications, fleet economics, global aerospace manufacturers, and airline business models.<br><br><em>Subject overview:</em> Regional turboprops, single-aisle narrowbodies, twin-aisle widebodies, freighters, Airbus vs. Boeing duopoly competition, airline fleet planning, and operational route cost comparisons.<br><br>${formativeEvaluationNotice}`,
          s4: `Welcome to Session 4! We investigate landmark aviation accidents throughout history, analyzing the aircraft types involved, mechanical versus human contributing factors, and permanent safety evolutions.<br><br><em>Subject overview:</em> Accident investigation methodology (CVR/FDR, BEA, NTSB), past narrative tenses, and an in-class 15-minute quick-fire group research sprint analyzing landmark case studies followed by spoken safety presentations.<br><br>${formativeEvaluationNotice}`
        },
        3: {
          s1: `Welcome to Module 3!`,
          s2: `Welcome to Session 2!`,
          s3: `Welcome to Session 3!`,
          s4: `Welcome to Session 4!`
        }
      };

      const desc = aasDescriptions[modNumber] || aasDescriptions[1];

      const pages = [
        {
          tag: `Module ${modNumber} • Session 1`,
          title: titles.s1,
          description: desc.s1,
          imageUrl: images.card1
        },
        {
          tag: `Module ${modNumber} • Session 2`,
          title: titles.s2,
          description: desc.s2,
          imageUrl: images.card2
        },
        {
          tag: `Module ${modNumber} • Session 3`,
          title: titles.s3,
          description: desc.s3,
          imageUrl: images.card3
        },
        {
          tag: `Module ${modNumber} • Session 4`,
          title: titles.s4,
          description: desc.s4,
          imageUrl: images.card4
        },
        {
          tag: `Module ${modNumber} • Session 5`,
          title: "Session 5 - Formative Evaluation",
          description: modNumber === 1
            ? `Welcome to Session 5! In this Formative Evaluation, you and your partner will present a detailed technical airport profile.<br><br><em>Subject overview:</em> Formative Evaluation 1 — Airports: Technical infrastructure, operational constraints, aerodrome hot spots, and incident/accident analysis.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
            : (modNumber === 2
                ? `Welcome to Session 5! In this Formative Evaluation, you and your partner will present a comprehensive technical profile of an aircraft or an airline of your choice.<br><br><em>Subject overview:</em> Formative Evaluation 2 — Aircraft / Airlines: Technical specifications, operational metrics, historical milestones, and safety analysis.<br><br>All work in this session contributes directly toward your Formative Evaluation.`
                : `Welcome to Session 5!`),
          imageUrl: images.fe
        },
        {
          tag: "GSEA 25A • Course Admin",
          title: "Course Admin",
          description: "Welcome to the GSEA 25A Course Administration Hub. Access your official class groups (Group A & Group B), teacher assignments, weekly schedules, and dynamic 30-minute Formative Evaluation tutorial rotas.<br><br><em>Subject overview:</em> Weekly classes for Aeronautical English (LV125E).<br><br>Consult your designated FE timeslots and arrive 5 minutes before your slot with your presentation supports and updated learning portfolio ready.",
          isAdmin: true,
          adminUrl: "admin.html",
          imageUrl: images.admin
        },
        {
          tag: "Technical English • Course Syllabus",
          title: "Semester Objectives",
          description: "Here you can find the complete objectives for the full semester 3.<br><br><em>Subject overview:</em> Comprehensive pedagogical roadmap, learning outcomes, and assessment benchmarks for GSEA Semester 3 (LV125E).<br><br>Consult the full bilingual syllabus (English & French) covering continuous assessment, professional development, technical communication, and evaluation criteria.",
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
      },
      3: {
        primary: "#1a2332", // Stealth Cockpit Charcoal (Safety & Crisis Management)
        primaryDark: "#121924",
        primaryDarker: "#0b1018",
        accent: "#0f766e", // Aviation System Teal / Safe Status
        accentDark: "#115e59",
        accentDarker: "#134e4a",
        highlight: "#ccfbf1",
        worksheet: "#1a2332",
        worksheetDark: "#121924",
        activeMenuBg: "rgba(15, 118, 110, 0.12)",
        activeMenuText: "#0f766e",
        activeMenuBorder: "#0f766e"
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
            subtitle: "Documents & Maps",
            supertitle: "GSEA AT SEMESTER 3 - MODULE 1: DOCUMENTS & MAPS",
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
          },
          {
            id: 3,
            name: "Module 3",
            subtitle: "Disabled",
            supertitle: "GSEA AT SEMESTER 3 - MODULE 3",
            disabled: true,
            ...AAS_MODULE_THEMES[3],
            pages: createModulePages(3, 'aas')
          }
        ]
      }
    };

    let currentProgram = 'aas';
    let modulesData = PROGRAMS_CONFIG[currentProgram].modules;
    let currentModuleIndex = 0;
    let currentIndex = 0;
