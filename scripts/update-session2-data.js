const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/course-data.js');
let fileLines = fs.readFileSync(filePath, 'utf8').split('\n');

const session2Fields = {
  "session": 2,
  "title": "Safety Alerts & Ramp Briefings",
  "overview": {
    "intro": "Welcome to Session 2 of Technical English! Today we examine an official EASA Safety Information Bulletin on ramp collision risks and ground vehicle speed management. You will practice turning dense safety regulations into direct action commands, master the Executive 3-Bullet Rule, and deliver a punchy 90-second morning ramp briefing with operational challenge questions.",
    "whyItMatters": "On European airport aprons, ground support equipment (GSE) operates in close proximity to multimillion-euro aircraft and ground personnel under tight 30-minute turnaround pressures. High-energy vehicle impacts with aircraft fuselages, radomes, and engine cowlings have repeatedly gone unreported by fearful ground staff, resulting in aircraft departing with undetected structural damage. Mastering non-punitive Just Culture reporting, speed enforcement zones, and clear spoken verbal briefings is vital for TSEEAC airside operations managers and ramp safety inspectors.",
    "keyTerms": [
      {
        "term": "Apron Driving Authorisation (ADA)",
        "ipa": "/ˈeɪ.prən ˈdraɪ.vɪŋ ˌɔː.θər.aɪˈzeɪ.ʃən/",
        "definition": "Official aerodrome permit certifying that an airside driver has completed mandatory regulatory safety training and vehicle handling assessments under ADR.OR.D.017."
      },
      {
        "term": "Ground Support Equipment (GSE)",
        "ipa": "/ɡraʊnd səˈpɔːt ɪˈkwɪp.mənt/",
        "definition": "Specialized ramp servicing vehicles, including baggage tugs, belt loaders, pushback tractors, catering lifters, and mobile passenger steps."
      },
      {
        "term": "Equipment Clearance Area (ECA)",
        "ipa": "/ɪˈkwɪp.mənt ˈklɪə.rəns ˈeə.ri.ə/",
        "definition": "Marked apron pavement surrounding an aircraft parking stand that must remain 100% clear of all vehicles until the aircraft has stopped and engines are shut down."
      },
      {
        "term": "Equipment Staging Area (ESA)",
        "ipa": "/ɪˈkwɪp.mənt ˈsteɪ.dʒɪŋ ˈeə.ri.ə/",
        "definition": "Designated painted holding box where ground equipment is parked safely before aircraft arrival and during turnaround servicing."
      },
      {
        "term": "Differentiated Speed Regimes",
        "ipa": "/ˌdɪf.əˈren.ʃi.eɪ.tɪd spiːd reɪˈʒiːmz/",
        "definition": "Tiered vehicular speed limits tailored to distinct apron zones: 25–30 km/h on main apron roadways, 5–10 km/h walking pace near aircraft, and 10–15 km/h in baggage tunnels."
      },
      {
        "term": "GPS Geofencing",
        "ipa": "/ˌdʒiː.piːˈes ˈdʒiː.əʊ.fens.ɪŋ/",
        "definition": "Satellite-based virtual perimeter that triggers automated telematics controls to physically restrict vehicle top speed upon entering aircraft parking stands."
      },
      {
        "term": "Speed Governor",
        "ipa": "/spiːd ˈɡʌv.ən.ər/",
        "definition": "Mechanical or electronic limiting device installed on ground vehicles to physically cap the maximum achievable velocity."
      },
      {
        "term": "Just Culture",
        "ipa": "/dʒʌst ˈkʌl.tʃər/",
        "definition": "Operational safety framework where frontline workers are actively encouraged to report occurrences and minor contacts without fear of punitive reprisal, except in cases of gross negligence."
      },
      {
        "term": "Ramp Safety Committee (RSC)",
        "ipa": "/ræmp ˈseɪf.ti kəˈmɪt.i/",
        "definition": "Regular collaborative forum uniting aerodrome operators, airlines, and ground handlers to analyze telematics trends, speed audits, and near-miss occurrences."
      },
      {
        "term": "Unreported Structural Impact",
        "ipa": "/ˌʌn.rɪˈpɔː.tɪd ˈstrʌk.tʃər.əl ˈɪm.pækt/",
        "definition": "Hazardous condition where a GSE contact or fuselage scrape is concealed or unrecorded, allowing an aircraft to depart with compromised airworthiness."
      }
    ],
    "speakingTask": {
      "title": "Authentic EASA Task • SIB 2024-09 Ramp Collision Mitigation",
      "instructions": "Working in pairs, review authentic EASA SIB No. 2024-09 below. Choose one operational area (Speed Regimes, Telematics & Governors, or Just Culture Reporting) and deliver a concise 2-minute spoken briefing explaining your ramp safety solutions using today's technical vocabulary.",
      "document": {
        "title": "EASA SIB No. 2024-09: Mitigation of Ramp Collision Risks & Speed Management",
        "subtitle": "EASA Safety Information Bulletin • Issued 14 October 2024 (4 Pages)",
        "filename": "GSEA_S3_M1_S2_EASA_SIB_2024_09_Ramp_Safety.pdf",
        "path": "docs/GSEA_S3_M1_S2_EASA_SIB_2024_09_Ramp_Safety.pdf",
        "moodleNote": "Also available in your ENAC Moodle course space under Regulatory Documentation"
      },
      "requirements": [
        "Use at least 4 of today's 10 technical terms from the list above.",
        "Cite specific operational measures from Section 4 of EASA SIB No. 2024-09.",
        "Ensure both partners actively speak and explain practical ramp solutions without reading verbatim."
      ],
      "statements": {
        "group1": "Area 1 (Infrastructure & Speed Regimes): How do differentiated speed limits (25–30 km/h on roadways vs. 5–10 km/h on stands) and CS-ADR-DSN road markings mitigate high-energy ramp impacts?",
        "group2": "Area 2 (Telematics & Equipment Control): Why are physical speed governors and GPS geofencing more effective than speed limit signs alone on high-workload turnaround aprons?",
        "group3": "Area 3 (Driver Authorisation & Just Culture): How can aerodrome operators balance strict Apron Driving Authorisation (ADA) testing with a non-punitive Just Culture so minor scrapes are reported immediately?"
      },
      "usefulPhrases": [
        "According to EASA SIB 2024-09, ground collisions are primarily caused by...",
        "Under Point ADR.OPS.B.025, the aerodrome operator must enforce...",
        "In the vicinity of parked aircraft, speed must be restricted to walking pace...",
        "A non-punitive Just Culture ensures that ground personnel report...",
        "To mitigate high-energy vehicle impacts on the ramp, our group recommends..."
      ]
    },
    "document": {
      "title": "EASA SIB No. 2024-09: Mitigation of Ramp Collision Risks & Speed Management",
      "subtitle": "EASA Safety Information Bulletin • Issued 14 October 2024 (4 Pages)",
      "filename": "GSEA_S3_M1_S2_EASA_SIB_2024_09_Ramp_Safety.pdf",
      "path": "docs/GSEA_S3_M1_S2_EASA_SIB_2024_09_Ramp_Safety.pdf",
      "moodleNote": "Also available in your ENAC Moodle course space under Regulatory Documentation"
    }
  },
  "objectives": {
    "title": "Session 2 Objectives - Safety Alerts & Ramp Briefings",
    "summary": "By the end of this session, GSEA students will be able to distinguish mandatory Safety Directives from advisory Safety Information Bulletins, turn heavy regulatory text into direct spoken action commands, condense dense safety alerts using the Executive 3-Bullet Rule (maximum 12 words per bullet), speak with natural rhythm and keyword stress, deliver a professional 90-second morning ramp safety briefing, and field spontaneous operational challenge questions with confidence.",
    "items": [
      {
        "num": 1,
        "title": "Modal Quick-Fire & Ramp Awareness (Review & Fluency)",
        "description": "Rapidly identify strict mandatory rules, standard guidelines, and permissions in operational statements, and discuss apron hazard zones.",
        "part": "Part 1"
      },
      {
        "num": 2,
        "title": "Turning Heavy Regulations into Action Words (Language Accuracy)",
        "description": "Convert stiff official phrases (the execution of continuous surveillance, prior to the entry of vehicles) into direct active commands (inspect, monitor, wait before entering).",
        "part": "Part 2"
      },
      {
        "num": 3,
        "title": "The Executive 3-Bullet Rule: SIB Extraction (Synthesis & Precision)",
        "description": "Condense dense EASA SIB extracts into exactly 3 actionable directives of no more than 12 words each, starting with strong active verbs.",
        "part": "Part 3"
      },
      {
        "num": 4,
        "title": "Natural Rhythm & Stress Clinic (Spoken Rhythm & Delivery)",
        "description": "Use natural speech pauses (|) and stress operative keywords to deliver clear, confident technical instructions on the ramp.",
        "part": "Part 4"
      },
      {
        "num": 5,
        "title": "The 90-Second Stand-Up Briefing (Spoken Interaction & Signposting)",
        "description": "Structure and deliver a crisp 90-second spoken briefing using authentic transition signposts (\"Good morning team...\", \"The primary takeaway is...\", \"Under no circumstances should you...\").",
        "part": "Part 5"
      },
      {
        "num": 6,
        "title": "Active Listening & Operational Challenges (Interactive Clarification)",
        "description": "Role-play ramp supervisors and safety leads, listening critically to oral briefings and asking targeted operational questions under time pressure.",
        "part": "Part 6"
      }
    ]
  },
  "lessonPlan": {
    "title": "Session 2 Lesson Plan - Safety Alerts & Ramp Briefings (2 Hours)",
    "summary": "A 2-hour communicative spoken English session covering rapid modal review, EASA Safety Information Bulletin SIB 2024-09 (Ramp Collision Risks & Speed Management), turning heavy regulations into spoken action commands, the Executive 3-Bullet Rule, natural spoken rhythm, and 'The 90-Second Stand-Up' paired briefing simulations across three real-world apron scenarios.",
    "items": [
      {
        "part": "Part 1",
        "title": "Part 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan",
        "description": "Students complete the 4-item modal quick-fire sprint to reinforce Session 1 foundations, then brainstorm the most hazard-prone areas of the apron in pairs."
      },
      {
        "part": "Part 2",
        "title": "Part 2: Authentic Document Extract: EASA SIB 2024-09 (Ramp Collisions & Speed)",
        "description": "Students scan authentic extracts from EASA SIB No. 2024-09 regarding GSE impacts, speed regimes, and telematics geofencing, and complete reading comprehension checks."
      },
      {
        "part": "Part 3",
        "title": "Part 3: Language Clinic: From Official Rules to Spoken Action Commands",
        "description": "Students practice converting heavy administrative text into direct spoken imperatives, master the Executive 3-Bullet Rule (12 words max, action verbs), and practice natural speech pauses and keyword stress."
      },
      {
        "part": "Part 4",
        "title": "Part 4: Spoken Interaction: 'The 90-Second Stand-Up' Briefings",
        "description": "In pairs, students take turns delivering 90-second morning briefings as TSEEAC Airside Safety Officers across 3 ramp scenarios, while their partner role-plays the Ground Supervisor asking mandatory operational challenge questions with peer feedback."
      },
      {
        "part": "Part 5",
        "title": "Part 5: Safety Check & Stand-Up Reality Wrap-Up",
        "description": "Students collaborate on the 4-step ramp risk check and deliver an unscripted 60-second pair wrap-up explaining how morning briefings prevent critical breakdowns in communication on the tarmac."
      }
    ]
  },
  "lessonContent": {
    "hero": {
      "title": "Safety Alerts & Ramp Briefings",
      "subtitle": "EASA SIB 2024-09, Action Commands & 90-Second Stand-Up Briefings",
      "image": "images/s3_m1_session2_audit.jpg",
      "targetLevel": "CEFR B1–B2",
      "roleContext": "GSEA Student Training (TSEEAC Airside Safety & Ground Operations Focus)",
      "duration": "120 Minutes"
    },
    "openingSession": {
      "title": "Activity 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan",
      "summary": "Rapid retrieval sprint checking modal categories and pair brainstorming on apron danger zones.",
      "modeBadges": [
        { "label": "Retrieval Sprint", "color": "blue" },
        { "label": "Pair Discussion", "color": "amber" },
        { "label": "Spoken Fluency", "color": "emerald" }
      ],
      "instructions": [
        {
          "step": "Step 1: Modal Quick-Fire Sprint (Individual / Pairs)",
          "detail": "Read each of the 4 operational statements below and identify whether it represents a strict mandatory rule, standard best practice, or advisory guidance. Check the anchor modal verb."
        },
        {
          "step": "Step 2: Ramp Hazard Brainstorming (Pairs)",
          "detail": "Discuss why the apron is often called 'the most dangerous 500 metres of an airport.' Identify the top 3 hazards handlers face during morning departure waves."
        },
        {
          "step": "Step 3: Diagnostic Check",
          "detail": "Test entry knowledge with the 4 spot-check questions comparing mandatory directives, advisory bulletins, and spoken delivery rhythm."
        }
      ],
      "deliverable": "Completed modal sprint categorization, 3 agreed ramp danger zones, and entry diagnostic check.",
      "teacherNotes": [
        "Prompt students to identify modal anchors immediately: 'shall' / 'shall not' (Strict mandatory rule), 'should' (Standard guideline), 'may' (Permission / Advice).",
        "Encourage students to articulate WHY handing ground crews a 4-page PDF does not work on the ramp (insufficient turnaround time, cognitive overload)."
      ],
      "reviewSprint": [
        {
          "id": 1,
          "statement": "Aerodrome operators shall ensure that vehicles operating on aprons are equipped with high-visibility markings.",
          "type": "Mandatory Rule (Shall)",
          "anchor": "shall ensure",
          "badgeColor": "rose",
          "explanation": "Mandatory implementing rule under European regulation (EASA Part-ADR.OPS.B.025)."
        },
        {
          "id": 2,
          "statement": "Ground handling personnel should inspect fuel hydrants every morning before scheduled flight waves.",
          "type": "Standard Guideline (Should)",
          "anchor": "should inspect",
          "badgeColor": "amber",
          "explanation": "Standard industry best practice; deviation requires formal risk assessment and alternative safety justification."
        },
        {
          "id": 3,
          "statement": "The authority may grant temporary derogations during extraordinary winter weather operations.",
          "type": "Permission / Discretion (May)",
          "anchor": "may grant",
          "badgeColor": "emerald",
          "explanation": "Discretionary statutory power granted to the competent national civil aviation authority (DSAC)."
        },
        {
          "id": 4,
          "statement": "The de-icing pad drainage containment system shall not discharge directly into surface waters.",
          "type": "Strict Negative Prohibition (Shall Not)",
          "anchor": "shall not discharge",
          "badgeColor": "rose",
          "explanation": "Strict negative legal obligation with zero operational tolerance."
        }
      ],
      "newsPrompts": [
        {
          "id": 1,
          "question": "Why is the apron often described as 'the most dangerous 500 metres of an airport'?",
          "exampleAnswers": [
            "Baggage tugs, catering trucks, fuelling bowsers, and aircraft move in tight, congested spaces simultaneously.",
            "High ambient engine noise drowns out vehicle horns, and night or rain drastically reduces driver visibility.",
            "Ground personnel work under severe time pressure to meet strict 25- to 30-minute turnaround targets."
          ]
        },
        {
          "id": 2,
          "question": "When a new safety bulletin arrives on your desk at 06h30, why is handing workers a 4-page technical PDF ineffective?",
          "exampleAnswers": [
            "Ground crews work on the tarmac in high-noise environments; they don't sit in front of computer monitors.",
            "Dense bureaucratic legal text hides the critical action steps under heavy noun phrases.",
            "A fast, direct 90-second verbal briefing with strong action verbs front-loads the vital commands immediately."
          ]
        }
      ],
      "diagnostic": {
        "title": "Safety Alerts & Oral Delivery Entry Spot-Check",
        "instructions": "Test your entry understanding of safety notices and oral delivery before reading the bulletin.",
        "questions": [
          {
            "id": 1,
            "q": "What is the primary operational difference between a Safety Directive (SD) and a Safety Information Bulletin (SIB)?",
            "answer": "A Safety Directive is mandatory hard law requiring compulsory action by a set deadline. An SIB is an advisory safety alert recommending best practices to mitigate an emerging hazard."
          },
          {
            "id": 2,
            "q": "Why do aviation authorities write bulletins with heavy nouns instead of simple active verbs?",
            "answer": "Bureaucratic and legal writers prefer formal noun structures (e.g., 'the execution of inspection') to appear neutral, but this slows down operational communication on the tarmac. Front-loading action verbs gives immediate clarity."
          },
          {
            "id": 3,
            "q": "What happens if a speaker delivers a technical safety briefing in English with a completely 'flat' rhythm?",
            "answer": "Listeners lose focus and cannot distinguish critical safety instructions from background context. Vocal pauses and keyword stress guide the listener's attention."
          },
          {
            "id": 4,
            "q": "Why should operational briefings follow the 'Executive 3-Bullet Rule' (max 12 words per bullet)?",
            "answer": "Working memory under operational stress can only retain 3 core commands. Short imperative sentences front-load the action so teams remember what to do."
          }
        ]
      }
    },
    "documentExtract": {
      "title": "Activity 2: Reading Authentic Safety Bulletins (EASA SIB No. 2024-09)",
      "summary": "Scan authentic extracts from EASA SIB No. 2024-09 regarding GSE impacts, tiered speed regimes, telematics geofencing, and Just Culture reporting.",
      "modeBadges": [
        { "label": "Authentic Extract", "color": "blue" },
        { "label": "Scanning Drill", "color": "indigo" },
        { "label": "Reading Check", "color": "emerald" }
      ],
      "instructions": [
        {
          "step": "Step 1: Scan EASA SIB No. 2024-09",
          "detail": "Read the authentic extract below regarding vehicle speed and ramp collision risks. Identify: 1) What causes high-energy impacts, 2) Tiered speed limits, 3) Telematics and geofencing solutions, and 4) Why Just Culture reporting protects aircraft airworthiness."
        },
        {
          "step": "Step 2: Complete the 4 Comprehension Checks",
          "detail": "Answer the 4 comprehension checks to verify factual parameters before translating the text into operational commands."
        }
      ],
      "deliverable": "Extracted speed limits, telematics solutions, and Just Culture reporting guidelines.",
      "teacherNotes": [
        "Highlight operative technical terms: 'differentiated speed regimes', 'GSE', 'GPS geofencing', 'Equipment Clearance Area (ECA)', 'Just Culture'.",
        "Remind students that SIBs are advisory but carry high operational weight during safety audits."
      ],
      "docRef": "EASA SIB No. 2024-09 (Adapted Extract) • Subject: Mitigation of Ramp Collision Risks & Speed Management",
      "docText": "EUROPEAN UNION AVIATION SAFETY AGENCY\nSAFETY INFORMATION BULLETIN\nSIB No.: 2024-09\nIssued: 14 October 2024\nSubject: Mitigation of Ramp Collision Risks and Ground Vehicle Speed Management on Aprons\n\n1. Operational Background & Safety Concern:\nRecent occurrence data reported across European aerodromes highlights a persistent trend of ground vehicle collisions and high-energy Ground Support Equipment (GSE) impacts with aircraft during turnaround servicing. High turnaround workload, congested staging areas, and excessive vehicular velocity contribute to incidents where ground equipment strikes aircraft fuselages, engine cowlings, or radomes. In several occurrences, minor structural impacts have gone unreported by personnel due to fear of disciplinary reprisal, resulting in aircraft departing with undetected structural damage.\n\n2. Differentiated Apron Speed Regimes:\nAerodrome operators should enforce tiered speed limits reflecting localized operational risk:\n• Main Apron Roadways: Speed limits should not exceed 25–30 km/h.\n• Aircraft Stands & Vicinity of Aircraft: Speed must be strictly restricted to walking pace (5–10 km/h) upon entering the designated parking stand.\n• Baggage Make-Up Areas & Enclosed Tunnels: A maximum limit of 10–15 km/h should be enforced.\nProminent painted surface road markings and vertical signage must clearly delineate these speed boundaries.\n\n3. Telematics & Equipment Control:\nAerodrome operators and Ground Handling Service Providers (GHSPs) should promote the installation of physical or electronic speed governors on motorized GSE. Furthermore, GPS-enabled geofencing systems that automatically restrict vehicle maximum speed when penetrating aircraft stand boundaries should be progressively deployed across commercial handling fleets.\n\n4. Training, Authorisation & Just Culture:\nAll personnel operating vehicles airside must hold a valid Apron Driving Authorisation (ADA) in compliance with Point ADR.OR.D.017. Crucially, aerodromes must foster a non-punitive Just Culture framework wherein ground personnel are empowered and actively required to report any vehicle-to-aircraft contact immediately, without fear of automatic penalties, ensuring timely engineering inspections prior to flight release.",
      "questions": [
        {
          "id": 1,
          "q": "What is the primary danger when ground equipment strikes an aircraft at high speed on the apron?",
          "answer": "Unreported structural damage to the fuselage, engine cowling, or radome, which can lead to an aircraft departing with undetected, dangerous structural compromise."
        },
        {
          "id": 2,
          "q": "What are the recommended differentiated speed limits for main apron roadways versus aircraft parking stands?",
          "answer": "Maximum 25–30 km/h on main apron roadways, and walking pace (5–10 km/h) inside aircraft parking stands."
        },
        {
          "id": 3,
          "q": "How does GPS geofencing improve ramp vehicle safety compared to traditional speed limit signs alone?",
          "answer": "GPS geofencing automatically caps the vehicle's maximum speed electronically as soon as it enters the aircraft parking stand, removing reliance on human compliance under time pressure."
        },
        {
          "id": 4,
          "q": "Why is a non-punitive 'Just Culture' essential for preventing catastrophic ramp incidents?",
          "answer": "Because ground workers who fear automatic punishment will hide minor scratches or bumps. Just Culture ensures every vehicle-to-aircraft contact is reported immediately so engineers can inspect the aircraft before departure."
        }
      ]
    },
    "rulesPractice": {
      "title": "Activity 3: Speaking Clinic: Turning Regulations into Action Commands (The 3-Bullet Rule & Natural Rhythm)",
      "summary": "Convert heavy regulatory text into direct spoken commands, condense SIB 2024-09 into 3 bullets under 12 words, and practice spoken stress and natural rhythm.",
      "modeBadges": [
        { "label": "Action Commands", "color": "indigo" },
        { "label": "Executive 3-Bullet", "color": "amber" },
        { "label": "Rhythm & Stress Clinic", "color": "purple" }
      ],
      "instructions": [
        {
          "step": "Step 1: Speaking Clinic: From Official Paperwork to Spoken Commands",
          "detail": "Examine the 3-step Simplification Engine. Convert 3 dense regulatory formulations from SIB 2024-09 into crisp, direct spoken commands by uncovering the hidden action verb and front-loading the agent."
        },
        {
          "step": "Step 2: The Executive 3-Bullet Challenge",
          "detail": "Condense EASA SIB No. 2024-09 into exactly 3 bullet points. Respect the constraints: Maximum 12 words per bullet, starting with a strong active imperative verb."
        },
        {
          "step": "Step 3: Natural Rhythm & Keyword Stress Clinic",
          "detail": "Mark breath/idea pause lines (|) and identify the stressed content words to avoid flat, monotonous delivery when delivering technical instructions."
        }
      ],
      "deliverable": "3 active ramp commands, 3-bullet executive summary, and chunked read-aloud practice.",
      "teacherNotes": [
        "In Task A, highlight how official phrases like 'the execution of continuous surveillance' disguise simple actions like 'monitor continuously'.",
        "For rhythm, demonstrate monotone delivery vs. rhythmic English delivery with vocal pauses at natural phrase boundaries."
      ],
      "simplificationEngine": {
        "steps": [
          {
            "num": 1,
            "title": "Find the hidden action verb inside the official text",
            "example": "\"The execution of continuous surveillance...\" → \"Inspect / Monitor...\" | \"Prior to the entry of vehicles...\" → \"Before entering...\""
          },
          {
            "num": 2,
            "title": "Identify the active agent (Who must do it?)",
            "example": "\"shall be conducted by the handling team\" → \"The handling team must...\""
          },
          {
            "num": 3,
            "title": "Front-load the critical operational command",
            "example": "\"Drivers must reduce speed to walking pace before entering the stand.\""
          }
        ],
        "taskA": [
          {
            "id": 1,
            "sibText": "The execution of continuous surveillance of vehicle speeds on apron roadways shall be conducted by aerodrome safety officers.",
            "activeCommand": "Ramp safety officers must monitor vehicle speeds on apron roadways continuously.",
            "alternative": "Safety officers shall continuously monitor vehicle speeds on apron roads.",
            "rationale": "Replaced heavy noun phrase 'execution of continuous surveillance' with the direct active verb 'monitor' and front-loaded the agent 'Ramp safety officers'."
          },
          {
            "id": 2,
            "sibText": "Prior to the entry of ground support equipment into the Equipment Clearance Area, complete cessation of aircraft movement and engine shutdown must be verified.",
            "activeCommand": "Drivers must verify the aircraft has stopped and engines are shut down before entering the stand.",
            "alternative": "Ground handlers must wait for complete aircraft shutdown before moving equipment inside the red lines.",
            "rationale": "Replaced 'Prior to the entry of GSE' and 'complete cessation' with direct instructions 'verify the aircraft has stopped before entering'."
          },
          {
            "id": 3,
            "sibText": "Immediate mandatory notification of any vehicle contact with aircraft structure shall be submitted by ground personnel pursuant to Just Culture principles.",
            "activeCommand": "Ground personnel must report any vehicle contact with an aircraft immediately.",
            "alternative": "Handlers must immediately notify flight operations of any aircraft bump under Just Culture.",
            "rationale": "Replaced 'Immediate mandatory notification shall be submitted' with direct command 'must report any vehicle contact immediately'."
          }
        ]
      },
      "threeBulletRule": {
        "constraints": [
          "Constraint 1: Exactly 3 bullet points.",
          "Constraint 2: Maximum 12 words per bullet.",
          "Constraint 3: Every bullet must begin with a strong, active action verb (e.g., Enforce, Fit, Report, Maintain, Restrict)."
        ],
        "modelAnswers": [
          {
            "bullet": 1,
            "text": "Enforce walking pace speed limits inside all aircraft parking stands.",
            "wordCount": 10,
            "verb": "Enforce"
          },
          {
            "bullet": 2,
            "text": "Fit motorized ground equipment with electronic speed limiters and GPS geofencing.",
            "wordCount": 11,
            "verb": "Fit"
          },
          {
            "bullet": 3,
            "text": "Report any vehicle contact with aircraft immediately under Just Culture rules.",
            "wordCount": 11,
            "verb": "Report"
          }
        ]
      },
      "chunkingClinic": {
        "title": "Speaking Clinic: Natural Rhythm & Keyword Stress",
        "explanation": "In fast-paced ramp operations, speaking in a flat monotone causes listeners to tune out. Breaking instructions into natural phrase chunks (|) and putting vocal weight on key action words guides the listener's attention immediately.",
        "example": {
          "chunked": "On aircraft stands | reduce speed to walking pace | and watch for wingtip clearance.",
          "stressed": [
            "aircraft stands",
            "reduce speed",
            "walking pace",
            "wingtip clearance"
          ]
        },
        "drill": {
          "raw": "When driving ground support equipment near parked aircraft drivers must maintain walking pace and immediately report any accidental contact to the safety supervisor.",
          "chunked": "When driving ground support equipment near parked aircraft | drivers must maintain walking pace | and immediately report any accidental contact | to the safety supervisor.",
          "stressed": [
            "driving",
            "ground support equipment",
            "parked aircraft",
            "walking pace",
            "immediately report",
            "accidental contact",
            "safety supervisor"
          ]
        }
      }
    },
    "spokenActivity": {
      "title": "Activity 4: Spoken Simulation: 'The 90-Second Stand-Up' Briefing",
      "summary": "Pair simulation delivering a 90-second morning ramp briefing as TSEEAC Airside Safety Officer, fielding 2 operational challenge questions, and receiving peer feedback.",
      "modeBadges": [
        { "label": "Pairs (2 students)", "color": "blue" },
        { "label": "90-Second Briefing", "color": "indigo" },
        { "label": "Operational Challenges", "color": "amber" },
        { "label": "Peer Feedback", "color": "purple" }
      ],
      "instructions": [
        {
          "step": "Step 1: Role Setup & 3-Minute Preparation",
          "detail": "Work in pairs: Student A is the TSEEAC Airside Safety Inspector (The Speaker); Student B is the Ground Service Supervisor (The Interlocutor). Student A selects Scenario 1, takes 3 minutes to plan delivery using strong action verbs, natural rhythm, and signposts. Do not read verbatim!"
        },
        {
          "step": "Step 2: Deliver the 90-Second Stand-Up Briefing",
          "detail": "Student A delivers a crisp 90-second spoken briefing to Student B using the target signposts ('Good morning team...', 'The primary takeaway is...', 'Under no circumstances should you...')."
        },
        {
          "step": "Step 3: Interlocutor Challenges & Peer Feedback Checklist",
          "detail": "Student B listens actively and asks their 2 mandatory operational challenge questions. Student A responds immediately. Student B then reviews the 4-item Peer Feedback Checklist and gives 1 minute of oral feedback before switching roles."
        },
        {
          "step": "Step 4: Swap Roles for Scenario 2 or 3",
          "detail": "Swap roles: Student B becomes the Speaker for Scenario 2 (Unreported Scrape) or Scenario 3 (Equipment Staging Congestion)."
        }
      ],
      "deliverable": "Delivered 90-second oral briefing, answered 2 operational challenges, and completed peer checklist evaluation.",
      "teacherNotes": [
        "Enforce strict 90-second pacing with a timer. Stand-up briefings on the ramp are brief, punchy, and direct.",
        "Ensure Student B does NOT read their questions until Student A finishes speaking. Focus on active listening."
      ],
      "context": "It is 06:45 AM at a busy regional airport hub in France. The morning departure push is starting. Aerodrome safety data from the past month shows 4 vehicle speeding alerts on Taxiway Bravo roadway and 1 unreported belt-loader scrape on an A320 cargo door. As TSEEAC Airside Safety Inspector, you are delivering the mandatory morning stand-up briefing to the ramp handling team.",
      "targetSignposts": [
        "\"Good morning team, I need your full attention for a safety alert...\"",
        "\"The primary takeaway from this bulletin is...\"",
        "\"Under no circumstances should you exceed walking pace near aircraft...\"",
        "\"Our top priority on the ramp today is...\"",
        "\"Under Just Culture, remember that reporting is non-punitive...\"",
        "\"Please make sure your teams document...\""
      ],
      "scenarios": [
        {
          "id": 1,
          "title": "Scenario 1: Apron Speeding & GPS Geofencing Enforcement",
          "speaker": {
            "role": "TSEEAC Airside Safety Inspector (The Speaker)",
            "badge": "Speaker",
            "mission": "Deliver a crisp 90-second briefing to the Baggage Handling Supervisor on vehicle speed enforcement.",
            "points": [
              "Telematics data recorded 6 baggage tugs exceeding 35 km/h on main apron roadways during yesterday's evening push.",
              "Speed limits are strictly 25–30 km/h on roadways and 5–10 km/h (walking pace) once inside aircraft stands.",
              "GPS geofencing will activate next Monday, automatically capping vehicle speed inside all stands.",
              "Any driver repeatedly caught speeding faces immediate temporary suspension of their Apron Driving Authorisation (ADA)."
            ],
            "targetSignposts": [
              "\"Good morning team, I need your full attention for a safety alert...\"",
              "\"The primary takeaway from this bulletin is...\"",
              "\"Under no circumstances should you exceed walking pace near aircraft...\""
            ]
          },
          "interlocutor": {
            "role": "Baggage Handling Supervisor (The Interlocutor)",
            "badge": "Interlocutor",
            "context": "You manage 18 baggage tug drivers under severe 25-minute low-cost turnaround targets.",
            "mission": "Listen carefully and challenge Student A on real operational details with your 2 mandatory questions.",
            "mandatoryQuestions": [
              "\"If the GPS geofencing slows our tugs to 5 km/h inside the stand, how do we meet the 25-minute turnaround deadline without taking flight delays?\"",
              "\"Who will pay for installing electronic speed limiters on our older diesel tractors?\""
            ]
          }
        },
        {
          "id": 2,
          "title": "Scenario 2: Unreported GSE Aircraft Scrape & Just Culture Reporting",
          "speaker": {
            "role": "TSEEAC Airside Safety Inspector (The Speaker)",
            "badge": "Speaker",
            "mission": "Deliver a 90-second briefing to the Aircraft Turnaround Team Lead on reporting accidental contacts.",
            "points": [
              "Last week, maintenance found a 15-cm dent on an A320 lower cargo door that was never reported by the handling crew.",
              "Flying with undetected fuselage or composite skin damage can lead to inflight cabin depressurization.",
              "Emphasize our non-punitive Just Culture: accidents and minor bumps reported immediately will not result in disciplinary action.",
              "Concealing or failing to report vehicle contact is considered gross misconduct and leads to permanent revocation of airside access."
            ],
            "targetSignposts": [
              "\"We have received an urgent safety update regarding...\"",
              "\"Our top priority on the ramp today is...\"",
              "\"Under Just Culture, remember that reporting is strictly non-punitive...\""
            ]
          },
          "interlocutor": {
            "role": "Aircraft Turnaround Team Lead (The Interlocutor)",
            "badge": "Interlocutor",
            "context": "You supervise the loading ramp crews who fear losing their jobs or bonuses if an incident is logged.",
            "mission": "Listen to the briefing and ensure worker protection under the safety reporting system.",
            "mandatoryQuestions": [
              "\"My handlers are terrified they will be fired if they report a dent on a brand-new aircraft. Can you guarantee in writing they won't lose their jobs?\"",
              "\"If we report a minor scrape, how long does the safety inspection take before the flight is cleared to depart?\""
            ]
          }
        },
        {
          "id": 3,
          "title": "Scenario 3: Equipment Staging Area (ESA) Congestion & Stand Clearance",
          "speaker": {
            "role": "TSEEAC Airside Safety Inspector (The Speaker)",
            "badge": "Speaker",
            "mission": "Deliver a 90-second briefing to the Catering & Fuelling Dispatcher on keeping stands clear before arrival.",
            "points": [
              "Ground vehicles are repeatedly parking inside the Equipment Clearance Area (ECA) before aircraft have completely stopped at the gate.",
              "Marshallers and docking guidance systems (VDGS) are being obstructed by pre-positioned baggage carts and high-loaders.",
              "All GSE must remain parked inside painted Equipment Staging Areas (ESA) until engines are shut down and anti-collision beacons are off.",
              "Safety officers will issue immediate Level 2 non-compliance notices to any handler parking inside the red stand lines prematurely."
            ],
            "targetSignposts": [
              "\"Due to persistent stand congestion, we are enforcing strict staging rules...\"",
              "\"The critical operational trigger is...\"",
              "\"Please make sure your teams document...\""
            ]
          },
          "interlocutor": {
            "role": "Catering & Fuelling Dispatcher (The Interlocutor)",
            "badge": "Interlocutor",
            "context": "You coordinate 12 high-lift catering trucks and 6 fuel bowsers serving consecutive departure banks.",
            "mission": "Listen to the briefing and challenge Student A on space limitations during peak banks.",
            "mandatoryQuestions": [
              "\"The painted staging boxes are too small for our wide-body catering trucks. Where should our drivers wait during peak departure banks?\"",
              "\"What should our driver do if the docking guidance system fails and the marshaller gives conflicting hand signals?\""
            ]
          }
        }
      ],
      "peerChecklist": [
        { "id": 1, "label": "Did Student A use strong action verbs without reading word-for-word from notes?" },
        { "id": 2, "label": "Did Student A respect the 90-second time limit without rushing or trailing off?" },
        { "id": 3, "label": "Did Student A use professional signposts (\"Good morning team...\", \"The primary takeaway is...\")?" },
        { "id": 4, "label": "Did Student A give a confident, safety-focused answer to both operational challenge questions?" }
      ]
    },
    "safetyCheck": {
      "title": "Activity 5: Safety Check: What Could Go Wrong?",
      "summary": "Collaborative 4-step ramp safety evaluation and 60-second stand-up reality wrap-up.",
      "modeBadges": [
        { "label": "Collaborative Check", "color": "emerald" },
        { "label": "Risk Mitigation", "color": "blue" },
        { "label": "Spoken Wrap-Up", "color": "amber" }
      ],
      "instructions": [
        {
          "step": "Step 1: Complete the 4-Step Safety Evaluation",
          "detail": "In pairs, analyze the vehicle collision and ramp safety chain: Hazard, Operational Risk, Preventative Mitigations, and Agreed Operational Decision."
        },
        {
          "step": "Step 2: Rules to Reality (60-Second Pair Wrap-Up)",
          "detail": "Deliver an unscripted 60-second verbal summary explaining why clear stand-up briefings and Just Culture are critical on the ramp."
        }
      ],
      "deliverable": "Completed safety analysis table and 60-second verbal stand-up wrap-up.",
      "teacherNotes": [
        "Prompt students to link the linguistic clarity of the morning briefing to concrete safety outcomes on the tarmac.",
        "Emphasize that unreported vehicle scrapes can cause catastrophic inflight skin failures."
      ],
      "rows": [
        {
          "question": "1. The Operational Hazard: What is the primary physical hazard identified in EASA SIB No. 2024-09?",
          "answer": "High-energy Ground Support Equipment (GSE) collisions with aircraft and personnel in congested apron areas under tight 30-minute turnaround pressures."
        },
        {
          "question": "2. The Critical Risk: What catastrophic consequence occurs if GSE vehicle impacts go unreported?",
          "answer": "Aircraft depart with undetected structural damage to fuselages, radomes, or engine cowlings, posing severe risks of inflight failure or cabin depressurization."
        },
        {
          "question": "3. Agreed Mitigations: What physical and operational measures must aerodrome operators enforce?",
          "answer": "Tiered speed limits (25–30 km/h on roadways, 5–10 km/h walking pace on stand), speed governors, GPS geofencing, and strict ADA training under ADR.OR.D.017."
        },
        {
          "question": "4. Final Operational Decision: How does the TSEEAC Safety Officer maintain a healthy reporting culture?",
          "answer": "Enforces a non-punitive Just Culture ensuring all accidental contacts are reported immediately without fear of reprisal, backed by regular Ramp Safety Committee reviews."
        }
      ],
      "rulesToReality": {
        "title": "Rules to Reality: 60-Second Stand-Up Spoken Wrap-Up",
        "prompt": "In pairs, deliver an unscripted 60-second operational summary explaining: 1) What is the core message of SIB 2024-09? 2) Why do ground crews sometimes exceed speed limits or conceal minor scrapes under tight turnarounds? 3) How does an active 90-second morning stand-up briefing prevent a serious aircraft accident?"
      }
    }
  }
};

