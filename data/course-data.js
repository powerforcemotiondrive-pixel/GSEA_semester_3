/**
 * GSEA Semester 3 - Technical English (AT • LV125E)
 * Complete Course Data Architecture
 * Author: Phil PARRIS (LH/LAN)
 */
(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
  } else {
    root.COURSE_DATA = factory();
  }
})(typeof self !== "undefined" ? self : this, function () {
  const aasData = {
  "1": {
    "id": 1,
    "name": "Module 1",
    "title": "Documents & Maps",
    "ddrs": {
      "title": "Développement Durable & Responsabilité Sociétale : Tags et Définitions Officielles",
      "summary": "Le Référentiel National DD&RS de l'Enseignement Supérieur et de la Recherche (Label DD&RS) structure les engagements écologiques, sociétaux et éthiques des établissements et des grands projets de transport selon 5 axes stratégiques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs1.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Stratégie",
          "desc": "Intégration du développement durable dans la vision, le projet d'établissement et le pilotage décisionnel. Dialogue continu avec les parties prenantes (étudiants, personnels, collectivités, partenaires), allocation de budgets dédiés et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et Pédagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-écologique (limites planétaires, climat, biodiversité). Intégration transversale des compétences DD&RS (rapport Jouzel / socle MESR) pour préparer les ingénieurs à la prise de décision éthique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activité scientifique et technologique en réponse aux Objectifs de Développement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, éco-conception et transfert de technologies vertes au service de la société."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Maîtrise et réduction continue des impacts écologiques directs : décarbonation des mobilités pendulaires et professionnelles, efficacité et sobriété énergétique du patrimoine bâti, gestion circulaire des déchets, préservation de la biodiversité sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilité sociétale : égalité professionnelle femmes-hommes, inclusion et accessibilité des personnes en situation de handicap, égalité des chances, amélioration de la qualité de vie et santé globale, et prévention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Stratégie",
          "desc": "Intégration du développement durable dans la vision, le projet d'établissement et le pilotage décisionnel. Dialogue continu avec les parties prenantes (étudiants, personnels, collectivités, partenaires), allocation de budgets dédiés et suivi d'indicateurs d'impact mesurables.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et Pédagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-écologique (limites planétaires, climat, biodiversité). Intégration transversale des compétences DD&amp;RS (rapport Jouzel / socle MESR) pour préparer les ingénieurs à la prise de décision éthique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activité scientifique et technologique en réponse aux Objectifs de Développement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, éco-conception et transfert de technologies vertes au service de la société.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Maîtrise et réduction continue des impacts écologiques directs : décarbonation des mobilités pendulaires et professionnelles, efficacité et sobriété énergétique du patrimoine bâti, gestion circulaire des déchets, préservation de la biodiversité sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilité sociétale : égalité professionnelle femmes-hommes, inclusion et accessibilité des personnes en situation de handicap, égalité des chances, amélioration de la qualité de vie et santé globale, et prévention de toute forme de discrimination.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilité Durable &amp; Report Modal (Sustainable Mobility)",
          "desc": "Stratégie d'optimisation des transports articulée autour de la hiérarchie « Éviter - Transférer - Améliorer » (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilités douces face à l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'Émissions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation réglementaire des gaz à effet de serre (méthode ADEME / ISO 14064) sur les trois périmètres : Scope 1 (émissions directes), Scope 2 (émissions indirectes énergétiques) et Scope 3 (émissions indirectes amont/aval : déplacements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobriété Énergétique &amp; Efficacité",
          "desc": "Démarche articulant la sobriété (questionnement et réduction des consommations par la modification des comportements et des usages collectifs) et l'efficacité (optimisation technique des rendements énergétiques pour un même niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Préservation de la Biodiversité &amp; Zéro Artificialisation Nette (ZAN)",
          "desc": "Protection des écosystèmes et des continuités écologiques (trames vertes et bleues). Application des exigences légales (loi Climat et Résilience) visant à stopper la disparition nette d'espaces naturels et agricoles causée par les infrastructures et l'aménagement.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "Équité Territoriale &amp; Accessibilité (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un accès universel, abordable et sécurisé aux réseaux de transport et aux services d'intérêt général pour l'ensemble des territoires (urbains, périurbains et ruraux), luttant contre la fracture et la précarité mobilité.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables &amp; Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Intégration systématique de critères environnementaux et sociaux dans la commande publique et privée. Évaluation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'à son recyclage ou élimination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de Développement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interdépendants pour concilier prospérité économique, progrès social et protection de la biosphère. Les politiques de transport et d'ingénierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "overview": {
                  "intro": "Welcome to Session 1 of Technical English on Regulatory Documentation! This opening session trains GSEA students to navigate authentic European civil aviation regulations (EASA Easy Access Rules for Aerodromes — Part-ADR.OPS) with confidence. You will master the exact legal and operational weight of core modal verbs (shall, must, should, may), explore how European directives govern aerodrome obstacle control, safeguarding surfaces, and aerodrome works safety, and learn how to translate dense legal language into clear, spoken operational instructions.",
                  "whyItMatters": "In European airport operations, modal verbs define the precise legal obligation of every rule. For TSEEAC airside personnel, safety inspectors, and aerodrome managers, mistaking 'should' (an advisory recommendation) for 'shall' (a mandatory hard law) can result in regulatory breaches, audit non-compliance, or catastrophic runway incidents. Delivering clear, de-nominalized verbal instructions ensures multinational ground crews and construction contractors understand safety responsibilities immediately.",
                  "keyTerms": [
                            {
                                      "term": "Obstacle Limitation Surface (OLS)",
                                      "ipa": "/ˈɒb.stə.kl̩ ˌlɪm.ɪˈteɪ.ʃən ˈsɜː.fɪs/",
                                      "definition": "Airspace boundaries around an aerodrome kept strictly free from obstructions to protect aircraft during takeoff, climb, and approach."
                            },
                            {
                                      "term": "Safeguarding",
                                      "ipa": "/ˈseɪfˌɡɑː.dɪŋ/",
                                      "definition": "Mandatory surveillance and coordination process controlling developments, crane permits, and land use within and around the aerodrome."
                            },
                            {
                                      "term": "Visual Line of Sight (VCR)",
                                      "ipa": "/ˈvɪʒ.u.əl laɪn əv saɪt/",
                                      "definition": "Unobstructed direct visibility required from the Air Traffic Control Tower Visual Cab Room to all active movement areas."
                            },
                            {
                                      "term": "Displaced Threshold",
                                      "ipa": "/dɪsˈpleɪst ˈθreʃ.həʊld/",
                                      "definition": "A designated landing threshold relocated down the runway to provide obstacle clearance during aerodrome works."
                            },
                            {
                                      "term": "Declared Distances (TORA / LDA)",
                                      "ipa": "/dɪˈkleəd ˈdɪs.təns.ɪz/",
                                      "definition": "Officially published runway operational lengths (e.g. Take-Off Run Available, Landing Distance Available) recalculated during maintenance."
                            },
                            {
                                      "term": "NOTAM (Notice to Airmen)",
                                      "ipa": "/ˈnəʊ.tæm/",
                                      "definition": "Telecommunication notice published without delay to alert pilots to temporary changes in runway lengths, worksites, or unserviceable visual aids."
                            },
                            {
                                      "term": "Frangible Barrier",
                                      "ipa": "/ˈfræn.dʒɪ.bl̩ ˈbær.i.ər/",
                                      "definition": "Lightweight, hazard-marked barriers designed to break safely upon impact without endangering aircraft."
                            },
                            {
                                      "term": "Broom-Clean",
                                      "ipa": "/bruːm kliːn/",
                                      "definition": "Operational certification that a runway surface is completely swept, inspected, and certified free of foreign object debris (FOD) before reopening."
                            },
                            {
                                      "term": "Hand-Back Criteria",
                                      "ipa": "/hænd bæk kraɪˈtɪə.ri.ə/",
                                      "definition": "Formal safety conditions and joint physical inspection protocols required before returning a closed taxiway or runway to live air traffic."
                            },
                            {
                                      "term": "Conspicuous Marking",
                                      "ipa": "/kənˈspɪk.ju.əs ˈmɑː.kɪŋ/",
                                      "definition": "High-visibility paint schemes and flashing obstacle beacons required on all airside vehicles operating on movement areas."
                            }
                  ],
                  "speakingTask": {
                            "title": "Authentic EASA Workshop • Obstacle Safeguarding & Aerodrome Works Safety",
                            "instructions": "This extension activity provides authentic regulatory practice using the official EASA Part-ADR.OPS synthesis below. Working in pairs or trios, Student A formulates mandatory safeguarding requirements, temporary obstacle buffer zones, and NOTAM notifications under Point ADR.OPS.B.070, while Student B audits the hand-back criteria, broom-clean inspection protocol, and vehicle lighting under Points ADR.OPS.B.075 & B.080. Conclude with a 2-minute spoken summary.",
                            "document": {
                                      "title": "EASA Part-ADR.OPS Synthesis: Obstacle Safeguarding & Aerodrome Works Safety",
                                      "subtitle": "Regulation (EU) No 139/2014 Extract • Points ADR.OPS.B.070, B.075 & B.080",
                                      "filename": "GSEA_S3_M1_S1_EASA_Part_ADR_OPS_Synthesis.pdf",
                                      "path": "docs/GSEA_S3_M1_S1_EASA_Part_ADR_OPS_Synthesis.pdf",
                                      "moodleNote": "Also available in your ENAC Moodle course space under Regulatory Documentation"
                            },
                            "requirements": [
                                      "Use at least 4 of today's 10 technical terms (e.g. OLS, Safeguarding, Displaced Threshold, Broom-Clean).",
                                      "Identify the critical modal anchor ('shall', 'should', or 'may') and justify why it matters operationally.",
                                      "Ensure both partners actively speak during your 2-minute summary or pair debate."
                            ],
                            "checkingPhrases": [
                                      "\"Hold on, does Point ADR.OPS.B.070 classify that as Hard Law (shall) or an AMC (should)?\"",
                                      "\"Wait, what declared distances are affected: TORA, ASDA, or LDA?\"",
                                      "\"Stop there—has the pavement been certified broom-clean before hand-back?\"",
                                      "\"Let's verify the exact clause in Subpart ADR.OPS.B.075 regarding tower visual lines of sight...\""
                            ],
                            "statements": {
                                      "group1": "Contractor works near an active runway create higher incursion risks than normal flight operations, even when marked with unserviceability lights.",
                                      "group2": "Mandatory line-of-sight protection from the control tower (VCR) should strictly prohibit any temporary construction cranes within 3 km of the aerodrome boundary.",
                                      "group3": "A shortened runway declared distance (TORA/LDA) should automatically trigger daytime-only operations, regardless of weather conditions."
                            },
                            "usefulPhrases": [
                                      "Under Point ADR.OPS.B.070, the operator must establish procedures ensuring that...",
                                      "Prior to hand-back and return to service, a joint physical inspection must certify that...",
                                      "The obstacle limitation surface (OLS) is penetrated by mobile equipment, which requires...",
                                      "To mitigate the risk of surface contamination or runway incursions, our team proposes..."
                            ]
                  }
        },
        "objectives": {
          "title": "Session 1 Objectives - EASA Rules & Modal Precision",
          "summary": "By the end of this session, GSEA students will be able to navigate dense airport regulations with confidence, identify the critical differences in spoken authority between mandatory rules (shall/must), recommendations (should), and permissions (may/can), decode formal bureaucratic jargon into plain English, transform heavy written passive text into clear spoken ramp instructions, actively catch compliance errors in peer speech, and successfully role-play an obstacle safety negotiation.",
          "items": [
            {
              "num": 1,
              "title": "Navigating Technical Documentation (Reading Strategies & Fluency)",
              "description": "Discuss common frustrations with 300-page official manuals and apply practical scanning techniques to locate safety-critical details quickly without getting bogged down in legal text.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "The Modal Authority Spectrum (Language Accuracy & Tone)",
              "description": "Master the spoken authority ladder in technical operations: 100% legal obligation (shall / must), zero tolerance prohibition (shall not), 75% standard best practice (should), and optional permission (may / can).",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Jargon Buster: Decoding Formal English (Vocabulary & Paraphrasing)",
              "description": "Translate 8 formal regulatory expressions (pursuant to, without prejudice to, derogation, competent authority, repealed with effect from) into natural, plain operational English.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Direct Phrasing & De-Nominalization (Clarity Clinic)",
              "description": "Convert stiff, noun-heavy administrative sentences into direct, active spoken instructions suitable for fast-paced airside communications.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Auditory Discrimination: Spot the Compliance Bug (Active Listening & Interruption)",
              "description": "Listen closely to peer read-throughs and use polite, professional interruption phrases (\"Hold on, did you say SHALL or SHOULD?\", \"Wait, is that 24 hours or 72 hours?\") to detect intentional errors in authority and factual parameters.",
              "part": "Part 5"
            },
            {
              "num": 6,
              "title": "Collaborative Negotiation & Safety Decision (Spoken Interaction)",
              "description": "Role-play a realistic 3-student discussion between a GSEA Safety Officer and a Construction Manager regarding a crane near Runway 09, apply EASA obstacle rules, and complete a collaborative Safety Check.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan - EASA Rules & Modal Precision (2 Hours)",
          "summary": "A 2-hour communicative spoken English session for GSEA students covering document scanning strategies, the modal commitment spectrum, a plain English jargon buster, de-nominalization for direct ramp speech, the interactive Spot the Compliance Bug listening game, an authentic obstacle safeguarding negotiation, and a collaborative Safety Check.",
          "items": [
            {
              "part": "Part 1",
              "title": "Part 1: Warm-up & The Modal Spectrum",
              "description": "Students discuss what makes 300-page official manuals hard to read in English, test entry knowledge with 4 quick spot-check questions, and explore the interactive Modal Spectrum Table (SHALL/MUST 100% -> SHOULD 75% -> MAY/CAN 0-50%), discussing how modal choice changes the tone of operational commands."
            },
            {
              "part": "Part 2",
              "title": "Part 2: Authentic Document Extract & Jargon Buster",
              "description": "Students scan authentic EASA extracts (obstacle limitation rules for cranes & FOD control regulations) and complete the Jargon Buster matching clinic, translating 8 formal bureaucratic phrases into plain operational English."
            },
            {
              "part": "Part 3",
              "title": "Part 3: Language Clinic: Words for Rules & Direct Phrasing",
              "description": "Students complete 5 modal accuracy drills and work through the De-Nominalization Clinic, practicing how to rewrite and speak heavy legal text as crisp, direct ramp instructions."
            },
            {
              "part": "Part 4",
              "title": "Part 4: Spoken Interaction: Spot the Bug & Contractor Role-Play",
              "description": "In pairs, students play the Spot the Compliance Bug auditory barrier game, using spoken checking and interruption phrases to catch contradictions in apron speed, lightning refuelling, occurrence reporting, and de-icing runoff. Students then transition into the 3-way Crane Negotiation Role-Play debating a 48m crane near Runway 09."
            },
            {
              "part": "Part 5",
              "title": "Part 5: Safety Check & Rules to Reality",
              "description": "Students collaborate on the 4-step crane risk evaluation (hazard, flight risk, protective mitigations, final decision) and deliver an unscripted 60-second pair explanation describing what happens in reality on the ramp if rules are ignored."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "EASA Rules & Modal Precision",
            "subtitle": "Navigating Airport Regulations, Modal Authority & Safeguarding in Plain English",
            "image": "images/s3_m1_session1_easa.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training (TSEEAC Airside & Safeguarding Focus)",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up & Entry Spot-Check",
            "summary": "Break the ice, discuss reading challenges in English, and test your baseline knowledge of airport rules.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Discussion"
            ],
            "instructions": [
              "In pairs, discuss the 3 opening questions about reading official manuals in English.",
              "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
              "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
            ],
            "deliverable": "Shared agreement on 2 quick scanning tricks and completed 4-question diagnostic.",
            "teacherNotes": "Encourage spontaneous speaking. Don't worry about perfect grammar during warm-up; focus on building confidence and getting students comfortable talking about rules in English.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "Why are official aviation manuals often 300 to 500 pages long?",
                "exampleAnswers": [
                  "In my opinion, it is because aviation safety leaves zero room for guessing. The rules have to cover every possible weather condition, airport layout, aircraft size, and emergency scenario.",
                  "Also, many rules are written after real accidents. Every time investigators discover a new hazard, a new safety rule is added to make sure it never happens again."
                ],
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "When you need to find one specific rule in a huge PDF, what is your personal strategy?",
                "exampleAnswers": [
                  "I always press Ctrl + F (or Cmd + F) and search for very specific keywords—like 'crane', 'gradient', or '28 days'—rather than reading through dozens of pages.",
                  "My strategy is to check the Table of Contents first to find the right Subpart (like Subpart H for obstacle surfaces), and then scan the section titles."
                ],
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "Have you ever had to explain a complicated rule to someone who didn't understand it?",
                "exampleAnswers": [
                  "Yes, during an internship, I had to explain to a delivery driver why he couldn't park near the apron gate. I explained that an aircraft was arriving in 15 minutes and needed the space clear.",
                  "I think the best trick is to explain the safety reason behind the rule ('It protects landing planes from hitting obstacles') rather than just saying 'No, it's forbidden'."
                ],
                "part": "Part 3"
              }
            ],
            "diagnostic": {
              "title": "Airport Rules Entry Spot-Check",
              "instructions": "Discuss each question with your partner, then click to check your answer.",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the simple difference between a Law (Regulation) and a Guide (Guidance Material)?",
                  "answer": "A Law is mandatory (you must obey it 100% or face legal penalties). A Guide gives practical advice and examples to help you follow the law correctly.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "In European aviation documents, what does the word 'SHALL' mean?",
                  "answer": "'Shall' means a mandatory requirement. You have no choice: it is required by law.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "What is an 'Obstacle Limitation Surface' (OLS) in everyday words?",
                  "answer": "It is an invisible safety bubble or slope in the sky around the runway where tall cranes, trees, and buildings are strictly forbidden to protect landing planes.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "What is a NOTAM (Notice to Airmen)?",
                  "answer": "A quick, urgent official alert sent to all pilots informing them about temporary airport hazards, such as closed taxiways, broken lights, or construction cranes.",
                  "part": "Part 4"
                }
              ]
            },
            "modalSpectrum": [
              {
                "level": "SHALL / MUST",
                "commitment": "100% Mandatory",
                "desc": "Strict legal obligation. Non-compliance constitutes a safety breach or legal violation.",
                "tone": "Firm command / direct order",
                "color": "rose"
              },
              {
                "level": "SHALL NOT",
                "commitment": "Prohibition",
                "desc": "Zero tolerance. Strictly forbidden under law or operational directives.",
                "tone": "Absolute restriction",
                "color": "red"
              },
              {
                "level": "SHOULD",
                "commitment": "75% Recommended (AMC)",
                "desc": "Acceptable Means of Compliance. Standard best practice; deviations require formal safety approval.",
                "tone": "Strong recommendation / best practice",
                "color": "amber"
              },
              {
                "level": "MAY / CAN",
                "commitment": "0–50% Discretionary (GM)",
                "desc": "Guidance Material. An authorized option, illustrative example, or statutory permission.",
                "tone": "Permitted option / practical method",
                "color": "emerald"
              }
            ]
          },
          "documentExtract": {
            "title": "Activity 2: Reading the EASA Crane Rule",
            "summary": "Scan an authentic, expanded EASA regulatory extract to locate safety surfaces and crane rules.",
            "modeBadges": [
              "Pairs or Small Groups",
              "Document Scanning"
            ],
            "instructions": [
              "Examine the official EASA extract below (CS-ADR-DSN Subpart H & GM1).",
              "Notice the layout: Regulation number, title, sub-paragraphs, and Guidance Material.",
              "Work with your partner to answer the 4 reading questions below.",
              "Click 'Reveal Answer' to verify your answers."
            ],
            "deliverable": "Completed answers to all 4 reading questions with exact clause references.",
            "teacherNotes": "Point out how European rules use numbering (H.400, H.415) and how GM (Guidance Material) provides practical explanations. Remind students they don't need to read every single word—train them to scan for keywords like 'gradient', '28 days', and 'NOTAM'.",
            "docRef": "EASA CS-ADR-DSN • Subpart H — Obstacle Limitation Surfaces",
            "docText": "[EASA CS-ADR-DSN — BOOK 1: CERTIFICATION SPECIFICATIONS FOR AERODROMES DESIGN]\nSUBPART H — OBSTACLE LIMITATION SURFACES (OLS)\n\nCS-ADR-DSN.H.400 Purpose & Applicability\n(a) The purpose of the obstacle limitation surfaces is to define the airspace around aerodromes to be maintained free from obstacles so as to permit the intended aeroplane operations at the aerodromes to be conducted safely and to prevent the aerodromes from becoming unusable by the growth of obstacles around the aerodromes.\n(b) These specifications shall apply to all runways intended for use by commercial air transport aeroplanes.\n\nCS-ADR-DSN.H.415 Approach Surface Specifications\n(a) Applicability: An approach surface shall be established for each runway direction intended to be used for landing.\n(b) Characteristics: The limits of the approach surface shall comprise:\n    (1) An inner edge of specified length, horizontal and perpendicular to the extended runway centre line, located at a distance of 60 m prior to the runway threshold.\n    (2) Two sides originating at the ends of the inner edge and diverging uniformly at a rate of 10% (Code 3/4) from the extended runway centre line.\n    (3) An outer edge parallel to the inner edge located at the specified distance.\n(c) Elevation: The elevation of the inner edge shall be equal to the elevation of the midpoint of the threshold.\n(d) Slope: The slope of the approach surface shall be measured in the vertical plane containing the centre line of the runway and shall not exceed 2.0% (1:50 gradient) for code number 3 and 4 precision instrument runways.\n(e) Prohibition: New objects or extensions of existing objects shall not be permitted above an approach surface within the aerodrome safeguarding boundary except when, in the opinion of the appropriate authority, the new object or extension would be shielded by an existing immovable object.\n\nGM1 CS-ADR-DSN.H.415 Construction Equipment & Mobile Cranes\n(a) Mobile obstacles, including tall building cranes, concrete pump vehicles, and drilling rigs operating in the vicinity of the aerodrome, constitute temporary obstacles and shall be safeguarded in advance.\n(b) Construction contractors intending to erect any crane exceeding 25 metres above ground level within 4 kilometres of the aerodrome reference point shall provide written notification to the aerodrome operator at least 28 calendar days prior to assembly.\n(c) Where a temporary obstacle penetrates an established obstacle limitation surface, the aerodrome operator shall request the competent civil aviation authority to issue a Notice to Airmen (NOTAM), mandate low-intensity or medium-intensity red obstacle warning lights, and establish operational restrictions if safety margins are compromised.",
            "questions": [
              {
                "id": 1,
                "q": "Where does the Approach Surface start in relation to the runway threshold?",
                "answer": "Clause H.415(b)(1) states it starts at an inner edge located 60 metres prior to the runway threshold.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "q": "What is the maximum allowed upward slope (gradient) for precision runways?",
                "answer": "Clause H.415(d) states the slope shall not exceed 2.0% (which means a 1:50 gradient).",
                "part": "Part 2"
              },
              {
                "id": 3,
                "q": "Are builders allowed to build new structures above this approach surface?",
                "answer": "Clause H.415(e) states new objects shall not be permitted above an approach surface, unless they are shielded by an existing permanent object.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "q": "How many days in advance must a construction company tell the airport before putting up a crane over 25m?",
                "answer": "Clause GM1 CS-ADR-DSN.H.415(b) requires written notification at least 28 calendar days prior to crane assembly.",
                "part": "Part 4"
              }
            ],
            "jargonBuster": [
              {
                "id": 1,
                "formal": "Pursuant to Article 4(...)",
                "plain": "Following / According to Article 4",
                "note": "Direct reference to an active rule"
              },
              {
                "id": 2,
                "formal": "Without prejudice to Subpart C(...)",
                "plain": "Without affecting or altering existing rules in Subpart C",
                "note": "Protects existing regulations"
              },
              {
                "id": 3,
                "formal": "Shall enter into force on(...)",
                "plain": "Becomes legally binding and active on [date]",
                "note": "Official starting date"
              },
              {
                "id": 4,
                "formal": "Competent authority",
                "plain": "The official oversight body (e.g., DSAC / DGAC in France)",
                "note": "Regulatory inspectorate"
              },
              {
                "id": 5,
                "formal": "Derogation from the rule",
                "plain": "An authorized exception to the general requirement",
                "note": "Official exemption"
              },
              {
                "id": 6,
                "formal": "Consolidated version",
                "plain": "Combined updated text containing all previous amendments",
                "note": "All-in-one text"
              },
              {
                "id": 7,
                "formal": "Opt-outs notified by Member States",
                "plain": "Formal exemptions permitted to Member States",
                "note": "National exemptions"
              },
              {
                "id": 8,
                "formal": "Repealed with effect from(...)",
                "plain": "Officially cancelled and replaced starting on [date]",
                "note": "Outdated rule removed"
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: Words for Rules: Must, Shall, Should, May",
            "summary": "Master the words used in aviation rules to express legal obligations, prohibitions, and advice.",
            "modeBadges": [
              "Individual & Pairs",
              "Language Clinic"
            ],
            "instructions": [
              "Review the plain English explanation table below.",
              "Complete the 5 practice sentences by choosing the correct rule word.",
              "Click 'Check Answer' to verify your choice and read the reason."
            ],
            "deliverable": "Completed 5-question language clinic with 100% correct rule identification.",
            "teacherNotes": "Emphasize to students that in French 'doit' can mean both 'shall' and 'should'. In English aviation rules, 'shall' is 100% compulsory law, while 'should' is strong advice. Getting this wrong can cause major legal confusion!",
            "rulesTable": [
              {
                "word": "Shall / Must",
                "meaning": "100% Mandatory Rule",
                "example": "The airport shall install red warning lights on the crane.",
                "tip": "Use when the rule is required by law with zero choice.",
                "part": "Part 1"
              },
              {
                "word": "Shall not / Must not",
                "meaning": "Strictly Forbidden",
                "example": "Cranes shall not penetrate the approach surface.",
                "tip": "Use when an action is illegal and dangerous.",
                "part": "Part 2"
              },
              {
                "word": "Should",
                "meaning": "Strong Recommendation",
                "example": "The builder should lower the crane boom at night.",
                "tip": "Best practice and advice, but not an absolute legal duty.",
                "part": "Part 3"
              },
              {
                "word": "May",
                "meaning": "Allowed / Optional",
                "example": "The contractor may apply for a special night permit.",
                "tip": "Use when an option or permission is available.",
                "part": "Part 4"
              }
            ],
            "drills": [
              {
                "id": 1,
                "sentence": "Contractors _______ notify the airport operator 28 days before erecting a tall crane.",
                "options": [
                  "shall",
                  "should",
                  "may"
                ],
                "correct": "shall",
                "rationale": "This is a mandatory safety rule required by GM1 CS-ADR-DSN.H.415(b).",
                "part": "Part 1"
              },
              {
                "id": 2,
                "sentence": "Unshielded objects _______ be permitted above the approach slope.",
                "options": [
                  "shall not",
                  "may not",
                  "should not"
                ],
                "correct": "shall not",
                "rationale": "Clause H.415(e) strictly forbids new obstacles penetrating the approach surface.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "sentence": "To reduce danger, builders _______ lower the crane boom whenever winds exceed 30 knots.",
                "options": [
                  "should",
                  "may",
                  "shall not"
                ],
                "correct": "should",
                "rationale": "This is a strong recommended safety precaution.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "sentence": "The airport operator _______ issue a temporary permit if all safety conditions are met.",
                "options": [
                  "may",
                  "shall not",
                  "must not"
                ],
                "correct": "may",
                "rationale": "The operator has the permission and authority to approve it if safe.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "sentence": "All airside construction workers _______ wear high-visibility vests at all times.",
                "options": [
                  "must",
                  "may",
                  "could"
                ],
                "correct": "must",
                "rationale": "High-visibility gear is an absolute mandatory safety requirement.",
                "part": "Part 5"
              }
            ],
            "denominalizationClinic": [
              {
                "id": 1,
                "legal": "Implementation of immediate containment measures shall be conducted by the operator upon the identification of a hydraulic fluid spill exceeding 5 square metres.",
                "direct": "Ground staff must contain hydraulic spills over 5 m² immediately.",
                "explanation": "Convert passive nominalization \"implementation shall be conducted upon identification\" into direct, active imperative speech (\"must contain immediately\")."
              },
              {
                "id": 2,
                "legal": "Notification of the competent authority regarding runway incursions should be executed by the safety manager within a timeframe not exceeding 72 hours.",
                "direct": "The safety manager should notify DSAC of runway incursions within 72 hours.",
                "explanation": "Convert \"notification should be executed within a timeframe not exceeding\" into clear active verb \"should notify\"."
              },
              {
                "id": 3,
                "legal": "Placement of rubber chocks against the main landing gear tyres shall be performed immediately upon the complete cessation of aircraft movement.",
                "direct": "Handlers must chock the main wheels immediately after the aircraft stops.",
                "explanation": "Convert \"placement shall be performed upon complete cessation\" into direct spoken command \"must chock after the aircraft stops\"."
              }
            ]
          },
          "spokenActivity": {
            "title": "Activity 4: Speaking Role-Play: Talking to the Builder",
            "summary": "Role-play a polite, professional discussion between a GSEA safety officer and a construction contractor.",
            "modeBadges": [
              "Groups of 3",
              "Spoken Role-Play"
            ],
            "instructions": [
              "Form groups of 3 students: Student A (GSEA Safety Officer), Student B (Building Contractor), Student C (Observer / Coach).",
              "Read the scenario carefully. You have 5 minutes to prepare your arguments.",
              "Conduct the 6-minute spoken role-play using the 'Useful Phrases' box.",
              "Student C provides 2 minutes of feedback using the Peer Checklist, then switch roles."
            ],
            "deliverable": "Spoken role-play completed by all students with agreed safety compromise.",
            "teacherNotes": "Ensure students use polite, diplomatic English rather than aggressive confrontation. Useful phrases like 'According to the safety rules...' and 'What we can do is...' help maintain a cooperative atmosphere.",
            "scenario": "A construction company wants to put up a 48-metre mobile crane 1,200 metres from Runway 09 to build a new airport hotel. The crane will penetrate the approach surface by 6 metres. The contractor needs to start tomorrow, but they only sent the request yesterday!",
            "roles": [
              {
                "title": "Student A: GSEA Safety Officer",
                "badge": "Safety & Compliance",
                "bullets": [
                  "Explain politely that the 28-day notification rule was not respected.",
                  "Show that the 48m crane penetrates the approach slope by 6m (illegal).",
                  "Propose a safe solution: lower the crane to 38m, work only at night (23h–05h) during runway closure, install flashing red lights, and wait 5 days for a NOTAM."
                ],
                "part": "Part 1"
              },
              {
                "title": "Student B: Construction Manager",
                "badge": "Project & Deadlines",
                "bullets": [
                  "Explain that delays cost €15,000 per day in rented equipment.",
                  "Argue that the crane is off to the side and not directly in front of the runway.",
                  "Try to negotiate starting earlier, but agree to safety lights and night work if necessary."
                ],
                "part": "Part 2"
              },
              {
                "title": "Student C: Observer & Coach",
                "badge": "Peer Feedback",
                "bullets": [
                  "Listen carefully to both speakers.",
                  "Check: Did Student A use correct rule words (shall, must, should)?",
                  "Check: Was the conversation polite and professional?",
                  "Give 2 positive points and 1 suggestion for improvement."
                ],
                "part": "Part 3"
              }
            ],
            "usefulPhrases": [
              "According to EASA safety rules, we cannot allow...",
              "I completely understand your deadline, but flight safety is our top priority.",
              "The problem is that the crane penetrates the approach safety surface by 6 metres.",
              "What we can propose instead is...",
              "If you agree to work only at night and install red lights, we can approve it.",
              "Let's write down this agreement so both sides are protected."
            ],
            "spotTheBug": {
              "title": "Interactive Listening Barrier Game: Spot the Compliance Bug",
              "instructions": "Student A reads the authentic EASA extract aloud clearly at normal operational pace. Student B follows their bugged copy and must interrupt immediately using spoken checking phrases when they hear a contradiction in modal tone, numbers, or deadlines.",
              "checkingPhrases": [
                "Hold on a second, did you say SHALL or SHOULD?",
                "Wait, let me double check that number—did you say 5 km or 15 km?",
                "Stop there—that sounds optional, but isn't it mandatory?",
                "Wait, did you say 24 hours or 72 hours?"
              ],
              "pairs": [
                {
                  "id": 1,
                  "topic": "Apron Vehicle Movement & Right of Way (ADR.OPS.B.028)",
                  "studentA": "Drivers operating on the airside movement area SHALL give way to moving aircraft, aircraft under tow, and emergency response vehicles displaying active visual beacons. Except when strictly necessary for aircraft servicing operations, vehicles SHALL NOT be driven within the designated aircraft safety envelope. Aerodrome operators SHOULD establish mandatory maximum apron speed limits not exceeding 25 km/h on standard roadways and 10 km/h in the vicinity of aircraft stands.",
                  "studentB": "Drivers operating on the airside movement area MAY give way to moving aircraft, aircraft under tow, and emergency response vehicles displaying active visual beacons. Except when strictly necessary for aircraft servicing operations, vehicles SHALL be driven within the designated aircraft safety envelope. Aerodrome operators SHOULD establish mandatory maximum apron speed limits not exceeding 40 km/h on standard roadways and 10 km/h in the vicinity of aircraft stands.",
                  "bugs": [
                    "Bug 1: 'shall give way' changed to 'may give way' (Replaced strict legal command with optional courtesy)",
                    "Bug 2: 'shall not be driven' changed to 'shall be driven' (Prohibited area turned into mandatory command)",
                    "Bug 3: '25 km/h' changed to '40 km/h' (Factual/numerical parameter alteration)"
                  ]
                },
                {
                  "id": 2,
                  "topic": "Fuelling Safety & Lightning (ADR.OPS.B.055)",
                  "studentA": "Aircraft refuelling with passengers embarking, on board, or disembarking SHALL only take place when ground staff maintain a clear evacuation path through at least two cabin exits. All refuelling operations SHALL cease immediately if lightning discharges are detected within a 5-kilometre radius of the aerodrome perimeter. Aerodrome personnel SHOULD verify that fire-fighting suppression equipment is positioned within 30 metres of the fuelling connection point.",
                  "studentB": "Aircraft refuelling with passengers embarking, on board, or disembarking SHOULD only take place when ground staff maintain a clear evacuation path through at least two cabin exits. All refuelling operations SHALL cease immediately if lightning discharges are detected within a 15-kilometre radius of the aerodrome perimeter. Aerodrome personnel MAY verify that fire-fighting suppression equipment is positioned within 30 metres of the fuelling connection point.",
                  "bugs": [
                    "Bug 1: 'shall only take place' changed to 'should only take place' (Demoted hard law to AMC recommendation)",
                    "Bug 2: '5-kilometre' changed to '15-kilometre' (Factual weather distance bug)",
                    "Bug 3: 'should verify' changed to 'may verify' (Demoted recommended safety measure to optional discretion)"
                  ]
                },
                {
                  "id": 3,
                  "topic": "Occurrence Reporting & Timelines (ADR.OPS.B.080)",
                  "studentA": "Aerodrome operators and ground handling service providers SHALL report any safety-related occurrence involving runway incursions or aircraft damage to the competent authority within 72 hours of becoming aware of the event. Reports SHALL contain all relevant factual details regarding the environmental conditions, personnel qualifications, and equipment involved. When supplementary safety information becomes available after the initial submission, the operator SHOULD provide an updated analysis to the competent authority without undue delay.",
                  "studentB": "Aerodrome operators and ground handling service providers SHALL report any safety-related occurrence involving runway incursions or aircraft damage to the competent authority within 24 hours of becoming aware of the event. Reports MAY contain all relevant factual details regarding the environmental conditions, personnel qualifications, and equipment involved. When supplementary safety information becomes available after the initial submission, the operator SHALL NOT provide an updated analysis to the competent authority without undue delay.",
                  "bugs": [
                    "Bug 1: '72 hours' changed to '24 hours' (Procedural deadline error)",
                    "Bug 2: 'shall contain' changed to 'may contain' (Diluted mandatory report contents into optional suggestions)",
                    "Bug 3: 'should provide' changed to 'shall not provide' (Reversed compliance obligation into a prohibition)"
                  ]
                },
                {
                  "id": 4,
                  "topic": "De-icing Fluid Containment & Runoff (ADR.OPS.B.035)",
                  "studentA": "De-icing operations SHALL take place exclusively on designated de-icing pads equipped with fluid recovery drainage valves. Aerodrome operators SHALL NOT permit contaminated glycol fluid to drain into unlined perimeter ditches or municipal freshwater channels. In the event of an uncontained chemical release exceeding 500 litres, the aerodrome operator SHALL inform the competent authority within 2 hours.",
                  "studentB": "De-icing operations SHOULD take place exclusively on designated de-icing pads equipped with fluid recovery drainage valves. Aerodrome operators MAY permit contaminated glycol fluid to drain into unlined perimeter ditches or municipal freshwater channels. In the event of an uncontained chemical release exceeding 50 litres, the aerodrome operator SHALL inform the competent authority within 2 hours.",
                  "bugs": [
                    "Bug 1: 'shall take place' changed to 'should take place' (Hard law downgraded to AMC)",
                    "Bug 2: 'shall not permit' changed to 'may permit' (Prohibited environmental violation turned into permitted action)",
                    "Bug 3: '500 litres' changed to '50 litres' (Threshold reporting parameter bug)"
                  ]
                }
              ]
            }
          },
          "safetyCheck": {
            "title": "Activity 5: Safety Check: What Could Go Wrong?",
            "summary": "Work together to evaluate the crane hazard and confirm the safety decision.",
            "modeBadges": [
              "Whole Class / Pairs",
              "Safety Evaluation"
            ],
            "instructions": [
              "Review the 4 simple questions in the Safety Check table below.",
              "Ensure you can explain each row in clear, spoken English.",
              "Confirm the final decision as a team."
            ],
            "deliverable": "Completed Safety Check table verified by all students.",
            "teacherNotes": "This plain-English table replaces complicated technical risk matrices. It trains students to articulate problems, consequences, and solutions clearly.",
            "rows": [
              {
                "question": "1. What is the problem?",
                "answer": "A contractor wants to place a 48m crane near Runway 09 with only 24 hours notice, penetrating the approach surface by 6m.",
                "part": "Part 1"
              },
              {
                "question": "2. What could happen?",
                "answer": "An approaching plane in bad weather or low visibility could collide with the crane, or pilots could get distracted.",
                "part": "Part 2"
              },
              {
                "question": "3. How do we fix it?",
                "answer": "1) Reduce crane height to 38m maximum.<br>2) Install medium-intensity flashing red obstacle lights.<br>3) Restrict crane operations to night runway closure (23h00–05h00).<br>4) Issue an official NOTAM to all airlines.",
                "part": "Part 3"
              },
              {
                "question": "4. Our Decision",
                "answer": "APPROVED WITH CONDITIONS: The contractor may proceed once the 4 protective steps are verified on site.",
                "part": "Part 4"
              }
            ],
            "rulesToReality": {
              "title": "Rules to Reality: 60-Second Pair Spoken Wrap-Up",
              "prompt": "Pick one operational rule from today (crane height, FOD, apron speed, refuelling in lightning, or glycol runoff). In pairs, deliver an unscripted 60-second operational summary explaining: 1) What is the exact rule? 2) Why do ground teams sometimes ignore it? 3) What is the real-world safety consequence on the ramp?"
            }
          }
        },
        "revision": {
          "title": "Session 1 Revision - EASA Rules, Document Navigation & OLS",
          "summary": "30 essential operational and regulatory vocabulary terms for GSEA students covering EASA document structure, rule hierarchy, and obstacle safeguarding.",
          "terms": [
            {
              "num": "01",
              "term": "EASA",
              "definition": "European Union Aviation Safety Agency: the civil aviation authority setting safety rules across Europe.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Basic Regulation",
              "definition": "Regulation (EU) 2018/1139: the overarching European law establishing EASA and primary aviation rules.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Hard Law",
              "definition": "Legally binding aviation regulations that must be followed 100% by law across all EU Member States.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Soft Law",
              "definition": "Non-binding advisory material, standards, and recommendations providing guidance without direct legal penalty.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Implementing Rule (IR)",
              "definition": "Binding European executive regulations that apply directly in all Member States (e.g. Regulation 139/2014).",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Certification Specifications (CS)",
              "definition": "Technical aerodrome design standards adopted by EASA (such as CS-ADR-DSN for runways and taxiways).",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Acceptable Means of Compliance (AMC)",
              "definition": "Official technical specifications illustrating one approved way to comply with a binding rule.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Guidance Material (GM)",
              "definition": "Non-binding explanatory text and advice on how to understand and apply rules in daily practice.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Alternative Means of Compliance (AltMoC)",
              "definition": "An alternative method used by an airport to meet an Implementing Rule instead of the published AMC.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Easy Access Rules",
              "definition": "EASA consolidated publications combining Hard Law, AMC, and GM together into a single organized manual.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Subpart",
              "definition": "A major chapter or section within an EASA aviation rulebook (e.g., Subpart B: Certification).",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Clause / Article",
              "definition": "A numbered individual paragraph or legal requirement within an official regulation.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Cross-Reference",
              "definition": "A note or link directing the reader to another related document, article, or specification.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Shall",
              "definition": "The formal legal word indicating an absolute, mandatory requirement that must be followed 100%.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Shall Not",
              "definition": "The formal legal phrase indicating a strict, absolute prohibition; completely forbidden.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Should",
              "definition": "The formal word indicating a strong recommendation or best practice, but not an absolute legal duty.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "May",
              "definition": "The formal word indicating permission, allowance, or an optional course of action.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Applicability",
              "definition": "The official scope defining which airports, operators, or personnel a specific rule applies to.",
              "part": "Part 18"
            },
            {
              "num": "19",
              "term": "Compliance",
              "definition": "Full adherence and obedience to established laws, standards, and safety specifications.",
              "part": "Part 19"
            },
            {
              "num": "20",
              "term": "Oversight",
              "definition": "The ongoing monitoring, inspection, and auditing by civil aviation authorities to ensure safety standards.",
              "part": "Part 20"
            },
            {
              "num": "21",
              "term": "Obstacle Limitation Surface (OLS)",
              "definition": "Imaginary safety surfaces in the sky defining airspace that must remain free of tall objects.",
              "part": "Part 21"
            },
            {
              "num": "22",
              "term": "Approach Surface",
              "definition": "An inclined safety plane extending outward and upward before the runway threshold.",
              "part": "Part 22"
            },
            {
              "num": "23",
              "term": "Inner Edge",
              "definition": "The horizontal baseline of an approach surface closest to the runway threshold.",
              "part": "Part 23"
            },
            {
              "num": "24",
              "term": "Slope Gradient",
              "definition": "The rate of incline of a safety surface, expressed as a ratio or percentage (e.g., 2% or 1:50).",
              "part": "Part 24"
            },
            {
              "num": "25",
              "term": "Penetration",
              "definition": "When a building, tree, or crane extends above an imaginary obstacle limitation surface, creating a hazard.",
              "part": "Part 25"
            },
            {
              "num": "26",
              "term": "Shielding Principle",
              "definition": "The rule allowing an obstacle if a larger, permanent structure already exists in front of it.",
              "part": "Part 26"
            },
            {
              "num": "27",
              "term": "Safeguarding Boundary",
              "definition": "The legally defined geographic consultation zone around an aerodrome protecting flight paths.",
              "part": "Part 27"
            },
            {
              "num": "28",
              "term": "Prior Notification",
              "definition": "Official advance notice required before starting construction or erecting cranes near an airport (e.g., 28 days).",
              "part": "Part 28"
            },
            {
              "num": "29",
              "term": "Notice to Airmen (NOTAM)",
              "definition": "An official telecommunication message alerting pilots about temporary hazards or changes at an airport.",
              "part": "Part 29"
            },
            {
              "num": "30",
              "term": "AIP (Aeronautical Information Publication)",
              "definition": "The permanent official manual containing aerodrome charts, procedures, and operational data.",
              "part": "Part 30"
            }
          ]
        },
        "materials": {
          "quizTitle": "Airside Scenario Quiz • EASA Rules & Obstacle Safeguarding",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Operational Dilemmas & Rule Spot-Checks",
          "videos": [
            {
              "title": "Video 1: Obstacle Limitation Surfaces (OLS) 3D Animation",
              "channel": "Aviation Safety & Aerodrome Engineering",
              "duration": "6 mins",
              "videoId": "oeJcvKZG2w8",
              "watchUrl": "https://www.youtube.com/watch?v=oeJcvKZG2w8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/oeJcvKZG2w8",
              "caption": "Visual 3D fly-through demonstrating how the approach, transitional, and horizontal surfaces protect runways from tall cranes and obstacles.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: How EASA Makes Aviation Regulations in Europe",
              "channel": "EASA Official",
              "duration": "5 mins",
              "videoId": "XeUxBxDUGCk",
              "watchUrl": "https://www.youtube.com/watch?v=XeUxBxDUGCk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/XeUxBxDUGCk",
              "caption": "An official guide explaining how Basic Regulations, Implementing Rules (IR), Acceptable Means of Compliance (AMC), and Guidance Material (GM) work together.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Understanding NOTAMs for Flight Operations",
              "channel": "FlightInsight",
              "duration": "7 mins",
              "videoId": "H701DOaQvDM",
              "watchUrl": "https://www.youtube.com/watch?v=H701DOaQvDM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/H701DOaQvDM",
              "caption": "A practical breakdown of how Notice to Airmen (NOTAM) alerts inform pilots about temporary airport hazards, broken lights, and construction cranes.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "EASA Certification Specifications",
              "sourceTag": "Official Regulation",
              "heading": "CS-ADR-DSN Subpart H: Obstacle Limitation Surfaces and Aerodrome Safeguarding",
              "snippet": "Official European Union Aviation Safety Agency specifications defining the geometry, slopes, and permissible boundaries for approach, take-off, and transitional surfaces around European commercial aerodromes.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/aerodromes",
              "part": "Part 1"
            },
            {
              "topic": "Safety Encyclopedia",
              "sourceTag": "SKYbrary Safety",
              "heading": "Obstacle Limitation Surfaces (OLS): Mitigating Construction Hazards Near Airports",
              "snippet": "Comprehensive operational guide explaining the legal procedures for construction crane permits, the 28-day notification rule, obstacle lighting requirements, and temporary NOTAM publications.",
              "readTime": "Estimated read: 4 mins",
              "url": "https://skybrary.aero/articles/obstacle-limitation-surfaces-ols",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://www.easa.europa.eu/en/document-library/easy-access-rules/aerodromes",
              "tag": "01 • European Standards",
              "name": "EASA Easy Access Rules for Aerodromes",
              "desc": "Consolidated regulatory portal containing Regulation (EU) No 139/2014, CS-ADR-DSN, and Acceptable Means of Compliance (AMC).",
              "part": "Part 1"
            },
            {
              "url": "https://skybrary.aero/articles/obstacle-limitation-surfaces-ols",
              "tag": "02 • Airspace Safeguarding",
              "name": "SKYbrary: Obstacle Limitation Surfaces (OLS)",
              "desc": "Peer-reviewed aviation safety directory detailing inner horizontal, conical, and approach surface slope gradients.",
              "part": "Part 2"
            },
            {
              "url": "https://www.icao.int/safety/airnavigation/Pages/aerodromes.aspx",
              "tag": "03 • Global Standards",
              "name": "ICAO Annex 14 Volume I (Aerodrome Design)",
              "desc": "International Civil Aviation Organization standards governing runway physical characteristics and obstacle clearance boundaries.",
              "part": "Part 3"
            },
            {
              "url": "https://www.sia.aviation-civile.gouv.fr",
              "tag": "04 • Live Flight Data",
              "name": "French DGAC SIA (Aeronautical Information Service)",
              "desc": "Official French state portal for aeronautical charts, AIP manuals, and live NOTAM telecommunication queries.",
              "part": "Part 4"
            },
            {
              "url": "https://www.aci-europe.org",
              "tag": "05 • Airport Management",
              "name": "ACI Europe Technical & Safety Committee",
              "desc": "Airport operators association establishing guidelines on aerodrome obstacle evaluations and city urban planning coordination.",
              "part": "Part 5"
            },
            {
              "url": "https://oeaaa.faa.gov",
              "tag": "06 • Airspace Analysis",
              "name": "FAA Obstacle Evaluation & Airport Airspace Analysis (OE/AAA)",
              "desc": "Public digital system for evaluating proposed building cranes, masts, and wind turbines penetrating flight paths.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Words for Rules: Shall, Must, Should & May",
            "badge": "CEFR B1–B2 Focus",
            "patternTitle": "Aviation Regulatory Rule Pattern",
            "formula": "Subject + SHALL / MUST + Base Verb (100% Law) | Subject + SHOULD + Base Verb (Recommendation)",
            "rulesTitle": "When to Use Each Rule Word",
            "rules": [
              "<strong>SHALL / MUST (Obligation):</strong> Used exclusively when an action is 100% required by aviation law. Zero choice or exception is permitted.",
              "<strong>SHALL NOT / MUST NOT (Prohibition):</strong> Used when an action is strictly forbidden and creates an immediate safety violation.",
              "<strong>SHOULD (Recommendation):</strong> Expresses recommended industry best practice or guidance. It is strongly advised, but not an absolute legal duty.",
              "<strong>MAY (Permission):</strong> Indicates that an option, discretion, or special authorization is available if conditions are met."
            ],
            "trap": "<strong>⚠️ Spoken English Pitfall:</strong> In French, the verb <em>'devoir'</em> (il doit) is often translated as either <em>'shall'</em> or <em>'should'</em>. In European aviation law, confusing these two is a serious legal error! Always use <em>'shall/must'</em> for mandatory laws and <em>'should'</em> for advisory best practice.",
            "examplesTitle": "Authentic EASA Operational Examples",
            "examples": [
              "The aerodrome operator <strong>shall</strong> establish an approach surface for each runway direction intended for landing.",
              "New objects <strong>shall not</strong> be permitted above the approach slope within the safeguarding boundary.",
              "Construction contractors <strong>should</strong> lower the crane boom to ground level during overnight periods.",
              "The civil aviation authority <strong>may</strong> grant a temporary night permit provided safety lights are active."
            ]
          }
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 Objectives - Safety Alerts & Ramp Briefings",
          "summary": "By the end of this session, GSEA students will be able to distinguish mandatory Safety Directives from advisory Safety Information Bulletins, de-nominalize heavy regulatory text into direct active instructions, synthesize dense safety alerts into the Executive 3-Bullet Rule (maximum 12 words per action), apply text chunking and intonation to eliminate flat delivery, deliver a professional 90-second morning safety briefing to ramp teams, and field spontaneous operational challenge questions with confidence.",
          "items": [
            {
              "num": 1,
              "title": "Modal Quick-Fire & Ramp Awareness (Review & Fluency)",
              "description": "Rapidly categorize operational statements into Hard Law (IR), Acceptable Means of Compliance (AMC), and Guidance Material (GM), and share real-world apron hazards.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "The Simplification Engine: De-Nominalization (Language Accuracy)",
              "description": "Convert stiff nominalized phrases (the execution of continuous surveillance, prior to the initiation of pushback) into clear active commands (inspect, monitor, check before pushback).",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "The Executive 3-Bullet Rule: SIB Extraction (Synthesis & Precision)",
              "description": "Condense dense EASA SIB extracts into exactly 3 actionable directives of no more than 12 words each, starting with strong imperative verbs.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Pronunciation Clinic: Text Chunking & Intonation (Spoken Rhythm & Delivery)",
              "description": "Break long technical sentences into cognitive pause chunks (|) and emphasize operative keywords to eliminate monotonous, flat spoken delivery.",
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
              "title": "Active Listening & Operational Challenge (Interactive Clarification)",
              "description": "Role-play ramp supervisors and wildlife officers, listening critically to oral briefings and formulating targeted clarifying questions under operational time pressure.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan - Safety Alerts & Ramp Briefings (2 Hours)",
          "summary": "A 2-hour communicative spoken English session covering rapid modal review, EASA Safety Information Bulletins (SIBs), the Simplification Engine (de-nominalization and active voice), the Executive 3-Bullet Rule, text chunking for natural spoken rhythm, and \"The 90-Second Stand-Up\" paired briefing simulations across three real-world airport operational scenarios.",
          "items": [
            {
              "part": "Part 1",
              "title": "Part 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan",
              "description": "Students complete the 4-item modal quick-fire sprint (Hard Law vs. AMC vs. GM) to reinforce Session 1 foundations, then brainstorm the most hazard-prone areas of the apron in pairs."
            },
            {
              "part": "Part 2",
              "title": "Part 2: Authentic Document Extract: EASA Safety Bulletins",
              "description": "Students scan authentic EASA SIB extracts (Thermal runaway in lithium batteries & apron vehicle speeding) and complete reading comprehension checks to identify root hazards and immediate reporting triggers."
            },
            {
              "part": "Part 3",
              "title": "Part 3: Language Clinic: The Simplification Engine & Text Chunking",
              "description": "Students practice converting heavy administrative nominalizations into direct active imperatives, master the Executive 3-Bullet Rule (12 words max, action verbs), and complete the Pronunciation Chunking Clinic with choral and paired read-alouds to establish natural rhythm and stress."
            },
            {
              "part": "Part 4",
              "title": "Part 4: Spoken Interaction: \"The 90-Second Stand-Up\" Briefings",
              "description": "In pairs, students take turns delivering 90-second morning briefings as TSEEAC Airside Safety Officers across 3 scenarios (Lithium Battery Containment, Wildlife & Migratory Flocks, GRF Runway Condition Alerts), while their partner role-plays the Ground Supervisor asking mandatory operational challenge questions."
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
            "subtitle": "Operational Text Simplification, Chunking & 90-Second Stand-Up Briefings",
            "image": "images/s3_m1_session2_audit.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training (TSEEAC Airside Safety & Ground Operations Focus)",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan",
            "summary": "Rapid retrieval sprint checking modal categories and pair brainstorming on apron danger zones.",
            "modeBadges": [
              {
                "label": "Retrieval Sprint",
                "color": "blue"
              },
              {
                "label": "Pair Discussion",
                "color": "amber"
              },
              {
                "label": "Spoken Fluency",
                "color": "emerald"
              }
            ],
            "instructions": [
              {
                "step": "Step 1: Modal Quick-Fire Sprint (Individual / Pairs)",
                "detail": "Read each of the 4 operational statements below and mark whether it represents Hard Law (IR), an Acceptable Means of Compliance (AMC), or Guidance Material / Permission (GM). Check the anchor modal verb."
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
              "Prompt students to identify modal anchors immediately: 'shall' / 'shall not' (Hard Law), 'should' (AMC), 'may' (GM / Permission).",
              "Encourage students to articulate WHY handing ground crews a 4-page PDF does not work on the ramp (insufficient turnaround time, cognitive overload)."
            ],
            "reviewSprint": [
              {
                "id": 1,
                "statement": "Aerodrome operators shall ensure that vehicles operating on aprons are equipped with high-visibility markings.",
                "type": "Hard Law (IR)",
                "anchor": "shall ensure",
                "badgeColor": "rose",
                "explanation": "Mandatory implementing rule under European regulation (EASA Part-ADR.OPS.B.025)."
              },
              {
                "id": 2,
                "statement": "Ground handling personnel should inspect fuel hydrants every morning before scheduled flight waves.",
                "type": "AMC (Acceptable Means of Compliance)",
                "anchor": "should inspect",
                "badgeColor": "amber",
                "explanation": "Standard industry best practice; deviation requires formal risk assessment and alternative safety justification."
              },
              {
                "id": 3,
                "statement": "The authority may grant temporary derogations during extraordinary winter weather operations.",
                "type": "GM / Statutory Permission",
                "anchor": "may grant",
                "badgeColor": "emerald",
                "explanation": "Discretionary statutory power granted to the competent national authority (DSAC)."
              },
              {
                "id": 4,
                "statement": "The de-icing pad drainage containment system shall not discharge directly into surface waters.",
                "type": "Hard Law (IR)",
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
                  "Ground personnel work under severe time pressure to meet strict 30-minute turnaround targets."
                ]
              },
              {
                "id": 2,
                "question": "When a new safety bulletin arrives on your desk at 06h30, why is handing workers a 4-page technical PDF ineffective?",
                "exampleAnswers": [
                  "Ground crews work on the tarmac in high-noise environments; they don't sit in front of computer monitors.",
                  "Dense bureaucratic legal text hides the critical action steps under passive nominalizations.",
                  "A fast, direct 90-second verbal briefing with active imperatives front-loads the vital commands immediately."
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
                  "q": "Why do aviation authorities write bulletins with heavy nominalizations instead of simple active verbs?",
                  "answer": "Bureaucratic and legal writers prefer formal noun structures (e.g., 'the execution of inspection') to appear neutral, but this slows down operational communication on the tarmac."
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
            "title": "Activity 2: Reading Authentic Safety Bulletins (Lithium Battery & Apron Alerts)",
            "summary": "Scan authentic EASA SIB extracts (SIB No. 2023-08 & SIB No. 2024-11) for immediate hazards and reporting triggers.",
            "modeBadges": [
              {
                "label": "Authentic Extract",
                "color": "blue"
              },
              {
                "label": "Scanning Drill",
                "color": "indigo"
              },
              {
                "label": "Reading Check",
                "color": "emerald"
              }
            ],
            "instructions": [
              {
                "step": "Step 1: Scan the SIB Extract",
                "detail": "Read EASA SIB No. 2023-08 below regarding thermal runaway hazards in airside baggage areas. Identify: 1) What causes the hazard, 2) Where to isolate damaged items, 3) Prohibited extinguishing actions, and 4) Mandatory reporting channels."
              },
              {
                "step": "Step 2: Complete the 4 Comprehension Checks",
                "detail": "Answer the 4 comprehension checks to verify factual parameters before translating the text into operational commands."
              }
            ],
            "deliverable": "Extracted safety actions, containment locations, and notification timelines.",
            "teacherNotes": [
              "Encourage students to highlight content words: 'thermal runaway', 'containment drum', 'unapproved liquid', 'ASOC', '3 minutes'.",
              "Remind students that SIBs are advisory but carry high operational weight during safety audits."
            ],
            "docRef": "EASA SIB No. 2023-08 (Adapted Extract) • Subject: Mitigation of Thermal Runaway Hazards",
            "docText": "EUROPEAN UNION AVIATION SAFETY AGENCY\nSAFETY INFORMATION BULLETIN\nSIB No.: 2023-08\nIssued: 14 September 2023\nSubject: Mitigation of Thermal Runaway Hazards from Damaged Lithium Batteries in Airside Baggage Handling Areas\n\n1. Operational Background & Hazard Identification:\nOperational occurrences reported under Regulation (EU) No 376/2014 reveal a recurring safety hazard involving personal mobility devices, e-scooters, and spare lithium battery packs undergoing thermal runaway during baggage sortation, transport, and ramp transit. Damaged or counterfeit lithium cells are vulnerable to rapid internal short-circuiting, resulting in toxic gas release, violent thermal escalation, and self-sustaining chemical fires.\n\n2. Containment & Segregation Directives:\nGround service providers should ensure that any battery pack presenting physical deformation, excessive heat output, or smoke emission is segregated immediately into a certified fire-containment drum or non-combustible sand container located at a designated perimeter stand (e.g. Stand 12). \n\n3. Fire Suppression Protocols:\nFurthermore, ramp operatives should under no circumstances apply unapproved liquid extinguishing agents directly to pressurized lithium cells, as violent water-reactive venting and explosive chemical projection may occur. Only certified Class D or dry extinguishing media shall be deployed.\n\n4. Emergency Notification Channels:\nImmediate notification of the Aerodrome Safety Operations Centre (ASOC) via primary VHF radio channel 2 is required within 3 minutes of discovery to enable dedicated emergency response staging and marshaller coordination.",
            "questions": [
              {
                "id": 1,
                "q": "What specific safety phenomenon is recurring during baggage sortation and ramp transit?",
                "answer": "Thermal runaway in personal mobility devices and spare lithium battery packs, leading to toxic gas release and self-sustaining chemical fires."
              },
              {
                "id": 2,
                "q": "Where must ground service providers immediately segregate any smoking or deformed battery pack?",
                "answer": "Into a certified fire-containment drum or non-combustible sand container located at a designated perimeter stand (e.g., Stand 12)."
              },
              {
                "id": 3,
                "q": "What extinguishing agent must ramp operatives strictly avoid applying directly to pressurized lithium cells, and why?",
                "answer": "Unapproved liquid extinguishing agents (water), because violent water-reactive venting and explosive chemical projection may occur."
              },
              {
                "id": 4,
                "q": "What is the mandatory timeline and communication channel to notify the Aerodrome Safety Operations Centre (ASOC)?",
                "answer": "Within 3 minutes of discovery via the primary VHF radio channel (Channel 2)."
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: The Simplification Engine, 3-Bullet Rule & Chunking Clinic",
            "summary": "Convert nominalized text into direct action verbs, condense alerts into 3 bullets under 12 words, and practice text chunking.",
            "modeBadges": [
              {
                "label": "De-Nominalization",
                "color": "indigo"
              },
              {
                "label": "Executive 3-Bullet",
                "color": "amber"
              },
              {
                "label": "Chunking Clinic",
                "color": "purple"
              }
            ],
            "instructions": [
              {
                "step": "Step 1: The Simplification Engine (Task A)",
                "detail": "Examine the 3-step Simplification Engine. Convert 3 dense regulatory formulations into crisp, direct spoken commands by uncovering the hidden action verb and front-loading the agent."
              },
              {
                "step": "Step 2: The Executive 3-Bullet Challenge",
                "detail": "Condense EASA SIB No. 2023-08 into exactly 3 bullet points. Respect the constraints: Maximum 12 words per bullet, starting with a strong active imperative verb."
              },
              {
                "step": "Step 3: Pronunciation Chunking Clinic",
                "detail": "Mark breath/idea pause lines (|) and identify the stressed content words to avoid flat, monotonous delivery when reading long technical sentences."
              }
            ],
            "deliverable": "3 de-nominalized active commands, 3-bullet executive summary, and chunked read-aloud practice.",
            "teacherNotes": [
              "In Task A, highlight how nominalizations like 'the execution of continuous surveillance' disguise simple actions like 'monitor continuously'.",
              "For chunking, demonstrate 'flat French delivery' vs. 'rhythmic English chunking' with vocal pauses at clause boundaries."
            ],
            "simplificationEngine": {
              "steps": [
                {
                  "num": 1,
                  "title": "Identify the hidden action verb inside the nominalization",
                  "example": "\"The execution of an inspection...\" → \"Inspect...\" | \"Prior to the commencement of...\" → \"Before starting...\""
                },
                {
                  "num": 2,
                  "title": "Identify the active agent (Who must do it?)",
                  "example": "\"shall be conducted by the handling team\" → \"The handling team must...\""
                },
                {
                  "num": 3,
                  "title": "Front-load the critical operational command",
                  "example": "\"Ground crew must inspect the cargo hold before loading.\""
                }
              ],
              "taskA": [
                {
                  "id": 1,
                  "sibText": "Immediate isolation of any damaged portable electronic device (PED) exhibiting smoke generation shall be undertaken by cabin or ramp personnel.",
                  "activeCommand": "Personnel must immediately isolate any damaged device producing smoke.",
                  "alternative": "Ramp or cabin crew shall immediately isolate smoking portable electronic devices.",
                  "rationale": "Replaced heavy nouns 'isolation' and 'smoke generation' with active verb 'isolate' and participle 'producing smoke'."
                },
                {
                  "id": 2,
                  "sibText": "The execution of continuous surveillance of perimeter drainage channels is strongly recommended for the prevention of wildlife aggregation near active taxiways.",
                  "activeCommand": "Operators should continuously monitor perimeter drainage channels to keep wildlife away.",
                  "alternative": "Staff should inspect drainage channels regularly to prevent wildlife hazards.",
                  "rationale": "Replaced 'execution of continuous surveillance' and 'wildlife aggregation' with active verb 'monitor' and direct purpose 'to keep wildlife away'."
                },
                {
                  "id": 3,
                  "sibText": "Prior to the initiation of aircraft pushback, direct visual verification of bypass pin insertion must be performed by the headset operator.",
                  "activeCommand": "The headset operator must visually check bypass pin insertion before pushback.",
                  "alternative": "Headset operators must verify the bypass pin is inserted before starting pushback.",
                  "rationale": "Front-loaded active agent 'headset operator', replaced 'initiation of pushback' with 'before pushback', and converted 'verification must be performed' to 'must visually check'."
                }
              ]
            },
            "threeBulletRule": {
              "constraints": [
                "Constraint 1: Exactly 3 bullet points.",
                "Constraint 2: Maximum 12 words per bullet.",
                "Constraint 3: Every bullet must begin with a strong, active imperative verb (e.g., Isolate, Disconnect, Report, Stop, Notify)."
              ],
              "modelAnswers": [
                {
                  "bullet": 1,
                  "text": "Isolate damaged or smoking lithium batteries immediately into certified containment drums.",
                  "wordCount": 10,
                  "verb": "Isolate"
                },
                {
                  "bullet": 2,
                  "text": "Do not apply unapproved liquid extinguishing agents to pressurized lithium cells.",
                  "wordCount": 10,
                  "verb": "Do not apply"
                },
                {
                  "bullet": 3,
                  "text": "Notify the Aerodrome Safety Operations Centre by radio within three minutes.",
                  "wordCount": 10,
                  "verb": "Notify"
                }
              ]
            },
            "chunkingClinic": {
              "title": "Pronunciation Clinic: Text Chunking & Intonation",
              "explanation": "A common error among French-speaking aviation professionals is 'flat delivery', where every word is pronounced with equal duration and weight. Chunking divides long regulatory sentences into cognitive phrase units separated by natural pause breaks (|), stressing only key operative words.",
              "example": {
                "chunked": "In case of thermal runaway | immediately isolate the device | and alert ground operations.",
                "stressed": [
                  "thermal runaway",
                  "isolate",
                  "device",
                  "alert",
                  "ground operations"
                ]
              },
              "drill": {
                "raw": "When handling suspected lithium battery fires airside ramp operators should avoid using water and immediately deploy dry fire-containment equipment before informing the safety supervisor.",
                "chunked": "When handling suspected lithium battery fires airside | ramp operators should avoid using water | and immediately deploy dry fire-containment equipment | before informing the safety supervisor.",
                "stressed": [
                  "handling",
                  "suspected",
                  "battery fires",
                  "avoid",
                  "water",
                  "deploy",
                  "dry",
                  "containment",
                  "supervisor"
                ]
              }
            }
          },
          "spokenActivity": {
            "title": "Activity 4: Spoken Briefing Simulation: \"The 90-Second Stand-Up\"",
            "summary": "Pair simulation delivering a 90-second morning briefing as TSEEAC Airside Safety Officer, with mandatory clarifying questions.",
            "modeBadges": [
              {
                "label": "Spoken Simulation",
                "color": "blue"
              },
              {
                "label": "Airside Stand-Up",
                "color": "indigo"
              },
              {
                "label": "Clarifying Questions",
                "color": "amber"
              }
            ],
            "instructions": [
              {
                "step": "Step 1: Role Setup & 3-Minute Preparation",
                "detail": "Work in pairs: Student A is the TSEEAC Airside Safety Inspector (The Speaker); Student B is the Ground / Ramp Lead (The Interlocutor). Student A selects Scenario 1, takes 3 minutes to plan delivery using active voice, chunks, and signposts. Do not read verbatim!"
              },
              {
                "step": "Step 2: Deliver the 90-Second Stand-Up Briefing",
                "detail": "Student A delivers a crisp 90-second oral briefing to Student B. Use the target signposts ('Good morning team...', 'The primary takeaway is...', 'Under no circumstances should you...')."
              },
              {
                "step": "Step 3: Interlocutor Challenges (Mandatory Questions)",
                "detail": "Student B listens actively and asks their 2 mandatory operational clarifying questions. Student A must respond immediately using sound safety logic."
              },
              {
                "step": "Step 4: Swap Roles for Scenario 2 or 3",
                "detail": "Swap roles: Student B becomes the Speaker for Scenario 2 (Wildlife Hazard) or Scenario 3 (GRF Runway Conditions)."
              }
            ],
            "deliverable": "Delivered 90-second oral briefing, answered 2 operational challenges, and completed peer role swap.",
            "teacherNotes": [
              "Enforce strict 90-second pacing with a timer. Stand-up briefings on the ramp are brief, punchy, and direct.",
              "Ensure Student B does NOT read their questions until Student A finishes speaking. Focus on active listening."
            ],
            "context": "It is 06:45 AM at a busy regional hub airport in France (Toulouse-Blagnac). The morning departure push is beginning. A new EASA Safety Information Bulletin has just landed on the desk of the TSEEAC Duty Officer / Airside Safety Inspector.",
            "targetSignposts": [
              "\"Good morning team, I need your full attention for a safety alert...\"",
              "\"The primary takeaway from this bulletin is...\"",
              "\"Under no circumstances should you...\"",
              "\"Our top priority on the ground today is...\"",
              "\"The critical operational trigger is...\"",
              "\"Please make sure your teams document...\""
            ],
            "scenarios": [
              {
                "id": 1,
                "title": "Scenario 1: Lithium Battery Containment on Stand",
                "speaker": {
                  "role": "TSEEAC Airside Safety Inspector (The Speaker)",
                  "badge": "Speaker",
                  "mission": "Deliver a crisp 90-second safety briefing to the Ramp Supervisor before the morning baggage shift starts.",
                  "points": [
                    "Multiple cases of power banks igniting in baggage sortation areas have occurred across Europe.",
                    "Any smoking or deformed battery must go straight into the yellow containment drum at Stand 12.",
                    "Standard water extinguishers must never be used on these batteries (violent explosion risk).",
                    "The control center (ASOC) must be alerted via VHF Channel 2 within 3 minutes of discovery."
                  ],
                  "targetSignposts": [
                    "\"Good morning team, I need your full attention for a safety alert...\"",
                    "\"The primary takeaway from this bulletin is...\"",
                    "\"Under no circumstances should you...\""
                  ]
                },
                "interlocutor": {
                  "role": "Ramp Service Supervisor (The Interlocutor)",
                  "badge": "Interlocutor",
                  "context": "You run a ground handling crew of 15 baggage handlers under tight 30-minute aircraft turnaround targets.",
                  "mission": "Listen carefully and challenge Student A on real operational details with your 2 mandatory questions.",
                  "mandatoryQuestions": [
                    "\"What is the exact procedure if the designated containment drum at Stand 12 is blocked or already full?\"",
                    "\"Can we continue loading baggage onto the flight while isolating a suspicious device?\""
                  ]
                }
              },
              {
                "id": 2,
                "title": "Scenario 2: Wildlife Hazard & Migratory Flock Advisory",
                "speaker": {
                  "role": "TSEEAC Airside Safety Inspector (The Speaker)",
                  "badge": "Speaker",
                  "mission": "Deliver a crisp 90-second morning briefing to the Airfield Wildlife Operations Team.",
                  "points": [
                    "EASA has issued a regional alert regarding seasonal bird migration (large starling and lapwing flocks crossing the CTR).",
                    "Pyrotechnic scaring and gas cannons must be activated 15 minutes before peak runway movements.",
                    "Mowing heights on runway grass strips must be kept below 20 cm to deter insect feeding.",
                    "Any confirmed bird strike or flock sighting exceeding 50 birds must be logged on the DSAC safety portal within 2 hours."
                  ],
                  "targetSignposts": [
                    "\"We have received an operational safety update regarding...\"",
                    "\"Our top priority on the runway margins today is...\"",
                    "\"Please make sure your teams document...\""
                  ]
                },
                "interlocutor": {
                  "role": "Airfield Wildlife Controller (The Interlocutor)",
                  "badge": "Interlocutor",
                  "context": "You drive the bird hazard response vehicle and patrol runways and taxiways during peak departures.",
                  "mission": "Listen to the briefing and verify practical coordination with Air Traffic Control (DSNA).",
                  "mandatoryQuestions": [
                    "\"Do we have standing clearance from the control tower to deploy acoustic scare rounds near Runway 14 Left?\"",
                    "\"Who is responsible for verifying grass heights along the instrument strip during the morning inspection?\""
                  ]
                }
              },
              {
                "id": 3,
                "title": "Scenario 3: Global Reporting Format (GRF) Runway Condition Alerts",
                "speaker": {
                  "role": "TSEEAC Airside Safety Inspector (The Speaker)",
                  "badge": "Speaker",
                  "mission": "Deliver a 90-second update to the Airport Winter Operations Lead during freezing rain conditions.",
                  "points": [
                    "Rapidly changing temperatures are creating variable friction on Taxiways Bravo and Charlie.",
                    "RWYCC (Runway Condition Code) assessments must be updated whenever surface coverage shifts by more than 10%.",
                    "Operators must use plain language runway condition reports (RCR) and transmit them directly to the tower.",
                    "High-speed turnoffs must be treated with certified solid de-icer before commercial turboprop waves arrive."
                  ],
                  "targetSignposts": [
                    "\"Due to deteriorating meteorological conditions, we must adapt our procedure...\"",
                    "\"The critical operational trigger is...\"",
                    "\"Ensure that the tower receives...\""
                  ]
                },
                "interlocutor": {
                  "role": "Winter Operations Team Lead (The Interlocutor)",
                  "badge": "Interlocutor",
                  "context": "You manage the snowplow and chemical spreader fleet on the apron and movement area.",
                  "mission": "Listen to the briefing and ensure vehicle safety and operational feasibility.",
                  "mandatoryQuestions": [
                    "\"How much notice does the control tower need before we shut down Taxiway Bravo for chemical spraying?\"",
                    "\"If the RWYCC drops to 2 or below, who holds the ultimate authority to suspend operations?\""
                  ]
                }
              }
            ]
          },
          "safetyCheck": {
            "title": "Activity 5: Safety Check: What Could Go Wrong?",
            "summary": "Collaborative 4-step ramp safety evaluation and 60-second stand-up reality wrap-up.",
            "modeBadges": [
              {
                "label": "Collaborative Check",
                "color": "emerald"
              },
              {
                "label": "Risk Mitigation",
                "color": "blue"
              },
              {
                "label": "Spoken Wrap-Up",
                "color": "amber"
              }
            ],
            "instructions": [
              {
                "step": "Step 1: Complete the 4-Step Safety Evaluation",
                "detail": "In pairs, analyze the lithium battery and apron hazard chain: Hazard, Operational Risk, Preventative Mitigations, and Agreed Operational Decision."
              },
              {
                "step": "Step 2: Rules to Reality (60-Second Pair Wrap-Up)",
                "detail": "Deliver an unscripted 60-second verbal summary explaining why clear stand-up briefings are critical on the ramp."
              }
            ],
            "deliverable": "Completed safety analysis table and 60-second verbal stand-up wrap-up.",
            "teacherNotes": [
              "Prompt students to link the linguistic clarity of the morning briefing to concrete safety outcomes on the tarmac.",
              "Emphasize that miscommunications during freezing rain or battery thermal runaway can cause catastrophic ramp closures."
            ],
            "rows": [
              {
                "question": "1. The Operational Hazard: What is the primary physical hazard identified in EASA SIB No. 2023-08?",
                "answer": "Damaged or deformed lithium-ion battery packs and personal mobility devices undergoing thermal runaway during baggage sortation and ramp transit."
              },
              {
                "question": "2. The Critical Risk: What catastrophic consequence occurs if ground handlers use standard water extinguishers?",
                "answer": "Violent water-reactive venting, toxic gas emission, and explosive chemical projection inside the baggage area or aircraft hold."
              },
              {
                "question": "3. Agreed Mitigations: What immediate physical precautions and notification timelines must be enforced?",
                "answer": "Immediate segregation into yellow fire-containment drums or sand containers at Stand 12, zero water application, and 3-minute radio alert to ASOC on VHF Channel 2."
              },
              {
                "question": "4. Final Operational Decision: How does the TSEEAC Safety Officer ensure operational compliance?",
                "answer": "Delivers mandatory 90-second stand-up briefings to all ground handling shifts, verifies containment equipment access, and confirms standing DSAC reporting channels."
              }
            ],
            "rulesToReality": {
              "title": "Rules to Reality: 60-Second Stand-Up Spoken Wrap-Up",
              "prompt": "In pairs, deliver an unscripted 60-second operational summary explaining: 1) What was the core message of your SIB? 2) Why do ground crews sometimes cut corners under tight 30-minute turnarounds? 3) How does an active, chunked 90-second verbal briefing prevent a catastrophic incident on the tarmac?"
            }
          }
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 Objectives - Special Requests & Runway Safety Cases",
          "summary": "By the end of this session, GSEA students will be able to explain how airports handle real-world challenges through temporary permissions (exemptions), use connecting words to explain rules and conditions (provided that, due to, in order to, in lieu of), read an authentic runway works exemption file, prepare and deliver a 3-minute spoken briefing to airline pilots, and complete a simple Safety Check.",
          "items": [
            {
              "num": 1,
              "title": "Discuss Temporary Airport Work (Fluency & Spontaneous Speech)",
              "description": "Brainstorm real reasons airports need to do heavy runway repairs without closing completely.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Understand Special Permissions (Exemptions & Flexibility)",
              "description": "Learn how Article 71 permits temporary flexibility when standard rules cannot be met.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Connecting Words for Explaining Rules (Language Focus)",
              "description": "Practice connecting phrases to give clear reasons: because of, provided that, in order to, as long as, in lieu of.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Read the Runway Work Request (Authentic Document Scanning)",
              "description": "Scan an authentic temporary exemption file (EASA/ADR-EXEMP/2024-009) for Runway 26 drainage repairs with a reduced safety area (RESA).",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Deliver a 3-Minute Airline Briefing (Spoken Presentation)",
              "description": "Prepare and deliver a spoken operational briefing to airline representatives explaining the 4 safety rules protecting flights.",
              "part": "Part 5"
            },
            {
              "num": 6,
              "title": "Complete the Decision Safety Check (Risk Evaluation)",
              "description": "Evaluate the risks and agree on whether the runway works can be safely approved.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session on temporary aerodrome works, Article 71 exemptions, connecting words for explaining rules, an airline operational briefing simulation, and a simple Safety Check.",
          "items": [
            {
              "title": "Part 1: Warm-up: Keeping Airports Open During Repairs",
              "description": "Pairs discuss how airports maintain operations during runway maintenance and answer 4 spot-check questions.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Reading the Runway Work Request",
              "description": "Scanning authentic exemption file EASA/ADR-EXEMP/2024-009 for reduced RESA and the 4 compensatory safety rules.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Connecting Words: Giving Reasons & Explaining Conditions",
              "description": "Language clinic practicing condition linkers (provided that, as long as) and purpose/cause linkers (in order to, due to) across 5 exercises.",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Spoken Briefing: Explaining the Plan to Airline Pilots",
              "description": "GSEA students prepare and deliver a 3-minute spoken presentation to airline representatives explaining the 4 safety rules, followed by Q&A.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Safety Check: Is it Safe to Land?",
              "description": "Structured 4-step safety evaluation of the reduced RESA, overrun risks, compensatory barriers, and granting temporary operational approval.",
              "part": "Part 5"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Special Requests & Runway Safety Cases",
            "subtitle": "Temporary Works, Connecting Words & Airline Operational Briefings",
            "image": "images/s3_m1_session3_derogation.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Aerodrome Safety & Works Planning",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up: Keeping Airports Open During Repairs",
            "summary": "Explore how airports manage urgent runway construction without shutting down completely.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Brainstorm"
            ],
            "instructions": [
              "In pairs, brainstorm what an airport does when its only runway has damaged drainage pipes.",
              "Discuss the 4 Entry Check questions below.",
              "Click 'Reveal Answer' to verify your understanding."
            ],
            "deliverable": "Shared list of 3 runway repair challenges and completed 4-question check.",
            "teacherNotes": "Real airports cannot simply shut down for 6 weeks when runway pipes break. They need flexible solutions (called exemptions or derogations) that maintain 100% safety through compensatory rules.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "What happens if an airport closes its main runway for a month? What is the impact on airlines and passengers?",
                "exampleAnswers": [
                  "Airlines would have to cancel or divert hundreds of flights, costing millions of euros in lost revenue and leaving thousands of passengers stranded.",
                  "It would also overwhelm regional diversion airports that might not have enough gates or ground equipment to handle the extra traffic."
                ],
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "Why is the grass area at the end of a runway (RESA) so important for landing planes?",
                "exampleAnswers": [
                  "If an aircraft touches down too late or suffers a braking problem on a wet runway, the RESA acts as a safety buffer to stop the plane before it crashes into roads or ditches.",
                  "It gives pilots and emergency crews valuable extra distance and time to prevent an overrun accident."
                ],
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "How can an airport prove that an unusual plan is just as safe as following standard rules?",
                "exampleAnswers": [
                  "By adding strict compensatory safety rules—such as moving the landing line forward, banning landings in rain, and stationing a fire engine right next to the runway.",
                  "They also consult airline chief pilots in advance and publish NOTAMs so every pilot knows exactly what to expect before takeoff."
                ],
                "part": "Part 3"
              }
            ],
            "diagnostic": {
              "title": "Runway Works & Exemptions Entry Check",
              "instructions": "Discuss each question with your partner, then click to reveal the answer.",
              "questions": [
                {
                  "id": 1,
                  "q": "What does RESA stand for, and what is its purpose?",
                  "answer": "Runway End Safety Area: a cleared, level grass or paved safety buffer beyond the runway designed to stop an aeroplane that overruns or undershoots.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What is a 'Displaced Threshold'?",
                  "answer": "A landing line moved down the runway away from the physical end, used during construction or to clear obstacles on approach.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "In European law, what is an 'Article 71 Exemption'?",
                  "answer": "A legal clause allowing civil aviation authorities to grant temporary flexibility (up to 8 months) for urgent operational needs, provided equivalent safety is proven.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "What is an 'Airline Flight Operations Committee'?",
                  "answer": "A regular operational meeting where airport managers brief airline chief pilots and flight dispatchers on runway changes, weather procedures, and construction.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "documentExtract": {
            "title": "Activity 2: Reading the Runway Work Request",
            "summary": "Scan an authentic temporary exemption file for Runway 26 drainage culvert repairs.",
            "modeBadges": [
              "Pairs or Small Groups",
              "Document Scanning"
            ],
            "instructions": [
              "Read the simulated Exemption File EASA/ADR-EXEMP/2024-009 below.",
              "Carefully note the 4 Mandatory Safety Rules protecting landing aircraft.",
              "Work with your partner to answer the 4 comprehension questions.",
              "Click 'Reveal Answer' to check your answers."
            ],
            "deliverable": "Completed comprehension answers identifying the 4 compensatory safety rules.",
            "teacherNotes": "Help students recognize the logical structure of an exemption file: 1) What is the problem? 2) Why is standard compliance impossible? 3) What extra safety steps are put in place? This forms the basis of their spoken briefing in Activity 4.",
            "docRef": "European Civil Aviation Authority • Exemption File EASA/ADR-EXEMP/2024-009",
            "docText": "[EUROPEAN UNION CIVIL AVIATION REGULATORY FRAMEWORK — OPERATIONAL EXEMPTION FILE]\nFile Reference: EASA/ADR-EXEMP/2024-009 • Date: 12 September 2024\nLegal Basis: Regulation (EU) 2018/1139, Article 71 (Urgent Operational Needs & Exceptional Circumstances)\nApplicant: Aerodrome Operations Authority — Toulouse-Blagnac Aerodrome (LFBO)\nSubject: Temporary 45-day Exemption: Runway End Safety Area (RESA) Length Reduction on Runway 26 for Critical Drainage Works\n\n1. Operational Background & Problem Statement\n(a) Heavy rainfall during the previous winter caused significant subsoil subsidence beneath the Runway 26 overrun area, damaging underground concrete stormwater culverts. Failure to replace these culverts threatens runway sub-base structural integrity.\n(b) To allow heavy excavation machinery and concrete pouring within the strip, the available Runway End Safety Area (RESA) beyond the end of the runway strip must be temporarily reduced from the standard 90 metres required by CS-ADR-DSN.A.045 down to 55 metres for a period of 45 consecutive days (15 October to 28 November 2024).\n\n2. Mandatory Compensatory Safety Rules (Flight Protection Barriers)\nPermission for this temporary reduction is granted provided that the aerodrome operator strictly enforces the following four mandatory safety rules:\nRule 1 — Displaced Landing Threshold:\nThe landing threshold for Runway 26 shall be temporarily displaced by 180 metres down the runway. This guarantees that landing aeroplanes have full standard landing distance available (LDA) and touch down well beyond the works zone.\nRule 2 — Wet Runway Ban:\nLandings on Runway 26 shall be strictly prohibited whenever braking action is reported as degraded, or when water depth exceeds 3 millimetres (wet / contaminated runway). Under such meteorological conditions, arriving flights must divert to secondary Runway 14/32 or an alternate aerodrome.\nRule 3 — Crosswind Limitation:\nThe maximum allowable crosswind component for arriving aircraft on Runway 26 is capped at 15 knots (reduced from the standard 25 knots) to prevent directional control loss during landing rollout.\nRule 4 — Dedicated Emergency Standby:\nA dedicated Crash Fire Rescue (RFFS) major foam vehicle shall remain stationary on immediate 60-second standby at Holding Point B2 during all scheduled flight movements.\n\n3. Duration & Notification\nThis operational exemption expires automatically after 45 days. The aerodrome operator shall publish comprehensive NOTAM and AIP Supplements at least 14 days prior to commencing works.",
            "questions": [
              {
                "id": 1,
                "q": "Why does the airport need to reduce the runway safety area (RESA)?",
                "answer": "Heavy rain damaged concrete stormwater drainage pipes under the overrun area, requiring 45 days of excavation and repairs.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "q": "How many metres is the safety area reduced by?",
                "answer": "It is reduced from standard 90 metres down to 55 metres (a reduction of 35 metres).",
                "part": "Part 2"
              },
              {
                "id": 3,
                "q": "What four safety rules protect flights while the runway work takes place?",
                "answer": "1) 180m displaced threshold, 2) strictly no landings on wet runways, 3) crosswind capped at 15 knots, and 4) fire engine on immediate standby at Holding Point B2.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "q": "What must arriving flights do if the runway becomes wet during rain?",
                "answer": "Landings on Runway 26 are strictly prohibited in wet weather; flights must land on Runway 14/32 or divert to an alternate airport.",
                "part": "Part 4"
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: Connecting Words: Giving Reasons & Explaining Conditions",
            "summary": "Learn how to link ideas in English using words for conditions, causes, purposes, and replacements.",
            "modeBadges": [
              "Individual & Pairs",
              "Language Clinic"
            ],
            "instructions": [
              "Study the Connecting Words table below.",
              "Notice how phrases like 'provided that', 'due to', and 'in lieu of' make your explanations clear and professional.",
              "Complete the 5 gap-fill sentences below, then click 'Check Answer' to see the explanation."
            ],
            "deliverable": "5 accurately completed sentences using professional connecting words.",
            "teacherNotes": "In spoken briefings, connecting words are essential. They allow students to explain WHY a decision was made and WHAT CONDITIONS must be met without sounding confused.",
            "rulesTable": [
              {
                "word": "Provided that / As long as",
                "meaning": "On the condition that",
                "example": "Aircraft may land provided that the runway surface is dry.",
                "tip": "Introduces a strict safety requirement.",
                "part": "Part 1"
              },
              {
                "word": "Due to / Because of",
                "meaning": "For the reason that",
                "example": "The safety area is reduced due to urgent drainage culvert repairs.",
                "tip": "Followed by a noun phrase explaining the cause.",
                "part": "Part 2"
              },
              {
                "word": "In order to",
                "meaning": "For the purpose of",
                "example": "We displaced the threshold by 180m in order to protect stopping distance.",
                "tip": "Followed by an infinitive verb ('in order to protect').",
                "part": "Part 3"
              },
              {
                "word": "In lieu of",
                "meaning": "In place of / Instead of",
                "example": "We positioned temporary orange markers in lieu of standard white paint.",
                "tip": "Useful when one safety measure replaces another.",
                "part": "Part 4"
              },
              {
                "word": "Unless",
                "meaning": "Except if",
                "example": "No heavy aircraft may land unless the crosswind is under 15 knots.",
                "tip": "Sets a clear boundary condition.",
                "part": "Part 5"
              }
            ],
            "drills": [
              {
                "id": 1,
                "sentence": "Aircraft may land on Runway 26 _______ the runway surface is completely dry.",
                "options": [
                  "provided that",
                  "in lieu of",
                  "due to"
                ],
                "correct": "provided that",
                "rationale": "'Provided that' introduces the mandatory safety condition (dry runway).",
                "part": "Part 1"
              },
              {
                "id": 2,
                "sentence": "The available safety area was temporarily reduced _______ urgent culvert reconstruction.",
                "options": [
                  "due to",
                  "in order to",
                  "unless"
                ],
                "correct": "due to",
                "rationale": "'Due to' is followed by the noun phrase 'urgent culvert reconstruction', explaining the cause.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "sentence": "The threshold was displaced by 180 metres _______ give pilots full stopping distance.",
                "options": [
                  "in order to",
                  "provided that",
                  "in lieu of"
                ],
                "correct": "in order to",
                "rationale": "'In order to' expresses the purpose and is followed by the base verb 'give'.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "sentence": "High-intensity flashing guard lights were installed _______ standard painted markings.",
                "options": [
                  "in lieu of",
                  "unless",
                  "due to"
                ],
                "correct": "in lieu of",
                "rationale": "'In lieu of' means 'instead of' or 'replacing'.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "sentence": "Approaching aircraft must divert to Runway 14/32 _______ the crosswind component is 15 knots or less.",
                "options": [
                  "unless",
                  "in order to",
                  "because of"
                ],
                "correct": "unless",
                "rationale": "'Unless' means 'except if the crosswind is 15 knots or less'.",
                "part": "Part 5"
              }
            ]
          },
          "spokenActivity": {
            "title": "Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots",
            "summary": "Deliver a clear, reassuring 3-minute operational briefing to airline representatives.",
            "modeBadges": [
              "Pairs / Small Groups",
              "Spoken Presentation"
            ],
            "instructions": [
              "Work in pairs or groups of 3: Speaker 1 (GSEA Operations Officer), Speaker 2 (Airline Flight Ops Manager), Speaker 3 (Observer / Chief Pilot).",
              "You have 6 minutes to prepare your 3-minute spoken briefing using the 4-part structure.",
              "Deliver your briefing aloud. The airline manager asks 2 realistic questions about weather delays or diversions.",
              "Switch roles so everyone practices delivering the spoken briefing."
            ],
            "deliverable": "3-minute spoken briefing delivered with confident explanation of all 4 safety rules.",
            "teacherNotes": "This activity builds presentation confidence. Remind students: don't read word-for-word from notes! Speak directly, make eye contact, and use signpost phrases like 'Today I will explain...', 'First...', 'In conclusion...'.",
            "scenario": "You are the GSEA Aerodrome Operations Officer briefing the Airline Flight Operations Committee two weeks before the Runway 26 culvert repairs begin. The airline managers are worried about flight delays, diversions, and passenger disruption.",
            "roles": [
              {
                "title": "Role A: GSEA Operations Officer (Presenter)",
                "badge": "Spoken Briefing",
                "bullets": [
                  "Welcome the airline representatives and state the purpose of the briefing.",
                  "Explain why the work is essential (damaged underground drainage culverts).",
                  "Present the 4 safety rules clearly: displaced threshold, wet ban, crosswind cap, fire engine standby.",
                  "Reassure airlines that flight safety is 100% protected."
                ],
                "part": "Part 1"
              },
              {
                "title": "Role B: Airline Flight Ops Manager",
                "badge": "Challenging Q&A",
                "bullets": [
                  "Listen to the briefing and take notes on potential flight impacts.",
                  "Ask: 'What happens if sudden rain begins while our Airbus A320 is on final approach?'",
                  "Ask: 'Why is the crosswind limit reduced to 15 knots, and will this cause many diversions?'"
                ],
                "part": "Part 2"
              },
              {
                "title": "Role C: Observer / Peer Coach",
                "badge": "Feedback",
                "bullets": [
                  "Time the briefing (target: 3 minutes).",
                  "Check: Did the speaker explain all 4 safety rules clearly?",
                  "Check: Did the speaker use connecting words (provided that, due to, in order to)?",
                  "Give 2 positive points and 1 helpful suggestion."
                ],
                "part": "Part 3"
              }
            ],
            "usefulPhrases": [
              "Good morning everyone. Today I will brief you on the upcoming Runway 26 works...",
              "The repairs are necessary due to damaged stormwater drainage culverts.",
              "To ensure that all flights remain completely safe, we have put in place 4 mandatory safety rules.",
              "First, the threshold has been displaced by 180 metres in order to give aircraft full landing distance.",
              "Second, landings are strictly prohibited when the runway is wet; flights will divert to Runway 14/32.",
              "Third, crosswinds are capped at 15 knots, and fourth, a dedicated fire truck is on 60-second standby.",
              "Are there any questions regarding our operational plan?"
            ]
          },
          "safetyCheck": {
            "title": "Activity 5: Safety Check: Is it Safe to Land?",
            "summary": "Complete the decision check table evaluating the reduced safety area and safety rules.",
            "modeBadges": [
              "Whole Class / Pairs",
              "Safety Evaluation"
            ],
            "instructions": [
              "Review the 4 questions in the Safety Check table below.",
              "Check that you can explain each answer clearly in your own words.",
              "Agree on the final operational decision."
            ],
            "deliverable": "Completed Safety Check table verified by all students.",
            "teacherNotes": "Emphasize the concept of 'Compensatory Safety Steps' in plain English: when one standard margin is temporarily reduced, we add other safety rules so total safety never drops.",
            "rows": [
              {
                "question": "1. What is the problem?",
                "answer": "The Runway End Safety Area (RESA) on Runway 26 is reduced from 90m to 55m for 45 days during drainage works.",
                "part": "Part 1"
              },
              {
                "question": "2. What could happen?",
                "answer": "If an aircraft lands too long or suffers a braking problem, it could overrun the runway into the excavation ditch.",
                "part": "Part 2"
              },
              {
                "question": "3. Why is it safe anyway?",
                "answer": "Four strict safety rules protect flights:<br>1) 180m displaced threshold gives full stopping distance.<br>2) Landings banned on wet runways.<br>3) Crosswind limit capped at 15 knots.<br>4) Fire rescue engine on 60-second standby at Holding Point B2.",
                "part": "Part 3"
              },
              {
                "question": "4. Our Decision",
                "answer": "APPROVED: The 4 safety rules protect flights; temporary permission is granted for 45 days.",
                "part": "Part 4"
              }
            ]
          }
        },
        "revision": {
          "title": "Session 3 Revision - Operational Exemptions, Safety Cases & Runway Works",
          "summary": "30 essential operational terms for GSEA students covering Article 71 exemptions, safety assessments, declared distances, and compensatory measures.",
          "terms": [
            {
              "num": "01",
              "term": "Article 71 Exemption",
              "definition": "The legal clause in EU aviation law allowing temporary exemptions for urgent operational needs.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Derogation",
              "definition": "An official temporary exemption from or relaxation of a regulatory requirement granted by the authority.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Safety Assessment / Safety Case",
              "definition": "A structured written justification proving that an operation is safe despite non-standard conditions.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Equivalent Level of Safety (ELOS)",
              "definition": "Proof that alternative safety measures provide the same protection as the standard rule.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Compensatory Measure",
              "definition": "An additional safety step implemented to replace or balance a temporary reduction in safety margin.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Aeronautical Study",
              "definition": "A technical engineering study evaluating the impact of non-standard conditions on flight operations.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Runway End Safety Area (RESA)",
              "definition": "An area symmetrical about the extended runway centerline intended to reduce risk if an aeroplane overruns or undershoots.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Displaced Threshold",
              "definition": "A runway landing threshold located at a point other than the physical beginning of the runway.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Declared Distances",
              "definition": "The four official operational distances published for a runway: TORA, TODA, ASDA, and LDA.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "TORA (Take-Off Run Available)",
              "definition": "The length of runway declared available and suitable for the ground run of an aeroplane taking off.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "TODA (Take-Off Distance Available)",
              "definition": "The length of the take-off run available plus the length of the clearway, if provided.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "ASDA (Accelerate-Stop Distance Available)",
              "definition": "The length of the take-off run available plus the length of the stopway, if provided.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "LDA (Landing Distance Available)",
              "definition": "The length of runway declared available and suitable for the ground run of an aeroplane landing.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Overrun",
              "definition": "When an aircraft fails to stop before the end of the paved runway surface.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Undershoot",
              "definition": "When an arriving aircraft touches down short of the runway threshold.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Temporary Operational Restriction",
              "definition": "A short-term limitation placed on flights or airport operations during construction works.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Contaminated Runway",
              "definition": "A runway where significant portions of the surface are covered by standing water, snow, slush, or ice.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Braking Action",
              "definition": "A measure of the tyre-to-surface friction available to slow down a landing aircraft.",
              "part": "Part 18"
            },
            {
              "num": "19",
              "term": "Crosswind Component",
              "definition": "The portion of wind blowing perpendicular (90 degrees) to the runway direction.",
              "part": "Part 19"
            },
            {
              "num": "20",
              "term": "Holding Point",
              "definition": "A designated position on a taxiway where aircraft hold before entering or crossing an active runway.",
              "part": "Part 20"
            },
            {
              "num": "21",
              "term": "RFFS (Rescue and Fire Fighting Services)",
              "definition": "The emergency airport fire brigade equipped with heavy foam vehicles for aircraft incidents.",
              "part": "Part 21"
            },
            {
              "num": "22",
              "term": "Standby Status",
              "definition": "Positioning emergency fire crews in immediate operational readiness near the runway during high-risk operations.",
              "part": "Part 22"
            },
            {
              "num": "23",
              "term": "AIP Supplement (SUP)",
              "definition": "A temporary published change to permanent aeronautical information, usually lasting more than 3 months.",
              "part": "Part 23"
            },
            {
              "num": "24",
              "term": "NOTAM Trigger",
              "definition": "An operational event or change that legally requires the immediate issuance of a Notice to Airmen.",
              "part": "Part 24"
            },
            {
              "num": "25",
              "term": "Inter-Service Consultation",
              "definition": "Formal coordination between air traffic control, airport safety, airlines, and maintenance services.",
              "part": "Part 25"
            },
            {
              "num": "26",
              "term": "Flight Operations Briefing",
              "definition": "A short, concise presentation giving pilots and dispatchers key operational constraints and rules.",
              "part": "Part 26"
            },
            {
              "num": "27",
              "term": "Condition Linker (Provided that)",
              "definition": "A formal linking phrase meaning 'on the strict condition that', used to introduce mandatory rules.",
              "part": "Part 27"
            },
            {
              "num": "28",
              "term": "Cause Linker (Due to)",
              "definition": "A connecting phrase meaning 'caused by' or 'because of', connecting an effect directly to an operational hazard.",
              "part": "Part 28"
            },
            {
              "num": "29",
              "term": "Purpose Linker (In order to)",
              "definition": "A linking phrase used to express the purpose of a safety action or compensatory measure.",
              "part": "Part 29"
            },
            {
              "num": "30",
              "term": "Runway Safety Team (RST)",
              "definition": "A multi-disciplinary committee of controllers, pilots, and airport staff focused on runway hazard prevention.",
              "part": "Part 30"
            }
          ]
        },
        "materials": {
          "quizTitle": "Airside Scenario Quiz • Runway Works & Operational Decisions",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Operational Dilemmas & Rule Spot-Checks",
          "videos": [
            {
              "title": "Video 1: Runway End Safety Areas (RESA) & Overrun Accidents",
              "channel": "ICAO Safety / NLR Research",
              "duration": "7 mins",
              "videoId": "7KkBE0HgNJQ",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Explains why 90m and 240m safety buffers are required beyond runway ends, how overruns occur in wet weather, and how engineered arresting beds work.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: Displaced Thresholds & Declared Distances Explained",
              "channel": "Boldmethod Pilot Training",
              "duration": "6 mins",
              "videoId": "udS812jbAiE",
              "watchUrl": "https://www.youtube.com/watch?v=udS812jbAiE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/udS812jbAiE",
              "caption": "Flight pilot perspective on how landing distances (LDA) change when thresholds are moved forward for runway construction or obstacle clearance.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: How Major Airports Resurface Runways Without Closing",
              "channel": "Megaprojects / Airport Engineering",
              "duration": "8 mins",
              "videoId": "EiKeGmkX6fY",
              "watchUrl": "https://www.youtube.com/watch?v=EiKeGmkX6fY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/EiKeGmkX6fY",
              "caption": "Engineering documentary showing how major airports conduct night runway culvert repairs and resurfacing while maintaining commercial operations by day.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "European Regulatory Flexibility",
              "sourceTag": "Article 71 Exemption",
              "heading": "EASA Flexibility Provisions: Navigating Urgent Operational Exemptions in Aerodrome Works",
              "snippet": "Explaining the legal framework of Article 71 in Regulation (EU) 2018/1139, permitting temporary derogations for critical airport repairs when equivalent safety is substantiated through compensatory risk controls.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://www.easa.europa.eu/en/domains/air-operations",
              "part": "Part 1"
            },
            {
              "topic": "Runway Safety Case Study",
              "sourceTag": "SKYbrary Analysis",
              "heading": "Runway End Safety Areas (RESA) & Declared Distance Adjustments During Construction",
              "snippet": "Technical examination of how displaced thresholds, wet runway prohibitions, and emergency standby units compensate for shortened overrun buffers during major airside drainage works.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://skybrary.aero/articles/runway-end-safety-area",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://skybrary.aero/articles/runway-end-safety-area",
              "tag": "01 • Overrun Prevention",
              "name": "SKYbrary: Runway End Safety Area (RESA)",
              "desc": "Detailed analysis of runway overrun buffer dimensions, arrestor beds (EMAS), and drainage culvert safeguarding.",
              "part": "Part 1"
            },
            {
              "url": "https://skybrary.aero/articles/displaced-threshold",
              "tag": "02 • Declared Distances",
              "name": "SKYbrary: Displaced Thresholds & Declared Distances",
              "desc": "Comprehensive guide explaining how TORA, TODA, ASDA, and LDA are declared and recalculated during runway maintenance.",
              "part": "Part 2"
            },
            {
              "url": "https://www.eurocontrol.int/runway-safety",
              "tag": "03 • European Action Plan",
              "name": "Eurocontrol Runway Safety (EAPPRE)",
              "desc": "European Action Plan for the Prevention of Runway Excursions detailing operational restrictions in degraded weather.",
              "part": "Part 3"
            },
            {
              "url": "https://www.easa.europa.eu/en/domains/air-operations",
              "tag": "04 • Legal Flexibility",
              "name": "EASA Air Operations & Article 71 Exemptions",
              "desc": "European regulatory framework governing temporary operational permits, safety risk assessments, and authority approvals.",
              "part": "Part 4"
            },
            {
              "url": "https://www.faa.gov/airports/engineering",
              "tag": "05 • Airfield Engineering",
              "name": "FAA Airport Construction Safety Standards",
              "desc": "Advisory Circulars detailing operational safety plans during airport construction and underground pipe replacements.",
              "part": "Part 5"
            },
            {
              "url": "https://www.toulouse.aeroport.fr",
              "tag": "06 • Operational Base",
              "name": "Toulouse-Blagnac Aerodrome Operations (LFBO)",
              "desc": "Official operational notices, runway maintenance timetables, and airline consultative committee updates.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Connecting Words for Explaining Rules & Conditions",
            "badge": "CEFR B1–B2 Focus",
            "patternTitle": "Rule & Operational Condition Linkers",
            "formula": "Permission Clause + PROVIDED THAT + Mandatory Safety Condition (Condition Linker)",
            "rulesTitle": "How to Give Clear Reasons in Spoken Briefings",
            "rules": [
              "<strong>PROVIDED THAT / AS LONG AS (Condition):</strong> Introduces an essential safety boundary. Example: <em>'Aircraft may land provided that the runway surface is dry.'</em>",
              "<strong>DUE TO / BECAUSE OF (Cause):</strong> Followed by a noun phrase explaining why an unusual action was necessary. Example: <em>'The RESA is reduced due to underground culvert repairs.'</em>",
              "<strong>IN ORDER TO (Purpose):</strong> Followed by an infinitive verb to explain the safety goal. Example: <em>'We displaced the threshold by 180m in order to protect stopping distance.'</em>",
              "<strong>IN LIEU OF (Replacement):</strong> Means 'in place of' when substituting one safety barrier for another. Example: <em>'Temporary flashing guard lights were installed in lieu of painted lines.'</em>",
              "<strong>UNLESS (Exception):</strong> Sets an absolute restriction. Example: <em>'No landings are permitted unless crosswinds are below 15 knots.'</em>"
            ],
            "trap": "<strong>⚠️ Spoken English Pitfall:</strong> Do not say <em>'due to repair'</em> (verb). Always follow <em>'due to'</em> with a noun phrase: <em>'due to drainage repairs'</em>. To express purpose with a verb, always use <em>'in order to + verb'</em> (e.g. <em>'in order to repair the pipe'</em>).",
            "examplesTitle": "Operational Runway Briefing Examples",
            "examples": [
              "Aircraft may land on Runway 26 <strong>provided that</strong> the runway braking action is reported as good.",
              "The available safety area was reduced from 90m to 55m <strong>due to</strong> critical drainage pipe excavation.",
              "The threshold was displaced by 180 metres <strong>in order to guarantee</strong> standard landing rollout distance.",
              "Dedicated fire rescue vehicles are stationed at Holding Point B2 <strong>in lieu of</strong> normal fire station response times."
            ]
          }
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 Objectives - Aerodrome Ground Layouts & Taxiway Navigation",
          "summary": "By the end of this session, GSEA students will be able to orient someone to an airport map with natural spoken confidence, navigate a visual Ground Movement Chart (GMC), give precise physical directions using prepositions of place, play the 'Blind Taxi Navigator' information-gap game, role-play an active runway crossing taxi clearance, and complete a collaborative Safety Check on runway incursion hazards.",
          "items": [
            {
              "num": 1,
              "title": "Orient Someone to an Airport Map (Map Description Skill)",
              "description": "Learn and use natural spoken phrases to introduce an airport layout to a colleague (at the top, running north-to-south, directly opposite, adjacent to).",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Read a Visual Ground Movement Chart (Visual Chart Scanning)",
              "description": "Scan the visual LFMT aerodrome ground movement chart to identify runways, parallel taxiway Alpha, rapid exits Bravo and Charlie, crossing taxiway Delta, and Hot Spot 1.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Prepositions of Place & Physical Directions (Language Focus)",
              "description": "Master precise location words: adjacent to, opposite, parallel to, between, at the intersection of, short of, and beyond.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Communicative Game: 🎮 The Blind Taxi Navigator (Information-Gap Game)",
              "description": "Guide your partner from an assigned parking stand to a secret airfield destination using only spoken turn-by-turn physical directions.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Speaking Role-Play: Ground Movement Challenge & 'Lost on Tarmac'",
              "description": "Role-play a Ground Controller issuing taxi instructions with an active runway crossing, and talk a confused ground driver back to safety.",
              "part": "Part 5"
            },
            {
              "num": 6,
              "title": "Safety Check: Preventing Runway Incursions (Operational Discussion)",
              "description": "Collaborate in teams to analyze a confusing multi-taxiway intersection, evaluate collision risks, and agree on clear safety solutions.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session covering visual ground chart reading, map orientation skills, prepositions of place, the 'Blind Taxi Navigator' game, a runway crossing role-play, and a runway incursion Safety Check.",
          "items": [
            {
              "title": "Part 1: Warm-up: Navigating on the Ground",
              "description": "In pairs, students discuss why taxiing at unfamiliar airports is demanding, share personal navigation tricks, and test entry knowledge with 4 spot-check questions.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Visual Chart & Map Orientation Clinic",
              "description": "Analyzing the visual LFMT Ground Movement Chart (GMC), learning standard phrases for orienting colleagues to a map, and completing a 60-second map description challenge.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Clinic: Prepositions of Place & Directions",
              "description": "Oral drills and pair practice using prepositions of place (adjacent to, opposite, parallel to, between, at the intersection of, short of, beyond) to give crisp physical directions.",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Communicative Game: 🎮 The Blind Taxi Navigator",
              "description": "Information-gap partner game: Student A guides Student B across the airport to a secret destination using step-by-step spoken directions while Student B traces the route.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Speaking Role-Play & Safety Check",
              "description": "Spoken simulation: Ground Controller issues progressive taxi instructions with an active runway crossing, followed by a 4-step collaborative Safety Check on Hot Spot 1.",
              "part": "Part 5"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Aerodrome Ground Layouts & Taxiway Navigation",
            "subtitle": "Visual Ground Movement Charts (GMC), Map Orientation, Prepositions of Place & 'Blind Taxi Navigator' Game",
            "image": "images/s3_m1_session4_aerodrome.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Aerodrome Ground Operations & Technical English",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up & Entry Spot-Check",
            "summary": "Break the ice, discuss the challenges of ground navigation at major airports, and test your baseline knowledge of aerodrome ground markings.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Discussion"
            ],
            "instructions": [
              "In pairs, discuss the 3 opening questions about navigating airports on the ground.",
              "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
              "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
            ],
            "deliverable": "Shared agreement on 2 common ground taxi challenges and completed 4-question diagnostic.",
            "teacherNotes": "Encourage spontaneous speaking. Help students describe physical spaces and relative directions naturally in English without worrying about technical jargon.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "Why do pilots often say taxiing at a large international airport can be more stressful than flying?",
                "exampleAnswers": [
                  "In my opinion, it is because airports like Paris Charles de Gaulle or London Heathrow have dozens of intersecting taxiways, constant radio calls, construction zones, and tight turns.",
                  "Also, from the cockpit, visibility of ground markings can be limited, especially at night or in heavy rain and fog. One wrong turn can lead right onto an active runway."
                ],
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "When you look at an airport map, how do you quickly distinguish between a runway and a taxiway?",
                "exampleAnswers": [
                  "Runways always have numbers based on their magnetic heading (like 14L or 32R) and white centerline markings, while taxiways use single letters (like Alpha or Bravo) and yellow centerlines.",
                  "Also, runways are generally wider and longer with bright approach lights, whereas taxiways have blue edge lights and green centerlines."
                ],
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "What is the single most important rule when an aircraft approaches an active runway holding point?",
                "exampleAnswers": [
                  "The pilot must stop completely before the solid yellow line and hold short until receiving explicit, clear permission from the tower controller to enter or cross.",
                  "Even if the runway looks empty, crossing without a clearance is a dangerous runway incursion."
                ],
                "part": "Part 3"
              }
            ],
            "spotCheckQuestions": [
              {
                "id": 1,
                "question": "What does a taxiway holding position marking (Pattern A) look like on the ground?",
                "options": [
                  "A single dashed white line across the tarmac.",
                  "Two solid yellow lines and two dashed yellow lines across the taxiway.",
                  "A red square with white numbers.",
                  "A solid green circle painted in the middle of the apron."
                ],
                "correct": 1,
                "explanation": "Pattern A consists of two solid yellow lines and two dashed yellow lines. When taxiing towards a runway, you face the solid lines first and you must NEVER cross them without ATC clearance.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "What does the term 'Hold Short' mean in plain, everyday English?",
                "options": [
                  "Speed up to clear the runway quickly.",
                  "Turn around immediately and return to the parking stand.",
                  "Stop completely before the specified line or runway and wait for further instructions.",
                  "Pause for five seconds and then continue taxiing."
                ],
                "correct": 2,
                "explanation": "'Hold short' means stop completely before reaching the designated point and do not move forward until you receive clear, explicit permission.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "Why are some taxiways called 'Rapid Exit' or 'High-Speed' taxiways?",
                "options": [
                  "They are reserved exclusively for emergency fire vehicles.",
                  "They are connected to the runway at an angle (usually 30°) so landing planes can turn off safely at higher speeds, freeing up the runway faster.",
                  "They allow planes to taxi at 50 knots back to the terminal.",
                  "They are built downhill so planes roll without using engine thrust."
                ],
                "correct": 1,
                "explanation": "Rapid exit taxiways are angled at approximately 30 degrees, allowing landing aircraft to exit the runway at around 30 to 50 knots, which reduces runway occupancy time.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "question": "What is an airport 'Hot Spot' (HS) on an aerodrome chart?",
                "options": [
                  "A designated area where aircraft engines overheat in hot weather.",
                  "A location with free Wi-Fi for passengers on the apron.",
                  "A specific location on the airport with a history or potential risk of confusion or runway collisions.",
                  "The official smoking area for ground handling staff."
                ],
                "correct": 2,
                "explanation": "A Hot Spot is a clearly marked location on the airport map where complex geometry, confusing signs, or blind spots create a higher risk of runway incursions.",
                "part": "Part 4"
              }
            ]
          },
          "chartExtract": {
            "title": "Activity 2: Visual Chart & Map Orientation Clinic",
            "summary": "Inspect the visual Ground Movement Chart (LFMT) and learn natural spoken patterns to walk a colleague through an aerodrome layout.",
            "visualChart": "images/charts/chart_s4_gmc_lfmt.svg",
            "badge": "AUTHENTIC SIMULATION • LFMT GROUND MOVEMENT CHART",
            "callsign": "Blagnac-Montpellier Airport (LFMT / Elev 495 ft)",
            "mapDescriptionClinic": {
              "title": "Speaking Skill: How to Orient & Describe an Airport Map",
              "summary": "Use these natural spoken templates to introduce an airport layout clearly without hesitations:",
              "phrases": [
                {
                  "label": "Overall Orientation",
                  "phrase": "If you look at the overall layout, the airport is oriented northwest to southeast, with two parallel runways.",
                  "part": "Part 1"
                },
                {
                  "label": "Main Runway",
                  "phrase": "The primary runway is 14L/32R on the east side, spanning 3,500 metres with full CAT III ILS capability.",
                  "part": "Part 2"
                },
                {
                  "label": "Parallel Taxiway",
                  "phrase": "Running parallel to Runway 14L along its entire eastern edge is Taxiway Alpha.",
                  "part": "Part 3"
                },
                {
                  "label": "Terminals & Stands",
                  "phrase": "Over on the southwest side, you can see Apron North with the passenger terminal and Stands 1 through 16.",
                  "part": "Part 4"
                },
                {
                  "label": "Opposite Facilities",
                  "phrase": "Directly opposite the terminal on the western boundary is the cargo ramp, while the fire station sits adjacent to Apron North.",
                  "part": "Part 5"
                },
                {
                  "label": "Caution Areas",
                  "phrase": "Notice Hot Spot 1 at the junction of Alpha and Delta, where crossing vehicles create an incursion risk.",
                  "part": "Part 6"
                }
              ],
              "challenge": "Partner Challenge: Take turns giving your partner a 60-second spoken overview of the LFMT layout using at least 4 of the phrases above!"
            },
            "sections": [
              {
                "heading": "1. Runway Infrastructure & Orientation",
                "details": [
                  "Primary Runway 14L/32R: Length 3,500m, Width 45m, Asphalt surface, CAT III ILS equipped, lighted centerline.",
                  "Secondary Runway 14R/32L: Length 2,500m, Width 45m, Visual/Non-precision, separated from 14L by 380 metres.",
                  "Operational rule: Runway 14L is used for commercial jet departures and arrivals; Runway 14R is used for general aviation and maintenance flights."
                ],
                "part": "Part 1"
              },
              {
                "heading": "2. Taxiway Network & Designations",
                "details": [
                  "Taxiway Alpha (A): Main parallel taxiway running parallel to Runway 14L along its eastern side.",
                  "Taxiway Bravo (B): High-speed rapid exit taxiway connected at 30° to Runway 14L, 1,800m from threshold.",
                  "Taxiway Charlie (C): Second high-speed exit connected at 30° to Runway 14L, 2,400m from threshold.",
                  "Taxiway Delta (D): 90-degree crossing taxiway connecting Apron North across Runway 14R to Taxiway Alpha.",
                  "Taxiway Echo (E): End-around perimeter taxiway leading to the Runway 14L departure holding bay."
                ],
                "part": "Part 2"
              },
              {
                "heading": "3. Aprons, Stands & Facilities",
                "details": [
                  "Apron North: Commercial passenger terminal with Stands 1 to 16. Stand 14 is equipped with an airbridge.",
                  "Cargo Ramp: Situated on the western boundary, opposite the main passenger terminal.",
                  "De-icing Pad: Positioned between Taxiway Bravo and the maintenance hangar.",
                  "Fire & Rescue Station: Located adjacent to Apron North with direct emergency access to both runways."
                ],
                "part": "Part 3"
              },
              {
                "heading": "4. Holding Points & Hot Spots",
                "details": [
                  "Holding Point A1: Located at the threshold of Runway 14L; CAT I/II/III illuminated stop bars installed.",
                  "Holding Point D1: Located short of Runway 14R on Taxiway Delta; mandatory stop line.",
                  "Hot Spot 1 (HS1): Complex intersection of Taxiway Alpha, Delta, and apron taxilane where ground vehicles cross aircraft routes.",
                  "Hot Spot 2 (HS2): Intersection of Taxiway Delta and Runway 14R where line of sight from the control tower is partially obstructed during morning mist."
                ],
                "part": "Part 4"
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Clinic: Prepositions of Place & Physical Directions",
            "summary": "Master clear position words and direction-giving phrases to describe airport facilities with precision.",
            "rules": [
              {
                "term": "parallel to",
                "meaning": "Running alongside in the same direction at an equal distance.",
                "example": "Taxiway Alpha runs parallel to Runway 14L on its eastern side.",
                "part": "Part 1"
              },
              {
                "term": "adjacent to",
                "meaning": "Very close or next to something, often sharing a boundary.",
                "example": "The airport fire station is located adjacent to Apron North.",
                "part": "Part 2"
              },
              {
                "term": "opposite",
                "meaning": "Directly across from something, facing it.",
                "example": "The cargo ramp is directly opposite the passenger terminal.",
                "part": "Part 3"
              },
              {
                "term": "between ... and ...",
                "meaning": "In the middle space separating two objects or locations.",
                "example": "The de-icing pad is located between Taxiway Bravo and the hangar.",
                "part": "Part 4"
              },
              {
                "term": "at the intersection of",
                "meaning": "At the point where two or more paths, roads, or taxiways cross.",
                "example": "Hot Spot 1 is located at the intersection of Taxiway Alpha and Taxiway Delta.",
                "part": "Part 5"
              },
              {
                "term": "short of",
                "meaning": "Stopping before reaching a specific point, line, or boundary.",
                "example": "Air France 412, hold short of Runway 14R on Taxiway Delta.",
                "part": "Part 6"
              },
              {
                "term": "beyond",
                "meaning": "Further away than a specified point or boundary.",
                "example": "The blast pad extends 150 metres beyond the threshold of Runway 32R.",
                "part": "Part 7"
              }
            ],
            "drills": [
              {
                "id": 1,
                "prompt": "Where is the main fire station located relative to Apron North?",
                "targetAnswer": "The fire station is located adjacent to Apron North, giving emergency vehicles direct access to both runways.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "prompt": "Where does Taxiway Alpha lie relative to Runway 14L?",
                "targetAnswer": "Taxiway Alpha runs parallel to Runway 14L along its entire eastern length.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "prompt": "Where is the cargo ramp situated relative to the passenger terminal?",
                "targetAnswer": "The cargo ramp is situated on the west side of the airfield, directly opposite the main passenger terminal.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "prompt": "Where should an aircraft stop when taxiing on Delta towards Runway 14R?",
                "targetAnswer": "The aircraft must hold short of Runway 14R at holding point D1 until cleared to cross.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "prompt": "Where is Hot Spot 1 located on the aerodrome chart?",
                "targetAnswer": "Hot Spot 1 is located right at the intersection of Taxiway Alpha and Taxiway Delta.",
                "part": "Part 5"
              }
            ]
          },
          "communicativeGame": {
            "title": "Activity 4: Communicative Game: 🎮 The Blind Taxi Navigator",
            "summary": "An information-gap spoken game. Guide your partner from your parking stand to a mystery airfield destination using step-by-step oral directions.",
            "instructions": [
              "Student A (The Navigator): Pick one of the 4 Secret Missions below (do NOT tell your partner the destination). Look at the visual chart.",
              "Student B (The Pilot/Driver): Close your eyes or place your finger on the starting point on the chart. Do not look ahead.",
              "Student A gives clear, step-by-step physical directions: 'Start at Stand 14. Turn right onto Taxiway Delta. Taxi forward 150m until you reach the red holding line...'",
              "Student B traces the route with their finger. When Student A says 'You have arrived!', Student B must announce where they think they are!",
              "Switch roles and try another mission."
            ],
            "missions": [
              {
                "id": 1,
                "mission": "Mission 1 (Cargo Delivery): Start at Stand 14 &rarr; Target: Cargo Ramp",
                "hints": "Turn right onto Delta, hold short of 14R, cross runway, turn left onto perimeter taxilane, proceed opposite passenger terminal.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "mission": "Mission 2 (Winter De-icing): Start at Stand 16 &rarr; Target: De-icing Bay 2",
                "hints": "Taxi along Delta, cross Runway 14R, turn left onto Alpha, taxi past Hot Spot 1, turn right into the pad between Bravo and the hangar.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "mission": "Mission 3 (Emergency Drill): Start at Fire Station &rarr; Target: Holding Point A1 (Runway 14L)",
                "hints": "Exit station onto apron taxilane, join Delta, cross 14R, turn left on Alpha, taxi north to holding point A1.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "mission": "Mission 4 (Late Departure): Start at Cargo Ramp &rarr; Target: Stand 12 (Main Terminal)",
                "hints": "Taxi east along perimeter, cross Runway 14R carefully, enter Apron North, park at Stand 12 directly opposite the cargo ramp.",
                "part": "Part 4"
              }
            ],
            "sampleDialogue": [
              "Navigator: 'Start at Stand 14 on Apron North. Push back facing east.'",
              "Pilot: 'Facing east, copied.'",
              "Navigator: 'Taxi straight ahead on Taxiway Delta for about 150 metres. Look for the red stop bar and hold short of Runway 14R.'",
              "Pilot: 'Holding short of Runway 14R on Delta.'",
              "Navigator: 'Cleared across Runway 14R. Cross directly to the opposite side and turn left onto Taxiway Alpha. Pass Hot Spot 1 on your right.'",
              "Pilot: 'Crossing 14R, turning left onto Alpha.'",
              "Navigator: 'Continue straight along Alpha for 300 metres. Stop at the intersection before Bravo. Turn right into the paved pad. You have arrived! Where are you?'",
              "Pilot: 'I am at the De-icing Pad between Taxiway Bravo and the hangar!' (Correct!)"
            ]
          },
          "roleplaySimulation": {
            "title": "Activity 5: Speaking Role-Play: Ground Movement Challenge & 'Lost on Tarmac'",
            "summary": "Simulate a realistic spoken interaction between Ground Control and Flight AFR 412, plus a quick recovery dialogue with a lost driver.",
            "situation": "Part 1: Flight AFR 412 (Airbus A320) is parked at Stand 14 on Apron North. The pilot requests taxi clearance to Runway 14L. The route requires taxiing along Delta, crossing active Runway 14R, joining Taxiway Alpha, and holding short of 14L at A1.\nPart 2 (Spoken Twist): A ground baggage tug driver has taken a wrong turn in thick fog and is lost near Hot Spot 1. Ground Control must give calm, clear directions to guide the tug back to Apron North.",
            "roles": [
              {
                "role": "Role A: Ground Controller",
                "instructions": "Issue progressive taxi instructions. Give the taxi route: 'Taxi via Delta, hold short of Runway 14R'. When the runway is clear, instruct: 'Cross Runway 14R, taxi via Alpha to holding point A1, Runway 14L'. In Part 2, guide the lost tug driver away from the runway using simple landmarks.",
                "part": "Part 1"
              },
              {
                "role": "Role B: Airline Pilot (AFR 412) / Lost Tug Driver",
                "instructions": "In Part 1, call Ground ready to taxi. Read back all instructions completely, especially the runway hold-short command. In Part 2, act as the lost tug driver: describe what you see around you ('I see a red stop bar and a yellow taxiway sign saying Delta') and follow directions.",
                "part": "Part 2"
              },
              {
                "role": "Role C: Peer Observer & Safety Auditor",
                "instructions": "Use the checklist below to evaluate your peers. Did the pilot read back 'hold short of Runway 14R'? Did the controller give clear prepositions of place? Was the spoken English natural and confident?",
                "part": "Part 3"
              }
            ],
            "checklist": [
              "Controller used clear, unambiguous taxi instructions with correct taxiway names.",
              "Pilot read back the runway holding point instruction word-for-word ('Hold short of Runway 14R').",
              "Both speakers used natural, communicative English without long unnatural hesitations.",
              "Clear direction words (left, right, ahead, opposite) were used to recover the lost driver."
            ],
            "phrases": [
              "Ground, Air France 412, Stand 14, request taxi to Runway 14L.",
              "Air France 412, taxi via Delta, hold short of Runway 14R.",
              "Taxi via Delta, hold short of Runway 14R, Air France 412.",
              "Air France 412, cross Runway 14R, taxi via Alpha to holding point A1.",
              "Tug 4, do you see the bright fire station lights on your left? Turn left towards the station immediately."
            ]
          },
          "safetyCheck": {
            "title": "Activity 6: Safety Check: Preventing Runway Incursions",
            "summary": "Work in teams to analyze how confusing taxiway intersections lead to runway incursions and decide on practical safety defenses.",
            "steps": [
              {
                "step": 1,
                "title": "Identify the Hazard",
                "text": "At Hot Spot 1, Taxiway Delta crosses active Runway 14R at a 90-degree angle. During early morning mist, pilots exiting Apron North have mistaken holding point D1 for an apron taxilane stop line, resulting in two near-incursions in the past 6 months."
              },
              {
                "step": 2,
                "title": "Evaluate the Operational Risk",
                "text": "If an aircraft crosses holding point D1 without clearance while a light twin or business jet is on takeoff roll or landing on Runway 14R, a catastrophic high-speed collision could occur."
              },
              {
                "step": 3,
                "title": "Propose Protective Actions",
                "text": "1. Install illuminated red stop bars that remain turned on until ATC manually clears the crossing.\n2. Paint enhanced yellow taxiway centerline markings 45 metres prior to holding point D1.\n3. Add flashing yellow runway guard lights (wig-wags) on both sides of the taxiway.\n4. Mandate that Ground Controllers use progressive taxi instructions and always require a full verbal readback."
              },
              {
                "step": 4,
                "title": "Agree on the Team Decision",
                "text": "Agree with your team on the two most effective safety improvements and record your conclusions in the Operational Notes section below."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 4 Revision - Aerodrome Ground Layouts & Taxiway Navigation",
          "summary": "30 essential operational and ground navigation vocabulary terms for GSEA students covering aerodrome charts, taxiways, holding points, and surface markings.",
          "terms": [
            {
              "num": "01",
              "term": "Aerodrome Ground Chart (ADC)",
              "definition": "An official aeronautical chart showing the layout of runways, taxiways, aprons, and airport buildings.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Ground Movement Chart (GMC)",
              "definition": "A detailed large-scale chart used by pilots and ground controllers to navigate complex taxiways and apron stands.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Apron (Ramp)",
              "definition": "A defined area on an airport intended to accommodate aircraft for boarding, loading, refueling, or parking.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Taxiway",
              "definition": "A defined path on an airport established for the taxiing of aircraft between one part of the aerodrome and another.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Parallel Taxiway",
              "definition": "A taxiway that runs alongside and parallel to a runway, allowing aircraft to clear the runway quickly.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Rapid Exit Taxiway",
              "definition": "A taxiway connected to a runway at an acute angle (typically 30°) designed for landing planes to turn off at higher speeds.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Runway Holding Point",
              "definition": "A designated location on a taxiway where aircraft and vehicles must stop and hold until cleared onto an active runway.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Intermediate Holding Point",
              "definition": "A designated position on a taxiway for traffic control where an aircraft stops until further instructed by ATC.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Pattern A Holding Line",
              "definition": "A ground marking with two solid yellow lines and two dashed yellow lines; you must never cross the solid lines toward the runway without clearance.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Pattern B Holding Line",
              "definition": "A ladder-style ground marking used at CAT II/III precision runway holding positions to protect ILS signals.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Stop Bar",
              "definition": "A row of red lights across a taxiway showing that traffic must stop; when turned off by ATC, the taxiway is open.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Hot Spot (HS)",
              "definition": "A location on an aerodrome movement area with a history or potential risk of collision or runway incursion.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Mandatory Instruction Sign",
              "definition": "A red sign with white lettering indicating a runway entrance, critical area, or prohibited zone.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Location Sign",
              "definition": "A black sign with yellow lettering identifying the specific taxiway or runway on which the aircraft is currently located.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Direction Sign",
              "definition": "A yellow sign with black lettering and arrows indicating the designations and directions of intersecting taxiways.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "De-icing Pad",
              "definition": "An area on an apron or taxiway equipped for applying heated de-icing and anti-icing fluids to aircraft.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Holding Bay",
              "definition": "An area adjacent to a taxiway where aircraft can be held or bypassed to facilitate efficient ground traffic movement.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Displaced Threshold",
              "definition": "A runway threshold located at a point other than the beginning of the runway, often used when obstacles penetrate approach paths.",
              "part": "Part 18"
            },
            {
              "num": "19",
              "term": "Blast Pad",
              "definition": "A specially surfaced area preceding a runway threshold designed to prevent ground erosion from jet engine blast.",
              "part": "Part 19"
            },
            {
              "num": "20",
              "term": "Stopway",
              "definition": "A defined rectangular area at the end of the takeoff run in which an aircraft can be stopped during an abandoned takeoff.",
              "part": "Part 20"
            },
            {
              "num": "21",
              "term": "Clearway",
              "definition": "A defined rectangular area at the end of the runway over which an aircraft can make part of its initial climb.",
              "part": "Part 21"
            },
            {
              "num": "22",
              "term": "Runway Incursion",
              "definition": "Any occurrence involving the incorrect presence of an aircraft, vehicle, or person on an active runway protected area.",
              "part": "Part 22"
            },
            {
              "num": "23",
              "term": "Hold Short",
              "definition": "An ATC instruction directing a pilot or driver to stop completely before reaching a runway or taxiway and wait.",
              "part": "Part 23"
            },
            {
              "num": "24",
              "term": "Progressive Taxi",
              "definition": "Step-by-step taxi instructions issued by ground control to assist a pilot unfamiliar with the airport layout.",
              "part": "Part 24"
            },
            {
              "num": "25",
              "term": "Surface Movement Radar (SMR)",
              "definition": "Radar equipment specifically designed to detect and display the position of aircraft and vehicles on the airfield surface.",
              "part": "Part 25"
            },
            {
              "num": "26",
              "term": "Enhanced Taxiway Centerline",
              "definition": "Dashed yellow lines alongside the centerline starting 45m before a runway holding position to alert pilots.",
              "part": "Part 26"
            },
            {
              "num": "27",
              "term": "Follow-Me Vehicle",
              "definition": "An airport ground vehicle equipped with flashing lights that guides aircraft along taxiways to designated parking stands.",
              "part": "Part 27"
            },
            {
              "num": "28",
              "term": "Pushback",
              "definition": "The procedure during which an aircraft is pushed backwards away from an airport gate or parking stand by a tug vehicle.",
              "part": "Part 28"
            },
            {
              "num": "29",
              "term": "Maneuvering Area",
              "definition": "That part of an aerodrome used for the takeoff, landing, and taxiing of aircraft, excluding aprons.",
              "part": "Part 29"
            },
            {
              "num": "30",
              "term": "Movement Area",
              "definition": "That part of an aerodrome used for aircraft surface movement, consisting of the maneuvering area and the aprons.",
              "part": "Part 30"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Boeing 777 Airport Ground Handling: Start to Finish",
              "watchUrl": "https://www.youtube.com/watch?v=KSfgLX5j-lQ",
              "tag": "Ground Operations",
              "videoId": "KSfgLX5j-lQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/KSfgLX5j-lQ",
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation.",
              "part": "Part 3"
            }
          ],
          "grammar": {
            "title": "Expressing Professional Responsibilities, Duties & Authority",
            "badge": "B2 Functional Grammar Focus",
            "patternTitle": "Responsibility & Authority Formulas",
            "formula": "BE RESPONSIBLE FOR + -ING • BE TASKED WITH + -ING • HAVE AUTHORITY OVER / TO • ENSURE THAT + CLAUSE",
            "rulesTitle": "Core Formulas & Jurisdictional Prepositions",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. BE RESPONSIBLE FOR + Gerund / Noun:</strong> Core ongoing duty or accountability (<span style=\"font-weight: 700; color: #c0684f;\">responsible for coordinating</span>, <span style=\"font-weight: 700; color: #c0684f;\">responsible for flight safety</span>).",
              "<strong style=\"color: #1e293b;\">2. BE TASKED WITH + Gerund / Noun:</strong> Designated operational mission or assigned mandate (<span style=\"font-weight: 700; color: #c0684f;\">tasked with conducting</span>, <span style=\"font-weight: 700; color: #c0684f;\">tasked with safety audits</span>).",
              "<strong style=\"color: #1e293b;\">3. HAVE AUTHORITY OVER / TO:</strong> Legal command power (<span style=\"font-weight: 600; color: #334155;\">have authority over active runways</span> [ATCO], <span style=\"font-weight: 600; color: #334155;\">authority to issue clearances</span>).",
              "<strong style=\"color: #1e293b;\">4. ENSURE THAT + Clause:</strong> Verification and quality assurance (<span style=\"font-weight: 600; color: #334155;\">ensure that cargo doors are latched</span>, <span style=\"font-weight: 600; color: #334155;\">ensure that weight limits are respected</span>).",
              "<strong style=\"color: #1e293b;\">5. REPORT TO vs. LIAISE WITH:</strong> Upward hierarchy (<span style=\"font-weight: 600; color: #334155;\">reports to the chief pilot</span>) vs. lateral coordination (<span style=\"font-weight: 600; color: #334155;\">liaises with apron controllers</span>)."
            ],
            "trap": "<strong>⚠️ Common Preposition & False Friend Trap:</strong> Never say <em>responsible of</em>—always use <strong>responsible for + -ing</strong>. Also, strictly distinguish <em>control</em> (ATCO issuing binding separation orders) from <em>provide information</em> (AFISO advising pilots without executive control clearances).",
            "examplesTitle": "Operational Responsibility Examples",
            "examples": [
              "<em>\"The Turnaround Coordinator is <strong>responsible for ensuring</strong> that all ground support equipment is detached before pushback.\"</em>",
              "<em>\"Unlike aerodrome controllers, AFISOs are <strong>tasked with providing</strong> traffic information rather than tactical separation clearances.\"</em>"
            ]
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties.",
              "part": "Part 1"
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations.",
              "part": "Part 2"
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling.",
              "part": "Part 3"
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries.",
              "part": "Part 4"
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators.",
              "part": "Part 5"
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "06 • Technical Regulations",
              "name": "EASA Regulations & Safety Standards",
              "desc": "Official European aerodrome regulations, certification specifications, and safety directives for civil aviation professionals.",
              "part": "Part 6"
            }
          ],
          "pageUrl": "session4/admat_aas1.html",
          "articles": [
            {
              "topic": "FlightGlobal / Aviation Careers",
              "sourceTag": "Career Insight",
              "heading": "Beyond the Flight Deck: The Essential Network of Airport Operations",
              "snippet": "An in-depth look at the landside, airside, and regulatory roles that keep international aviation flowing seamlessly 24/7.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.flightglobal.com",
              "part": "Part 1"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac",
              "part": "Part 2"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int",
              "part": "Part 3"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org",
              "part": "Part 4"
            }
          ],
          "quizTitle": "Airside Scenario Quiz • Aerodrome Ground Layouts & Taxiway Navigation",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Ground Navigation Dilemmas & Chart Spot-Checks"
        }
      },
      "5": {
        "session": 5,
        "objectives": {
          "title": "Session 5 Objectives - Airspace Corridors: SIDs, STARs & Transition Routes",
          "summary": "By the end of this session, GSEA students will be able to explain airspace corridors in plain English, narrate a flight route sequentially using prepositions of movement, scan the visual GAILLAC 4A departure chart, play the 'Airspace Detective' logic game to spot dangerous clearance errors, role-play a cockpit departure briefing and weather diversion, and complete a collaborative Safety Check on route deviations.",
          "items": [
            {
              "num": 1,
              "title": "Trace a Flight Path Aloud (Sequential Narration Skill)",
              "description": "Learn and use professional spoken patterns to walk a colleague through a 3D flight corridor from takeoff to cruising level.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Read a Visual SID & STAR Route Chart (Visual Chart Scanning)",
              "description": "Scan the visual GAILLAC 4A departure chart to locate waypoints, climb restrictions, minimum safe altitudes (MSA), and the GAILLAC holding pattern.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Prepositions of Movement & Direction (Language Focus)",
              "description": "Master dynamic motion words: climb straight ahead to, turn left towards, proceed via, along corridor, maintain until, and intersect.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Communicative Game: 🔍 Airspace Detective: Spot the Route Trap",
              "description": "Review 4 simulated flight clearances with a partner, race to detect the hidden safety trap, explain the hazard in spoken English, and issue the correction.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Speaking Role-Play: Departure Briefing & Storm Diversion",
              "description": "Role-play a pre-departure cockpit briefing followed by an urgent radio request to divert 20 degrees around a developing storm cell.",
              "part": "Part 5"
            },
            {
              "num": 6,
              "title": "Safety Check: Managing Route Deviations & Level Busts (Operational Discussion)",
              "description": "Collaborate in teams to analyze a departure route deviation hazard, evaluate terrain risks, and agree on clear safety solutions.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 5 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session covering visual SID charts, sequential flight path narration, prepositions of movement, the 'Airspace Detective' game, a weather diversion role-play, and an altitude safety check.",
          "items": [
            {
              "title": "Part 1: Warm-up: Why SIDs and STARs Exist",
              "description": "In pairs, students discuss how structured departure corridors prevent air traffic conflicts, and test entry knowledge with 4 spot-check questions.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Visual Chart & Flight Path Narration Clinic",
              "description": "Analyzing the visual GAILLAC 4A departure chart, learning standard storytelling phrases for narrating a flight path sequentially, and completing a 60-second route briefing.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Clinic: Prepositions of Movement & Direction",
              "description": "Oral drills and pair practice using prepositions of movement (climb straight ahead to, turn left towards, proceed via, along, maintain until, intersect) to describe 3D climb paths.",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Communicative Game: 🔍 Airspace Detective: Spot the Route Trap",
              "description": "Spoken detective game: pairs review 4 departure clearance cases, spot the single illegal clearance, explain the danger in spoken English, and propose the fix.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Speaking Role-Play & Safety Check",
              "description": "Spoken simulation: Captain briefs First Officer on GAILLAC 4A, calls Departure Radar for a 20° weather diversion around a storm cell, and completes a terrain safety check.",
              "part": "Part 5"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Airspace Corridors: SIDs, STARs & Transition Routes",
            "subtitle": "Visual Departure Charts (GAILLAC 4A), Sequential Path Narration, Prepositions of Movement & 'Airspace Detective' Game",
            "image": "images/s3_m1_session5_sid_star.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Terminal Airspace Navigation & Technical English",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up & Entry Spot-Check",
            "summary": "Break the ice, discuss how airspace corridors keep skyways organized, and test your baseline knowledge of departure chart symbols.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Discussion"
            ],
            "instructions": [
              "In pairs, discuss the 3 opening questions about airspace corridors and departure routes.",
              "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
              "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
            ],
            "deliverable": "Shared agreement on why standard corridors are safer than ad-hoc radar vectors, and completed 4-question diagnostic.",
            "teacherNotes": "Encourage spontaneous speaking. Help students feel comfortable using dynamic motion verbs (climb, turn, proceed, join) to describe three-dimensional flight paths.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "Imagine if every aircraft leaving a major hub chose its own climb path and direction. What would happen?",
                "exampleAnswers": [
                  "It would be total chaos! Air traffic controllers would have to issue hundreds of individual heading calls every minute, which would saturate radio frequencies.",
                  "Standard routes create predictable, highway-like corridors where aircraft are separated by design, keeping both pilots and controllers safe."
                ],
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "What is the difference between a waypoint that is a 'fly-by' point and one that is a 'fly-over' point?",
                "exampleAnswers": [
                  "A fly-by waypoint allows the flight management computer to anticipate the turn slightly early so the plane cuts the corner smoothly and stays on track.",
                  "A fly-over waypoint means the aircraft must pass directly over the top of the point before initiating the turn, which is usually required to avoid high terrain or noise-sensitive towns."
                ],
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "Why do charts specify both an initial altitude and a 'Transition Altitude'?",
                "exampleAnswers": [
                  "The initial altitude keeps the climbing aircraft safely below arriving traffic in the terminal area.",
                  "The Transition Altitude (like 5,000 ft) is where pilots switch their altimeters from local ground pressure to the standard 1013 hPa setting so all cruising aircraft share the exact same vertical reference."
                ],
                "part": "Part 3"
              }
            ],
            "spotCheckQuestions": [
              {
                "id": 1,
                "question": "What does the abbreviation 'SID' stand for in air traffic terminology?",
                "options": [
                  "Surface Incident Detection.",
                  "Standard Instrument Departure.",
                  "Special IFR Direction.",
                  "Secondary Inbound Descent."
                ],
                "correct": 1,
                "explanation": "SID stands for Standard Instrument Departure—a published flight route connecting an aerodrome to the en-route airway system.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "On an aeronautical chart, how is a 'fly-over' waypoint symbolized differently from a standard 'fly-by' waypoint?",
                "options": [
                  "It is colored bright red instead of blue.",
                  "It is a four-pointed star enclosed inside a circle.",
                  "It has a small airplane icon next to it.",
                  "It is written in italic capital letters."
                ],
                "correct": 1,
                "explanation": "A fly-over waypoint is shown as a star (or triangle) enclosed in a circle, indicating the aircraft must fly directly overhead before beginning its turn.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "What does an altitude constraint written as 'FL070+' indicate on a departure chart?",
                "options": [
                  "The pilot must level off exactly at FL070 and hold indefinitely.",
                  "The aircraft must cross that waypoint at Flight Level 070 or higher.",
                  "The aircraft must be below FL070 to avoid military airspace.",
                  "The aircraft must fly 70 knots faster than normal."
                ],
                "correct": 1,
                "explanation": "The plus sign indicates 'at or above'. FL070+ means the aircraft must cross the fix at or higher than Flight Level 070 (7,000 feet on standard altimeter setting).",
                "part": "Part 3"
              },
              {
                "id": 4,
                "question": "What is the purpose of a published 'Minimum Safe Altitude' (MSA) on a route chart?",
                "options": [
                  "It is the minimum speed at which an aircraft can fly without stalling.",
                  "It provides at least 1,000 feet of clearance above all terrain and obstacles within 25 nautical miles of the navigation aid.",
                  "It indicates the lowest altitude for opening the cabin passenger doors.",
                  "It is the altitude where clouds permanently disappear."
                ],
                "correct": 1,
                "explanation": "The MSA guarantees at least 1,000 feet of obstacle clearance (or 2,000 feet in mountainous areas) within 25 NM, providing an emergency safety floor.",
                "part": "Part 4"
              }
            ]
          },
          "chartExtract": {
            "title": "Activity 2: Visual Chart & Flight Path Narration Clinic",
            "summary": "Inspect the visual GAILLAC 4A Departure Chart and learn how to narrate a flight path sequentially like an airline flight crew.",
            "visualChart": "images/charts/chart_s5_sid_lfmt.svg",
            "badge": "AUTHENTIC SIMULATION • SID GAILLAC 4A (LFMT)",
            "callsign": "Blagnac-Montpellier Airport (LFMT) • Runway 14L Departures",
            "flightPathClinic": {
              "title": "Speaking Skill: How to Trace a Flight Path Aloud (Sequential Narration)",
              "summary": "Use these sequential phrases to describe a 3D departure route smoothly from liftoff to en-route cruise:",
              "phrases": [
                {
                  "label": "1. Liftoff & Initial Track",
                  "phrase": "Our flight departs Runway 14L on an initial climb track of 142 degrees magnetic.",
                  "part": "Part 1"
                },
                {
                  "label": "2. Noise Abatement Altitude",
                  "phrase": "We maintain runway heading until reaching 3,000 feet or 5 DME, which protects residential areas from noise.",
                  "part": "Part 2"
                },
                {
                  "label": "3. The Climbing Turn",
                  "phrase": "Upon passing 3,000 feet, we execute a climbing left turn direct towards waypoint GAILLAC (GAI VOR/DME 114.4).",
                  "part": "Part 3"
                },
                {
                  "label": "4. Altitude Milestones",
                  "phrase": "We must cross 8 DME at or above 4,000 feet, and cross GAILLAC at or above Flight Level 070.",
                  "part": "Part 4"
                },
                {
                  "label": "5. Transition Altitude",
                  "phrase": "At 5,000 feet, we switch altimeters from local QNH to the standard 1013 setting.",
                  "part": "Part 5"
                },
                {
                  "label": "6. En-route Join",
                  "phrase": "From GAILLAC, we proceed along airway UM733 towards waypoint MENDE to join high-altitude airspace.",
                  "part": "Part 6"
                }
              ],
              "challenge": "Partner Challenge: Take turns narrating the entire GAILLAC 4A departure to your partner from memory in 60 seconds!"
            },
            "sections": [
              {
                "heading": "1. Initial Climb Profile & Heading",
                "details": [
                  "Runway Alignment: After liftoff from Runway 14L, climb straight ahead on runway track 142° magnetic.",
                  "Initial Altitude Constraint: Maintain runway track until reaching 3,000 ft QNH or 5 DME from TOU VOR (whichever occurs first).",
                  "Noise Abatement Constraint: No turns are permitted below 3,000 ft to protect surrounding residential areas from engine noise."
                ],
                "part": "Part 1"
              },
              {
                "heading": "2. Turn & En-Route Interception",
                "details": [
                  "First Turn: At 3,000 ft, turn left directly towards waypoint GAILLAC (GAI VOR/DME 114.4 MHz).",
                  "Intermediate Constraint: Cross 8 DME TOU at or above 4,000 ft.",
                  "Fix Constraint: Cross GAI VOR at or above FL070.",
                  "En-Route Join: From GAI, proceed along airway UM733 towards waypoint MENDE to join cruising airway network."
                ],
                "part": "Part 2"
              },
              {
                "heading": "3. Speed & Altitude Safeguards",
                "details": [
                  "Speed Limit: Maximum indicated airspeed 250 knots below FL100 unless cleared by ATC.",
                  "Transition Altitude (TA): 5,000 ft AMSL (set standard altimeter pressure 1013.25 hPa on passing 5,000 ft).",
                  "Minimum Safe Altitude (MSA): 4,200 ft within 25 NM north and east; 7,800 ft to the south towards the Pyrenees mountain sector."
                ],
                "part": "Part 3"
              },
              {
                "heading": "4. Holding Pattern at GAILLAC (GAI)",
                "details": [
                  "Inbound Course: 215° magnetic towards GAI VOR.",
                  "Turn Direction: Right-hand turns; standard 1-minute outbound leg.",
                  "Minimum Holding Level: FL080; maximum holding speed 230 knots."
                ],
                "part": "Part 4"
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Clinic: Prepositions of Movement & Direction",
            "summary": "Practice using dynamic prepositions and motion verbs to describe three-dimensional flight paths with precision.",
            "rules": [
              {
                "term": "climb straight ahead to",
                "meaning": "Maintain the runway alignment while ascending to a specified altitude.",
                "example": "After liftoff, climb straight ahead to 3,000 feet on runway track 142°.",
                "part": "Part 1"
              },
              {
                "term": "turn left / right towards",
                "meaning": "Change magnetic heading to point directly at a navigation fix or waypoint.",
                "example": "At 3,000 feet, turn left directly towards waypoint GAILLAC.",
                "part": "Part 2"
              },
              {
                "term": "proceed via",
                "meaning": "Follow a designated route, corridor, or sequence of waypoints.",
                "example": "Proceed via airway UM733 towards waypoint MENDE.",
                "part": "Part 3"
              },
              {
                "term": "along",
                "meaning": "Moving in a line parallel to or following a corridor or radial.",
                "example": "Fly along the 142-degree outbound radial until intercepting the turn point.",
                "part": "Part 4"
              },
              {
                "term": "cross at or above",
                "meaning": "Pass over a specific fix at an altitude equal to or greater than the restriction.",
                "example": "Cross waypoint GAILLAC at or above flight level 070.",
                "part": "Part 5"
              },
              {
                "term": "maintain ... until ...",
                "meaning": "Continue a speed, heading, or altitude until a specific event or condition occurs.",
                "example": "Maintain 250 knots until passing through 10,000 feet.",
                "part": "Part 6"
              },
              {
                "term": "intersect",
                "meaning": "To cross or join another path, beam, or route line.",
                "example": "Turn right heading 260 to intersect the localizer course.",
                "part": "Part 7"
              }
            ],
            "drills": [
              {
                "id": 1,
                "prompt": "How does the pilot fly immediately after takeoff on Runway 14L?",
                "targetAnswer": "After takeoff, the pilot climbs straight ahead on runway heading 142° until reaching 3,000 feet.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "prompt": "What action is required once passing 3,000 feet?",
                "targetAnswer": "At 3,000 feet, the aircraft turns left directly towards waypoint GAILLAC.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "prompt": "What is the altitude restriction at waypoint GAILLAC?",
                "targetAnswer": "The aircraft must cross waypoint GAILLAC at or above Flight Level 070.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "prompt": "How does the aircraft join the main airway system after GAILLAC?",
                "targetAnswer": "The aircraft proceeds via airway UM733 towards waypoint MENDE to join cruising airspace.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "prompt": "What speed restriction applies during the initial climb below FL100?",
                "targetAnswer": "The flight crew must maintain an indicated airspeed of 250 knots or less until passing through 10,000 feet.",
                "part": "Part 5"
              }
            ]
          },
          "communicativeGame": {
            "title": "Activity 4: Communicative Game: 🔍 Airspace Detective: Spot the Route Trap",
            "summary": "Review 4 simulated departure clearances with your partner. Three are legal, but one contains a dangerous error. Find it, explain the hazard, and fix it!",
            "instructions": [
              "In pairs, read each of the 4 simulated ATC clearances below.",
              "Three clearances follow the GAILLAC 4A rules perfectly, but ONE contains a dangerous procedural violation.",
              "Discuss with your partner: Which case is the TRAP? Why is it dangerous? What is the correct radio instruction?",
              "Click 'Reveal Detective Report' to check if your team caught the culprit!"
            ],
            "cases": [
              {
                "id": "Case Alpha",
                "clearance": "AFR 210, cleared GAILLAC 4A departure, after liftoff climb straight ahead to 3,000 ft, turn left direct GAILLAC, climb to FL090, cross GAI at or above FL070.",
                "status": "LEGAL",
                "note": "Follows all altitude, noise abatement, and route restrictions.",
                "part": "Part 1"
              },
              {
                "id": "Case Bravo (THE TRAP!)",
                "clearance": "AFR 442, cleared GAILLAC 4A departure. Airborne off 14L at 1,200 ft, immediate left turn direct GAILLAC approved for traffic shortcut, climb to FL080.",
                "status": "DANGEROUS TRAP!",
                "note": "VIOLATION! The chart strictly mandates: 'No turns below 3,000 ft QNH for noise abatement'. Turning at 1,200 ft violates local noise regulations and risks loss of separation with arrival corridors!",
                "part": "Part 2"
              },
              {
                "id": "Case Charlie",
                "clearance": "AFR 884, climbing through 4,000 ft on GAILLAC 4A, maintain 240 knots indicated until passing FL100, climb to FL120.",
                "status": "LEGAL",
                "note": "Speed is 240 kt (below the 250 kt max limit) and climb profile is respected.",
                "part": "Part 3"
              },
              {
                "id": "Case Delta",
                "clearance": "AFR 915, passing 3,500 ft, left turn direct GAILLAC approved, enter holding pattern at GAILLAC at FL080, right-hand turns, 1-minute legs.",
                "status": "LEGAL",
                "note": "Holding parameters match the published plate: FL080 min, right turns, 1 min legs.",
                "part": "Part 4"
              }
            ],
            "challengeQuestion": "Explain to the class: What makes Case Bravo dangerous, and how would you correct the controller's instruction in clear English?"
          },
          "roleplaySimulation": {
            "title": "Activity 5: Speaking Role-Play: Departure Briefing & Storm Diversion",
            "summary": "Simulate a two-part spoken challenge: a cockpit departure briefing followed by an urgent radio request to divert around a thunderstorm.",
            "situation": "Part 1: The Captain of AFR 624 briefs the First Officer on the GAILLAC 4A departure before takeoff from Runway 14L.\nPart 2: Climbing through 4,500 ft, airborne weather radar shows a severe convective storm cell building directly over the turn towards GAILLAC. The pilot contacts Departure Radar to request a heading 20 degrees left of track.",
            "roles": [
              {
                "role": "Role A: Airline Captain (AFR 624)",
                "instructions": "Brief the First Officer clearly: state the runway (14L), the initial climb (straight ahead to 3,000 ft), the turn point (left direct GAILLAC), the altitude restriction (cross GAI at or above FL070), and the transition altitude (5,000 ft). In Part 2, call Departure Radar calmly to request a 20-degree left heading deviation to avoid the storm cell.",
                "part": "Part 1"
              },
              {
                "role": "Role B: Departure Radar Controller",
                "instructions": "In Part 1, listen to the briefing as the First Officer and confirm agreement. In Part 2, receive the pilot's diversion request. Check your radar display, check terrain clearance (MSA 4,200 ft), approve the 20-degree left turn, and clear the flight to continue climb to FL090.",
                "part": "Part 2"
              },
              {
                "role": "Role C: Peer Observer & Safety Auditor",
                "instructions": "Use the checklist below to assess your peers. Was the departure briefing structured and clear? Did the pilot use standard prepositions of movement? Was the radio request calm and precise?",
                "part": "Part 3"
              }
            ],
            "checklist": [
              "Captain covered all 5 key briefing points (runway, climb, turn, altitude restriction, TA).",
              "Both speakers used natural, communicative English without long unnatural pauses.",
              "Pilot stated the reason for diversion clearly ('due to weather/convective cell').",
              "Controller confirmed terrain clearance before approving the deviation."
            ],
            "phrases": [
              "This will be the GAILLAC 4A departure from Runway 14L.",
              "After liftoff, climb straight ahead on track 142° to 3,000 feet.",
              "At 3,000 feet, turn left direct to GAILLAC, crossing GAI at or above FL070.",
              "Departure, Air France 624, climbing through 4,500 feet, request heading 20 degrees left of track due to weather.",
              "Air France 624, left heading 20 degrees approved, climb to FL090, report when able to proceed direct GAILLAC."
            ]
          },
          "safetyCheck": {
            "title": "Activity 6: Safety Check: Managing Departure Route Deviations & Level Busts",
            "summary": "Work in teams to analyze the safety hazards when weather forces aircraft off published departure corridors.",
            "steps": [
              {
                "step": 1,
                "title": "Identify the Hazard",
                "text": "During heavy summer convective weather, a climbing jet turns off the GAILLAC 4A SID corridor to avoid severe hail. In doing so, it moves towards rising mountainous terrain to the south where the Minimum Safe Altitude is 7,800 ft."
              },
              {
                "step": 2,
                "title": "Evaluate the Operational Risk",
                "text": "If the aircraft turns towards high terrain without climbing above the sector MSA, or if an altitude bust occurs due to pilot distraction in heavy turbulence, terrain proximity warnings (CFIT risk) or conflict with inbound arrival traffic could happen."
              },
              {
                "step": 3,
                "title": "Propose Protective Actions",
                "text": "1. Always verify sector Minimum Safe Altitude (MSA) before authorizing or executing any off-route heading vector.\n2. ATC must issue an immediate climb clearance above the terrain floor (FL090 or higher) when approving diversions.\n3. Flight crew must cross-check navigation displays and maintain sterile cockpit procedures during weather deviations.\n4. Ensure full readback of assigned tactical headings and target flight levels."
              },
              {
                "step": 4,
                "title": "Agree on the Team Decision",
                "text": "Agree with your team on the two most critical safety safeguards and record your conclusions in the Operational Notes section below."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 5 Revision - Airspace Corridors: SIDs, STARs & Transition Routes",
          "summary": "30 essential operational and terminal navigation vocabulary terms for GSEA students covering departure routes, arrivals, waypoints, and prepositions of movement.",
          "terms": [
            {
              "num": "01",
              "term": "Standard Instrument Departure (SID)",
              "definition": "A published IFR departure route linking an airport to a specified point on an en-route airway.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Standard Terminal Arrival Route (STAR)",
              "definition": "A published IFR arrival route linking an en-route point to a point where an approach can begin.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Waypoint",
              "definition": "A specified geographical location used to define an area navigation (RNAV) route or flight path.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Fly-by Waypoint",
              "definition": "A waypoint that allows turn anticipation to smoothly join the next segment of a route.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Fly-over Waypoint",
              "definition": "A waypoint at which an aircraft must fly directly overhead before starting a turn.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Flight Level (FL)",
              "definition": "An altitude reference surface based on standard pressure (1013.25 hPa), expressed in hundreds of feet.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Transition Altitude (TA)",
              "definition": "The altitude at or below which vertical position is controlled by reference to local ground pressure (QNH).",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Transition Level (TRL)",
              "definition": "The lowest flight level available above the transition altitude, where altimeters are set to standard pressure.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Transition Layer",
              "definition": "The airspace between the transition altitude and transition level where altimeter settings change.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Minimum Safe Altitude (MSA)",
              "definition": "The lowest altitude providing at least 1,000 feet of obstacle clearance within a 25 NM radius.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Altitude Window",
              "definition": "A published vertical constraint requiring an aircraft to cross a waypoint between two specified altitudes.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Speed Restriction",
              "definition": "A mandatory maximum or minimum indicated airspeed published on a chart or instructed by ATC.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Holding Pattern",
              "definition": "A predetermined racetrack flight maneuver keeping an aircraft within specified airspace while awaiting clearance.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Inbound Track",
              "definition": "The magnetic heading flown directly towards a holding fix or navigation facility.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Outbound Leg",
              "definition": "The segment of a holding pattern flown in the opposite direction of the inbound track, usually timed for 1 minute.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Holding Fix",
              "definition": "A specified location defined by a navaid, waypoint, or intersection where a holding pattern begins.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Rate of Climb",
              "definition": "The vertical speed at which an aircraft gains altitude, typically expressed in feet per minute (fpm).",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Climb Gradient",
              "definition": "The ratio of altitude gained to horizontal distance covered, expressed as a percentage or ft/NM.",
              "part": "Part 18"
            },
            {
              "num": "19",
              "term": "Noise Abatement Procedure",
              "definition": "Operational climb procedures designed to minimize aircraft noise over populated communities near an airport.",
              "part": "Part 19"
            },
            {
              "num": "20",
              "term": "Track (TR)",
              "definition": "The actual path of an aircraft projected over the ground, expressed in degrees from North.",
              "part": "Part 20"
            },
            {
              "num": "21",
              "term": "Heading (HDG)",
              "definition": "The direction in which the nose of an aircraft points, expressed in degrees from North.",
              "part": "Part 21"
            },
            {
              "num": "22",
              "term": "Airway",
              "definition": "A controlled airspace corridor established with navigation aids for en-route flight.",
              "part": "Part 22"
            },
            {
              "num": "23",
              "term": "Upper Airspace",
              "definition": "Airspace above a specified flight level (often FL195) reserved for high-altitude en-route cruising.",
              "part": "Part 23"
            },
            {
              "num": "24",
              "term": "Terminal Control Area (TMA)",
              "definition": "A controlled airspace established around one or more major airports to manage arriving and departing traffic.",
              "part": "Part 24"
            },
            {
              "num": "25",
              "term": "Control Zone (CTR)",
              "definition": "Controlled airspace extending upwards from the ground to a specified limit immediately around an aerodrome.",
              "part": "Part 25"
            },
            {
              "num": "26",
              "term": "Level Bust",
              "definition": "Any unauthorized deviation from an assigned altitude or flight level greater than 300 feet.",
              "part": "Part 26"
            },
            {
              "num": "27",
              "term": "Area Navigation (RNAV)",
              "definition": "A navigation method permitting flight on any desired path using ground, satellite, or inertial navigation.",
              "part": "Part 27"
            },
            {
              "num": "28",
              "term": "Radar Vectoring",
              "definition": "Providing navigational guidance to an aircraft in the form of specific magnetic headings using radar.",
              "part": "Part 28"
            },
            {
              "num": "29",
              "term": "Clearance Limit",
              "definition": "The point to which an aircraft is granted an air traffic control clearance.",
              "part": "Part 29"
            },
            {
              "num": "30",
              "term": "Lost Communications Procedure",
              "definition": "The published set of standardized flight actions to follow if two-way radio contact is lost.",
              "part": "Part 30"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Boeing 777 Airport Ground Handling: Start to Finish",
              "watchUrl": "https://www.youtube.com/watch?v=KSfgLX5j-lQ",
              "tag": "Ground Operations",
              "videoId": "KSfgLX5j-lQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/KSfgLX5j-lQ",
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation.",
              "part": "Part 3"
            }
          ],
          "grammar": {
            "title": "Expressing Professional Responsibilities, Duties & Authority",
            "badge": "B2 Functional Grammar Focus",
            "patternTitle": "Responsibility & Authority Formulas",
            "formula": "BE RESPONSIBLE FOR + -ING • BE TASKED WITH + -ING • HAVE AUTHORITY OVER / TO • ENSURE THAT + CLAUSE",
            "rulesTitle": "Core Formulas & Jurisdictional Prepositions",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. BE RESPONSIBLE FOR + Gerund / Noun:</strong> Core ongoing duty or accountability (<span style=\"font-weight: 700; color: #c0684f;\">responsible for coordinating</span>, <span style=\"font-weight: 700; color: #c0684f;\">responsible for flight safety</span>).",
              "<strong style=\"color: #1e293b;\">2. BE TASKED WITH + Gerund / Noun:</strong> Designated operational mission or assigned mandate (<span style=\"font-weight: 700; color: #c0684f;\">tasked with conducting</span>, <span style=\"font-weight: 700; color: #c0684f;\">tasked with safety audits</span>).",
              "<strong style=\"color: #1e293b;\">3. HAVE AUTHORITY OVER / TO:</strong> Legal command power (<span style=\"font-weight: 600; color: #334155;\">have authority over active runways</span> [ATCO], <span style=\"font-weight: 600; color: #334155;\">authority to issue clearances</span>).",
              "<strong style=\"color: #1e293b;\">4. ENSURE THAT + Clause:</strong> Verification and quality assurance (<span style=\"font-weight: 600; color: #334155;\">ensure that cargo doors are latched</span>, <span style=\"font-weight: 600; color: #334155;\">ensure that weight limits are respected</span>).",
              "<strong style=\"color: #1e293b;\">5. REPORT TO vs. LIAISE WITH:</strong> Upward hierarchy (<span style=\"font-weight: 600; color: #334155;\">reports to the chief pilot</span>) vs. lateral coordination (<span style=\"font-weight: 600; color: #334155;\">liaises with apron controllers</span>)."
            ],
            "trap": "<strong>⚠️ Common Preposition & False Friend Trap:</strong> Never say <em>responsible of</em>—always use <strong>responsible for + -ing</strong>. Also, strictly distinguish <em>control</em> (ATCO issuing binding separation orders) from <em>provide information</em> (AFISO advising pilots without executive control clearances).",
            "examplesTitle": "Operational Responsibility Examples",
            "examples": [
              "<em>\"The Turnaround Coordinator is <strong>responsible for ensuring</strong> that all ground support equipment is detached before pushback.\"</em>",
              "<em>\"Unlike aerodrome controllers, AFISOs are <strong>tasked with providing</strong> traffic information rather than tactical separation clearances.\"</em>"
            ]
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties.",
              "part": "Part 1"
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations.",
              "part": "Part 2"
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling.",
              "part": "Part 3"
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries.",
              "part": "Part 4"
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators.",
              "part": "Part 5"
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "06 • Technical Regulations",
              "name": "EASA Regulations & Safety Standards",
              "desc": "Official European aerodrome regulations, certification specifications, and safety directives for civil aviation professionals.",
              "part": "Part 6"
            }
          ],
          "pageUrl": "session4/admat_aas1.html",
          "articles": [
            {
              "topic": "FlightGlobal / Aviation Careers",
              "sourceTag": "Career Insight",
              "heading": "Beyond the Flight Deck: The Essential Network of Airport Operations",
              "snippet": "An in-depth look at the landside, airside, and regulatory roles that keep international aviation flowing seamlessly 24/7.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.flightglobal.com",
              "part": "Part 1"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac",
              "part": "Part 2"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int",
              "part": "Part 3"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org",
              "part": "Part 4"
            }
          ],
          "quizTitle": "Airside Scenario Quiz • Airspace Corridors: SIDs, STARs & Transition Routes",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Departure Route Dilemmas & Chart Spot-Checks"
        }
      },
      "6": {
        "session": 6,
        "objectives": {
          "title": "Session 6 Objectives - Approach Plates: Final Corridors & Go-Around Paths",
          "summary": "By the end of this session, GSEA students will be able to read and explain visual approach plates (IAC / ILS) in plain English, explain vertical descent profiles aloud, play the fast-paced 'Go / No-Go Lightning Challenge', role-play an emergency go-around command, and complete a collaborative Safety Check on unstabilized approach criteria.",
          "items": [
            {
              "num": 1,
              "title": "Read the Side-View Profile Aloud (Profile Briefing Skill)",
              "description": "Learn and use standard spoken patterns to explain vertical descent profiles, FAF Maltese cross, glide path angles, and decision heights.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Read a Visual Approach Plate (Visual Chart Scanning)",
              "description": "Scan the visual ILS Runway 14L approach plate to identify plan view fixes (CAPDENAC, BLAGY), FAF at 5.2 DME, 3.0° glide slope, and decision altitude (692 ft).",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Vertical Paths & Cockpit Callouts (Language Focus)",
              "description": "Master vertical flight terminology: on the glide slope, slightly high/low, at the final approach fix, upon reaching minimums, and positive climb, gear up.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Communicative Game: ⚡ Go / No-Go Lightning Challenge",
              "description": "Fast-paced rapid-fire round! Take turns reading approach dilemma cards, call out 'CONTINUE!' or 'GO-AROUND!' in 3 seconds, and defend your choice.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Speaking Role-Play: Low Visibility Approach & Emergency Go-Around",
              "description": "Role-play a tense final approach where a vehicle incursion on the runway forces the controller to command an immediate go-around.",
              "part": "Part 5"
            },
            {
              "num": 6,
              "title": "Safety Check: Unstabilized Approach & Go-Around Culture (Operational Discussion)",
              "description": "Collaborate in teams to analyze unstabilized approach risks, overcome hesitation traps, and support a blame-free go-around safety culture.",
              "part": "Part 6"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 6 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session covering visual ILS approach plates, profile view briefings, the 'Go / No-Go Lightning Challenge' game, an emergency go-around role-play, and an unstabilized approach safety check.",
          "items": [
            {
              "title": "Part 1: Warm-up: The Final 3 Minutes Before Touchdown",
              "description": "In pairs, students discuss cockpit workload on final approach, explain stabilized approach gates, and test entry knowledge with 4 spot-check questions.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Visual Chart & Profile View Briefing Clinic",
              "description": "Analyzing the visual ILS Runway 14L plate at LFMT, learning standard phrases to describe the vertical step-down profile, and completing a 60-second approach briefing.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Clinic: Vertical Paths & Cockpit Callouts",
              "description": "Oral drills and pair practice using vertical flight terminology (on the glide slope, at the final approach fix, upon reaching minimums, go-around positive climb).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Communicative Game: ⚡ Go / No-Go Lightning Challenge",
              "description": "Rapid-fire partner game: students evaluate 6 high-pressure approach scenarios, make instant 3-second 'Continue' or 'Go-Around' calls, and defend their choice.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Speaking Role-Play & Safety Check",
              "description": "Spoken simulation: Tower Controller commands an immediate go-around due to a vehicle crossing Runway 14L on 2-mile final, followed by a 4-step Safety Check on stabilized criteria.",
              "part": "Part 5"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Approach Plates: Final Corridors & Go-Around Paths",
            "subtitle": "Visual ILS Plates (Plan & Profile Views), Vertical Flight Callouts & 'Go / No-Go Lightning Challenge' Game",
            "image": "images/s3_m1_session6_approach.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Final Approach Operations & Technical English",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up & Entry Spot-Check",
            "summary": "Break the ice, discuss the intense workload during the final 3 minutes before touchdown, and test your baseline knowledge of approach plate symbols.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Discussion"
            ],
            "instructions": [
              "In pairs, discuss the 3 opening questions about flying the final approach.",
              "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
              "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
            ],
            "deliverable": "Shared agreement on what constitutes a safe stabilized approach, and completed 4-question diagnostic.",
            "teacherNotes": "Encourage spontaneous speaking. Help students understand that a go-around is not a failure, but a normal, professional safety decision.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "Why do aviation safety experts call the final approach phase the 'most critical three minutes' of flight?",
                "exampleAnswers": [
                  "Because the aircraft is close to the ground, flying at relatively slow speed with flaps and landing gear extended, leaving very little margin for error.",
                  "Also, both pilots must manage radio communications, cross-check flight instruments, watch for visual references, and be ready to execute a go-around at a second's notice."
                ],
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "What is the crucial difference between a Decision Altitude (DA) and a Minimum Descent Altitude (MDA)?",
                "exampleAnswers": [
                  "A Decision Altitude is used on a precision approach (like an ILS); as soon as you reach that exact altitude, you must either see the runway or start climbing immediately.",
                  "A Minimum Descent Altitude is used on a non-precision approach; you descend to that altitude, level off, and fly flat until you reach the missed approach point."
                ],
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "Why do some flight crews hesitate to initiate a go-around, even when the approach is unstabilized?",
                "exampleAnswers": [
                  "Psychological pressure! Flight crews naturally want to complete the flight on schedule to avoid delays, extra fuel burn, or passenger inconvenience.",
                  "That is why modern airline safety culture stresses that a go-around is always the correct, blame-free decision whenever any doubt exists."
                ],
                "part": "Part 3"
              }
            ],
            "spotCheckQuestions": [
              {
                "id": 1,
                "question": "What does the Maltese Cross symbol represent on an instrument approach plate profile view?",
                "options": [
                  "The airport medical center.",
                  "The Final Approach Fix (FAF) where the final descent begins.",
                  "The location of the primary control tower.",
                  "The point where cabin crew must sit down."
                ],
                "correct": 1,
                "explanation": "The Maltese Cross marks the Final Approach Fix (FAF), the critical point on the approach where the aircraft initiates its final glide slope descent toward the runway.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "question": "What is the standard glide path angle for an Instrument Landing System (ILS) precision approach?",
                "options": [
                  "1.5 degrees.",
                  "3.0 degrees.",
                  "6.0 degrees.",
                  "9.0 degrees."
                ],
                "correct": 1,
                "explanation": "The standard ILS glide path angle is 3.0 degrees, providing a steady descent of approximately 318 feet per nautical mile (around 700–800 fpm at typical jet approach speeds).",
                "part": "Part 2"
              },
              {
                "id": 3,
                "question": "What does 'RVR 550m' mean in the landing minimums section of an approach plate?",
                "options": [
                  "The runway is 550 metres long.",
                  "Runway Visual Range: the horizontal distance down the runway that a pilot can see runway lights or markings is at least 550 metres.",
                  "The cloud base is 550 metres above the runway.",
                  "The radar antenna is located 550 metres from the tower."
                ],
                "correct": 1,
                "explanation": "RVR stands for Runway Visual Range—the measured horizontal visibility down the runway surface, which must meet or exceed the published minimum (e.g. 550m for CAT I) to attempt a landing.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "question": "If visual references are lost or not seen upon reaching Decision Altitude, what must the pilot do?",
                "options": [
                  "Descend an extra 100 feet to see under the fog.",
                  "Immediately execute the published missed approach procedure (go-around).",
                  "Switch off the autopilot and guess the runway centerline.",
                  "Circle around the runway at 200 feet."
                ],
                "correct": 1,
                "explanation": "At Decision Altitude, if required visual references (approach lights, threshold markings) are not distinctly visible, the pilot MUST immediately initiate a missed approach without hesitation.",
                "part": "Part 4"
              }
            ]
          },
          "chartExtract": {
            "title": "Activity 2: Visual Chart & Profile View Briefing Clinic",
            "summary": "Inspect the visual ILS Runway 14L plate (Plan View + Profile View) and master how to deliver a crisp spoken approach briefing.",
            "visualChart": "images/charts/chart_s6_approach_lfmt.svg",
            "badge": "AUTHENTIC SIMULATION • ILS RWY 14L APPROACH PLATE (LFMT)",
            "callsign": "Blagnac-Montpellier Airport (LFMT / Elev 495 ft) • ILS or LOC Rwy 14L",
            "profileClinic": {
              "title": "Speaking Skill: How to Read the Side-View (Profile) Aloud",
              "summary": "Use these spoken patterns to walk your colleague through the vertical approach profile from the FAF to the runway:",
              "phrases": [
                {
                  "label": "1. Navigation Setup",
                  "phrase": "This will be the ILS Runway 14L approach, tuned to localizer 109.3 MHz with an inbound track of 142 degrees.",
                  "part": "Part 1"
                },
                {
                  "label": "2. Intermediate Fix",
                  "phrase": "We cross BLAGY at 9 DME at an altitude of 4,000 feet, where we begin configuring flaps and gear.",
                  "part": "Part 2"
                },
                {
                  "label": "3. Final Approach Fix",
                  "phrase": "The Maltese Cross marks the Final Approach Fix at 5.2 DME at 2,000 feet, where we intercept the 3-degree glide slope.",
                  "part": "Part 3"
                },
                {
                  "label": "4. Vertical Descent",
                  "phrase": "Following the 3-degree glide slope downwards, our target descent rate is approximately 750 feet per minute.",
                  "part": "Part 4"
                },
                {
                  "label": "5. Decision Altitude",
                  "phrase": "Our CAT I Decision Altitude is 692 feet, which gives us a decision height of exactly 200 feet above the touchdown zone.",
                  "part": "Part 5"
                },
                {
                  "label": "6. Missed Approach",
                  "phrase": "In the event of a go-around: climb straight ahead on track 142° to 2,500 feet, then turn left climbing to 4,000 feet direct TOU VOR.",
                  "part": "Part 6"
                }
              ],
              "challenge": "Partner Challenge: Take turns delivering the full approach briefing to your partner in 60 seconds!"
            },
            "sections": [
              {
                "heading": "1. Navigation Frequencies & Course Data",
                "details": [
                  "Localizer Frequency: I-MT 109.3 MHz • Final Approach Track: 142° magnetic.",
                  "Initial Approach Fix (IAF): Waypoint CAPDENAC at 5,000 ft QNH.",
                  "Intermediate Fix (IF): Waypoint BLAGY at 4,000 ft QNH.",
                  "Final Approach Fix (FAF): Maltese Cross at 5.2 DME I-MT at 2,000 ft QNH."
                ],
                "part": "Part 1"
              },
              {
                "heading": "2. Vertical Profile & Descent Data",
                "details": [
                  "Glide Path Angle: 3.00° (318 ft per nautical mile, approx 750 fpm descent at 140 kt groundspeed).",
                  "Threshold Crossing Height (TCH): 50 ft above runway elevation.",
                  "Aerodrome Elevation: 495 ft AMSL • Touchdown Zone Elevation (TDZE): 492 ft AMSL."
                ],
                "part": "Part 2"
              },
              {
                "heading": "3. Published Landing Minimums",
                "details": [
                  "CAT I ILS Precision Minimums: Decision Altitude (DA) 692 ft AMSL (Decision Height 200 ft AGL) • RVR 550m.",
                  "LOC Only (Non-Precision) Minimums: Minimum Descent Altitude (MDA) 890 ft AMSL (MDH 395 ft AGL) • Visibility 1,500m.",
                  "Circling Minimums: MDA 1,050 ft AMSL • Visibility 2,400m."
                ],
                "part": "Part 3"
              },
              {
                "heading": "4. Published Missed Approach Procedure (Go-Around)",
                "details": [
                  "Initial Climb: Climb straight ahead on runway track 142° to 2,500 ft QNH.",
                  "Turn Instruction: At 2,500 ft, turn left climbing to 4,000 ft direct to TOU VOR/DME.",
                  "Holding Instruction: Enter published holding pattern at TOU VOR at 4,000 ft, or as directed by ATC."
                ],
                "part": "Part 4"
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Clinic: Vertical Paths & Cockpit Callouts",
            "summary": "Master clear spoken terminology for vertical flight path tracking, approach warnings, and go-around execution.",
            "rules": [
              {
                "term": "on the glide slope",
                "meaning": "Tracking the electronic 3.0-degree descent beam perfectly.",
                "example": "We are fully established on the localizer and on the glide slope.",
                "part": "Part 1"
              },
              {
                "term": "above / below the glide path",
                "meaning": "Displaced vertically from the planned descent path.",
                "example": "Check your sink rate; we are one dot below the glide path.",
                "part": "Part 2"
              },
              {
                "term": "at the final approach fix",
                "meaning": "Passing the Maltese cross where the final descent begins.",
                "example": "At the final approach fix: 5.2 DME, 2,000 feet verified, gear down.",
                "part": "Part 3"
              },
              {
                "term": "upon reaching decision altitude",
                "meaning": "At the exact altitude where the landing or go-around choice must be made.",
                "example": "Upon reaching decision altitude at 692 feet, call 'runway in sight' or 'go-around'.",
                "part": "Part 4"
              },
              {
                "term": "level off at",
                "meaning": "Stopping descent and maintaining level flight.",
                "example": "For the LOC approach, descend to MDA and level off at 890 feet.",
                "part": "Part 5"
              },
              {
                "term": "execute missed approach",
                "meaning": "Initiate the published climb and turn procedure away from the runway.",
                "example": "Visual reference not acquired at minimums—executing missed approach.",
                "part": "Part 6"
              },
              {
                "term": "positive climb, gear up",
                "meaning": "Confirming altimeter and vertical speed show a steady climb before retracting landing gear.",
                "example": "Go-around, set flaps 15, positive climb confirmed, gear up.",
                "part": "Part 7"
              }
            ],
            "drills": [
              {
                "id": 1,
                "prompt": "How does the pilot announce that both beams are captured on final approach?",
                "targetAnswer": "We are fully established on the localizer and on the glide slope.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "prompt": "What altitude check is made at the Final Approach Fix (5.2 DME)?",
                "targetAnswer": "At the final approach fix: 5.2 DME, altitude 2,000 feet verified, descent continuing.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "prompt": "What is the mandatory pilot callout upon reaching Decision Altitude (692 ft) in thick cloud?",
                "targetAnswer": "Minimums! No visual contact—go-around, flaps 15, positive climb, gear up!",
                "part": "Part 3"
              },
              {
                "id": 4,
                "prompt": "What is the initial climb instruction on the published missed approach procedure?",
                "targetAnswer": "Climb straight ahead on runway track 142° to 2,500 feet, then turn left towards TOU VOR.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "prompt": "What does the pilot call when altimeter and VSI confirm ascending flight during a go-around?",
                "targetAnswer": "Positive climb confirmed—gear up, set climb thrust.",
                "part": "Part 5"
              }
            ]
          },
          "communicativeGame": {
            "title": "Activity 4: Communicative Game: ⚡ Go / No-Go Lightning Challenge",
            "summary": "A high-speed approach dilemma game. Take turns reading the 6 dilemma cards below. You have 3 seconds to shout 'CONTINUE!' or 'GO-AROUND!', and 2 complete sentences to defend your choice!",
            "instructions": [
              "Student A reads a Dilemma Card aloud to Student B.",
              "Student B must shout either 'CONTINUE!' or 'GO-AROUND!' within 3 SECONDS.",
              "Student B immediately gives 2 complete spoken sentences defending their decision based on stabilized approach rules.",
              "Student A checks the model defense and awards 2 points for a prompt, correct call + 2 points for fluent justification.",
              "Switch roles for the next card!"
            ],
            "cards": [
              {
                "id": 1,
                "situation": "At 1,000 ft in IMC: airspeed is 170 kt (target approach speed 140 kt), flaps are at position 2 (landing flaps required), and sink rate is 1,300 fpm. Continue or Go-Around?",
                "verdict": "GO-AROUND!",
                "defense": "The approach is completely unstabilized! The airspeed is 30 knots high, the landing flaps are not set, and the descent rate exceeds the 1,000 fpm safety limit.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "situation": "At Decision Altitude 692 ft (200 ft AGL): thick fog rolls over the threshold. Zero approach lights or runway markings are visible. Continue or Go-Around?",
                "verdict": "GO-AROUND!",
                "defense": "Under CAT I ILS rules, visual references are mandatory at Decision Altitude! Without visual contact with the lights or runway, an immediate missed approach must be executed.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "situation": "At 500 ft in VMC: aircraft is perfectly aligned on the localizer and glide slope, landing gear down and locked, landing flaps 30 set, speed steady at 142 kt with a 700 fpm descent rate. Continue or Go-Around?",
                "verdict": "CONTINUE!",
                "defense": "All stabilized approach criteria are fully satisfied! The aircraft is in final landing configuration, on speed, on flight path, with normal sink rate.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "situation": "At 300 ft on short final: the runway and threshold lights are in plain sight, but the Tower Controller suddenly announces: 'Operations vehicle crossing runway at Taxiway Charlie!' Continue or Go-Around?",
                "verdict": "GO-AROUND!",
                "defense": "The runway is physically obstructed! Continuing the landing creates a severe risk of a high-speed collision, so we must execute an immediate go-around.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "situation": "At 400 ft in VMC: the pilot forgot to set full landing flaps. The First Officer realizes and says: 'Wait, let me select flaps full right now!' Continue or Go-Around?",
                "verdict": "GO-AROUND!",
                "defense": "Configuring flaps below the stabilized gate (500 ft in VMC) is strictly forbidden! Trying to configure at 400 ft destabilizes aircraft trim and airspeed close to the ground.",
                "part": "Part 5"
              },
              {
                "id": 6,
                "situation": "At 800 ft in light rain: bright approach lighting system is spotted, localizer and glide slope are centered, airspeed is on target, landing clearance received. Continue or Go-Around?",
                "verdict": "CONTINUE!",
                "defense": "The approach is stabilized, visual references are acquired well before minimums, and landing clearance has been confirmed by air traffic control.",
                "part": "Part 6"
              }
            ]
          },
          "roleplaySimulation": {
            "title": "Activity 5: Speaking Role-Play: Low Visibility Approach & Emergency Go-Around",
            "summary": "Simulate a high-stress final approach scenario where an unexpected runway incursion forces an immediate go-around.",
            "situation": "Flight AFR 884 is on 3-mile final approach for Runway 14L in light drizzle. At 400 ft AGL, the Tower Controller spots an airport maintenance vehicle inadvertently crossing the runway holding point at Taxiway Charlie. The Controller commands an immediate go-around; the pilot executes the missed approach procedure smoothly.",
            "roles": [
              {
                "role": "Role A: Tower Controller",
                "instructions": "Monitor final approach. Spot the vehicle incursion on Runway 14L at Taxiway Charlie. Transmit immediately with calm authority: 'Air France 884, go around immediately, vehicle on the runway! Climb straight ahead to 2,500 feet, maintain runway heading.' After the pilot reads back, instruct them to contact Departure Radar on 124.35 MHz.",
                "part": "Part 1"
              },
              {
                "role": "Role B: Airline Pilot (AFR 884)",
                "instructions": "Fly the final approach, calling out '1,000 ft stabilized'. Receive the controller's emergency go-around instruction. Immediately read back: 'Going around, climb to 2,500 feet on runway heading, Air France 884.' Announce cockpit actions: 'Go-around, flaps 15, maximum thrust, positive climb, gear up.' Then contact Departure Radar as instructed.",
                "part": "Part 2"
              },
              {
                "role": "Role C: Peer Observer & Safety Auditor",
                "instructions": "Use the checklist below to assess your peers. Did the controller speak with calm, decisive authority? Did the pilot read back the go-around instruction without delay? Were cockpit actions announced in proper sequence?",
                "part": "Part 3"
              }
            ],
            "checklist": [
              "Controller gave clear, decisive go-around instruction with the immediate reason ('vehicle on runway').",
              "Pilot acknowledged and read back the go-around instruction without hesitation.",
              "Cockpit go-around sequence was called out cleanly (thrust, flaps, positive climb, gear up).",
              "Both speakers maintained professional composure and clear pronunciation."
            ],
            "phrases": [
              "Tower, Air France 884, 4-mile final, Runway 14L.",
              "Air France 884, go around immediately! Vehicle on runway, climb straight ahead 2,500 feet.",
              "Going around, climb straight ahead 2,500 feet, Air France 884.",
              "Go-around, set go-around thrust, flaps 15.",
              "Positive climb verified, gear up. Contact Departure on 124.35, Air France 884."
            ]
          },
          "safetyCheck": {
            "title": "Activity 6: Safety Check: Unstabilized Approach & Go-Around Culture",
            "summary": "Work in teams to analyze the risks of unstabilized approaches and agree on how to build a strong go-around safety culture.",
            "steps": [
              {
                "step": 1,
                "title": "Identify the Hazard",
                "text": "At 1,000 ft AGL in instrument meteorological conditions (IMC), an approaching aircraft is flying 25 knots above target approach speed with a descent rate of 1,200 fpm. The landing gear is down, but flaps are not yet in final landing configuration."
              },
              {
                "step": 2,
                "title": "Evaluate the Operational Risk",
                "text": "Continuing an unstabilized approach below 1,000 ft dramatically increases the risk of hard landings, runway excursions (overrunning the paved runway), tail strikes, or loss of control close to the ground."
              },
              {
                "step": 3,
                "title": "Propose Protective Actions",
                "text": "1. Enforce strict stabilized approach criteria: on flight path, target speed -0/+10 kt, sink rate <= 1,000 fpm, landing flaps set by 1,000 ft in IMC (500 ft in VMC).\n2. Mandate an automatic go-around if any single stabilized approach parameter is exceeded.\n3. Foster a blame-free safety policy: flight crews are commended, never reprimanded or questioned, for executing a safety go-around.\n4. Tower controllers should issue go-around instructions proactively whenever runway separation becomes marginal."
              },
              {
                "step": 4,
                "title": "Agree on the Team Decision",
                "text": "Agree with your team on the two most effective safety defenses to prevent runway landing accidents and record your conclusions in the Operational Notes section below."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 6 Revision - Approach Plates: Final Corridors & Go-Around Paths",
          "summary": "30 essential operational and approach navigation vocabulary terms for GSEA students covering ILS plates, glide slopes, decision heights, and missed approach procedures.",
          "terms": [
            {
              "num": "01",
              "term": "Instrument Approach Chart (IAC)",
              "definition": "An aeronautical chart showing the established instrument approach procedure to a specific runway.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Instrument Landing System (ILS)",
              "definition": "A precision runway approach aid providing both horizontal (localizer) and vertical (glide path) guidance.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Localizer (LOC)",
              "definition": "The component of an ILS providing lateral (left/right) tracking along the runway centerline.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Glide Path (Glide Slope)",
              "definition": "The component of an ILS providing vertical guidance along a specified descent angle (normally 3 degrees).",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Final Approach Fix (FAF)",
              "definition": "The point in an instrument approach where the final descent segment begins, marked by a Maltese cross.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Initial Approach Fix (IAF)",
              "definition": "The fix that marks the beginning of the initial approach segment towards the runway.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Intermediate Fix (IF)",
              "definition": "The fix marking the end of the initial segment and beginning of the intermediate segment for final configuration.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Decision Altitude (DA)",
              "definition": "A specified altitude (mean sea level) in a precision approach where a missed approach must be initiated if no visual reference.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Decision Height (DH)",
              "definition": "A specified height (above runway threshold) in a precision approach where a missed approach must be initiated if no visual reference.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Minimum Descent Altitude (MDA)",
              "definition": "The lowest altitude in a non-precision approach below which descent cannot be made without visual references.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Runway Visual Range (RVR)",
              "definition": "The distance down the runway that a pilot on the centerline can see runway surface markings or lights.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Missed Approach Procedure (Go-Around)",
              "definition": "The published flight procedure to follow if an approach cannot be safely completed to a landing.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Missed Approach Point (MAPt)",
              "definition": "The point in an instrument approach procedure at or before which a missed approach must be initiated.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Touchdown Zone Elevation (TDZE)",
              "definition": "The highest elevation in the first 3,000 feet of the landing runway surface.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Precision Approach",
              "definition": "An instrument approach and landing utilizing both precision lateral and vertical guidance (such as CAT I, II, or III ILS).",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Non-Precision Approach",
              "definition": "An instrument approach utilizing lateral navigation guidance without vertical glide path guidance (e.g. VOR, LOC-only).",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Visual References",
              "definition": "Physical ground features (approach lights, threshold markings) required to continue an approach below DA/MDA.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Stabilized Approach",
              "definition": "An approach where airspeed, descent rate, engine thrust, and landing configuration are within exact limits by a set gate.",
              "part": "Part 18"
            },
            {
              "num": "19",
              "term": "Sink Rate",
              "definition": "The rate of descent of an aircraft toward the ground, which should not exceed 1,000 feet per minute on final approach.",
              "part": "Part 19"
            },
            {
              "num": "20",
              "term": "Maltese Cross",
              "definition": "The chart symbol designating the Final Approach Fix for an approach on an instrument plate profile view.",
              "part": "Part 20"
            },
            {
              "num": "21",
              "term": "Glide Path Angle",
              "definition": "The angle of descent of the electronic glide slope beam, typically calibrated at 3.0 degrees.",
              "part": "Part 21"
            },
            {
              "num": "22",
              "term": "Threshold Crossing Height (TCH)",
              "definition": "The theoretical height in feet above the runway threshold where the aircraft's glide path antenna crosses (normally 50 ft).",
              "part": "Part 22"
            },
            {
              "num": "23",
              "term": "Runway Threshold",
              "definition": "The beginning of that portion of the runway usable for landing.",
              "part": "Part 23"
            },
            {
              "num": "24",
              "term": "Approach Lighting System (ALS)",
              "definition": "A system of high-intensity lights extending outward from the runway threshold to assist visual landing transition.",
              "part": "Part 24"
            },
            {
              "num": "25",
              "term": "Visual Descent Point (VDP)",
              "definition": "A defined point on a non-precision approach from which normal descent from the MDA to the runway may begin.",
              "part": "Part 25"
            },
            {
              "num": "26",
              "term": "Balked Landing",
              "definition": "A discontinued landing attempt initiated after the aircraft has descended below decision height or after touchdown.",
              "part": "Part 26"
            },
            {
              "num": "27",
              "term": "Holding on Missed Approach",
              "definition": "The published holding fix where an aircraft holds after executing a go-around while awaiting a second approach or diversion.",
              "part": "Part 27"
            },
            {
              "num": "28",
              "term": "Alternate Aerodrome",
              "definition": "An aerodrome to which an aircraft can proceed if landing at the destination becomes impossible or inadvisable.",
              "part": "Part 28"
            },
            {
              "num": "29",
              "term": "Fuel Diversion",
              "definition": "Diverting to an alternate aerodrome before fuel reserves drop below the legal minimum final reserve fuel.",
              "part": "Part 29"
            },
            {
              "num": "30",
              "term": "Go-Around Mindset",
              "definition": "The safety philosophy where every approach is planned as a go-around until confirming all landing criteria are met.",
              "part": "Part 30"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Boeing 777 Airport Ground Handling: Start to Finish",
              "watchUrl": "https://www.youtube.com/watch?v=KSfgLX5j-lQ",
              "tag": "Ground Operations",
              "videoId": "KSfgLX5j-lQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/KSfgLX5j-lQ",
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation.",
              "part": "Part 3"
            }
          ],
          "grammar": {
            "title": "Expressing Professional Responsibilities, Duties & Authority",
            "badge": "B2 Functional Grammar Focus",
            "patternTitle": "Responsibility & Authority Formulas",
            "formula": "BE RESPONSIBLE FOR + -ING • BE TASKED WITH + -ING • HAVE AUTHORITY OVER / TO • ENSURE THAT + CLAUSE",
            "rulesTitle": "Core Formulas & Jurisdictional Prepositions",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. BE RESPONSIBLE FOR + Gerund / Noun:</strong> Core ongoing duty or accountability (<span style=\"font-weight: 700; color: #c0684f;\">responsible for coordinating</span>, <span style=\"font-weight: 700; color: #c0684f;\">responsible for flight safety</span>).",
              "<strong style=\"color: #1e293b;\">2. BE TASKED WITH + Gerund / Noun:</strong> Designated operational mission or assigned mandate (<span style=\"font-weight: 700; color: #c0684f;\">tasked with conducting</span>, <span style=\"font-weight: 700; color: #c0684f;\">tasked with safety audits</span>).",
              "<strong style=\"color: #1e293b;\">3. HAVE AUTHORITY OVER / TO:</strong> Legal command power (<span style=\"font-weight: 600; color: #334155;\">have authority over active runways</span> [ATCO], <span style=\"font-weight: 600; color: #334155;\">authority to issue clearances</span>).",
              "<strong style=\"color: #1e293b;\">4. ENSURE THAT + Clause:</strong> Verification and quality assurance (<span style=\"font-weight: 600; color: #334155;\">ensure that cargo doors are latched</span>, <span style=\"font-weight: 600; color: #334155;\">ensure that weight limits are respected</span>).",
              "<strong style=\"color: #1e293b;\">5. REPORT TO vs. LIAISE WITH:</strong> Upward hierarchy (<span style=\"font-weight: 600; color: #334155;\">reports to the chief pilot</span>) vs. lateral coordination (<span style=\"font-weight: 600; color: #334155;\">liaises with apron controllers</span>)."
            ],
            "trap": "<strong>⚠️ Common Preposition & False Friend Trap:</strong> Never say <em>responsible of</em>—always use <strong>responsible for + -ing</strong>. Also, strictly distinguish <em>control</em> (ATCO issuing binding separation orders) from <em>provide information</em> (AFISO advising pilots without executive control clearances).",
            "examplesTitle": "Operational Responsibility Examples",
            "examples": [
              "<em>\"The Turnaround Coordinator is <strong>responsible for ensuring</strong> that all ground support equipment is detached before pushback.\"</em>",
              "<em>\"Unlike aerodrome controllers, AFISOs are <strong>tasked with providing</strong> traffic information rather than tactical separation clearances.\"</em>"
            ]
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties.",
              "part": "Part 1"
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations.",
              "part": "Part 2"
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling.",
              "part": "Part 3"
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries.",
              "part": "Part 4"
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators.",
              "part": "Part 5"
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "06 • Technical Regulations",
              "name": "EASA Regulations & Safety Standards",
              "desc": "Official European aerodrome regulations, certification specifications, and safety directives for civil aviation professionals.",
              "part": "Part 6"
            }
          ],
          "pageUrl": "session4/admat_aas1.html",
          "articles": [
            {
              "topic": "FlightGlobal / Aviation Careers",
              "sourceTag": "Career Insight",
              "heading": "Beyond the Flight Deck: The Essential Network of Airport Operations",
              "snippet": "An in-depth look at the landside, airside, and regulatory roles that keep international aviation flowing seamlessly 24/7.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.flightglobal.com",
              "part": "Part 1"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac",
              "part": "Part 2"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int",
              "part": "Part 3"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org",
              "part": "Part 4"
            }
          ],
          "quizTitle": "Airside Scenario Quiz • Approach Plates: Final Corridors & Go-Around Paths",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Final Approach Dilemmas & Go-Around Spot-Checks"
        }
      }
    }
  },
  "2": {
    "id": 2,
    "name": "Module 2",
    "title": "MTF",
    "ddrs": {
      "title": "Développement Durable & Responsabilité Sociétale : Tags et Définitions Officielles",
      "summary": "Le Référentiel National DD&RS de l'Enseignement Supérieur et de la Recherche (Label DD&RS) structure les engagements écologiques, sociétaux et éthiques des établissements et des grands projets de transport selon 5 axes stratégiques et leurs domaines transversaux d'application.",
      "pageUrl": "ddrs2.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Stratégie",
          "desc": "Intégration du développement durable dans la vision, le projet d'établissement et le pilotage décisionnel. Dialogue continu avec les parties prenantes (étudiants, personnels, collectivités, partenaires), allocation de budgets dédiés et suivi d'indicateurs d'impact mesurables."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et Pédagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-écologique (limites planétaires, climat, biodiversité). Intégration transversale des compétences DD&RS (rapport Jouzel / socle MESR) pour préparer les ingénieurs à la prise de décision éthique et responsable."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activité scientifique et technologique en réponse aux Objectifs de Développement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, éco-conception et transfert de technologies vertes au service de la société."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Maîtrise et réduction continue des impacts écologiques directs : décarbonation des mobilités pendulaires et professionnelles, efficacité et sobriété énergétique du patrimoine bâti, gestion circulaire des déchets, préservation de la biodiversité sur site et achats publics responsables."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilité sociétale : égalité professionnelle femmes-hommes, inclusion et accessibilité des personnes en situation de handicap, égalité des chances, amélioration de la qualité de vie et santé globale, et prévention de toute forme de discrimination."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance et Stratégie",
          "desc": "Intégration du développement durable dans la vision, le projet d'établissement et le pilotage décisionnel. Dialogue continu avec les parties prenantes (étudiants, personnels, collectivités, partenaires), allocation de budgets dédiés et suivi d'indicateurs d'impact mesurables.",
          "isMuted": true
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation et Pédagogie",
          "desc": "Sensibilisation et formation de 100 % des apprenants aux enjeux de la transition socio-écologique (limites planétaires, climat, biodiversité). Intégration transversale des compétences DD&RS (rapport Jouzel / socle MESR) pour préparer les ingénieurs à la prise de décision éthique et responsable.",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche et Innovation",
          "desc": "Orientation et valorisation de l'activité scientifique et technologique en réponse aux Objectifs de Développement Durable (ODD). Soutien aux programmes interdisciplinaires, recherche sobre et responsable, éco-conception et transfert de technologies vertes au service de la société.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Gestion Environnementale",
          "desc": "Maîtrise et réduction continue des impacts écologiques directs : décarbonation des mobilités pendulaires et professionnelles, efficacité et sobriété énergétique du patrimoine bâti, gestion circulaire des déchets, préservation de la biodiversité sur site et achats publics responsables.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Politique Sociale et Inclusion",
          "desc": "Engagement institutionnel pour la responsabilité sociétale : égalité professionnelle femmes-hommes, inclusion et accessibilité des personnes en situation de handicap, égalité des chances, amélioration de la qualité de vie et santé globale, et prévention de toute forme de discrimination.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "6.",
          "title": "Mobilité Durable & Report Modal (Sustainable Mobility)",
          "desc": "Stratégie d'optimisation des transports articulée autour de la hiérarchie « Éviter - Transférer - Améliorer » (ASI). Promotion active du report modal vers le ferroviaire, les transports en commun et les mobilités douces face à l'autosolisme et aux vols court-courriers.",
          "isMuted": true
        },
        {
          "badge": "Tag",
          "num": "7.",
          "title": "Bilan d'Émissions de GES (BEGES / Bilan Carbone)",
          "desc": "Comptabilisation réglementaire des gaz à effet de serre (méthode ADEME / ISO 14064) sur les trois périmètres : Scope 1 (émissions directes), Scope 2 (émissions indirectes énergétiques) et Scope 3 (émissions indirectes amont/aval : déplacements, achats, logistique et cycle de vie).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "8.",
          "title": "Sobriété Énergétique & Efficacité",
          "desc": "Démarche articulant la sobriété (questionnement et réduction des consommations par la modification des comportements et des usages collectifs) et l'efficacité (optimisation technique des rendements énergétiques pour un même niveau de service).",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "9.",
          "title": "Préservation de la Biodiversité & Zéro Artificialisation Nette (ZAN)",
          "desc": "Protection des écosystèmes et des continuités écologiques (trames vertes et bleues). Application des exigences légales (loi Climat et Résilience) visant à stopper la disparition nette d'espaces naturels et agricoles causée par les infrastructures et l'aménagement.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "10.",
          "title": "Équité Territoriale & Accessibilité (Territorial Equity)",
          "desc": "Principe de justice spatiale garantissant un accès universel, abordable et sécurisé aux réseaux de transport et aux services d'intérêt général pour l'ensemble des territoires (urbains, périurbains et ruraux), luttant contre la fracture et la précarité mobilité.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "11.",
          "title": "Achats Responsables & Analyse du Cycle de Vie (ACV / LCA)",
          "desc": "Intégration systématique de critères environnementaux et sociaux dans la commande publique et privée. Évaluation globale des impacts de chaque produit, infrastructure ou service de son extraction jusqu'à son recyclage ou élimination finale.",
          "isMuted": false
        },
        {
          "badge": "Tag",
          "num": "12.",
          "title": "Objectifs de Développement Durable (ODD - Agenda 2030)",
          "desc": "Cadre universel des Nations Unies comprenant 17 objectifs interdépendants pour concilier prospérité économique, progrès social et protection de la biosphère. Les politiques de transport et d'ingénierie s'articulent principalement autour des ODD 9, 11, 12 et 13.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 Objectives - Aerodynamics & Flight Principles",
          "summary": "By the end of this session, you will be able to explain the four fundamental forces of flight, describe the three aircraft axes and their corresponding control surfaces, use cause-and-effect conditionals accurately, and communicate aerodynamic flight scenarios with professional B2 fluency.",
          "items": [
            {
              "num": 1,
              "title": "Explain the Four Forces of Flight in Equilibrium",
              "description": "Describe how lift, weight, thrust, and drag interact during straight-and-level flight, climbs, descents, and turns without technical jargon.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Identify the Three Aircraft Axes and Primary Flight Controls",
              "description": "Accurately name and describe the lateral (pitch / elevators), longitudinal (roll / ailerons), and vertical (yaw / rudder) axes.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Cause & Effect Conditionals in Flight Physics",
              "description": "Formulate zero and first conditionals with if, when, as, and unless to explain aerodynamic consequences and speed-drag dynamics.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Engage in Control Surface & Flight Simulation Role-Plays",
              "description": "Role-play flight control inputs and aerodynamic feedback between pilots and flight test engineers in interactive partner games.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Analyze Stall Dynamics and Operational Recovery Briefings",
              "description": "Discuss angle of attack, boundary layer separation, stall warning systems, and recovery actions in clear, professional English.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news warm-up, flight forces diagnostic, cause-and-effect language clinic, the 3-axes kinesthetic simulation, an operational stall scenario, and vocabulary consolidation.",
          "items": [
            {
              "title": "Part 1: Aviation News & Course Entry Warm-Up Check",
              "description": "Weekly aviation news warm-up and diagnostic spot-check connecting Module 1 aerodrome operations to airborne flight physics.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: The Four Forces & Airflow Quick Check",
              "description": "Interactive vocabulary matching: connecting lift, thrust, weight, drag, airfoil camber, and angle of attack to real flight phases.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Cause & Effect Linkers",
              "description": "Expressing aerodynamic consequences with conditionals and causal connectors (if, when, as a result of, leads to, unless).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: The 3 Axes & Control Surfaces Game / Role-Play",
              "description": "Interactive kinesthetic 'Human Flight Simulator' game and pilot-to-flight-test-engineer debriefing role-play.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Aerodynamic Dilemma: High-Altitude Stall Recovery",
              "description": "Operational case study: analyzing stall warnings, high-altitude buffeting, and crew communication during flight envelope excursions.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up",
              "description": "Pronunciation stress practice (aero-DY-na-mics, cam-ber, sta-bi-LI-zer, ai-ler-on) and personal learning log entry.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Aerodynamics & Flight Principles",
            "subtitle": "The Four Forces of Flight, The Three Axes & Aerodynamic Control Surfaces",
            "image": "images/aas_m2card1.jpg",
            "level": "CEFR B2",
            "role": "Flight Crew / Flight Test Engineer & ATCO",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "modeBadges": [
              "👥 Aerodynamic Spot-Check",
              "⏱️ 5 min pairs + 5 min plenary",
              "🎯 Flight Physics Quick Check"
            ],
            "instructions": [
              "Step 1 (Aviation Headlines - 3 mins): In pairs, discuss the opening news bullet on composite winglets and stall training advisories. Why are airlines prioritizing aerodynamics for both fuel economy and safety?",
              "Step 2 (Aerodynamics Quick Check - 4 mins): Test each other on the 4 foundational flight physics questions below without viewing the answers.",
              "Step 3 (Verify & Clarify - 3 mins): Click \"Reveal Answer\" to check explanations. Clarify the essential difference between pitch attitude (horizon reference) and angle of attack (relative wind reference)."
            ],
            "deliverable": "Accurately explain the difference between Angle of Attack and Pitch Attitude during the instructor spot-check.",
            "teacherNotes": "Use a model aircraft or your hands to demonstrate pitch attitude vs. relative wind and angle of attack. Ensure students realize AoA can exceed critical limit even in nose-low attitudes.",
            "title": "Activity 1: Aviation News & Principles Warm-Up",
            "summary": "Opening warm-up examining current aerospace headlines and testing foundational aerodynamic concepts.",
            "newsPrompts": [
              "Airlines evaluate next-generation winglet retrofits to shave 3% off cruise fuel burn on transatlantic routes.",
              "FAA issues updated training advisory for transport category pilots on high-altitude stall recognition and recovery.",
              "Manufacturers test blended-wing-body prototypes offering up to 30% drag reduction for future commercial transports."
            ],
            "diagnostic": {
              "title": "Aerodynamics Vocabulary Quick Check",
              "instructions": "Discuss each question in pairs before revealing the operational distinction:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the critical difference between 'Angle of Attack' (AoA) and 'Pitch Attitude'?",
                  "answer": "Pitch attitude is the angle of the aircraft's longitudinal axis relative to the horizon. Angle of attack (AoA) is the angle between the wing's chord line and the oncoming relative airflow. An aircraft can be in a nose-down attitude and still exceed the critical AoA!",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "How does 'induced drag' differ from 'parasitic drag' as an aircraft accelerates?",
                  "answer": "Parasitic drag (friction and form drag) increases with the square of airspeed. Induced drag is the penalty for generating lift and decreases as airspeed increases. Total drag is minimized at the best glide speed (L/D max).",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "Which primary flight control surface produces yaw, and around which axis does it rotate?",
                  "answer": "The rudder produces yaw, rotating the aircraft around its vertical (normal) axis. It is controlled by the pilot's rudder pedals.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "What occurs aerodynamically when an airfoil exceeds its critical angle of attack?",
                  "answer": "The smooth boundary layer airflow separates from the upper wing surface, creating turbulent eddies, causing an abrupt loss of lift and a severe increase in drag—a stall.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "forcesPrinciples": {
            "modeBadges": [
              "⚖️ Force Balance Analysis",
              "⏱️ 8 min study + 12 min paired explanation",
              "🎯 Technical Equilibrium B2"
            ],
            "instructions": [
              "Step 1 (Force Vector Review - 8 mins): Study the 4 forces interactive cards. Review the aerodynamic definitions, equilibrium equations, and how each vector acts on the aircraft center of gravity.",
              "Step 2 (Maneuver Vector Challenge - 8 mins): In pairs, describe what happens to the vectors in 3 specific flight regimes: (1) Steady Climb, (2) 45-degree Coordinated Turn, (3) Clean Power-Off Glide.",
              "Step 3 (Spoken Debrief - 4 mins): Volunteer or answer the teacher spot-check by explaining why total lift must increase during a banked turn to maintain altitude."
            ],
            "deliverable": "Clearly explain the force balance equations for both level flight and a banked turn in technical B2 English.",
            "teacherNotes": "Emphasize that lift acts perpendicular to the flight path / relative wind, while weight acts toward Earth's center. In a turn, vertical component of lift balances weight, requiring increased total lift (load factor / G-load).",
            "title": "Activity 2: The Four Forces in Equilibrium & Maneuvers",
            "summary": "Analyze the 4 forces acting on an aircraft and explain how pilots create unbalance to maneuver.",
            "forces": [
              {
                "name": "Lift (L)",
                "badge": "Upward Aerodynamic Force",
                "formula": "L = 1/2 · ρ · V² · S · CL",
                "description": "Generated by the pressure differential created across the cambered airfoil (lower pressure above, higher pressure below) as air flows across the wing.",
                "operationalNote": "In straight-and-level unaccelerated flight, Lift equals Weight (L = W). In a banked turn, lift must increase to maintain altitude.",
                "part": "Part 1"
              },
              {
                "name": "Weight / Gravity (W)",
                "badge": "Downward Force",
                "formula": "W = mass · gravity",
                "description": "The downward gravitational pull directed toward the center of the Earth, acting continuously through the aircraft Center of Gravity (CG).",
                "operationalNote": "Weight varies continuously in flight as fuel is burned, changing the aircraft's stall speed, climb performance, and landing reference speeds (Vref).",
                "part": "Part 2"
              },
              {
                "name": "Thrust (T)",
                "badge": "Forward Propulsive Force",
                "formula": "T = mass flow · acceleration",
                "description": "The forward force produced by the engines (turbofans, turboprops, or pistons) pushing air rearward to propel the aircraft through the air mass.",
                "operationalNote": "In steady unaccelerated level flight, Thrust equals Drag (T = D). Excess thrust allows the aircraft to climb or accelerate.",
                "part": "Part 3"
              },
              {
                "name": "Drag (D)",
                "badge": "Rearward Retarding Force",
                "formula": "D = D(parasitic) + D(induced)",
                "description": "The natural aerodynamic resistance force acting parallel and opposite to the direction of motion through the atmosphere.",
                "operationalNote": "Parasitic drag comes from skin friction, antennas, and form drag; induced drag is generated by high-pressure air curling around wingtips into vortices.",
                "part": "Part 4"
              }
            ]
          },
          "grammarClinic": {
            "modeBadges": [
              "⚡ Cause & Effect Workshop",
              "⏱️ 8 min grammar + 12 min drills",
              "🎯 Technical Precision"
            ],
            "instructions": [
              "Step 1 (Aerodynamic Conditionals - 8 mins): Review the grammatical formulas for scientific invariants (Zero Conditional: If + present $\\rightarrow$ present) and operational contingencies (First Conditional: If + present $\\rightarrow$ will + verb).",
              "Step 2 (Interactive Sentence Drills - 7 mins): Complete the 4 fill-in-the-blank causal sentences, selecting the correct connector (unless, due to, results in, provided that).",
              "Step 3 (Peer Verification - 5 mins): Compare answers with your partner. Say each sentence aloud with natural sentence stress on key aerodynamic terms before clicking \"Reveal Answer\"."
            ],
            "deliverable": "Flawlessly formulate 4 conditional aerodynamic statements with correct tense agreement and causal connectors.",
            "teacherNotes": "Warn students against common errors: using \"will\" in the if-clause (\"If airspeed will drop...\" ❌) and confusing \"due to\" (requires noun) with \"because\" (requires clause).",
            "title": "Activity 3: Language Focus: Cause & Effect in Flight Physics",
            "summary": "Mastering conditional structures and causal connectors to explain aerodynamic phenomena in plain B2 English.",
            "structures": [
              {
                "pattern": "Zero / First Conditionals (Physical Rules & Operational Truths)",
                "examples": [
                  "If the angle of attack exceeds 16 degrees, the wing stalls immediately.",
                  "When airspeed drops below Vapp, the flight control computers will trigger an audio stall warning."
                ],
                "part": "Part 1"
              },
              {
                "pattern": "Causal Verbs & Prepositional Connectors",
                "examples": [
                  "Deploying wingtip sharklets reduces induced drag, thereby improving cruise fuel burn.",
                  "High density altitude results in longer takeoff ground rolls due to reduced air density."
                ],
                "part": "Part 2"
              }
            ],
            "drills": [
              {
                "id": 1,
                "prompt": "Combine using 'As a result of': The airflow separates from the upper wing surface. The aircraft loses lift rapidly.",
                "answer": "As a result of airflow separating from the upper wing surface, the aircraft loses lift rapidly.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "prompt": "Combine using 'Unless': The pilot increases engine thrust. The aircraft will not be able to maintain altitude in a steep turn.",
                "answer": "Unless the pilot increases engine thrust, the aircraft will not be able to maintain altitude in a steep turn.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "prompt": "Combine using 'leads to': Cold air is denser than warm air. Cold weather creates shorter takeoff distances.",
                "answer": "Cold air is denser than warm air, which leads to shorter takeoff distances.",
                "part": "Part 3"
              }
            ]
          },
          "axesGame": {
            "modeBadges": [
              "🎮 Kinesthetic Simulator & Role-Play",
              "⏱️ 12 min game + 18 min pilot debrief",
              "🗣️ Dynamic Control Surfaces"
            ],
            "instructions": [
              "Step 1 (Kinesthetic Simulator Game - 12 mins): Partner A acts as Pilot Flying giving control commands (\"Applying left rudder to counter crosswind\"); Partner B acts as Aircraft, demonstrating the physical motion with their hands and naming the axis and surface movement. Swap roles after 6 minutes.",
              "Step 2 (Role-Play Briefing - 10 mins): Partner A takes Role Card 1 (Flight Test Captain); Partner B takes Role Card 2 (Avionics & Flight Control Engineer). Simulate a post-flight debrief analyzing flight control feedback, trimming issues, or crosswind control authority.",
              "Step 3 (Class Demo - 8 mins): One pair demonstrates an uncoordinated flight scenario (skid/slip) and explains the corrective rudder-aileron input to the class."
            ],
            "deliverable": "A 2-minute fluent pilot-to-engineer debrief detailing control surface deflections and aircraft axis reactions.",
            "teacherNotes": "This high-energy activity builds muscular and spatial memory. Ensure students use correct technical verbs: deflect, pivot, rotate, yaw, roll, pitch up/down. Check for proper preposition use (around the vertical axis).",
            "title": "Activity 4: The 3 Axes & Control Surfaces Game / Role-Play",
            "summary": "Interactive 'Human Flight Simulator' kinesthetic game and pilot-to-flight-test-engineer debrief role-play.",
            "axes": [
              {
                "axis": "Lateral Axis (Pitch)",
                "direction": "Runs from wingtip to wingtip through the Center of Gravity.",
                "movement": "Pitch Up / Pitch Down (Nose rises or falls).",
                "controlSurface": "Elevators (mounted on the horizontal stabilizer).",
                "cockpitInput": "Pulling back or pushing forward on the control column / sidestick.",
                "part": "Part 1"
              },
              {
                "axis": "Longitudinal Axis (Roll)",
                "direction": "Runs from the aircraft nose cone to the tail cone.",
                "movement": "Roll / Bank (Wings tilt left or right).",
                "controlSurface": "Ailerons (on the trailing edge of outer wings) + Roll Spoilers.",
                "cockpitInput": "Turning the control yoke or deflecting the sidestick laterally.",
                "part": "Part 2"
              },
              {
                "axis": "Vertical / Normal Axis (Yaw)",
                "direction": "Runs vertically through the top and bottom of the fuselage.",
                "movement": "Yaw (Nose points left or right relative to flight path).",
                "controlSurface": "Rudder (hinged to the vertical fin).",
                "cockpitInput": "Pressing the left or right rudder pedals on the cockpit floor.",
                "part": "Part 3"
              }
            ],
            "roleplayCards": [
              {
                "role": "Test Pilot",
                "prompt": "You are testing control sensitivity on a flight test. Report unusual flutter on the ailerons when rolling into a 30-degree bank and explain the aerodynamic feeling to your engineer.",
                "part": "Part 1"
              },
              {
                "role": "Flight Test Engineer",
                "prompt": "Ask the pilot specific questions about airspeed, trim position, and elevator feedback during the maneuver. Propose a checklist verification.",
                "part": "Part 2"
              }
            ]
          },
          "stallScenario": {
            "modeBadges": [
              "🚨 Cockpit Emergency Case Study",
              "⏱️ 8 min reading + 15 min crew response + 7 min debrief",
              "🎯 Standard Operating Procedures"
            ],
            "instructions": [
              "Step 1 (Scenario Analysis - 8 mins): Read the authentic flight deck incident transcript. Identify the dangerous aerodynamic misconception made by the First Officer (confusing altitude loss with pitch attitude).",
              "Step 2 (Cockpit Communication & Callouts - 15 mins): In pairs, role-play the cockpit crew communication. Draft the Captain's clear callouts (\"STALL, I have control, pitching down\") and the First Officer's verbal confirmations.",
              "Step 3 (Cockpit Debrief Role-Play - 7 mins): Role-play the debrief between Captain and FO after leveling off at FL330. Address crew resource management (CRM), sensor iced-over pitot tubes, and aerodynamic AoA awareness."
            ],
            "deliverable": "A clear 3-step cockpit communication script followed by an authentic 2-minute cockpit CRM debrief.",
            "teacherNotes": "Reference high-profile real-world accidents (AF447, Colgan 3407) where pulling back on the stick stalled the aircraft into the ground or ocean. Reinforce the aerodynamic invariant: The only way to recover from a stall is to reduce the angle of attack below the critical limit.",
            "title": "Activity 5: Operational Scenario: Stall Recovery & High-Altitude Turbulence",
            "summary": "Team case study analyzing stall warnings, stick-shaker activation, and crew coordination during atmospheric turbulence.",
            "scenarioText": "Cruising at FL370 in turbulent air near the equator, Flight 204 encounters severe mountain wave downdrafts. The airspeed drops rapidly toward the low-speed buffet boundary. Suddenly, the master warning chimes and the stick-shaker vibrates violently. The junior First Officer reflexively pulls back on the sidestick, increasing the angle of attack.",
            "tasks": [
              "Identify the dangerous aerodynamic error made by the First Officer and explain why pulling back worsens a stall.",
              "Practice the clear standard aviation English callouts the Captain and First Officer use to coordinate recovery (pitching down, leveling wings, advancing thrust smoothly).",
              "Role-play the cockpit debrief after recovering safe airspeed and stabilizing at FL330."
            ]
          },
          "closingReview": {
            "modeBadges": [
              "🏁 Final Technical Wrap-Up",
              "⏱️ 5 min audit + 5 min pronunciation",
              "🎯 Aerodynamic Vocabulary Mastery"
            ],
            "instructions": [
              "Step 1 (Core Checkpoints Audit - 5 mins): In pairs, run through the 3 technical checkpoints. Confirm you can explain the 4 forces, 3 axes, and stall recovery without hesitation.",
              "Step 2 (Pronunciation Rapid Fire - 3 mins): Drill the tricky multisyllabic aerodynamic terms (ae-ro-dy-NAM-ic, al-ti-tude, e-qui-LIB-ri-um, hor-i-ZON-tal, sta-bi-LI-zer).",
              "Step 3 (Self-Study Assignment - 2 mins): Review the 18 vocabulary flashcards in the Revision tab and prepare your spoken briefing for Session 2."
            ],
            "deliverable": "Verbally confirm mastery of the 3 technical checkpoints and demonstrate accurate stress placement on key aerodynamic terms.",
            "teacherNotes": "Quickly drill the class on word stress for \"aerodynamics\" (stress on NAM) and \"equilibrium\" (stress on LIB). Preview Session 2: Aircraft Anatomy (internal systems and external walkarounds).",
            "title": "Activity 6: Vocabulary Review & Class Wrap-Up",
            "summary": "Consolidate the 18 key aerodynamic terms, verify pronunciation stress, and prepare for Session 2 Aircraft Anatomy.",
            "checkpoints": [
              "Can you explain the 4 forces of flight and how they balance in level cruise?",
              "Can you name the 3 axes of rotation and their corresponding primary control surfaces without hesitating?",
              "Can you use cause-and-effect linkers (leads to, results in, unless, if) when describing aerodynamic stall conditions?"
            ]
          }
        },
        "revision": {
          "title": "Session 1 Revision - Aerodynamics & Flight Principles",
          "summary": "Master the 18 core vocabulary terms for Aerodynamics & Flight Principles to discuss the four forces, aircraft axes, and flight control surfaces.",
          "terms": [
            {
              "num": "01",
              "term": "Lift",
              "definition": "The aerodynamic upward force generated by the wings perpendicular to the relative airflow, overcoming weight.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Thrust",
              "definition": "The forward force produced by the engines that overcomes aerodynamic drag.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Weight",
              "definition": "The downward gravitational force pulling the aircraft toward the Earth, directly opposed by lift.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Drag",
              "definition": "The retarding aerodynamic resistance force acting parallel and opposite to the direction of flight.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Angle of Attack (AoA)",
              "definition": "The acute angle formed between the chord line of the airfoil and the oncoming relative wind.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Airfoil",
              "definition": "A streamlined surface, such as an aircraft wing or rotor blade, designed to create lift as air flows over it.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Camber",
              "definition": "The convex asymmetry or curvature between the upper and lower surfaces of an airfoil.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Boundary Layer",
              "definition": "The thin layer of air immediately adjacent to the aircraft surface where viscous forces slow the airflow.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Stall",
              "definition": "A sudden reduction in lift caused by exceeding the critical angle of attack, resulting in airflow separation from the upper wing.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Lateral Axis",
              "definition": "The imaginary horizontal line running wingtip-to-wingtip around which the aircraft pitches up or down.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Longitudinal Axis",
              "definition": "The imaginary line running from nose to tail around which the aircraft rolls or banks.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Vertical Axis",
              "definition": "The imaginary vertical line running top-to-bottom through the center of gravity around which the aircraft yaws.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Pitch",
              "definition": "The rotational movement around the lateral axis causing the nose of the aircraft to move up or down.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Roll",
              "definition": "The rotational movement around the longitudinal axis causing the aircraft wings to bank left or right.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Yaw",
              "definition": "The rotational movement around the vertical axis causing the aircraft nose to turn left or right.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Elevator",
              "definition": "The movable horizontal flight control surface on the tail empennage used to control pitch.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Aileron",
              "definition": "A hinged control surface on the trailing edge of each wing used to control roll and banking.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Rudder",
              "definition": "The primary vertical flight control surface hinged to the fin used to control yaw.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: The Four Forces of Flight Simply Explained",
              "watchUrl": "https://www.youtube.com/watch?v=5ltjFEei3AI",
              "tag": "Flight Physics",
              "videoId": "5ltjFEei3AI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/5ltjFEei3AI",
              "caption": "Focus: Watch how lift, weight, thrust, and drag achieve aerodynamic equilibrium in steady flight.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: Primary Flight Controls: Ground Lesson",
              "watchUrl": "https://www.youtube.com/watch?v=LZFehDh7LxI",
              "tag": "Flight Controls",
              "videoId": "LZFehDh7LxI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/LZFehDh7LxI",
              "caption": "Focus: Master the 3 axes of rotation (pitch, roll, yaw) and how elevators, ailerons, and rudder manipulate airflow.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: What Causes an Airplane to Stall?",
              "watchUrl": "https://www.youtube.com/watch?v=hIv-BLf6PoE",
              "tag": "Flight Safety",
              "videoId": "hIv-BLf6PoE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/hIv-BLf6PoE",
              "caption": "Focus: Examine critical angle of attack (AOA), airflow detachment from the upper camber, stick-shakers, and recovery technique.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Aerodynamic Engineering",
              "sourceTag": "Aviation Today",
              "heading": "How Modern Wingtip Devices Cut Induced Drag and Fuel Burn",
              "snippet": "Examine how blended winglets and sharklets manage high-pressure wingtip vortices, reducing induced drag by up to 5% on commercial flights.",
              "url": "https://www.aviationtoday.com",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Flight Safety Operations",
              "sourceTag": "Flight Safety Foundation",
              "heading": "Understanding Aerodynamic Stalls in Commercial Jet Operations",
              "snippet": "Review how angle of attack sensors, stick shakers, and fly-by-wire flight envelope protection prevent catastrophic boundary layer separation.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://www.grc.nasa.gov/www/k-12/airplane/index.html",
              "tag": "01 • Flight Physics",
              "name": "NASA Glenn Beginner's Guide to Aeronautics",
              "desc": "Official educational guides on Bernoulli's principle, lift equations, and airfoil camber.",
              "part": "Part 1"
            },
            {
              "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
              "tag": "02 • Flight Manual",
              "name": "FAA Pilot's Handbook of Aeronautical Knowledge",
              "desc": "Chapter 5: Aerodynamics of flight, aircraft stability, and stall/spin recovery procedures.",
              "part": "Part 2"
            },
            {
              "url": "https://ocw.mit.edu",
              "tag": "03 • Academic Courses",
              "name": "MIT OpenCourseWare Flight Dynamics",
              "desc": "Open aerospace engineering lecture notes on boundary layer control and drag polar curves.",
              "part": "Part 3"
            },
            {
              "url": "https://aircraft.airbus.com/en/services/maintain/fast-technical-magazine",
              "tag": "04 • Airbus Engineering",
              "name": "Airbus FAST Magazine: Aerodynamic Optimization",
              "desc": "In-depth technical articles on sharklet wingtip designs and laminar flow aerodynamics.",
              "part": "Part 4"
            },
            {
              "url": "https://www.boeing.com/commercial/aeromagazine",
              "tag": "05 • Boeing Technology",
              "name": "Boeing AERO Magazine: Fuel & Drag Reduction",
              "desc": "Engineering case studies on surface finishes, drag cleanup, and flight control optimization.",
              "part": "Part 5"
            },
            {
              "url": "https://www.skybrary.aero/articles/aerodynamic-stall",
              "tag": "06 • Safety Portal",
              "name": "Skybrary: Aerodynamic Stall & Angle of Attack",
              "desc": "Operational aviation safety portal on stall warning margins, stick-shakers, and recovery.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Cause-and-Effect Structures & Conditional Relationships in Flight Physics",
            "badge": "Flight Physics",
            "patternTitle": "Aero Cause & Effect Formula",
            "formula": "Due to / As a result of + Noun Phrase, [Consequence] || If + Present, [Result]",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Cause & Prepositional Linkers (Due to / Owing to / Because of):</strong> Introduces aerodynamic forces triggering an outcome (<em>'Due to increased camber, airflow accelerates over the upper surface'</em>).",
              "<strong style=\"color: #1e293b;\">2. Result Linkers (Consequently / As a result / Leading to):</strong> Links physical actions to reactions (<em>'Air pressure decreases above the wing, consequently generating lift'</em>).",
              "<strong style=\"color: #1e293b;\">3. Zero Conditional (Scientific Invariants):</strong> Expresses universal physical laws (<em>'If the angle of attack exceeds 15 degrees, the airflow separates and the wing stalls'</em>).",
              "<strong style=\"color: #1e293b;\">4. First Conditional (Operational Contingencies):</strong> Expresses flight deck actions (<em>'If airspeed drops below Vref during approach, the flight crew will advance the throttles immediately'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: 'Due to' and 'because of' MUST be followed by a noun or noun phrase. 'Because' and 'since' are conjunctions followed by a subject + verb clause.",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "Due to boundary layer separation at high angles of attack, the aircraft experiences severe aerodynamic buffeting.",
              "If the pilot increases pitch attitude without adding thrust, airspeed will decay rapidly."
            ]
          },
          "pageUrl": "session1/admat_aas2.html"
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 Objectives - Aircraft Anatomy: Structure & Systems",
          "summary": "By the end of this session, you will be able to identify external and internal aircraft parts from diagrams, use spatial prepositions and functional descriptors accurately, conduct a simulated pre-flight exterior walkaround, and report mechanical defects in professional B2 English.",
          "items": [
            {
              "num": 1,
              "title": "Identify External & Internal Aircraft Components",
              "description": "Accurately name key airframe components including slats, flaps, ailerons, empennage, radome, landing gear, flight deck instruments, and cabin bulkheads.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Deploy Spatial Prepositions & Functional Descriptors",
              "description": "Describe the physical position and operational purpose of parts using prepositions (along, behind, flush-mounted, adjacent to) and purpose clauses.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Perform a 360-Degree Pre-Flight Walkaround Inspection Role-Play",
              "description": "Simulate a captain or maintenance engineer inspecting the airframe, identifying foreign object damage (FOD), leaks, and structural dents.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Communicate Cockpit & Cabin Defect Handovers",
              "description": "Discuss whether unserviceable components violate the Minimum Equipment List (MEL) and agree on dispatch decisions.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Master High-Frequency Structural Pronunciation",
              "description": "Correctly pronounce and stress specialized aeronautical components without hesitating during oral interactions.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session combining aviation news, an airframe diagram labeling challenge, spatial grammar clinic, a 360-degree walkaround inspection simulation, MEL defect handovers, and pronunciation drills.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 1 Aerodynamics Spot-Check",
              "description": "Weekly aviation news warm-up and rapid spot-check on the 4 forces, angle of attack, and the 3 aircraft axes.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Airframe Diagram Labeling Race",
              "description": "Collaborative visual diagram race: identifying and labeling external control surfaces and internal cabin/cockpit zones.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Spatial Prepositions & Functions",
              "description": "Describing locations and mechanical functions using relative clauses and spatial prepositions (situated along, mounted to, designed to).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Pre-Flight Walkaround Inspection Role-Play",
              "description": "Captain & Ramp Maintenance Engineer simulation: performing an exterior walkaround and reporting simulated defects.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Cockpit & Cabin Defect Handover Workshop",
              "description": "Consulting the Minimum Equipment List (MEL) to negotiate dispatch decisions for inoperative cabin or airframe items.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up",
              "description": "Pronunciation stress practice (fu-se-lage, emp-en-nage, hy-drau-lic, ra-dome) and vocabulary log consolidation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Aircraft Anatomy: Structure & Systems",
            "subtitle": "External Airframe Components, Flight Deck Controls & Pre-Flight Walkaround Inspections",
            "image": "images/aas_m2card2.jpg",
            "level": "CEFR B2",
            "role": "Flight Crew / Line Maintenance Engineer",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "modeBadges": [
              "⚡ Opening Warm-Up & News Scan",
              "⏱️ 3 min news + 4 min quick check + 3 min verification",
              "🎯 Aerodynamics to Anatomy Transition"
            ],
            "instructions": [
              "Step 1 (Maintenance Headlines - 3 mins): Read the three weekly maintenance and structural headlines. Identify the airframe component most vulnerable to composite fatigue.",
              "Step 2 (Session 1 Review Check - 4 mins): Answer the 4 review questions covering forces in equilibrium and control surfaces without consulting Session 1 notes.",
              "Step 3 (Pair Verification - 3 mins): Compare your responses with your wingman. Toggle answers to verify technical precision and aerodynamic terminology."
            ],
            "deliverable": "Verbally answer all 4 spot-check questions with technical accuracy using correct aviation vocabulary.",
            "teacherNotes": "Ensure students connect Session 1's aerodynamic concepts (pitch, roll, yaw, lift) to the physical surfaces examined today (elevators, ailerons, rudder, flaps, slats).",
            "title": "Activity 1: Aviation News & Session 1 Spot-Check",
            "summary": "Opening news debrief followed by a rapid-fire check on aerodynamics from Session 1.",
            "newsPrompts": [
              "Airbus introduces lightweight titanium-printed hydraulic brackets to save airframe weight on new deliveries.",
              "EASA mandates ultrasonic inspections of horizontal stabilizer attach pins across regional turboprop fleets.",
              "Airport ground handler in London penalized after conveyor belt loader strikes engine cowling during pushback."
            ],
            "diagnostic": {
              "title": "Session 1 Knowledge Check",
              "instructions": "Confirm these 4 points before beginning aircraft anatomy:",
              "questions": [
                {
                  "id": 1,
                  "q": "Which control surface controls roll, and where is it located on the wing?",
                  "answer": "Ailerons control roll; they are hinged to the trailing edge of each outer wing and move in opposite directions.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What is the difference between leading-edge slats and trailing-edge flaps?",
                  "answer": "Slats extend from the leading edge to delay stall at high angles of attack; flaps extend from the trailing edge to increase both lift and drag at low speeds.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "Why are pitot tubes and static ports heated electrically?",
                  "answer": "To prevent atmospheric ice accumulation from blocking dynamic and static pressure sensing, which would cause false airspeed indications.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "What is the radome, and what sensitive equipment does it protect?",
                  "answer": "The radome is the fiberglass dielectric nose cone that shields the weather radar antenna from aerodynamic weather without blocking radar signals.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "diagramLabeling": {
            "modeBadges": [
              "✈️ Aircraft Components & Anatomy",
              "⏱️ 5 min diagram review + 15 min peer-teaching + 5 min plenary check",
              "🎯 External Airframe Structural Vocabulary"
            ],
            "instructions": [
              "Step 1 (Component Scan - 5 mins): Examine the 12 external aircraft components in the visual diagram. Review their English names, physical locations, and primary functions.",
              "Step 2 (Peer-Teaching Walkthrough - 15 mins): In pairs, Student A describes a component's physical location and operational purpose without naming it; Student B identifies the part and its primary failure mode. Then swap.",
              "Step 3 (Plenary Quick-Fire - 5 mins): Rapid-fire quiz on component abbreviations (APU, RAT, VOR/LOC, Pitot probes, static ports). Confirm precise technical pronunciation."
            ],
            "deliverable": "Accurately describe the location, function, and pre-flight inspection checkpoint for at least 4 airframe components to your partner.",
            "teacherNotes": "Emphasize correct stress on aviation compound nouns: PITOT probe, HORIZONTAL stabilizer, VORTEX generator, RADOME. Watch for confusion between flaps (lift augmentation) and spoilers (lift dumping).",
            "title": "Activity 2: Airframe Anatomy Labeling Challenge",
            "summary": "Identify and describe the key external parts and internal zones of a commercial transport aircraft.",
            "externalParts": [
              {
                "id": "01",
                "name": "Radome (Nose Cone)",
                "location": "Forward fuselage tip",
                "purpose": "Houses weather radar antenna; made of RF-transparent composites.",
                "part": "Part 1"
              },
              {
                "id": "02",
                "name": "Pitot-Static Probes",
                "location": "Forward side fuselage",
                "purpose": "Measures dynamic ram air and ambient atmospheric pressure for flight instruments.",
                "part": "Part 2"
              },
              {
                "id": "03",
                "name": "Fuselage",
                "location": "Central main body",
                "purpose": "Pressurized tube holding passengers, flight crew, and lower cargo holds.",
                "part": "Part 3"
              },
              {
                "id": "04",
                "name": "Leading-Edge Slats",
                "location": "Front edge of wings",
                "purpose": "Extend forward and down to increase camber and delay stall during takeoff and landing.",
                "part": "Part 4"
              },
              {
                "id": "05",
                "name": "Trailing-Edge Flaps",
                "location": "Inboard rear wing",
                "purpose": "Extend backward and down to increase wing surface area, generating high lift and drag.",
                "part": "Part 5"
              },
              {
                "id": "06",
                "name": "Ailerons",
                "location": "Outboard rear wing",
                "purpose": "Deflect differentially (one up, one down) to roll the aircraft into a bank.",
                "part": "Part 6"
              },
              {
                "id": "07",
                "name": "Roll Spoilers & Speed Brakes",
                "location": "Upper wing surface",
                "purpose": "Deploy upward to dump lift, assist roll, and act as airbrakes during descent and rollout.",
                "part": "Part 7"
              },
              {
                "id": "08",
                "name": "Engine Nacelle & Pylon",
                "location": "Underwing pylons",
                "purpose": "Aerodynamic housing and structural mounting holding the turbofan engine.",
                "part": "Part 8"
              },
              {
                "id": "09",
                "name": "Main & Nose Landing Gear",
                "location": "Undercarriage bay",
                "purpose": "Absorbs landing impact with oleo-pneumatic struts; retractable with steering nosewheel.",
                "part": "Part 9"
              },
              {
                "id": "10",
                "name": "Vertical Fin & Rudder",
                "location": "Tail empennage",
                "purpose": "Vertical fin provides directional stability; hinged rudder controls aerodynamic yaw.",
                "part": "Part 10"
              },
              {
                "id": "11",
                "name": "Horizontal Stabilizer & Elevators",
                "location": "Tail empennage",
                "purpose": "Stabilizer provides longitudinal stability; elevators control aircraft pitch.",
                "part": "Part 11"
              },
              {
                "id": "12",
                "name": "Winglets / Sharklets",
                "location": "Outer wingtips",
                "purpose": "Reduces induced drag by mitigating high-pressure wingtip vortex roll-up.",
                "part": "Part 12"
              }
            ]
          },
          "spatialClinic": {
            "modeBadges": [
              "📐 Technical Language Workshop",
              "⏱️ 7 min spatial syntax + 8 min description drills + 5 min check",
              "🎯 Spatial Prepositions & Functional Relative Clauses"
            ],
            "instructions": [
              "Step 1 (Spatial Grammar Analysis - 7 mins): Review the spatial preposition patterns and functional relative clauses ('located aft of', 'mounted flush with', 'which serves to prevent').",
              "Step 2 (Guided Description Drills - 8 mins): Using the airframe diagram, construct 3 complex sentences locating antennas, sensors, and structural panels relative to major datum lines.",
              "Step 3 (Peer Verification - 5 mins): Read your descriptions to your partner. They must identify the exact airframe zone based solely on your verbal cues."
            ],
            "deliverable": "Produce 3 grammatically sound spoken technical sentences combining spatial prepositions with functional relative clauses.",
            "teacherNotes": "Drill the prepositional phrases that often cause trouble: 'forward of', 'aft of', 'inboard of', 'outboard of', 'underneath the belly'. Insist on relative clauses: '...which is designed to relieve...', '...through which air flows...'.",
            "title": "Activity 3: Language Focus: Spatial Prepositions & Functions",
            "summary": "Formulating clear, professional technical descriptions of aircraft parts and their relative positions.",
            "patterns": [
              {
                "title": "Precise Spatial Prepositions",
                "examples": [
                  "The auxiliary power unit (APU) is situated inside the tail cone, aft of the rear pressure bulkhead.",
                  "The ram air turbine (RAT) is flush-mounted beneath the fuselage, ready to deploy into the relative airflow."
                ],
                "part": "Part 1"
              },
              {
                "title": "Purposive Relative Clauses",
                "examples": [
                  "Flaps are high-lift devices which extend from the trailing edge, serving to decrease landing speeds.",
                  "The oleo strut is an oleo-pneumatic shock absorber designed to cushion touchdown impacts."
                ],
                "part": "Part 2"
              }
            ]
          },
          "walkaroundRoleplay": {
            "modeBadges": [
              "👨‍✈️ Flight Crew & Ramp Engineer Role-Play",
              "⏱️ 5 min card study + 20 min bilateral simulation + 5 min debrief",
              "🎯 Defect Reporting & Technical Dialogue"
            ],
            "instructions": [
              "Step 1 (Defect Briefing - 5 mins): Study the 3 defect scenario cards. Student A takes the role of the Captain conducting the pre-departure walkaround; Student B takes the role of the Ramp Line Maintenance Engineer.",
              "Step 2 (Spoken Walkaround Simulation - 20 mins): Perform the bilateral spoken inspection dialogue for all defect cards. Captain describes the physical defect observed; Engineer assesses airworthiness and recommends maintenance action or deferral.",
              "Step 3 (Role Reversal & Debrief - 5 mins): Swap roles for the second scenario. Evaluate whether your dialogue maintained professional aviation decorum and clear technical phraseology."
            ],
            "deliverable": "Conduct a realistic walkaround dialogue applying standard aviation terminology for damage (gouges, delamination, hydraulic weeping, bird strike).",
            "teacherNotes": "Listen for realistic aviation communication: clear, concise, objective. Discourage vague language ('it looks broken'); require specific technical descriptors ('there is hydraulic weeping around the actuator seal', 'delamination extending 3 centimeters').",
            "title": "Activity 4: Pre-Flight Exterior Walkaround Role-Play",
            "summary": "Captain & Line Maintenance Engineer simulation: performing a 360-degree exterior walkaround and reporting simulated defects.",
            "defectCards": [
              {
                "item": "Card 1: Radome Inspection",
                "defect": "Circular dent (8 cm diameter) with chipped paint on the lower right radome, likely caused by a bird strike on the previous flight.",
                "pilotDialogue": "Ramp, Captain here. I'm looking at a noticeable dent on the lower starboard radome. Could you bring the gauge to check if it's within structural limits?",
                "engineerDialogue": "Copy that, Captain. I'll inspect the honeycomb core with a tap hammer to confirm there's no delamination or radar interference.",
                "part": "Part 1"
              },
              {
                "item": "Card 2: Left Main Landing Gear",
                "defect": "Fresh reddish hydraulic fluid dripping slowly (approx. 5 drops per minute) from the brake line fitting onto the brake assembly.",
                "pilotDialogue": "We have hydraulic seepage near the port main gear brake line. It looks fresh. Can we get maintenance to torque this fitting?",
                "engineerDialogue": "I see it. That's Skydrol hydraulic fluid. Let me wipe it clean, verify the B-nut torque, and run a brake pressurization check.",
                "part": "Part 2"
              },
              {
                "item": "Card 3: Right Winglet Static Discharger",
                "defect": "One of the three trailing static discharger wicks on the right sharklet is broken off and missing.",
                "pilotDialogue": "I noticed one static wick missing on the starboard winglet tip. Can we dispatch with two wicks installed?",
                "engineerDialogue": "Let me check the Configuration Deviation List (CDL). Under CDL 23-60, flight is permitted with one wick missing provided lightning risk is low.",
                "part": "Part 3"
              }
            ]
          },
          "cockpitSystemsHandover": {
            "modeBadges": [
              "📋 Dispatch & MEL Technical Workshop",
              "⏱️ 5 min MEL review + 15 min crew deliberation + 5 min dispatch decision",
              "🎯 Minimum Equipment List & Airworthiness Assessment"
            ],
            "instructions": [
              "Step 1 (MEL Dispatch Framework - 5 mins): Review the 3 maintenance status items in the Minimum Equipment List (MEL) log (APU inoperative, lavatory door latch jammed, weather radar inoperative).",
              "Step 2 (Crew Deliberation - 15 mins): In pairs, deliberate on each defect. Determine whether the aircraft is: (A) Go / Fit to Dispatch, (B) Go with Operational Limitations, or (C) No-Go / Grounded until rectification.",
              "Step 3 (Technical Dispatch Briefing - 5 mins): Deliver your final verbal dispatch briefing to the Station Operations Control (SOC) justifying your go/no-go recommendation based on MEL conditions."
            ],
            "deliverable": "Present a structured 2-minute verbal dispatch recommendation to the class for all 3 MEL items citing operational restrictions.",
            "teacherNotes": "Ensure students know what MEL Category A, B, C, and D mean in aviation. Ask: 'Can we dispatch with an inoperative APU if ground power and air start units are available at the destination?' Require technical justification.",
            "title": "Activity 5: Minimum Equipment List (MEL) Dispatch Workshop",
            "summary": "Reviewing the Minimum Equipment List (MEL) to make safe dispatch decisions for inoperative equipment.",
            "melItems": [
              {
                "item": "APU (Auxiliary Power Unit) Generator Inoperative",
                "status": "Permitted for 10 days provided both engine generators and external GPU are fully operational.",
                "part": "Part 1"
              },
              {
                "item": "Passenger Cabin Lavatory Door Latch Jammed",
                "status": "Permitted provided the lavatory is locked out, placarded 'INOPERATIVE', and passenger-to-lavatory ratio is respected.",
                "part": "Part 2"
              },
              {
                "item": "Weather Radar System Inoperative",
                "status": "Strictly prohibited if convective storms or IMC (Instrument Meteorological Conditions) are forecast along route.",
                "part": "Part 3"
              }
            ]
          },
          "closingReview": {
            "modeBadges": [
              "🏁 Final Technical Wrap-Up",
              "⏱️ 5 min pronunciation drill + 5 min portfolio audit",
              "🎯 Aircraft Anatomy Vocabulary & Syllable Stress"
            ],
            "instructions": [
              "Step 1 (Syllable Stress Drill - 5 mins): Drill the tricky multisyllabic aircraft components (fu-se-LAGE, emp-en-NAGE, hy-DRAU-lic, RA-dome, sta-bi-LI-zer, AI-ler-on). Focus on primary and secondary stress.",
              "Step 2 (Technical Checkpoints Audit - 3 mins): In pairs, confirm you can name 6 external parts, explain 2 walkaround defect types, and define the purpose of an MEL dispatch item.",
              "Step 3 (Study Assignment - 2 mins): Review the 18 vocabulary flashcards in the Revision tab and review the technical key terms before Session 3."
            ],
            "deliverable": "Demonstrate accurate pronunciation and primary stress placement on 6 multisyllabic aircraft parts and confirm mastery of key anatomy concepts.",
            "teacherNotes": "Conduct a choral pronunciation drill for 'fuselage' (/ˈfjuːzəlɑːʒ/) and 'empennage' (/ˌɒmpɪˈnɑːʒ/). Preview Session 3: Commercial Aircraft & Fleet Types (narrow-body, wide-body, regional).",
            "title": "Activity 6: Vocabulary Review & Class Wrap-Up",
            "summary": "Drill tricky aeronautical component pronunciation and consolidate learning logs ahead of Session 3.",
            "wordsToPronounce": [
              "fu-se-lage",
              "emp-en-nage",
              "hy-drau-lic",
              "ra-dome",
              "sta-bi-li-zer",
              "ail-er-on"
            ],
            "checkpoints": [
              "Can you accurately describe the location and function of the radome, pitot probes, APU, and static ports?",
              "Can you use spatial prepositions (forward of, aft of, mounted flush with) to direct an engineer to an airframe defect?",
              "Can you evaluate an airframe defect against the Minimum Equipment List (MEL) and justify a dispatch decision?"
            ]
          }
        },
        "revision": {
          "title": "Session 2 Revision - Aircraft Anatomy: Structure & Systems",
          "summary": "Master the 18 key vocabulary terms for Aircraft Anatomy to describe airframe structures, control devices, and pre-flight inspections.",
          "terms": [
            {
              "num": "01",
              "term": "Fuselage",
              "definition": "The central main body structure of an aircraft holding passengers, flight crew, and cargo.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Empennage",
              "definition": "The tail assembly of an aircraft, consisting of the vertical fin, rudder, horizontal stabilizer, and elevators.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Leading Edge",
              "definition": "The forwardmost edge of an airfoil or wing that first meets the relative airflow.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Trailing Edge",
              "definition": "The aft rear edge of an airfoil or wing where airflow passing over and under meets.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Slats",
              "definition": "Movable aerodynamic surfaces on the leading edge that extend to delay stall at high angles of attack.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Flaps",
              "definition": "High-lift hinged surfaces on the trailing edge deployed to increase wing surface area and camber during takeoff and landing.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Spoiler (Speed Brake)",
              "definition": "Hinged plates on the upper wing surface that deploy upward to spoil lift and slow the aircraft.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Horizontal Stabilizer",
              "definition": "The fixed or trimmable horizontal tail surface providing longitudinal stability in pitch.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Vertical Fin",
              "definition": "The vertical tail surface that provides directional stability against yaw.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Landing Gear",
              "definition": "The undercarriage assembly (wheels, oleo struts, brakes) supporting the aircraft on the ground.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Radome",
              "definition": "The streamlined fiberglass nose cone protecting the weather radar antenna from aerodynamic weather.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Pitot Tube",
              "definition": "A forward-facing tube mounted on the airframe that measures dynamic ram air pressure for the airspeed indicator.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Static Port",
              "definition": "A flush-mounted opening on the fuselage side that senses ambient atmospheric pressure for altimeters and VSI.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Sidestick",
              "definition": "The cockpit hand control stick mounted on the side console used by pilots to send electronic roll and pitch inputs.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Throttle Quadrant",
              "definition": "The center cockpit console containing engine thrust levers and reverse thrust triggers.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Flight Deck",
              "definition": "The cockpit area at the front of the aircraft where the flight crew operates the flight controls and instruments.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Galley",
              "definition": "The aircraft onboard kitchen area where flight attendants prepare passenger meals and store service carts.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Bulkhead",
              "definition": "A structural vertical dividing wall separating passenger cabins, galleys, or pressurized zones.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Airbus A320 Preflight: Technical Exterior Walkaround",
              "watchUrl": "https://www.youtube.com/watch?v=Tdf_Ac7_gwA",
              "tag": "Pre-Flight",
              "videoId": "Tdf_Ac7_gwA",
              "embedUrl": "https://www.youtube-nocookie.com/embed/Tdf_Ac7_gwA",
              "caption": "Focus: Step-by-step exterior pre-departure walkaround checking pitot-static probes, gear assemblies, tires, and control surfaces.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: How Airplane Flaps and Slats Work",
              "watchUrl": "https://www.youtube.com/watch?v=fUPNN3N-oDI",
              "tag": "Airframe Systems",
              "videoId": "fUPNN3N-oDI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/fUPNN3N-oDI",
              "caption": "Focus: Understand trailing-edge flaps and leading-edge slats, hydraulic actuator tracks, camber change, and stall speed reduction.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Turbofan Architecture: CFM56 Jet Engines",
              "watchUrl": "https://www.youtube.com/watch?v=S2HymZd3GEE",
              "tag": "Propulsion",
              "videoId": "S2HymZd3GEE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/S2HymZd3GEE",
              "caption": "Focus: Inspect the compressor stages, combustion chamber, turbine blades, bypass ratio, and thrust generation in modern turbofans.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Airframe Technology",
              "sourceTag": "Aerospace Manufacturing",
              "heading": "Composite Materials and Carbon Fiber in Modern Airframe Structures",
              "snippet": "How carbon-fiber-reinforced polymers (CFRP) in the Boeing 787 and Airbus A350 eliminate corrosion and reduce empty weight.",
              "url": "https://www.aero-mag.com",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Line Maintenance",
              "sourceTag": "Aviation Maintenance Magazine",
              "heading": "Conducting Visual Pre-Flight Inspections: Detecting Cracks, Dents, and Bird Strikes",
              "snippet": "A practical guide for ramp engineers and line pilots identifying structural damage on engine cowlings, radomes, and leading edges.",
              "url": "https://www.av-maint.com",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://www.skybrary.aero/articles/flight-control-surfaces",
              "tag": "01 • Flight Controls",
              "name": "Skybrary: Aircraft Flight Control Surfaces",
              "desc": "Comprehensive encyclopedia entries on primary and secondary flight control systems.",
              "part": "Part 1"
            },
            {
              "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/aircraft_airframe_handbook",
              "tag": "02 • Airframe Engineering",
              "name": "FAA AMT Airframe Handbook (FAA-H-8083-31A)",
              "desc": "Authoritative technical manual on aircraft structures, composite repairs, and hydraulics.",
              "part": "Part 2"
            },
            {
              "url": "https://aircraft.airbus.com/en/aircraft",
              "tag": "03 • Airbus Specifications",
              "name": "Airbus Aircraft Family Technical Data",
              "desc": "Official payload, dimensions, and structural specifications for the A220, A320, and A350 families.",
              "part": "Part 3"
            },
            {
              "url": "https://www.boeing.com/commercial",
              "tag": "04 • Boeing Engineering",
              "name": "Boeing Commercial Airplanes Technical Highlights",
              "desc": "Detailed structural diagrams and systems overview of the 737 MAX and 787 Dreamliner.",
              "part": "Part 4"
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "05 • Maintenance Standards",
              "name": "EASA Part-66 Aircraft Maintenance Standards",
              "desc": "European airworthiness regulations and syllabus requirements for airframe certifications.",
              "part": "Part 5"
            },
            {
              "url": "https://www.rolls-royce.com/products-and-services/civil-aerospace.aspx",
              "tag": "06 • Engine Architecture",
              "name": "Rolls-Royce Trent Engine Cutaway & Architecture",
              "desc": "Interactive visualization and explanatory guides on high-bypass turbofan components.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Spatial Prepositions & Passive Voice for Pre-Flight Defect Reporting",
            "badge": "Line Operations",
            "patternTitle": "Aircraft Inspection Formula",
            "formula": "Subject + is/are/was/were + Past Participle (+ Prepositional Location)",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Spatial Prepositions for Airframe Anatomy:</strong> Locates external parts precisely (<em>'Leading-edge slats are mounted along the forward wing skin; trailing-edge flaps are situated adjacent to the engine pylon'</em>).",
              "<strong style=\"color: #1e293b;\">2. Present Passive for Structural Functions:</strong> Explains standard operational mechanisms (<em>'Hydraulic actuators are powered by redundant engine-driven pumps'</em>).",
              "<strong style=\"color: #1e293b;\">3. Past Passive for Walkaround Defect Reports:</strong> Documents pre-departure technical anomalies (<em>'A hydraulic leak was observed near the main gear brake lines'</em>).",
              "<strong style=\"color: #1e293b;\">4. Modal Passive for Maintenance Clearance:</strong> Mandates safety release actions (<em>'All inspection panels must be securely fastened before the aircraft is cleared for pushback'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: Be sure to check subject-verb agreement with collective or plural aviation nouns (e.g., 'The landing gear IS inspected' vs. 'The main gear assemblies ARE inspected').",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "During the exterior walkaround, minor surface abrasions were detected on the composite radome.",
              "The pitot-static probes are electrically heated to prevent ice formation during climb."
            ]
          },
          "pageUrl": "session2/admat_aas2.html"
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 Objectives - Commercial Aircraft & Airlines",
          "summary": "By the end of this session, you will be able to categorize commercial aircraft types, compare airliner specifications and manufacturer strategies (Airbus vs. Boeing), deploy comparative structures with confidence, and participate in an airline fleet selection committee simulation.",
          "items": [
            {
              "num": 1,
              "title": "Classify Commercial Aircraft Families",
              "description": "Differentiate between regional turboprops/jets, single-aisle narrowbodies, twin-aisle widebodies, and dedicated freighters.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Compare Manufacturer Strategies & Fleet Data",
              "description": "Analyze the global duopoly of Airbus and Boeing alongside emerging players (ATR, Embraer, COMAC) in range, capacity, and efficiency.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Comparative & Superlative Language for Data Evaluation",
              "description": "Accurately use comparative modifiers (substantially more efficient, lowest fuel burn, twice as heavy) when presenting fleet statistics.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Role-Play an Airline Fleet Selection Committee",
              "description": "Simulate an executive airline fleet planning committee evaluating candidate aircraft orders for regional and long-haul routes.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Examine Airline Operating Models (Legacy vs. Low-Cost)",
              "description": "Contrast hub-and-spoke vs. point-to-point network economics, fleet commonality benefits, and turnaround speed.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session covering commercial aviation news, commercial aircraft classification, comparative data clinic, an airline fleet selection pitch simulation, and duopoly debates.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 2 Anatomy Spot-Check",
              "description": "Weekly aviation news review and rapid spot-check on aircraft parts and pre-flight walkaround defect reporting.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Commercial Aircraft Classification Table",
              "description": "Interactive fleet categorization: classifying regional, narrowbody, widebody, and freighter models by range, capacity, and mission.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Comparative & Superlative Data",
              "description": "Evaluating commercial figures with comparative structures (burns 20% less fuel, substantially greater range, the most cost-effective).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: Airline Fleet Selection Committee Simulation",
              "description": "Pairs act as airline fleet planning directors preparing an aircraft purchase pitch for new routes, defending their choice to classmates.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Global Manufacturer Debate & Industry Trends",
              "description": "Class debate: Hub-and-spoke vs. point-to-point routes; Airbus vs. Boeing duopoly competition; the entry of COMAC C919.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up",
              "description": "Pronunciation drill on commercial terms (ma-nu-fac-tu-rer, tur-bo-prop, ca-pa-ci-ty, ef-fi-cien-cy) and learning log consolidation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Commercial Aircraft & Airlines",
            "subtitle": "Commercial Aircraft Types, Aerospace Manufacturers & Airline Business Models",
            "image": "images/aas_m2card3.jpg",
            "level": "CEFR B2",
            "role": "Airline Fleet Planner / Network Strategy Director",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 2 Spot-Check",
            "summary": "News review followed by quick vocabulary check on aircraft parts.",
            "modeBadges": [
              "Pairs",
              "News & Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Read the 3 fleet news prompts (Airbus A321XLR deliveries, Boeing 747 freighter retirement, Air France-KLM A350 fleet renewal).",
              "Test your partner on the 4 aircraft anatomy spot-check questions (narrowbody vs. widebody, LCC fleet commonality benefits, regional manufacturers, MTOW definition).",
              "Toggle each question answer to verify your technical accuracy and terminology."
            ],
            "deliverable": "Fluent oral explanations of commercial aircraft classifications and fleet economics.",
            "teacherNotes": "Verify students understand why single-aisle fleet commonality is so profitable for budget carriers (crew interchangeability, maintenance pooling, standardized quick turnarounds).",
            "newsPrompts": [
              "Transatlantic low-cost airline announces order for 20 Airbus A321XLR aircraft to pioneer point-to-point routes from secondary airports.",
              "Boeing delivers final 747 freighter, marking the end of 54 years of iconic quad-jet Queen of the Skies production.",
              "Air France-KLM outlines €1 billion investment in ultra-efficient Airbus A350-900 fleet renewal to cut emissions by 25%."
            ],
            "diagnostic": {
              "title": "Session 2 Anatomy Quick Check",
              "instructions": "Answer these 4 rapid spot-check questions:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary difference between a narrowbody and a widebody aircraft?",
                  "answer": "A narrowbody (single-aisle) aircraft has one passenger aisle with up to 6 seats abreast (e.g. A320, 737). A widebody (twin-aisle) aircraft has two passenger aisles with 7 to 10 seats abreast (e.g. A350, 787).",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "Why do low-cost carriers (LCCs) like Ryanair and Southwest operate only one single aircraft type?",
                  "answer": "Fleet commonality dramatically lowers pilot training costs, simplifies maintenance spare parts inventory, and ensures any crew can operate any aircraft on short notice.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "Name two major regional aircraft manufacturers outside the Airbus-Boeing duopoly.",
                  "answer": "ATR (Franco-Italian turboprop manufacturer) and Embraer (Brazilian regional jet manufacturer).",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "What is Maximum Takeoff Weight (MTOW), and why is it important for airline route planning?",
                  "answer": "MTOW is the maximum permissible total weight (airframe, fuel, passengers, cargo) at brake release. It determines runway length requirements, landing fees, and maximum payload-range capability.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "fleetTaxonomy": {
            "title": "Activity 2: Commercial Aircraft Classification Table",
            "summary": "Classify commercial passenger and freighter aircraft into operational categories.",
            "modeBadges": [
              "Pairs / Small Groups",
              "Fleet Analysis",
              "25 Mins"
            ],
            "instructions": [
              "Analyze the 4 commercial aircraft categories: Regional Turboprops & Jets, Single-Aisle Narrowbodies, Twin-Aisle Widebodies, and Dedicated Freighters.",
              "Compare seat capacities, operational ranges, and typical airline missions across models (ATR 72, A220, A320neo, 737 MAX, A350, 777F).",
              "Identify which aircraft category is optimal for 3 distinct routes: Paris-Orly to Brest, Paris-CDG to New York JFK, and Toulouse to Bastia."
            ],
            "deliverable": "Completed route-to-aircraft matching matrix with operational and financial justifications.",
            "teacherNotes": "Emphasize the transformative role of the A321XLR in allowing narrowbody single-aisle aircraft to fly thin long-haul transatlantic routes profitably without needing a 300-seat widebody.",
            "categories": [
              {
                "category": "Regional Turboprops & Jets",
                "examples": "ATR 72-600, Embraer E195-E2, Dash 8-Q400",
                "capacity": "40 to 130 seats",
                "range": "1,500 to 4,500 km",
                "typicalMission": "Short-haul feeder flights connecting small regional communities to hub airports; short runways and rough airfields.",
                "part": "Part 1"
              },
              {
                "category": "Single-Aisle Narrowbodies (The Workhorses)",
                "examples": "Airbus A320neo, Boeing 737 MAX, Airbus A220-300",
                "capacity": "140 to 240 seats",
                "range": "5,500 to 8,700 km (A321XLR)",
                "typicalMission": "High-frequency domestic and regional international routes; rapid 30-minute turnarounds; expanding into thin transatlantic flights.",
                "part": "Part 2"
              },
              {
                "category": "Twin-Aisle Widebodies (Long-Haul Flagships)",
                "examples": "Airbus A350-900/1000, Boeing 787-9/10, Boeing 777-300ER/777X",
                "capacity": "250 to 450 seats",
                "range": "13,000 to 18,000 km",
                "typicalMission": "Intercontinental long-haul trunk routes connecting global megahubs; high belly cargo payload capacity; premium cabin configurations.",
                "part": "Part 3"
              },
              {
                "category": "Dedicated Freighters & Cargo Conversions",
                "examples": "Boeing 777F, Airbus A350F, Boeing 767-300BCF, A321P2F",
                "capacity": "25 to 110 tonnes of cargo",
                "range": "7,000 to 10,000 km",
                "typicalMission": "Scheduled express freight networks (FedEx, DHL, UPS) operating main-deck containerized pallets with high-value time-sensitive goods.",
                "part": "Part 4"
              }
            ]
          },
          "comparativeClinic": {
            "title": "Activity 3: Language Focus: Comparative & Superlative Data",
            "summary": "Mastering modifiers and comparative structures to evaluate aircraft efficiency and fleet statistics.",
            "modeBadges": [
              "Pairs / Individual",
              "Data Analysis & Grammar",
              "20 Mins"
            ],
            "instructions": [
              "Study the 3 comparative structures: Quantified Comparatives (Percentage/Factor + more/less... than), Emphatic Modifiers (substantially / significantly / considerably), and Superlative Benchmarks (the longest range... in its class).",
              "Review the aircraft performance data and formulate 4 spoken sentences comparing the fuel burn, seat capacity, MTOW, and range of the A350-900 vs. Boeing 777-300ER.",
              "Share your comparative statements with your partner, verifying accurate preposition and modifier usage."
            ],
            "deliverable": "4 mathematically and grammatically accurate comparative statements benchmarking commercial airliner performance.",
            "teacherNotes": "Target common French speaker interference: 'more economical than' (not 'more economic'), '25% less fuel' (not 'fewer fuel'), and placing modifiers correctly ('considerably higher', not 'high considerably').",
            "rules": [
              {
                "structure": "Quantified Comparatives",
                "formula": "[Percentage / Factor] + more/less + [adjective/noun] + than",
                "example": "The A350-900 burns 25% less fuel per seat than the previous-generation A340 quad-jet.",
                "part": "Part 1"
              },
              {
                "structure": "Emphatic Modifiers",
                "formula": "substantially / significantly / considerably + [comparative]",
                "example": "Turboprops are considerably more economical than regional jets on stage lengths under 500 kilometers.",
                "part": "Part 2"
              },
              {
                "structure": "Superlative Benchmarks",
                "formula": "the + [superlative] + [noun] + in its class / on the market",
                "example": "The A321XLR offers the longest range of any commercial single-aisle airliner on the market.",
                "part": "Part 3"
              }
            ]
          },
          "fleetCommitteeSimulation": {
            "title": "Activity 4: Airline Fleet Selection Committee Simulation",
            "summary": "Pairs represent airline management committees pitching an aircraft purchase order for a new route network.",
            "modeBadges": [
              "Pairs",
              "Executive Simulation",
              "30 Mins"
            ],
            "instructions": [
              "Select one of the two business cases: Case 1 (Transatlantic Expansion: A321XLR vs. Boeing 787-8) or Case 2 (Regional Feeder Fleet: ATR 72-600 vs. Embraer E175).",
              "With your partner, spend 15 minutes analyzing the payload, range, trip cost, and passenger appeal trade-offs of Option A versus Option B.",
              "Structure a 3-minute executive board pitch recommending one aircraft, using comparative grammar and economic metrics.",
              "Present your pitch to a peer pair acting as the airline Board of Directors, defending your choice against a 2-minute counter-challenge."
            ],
            "deliverable": "3-minute executive board presentation recommending an aircraft procurement strategy with quantitative support.",
            "teacherNotes": "Ensure students support their choices with financial logic: widebodies generate higher belly-cargo revenue and passenger comfort, but narrowbodies feature vastly lower trip break-even factors on thin secondary routes.",
            "cases": [
              {
                "title": "Case 1: Transatlantic Expansion for a European Airline",
                "network": "New routes from secondary French and UK cities (Lyon, Manchester) to the US East Coast (Boston, Philadelphia).",
                "optionA": "Airbus A321XLR (Narrowbody): 180 seats, lower total trip cost, easy to fill daily, limited belly cargo capacity.",
                "optionB": "Boeing 787-8 (Widebody): 242 seats, higher passenger comfort, superior cargo revenue, higher landing fees and trip cost.",
                "part": "Part 1"
              },
              {
                "title": "Case 2: Regional Feeder Fleet Modernization",
                "network": "High-frequency domestic island-hopping and mountainous routes (Corsica, Pyrenees, Scottish Highlands).",
                "optionA": "ATR 72-600 (Turboprop): 70 seats, lowest fuel burn, excellent short-field performance, slower cruise speed (510 km/h).",
                "optionB": "Embraer E175 (Regional Jet): 76 seats, faster cruise speed (870 km/h), greater passenger appeal, higher fuel burn on short hops.",
                "part": "Part 2"
              }
            ]
          },
          "globalLandscapeDebate": {
            "title": "Activity 5: Global Manufacturer Debate & Industry Trends",
            "summary": "Class debate exploring the Airbus-Boeing duopoly, supply chain bottlenecks, and the emergence of COMAC.",
            "modeBadges": [
              "Plenary / Fishbowl",
              "Industry Debate",
              "25 Mins"
            ],
            "instructions": [
              "Review the 3 industry debate topics: point-to-point narrowbody flying vs. hub widebodies, COMAC C919 challenging the Western duopoly, and dual-sourcing vs. single-manufacturer fleet commonality.",
              "Form two debate teams (or use a fishbowl format) to debate whether airlines should risk split orders to avoid multi-year delivery backlogs.",
              "Deploy structured debate connectors: 'While the duopoly offers proven dispatch reliability, ...', 'From a supply chain resilience standpoint, ...'."
            ],
            "deliverable": "Active spoken participation in plenary debates utilizing strategic argumentation and aero-economic terms.",
            "teacherNotes": "Moderate the debate to ensure all students contribute. Challenge assumptions: Why can't COMAC easily enter Western markets? (EASA/FAA certification, global spare parts networks, Western component export controls).",
            "topics": [
              "Will point-to-point narrowbody flying permanently replace the traditional hub-and-spoke widebody model?",
              "Can COMAC's C919 realistically challenge the Airbus A320 and Boeing 737 duopoly on international routes by 2035?",
              "Should airlines prioritize fleet commonality with a single manufacturer or split orders to hedge delivery delays?"
            ]
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review & Pronunciation Wrap-Up",
            "summary": "Consolidate the 18 commercial fleet terms and prepare for Session 4 Aviation Accidents.",
            "modeBadges": [
              "Plenary",
              "Pronunciation Drill",
              "10 Mins"
            ],
            "instructions": [
              "Complete the syllable stress drills on the 5 technical terms: ma-nu-FAC-tu-rer, du-OP-o-ly, TUR-bo-prop, ca-PA-ci-ty, con-fig-u-RA-tion.",
              "Review the 18 commercial fleet flashcard definitions in the Revision tab.",
              "Log any lingering pronunciation difficulties and prepare for Session 4 (Aviation Accidents & Safety)."
            ],
            "deliverable": "Accurate pronunciation and word stress demonstrated on all 5 polysyllabic aviation terms.",
            "teacherNotes": "Drill word stress energetically. French speakers tend to stress the final syllable; reinforce strong primary stress on the accented syllables (e.g., du-OP-o-ly, not du-op-o-LY).",
            "checkpoints": [
              "Mastered 18 commercial aircraft & fleet planning terms",
              "Practiced comparative modifiers in oral pitches",
              "Completed syllable stress drills on aeronautical vocabulary"
            ],
            "pronunciationFocus": [
              "ma-nu-fac-tu-rer",
              "du-op-o-ly",
              "tur-bo-prop",
              "ca-pa-ci-ty",
              "con-fig-u-ra-tion"
            ]
          }
        },
        "revision": {
          "title": "Session 3 Revision - Commercial Aircraft & Airlines",
          "summary": "Master the 18 key vocabulary terms for Commercial Aircraft & Airlines to analyze aircraft categories, fleet planning, and airline business models.",
          "terms": [
            {
              "num": "01",
              "term": "Narrowbody",
              "definition": "A single-aisle commercial passenger aircraft typically seating 100 to 240 passengers with 6 seats abreast.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Widebody",
              "definition": "A twin-aisle commercial airliner seating 250 to 500+ passengers with 7 to 10 seats abreast used for long-haul routes.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Regional Jet",
              "definition": "A short-to-medium-range jet airliner typically seating 50 to 120 passengers on feeder routes.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Turboprop",
              "definition": "An aircraft powered by a gas turbine engine geared to a propeller, highly efficient at low altitudes and short distances.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Freighter",
              "definition": "A dedicated cargo aircraft with main-deck loading doors designed exclusively to carry freight containers.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Range",
              "definition": "The maximum distance an aircraft can fly between takeoff and landing without refueling.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Payload",
              "definition": "The total revenue-generating load carrying capacity of an aircraft, including passengers, luggage, and commercial cargo.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Maximum Takeoff Weight (MTOW)",
              "definition": "The maximum certified total weight at which an aircraft is legally permitted to attempt takeoff.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Fuel Burn",
              "definition": "The rate of fuel consumed by an aircraft engine during flight, measured in kilograms or liters per hour.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Manufacturer",
              "definition": "An aerospace corporation, such as Airbus or Boeing, that designs, certifies, and builds aircraft.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Duopoly",
              "definition": "A market condition where two major suppliers dominate sales, notably Airbus and Boeing in large commercial jetliners.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Flag Carrier",
              "definition": "A legacy national airline registered in a specific country, often historically state-owned (e.g. Air France, British Airways).",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Low-Cost Carrier (LCC)",
              "definition": "An airline operating with a lean cost structure, high fleet utilization, point-to-point routes, and unbundled fares (e.g. Ryanair, easyJet).",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Hub-and-Spoke",
              "definition": "A route network model where flights connect through a central hub airport to transfer passengers onto connecting flights.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Point-to-Point",
              "definition": "A route network model providing direct nonstop flights between origin and destination without transiting a central hub.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Fleet Renewal",
              "definition": "The phased retirement of aging aircraft and replacement with newer, quieter, and more fuel-efficient models.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Cabin Configuration",
              "definition": "The physical seating arrangement inside an airliner, divided into Economy, Premium, Business, and First Class.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Turnaround Efficiency",
              "definition": "The capability of an airline and ground crew to deplane, service, refuel, and reboard an aircraft in minimum gate time.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: How Airlines Pick Between The A350 & 787",
              "watchUrl": "https://www.youtube.com/watch?v=XQHMFnJ1nMw",
              "tag": "Fleet Strategy",
              "videoId": "XQHMFnJ1nMw",
              "embedUrl": "https://www.youtube-nocookie.com/embed/XQHMFnJ1nMw",
              "caption": "Focus: Contrast composite airframe design, range economics, fuel burn per seat, and route deployment between Airbus and Boeing.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: How Budget Airlines Work: Fleet Commonality & Economics",
              "watchUrl": "https://www.youtube.com/watch?v=069y1MpOkQY",
              "tag": "Airline Economics",
              "videoId": "069y1MpOkQY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/069y1MpOkQY",
              "caption": "Focus: Discover why single-fleet commonality (A320/B737) and 25-minute turnarounds form the financial backbone of low-cost carriers.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: The Airbus A321XLR Could Change Air Travel Forever",
              "watchUrl": "https://www.youtube.com/watch?v=NeRygjT-hGM",
              "tag": "Emerging Aircraft",
              "videoId": "NeRygjT-hGM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/NeRygjT-hGM",
              "caption": "Focus: Analyze how extra-long-range single-aisle airliners displace widebodies on thin transatlantic and secondary city routes.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Commercial Fleet Trends",
              "sourceTag": "FlightGlobal",
              "heading": "The Rise of the Long-Range Narrowbody: How the A321XLR is Reshaping Aviation",
              "snippet": "Examine how single-aisle airliners are replacing widebodies on long-haul secondary routes across the Atlantic.",
              "url": "https://www.flightglobal.com",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Aerospace Competition",
              "sourceTag": "Aviation Week",
              "heading": "Airbus, Boeing, and the Global Duopoly: Supply Chain Realities and Emerging Rivals",
              "snippet": "An analysis of global order backlogs, titanium shortages, and COMAC's efforts to scale C919 production in Asia.",
              "url": "https://aviationweek.com",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://www.iata.org",
              "tag": "01 • Airline Statistics",
              "name": "IATA World Air Transport Statistics (WATS)",
              "desc": "Global airline passenger numbers, cargo traffic yields, and operating fleet benchmarks.",
              "part": "Part 1"
            },
            {
              "url": "https://www.flightglobal.com",
              "tag": "02 • Fleet Intelligence",
              "name": "FlightGlobal Commercial Fleets Directory",
              "desc": "Comprehensive commercial airliner order books, lease agreements, and retirement data.",
              "part": "Part 2"
            },
            {
              "url": "https://aircraft.airbus.com/en/market-forecast",
              "tag": "03 • Market Projections",
              "name": "Airbus Global Market Forecast (GMF 2024–2043)",
              "desc": "20-year demand outlook for passenger narrowbodies, widebodies, and freighter conversions.",
              "part": "Part 3"
            },
            {
              "url": "https://www.boeing.com/commercial/market/commercial-market-outlook",
              "tag": "04 • Industry Outlook",
              "name": "Boeing Commercial Market Outlook (CMO)",
              "desc": "Global economic projections, passenger traffic expansion rates, and fleet renewal patterns.",
              "part": "Part 4"
            },
            {
              "url": "https://airlineweekly.skift.com",
              "tag": "05 • Airline Analysis",
              "name": "Airline Weekly Global Airline Business News",
              "desc": "Weekly strategic analysis of airline balance sheets, network route expansions, and fuel costs.",
              "part": "Part 5"
            },
            {
              "url": "https://www.ch-aviation.com",
              "tag": "06 • Fleet Database",
              "name": "ch-aviation Aircraft & Fleet Database",
              "desc": "Real-time fleet tracker detailing aircraft age, engine variants, and operator distributions.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Comparative, Superlative & Ratio Structures in Fleet Economics",
            "badge": "Fleet Strategy",
            "patternTitle": "Fleet Evaluation Formula",
            "formula": "[Aircraft A] + is considerably more/less + Adj + than [Aircraft B] || Twice as + Adj + as",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Modified Comparatives for Operational Metrics:</strong> Accentuates fleet performance differences (<em>'The A321neo is significantly more fuel-efficient per seat-kilometer than older generation twinjets'</em>).",
              "<strong style=\"color: #1e293b;\">2. Superlatives for Market Extremes:</strong> Identifies category leaders (<em>'The Boeing 777X boasts the widest commercial passenger cabin and longest range among new twin-aisle jets'</em>).",
              "<strong style=\"color: #1e293b;\">3. Expressing Multipliers & Ratios:</strong> Compares financial and cargo yields (<em>'Widebody freighters carry nearly three times as much cargo payload as regional turboprops'</em>).",
              "<strong style=\"color: #1e293b;\">4. Proportional Statements (The more... the more...):</strong> Links variables (<em>'The lighter the composite fuselage structure, the lower the fuel burn over long-haul sectors'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: Never use 'very' or 'more' with comparative adjectives (incorrect: 'very cheaper'). Always use degree modifiers: 'significantly', 'considerably', 'substantially', or 'slightly' (correct: 'significantly cheaper').",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "Low-cost carriers achieve considerably higher daily aircraft utilization than legacy network carriers.",
              "The new turbofan variant delivers a 15% reduction in carbon emissions compared to its predecessor."
            ]
          },
          "pageUrl": "session3/admat_aas2.html"
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 Objectives - Significant Aviation Accidents & Aircraft Types",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Accident Investigation Terminology",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Spoken Group Presentations & Safety Debrief",
              "description": "Each team delivers a spoken presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Significant Aviation Accidents & Aircraft Types",
            "subtitle": "Landmark Air Accidents, Technical Causal Analysis & The Evolution of Flight Safety",
            "image": "images/aas_m2card4.jpg",
            "level": "CEFR B2",
            "role": "Safety Investigator / Flight Safety Officer",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check",
            "summary": "News review followed by quick vocabulary check on commercial fleets.",
            "modeBadges": [
              "Pairs",
              "News & Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Read the 3 aviation safety news items (BEA annual report, NTSB automation symposium, ICAO 25-hour CVR mandate).",
              "Test your partner on the 4 core accident investigation questions: Accident vs. Incident (ICAO Annex 13), FDR vs. CVR capabilities, CFIT definition, and the Swiss Cheese safety model.",
              "Toggle each answer to verify definitions against official ICAO investigation terminology."
            ],
            "deliverable": "Concise verbal explanations of core safety concepts and accident classification criteria.",
            "teacherNotes": "Stress that aviation safety investigations exist solely to determine causes and prevent recurrence, NOT to apportion blame or legal liability (ICAO Annex 13 principle).",
            "newsPrompts": [
              "French accident bureau BEA issues annual safety synthesis highlighting stable commercial airline safety records in Europe.",
              "NTSB safety symposium examines pilot-machine interface and automated flight envelope protections.",
              "ICAO mandates enhanced 25-hour Cockpit Voice Recorder (CVR) duration on newly manufactured commercial jet transports."
            ],
            "diagnostic": {
              "title": "Session 3 Knowledge Check",
              "instructions": "Answer these 4 rapid spot-check questions:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between an 'accident' and an 'incident' according to ICAO Annex 13?",
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains",
            "summary": "Learn and deploy specialized safety vocabulary used by investigation authorities (BEA, NTSB, AAIB).",
            "modeBadges": [
              "Pairs",
              "Vocabulary Acquisition",
              "20 Mins"
            ],
            "instructions": [
              "Review the 5 core investigation concepts: Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), Root Cause vs. Contributing Factor, Human Factors & CRM, and Airworthiness Directives (AD).",
              "Pair up to explain how a minor technical glitch can cascade into a catastrophic event when multiple contributing factors align.",
              "Match each term to its real-world investigation document (preliminary report, FDR readout, final safety recommendation)."
            ],
            "deliverable": "Precise deployment of causal terminology in simulated incident descriptions.",
            "teacherNotes": "Check understanding of the distinction between 'root cause' (the underlying trigger without which the accident would not occur) and 'contributing factors' (environmental, fatigue, organizational conditions that aggravated the event).",
            "terms": [
              {
                "term": "Flight Data Recorder (FDR)",
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation.",
                "part": "Part 1"
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop.",
                "part": "Part 2"
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain.",
                "part": "Part 3"
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit.",
                "part": "Part 4"
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications.",
                "part": "Part 5"
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers",
            "summary": "Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.",
            "modeBadges": [
              "Pairs / Individual",
              "Narrative Grammar",
              "20 Mins"
            ],
            "instructions": [
              "Examine the narrative timeline formula combining Past Continuous (background condition: 'was cruising at FL350'), Past Perfect (prior action: 'ice crystals had blocked the probes'), and Past Simple (consecutive events: 'the autopilot disconnected, the alarm sounded, and the crew pitched up').",
              "Identify the time sequencers used in professional accident reports: 'subsequently', 'concurrently', 'prior to impact', 'thereafter'.",
              "Reconstruct a 3-sentence chronological sequence of an in-flight engine failure using all three past tenses accurately."
            ],
            "deliverable": "Written and spoken chronological narrative accurately coordinating Past Simple, Past Continuous, and Past Perfect.",
            "teacherNotes": "Non-native speakers often overuse the past simple. Insist on the past perfect for actions completed before another past event: 'The aircraft crashed because the maintenance crew had forgotten to lock the cowl latch.'",
            "rules": [
              {
                "tense": "Past Continuous (Background Action in Progress)",
                "formula": "was/were + [verb-ing]",
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed.",
                "part": "Part 1"
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes.",
                "part": "Part 2"
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway.",
                "part": "Part 3"
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint",
            "summary": "Small groups (3-4 students) select one landmark accident case study. Within 15 minutes, prepare a 5-minute spoken briefing for classmates.",
            "modeBadges": [
              "Small Groups (3-4)",
              "Research Sprint",
              "15 Mins"
            ],
            "instructions": [
              "Form groups of 3-4 and select one of the 6 landmark accident case studies: Tenerife (1977), AF447 (2009), US Airways 1549 (2009), BA038 (2008), Aloha 243 (1988), or Boeing 737 MAX (2018-2019).",
              "In a 15-minute timed sprint, extract the 4 mandatory briefing pillars: (1) Aircraft type & context, (2) Chronology of events, (3) Technical & human root causes, (4) Permanent safety upgrades.",
              "Assign speaking roles so that each group member presents one specific pillar without reading directly from notes."
            ],
            "deliverable": "Structured 4-part presentation outline ready for spoken delivery within the 15-minute timebox.",
            "teacherNotes": "Act as a timekeeper. Do not allow groups to spend 10 minutes choosing a topic; assign immediately if needed. Check that notes contain only bullet prompts, key acronyms, and flight numbers.",
            "caseStudies": [
              {
                "id": 1,
                "title": "Tenerife Airport Disaster (1977)",
                "aircraft": "Two Boeing 747s (KLM Flight 4805 & Pan Am Flight 1736)",
                "context": "Dense fog on the runway at Los Rodeos Airport. Non-standard radio phraseology ('at takeoff') and authority gradient led KLM to begin takeoff while Pan Am was still back-taxiing on the runway.",
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals.",
                "part": "Part 5"
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots.",
                "part": "Part 6"
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief",
            "summary": "Each group presents their 5-minute accident analysis using whiteboard or slide bullet points, followed by class Q&A.",
            "modeBadges": [
              "Small Groups",
              "Spoken Presentation",
              "45 Mins"
            ],
            "instructions": [
              "Deliver your 5-minute accident briefing to the class, using the whiteboard or bullet slides to support your narrative.",
              "Ensure talking time is distributed equally among all team members. Strictly no reading from pre-written essays!",
              "After each presentation, the audience formulates at least two technical questions regarding the investigation findings or regulatory follow-up.",
              "Summarize how the accident contributed to the modern aviation safety ecosystem."
            ],
            "deliverable": "5-minute spoken briefing delivered without word-for-word notes and active engagement in technical peer Q&A.",
            "teacherNotes": "Enforce equal speaking time strictly. If one student dominates, prompt the other team members: 'Could the second speaker explain the human factors component?' Assess pronunciation of past tense -ed endings (e.g., disconnected, pitched, descended).",
            "presentationGuidelines": [
              "Structure: (1) Aircraft type & context, (2) Chronology of events, (3) Root causes, (4) Permanent safety fixes.",
              "Speaking rules: Share talking time equally among all group members. Strictly no reading word-for-word from notes!",
              "Audience task: Classmates formulate one technical follow-up question regarding the investigation findings."
            ]
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep",
            "summary": "Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.",
            "modeBadges": [
              "Plenary",
              "FE2 Preparation",
              "10 Mins"
            ],
            "instructions": [
              "Review the 18 accident and safety terms in the Revision tab flashcards.",
              "Note the expectations for Session 5 Formative Evaluation 2: 10-12 minute paired presentation of an Aircraft or Airline Profile, followed by teacher Q&A.",
              "Verify your presentation partner, topic selection, and slide preparation plan."
            ],
            "deliverable": "Confirmed FE2 preparation roadmap and mastery of the 18 accident investigation vocabulary items.",
            "teacherNotes": "Remind students that FE2 in Session 5 is formative, providing detailed formative feedback on pronunciation, technical vocabulary, and spontaneous Q&A defense.",
            "checkpoints": [
              "Mastered 18 accident investigation & safety terms",
              "Coordinated past simple, continuous, and perfect in chronology",
              "Confirmed FE2 partner, topic, and presentation structure"
            ],
            "fe2Preview": "In Session 5, you and your partner will present an Aircraft or Airline Profile for 10-12 minutes, followed by teacher Q&A, covering technical specs, operational metrics, historical milestones, and safety records."
          }
        },
        "revision": {
          "title": "Session 4 Revision - Significant Aviation Accidents & Aircraft Types",
          "summary": "Master the 18 key vocabulary terms for Aviation Accidents & Safety to analyze investigation methodologies, causal factors, and safety upgrades.",
          "terms": [
            {
              "num": "01",
              "term": "Accident",
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Black Box, FDR & CVR Explained by Captain Joe",
              "watchUrl": "https://www.youtube.com/watch?v=lPiWlBG16Wo",
              "tag": "Flight Recorders",
              "videoId": "lPiWlBG16Wo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/lPiWlBG16Wo",
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports.",
              "part": "Part 1"
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings.",
              "part": "Part 2"
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency.",
              "part": "Part 3"
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities.",
              "part": "Part 4"
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors.",
              "part": "Part 5"
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Past Narrative Tenses & Time Linkers in Accident Chronologies",
            "badge": "Flight Recorders",
            "patternTitle": "Accident Investigation Formula",
            "formula": "While + Past Continuous, Past Simple || Subject + had + Past Participle (Past Perfect)",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Past Continuous for Background Conditions:</strong> Sets the atmospheric and operational scene (<em>'While the flight was cruising in severe icing conditions at FL350, the pitot probes iced over'</em>).",
              "<strong style=\"color: #1e293b;\">2. Past Simple for Sequential Chain of Events:</strong> Recounts the chronological trigger events (<em>'The autopilot disconnected, the master warning sounded, and the captain initiated recovery'</em>).",
              "<strong style=\"color: #1e293b;\">3. Past Perfect for Pre-Existing Latent Conditions:</strong> Identifies maintenance or regulatory oversights prior to departure (<em>'Investigators revealed that technicians had installed an incorrect adhesive during an overhaul six months earlier'</em>).",
              "<strong style=\"color: #1e293b;\">4. Cause-and-Effect Narrative Subordinators:</strong> Connects human factors to systemic outcomes (<em>'Because the flight crew had received insufficient simulator training on the new trim system, they failed to recognize the runaway trim'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "5": {
        "session": 5,
        "objectives": {
          "title": "Session 5 Objectives - Significant Aviation Accidents & Aircraft Types",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Accident Investigation Terminology",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Spoken Group Presentations & Safety Debrief",
              "description": "Each team delivers a spoken presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Significant Aviation Accidents & Aircraft Types",
            "subtitle": "Landmark Air Accidents, Technical Causal Analysis & The Evolution of Flight Safety",
            "image": "images/aas_m2card4.jpg",
            "level": "CEFR B2",
            "role": "Safety Investigator / Flight Safety Officer",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check",
            "summary": "News review followed by quick vocabulary check on commercial fleets.",
            "modeBadges": [
              "Pairs",
              "News & Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Read the 3 aviation safety news items (BEA annual report, NTSB automation symposium, ICAO 25-hour CVR mandate).",
              "Test your partner on the 4 core accident investigation questions: Accident vs. Incident (ICAO Annex 13), FDR vs. CVR capabilities, CFIT definition, and the Swiss Cheese safety model.",
              "Toggle each answer to verify definitions against official ICAO investigation terminology."
            ],
            "deliverable": "Concise verbal explanations of core safety concepts and accident classification criteria.",
            "teacherNotes": "Stress that aviation safety investigations exist solely to determine causes and prevent recurrence, NOT to apportion blame or legal liability (ICAO Annex 13 principle).",
            "newsPrompts": [
              "French accident bureau BEA issues annual safety synthesis highlighting stable commercial airline safety records in Europe.",
              "NTSB safety symposium examines pilot-machine interface and automated flight envelope protections.",
              "ICAO mandates enhanced 25-hour Cockpit Voice Recorder (CVR) duration on newly manufactured commercial jet transports."
            ],
            "diagnostic": {
              "title": "Session 3 Knowledge Check",
              "instructions": "Answer these 4 rapid spot-check questions:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between an 'accident' and an 'incident' according to ICAO Annex 13?",
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains",
            "summary": "Learn and deploy specialized safety vocabulary used by investigation authorities (BEA, NTSB, AAIB).",
            "modeBadges": [
              "Pairs",
              "Vocabulary Acquisition",
              "20 Mins"
            ],
            "instructions": [
              "Review the 5 core investigation concepts: Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), Root Cause vs. Contributing Factor, Human Factors & CRM, and Airworthiness Directives (AD).",
              "Pair up to explain how a minor technical glitch can cascade into a catastrophic event when multiple contributing factors align.",
              "Match each term to its real-world investigation document (preliminary report, FDR readout, final safety recommendation)."
            ],
            "deliverable": "Precise deployment of causal terminology in simulated incident descriptions.",
            "teacherNotes": "Check understanding of the distinction between 'root cause' (the underlying trigger without which the accident would not occur) and 'contributing factors' (environmental, fatigue, organizational conditions that aggravated the event).",
            "terms": [
              {
                "term": "Flight Data Recorder (FDR)",
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation.",
                "part": "Part 1"
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop.",
                "part": "Part 2"
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain.",
                "part": "Part 3"
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit.",
                "part": "Part 4"
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications.",
                "part": "Part 5"
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers",
            "summary": "Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.",
            "modeBadges": [
              "Pairs / Individual",
              "Narrative Grammar",
              "20 Mins"
            ],
            "instructions": [
              "Examine the narrative timeline formula combining Past Continuous (background condition: 'was cruising at FL350'), Past Perfect (prior action: 'ice crystals had blocked the probes'), and Past Simple (consecutive events: 'the autopilot disconnected, the alarm sounded, and the crew pitched up').",
              "Identify the time sequencers used in professional accident reports: 'subsequently', 'concurrently', 'prior to impact', 'thereafter'.",
              "Reconstruct a 3-sentence chronological sequence of an in-flight engine failure using all three past tenses accurately."
            ],
            "deliverable": "Written and spoken chronological narrative accurately coordinating Past Simple, Past Continuous, and Past Perfect.",
            "teacherNotes": "Non-native speakers often overuse the past simple. Insist on the past perfect for actions completed before another past event: 'The aircraft crashed because the maintenance crew had forgotten to lock the cowl latch.'",
            "rules": [
              {
                "tense": "Past Continuous (Background Action in Progress)",
                "formula": "was/were + [verb-ing]",
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed.",
                "part": "Part 1"
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes.",
                "part": "Part 2"
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway.",
                "part": "Part 3"
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint",
            "summary": "Small groups (3-4 students) select one landmark accident case study. Within 15 minutes, prepare a 5-minute spoken briefing for classmates.",
            "modeBadges": [
              "Small Groups (3-4)",
              "Research Sprint",
              "15 Mins"
            ],
            "instructions": [
              "Form groups of 3-4 and select one of the 6 landmark accident case studies: Tenerife (1977), AF447 (2009), US Airways 1549 (2009), BA038 (2008), Aloha 243 (1988), or Boeing 737 MAX (2018-2019).",
              "In a 15-minute timed sprint, extract the 4 mandatory briefing pillars: (1) Aircraft type & context, (2) Chronology of events, (3) Technical & human root causes, (4) Permanent safety upgrades.",
              "Assign speaking roles so that each group member presents one specific pillar without reading directly from notes."
            ],
            "deliverable": "Structured 4-part presentation outline ready for spoken delivery within the 15-minute timebox.",
            "teacherNotes": "Act as a timekeeper. Do not allow groups to spend 10 minutes choosing a topic; assign immediately if needed. Check that notes contain only bullet prompts, key acronyms, and flight numbers.",
            "caseStudies": [
              {
                "id": 1,
                "title": "Tenerife Airport Disaster (1977)",
                "aircraft": "Two Boeing 747s (KLM Flight 4805 & Pan Am Flight 1736)",
                "context": "Dense fog on the runway at Los Rodeos Airport. Non-standard radio phraseology ('at takeoff') and authority gradient led KLM to begin takeoff while Pan Am was still back-taxiing on the runway.",
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals.",
                "part": "Part 5"
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots.",
                "part": "Part 6"
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief",
            "summary": "Each group presents their 5-minute accident analysis using whiteboard or slide bullet points, followed by class Q&A.",
            "modeBadges": [
              "Small Groups",
              "Spoken Presentation",
              "45 Mins"
            ],
            "instructions": [
              "Deliver your 5-minute accident briefing to the class, using the whiteboard or bullet slides to support your narrative.",
              "Ensure talking time is distributed equally among all team members. Strictly no reading from pre-written essays!",
              "After each presentation, the audience formulates at least two technical questions regarding the investigation findings or regulatory follow-up.",
              "Summarize how the accident contributed to the modern aviation safety ecosystem."
            ],
            "deliverable": "5-minute spoken briefing delivered without word-for-word notes and active engagement in technical peer Q&A.",
            "teacherNotes": "Enforce equal speaking time strictly. If one student dominates, prompt the other team members: 'Could the second speaker explain the human factors component?' Assess pronunciation of past tense -ed endings (e.g., disconnected, pitched, descended).",
            "presentationGuidelines": [
              "Structure: (1) Aircraft type & context, (2) Chronology of events, (3) Root causes, (4) Permanent safety fixes.",
              "Speaking rules: Share talking time equally among all group members. Strictly no reading word-for-word from notes!",
              "Audience task: Classmates formulate one technical follow-up question regarding the investigation findings."
            ]
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep",
            "summary": "Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.",
            "modeBadges": [
              "Plenary",
              "FE2 Preparation",
              "10 Mins"
            ],
            "instructions": [
              "Review the 18 accident and safety terms in the Revision tab flashcards.",
              "Note the expectations for Session 5 Formative Evaluation 2: 10-12 minute paired presentation of an Aircraft or Airline Profile, followed by teacher Q&A.",
              "Verify your presentation partner, topic selection, and slide preparation plan."
            ],
            "deliverable": "Confirmed FE2 preparation roadmap and mastery of the 18 accident investigation vocabulary items.",
            "teacherNotes": "Remind students that FE2 in Session 5 is formative, providing detailed formative feedback on pronunciation, technical vocabulary, and spontaneous Q&A defense.",
            "checkpoints": [
              "Mastered 18 accident investigation & safety terms",
              "Coordinated past simple, continuous, and perfect in chronology",
              "Confirmed FE2 partner, topic, and presentation structure"
            ],
            "fe2Preview": "In Session 5, you and your partner will present an Aircraft or Airline Profile for 10-12 minutes, followed by teacher Q&A, covering technical specs, operational metrics, historical milestones, and safety records."
          }
        },
        "revision": {
          "title": "Session 4 Revision - Significant Aviation Accidents & Aircraft Types",
          "summary": "Master the 18 key vocabulary terms for Aviation Accidents & Safety to analyze investigation methodologies, causal factors, and safety upgrades.",
          "terms": [
            {
              "num": "01",
              "term": "Accident",
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Black Box, FDR & CVR Explained by Captain Joe",
              "watchUrl": "https://www.youtube.com/watch?v=lPiWlBG16Wo",
              "tag": "Flight Recorders",
              "videoId": "lPiWlBG16Wo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/lPiWlBG16Wo",
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports.",
              "part": "Part 1"
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings.",
              "part": "Part 2"
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency.",
              "part": "Part 3"
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities.",
              "part": "Part 4"
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors.",
              "part": "Part 5"
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Past Narrative Tenses & Time Linkers in Accident Chronologies",
            "badge": "Flight Recorders",
            "patternTitle": "Accident Investigation Formula",
            "formula": "While + Past Continuous, Past Simple || Subject + had + Past Participle (Past Perfect)",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Past Continuous for Background Conditions:</strong> Sets the atmospheric and operational scene (<em>'While the flight was cruising in severe icing conditions at FL350, the pitot probes iced over'</em>).",
              "<strong style=\"color: #1e293b;\">2. Past Simple for Sequential Chain of Events:</strong> Recounts the chronological trigger events (<em>'The autopilot disconnected, the master warning sounded, and the captain initiated recovery'</em>).",
              "<strong style=\"color: #1e293b;\">3. Past Perfect for Pre-Existing Latent Conditions:</strong> Identifies maintenance or regulatory oversights prior to departure (<em>'Investigators revealed that technicians had installed an incorrect adhesive during an overhaul six months earlier'</em>).",
              "<strong style=\"color: #1e293b;\">4. Cause-and-Effect Narrative Subordinators:</strong> Connects human factors to systemic outcomes (<em>'Because the flight crew had received insufficient simulator training on the new trim system, they failed to recognize the runaway trim'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "6": {
        "session": 6,
        "objectives": {
          "title": "Session 6 Objectives - Significant Aviation Accidents & Aircraft Types",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Accident Investigation Terminology",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Spoken Group Presentations & Safety Debrief",
              "description": "Each team delivers a spoken presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Significant Aviation Accidents & Aircraft Types",
            "subtitle": "Landmark Air Accidents, Technical Causal Analysis & The Evolution of Flight Safety",
            "image": "images/aas_m2card4.jpg",
            "level": "CEFR B2",
            "role": "Safety Investigator / Flight Safety Officer",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check",
            "summary": "News review followed by quick vocabulary check on commercial fleets.",
            "modeBadges": [
              "Pairs",
              "News & Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Read the 3 aviation safety news items (BEA annual report, NTSB automation symposium, ICAO 25-hour CVR mandate).",
              "Test your partner on the 4 core accident investigation questions: Accident vs. Incident (ICAO Annex 13), FDR vs. CVR capabilities, CFIT definition, and the Swiss Cheese safety model.",
              "Toggle each answer to verify definitions against official ICAO investigation terminology."
            ],
            "deliverable": "Concise verbal explanations of core safety concepts and accident classification criteria.",
            "teacherNotes": "Stress that aviation safety investigations exist solely to determine causes and prevent recurrence, NOT to apportion blame or legal liability (ICAO Annex 13 principle).",
            "newsPrompts": [
              "French accident bureau BEA issues annual safety synthesis highlighting stable commercial airline safety records in Europe.",
              "NTSB safety symposium examines pilot-machine interface and automated flight envelope protections.",
              "ICAO mandates enhanced 25-hour Cockpit Voice Recorder (CVR) duration on newly manufactured commercial jet transports."
            ],
            "diagnostic": {
              "title": "Session 3 Knowledge Check",
              "instructions": "Answer these 4 rapid spot-check questions:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between an 'accident' and an 'incident' according to ICAO Annex 13?",
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains",
            "summary": "Learn and deploy specialized safety vocabulary used by investigation authorities (BEA, NTSB, AAIB).",
            "modeBadges": [
              "Pairs",
              "Vocabulary Acquisition",
              "20 Mins"
            ],
            "instructions": [
              "Review the 5 core investigation concepts: Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), Root Cause vs. Contributing Factor, Human Factors & CRM, and Airworthiness Directives (AD).",
              "Pair up to explain how a minor technical glitch can cascade into a catastrophic event when multiple contributing factors align.",
              "Match each term to its real-world investigation document (preliminary report, FDR readout, final safety recommendation)."
            ],
            "deliverable": "Precise deployment of causal terminology in simulated incident descriptions.",
            "teacherNotes": "Check understanding of the distinction between 'root cause' (the underlying trigger without which the accident would not occur) and 'contributing factors' (environmental, fatigue, organizational conditions that aggravated the event).",
            "terms": [
              {
                "term": "Flight Data Recorder (FDR)",
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation.",
                "part": "Part 1"
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop.",
                "part": "Part 2"
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain.",
                "part": "Part 3"
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit.",
                "part": "Part 4"
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications.",
                "part": "Part 5"
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers",
            "summary": "Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.",
            "modeBadges": [
              "Pairs / Individual",
              "Narrative Grammar",
              "20 Mins"
            ],
            "instructions": [
              "Examine the narrative timeline formula combining Past Continuous (background condition: 'was cruising at FL350'), Past Perfect (prior action: 'ice crystals had blocked the probes'), and Past Simple (consecutive events: 'the autopilot disconnected, the alarm sounded, and the crew pitched up').",
              "Identify the time sequencers used in professional accident reports: 'subsequently', 'concurrently', 'prior to impact', 'thereafter'.",
              "Reconstruct a 3-sentence chronological sequence of an in-flight engine failure using all three past tenses accurately."
            ],
            "deliverable": "Written and spoken chronological narrative accurately coordinating Past Simple, Past Continuous, and Past Perfect.",
            "teacherNotes": "Non-native speakers often overuse the past simple. Insist on the past perfect for actions completed before another past event: 'The aircraft crashed because the maintenance crew had forgotten to lock the cowl latch.'",
            "rules": [
              {
                "tense": "Past Continuous (Background Action in Progress)",
                "formula": "was/were + [verb-ing]",
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed.",
                "part": "Part 1"
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes.",
                "part": "Part 2"
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway.",
                "part": "Part 3"
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint",
            "summary": "Small groups (3-4 students) select one landmark accident case study. Within 15 minutes, prepare a 5-minute spoken briefing for classmates.",
            "modeBadges": [
              "Small Groups (3-4)",
              "Research Sprint",
              "15 Mins"
            ],
            "instructions": [
              "Form groups of 3-4 and select one of the 6 landmark accident case studies: Tenerife (1977), AF447 (2009), US Airways 1549 (2009), BA038 (2008), Aloha 243 (1988), or Boeing 737 MAX (2018-2019).",
              "In a 15-minute timed sprint, extract the 4 mandatory briefing pillars: (1) Aircraft type & context, (2) Chronology of events, (3) Technical & human root causes, (4) Permanent safety upgrades.",
              "Assign speaking roles so that each group member presents one specific pillar without reading directly from notes."
            ],
            "deliverable": "Structured 4-part presentation outline ready for spoken delivery within the 15-minute timebox.",
            "teacherNotes": "Act as a timekeeper. Do not allow groups to spend 10 minutes choosing a topic; assign immediately if needed. Check that notes contain only bullet prompts, key acronyms, and flight numbers.",
            "caseStudies": [
              {
                "id": 1,
                "title": "Tenerife Airport Disaster (1977)",
                "aircraft": "Two Boeing 747s (KLM Flight 4805 & Pan Am Flight 1736)",
                "context": "Dense fog on the runway at Los Rodeos Airport. Non-standard radio phraseology ('at takeoff') and authority gradient led KLM to begin takeoff while Pan Am was still back-taxiing on the runway.",
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals.",
                "part": "Part 5"
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots.",
                "part": "Part 6"
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief",
            "summary": "Each group presents their 5-minute accident analysis using whiteboard or slide bullet points, followed by class Q&A.",
            "modeBadges": [
              "Small Groups",
              "Spoken Presentation",
              "45 Mins"
            ],
            "instructions": [
              "Deliver your 5-minute accident briefing to the class, using the whiteboard or bullet slides to support your narrative.",
              "Ensure talking time is distributed equally among all team members. Strictly no reading from pre-written essays!",
              "After each presentation, the audience formulates at least two technical questions regarding the investigation findings or regulatory follow-up.",
              "Summarize how the accident contributed to the modern aviation safety ecosystem."
            ],
            "deliverable": "5-minute spoken briefing delivered without word-for-word notes and active engagement in technical peer Q&A.",
            "teacherNotes": "Enforce equal speaking time strictly. If one student dominates, prompt the other team members: 'Could the second speaker explain the human factors component?' Assess pronunciation of past tense -ed endings (e.g., disconnected, pitched, descended).",
            "presentationGuidelines": [
              "Structure: (1) Aircraft type & context, (2) Chronology of events, (3) Root causes, (4) Permanent safety fixes.",
              "Speaking rules: Share talking time equally among all group members. Strictly no reading word-for-word from notes!",
              "Audience task: Classmates formulate one technical follow-up question regarding the investigation findings."
            ]
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep",
            "summary": "Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.",
            "modeBadges": [
              "Plenary",
              "FE2 Preparation",
              "10 Mins"
            ],
            "instructions": [
              "Review the 18 accident and safety terms in the Revision tab flashcards.",
              "Note the expectations for Session 5 Formative Evaluation 2: 10-12 minute paired presentation of an Aircraft or Airline Profile, followed by teacher Q&A.",
              "Verify your presentation partner, topic selection, and slide preparation plan."
            ],
            "deliverable": "Confirmed FE2 preparation roadmap and mastery of the 18 accident investigation vocabulary items.",
            "teacherNotes": "Remind students that FE2 in Session 5 is formative, providing detailed formative feedback on pronunciation, technical vocabulary, and spontaneous Q&A defense.",
            "checkpoints": [
              "Mastered 18 accident investigation & safety terms",
              "Coordinated past simple, continuous, and perfect in chronology",
              "Confirmed FE2 partner, topic, and presentation structure"
            ],
            "fe2Preview": "In Session 5, you and your partner will present an Aircraft or Airline Profile for 10-12 minutes, followed by teacher Q&A, covering technical specs, operational metrics, historical milestones, and safety records."
          }
        },
        "revision": {
          "title": "Session 4 Revision - Significant Aviation Accidents & Aircraft Types",
          "summary": "Master the 18 key vocabulary terms for Aviation Accidents & Safety to analyze investigation methodologies, causal factors, and safety upgrades.",
          "terms": [
            {
              "num": "01",
              "term": "Accident",
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Black Box, FDR & CVR Explained by Captain Joe",
              "watchUrl": "https://www.youtube.com/watch?v=lPiWlBG16Wo",
              "tag": "Flight Recorders",
              "videoId": "lPiWlBG16Wo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/lPiWlBG16Wo",
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports.",
              "part": "Part 1"
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings.",
              "part": "Part 2"
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency.",
              "part": "Part 3"
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities.",
              "part": "Part 4"
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors.",
              "part": "Part 5"
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Past Narrative Tenses & Time Linkers in Accident Chronologies",
            "badge": "Flight Recorders",
            "patternTitle": "Accident Investigation Formula",
            "formula": "While + Past Continuous, Past Simple || Subject + had + Past Participle (Past Perfect)",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Past Continuous for Background Conditions:</strong> Sets the atmospheric and operational scene (<em>'While the flight was cruising in severe icing conditions at FL350, the pitot probes iced over'</em>).",
              "<strong style=\"color: #1e293b;\">2. Past Simple for Sequential Chain of Events:</strong> Recounts the chronological trigger events (<em>'The autopilot disconnected, the master warning sounded, and the captain initiated recovery'</em>).",
              "<strong style=\"color: #1e293b;\">3. Past Perfect for Pre-Existing Latent Conditions:</strong> Identifies maintenance or regulatory oversights prior to departure (<em>'Investigators revealed that technicians had installed an incorrect adhesive during an overhaul six months earlier'</em>).",
              "<strong style=\"color: #1e293b;\">4. Cause-and-Effect Narrative Subordinators:</strong> Connects human factors to systemic outcomes (<em>'Because the flight crew had received insufficient simulator training on the new trim system, they failed to recognize the runaway trim'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "7": {
        "session": 7,
        "objectives": {
          "title": "Session 7 Objectives - Significant Aviation Accidents & Aircraft Types",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved.",
              "part": "Part 1"
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model.",
              "part": "Part 2"
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines.",
              "part": "Part 3"
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes.",
              "part": "Part 4"
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions.",
              "part": "Part 5"
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models.",
              "part": "Part 1"
            },
            {
              "title": "Part 2: Accident Investigation Terminology",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors.",
              "part": "Part 2"
            },
            {
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because).",
              "part": "Part 3"
            },
            {
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes.",
              "part": "Part 4"
            },
            {
              "title": "Part 5: Spoken Group Presentations & Safety Debrief",
              "description": "Each team delivers a spoken presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A.",
              "part": "Part 5"
            },
            {
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation.",
              "part": "Part 6"
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Significant Aviation Accidents & Aircraft Types",
            "subtitle": "Landmark Air Accidents, Technical Causal Analysis & The Evolution of Flight Safety",
            "image": "images/aas_m2card4.jpg",
            "level": "CEFR B2",
            "role": "Safety Investigator / Flight Safety Officer",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check",
            "summary": "News review followed by quick vocabulary check on commercial fleets.",
            "modeBadges": [
              "Pairs",
              "News & Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Read the 3 aviation safety news items (BEA annual report, NTSB automation symposium, ICAO 25-hour CVR mandate).",
              "Test your partner on the 4 core accident investigation questions: Accident vs. Incident (ICAO Annex 13), FDR vs. CVR capabilities, CFIT definition, and the Swiss Cheese safety model.",
              "Toggle each answer to verify definitions against official ICAO investigation terminology."
            ],
            "deliverable": "Concise verbal explanations of core safety concepts and accident classification criteria.",
            "teacherNotes": "Stress that aviation safety investigations exist solely to determine causes and prevent recurrence, NOT to apportion blame or legal liability (ICAO Annex 13 principle).",
            "newsPrompts": [
              "French accident bureau BEA issues annual safety synthesis highlighting stable commercial airline safety records in Europe.",
              "NTSB safety symposium examines pilot-machine interface and automated flight envelope protections.",
              "ICAO mandates enhanced 25-hour Cockpit Voice Recorder (CVR) duration on newly manufactured commercial jet transports."
            ],
            "diagnostic": {
              "title": "Session 3 Knowledge Check",
              "instructions": "Answer these 4 rapid spot-check questions:",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between an 'accident' and an 'incident' according to ICAO Annex 13?",
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury.",
                  "part": "Part 1"
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings.",
                  "part": "Part 2"
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact.",
                  "part": "Part 3"
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers.",
                  "part": "Part 4"
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains",
            "summary": "Learn and deploy specialized safety vocabulary used by investigation authorities (BEA, NTSB, AAIB).",
            "modeBadges": [
              "Pairs",
              "Vocabulary Acquisition",
              "20 Mins"
            ],
            "instructions": [
              "Review the 5 core investigation concepts: Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), Root Cause vs. Contributing Factor, Human Factors & CRM, and Airworthiness Directives (AD).",
              "Pair up to explain how a minor technical glitch can cascade into a catastrophic event when multiple contributing factors align.",
              "Match each term to its real-world investigation document (preliminary report, FDR readout, final safety recommendation)."
            ],
            "deliverable": "Precise deployment of causal terminology in simulated incident descriptions.",
            "teacherNotes": "Check understanding of the distinction between 'root cause' (the underlying trigger without which the accident would not occur) and 'contributing factors' (environmental, fatigue, organizational conditions that aggravated the event).",
            "terms": [
              {
                "term": "Flight Data Recorder (FDR)",
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation.",
                "part": "Part 1"
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop.",
                "part": "Part 2"
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain.",
                "part": "Part 3"
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit.",
                "part": "Part 4"
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications.",
                "part": "Part 5"
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers",
            "summary": "Combining Past Simple, Past Continuous, and Past Perfect to build clear chronological incident reports.",
            "modeBadges": [
              "Pairs / Individual",
              "Narrative Grammar",
              "20 Mins"
            ],
            "instructions": [
              "Examine the narrative timeline formula combining Past Continuous (background condition: 'was cruising at FL350'), Past Perfect (prior action: 'ice crystals had blocked the probes'), and Past Simple (consecutive events: 'the autopilot disconnected, the alarm sounded, and the crew pitched up').",
              "Identify the time sequencers used in professional accident reports: 'subsequently', 'concurrently', 'prior to impact', 'thereafter'.",
              "Reconstruct a 3-sentence chronological sequence of an in-flight engine failure using all three past tenses accurately."
            ],
            "deliverable": "Written and spoken chronological narrative accurately coordinating Past Simple, Past Continuous, and Past Perfect.",
            "teacherNotes": "Non-native speakers often overuse the past simple. Insist on the past perfect for actions completed before another past event: 'The aircraft crashed because the maintenance crew had forgotten to lock the cowl latch.'",
            "rules": [
              {
                "tense": "Past Continuous (Background Action in Progress)",
                "formula": "was/were + [verb-ing]",
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed.",
                "part": "Part 1"
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes.",
                "part": "Part 2"
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway.",
                "part": "Part 3"
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint",
            "summary": "Small groups (3-4 students) select one landmark accident case study. Within 15 minutes, prepare a 5-minute spoken briefing for classmates.",
            "modeBadges": [
              "Small Groups (3-4)",
              "Research Sprint",
              "15 Mins"
            ],
            "instructions": [
              "Form groups of 3-4 and select one of the 6 landmark accident case studies: Tenerife (1977), AF447 (2009), US Airways 1549 (2009), BA038 (2008), Aloha 243 (1988), or Boeing 737 MAX (2018-2019).",
              "In a 15-minute timed sprint, extract the 4 mandatory briefing pillars: (1) Aircraft type & context, (2) Chronology of events, (3) Technical & human root causes, (4) Permanent safety upgrades.",
              "Assign speaking roles so that each group member presents one specific pillar without reading directly from notes."
            ],
            "deliverable": "Structured 4-part presentation outline ready for spoken delivery within the 15-minute timebox.",
            "teacherNotes": "Act as a timekeeper. Do not allow groups to spend 10 minutes choosing a topic; assign immediately if needed. Check that notes contain only bullet prompts, key acronyms, and flight numbers.",
            "caseStudies": [
              {
                "id": 1,
                "title": "Tenerife Airport Disaster (1977)",
                "aircraft": "Two Boeing 747s (KLM Flight 4805 & Pan Am Flight 1736)",
                "context": "Dense fog on the runway at Los Rodeos Airport. Non-standard radio phraseology ('at takeoff') and authority gradient led KLM to begin takeoff while Pan Am was still back-taxiing on the runway.",
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances.",
                "part": "Part 1"
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols.",
                "part": "Part 2"
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training.",
                "part": "Part 3"
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures.",
                "part": "Part 4"
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals.",
                "part": "Part 5"
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots.",
                "part": "Part 6"
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief",
            "summary": "Each group presents their 5-minute accident analysis using whiteboard or slide bullet points, followed by class Q&A.",
            "modeBadges": [
              "Small Groups",
              "Spoken Presentation",
              "45 Mins"
            ],
            "instructions": [
              "Deliver your 5-minute accident briefing to the class, using the whiteboard or bullet slides to support your narrative.",
              "Ensure talking time is distributed equally among all team members. Strictly no reading from pre-written essays!",
              "After each presentation, the audience formulates at least two technical questions regarding the investigation findings or regulatory follow-up.",
              "Summarize how the accident contributed to the modern aviation safety ecosystem."
            ],
            "deliverable": "5-minute spoken briefing delivered without word-for-word notes and active engagement in technical peer Q&A.",
            "teacherNotes": "Enforce equal speaking time strictly. If one student dominates, prompt the other team members: 'Could the second speaker explain the human factors component?' Assess pronunciation of past tense -ed endings (e.g., disconnected, pitched, descended).",
            "presentationGuidelines": [
              "Structure: (1) Aircraft type & context, (2) Chronology of events, (3) Root causes, (4) Permanent safety fixes.",
              "Speaking rules: Share talking time equally among all group members. Strictly no reading word-for-word from notes!",
              "Audience task: Classmates formulate one technical follow-up question regarding the investigation findings."
            ]
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep",
            "summary": "Review the 18 accident investigation terms and review expectations for Session 5 Formative Evaluation 2.",
            "modeBadges": [
              "Plenary",
              "FE2 Preparation",
              "10 Mins"
            ],
            "instructions": [
              "Review the 18 accident and safety terms in the Revision tab flashcards.",
              "Note the expectations for Session 5 Formative Evaluation 2: 10-12 minute paired presentation of an Aircraft or Airline Profile, followed by teacher Q&A.",
              "Verify your presentation partner, topic selection, and slide preparation plan."
            ],
            "deliverable": "Confirmed FE2 preparation roadmap and mastery of the 18 accident investigation vocabulary items.",
            "teacherNotes": "Remind students that FE2 in Session 5 is formative, providing detailed formative feedback on pronunciation, technical vocabulary, and spontaneous Q&A defense.",
            "checkpoints": [
              "Mastered 18 accident investigation & safety terms",
              "Coordinated past simple, continuous, and perfect in chronology",
              "Confirmed FE2 partner, topic, and presentation structure"
            ],
            "fe2Preview": "In Session 5, you and your partner will present an Aircraft or Airline Profile for 10-12 minutes, followed by teacher Q&A, covering technical specs, operational metrics, historical milestones, and safety records."
          }
        },
        "revision": {
          "title": "Session 4 Revision - Significant Aviation Accidents & Aircraft Types",
          "summary": "Master the 18 key vocabulary terms for Aviation Accidents & Safety to analyze investigation methodologies, causal factors, and safety upgrades.",
          "terms": [
            {
              "num": "01",
              "term": "Accident",
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure.",
              "part": "Part 1"
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation.",
              "part": "Part 2"
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents.",
              "part": "Part 3"
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms.",
              "part": "Part 4"
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes.",
              "part": "Part 5"
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident.",
              "part": "Part 6"
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident.",
              "part": "Part 7"
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress.",
              "part": "Part 8"
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction.",
              "part": "Part 9"
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation.",
              "part": "Part 10"
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing.",
              "part": "Part 11"
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance.",
              "part": "Part 12"
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles.",
              "part": "Part 13"
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure.",
              "part": "Part 14"
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations.",
              "part": "Part 15"
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status.",
              "part": "Part 16"
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes.",
              "part": "Part 17"
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition.",
              "part": "Part 18"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Black Box, FDR & CVR Explained by Captain Joe",
              "watchUrl": "https://www.youtube.com/watch?v=lPiWlBG16Wo",
              "tag": "Flight Recorders",
              "videoId": "lPiWlBG16Wo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/lPiWlBG16Wo",
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry.",
              "part": "Part 1"
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching.",
              "part": "Part 2"
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model.",
              "part": "Part 3"
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins",
              "part": "Part 1"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins",
              "part": "Part 2"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports.",
              "part": "Part 1"
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings.",
              "part": "Part 2"
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency.",
              "part": "Part 3"
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities.",
              "part": "Part 4"
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors.",
              "part": "Part 5"
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence.",
              "part": "Part 6"
            }
          ],
          "grammar": {
            "title": "Past Narrative Tenses & Time Linkers in Accident Chronologies",
            "badge": "Flight Recorders",
            "patternTitle": "Accident Investigation Formula",
            "formula": "While + Past Continuous, Past Simple || Subject + had + Past Participle (Past Perfect)",
            "rulesTitle": "Core Communicative Guidelines",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Past Continuous for Background Conditions:</strong> Sets the atmospheric and operational scene (<em>'While the flight was cruising in severe icing conditions at FL350, the pitot probes iced over'</em>).",
              "<strong style=\"color: #1e293b;\">2. Past Simple for Sequential Chain of Events:</strong> Recounts the chronological trigger events (<em>'The autopilot disconnected, the master warning sounded, and the captain initiated recovery'</em>).",
              "<strong style=\"color: #1e293b;\">3. Past Perfect for Pre-Existing Latent Conditions:</strong> Identifies maintenance or regulatory oversights prior to departure (<em>'Investigators revealed that technicians had installed an incorrect adhesive during an overhaul six months earlier'</em>).",
              "<strong style=\"color: #1e293b;\">4. Cause-and-Effect Narrative Subordinators:</strong> Connects human factors to systemic outcomes (<em>'Because the flight crew had received insufficient simulator training on the new trim system, they failed to recognize the runaway trim'</em>)."
            ],
            "trap": "⚠️ Technical English & Spoken Structure Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "pageUrl": "session4/admat_aas2.html"
        }
      }
    }
  }
};

  return {
    "1": aasData["1"],
    "2": aasData["2"],
    aas: aasData
  };
});