function formatFields(obj, indentSpaces) {
  const jsonStr = JSON.stringify(obj, null, 2);
  const lines = jsonStr.split('\n');
  // Strip opening "{\n" and closing "\n}"
  const innerLines = lines.slice(1, -1);
  const baseIndent = ' '.repeat(indentSpaces);
  return innerLines.map(l => baseIndent + l.slice(2)).join('\n') + ',\n';
}

// Format for cd["1"] (8 spaces) and cd.aas["1"] (10 spaces)
const formatted8 = formatFields(session2Fields, 8);
const formatted10 = formatFields(session2Fields, 10);

// Find indices
let idx1Start = -1, idx1End = -1;
let idx2Start = -1, idx2End = -1;

for (let i = 0; i < fileLines.length; i++) {
  if (fileLines[i].includes('"2": {')) {
    if (idx1Start === -1) {
      idx1Start = i + 1; // start after "2": {
      for (let j = i + 1; j < fileLines.length; j++) {
        if (fileLines[j].includes('"revision": {')) {
          idx1End = j; // end before "revision": {
          break;
        }
      }
    } else if (idx2Start === -1 && i > 10000) {
      idx2Start = i + 1;
      for (let j = i + 1; j < fileLines.length; j++) {
        if (fileLines[j].includes('"revision": {')) {
          idx2End = j;
          break;
        }
      }
    }
  }
}

console.log(`cd["1"] range: lines ${idx1Start + 1} to ${idx1End}`);
console.log(`cd.aas["1"] range: lines ${idx2Start + 1} to ${idx2End}`);

if (idx1Start === -1 || idx1End === -1 || idx2Start === -1 || idx2End === -1) {
  console.error("Could not find ranges!");
  process.exit(1);
}

// Replace in cd.aas first (so indices in cd["1"] aren't affected)
const linesPart3 = fileLines.slice(idx2End);
const linesPart2 = fileLines.slice(idx1End, idx2Start);
const linesPart1 = fileLines.slice(0, idx1Start);

const newLinesCd1 = formatted8.split('\n');
if (newLinesCd1[newLinesCd1.length - 1] === '') newLinesCd1.pop();

const newLinesCdAas = formatted10.split('\n');
if (newLinesCdAas[newLinesCdAas.length - 1] === '') newLinesCdAas.pop();

const finalLines = [
  ...linesPart1,
  ...newLinesCd1,
  ...linesPart2,
  ...newLinesCdAas,
  ...linesPart3
];

fs.writeFileSync(filePath, finalLines.join('\n'), 'utf8');
console.log("Successfully updated course-data.js!");
