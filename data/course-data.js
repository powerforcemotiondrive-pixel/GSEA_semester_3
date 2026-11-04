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
        "objectives": {
          "title": "Session 1 - EASA Rules & Finding Information Fast Objectives",
          "summary": "By the end of this session, GSEA students will be able to navigate dense EASA airport rules without getting lost, understand the difference between mandatory laws and advisory guides, use words for rules (shall, must, should, may) accurately, scan an authentic EASA crane safety specification (+50% length), role-play a polite clarification dialogue with a building contractor, and complete a simple Safety Check.",
          "items": [
            {
              "num": 1,
              "title": "Talk About Reading Challenges (Fluency & Spontaneous Speech)",
              "description": "Share what makes long official manuals hard to read in English and agree on simple tricks to find information fast."
            },
            {
              "num": 2,
              "title": "Understand the Two Types of Rules (Laws vs. Guides)",
              "description": "Learn the simple difference between Laws (rules you must follow) and Guides (advice and best practice)."
            },
            {
              "num": 3,
              "title": "Key Words for Rules (Vocabulary Focus)",
              "description": "Learn and use everyday rule words: must follow (binding), advice (guidance), inspect (oversight), and safety zone (obstacle surface)."
            },
            {
              "num": 4,
              "title": "Words for Rules: Shall, Must, Should, May (Language Focus)",
              "description": "Practice using shall / must (100% required), shall not (forbidden), should (recommended advice), and may (allowed)."
            },
            {
              "num": 5,
              "title": "Read the EASA Crane Rule (Authentic Document Scanning)",
              "description": "Scan the simulated EASA document (CS-ADR-DSN.H.400 & H.415) to find where tall cranes and buildings are not allowed near the runway."
            },
            {
              "num": 6,
              "title": "Speaking Role-Play & Safety Check (Spoken Interaction)",
              "description": "Role-play a polite conversation with a builder who wants to place a crane near the airport, and complete a simple Safety Check."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session for GSEA students covering document reading tricks, EASA crane safety rules, words for rules (shall, must, should, may), an obstacle clarification role-play, and a simple Safety Check.",
          "items": [
            {
              "time": "00-15",
              "title": "Part 1: Warm-up: Reading Long Manuals (15 mins)",
              "description": "In pairs, GSEA students discuss what makes 300-page official manuals hard to read, share quick scanning strategies, and test entry knowledge with 4 quick spot-check questions."
            },
            {
              "time": "15-45",
              "title": "Part 2: Reading the EASA Crane Rule (30 mins)",
              "description": "Reading an authentic +50% expanded EASA extract (CS-ADR-DSN.H.400 and H.415 + GM1) to locate obstacle limitation surfaces, slope gradients, and crane safeguarding rules."
            },
            {
              "time": "45-70",
              "title": "Part 3: Words for Rules: Shall, Must, Should, May (25 mins)",
              "description": "Grammar and language clinic clarifying mandatory requirements (shall/must), prohibitions (shall not), and recommendations (should) through 5 practical drills."
            },
            {
              "time": "70-105",
              "title": "Part 4: Speaking Role-Play: Talking to the Builder (35 mins)",
              "description": "3-student spoken role-play between a GSEA Safety Officer and a Construction Manager discussing a proposed 48m crane near Runway 09, with peer observation."
            },
            {
              "time": "105-120",
              "title": "Part 5: Safety Check: What Could Go Wrong? (15 mins)",
              "description": "Collaborative 4-step safety check evaluating the crane hazard, flight risks, protective steps (lowered height, obstacle lights, NOTAM), and the final decision."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "EASA Rules & Finding Information Fast",
            "subtitle": "Navigating Airport Regulations, Words for Rules & Obstacle Safeguarding",
            "image": "images/s3_m1_session1_easa.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Aerodrome Operations & Rule Compliance",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up & Entry Spot-Check (15 mins)",
            "summary": "Break the ice, discuss reading challenges in English, and test your baseline knowledge of airport rules.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Discussion",
              "Timing: 15 mins"
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
                ]
              },
              {
                "id": 2,
                "question": "When you need to find one specific rule in a huge PDF, what is your personal strategy?",
                "exampleAnswers": [
                  "I always press Ctrl + F (or Cmd + F) and search for very specific keywords—like 'crane', 'gradient', or '28 days'—rather than reading through dozens of pages.",
                  "My strategy is to check the Table of Contents first to find the right Subpart (like Subpart H for obstacle surfaces), and then scan the section titles."
                ]
              },
              {
                "id": 3,
                "question": "Have you ever had to explain a complicated rule to someone who didn't understand it?",
                "exampleAnswers": [
                  "Yes, during an internship, I had to explain to a delivery driver why he couldn't park near the apron gate. I explained that an aircraft was arriving in 15 minutes and needed the space clear.",
                  "I think the best trick is to explain the safety reason behind the rule ('It protects landing planes from hitting obstacles') rather than just saying 'No, it's forbidden'."
                ]
              }
            ],
            "diagnostic": {
              "title": "Airport Rules Entry Spot-Check",
              "instructions": "Discuss each question with your partner, then click to check your answer.",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the simple difference between a Law (Regulation) and a Guide (Guidance Material)?",
                  "answer": "A Law is mandatory (you must obey it 100% or face legal penalties). A Guide gives practical advice and examples to help you follow the law correctly."
                },
                {
                  "id": 2,
                  "q": "In European aviation documents, what does the word 'SHALL' mean?",
                  "answer": "'Shall' means a mandatory requirement. You have no choice: it is required by law."
                },
                {
                  "id": 3,
                  "q": "What is an 'Obstacle Limitation Surface' (OLS) in everyday words?",
                  "answer": "It is an invisible safety bubble or slope in the sky around the runway where tall cranes, trees, and buildings are strictly forbidden to protect landing planes."
                },
                {
                  "id": 4,
                  "q": "What is a NOTAM (Notice to Airmen)?",
                  "answer": "A quick, urgent official alert sent to all pilots informing them about temporary airport hazards, such as closed taxiways, broken lights, or construction cranes."
                }
              ]
            }
          },
          "documentExtract": {
            "title": "Activity 2: Reading the EASA Crane Rule (30 mins)",
            "summary": "Scan an authentic, expanded EASA regulatory extract to locate safety surfaces and crane rules.",
            "modeBadges": [
              "Pairs or Small Groups",
              "Document Scanning",
              "Timing: 30 mins"
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
                "answer": "Clause H.415(b)(1) states it starts at an inner edge located 60 metres prior to the runway threshold."
              },
              {
                "id": 2,
                "q": "What is the maximum allowed upward slope (gradient) for precision runways?",
                "answer": "Clause H.415(d) states the slope shall not exceed 2.0% (which means a 1:50 gradient)."
              },
              {
                "id": 3,
                "q": "Are builders allowed to build new structures above this approach surface?",
                "answer": "Clause H.415(e) states new objects shall not be permitted above an approach surface, unless they are shielded by an existing permanent object."
              },
              {
                "id": 4,
                "q": "How many days in advance must a construction company tell the airport before putting up a crane over 25m?",
                "answer": "Clause GM1 CS-ADR-DSN.H.415(b) requires written notification at least 28 calendar days prior to crane assembly."
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: Words for Rules: Must, Shall, Should, May (25 mins)",
            "summary": "Master the words used in aviation rules to express legal obligations, prohibitions, and advice.",
            "modeBadges": [
              "Individual & Pairs",
              "Language Clinic",
              "Timing: 25 mins"
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
                "tip": "Use when the rule is required by law with zero choice."
              },
              {
                "word": "Shall not / Must not",
                "meaning": "Strictly Forbidden",
                "example": "Cranes shall not penetrate the approach surface.",
                "tip": "Use when an action is illegal and dangerous."
              },
              {
                "word": "Should",
                "meaning": "Strong Recommendation",
                "example": "The builder should lower the crane boom at night.",
                "tip": "Best practice and advice, but not an absolute legal duty."
              },
              {
                "word": "May",
                "meaning": "Allowed / Optional",
                "example": "The contractor may apply for a special night permit.",
                "tip": "Use when an option or permission is available."
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
                "rationale": "This is a mandatory safety rule required by GM1 CS-ADR-DSN.H.415(b)."
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
                "rationale": "Clause H.415(e) strictly forbids new obstacles penetrating the approach surface."
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
                "rationale": "This is a strong recommended safety precaution."
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
                "rationale": "The operator has the permission and authority to approve it if safe."
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
                "rationale": "High-visibility gear is an absolute mandatory safety requirement."
              }
            ]
          },
          "spokenActivity": {
            "title": "Activity 4: Speaking Role-Play: Talking to the Builder (35 mins)",
            "summary": "Role-play a polite, professional discussion between a GSEA safety officer and a construction contractor.",
            "modeBadges": [
              "Groups of 3",
              "Spoken Role-Play",
              "Timing: 35 mins"
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
                ]
              },
              {
                "title": "Student B: Construction Manager",
                "badge": "Project & Deadlines",
                "bullets": [
                  "Explain that delays cost €15,000 per day in rented equipment.",
                  "Argue that the crane is off to the side and not directly in front of the runway.",
                  "Try to negotiate starting earlier, but agree to safety lights and night work if necessary."
                ]
              },
              {
                "title": "Student C: Observer & Coach",
                "badge": "Peer Feedback",
                "bullets": [
                  "Listen carefully to both speakers.",
                  "Check: Did Student A use correct rule words (shall, must, should)?",
                  "Check: Was the conversation polite and professional?",
                  "Give 2 positive points and 1 suggestion for improvement."
                ]
              }
            ],
            "usefulPhrases": [
              "According to EASA safety rules, we cannot allow...",
              "I completely understand your deadline, but flight safety is our top priority.",
              "The problem is that the crane penetrates the approach safety surface by 6 metres.",
              "What we can propose instead is...",
              "If you agree to work only at night and install red lights, we can approve it.",
              "Let's write down this agreement so both sides are protected."
            ]
          },
          "safetyCheck": {
            "title": "Activity 5: Safety Check: What Could Go Wrong? (15 mins)",
            "summary": "Work together to evaluate the crane hazard and confirm the safety decision.",
            "modeBadges": [
              "Whole Class / Pairs",
              "Safety Evaluation",
              "Timing: 15 mins"
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
                "answer": "A contractor wants to place a 48m crane near Runway 09 with only 24 hours notice, penetrating the approach surface by 6m."
              },
              {
                "question": "2. What could happen?",
                "answer": "An approaching plane in bad weather or low visibility could collide with the crane, or pilots could get distracted."
              },
              {
                "question": "3. How do we fix it?",
                "answer": "1) Reduce crane height to 38m maximum.<br>2) Install medium-intensity flashing red obstacle lights.<br>3) Restrict crane operations to night runway closure (23h00–05h00).<br>4) Issue an official NOTAM to all airlines."
              },
              {
                "question": "4. Our Decision",
                "answer": "APPROVED WITH CONDITIONS: The contractor may proceed once the 4 protective steps are verified on site."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 1 Revision - EASA Rules & Airport Obstacle Safeguarding",
          "summary": "30 essential operational and regulatory vocabulary terms for GSEA students covering EASA document navigation, obstacle limitation surfaces, and rules.",
          "terms": [
            {
              "num": "01",
              "term": "EASA",
              "definition": "European Union Aviation Safety Agency: the civil aviation authority setting safety rules across Europe."
            },
            {
              "num": "02",
              "term": "Regulation",
              "definition": "A binding law that all European airports and airlines must follow 100% by law."
            },
            {
              "num": "03",
              "term": "Guidance Material (GM)",
              "definition": "Advisory text explaining how to understand and apply official aviation rules in practice."
            },
            {
              "num": "04",
              "term": "Acceptable Means of Compliance (AMC)",
              "definition": "Standards and specifications showing one approved way to satisfy an official regulation."
            },
            {
              "num": "05",
              "term": "Mandatory",
              "definition": "Required by law; something that you have no choice but to do."
            },
            {
              "num": "06",
              "term": "Shall",
              "definition": "The formal legal word indicating an absolute obligation in aviation regulations."
            },
            {
              "num": "07",
              "term": "Should",
              "definition": "The formal word indicating a strong recommendation or best practice, but not an absolute law."
            },
            {
              "num": "08",
              "term": "May",
              "definition": "The formal word indicating permission or an optional course of action."
            },
            {
              "num": "09",
              "term": "Prohibited",
              "definition": "Strictly forbidden by law; completely banned."
            },
            {
              "num": "10",
              "term": "Obstacle",
              "definition": "Any fixed or mobile object that extends above defined safety heights around an airport."
            },
            {
              "num": "11",
              "term": "Obstacle Limitation Surface (OLS)",
              "definition": "An imaginary safety surface in the sky defining airspace that must remain free of tall objects."
            },
            {
              "num": "12",
              "term": "Approach Surface",
              "definition": "An inclined safety plane extending outward and upward from before the runway threshold."
            },
            {
              "num": "13",
              "term": "Threshold",
              "definition": "The beginning of that portion of the runway usable for landing."
            },
            {
              "num": "14",
              "term": "Gradient",
              "definition": "The rate of slope or incline of a surface, expressed as a percentage or ratio (e.g., 2% or 1:50)."
            },
            {
              "num": "15",
              "term": "Penetrate",
              "definition": "To cross or extend through an imaginary safety surface, creating an illegal hazard."
            },
            {
              "num": "16",
              "term": "Shielding",
              "definition": "The principle where an obstacle is protected because a larger, permanent object already stands in front of it."
            },
            {
              "num": "17",
              "term": "Safeguarding",
              "definition": "The legal process of protecting airport airspace from dangerous construction and tall obstacles."
            },
            {
              "num": "18",
              "term": "Notice to Airmen (NOTAM)",
              "definition": "An official telecommunication message alerting pilots about temporary hazards or changes at an airport."
            },
            {
              "num": "19",
              "term": "Obstacle Warning Light",
              "definition": "A red or white flashing light placed on tall structures so pilots can see them at night."
            },
            {
              "num": "20",
              "term": "Boom",
              "definition": "The long lifting arm of a construction crane."
            },
            {
              "num": "21",
              "term": "Aerodrome Reference Point (ARP)",
              "definition": "The designated geographic centre point of an airport."
            },
            {
              "num": "22",
              "term": "Prior Notification",
              "definition": "Official advance warning required before starting building works near an aerodrome (e.g., 28 days)."
            },
            {
              "num": "23",
              "term": "Contractor",
              "definition": "A construction company hired to perform building or maintenance works."
            },
            {
              "num": "24",
              "term": "Compliance",
              "definition": "Full adherence and obedience to established laws, standards, and safety specifications."
            },
            {
              "num": "25",
              "term": "Non-Compliance",
              "definition": "A failure to follow a mandatory aviation safety rule."
            },
            {
              "num": "26",
              "term": "Oversight",
              "definition": "The ongoing monitoring and inspection of airports by civil aviation authorities to ensure safety."
            },
            {
              "num": "27",
              "term": "Safety Margin",
              "definition": "An extra buffer of distance or time added to ensure operations remain safe even if an error occurs."
            },
            {
              "num": "28",
              "term": "AIP (Aeronautical Information Publication)",
              "definition": "The permanent official handbook containing airport operational data, charts, and procedures."
            },
            {
              "num": "29",
              "term": "Temporary Restriction",
              "definition": "A short-term limitation placed on flights or airport operations during construction works."
            },
            {
              "num": "30",
              "term": "Safety Check",
              "definition": "A simple step-by-step review asking: What is the problem? What could happen? How do we fix it?"
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Armed Pilots & Cockpit Defense",
              "watchUrl": "https://www.youtube.com/watch?v=udS812jbAiE",
              "tag": "Security & Policy",
              "videoId": "udS812jbAiE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/udS812jbAiE",
              "caption": "Focus: Examine the legal debates, psychological screening, and operational safety rules of the Federal Flight Deck Officer (FFDO) armed pilot program."
            },
            {
              "title": "Video 2: Aircraft Turnaround Efficiency",
              "watchUrl": "https://www.youtube.com/watch?v=EiKeGmkX6fY",
              "tag": "Airline Operations",
              "videoId": "EiKeGmkX6fY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/EiKeGmkX6fY",
              "caption": "Focus: Analyze ramp handling coordination, turnaround sequence choreography, refueling protocols, and rapid passenger deplaning/boarding."
            },
            {
              "title": "Video 3: The Future of Aviation Propulsion",
              "watchUrl": "https://www.youtube.com/watch?v=7KkBE0HgNJQ",
              "tag": "Clean Technology",
              "videoId": "7KkBE0HgNJQ",
              "embedUrl": "https://www.youtube-nocookie.com/embed/7KkBE0HgNJQ",
              "caption": "Focus: Compare cryogenic hydrogen fuel tanks, battery weight limitations, and hybrid propulsion systems for regional air travel."
            }
          ],
          "articles": [
            {
              "topic": "Cabin Safety & Passenger Behavior",
              "sourceTag": "Aviation Safety Weekly",
              "heading": "Zero Tolerance at 35,000 Feet: Should Airlines Enact Strict Airport and In-Flight Alcohol Bans?",
              "snippet": "Following an increase in violent in-flight incidents, flight attendants' unions and international aviation regulators debate whether pre-departure airport bar sales and in-flight alcohol service require mandatory statutory limits.",
              "readTime": "Estimated read: 4 mins",
              "url": "https://www.iata.org/en/pressroom/2023-releases/2023-06-05-01/"
            },
            {
              "topic": "Passenger Rights & Regulation",
              "sourceTag": "Air Transport Law Journal",
              "heading": "EU261 and Extraordinary Circumstances: Balancing Passenger Redress with Carrier Viability",
              "snippet": "How European compensation rules for 3-hour flight delays impact legacy and budget airlines during air traffic management industrial actions and adverse weather, and where passenger rights draw the line.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://transport.ec.europa.eu/transport-themes/passenger-rights/air_en"
            }
          ],
          "resources": [
            {
              "url": "https://www.icao.int/Security/Pages/default.aspx",
              "tag": "01 • Global Security",
              "name": "ICAO Aviation Security (AVSEC)",
              "desc": "Official international standards on cockpit barriers, unruly passengers, and unlawful interference countermeasures."
            },
            {
              "url": "https://www.tsa.gov/for-industry/law-enforcement-programs",
              "tag": "02 • Cockpit Defense",
              "name": "TSA Federal Flight Deck Officer (FFDO)",
              "desc": "Protocols, firearm qualification guidelines, and legal authorities governing armed commercial flight crew."
            },
            {
              "url": "https://www.easa.europa.eu/en/domains/environment",
              "tag": "03 • Noise Standards",
              "name": "EASA Environmental Noise & Emissions",
              "desc": "European aviation environmental portal tracking noise abatement climb procedures, curfews, and decibel limits."
            },
            {
              "url": "https://www.clean-aviation.eu",
              "tag": "04 • Future Propulsion",
              "name": "Clean Aviation Joint Undertaking",
              "desc": "European public-private initiative developing hydrogen combustion engines and hybrid-electric commuter aircraft."
            },
            {
              "url": "https://aci.aero",
              "tag": "05 • Airport Operations",
              "name": "Airports Council International (ACI World)",
              "desc": "Global operational benchmarks on passenger terminal handling, turnaround efficiency, and apron safety."
            },
            {
              "url": "https://europa.eu/youreurope/citizens/travel/passenger-rights/air/index_en.htm",
              "tag": "06 • Passenger Rights",
              "name": "European Commission Air Passenger Rights",
              "desc": "Statutory European consumer protection guide on long tarmac delays, missed connections, and cancellations."
            }
          ],
          "grammar": {
            "title": "Modal Verbs of Obligation, Permission & Prohibition",
            "badge": "B1–B2 Grammar Focus",
            "patternTitle": "Regulatory Formula",
            "formula": "Subject + Modal / Semi-Modal + Base Verb (Infinitive)",
            "rulesTitle": "Core Regulatory Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Strict Obligation (Must / Have to / Be required to):</strong> Mandatory safety rules (<em>\"All commercial aircrew <strong>must carry</strong> government credentials\"</em> / <em>\"Passengers <strong>are required to follow</strong> crew instructions\"</em>).",
              "<strong style=\"color: #1e293b;\">2. Strict Prohibition (Must not / May not / Be prohibited from):</strong> Unlawful actions (<em>\"Travelers <strong>are strictly prohibited from entering</strong> the flight deck without authorization\"</em>).",
              "<strong style=\"color: #1e293b;\">3. Official Permission (May / Can / Be authorized to):</strong> Legal authorization (<em>\"Deputized Federal Flight Deck Officers <strong>are authorized to carry</strong> defensive equipment in flight\"</em>).",
              "<strong style=\"color: #1e293b;\">4. Operational Recommendations (Should / Be advised to):</strong> Best practice guidelines (<em>\"Carriers <strong>should notify</strong> passengers of schedule revisions in advance\"</em>)."
            ],
            "trap": "<strong>⚠️ TOEIC Part 5 Verb Pattern Alert:</strong> Pure modals (<em>must, may, should, can</em>) are always followed directly by the bare infinitive (no \"to\"). Regulatory semi-modals require <strong>to + verb</strong> (<em>is required to submit</em>, <em>is authorized to board</em>) or preposition + gerund (<em>prohibited from smoking</em>).",
            "examplesTitle": "Aerodrome & Security Examples",
            "examples": [
              "<em>\"Flight attendants <strong>must verify</strong> that all overhead compartments are securely latched before taxi.\"</em>",
              "<em>\"Under EU261 regulations, delayed travelers <strong>are entitled to receive</strong> meals and hotel accommodation.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Under revised flight deck defense protocols, certified airline captains are officially authorized ________ defensive equipment exclusively inside the cockpit.",
            "options": [
              {
                "letter": "A",
                "text": "carry"
              },
              {
                "letter": "B",
                "text": "to carry"
              },
              {
                "letter": "C",
                "text": "carrying"
              },
              {
                "letter": "D",
                "text": "carried"
              }
            ],
            "correctLetter": "B",
            "correctText": "to carry",
            "analysis": "The passive semi-modal construction \"be authorized + to-infinitive\" governs official permissions in workplace safety and TOEIC Part 5 grammar.",
            "strategy": "Memorize the three regulatory verb patterns: (1) modal + bare verb, (2) be required/authorized + to + verb, and (3) be prohibited from + -ing."
          },
          "toeicQuestions": [
            {
              "id": 1,
              "stem": "A construction contractor arrives at the airport management office at 16h00 on Friday. He requests same-day verbal approval to erect a 42-metre mobile crane tomorrow morning 1.5 km from the runway. Under EASA obstacle safeguarding rules, what is the required operational action?",
              "options": [
                {
                  "letter": "A",
                  "text": "Grant immediate verbal permission if the contractor agrees to paint the crane bright yellow."
                },
                {
                  "letter": "B",
                  "text": "Refuse permission: cranes exceeding 25m within 4km require written notification at least 28 days in advance so obstacle surfaces and NOTAMs can be evaluated."
                },
                {
                  "letter": "C",
                  "text": "Advise the builder to call approaching airline pilots on VHF radio."
                },
                {
                  "letter": "D",
                  "text": "Approve the request provided the crane only operates during windy weather."
                }
              ],
              "correctLetter": "B",
              "correctText": "Refuse permission: cranes exceeding 25m within 4km require written notification at least 28 days in advance so obstacle surfaces and NOTAMs can be evaluated.",
              "analysis": "GM1 CS-ADR-DSN.H.415 specifies that mobile obstacles exceeding 25m within 4km of an aerodrome require written notification at least 28 calendar days prior to assembly to assess penetration of obstacle limitation surfaces and coordinate NOTAM issuance.",
              "strategy": "Remember the 28-day rule: airport operators need advance time to calculate surface slopes, mandate obstacle lighting, and publish NOTAMs for flight crews."
            },
            {
              "id": 2,
              "stem": "An aerodrome safety trainee writes four statements explaining EASA regulatory documents. Spot the statement that contains a DANGEROUS ERROR:",
              "options": [
                {
                  "letter": "A",
                  "text": "Acceptable Means of Compliance (AMC) demonstrate an approved specification to meet a regulation."
                },
                {
                  "letter": "B",
                  "text": "The word 'shall' in EASA rules indicates a mandatory obligation that must be obeyed 100%."
                },
                {
                  "letter": "C",
                  "text": "Guidance Material (GM) is a legally binding law, and airports can be fined for not following GM advice word-for-word."
                },
                {
                  "letter": "D",
                  "text": "New obstacles are strictly prohibited from penetrating the runway approach surface unless shielded."
                }
              ],
              "correctLetter": "C",
              "correctText": "Guidance Material (GM) is a legally binding law, and airports can be fined for not following GM advice word-for-word.",
              "analysis": "Statement C is false and legally inaccurate. Guidance Material (GM) is explanatory, advisory text—it is NOT legally binding law. Mandatory requirements are set in Regulations and Certification Specifications using the word 'shall'.",
              "strategy": "Distinguish 'Binding Law' (Regulations, Implementing Rules) from 'Advisory Guides' (Guidance Material). GM helps explain how to follow rules, but is not law itself."
            },
            {
              "id": 3,
              "stem": "An engineering consultancy submits runway expansion plans. CS-ADR-DSN.H.415 stipulates that precision runways shall have an approach surface slope not exceeding 2.0% (1:50 gradient), but the draft plans show a 3.5% gradient. What is the required outcome?",
              "options": [
                {
                  "letter": "A",
                  "text": "The design is acceptable because 'shall' indicates an optional recommendation."
                },
                {
                  "letter": "B",
                  "text": "The design cannot be approved as standard because a 3.5% approach slope penetrates the mandatory 2.0% maximum gradient."
                },
                {
                  "letter": "C",
                  "text": "The plans are compliant if the airport only serves daytime turboprop flights."
                },
                {
                  "letter": "D",
                  "text": "The engineering consultancy can redefine the 2.0% gradient in their private company handbook."
                }
              ],
              "correctLetter": "B",
              "correctText": "The design cannot be approved as standard because a 3.5% approach slope penetrates the mandatory 2.0% maximum gradient.",
              "analysis": "The word 'shall' establishes a mandatory specification. A 3.5% approach slope is steeper than the 2.0% (1:50) ceiling, creating an unacceptable obstacle hazard without formal national authority exemption.",
              "strategy": "In European aerodrome specifications, 'shall' = zero choice. Any design exceeding a numerical 'shall' ceiling is non-compliant."
            },
            {
              "id": 4,
              "stem": "An airport safety officer drafts a NOTAM to warn pilots about a mobile crane operating near Runway 27. Which statement contains an OPERATIONAL ERROR?",
              "options": [
                {
                  "letter": "A",
                  "text": "The NOTAM indicates the exact maximum height of the crane boom above ground level."
                },
                {
                  "letter": "B",
                  "text": "The NOTAM confirms that medium-intensity flashing red obstacle lights are installed on the crane jib."
                },
                {
                  "letter": "C",
                  "text": "The NOTAM assures pilots that the crane will automatically detect approaching aircraft and lower itself into the grass."
                },
                {
                  "letter": "D",
                  "text": "The NOTAM specifies the valid operating dates and daily working hours of the crane."
                }
              ],
              "correctLetter": "C",
              "correctText": "The NOTAM assures pilots that the crane will automatically detect approaching aircraft and lower itself into the grass.",
              "analysis": "Statement C is completely fictitious and dangerous. Construction cranes do not automatically lower themselves. NOTAMs inform pilots of hazards so flight crews maintain visual vigilance and observe approach safety margins.",
              "strategy": "A NOTAM provides operational facts (location, elevation, lighting, dates); it does not replace pilot vigilance or physical safeguarding."
            },
            {
              "id": 5,
              "stem": "A large freight hangar already stands 30 metres high 800m from Runway 09. A developer requests permission to build a small 18m storage annex directly behind the existing hangar. Why may this annex be approved under obstacle rules?",
              "options": [
                {
                  "letter": "A",
                  "text": "Because storage annexes are exempt from all aviation safety rules."
                },
                {
                  "letter": "B",
                  "text": "Under the 'shielding principle', an obstacle does not create a new hazard if it sits entirely within the shadow of an existing permanent, immovable structure."
                },
                {
                  "letter": "C",
                  "text": "Because any building under 20 metres is automatically approved near runways."
                },
                {
                  "letter": "D",
                  "text": "Because the freight hangar operator agreed to pay double airport landing fees."
                }
              ],
              "correctLetter": "B",
              "correctText": "Under the 'shielding principle', an obstacle does not create a new hazard if it sits entirely within the shadow of an existing permanent, immovable structure.",
              "analysis": "CS-ADR-DSN.H.415(e) allows exceptions to approach surface prohibitions when a new object is shielded by an existing immovable obstacle that already penetrates the surface.",
              "strategy": "Look for the shielding principle: if an immovable building is already blocking the sky, a smaller building directly behind it does not introduce new risk."
            }
          ],
          "pageUrl": "session1/admat_aas1.html",
          "quizTitle": "Airside Scenario Quiz • EASA Rules & Obstacle Safeguarding",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Operational Dilemmas & Rule Spot-Checks"
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Safety Alerts & Ramp Inspections Objectives",
          "summary": "By the end of this session, GSEA students will be able to distinguish mandatory Safety Orders from advisory Bulletins, use gentle, polite sentences (passive voice) during safety audits, read an authentic EASA Ramp Speed Alert (+50% length), participate in a 3-student ramp safety inspection meeting, and complete a simple Safety Check.",
          "items": [
            {
              "num": 1,
              "title": "Share Airport Ramp Experiences (Fluency & Spontaneous Speech)",
              "description": "Discuss the busiest and most dangerous areas of an airport ramp and identify top safety hazards."
            },
            {
              "num": 2,
              "title": "Understand Safety Notices (Orders vs. Bulletins)",
              "description": "Learn the clear difference between a mandatory Safety Order (SD) and an advisory Safety Bulletin (SIB)."
            },
            {
              "num": 3,
              "title": "Key Words for Ramp Safety (Vocabulary Focus)",
              "description": "Learn and use essential ramp vocabulary: speed limit, ground vehicle, high-visibility vest, fix-it plan (corrective action), and close call (near-miss)."
            },
            {
              "num": 4,
              "title": "Polite Language for Inspections (Gentle Passive Voice)",
              "description": "Practice asking polite, non-blaming questions during safety checks using gentle sentences (\"It was observed that...\", \"Could you explain how...?\")."
            },
            {
              "num": 5,
              "title": "Read the EASA Ramp Speed Alert (Authentic Document Scanning)",
              "description": "Scan EASA SIB No. 2024-11 on ground vehicle speeding and near-misses around parked aircraft (+50% length)."
            },
            {
              "num": 6,
              "title": "Ramp Inspection Meeting & Safety Check (Spoken Role-Play)",
              "description": "Role-play a 3-person safety discussion between an inspector, ramp supervisor, and handler, and complete the Safety Check."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session on apron safety, EASA Safety Information Bulletins, gentle phrasing during safety inspections, a ramp speed meeting role-play, and a simple Safety Check.",
          "items": [
            {
              "time": "00-15",
              "title": "Part 1: Warm-up: Danger on the Ramp (15 mins)",
              "description": "Pairs brainstorm ramp hazards (tugs, fuel, jet blast, night shifts) and test entry knowledge with 4 spot-check questions."
            },
            {
              "time": "15-45",
              "title": "Part 2: Reading the EASA Ramp Speed Alert (30 mins)",
              "description": "Reading simulated EASA SIB No. 2024-11 (+50% length) on vehicle speeding, telematics, and the 30-day fix-it plan timeline."
            },
            {
              "time": "45-70",
              "title": "Part 3: Polite Language for Inspections (25 mins)",
              "description": "Language clinic on gentle phrasing and passive voice to describe safety findings objectively without blaming individuals."
            },
            {
              "time": "70-105",
              "title": "Part 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)",
              "description": "3-student role-play between a GSEA Safety Auditor, Ground Handling Ramp Supervisor, and Airport Operations Manager to agree on a fix-it plan."
            },
            {
              "time": "105-120",
              "title": "Part 5: Safety Check: What Could Go Wrong? (15 mins)",
              "description": "Evaluating speeding baggage tugs, collision risks, speed limiters, toolbox talks, and deciding on compliance approval."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Safety Alerts & Ramp Inspections",
            "subtitle": "Apron Vehicle Safety, Objective Phrasing & Fix-It Plans",
            "image": "images/s3_m1_session2_audit.jpg",
            "targetLevel": "CEFR B1–B2",
            "roleContext": "GSEA Student Training • Apron Safety & Ground Operations",
            "duration": "120 Minutes"
          },
          "openingSession": {
            "title": "Activity 1: Warm-up: Danger on the Ramp (15 mins)",
            "summary": "Brainstorm airside hazards and check your understanding of airport safety alerts.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Brainstorm",
              "Timing: 15 mins"
            ],
            "instructions": [
              "In pairs, brainstorm the 3 biggest physical dangers for people working on an airport ramp.",
              "Read each of the 4 Entry Check questions below and discuss your thoughts.",
              "Click 'Reveal Answer' to check your reasoning."
            ],
            "deliverable": "Identified top 3 ramp hazards and completed 4-question check.",
            "teacherNotes": "Ramp safety is practical and visual. Encourage students to think of real airport ramps they know (Toulouse, Paris CDG, etc.) where dozens of vehicles move around parked jets.",
            "newsPrompts": [
              {
                "id": 1,
                "question": "Why is the ramp (apron) considered the most dangerous work zone at an airport?",
                "exampleAnswers": [
                  "Because dozens of different operations happen at the same time in a small area: moving aircraft, baggage tugs, fuel trucks, catering lifts, and technicians walking between stands.",
                  "Also, jet engines produce dangerous suction in front and extreme blast behind, and high noise levels make it hard to hear approaching vehicles."
                ]
              },
              {
                "id": 2,
                "question": "What happens when ground handlers are in a hurry to turn around a delayed flight?",
                "exampleAnswers": [
                  "Drivers are tempted to exceed speed limits or skip visual checks, which dramatically increases the risk of clipping an aircraft wing or running over equipment.",
                  "Rushing also leads to communication breakdowns between the marshaller, the tug driver, and the pushback crew."
                ]
              },
              {
                "id": 3,
                "question": "Who do you think has right-of-way when a baggage tractor meets an aircraft being towed?",
                "exampleAnswers": [
                  "The aircraft always has absolute right-of-way! Aircraft have massive blind spots, cannot stop quickly, and are extremely expensive to repair if scratched.",
                  "Ground support vehicles must always yield, stop at a safe distance, and wait for the aircraft to pass completely."
                ]
              }
            ],
            "diagnostic": {
              "title": "Ramp Safety & Notice Spot-Check",
              "instructions": "Discuss each question with your partner, then click to reveal the answer.",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between a Safety Directive (SD) and a Safety Information Bulletin (SIB)?",
                  "answer": "A Safety Directive is a mandatory legal order requiring immediate action. A Safety Information Bulletin (SIB) is an advisory alert sharing safety lessons and recommended precautions."
                },
                {
                  "id": 2,
                  "q": "What does 'FOD' stand for, and why is it so dangerous on the ramp?",
                  "answer": "Foreign Object Debris (trash, bolts, tools, stones). Jet engines can suck them in and suffer catastrophic internal damage."
                },
                {
                  "id": 3,
                  "q": "What is an 'Airside Driving Permit' (ADP)?",
                  "answer": "A special license required by airport authorities before any driver is legally permitted to operate vehicles on taxiways and aprons."
                },
                {
                  "id": 4,
                  "q": "What is a 'Near-Miss' (or close call)?",
                  "answer": "An unplanned incident that did not cause damage or injury this time, but could have caused a serious accident under slightly different conditions."
                }
              ]
            }
          },
          "documentExtract": {
            "title": "Activity 2: Reading the EASA Ramp Speed Alert (30 mins)",
            "summary": "Scan an authentic Safety Information Bulletin on ground vehicle speed compliance.",
            "modeBadges": [
              "Pairs or Small Groups",
              "Document Scanning",
              "Timing: 30 mins"
            ],
            "instructions": [
              "Read the simulated EASA SIB No. 2024-11 below.",
              "Look for key speed limits, equipment types, and deadlines.",
              "Answer the 4 reading comprehension questions with your partner.",
              "Click 'Reveal Answer' to check your answers."
            ],
            "deliverable": "Completed answers to all 4 reading questions with exact paragraph citations.",
            "teacherNotes": "Emphasize how SIBs present real-world data (14% increase in incidents) followed by practical recommendations. Guide students to notice the difference between general circulation lanes (20 km/h) and the red aircraft stand box (5 km/h).",
            "docRef": "EASA Safety Information Bulletin • SIB No. 2024-11",
            "docText": "[EUROPEAN UNION AVIATION SAFETY AGENCY — SAFETY INFORMATION BULLETIN]\nSIB No.: 2024-11 • Issued: 18 April 2024\nSubject: Ground Support Equipment (GSE) Speed Compliance and Apron Safety Management\nApplicability: Aerodrome Operators, Ground Handling Service Providers, and National Competent Authorities\n\n1. Operational Background\n(a) Recent safety occurrence data collected under Regulation (EU) No 376/2014 indicates a 14% rise in ground collisions and near-miss occurrences on aerodrome aprons within the European Union during the last calendar year.\n(b) The majority of reported occurrences involved ground support equipment (GSE), specifically baggage tractors, passenger transport buses, and catering hi-lift trucks operating in excess of posted airside speed limits.\n(c) Multiple occurrences resulted in severe airframe damage, including punctured fuselage skin, crushed engine cowlings, and broken pitot-static probes, requiring aircraft to be grounded for extensive structural repairs.\n\n2. EASA Safety Recommendations\nAerodrome Operators and Ground Handling Service Providers are strongly urged to apply the following safety measures:\n(a) Speed Limit Harmonisation: Implement and strictly enforce a maximum apron speed limit of 20 km/h (12 mph) in general apron circulation lanes, and a reduced speed limit of 5 km/h (3 mph) within the immediate aircraft stand safety area (the red painted boundary surrounding parked aircraft).\n(b) Telematics & Vehicle Tracking: Equip motorized airside vehicles with GPS telematics speed-monitoring devices and automatic warning alarms for unauthorized acceleration.\n(c) Driver Competency & Annual Refresher: Mandate that all airside driving permit (ADP) holders complete annual recurrent training on apron driving hazards, blind spots, and right-of-way rules (aircraft under tow and taxiing aircraft always hold absolute right-of-way).\n(d) Enforcement & Sanctions: Conduct weekly random speed checks using radar speed guns and establish a progressive disciplinary penalty policy for speeding infractions, including temporary suspension of airside access.\n\n3. Corrective Action Plan (Fix-It Plan) Timeline\nGround handling organisations issued with a safety non-compliance notice by aerodrome safety inspectors shall submit a written Fix-It Plan within 30 calendar days of receipt. The plan shall detail root-cause analysis, training records, and verified vehicle governor installations.",
            "questions": [
              {
                "id": 1,
                "q": "What two speed limits does EASA recommend for general lanes and aircraft stand boxes?",
                "answer": "A maximum of 20 km/h in general apron lanes, and strictly 5 km/h inside the red aircraft stand safety box."
              },
              {
                "id": 2,
                "q": "What types of ground vehicles were most frequently involved in speeding incidents?",
                "answer": "Paragraph 1(b) lists baggage tractors, passenger transport buses, and catering hi-lift trucks."
              },
              {
                "id": 3,
                "q": "Who always holds absolute right-of-way over ground vehicles on the apron?",
                "answer": "Paragraph 2(c) states aircraft under tow and taxiing aircraft always hold absolute right-of-way."
              },
              {
                "id": 4,
                "q": "How many days does a company have to submit their written Fix-It Plan after an inspection notice?",
                "answer": "Paragraph 3 specifies that the written Fix-It Plan must be submitted within 30 calendar days of receipt."
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: Polite Language for Inspections: The Gentle Passive Voice (25 mins)",
            "summary": "Learn how to describe safety problems objectively and politely without attacking individuals.",
            "modeBadges": [
              "Individual & Pairs",
              "Language Clinic",
              "Timing: 25 mins"
            ],
            "instructions": [
              "Read the comparison table below showing Harsh vs. Polite Inspection language.",
              "Notice how using the passive voice ('was observed', 'were not worn') removes personal blame and sounds professional.",
              "Complete the 5 rewriting exercises, then click 'Check Answer' to see the recommended phrasing."
            ],
            "deliverable": "5 professional, non-confrontational inspection statements written and practiced aloud.",
            "teacherNotes": "In aviation safety culture, we inspect systems and behaviours, not personalities. When inspectors say 'You didn't do this!', people get defensive and hide mistakes. When they say 'It was observed that...', the conversation stays constructive.",
            "rulesTable": [
              {
                "word": "Confrontational (Harsh ❌)",
                "meaning": "Attacks the person",
                "example": "You parked the tug in the wrong place!",
                "tip": "Causes defensive arguments."
              },
              {
                "word": "Professional (Polite ✅)",
                "meaning": "Describes the facts gently",
                "example": "The vehicle was observed parked outside the marked safety bay.",
                "tip": "Keeps people calm and focused on safety."
              },
              {
                "word": "Confrontational (Harsh ❌)",
                "meaning": "Blames the driver",
                "example": "Your driver was speeding like crazy!",
                "tip": "Sounds emotional and unscientific."
              },
              {
                "word": "Professional (Polite ✅)",
                "meaning": "Quotes the recorded data",
                "example": "A ground vehicle was recorded travelling at 38 km/h in a 20 km/h zone.",
                "tip": "Objective, factual, and undeniable."
              }
            ],
            "drills": [
              {
                "id": 1,
                "sentence": "Rewrite: 'Your driver didn't wear his high-visibility vest this morning.'",
                "options": [
                  "A high-visibility vest was not worn by the driver during morning operations.",
                  "Your driver failed completely to wear his vest today.",
                  "Tell your driver to put a vest on immediately."
                ],
                "correct": "A high-visibility vest was not worn by the driver during morning operations.",
                "rationale": "Using the passive voice describes the missing safety gear without an aggressive accusation."
              },
              {
                "id": 2,
                "sentence": "Rewrite: 'You left the luggage belt loader blocking the taxi lane.'",
                "options": [
                  "The belt loader was observed positioned inside the active taxi lane.",
                  "You are creating a huge hazard with your belt loader.",
                  "Who left this stupid machine in the taxi lane?"
                ],
                "correct": "The belt loader was observed positioned inside the active taxi lane.",
                "rationale": "Factual and neutral: focuses on where the machine was found."
              },
              {
                "id": 3,
                "sentence": "Rewrite: 'You guys never do your vehicle maintenance checks!'",
                "options": [
                  "Routine vehicle maintenance logs have not been updated for the past 14 days.",
                  "Your maintenance is totally unacceptable.",
                  "Why do you hate doing maintenance?"
                ],
                "correct": "Routine vehicle maintenance logs have not been updated for the past 14 days.",
                "rationale": "Points directly to the missing paperwork rather than insulting the team."
              },
              {
                "id": 4,
                "sentence": "Rewrite: 'Your team didn't report that scratch on the engine cowling.'",
                "options": [
                  "A minor cowling scratch was identified during pre-flight, but no occurrence report was logged.",
                  "You tried to hide an engine scratch from our inspectors.",
                  "Explain why you hid this damage!"
                ],
                "correct": "A minor cowling scratch was identified during pre-flight, but no occurrence report was logged.",
                "rationale": "States what was found and what was missing in an objective report format."
              },
              {
                "id": 5,
                "sentence": "Rewrite: 'You are driving way too fast around the airplane.'",
                "options": [
                  "The tug was recorded exceeding the 5 km/h stand limit during the turnaround.",
                  "Slow down or I will take your badge right now!",
                  "Do you want to crash into the wing?"
                ],
                "correct": "The tug was recorded exceeding the 5 km/h stand limit during the turnaround.",
                "rationale": "Cites the specific recorded speed limit violation calmly."
              }
            ]
          },
          "spokenActivity": {
            "title": "Activity 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)",
            "summary": "Role-play a constructive 3-person safety meeting between an auditor, a ramp supervisor, and operations.",
            "modeBadges": [
              "Groups of 3",
              "Spoken Role-Play",
              "Timing: 35 mins"
            ],
            "instructions": [
              "Form groups of 3: Student A (GSEA Safety Auditor), Student B (Ground Handling Ramp Supervisor), Student C (Airport Operations Manager).",
              "Read your role instructions and prepare your talking points (5 mins).",
              "Conduct the 7-minute meeting using polite, non-blaming language.",
              "Agree on a realistic 30-day Fix-It Plan (Corrective Action Plan)."
            ],
            "deliverable": "Agreed 3-point Fix-It Plan recorded by all 3 participants.",
            "teacherNotes": "Walk around and listen for gentle passive phrasing. Help Student B balance flight departure pressure with safety rules. Ensure Student C keeps the meeting productive.",
            "scenario": "During an audit at 07h30, an inspector recorded two baggage tugs driving at 38 km/h in a 20 km/h zone. One driver was not wearing a high-vis vest and admitted he skipped his annual refresher training because the team was short-staffed.",
            "roles": [
              {
                "title": "Student A: GSEA Safety Auditor",
                "badge": "Safety Inspection",
                "bullets": [
                  "Present the audit findings calmly using polite passive sentences.",
                  "Refer to EASA SIB No. 2024-11 regarding speed limits and training.",
                  "Request a written Fix-It Plan with 3 specific corrective steps within 30 days."
                ]
              },
              {
                "title": "Student B: Ground Handling Ramp Supervisor",
                "badge": "Flight Turnarounds",
                "bullets": [
                  "Acknowledge the findings without making aggressive excuses.",
                  "Explain that the morning flight had a 20-minute slot delay and baggage handlers were rushing.",
                  "Propose 3 practical fixes: speed limiters on tugs, weekly 10-minute toolbox talks, and immediate refresher courses."
                ]
              },
              {
                "title": "Student C: Airport Operations Manager",
                "badge": "Meeting Leader",
                "bullets": [
                  "Keep the tone positive and constructive: safety is our joint responsibility.",
                  "Verify that the proposed fixes are realistic and have clear deadlines.",
                  "Schedule a follow-up spot check in 14 days."
                ]
              }
            ],
            "usefulPhrases": [
              "Thank you for meeting today. During our morning inspection, several speed violations were recorded...",
              "We understand flight turnarounds are demanding, but safety margins must be maintained.",
              "What concrete steps can your company take to prevent this from happening again?",
              "We can install mechanical speed governors on all baggage tugs within two weeks.",
              "We will also hold mandatory 10-minute safety briefings before every morning shift.",
              "Let's schedule a follow-up check in two weeks to confirm that these measures are working."
            ]
          },
          "safetyCheck": {
            "title": "Activity 5: Safety Check: What Could Go Wrong? (15 mins)",
            "summary": "Complete the ramp speed safety check and agree on the final audit decision.",
            "modeBadges": [
              "Whole Class / Pairs",
              "Safety Evaluation",
              "Timing: 15 mins"
            ],
            "instructions": [
              "Review the 4 simple questions in the Safety Check table below.",
              "Discuss why each step is necessary in plain English.",
              "Verify the audit approval decision."
            ],
            "deliverable": "Completed Safety Check table verified by all students.",
            "teacherNotes": "Reinforce that an inspection is only successful when the fix-it plan actually prevents the next accident.",
            "rows": [
              {
                "question": "1. What is the problem?",
                "answer": "Baggage tractors driving at 38 km/h on the apron (nearly double the 20 km/h limit) and an untrained driver without safety gear."
              },
              {
                "question": "2. What could happen?",
                "answer": "A collision with an aircraft engine, hitting ground staff walking between stands, or causing severe structural airframe damage."
              },
              {
                "question": "3. How do we fix it?",
                "answer": "1) Fit electronic speed limiters to all baggage tugs (maximum 20 km/h).<br>2) Conduct weekly 10-minute 'toolbox safety talks' with all drivers.<br>3) Suspend the untrained driver until he completes the official refresher course.<br>4) Perform weekly radar speed spot-checks."
              },
              {
                "question": "4. Our Decision",
                "answer": "APPROVED: The 30-day Fix-It Plan is accepted with a mandatory re-audit in 14 days."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 2 Revision - Safety Alerts & Ramp Inspections",
          "summary": "30 essential operational terms for GSEA students covering apron safety, ground support vehicles, inspections, and hazard reporting.",
          "terms": [
            {
              "num": "01",
              "term": "Apron / Ramp",
              "definition": "The designated area of an airport where aircraft are parked, unloaded, refuelled, and boarded."
            },
            {
              "num": "02",
              "term": "Ground Support Equipment (GSE)",
              "definition": "Specialized motorized and towed vehicles servicing aircraft on the ground (tugs, belt loaders, stairs)."
            },
            {
              "num": "03",
              "term": "Safety Information Bulletin (SIB)",
              "definition": "An advisory document published by EASA sharing safety lessons, alerts, and recommended practices."
            },
            {
              "num": "04",
              "term": "Safety Directive (SD)",
              "definition": "A mandatory regulatory order issued to correct an urgent unsafe condition."
            },
            {
              "num": "05",
              "term": "Airside Driving Permit (ADP)",
              "definition": "An official license authorizing staff to operate motorized vehicles on the aerodrome movement area."
            },
            {
              "num": "06",
              "term": "Speed Limit",
              "definition": "The maximum legal speed permitted for vehicles operating in apron lanes (typically 20 km/h)."
            },
            {
              "num": "07",
              "term": "Aircraft Stand Safety Area",
              "definition": "The painted red box surrounding a parked aircraft where vehicle speeds are restricted to walking pace (5 km/h)."
            },
            {
              "num": "08",
              "term": "Right-of-Way",
              "definition": "The legal priority of one vehicle or aircraft to proceed ahead of another (aircraft always have priority)."
            },
            {
              "num": "09",
              "term": "Aircraft Under Tow",
              "definition": "An aeroplane being pulled or pushed by a heavy tractor (tug) using a towbar or towbarless system."
            },
            {
              "num": "10",
              "term": "Jet Blast",
              "definition": "Rapid air stream produced by the engines of an aircraft, dangerous to personnel and equipment behind it."
            },
            {
              "num": "11",
              "term": "FOD (Foreign Object Debris)",
              "definition": "Loose items, trash, tools, or stones on the apron that can damage aircraft or be ingested by jet engines."
            },
            {
              "num": "12",
              "term": "High-Visibility Vest",
              "definition": "Fluorescent clothing with reflective strips required for all airside personnel to ensure they are visible."
            },
            {
              "num": "13",
              "term": "Telematics",
              "definition": "An onboard GPS tracking device recording vehicle speed, position, and harsh acceleration."
            },
            {
              "num": "14",
              "term": "Speed Governor / Limiter",
              "definition": "A mechanical or electronic device restricting a vehicle engine from exceeding a set speed (e.g. 20 km/h)."
            },
            {
              "num": "15",
              "term": "Near-Miss",
              "definition": "An unplanned event that did not result in injury or damage, but had significant potential to do so."
            },
            {
              "num": "16",
              "term": "Occurrence Reporting",
              "definition": "The mandatory European system (Regulation 376/2014) for logging safety incidents without fear of blame."
            },
            {
              "num": "17",
              "term": "Fix-It Plan (CAP)",
              "definition": "A structured Corrective Action Plan submitted by an operator detailing how safety defects will be resolved."
            },
            {
              "num": "18",
              "term": "Root Cause",
              "definition": "The fundamental underlying reason why a safety failure occurred, rather than just the immediate symptom."
            },
            {
              "num": "19",
              "term": "Toolbox Talk",
              "definition": "A short 10-minute informal safety briefing held with ramp teams at the beginning of a shift."
            },
            {
              "num": "20",
              "term": "Marshaller",
              "definition": "A trained ground operations worker directing aircraft onto stand using hand-held illuminated wands."
            },
            {
              "num": "21",
              "term": "Turnaround",
              "definition": "The complete cycle of unloading, servicing, cleaning, refuelling, and boarding an aircraft between flights."
            },
            {
              "num": "22",
              "term": "Chocks",
              "definition": "Heavy rubber wedges placed against aircraft wheels to prevent accidental movement when parked."
            },
            {
              "num": "23",
              "term": "Engine Cowling",
              "definition": "The removable metal casing covering an aircraft engine, vulnerable to ground vehicle collisions."
            },
            {
              "num": "24",
              "term": "Pitot Probe",
              "definition": "A delicate exterior sensor on the aircraft nose measuring airspeed that must never be bumped."
            },
            {
              "num": "25",
              "term": "Audit Finding",
              "definition": "A formal written statement by a safety inspector recording a deviation from required standards."
            },
            {
              "num": "26",
              "term": "Non-Compliance Notice",
              "definition": "An official document issued to an operator requiring remediation of an observed safety infraction."
            },
            {
              "num": "27",
              "term": "Passive Voice",
              "definition": "A grammatical structure ('it was observed') used to describe findings objectively without personal blame."
            },
            {
              "num": "28",
              "term": "Spot-Check",
              "definition": "An unannounced, random safety inspection conducted on the ramp to verify compliance."
            },
            {
              "num": "29",
              "term": "Recurrent Training",
              "definition": "Regular refresher courses (e.g. annually) ensuring staff keep safety knowledge fresh."
            },
            {
              "num": "30",
              "term": "Airside Access",
              "definition": "Security-cleared permission to enter operational areas beyond the terminal passenger screening points."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Passenger Flow Architecture",
              "watchUrl": "https://www.youtube.com/watch?v=oeJcvKZG2w8",
              "tag": "Landside Design",
              "videoId": "oeJcvKZG2w8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/oeJcvKZG2w8",
              "caption": "Focus: Examine terminal wayfinding psychology, queue mitigation at security checkpoints, and concourse commercial layouts shaping the airside dwell hour."
            },
            {
              "title": "Video 2: Taxi & Line-Up Procedures",
              "watchUrl": "https://www.youtube.com/watch?v=XeUxBxDUGCk",
              "tag": "Airside Taxi",
              "videoId": "XeUxBxDUGCk",
              "embedUrl": "https://www.youtube-nocookie.com/embed/XeUxBxDUGCk",
              "caption": "Focus: Follow cockpit taxi procedures from gate stand to runway: yellow centerline tracking, taxiway speed rules, holding short at threshold lines, and lining up."
            },
            {
              "title": "Video 3: Runway Numbers & Markings",
              "watchUrl": "https://www.youtube.com/watch?v=H701DOaQvDM",
              "tag": "Ground Guidance",
              "videoId": "H701DOaQvDM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/H701DOaQvDM",
              "caption": "Focus: Learn how magnetic bearings determine runway numbers (09/27), parallel designations (L, C, R), and the meaning of piano key threshold markings."
            }
          ],
          "articles": [
            {
              "topic": "Terminal Facilitation",
              "sourceTag": "ACI World Insights",
              "heading": "Airport Passenger Journey Continuity: Building Trust Across Touchpoints",
              "snippet": "Airports Council International explores integrated passenger flows from curb to gate, evaluating self-service bag drop, biometric checkpoints, and dwell time optimization in international terminals.",
              "readTime": "Estimated read: 6 mins",
              "url": "https://blog.aci.aero/customer-experience/airport-passenger-journey-continuity/"
            },
            {
              "topic": "Aerodrome Infrastructure",
              "sourceTag": "SKYbrary Aviation Safety",
              "heading": "Movement Area Safety & Aerodrome Operations (ICAO Annex 14)",
              "snippet": "A regulatory breakdown contrasting the manoeuvring area (runways and taxiways strictly controlled by ATC Tower/Ground) with the apron, establishing operational boundaries and safety management protocols.",
              "readTime": "Estimated read: 7 mins",
              "url": "https://skybrary.aero/articles/movement-area"
            },
            {
              "topic": "Navigation Technology",
              "sourceTag": "Simple Flying Tech",
              "heading": "How Do Airports Number Their Runways? A Technical Guide",
              "snippet": "An accessible engineering explanation of magnetic compass azimuths, 180-degree reciprocal ends, parallel runway letters, and why shifting magnetic poles force airports to repaint numbers over time.",
              "readTime": "Estimated read: 5 mins",
              "url": "https://simpleflying.com/runways-naming/"
            },
            {
              "topic": "Surface Safety",
              "sourceTag": "SKYbrary Safety Table",
              "heading": "Taxiway Surface Markings, Mandatory Signs & Holding Positions",
              "snippet": "Visual safety guidelines covering yellow taxiway centerlines, enhanced markings, runway holding positions (two solid and two dashed yellow lines), and illuminated stop bars designed to prevent runway incursions.",
              "readTime": "Estimated read: 8 mins",
              "url": "https://skybrary.aero/articles/taxiway-surface-markings-and-signs"
            }
          ],
          "resources": [
            {
              "url": "https://www.icao.int/safety/airnavigation/Pages/aerodromes.aspx",
              "tag": "01 • Global Standards",
              "name": "ICAO Aerodromes Portal",
              "desc": "Official international standards for runway dimensions, pavement visual aids, ground lighting, and aerodrome safety certificates."
            },
            {
              "url": "https://skybrary.aero/articles/taxiway-surface-markings-and-signs",
              "tag": "02 • Safety Encyclopedia",
              "name": "SKYbrary Surface Markings",
              "desc": "Comprehensive illustrated directory of airport pavement markings, holding position lines, and mandatory instruction signs."
            },
            {
              "url": "https://www.flightradar24.com",
              "tag": "03 • Live Ground Tracking",
              "name": "Flightradar24 Surface Radar",
              "desc": "Real-time interactive radar tracking showing commercial airliners taxiing from gate stands across taxiways to active runways worldwide."
            },
            {
              "url": "https://www.faa.gov/airports/runway_safety",
              "tag": "04 • Incursion Prevention",
              "name": "FAA Runway Safety Office",
              "desc": "Interactive airfield diagram quizzes, surface navigation animations, and training resources aimed at eliminating runway incursions."
            },
            {
              "url": "https://aci.aero",
              "tag": "05 • Airport Management",
              "name": "Airports Council International (ACI)",
              "desc": "Global association benchmark reports on terminal efficiency, baggage automation, and Airport Service Quality (ASQ) metrics."
            },
            {
              "url": "https://aircraft.airbus.com",
              "tag": "06 • Aircraft Engineering",
              "name": "Airbus Safety & Ground Operations",
              "desc": "Manufacturer briefings on runway braking friction, Runway Overrun Prevention Systems (ROPS), and aircraft apron maneuvering dynamics."
            }
          ],
          "grammar": {
            "title": "Prepositions of Place, Direction & Movement",
            "badge": "B1–B2 Grammar Focus",
            "patternTitle": "Spatial Guide",
            "formula": "AT (Point/Gate) • IN (Enclosed Room) • ON (Surface/Apron) • ACROSS / ALONG (Movement)",
            "rulesTitle": "Static Positions vs. Dynamic Direction",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. AT (Specific Service Points &amp; Nodes):</strong> Counters, desks, and intersections (<em>\"Check in <strong>at</strong> the automated kiosk\"</em> / <em>\"Hold <strong>at</strong> Holding Point Alpha\"</em> / <em>\"Board <strong>at</strong> Gate B22\"</em>).",
              "<strong style=\"color: #1e293b;\">2. IN (Enclosed Volumes &amp; Concourse Halls):</strong> Inside rooms or buildings (<em>\"Wait <strong>in</strong> the departure lounge\"</em> / <em>\"Shop <strong>in</strong> duty-free\"</em> / <em>\"Inspect engines <strong>in</strong> Hangar 2\"</em>).",
              "<strong style=\"color: #1e293b;\">3. ON (Pavement Surfaces &amp; Movement Lines):</strong> Flat operational ground (<em>\"Parked <strong>on</strong> the apron\"</em> / <em>\"Taxiing <strong>on</strong> Taxiway Bravo\"</em> / <em>\"Aligning <strong>on</strong> Runway 09L\"</em> / <em>\"Centered <strong>on</strong> the yellow line\"</em>).",
              "<strong style=\"color: #1e293b;\">4. Directional Prepositions (Through / Along / Across):</strong> Path and transit (<em>\"Walk <strong>through</strong> security screening\"</em> / <em>\"Taxi <strong>along</strong> the centerline\"</em> / <em>\"Never drive <strong>across</strong> an active runway\"</em>)."
            ],
            "trap": "<strong>⚠️ TOEIC Part 5 Preposition Trap:</strong> Beware of verb collocations! Static locations use <em>at, in, on</em> (<em>wait at the gate</em>). Motion towards a destination requires <em>to, into, onto, across</em> (<em>proceed to the gate</em>, <em>walk onto the jet bridge</em>). Don't confuse stationary states with directional transit!",
            "examplesTitle": "Airfield & Concourse Examples",
            "examples": [
              "<em>\"Passengers must pass <strong>through</strong> security before entering the retail concourse.\"</em>",
              "<em>\"Flight 840 is cleared to taxi <strong>along</strong> Taxiway Juliet and hold short <strong>at</strong> Runway 27.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Ground vehicles servicing aircraft on the terminal apron are strictly forbidden from driving ________ the marked runway boundary lines without obtaining direct clearance from air traffic control.",
            "options": [
              {
                "letter": "A",
                "text": "across"
              },
              {
                "letter": "B",
                "text": "into"
              },
              {
                "letter": "C",
                "text": "along"
              },
              {
                "letter": "D",
                "text": "between"
              }
            ],
            "correctLetter": "A",
            "correctText": "across",
            "analysis": "The preposition \"across\" denotes transverse motion from one side of a surface boundary to the other (driving across a line or runway). In TOEIC Part 5, spatial prepositions of traversal (across) are frequently tested against parallel motion (along) or interior motion (into).",
            "strategy": "Always check whether the verb denotes traversal (crossing over: across), linear alignment (parallel to: along), or entry into an enclosed space (into / through)."
          },
          "toeicQuestions": [
            {
              "id": 1,
              "stem": "A baggage tractor driver is rushing to deliver last-minute transit bags to Stand 16. A speed radar records the vehicle travelling at 36 km/h in the apron circulation lane and 17 km/h inside the red aircraft stand safety box. How does this compare with EASA SIB No. 2024-11 recommendations?",
              "options": [
                {
                  "letter": "A",
                  "text": "Fully compliant because baggage delivery is considered an urgent operational need."
                },
                {
                  "letter": "B",
                  "text": "Non-compliant: EASA recommends a maximum speed of 20 km/h in general apron lanes and strictly 5 km/h (walking pace) inside the aircraft stand safety box."
                },
                {
                  "letter": "C",
                  "text": "Compliant provided the baggage carts are covered with waterproof tarpaulins."
                },
                {
                  "letter": "D",
                  "text": "Non-compliant only if passengers are currently boarding the aircraft."
                }
              ],
              "correctLetter": "B",
              "correctText": "Non-compliant: EASA recommends a maximum speed of 20 km/h in general apron lanes and strictly 5 km/h (walking pace) inside the aircraft stand safety box.",
              "analysis": "EASA SIB No. 2024-11 establishes clear speed thresholds: 20 km/h for general apron circulation and 5 km/h inside the red stand safety boundary around parked aircraft.",
              "strategy": "Remember the two magic apron numbers: 20 km/h for lanes, 5 km/h (walking pace) in the red box around aircraft."
            },
            {
              "id": 2,
              "stem": "Review the four statements regarding apron right-of-way and ground operations. Spot the statement that contains a DANGEROUS SAFETY ERROR:",
              "options": [
                {
                  "letter": "A",
                  "text": "Aircraft under tow by a pushback tractor always hold absolute right-of-way over all ground vehicles."
                },
                {
                  "letter": "B",
                  "text": "A heavy fuel servicing tanker has right-of-way over taxiing aircraft because aviation fuel is highly flammable."
                },
                {
                  "letter": "C",
                  "text": "Ground vehicles must stop at a safe distance when an aircraft is manoeuvring onto an active parking stand."
                },
                {
                  "letter": "D",
                  "text": "Emergency vehicles with active blue lights and sirens have immediate priority over standard ground handling equipment."
                }
              ],
              "correctLetter": "B",
              "correctText": "A heavy fuel servicing tanker has right-of-way over taxiing aircraft because aviation fuel is highly flammable.",
              "analysis": "Statement B is completely false and dangerous. Ground vehicles NEVER have priority over taxiing or moving aircraft. Aircraft have restricted cockpit visibility, jet engine blast hazards, and cannot stop quickly.",
              "strategy": "Aircraft ALWAYS have absolute right-of-way on the movement area. No commercial ground vehicle ever takes priority over a moving plane."
            },
            {
              "id": 3,
              "stem": "During a safety audit, an inspector records an unattended baggage belt loader parked inside the aircraft stand taxi lane and a missing fire extinguisher on a fuel truck. Which statement demonstrates professional, non-confrontational phrasing for the audit report?",
              "options": [
                {
                  "letter": "A",
                  "text": "Your incompetent drivers are completely ruining apron safety with their careless parking!"
                },
                {
                  "letter": "B",
                  "text": "It was observed that a belt loader was left positioned inside the active taxi lane, and the required portable fire extinguisher was not located on the refuelling vehicle."
                },
                {
                  "letter": "C",
                  "text": "Who gave this driver an airside driving permit? He should be fired immediately."
                },
                {
                  "letter": "D",
                  "text": "You failed your audit today because nobody on your team cares about safety."
                }
              ],
              "correctLetter": "B",
              "correctText": "It was observed that a belt loader was left positioned inside the active taxi lane, and the required portable fire extinguisher was not located on the refuelling vehicle.",
              "analysis": "Statement B uses objective, passive phrasing ('it was observed that...', 'was left positioned...', 'was not located...'). It focuses on physical safety facts rather than emotional, personal accusations.",
              "strategy": "In safety oversight, use the passive voice to report observations calmly. Attacking individuals causes people to hide defects; objective reporting leads to corrective fixes."
            },
            {
              "id": 4,
              "stem": "Four statements outline apron occurrence reporting and driver management. Spot the statement that contains an OPERATIONAL ERROR:",
              "options": [
                {
                  "letter": "A",
                  "text": "A close call where a baggage tractor stops 10 cm from an aircraft engine must be reported as a safety occurrence."
                },
                {
                  "letter": "B",
                  "text": "Operators issued with a safety non-compliance notice must submit a written Fix-It Plan within 30 days."
                },
                {
                  "letter": "C",
                  "text": "A minor scratch on an aircraft engine cowling can be ignored if the flight is running 45 minutes late."
                },
                {
                  "letter": "D",
                  "text": "Airside driving permits require annual refresher training covering blind spots and right-of-way rules."
                }
              ],
              "correctLetter": "C",
              "correctText": "A minor scratch on an aircraft engine cowling can be ignored if the flight is running 45 minutes late.",
              "analysis": "Statement C is illegal and life-threatening. Even a superficial scratch or dent on an engine cowling or fuselage skin can cause catastrophic structural failure under pressurized flight conditions. All airframe contact must be reported immediately.",
              "strategy": "Zero-tolerance for unreported aircraft contact. Any vehicle impact with an aircraft must trigger immediate technical inspection before departure."
            },
            {
              "id": 5,
              "stem": "A ground handling manager receives an audit notice citing recurring speeding violations in apron lanes. Which combination of measures in the 30-day Fix-It Plan represents the most effective long-term solution?",
              "options": [
                {
                  "letter": "A",
                  "text": "Install electronic speed governors set to 20 km/h on all tractors, mandate 10-minute shift toolbox briefings, and monitor telematics logs."
                },
                {
                  "letter": "B",
                  "text": "Tell drivers to look out for auditors and slow down when they see a safety vest."
                },
                {
                  "letter": "C",
                  "text": "Remove the speedometers from all vehicles so drivers focus on looking out the windscreen."
                },
                {
                  "letter": "D",
                  "text": "Replace all motorized baggage tugs with manual handcarts."
                }
              ],
              "correctLetter": "A",
              "correctText": "Install electronic speed governors set to 20 km/h on all tractors, mandate 10-minute shift toolbox briefings, and monitor telematics logs.",
              "analysis": "Option A tackles root causes through technical safeguards (speed limiters), cultural communication (toolbox talks), and objective monitoring (telematics tracking).",
              "strategy": "An effective Fix-It Plan (Corrective Action Plan) combines hardware safeguards, staff training, and data tracking to ensure permanent compliance."
            }
          ],
          "pageUrl": "session2/admat_aas1.html",
          "quizTitle": "Airside Scenario Quiz • Apron Driving & Safety Management",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Operational Dilemmas & Rule Spot-Checks"
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Special Requests & Runway Safety Cases Objectives",
          "summary": "By the end of this session, GSEA students will be able to explain how airports handle real-world challenges through temporary permissions (exemptions), use connecting words to explain rules and conditions (provided that, due to, in order to, in lieu of), read an authentic runway works exemption file (+50% length), prepare and deliver a 3-minute spoken briefing to airline pilots, and complete a simple Safety Check.",
          "items": [
            {
              "num": 1,
              "title": "Discuss Temporary Airport Work (Fluency & Spontaneous Speech)",
              "description": "Brainstorm real reasons airports need to do heavy runway repairs without closing completely."
            },
            {
              "num": 2,
              "title": "Understand Special Permissions (Exemptions & Flexibility)",
              "description": "Learn how Article 71 permits temporary flexibility when standard rules cannot be met."
            },
            {
              "num": 3,
              "title": "Connecting Words for Explaining Rules (Language Focus)",
              "description": "Practice connecting phrases to give clear reasons: because of, provided that, in order to, as long as, in lieu of."
            },
            {
              "num": 4,
              "title": "Read the Runway Work Request (Authentic Document Scanning)",
              "description": "Scan an authentic temporary exemption file (EASA/ADR-EXEMP/2024-009) for Runway 26 drainage repairs with a reduced safety area (RESA)."
            },
            {
              "num": 5,
              "title": "Deliver a 3-Minute Airline Briefing (Spoken Presentation)",
              "description": "Prepare and deliver a spoken operational briefing to airline representatives explaining the 4 safety rules protecting flights."
            },
            {
              "num": 6,
              "title": "Complete the Decision Safety Check (Risk Evaluation)",
              "description": "Evaluate the risks and agree on whether the runway works can be safely approved."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative spoken English session on temporary aerodrome works, Article 71 exemptions, connecting words for explaining rules, an airline operational briefing simulation, and a simple Safety Check.",
          "items": [
            {
              "time": "00-15",
              "title": "Part 1: Warm-up: Keeping Airports Open During Repairs (15 mins)",
              "description": "Pairs discuss how airports maintain operations during runway maintenance and answer 4 spot-check questions."
            },
            {
              "time": "15-45",
              "title": "Part 2: Reading the Runway Work Request (30 mins)",
              "description": "Scanning authentic exemption file EASA/ADR-EXEMP/2024-009 (+50% length) for reduced RESA and the 4 compensatory safety rules."
            },
            {
              "time": "45-70",
              "title": "Part 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)",
              "description": "Language clinic practicing condition linkers (provided that, as long as) and purpose/cause linkers (in order to, due to) across 5 exercises."
            },
            {
              "time": "70-105",
              "title": "Part 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)",
              "description": "GSEA students prepare and deliver a 3-minute spoken presentation to airline representatives explaining the 4 safety rules, followed by Q&A."
            },
            {
              "time": "105-120",
              "title": "Part 5: Safety Check: Is it Safe to Land? (15 mins)",
              "description": "Structured 4-step safety evaluation of the reduced RESA, overrun risks, compensatory barriers, and granting temporary operational approval."
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
            "title": "Activity 1: Warm-up: Keeping Airports Open During Repairs (15 mins)",
            "summary": "Explore how airports manage urgent runway construction without shutting down completely.",
            "modeBadges": [
              "Pairs (2 students)",
              "Spoken Brainstorm",
              "Timing: 15 mins"
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
                ]
              },
              {
                "id": 2,
                "question": "Why is the grass area at the end of a runway (RESA) so important for landing planes?",
                "exampleAnswers": [
                  "If an aircraft touches down too late or suffers a braking problem on a wet runway, the RESA acts as a safety buffer to stop the plane before it crashes into roads or ditches.",
                  "It gives pilots and emergency crews valuable extra distance and time to prevent an overrun accident."
                ]
              },
              {
                "id": 3,
                "question": "How can an airport prove that an unusual plan is just as safe as following standard rules?",
                "exampleAnswers": [
                  "By adding strict compensatory safety rules—such as moving the landing line forward, banning landings in rain, and stationing a fire engine right next to the runway.",
                  "They also consult airline chief pilots in advance and publish NOTAMs so every pilot knows exactly what to expect before takeoff."
                ]
              }
            ],
            "diagnostic": {
              "title": "Runway Works & Exemptions Entry Check",
              "instructions": "Discuss each question with your partner, then click to reveal the answer.",
              "questions": [
                {
                  "id": 1,
                  "q": "What does RESA stand for, and what is its purpose?",
                  "answer": "Runway End Safety Area: a cleared, level grass or paved safety buffer beyond the runway designed to stop an aeroplane that overruns or undershoots."
                },
                {
                  "id": 2,
                  "q": "What is a 'Displaced Threshold'?",
                  "answer": "A landing line moved down the runway away from the physical end, used during construction or to clear obstacles on approach."
                },
                {
                  "id": 3,
                  "q": "In European law, what is an 'Article 71 Exemption'?",
                  "answer": "A legal clause allowing civil aviation authorities to grant temporary flexibility (up to 8 months) for urgent operational needs, provided equivalent safety is proven."
                },
                {
                  "id": 4,
                  "q": "What is an 'Airline Flight Operations Committee'?",
                  "answer": "A regular operational meeting where airport managers brief airline chief pilots and flight dispatchers on runway changes, weather procedures, and construction."
                }
              ]
            }
          },
          "documentExtract": {
            "title": "Activity 2: Reading the Runway Work Request (30 mins)",
            "summary": "Scan an authentic temporary exemption file for Runway 26 drainage culvert repairs.",
            "modeBadges": [
              "Pairs or Small Groups",
              "Document Scanning",
              "Timing: 30 mins"
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
                "answer": "Heavy rain damaged concrete stormwater drainage pipes under the overrun area, requiring 45 days of excavation and repairs."
              },
              {
                "id": 2,
                "q": "How many metres is the safety area reduced by?",
                "answer": "It is reduced from standard 90 metres down to 55 metres (a reduction of 35 metres)."
              },
              {
                "id": 3,
                "q": "What four safety rules protect flights while the runway work takes place?",
                "answer": "1) 180m displaced threshold, 2) strictly no landings on wet runways, 3) crosswind capped at 15 knots, and 4) fire engine on immediate standby at Holding Point B2."
              },
              {
                "id": 4,
                "q": "What must arriving flights do if the runway becomes wet during rain?",
                "answer": "Landings on Runway 26 are strictly prohibited in wet weather; flights must land on Runway 14/32 or divert to an alternate airport."
              }
            ]
          },
          "rulesPractice": {
            "title": "Activity 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)",
            "summary": "Learn how to link ideas in English using words for conditions, causes, purposes, and replacements.",
            "modeBadges": [
              "Individual & Pairs",
              "Language Clinic",
              "Timing: 25 mins"
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
                "tip": "Introduces a strict safety requirement."
              },
              {
                "word": "Due to / Because of",
                "meaning": "For the reason that",
                "example": "The safety area is reduced due to urgent drainage culvert repairs.",
                "tip": "Followed by a noun phrase explaining the cause."
              },
              {
                "word": "In order to",
                "meaning": "For the purpose of",
                "example": "We displaced the threshold by 180m in order to protect stopping distance.",
                "tip": "Followed by an infinitive verb ('in order to protect')."
              },
              {
                "word": "In lieu of",
                "meaning": "In place of / Instead of",
                "example": "We positioned temporary orange markers in lieu of standard white paint.",
                "tip": "Useful when one safety measure replaces another."
              },
              {
                "word": "Unless",
                "meaning": "Except if",
                "example": "No heavy aircraft may land unless the crosswind is under 15 knots.",
                "tip": "Sets a clear boundary condition."
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
                "rationale": "'Provided that' introduces the mandatory safety condition (dry runway)."
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
                "rationale": "'Due to' is followed by the noun phrase 'urgent culvert reconstruction', explaining the cause."
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
                "rationale": "'In order to' expresses the purpose and is followed by the base verb 'give'."
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
                "rationale": "'In lieu of' means 'instead of' or 'replacing'."
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
                "rationale": "'Unless' means 'except if the crosswind is 15 knots or less'."
              }
            ]
          },
          "spokenActivity": {
            "title": "Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)",
            "summary": "Deliver a clear, reassuring 3-minute operational briefing to airline representatives.",
            "modeBadges": [
              "Pairs / Small Groups",
              "Spoken Presentation",
              "Timing: 35 mins"
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
                ]
              },
              {
                "title": "Role B: Airline Flight Ops Manager",
                "badge": "Challenging Q&A",
                "bullets": [
                  "Listen to the briefing and take notes on potential flight impacts.",
                  "Ask: 'What happens if sudden rain begins while our Airbus A320 is on final approach?'",
                  "Ask: 'Why is the crosswind limit reduced to 15 knots, and will this cause many diversions?'"
                ]
              },
              {
                "title": "Role C: Observer / Peer Coach",
                "badge": "Feedback",
                "bullets": [
                  "Time the briefing (target: 3 minutes).",
                  "Check: Did the speaker explain all 4 safety rules clearly?",
                  "Check: Did the speaker use connecting words (provided that, due to, in order to)?",
                  "Give 2 positive points and 1 helpful suggestion."
                ]
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
            "title": "Activity 5: Safety Check: Is it Safe to Land? (15 mins)",
            "summary": "Complete the decision check table evaluating the reduced safety area and safety rules.",
            "modeBadges": [
              "Whole Class / Pairs",
              "Safety Evaluation",
              "Timing: 15 mins"
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
                "answer": "The Runway End Safety Area (RESA) on Runway 26 is reduced from 90m to 55m for 45 days during drainage works."
              },
              {
                "question": "2. What could happen?",
                "answer": "If an aircraft lands too long or suffers a braking problem, it could overrun the runway into the excavation ditch."
              },
              {
                "question": "3. Why is it safe anyway?",
                "answer": "Four strict safety rules protect flights:<br>1) 180m displaced threshold gives full stopping distance.<br>2) Landings banned on wet runways.<br>3) Crosswind limit capped at 15 knots.<br>4) Fire rescue engine on 60-second standby at Holding Point B2."
              },
              {
                "question": "4. Our Decision",
                "answer": "APPROVED: The 4 safety rules protect flights; temporary permission is granted for 45 days."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 3 Revision - Special Requests & Runway Safety Cases",
          "summary": "30 essential operational terms for GSEA students covering runway works, temporary permissions (exemptions), and airline briefings.",
          "terms": [
            {
              "num": "01",
              "term": "RESA (Runway End Safety Area)",
              "definition": "An area symmetrical about the extended runway centre line intended to reduce the risk of damage to an aeroplane overrunning or undershooting."
            },
            {
              "num": "02",
              "term": "Displaced Threshold",
              "definition": "A runway landing threshold located at a point other than the physical beginning of the runway."
            },
            {
              "num": "03",
              "term": "Landing Distance Available (LDA)",
              "definition": "The length of runway declared available and suitable for the ground run of an aeroplane landing."
            },
            {
              "num": "04",
              "term": "Exemption",
              "definition": "An official temporary permission granted by a civil aviation authority to deviate from a standard rule."
            },
            {
              "num": "05",
              "term": "Article 71",
              "definition": "The legal clause in EU aviation law allowing temporary exemptions for urgent operational needs."
            },
            {
              "num": "06",
              "term": "Derogation",
              "definition": "An official exemption from or relaxation of a law, rule, or standard."
            },
            {
              "num": "07",
              "term": "Safety Case",
              "definition": "A structured written justification proving that an operation is safe despite non-standard conditions."
            },
            {
              "num": "08",
              "term": "Compensatory Measure",
              "definition": "An additional safety step implemented to replace or balance a temporary reduction in safety margin."
            },
            {
              "num": "09",
              "term": "Culvert",
              "definition": "An underground concrete pipe or tunnel carrying stormwater drainage underneath a runway."
            },
            {
              "num": "10",
              "term": "Subsidence",
              "definition": "The gradual sinking or settling of ground soil that can damage overlying runway pavement."
            },
            {
              "num": "11",
              "term": "Runway Strip",
              "definition": "A defined area including the runway and stopway intended to protect aircraft flying over it during take-off or landing."
            },
            {
              "num": "12",
              "term": "Overrun",
              "definition": "When an aircraft fails to stop before the end of the paved runway surface."
            },
            {
              "num": "13",
              "term": "Undershoot",
              "definition": "When an arriving aircraft touches down short of the runway threshold."
            },
            {
              "num": "14",
              "term": "Contaminated Runway",
              "definition": "A runway where significant portions of the surface are covered by standing water, snow, slush, or ice."
            },
            {
              "num": "15",
              "term": "Braking Action",
              "definition": "A measure of the tyre-to-surface friction available to slow down a landing aircraft."
            },
            {
              "num": "16",
              "term": "Crosswind Component",
              "definition": "The portion of wind blowing perpendicular (90 degrees) to the runway direction."
            },
            {
              "num": "17",
              "term": "Holding Point",
              "definition": "A designated position on a taxiway where aircraft hold before entering or crossing an active runway."
            },
            {
              "num": "18",
              "term": "RFFS (Rescue and Fire Fighting Services)",
              "definition": "The emergency airport fire brigade equipped with heavy foam vehicles for aircraft incidents."
            },
            {
              "num": "19",
              "term": "Standby",
              "definition": "Being in immediate readiness to respond to an emergency situation within seconds."
            },
            {
              "num": "20",
              "term": "Diversion",
              "definition": "Rerouting an aircraft to land at an alternative airport when landing at the intended destination is unsafe."
            },
            {
              "num": "21",
              "term": "Alternate Aerodrome",
              "definition": "An airport specified in the flight plan where an aircraft can land if landing at destination is impossible."
            },
            {
              "num": "22",
              "term": "AIP Supplement (SUP)",
              "definition": "A temporary published change to permanent aeronautical information, usually lasting more than 3 months."
            },
            {
              "num": "23",
              "term": "Briefing",
              "definition": "A short, concise spoken presentation giving operational instructions and safety updates to a team."
            },
            {
              "num": "24",
              "term": "Provided that",
              "definition": "A linking phrase meaning 'on the strict condition that' (used to introduce mandatory rules)."
            },
            {
              "num": "25",
              "term": "In lieu of",
              "definition": "A formal phrase meaning 'in place of' or 'as a replacement for'."
            },
            {
              "num": "26",
              "term": "Due to",
              "definition": "A connecting phrase meaning 'caused by' or 'because of', followed by a noun phrase."
            },
            {
              "num": "27",
              "term": "In order to",
              "definition": "A linking phrase used to express the purpose of a safety action."
            },
            {
              "num": "28",
              "term": "Touchdown Zone",
              "definition": "The portion of a runway beyond the threshold where landing aeroplanes are intended to first make contact."
            },
            {
              "num": "29",
              "term": "Runway Guard Lights",
              "definition": "Flashing yellow lights installed at taxiway holding points to warn pilots of an active runway ahead."
            },
            {
              "num": "30",
              "term": "Temporary Threshold Marking",
              "definition": "Special paint or portable markings indicating where the temporary landing line begins."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: What Happens To An Aircraft During Its Turnaround?",
              "watchUrl": "https://www.youtube.com/watch?v=EiKeGmkX6fY",
              "tag": "Ground Handling",
              "videoId": "EiKeGmkX6fY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/EiKeGmkX6fY",
              "caption": "Focus: Step-by-step breakdown of the rapid 35 to 45-minute commercial aircraft turnaround: blocks-on, chocks, deplaning, baggage handling, fueling, catering, and pushback."
            },
            {
              "title": "Video 2: 20 Types of Aircraft Ground Support Equipment (GSE)",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Vehicle Operations",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Visual field guide to the specialized vehicles operating on the apron stand: pushback tugs, ground power units (GPU), belt loaders, catering hi-lifts, and de-icing rigs."
            },
            {
              "title": "Video 3: Pushback Operations & Electric Tugs",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "Ramp Safety",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Captain Joe explains how pushback tractors maneuver commercial airliners out of the gate, interphone headset communication, and next-generation electric tug innovations."
            }
          ],
          "grammar": {
            "title": "Cause, Effect & Relative Clauses in Ground Operations",
            "badge": "B2 Professional Grammar Focus",
            "patternTitle": "The Cause & Effect Framework",
            "formula": "Due to / Owing to + [Noun Phrase], [Subject] + [Verb]  |  [Cause] + led to / resulted in + [Noun / Gerund]",
            "rulesTitle": "Operational Usage Rules",
            "rules": [
              "<strong style=\"color: #1e293b;\">1. Formal Prepositional Causes (Due to / Owing to):</strong> Followed strictly by a noun phrase or gerund, never by a full subject+verb clause (*\"<strong>Due to heavy ramp congestion</strong>, the refueler was delayed\"*).",
              "<strong style=\"color: #1e293b;\">2. Result Verbs (Led to / Resulted in):</strong> Express the direct outcome of an event (*\"An overheated conveyor <strong>resulted in</strong> a 15-minute baggage delay\"*).",
              "<strong style=\"color: #1e293b;\">3. Defining Relative Clauses (Which / That):</strong> Used to clearly define airside vehicles and technical equipment without jargon (*\"The GPU is a mobile generator <strong>that supplies electricity</strong> to the cabin\"*).",
              "<strong style=\"color: #1e293b;\">4. Transitional Connectors (Consequently / As a result):</strong> Placed at the start of a sentence followed by a comma to introduce a consequence."
            ],
            "trap": "<strong>⚠️ The Common Grammar Trap:</strong> Do not write <em>due to because</em> or follow <em>due to</em> with a full sentence! Say <em>\"Due to the storm\"</em> (noun phrase), NOT <em>\"Due to the storm was bad\"</em>. For full clauses, use <em>\"Because the storm was severe...\"</em>.",
            "examplesTitle": "Ground Handling Examples",
            "examples": [
              "<em>\"<strong>Owing to a mechanical defect</strong> on the pushback tractor, stand clearance was postponed by ten minutes.\"</em>",
              "<em>\"The belt loader experienced an electrical failure, <strong>which prevented handlers</strong> from unloading the forward hold on schedule.\"</em>"
            ]
          },
          "toeic": {
            "stem": "Due to a temporary failure of the mobile ground power unit, cabin air conditioning ________ until the auxiliary system was activated.",
            "options": [
              {
                "letter": "A",
                "text": "was suspended"
              },
              {
                "letter": "B",
                "text": "to suspend"
              },
              {
                "letter": "C",
                "text": "suspending"
              },
              {
                "letter": "D",
                "text": "suspends"
              }
            ],
            "correctLetter": "A",
            "correctText": "was suspended",
            "analysis": "The sentence requires a past passive finite verb: the air conditioning was suspended by ground crew until power was restored.",
            "strategy": "Identify the passive receiver of the action (\"air conditioning\") and the past context (\"was activated\"), requiring was + past participle."
          },
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 • Regulatory Standard",
              "name": "ICAO Annex 14 (Aerodromes)",
              "desc": "International Standards and Recommended Practices for aerodrome design, apron management, and visual aids."
            },
            {
              "url": "https://www.iata.org",
              "tag": "02 • Ramp Operations Manual",
              "name": "IATA Airport Handling Manual (AHM)",
              "desc": "Global industry baseline procedures for safe and efficient ground handling operations and GSE standards."
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "03 • European Safety Guidance",
              "name": "EASA Ground Handling Safety Hub",
              "desc": "Safety promotion bulletins addressing ramp collision prevention, turnaround hazards, and human factors."
            },
            {
              "url": "https://www.aci.aero",
              "tag": "04 • Apron Best Practices",
              "name": "ACI World Apron Safety Guidelines",
              "desc": "Airports Council International recommendations on apron markings, service vehicle routing, and FOD management."
            },
            {
              "url": "https://www.skybrary.aero",
              "tag": "05 • Safety Knowledge Network",
              "name": "SKYbrary Aviation Safety: Ground Operations",
              "desc": "Peer-reviewed aviation safety repository detailing turnaround incident analysis and mitigation strategies."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • TOEIC Listening & Reading",
              "name": "ETS Global Professional English",
              "desc": "Practice materials for workplace and transportation logistics reading comprehension."
            }
          ],
          "pageUrl": "session3/admat_aas1.html",
          "articles": [
            {
              "topic": "IATA Operational Safety Briefing",
              "sourceTag": "Industry Safety Report",
              "heading": "Managing Parallel Servicing Hazards during Fast-Turnaround Operations",
              "snippet": "An analysis of simultaneous ground servicing workflows, vehicle clearance corridors, and communication protocols between cockpit and apron crews.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.iata.org"
            },
            {
              "topic": "Aerodrome Operations Journal",
              "sourceTag": "Decarbonization & Innovation",
              "heading": "Electrification of Ground Support Equipment on European Aprons",
              "snippet": "Examining the transition from diesel-powered tugs and belt loaders to zero-emission battery electric GSE across major hub airports.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.aci.aero"
            }
          ],
          "toeicQuestions": [
            {
              "id": 1,
              "stem": "Due to underground drainage pipe collapse, Toulouse-Blagnac Airport must excavate the overrun area of Runway 26, reducing the Runway End Safety Area (RESA) from 90m to 55m for 45 days. How can operations continue safely and legally?",
              "options": [
                {
                  "letter": "A",
                  "text": "By keeping the excavation secret from flight crews to prevent unnecessary passenger worry."
                },
                {
                  "letter": "B",
                  "text": "By applying for an Article 71 Operational Exemption supported by an approved safety case and four mandatory compensatory safety rules."
                },
                {
                  "letter": "C",
                  "text": "By closing the airport to all commercial aviation for the entire 45-day repair period."
                },
                {
                  "letter": "D",
                  "text": "By declaring that 55m is close enough to 90m so no official permission is required."
                }
              ],
              "correctLetter": "B",
              "correctText": "By applying for an Article 71 Operational Exemption supported by an approved safety case and four mandatory compensatory safety rules.",
              "analysis": "Regulation (EU) 2018/1139 Article 71 provides flexibility for urgent operational needs, allowing temporary derogations when equivalent safety is substantiated through compensatory risk barriers.",
              "strategy": "Article 71 is the legal key: it allows temporary flexibility for urgent airport repairs, provided safety is guaranteed through compensatory rules."
            },
            {
              "id": 2,
              "stem": "Review the four compensatory safety rules enforced during the Runway 26 drainage repairs. Spot the rule that contains a CRITICAL SAFETY ERROR:",
              "options": [
                {
                  "letter": "A",
                  "text": "The landing threshold is displaced by 180 metres to guarantee full landing rollout distance."
                },
                {
                  "letter": "B",
                  "text": "Landings on Runway 26 are encouraged during heavy rainstorms to test new drainage pipes under pressure."
                },
                {
                  "letter": "C",
                  "text": "The maximum allowable crosswind component for landing aircraft is capped at 15 knots (reduced from 25 knots)."
                },
                {
                  "letter": "D",
                  "text": "A dedicated airport rescue fire vehicle remains on 60-second standby at Holding Point B2 during flight arrivals."
                }
              ],
              "correctLetter": "B",
              "correctText": "Landings on Runway 26 are encouraged during heavy rainstorms to test new drainage pipes under pressure.",
              "analysis": "Rule B is completely false and dangerous. With a shortened RESA (55m), landings are strictly PROHIBITED on Runway 26 whenever the runway is wet or contaminated to eliminate overrun risk. Arriving flights must divert.",
              "strategy": "Shortened safety area + wet runway = high overrun risk. That is why wet runway landings are 100% banned during the exemption period."
            },
            {
              "id": 3,
              "stem": "A GSEA operations officer is briefing airline flight dispatchers on the Runway 26 works. Which sentence uses the connecting phrase 'provided that' correctly to express a safety condition?",
              "options": [
                {
                  "letter": "A",
                  "text": "Aircraft may land on Runway 26 provided that the surface is dry and crosswinds do not exceed 15 knots."
                },
                {
                  "letter": "B",
                  "text": "The threshold was displaced provided that damaged concrete stormwater culverts."
                },
                {
                  "letter": "C",
                  "text": "Provided that we repaired the culvert, all flights are cancelled."
                },
                {
                  "letter": "D",
                  "text": "Pilots will divert provided that in order to protect stopping distance."
                }
              ],
              "correctLetter": "A",
              "correctText": "Aircraft may land on Runway 26 provided that the surface is dry and crosswinds do not exceed 15 knots.",
              "analysis": "'Provided that' introduces a mandatory operational condition followed by a full clause ('the surface is dry and crosswinds do not exceed 15 knots').",
              "strategy": "'Provided that' = 'only on the strict condition that'. It is the primary connector used in operational aviation permissions."
            },
            {
              "id": 4,
              "stem": "An airline dispatcher reviews declared distances for Runway 26 with a displaced threshold. Which statement contains an OPERATIONAL ERROR?",
              "options": [
                {
                  "letter": "A",
                  "text": "A displaced threshold moves the landing point further down the paved runway surface."
                },
                {
                  "letter": "B",
                  "text": "Landing Distance Available (LDA) starts at the displaced threshold rather than the physical runway end."
                },
                {
                  "letter": "C",
                  "text": "The paved runway surface prior to the displaced threshold cannot be used for take-off in the opposite direction."
                },
                {
                  "letter": "D",
                  "text": "Temporary threshold markings and lighting must be published in an AIP Supplement and NOTAM."
                }
              ],
              "correctLetter": "C",
              "correctText": "The paved runway surface prior to the displaced threshold cannot be used for take-off in the opposite direction.",
              "analysis": "Statement C is incorrect. The paved portion before a displaced threshold is unavailable for landing rollout, but it IS normally available for take-off in both directions and for rollout from the opposite runway end.",
              "strategy": "Remember displaced threshold rules: you cannot land on it, but aircraft CAN roll out or take off over it."
            },
            {
              "id": 5,
              "stem": "An arriving flight on 3-mile final approach to Runway 26 receives a wind check from the Tower: 'Wind 340 degrees at 24 knots, crosswind component 18 knots, runway dry.' Under Exemption EASA/ADR-EXEMP/2024-009, what is the mandatory decision?",
              "options": [
                {
                  "letter": "A",
                  "text": "The flight may land because 18 knots is below the aircraft's standard 25-knot maximum demonstrated crosswind."
                },
                {
                  "letter": "B",
                  "text": "The aircraft must go around or divert because the 18-knot crosswind exceeds the temporary 15-knot safety cap."
                },
                {
                  "letter": "C",
                  "text": "The pilot can request the fire truck to push the aircraft down the centreline."
                },
                {
                  "letter": "D",
                  "text": "The control tower should shut down the runway lights to test night vision."
                }
              ],
              "correctLetter": "B",
              "correctText": "The aircraft must go around or divert because the 18-knot crosswind exceeds the temporary 15-knot safety cap.",
              "analysis": "Rule 3 of the Article 71 exemption reduces the allowable crosswind to 15 knots. An 18-knot crosswind violates this compensatory barrier, requiring an immediate go-around and diversion to secondary Runway 14/32.",
              "strategy": "Temporary exemption rules override standard aircraft limits. If the exemption sets a 15-knot cap, 18 knots is an immediate go-around requirement."
            }
          ],
          "quizTitle": "Airside Scenario Quiz • Runway Works & Operational Decisions",
          "quizSubtitle": "Target pace: ~45 seconds per scenario • Mix of Operational Dilemmas & Rule Spot-Checks"
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Jobs in Aviation Objectives",
          "summary": "By the end of this session, you will be able to distinguish and categorize aviation operational professions across landside, airside, flight operations, air traffic services, and civil aviation administration (TSEEAC), accurately articulate professional duties and jurisdictions using formal B2 structures, and collaborate effectively during operational handoffs.",
          "items": [
            {
              "num": 1,
              "title": "Categorize Aviation Operational Roles (Vocabulary & Classification)",
              "description": "Distinguish between Landside (passenger handling, security screening, border control), Airside (turnaround coordination, ramp dispatch, marshalling, pushback), Flight Crew (captain, first officer, purser), Air Traffic Control (tower, approach, en-route), and Civil Aviation Administration (TSEEAC)."
            },
            {
              "num": 2,
              "title": "Clarify TSEEAC Operational Functions (Institutional Precision)",
              "description": "Accurately explain that TSEEAC personnel are NOT air traffic controllers (no tactical separation authority), but perform critical functions including AFISO (flight information and alerting services), aerodrome operations coordination, and DGAC safety oversight."
            },
            {
              "num": 3,
              "title": "Express Professional Duties & Authority (Grammar in Context)",
              "description": "Master and apply functional formulas: 'be responsible for + -ing', 'be tasked with + -ing', 'be in charge of + noun', 'have authority over / to', and 'ensure that + clause'."
            },
            {
              "num": 4,
              "title": "Simulate Professional Shift & Turnaround Handoffs (Speaking Fluency)",
              "description": "Conduct structured peer briefings between adjacent roles (Turnaround Coordinator <-> First Officer, AFISO <-> VFR Pilot, Terminal Duty Manager <-> Ramp Supervisor) to resolve operational bottlenecks."
            },
            {
              "num": 5,
              "title": "Debate Airport Operational Dilemmas (Interaction & Negotiation)",
              "description": "Analyze complex airport operational dilemmas (e.g. winter weather diversions and ramp congestion) from specific professional viewpoints and negotiate a consensus action plan."
            },
            {
              "num": 6,
              "title": "Refine Professional Aviation Vocabulary Pronunciation (Phonology)",
              "description": "Place accurate primary and secondary word stress on complex professional terms (au-THOR-i-ty, re-SPON-si-ble, co-OR-di-na-tor, tech-NI-cian, o-ver-SIGHT, sur-VEIL-lance)."
            },
            {
              "num": 7,
              "title": "Master Prepositions of Responsibility & Passive Voice (TOEIC Practice)",
              "description": "Identify common test traps in TOEIC Parts 5 & 6, particularly verbs of obligation, prepositions of responsibility ('responsible for', 'in charge of'), and passive verb structures in airport notices."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news opening, Session 3 turnaround spot-checking, the aviation roles overview, functional responsibility and authority grammar drills, 'Day in the Life' role handoffs, a winter weather operational dilemma debate, and a 10-minute vocabulary consolidation review.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News, Current Events & Session 3 Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international aviation headlines followed by rapid spot-checking of Session 3 turnaround and GSE vocabulary (GPU, ASU, Pushback Tug, Chocks, FOD, Belt Loader)."
            },
            {
              "time": "10-30",
              "title": "Part 2: Aviation Roles Across the Industry (20 mins)",
              "description": "Explore the five operational domains (Landside, Airside/Ramp, Flight Crew, ATCOs, and TSEEAC). Clarify the core distinction between ATCO tactical separation authority and TSEEAC AFISO/auditing responsibilities."
            },
            {
              "time": "30-50",
              "title": "Part 3: Functional Grammar Focus: Responsibilities, Duties & Jurisdiction (20 mins)",
              "description": "Examine high-yield B2 structures: 'responsible for + -ing', 'tasked with + -ing', 'in charge of', 'have authority over / to', 'ensure that', and 'report to vs. liaise with'. Practice with interactive scenario prompts."
            },
            {
              "time": "50-75",
              "title": "Part 4: Role-Play Simulation: 'A Day in the Life' Operational Handoffs (25 mins)",
              "description": "Collaborative paired and triad role-play: simulate professional handoffs and resolve bottlenecks between Turnaround Coordinator <-> First Officer, AFISO <-> Inbound Pilot, and Terminal Duty Manager <-> Ramp Supervisor."
            },
            {
              "time": "75-110",
              "title": "Part 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
              "description": "Interactive multi-stakeholder debate: resolve an emergency aerodrome diversion scenario during freezing fog and ramp congestion. Argue priorities, negotiate trade-offs, and establish a consensus sequence."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 aviation profession terms, word stress and phonological drills, personal reflection, and continuous learning log update."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card4.jpg",
            "title": "Jobs in Aviation: Roles, Responsibilities & Operational Interfaces",
            "subtitle": "Landside, Airside, Flight Crew, Air Traffic Services & Civil Aviation Corps (TSEEAC)"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
            "summary": "Every session begins with a 10-minute professional opening: analyzing current aviation headlines followed by rapid spot-checking of Session 3 ground operations and GSE vocabulary.",
            "modeBadges": [
              "👥 Pairs / Plenary",
              "⏱️ 10 mins",
              "🗣️ Operational Recall Drill",
              "🎯 Technical Vocabulary & Fluency"
            ],
            "instructions": [
              "Step 1 (Aviation News Exchange - 4 mins): In pairs, discuss the current aviation headlines prompt. Share one news item regarding airport staffing, ATM capacity, or airline operations.",
              "Step 2 (Session 3 GSE Spot-Check - 4 mins): Quiz your partner on Questions 1 to 4 (GPU function, Marshaller guidance, turnaround time critical path, FOD prevention) before revealing answers.",
              "Step 3 (Class Operational Recap - 2 mins): Plenary review of one GSE definition. Highlight why GPU usage reduces ramp emissions and APU wear."
            ],
            "deliverable": "Spoken explanation of 1 aviation operational news item and an accurate technical explanation of GPU or turnaround time.",
            "teacherNotes": "Cold-call pairs. Probe beyond superficial definitions: ask what happens to an aircraft's departure slot if the GPU fails during pushback disconnect.",
            "newsPrompts": [
              "What aviation, airline, or ATM news stories caught your attention in the headlines this week?",
              "How are airports and air navigation service providers managing staffing, recruitment, or new operational procedures this season?"
            ],
            "spotCheck": {
              "title": "Session 3 Vocabulary Spot-Check (Ground Operations & GSE)",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary function of a Ground Power Unit (GPU) during an aircraft turnaround?",
                  "answer": "A GPU supplies 400Hz AC electrical power to the aircraft while parked at the gate stand, allowing the flight crew to shut down the main engines and auxiliary power unit (APU) to save fuel and reduce ramp emissions."
                },
                {
                  "id": 2,
                  "q": "How does a Marshaller guide an arriving aircraft to its parking stand when automated docking is unavailable?",
                  "answer": "A marshaller uses illuminated wands or visual hand signals to direct the flight deck along the painted yellow lead-in line to the precise nosewheel stop mark."
                },
                {
                  "id": 3,
                  "q": "What is turnaround time (TAT) and why is minimizing it critical for airlines?",
                  "answer": "Turnaround time is the elapsed period from chocks-on at arrival to chocks-off at departure. Minimizing TAT maximizes aircraft daily utilization and prevents knock-on departure slot delays."
                },
                {
                  "id": 4,
                  "q": "What is Foreign Object Debris (FOD) and how do ramp teams prevent it?",
                  "answer": "FOD is any loose item, tool, fragment, or trash on the apron or taxiway that could be ingested by a jet engine or damage tires; ground crews conduct continuous visual scans and regular FOD sweeps."
                }
              ]
            }
          },
          "jobTaxonomy": {
            "title": "Activity 2: Aviation Roles Across the Industry (20 mins)",
            "summary": "Aviation is an intricate ecosystem where specialized professions collaborate seamlessly. Explore the five primary operational domains, their key responsibilities, and the essential distinction between ATCO separation authority and TSEEAC functions.",
            "modeBadges": [
              "👥 Small Groups (3-4)",
              "⏱️ 20 mins",
              "🧭 Roles & Jurisdiction Analysis",
              "🎯 Operational Domain Mastery"
            ],
            "instructions": [
              "Step 1 (Domain Exploration - 8 mins): Study the 5 operational domains: Landside, Airside, Flight Crew, ATCOs, and TSEEAC. Identify the primary physical jurisdiction and core duty for each.",
              "Step 2 (Crucial Distinction Audit - 6 mins): Analyze the structural legal difference between ATCOs (tactical separation authority) and TSEEAC / AFISOs (flight information and advisory services without separation authority).",
              "Step 3 (Role Matching Drill - 6 mins): In pairs, randomly name a professional role (e.g. TRC, AFISO, Marshaller, Tower ATCO). Your partner must state the domain, primary duty, and whom they report to."
            ],
            "deliverable": "Accurate categorization of all 5 domains and a clear spoken explanation distinguishing ATCO separation authority from TSEEAC AFISO flight information.",
            "teacherNotes": "Emphasize the ENAC/DGAC institutional distinction: TSEEAC is a civil aviation body, AFISOs provide information/alerting, whereas ATCOs hold licensing to issue binding separation clearances.",
            "domains": [
              {
                "id": "landside",
                "name": "1. Landside Operations",
                "color": "sky",
                "roles": [
                  "Passenger Service Agent (PSA)",
                  "Security Screening Officer",
                  "Terminal Duty Manager",
                  "Border Control Officer"
                ],
                "description": "Manages passenger processing, documentation verification, terminal safety, and accessibility before the airside security boundary.",
                "keyJurisdiction": "Public terminal zones, check-in concourses, baggage drop systems, and departure lounge coordination.",
                "sampleDuty": "Passenger Service Agents verify travel documents, handle gate boarding announcements, and manage baggage reconciliation."
              },
              {
                "id": "airside",
                "name": "2. Airside & Ramp Operations",
                "color": "amber",
                "roles": [
                  "Turnaround Coordinator (TRC)",
                  "Ramp Agent / Baggage Handler",
                  "Marshaller",
                  "Pushback Tug Driver",
                  "De-icing Rig Operator",
                  "Refueller / Hydrant Dispenser"
                ],
                "description": "Coordinates all parallel ground servicing operations around the aircraft within the designated safety servicing envelope.",
                "keyJurisdiction": "Apron stands, equipment staging lanes, airside service roads, and aircraft servicing envelopes.",
                "sampleDuty": "The Turnaround Coordinator oversees parallel servicing tasks, monitors fuel and baggage loading, and enforces on-time departure."
              },
              {
                "id": "flightcrew",
                "name": "3. Aircraft Flight Crew",
                "color": "indigo",
                "roles": [
                  "Captain (Pilot-in-Command)",
                  "First Officer (Co-Pilot)",
                  "Purser / Senior Cabin Manager",
                  "Cabin Crew / Flight Attendant"
                ],
                "description": "Responsible for the safe navigation, operation, passenger welfare, and emergency readiness of the aircraft from off-blocks to on-blocks.",
                "keyJurisdiction": "Cockpit flight deck, passenger cabin, aircraft technical logbook, and emergency systems.",
                "sampleDuty": "The First Officer performs external walkaround inspections, cross-checks FMC route programming, and monitors radio communications."
              },
              {
                "id": "atco",
                "name": "4. Air Traffic Control Officers (ATCOs)",
                "color": "rose",
                "roles": [
                  "Aerodrome / Tower ATCO",
                  "Approach Radar Controller (APP)",
                  "Area / En-Route Controller (ACC)"
                ],
                "description": "Licensed air traffic controllers possessing executive legal authority to issue binding clearances and ensure safe tactical separation between aircraft in flight and on active movement areas.",
                "keyJurisdiction": "Active runways, taxiways, controlled airspace sectors, and terminal maneuvering areas (TMA).",
                "sampleDuty": "Tower ATCOs issue mandatory takeoff and landing clearances, manage runway sequencing, and maintain aircraft separation."
              },
              {
                "id": "tseeac",
                "name": "5. Civil Aviation Operations Corps (TSEEAC)",
                "color": "emerald",
                "roles": [
                  "Aerodrome Flight Information Service Officer (AFISO)",
                  "Aerodrome Operations Coordinator",
                  "DGAC Aviation Safety Inspector",
                  "Air Navigation Technical Support Officer"
                ],
                "description": "Civil aviation civil servants who perform critical operations, flight information, safety oversight, and aerodrome management. IMPORTANT: TSEEAC personnel are NOT air traffic controllers and do NOT have separation authority; AFISOs provide advisory flight information and alerting service at non-controlled aerodromes.",
                "keyJurisdiction": "AFIS aerodromes, civil aviation regional directorates (DSAC), airport safety coordination, and technical surveillance.",
                "sampleDuty": "An AFISO provides weather reports, runway conditions, and traffic advisories to pilots, while DGAC safety inspectors conduct regulatory compliance audits."
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Focus: Roles, Responsibilities & Authority (20 mins)",
            "summary": "Professional aviation communication demands absolute precision when describing who does what, who reports to whom, and who holds regulatory authority.",
            "modeBadges": [
              "👤 Individual -> 👥 Pairs",
              "⏱️ 20 mins",
              "✍️ Operational Syntax Drill",
              "🎯 Collocation & Precision"
            ],
            "instructions": [
              "Step 1 (Formula Mastery - 5 mins): Review the 6 authority and responsibility structures above. Note preposition rules: 'responsible FOR + -ing', 'tasked WITH + -ing', 'authority OVER / TO + verb'.",
              "Step 2 (Role Duty Construction - 10 mins): With a partner, write 3 operational sentences describing different aviation roles using: (1) 'be tasked with', (2) 'have authority to', and (3) 'liaise with vs. report to'.",
              "Step 3 (Roles & Responsibilities Challenge - 5 mins): Complete the 4 interactive grammar challenge questions individually, check your answers, and discuss the preposition rules."
            ],
            "deliverable": "4 verified practice question answers + 3 original spoken or written role-duty descriptions demonstrating correct prepositional collocations.",
            "teacherNotes": "Stamp out 'responsible OF' immediately (French interference). Highlight the difference between hierarchical reporting ('reports to the TRC') and lateral coordination ('liaises with fueling').",
            "formulas": [
              {
                "structure": "be responsible for + -ing / noun",
                "usage": "Core ongoing duty or accountability",
                "example": "The Turnaround Coordinator is responsible for ensuring all servicing vehicles clear the stand before pushback."
              },
              {
                "structure": "be tasked with + -ing / noun",
                "usage": "Official assignment, directive, or designated role",
                "example": "The AFIS officer is tasked with providing traffic information and weather advisories to inbound aircraft."
              },
              {
                "structure": "be in charge of + noun / -ing",
                "usage": "Supervisory oversight of a team, facility, or zone",
                "example": "The Terminal Duty Manager is in charge of passenger concourse flow and emergency crowd management."
              },
              {
                "structure": "have authority over / to + verb",
                "usage": "Legal jurisdiction or executive command power",
                "example": "Tower ATCOs have authority over active runways and issue binding takeoff and landing clearances."
              },
              {
                "structure": "ensure that + clause",
                "usage": "Verification, quality control, and safety compliance",
                "example": "Safety inspectors ensure that airline maintenance procedures comply with DGAC regulations."
              },
              {
                "structure": "report to vs. liaise with",
                "usage": "Hierarchy vs. horizontal peer collaboration",
                "example": "The Ramp Agent reports to the Turnaround Coordinator and liaises with fueling technicians."
              }
            ],
            "roleClinic": [
              {
                "id": 1,
                "prompt": "The First Officer is tasked with (conducting / to conduct / conduct) the pre-flight external walkaround inspection.",
                "answer": "conducting",
                "explanation": "'Be tasked with' is followed by the preposition 'with', which requires a gerund (-ing)."
              },
              {
                "id": 2,
                "prompt": "Unlike ATCOs, AFISOs do not have authority (to separate / separating / for separate) aircraft tactically.",
                "answer": "to separate",
                "explanation": "'Have authority to' is followed by the base infinitive ('to separate')."
              },
              {
                "id": 3,
                "prompt": "The Ramp Agent is responsible (for / of / to) securing the wheel chocks once the aircraft comes to a stop.",
                "answer": "for",
                "explanation": "'Responsible for' is the correct prepositional collocation (avoid the French false friend 'responsible of')."
              },
              {
                "id": 4,
                "prompt": "The Turnaround Coordinator must ensure (that / what / which) the cargo hold doors are locked before pushback.",
                "answer": "that",
                "explanation": "'Ensure' takes a content clause starting with 'that' ('ensure that + subject + verb')."
              }
            ]
          },
          "handoffSimulation": {
            "title": "Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins)",
            "summary": "Effective inter-departmental handoffs prevent bottlenecks and eliminate miscommunication. Work in pairs or triads to conduct professional operational handovers.",
            "modeBadges": [
              "👥 Pairs / Triads",
              "⏱️ 25 mins",
              "🎭 Operational Interface Simulation",
              "🎯 Radio & Handoff Fluency"
            ],
            "instructions": [
              "Step 1 (Scenario Assignment - 5 mins): Choose Pair 1 (TRC <-> Flight Deck), Pair 2 (AFISO <-> Inbound VFR), or Pair 3 (Terminal Manager <-> Ramp Supervisor). Read your specific role context.",
              "Step 2 (Simulation Rehearsal - 12 mins): Conduct the operational handoff in character. You must incorporate at least two of the mandatory target phrases (e.g., 'tasked with', 'liaised with', 'ensure that').",
              "Step 3 (Role Reversal & Feedback - 8 mins): Swap roles and repeat the dialogue under modified conditions (e.g. 5 minutes until slot loss or sudden weather degradation)."
            ],
            "deliverable": "A 2-minute fluent operational handoff dialogue successfully resolving an operational conflict using mandatory responsibility formulas.",
            "teacherNotes": "Listen for realistic aviation tone: professional, concise, assertive, but collaborative. Ensure students actually use the target phrases rather than informal conversational English.",
            "scenarios": [
              {
                "id": "pair1",
                "title": "Pair 1: Turnaround Coordinator (TRC) <-> First Officer (Flight Deck)",
                "context": "Flight AF418 is scheduled off-blocks in 8 minutes. Cargo loading is complete, but the refueller was held up by a minor hose leak. The First Officer needs the final fuel uplift and signed load sheet.",
                "roleA": "Turnaround Coordinator: Confirm fuel uplift of 5,800 kg, present the final trim sheet for Captain's signature, and report stand clearance status.",
                "roleB": "First Officer: Cross-check the fuel quantity against FMC calculations, verify the center of gravity (CG) limits on the trim sheet, and request pushback readiness.",
                "targetPhrases": [
                  "\"I am responsible for confirming that all ground equipment has detached...\"",
                  "\"Could you ensure that the load sheet reflects the actual fuel on board?\"",
                  "\"We liaised with the fueling technician, and all safety valves are verified.\""
                ]
              },
              {
                "id": "pair2",
                "title": "Pair 2: AFISO (TSEEAC) <-> Inbound VFR Aircraft",
                "context": "A Cessna 172 is inbound to a non-controlled regional airfield. The AFISO is on duty in the aerodrome flight information station. Low winter sun and flocking birds have been observed near Runway 26 threshold.",
                "roleA": "AFISO (TSEEAC): Provide aerodrome flight information: runway in use 26, surface wind 240/12kt, QNH 1018, cautionary bird advisory, and report on opposing glider traffic.",
                "roleB": "VFR Pilot: Acknowledge information, report position over visual reporting point (Sierra), and state intentions for standard overhead join.",
                "targetPhrases": [
                  "\"Information only: Runway 26 in use, wind 240 degrees at 12 knots...\"",
                  "\"Be advised, a flock of lapwings has been reported near the threshold...\"",
                  "\"As an AFISO, I am tasked with providing traffic and safety advisories.\""
                ]
              },
              {
                "id": "pair3",
                "title": "Pair 3: Terminal Duty Manager <-> Ramp Operations Supervisor",
                "context": "A group of 14 delayed transit passengers from a connecting transatlantic flight has just cleared security. The departure flight has a strict 10-minute CTOT slot.",
                "roleA": "Terminal Duty Manager: Request a 5-minute gate hold to allow the transit passengers to board, arguing customer service and connection costs.",
                "roleB": "Ramp Operations Supervisor: Defend the slot departure, explaining the financial and network penalties of missing the Eurocontrol CTOT slot.",
                "targetPhrases": [
                  "\"We are in charge of passenger processing and must avoid misconnecting passengers...\"",
                  "\"If we miss this slot, ATC will hold the flight for at least 45 minutes...\"",
                  "\"Can we ensure that baggage is prioritized while passengers board through the gate?\""
                ]
              }
            ]
          },
          "careerForumDebate": {
            "title": "Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
            "summary": "A fast-moving winter weather front brings freezing fog, reducing Runway Visual Range (RVR) to 350m at a regional aerodrome. Stand capacity is at 95%, de-icing rigs are working at maximum throughput, and two inbound diversions are requesting priority due to fuel minimums. Each team represents an aviation profession, defends operational priorities, and negotiates a consensus action plan.",
            "modeBadges": [
              "👥 4-Way Multi-Stakeholder Forum",
              "⏱️ 35 mins",
              "⚡ Crisis Management Negotiation",
              "🎯 Consensus Building"
            ],
            "instructions": [
              "Step 1 (Crisis Briefing & Stance - 8 mins): Read the Winter Storm & Diversion Gridlock scenario. Assign one stakeholder role per team member (ATCO, AFISO/Ops, TRC/Ground, Captain). Review your non-negotiable priority.",
              "Step 2 (Stakeholder Round-Robin - 12 mins): Each stakeholder presents their operational dilemma and proposed sequence of events. State what your role can and cannot concede.",
              "Step 3 (Consensus Negotiation & Rating - 15 mins): Negotiate a sequential 3-step action plan using conditional language ('Provided that...', 'On condition that...'). Vote on the 3 consensus challenges in the agreement tracker."
            ],
            "deliverable": "A negotiated 3-step crisis operational resolution signed off by all 4 stakeholders, balancing fuel safety, stand capacity, de-icing holdover times, and slot preservation.",
            "teacherNotes": "Maintain high tension! Remind them that if no decision is made within 20 minutes, the Captain's crew times out, the diversion exhausts fuel reserves, and runway friction degrades further. Demand conditional structures.",
            "scenario": "Regional Aerodrome 'Echo-Delta' is experiencing severe winter weather with RVR 350m and freezing drizzle. Only 2 parking stands remain open. Two diverted commercial jets are in the holding pattern, one declaring 'Minimum Fuel'. On the ground, an outbound flight on Stand 2 has passengers boarded, but its holdover time has expired, requiring a second de-icing cycle.",
            "stakeholders": [
              {
                "name": "Tower & Approach ATCOs",
                "priority": "Runway safety, separation in holding stacks, and emergency prioritization for the minimum-fuel diversion.",
                "stance": "Has sole authority over runway access; demands clear runway sequencing and will not clear departures until emergency fuel traffic lands."
              },
              {
                "name": "AFISO / Aerodrome Operations Coordinator (TSEEAC)",
                "priority": "Airfield friction coefficient measurement, snow and de-icing coordinator, apron safety compliance, and stand allocation.",
                "stance": "Liaises between airport authority and services; ensures de-icing pad does not gridlock and coordinates snow clearing plows on taxiways."
              },
              {
                "name": "Turnaround Coordinator & Ground Handling Lead",
                "priority": "Ramp safety, ground equipment availability, de-icing fluid inventory, and baggage handling for diverted passengers.",
                "stance": "Warns that ramp handlers are nearing maximum duty limits and de-icing fluid is at critical reserves; insists on clearing Stand 2 first."
              },
              {
                "name": "Airline Captain (Outbound Flight on Stand 2)",
                "priority": "Passenger welfare, flight duty period (FDP) limits, and slot adherence.",
                "stance": "Argues that if the aircraft is not de-iced and dispatched within 20 minutes, the crew will exceed legal duty hours and the flight must be cancelled."
              }
            ],
            "consensusChallenge": "In mixed teams of 4, negotiate a step-by-step priority sequence using conditional structures ('Provided that...', 'As long as...', 'On condition that...') to resolve the standoff safely and efficiently."
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "The final 10 minutes consolidate today's high-yield vocabulary, reinforce syllable stress on professional job titles, and update your personal continuous assessment log.",
            "modeBadges": [
              "👤 Individual & 👥 Pairs",
              "⏱️ 10 mins",
              "⚡ Syllable Stress & Self-Audit",
              "🎯 Formative Synthesis"
            ],
            "instructions": [
              "Step 1 (Pronunciation Practice - 4 mins): Practice pronouncing the 6 multisyllabic professional titles aloud with correct syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st).",
              "Step 2 (Rapid-Fire Partner Quiz - 4 mins): Test your partner on 3 random terms from today's session (e.g. PSA vs. TRC, AFISO jurisdiction, Foreign Object Debris prevention).",
              "Step 3 (Self-Assessment & Portfolio - 2 mins): Rate your confidence (1 to 5) in explaining your future aviation profession. Record target terms in your semester study log."
            ],
            "deliverable": "Accurate pronunciation of 4 key multisyllabic aviation terms + complete self-assessment entry in study portfolio.",
            "teacherNotes": "Focus on primary stress in technical nouns vs. verbs. Remind students that Session 5 is Formative Evaluation 1: ensure portfolios, vocabulary logs, and presentations are fully prepped.",
            "reviewPrompts": [
              {
                "title": "1. Syllable Stress & Pronunciation Practice",
                "desc": "Drill accurate syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), tech-NI-cian (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st), sur-VEIL-lance (2nd)."
              },
              {
                "title": "2. Rapid-Fire Retrieval Quiz",
                "desc": "In pairs, quiz each other on 3 random terms from today's 18 vocabulary bank without checking notes (e.g. AFISO vs. ATCO, Turnaround Coordinator, Flight Dispatcher)."
              },
              {
                "title": "3. Self-Assessment & Continuous Learning",
                "desc": "Rate your ability (1 to 5) to explain the responsibilities of your future aviation profession. Update your study portfolio with target expressions."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 4: Jobs in Aviation",
          "summary": "Review the 18 key technical and professional terms covering landside, airside, flight crew, air traffic control (ATCO), and civil aviation administration (TSEEAC / AFISO) to enhance your speaking fluency and TOEIC accuracy.",
          "terms": [
            {
              "num": "01",
              "term": "Aerodrome Flight Information Service Officer (AFISO)",
              "definition": "A certified aeronautical station officer (often TSEEAC) providing traffic advisories, aerodrome conditions, and alerting services to aircraft at non-controlled aerodromes without separation authority."
            },
            {
              "num": "02",
              "term": "Air Traffic Control Officer (ATCO)",
              "definition": "A licensed professional legally authorized to issue mandatory control clearances and maintain safe tactical separation between aircraft in flight and maneuvering on active airport surfaces."
            },
            {
              "num": "03",
              "term": "Turnaround Coordinator (TRC)",
              "definition": "The ground handling operations lead on the apron responsible for orchestrating servicing teams, monitoring critical-path milestones, and ensuring punctual departure."
            },
            {
              "num": "04",
              "term": "Ramp Agent",
              "definition": "An airside ground handler responsible for loading and unloading baggage and cargo, positioning ground support equipment, and securing the aircraft servicing envelope."
            },
            {
              "num": "05",
              "term": "Marshaller",
              "definition": "A trained apron ground handler who uses illuminated wands or visual hand signals to guide an incoming aircraft along the taxi line to its exact parking mark."
            },
            {
              "num": "06",
              "term": "Flight Operations Officer / Dispatcher",
              "definition": "A licensed flight planning specialist who calculates fuel requirements, monitors en-route NOTAMs and weather, prepares flight plans, and co-signs the dispatch release with the captain."
            },
            {
              "num": "07",
              "term": "Passenger Service Agent (PSA)",
              "definition": "A landside airline or ground handling employee who assists travelers at check-in desks, checks travel documentation, reconciles hold luggage, and conducts gate boarding."
            },
            {
              "num": "08",
              "term": "Aviation Safety Inspector",
              "definition": "A civil aviation authority official (e.g. DGAC/DSAC, often TSEEAC) tasked with auditing airlines, maintenance repair organizations, and aerodromes for strict regulatory compliance."
            },
            {
              "num": "09",
              "term": "Aerodrome Operations Coordinator",
              "definition": "An airport duty specialist (often TSEEAC) responsible for inspecting runway pavement friction, monitoring obstacle limitation surfaces, managing wildlife hazards, and coordinating apron works."
            },
            {
              "num": "10",
              "term": "Avionics Technician",
              "definition": "A certified aircraft maintenance engineer specialized in troubleshooting, repairing, calibrating, and certifying cockpit flight management computers, radar, and navigation systems."
            },
            {
              "num": "11",
              "term": "First Officer",
              "definition": "The second-in-command pilot on the flight deck who shares flight navigation, radio communications, and system monitoring duties with the Captain."
            },
            {
              "num": "12",
              "term": "Purser / Cabin Manager",
              "definition": "The senior cabin crew member responsible for supervising cabin attendants, directing in-flight passenger safety procedures, and coordinating with the flight deck."
            },
            {
              "num": "13",
              "term": "Security Screening Officer",
              "definition": "A certified landside security officer who operates X-ray scanners, millimeter-wave body scanners, and explosive trace detectors to screen passengers and carry-on luggage."
            },
            {
              "num": "14",
              "term": "De-icing Rig Operator",
              "definition": "A specialized ramp technician who operates aerial boom trucks to spray heated glycol mixtures onto aircraft surfaces to eradicate snow, frost, and ice contamination."
            },
            {
              "num": "15",
              "term": "Pushback Tug Driver",
              "definition": "A heavy-equipment ramp driver specialized in connecting towbars or towbarless cradles to safely push aircraft backward out of gate stands into the taxi lane."
            },
            {
              "num": "16",
              "term": "Airfield Maintenance Technician",
              "definition": "A technical specialist who inspects and maintains aeronautical ground lighting (AGL), taxiway guidance signage, runway markings, and perimeter security fences."
            },
            {
              "num": "17",
              "term": "Refueller / Fuel Hydrant Operator",
              "definition": "A ramp fueling technician who connects mobile fuel bowsers or underground hydrant dispensers to aircraft fuel valves to deliver precise, contamination-tested Jet-A1."
            },
            {
              "num": "18",
              "term": "Load Controller / Weight & Balance Specialist",
              "definition": "An operations professional who calculates aircraft center-of-gravity (CG), models payload distribution, and generates the official load and trim sheet required for safe takeoff."
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
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations."
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology."
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation."
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
          "toeic": {
            "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
            "options": [
              {
                "letter": "A",
                "text": "with"
              },
              {
                "letter": "B",
                "text": "for"
              },
              {
                "letter": "C",
                "text": "of"
              },
              {
                "letter": "D",
                "text": "to"
              }
            ],
            "correctLetter": "B",
            "correctText": "for",
            "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
            "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties."
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations."
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling."
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries."
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • Evaluation Rubrics",
              "name": "ETS Global TOEIC Practice",
              "desc": "Official TOEIC Speaking & Writing evaluation benchmarks and sample workplace responses for aviation professionals."
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
              "url": "https://www.flightglobal.com"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
              "options": [
                {
                  "letter": "A",
                  "text": "with"
                },
                {
                  "letter": "B",
                  "text": "for"
                },
                {
                  "letter": "C",
                  "text": "of"
                },
                {
                  "letter": "D",
                  "text": "to"
                }
              ],
              "correctLetter": "B",
              "correctText": "for",
              "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
              "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
            },
            {
              "stem": "Unlike aerodrome controllers who issue clearances, AFIS officers are tasked with ________ flight information and meteorological updates to inbound pilots.",
              "options": [
                {
                  "letter": "A",
                  "text": "provide"
                },
                {
                  "letter": "B",
                  "text": "provides"
                },
                {
                  "letter": "C",
                  "text": "providing"
                },
                {
                  "letter": "D",
                  "text": "provided"
                }
              ],
              "correctLetter": "C",
              "correctText": "providing",
              "analysis": "\"Be tasked with\" is followed by a preposition (\"with\"), which requires a gerund (\"providing\") or a noun phrase.",
              "strategy": "Identify \"tasked with\" -> verb must be in the gerund form (-ing)."
            },
            {
              "stem": "Before releasing the aircraft for departure, the flight dispatcher must verify that all load sheets ________ by the captain.",
              "options": [
                {
                  "letter": "A",
                  "text": "have signed"
                },
                {
                  "letter": "B",
                  "text": "have been signed"
                },
                {
                  "letter": "C",
                  "text": "will sign"
                },
                {
                  "letter": "D",
                  "text": "signing"
                }
              ],
              "correctLetter": "B",
              "correctText": "have been signed",
              "analysis": "Passive voice is required because load sheets cannot sign themselves; they must be signed by the captain.",
              "strategy": "Check if the subject (\"all load sheets\") is the actor or the receiver of the verb. Since it is the receiver, choose passive voice \"have been signed\"."
            },
            {
              "stem": "The civil aviation safety inspector conducted an unannounced audit in order to ensure ________ ground handling personnel were strictly following apron safety protocols.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "what"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Ensure that\" introduces a content clause detailing what is being verified or secured.",
              "strategy": "\"Ensure\" takes a \"that\" clause (\"ensure that + subject + verb\")."
            },
            {
              "stem": "The airport duty manager was commended for handling the ramp emergency calmly, ________ severe winter weather conditions.",
              "options": [
                {
                  "letter": "A",
                  "text": "despite"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "unless"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "A",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition expressing concession followed by a noun phrase (\"severe winter weather conditions\").",
              "strategy": "Check what follows the blank. \"Severe winter weather conditions\" is a noun phrase, so a preposition (\"despite\") is required rather than a subordinating conjunction like \"although\"."
            }
          ]
        }
      },
      "5": {
        "session": 5,
        "objectives": {
          "title": "Session 5 - Jobs in Aviation Objectives",
          "summary": "By the end of this session, you will be able to distinguish and categorize aviation operational professions across landside, airside, flight operations, air traffic services, and civil aviation administration (TSEEAC), accurately articulate professional duties and jurisdictions using formal B2 structures, and collaborate effectively during operational handoffs.",
          "items": [
            {
              "num": 1,
              "title": "Categorize Aviation Operational Roles (Vocabulary & Classification)",
              "description": "Distinguish between Landside (passenger handling, security screening, border control), Airside (turnaround coordination, ramp dispatch, marshalling, pushback), Flight Crew (captain, first officer, purser), Air Traffic Control (tower, approach, en-route), and Civil Aviation Administration (TSEEAC)."
            },
            {
              "num": 2,
              "title": "Clarify TSEEAC Operational Functions (Institutional Precision)",
              "description": "Accurately explain that TSEEAC personnel are NOT air traffic controllers (no tactical separation authority), but perform critical functions including AFISO (flight information and alerting services), aerodrome operations coordination, and DGAC safety oversight."
            },
            {
              "num": 3,
              "title": "Express Professional Duties & Authority (Grammar in Context)",
              "description": "Master and apply functional formulas: 'be responsible for + -ing', 'be tasked with + -ing', 'be in charge of + noun', 'have authority over / to', and 'ensure that + clause'."
            },
            {
              "num": 4,
              "title": "Simulate Professional Shift & Turnaround Handoffs (Speaking Fluency)",
              "description": "Conduct structured peer briefings between adjacent roles (Turnaround Coordinator <-> First Officer, AFISO <-> VFR Pilot, Terminal Duty Manager <-> Ramp Supervisor) to resolve operational bottlenecks."
            },
            {
              "num": 5,
              "title": "Debate Airport Operational Dilemmas (Interaction & Negotiation)",
              "description": "Analyze complex airport operational dilemmas (e.g. winter weather diversions and ramp congestion) from specific professional viewpoints and negotiate a consensus action plan."
            },
            {
              "num": 6,
              "title": "Refine Professional Aviation Vocabulary Pronunciation (Phonology)",
              "description": "Place accurate primary and secondary word stress on complex professional terms (au-THOR-i-ty, re-SPON-si-ble, co-OR-di-na-tor, tech-NI-cian, o-ver-SIGHT, sur-VEIL-lance)."
            },
            {
              "num": 7,
              "title": "Master Prepositions of Responsibility & Passive Voice (TOEIC Practice)",
              "description": "Identify common test traps in TOEIC Parts 5 & 6, particularly verbs of obligation, prepositions of responsibility ('responsible for', 'in charge of'), and passive verb structures in airport notices."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news opening, Session 3 turnaround spot-checking, the aviation roles overview, functional responsibility and authority grammar drills, 'Day in the Life' role handoffs, a winter weather operational dilemma debate, and a 10-minute vocabulary consolidation review.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News, Current Events & Session 3 Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international aviation headlines followed by rapid spot-checking of Session 3 turnaround and GSE vocabulary (GPU, ASU, Pushback Tug, Chocks, FOD, Belt Loader)."
            },
            {
              "time": "10-30",
              "title": "Part 2: Aviation Roles Across the Industry (20 mins)",
              "description": "Explore the five operational domains (Landside, Airside/Ramp, Flight Crew, ATCOs, and TSEEAC). Clarify the core distinction between ATCO tactical separation authority and TSEEAC AFISO/auditing responsibilities."
            },
            {
              "time": "30-50",
              "title": "Part 3: Functional Grammar Focus: Responsibilities, Duties & Jurisdiction (20 mins)",
              "description": "Examine high-yield B2 structures: 'responsible for + -ing', 'tasked with + -ing', 'in charge of', 'have authority over / to', 'ensure that', and 'report to vs. liaise with'. Practice with interactive scenario prompts."
            },
            {
              "time": "50-75",
              "title": "Part 4: Role-Play Simulation: 'A Day in the Life' Operational Handoffs (25 mins)",
              "description": "Collaborative paired and triad role-play: simulate professional handoffs and resolve bottlenecks between Turnaround Coordinator <-> First Officer, AFISO <-> Inbound Pilot, and Terminal Duty Manager <-> Ramp Supervisor."
            },
            {
              "time": "75-110",
              "title": "Part 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
              "description": "Interactive multi-stakeholder debate: resolve an emergency aerodrome diversion scenario during freezing fog and ramp congestion. Argue priorities, negotiate trade-offs, and establish a consensus sequence."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 aviation profession terms, word stress and phonological drills, personal reflection, and continuous learning log update."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card4.jpg",
            "title": "Jobs in Aviation: Roles, Responsibilities & Operational Interfaces",
            "subtitle": "Landside, Airside, Flight Crew, Air Traffic Services & Civil Aviation Corps (TSEEAC)"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
            "summary": "Every session begins with a 10-minute professional opening: analyzing current aviation headlines followed by rapid spot-checking of Session 3 ground operations and GSE vocabulary.",
            "modeBadges": [
              "👥 Pairs / Plenary",
              "⏱️ 10 mins",
              "🗣️ Operational Recall Drill",
              "🎯 Technical Vocabulary & Fluency"
            ],
            "instructions": [
              "Step 1 (Aviation News Exchange - 4 mins): In pairs, discuss the current aviation headlines prompt. Share one news item regarding airport staffing, ATM capacity, or airline operations.",
              "Step 2 (Session 3 GSE Spot-Check - 4 mins): Quiz your partner on Questions 1 to 4 (GPU function, Marshaller guidance, turnaround time critical path, FOD prevention) before revealing answers.",
              "Step 3 (Class Operational Recap - 2 mins): Plenary review of one GSE definition. Highlight why GPU usage reduces ramp emissions and APU wear."
            ],
            "deliverable": "Spoken explanation of 1 aviation operational news item and an accurate technical explanation of GPU or turnaround time.",
            "teacherNotes": "Cold-call pairs. Probe beyond superficial definitions: ask what happens to an aircraft's departure slot if the GPU fails during pushback disconnect.",
            "newsPrompts": [
              "What aviation, airline, or ATM news stories caught your attention in the headlines this week?",
              "How are airports and air navigation service providers managing staffing, recruitment, or new operational procedures this season?"
            ],
            "spotCheck": {
              "title": "Session 3 Vocabulary Spot-Check (Ground Operations & GSE)",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary function of a Ground Power Unit (GPU) during an aircraft turnaround?",
                  "answer": "A GPU supplies 400Hz AC electrical power to the aircraft while parked at the gate stand, allowing the flight crew to shut down the main engines and auxiliary power unit (APU) to save fuel and reduce ramp emissions."
                },
                {
                  "id": 2,
                  "q": "How does a Marshaller guide an arriving aircraft to its parking stand when automated docking is unavailable?",
                  "answer": "A marshaller uses illuminated wands or visual hand signals to direct the flight deck along the painted yellow lead-in line to the precise nosewheel stop mark."
                },
                {
                  "id": 3,
                  "q": "What is turnaround time (TAT) and why is minimizing it critical for airlines?",
                  "answer": "Turnaround time is the elapsed period from chocks-on at arrival to chocks-off at departure. Minimizing TAT maximizes aircraft daily utilization and prevents knock-on departure slot delays."
                },
                {
                  "id": 4,
                  "q": "What is Foreign Object Debris (FOD) and how do ramp teams prevent it?",
                  "answer": "FOD is any loose item, tool, fragment, or trash on the apron or taxiway that could be ingested by a jet engine or damage tires; ground crews conduct continuous visual scans and regular FOD sweeps."
                }
              ]
            }
          },
          "jobTaxonomy": {
            "title": "Activity 2: Aviation Roles Across the Industry (20 mins)",
            "summary": "Aviation is an intricate ecosystem where specialized professions collaborate seamlessly. Explore the five primary operational domains, their key responsibilities, and the essential distinction between ATCO separation authority and TSEEAC functions.",
            "modeBadges": [
              "👥 Small Groups (3-4)",
              "⏱️ 20 mins",
              "🧭 Roles & Jurisdiction Analysis",
              "🎯 Operational Domain Mastery"
            ],
            "instructions": [
              "Step 1 (Domain Exploration - 8 mins): Study the 5 operational domains: Landside, Airside, Flight Crew, ATCOs, and TSEEAC. Identify the primary physical jurisdiction and core duty for each.",
              "Step 2 (Crucial Distinction Audit - 6 mins): Analyze the structural legal difference between ATCOs (tactical separation authority) and TSEEAC / AFISOs (flight information and advisory services without separation authority).",
              "Step 3 (Role Matching Drill - 6 mins): In pairs, randomly name a professional role (e.g. TRC, AFISO, Marshaller, Tower ATCO). Your partner must state the domain, primary duty, and whom they report to."
            ],
            "deliverable": "Accurate categorization of all 5 domains and a clear spoken explanation distinguishing ATCO separation authority from TSEEAC AFISO flight information.",
            "teacherNotes": "Emphasize the ENAC/DGAC institutional distinction: TSEEAC is a civil aviation body, AFISOs provide information/alerting, whereas ATCOs hold licensing to issue binding separation clearances.",
            "domains": [
              {
                "id": "landside",
                "name": "1. Landside Operations",
                "color": "sky",
                "roles": [
                  "Passenger Service Agent (PSA)",
                  "Security Screening Officer",
                  "Terminal Duty Manager",
                  "Border Control Officer"
                ],
                "description": "Manages passenger processing, documentation verification, terminal safety, and accessibility before the airside security boundary.",
                "keyJurisdiction": "Public terminal zones, check-in concourses, baggage drop systems, and departure lounge coordination.",
                "sampleDuty": "Passenger Service Agents verify travel documents, handle gate boarding announcements, and manage baggage reconciliation."
              },
              {
                "id": "airside",
                "name": "2. Airside & Ramp Operations",
                "color": "amber",
                "roles": [
                  "Turnaround Coordinator (TRC)",
                  "Ramp Agent / Baggage Handler",
                  "Marshaller",
                  "Pushback Tug Driver",
                  "De-icing Rig Operator",
                  "Refueller / Hydrant Dispenser"
                ],
                "description": "Coordinates all parallel ground servicing operations around the aircraft within the designated safety servicing envelope.",
                "keyJurisdiction": "Apron stands, equipment staging lanes, airside service roads, and aircraft servicing envelopes.",
                "sampleDuty": "The Turnaround Coordinator oversees parallel servicing tasks, monitors fuel and baggage loading, and enforces on-time departure."
              },
              {
                "id": "flightcrew",
                "name": "3. Aircraft Flight Crew",
                "color": "indigo",
                "roles": [
                  "Captain (Pilot-in-Command)",
                  "First Officer (Co-Pilot)",
                  "Purser / Senior Cabin Manager",
                  "Cabin Crew / Flight Attendant"
                ],
                "description": "Responsible for the safe navigation, operation, passenger welfare, and emergency readiness of the aircraft from off-blocks to on-blocks.",
                "keyJurisdiction": "Cockpit flight deck, passenger cabin, aircraft technical logbook, and emergency systems.",
                "sampleDuty": "The First Officer performs external walkaround inspections, cross-checks FMC route programming, and monitors radio communications."
              },
              {
                "id": "atco",
                "name": "4. Air Traffic Control Officers (ATCOs)",
                "color": "rose",
                "roles": [
                  "Aerodrome / Tower ATCO",
                  "Approach Radar Controller (APP)",
                  "Area / En-Route Controller (ACC)"
                ],
                "description": "Licensed air traffic controllers possessing executive legal authority to issue binding clearances and ensure safe tactical separation between aircraft in flight and on active movement areas.",
                "keyJurisdiction": "Active runways, taxiways, controlled airspace sectors, and terminal maneuvering areas (TMA).",
                "sampleDuty": "Tower ATCOs issue mandatory takeoff and landing clearances, manage runway sequencing, and maintain aircraft separation."
              },
              {
                "id": "tseeac",
                "name": "5. Civil Aviation Operations Corps (TSEEAC)",
                "color": "emerald",
                "roles": [
                  "Aerodrome Flight Information Service Officer (AFISO)",
                  "Aerodrome Operations Coordinator",
                  "DGAC Aviation Safety Inspector",
                  "Air Navigation Technical Support Officer"
                ],
                "description": "Civil aviation civil servants who perform critical operations, flight information, safety oversight, and aerodrome management. IMPORTANT: TSEEAC personnel are NOT air traffic controllers and do NOT have separation authority; AFISOs provide advisory flight information and alerting service at non-controlled aerodromes.",
                "keyJurisdiction": "AFIS aerodromes, civil aviation regional directorates (DSAC), airport safety coordination, and technical surveillance.",
                "sampleDuty": "An AFISO provides weather reports, runway conditions, and traffic advisories to pilots, while DGAC safety inspectors conduct regulatory compliance audits."
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Focus: Roles, Responsibilities & Authority (20 mins)",
            "summary": "Professional aviation communication demands absolute precision when describing who does what, who reports to whom, and who holds regulatory authority.",
            "modeBadges": [
              "👤 Individual -> 👥 Pairs",
              "⏱️ 20 mins",
              "✍️ Operational Syntax Drill",
              "🎯 Collocation & Precision"
            ],
            "instructions": [
              "Step 1 (Formula Mastery - 5 mins): Review the 6 authority and responsibility structures above. Note preposition rules: 'responsible FOR + -ing', 'tasked WITH + -ing', 'authority OVER / TO + verb'.",
              "Step 2 (Role Duty Construction - 10 mins): With a partner, write 3 operational sentences describing different aviation roles using: (1) 'be tasked with', (2) 'have authority to', and (3) 'liaise with vs. report to'.",
              "Step 3 (Roles & Responsibilities Challenge - 5 mins): Complete the 4 interactive grammar challenge questions individually, check your answers, and discuss the preposition rules."
            ],
            "deliverable": "4 verified practice question answers + 3 original spoken or written role-duty descriptions demonstrating correct prepositional collocations.",
            "teacherNotes": "Stamp out 'responsible OF' immediately (French interference). Highlight the difference between hierarchical reporting ('reports to the TRC') and lateral coordination ('liaises with fueling').",
            "formulas": [
              {
                "structure": "be responsible for + -ing / noun",
                "usage": "Core ongoing duty or accountability",
                "example": "The Turnaround Coordinator is responsible for ensuring all servicing vehicles clear the stand before pushback."
              },
              {
                "structure": "be tasked with + -ing / noun",
                "usage": "Official assignment, directive, or designated role",
                "example": "The AFIS officer is tasked with providing traffic information and weather advisories to inbound aircraft."
              },
              {
                "structure": "be in charge of + noun / -ing",
                "usage": "Supervisory oversight of a team, facility, or zone",
                "example": "The Terminal Duty Manager is in charge of passenger concourse flow and emergency crowd management."
              },
              {
                "structure": "have authority over / to + verb",
                "usage": "Legal jurisdiction or executive command power",
                "example": "Tower ATCOs have authority over active runways and issue binding takeoff and landing clearances."
              },
              {
                "structure": "ensure that + clause",
                "usage": "Verification, quality control, and safety compliance",
                "example": "Safety inspectors ensure that airline maintenance procedures comply with DGAC regulations."
              },
              {
                "structure": "report to vs. liaise with",
                "usage": "Hierarchy vs. horizontal peer collaboration",
                "example": "The Ramp Agent reports to the Turnaround Coordinator and liaises with fueling technicians."
              }
            ],
            "roleClinic": [
              {
                "id": 1,
                "prompt": "The First Officer is tasked with (conducting / to conduct / conduct) the pre-flight external walkaround inspection.",
                "answer": "conducting",
                "explanation": "'Be tasked with' is followed by the preposition 'with', which requires a gerund (-ing)."
              },
              {
                "id": 2,
                "prompt": "Unlike ATCOs, AFISOs do not have authority (to separate / separating / for separate) aircraft tactically.",
                "answer": "to separate",
                "explanation": "'Have authority to' is followed by the base infinitive ('to separate')."
              },
              {
                "id": 3,
                "prompt": "The Ramp Agent is responsible (for / of / to) securing the wheel chocks once the aircraft comes to a stop.",
                "answer": "for",
                "explanation": "'Responsible for' is the correct prepositional collocation (avoid the French false friend 'responsible of')."
              },
              {
                "id": 4,
                "prompt": "The Turnaround Coordinator must ensure (that / what / which) the cargo hold doors are locked before pushback.",
                "answer": "that",
                "explanation": "'Ensure' takes a content clause starting with 'that' ('ensure that + subject + verb')."
              }
            ]
          },
          "handoffSimulation": {
            "title": "Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins)",
            "summary": "Effective inter-departmental handoffs prevent bottlenecks and eliminate miscommunication. Work in pairs or triads to conduct professional operational handovers.",
            "modeBadges": [
              "👥 Pairs / Triads",
              "⏱️ 25 mins",
              "🎭 Operational Interface Simulation",
              "🎯 Radio & Handoff Fluency"
            ],
            "instructions": [
              "Step 1 (Scenario Assignment - 5 mins): Choose Pair 1 (TRC <-> Flight Deck), Pair 2 (AFISO <-> Inbound VFR), or Pair 3 (Terminal Manager <-> Ramp Supervisor). Read your specific role context.",
              "Step 2 (Simulation Rehearsal - 12 mins): Conduct the operational handoff in character. You must incorporate at least two of the mandatory target phrases (e.g., 'tasked with', 'liaised with', 'ensure that').",
              "Step 3 (Role Reversal & Feedback - 8 mins): Swap roles and repeat the dialogue under modified conditions (e.g. 5 minutes until slot loss or sudden weather degradation)."
            ],
            "deliverable": "A 2-minute fluent operational handoff dialogue successfully resolving an operational conflict using mandatory responsibility formulas.",
            "teacherNotes": "Listen for realistic aviation tone: professional, concise, assertive, but collaborative. Ensure students actually use the target phrases rather than informal conversational English.",
            "scenarios": [
              {
                "id": "pair1",
                "title": "Pair 1: Turnaround Coordinator (TRC) <-> First Officer (Flight Deck)",
                "context": "Flight AF418 is scheduled off-blocks in 8 minutes. Cargo loading is complete, but the refueller was held up by a minor hose leak. The First Officer needs the final fuel uplift and signed load sheet.",
                "roleA": "Turnaround Coordinator: Confirm fuel uplift of 5,800 kg, present the final trim sheet for Captain's signature, and report stand clearance status.",
                "roleB": "First Officer: Cross-check the fuel quantity against FMC calculations, verify the center of gravity (CG) limits on the trim sheet, and request pushback readiness.",
                "targetPhrases": [
                  "\"I am responsible for confirming that all ground equipment has detached...\"",
                  "\"Could you ensure that the load sheet reflects the actual fuel on board?\"",
                  "\"We liaised with the fueling technician, and all safety valves are verified.\""
                ]
              },
              {
                "id": "pair2",
                "title": "Pair 2: AFISO (TSEEAC) <-> Inbound VFR Aircraft",
                "context": "A Cessna 172 is inbound to a non-controlled regional airfield. The AFISO is on duty in the aerodrome flight information station. Low winter sun and flocking birds have been observed near Runway 26 threshold.",
                "roleA": "AFISO (TSEEAC): Provide aerodrome flight information: runway in use 26, surface wind 240/12kt, QNH 1018, cautionary bird advisory, and report on opposing glider traffic.",
                "roleB": "VFR Pilot: Acknowledge information, report position over visual reporting point (Sierra), and state intentions for standard overhead join.",
                "targetPhrases": [
                  "\"Information only: Runway 26 in use, wind 240 degrees at 12 knots...\"",
                  "\"Be advised, a flock of lapwings has been reported near the threshold...\"",
                  "\"As an AFISO, I am tasked with providing traffic and safety advisories.\""
                ]
              },
              {
                "id": "pair3",
                "title": "Pair 3: Terminal Duty Manager <-> Ramp Operations Supervisor",
                "context": "A group of 14 delayed transit passengers from a connecting transatlantic flight has just cleared security. The departure flight has a strict 10-minute CTOT slot.",
                "roleA": "Terminal Duty Manager: Request a 5-minute gate hold to allow the transit passengers to board, arguing customer service and connection costs.",
                "roleB": "Ramp Operations Supervisor: Defend the slot departure, explaining the financial and network penalties of missing the Eurocontrol CTOT slot.",
                "targetPhrases": [
                  "\"We are in charge of passenger processing and must avoid misconnecting passengers...\"",
                  "\"If we miss this slot, ATC will hold the flight for at least 45 minutes...\"",
                  "\"Can we ensure that baggage is prioritized while passengers board through the gate?\""
                ]
              }
            ]
          },
          "careerForumDebate": {
            "title": "Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
            "summary": "A fast-moving winter weather front brings freezing fog, reducing Runway Visual Range (RVR) to 350m at a regional aerodrome. Stand capacity is at 95%, de-icing rigs are working at maximum throughput, and two inbound diversions are requesting priority due to fuel minimums. Each team represents an aviation profession, defends operational priorities, and negotiates a consensus action plan.",
            "modeBadges": [
              "👥 4-Way Multi-Stakeholder Forum",
              "⏱️ 35 mins",
              "⚡ Crisis Management Negotiation",
              "🎯 Consensus Building"
            ],
            "instructions": [
              "Step 1 (Crisis Briefing & Stance - 8 mins): Read the Winter Storm & Diversion Gridlock scenario. Assign one stakeholder role per team member (ATCO, AFISO/Ops, TRC/Ground, Captain). Review your non-negotiable priority.",
              "Step 2 (Stakeholder Round-Robin - 12 mins): Each stakeholder presents their operational dilemma and proposed sequence of events. State what your role can and cannot concede.",
              "Step 3 (Consensus Negotiation & Rating - 15 mins): Negotiate a sequential 3-step action plan using conditional language ('Provided that...', 'On condition that...'). Vote on the 3 consensus challenges in the agreement tracker."
            ],
            "deliverable": "A negotiated 3-step crisis operational resolution signed off by all 4 stakeholders, balancing fuel safety, stand capacity, de-icing holdover times, and slot preservation.",
            "teacherNotes": "Maintain high tension! Remind them that if no decision is made within 20 minutes, the Captain's crew times out, the diversion exhausts fuel reserves, and runway friction degrades further. Demand conditional structures.",
            "scenario": "Regional Aerodrome 'Echo-Delta' is experiencing severe winter weather with RVR 350m and freezing drizzle. Only 2 parking stands remain open. Two diverted commercial jets are in the holding pattern, one declaring 'Minimum Fuel'. On the ground, an outbound flight on Stand 2 has passengers boarded, but its holdover time has expired, requiring a second de-icing cycle.",
            "stakeholders": [
              {
                "name": "Tower & Approach ATCOs",
                "priority": "Runway safety, separation in holding stacks, and emergency prioritization for the minimum-fuel diversion.",
                "stance": "Has sole authority over runway access; demands clear runway sequencing and will not clear departures until emergency fuel traffic lands."
              },
              {
                "name": "AFISO / Aerodrome Operations Coordinator (TSEEAC)",
                "priority": "Airfield friction coefficient measurement, snow and de-icing coordinator, apron safety compliance, and stand allocation.",
                "stance": "Liaises between airport authority and services; ensures de-icing pad does not gridlock and coordinates snow clearing plows on taxiways."
              },
              {
                "name": "Turnaround Coordinator & Ground Handling Lead",
                "priority": "Ramp safety, ground equipment availability, de-icing fluid inventory, and baggage handling for diverted passengers.",
                "stance": "Warns that ramp handlers are nearing maximum duty limits and de-icing fluid is at critical reserves; insists on clearing Stand 2 first."
              },
              {
                "name": "Airline Captain (Outbound Flight on Stand 2)",
                "priority": "Passenger welfare, flight duty period (FDP) limits, and slot adherence.",
                "stance": "Argues that if the aircraft is not de-iced and dispatched within 20 minutes, the crew will exceed legal duty hours and the flight must be cancelled."
              }
            ],
            "consensusChallenge": "In mixed teams of 4, negotiate a step-by-step priority sequence using conditional structures ('Provided that...', 'As long as...', 'On condition that...') to resolve the standoff safely and efficiently."
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "The final 10 minutes consolidate today's high-yield vocabulary, reinforce syllable stress on professional job titles, and update your personal continuous assessment log.",
            "modeBadges": [
              "👤 Individual & 👥 Pairs",
              "⏱️ 10 mins",
              "⚡ Syllable Stress & Self-Audit",
              "🎯 Formative Synthesis"
            ],
            "instructions": [
              "Step 1 (Pronunciation Practice - 4 mins): Practice pronouncing the 6 multisyllabic professional titles aloud with correct syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st).",
              "Step 2 (Rapid-Fire Partner Quiz - 4 mins): Test your partner on 3 random terms from today's session (e.g. PSA vs. TRC, AFISO jurisdiction, Foreign Object Debris prevention).",
              "Step 3 (Self-Assessment & Portfolio - 2 mins): Rate your confidence (1 to 5) in explaining your future aviation profession. Record target terms in your semester study log."
            ],
            "deliverable": "Accurate pronunciation of 4 key multisyllabic aviation terms + complete self-assessment entry in study portfolio.",
            "teacherNotes": "Focus on primary stress in technical nouns vs. verbs. Remind students that Session 5 is Formative Evaluation 1: ensure portfolios, vocabulary logs, and presentations are fully prepped.",
            "reviewPrompts": [
              {
                "title": "1. Syllable Stress & Pronunciation Practice",
                "desc": "Drill accurate syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), tech-NI-cian (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st), sur-VEIL-lance (2nd)."
              },
              {
                "title": "2. Rapid-Fire Retrieval Quiz",
                "desc": "In pairs, quiz each other on 3 random terms from today's 18 vocabulary bank without checking notes (e.g. AFISO vs. ATCO, Turnaround Coordinator, Flight Dispatcher)."
              },
              {
                "title": "3. Self-Assessment & Continuous Learning",
                "desc": "Rate your ability (1 to 5) to explain the responsibilities of your future aviation profession. Update your study portfolio with target expressions."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 4: Jobs in Aviation",
          "summary": "Review the 18 key technical and professional terms covering landside, airside, flight crew, air traffic control (ATCO), and civil aviation administration (TSEEAC / AFISO) to enhance your speaking fluency and TOEIC accuracy.",
          "terms": [
            {
              "num": "01",
              "term": "Aerodrome Flight Information Service Officer (AFISO)",
              "definition": "A certified aeronautical station officer (often TSEEAC) providing traffic advisories, aerodrome conditions, and alerting services to aircraft at non-controlled aerodromes without separation authority."
            },
            {
              "num": "02",
              "term": "Air Traffic Control Officer (ATCO)",
              "definition": "A licensed professional legally authorized to issue mandatory control clearances and maintain safe tactical separation between aircraft in flight and maneuvering on active airport surfaces."
            },
            {
              "num": "03",
              "term": "Turnaround Coordinator (TRC)",
              "definition": "The ground handling operations lead on the apron responsible for orchestrating servicing teams, monitoring critical-path milestones, and ensuring punctual departure."
            },
            {
              "num": "04",
              "term": "Ramp Agent",
              "definition": "An airside ground handler responsible for loading and unloading baggage and cargo, positioning ground support equipment, and securing the aircraft servicing envelope."
            },
            {
              "num": "05",
              "term": "Marshaller",
              "definition": "A trained apron ground handler who uses illuminated wands or visual hand signals to guide an incoming aircraft along the taxi line to its exact parking mark."
            },
            {
              "num": "06",
              "term": "Flight Operations Officer / Dispatcher",
              "definition": "A licensed flight planning specialist who calculates fuel requirements, monitors en-route NOTAMs and weather, prepares flight plans, and co-signs the dispatch release with the captain."
            },
            {
              "num": "07",
              "term": "Passenger Service Agent (PSA)",
              "definition": "A landside airline or ground handling employee who assists travelers at check-in desks, checks travel documentation, reconciles hold luggage, and conducts gate boarding."
            },
            {
              "num": "08",
              "term": "Aviation Safety Inspector",
              "definition": "A civil aviation authority official (e.g. DGAC/DSAC, often TSEEAC) tasked with auditing airlines, maintenance repair organizations, and aerodromes for strict regulatory compliance."
            },
            {
              "num": "09",
              "term": "Aerodrome Operations Coordinator",
              "definition": "An airport duty specialist (often TSEEAC) responsible for inspecting runway pavement friction, monitoring obstacle limitation surfaces, managing wildlife hazards, and coordinating apron works."
            },
            {
              "num": "10",
              "term": "Avionics Technician",
              "definition": "A certified aircraft maintenance engineer specialized in troubleshooting, repairing, calibrating, and certifying cockpit flight management computers, radar, and navigation systems."
            },
            {
              "num": "11",
              "term": "First Officer",
              "definition": "The second-in-command pilot on the flight deck who shares flight navigation, radio communications, and system monitoring duties with the Captain."
            },
            {
              "num": "12",
              "term": "Purser / Cabin Manager",
              "definition": "The senior cabin crew member responsible for supervising cabin attendants, directing in-flight passenger safety procedures, and coordinating with the flight deck."
            },
            {
              "num": "13",
              "term": "Security Screening Officer",
              "definition": "A certified landside security officer who operates X-ray scanners, millimeter-wave body scanners, and explosive trace detectors to screen passengers and carry-on luggage."
            },
            {
              "num": "14",
              "term": "De-icing Rig Operator",
              "definition": "A specialized ramp technician who operates aerial boom trucks to spray heated glycol mixtures onto aircraft surfaces to eradicate snow, frost, and ice contamination."
            },
            {
              "num": "15",
              "term": "Pushback Tug Driver",
              "definition": "A heavy-equipment ramp driver specialized in connecting towbars or towbarless cradles to safely push aircraft backward out of gate stands into the taxi lane."
            },
            {
              "num": "16",
              "term": "Airfield Maintenance Technician",
              "definition": "A technical specialist who inspects and maintains aeronautical ground lighting (AGL), taxiway guidance signage, runway markings, and perimeter security fences."
            },
            {
              "num": "17",
              "term": "Refueller / Fuel Hydrant Operator",
              "definition": "A ramp fueling technician who connects mobile fuel bowsers or underground hydrant dispensers to aircraft fuel valves to deliver precise, contamination-tested Jet-A1."
            },
            {
              "num": "18",
              "term": "Load Controller / Weight & Balance Specialist",
              "definition": "An operations professional who calculates aircraft center-of-gravity (CG), models payload distribution, and generates the official load and trim sheet required for safe takeoff."
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
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations."
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology."
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation."
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
          "toeic": {
            "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
            "options": [
              {
                "letter": "A",
                "text": "with"
              },
              {
                "letter": "B",
                "text": "for"
              },
              {
                "letter": "C",
                "text": "of"
              },
              {
                "letter": "D",
                "text": "to"
              }
            ],
            "correctLetter": "B",
            "correctText": "for",
            "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
            "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties."
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations."
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling."
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries."
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • Evaluation Rubrics",
              "name": "ETS Global TOEIC Practice",
              "desc": "Official TOEIC Speaking & Writing evaluation benchmarks and sample workplace responses for aviation professionals."
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
              "url": "https://www.flightglobal.com"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
              "options": [
                {
                  "letter": "A",
                  "text": "with"
                },
                {
                  "letter": "B",
                  "text": "for"
                },
                {
                  "letter": "C",
                  "text": "of"
                },
                {
                  "letter": "D",
                  "text": "to"
                }
              ],
              "correctLetter": "B",
              "correctText": "for",
              "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
              "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
            },
            {
              "stem": "Unlike aerodrome controllers who issue clearances, AFIS officers are tasked with ________ flight information and meteorological updates to inbound pilots.",
              "options": [
                {
                  "letter": "A",
                  "text": "provide"
                },
                {
                  "letter": "B",
                  "text": "provides"
                },
                {
                  "letter": "C",
                  "text": "providing"
                },
                {
                  "letter": "D",
                  "text": "provided"
                }
              ],
              "correctLetter": "C",
              "correctText": "providing",
              "analysis": "\"Be tasked with\" is followed by a preposition (\"with\"), which requires a gerund (\"providing\") or a noun phrase.",
              "strategy": "Identify \"tasked with\" -> verb must be in the gerund form (-ing)."
            },
            {
              "stem": "Before releasing the aircraft for departure, the flight dispatcher must verify that all load sheets ________ by the captain.",
              "options": [
                {
                  "letter": "A",
                  "text": "have signed"
                },
                {
                  "letter": "B",
                  "text": "have been signed"
                },
                {
                  "letter": "C",
                  "text": "will sign"
                },
                {
                  "letter": "D",
                  "text": "signing"
                }
              ],
              "correctLetter": "B",
              "correctText": "have been signed",
              "analysis": "Passive voice is required because load sheets cannot sign themselves; they must be signed by the captain.",
              "strategy": "Check if the subject (\"all load sheets\") is the actor or the receiver of the verb. Since it is the receiver, choose passive voice \"have been signed\"."
            },
            {
              "stem": "The civil aviation safety inspector conducted an unannounced audit in order to ensure ________ ground handling personnel were strictly following apron safety protocols.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "what"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Ensure that\" introduces a content clause detailing what is being verified or secured.",
              "strategy": "\"Ensure\" takes a \"that\" clause (\"ensure that + subject + verb\")."
            },
            {
              "stem": "The airport duty manager was commended for handling the ramp emergency calmly, ________ severe winter weather conditions.",
              "options": [
                {
                  "letter": "A",
                  "text": "despite"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "unless"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "A",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition expressing concession followed by a noun phrase (\"severe winter weather conditions\").",
              "strategy": "Check what follows the blank. \"Severe winter weather conditions\" is a noun phrase, so a preposition (\"despite\") is required rather than a subordinating conjunction like \"although\"."
            }
          ]
        }
      },
      "6": {
        "session": 6,
        "objectives": {
          "title": "Session 6 - Jobs in Aviation Objectives",
          "summary": "By the end of this session, you will be able to distinguish and categorize aviation operational professions across landside, airside, flight operations, air traffic services, and civil aviation administration (TSEEAC), accurately articulate professional duties and jurisdictions using formal B2 structures, and collaborate effectively during operational handoffs.",
          "items": [
            {
              "num": 1,
              "title": "Categorize Aviation Operational Roles (Vocabulary & Classification)",
              "description": "Distinguish between Landside (passenger handling, security screening, border control), Airside (turnaround coordination, ramp dispatch, marshalling, pushback), Flight Crew (captain, first officer, purser), Air Traffic Control (tower, approach, en-route), and Civil Aviation Administration (TSEEAC)."
            },
            {
              "num": 2,
              "title": "Clarify TSEEAC Operational Functions (Institutional Precision)",
              "description": "Accurately explain that TSEEAC personnel are NOT air traffic controllers (no tactical separation authority), but perform critical functions including AFISO (flight information and alerting services), aerodrome operations coordination, and DGAC safety oversight."
            },
            {
              "num": 3,
              "title": "Express Professional Duties & Authority (Grammar in Context)",
              "description": "Master and apply functional formulas: 'be responsible for + -ing', 'be tasked with + -ing', 'be in charge of + noun', 'have authority over / to', and 'ensure that + clause'."
            },
            {
              "num": 4,
              "title": "Simulate Professional Shift & Turnaround Handoffs (Speaking Fluency)",
              "description": "Conduct structured peer briefings between adjacent roles (Turnaround Coordinator <-> First Officer, AFISO <-> VFR Pilot, Terminal Duty Manager <-> Ramp Supervisor) to resolve operational bottlenecks."
            },
            {
              "num": 5,
              "title": "Debate Airport Operational Dilemmas (Interaction & Negotiation)",
              "description": "Analyze complex airport operational dilemmas (e.g. winter weather diversions and ramp congestion) from specific professional viewpoints and negotiate a consensus action plan."
            },
            {
              "num": 6,
              "title": "Refine Professional Aviation Vocabulary Pronunciation (Phonology)",
              "description": "Place accurate primary and secondary word stress on complex professional terms (au-THOR-i-ty, re-SPON-si-ble, co-OR-di-na-tor, tech-NI-cian, o-ver-SIGHT, sur-VEIL-lance)."
            },
            {
              "num": 7,
              "title": "Master Prepositions of Responsibility & Passive Voice (TOEIC Practice)",
              "description": "Identify common test traps in TOEIC Parts 5 & 6, particularly verbs of obligation, prepositions of responsibility ('responsible for', 'in charge of'), and passive verb structures in airport notices."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news opening, Session 3 turnaround spot-checking, the aviation roles overview, functional responsibility and authority grammar drills, 'Day in the Life' role handoffs, a winter weather operational dilemma debate, and a 10-minute vocabulary consolidation review.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News, Current Events & Session 3 Spot-Check (10 mins)",
              "description": "Opening 10-minute warm-up: discuss recent international aviation headlines followed by rapid spot-checking of Session 3 turnaround and GSE vocabulary (GPU, ASU, Pushback Tug, Chocks, FOD, Belt Loader)."
            },
            {
              "time": "10-30",
              "title": "Part 2: Aviation Roles Across the Industry (20 mins)",
              "description": "Explore the five operational domains (Landside, Airside/Ramp, Flight Crew, ATCOs, and TSEEAC). Clarify the core distinction between ATCO tactical separation authority and TSEEAC AFISO/auditing responsibilities."
            },
            {
              "time": "30-50",
              "title": "Part 3: Functional Grammar Focus: Responsibilities, Duties & Jurisdiction (20 mins)",
              "description": "Examine high-yield B2 structures: 'responsible for + -ing', 'tasked with + -ing', 'in charge of', 'have authority over / to', 'ensure that', and 'report to vs. liaise with'. Practice with interactive scenario prompts."
            },
            {
              "time": "50-75",
              "title": "Part 4: Role-Play Simulation: 'A Day in the Life' Operational Handoffs (25 mins)",
              "description": "Collaborative paired and triad role-play: simulate professional handoffs and resolve bottlenecks between Turnaround Coordinator <-> First Officer, AFISO <-> Inbound Pilot, and Terminal Duty Manager <-> Ramp Supervisor."
            },
            {
              "time": "75-110",
              "title": "Part 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
              "description": "Interactive multi-stakeholder debate: resolve an emergency aerodrome diversion scenario during freezing fog and ramp congestion. Argue priorities, negotiate trade-offs, and establish a consensus sequence."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Final 10-minute consolidation: rapid recall of the 18 aviation profession terms, word stress and phonological drills, personal reflection, and continuous learning log update."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "image": "images/aas_m1card4.jpg",
            "title": "Jobs in Aviation: Roles, Responsibilities & Operational Interfaces",
            "subtitle": "Landside, Airside, Flight Crew, Air Traffic Services & Civil Aviation Corps (TSEEAC)"
          },
          "openingSession": {
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
            "summary": "Every session begins with a 10-minute professional opening: analyzing current aviation headlines followed by rapid spot-checking of Session 3 ground operations and GSE vocabulary.",
            "modeBadges": [
              "👥 Pairs / Plenary",
              "⏱️ 10 mins",
              "🗣️ Operational Recall Drill",
              "🎯 Technical Vocabulary & Fluency"
            ],
            "instructions": [
              "Step 1 (Aviation News Exchange - 4 mins): In pairs, discuss the current aviation headlines prompt. Share one news item regarding airport staffing, ATM capacity, or airline operations.",
              "Step 2 (Session 3 GSE Spot-Check - 4 mins): Quiz your partner on Questions 1 to 4 (GPU function, Marshaller guidance, turnaround time critical path, FOD prevention) before revealing answers.",
              "Step 3 (Class Operational Recap - 2 mins): Plenary review of one GSE definition. Highlight why GPU usage reduces ramp emissions and APU wear."
            ],
            "deliverable": "Spoken explanation of 1 aviation operational news item and an accurate technical explanation of GPU or turnaround time.",
            "teacherNotes": "Cold-call pairs. Probe beyond superficial definitions: ask what happens to an aircraft's departure slot if the GPU fails during pushback disconnect.",
            "newsPrompts": [
              "What aviation, airline, or ATM news stories caught your attention in the headlines this week?",
              "How are airports and air navigation service providers managing staffing, recruitment, or new operational procedures this season?"
            ],
            "spotCheck": {
              "title": "Session 3 Vocabulary Spot-Check (Ground Operations & GSE)",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary function of a Ground Power Unit (GPU) during an aircraft turnaround?",
                  "answer": "A GPU supplies 400Hz AC electrical power to the aircraft while parked at the gate stand, allowing the flight crew to shut down the main engines and auxiliary power unit (APU) to save fuel and reduce ramp emissions."
                },
                {
                  "id": 2,
                  "q": "How does a Marshaller guide an arriving aircraft to its parking stand when automated docking is unavailable?",
                  "answer": "A marshaller uses illuminated wands or visual hand signals to direct the flight deck along the painted yellow lead-in line to the precise nosewheel stop mark."
                },
                {
                  "id": 3,
                  "q": "What is turnaround time (TAT) and why is minimizing it critical for airlines?",
                  "answer": "Turnaround time is the elapsed period from chocks-on at arrival to chocks-off at departure. Minimizing TAT maximizes aircraft daily utilization and prevents knock-on departure slot delays."
                },
                {
                  "id": 4,
                  "q": "What is Foreign Object Debris (FOD) and how do ramp teams prevent it?",
                  "answer": "FOD is any loose item, tool, fragment, or trash on the apron or taxiway that could be ingested by a jet engine or damage tires; ground crews conduct continuous visual scans and regular FOD sweeps."
                }
              ]
            }
          },
          "jobTaxonomy": {
            "title": "Activity 2: Aviation Roles Across the Industry (20 mins)",
            "summary": "Aviation is an intricate ecosystem where specialized professions collaborate seamlessly. Explore the five primary operational domains, their key responsibilities, and the essential distinction between ATCO separation authority and TSEEAC functions.",
            "modeBadges": [
              "👥 Small Groups (3-4)",
              "⏱️ 20 mins",
              "🧭 Roles & Jurisdiction Analysis",
              "🎯 Operational Domain Mastery"
            ],
            "instructions": [
              "Step 1 (Domain Exploration - 8 mins): Study the 5 operational domains: Landside, Airside, Flight Crew, ATCOs, and TSEEAC. Identify the primary physical jurisdiction and core duty for each.",
              "Step 2 (Crucial Distinction Audit - 6 mins): Analyze the structural legal difference between ATCOs (tactical separation authority) and TSEEAC / AFISOs (flight information and advisory services without separation authority).",
              "Step 3 (Role Matching Drill - 6 mins): In pairs, randomly name a professional role (e.g. TRC, AFISO, Marshaller, Tower ATCO). Your partner must state the domain, primary duty, and whom they report to."
            ],
            "deliverable": "Accurate categorization of all 5 domains and a clear spoken explanation distinguishing ATCO separation authority from TSEEAC AFISO flight information.",
            "teacherNotes": "Emphasize the ENAC/DGAC institutional distinction: TSEEAC is a civil aviation body, AFISOs provide information/alerting, whereas ATCOs hold licensing to issue binding separation clearances.",
            "domains": [
              {
                "id": "landside",
                "name": "1. Landside Operations",
                "color": "sky",
                "roles": [
                  "Passenger Service Agent (PSA)",
                  "Security Screening Officer",
                  "Terminal Duty Manager",
                  "Border Control Officer"
                ],
                "description": "Manages passenger processing, documentation verification, terminal safety, and accessibility before the airside security boundary.",
                "keyJurisdiction": "Public terminal zones, check-in concourses, baggage drop systems, and departure lounge coordination.",
                "sampleDuty": "Passenger Service Agents verify travel documents, handle gate boarding announcements, and manage baggage reconciliation."
              },
              {
                "id": "airside",
                "name": "2. Airside & Ramp Operations",
                "color": "amber",
                "roles": [
                  "Turnaround Coordinator (TRC)",
                  "Ramp Agent / Baggage Handler",
                  "Marshaller",
                  "Pushback Tug Driver",
                  "De-icing Rig Operator",
                  "Refueller / Hydrant Dispenser"
                ],
                "description": "Coordinates all parallel ground servicing operations around the aircraft within the designated safety servicing envelope.",
                "keyJurisdiction": "Apron stands, equipment staging lanes, airside service roads, and aircraft servicing envelopes.",
                "sampleDuty": "The Turnaround Coordinator oversees parallel servicing tasks, monitors fuel and baggage loading, and enforces on-time departure."
              },
              {
                "id": "flightcrew",
                "name": "3. Aircraft Flight Crew",
                "color": "indigo",
                "roles": [
                  "Captain (Pilot-in-Command)",
                  "First Officer (Co-Pilot)",
                  "Purser / Senior Cabin Manager",
                  "Cabin Crew / Flight Attendant"
                ],
                "description": "Responsible for the safe navigation, operation, passenger welfare, and emergency readiness of the aircraft from off-blocks to on-blocks.",
                "keyJurisdiction": "Cockpit flight deck, passenger cabin, aircraft technical logbook, and emergency systems.",
                "sampleDuty": "The First Officer performs external walkaround inspections, cross-checks FMC route programming, and monitors radio communications."
              },
              {
                "id": "atco",
                "name": "4. Air Traffic Control Officers (ATCOs)",
                "color": "rose",
                "roles": [
                  "Aerodrome / Tower ATCO",
                  "Approach Radar Controller (APP)",
                  "Area / En-Route Controller (ACC)"
                ],
                "description": "Licensed air traffic controllers possessing executive legal authority to issue binding clearances and ensure safe tactical separation between aircraft in flight and on active movement areas.",
                "keyJurisdiction": "Active runways, taxiways, controlled airspace sectors, and terminal maneuvering areas (TMA).",
                "sampleDuty": "Tower ATCOs issue mandatory takeoff and landing clearances, manage runway sequencing, and maintain aircraft separation."
              },
              {
                "id": "tseeac",
                "name": "5. Civil Aviation Operations Corps (TSEEAC)",
                "color": "emerald",
                "roles": [
                  "Aerodrome Flight Information Service Officer (AFISO)",
                  "Aerodrome Operations Coordinator",
                  "DGAC Aviation Safety Inspector",
                  "Air Navigation Technical Support Officer"
                ],
                "description": "Civil aviation civil servants who perform critical operations, flight information, safety oversight, and aerodrome management. IMPORTANT: TSEEAC personnel are NOT air traffic controllers and do NOT have separation authority; AFISOs provide advisory flight information and alerting service at non-controlled aerodromes.",
                "keyJurisdiction": "AFIS aerodromes, civil aviation regional directorates (DSAC), airport safety coordination, and technical surveillance.",
                "sampleDuty": "An AFISO provides weather reports, runway conditions, and traffic advisories to pilots, while DGAC safety inspectors conduct regulatory compliance audits."
              }
            ]
          },
          "grammarClinic": {
            "title": "Activity 3: Language Focus: Roles, Responsibilities & Authority (20 mins)",
            "summary": "Professional aviation communication demands absolute precision when describing who does what, who reports to whom, and who holds regulatory authority.",
            "modeBadges": [
              "👤 Individual -> 👥 Pairs",
              "⏱️ 20 mins",
              "✍️ Operational Syntax Drill",
              "🎯 Collocation & Precision"
            ],
            "instructions": [
              "Step 1 (Formula Mastery - 5 mins): Review the 6 authority and responsibility structures above. Note preposition rules: 'responsible FOR + -ing', 'tasked WITH + -ing', 'authority OVER / TO + verb'.",
              "Step 2 (Role Duty Construction - 10 mins): With a partner, write 3 operational sentences describing different aviation roles using: (1) 'be tasked with', (2) 'have authority to', and (3) 'liaise with vs. report to'.",
              "Step 3 (Roles & Responsibilities Challenge - 5 mins): Complete the 4 interactive grammar challenge questions individually, check your answers, and discuss the preposition rules."
            ],
            "deliverable": "4 verified practice question answers + 3 original spoken or written role-duty descriptions demonstrating correct prepositional collocations.",
            "teacherNotes": "Stamp out 'responsible OF' immediately (French interference). Highlight the difference between hierarchical reporting ('reports to the TRC') and lateral coordination ('liaises with fueling').",
            "formulas": [
              {
                "structure": "be responsible for + -ing / noun",
                "usage": "Core ongoing duty or accountability",
                "example": "The Turnaround Coordinator is responsible for ensuring all servicing vehicles clear the stand before pushback."
              },
              {
                "structure": "be tasked with + -ing / noun",
                "usage": "Official assignment, directive, or designated role",
                "example": "The AFIS officer is tasked with providing traffic information and weather advisories to inbound aircraft."
              },
              {
                "structure": "be in charge of + noun / -ing",
                "usage": "Supervisory oversight of a team, facility, or zone",
                "example": "The Terminal Duty Manager is in charge of passenger concourse flow and emergency crowd management."
              },
              {
                "structure": "have authority over / to + verb",
                "usage": "Legal jurisdiction or executive command power",
                "example": "Tower ATCOs have authority over active runways and issue binding takeoff and landing clearances."
              },
              {
                "structure": "ensure that + clause",
                "usage": "Verification, quality control, and safety compliance",
                "example": "Safety inspectors ensure that airline maintenance procedures comply with DGAC regulations."
              },
              {
                "structure": "report to vs. liaise with",
                "usage": "Hierarchy vs. horizontal peer collaboration",
                "example": "The Ramp Agent reports to the Turnaround Coordinator and liaises with fueling technicians."
              }
            ],
            "roleClinic": [
              {
                "id": 1,
                "prompt": "The First Officer is tasked with (conducting / to conduct / conduct) the pre-flight external walkaround inspection.",
                "answer": "conducting",
                "explanation": "'Be tasked with' is followed by the preposition 'with', which requires a gerund (-ing)."
              },
              {
                "id": 2,
                "prompt": "Unlike ATCOs, AFISOs do not have authority (to separate / separating / for separate) aircraft tactically.",
                "answer": "to separate",
                "explanation": "'Have authority to' is followed by the base infinitive ('to separate')."
              },
              {
                "id": 3,
                "prompt": "The Ramp Agent is responsible (for / of / to) securing the wheel chocks once the aircraft comes to a stop.",
                "answer": "for",
                "explanation": "'Responsible for' is the correct prepositional collocation (avoid the French false friend 'responsible of')."
              },
              {
                "id": 4,
                "prompt": "The Turnaround Coordinator must ensure (that / what / which) the cargo hold doors are locked before pushback.",
                "answer": "that",
                "explanation": "'Ensure' takes a content clause starting with 'that' ('ensure that + subject + verb')."
              }
            ]
          },
          "handoffSimulation": {
            "title": "Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins)",
            "summary": "Effective inter-departmental handoffs prevent bottlenecks and eliminate miscommunication. Work in pairs or triads to conduct professional operational handovers.",
            "modeBadges": [
              "👥 Pairs / Triads",
              "⏱️ 25 mins",
              "🎭 Operational Interface Simulation",
              "🎯 Radio & Handoff Fluency"
            ],
            "instructions": [
              "Step 1 (Scenario Assignment - 5 mins): Choose Pair 1 (TRC <-> Flight Deck), Pair 2 (AFISO <-> Inbound VFR), or Pair 3 (Terminal Manager <-> Ramp Supervisor). Read your specific role context.",
              "Step 2 (Simulation Rehearsal - 12 mins): Conduct the operational handoff in character. You must incorporate at least two of the mandatory target phrases (e.g., 'tasked with', 'liaised with', 'ensure that').",
              "Step 3 (Role Reversal & Feedback - 8 mins): Swap roles and repeat the dialogue under modified conditions (e.g. 5 minutes until slot loss or sudden weather degradation)."
            ],
            "deliverable": "A 2-minute fluent operational handoff dialogue successfully resolving an operational conflict using mandatory responsibility formulas.",
            "teacherNotes": "Listen for realistic aviation tone: professional, concise, assertive, but collaborative. Ensure students actually use the target phrases rather than informal conversational English.",
            "scenarios": [
              {
                "id": "pair1",
                "title": "Pair 1: Turnaround Coordinator (TRC) <-> First Officer (Flight Deck)",
                "context": "Flight AF418 is scheduled off-blocks in 8 minutes. Cargo loading is complete, but the refueller was held up by a minor hose leak. The First Officer needs the final fuel uplift and signed load sheet.",
                "roleA": "Turnaround Coordinator: Confirm fuel uplift of 5,800 kg, present the final trim sheet for Captain's signature, and report stand clearance status.",
                "roleB": "First Officer: Cross-check the fuel quantity against FMC calculations, verify the center of gravity (CG) limits on the trim sheet, and request pushback readiness.",
                "targetPhrases": [
                  "\"I am responsible for confirming that all ground equipment has detached...\"",
                  "\"Could you ensure that the load sheet reflects the actual fuel on board?\"",
                  "\"We liaised with the fueling technician, and all safety valves are verified.\""
                ]
              },
              {
                "id": "pair2",
                "title": "Pair 2: AFISO (TSEEAC) <-> Inbound VFR Aircraft",
                "context": "A Cessna 172 is inbound to a non-controlled regional airfield. The AFISO is on duty in the aerodrome flight information station. Low winter sun and flocking birds have been observed near Runway 26 threshold.",
                "roleA": "AFISO (TSEEAC): Provide aerodrome flight information: runway in use 26, surface wind 240/12kt, QNH 1018, cautionary bird advisory, and report on opposing glider traffic.",
                "roleB": "VFR Pilot: Acknowledge information, report position over visual reporting point (Sierra), and state intentions for standard overhead join.",
                "targetPhrases": [
                  "\"Information only: Runway 26 in use, wind 240 degrees at 12 knots...\"",
                  "\"Be advised, a flock of lapwings has been reported near the threshold...\"",
                  "\"As an AFISO, I am tasked with providing traffic and safety advisories.\""
                ]
              },
              {
                "id": "pair3",
                "title": "Pair 3: Terminal Duty Manager <-> Ramp Operations Supervisor",
                "context": "A group of 14 delayed transit passengers from a connecting transatlantic flight has just cleared security. The departure flight has a strict 10-minute CTOT slot.",
                "roleA": "Terminal Duty Manager: Request a 5-minute gate hold to allow the transit passengers to board, arguing customer service and connection costs.",
                "roleB": "Ramp Operations Supervisor: Defend the slot departure, explaining the financial and network penalties of missing the Eurocontrol CTOT slot.",
                "targetPhrases": [
                  "\"We are in charge of passenger processing and must avoid misconnecting passengers...\"",
                  "\"If we miss this slot, ATC will hold the flight for at least 45 minutes...\"",
                  "\"Can we ensure that baggage is prioritized while passengers board through the gate?\""
                ]
              }
            ]
          },
          "careerForumDebate": {
            "title": "Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins)",
            "summary": "A fast-moving winter weather front brings freezing fog, reducing Runway Visual Range (RVR) to 350m at a regional aerodrome. Stand capacity is at 95%, de-icing rigs are working at maximum throughput, and two inbound diversions are requesting priority due to fuel minimums. Each team represents an aviation profession, defends operational priorities, and negotiates a consensus action plan.",
            "modeBadges": [
              "👥 4-Way Multi-Stakeholder Forum",
              "⏱️ 35 mins",
              "⚡ Crisis Management Negotiation",
              "🎯 Consensus Building"
            ],
            "instructions": [
              "Step 1 (Crisis Briefing & Stance - 8 mins): Read the Winter Storm & Diversion Gridlock scenario. Assign one stakeholder role per team member (ATCO, AFISO/Ops, TRC/Ground, Captain). Review your non-negotiable priority.",
              "Step 2 (Stakeholder Round-Robin - 12 mins): Each stakeholder presents their operational dilemma and proposed sequence of events. State what your role can and cannot concede.",
              "Step 3 (Consensus Negotiation & Rating - 15 mins): Negotiate a sequential 3-step action plan using conditional language ('Provided that...', 'On condition that...'). Vote on the 3 consensus challenges in the agreement tracker."
            ],
            "deliverable": "A negotiated 3-step crisis operational resolution signed off by all 4 stakeholders, balancing fuel safety, stand capacity, de-icing holdover times, and slot preservation.",
            "teacherNotes": "Maintain high tension! Remind them that if no decision is made within 20 minutes, the Captain's crew times out, the diversion exhausts fuel reserves, and runway friction degrades further. Demand conditional structures.",
            "scenario": "Regional Aerodrome 'Echo-Delta' is experiencing severe winter weather with RVR 350m and freezing drizzle. Only 2 parking stands remain open. Two diverted commercial jets are in the holding pattern, one declaring 'Minimum Fuel'. On the ground, an outbound flight on Stand 2 has passengers boarded, but its holdover time has expired, requiring a second de-icing cycle.",
            "stakeholders": [
              {
                "name": "Tower & Approach ATCOs",
                "priority": "Runway safety, separation in holding stacks, and emergency prioritization for the minimum-fuel diversion.",
                "stance": "Has sole authority over runway access; demands clear runway sequencing and will not clear departures until emergency fuel traffic lands."
              },
              {
                "name": "AFISO / Aerodrome Operations Coordinator (TSEEAC)",
                "priority": "Airfield friction coefficient measurement, snow and de-icing coordinator, apron safety compliance, and stand allocation.",
                "stance": "Liaises between airport authority and services; ensures de-icing pad does not gridlock and coordinates snow clearing plows on taxiways."
              },
              {
                "name": "Turnaround Coordinator & Ground Handling Lead",
                "priority": "Ramp safety, ground equipment availability, de-icing fluid inventory, and baggage handling for diverted passengers.",
                "stance": "Warns that ramp handlers are nearing maximum duty limits and de-icing fluid is at critical reserves; insists on clearing Stand 2 first."
              },
              {
                "name": "Airline Captain (Outbound Flight on Stand 2)",
                "priority": "Passenger welfare, flight duty period (FDP) limits, and slot adherence.",
                "stance": "Argues that if the aircraft is not de-iced and dispatched within 20 minutes, the crew will exceed legal duty hours and the flight must be cancelled."
              }
            ],
            "consensusChallenge": "In mixed teams of 4, negotiate a step-by-step priority sequence using conditional structures ('Provided that...', 'As long as...', 'On condition that...') to resolve the standoff safely and efficiently."
          },
          "closingReview": {
            "title": "Activity 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
            "summary": "The final 10 minutes consolidate today's high-yield vocabulary, reinforce syllable stress on professional job titles, and update your personal continuous assessment log.",
            "modeBadges": [
              "👤 Individual & 👥 Pairs",
              "⏱️ 10 mins",
              "⚡ Syllable Stress & Self-Audit",
              "🎯 Formative Synthesis"
            ],
            "instructions": [
              "Step 1 (Pronunciation Practice - 4 mins): Practice pronouncing the 6 multisyllabic professional titles aloud with correct syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st).",
              "Step 2 (Rapid-Fire Partner Quiz - 4 mins): Test your partner on 3 random terms from today's session (e.g. PSA vs. TRC, AFISO jurisdiction, Foreign Object Debris prevention).",
              "Step 3 (Self-Assessment & Portfolio - 2 mins): Rate your confidence (1 to 5) in explaining your future aviation profession. Record target terms in your semester study log."
            ],
            "deliverable": "Accurate pronunciation of 4 key multisyllabic aviation terms + complete self-assessment entry in study portfolio.",
            "teacherNotes": "Focus on primary stress in technical nouns vs. verbs. Remind students that Session 5 is Formative Evaluation 1: ensure portfolios, vocabulary logs, and presentations are fully prepped.",
            "reviewPrompts": [
              {
                "title": "1. Syllable Stress & Pronunciation Practice",
                "desc": "Drill accurate syllable stress: au-THOR-i-ty (2nd), re-SPON-si-ble (2nd), tech-NI-cian (2nd), co-OR-di-na-tor (2nd), o-ver-SIGHT (1st), sur-VEIL-lance (2nd)."
              },
              {
                "title": "2. Rapid-Fire Retrieval Quiz",
                "desc": "In pairs, quiz each other on 3 random terms from today's 18 vocabulary bank without checking notes (e.g. AFISO vs. ATCO, Turnaround Coordinator, Flight Dispatcher)."
              },
              {
                "title": "3. Self-Assessment & Continuous Learning",
                "desc": "Rate your ability (1 to 5) to explain the responsibilities of your future aviation profession. Update your study portfolio with target expressions."
              }
            ]
          }
        },
        "revision": {
          "title": "Session 4: Jobs in Aviation",
          "summary": "Review the 18 key technical and professional terms covering landside, airside, flight crew, air traffic control (ATCO), and civil aviation administration (TSEEAC / AFISO) to enhance your speaking fluency and TOEIC accuracy.",
          "terms": [
            {
              "num": "01",
              "term": "Aerodrome Flight Information Service Officer (AFISO)",
              "definition": "A certified aeronautical station officer (often TSEEAC) providing traffic advisories, aerodrome conditions, and alerting services to aircraft at non-controlled aerodromes without separation authority."
            },
            {
              "num": "02",
              "term": "Air Traffic Control Officer (ATCO)",
              "definition": "A licensed professional legally authorized to issue mandatory control clearances and maintain safe tactical separation between aircraft in flight and maneuvering on active airport surfaces."
            },
            {
              "num": "03",
              "term": "Turnaround Coordinator (TRC)",
              "definition": "The ground handling operations lead on the apron responsible for orchestrating servicing teams, monitoring critical-path milestones, and ensuring punctual departure."
            },
            {
              "num": "04",
              "term": "Ramp Agent",
              "definition": "An airside ground handler responsible for loading and unloading baggage and cargo, positioning ground support equipment, and securing the aircraft servicing envelope."
            },
            {
              "num": "05",
              "term": "Marshaller",
              "definition": "A trained apron ground handler who uses illuminated wands or visual hand signals to guide an incoming aircraft along the taxi line to its exact parking mark."
            },
            {
              "num": "06",
              "term": "Flight Operations Officer / Dispatcher",
              "definition": "A licensed flight planning specialist who calculates fuel requirements, monitors en-route NOTAMs and weather, prepares flight plans, and co-signs the dispatch release with the captain."
            },
            {
              "num": "07",
              "term": "Passenger Service Agent (PSA)",
              "definition": "A landside airline or ground handling employee who assists travelers at check-in desks, checks travel documentation, reconciles hold luggage, and conducts gate boarding."
            },
            {
              "num": "08",
              "term": "Aviation Safety Inspector",
              "definition": "A civil aviation authority official (e.g. DGAC/DSAC, often TSEEAC) tasked with auditing airlines, maintenance repair organizations, and aerodromes for strict regulatory compliance."
            },
            {
              "num": "09",
              "term": "Aerodrome Operations Coordinator",
              "definition": "An airport duty specialist (often TSEEAC) responsible for inspecting runway pavement friction, monitoring obstacle limitation surfaces, managing wildlife hazards, and coordinating apron works."
            },
            {
              "num": "10",
              "term": "Avionics Technician",
              "definition": "A certified aircraft maintenance engineer specialized in troubleshooting, repairing, calibrating, and certifying cockpit flight management computers, radar, and navigation systems."
            },
            {
              "num": "11",
              "term": "First Officer",
              "definition": "The second-in-command pilot on the flight deck who shares flight navigation, radio communications, and system monitoring duties with the Captain."
            },
            {
              "num": "12",
              "term": "Purser / Cabin Manager",
              "definition": "The senior cabin crew member responsible for supervising cabin attendants, directing in-flight passenger safety procedures, and coordinating with the flight deck."
            },
            {
              "num": "13",
              "term": "Security Screening Officer",
              "definition": "A certified landside security officer who operates X-ray scanners, millimeter-wave body scanners, and explosive trace detectors to screen passengers and carry-on luggage."
            },
            {
              "num": "14",
              "term": "De-icing Rig Operator",
              "definition": "A specialized ramp technician who operates aerial boom trucks to spray heated glycol mixtures onto aircraft surfaces to eradicate snow, frost, and ice contamination."
            },
            {
              "num": "15",
              "term": "Pushback Tug Driver",
              "definition": "A heavy-equipment ramp driver specialized in connecting towbars or towbarless cradles to safely push aircraft backward out of gate stands into the taxi lane."
            },
            {
              "num": "16",
              "term": "Airfield Maintenance Technician",
              "definition": "A technical specialist who inspects and maintains aeronautical ground lighting (AGL), taxiway guidance signage, runway markings, and perimeter security fences."
            },
            {
              "num": "17",
              "term": "Refueller / Fuel Hydrant Operator",
              "definition": "A ramp fueling technician who connects mobile fuel bowsers or underground hydrant dispensers to aircraft fuel valves to deliver precise, contamination-tested Jet-A1."
            },
            {
              "num": "18",
              "term": "Load Controller / Weight & Balance Specialist",
              "definition": "An operations professional who calculates aircraft center-of-gravity (CG), models payload distribution, and generates the official load and trim sheet required for safe takeoff."
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
              "caption": "Focus: Authentic real-world turnaround coordination: marshaling, chock placement, GPU connection, belt loaders, baggage logistics, and pushback operations."
            },
            {
              "title": "Video 2: Inside Air Traffic Control",
              "watchUrl": "https://www.youtube.com/watch?v=R90mroZyAL4",
              "tag": "Air Traffic Services",
              "videoId": "R90mroZyAL4",
              "embedUrl": "https://www.youtube-nocookie.com/embed/R90mroZyAL4",
              "caption": "Focus: Tower, approach, and en-route controllers managing active runways, sector handoffs, tactical separation authority, and standard phraseology."
            },
            {
              "title": "Video 3: AFIS & Regional Aerodrome Operations",
              "watchUrl": "https://www.youtube.com/watch?v=2BZbHAJQ70s",
              "tag": "TSEEAC / AFISO Focus",
              "videoId": "2BZbHAJQ70s",
              "embedUrl": "https://www.youtube-nocookie.com/embed/2BZbHAJQ70s",
              "caption": "Focus: Aerodrome Flight Information Service (AFIS) officers providing flight information, weather reports, and alerting service without air traffic control separation."
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
          "toeic": {
            "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
            "options": [
              {
                "letter": "A",
                "text": "with"
              },
              {
                "letter": "B",
                "text": "for"
              },
              {
                "letter": "C",
                "text": "of"
              },
              {
                "letter": "D",
                "text": "to"
              }
            ],
            "correctLetter": "B",
            "correctText": "for",
            "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
            "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
          },
          "resources": [
            {
              "url": "https://www.ecologie.gouv.fr/concours-dgac",
              "tag": "01 • Civil Aviation Authority",
              "name": "DGAC Careers & TSEEAC Competitions",
              "desc": "Official French civil aviation authority portal detailing TSEEAC, IEEAC, and ATCO recruitment competitions and corps duties."
            },
            {
              "url": "https://www.eurocontrol.int/careers",
              "tag": "02 • European ATM Network",
              "name": "Eurocontrol Air Traffic Management",
              "desc": "Pan-European air navigation services, controller profiles, and ATM network operations."
            },
            {
              "url": "https://www.iata.org/en/programs/ops-infra/ground-operations/",
              "tag": "03 • Ramp & Apron Standards",
              "name": "IATA Ground Operations Hub (IGOM)",
              "desc": "Global airline industry standards for apron safety, aircraft turnaround, and ground support equipment handling."
            },
            {
              "url": "https://www.ifatca.org",
              "tag": "04 • Professional Association",
              "name": "IFATCA Air Traffic Controllers",
              "desc": "Worldwide federation representing over 50,000 air traffic controllers across 130 countries."
            },
            {
              "url": "https://www.icao.int",
              "tag": "05 • Global Standards",
              "name": "ICAO Personnel Licensing (Annex 1)",
              "desc": "International civil aviation benchmarks for pilots, flight dispatchers, ATCOs, and aeronautical station operators."
            },
            {
              "url": "https://www.etsglobal.org/fr/fr",
              "tag": "06 • Evaluation Rubrics",
              "name": "ETS Global TOEIC Practice",
              "desc": "Official TOEIC Speaking & Writing evaluation benchmarks and sample workplace responses for aviation professionals."
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
              "url": "https://www.flightglobal.com"
            },
            {
              "topic": "DGAC France / ENAC Portal",
              "sourceTag": "Civil Aviation Careers",
              "heading": "The Modern Role of TSEEAC: From AFIS to Safety Oversight",
              "snippet": "How France's Civil Aviation Operations Corps supports regional aerodrome operations, civil aviation safety inspections, and air navigation technical support.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.ecologie.gouv.fr/direction-generale-laviation-civile-dgac"
            },
            {
              "topic": "Eurocontrol ATM Careers",
              "sourceTag": "Operational Profile",
              "heading": "ATCO vs AFISO: Understanding the Scope of Air Traffic Services",
              "snippet": "Comparing tactical separation authority in controlled airspace with flight information and advisory services at regional fields.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.eurocontrol.int"
            },
            {
              "topic": "IATA Ground Operations Bulletin",
              "sourceTag": "Safety & Turnaround",
              "heading": "The Turnaround Coordinator: Heartbeat of On-Time Performance",
              "snippet": "Why ramp coordinators, loadmasters, and flight dispatchers form the vital link between airline schedules and safety compliance.",
              "readTime": "Estimated read: 5-6 mins",
              "url": "https://www.iata.org"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The Turnaround Coordinator is directly responsible ________ supervising the loading of cargo and ensuring compliance with the weight schedule.",
              "options": [
                {
                  "letter": "A",
                  "text": "with"
                },
                {
                  "letter": "B",
                  "text": "for"
                },
                {
                  "letter": "C",
                  "text": "of"
                },
                {
                  "letter": "D",
                  "text": "to"
                }
              ],
              "correctLetter": "B",
              "correctText": "for",
              "analysis": "\"Responsible for\" is the fixed prepositional collocation followed by a gerund (\"supervising\").",
              "strategy": "Spot \"responsible\" -> immediately look for \"for + -ing/noun\". Avoid the common French false friend \"responsible of\"."
            },
            {
              "stem": "Unlike aerodrome controllers who issue clearances, AFIS officers are tasked with ________ flight information and meteorological updates to inbound pilots.",
              "options": [
                {
                  "letter": "A",
                  "text": "provide"
                },
                {
                  "letter": "B",
                  "text": "provides"
                },
                {
                  "letter": "C",
                  "text": "providing"
                },
                {
                  "letter": "D",
                  "text": "provided"
                }
              ],
              "correctLetter": "C",
              "correctText": "providing",
              "analysis": "\"Be tasked with\" is followed by a preposition (\"with\"), which requires a gerund (\"providing\") or a noun phrase.",
              "strategy": "Identify \"tasked with\" -> verb must be in the gerund form (-ing)."
            },
            {
              "stem": "Before releasing the aircraft for departure, the flight dispatcher must verify that all load sheets ________ by the captain.",
              "options": [
                {
                  "letter": "A",
                  "text": "have signed"
                },
                {
                  "letter": "B",
                  "text": "have been signed"
                },
                {
                  "letter": "C",
                  "text": "will sign"
                },
                {
                  "letter": "D",
                  "text": "signing"
                }
              ],
              "correctLetter": "B",
              "correctText": "have been signed",
              "analysis": "Passive voice is required because load sheets cannot sign themselves; they must be signed by the captain.",
              "strategy": "Check if the subject (\"all load sheets\") is the actor or the receiver of the verb. Since it is the receiver, choose passive voice \"have been signed\"."
            },
            {
              "stem": "The civil aviation safety inspector conducted an unannounced audit in order to ensure ________ ground handling personnel were strictly following apron safety protocols.",
              "options": [
                {
                  "letter": "A",
                  "text": "that"
                },
                {
                  "letter": "B",
                  "text": "what"
                },
                {
                  "letter": "C",
                  "text": "which"
                },
                {
                  "letter": "D",
                  "text": "where"
                }
              ],
              "correctLetter": "A",
              "correctText": "that",
              "analysis": "\"Ensure that\" introduces a content clause detailing what is being verified or secured.",
              "strategy": "\"Ensure\" takes a \"that\" clause (\"ensure that + subject + verb\")."
            },
            {
              "stem": "The airport duty manager was commended for handling the ramp emergency calmly, ________ severe winter weather conditions.",
              "options": [
                {
                  "letter": "A",
                  "text": "despite"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "unless"
                },
                {
                  "letter": "D",
                  "text": "whereas"
                }
              ],
              "correctLetter": "A",
              "correctText": "despite",
              "analysis": "\"Despite\" is a preposition expressing concession followed by a noun phrase (\"severe winter weather conditions\").",
              "strategy": "Check what follows the blank. \"Severe winter weather conditions\" is a noun phrase, so a preposition (\"despite\") is required rather than a subordinating conjunction like \"although\"."
            }
          ]
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
          "title": "Session 1 - Aerodynamics & Flight Principles Objectives",
          "summary": "By the end of this session, you will be able to explain the four fundamental forces of flight, describe the three aircraft axes and their corresponding control surfaces, use cause-and-effect conditionals accurately, and communicate aerodynamic flight scenarios with professional B2 fluency.",
          "items": [
            {
              "num": 1,
              "title": "Explain the Four Forces of Flight in Equilibrium",
              "description": "Describe how lift, weight, thrust, and drag interact during straight-and-level flight, climbs, descents, and turns without technical jargon."
            },
            {
              "num": 2,
              "title": "Identify the Three Aircraft Axes and Primary Flight Controls",
              "description": "Accurately name and describe the lateral (pitch / elevators), longitudinal (roll / ailerons), and vertical (yaw / rudder) axes."
            },
            {
              "num": 3,
              "title": "Deploy Cause & Effect Conditionals in Flight Physics",
              "description": "Formulate zero and first conditionals with if, when, as, and unless to explain aerodynamic consequences and speed-drag dynamics."
            },
            {
              "num": 4,
              "title": "Engage in Control Surface & Flight Simulation Role-Plays",
              "description": "Role-play flight control inputs and aerodynamic feedback between pilots and flight test engineers in interactive partner games."
            },
            {
              "num": 5,
              "title": "Analyze Stall Dynamics and Operational Recovery Briefings",
              "description": "Discuss angle of attack, boundary layer separation, stall warning systems, and recovery actions in clear, professional English."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session featuring an aviation news warm-up, flight forces diagnostic, cause-and-effect language clinic, the 3-axes kinesthetic simulation, an operational stall scenario, and vocabulary consolidation.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Course Entry Warm-Up Check (10 mins)",
              "description": "Weekly aviation news warm-up and diagnostic spot-check connecting Module 1 aerodrome operations to airborne flight physics."
            },
            {
              "time": "10-30",
              "title": "Part 2: The Four Forces & Airflow Quick Check (20 mins)",
              "description": "Interactive vocabulary matching: connecting lift, thrust, weight, drag, airfoil camber, and angle of attack to real flight phases."
            },
            {
              "time": "30-50",
              "title": "Part 3: Language Focus: Cause & Effect Linkers (20 mins)",
              "description": "Expressing aerodynamic consequences with conditionals and causal connectors (if, when, as a result of, leads to, unless)."
            },
            {
              "time": "50-80",
              "title": "Part 4: The 3 Axes & Control Surfaces Game / Role-Play (30 mins)",
              "description": "Interactive kinesthetic 'Human Flight Simulator' game and pilot-to-flight-test-engineer debriefing role-play."
            },
            {
              "time": "80-110",
              "title": "Part 5: Aerodynamic Dilemma: High-Altitude Stall Recovery (30 mins)",
              "description": "Operational case study: analyzing stall warnings, high-altitude buffeting, and crew communication during flight envelope excursions."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Pronunciation stress practice (aero-DY-na-mics, cam-ber, sta-bi-LI-zer, ai-ler-on) and personal learning log entry."
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
            "title": "Activity 1: Aviation News & Principles Warm-Up (10 mins)",
            "summary": "Opening 10-minute warm-up examining current aerospace headlines and testing foundational aerodynamic concepts.",
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
                  "answer": "Pitch attitude is the angle of the aircraft's longitudinal axis relative to the horizon. Angle of attack (AoA) is the angle between the wing's chord line and the oncoming relative airflow. An aircraft can be in a nose-down attitude and still exceed the critical AoA!"
                },
                {
                  "id": 2,
                  "q": "How does 'induced drag' differ from 'parasitic drag' as an aircraft accelerates?",
                  "answer": "Parasitic drag (friction and form drag) increases with the square of airspeed. Induced drag is the penalty for generating lift and decreases as airspeed increases. Total drag is minimized at the best glide speed (L/D max)."
                },
                {
                  "id": 3,
                  "q": "Which primary flight control surface produces yaw, and around which axis does it rotate?",
                  "answer": "The rudder produces yaw, rotating the aircraft around its vertical (normal) axis. It is controlled by the pilot's rudder pedals."
                },
                {
                  "id": 4,
                  "q": "What occurs aerodynamically when an airfoil exceeds its critical angle of attack?",
                  "answer": "The smooth boundary layer airflow separates from the upper wing surface, creating turbulent eddies, causing an abrupt loss of lift and a severe increase in drag—a stall."
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
            "title": "Activity 2: The Four Forces in Equilibrium & Maneuvers (20 mins)",
            "summary": "Analyze the 4 forces acting on an aircraft and explain how pilots create unbalance to maneuver.",
            "forces": [
              {
                "name": "Lift (L)",
                "badge": "Upward Aerodynamic Force",
                "formula": "L = 1/2 · ρ · V² · S · CL",
                "description": "Generated by the pressure differential created across the cambered airfoil (lower pressure above, higher pressure below) as air flows across the wing.",
                "operationalNote": "In straight-and-level unaccelerated flight, Lift equals Weight (L = W). In a banked turn, lift must increase to maintain altitude."
              },
              {
                "name": "Weight / Gravity (W)",
                "badge": "Downward Force",
                "formula": "W = mass · gravity",
                "description": "The downward gravitational pull directed toward the center of the Earth, acting continuously through the aircraft Center of Gravity (CG).",
                "operationalNote": "Weight varies continuously in flight as fuel is burned, changing the aircraft's stall speed, climb performance, and landing reference speeds (Vref)."
              },
              {
                "name": "Thrust (T)",
                "badge": "Forward Propulsive Force",
                "formula": "T = mass flow · acceleration",
                "description": "The forward force produced by the engines (turbofans, turboprops, or pistons) pushing air rearward to propel the aircraft through the air mass.",
                "operationalNote": "In steady unaccelerated level flight, Thrust equals Drag (T = D). Excess thrust allows the aircraft to climb or accelerate."
              },
              {
                "name": "Drag (D)",
                "badge": "Rearward Retarding Force",
                "formula": "D = D(parasitic) + D(induced)",
                "description": "The natural aerodynamic resistance force acting parallel and opposite to the direction of motion through the atmosphere.",
                "operationalNote": "Parasitic drag comes from skin friction, antennas, and form drag; induced drag is generated by high-pressure air curling around wingtips into vortices."
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
            "title": "Activity 3: Language Focus: Cause & Effect in Flight Physics (20 mins)",
            "summary": "Mastering conditional structures and causal connectors to explain aerodynamic phenomena in plain B2 English.",
            "structures": [
              {
                "pattern": "Zero / First Conditionals (Physical Rules & Operational Truths)",
                "examples": [
                  "If the angle of attack exceeds 16 degrees, the wing stalls immediately.",
                  "When airspeed drops below Vapp, the flight control computers will trigger an audio stall warning."
                ]
              },
              {
                "pattern": "Causal Verbs & Prepositional Connectors",
                "examples": [
                  "Deploying wingtip sharklets reduces induced drag, thereby improving cruise fuel burn.",
                  "High density altitude results in longer takeoff ground rolls due to reduced air density."
                ]
              }
            ],
            "drills": [
              {
                "id": 1,
                "prompt": "Combine using 'As a result of': The airflow separates from the upper wing surface. The aircraft loses lift rapidly.",
                "answer": "As a result of airflow separating from the upper wing surface, the aircraft loses lift rapidly."
              },
              {
                "id": 2,
                "prompt": "Combine using 'Unless': The pilot increases engine thrust. The aircraft will not be able to maintain altitude in a steep turn.",
                "answer": "Unless the pilot increases engine thrust, the aircraft will not be able to maintain altitude in a steep turn."
              },
              {
                "id": 3,
                "prompt": "Combine using 'leads to': Cold air is denser than warm air. Cold weather creates shorter takeoff distances.",
                "answer": "Cold air is denser than warm air, which leads to shorter takeoff distances."
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
            "title": "Activity 4: The 3 Axes & Control Surfaces Game / Role-Play (30 mins)",
            "summary": "Interactive 'Human Flight Simulator' kinesthetic game and pilot-to-flight-test-engineer debrief role-play.",
            "axes": [
              {
                "axis": "Lateral Axis (Pitch)",
                "direction": "Runs from wingtip to wingtip through the Center of Gravity.",
                "movement": "Pitch Up / Pitch Down (Nose rises or falls).",
                "controlSurface": "Elevators (mounted on the horizontal stabilizer).",
                "cockpitInput": "Pulling back or pushing forward on the control column / sidestick."
              },
              {
                "axis": "Longitudinal Axis (Roll)",
                "direction": "Runs from the aircraft nose cone to the tail cone.",
                "movement": "Roll / Bank (Wings tilt left or right).",
                "controlSurface": "Ailerons (on the trailing edge of outer wings) + Roll Spoilers.",
                "cockpitInput": "Turning the control yoke or deflecting the sidestick laterally."
              },
              {
                "axis": "Vertical / Normal Axis (Yaw)",
                "direction": "Runs vertically through the top and bottom of the fuselage.",
                "movement": "Yaw (Nose points left or right relative to flight path).",
                "controlSurface": "Rudder (hinged to the vertical fin).",
                "cockpitInput": "Pressing the left or right rudder pedals on the cockpit floor."
              }
            ],
            "roleplayCards": [
              {
                "role": "Test Pilot",
                "prompt": "You are testing control sensitivity on a flight test. Report unusual flutter on the ailerons when rolling into a 30-degree bank and explain the aerodynamic feeling to your engineer."
              },
              {
                "role": "Flight Test Engineer",
                "prompt": "Ask the pilot specific questions about airspeed, trim position, and elevator feedback during the maneuver. Propose a checklist verification."
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
            "title": "Activity 5: Operational Scenario: Stall Recovery & High-Altitude Turbulence (30 mins)",
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
              "Step 3 (Self-Study Assignment - 2 mins): Review the 18 vocabulary flashcards in the Revision tab and complete the 5 TOEIC questions for Session 1 before Session 2."
            ],
            "deliverable": "Verbally confirm mastery of the 3 technical checkpoints and demonstrate accurate stress placement on key aerodynamic terms.",
            "teacherNotes": "Quickly drill the class on word stress for \"aerodynamics\" (stress on NAM) and \"equilibrium\" (stress on LIB). Preview Session 2: Aircraft Anatomy (internal systems and external walkarounds).",
            "title": "Activity 6: Vocabulary Review & Class Wrap-Up (10 mins)",
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
              "definition": "The aerodynamic upward force generated by the wings perpendicular to the relative airflow, overcoming weight."
            },
            {
              "num": "02",
              "term": "Thrust",
              "definition": "The forward force produced by the engines that overcomes aerodynamic drag."
            },
            {
              "num": "03",
              "term": "Weight",
              "definition": "The downward gravitational force pulling the aircraft toward the Earth, directly opposed by lift."
            },
            {
              "num": "04",
              "term": "Drag",
              "definition": "The retarding aerodynamic resistance force acting parallel and opposite to the direction of flight."
            },
            {
              "num": "05",
              "term": "Angle of Attack (AoA)",
              "definition": "The acute angle formed between the chord line of the airfoil and the oncoming relative wind."
            },
            {
              "num": "06",
              "term": "Airfoil",
              "definition": "A streamlined surface, such as an aircraft wing or rotor blade, designed to create lift as air flows over it."
            },
            {
              "num": "07",
              "term": "Camber",
              "definition": "The convex asymmetry or curvature between the upper and lower surfaces of an airfoil."
            },
            {
              "num": "08",
              "term": "Boundary Layer",
              "definition": "The thin layer of air immediately adjacent to the aircraft surface where viscous forces slow the airflow."
            },
            {
              "num": "09",
              "term": "Stall",
              "definition": "A sudden reduction in lift caused by exceeding the critical angle of attack, resulting in airflow separation from the upper wing."
            },
            {
              "num": "10",
              "term": "Lateral Axis",
              "definition": "The imaginary horizontal line running wingtip-to-wingtip around which the aircraft pitches up or down."
            },
            {
              "num": "11",
              "term": "Longitudinal Axis",
              "definition": "The imaginary line running from nose to tail around which the aircraft rolls or banks."
            },
            {
              "num": "12",
              "term": "Vertical Axis",
              "definition": "The imaginary vertical line running top-to-bottom through the center of gravity around which the aircraft yaws."
            },
            {
              "num": "13",
              "term": "Pitch",
              "definition": "The rotational movement around the lateral axis causing the nose of the aircraft to move up or down."
            },
            {
              "num": "14",
              "term": "Roll",
              "definition": "The rotational movement around the longitudinal axis causing the aircraft wings to bank left or right."
            },
            {
              "num": "15",
              "term": "Yaw",
              "definition": "The rotational movement around the vertical axis causing the aircraft nose to turn left or right."
            },
            {
              "num": "16",
              "term": "Elevator",
              "definition": "The movable horizontal flight control surface on the tail empennage used to control pitch."
            },
            {
              "num": "17",
              "term": "Aileron",
              "definition": "A hinged control surface on the trailing edge of each wing used to control roll and banking."
            },
            {
              "num": "18",
              "term": "Rudder",
              "definition": "The primary vertical flight control surface hinged to the fin used to control yaw."
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
              "caption": "Focus: Watch how lift, weight, thrust, and drag achieve aerodynamic equilibrium in steady flight."
            },
            {
              "title": "Video 2: Primary Flight Controls: Ground Lesson",
              "watchUrl": "https://www.youtube.com/watch?v=LZFehDh7LxI",
              "tag": "Flight Controls",
              "videoId": "LZFehDh7LxI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/LZFehDh7LxI",
              "caption": "Focus: Master the 3 axes of rotation (pitch, roll, yaw) and how elevators, ailerons, and rudder manipulate airflow."
            },
            {
              "title": "Video 3: What Causes an Airplane to Stall?",
              "watchUrl": "https://www.youtube.com/watch?v=hIv-BLf6PoE",
              "tag": "Flight Safety",
              "videoId": "hIv-BLf6PoE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/hIv-BLf6PoE",
              "caption": "Focus: Examine critical angle of attack (AOA), airflow detachment from the upper camber, stick-shakers, and recovery technique."
            }
          ],
          "articles": [
            {
              "topic": "Aerodynamic Engineering",
              "sourceTag": "Aviation Today",
              "heading": "How Modern Wingtip Devices Cut Induced Drag and Fuel Burn",
              "snippet": "Examine how blended winglets and sharklets manage high-pressure wingtip vortices, reducing induced drag by up to 5% on commercial flights.",
              "url": "https://www.aviationtoday.com",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Flight Safety Operations",
              "sourceTag": "Flight Safety Foundation",
              "heading": "Understanding Aerodynamic Stalls in Commercial Jet Operations",
              "snippet": "Review how angle of attack sensors, stick shakers, and fly-by-wire flight envelope protection prevent catastrophic boundary layer separation.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://www.grc.nasa.gov/www/k-12/airplane/index.html",
              "tag": "01 • Flight Physics",
              "name": "NASA Glenn Beginner's Guide to Aeronautics",
              "desc": "Official educational guides on Bernoulli's principle, lift equations, and airfoil camber."
            },
            {
              "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/phak",
              "tag": "02 • Flight Manual",
              "name": "FAA Pilot's Handbook of Aeronautical Knowledge",
              "desc": "Chapter 5: Aerodynamics of flight, aircraft stability, and stall/spin recovery procedures."
            },
            {
              "url": "https://ocw.mit.edu",
              "tag": "03 • Academic Courses",
              "name": "MIT OpenCourseWare Flight Dynamics",
              "desc": "Open aerospace engineering lecture notes on boundary layer control and drag polar curves."
            },
            {
              "url": "https://aircraft.airbus.com/en/services/maintain/fast-technical-magazine",
              "tag": "04 • Airbus Engineering",
              "name": "Airbus FAST Magazine: Aerodynamic Optimization",
              "desc": "In-depth technical articles on sharklet wingtip designs and laminar flow aerodynamics."
            },
            {
              "url": "https://www.boeing.com/commercial/aeromagazine",
              "tag": "05 • Boeing Technology",
              "name": "Boeing AERO Magazine: Fuel & Drag Reduction",
              "desc": "Engineering case studies on surface finishes, drag cleanup, and flight control optimization."
            },
            {
              "url": "https://www.skybrary.aero/articles/aerodynamic-stall",
              "tag": "06 • Safety Portal",
              "name": "Skybrary: Aerodynamic Stall & Angle of Attack",
              "desc": "Operational aviation safety portal on stall warning margins, stick-shakers, and recovery."
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
            "trap": "⚠️ TOEIC Part 5 Cause Linker Alert: 'Due to' and 'because of' MUST be followed by a noun or noun phrase. 'Because' and 'since' are conjunctions followed by a subject + verb clause.",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "Due to boundary layer separation at high angles of attack, the aircraft experiences severe aerodynamic buffeting.",
              "If the pilot increases pitch attitude without adding thrust, airspeed will decay rapidly."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "Because the aircraft was climbing rapidly, the pilots had to increase engine thrust in order to maintain ________ over the wings.",
              "options": [
                {
                  "letter": "A",
                  "text": "lifting"
                },
                {
                  "letter": "B",
                  "text": "lift"
                },
                {
                  "letter": "C",
                  "text": "lifted"
                },
                {
                  "letter": "D",
                  "text": "lifter"
                }
              ],
              "correctLetter": "B",
              "correctText": "lift",
              "analysis": "The transitive verb 'maintain' requires a direct object noun phrase. 'Lift' functions as the aerodynamic noun representing the upward aerodynamic force opposing aircraft weight.",
              "strategy": "After transitive verbs like 'maintain', 'generate', 'produce', or 'increase', look for the primary technical noun rather than participle or agentive forms.",
              "id": 1
            },
            {
              "stem": "When turbulent air forces the angle of attack beyond its critical limit, a sudden loss of lift ________.",
              "options": [
                {
                  "letter": "A",
                  "text": "occurred"
                },
                {
                  "letter": "B",
                  "text": "occurring"
                },
                {
                  "letter": "C",
                  "text": "occurs"
                },
                {
                  "letter": "D",
                  "text": "to occur"
                }
              ],
              "correctLetter": "C",
              "correctText": "occurs",
              "analysis": "This sentence states a factual law of aerodynamics (zero conditional). In factual cause-and-effect statements governed by 'when + present simple', the main clause takes the present simple ('occurs').",
              "strategy": "Conditionals expressing scientific facts or aerodynamic principles take present simple in both clauses (When + V1 -> V1).",
              "id": 2
            },
            {
              "stem": "The rudder, which controls movement around the vertical axis, is hinged ________ the trailing edge of the vertical stabilizer.",
              "options": [
                {
                  "letter": "A",
                  "text": "to"
                },
                {
                  "letter": "B",
                  "text": "at"
                },
                {
                  "letter": "C",
                  "text": "with"
                },
                {
                  "letter": "D",
                  "text": "by"
                }
              ],
              "correctLetter": "A",
              "correctText": "to",
              "analysis": "The participle/adjective 'hinged' pairs idiomatically with the preposition 'to' when describing physical attachment to another structure ('hinged to the vertical stabilizer').",
              "strategy": "Watch for fixed mechanical and anatomical collocations: hinged to, mounted on/along, attached to, connected with.",
              "id": 3
            },
            {
              "stem": "________ the flight crew recognizes the onset of a stall early, recovery can be accomplished with minimal loss of altitude.",
              "options": [
                {
                  "letter": "A",
                  "text": "In spite of"
                },
                {
                  "letter": "B",
                  "text": "Provided that"
                },
                {
                  "letter": "C",
                  "text": "Due to"
                },
                {
                  "letter": "D",
                  "text": "Whereas"
                }
              ],
              "correctLetter": "B",
              "correctText": "Provided that",
              "analysis": "'Provided that' is a conditional conjunction equivalent to 'on the condition that' or 'only if', introducing a full finite clause ('the flight crew recognizes...'). 'In spite of' and 'Due to' require noun phrases, while 'Whereas' indicates a contrast.",
              "strategy": "Check whether the blank is followed by a full clause (subject + verb) or a noun phrase. 'Provided that' must be followed by a complete clause.",
              "id": 4
            },
            {
              "stem": "Airlines install lightweight composite winglets primarily to reduce induced drag, ________ overall fuel efficiency.",
              "options": [
                {
                  "letter": "A",
                  "text": "improve"
                },
                {
                  "letter": "B",
                  "text": "improved"
                },
                {
                  "letter": "C",
                  "text": "improves"
                },
                {
                  "letter": "D",
                  "text": "improving"
                }
              ],
              "correctLetter": "D",
              "correctText": "improving",
              "analysis": "The present participle clause 'improving overall fuel efficiency' expresses an attendant result or consequence of the primary action ('to reduce induced drag').",
              "strategy": "A comma following a complete main clause often introduces an -ing participle clause indicating result or simultaneous action.",
              "id": 5
            }
          ],
          "pageUrl": "session1/admat_aas2.html"
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Aircraft Anatomy: Structure & Systems Objectives",
          "summary": "By the end of this session, you will be able to identify external and internal aircraft parts from diagrams, use spatial prepositions and functional descriptors accurately, conduct a simulated pre-flight exterior walkaround, and report mechanical defects in professional B2 English.",
          "items": [
            {
              "num": 1,
              "title": "Identify External & Internal Aircraft Components",
              "description": "Accurately name key airframe components including slats, flaps, ailerons, empennage, radome, landing gear, flight deck instruments, and cabin bulkheads."
            },
            {
              "num": 2,
              "title": "Deploy Spatial Prepositions & Functional Descriptors",
              "description": "Describe the physical position and operational purpose of parts using prepositions (along, behind, flush-mounted, adjacent to) and purpose clauses."
            },
            {
              "num": 3,
              "title": "Perform a 360-Degree Pre-Flight Walkaround Inspection Role-Play",
              "description": "Simulate a captain or maintenance engineer inspecting the airframe, identifying foreign object damage (FOD), leaks, and structural dents."
            },
            {
              "num": 4,
              "title": "Communicate Cockpit & Cabin Defect Handovers",
              "description": "Discuss whether unserviceable components violate the Minimum Equipment List (MEL) and agree on dispatch decisions."
            },
            {
              "num": 5,
              "title": "Master High-Frequency Structural Pronunciation",
              "description": "Correctly pronounce and stress specialized aeronautical components without hesitating during oral interactions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session combining aviation news, an airframe diagram labeling challenge, spatial grammar clinic, a 360-degree walkaround inspection simulation, MEL defect handovers, and pronunciation drills.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 1 Aerodynamics Spot-Check (10 mins)",
              "description": "Weekly aviation news warm-up and rapid spot-check on the 4 forces, angle of attack, and the 3 aircraft axes."
            },
            {
              "time": "10-35",
              "title": "Part 2: Airframe Diagram Labeling Race (25 mins)",
              "description": "Collaborative visual diagram race: identifying and labeling external control surfaces and internal cabin/cockpit zones."
            },
            {
              "time": "35-55",
              "title": "Part 3: Language Focus: Spatial Prepositions & Functions (20 mins)",
              "description": "Describing locations and mechanical functions using relative clauses and spatial prepositions (situated along, mounted to, designed to)."
            },
            {
              "time": "55-85",
              "title": "Part 4: Pre-Flight Walkaround Inspection Role-Play (30 mins)",
              "description": "Captain & Ramp Maintenance Engineer simulation: performing an exterior walkaround and reporting simulated defects."
            },
            {
              "time": "85-110",
              "title": "Part 5: Cockpit & Cabin Defect Handover Workshop (25 mins)",
              "description": "Consulting the Minimum Equipment List (MEL) to negotiate dispatch decisions for inoperative cabin or airframe items."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Pronunciation stress practice (fu-se-lage, emp-en-nage, hy-drau-lic, ra-dome) and vocabulary log consolidation."
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
            "title": "Activity 1: Aviation News & Session 1 Spot-Check (10 mins)",
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
                  "answer": "Ailerons control roll; they are hinged to the trailing edge of each outer wing and move in opposite directions."
                },
                {
                  "id": 2,
                  "q": "What is the difference between leading-edge slats and trailing-edge flaps?",
                  "answer": "Slats extend from the leading edge to delay stall at high angles of attack; flaps extend from the trailing edge to increase both lift and drag at low speeds."
                },
                {
                  "id": 3,
                  "q": "Why are pitot tubes and static ports heated electrically?",
                  "answer": "To prevent atmospheric ice accumulation from blocking dynamic and static pressure sensing, which would cause false airspeed indications."
                },
                {
                  "id": 4,
                  "q": "What is the radome, and what sensitive equipment does it protect?",
                  "answer": "The radome is the fiberglass dielectric nose cone that shields the weather radar antenna from aerodynamic weather without blocking radar signals."
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
            "title": "Activity 2: Airframe Anatomy Labeling Challenge (25 mins)",
            "summary": "Identify and describe the key external parts and internal zones of a commercial transport aircraft.",
            "externalParts": [
              {
                "id": "01",
                "name": "Radome (Nose Cone)",
                "location": "Forward fuselage tip",
                "purpose": "Houses weather radar antenna; made of RF-transparent composites."
              },
              {
                "id": "02",
                "name": "Pitot-Static Probes",
                "location": "Forward side fuselage",
                "purpose": "Measures dynamic ram air and ambient atmospheric pressure for flight instruments."
              },
              {
                "id": "03",
                "name": "Fuselage",
                "location": "Central main body",
                "purpose": "Pressurized tube holding passengers, flight crew, and lower cargo holds."
              },
              {
                "id": "04",
                "name": "Leading-Edge Slats",
                "location": "Front edge of wings",
                "purpose": "Extend forward and down to increase camber and delay stall during takeoff and landing."
              },
              {
                "id": "05",
                "name": "Trailing-Edge Flaps",
                "location": "Inboard rear wing",
                "purpose": "Extend backward and down to increase wing surface area, generating high lift and drag."
              },
              {
                "id": "06",
                "name": "Ailerons",
                "location": "Outboard rear wing",
                "purpose": "Deflect differentially (one up, one down) to roll the aircraft into a bank."
              },
              {
                "id": "07",
                "name": "Roll Spoilers & Speed Brakes",
                "location": "Upper wing surface",
                "purpose": "Deploy upward to dump lift, assist roll, and act as airbrakes during descent and rollout."
              },
              {
                "id": "08",
                "name": "Engine Nacelle & Pylon",
                "location": "Underwing pylons",
                "purpose": "Aerodynamic housing and structural mounting holding the turbofan engine."
              },
              {
                "id": "09",
                "name": "Main & Nose Landing Gear",
                "location": "Undercarriage bay",
                "purpose": "Absorbs landing impact with oleo-pneumatic struts; retractable with steering nosewheel."
              },
              {
                "id": "10",
                "name": "Vertical Fin & Rudder",
                "location": "Tail empennage",
                "purpose": "Vertical fin provides directional stability; hinged rudder controls aerodynamic yaw."
              },
              {
                "id": "11",
                "name": "Horizontal Stabilizer & Elevators",
                "location": "Tail empennage",
                "purpose": "Stabilizer provides longitudinal stability; elevators control aircraft pitch."
              },
              {
                "id": "12",
                "name": "Winglets / Sharklets",
                "location": "Outer wingtips",
                "purpose": "Reduces induced drag by mitigating high-pressure wingtip vortex roll-up."
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
            "title": "Activity 3: Language Focus: Spatial Prepositions & Functions (20 mins)",
            "summary": "Formulating clear, professional technical descriptions of aircraft parts and their relative positions.",
            "patterns": [
              {
                "title": "Precise Spatial Prepositions",
                "examples": [
                  "The auxiliary power unit (APU) is situated inside the tail cone, aft of the rear pressure bulkhead.",
                  "The ram air turbine (RAT) is flush-mounted beneath the fuselage, ready to deploy into the relative airflow."
                ]
              },
              {
                "title": "Purposive Relative Clauses",
                "examples": [
                  "Flaps are high-lift devices which extend from the trailing edge, serving to decrease landing speeds.",
                  "The oleo strut is an oleo-pneumatic shock absorber designed to cushion touchdown impacts."
                ]
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
            "title": "Activity 4: Pre-Flight Exterior Walkaround Role-Play (30 mins)",
            "summary": "Captain & Line Maintenance Engineer simulation: performing a 360-degree exterior walkaround and reporting simulated defects.",
            "defectCards": [
              {
                "item": "Card 1: Radome Inspection",
                "defect": "Circular dent (8 cm diameter) with chipped paint on the lower right radome, likely caused by a bird strike on the previous flight.",
                "pilotDialogue": "Ramp, Captain here. I'm looking at a noticeable dent on the lower starboard radome. Could you bring the gauge to check if it's within structural limits?",
                "engineerDialogue": "Copy that, Captain. I'll inspect the honeycomb core with a tap hammer to confirm there's no delamination or radar interference."
              },
              {
                "item": "Card 2: Left Main Landing Gear",
                "defect": "Fresh reddish hydraulic fluid dripping slowly (approx. 5 drops per minute) from the brake line fitting onto the brake assembly.",
                "pilotDialogue": "We have hydraulic seepage near the port main gear brake line. It looks fresh. Can we get maintenance to torque this fitting?",
                "engineerDialogue": "I see it. That's Skydrol hydraulic fluid. Let me wipe it clean, verify the B-nut torque, and run a brake pressurization check."
              },
              {
                "item": "Card 3: Right Winglet Static Discharger",
                "defect": "One of the three trailing static discharger wicks on the right sharklet is broken off and missing.",
                "pilotDialogue": "I noticed one static wick missing on the starboard winglet tip. Can we dispatch with two wicks installed?",
                "engineerDialogue": "Let me check the Configuration Deviation List (CDL). Under CDL 23-60, flight is permitted with one wick missing provided lightning risk is low."
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
            "title": "Activity 5: Minimum Equipment List (MEL) Dispatch Workshop (25 mins)",
            "summary": "Reviewing the Minimum Equipment List (MEL) to make safe dispatch decisions for inoperative equipment.",
            "melItems": [
              {
                "item": "APU (Auxiliary Power Unit) Generator Inoperative",
                "status": "Permitted for 10 days provided both engine generators and external GPU are fully operational."
              },
              {
                "item": "Passenger Cabin Lavatory Door Latch Jammed",
                "status": "Permitted provided the lavatory is locked out, placarded 'INOPERATIVE', and passenger-to-lavatory ratio is respected."
              },
              {
                "item": "Weather Radar System Inoperative",
                "status": "Strictly prohibited if convective storms or IMC (Instrument Meteorological Conditions) are forecast along route."
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
              "Step 3 (Study Assignment - 2 mins): Review the 18 vocabulary flashcards in the Revision tab and complete the Session 2 TOEIC practice questions before Session 3."
            ],
            "deliverable": "Demonstrate accurate pronunciation and primary stress placement on 6 multisyllabic aircraft parts and confirm mastery of key anatomy concepts.",
            "teacherNotes": "Conduct a choral pronunciation drill for 'fuselage' (/ˈfjuːzəlɑːʒ/) and 'empennage' (/ˌɒmpɪˈnɑːʒ/). Preview Session 3: Commercial Aircraft & Fleet Types (narrow-body, wide-body, regional).",
            "title": "Activity 6: Vocabulary Review & Class Wrap-Up (10 mins)",
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
              "definition": "The central main body structure of an aircraft holding passengers, flight crew, and cargo."
            },
            {
              "num": "02",
              "term": "Empennage",
              "definition": "The tail assembly of an aircraft, consisting of the vertical fin, rudder, horizontal stabilizer, and elevators."
            },
            {
              "num": "03",
              "term": "Leading Edge",
              "definition": "The forwardmost edge of an airfoil or wing that first meets the relative airflow."
            },
            {
              "num": "04",
              "term": "Trailing Edge",
              "definition": "The aft rear edge of an airfoil or wing where airflow passing over and under meets."
            },
            {
              "num": "05",
              "term": "Slats",
              "definition": "Movable aerodynamic surfaces on the leading edge that extend to delay stall at high angles of attack."
            },
            {
              "num": "06",
              "term": "Flaps",
              "definition": "High-lift hinged surfaces on the trailing edge deployed to increase wing surface area and camber during takeoff and landing."
            },
            {
              "num": "07",
              "term": "Spoiler (Speed Brake)",
              "definition": "Hinged plates on the upper wing surface that deploy upward to spoil lift and slow the aircraft."
            },
            {
              "num": "08",
              "term": "Horizontal Stabilizer",
              "definition": "The fixed or trimmable horizontal tail surface providing longitudinal stability in pitch."
            },
            {
              "num": "09",
              "term": "Vertical Fin",
              "definition": "The vertical tail surface that provides directional stability against yaw."
            },
            {
              "num": "10",
              "term": "Landing Gear",
              "definition": "The undercarriage assembly (wheels, oleo struts, brakes) supporting the aircraft on the ground."
            },
            {
              "num": "11",
              "term": "Radome",
              "definition": "The streamlined fiberglass nose cone protecting the weather radar antenna from aerodynamic weather."
            },
            {
              "num": "12",
              "term": "Pitot Tube",
              "definition": "A forward-facing tube mounted on the airframe that measures dynamic ram air pressure for the airspeed indicator."
            },
            {
              "num": "13",
              "term": "Static Port",
              "definition": "A flush-mounted opening on the fuselage side that senses ambient atmospheric pressure for altimeters and VSI."
            },
            {
              "num": "14",
              "term": "Sidestick",
              "definition": "The cockpit hand control stick mounted on the side console used by pilots to send electronic roll and pitch inputs."
            },
            {
              "num": "15",
              "term": "Throttle Quadrant",
              "definition": "The center cockpit console containing engine thrust levers and reverse thrust triggers."
            },
            {
              "num": "16",
              "term": "Flight Deck",
              "definition": "The cockpit area at the front of the aircraft where the flight crew operates the flight controls and instruments."
            },
            {
              "num": "17",
              "term": "Galley",
              "definition": "The aircraft onboard kitchen area where flight attendants prepare passenger meals and store service carts."
            },
            {
              "num": "18",
              "term": "Bulkhead",
              "definition": "A structural vertical dividing wall separating passenger cabins, galleys, or pressurized zones."
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
              "caption": "Focus: Step-by-step exterior pre-departure walkaround checking pitot-static probes, gear assemblies, tires, and control surfaces."
            },
            {
              "title": "Video 2: How Airplane Flaps and Slats Work",
              "watchUrl": "https://www.youtube.com/watch?v=fUPNN3N-oDI",
              "tag": "Airframe Systems",
              "videoId": "fUPNN3N-oDI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/fUPNN3N-oDI",
              "caption": "Focus: Understand trailing-edge flaps and leading-edge slats, hydraulic actuator tracks, camber change, and stall speed reduction."
            },
            {
              "title": "Video 3: Turbofan Architecture: CFM56 Jet Engines",
              "watchUrl": "https://www.youtube.com/watch?v=S2HymZd3GEE",
              "tag": "Propulsion",
              "videoId": "S2HymZd3GEE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/S2HymZd3GEE",
              "caption": "Focus: Inspect the compressor stages, combustion chamber, turbine blades, bypass ratio, and thrust generation in modern turbofans."
            }
          ],
          "articles": [
            {
              "topic": "Airframe Technology",
              "sourceTag": "Aerospace Manufacturing",
              "heading": "Composite Materials and Carbon Fiber in Modern Airframe Structures",
              "snippet": "How carbon-fiber-reinforced polymers (CFRP) in the Boeing 787 and Airbus A350 eliminate corrosion and reduce empty weight.",
              "url": "https://www.aero-mag.com",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Line Maintenance",
              "sourceTag": "Aviation Maintenance Magazine",
              "heading": "Conducting Visual Pre-Flight Inspections: Detecting Cracks, Dents, and Bird Strikes",
              "snippet": "A practical guide for ramp engineers and line pilots identifying structural damage on engine cowlings, radomes, and leading edges.",
              "url": "https://www.av-maint.com",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://www.skybrary.aero/articles/flight-control-surfaces",
              "tag": "01 • Flight Controls",
              "name": "Skybrary: Aircraft Flight Control Surfaces",
              "desc": "Comprehensive encyclopedia entries on primary and secondary flight control systems."
            },
            {
              "url": "https://www.faa.gov/regulations_policies/handbooks_manuals/aviation/aircraft_airframe_handbook",
              "tag": "02 • Airframe Engineering",
              "name": "FAA AMT Airframe Handbook (FAA-H-8083-31A)",
              "desc": "Authoritative technical manual on aircraft structures, composite repairs, and hydraulics."
            },
            {
              "url": "https://aircraft.airbus.com/en/aircraft",
              "tag": "03 • Airbus Specifications",
              "name": "Airbus Aircraft Family Technical Data",
              "desc": "Official payload, dimensions, and structural specifications for the A220, A320, and A350 families."
            },
            {
              "url": "https://www.boeing.com/commercial",
              "tag": "04 • Boeing Engineering",
              "name": "Boeing Commercial Airplanes Technical Highlights",
              "desc": "Detailed structural diagrams and systems overview of the 737 MAX and 787 Dreamliner."
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "05 • Maintenance Standards",
              "name": "EASA Part-66 Aircraft Maintenance Standards",
              "desc": "European airworthiness regulations and syllabus requirements for airframe certifications."
            },
            {
              "url": "https://www.rolls-royce.com/products-and-services/civil-aerospace.aspx",
              "tag": "06 • Engine Architecture",
              "name": "Rolls-Royce Trent Engine Cutaway & Architecture",
              "desc": "Interactive visualization and explanatory guides on high-bypass turbofan components."
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
            "trap": "⚠️ TOEIC Part 5 Passive Voice Alert: Be sure to check subject-verb agreement with collective or plural aviation nouns (e.g., 'The landing gear IS inspected' vs. 'The main gear assemblies ARE inspected').",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "During the exterior walkaround, minor surface abrasions were detected on the composite radome.",
              "The pitot-static probes are electrically heated to prevent ice formation during climb."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The line maintenance engineer conducted a thorough exterior walkaround to ensure that no hydraulic fluid was ________ from the landing gear.",
              "options": [
                {
                  "letter": "A",
                  "text": "leaking"
                },
                {
                  "letter": "B",
                  "text": "leaked"
                },
                {
                  "letter": "C",
                  "text": "leaks"
                },
                {
                  "letter": "D",
                  "text": "leak"
                }
              ],
              "correctLetter": "A",
              "correctText": "leaking",
              "analysis": "The auxiliary verb 'was' combined with the active continuous context requires the present participle '-ing' form ('was leaking') to indicate an ongoing fluid drip.",
              "strategy": "Be careful with active vs. passive after 'was/were': fluid leaks (active continuous = was leaking), fluid is drained (passive = was drained).",
              "id": 1
            },
            {
              "stem": "Slats are high-lift aerodynamic devices mounted ________ the leading edge of the wing to prevent boundary layer separation.",
              "options": [
                {
                  "letter": "A",
                  "text": "through"
                },
                {
                  "letter": "B",
                  "text": "along"
                },
                {
                  "letter": "C",
                  "text": "between"
                },
                {
                  "letter": "D",
                  "text": "into"
                }
              ],
              "correctLetter": "B",
              "correctText": "along",
              "analysis": "The preposition 'along' denotes continuous linear extension from the root to the tip of the wing's leading edge.",
              "strategy": "Prepositions of location: use 'along' for items running parallel to a linear edge or boundary (along the leading edge, along the taxiway).",
              "id": 2
            },
            {
              "stem": "According to the Minimum Equipment List, the aircraft is permitted to dispatch ________ the weather radar is certified as fully operational.",
              "options": [
                {
                  "letter": "A",
                  "text": "in case of"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "provided that"
                },
                {
                  "letter": "D",
                  "text": "although"
                }
              ],
              "correctLetter": "C",
              "correctText": "provided that",
              "analysis": "'Provided that' introduces the essential airworthiness condition required for flight release under MEL restrictions.",
              "strategy": "MEL (Minimum Equipment List) regulatory sentences frequently test conditional conjunctions like 'provided that' or 'on condition that'.",
              "id": 3
            },
            {
              "stem": "The radome is constructed from radio-frequency transparent composite materials in order to shield the antenna without ________ radar signals.",
              "options": [
                {
                  "letter": "A",
                  "text": "block"
                },
                {
                  "letter": "B",
                  "text": "blocked"
                },
                {
                  "letter": "C",
                  "text": "blockage"
                },
                {
                  "letter": "D",
                  "text": "blocking"
                }
              ],
              "correctLetter": "D",
              "correctText": "blocking",
              "analysis": "The preposition 'without' requires a gerund (-ing form) when taking an action and an object ('without blocking radar signals').",
              "strategy": "All prepositions (without, by, for, in, after, before) require a gerund (-ing) when immediately followed by a verb form.",
              "id": 4
            },
            {
              "stem": "Flight deck instruments provide real-time information regarding airspeed, altitude, and heading directly ________ the Primary Flight Display.",
              "options": [
                {
                  "letter": "A",
                  "text": "on"
                },
                {
                  "letter": "B",
                  "text": "at"
                },
                {
                  "letter": "C",
                  "text": "of"
                },
                {
                  "letter": "D",
                  "text": "by"
                }
              ],
              "correctLetter": "A",
              "correctText": "on",
              "analysis": "Electronic and visual information is displayed 'on' a screen, monitor, or avionics display ('on the Primary Flight Display').",
              "strategy": "Fixed tech preposition: information appears 'on' screens, displays, radars, monitors, and instruments.",
              "id": 5
            }
          ],
          "pageUrl": "session2/admat_aas2.html"
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Commercial Aircraft & Airlines Objectives",
          "summary": "By the end of this session, you will be able to categorize commercial aircraft types, compare airliner specifications and manufacturer strategies (Airbus vs. Boeing), deploy comparative structures with confidence, and participate in an airline fleet selection committee simulation.",
          "items": [
            {
              "num": 1,
              "title": "Classify Commercial Aircraft Families",
              "description": "Differentiate between regional turboprops/jets, single-aisle narrowbodies, twin-aisle widebodies, and dedicated freighters."
            },
            {
              "num": 2,
              "title": "Compare Manufacturer Strategies & Fleet Data",
              "description": "Analyze the global duopoly of Airbus and Boeing alongside emerging players (ATR, Embraer, COMAC) in range, capacity, and efficiency."
            },
            {
              "num": 3,
              "title": "Deploy Comparative & Superlative Language for Data Evaluation",
              "description": "Accurately use comparative modifiers (substantially more efficient, lowest fuel burn, twice as heavy) when presenting fleet statistics."
            },
            {
              "num": 4,
              "title": "Role-Play an Airline Fleet Selection Committee",
              "description": "Simulate an executive airline fleet planning committee evaluating candidate aircraft orders for regional and long-haul routes."
            },
            {
              "num": 5,
              "title": "Examine Airline Operating Models (Legacy vs. Low-Cost)",
              "description": "Contrast hub-and-spoke vs. point-to-point network economics, fleet commonality benefits, and turnaround speed."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan (2 Hours)",
          "summary": "A 2-hour communicative session covering commercial aviation news, commercial aircraft classification, comparative data clinic, an airline fleet selection pitch simulation, and duopoly debates.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 2 Anatomy Spot-Check (10 mins)",
              "description": "Weekly aviation news review and rapid spot-check on aircraft parts and pre-flight walkaround defect reporting."
            },
            {
              "time": "10-35",
              "title": "Part 2: Commercial Aircraft Classification Table (25 mins)",
              "description": "Interactive fleet categorization: classifying regional, narrowbody, widebody, and freighter models by range, capacity, and mission."
            },
            {
              "time": "35-55",
              "title": "Part 3: Language Focus: Comparative & Superlative Data (20 mins)",
              "description": "Evaluating commercial figures with comparative structures (burns 20% less fuel, substantially greater range, the most cost-effective)."
            },
            {
              "time": "55-85",
              "title": "Part 4: Airline Fleet Selection Committee Simulation (30 mins)",
              "description": "Pairs act as airline fleet planning directors preparing an aircraft purchase pitch for new routes, defending their choice to classmates."
            },
            {
              "time": "85-110",
              "title": "Part 5: Global Manufacturer Debate & Industry Trends (25 mins)",
              "description": "Class debate: Hub-and-spoke vs. point-to-point routes; Airbus vs. Boeing duopoly competition; the entry of COMAC C919."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & Class Wrap-Up (10 mins)",
              "description": "Pronunciation drill on commercial terms (ma-nu-fac-tu-rer, tur-bo-prop, ca-pa-ci-ty, ef-fi-cien-cy) and learning log consolidation."
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
            "title": "Activity 1: Aviation News & Session 2 Spot-Check (10 mins)",
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
                  "answer": "A narrowbody (single-aisle) aircraft has one passenger aisle with up to 6 seats abreast (e.g. A320, 737). A widebody (twin-aisle) aircraft has two passenger aisles with 7 to 10 seats abreast (e.g. A350, 787)."
                },
                {
                  "id": 2,
                  "q": "Why do low-cost carriers (LCCs) like Ryanair and Southwest operate only one single aircraft type?",
                  "answer": "Fleet commonality dramatically lowers pilot training costs, simplifies maintenance spare parts inventory, and ensures any crew can operate any aircraft on short notice."
                },
                {
                  "id": 3,
                  "q": "Name two major regional aircraft manufacturers outside the Airbus-Boeing duopoly.",
                  "answer": "ATR (Franco-Italian turboprop manufacturer) and Embraer (Brazilian regional jet manufacturer)."
                },
                {
                  "id": 4,
                  "q": "What is Maximum Takeoff Weight (MTOW), and why is it important for airline route planning?",
                  "answer": "MTOW is the maximum permissible total weight (airframe, fuel, passengers, cargo) at brake release. It determines runway length requirements, landing fees, and maximum payload-range capability."
                }
              ]
            }
          },
          "fleetTaxonomy": {
            "title": "Activity 2: Commercial Aircraft Classification Table (25 mins)",
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
                "typicalMission": "Short-haul feeder flights connecting small regional communities to hub airports; short runways and rough airfields."
              },
              {
                "category": "Single-Aisle Narrowbodies (The Workhorses)",
                "examples": "Airbus A320neo, Boeing 737 MAX, Airbus A220-300",
                "capacity": "140 to 240 seats",
                "range": "5,500 to 8,700 km (A321XLR)",
                "typicalMission": "High-frequency domestic and regional international routes; rapid 30-minute turnarounds; expanding into thin transatlantic flights."
              },
              {
                "category": "Twin-Aisle Widebodies (Long-Haul Flagships)",
                "examples": "Airbus A350-900/1000, Boeing 787-9/10, Boeing 777-300ER/777X",
                "capacity": "250 to 450 seats",
                "range": "13,000 to 18,000 km",
                "typicalMission": "Intercontinental long-haul trunk routes connecting global megahubs; high belly cargo payload capacity; premium cabin configurations."
              },
              {
                "category": "Dedicated Freighters & Cargo Conversions",
                "examples": "Boeing 777F, Airbus A350F, Boeing 767-300BCF, A321P2F",
                "capacity": "25 to 110 tonnes of cargo",
                "range": "7,000 to 10,000 km",
                "typicalMission": "Scheduled express freight networks (FedEx, DHL, UPS) operating main-deck containerized pallets with high-value time-sensitive goods."
              }
            ]
          },
          "comparativeClinic": {
            "title": "Activity 3: Language Focus: Comparative & Superlative Data (20 mins)",
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
                "example": "The A350-900 burns 25% less fuel per seat than the previous-generation A340 quad-jet."
              },
              {
                "structure": "Emphatic Modifiers",
                "formula": "substantially / significantly / considerably + [comparative]",
                "example": "Turboprops are considerably more economical than regional jets on stage lengths under 500 kilometers."
              },
              {
                "structure": "Superlative Benchmarks",
                "formula": "the + [superlative] + [noun] + in its class / on the market",
                "example": "The A321XLR offers the longest range of any commercial single-aisle airliner on the market."
              }
            ]
          },
          "fleetCommitteeSimulation": {
            "title": "Activity 4: Airline Fleet Selection Committee Simulation (30 mins)",
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
                "optionB": "Boeing 787-8 (Widebody): 242 seats, higher passenger comfort, superior cargo revenue, higher landing fees and trip cost."
              },
              {
                "title": "Case 2: Regional Feeder Fleet Modernization",
                "network": "High-frequency domestic island-hopping and mountainous routes (Corsica, Pyrenees, Scottish Highlands).",
                "optionA": "ATR 72-600 (Turboprop): 70 seats, lowest fuel burn, excellent short-field performance, slower cruise speed (510 km/h).",
                "optionB": "Embraer E175 (Regional Jet): 76 seats, faster cruise speed (870 km/h), greater passenger appeal, higher fuel burn on short hops."
              }
            ]
          },
          "globalLandscapeDebate": {
            "title": "Activity 5: Global Manufacturer Debate & Industry Trends (25 mins)",
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
            "title": "Activity 6: Vocabulary Review & Pronunciation Wrap-Up (10 mins)",
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
              "definition": "A single-aisle commercial passenger aircraft typically seating 100 to 240 passengers with 6 seats abreast."
            },
            {
              "num": "02",
              "term": "Widebody",
              "definition": "A twin-aisle commercial airliner seating 250 to 500+ passengers with 7 to 10 seats abreast used for long-haul routes."
            },
            {
              "num": "03",
              "term": "Regional Jet",
              "definition": "A short-to-medium-range jet airliner typically seating 50 to 120 passengers on feeder routes."
            },
            {
              "num": "04",
              "term": "Turboprop",
              "definition": "An aircraft powered by a gas turbine engine geared to a propeller, highly efficient at low altitudes and short distances."
            },
            {
              "num": "05",
              "term": "Freighter",
              "definition": "A dedicated cargo aircraft with main-deck loading doors designed exclusively to carry freight containers."
            },
            {
              "num": "06",
              "term": "Range",
              "definition": "The maximum distance an aircraft can fly between takeoff and landing without refueling."
            },
            {
              "num": "07",
              "term": "Payload",
              "definition": "The total revenue-generating load carrying capacity of an aircraft, including passengers, luggage, and commercial cargo."
            },
            {
              "num": "08",
              "term": "Maximum Takeoff Weight (MTOW)",
              "definition": "The maximum certified total weight at which an aircraft is legally permitted to attempt takeoff."
            },
            {
              "num": "09",
              "term": "Fuel Burn",
              "definition": "The rate of fuel consumed by an aircraft engine during flight, measured in kilograms or liters per hour."
            },
            {
              "num": "10",
              "term": "Manufacturer",
              "definition": "An aerospace corporation, such as Airbus or Boeing, that designs, certifies, and builds aircraft."
            },
            {
              "num": "11",
              "term": "Duopoly",
              "definition": "A market condition where two major suppliers dominate sales, notably Airbus and Boeing in large commercial jetliners."
            },
            {
              "num": "12",
              "term": "Flag Carrier",
              "definition": "A legacy national airline registered in a specific country, often historically state-owned (e.g. Air France, British Airways)."
            },
            {
              "num": "13",
              "term": "Low-Cost Carrier (LCC)",
              "definition": "An airline operating with a lean cost structure, high fleet utilization, point-to-point routes, and unbundled fares (e.g. Ryanair, easyJet)."
            },
            {
              "num": "14",
              "term": "Hub-and-Spoke",
              "definition": "A route network model where flights connect through a central hub airport to transfer passengers onto connecting flights."
            },
            {
              "num": "15",
              "term": "Point-to-Point",
              "definition": "A route network model providing direct nonstop flights between origin and destination without transiting a central hub."
            },
            {
              "num": "16",
              "term": "Fleet Renewal",
              "definition": "The phased retirement of aging aircraft and replacement with newer, quieter, and more fuel-efficient models."
            },
            {
              "num": "17",
              "term": "Cabin Configuration",
              "definition": "The physical seating arrangement inside an airliner, divided into Economy, Premium, Business, and First Class."
            },
            {
              "num": "18",
              "term": "Turnaround Efficiency",
              "definition": "The capability of an airline and ground crew to deplane, service, refuel, and reboard an aircraft in minimum gate time."
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
              "caption": "Focus: Contrast composite airframe design, range economics, fuel burn per seat, and route deployment between Airbus and Boeing."
            },
            {
              "title": "Video 2: How Budget Airlines Work: Fleet Commonality & Economics",
              "watchUrl": "https://www.youtube.com/watch?v=069y1MpOkQY",
              "tag": "Airline Economics",
              "videoId": "069y1MpOkQY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/069y1MpOkQY",
              "caption": "Focus: Discover why single-fleet commonality (A320/B737) and 25-minute turnarounds form the financial backbone of low-cost carriers."
            },
            {
              "title": "Video 3: The Airbus A321XLR Could Change Air Travel Forever",
              "watchUrl": "https://www.youtube.com/watch?v=NeRygjT-hGM",
              "tag": "Emerging Aircraft",
              "videoId": "NeRygjT-hGM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/NeRygjT-hGM",
              "caption": "Focus: Analyze how extra-long-range single-aisle airliners displace widebodies on thin transatlantic and secondary city routes."
            }
          ],
          "articles": [
            {
              "topic": "Commercial Fleet Trends",
              "sourceTag": "FlightGlobal",
              "heading": "The Rise of the Long-Range Narrowbody: How the A321XLR is Reshaping Aviation",
              "snippet": "Examine how single-aisle airliners are replacing widebodies on long-haul secondary routes across the Atlantic.",
              "url": "https://www.flightglobal.com",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Aerospace Competition",
              "sourceTag": "Aviation Week",
              "heading": "Airbus, Boeing, and the Global Duopoly: Supply Chain Realities and Emerging Rivals",
              "snippet": "An analysis of global order backlogs, titanium shortages, and COMAC's efforts to scale C919 production in Asia.",
              "url": "https://aviationweek.com",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://www.iata.org",
              "tag": "01 • Airline Statistics",
              "name": "IATA World Air Transport Statistics (WATS)",
              "desc": "Global airline passenger numbers, cargo traffic yields, and operating fleet benchmarks."
            },
            {
              "url": "https://www.flightglobal.com",
              "tag": "02 • Fleet Intelligence",
              "name": "FlightGlobal Commercial Fleets Directory",
              "desc": "Comprehensive commercial airliner order books, lease agreements, and retirement data."
            },
            {
              "url": "https://aircraft.airbus.com/en/market-forecast",
              "tag": "03 • Market Projections",
              "name": "Airbus Global Market Forecast (GMF 2024–2043)",
              "desc": "20-year demand outlook for passenger narrowbodies, widebodies, and freighter conversions."
            },
            {
              "url": "https://www.boeing.com/commercial/market/commercial-market-outlook",
              "tag": "04 • Industry Outlook",
              "name": "Boeing Commercial Market Outlook (CMO)",
              "desc": "Global economic projections, passenger traffic expansion rates, and fleet renewal patterns."
            },
            {
              "url": "https://airlineweekly.skift.com",
              "tag": "05 • Airline Analysis",
              "name": "Airline Weekly Global Airline Business News",
              "desc": "Weekly strategic analysis of airline balance sheets, network route expansions, and fuel costs."
            },
            {
              "url": "https://www.ch-aviation.com",
              "tag": "06 • Fleet Database",
              "name": "ch-aviation Aircraft & Fleet Database",
              "desc": "Real-time fleet tracker detailing aircraft age, engine variants, and operator distributions."
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
            "trap": "⚠️ TOEIC Part 5 Comparative Modifiers Alert: Never use 'very' or 'more' with comparative adjectives (incorrect: 'very cheaper'). Always use degree modifiers: 'significantly', 'considerably', 'substantially', or 'slightly' (correct: 'significantly cheaper').",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "Low-cost carriers achieve considerably higher daily aircraft utilization than legacy network carriers.",
              "The new turbofan variant delivers a 15% reduction in carbon emissions compared to its predecessor."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The newly ordered twin-engine widebodies are substantially ________ fuel-efficient than the quad-jet airliners they will replace.",
              "options": [
                {
                  "letter": "A",
                  "text": "much"
                },
                {
                  "letter": "B",
                  "text": "more"
                },
                {
                  "letter": "C",
                  "text": "most"
                },
                {
                  "letter": "D",
                  "text": "many"
                }
              ],
              "correctLetter": "B",
              "correctText": "more",
              "analysis": "The presence of the comparative connector 'than' requires the comparative degree 'more' with the multi-syllable adjective 'fuel-efficient'. 'Substantially' acts as an adverb of degree modifying 'more'.",
              "strategy": "Always scan ahead for 'than'. The marker 'than' always demands a comparative form (more, -er, less).",
              "id": 1
            },
            {
              "stem": "Airbus and Boeing dominate commercial airliner manufacturing, holding an effective global ________ in large passenger jet production.",
              "options": [
                {
                  "letter": "A",
                  "text": "autonomy"
                },
                {
                  "letter": "B",
                  "text": "monopoly"
                },
                {
                  "letter": "C",
                  "text": "duopoly"
                },
                {
                  "letter": "D",
                  "text": "subsidy"
                }
              ],
              "correctLetter": "C",
              "correctText": "duopoly",
              "analysis": "A market situation where two commercial entities dominate the supply of a commodity or aircraft type is legally and economically defined as a 'duopoly'.",
              "strategy": "Prefix clues: mono- (one supplier), duo- (two dominant suppliers), poly- (many). Airbus + Boeing = 2, hence duopoly.",
              "id": 2
            },
            {
              "stem": "By operating a single aircraft family across its entire network, the low-cost carrier achieved significant ________ in crew training and spare parts inventory.",
              "options": [
                {
                  "letter": "A",
                  "text": "economies of scale"
                },
                {
                  "letter": "B",
                  "text": "flight limitations"
                },
                {
                  "letter": "C",
                  "text": "cabin disruptions"
                },
                {
                  "letter": "D",
                  "text": "baggage delays"
                }
              ],
              "correctLetter": "A",
              "correctText": "economies of scale",
              "analysis": "'Economies of scale' is the precise financial collocation for cost savings and operational efficiencies gained through increased volume or fleet standardization.",
              "strategy": "High-yield business vocabulary: 'achieve economies of scale' is a staple TOEIC business strategy phrase.",
              "id": 3
            },
            {
              "stem": "The airline decided to retire its older aircraft earlier than planned because the escalating cost of maintenance was no longer ________.",
              "options": [
                {
                  "letter": "A",
                  "text": "justify"
                },
                {
                  "letter": "B",
                  "text": "justifiable"
                },
                {
                  "letter": "C",
                  "text": "justifiably"
                },
                {
                  "letter": "D",
                  "text": "justification"
                }
              ],
              "correctLetter": "B",
              "correctText": "justifiable",
              "analysis": "The linking verb 'was' accompanied by the adverbial phrase 'no longer' requires a predicate adjective ('justifiable') to describe the cost of maintenance.",
              "strategy": "After copular/linking verbs (be, become, remain, seem), select an adjective (ending in -able, -ive, -al) rather than a noun or adverb.",
              "id": 4
            },
            {
              "stem": "Regional turboprops remain the most economical solution for short routes ________ their low fuel burn at regional cruising altitudes.",
              "options": [
                {
                  "letter": "A",
                  "text": "although"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "because of"
                }
              ],
              "correctLetter": "D",
              "correctText": "because of",
              "analysis": "'Because of' is a compound preposition followed by a noun phrase ('their low fuel burn...') indicating the positive causal reason for their economical nature.",
              "strategy": "Cause vs. concession: 'their low fuel burn' is the reason for high economy (causal), so use 'because of', not concessive words like 'despite' or 'although'.",
              "id": 5
            }
          ],
          "pageUrl": "session3/admat_aas2.html"
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Significant Aviation Accidents & Aircraft Types Objectives",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved."
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model."
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines."
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes."
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the 15-minute group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check (10 mins)",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models."
            },
            {
              "time": "10-30",
              "title": "Part 2: Accident Investigation Terminology (20 mins)",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors."
            },
            {
              "time": "30-50",
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because)."
            },
            {
              "time": "50-65",
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes."
            },
            {
              "time": "65-110",
              "title": "Part 5: Spoken Group Presentations & Safety Debrief (45 mins)",
              "description": "Each team delivers a 5-minute presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep (10 mins)",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation."
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
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
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
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury."
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings."
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact."
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers."
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains (20 mins)",
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
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation."
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop."
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain."
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit."
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications."
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
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
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed."
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes."
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway."
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
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
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances."
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols."
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training."
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures."
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals."
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots."
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief (45 mins)",
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
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep (10 mins)",
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
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure."
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation."
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents."
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms."
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes."
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident."
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident."
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress."
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction."
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation."
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing."
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance."
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles."
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure."
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations."
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status."
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes."
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition."
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
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry."
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching."
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model."
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports."
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings."
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency."
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities."
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors."
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence."
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
            "trap": "⚠️ TOEIC Part 5 Narrative Tense Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The accident investigation bureau concluded that the aircraft ________ at cruise altitude for three hours before the electrical failure occurred.",
              "options": [
                {
                  "letter": "A",
                  "text": "is flying"
                },
                {
                  "letter": "B",
                  "text": "was flown"
                },
                {
                  "letter": "C",
                  "text": "had been flying"
                },
                {
                  "letter": "D",
                  "text": "has flown"
                }
              ],
              "correctLetter": "C",
              "correctText": "had been flying",
              "analysis": "The past perfect continuous ('had been flying') indicates an ongoing action that was in progress for a specified duration ('for three hours') before another definitive past event ('the failure occurred').",
              "strategy": "Duration markers ('for X hours') preceding a past event ('before + past simple') signal the Past Perfect Continuous (had been + -ing).",
              "id": 1
            },
            {
              "stem": "Civil aviation authorities issued an emergency Airworthiness Directive requiring mandatory ________ of all engine fuel-oil heat exchangers.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspections"
                },
                {
                  "letter": "B",
                  "text": "inspects"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspect"
                }
              ],
              "correctLetter": "A",
              "correctText": "inspections",
              "analysis": "The transitive participle 'requiring' followed by the adjective 'mandatory' requires a direct object noun. The plural noun 'inspections' completes the meaning.",
              "strategy": "After an adjective (mandatory, regulatory, annual, periodic), select the noun form (ending in -tion, -ment, -ance).",
              "id": 2
            },
            {
              "stem": "Investigators determined that the flight crew had lost situational awareness ________ extreme fatigue and high cognitive workload in severe weather.",
              "options": [
                {
                  "letter": "A",
                  "text": "because of"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "in spite"
                }
              ],
              "correctLetter": "A",
              "correctText": "because of",
              "analysis": "'Because of' correctly introduces the noun phrase cause ('extreme fatigue and high cognitive workload'). 'In spite' lacks 'of', and 'although' / 'whereas' introduce full clauses.",
              "strategy": "Identify cause vs. contrast: fatigue caused the loss of awareness (direct cause = because of).",
              "id": 3
            },
            {
              "stem": "The Flight Data Recorder provided accurate telemetry data that enabled engineers ________ the exact sequence of events leading to the incident.",
              "options": [
                {
                  "letter": "A",
                  "text": "reconstruct"
                },
                {
                  "letter": "B",
                  "text": "to reconstruct"
                },
                {
                  "letter": "C",
                  "text": "reconstructing"
                },
                {
                  "letter": "D",
                  "text": "reconstructed"
                }
              ],
              "correctLetter": "B",
              "correctText": "to reconstruct",
              "analysis": "The causative verb 'enable' follows the structural pattern 'enable + someone / something + to-infinitive' ('enabled engineers to reconstruct').",
              "strategy": "Causative & permissive verbs taking object + to-infinitive: enable, allow, require, permit, instruct, authorize.",
              "id": 4
            },
            {
              "stem": "Following the publication of the final report, airlines implemented enhanced crew training programs in order to ________ future communication errors.",
              "options": [
                {
                  "letter": "A",
                  "text": "preventing"
                },
                {
                  "letter": "B",
                  "text": "prevention"
                },
                {
                  "letter": "C",
                  "text": "prevent"
                },
                {
                  "letter": "D",
                  "text": "preventable"
                }
              ],
              "correctLetter": "C",
              "correctText": "prevent",
              "analysis": "The purpose clause connector 'in order to' is strictly followed by the base bare form of the verb ('in order to prevent').",
              "strategy": "In order to / so as to are purpose markers that must be followed by a bare infinitive (base verb form V1).",
              "id": 5
            }
          ],
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "5": {
        "session": 5,
        "objectives": {
          "title": "Session 5 - Significant Aviation Accidents & Aircraft Types Objectives",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved."
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model."
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines."
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes."
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the 15-minute group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check (10 mins)",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models."
            },
            {
              "time": "10-30",
              "title": "Part 2: Accident Investigation Terminology (20 mins)",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors."
            },
            {
              "time": "30-50",
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because)."
            },
            {
              "time": "50-65",
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes."
            },
            {
              "time": "65-110",
              "title": "Part 5: Spoken Group Presentations & Safety Debrief (45 mins)",
              "description": "Each team delivers a 5-minute presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep (10 mins)",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation."
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
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
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
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury."
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings."
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact."
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers."
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains (20 mins)",
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
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation."
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop."
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain."
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit."
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications."
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
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
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed."
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes."
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway."
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
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
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances."
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols."
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training."
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures."
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals."
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots."
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief (45 mins)",
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
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep (10 mins)",
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
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure."
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation."
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents."
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms."
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes."
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident."
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident."
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress."
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction."
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation."
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing."
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance."
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles."
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure."
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations."
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status."
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes."
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition."
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
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry."
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching."
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model."
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports."
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings."
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency."
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities."
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors."
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence."
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
            "trap": "⚠️ TOEIC Part 5 Narrative Tense Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The accident investigation bureau concluded that the aircraft ________ at cruise altitude for three hours before the electrical failure occurred.",
              "options": [
                {
                  "letter": "A",
                  "text": "is flying"
                },
                {
                  "letter": "B",
                  "text": "was flown"
                },
                {
                  "letter": "C",
                  "text": "had been flying"
                },
                {
                  "letter": "D",
                  "text": "has flown"
                }
              ],
              "correctLetter": "C",
              "correctText": "had been flying",
              "analysis": "The past perfect continuous ('had been flying') indicates an ongoing action that was in progress for a specified duration ('for three hours') before another definitive past event ('the failure occurred').",
              "strategy": "Duration markers ('for X hours') preceding a past event ('before + past simple') signal the Past Perfect Continuous (had been + -ing).",
              "id": 1
            },
            {
              "stem": "Civil aviation authorities issued an emergency Airworthiness Directive requiring mandatory ________ of all engine fuel-oil heat exchangers.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspections"
                },
                {
                  "letter": "B",
                  "text": "inspects"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspect"
                }
              ],
              "correctLetter": "A",
              "correctText": "inspections",
              "analysis": "The transitive participle 'requiring' followed by the adjective 'mandatory' requires a direct object noun. The plural noun 'inspections' completes the meaning.",
              "strategy": "After an adjective (mandatory, regulatory, annual, periodic), select the noun form (ending in -tion, -ment, -ance).",
              "id": 2
            },
            {
              "stem": "Investigators determined that the flight crew had lost situational awareness ________ extreme fatigue and high cognitive workload in severe weather.",
              "options": [
                {
                  "letter": "A",
                  "text": "because of"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "in spite"
                }
              ],
              "correctLetter": "A",
              "correctText": "because of",
              "analysis": "'Because of' correctly introduces the noun phrase cause ('extreme fatigue and high cognitive workload'). 'In spite' lacks 'of', and 'although' / 'whereas' introduce full clauses.",
              "strategy": "Identify cause vs. contrast: fatigue caused the loss of awareness (direct cause = because of).",
              "id": 3
            },
            {
              "stem": "The Flight Data Recorder provided accurate telemetry data that enabled engineers ________ the exact sequence of events leading to the incident.",
              "options": [
                {
                  "letter": "A",
                  "text": "reconstruct"
                },
                {
                  "letter": "B",
                  "text": "to reconstruct"
                },
                {
                  "letter": "C",
                  "text": "reconstructing"
                },
                {
                  "letter": "D",
                  "text": "reconstructed"
                }
              ],
              "correctLetter": "B",
              "correctText": "to reconstruct",
              "analysis": "The causative verb 'enable' follows the structural pattern 'enable + someone / something + to-infinitive' ('enabled engineers to reconstruct').",
              "strategy": "Causative & permissive verbs taking object + to-infinitive: enable, allow, require, permit, instruct, authorize.",
              "id": 4
            },
            {
              "stem": "Following the publication of the final report, airlines implemented enhanced crew training programs in order to ________ future communication errors.",
              "options": [
                {
                  "letter": "A",
                  "text": "preventing"
                },
                {
                  "letter": "B",
                  "text": "prevention"
                },
                {
                  "letter": "C",
                  "text": "prevent"
                },
                {
                  "letter": "D",
                  "text": "preventable"
                }
              ],
              "correctLetter": "C",
              "correctText": "prevent",
              "analysis": "The purpose clause connector 'in order to' is strictly followed by the base bare form of the verb ('in order to prevent').",
              "strategy": "In order to / so as to are purpose markers that must be followed by a bare infinitive (base verb form V1).",
              "id": 5
            }
          ],
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "6": {
        "session": 6,
        "objectives": {
          "title": "Session 6 - Significant Aviation Accidents & Aircraft Types Objectives",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved."
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model."
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines."
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes."
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the 15-minute group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check (10 mins)",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models."
            },
            {
              "time": "10-30",
              "title": "Part 2: Accident Investigation Terminology (20 mins)",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors."
            },
            {
              "time": "30-50",
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because)."
            },
            {
              "time": "50-65",
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes."
            },
            {
              "time": "65-110",
              "title": "Part 5: Spoken Group Presentations & Safety Debrief (45 mins)",
              "description": "Each team delivers a 5-minute presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep (10 mins)",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation."
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
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
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
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury."
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings."
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact."
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers."
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains (20 mins)",
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
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation."
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop."
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain."
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit."
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications."
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
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
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed."
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes."
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway."
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
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
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances."
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols."
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training."
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures."
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals."
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots."
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief (45 mins)",
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
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep (10 mins)",
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
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure."
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation."
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents."
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms."
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes."
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident."
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident."
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress."
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction."
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation."
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing."
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance."
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles."
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure."
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations."
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status."
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes."
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition."
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
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry."
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching."
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model."
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports."
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings."
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency."
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities."
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors."
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence."
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
            "trap": "⚠️ TOEIC Part 5 Narrative Tense Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The accident investigation bureau concluded that the aircraft ________ at cruise altitude for three hours before the electrical failure occurred.",
              "options": [
                {
                  "letter": "A",
                  "text": "is flying"
                },
                {
                  "letter": "B",
                  "text": "was flown"
                },
                {
                  "letter": "C",
                  "text": "had been flying"
                },
                {
                  "letter": "D",
                  "text": "has flown"
                }
              ],
              "correctLetter": "C",
              "correctText": "had been flying",
              "analysis": "The past perfect continuous ('had been flying') indicates an ongoing action that was in progress for a specified duration ('for three hours') before another definitive past event ('the failure occurred').",
              "strategy": "Duration markers ('for X hours') preceding a past event ('before + past simple') signal the Past Perfect Continuous (had been + -ing).",
              "id": 1
            },
            {
              "stem": "Civil aviation authorities issued an emergency Airworthiness Directive requiring mandatory ________ of all engine fuel-oil heat exchangers.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspections"
                },
                {
                  "letter": "B",
                  "text": "inspects"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspect"
                }
              ],
              "correctLetter": "A",
              "correctText": "inspections",
              "analysis": "The transitive participle 'requiring' followed by the adjective 'mandatory' requires a direct object noun. The plural noun 'inspections' completes the meaning.",
              "strategy": "After an adjective (mandatory, regulatory, annual, periodic), select the noun form (ending in -tion, -ment, -ance).",
              "id": 2
            },
            {
              "stem": "Investigators determined that the flight crew had lost situational awareness ________ extreme fatigue and high cognitive workload in severe weather.",
              "options": [
                {
                  "letter": "A",
                  "text": "because of"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "in spite"
                }
              ],
              "correctLetter": "A",
              "correctText": "because of",
              "analysis": "'Because of' correctly introduces the noun phrase cause ('extreme fatigue and high cognitive workload'). 'In spite' lacks 'of', and 'although' / 'whereas' introduce full clauses.",
              "strategy": "Identify cause vs. contrast: fatigue caused the loss of awareness (direct cause = because of).",
              "id": 3
            },
            {
              "stem": "The Flight Data Recorder provided accurate telemetry data that enabled engineers ________ the exact sequence of events leading to the incident.",
              "options": [
                {
                  "letter": "A",
                  "text": "reconstruct"
                },
                {
                  "letter": "B",
                  "text": "to reconstruct"
                },
                {
                  "letter": "C",
                  "text": "reconstructing"
                },
                {
                  "letter": "D",
                  "text": "reconstructed"
                }
              ],
              "correctLetter": "B",
              "correctText": "to reconstruct",
              "analysis": "The causative verb 'enable' follows the structural pattern 'enable + someone / something + to-infinitive' ('enabled engineers to reconstruct').",
              "strategy": "Causative & permissive verbs taking object + to-infinitive: enable, allow, require, permit, instruct, authorize.",
              "id": 4
            },
            {
              "stem": "Following the publication of the final report, airlines implemented enhanced crew training programs in order to ________ future communication errors.",
              "options": [
                {
                  "letter": "A",
                  "text": "preventing"
                },
                {
                  "letter": "B",
                  "text": "prevention"
                },
                {
                  "letter": "C",
                  "text": "prevent"
                },
                {
                  "letter": "D",
                  "text": "preventable"
                }
              ],
              "correctLetter": "C",
              "correctText": "prevent",
              "analysis": "The purpose clause connector 'in order to' is strictly followed by the base bare form of the verb ('in order to prevent').",
              "strategy": "In order to / so as to are purpose markers that must be followed by a bare infinitive (base verb form V1).",
              "id": 5
            }
          ],
          "pageUrl": "session4/admat_aas2.html"
        }
      },
      "7": {
        "session": 7,
        "objectives": {
          "title": "Session 7 - Significant Aviation Accidents & Aircraft Types Objectives",
          "summary": "By the end of this session, you will be able to analyze landmark aviation accidents and the aircraft types involved, use past narrative tenses and sequencing linkers, conduct a 15-minute quick-fire group research sprint, and deliver a collaborative 5-minute accident briefing to classmates.",
          "items": [
            {
              "num": 1,
              "title": "Examine Landmark Historical Aviation Accidents",
              "description": "Analyze major historical accidents (e.g., Tenerife 1977, BA 38, US Airways 1549, AF 447, Aloha 243, 737 MAX) and identify the specific aircraft types involved."
            },
            {
              "num": 2,
              "title": "Master Accident Investigation Vocabulary & Causal Analysis",
              "description": "Deploy technical terms including Flight Data Recorder (FDR), Cockpit Voice Recorder (CVR), root causes, human factors, and Swiss Cheese model."
            },
            {
              "num": 3,
              "title": "Deploy Past Narrative Tenses & Chronological Sequencers",
              "description": "Accurately combine past simple, past continuous, and past perfect tenses to describe flight incident sequences and timelines."
            },
            {
              "num": 4,
              "title": "Execute a 15-Minute Group Research & Preparation Sprint",
              "description": "Collaborate in small groups (3-4 students) within a strict 15-minute timeframe to extract technical causes, timelines, and safety outcomes."
            },
            {
              "num": 5,
              "title": "Deliver a 5-Minute Spoken Safety Briefing & Peer Q&A",
              "description": "Present the accident analysis collaboratively to classmates without reading word-for-word from notes, answering spontaneous questions."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan (2 Hours)",
          "summary": "A 2-hour interactive workshop covering aviation safety news, crash investigation vocabulary, past tenses clinic, the 15-minute group research sprint, 5-minute class accident presentations, and FE2 briefing.",
          "items": [
            {
              "time": "00-10",
              "title": "Part 1: Aviation News & Session 3 Fleet Spot-Check (10 mins)",
              "description": "Weekly aviation news review and rapid spot-check on commercial aircraft categories and airline operating models."
            },
            {
              "time": "10-30",
              "title": "Part 2: Accident Investigation Terminology (20 mins)",
              "description": "Key vocabulary of air crash investigation: CVR/FDR black boxes, BEA/NTSB roles, CFIT, mechanical failure vs. human factors."
            },
            {
              "time": "30-50",
              "title": "Part 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
              "description": "Grammar focus: past simple, past continuous, and past perfect for accident chronology (had leveled off when, was descending because)."
            },
            {
              "time": "50-65",
              "title": "Part 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
              "description": "Small teams (3-4 students) select an accident case study, extract the timeline, aircraft specifications, root causes, and safety fixes."
            },
            {
              "time": "65-110",
              "title": "Part 5: Spoken Group Presentations & Safety Debrief (45 mins)",
              "description": "Each team delivers a 5-minute presentation to the class using whiteboard / screen bullet supports, followed by peer Q&A."
            },
            {
              "time": "110-120",
              "title": "Part 6: Vocabulary Review, Pronunciation & FE2 Prep (10 mins)",
              "description": "Pronunciation drill (in-ves-ti-GA-tion, mal-func-tion, pre-ci-pi-ta-tion, fa-tigue) and guidelines for the Session 5 Formative Evaluation."
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
            "title": "Activity 1: Aviation News & Session 3 Spot-Check (10 mins)",
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
                  "answer": "An accident involves serious injury, loss of life, or substantial structural damage affecting airworthiness. An incident affects or could affect flight safety, but without catastrophic damage or serious injury."
                },
                {
                  "id": 2,
                  "q": "What are the two components of the aircraft 'black box', and what does each record?",
                  "answer": "The Cockpit Voice Recorder (CVR) records cockpit sounds, pilot communications, and warnings. The Flight Data Recorder (FDR) records flight parameters like altitude, airspeed, heading, control positions, and engine settings."
                },
                {
                  "id": 3,
                  "q": "What is Controlled Flight Into Terrain (CFIT)?",
                  "answer": "CFIT occurs when an airworthy aircraft under the control of the flight crew is unintentionally flown into terrain, obstacles, or water without the crew realizing the impending impact."
                },
                {
                  "id": 4,
                  "q": "Explain the 'Swiss Cheese' safety model in accident investigation.",
                  "answer": "Aviation accidents rarely result from a single failure; they occur when latent organizational weaknesses and active errors line up through holes in multiple protective defensive layers."
                }
              ]
            }
          },
          "investigationLexis": {
            "title": "Activity 2: Accident Investigation Terminology & Causal Chains (20 mins)",
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
                "role": "Records hundreds of digital flight parameters (airspeed, control deflections, engine parameters) for crash investigation."
              },
              {
                "term": "Cockpit Voice Recorder (CVR)",
                "role": "Captures cockpit audio, pilot communications, and acoustic warnings on an endless recording loop."
              },
              {
                "term": "Root Cause vs. Contributing Factor",
                "role": "Root cause is the core failure without which the event would not have occurred; contributing factors heighten risk or accelerate the chain."
              },
              {
                "term": "Human Factors & Crew Resource Management (CRM)",
                "role": "Addressing human error, stress, cognitive overload, communication breakdown, and hierarchical authority gradient in the cockpit."
              },
              {
                "term": "Airworthiness Directive (AD)",
                "role": "A legally binding safety regulation issued by aviation authorities (FAA, EASA) mandating structural or systems modifications."
              }
            ]
          },
          "pastNarrativesClinic": {
            "title": "Activity 3: Language Focus: Narrative Past Tenses & Sequencers (20 mins)",
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
                "example": "The aircraft was cruising at FL350 in calm air when the airspeed indicators suddenly disagreed."
              },
              {
                "tense": "Past Perfect (Prior Action Completed Earlier)",
                "formula": "had + [past participle]",
                "example": "The crew had disconnected the autopilot because ice crystals had accumulated inside the pitot probes."
              },
              {
                "tense": "Past Simple (Sequential Events)",
                "formula": "[past verb] + then / subsequently",
                "example": "The captain reduced pitch, applied rudder, and subsequently regained visual contact with the runway."
              }
            ]
          },
          "groupResearchSprint": {
            "title": "Activity 4: 15-Minute Group Research & Preparation Sprint (15 mins)",
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
                "safetyOutcome": "Complete overhaul of international ATC phraseology; birth of Crew Resource Management (CRM); mandatory readbacks of all runway clearances."
              },
              {
                "id": 2,
                "title": "Air France Flight 447 (2009)",
                "aircraft": "Airbus A330-200",
                "context": "En route from Rio to Paris across the ITCZ. Supercooled water ice crystals blocked all three pitot tubes, causing autopilot disconnect and unreliable airspeed. Crew pitched up, entering an unrecognized aerodynamic stall.",
                "safetyOutcome": "Redesigned Thales pitot probes; mandatory high-altitude stall recovery training; enhanced angle of attack awareness protocols."
              },
              {
                "id": 3,
                "title": "US Airways Flight 1549 'Miracle on the Hudson' (2009)",
                "aircraft": "Airbus A320-200",
                "context": "Shortly after departure from LaGuardia at 2,800 ft, aircraft strikes a flock of Canada geese, causing complete dual engine failure. Pilots assess landing options and execute successful ditching in Hudson River.",
                "safetyOutcome": "Wildlife management programs at airports; revised dual engine failure checklists; improved pilot water survival training."
              },
              {
                "id": 4,
                "title": "British Airways Flight 38 (2008)",
                "aircraft": "Boeing 777-200ER",
                "context": "On short final into London Heathrow after transpolar flight from Beijing. Uncommanded dual engine thrust rollback at 700 ft due to ice crystals clogging fuel-oil heat exchangers (FOHE).",
                "safetyOutcome": "Redesigned Rolls-Royce Trent 800 fuel-oil heat exchangers preventing internal ice accretion; updated cold weather fuel management procedures."
              },
              {
                "id": 5,
                "title": "Aloha Airlines Flight 243 (1988)",
                "aircraft": "Boeing 737-200",
                "context": "High-cycle inter-island flight in Hawaii at FL240. Severe multi-site fatigue cracking and corrosion caused an explosive decompression, tearing off 5.5 meters of upper cabin fuselage.",
                "safetyOutcome": "Mandatory aging aircraft inspection programs; strict lap-joint fatigue crack testing; revised cyclic pressurization inspection intervals."
              },
              {
                "id": 6,
                "title": "Boeing 737 MAX Accidents (Lion Air 610 / Ethiopian 302, 2018-2019)",
                "aircraft": "Boeing 737 MAX 8",
                "context": "Single angle-of-attack (AoA) sensor failure triggered repeated, uncommanded MCAS nose-down trim activation that overwhelmed flight crews unfamiliar with the system.",
                "safetyOutcome": "Complete MCAS redesign requiring dual AoA sensor agreement; uncommanded trim override limits; mandatory simulator training for all MAX pilots."
              }
            ]
          },
          "presentationsDebrief": {
            "title": "Activity 5: Spoken Group Presentations & Class Debrief (45 mins)",
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
            "title": "Activity 6: Vocabulary Review & Formative Evaluation 2 Prep (10 mins)",
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
              "definition": "An occurrence associated with the operation of an aircraft causing serious injury, death, or major structural failure."
            },
            {
              "num": "02",
              "term": "Incident",
              "definition": "An occurrence, other than an accident, associated with aircraft operation that affects or could affect the safety of operation."
            },
            {
              "num": "03",
              "term": "Flight Data Recorder (FDR)",
              "definition": "A flight recorder device that records operating parameters (altitude, airspeed, heading, control positions) to reconstruct accidents."
            },
            {
              "num": "04",
              "term": "Cockpit Voice Recorder (CVR)",
              "definition": "A flight recorder device that records audio inside the cockpit, including pilot voices, radio communications, and alarms."
            },
            {
              "num": "05",
              "term": "Investigation Bureau",
              "definition": "An independent national safety authority (e.g. BEA in France, NTSB in the US) tasked with determining accident causes."
            },
            {
              "num": "06",
              "term": "Root Cause",
              "definition": "The fundamental underlying failure or condition that directly initiated the sequence resulting in the accident."
            },
            {
              "num": "07",
              "term": "Contributing Factor",
              "definition": "An environmental, mechanical, or human factor that increased the likelihood or severity of an accident."
            },
            {
              "num": "08",
              "term": "Metal Fatigue",
              "definition": "Progressive structural damage and cracking that occurs when metal airframe components are subjected to repeated cyclic stress."
            },
            {
              "num": "09",
              "term": "Decompression",
              "definition": "The loss of internal cabin pressure in an aircraft due to structural failure, door seal rupture, or system malfunction."
            },
            {
              "num": "10",
              "term": "Engine Failure",
              "definition": "The unexpected shutdown, flameout, or mechanical destruction of an aircraft engine during operation."
            },
            {
              "num": "11",
              "term": "Bird Strike",
              "definition": "A collision between an airborne animal (bird or bat) and an aircraft in flight or during takeoff/landing."
            },
            {
              "num": "12",
              "term": "Icing",
              "definition": "The accumulation of atmospheric ice on wings, control surfaces, or pitot probes, severely degrading aerodynamic performance."
            },
            {
              "num": "13",
              "term": "Controlled Flight Into Terrain (CFIT)",
              "definition": "An accident in which an airworthy aircraft under crew control is inadvertently flown into ground, water, or obstacles."
            },
            {
              "num": "14",
              "term": "Loss of Control In-Flight (LOC-I)",
              "definition": "A severe deviation from the intended flight path caused by aerodynamic stall, spatial disorientation, or systems failure."
            },
            {
              "num": "15",
              "term": "Human Factors",
              "definition": "The study of human capabilities, cognitive limitations, communication, and ergonomics in aviation operations."
            },
            {
              "num": "16",
              "term": "Situational Awareness",
              "definition": "An accurate mental perception of the aircraft position, flight condition, environmental threats, and systems status."
            },
            {
              "num": "17",
              "term": "Safety Recommendation",
              "definition": "A formal proposal by an accident investigation board recommending mandatory regulatory, operational, or design changes."
            },
            {
              "num": "18",
              "term": "Airworthiness Directive (AD)",
              "definition": "A legally enforceable regulation issued by a civil aviation authority mandating inspections or modifications to resolve an unsafe condition."
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
              "caption": "Focus: Understand how underwater locator beacons, Flight Data Recorders, and Cockpit Voice Recorders withstand impacts to preserve telemetry."
            },
            {
              "title": "Video 2: NTSB Animation Flight 1549 Hudson River Landing US Airways",
              "watchUrl": "https://www.youtube.com/watch?v=pWpSAfF6elI",
              "tag": "Accident Reconstruction",
              "videoId": "pWpSAfF6elI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/pWpSAfF6elI",
              "caption": "Focus: Analyze the official NTSB synchronized FDR data, ATC radar track, and radio transcripts during the dual-engine goose ingestion ditching."
            },
            {
              "title": "Video 3: Boeing 737 MAX and Swiss Cheese: Systemic Accident Causation",
              "watchUrl": "https://www.youtube.com/watch?v=ol0L9quUq_Y",
              "tag": "Human Factors",
              "videoId": "ol0L9quUq_Y",
              "embedUrl": "https://www.youtube-nocookie.com/embed/ol0L9quUq_Y",
              "caption": "Focus: Explore how latent engineering vulnerabilities, regulatory delegation, and flight crew alerting lined up in the Swiss Cheese model."
            }
          ],
          "articles": [
            {
              "topic": "Aviation Safety Evolution",
              "sourceTag": "Flight Safety Foundation",
              "heading": "From Tragedy to Technology: How Historical Accidents Made Modern Flying the Safest Transit Mode",
              "snippet": "An examination of how Crew Resource Management (CRM), TCAS collision avoidance, and GPWS terrain warnings originated from accident investigations.",
              "url": "https://flightsafety.org",
              "readTime": "Estimated read: 4-5 mins"
            },
            {
              "topic": "Accident Investigation",
              "sourceTag": "BEA France",
              "heading": "The Role of Independent Technical Investigation in Preventing Future Accidents",
              "snippet": "How aviation accident investigators determine facts without seeking blame or liability, focusing strictly on permanent safety recommendations.",
              "url": "https://www.bea.aero",
              "readTime": "Estimated read: 5-6 mins"
            }
          ],
          "resources": [
            {
              "url": "https://bea.aero/en",
              "tag": "01 • Official Reports",
              "name": "BEA (Bureau d'Enquêtes et d'Analyses)",
              "desc": "French civil aviation safety authority publishing authoritative final accident investigation reports."
            },
            {
              "url": "https://www.ntsb.gov/investigations/accidentreports/pages/aviation.aspx",
              "tag": "02 • Investigation Database",
              "name": "NTSB Aviation Accident Investigation Database",
              "desc": "US National Transportation Safety Board database with factual dockets and probable cause findings."
            },
            {
              "url": "https://www.icao.int/safety/air-navigation/Pages/aig.aspx",
              "tag": "03 • International Standards",
              "name": "ICAO Annex 13: Aircraft Accident Investigation",
              "desc": "Standardized international treaty protocols governing investigator rights and report transparency."
            },
            {
              "url": "https://aviation-safety.net",
              "tag": "04 • Safety Knowledgebase",
              "name": "Aviation Safety Network (ASN) Database",
              "desc": "Global historical flight occurrence archive tracking hull losses, airframe types, and fatalities."
            },
            {
              "url": "https://www.skybrary.aero/articles/accident-and-incident-investigation",
              "tag": "05 • Safety Research",
              "name": "Skybrary: Aviation Accident Investigation Toolkit",
              "desc": "In-depth tutorials on black box data extraction, metallurgical analysis, and human factors."
            },
            {
              "url": "https://www.eurocontrol.int/safety",
              "tag": "06 • European Safety",
              "name": "EUROCONTROL Safety Improvement Initiatives",
              "desc": "European air navigation safety briefings on runway incursions, level busts, and wake turbulence."
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
            "trap": "⚠️ TOEIC Part 5 Narrative Tense Alert: When two actions happened in the past, the earlier event MUST use the Past Perfect ('had + verb3'), not the Past Simple (<em>'The crew realized that the controller had assigned them the wrong heading'</em>).",
            "examplesTitle": "Authentic Operational Examples",
            "examples": [
              "While the aircraft was descending on approach, the ground proximity warning system alerted the crew to rising terrain.",
              "The BEA safety board determined that sensor discrepancy had triggered inappropriate flight control law degradation."
            ]
          },
          "toeicQuestions": [
            {
              "stem": "The accident investigation bureau concluded that the aircraft ________ at cruise altitude for three hours before the electrical failure occurred.",
              "options": [
                {
                  "letter": "A",
                  "text": "is flying"
                },
                {
                  "letter": "B",
                  "text": "was flown"
                },
                {
                  "letter": "C",
                  "text": "had been flying"
                },
                {
                  "letter": "D",
                  "text": "has flown"
                }
              ],
              "correctLetter": "C",
              "correctText": "had been flying",
              "analysis": "The past perfect continuous ('had been flying') indicates an ongoing action that was in progress for a specified duration ('for three hours') before another definitive past event ('the failure occurred').",
              "strategy": "Duration markers ('for X hours') preceding a past event ('before + past simple') signal the Past Perfect Continuous (had been + -ing).",
              "id": 1
            },
            {
              "stem": "Civil aviation authorities issued an emergency Airworthiness Directive requiring mandatory ________ of all engine fuel-oil heat exchangers.",
              "options": [
                {
                  "letter": "A",
                  "text": "inspections"
                },
                {
                  "letter": "B",
                  "text": "inspects"
                },
                {
                  "letter": "C",
                  "text": "inspected"
                },
                {
                  "letter": "D",
                  "text": "inspect"
                }
              ],
              "correctLetter": "A",
              "correctText": "inspections",
              "analysis": "The transitive participle 'requiring' followed by the adjective 'mandatory' requires a direct object noun. The plural noun 'inspections' completes the meaning.",
              "strategy": "After an adjective (mandatory, regulatory, annual, periodic), select the noun form (ending in -tion, -ment, -ance).",
              "id": 2
            },
            {
              "stem": "Investigators determined that the flight crew had lost situational awareness ________ extreme fatigue and high cognitive workload in severe weather.",
              "options": [
                {
                  "letter": "A",
                  "text": "because of"
                },
                {
                  "letter": "B",
                  "text": "although"
                },
                {
                  "letter": "C",
                  "text": "whereas"
                },
                {
                  "letter": "D",
                  "text": "in spite"
                }
              ],
              "correctLetter": "A",
              "correctText": "because of",
              "analysis": "'Because of' correctly introduces the noun phrase cause ('extreme fatigue and high cognitive workload'). 'In spite' lacks 'of', and 'although' / 'whereas' introduce full clauses.",
              "strategy": "Identify cause vs. contrast: fatigue caused the loss of awareness (direct cause = because of).",
              "id": 3
            },
            {
              "stem": "The Flight Data Recorder provided accurate telemetry data that enabled engineers ________ the exact sequence of events leading to the incident.",
              "options": [
                {
                  "letter": "A",
                  "text": "reconstruct"
                },
                {
                  "letter": "B",
                  "text": "to reconstruct"
                },
                {
                  "letter": "C",
                  "text": "reconstructing"
                },
                {
                  "letter": "D",
                  "text": "reconstructed"
                }
              ],
              "correctLetter": "B",
              "correctText": "to reconstruct",
              "analysis": "The causative verb 'enable' follows the structural pattern 'enable + someone / something + to-infinitive' ('enabled engineers to reconstruct').",
              "strategy": "Causative & permissive verbs taking object + to-infinitive: enable, allow, require, permit, instruct, authorize.",
              "id": 4
            },
            {
              "stem": "Following the publication of the final report, airlines implemented enhanced crew training programs in order to ________ future communication errors.",
              "options": [
                {
                  "letter": "A",
                  "text": "preventing"
                },
                {
                  "letter": "B",
                  "text": "prevention"
                },
                {
                  "letter": "C",
                  "text": "prevent"
                },
                {
                  "letter": "D",
                  "text": "preventable"
                }
              ],
              "correctLetter": "C",
              "correctText": "prevent",
              "analysis": "The purpose clause connector 'in order to' is strictly followed by the base bare form of the verb ('in order to prevent').",
              "strategy": "In order to / so as to are purpose markers that must be followed by a bare infinitive (base verb form V1).",
              "id": 5
            }
          ],
          "pageUrl": "session4/admat_aas2.html"
        }
      }
    }
  },
  "3": {
    "id": 3,
    "name": "Module 3",
    "title": "Health, Meteorology, Safety & Security",
    "ddrs": {
      "title": "Développement Durable & Responsabilité Sociétale : Santé, Climat & Sécurité Aéronautique",
      "summary": "Le Référentiel National DD&RS appliqué au transport aérien structure la santé au travail des personnels navigants et contrôleurs, l'adaptation opérationnelle aux aléas météorologiques extrêmes, la culture juste de sécurité et la gouvernance éthique des technologies de sûreté.",
      "pageUrl": "ddrs3.html",
      "axes": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Gouvernance, Culture Juste & Sécurité (Safety Culture)",
          "desc": "Mise en œuvre d'une culture juste (Just Culture) non-punitive encourageant le signalement volontaire des incidents médicaux, de fatigue ou de sécurité technique pour prévenir les accidents systémiques."
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Formation, Facteurs Humains & Santé Aéromédicale",
          "desc": "Formation continue des équipages et contrôleurs aériens à la gestion du sommeil, aux limitations de temps de vol (FTL), à la santé mentale et à la prise en charge des urgences médicales en vol."
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Recherche & Prévision Météorologique Avancée",
          "desc": "Développement de capteurs de détection précoce du cisaillement de vent (LLWS), prévision numérique des turbulences en air clair (CAT) et modélisation de la dispersion des cendres volcaniques."
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Résilience Climatique des Plateformes Aéroportuaires",
          "desc": "Adaptation des infrastructures aéroportuaires aux vagues de chaleur extrême (dégradation des performances de décollage), aux épisodes d'inondations et aux tempêtes hivernales sévères."
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Éthique, Protection des Données & Sûreté Non-Intrusive",
          "desc": "Garantie des libertés fondamentales et respect du RGPD dans le déploiement des scanners corporels à ondes millimétriques, des portiques biométriques et de la détection comportementale en aéroport."
        }
      ],
      "items": [
        {
          "badge": "Axe 1",
          "num": "1.",
          "title": "Culture Juste & Signalement Volontaire (Just Culture)",
          "desc": "Principe fondamental selon lequel les personnels de première ligne ne sont pas sanctionnés pour des erreurs ou des aveux spontanés de fatigue, garantissant une remontée transparente des risques.",
          "isMuted": false
        },
        {
          "badge": "Axe 2",
          "num": "2.",
          "title": "Santé Mentale & Prévention du Burnout en Milieu Aéronautique",
          "desc": "Protocoles d'assistance psychologique par les pairs (Peer Support Programs) et surveillance du stress professionnel chez les pilotes de ligne et les contrôleurs aériens (ATCOs).",
          "isMuted": false
        },
        {
          "badge": "Axe 3",
          "num": "3.",
          "title": "Systèmes de Gestion des Risques liés à la Fatigue (FRMS)",
          "desc": "Modélisation scientifique du rythme circadien, gestion du manque de sommeil accumulé et respect rigoureux des Flight Time Limitations (FTL) certifiées par l'EASA.",
          "isMuted": false
        },
        {
          "badge": "Axe 4",
          "num": "4.",
          "title": "Adaptation Opérationnelle aux Turbulences en Air Clair (CAT)",
          "desc": "Partage en temps réel des données d'accélérométrie des aéronefs pour cartographier les ondes orographiques et minimiser les blessures des passagers en cabine.",
          "isMuted": false
        },
        {
          "badge": "Axe 5",
          "num": "5.",
          "title": "Protection de la Vie Privée & Sûreté Aéroportuaire",
          "desc": "Encadrement juridique strict de l'utilisation des algorithmes de reconnaissance faciale aux frontières et anonymisation des images de détection corporelle.",
          "isMuted": false
        }
      ]
    },
    "sessions": {
      "1": {
        "session": 1,
        "objectives": {
          "title": "Session 1 - Health & Human Factors in Aviation Objectives",
          "summary": "By the end of this session, you will be able to recognize and report in-flight medical emergencies, analyze pilot and controller fatigue using scientific human factors frameworks, apply the IMSAFE self-assessment model, execute a medical diversion decision protocol, and pronounce aeromedical vocabulary with accurate syllable stress.",
          "items": [
            {
              "num": 1,
              "title": "Identify & Classify In-Flight Medical Conditions (Clinical & Operational Vocabulary)",
              "description": "Distinguish between urgent conditions (cardiac arrest, stroke, anaphylaxis) and common inflight distress (panic attacks, hyperventilation, claustrophobia, airsickness) using professional Technical English."
            },
            {
              "num": 2,
              "title": "Analyze Crew & Controller Fatigue (Human Factors & Circadian Physics)",
              "description": "Explain the physiological mechanisms of sleep debt, the Window of Circadian Low (WOCL), and evaluate Flight Time Limitations (FTL) and ATCO break cycles under EASA/FAA regulations."
            },
            {
              "num": 3,
              "title": "Apply the IMSAFE Aeromedical Fitness Checklist",
              "description": "Systematically assess fitness to fly using the 6 IMSAFE criteria: Illness, Medication, Stress, Alcohol, Fatigue, and Emotion/Eating."
            },
            {
              "num": 4,
              "title": "Execute In-Flight Medical Diversion Decision-Making",
              "description": "Collaborate in flight crew roles to evaluate hospital proximity, runway length, weather minimums, and fuel jettison requirements when declaring PAN-PAN MEDICO vs. MAYDAY."
            },
            {
              "num": 5,
              "title": "Evaluate Spatial Disorientation & Altitude Physics",
              "description": "Describe vestibular illusions (the leans, somatogravic illusion), hypoxia onset symptoms, and rapid emergency descent procedures from FL370."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 1 Lesson Plan: Health & Human Factors (2 Hours)",
          "summary": "A 120-minute operational syllabus combining warm-up aeromedical checks, condition triage vocabulary, fatigue regulations clinic, airborne medical diversion simulation, and pronunciation consolidation.",
          "items": [
            {
              "time": "00-10",
              "title": "Activity 1: Aviation Health News & Quick Check (10 mins)",
              "description": "Plenary warm-up discussing recent medical diversions and completing a 5-question baseline aeromedical diagnostic."
            },
            {
              "time": "10-30",
              "title": "Activity 2: In-Flight Medical Emergencies & Triage Vocabulary (20 mins)",
              "description": "Paired classification of 18 medical conditions, cabin emergency medical kits (EMK), and ground telemedicine (MedLink) procedures."
            },
            {
              "time": "30-50",
              "title": "Activity 3: Language Focus: Crew & Controller Fatigue, Circadian Rhythms & FTL (20 mins)",
              "description": "Analysis of circadian disruptions, sleep debt, EASA Flight Time Limitations, and applying the IMSAFE fitness model."
            },
            {
              "time": "50-85",
              "title": "Activity 4: Airborne Medical Diversion Simulation & Decision Guide (35 mins)",
              "description": "Small-group simulation evaluating 3 critical airborne medical emergency scenarios requiring operational diversion and ATC priority."
            },
            {
              "time": "85-110",
              "title": "Activity 5: Aeromedical Physics: Spatial Disorientation, Hypoxia & Emergency Descent (25 mins)",
              "description": "Plenary debrief on vestibular illusions, rapid decompression protocols, and Time of Useful Consciousness (TUC)."
            },
            {
              "time": "110-120",
              "title": "Activity 6: Medical & Human Factors Consolidation & Syllable Stress (10 mins)",
              "description": "Pronunciation drills on medical terminology, checkpoints audit, and flashcard revision."
            }
          ]
        },
        "revision": {
          "title": "Session 1 Technical Vocabulary & Flashcards",
          "summary": "Master the 18 essential technical terms and phraseology for aeromedical emergencies, crew fitness, and human factors.",
          "terms": [
            {
              "num": "01",
              "term": "cardiac arrest",
              "phonetic": "/ˌkɑːr.di.æk əˈrest/",
              "pos": "noun phrase",
              "definition": "The sudden, abrupt cessation of normal heart pump function, requiring immediate CPR and defibrillation.",
              "example": "When a passenger suffered cardiac arrest at FL350, cabin crew deployed the onboard AED within ninety seconds."
            },
            {
              "num": "02",
              "term": "automated external defibrillator (AED)",
              "phonetic": "/ˌɔː.tə.meɪ.tɪd ɪkˈstɜːr.nəl dɪˈfɪb.rə.leɪ.tər/",
              "pos": "noun phrase",
              "definition": "A portable electronic device that automatically diagnoses life-threatening cardiac arrhythmias and delivers therapeutic electrical shocks.",
              "example": "EASA regulations require every commercial passenger aircraft with more than thirty seats to carry at least one certified AED."
            },
            {
              "num": "03",
              "term": "hyperventilation",
              "phonetic": "/ˌhaɪ.pərˌven.tɪˈleɪ.ʃən/",
              "pos": "noun",
              "definition": "Abnormally rapid and deep breathing often triggered by acute panic, leading to excessive carbon dioxide loss and muscle spasms.",
              "example": "Flight attendants guided the hyperventilating passenger through slow diaphragmatic breathing into a paper sickness bag."
            },
            {
              "num": "04",
              "term": "claustrophobia",
              "phonetic": "/ˌklɒs.trəˈfəʊ.bi.ə/",
              "pos": "noun",
              "definition": "An irrational or acute fear of being trapped in enclosed spaces, commonly triggered during cabin boarding or prolonged taxi delays.",
              "example": "Severe claustrophobia caused a passenger to demand immediate gate return while the aircraft was holding at the runway threshold."
            },
            {
              "num": "05",
              "term": "panic attack",
              "phonetic": "/ˈpæn.ɪk əˌtæk/",
              "pos": "noun phrase",
              "definition": "A sudden episode of overwhelming fear, palpitations, trembling, and shortness of breath without objective physical danger.",
              "example": "Cabin crew relocated the passenger experiencing a panic attack to an empty row near the forward galley."
            },
            {
              "num": "06",
              "term": "airsickness",
              "phonetic": "/ˈeəˌsɪk.nəs/",
              "pos": "noun",
              "definition": "Motion sickness caused by vestibular sensory conflict between inner ear fluid motion and visual reference during turbulent flight.",
              "example": "Persistent moderate clear air turbulence resulted in multiple passengers requesting airsickness bags and cold compresses."
            },
            {
              "num": "07",
              "term": "hypoxia",
              "phonetic": "/haɪˈpɒk.si.ə/",
              "pos": "noun",
              "definition": "A dangerous physiological deficiency in the amount of oxygen reaching bodily tissues, characterized by euphoria, confusion, and cyanosis.",
              "example": "At FL390, a gradual slow cabin depressurization can induce insidious hypoxia before pilots notice physiological degradation."
            },
            {
              "num": "08",
              "term": "deep vein thrombosis (DVT)",
              "phonetic": "/diːp veɪn θrɒmˈbəʊ.sɪs/",
              "pos": "noun phrase",
              "definition": "The formation of a blood clot in deep leg veins caused by prolonged physical immobility, low humidity, and cabin pressure.",
              "example": "Long-haul passenger health brochures encourage in-seat calf flexing exercises to minimize the risk of deep vein thrombosis."
            },
            {
              "num": "09",
              "term": "syncope",
              "phonetic": "/ˈsɪŋ.kə.pi/",
              "pos": "noun",
              "definition": "A temporary loss of consciousness caused by a transient fall in blood pressure to the brain (fainting).",
              "example": "Standing up abruptly after a nine-hour transoceanic flight led to vasovagal syncope in the aircraft aisle."
            },
            {
              "num": "10",
              "term": "emergency medical kit (EMK)",
              "phonetic": "/ɪˈmɜː.dʒən.si ˈmed.ɪ.kəl kɪt/",
              "pos": "noun phrase",
              "definition": "A sealed, comprehensive diagnostic and pharmaceutical kit reserved strictly for use by qualified medical professionals on board.",
              "example": "The physician volunteer broke the tamper seal of the emergency medical kit to administer intravenous epinephrine."
            },
            {
              "num": "11",
              "term": "first aid kit (FAK)",
              "phonetic": "/fɜːst eɪd kɪt/",
              "pos": "noun phrase",
              "definition": "A standard onboard medical kit accessible to cabin crew for treating minor lacerations, burns, and localized trauma.",
              "example": "Cabin crew retrieved sterile dressings from the forward first aid kit to bandage a minor galley laceration."
            },
            {
              "num": "12",
              "term": "telemedicine",
              "phonetic": "/ˌtel.ɪˈmed.ɪ.sɪn/",
              "pos": "noun",
              "definition": "Real-time communication between flight crew and specialized ground emergency physicians via satellite voice and telemetry links.",
              "example": "The Captain contacted MedLink via satellite phone to obtain clinical guidance on whether an immediate diversion was warranted."
            },
            {
              "num": "13",
              "term": "Good Samaritan clause",
              "phonetic": "/ɡʊd səˈmær.ɪ.tən klɔːz/",
              "pos": "noun phrase",
              "definition": "A legal provision exempting medical practitioners from civil liability when voluntarily rendering emergency aid in good faith.",
              "example": "A travelling cardiologist stepped forward under the airline's Good Samaritan clause to assist the collapsed passenger."
            },
            {
              "num": "14",
              "term": "PAN-PAN MEDICO",
              "phonetic": "/pæn pæn ˈmed.ɪ.kəʊ/",
              "pos": "phrase",
              "definition": "An international radio urgency call transmitted to Air Traffic Control indicating a serious medical condition requiring priority routing.",
              "example": "The crew declared PAN-PAN MEDICO to request straight-in approach vectors and an ambulance standside upon landing."
            },
            {
              "num": "15",
              "term": "circadian rhythm",
              "phonetic": "/sɜːˈkeɪ.di.ən ˈrɪð.əm/",
              "pos": "noun phrase",
              "definition": "The biological 24-hour internal clock regulating sleep-wake cycles, body temperature, and cognitive alertness in humans.",
              "example": "Crossing eight time zones severely disrupted the pilots' circadian rhythm, requiring monitored recovery layovers."
            },
            {
              "num": "16",
              "term": "Flight Time Limitations (FTL)",
              "phonetic": "/flaɪt taɪm ˌlɪm.ɪˈteɪ.ʃənz/",
              "pos": "noun phrase",
              "definition": "Mandatory aviation authority regulations governing maximum flight duty periods and minimum rest rest periods to prevent pilot fatigue.",
              "example": "Because of weather holding, the crew calculated they would exceed their maximum legal FTL unless dispatched immediately."
            },
            {
              "num": "17",
              "term": "spatial disorientation",
              "phonetic": "/ˈspeɪ.ʃəl dɪs.ɔː.ri.enˈteɪ.ʃən/",
              "pos": "noun phrase",
              "definition": "The inability of a pilot to correctly perceive the true attitude, altitude, or motion of an aircraft relative to the Earth.",
              "example": "Flying in cloud without visual reference, the pilot experienced a somatogravic illusion and trusted instruments over bodily sensations."
            },
            {
              "num": "18",
              "term": "IMSAFE checklist",
              "phonetic": "/ˈɪm.seɪf ˈtʃek.lɪst/",
              "pos": "noun phrase",
              "definition": "A pre-flight personal fitness self-assessment mnemonic: Illness, Medication, Stress, Alcohol, Fatigue, and Emotion/Eating.",
              "example": "Before reporting for departure, every aviator must run through the IMSAFE checklist to ensure complete fitness for duty."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: In-Flight Medical Emergencies & Passenger Care",
              "watchUrl": "https://www.youtube.com/watch?v=QWfFaOoUVF0",
              "tag": "In-Flight Medicine",
              "videoId": "QWfFaOoUVF0",
              "embedUrl": "https://www.youtube-nocookie.com/embed/QWfFaOoUVF0",
              "caption": "Focus: Real in-flight passenger emergency response: Emergency Medical Kit (EMK) deployment, cabin oxygen, doctor-crew cooperation, and medical diversion decision points."
            },
            {
              "title": "Video 2: Pilot Incapacitation & Flight Time Limitations",
              "watchUrl": "https://www.youtube.com/watch?v=NtuO6k92OJo",
              "tag": "Human Factors & FTL",
              "videoId": "NtuO6k92OJo",
              "embedUrl": "https://www.youtube-nocookie.com/embed/NtuO6k92OJo",
              "caption": "Focus: Airline captain Petter Hörnfeldt explains cockpit incapacitation drills, Flight Time Limitations (FTL), micro-sleep risks, and checklist re-allocation."
            },
            {
              "title": "Video 3: Hypoxia, Spatial Disorientation & Altitude Chambers",
              "watchUrl": "https://www.youtube.com/watch?v=sw2HVX6K--8",
              "tag": "Aeromedical Physics",
              "videoId": "sw2HVX6K--8",
              "embedUrl": "https://www.youtube-nocookie.com/embed/sw2HVX6K--8",
              "caption": "Focus: Live altitude chamber hypoxia demonstration: cognitive degradation, insidious onset, Time of Useful Consciousness (TUC), and rapid mask donning."
            }
          ],
          "resources": [
            {
              "url": "https://www.easa.europa.eu",
              "tag": "01 • Regulatory Framework",
              "name": "EASA Flight Time Limitations (FTL) Guidelines",
              "desc": "Official European safety standards detailing maximum flight duty periods, rest allowances, and fatigue management."
            },
            {
              "url": "https://www.faa.gov",
              "tag": "02 • Aeromedical Standards",
              "name": "FAA Pilot Safety Brochures: In-Flight Medical Fitness",
              "desc": "Comprehensive clinical guides explaining hypoxia, spatial disorientation, medication interactions, and IMSAFE criteria."
            },
            {
              "url": "https://www.icao.int",
              "tag": "03 • ICAO Aeromedical Manual",
              "name": "ICAO Doc 8984: Manual of Civil Aviation Medicine",
              "desc": "International medical standards for aircrew licensing, cardiovascular health, and airborne emergency response protocols."
            },
            {
              "url": "https://www.iata.org",
              "tag": "04 • Cabin Medical Standards",
              "name": "IATA Medical Manual for Commercial Passenger Airlines",
              "desc": "Recommended airline practices for onboard emergency medical kits, first aid training, and passenger health management."
            },
            {
              "url": "https://www.medlink.com",
              "tag": "05 • Ground Telemedicine",
              "name": "MedLink Aviation Telemedicine Advisory",
              "desc": "Global emergency response protocols connecting airborne cockpits with hospital emergency medicine physicians via satellite."
            },
            {
              "url": "https://www.eurocontrol.int",
              "tag": "06 • Air Traffic Controller Well-being",
              "name": "EUROCONTROL Human Factors & Controller Fatigue",
              "desc": "Scientific research into ATCO shift scheduling, sector workload distribution, and cognitive ergonomics."
            }
          ],
          "pageUrl": "session1/admat_aas2.html",
          "articles": [
            {
              "topic": "Aerospace Medical Association Journal",
              "sourceTag": "Clinical Aviation Review",
              "heading": "Medical Diversions in Long-Haul Commercial Operations: Clinical Decision Metrics",
              "snippet": "Empirical analysis of over 4,000 in-flight medical events evaluating the primary triggers for diversion (suspected myocardial infarction, stroke, persistent seizure) versus conservative cabin management.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.easa.europa.eu"
            },
            {
              "topic": "International Civil Aviation Organization (ICAO)",
              "sourceTag": "Human Factors Digest",
              "heading": "Fatigue and Alertness Management: Mitigating Circadian Lows in Trans-Meridian Flight",
              "snippet": "Investigation into the Window of Circadian Low (WOCL: 02:00 to 05:59 local physiological time), controlled cockpit rest protocols, and cumulative sleep debt reduction strategies.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.icao.int"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "________ the onboard AED delivered an electrical shock, the passenger regained a regular sinus cardiac rhythm.",
              "options": [
                {
                  "letter": "A",
                  "text": "After"
                },
                {
                  "letter": "B",
                  "text": "Despite"
                },
                {
                  "letter": "C",
                  "text": "Unless"
                },
                {
                  "letter": "D",
                  "text": "Whereas"
                }
              ],
              "correctLetter": "A",
              "correctText": "After",
              "analysis": "Temporal conjunction 'After' correctly introduces the completed event that preceded the restoration of cardiac rhythm.",
              "strategy": "Temporal sequence: After + [past clause], [main past clause]."
            },
            {
              "stem": "Air traffic controllers must adhere strictly to mandatory rest breaks ________ prevent cognitive fatigue during peak traffic hours.",
              "options": [
                {
                  "letter": "A",
                  "text": "in order to"
                },
                {
                  "letter": "B",
                  "text": "so that"
                },
                {
                  "letter": "C",
                  "text": "because of"
                },
                {
                  "letter": "D",
                  "text": "due to"
                }
              ],
              "correctLetter": "A",
              "correctText": "in order to",
              "analysis": "The purpose clause connector 'in order to' is followed by the bare base form of the verb ('prevent').",
              "strategy": "Purpose formula: in order to + bare infinitive (V1)."
            },
            {
              "stem": "The Captain decided to initiate an immediate diversion ________ the passenger showed worsening symptoms of acute myocardial infarction.",
              "options": [
                {
                  "letter": "A",
                  "text": "because"
                },
                {
                  "letter": "B",
                  "text": "in spite of"
                },
                {
                  "letter": "C",
                  "text": "although"
                },
                {
                  "letter": "D",
                  "text": "regardless"
                }
              ],
              "correctLetter": "A",
              "correctText": "because",
              "analysis": "Causal conjunction 'because' is followed by a full subject-verb clause ('the passenger showed').",
              "strategy": "Cause connector: because + [clause] explains the operational decision."
            },
            {
              "stem": "Commercial flight crews are ________ to declare their unfitness for flight if they feel severely fatigued before reporting.",
              "options": [
                {
                  "letter": "A",
                  "text": "required"
                },
                {
                  "letter": "B",
                  "text": "requiring"
                },
                {
                  "letter": "C",
                  "text": "requirement"
                },
                {
                  "letter": "D",
                  "text": "require"
                }
              ],
              "correctLetter": "A",
              "correctText": "required",
              "analysis": "Passive construction 'are required to' expresses regulatory obligation under EASA air safety rules.",
              "strategy": "Passive modal obligation: be + past participle (required) + to-infinitive."
            },
            {
              "stem": "When ________ across more than five time zones, pilots should manage pre-flight sleep hygiene carefully.",
              "options": [
                {
                  "letter": "A",
                  "text": "traveling"
                },
                {
                  "letter": "B",
                  "text": "traveled"
                },
                {
                  "letter": "C",
                  "text": "travel"
                },
                {
                  "letter": "D",
                  "text": "travels"
                }
              ],
              "correctLetter": "A",
              "correctText": "traveling",
              "analysis": "Reduced temporal clause after 'When': active participle 'traveling' modifies the main clause subject ('pilots').",
              "strategy": "Temporal participle: When + V-ing when subject is identical to main clause."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Health, Medical Emergencies & Human Factors in Aviation",
            "subtitle": "In-Flight Medical Emergencies, Crew Fatigue Management, Flight Time Limitations & Pilot/ATCO Well-Being",
            "image": "images/aas_m3card1.jpg"
          },
          "openingSession": {
            "title": "Activity 1: Aviation Health News & Quick Check (10 mins)",
            "summary": "Analyze recent in-flight medical incidents, crew fatigue advisories, and complete a 5-question baseline aeromedical diagnostic.",
            "modeBadges": [
              "Plenary",
              "Opening Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Review recent aviation headlines regarding in-flight medical diversions, EASA pilot mental health regulations, and FAA controller fatigue taskforce recommendations.",
              "In plenary, discuss: 'What are the legal responsibilities of the Captain when deciding whether to divert for a medical emergency?'",
              "Complete the 5-question spot-check individually, then reveal the answer keys to audit your current medical terminology."
            ],
            "deliverable": "Completed 5-question aeromedical quick check and 2-minute verbal summary of a recent aviation medical event.",
            "teacherNotes": "Set a professional aeromedical tone. Emphasize that in-flight medical events occur once in every 600 commercial flights, making triage a core crew competency.",
            "newsPrompts": [
              "Transatlantic widebody diverts to Gander (CYQX) after passenger experiences acute crushing chest pain at FL370.",
              "FAA initiates comprehensive pilot and air traffic controller fatigue mitigation review following series of close-call runway incursions.",
              "EASA issues updated guidance on pilot peer-support programs (PSP) and confidential mental health self-declaration frameworks."
            ],
            "diagnostic": {
              "title": "Aviation Health & Aeromedical Quick Check",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the difference between a first aid kit (FAK) and an emergency medical kit (EMK)?",
                  "answer": "A First Aid Kit (FAK) contains basic bandages and dressings used by cabin crew. An Emergency Medical Kit (EMK) contains advanced pharmaceuticals, IV fluids, and diagnostic tools reserved strictly for licensed physicians or trained medical volunteers."
                },
                {
                  "id": 2,
                  "q": "Which international radio urgency call is transmitted when a passenger has a severe but not immediately life-threatening medical situation?",
                  "answer": "PAN-PAN MEDICO (indicates an urgent medical situation requiring priority ATC vectors and hospital coordination without declaring grave/imminent danger)."
                },
                {
                  "id": 3,
                  "q": "What does the physiological acronym WOCL stand for, and why is it dangerous for aviators?",
                  "answer": "Window of Circadian Low (typically 02:00 to 05:59). During this window, human body temperature drops and cognitive reaction times degrade significantly, dramatically elevating error risk."
                },
                {
                  "id": 4,
                  "q": "What mnemonic checklist must every pilot review prior to departure to verify personal fitness?",
                  "answer": "IMSAFE: Illness, Medication, Stress, Alcohol, Fatigue, and Emotion/Eating."
                },
                {
                  "id": 5,
                  "q": "What is the primary danger of slow cabin depressurization at cruising altitudes above 30,000 feet?",
                  "answer": "Insidious hypoxia: oxygen saturation drops without dramatic sensations of choking, causing cognitive euphoria, confusion, and unconsciousness before the crew realizes depressurization has occurred."
                }
              ]
            }
          },
          "medicalIncidentsLexis": {
            "title": "Activity 2: In-Flight Medical Emergencies & Triage Vocabulary (20 mins)",
            "summary": "Master specialized medical condition terminology, cabin emergency medical kits (EMK), and passenger triage.",
            "modeBadges": [
              "Pairs",
              "Medical Protocols",
              "20 Mins"
            ],
            "instructions": [
              "In pairs, review the 18 specialized medical conditions, emergency kit components, and operational procedures.",
              "Categorize each condition into one of 3 triage urgency levels: Critical (immediate landing/defibrillation), Serious (urgent medical stabilization), or Non-Emergency (in-seat comfort & monitoring).",
              "Practice explaining the physical symptoms and cabin crew immediate interventions for at least 3 conditions in fluent English."
            ],
            "deliverable": "Completed medical triage matrix categorizing in-flight conditions by severity and immediate cabin crew action.",
            "teacherNotes": "Drill pronunciation of challenging Latin-based clinical terms: 'hy-per-ven-ti-LA-tion', 'de-FI-bri-lla-tor', 'clau-stro-PHO-bi-a', and 'mys-O-car-di-al'.",
            "conditions": [
              {
                "term": "Cardiac Arrest",
                "urgency": "Immediate Critical",
                "protocol": "Commence CPR immediately, retrieve and attach AED within 90 seconds, inform Captain to declare MAYDAY MEDICO, page for medical volunteers."
              },
              {
                "term": "Acute Panic Attack / Claustrophobia",
                "urgency": "Non-Emergency / Cabin Care",
                "protocol": "Relocate passenger to quiet seat near galley, speak in calm measured tones, guide controlled diaphragmatic breathing, provide cool compress."
              },
              {
                "term": "Severe Hyperventilation",
                "urgency": "Moderate Urgency",
                "protocol": "Reassure passenger, coach slow inhalation through nose, have passenger breathe into hands or paper bag to restore carbon dioxide balance."
              },
              {
                "term": "Suspected Stroke / CVA",
                "urgency": "Immediate Critical",
                "protocol": "Apply FAST assessment (Face, Arms, Speech, Time), administer high-flow oxygen, record exact symptom onset time, request immediate diversion to hospital."
              },
              {
                "term": "Acute Anaphylaxis",
                "urgency": "Immediate Critical",
                "protocol": "Identify allergen, retrieve auto-injector (EpiPen) from EMK, administer intramuscular epinephrine in outer thigh, monitor airway continuously."
              },
              {
                "term": "Severe Motion Sickness / Syncope",
                "urgency": "Non-Emergency",
                "protocol": "Seat reclined flat with legs elevated, provide sick bag, cold damp towel on forehead, administer cabin oxygen if prolonged pallor."
              }
            ]
          },
          "fatigueHumanFactorsClinic": {
            "title": "Activity 3: Crew & Controller Fatigue, Circadian Rhythms & FTL (20 mins)",
            "summary": "Examine the physiological mechanisms of fatigue, sleep debt, circadian disruption, and flight time limitations.",
            "modeBadges": [
              "Individual & Pairs",
              "Human Factors Workshop",
              "20 Mins"
            ],
            "instructions": [
              "Step 1 (Concepts & Vocabulary - 5 mins): Review key human factors terms: sleep debt, sleep inertia (grogginess upon waking), and the Window of Circadian Low (WOCL).",
              "Step 2 (Roster Evaluation - 8 mins): In pairs, review the 12-hour multi-sector crew schedule. Identify points where fatigue and reduced alertness pose operational risks.",
              "Step 3 (Fatigue Consultation Briefing - 7 mins): Practice advising a colleague or supervisor in spoken English, using professional modal verbs of advice (should, ought to, must) to recommend appropriate rest intervals."
            ],
            "deliverable": "A 1-minute spoken handover briefing advising a colleague on fatigue management and recommending safe rest actions.",
            "teacherNotes": "Contrast acute fatigue (single exhausting duty cycle) with cumulative sleep debt. Emphasize that reporting fatigued is a non-punitive safety obligation under Just Culture.",
            "ftlRules": [
              {
                "concept": "Window of Circadian Low (WOCL)",
                "definition": "02:00 to 05:59 in the crew member's acclimated time zone. Alertness and cognitive performance reach diurnal minimums."
              },
              {
                "concept": "Maximum Flight Duty Period (FDP)",
                "definition": "Ranges from 9 to 13 hours depending on start time and number of flight sectors. Duties starting during WOCL are heavily restricted."
              },
              {
                "concept": "Controlled Rest on Flight Deck",
                "definition": "A 40-minute planned in-seat rest protocol permitted during low-workload cruising flight with one pilot in absolute active monitoring."
              },
              {
                "concept": "ATCO Sector Break Cycles",
                "definition": "Air traffic controllers must not exceed 2 hours of continuous active operational radar control without a mandatory 30-45 minute relief break."
              }
            ]
          },
          "medicalDiversionSimulation": {
            "title": "Activity 4: Airborne Medical Diversion Simulation & Decision Guide (35 mins)",
            "summary": "Roleplay a flight crew facing an acute in-flight medical crisis over continental / transoceanic airspace.",
            "modeBadges": [
              "Small Groups (3-4)",
              "Decision Simulation",
              "35 Mins"
            ],
            "instructions": [
              "In small groups of 3-4, select one of the 3 realistic in-flight emergency scenarios below.",
              "Step 1: Clinical Assessment & Ground Telemedicine (consult MedLink satellite doctor, evaluate EMK pharmaceuticals).",
              "Step 2: Operational Assessment (evaluate diversion airfields, runway conditions, weather considerations, and hospital trauma access in pairs).",
              "Step 3: ATC Radio Transmission & Passenger Announcement (practice delivering the standard emergency radio call [PAN-PAN MEDICO] and the Captain's reassuring cabin announcement in spoken English)."
            ],
            "deliverable": "Spoken delivery of the standard emergency radio call and a 1-minute reassuring Captain's cabin announcement to passengers.",
            "teacherNotes": "Guide groups to balance medical urgency against operational feasibility. An overweight landing on a short wet runway creates catastrophic safety risks that must be weighed against medical priority.",
            "scenarios": [
              {
                "id": 1,
                "title": "Scenario A: Mid-Atlantic Cardiac Emergency at FL370",
                "context": "Boeing 777-300ER cruising mid-Atlantic (Speedbird 178, London to New York). 58-year-old passenger experiences severe crushing retrosternal pain, cold sweats, and BP 80/50. Volunteer ER doctor suspects acute STEMI myocardial infarction.",
                "challenge": "Distance to Shannon (EINN) is 105 mins; distance to Reykjavik (BIRK) is 85 mins. BIRK has runway 19/01 with freezing drizzle and crosswind; EINN has 3,200m dry runway and catheterization trauma center."
              },
              {
                "id": 2,
                "title": "Scenario B: Severe Cabin Panic & Claustrophobia Crisis at FL330",
                "context": "Airbus A321neo en route from Paris to Athens over the Alps. 32-year-old passenger suffers an acute violent claustrophobia attack, screaming hysterically and attempting to pull the emergency exit handle while hyperventilating.",
                "challenge": "Cabin crew and passengers have restrained the individual, but hyperventilation is inducing tetany and loss of consciousness. Immediate alternate airports: Milan Malpensa (LIMC) vs. Geneva (LSGG)."
              },
              {
                "id": 3,
                "title": "Scenario C: Sudden Pilot Incapacitation on Descent",
                "context": "Embraer 190 on approach into Frankfurt (EDDF) passing 8,000 feet in thick cloud. First Officer suddenly collapses over the flight controls with severe acute kidney stone colic and vomiting.",
                "challenge": "Captain assumes sole pilot control under high workload in dense IMC weather. Declare MAYDAY INCAPACITATED PILOT, request immediate ILS approach vectors, and coordinate standside medical response."
              }
            ]
          },
          "humanFactorsDebrief": {
            "title": "Activity 5: Aeromedical Physics: Spatial Disorientation, Hypoxia & Emergency Descent (25 mins)",
            "summary": "Analyze physiological illusions in instrument flight, hypoxia progression, and emergency descent maneuvers.",
            "modeBadges": [
              "Plenary & Pairs",
              "Aeromedical Physics",
              "25 Mins"
            ],
            "instructions": [
              "Analyze the 3 classic vestibular sensory illusions: the leans (false roll sensation), somatogravic illusion (false pitch-up during rapid acceleration), and graveyard spiral.",
              "Examine Time of Useful Consciousness (TUC) table: FL250 (3–5 mins), FL350 (30–60 secs), FL400 (15–20 secs).",
              "Review the emergency descent memory items: Oxygen masks on (100%), establish crew communications, speedbrakes extend, descend at VMO/MMO to 10,000 ft or minimum safe altitude (MSA)."
            ],
            "deliverable": "Technical summary comparing rapid decompression response procedures with spatial disorientation recovery techniques.",
            "teacherNotes": "Emphasize why instruments must be trusted above all human sensory inputs during IMC. Review the famous somatogravic illusion during night go-arounds.",
            "illusions": [
              {
                "name": "The Leans",
                "cause": "A slow unrecognized roll recovery makes the pilot feel as though the aircraft is banking in the opposite direction when it is actually level."
              },
              {
                "name": "Somatogravic Illusion",
                "cause": "Rapid forward acceleration stimulates otolith organs, creating a false sensation of pitching up, tempting the pilot to push the nose down into the ground."
              },
              {
                "name": "Graveyard Spiral",
                "cause": "In an unperceived bank, the pilot pulls back on the yoke to stop altitude loss, tightening the spiral dive and overstressing the airframe."
              }
            ]
          },
          "closingReview": {
            "title": "Activity 6: Medical & Human Factors Consolidation & Syllable Stress (10 mins)",
            "summary": "Consolidate the 18 aeromedical terms, conduct syllable stress drills, and prepare for Session 2 Meteorology.",
            "modeBadges": [
              "Plenary",
              "Consolidation",
              "10 Mins"
            ],
            "instructions": [
              "Conduct rhythmic pronunciation drills on multi-syllabic aeromedical vocabulary.",
              "Verify personal mastery of the 3 triage categories, FTL rules, and the IMSAFE mnemonic.",
              "Access the Vocabulary Flashcards tab to complete self-study drills before Session 2."
            ],
            "deliverable": "Pronunciation self-audit on 18 aeromedical terms and confirmed prep for Session 2 Meteorology.",
            "teacherNotes": "Emphasize that clear, calm pronunciation on radio urgency calls prevents misunderstandings between pilots and controllers during high-stress medical events.",
            "pronunciationFocus": [
              "hy-per-ven-ti-LA-tion",
              "de-FI-bri-lla-tor",
              "clau-stro-PHO-bi-a",
              "cir-CA-di-an",
              "phy-si-o-LO-gi-cal"
            ],
            "checkpoints": [
              "Mastered 18 clinical & operational medical terms",
              "Differentiated PAN-PAN MEDICO vs. MAYDAY urgency calls",
              "Applied EASA FTL rules and the IMSAFE fitness checklist",
              "Executed airborne medical diversion decision guide"
            ]
          }
        }
      },
      "2": {
        "session": 2,
        "objectives": {
          "title": "Session 2 - Meteorology & Severe Weather in Commercial Aviation Objectives",
          "summary": "By the end of this session, you will be able to evaluate the operational impacts of severe atmospheric hazards on commercial flight operations, decode complex METAR and TAF meteorological reports, explain the aerodynamic physics of microbursts and structural icing, analyze landmark weather accident case studies (Delta 191 & BA 009), and execute a terminal weather diversion routing under fuel constraints.",
          "items": [
            {
              "num": 1,
              "title": "Classify Severe Atmospheric Hazards (Meteorological Vocabulary)",
              "description": "Distinguish between convective hazards (microbursts, squall lines, cumulonimbus), turbulence phenomena (CAT, mountain waves), and obscurations (volcanic ash, low visibility) using standardized ICAO aviation terminology."
            },
            {
              "num": 2,
              "title": "Decode Operational Aviation Weather Reports (METAR, TAF & SIGMET)",
              "description": "Extract critical operational data from standard coded weather strings including wind direction/gusts, runway visual range (RVR), cloud coverage, present weather symbols (+TSRA, FZRA), and trend forecasts."
            },
            {
              "num": 3,
              "title": "Explain the Aerodynamic Physics of Icing & Microbursts",
              "description": "Describe how rime and clear structural icing degrade wing lift while increasing drag and stall speed, and explain the sudden velocity and wind direction transitions encountered inside a low-level microburst."
            },
            {
              "num": 4,
              "title": "Analyze Landmark Weather Accidents (Case Studies: Delta 191 & BA 009)",
              "description": "Summarize the atmospheric triggers, flight crew responses, and technological breakthroughs resulting from the 1985 Dallas microburst accident and the 1982 Galunggung volcanic ash four-engine flameout."
            },
            {
              "num": 5,
              "title": "Execute a Weather Diversion & Holding Pattern Plan",
              "description": "Collaborate in flight dispatcher and pilot roles to evaluate weather radar echoes, calculate reserve fuel burn, and select safe alternate airports during severe terminal storm closures."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 2 Lesson Plan: Meteorology & Severe Weather (2 Hours)",
          "summary": "A 120-minute operational syllabus combining weather news warm-ups, atmospheric vocabulary classification, METAR/TAF decoding clinic, 15-minute landmark weather case study research sprint, and severe weather diversion simulation.",
          "items": [
            {
              "time": "00-10",
              "title": "Activity 1: Aviation Weather Briefing & Meteorological Warm-Up (10 mins)",
              "description": "Plenary opening examining current weather hazard charts, satellite imagery, and completing a 5-question baseline meteorological diagnostic."
            },
            {
              "time": "10-30",
              "title": "Activity 2: Severe Atmospheric Phenomena & Flight Impacts (20 mins)",
              "description": "Paired classification of 18 severe weather terms, aerodynamic impact matrices, and pilot tactical avoidance maneuvers."
            },
            {
              "time": "30-50",
              "title": "Activity 3: Language Focus: Decoding METAR, TAF & SIGMET Advisories (20 mins)",
              "description": "Interactive translation and interpretation of real-world coded aviation weather reports for dispatchers and pilots."
            },
            {
              "time": "50-65",
              "title": "Activity 4: 15-Minute Group Research Sprint: Landmark Weather Case Studies (15 mins)",
              "description": "Small-group rapid research analyzing Delta 191 (DFW microburst) or BA 009 (volcanic ash ingestion), extracting safety fixes and crew actions."
            },
            {
              "time": "65-110",
              "title": "Activity 5: Severe Weather En-Route & Terminal Diversion Simulation (45 mins)",
              "description": "Flight crew and dispatcher teams reroute aircraft around a massive squall line with fuel reserve calculations and ATC coordination."
            },
            {
              "time": "110-120",
              "title": "Activity 6: Meteorology Consolidation & Pronunciation Wrap-Up (10 mins)",
              "description": "Multi-syllabic stress drills on meteorological terms, checkpoints verification, and link to Session 3."
            }
          ]
        },
        "revision": {
          "title": "Session 2 Technical Vocabulary & Flashcards",
          "summary": "Master the 18 essential technical terms and phraseology for aviation meteorology, severe convective weather, and atmospheric hazards.",
          "terms": [
            {
              "num": "01",
              "term": "microburst",
              "phonetic": "/ˈmaɪ.krəʊ.bɜːst/",
              "pos": "noun",
              "definition": "A localized column of sinking air (downdraft) within a thunderstorm that produces damaging divergent winds of over forty-five knots near the ground.",
              "example": "On final approach, the airliner encountered a severe microburst that caused an immediate forty-knot loss of indicated airspeed."
            },
            {
              "num": "02",
              "term": "low-level windshear (LLWS)",
              "phonetic": "/ləʊ ˈlev.əl wɪnd ʃɪər/",
              "pos": "noun phrase",
              "definition": "A sudden, drastic change in wind speed and/or wind direction over a short distance within two thousand feet of the aerodrome surface.",
              "example": "Terminal Doppler weather radar alerted the tower to LLWS on runway 27 right, prompting immediate go-around instructions."
            },
            {
              "num": "03",
              "term": "clear air turbulence (CAT)",
              "phonetic": "/klɪər eər ˈtɜː.bjə.ləns/",
              "pos": "noun phrase",
              "definition": "Severe, sudden turbulence occurring in cloudless skies at high altitudes, typically associated with jet stream wind gradients and mountain waves.",
              "example": "Unforecast severe clear air turbulence at FL360 hurled unbelted passengers and service carts against the cabin ceiling."
            },
            {
              "num": "04",
              "term": "cumulonimbus (CB)",
              "phonetic": "/ˌkjuː.mjʊ.ləʊˈnɪm.bəs/",
              "pos": "noun",
              "definition": "An exceptionally dense, vertically towering storm cloud associated with severe turbulence, lightning, hail, and violent icing conditions.",
              "example": "Airborne weather radar detected isolated cumulonimbus cells with tops exceeding FL450 directly along the airway."
            },
            {
              "num": "05",
              "term": "rime icing",
              "phonetic": "/raɪm ˈaɪ.sɪŋ/",
              "pos": "noun phrase",
              "definition": "A rough, milky, opaque ice deposit formed by the rapid freezing of small supercooled water droplets upon impact with airframe surfaces.",
              "example": "While holding in stratiform cloud, rime icing accumulated rapidly along the unheated wing leading edges."
            },
            {
              "num": "06",
              "term": "clear icing",
              "phonetic": "/klɪər ˈaɪ.sɪŋ/",
              "pos": "noun phrase",
              "definition": "A heavy, smooth, transparent sheet of ice formed when large supercooled droplets freeze slowly as they flow back across aerodynamic surfaces.",
              "example": "Clear icing is considered the most hazardous structural icing because it is difficult to see and significantly alters airfoil camber."
            },
            {
              "num": "07",
              "term": "pitot-static tube freezing",
              "phonetic": "/ˈpiː.təʊ ˈstæt.ɪk tjuːb ˈfriː.zɪŋ/",
              "pos": "noun phrase",
              "definition": "The complete blockage of dynamic pressure probes by ice crystals or supercooled droplets, resulting in erroneous airspeed and altitude readings.",
              "example": "Severe icing blocked the aircraft's pitot probes, causing the primary flight computer to drop out of normal flight control law."
            },
            {
              "num": "08",
              "term": "supercooled large droplets (SLD)",
              "phonetic": "/ˌsuː.pə.kuːld lɑːdʒ ˈdrɒp.ləts/",
              "pos": "noun phrase",
              "definition": "Liquid water droplets remaining liquid at temperatures below freezing with diameters greater than fifty microns, creating severe runback icing.",
              "example": "Encountering SLD conditions beyond certified aircraft ice protection limits led to severe ice ridges behind active de-icing boots."
            },
            {
              "num": "09",
              "term": "volcanic ash plume",
              "phonetic": "/vɒlˈkæn.ɪk æʃ pluːm/",
              "pos": "noun phrase",
              "definition": "An airborne cloud of abrasive silicate mineral dust and glass shards ejected by an erupting volcano that can melt inside jet engines.",
              "example": "Passing through an undetected volcanic ash plume caused the Boeing 747's turbine blades to glaze over, causing flameout of all four engines."
            },
            {
              "num": "10",
              "term": "jet stream",
              "phonetic": "/dʒet striːm/",
              "pos": "noun phrase",
              "definition": "A narrow, meandering ribbon of high-altitude westerly winds with velocities often exceeding one hundred and twenty knots near the tropopause.",
              "example": "Dispatchers routed the eastbound flight directly into the core of the polar jet stream to save forty minutes of flight time."
            },
            {
              "num": "11",
              "term": "mountain wave",
              "phonetic": "/ˈmaʊn.tɪn weɪv/",
              "pos": "noun phrase",
              "definition": "Oscillating atmospheric gravity waves formed on the downwind (lee) side of mountain ridges, producing severe rotor turbulence and vertical drafts.",
              "example": "Flying downwind of the Pyrenees, the aircraft experienced severe mountain wave turbulence with rate of climb fluctuating violently."
            },
            {
              "num": "12",
              "term": "squall line",
              "phonetic": "/skwɔːl laɪn/",
              "pos": "noun phrase",
              "definition": "A long, continuous, narrow band of severe, active thunderstorms that often forms in advance of a fast-moving cold front.",
              "example": "Pilots requested a seventy-mile deviation south of track to bypass an impenetrable two-hundred-mile squall line."
            },
            {
              "num": "13",
              "term": "Runway Visual Range (RVR)",
              "phonetic": "/ˈrʌn.weɪ ˈvɪʒ.u.əl reɪndʒ/",
              "pos": "noun phrase",
              "definition": "The horizontal distance over which a pilot on the centerline of a runway can see the runway surface markings or lights delineating it.",
              "example": "When freezing fog lowered the RVR to three hundred meters, the aerodrome initiated Category III Low Visibility Procedures."
            },
            {
              "num": "14",
              "term": "Low Visibility Procedures (LVP)",
              "phonetic": "/ləʊ ˌvɪz.əˈbɪl.ə.ti prəˈsiː.dʒəz/",
              "pos": "noun phrase",
              "definition": "Special operational ground and air traffic procedures enforced at aerodromes when cloud ceiling or visibility falls below CAT I minimums.",
              "example": "Under LVP, taxiway movements are strictly separated and vehicle access to the airfield maneuvering area is restricted."
            },
            {
              "num": "15",
              "term": "METAR",
              "phonetic": "/ˈmeɪ.tɑːr/",
              "pos": "noun",
              "definition": "A standardized routine aerodrome meteorological report issued hourly or half-hourly containing surface wind, visibility, weather, and pressure.",
              "example": "The latest METAR for Toulouse-Blagnac reported gusty northwest winds and broken cumulonimbus clouds at two thousand feet."
            },
            {
              "num": "16",
              "term": "Terminal Aerodrome Forecast (TAF)",
              "phonetic": "/ˈtɜː.mɪ.nəl ˈeə.rə.drəʊm ˈfɔː.kɑːst/",
              "pos": "noun phrase",
              "definition": "A concise meteorological statement of expected weather conditions at an airport for a specified period, typically twenty-four to thirty hours.",
              "example": "The dispatch release included the Paris TAF forecasting a temporary change to heavy thunderstorms during the planned arrival time."
            },
            {
              "num": "17",
              "term": "SIGMET",
              "phonetic": "/ˈsɪɡ.met/",
              "pos": "noun",
              "definition": "Significant Meteorological Information issued to all aircraft regarding en-route weather phenomena that may affect safety (severe icing, CAT, ash).",
              "example": "ATC broadcast a convective SIGMET warning of severe squall lines and four-inch hail across the entire Marseille flight information region."
            },
            {
              "num": "18",
              "term": "wake turbulence",
              "phonetic": "/weɪk ˈtɜː.bjə.ləns/",
              "pos": "noun phrase",
              "definition": "Turbulence formed by a pair of counter-rotating counter vortices trailing behind an aircraft's wingtips as a byproduct of generating lift.",
              "example": "ATC applied four minutes of mandatory radar spacing behind the Airbus A380 super-heavy to allow wake vortices to dissipate."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Microbursts, Windshear & The Crash of Delta 191",
              "watchUrl": "https://www.youtube.com/watch?v=TIOQXdds2ZY",
              "tag": "Convective Hazards",
              "videoId": "TIOQXdds2ZY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/TIOQXdds2ZY",
              "caption": "Focus: In-depth analysis of the 1985 DFW microburst: downdraft aerodynamics, low-level windshear alerting (LLWAS), TDWR radar, and windshear escape maneuvers."
            },
            {
              "title": "Video 2: Volcanic Ash Cloud Encounter: British Airways Flight 009",
              "watchUrl": "https://www.youtube.com/watch?v=YYwN1R8hVsI",
              "tag": "Volcanic Hazards",
              "videoId": "YYwN1R8hVsI",
              "embedUrl": "https://www.youtube-nocookie.com/embed/YYwN1R8hVsI",
              "caption": "Focus: The famous Jakarta incident: Mount Galunggung ash cloud encounter, quadruple engine flameout, windshield sandblasting, St. Elmo's fire, and relight procedures."
            },
            {
              "title": "Video 3: Decoding Aviation Weather: METAR, TAF & SIGMET Masterclass",
              "watchUrl": "https://www.youtube.com/watch?v=nb3gyUVVMlw",
              "tag": "Aeronautical Meteorology",
              "videoId": "nb3gyUVVMlw",
              "embedUrl": "https://www.youtube-nocookie.com/embed/nb3gyUVVMlw",
              "caption": "Focus: Master spoken operational translation of raw ICAO METAR and TAF strings: wind gust remarks, variable directions, visibility, cloud coverage, and altimeter settings."
            }
          ],
          "resources": [
            {
              "url": "https://www.metoffice.gov.uk",
              "tag": "01 • Weather Authority",
              "name": "UK Met Office Aviation Services & Weather Radar",
              "desc": "Official aviation weather forecasting methodologies, satellite precipitation maps, and SIGMET generation standards."
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "02 • Airworthiness Rules",
              "name": "EASA In-Flight Icing Regulations & Aircraft Certification",
              "desc": "Certification specifications for flight in known icing conditions (CS-25 Appendix C and Appendix O for Supercooled Large Droplets)."
            },
            {
              "url": "https://www.wmo.int",
              "tag": "03 • WMO Standards",
              "name": "World Meteorological Organization: Aeronautical Code Guide",
              "desc": "Official international handbook for decoding METAR, SPECI, TAF, and SIGMET meteorological abbreviations and codes."
            },
            {
              "url": "https://www.icao.int",
              "tag": "04 • Volcanic Ash Centers",
              "name": "ICAO Volcanic Ash Advisory Centers (VAAC)",
              "desc": "Global monitoring network tracking volcanic ash clouds and providing operational dispersion advisories to international airlines."
            },
            {
              "url": "https://www.eurocontrol.int",
              "tag": "05 • Airspace Capacity",
              "name": "EUROCONTROL Severe Weather Airspace Contingency",
              "desc": "Collaborative decision-making protocols managing European en-route delays and re-routing during convective summer squall lines."
            },
            {
              "url": "https://www.faa.gov",
              "tag": "06 • Flight Safety Advisory",
              "name": "FAA Advisory Circular AC 00-54: Pilot Windshear Guide",
              "desc": "Comprehensive guidance on airborne predictive windshear systems, reactive alarms, and aerodynamic recovery maneuvers."
            }
          ],
          "pageUrl": "session2/admat_aas2.html",
          "articles": [
            {
              "topic": "Flight Safety Foundation",
              "sourceTag": "Technical Safety Digest",
              "heading": "Microburst Aerodynamics and Airborne Detection: The Legacy of Delta 191",
              "snippet": "Retrospective engineering study analyzing how the 1985 DFW microburst spurred the development of Terminal Doppler Weather Radar (TDWR) and mandatory predictive windshear equipment on transport category aircraft.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.easa.europa.eu"
            },
            {
              "topic": "Journal of Aircraft & Propulsion",
              "sourceTag": "Aerospace Engineering Study",
              "heading": "Silicate Ingestion and Turbine Glass Formation in Volcanic Ash Clouds",
              "snippet": "Combustion chamber thermodynamic analysis showing how volcanic ash particles melt at 1,100 degrees Celsius, coating high-pressure turbine nozzles and causing immediate compressor stall.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.icao.int"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The flight was instructed to enter a holding pattern ________ the heavy cumulonimbus storm passed directly over the aerodrome.",
              "options": [
                {
                  "letter": "A",
                  "text": "while"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "instead"
                },
                {
                  "letter": "D",
                  "text": "during"
                }
              ],
              "correctLetter": "A",
              "correctText": "while",
              "analysis": "Conjunction 'while' introduces a simultaneous temporal clause with its own subject and verb ('the storm passed').",
              "strategy": "Temporal conjunction: while + [subject + verb clause]."
            },
            {
              "stem": "Severe clear air turbulence was ________ reported by three consecutive widebody aircraft cruising at FL370.",
              "options": [
                {
                  "letter": "A",
                  "text": "repeatedly"
                },
                {
                  "letter": "B",
                  "text": "repetition"
                },
                {
                  "letter": "C",
                  "text": "repeat"
                },
                {
                  "letter": "D",
                  "text": "repetitive"
                }
              ],
              "correctLetter": "A",
              "correctText": "repeatedly",
              "analysis": "The adverb 'repeatedly' is required to modify the passive verb construction 'was reported'.",
              "strategy": "Word form: auxiliary verb + adverb + past participle (was repeatedly reported)."
            },
            {
              "stem": "________ the runway visual range dropped below three hundred meters, the tower controller initiated Low Visibility Procedures.",
              "options": [
                {
                  "letter": "A",
                  "text": "As soon as"
                },
                {
                  "letter": "B",
                  "text": "Due to"
                },
                {
                  "letter": "C",
                  "text": "Because of"
                },
                {
                  "letter": "D",
                  "text": "In spite of"
                }
              ],
              "correctLetter": "A",
              "correctText": "As soon as",
              "analysis": "'As soon as' functions as a subordinating conjunction introducing a condition/time clause that triggers the main action.",
              "strategy": "Time conjunction: As soon as + [clause], [main clause]."
            },
            {
              "stem": "Airliners operating in sub-zero cloud layers must activate anti-icing systems to prevent ice from ________ on the wings.",
              "options": [
                {
                  "letter": "A",
                  "text": "accumulating"
                },
                {
                  "letter": "B",
                  "text": "accumulate"
                },
                {
                  "letter": "C",
                  "text": "accumulation"
                },
                {
                  "letter": "D",
                  "text": "accumulates"
                }
              ],
              "correctLetter": "A",
              "correctText": "accumulating",
              "analysis": "The preposition 'from' requires a gerund (-ing form) when indicating prevention: prevent [noun] from + [V-ing].",
              "strategy": "Prepositional syntax: prevent X from doing Y requires the gerund accumulating."
            },
            {
              "stem": "Had the pilots detected the microburst earlier, they ________ executed an immediate go-around at full take-off thrust.",
              "options": [
                {
                  "letter": "A",
                  "text": "would have"
                },
                {
                  "letter": "B",
                  "text": "will have"
                },
                {
                  "letter": "C",
                  "text": "would"
                },
                {
                  "letter": "D",
                  "text": "have"
                }
              ],
              "correctLetter": "A",
              "correctText": "would have",
              "analysis": "Third conditional with inversion: 'Had the pilots detected...' is completed by 'would have + past participle'.",
              "strategy": "Inverted third conditional: Had + S + V3 ..., S + would have + V3."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Meteorology & Severe Weather Impacts on Aviation Operations",
            "subtitle": "Atmospheric Hazards, Convective Storms, Icing, Microbursts & Landmark Weather Accident Case Studies",
            "image": "images/aas_m3card2.jpg"
          },
          "openingSession": {
            "title": "Activity 1: Aviation Weather Briefing & Meteorological Warm-Up (10 mins)",
            "summary": "Review current convective storm advisories, satellite imagery, and complete a 5-question baseline meteorological diagnostic.",
            "modeBadges": [
              "Plenary",
              "Opening Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Examine recent aviation weather headlines detailing severe clear-air turbulence encounters, winter freezing fog disruptions, and volcanic ash plume tracking.",
              "In plenary, discuss: 'Why is clear air turbulence (CAT) significantly more dangerous for passengers and flight attendants than thunderstorm turbulence?'",
              "Complete the 5-question spot-check individually, then reveal the answer keys to audit your meteorological knowledge."
            ],
            "deliverable": "Completed 5-question weather quick check and 2-minute oral analysis of a current weather advisory.",
            "teacherNotes": "Set an operational meteorology focus. Emphasize that weather accounts for over 70% of en-route flight delays in European and North American airspace.",
            "newsPrompts": [
              "Transpacific flight encounters severe unforecast clear air turbulence at FL380, diverting to Tokyo-Narita with cabin crew injuries.",
              "Heavy freezing rain and supercooled drizzle at Frankfurt Airport grounds over 400 flights due to runway icing and de-icing queue overload.",
              "Volcanic ash eruption in Iceland prompts European Volcanic Ash Advisory Center (VAAC) to issue safety warning zones across North Atlantic tracks."
            ],
            "diagnostic": {
              "title": "Aviation Meteorology & Weather Hazards Quick Check",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the primary physical characteristic of a microburst that makes it so dangerous on landing?",
                  "answer": "A microburst creates a rapid transition: first a sudden headwind that increases lift, followed immediately by a downdraft and a devastating tailwind that causes severe lift loss and rapid descent into the ground."
                },
                {
                  "id": 2,
                  "q": "What is the difference between rime ice and clear ice on an aircraft airframe?",
                  "answer": "Rime ice is rough, milky, and opaque, formed by small supercooled droplets freezing instantly on impact. Clear ice is smooth, dense, and transparent, formed by large droplets flowing back across the wing before freezing, severely altering airfoil lift."
                },
                {
                  "id": 3,
                  "q": "What does the abbreviation RVR represent, and when is it reported in a METAR?",
                  "answer": "Runway Visual Range: the horizontal distance a pilot can see along the runway centerline. It is reported when prevailing visibility falls below 1,500 meters."
                },
                {
                  "id": 4,
                  "q": "Why is volcanic ash catastrophic for jet turbine engines?",
                  "answer": "Volcanic ash consists of fine abrasive silica minerals that melt at jet engine operating temperatures (~1,100°C), coating turbine blades in fused molten glass, choking air cooling holes, and causing flameout."
                },
                {
                  "id": 5,
                  "q": "What is the difference between a METAR and a TAF?",
                  "answer": "A METAR is a routine observation report of actual current weather at an airport. A TAF is a forecast of expected future weather conditions over a 24- to 30-hour period."
                }
              ]
            }
          },
          "weatherPhenomenaLexis": {
            "title": "Activity 2: Severe Atmospheric Phenomena & Flight Impacts (20 mins)",
            "summary": "Master specialized meteorological terminology, aerodynamic degradation mechanisms, and pilot avoidance maneuvers.",
            "modeBadges": [
              "Pairs",
              "Meteorological Vocabulary",
              "20 Mins"
            ],
            "instructions": [
              "In pairs, analyze the 18 specialized aviation weather terms, phonetic pronunciations, and operational definitions.",
              "Match each weather phenomenon with its direct operational consequence (e.g., loss of lift, loss of instrumentation, flameout, runway closure).",
              "Formulate 3 complex spoken sentences using cause-and-effect connectors to explain how pilots and dispatchers mitigate these risks."
            ],
            "deliverable": "Aviation hazard classification grid linking atmospheric phenomena to aerodynamic consequences and pilot responses.",
            "teacherNotes": "Focus on syllable stress in multi-syllabic meteorological terms: 'cu-mu-lo-NIM-bus', 'MI-cro-burst', 'tur-bu-LENCE', and 'su-per-COOLED'.",
            "phenomena": [
              {
                "term": "Microburst & Windshear",
                "risk": "Loss of airspeed & altitude on short final",
                "mitigation": "Predictive windshear radar, TOGA thrust, maintain pitch attitude."
              },
              {
                "term": "Supercooled Large Droplets (SLD)",
                "risk": "Severe clear icing behind de-icing boots",
                "mitigation": "Immediate exit from freezing layer, climb/descend into warmer air."
              },
              {
                "term": "Pitot-Static Tube Icing",
                "risk": "Unreliable airspeed indication & loss of autopilot",
                "mitigation": "Pitot heat activation, fly pitch and power tables (unreliable airspeed memory item)."
              },
              {
                "term": "Clear Air Turbulence (CAT)",
                "risk": "Cabin structural damage & passenger injuries",
                "mitigation": "Mandatory seatbelt sign, pilot weather reports (PIREPs), speed reduction to turbulence penetration speed (VRA)."
              },
              {
                "term": "Volcanic Ash Cloud",
                "risk": "Multi-engine flameout & cockpit windshield opacity",
                "mitigation": "VAAC advisory tracking, 180-degree turn out of ash, autothrottle disconnect, restart APU."
              },
              {
                "term": "Freezing Fog & Low RVR",
                "risk": "Loss of visual runway guidance & runway excursion",
                "mitigation": "Category III autoland, Low Visibility Procedures (LVP), runway guard lights."
              }
            ]
          },
          "weatherBriefingClinic": {
            "title": "Activity 3: Language Focus: Decoding METAR, TAF & SIGMET Advisories (20 mins)",
            "summary": "Interactive translation and interpretation of real-world coded aviation weather reports for dispatchers and pilots.",
            "modeBadges": [
              "Individual",
              "Language Focus",
              "20 Mins"
            ],
            "instructions": [
              "Study the 3 real-world operational weather strings provided below (METAR, TAF, and Convective SIGMET).",
              "Decode all elements: surface wind direction/speed/gusts, visibility, runway visual range, present weather descriptors, cloud coverage, temperature/dewpoint, and altimeter setting.",
              "Translate the raw strings into clear, fluent spoken English as if delivering a pre-flight weather briefing to your First Officer."
            ],
            "deliverable": "Decoded natural-language weather briefing for flight crew and dispatchers from 3 real-world METAR/TAF strings.",
            "teacherNotes": "Drill standard ICAO weather abbreviations: '+TSRA' (heavy thunderstorm with rain), 'BKN012CB' (broken cumulonimbus at 1,200 ft), 'RVR R27R/0350V0500D' (runway visual range variable between 350m and 500m with downward trend).",
            "weatherReports": [
              {
                "type": "METAR LFBO (Toulouse-Blagnac)",
                "raw": "LFBO 281430Z 29018G32KT 250V330 3000 +TSRA BKN015CB OVC035 17/15 Q1006 TEMPO 1200 +TSRAGR",
                "decoded": "Toulouse on the 28th at 14:30 UTC: Wind 290 degrees at 18 knots with gusts up to 32 knots, varying between 250 and 330 degrees. Visibility 3,000 meters in heavy thunderstorm with rain. Broken cumulonimbus clouds at 1,500 feet, overcast at 3,500 feet. Temperature 17°C, dew point 15°C. QNH 1006 hPa. Temporary deterioration to 1,200 meters visibility in heavy thunderstorm with hail."
              },
              {
                "type": "TAF EGLL (London Heathrow)",
                "raw": "EGLL 281100Z 2812/2918 24015KT 9999 BKN025 BECMG 2818/2821 21008KT 4000 BR SCT008 PROB40 TEMPO 2822/2906 0500 FG FZFG VV001",
                "decoded": "Heathrow forecast valid from 12:00 UTC on the 28th to 18:00 UTC on the 29th: Wind 240 at 15 knots, visibility 10 km or more, broken clouds at 2,500 feet. Becoming between 18:00 and 21:00 UTC wind 210 at 8 knots, visibility 4,000 meters in mist, scattered clouds at 800 feet. 40% probability between 22:00 and 06:00 UTC of temporary visibility 500 meters in freezing fog, vertical visibility 100 feet."
              },
              {
                "type": "CONVECTIVE SIGMET (Paris FIR)",
                "raw": "LFFF SIGMET 04 VALID 281400/281800 LFPW- LFFF PARIS FIR/UIR SEV TS FCST WI N4900 W00100 - N4830 E00230 - N4700 E00100 - N4730 W00130 TOP FL420 MOV ENE 25KT NC=",
                "decoded": "Paris FIR Significant Meteorological Information: Severe thunderstorms forecast within the designated geographic polygon, cloud tops up to Flight Level 420 (42,000 feet), moving east-northeast at 25 knots, with no change in intensity."
              }
            ]
          },
          "weatherCaseStudiesSprint": {
            "title": "Activity 4: 15-Minute Group Research Sprint: Landmark Weather Case Studies (15 mins)",
            "summary": "Small-group rapid research analyzing Delta 191 (DFW microburst) or BA 009 (volcanic ash ingestion), extracting safety fixes and crew actions.",
            "modeBadges": [
              "Small Groups (3-4)",
              "15-Min Sprint",
              "15 Mins"
            ],
            "instructions": [
              "In small groups of 3-4, select one of the 2 landmark weather case studies below.",
              "You have exactly 15 minutes to research and outline your 5-minute technical briefing.",
              "Identify: (1) Atmospheric triggering mechanism, (2) Cockpit instrument cues and sensory illusions, (3) Flight crew decision points, and (4) The permanent regulatory or technological safety fix that resulted."
            ],
            "deliverable": "Structured 5-minute accident briefing notes highlighting atmospheric mechanism, crew recognition, and resulting technological safety mandate.",
            "teacherNotes": "Strictly enforce the 15-minute countdown clock. Emphasize that Delta 191 gave birth to modern airborne windshear radar, while BA 009 created global Volcanic Ash Advisory Centers (VAAC).",
            "caseStudies": [
              {
                "id": 1,
                "title": "Delta Air Lines Flight 191 (August 2, 1985 • DFW Airport)",
                "aircraft": "Lockheed L-1011 TriStar (N726DA)",
                "weather": "Severe isolated microburst generating 54-knot windshear and 2,000 ft/min downdraft on short final into runway 17L.",
                "investigation": "The aircraft entered an intense rain shaft at 800 feet. Indicated airspeed jumped by 26 knots (headwind), prompting thrust reduction, immediately followed by a 44-knot loss of airspeed and violent downdraft. The aircraft touched down in a field short of the runway and struck highway water tanks.",
                "safetyOutcome": "Mandated Terminal Doppler Weather Radar (TDWR) at all major US airports, mandatory predictive airborne windshear detection on transport airliners, and flight simulator windshear recovery training."
              },
              {
                "id": 2,
                "title": "British Airways Flight 009 (June 24, 1982 • 'Jakarta Incident')",
                "aircraft": "Boeing 747-200 (City of Edinburgh)",
                "weather": "Unforecast airborne plume of abrasive dry volcanic ash ejected by Mount Galunggung at FL370.",
                "investigation": "The crew observed St. Elmo's fire on the windscreen and sulfurous smoke in the cabin. Ash sandblasted the cockpit windows opaque and clogged engine air intakes, causing all four Rolls-Royce RB211 engines to flame out simultaneously. The crew glided for 13 minutes, safely restarting three engines after exiting the ash cloud.",
                "safetyOutcome": "Established nine ICAO Volcanic Ash Advisory Centers (VAAC) worldwide, prohibited flight through known volcanic ash clouds, and created emergency volcanic ash descent procedures."
              }
            ]
          },
          "weatherDiversionSimulation": {
            "title": "Activity 5: Severe Weather En-Route & Terminal Diversion Simulation (45 mins)",
            "summary": "Flight crew and dispatcher teams reroute aircraft around a massive squall line with fuel reserve calculations and ATC coordination.",
            "modeBadges": [
              "Teams (3-4)",
              "Operations Simulation",
              "45 Mins"
            ],
            "instructions": [
              "In teams of 3-4, assume the roles of Airline Flight Dispatchers and Cockpit Crew for flight AF7842 (Toulouse to Brussels).",
              "Cruising at FL340, your airborne radar displays an active squall line stretching across northern France with embedded CB cells reaching FL430. Your destination (EBBR) has just issued a SPECI reporting runway closure due to flash flooding and windshear.",
              "Evaluate fuel reserves (contingency fuel: 15 mins, alternate fuel: 45 mins, final reserve: 30 mins). Choose the safest diversion alternate: Paris-CDG (busy, holding required), Lille (short runway, marginal weather), or Cologne (clear weather, 40 mins flight time).",
              "Deliver a 3-minute Captain's operational announcement and communicate diversion request to Eurocontrol ATC."
            ],
            "deliverable": "Spoken 3-minute operational rerouting plan presented to Air Traffic Control with full weather justification.",
            "teacherNotes": "Emphasize minimum fuel vs. fuel emergency declarations. If pilots anticipate landing with less than final reserve fuel (30 minutes), they MUST declare MAYDAY MAYDAY MAYDAY FUEL.",
            "simulationParameters": {
              "flight": "AF7842 (Airbus A320)",
              "route": "Toulouse (LFBO) to Brussels (EBBR)",
              "fuelOnBoard": "4,200 kg (Remaining endurance: 1 hr 45 min)",
              "destinationStatus": "EBBR Closed - Wind 320/28G45KT, Standing Water on Runway, LLWS Alert",
              "alternates": [
                {
                  "airport": "Paris-CDG (LFPG)",
                  "dist": "180 NM / 28 mins",
                  "weather": "BKN008 3000 BR, 30-min holding expected",
                  "fuelReq": "1,400 kg"
                },
                {
                  "airport": "Cologne (EDDK)",
                  "dist": "240 NM / 38 mins",
                  "weather": "CAVOK, Wind 260/12KT, Runway Dry",
                  "fuelReq": "1,850 kg"
                },
                {
                  "airport": "Lille (LFQQ)",
                  "dist": "140 NM / 22 mins",
                  "weather": "FEW015, Wind 280/15G25KT, Single Runway",
                  "fuelReq": "1,150 kg"
                }
              ]
            }
          },
          "closingReview": {
            "title": "Activity 6: Meteorology Consolidation & Pronunciation Wrap-Up (10 mins)",
            "summary": "Consolidate the 18 meteorological terms, conduct syllable stress drills, and prepare for Session 3 Safety vs. Security.",
            "modeBadges": [
              "Plenary",
              "Consolidation",
              "10 Mins"
            ],
            "instructions": [
              "Conduct rhythmic syllable stress drills on complex meteorological terms.",
              "Review key takeaways from the Delta 191 and BA 009 case studies.",
              "Verify completion of the METAR decoding exercises and access the Revision tab."
            ],
            "deliverable": "Pronunciation self-audit on 18 meteorological terms and confirmed prep for Session 3 Safety vs. Security.",
            "teacherNotes": "Ensure students can clearly explain the distinct hazard mechanisms of microbursts (wind change) vs. icing (shape change).",
            "pronunciationFocus": [
              "cu-mu-lo-NIM-bus",
              "MI-cro-burst",
              "su-per-COOLED",
              "tur-bu-LENCE",
              "vol-CA-nic"
            ],
            "checkpoints": [
              "Mastered 18 specialized aviation meteorology terms",
              "Decoded operational METAR, TAF, and SIGMET reports",
              "Explained microburst windshear and structural icing physics",
              "Analyzed Delta 191 & BA 009 landmark safety outcomes"
            ]
          }
        }
      },
      "3": {
        "session": 3,
        "objectives": {
          "title": "Session 3 - Aviation Safety vs. Security: Airport Protection & Aircraft Checks Objectives",
          "summary": "By the end of this session, you will be able to articulate the fundamental legal, operational, and literal distinction between Aviation Safety and Aviation Security, analyze the concentric security layers of international airports, conduct and explain a pre-flight exterior walkaround safety inspection, apply Minimum Equipment List (MEL) deferral rules, and lead a coordinated response to a dual-track safety and security incident.",
          "items": [
            {
              "num": 1,
              "title": "Distinguish Aviation Safety vs. Aviation Security (Legal & Literal Definitions)",
              "description": "Clearly define and contrast Aviation Safety (preventing unintended hazards, mechanical failures, human error under ICAO Annex 19) and Aviation Security (preventing deliberate malicious acts, unlawful interference, terrorism under ICAO Annex 17)."
            },
            {
              "num": 2,
              "title": "Analyze Airport Security Architecture (Landside to Airside)",
              "description": "Trace the physical security barriers and screening technologies protecting civil aviation: passenger millimeter-wave body scanners, Explosive Detection Systems (EDS), CT hold baggage inspection, biometric e-gates, and airside SIDA access controls."
            },
            {
              "num": 3,
              "title": "Execute Pre-Flight Aircraft Safety Inspections (The Walkaround)",
              "description": "Follow the standardized clockwise walkaround inspection around a commercial transport airframe, verifying gear pins, pitot covers, tire wear, brake indicators, control surface locks, and static wicks."
            },
            {
              "num": 4,
              "title": "Apply Minimum Equipment List (MEL) Dispatch Criteria",
              "description": "Determine whether an aircraft can legally depart with inoperative components according to MEL Category A, B, C, and D rectification intervals and operational restrictions."
            },
            {
              "num": 5,
              "title": "Manage a Dual-Track Safety and Security Incident",
              "description": "Coordinate emergency response during a high-stakes simulation combining an unauthorized airside perimeter breach with a simultaneous technical landing gear emergency."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 3 Lesson Plan: Safety vs. Security (2 Hours)",
          "summary": "A 120-minute operational syllabus combining warm-up security warm-ups, safety vs. security conceptual matrix, airport screening architecture, pre-flight walkaround clinic, and dual-track emergency simulation.",
          "items": [
            {
              "time": "00-10",
              "title": "Activity 1: Safety & Security News & Quick Check (10 mins)",
              "description": "Plenary opening discussing recent airport security breaches, CT baggage scanner rules, and completing a 5-question baseline diagnostic."
            },
            {
              "time": "10-30",
              "title": "Activity 2: The Literal & Operational Distinction: Safety vs. Security (20 mins)",
              "description": "Paired analysis of 18 technical terms and establishing the strict legal boundary between ICAO Annex 17 (Security) and Annex 19 (Safety)."
            },
            {
              "time": "30-50",
              "title": "Activity 3: Airport Security Architecture: Landside to Airside (20 mins)",
              "description": "Detailed examination of passenger and baggage screening workflows, millimeter-wave scanners, CT tomography, and sterile area protection."
            },
            {
              "time": "50-75",
              "title": "Activity 4: Aircraft Security Search & Pre-Flight Sterile Checks (25 mins)",
              "description": "Interactive cabin security sweep workshop identifying unattended baggage, tamper-evident seals, and spoken security sign-off to the Captain."
            },
            {
              "time": "75-110",
              "title": "Activity 5: Dual-Track Safety & Security Crisis Scenario (35 mins)",
              "description": "Multi-agency emergency simulation coordinating response between Airport Police, ARFF fire services, and ATC for a perimeter breach and hydraulic emergency."
            },
            {
              "time": "110-120",
              "title": "Activity 6: Safety vs. Security Wrap-Up & FE3 Preview (10 mins)",
              "description": "Consolidation checkpoints, pronunciation audit, and introduction to Session 4 Global Review and Session 5 FE3."
            }
          ]
        },
        "revision": {
          "title": "Session 3 Technical Vocabulary & Flashcards",
          "summary": "Master the 18 essential technical terms and phraseology for aviation safety management, airport security layers, and airframe inspections.",
          "terms": [
            {
              "num": "01",
              "term": "aviation safety",
              "phonetic": "/ˌeɪ.viˈeɪ.ʃən ˈseɪf.ti/",
              "pos": "noun phrase",
              "definition": "The state in which risks associated with aviation activities relating to or in direct support of the operation of aircraft are reduced and controlled to an acceptable level (protecting against unintended hazards, failures, and errors).",
              "example": "Aviation safety engineering focuses on redundant flight control computers and fail-safe hydraulic circuits."
            },
            {
              "num": "02",
              "term": "aviation security",
              "phonetic": "/ˌeɪ.viˈeɪ.ʃən sɪˈkjʊə.rə.ti/",
              "pos": "noun phrase",
              "definition": "A combination of measures and human and material resources intended to safeguard international civil aviation against acts of unlawful interference, terrorism, sabotage, and crime.",
              "example": "Airport perimeter motion sensors and hold baggage CT screening are core elements of aviation security."
            },
            {
              "num": "03",
              "term": "unlawful interference",
              "phonetic": "/ʌnˈlɔː.fəl ˌɪn.təˈfɪə.rəns/",
              "pos": "noun phrase",
              "definition": "Acts or attempted acts jeopardizing the safety of civil aviation, including aircraft hijacking, sabotage, hostage-taking, or introducing weapons into sterile zones.",
              "example": "ICAO Annex 17 establishes mandatory global standards to prevent acts of unlawful interference against civil aviation."
            },
            {
              "num": "04",
              "term": "airworthiness",
              "phonetic": "/ˈeəˌwɜː.ði.nəs/",
              "pos": "noun",
              "definition": "The measure of an aircraft's suitability for safe flight according to approved engineering designs, maintenance standards, and regulatory limits.",
              "example": "Following engine replacement, licensed maintenance technicians issued a Certificate of Airworthiness before commercial service."
            },
            {
              "num": "05",
              "term": "redundancy",
              "phonetic": "/rɪˈdʌn.dən.si/",
              "pos": "noun",
              "definition": "The duplication of critical components or functions of a system with the intention of increasing reliability and preventing single-point failure.",
              "example": "Triple hydraulic system redundancy ensures the crew maintains control even if two independent circuits fail."
            },
            {
              "num": "06",
              "term": "sterile concourse",
              "phonetic": "/ˈster.aɪl ˈkɒŋ.kɔːs/",
              "pos": "noun phrase",
              "definition": "The secure area of an airport terminal beyond passenger screening checkpoints accessible only to screened passengers and badged personnel.",
              "example": "Once passengers pass through security screening, they enter the sterile concourse leading to the departure gates."
            },
            {
              "num": "07",
              "term": "landside",
              "phonetic": "/ˈlænd.saɪd/",
              "pos": "noun",
              "definition": "The unrestricted public areas of an airport terminal before security screening, including check-in desks, arrivals halls, and public roadways.",
              "example": "Airport armed police patrols maintain visible deterrent positions throughout the crowded landside ticketing hall."
            },
            {
              "num": "08",
              "term": "airside",
              "phonetic": "/ˈeə.saɪd/",
              "pos": "noun",
              "definition": "The restricted movement area of an airport, adjacent terrain and buildings, access to which is strictly controlled by security badges.",
              "example": "All ground support vehicles entering airside ramps must pass through automated license plate and security gate checkpoints."
            },
            {
              "num": "09",
              "term": "perimeter security",
              "phonetic": "/pəˈrɪm.ɪ.tər sɪˈkjʊə.rə.ti/",
              "pos": "noun phrase",
              "definition": "Physical barriers, fences, CCTV surveillance, and infrared sensors deployed along the external boundaries of an aerodrome.",
              "example": "Fiber-optic vibration sensors mounted on the perimeter fence alerted security to an attempted trespasser."
            },
            {
              "num": "10",
              "term": "access control",
              "phonetic": "/ˈæk.ses kənˈtrəʊl/",
              "pos": "noun phrase",
              "definition": "The selective restriction of access to restricted airport zones, enforced via biometric recognition, smart cards, and physical gates.",
              "example": "Mechanics must swipe biometric SIDA cards through electronic access control turnstiles to enter maintenance hangars."
            },
            {
              "num": "11",
              "term": "millimeter-wave body scanner",
              "phonetic": "/ˈmɪl.ɪˌmiː.tər weɪv ˈbɒd.i ˈskæn.ər/",
              "pos": "noun phrase",
              "definition": "An advanced imaging security device that uses low-energy radio waves to detect metallic and non-metallic objects concealed under clothing.",
              "example": "Passengers step into the millimeter-wave scanner, which generates an anonymous generic stick-figure display to preserve privacy."
            },
            {
              "num": "12",
              "term": "Explosive Detection System (EDS)",
              "phonetic": "/ɪkˈspləʊ.sɪv dɪˈtek.ʃən ˈsɪs.təm/",
              "pos": "noun phrase",
              "definition": "Automated computerized tomography (CT) equipment that analyzes the density and atomic number of checked baggage to identify explosives.",
              "example": "Modern computed tomography EDS scanners allow passengers to leave liquids and laptops inside carry-on luggage."
            },
            {
              "num": "13",
              "term": "behavioral detection",
              "phonetic": "/bɪˈheɪ.vjər.əl dɪˈtek.ʃən/",
              "pos": "noun phrase",
              "definition": "The systematic observation of physiological and behavioral indicators (anxiety, incongruent micro-expressions) to identify persons of interest.",
              "example": "Trained behavioral detection officers observed a traveler exhibiting severe acute autonomic stress indicators at the check-in queue."
            },
            {
              "num": "14",
              "term": "Minimum Equipment List (MEL)",
              "phonetic": "/ˈmɪn.ɪ.məm ɪˈkwɪp.mənt lɪst/",
              "pos": "noun phrase",
              "definition": "A regulatory document specific to an aircraft model allowing operation with specified inoperative instruments or systems under defined conditions.",
              "example": "According to the airline's MEL, the aircraft was dispatched with one auxiliary power unit (APU) generator inoperative."
            },
            {
              "num": "15",
              "term": "walkaround inspection",
              "phonetic": "/ˈwɔːk.əˌraʊnd ɪnˈspek.ʃən/",
              "pos": "noun phrase",
              "definition": "The physical visual inspection of the aircraft's exterior performed by the flight crew or maintenance technician prior to every departure.",
              "example": "During the pre-flight walkaround, the First Officer checked that the landing gear ground safety pins had been removed."
            },
            {
              "num": "16",
              "term": "Airworthiness Directive (AD)",
              "phonetic": "/ˈeəˌwɜː.ði.nəs dɪˈrek.tɪv/",
              "pos": "noun phrase",
              "definition": "A legally enforceable regulation issued by an aviation authority (FAA/EASA) to correct an unsafe condition identified in an aircraft model.",
              "example": "EASA issued an emergency Airworthiness Directive mandating ultrasonic inspection of titanium engine fan blades."
            },
            {
              "num": "17",
              "term": "Foreign Object Debris (FOD)",
              "phonetic": "/ˈfɒr.ən ˈɒb.dʒekt ˈdeb.riː/",
              "pos": "noun phrase",
              "definition": "Any stray object, particle, metal fastener, or biological debris on the runway or apron that could damage an aircraft or engine.",
              "example": "Daily sweepers patrol the tarmac to collect FOD that could be sucked into turbofan jet engines during taxi."
            },
            {
              "num": "18",
              "term": "sabotage",
              "phonetic": "/ˈsæb.ə.tɑːʒ/",
              "pos": "noun",
              "definition": "Deliberate destruction or damage of an aircraft, airport facility, or navigational aid to obstruct operations or cause casualties.",
              "example": "Airport perimeter patrols and CCTV coverage are designed to detect and thwart any attempted sabotage of aviation fuel tanks."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Aviation Safety vs. Security: Legal Jurisdictions & Standards",
              "watchUrl": "https://www.youtube.com/watch?v=VjmMXB1y3mY",
              "tag": "Regulatory Framework",
              "videoId": "VjmMXB1y3mY",
              "embedUrl": "https://www.youtube-nocookie.com/embed/VjmMXB1y3mY",
              "caption": "Focus: Distinguish unintentional hazards governed by ICAO Annex 19 (Safety Management Systems) from intentional unlawful acts governed by Annex 17 (Security)."
            },
            {
              "title": "Video 2: Modern Airport Security Architecture: CT Scanners & Baggage Screening",
              "watchUrl": "https://www.youtube.com/watch?v=yl3CMDBBsSE",
              "tag": "Airport Security",
              "videoId": "yl3CMDBBsSE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/yl3CMDBBsSE",
              "caption": "Focus: 3D Computed Tomography (CT) baggage screening: volumetric explosive detection, rotating X-ray gantry, automated tray return systems, and passenger throughput."
            },
            {
              "title": "Video 3: Commercial Pilot Pre-Flight Walkaround Inspection Guide",
              "watchUrl": "https://www.youtube.com/watch?v=tOwE_eQY_uE",
              "tag": "Flight Operations",
              "videoId": "tOwE_eQY_uE",
              "embedUrl": "https://www.youtube-nocookie.com/embed/tOwE_eQY_uE",
              "caption": "Focus: Captain Joe performs an exterior walkaround inspection on an Airbus A320: radome, pitot probes, angle of attack sensors, landing gear pins, and control surfaces."
            }
          ],
          "resources": [
            {
              "url": "https://www.icao.int",
              "tag": "01 • Security Standard",
              "name": "ICAO Annex 17: Aviation Security Standards",
              "desc": "Official international convention governing the safeguarding of civil aviation against acts of unlawful interference."
            },
            {
              "url": "https://www.icao.int",
              "tag": "02 • Safety Management",
              "name": "ICAO Annex 19: Safety Management Systems (SMS)",
              "desc": "International framework establishing state safety programs, hazard identification, and safety risk management."
            },
            {
              "url": "https://www.easa.europa.eu",
              "tag": "03 • Airworthiness Rules",
              "name": "EASA Part-M & Part-145 Maintenance Regulations",
              "desc": "European standards for continuing airworthiness management, maintenance organization approvals, and pre-flight inspections."
            },
            {
              "url": "https://www.tsa.gov",
              "tag": "04 • Security Screening",
              "name": "TSA Checkpoint Technology & Screening Standards",
              "desc": "Technical specifications for millimeter-wave passenger scanners, computed tomography (CT) baggage machines, and explosive trace detection."
            },
            {
              "url": "https://www.faa.gov",
              "tag": "05 • Dispatch Rules",
              "name": "FAA Master Minimum Equipment List (MMEL) Database",
              "desc": "Searchable regulatory database listing inoperative equipment dispatch conditions and repair intervals for all commercial aircraft."
            },
            {
              "url": "https://www.iata.org",
              "tag": "06 • Industry Security",
              "name": "IATA Security Management System (SeMS) Manual",
              "desc": "Industry manual helping airlines and airports integrate security risk assessments into day-to-day ground and flight operations."
            }
          ],
          "pageUrl": "session3/admat_aas2.html",
          "articles": [
            {
              "topic": "International Civil Aviation Review",
              "sourceTag": "Regulatory Comparative Analysis",
              "heading": "Safety vs. Security: Legal Jurisdictions and Operational Parity under ICAO",
              "snippet": "In-depth comparative study demonstrating why mixing Safety and Security confuses legal accountability: Safety addresses unintended technical and human hazards (Annex 19), whereas Security defends against intentional malicious criminal acts (Annex 17).",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.icao.int"
            },
            {
              "topic": "AeroTech Maintenance & Engineering",
              "sourceTag": "Airworthiness Digest",
              "heading": "The Pre-Flight Walkaround: Anatomy of a Critical Line Inspection",
              "snippet": "Line maintenance engineers break down the high-risk failure modes identified during exterior walkarounds: pitot probe protective covers left installed, nose gear steering pins unremoved, and unnoticed tailstrike scrapes.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.easa.europa.eu"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "Airport security personnel are trained to identify prohibited items ________ baggage passes through the computed tomography scanner.",
              "options": [
                {
                  "letter": "A",
                  "text": "as"
                },
                {
                  "letter": "B",
                  "text": "despite"
                },
                {
                  "letter": "C",
                  "text": "unless"
                },
                {
                  "letter": "D",
                  "text": "because of"
                }
              ],
              "correctLetter": "A",
              "correctText": "as",
              "analysis": "Conjunction 'as' denotes simultaneous progression: as baggage passes through the scanner, officers identify items.",
              "strategy": "Simultaneous conjunction: as + [subject + verb clause]."
            },
            {
              "stem": "The aircraft was cleared for departure ________ one non-essential cabin galley heating element was inoperative.",
              "options": [
                {
                  "letter": "A",
                  "text": "even though"
                },
                {
                  "letter": "B",
                  "text": "in spite of"
                },
                {
                  "letter": "C",
                  "text": "because"
                },
                {
                  "letter": "D",
                  "text": "due to"
                }
              ],
              "correctLetter": "A",
              "correctText": "even though",
              "analysis": "Concessive conjunction 'even though' is followed by a full clause ('one element was inoperative') to contrast with clearance.",
              "strategy": "Concession structure: even though + [clause] introduces a permitted exception under MEL rules."
            },
            {
              "stem": "The First Officer conducted the exterior walkaround inspection ________ verify that all landing gear safety pins were removed.",
              "options": [
                {
                  "letter": "A",
                  "text": "to"
                },
                {
                  "letter": "B",
                  "text": "for"
                },
                {
                  "letter": "C",
                  "text": "so"
                },
                {
                  "letter": "D",
                  "text": "that"
                }
              ],
              "correctLetter": "A",
              "correctText": "to",
              "analysis": "The infinitive of purpose 'to verify' expresses the objective of conducting the exterior inspection.",
              "strategy": "Purpose infinitive: to + base verb (to verify)."
            },
            {
              "stem": "Ground crew vehicles operating airside must undergo ________ mechanical inspections every six months.",
              "options": [
                {
                  "letter": "A",
                  "text": "rigorous"
                },
                {
                  "letter": "B",
                  "text": "rigorously"
                },
                {
                  "letter": "C",
                  "text": "rigor"
                },
                {
                  "letter": "D",
                  "text": "rigorousness"
                }
              ],
              "correctLetter": "A",
              "correctText": "rigorous",
              "analysis": "The adjective 'rigorous' is required to modify the plural noun phrase 'mechanical inspections'.",
              "strategy": "Adjective modifying noun: undergo + [adjective] + [noun]."
            },
            {
              "stem": "Neither the airport police ________ the local security guard was permitted to enter the sterile concourse without an official badge.",
              "options": [
                {
                  "letter": "A",
                  "text": "nor"
                },
                {
                  "letter": "B",
                  "text": "or"
                },
                {
                  "letter": "C",
                  "text": "and"
                },
                {
                  "letter": "D",
                  "text": "neither"
                }
              ],
              "correctLetter": "A",
              "correctText": "nor",
              "analysis": "Correlative conjunction pair: 'Neither ... nor ...' connects the two subjects.",
              "strategy": "Correlative pair: Neither X nor Y."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Aviation Safety vs. Security: Airport Protection & Aircraft Inspections",
            "subtitle": "The Fundamental Distinction Between Unintended Hazards & Malicious Acts, Airport Architecture & Pre-Flight Airworthiness Checks",
            "image": "images/aas_m3card3.jpg"
          },
          "openingSession": {
            "title": "Activity 1: Safety & Security News & Quick Check (10 mins)",
            "summary": "Review recent aviation security incidents, airworthiness directives, and complete a 5-question baseline diagnostic.",
            "modeBadges": [
              "Plenary",
              "Opening Warm-Up",
              "10 Mins"
            ],
            "instructions": [
              "Examine recent aviation headlines detailing airport perimeter intrusions, updated computed tomography (CT) baggage rules, and emergency airworthiness directives.",
              "In plenary, discuss: 'Why do civil aviation authorities maintain completely separate government departments for Safety (DGAC/FAA Safety) and Security (Police aux Frontières / TSA)?'",
              "Complete the 5-question quick check individually, then reveal the answer keys to audit your understanding of safety vs. security."
            ],
            "deliverable": "Completed 5-question safety vs. security quick check and 2-minute news debrief.",
            "teacherNotes": "Set a clear analytical tone. Emphasize that in French, both concepts are often translated as 'sécurité' (sécurité des vols vs. sûreté), which causes persistent confusion in international aviation.",
            "newsPrompts": [
              "European airports accelerate deployment of 3D CT baggage scanners, phasing out the 100ml liquid limitation for carry-on luggage.",
              "FAA issues Emergency Airworthiness Directive mandating immediate visual and eddy-current inspections of door plug retention pins.",
              "Trespasser breaching outer perimeter fence at major international hub triggers immediate runway closure and full ground stop."
            ],
            "diagnostic": {
              "title": "Aviation Safety vs. Security Quick Check",
              "questions": [
                {
                  "id": 1,
                  "q": "What is the core literal distinction between Aviation Safety and Aviation Security?",
                  "answer": "Safety protects against unintentional hazards, mechanical failures, environmental factors, and human errors (ICAO Annex 19). Security protects against intentional, deliberate, malicious criminal acts, unlawful interference, and terrorism (ICAO Annex 17)."
                },
                {
                  "id": 2,
                  "q": "What is the boundary dividing an airport into landside and airside?",
                  "answer": "The security access control boundary (screening checkpoint and security perimeter gates). Landside is open to the public; airside is restricted strictly to ticketed, screened passengers and vetted, badged personnel."
                },
                {
                  "id": 3,
                  "q": "What critical items must a pilot visually verify during an exterior walkaround on the landing gear?",
                  "answer": "Landing gear ground safety lockout pins removed, tire tread condition and pressure, brake wear indicator pins, absence of hydraulic fluid leaks, and strut oleo extension."
                },
                {
                  "id": 4,
                  "q": "What is a Minimum Equipment List (MEL)?",
                  "answer": "An approved document allowing an aircraft to legally operate with specific inoperative instruments or systems for a limited time, provided safety is maintained through compensating procedures."
                },
                {
                  "id": 5,
                  "q": "What is an Airworthiness Directive (AD)?",
                  "answer": "A legally binding regulation issued by a national aviation authority (FAA/EASA) requiring operators to inspect, repair, or modify an aircraft model to correct an identified unsafe condition."
                }
              ]
            }
          },
          "safetyVsSecurityLexis": {
            "title": "Activity 2: The Literal & Operational Distinction: Safety vs. Security (20 mins)",
            "summary": "Establish the clear, unambiguous distinction between Aviation Safety and Aviation Security.",
            "modeBadges": [
              "Pairs",
              "Conceptual Analysis",
              "20 Mins"
            ],
            "instructions": [
              "In pairs, analyze the detailed definition matrix comparing Safety (Sécurité Technique) and Security (Sûreté).",
              "Examine 6 real-world airport occurrences provided below. Classify each occurrence as strictly a Safety issue, strictly a Security issue, or an overlapping Dual-Domain issue.",
              "Present your classification with the specific ICAO Annex (Annex 17 for Security, Annex 19 for Safety) and explain the required immediate reporting channel."
            ],
            "deliverable": "Comparative matrix classifying 10 real-world airport occurrences under either Safety or Security jurisdiction with regulatory justification.",
            "teacherNotes": "Emphasize that confusing Safety and Security in written reports or radio transmissions can lead to the wrong emergency response agency being dispatched (e.g. sending armed anti-terrorist police to a hydraulic fire, or sending mechanics to an armed hijacker).",
            "matrix": [
              {
                "domain": "Aviation Safety (Sécurité des Vols)",
                "legalBasis": "ICAO Annex 19 / EASA Part-M & Part-145",
                "targetThreat": "Unintentional hazards: mechanical failures, component fatigue, structural cracks, weather, human error, software glitches.",
                "methods": "Redundancy, fail-safe design, preventive maintenance, Safety Management Systems (SMS), Just Culture non-punitive voluntary reporting."
              },
              {
                "domain": "Aviation Security (Sûreté Aéroportuaire)",
                "legalBasis": "ICAO Annex 17 / National Civil Aviation Security Program",
                "targetThreat": "Intentional malicious acts: terrorism, sabotage, armed hijacking, contraband, unauthorized perimeter breaches, cyberattacks.",
                "methods": "Physical barriers, armed police, millimeter-wave scanners, CT explosive detection, biometric e-gates, background checks, SIDA badges."
              }
            ]
          },
          "airportSecurityArchitecture": {
            "title": "Activity 3: Airport Security Architecture: Landside to Airside (20 mins)",
            "summary": "Detailed examination of passenger and baggage screening workflows, millimeter-wave scanners, CT tomography, and sterile area protection.",
            "modeBadges": [
              "Pairs",
              "Security Engineering",
              "20 Mins"
            ],
            "instructions": [
              "In pairs, trace the journey of an international passenger and their checked bag from terminal curbside to the aircraft cabin.",
              "Map out each concentric security barrier: (1) Landside public hall, (2) Boarding pass validation gate, (3) Central security screening checkpoint (millimeter-wave body scanner, x-ray/CT carry-on scan), (4) Sterile concourse, (5) Boarding gate identity verification.",
              "Examine the 5 levels of automated Hold Baggage Screening (HBS) using multi-slice Computed Tomography (CT) and Explosive Detection Systems (EDS)."
            ],
            "deliverable": "Annotated diagram of airport security screening workflow tracking a passenger and checked bag from curb to departure gate.",
            "teacherNotes": "Point out how modern computed tomography (CT) scanners generate 3D volumetric images that can be rotated on three axes, allowing automated threat recognition algorithms to detect liquid and plastic explosives without unpacking.",
            "screeningLayers": [
              {
                "zone": "Layer 1: Public Landside",
                "measures": "Armed security patrols, high-definition CCTV facial analytics, behavioral detection officers, blast-resistant glass terminal facades."
              },
              {
                "zone": "Layer 2: Passenger Screening Checkpoint",
                "measures": "Millimeter-wave advanced imaging scanners (detecting metallic and non-metallic objects), explosive trace detection (ETD) swabs, automated tray return systems."
              },
              {
                "zone": "Layer 3: Hold Baggage Screening (HBS)",
                "measures": "Level 1-5 multi-tiered automated CT/EDS explosive detection, automated baggage x-ray diversion lines, manual bomb disposal containment vessel."
              },
              {
                "zone": "Layer 4: Airside Access Control",
                "measures": "Biometric iris/facial recognition turnstiles, Security Identification Display Area (SIDA) badges with RFID chips, vehicle undercarriage mirrors."
              }
            ]
          },
          "aircraftSafetyChecksClinic": {
            "title": "Activity 4: Aircraft Security Search & Sterile Pre-Flight Checks (25 mins)",
            "summary": "Pre-flight security sweep workshop identifying cabin search protocols, unattended baggage, and spoken handover to the flight crew.",
            "modeBadges": [
              "Pairs",
              "Security Search Workshop",
              "25 Mins"
            ],
            "instructions": [
              "Step 1 (Security Protocols - 5 mins): Contrast safety walkarounds (checking mechanical integrity) with mandatory pre-flight cabin security sweeps (identifying unattended items and tampering).",
              "Step 2 (Security Search Scenario - 12 mins): In pairs, role-play the pre-boarding cabin security sweep between Lead Flight Attendant and Ground Security Officer: report a suspicious unlabelled item found in row 18 overhead bin.",
              "Step 3 (Spoken Security Handover - 8 mins): Deliver a standard spoken security search sign-off briefing to the Captain before passenger boarding begins."
            ],
            "deliverable": "Deliver a 90-second spoken security search briefing to the Captain confirming sterile cabin status.",
            "teacherNotes": "Emphasize that aircraft security searches are legally mandated under ICAO Annex 17 and EU regulations prior to departure to prevent prohibited articles or weapons from being left on board.",
            "walkaroundCheckpoints": [
              {
                "station": "Station 1: Flight Deck & Emergency Equipment",
                "items": "Verify reinforced flight deck door electronic strike latch functioning; cockpit escape ropes stowed and sealed; crash axe and fire extinguisher inspection tags valid; avionics bay hatch locked."
              },
              {
                "station": "Station 2: Passenger Cabin & Overhead Bins",
                "items": "Systematic sweep of overhead stowage bins for unattended items; seat pocket checks; life vest tamper-evident seals intact under all passenger seats; lavatory ceiling panels inspected."
              },
              {
                "station": "Station 3: Galleys, Trolleys & Waste Bins",
                "items": "Inspect waste bin flap seals for foreign objects; verify tamper-evident security numbered seals on catering containers and duty-free carts; galley service access panels latched."
              },
              {
                "station": "Station 4: Cargo Hold & Baggage Reconciliation",
                "items": "Ensure positive passenger-baggage reconciliation: no unaccompanied baggage loaded without authorization; hold access door perimeter seals and latches inspected."
              }
            ]
          },
          "securityThreatSimulation": {
            "title": "Activity 5: Dual-Track Safety & Security Crisis Scenario (35 mins)",
            "summary": "Multi-agency emergency simulation coordinating response between Airport Police, ARFF fire services, and ATC for a perimeter breach and hydraulic emergency.",
            "modeBadges": [
              "Teams (3-4)",
              "Incident Simulation",
              "35 Mins"
            ],
            "instructions": [
              "In teams of 3-4, assume the role of the Aerodrome Emergency Operations Center (EOC) Command Staff.",
              "Scenario: At 14:15 UTC, an unidentified vehicle crashes through an airside perimeter fence and speeds toward the passenger aprons (Security Threat). Simultaneously, an inbound widebody airliner (AF452) declares MAYDAY due to complete loss of Green hydraulic system and hot brakes on rollout, halting on runway 26L (Safety Emergency).",
              "Coordinate your emergency assets: Airport Armed Police (PAF/Gendarmerie), Airport Rescue and Fire Fighting Services (ARFF), and Air Traffic Control.",
              "Formulate a 3-minute command briefing resolving both crises simultaneously while ensuring no runway incursions by police pursuing the security vehicle."
            ],
            "deliverable": "3-minute emergency command briefing balancing security lockdown protocols with emergency runway response.",
            "teacherNotes": "Emphasize communication protocols between ATC, fire rescue, and police. ARFF vehicles must have clear, uncontaminated runway access for the safety emergency while security lockdown is maintained on the aprons.",
            "crisisParameters": {
              "securityIncident": "Stolen SUV breached gate Juliet 4, driver on foot near stand Echo 12.",
              "safetyIncident": "Airbus A350 stopped on runway 26L with smoke pouring from left main landing gear brakes (hydraulic fluid leak).",
              "challenge": "Prevent police vehicles chasing the intruder from crossing runway 26L while fire rescue vehicles are rushing to cool the overheated aircraft brakes."
            }
          },
          "closingReview": {
            "title": "Activity 6: Safety vs. Security Wrap-Up & FE3 Preview (10 mins)",
            "summary": "Consolidation checkpoints, pronunciation audit, and introduction to Session 4 Global Review and Session 5 FE3.",
            "modeBadges": [
              "Plenary",
              "Consolidation & FE3 Prep",
              "10 Mins"
            ],
            "instructions": [
              "Review the critical vocabulary and concepts of Safety vs. Security.",
              "Examine the structure of next week's Session 4 Global Semester Review & 3-Team Aviation Grand Prix Quiz.",
              "Access the Revision tab to review flashcards for Safety and Security."
            ],
            "deliverable": "Confirmed understanding of safety vs. security jurisdictions and verified prep for Session 4 Grand Prix Quiz.",
            "teacherNotes": "Congratulate students on mastering the essential legal boundary between Annex 17 and Annex 19. Motivate them for the competitive 3-team quiz in Session 4.",
            "pronunciationFocus": [
              "air-WOR-thi-ness",
              "re-DUN-dan-cy",
              "SA-bo-tage",
              "in-ter-FE-rence",
              "pe-RI-me-ter"
            ],
            "checkpoints": [
              "Articulated literal and legal difference: Safety vs. Security",
              "Traced concentric airport security layers from landside to airside",
              "Conducted exterior aircraft walkaround safety check",
              "Applied Minimum Equipment List (MEL) dispatch rules"
            ]
          }
        }
      },
      "4": {
        "session": 4,
        "objectives": {
          "title": "Session 4 - Global Semester Review & 3-Team Aviation Quiz Objectives",
          "summary": "By the end of this session, you will be able to summarize all core Semester 1 Technical English competencies across Aerodromes (Module 1), Aircraft & Aerodynamics (Module 2), and Health, Meteorology & Safety/Security (Module 3), compete successfully in a multi-round 3-team technical aviation quiz, and structure a high-scoring 10-12 minute Press Briefing on a major aviation current event for Formative Evaluation 3 (FE3).",
          "items": [
            {
              "num": 1,
              "title": "Synthesize Semester 1 Aeronautical Core Knowledge",
              "description": "Demonstrate rapid recall and precise deployment of technical vocabulary across runway markings, GSE turnaround, aerodynamic axes, engine turbofans, in-flight health, severe meteorology, and airport security."
            },
            {
              "num": 2,
              "title": "Compete in the 3-Team Aviation Grand Prix Quiz",
              "description": "Collaborate within Team Alpha, Team Bravo, or Team Charlie to solve challenging, timed multi-point technical scenarios under tournament rules."
            },
            {
              "num": 3,
              "title": "Master Spontaneous Technical Explanations (B2/C1 CEFR)",
              "description": "Defend operational choices, justify technical calculations, and explain complex aviation physics fluently without hesitation or code-switching into French."
            },
            {
              "num": 4,
              "title": "Structure the FE3 Current Events Press Briefing",
              "description": "Organize a professional 4-stage media briefing: Situation Overview, Technical Causal Analysis, Operational Measures, and Regulatory Corrective Actions."
            },
            {
              "num": 5,
              "title": "Rehearse Media Defense & Journalist Cross-Examination",
              "description": "Practice answering challenging, spontaneous questions from teachers acting as investigative aviation reporters using professional hedging and signposting."
            }
          ]
        },
        "lessonPlan": {
          "title": "Session 4 Lesson Plan: Global Review & Grand Prix Quiz (2 Hours)",
          "summary": "A 120-minute capstone tournament combining rules setup, 3 competitive quiz rounds (Aerodromes/Systems, Health/Weather, Safety/Security), the FE3 Press Briefing Masterclass, and final semester wrap-up.",
          "items": [
            {
              "time": "00-10",
              "title": "Activity 1: Semester 1 Retrospective & Competition Rules (10 mins)",
              "description": "Plenary setup, forming Team Alpha, Team Bravo, and Team Charlie, assigning team captains, and reviewing the Grand Prix scoreboard rules."
            },
            {
              "time": "10-35",
              "title": "Activity 2: Grand Prix Round 1: Aerodromes, Aircraft Anatomy & Systems (25 mins)",
              "description": "Competitive round covering Module 1 and Module 2: runway numbering, GSE turnaround, flight control surfaces, and turbofan bypass ratios."
            },
            {
              "time": "35-60",
              "title": "Activity 3: Grand Prix Round 2: Human Factors, Health & Severe Meteorology (25 mins)",
              "description": "Competitive round covering Module 3: medical triage, EASA FTL fatigue rules, METAR decoding, and microburst physics."
            },
            {
              "time": "60-85",
              "title": "Activity 4: Grand Prix Round 3: Safety vs. Security & Landmark Case Studies (25 mins)",
              "description": "Competitive round covering airport security screening, pre-flight walkaround, Delta 191/BA 009 case studies, and tournament tiebreaker."
            },
            {
              "time": "85-110",
              "title": "Activity 5: FE3 Current Events Press Briefing Masterclass (25 mins)",
              "description": "Pairs workshop preparing the 10-12 minute Press Briefing for Session 5 Formative Evaluation 3, verifying slides and Q&A strategies."
            },
            {
              "time": "110-120",
              "title": "Activity 6: Semester 1 Grand Finale & FE3 Action Plan (10 mins)",
              "description": "Podium celebration for Grand Prix champions, portfolio audit guidelines, and final encouragement for FE3."
            }
          ]
        },
        "revision": {
          "title": "Session 4 Technical Vocabulary & Flashcards",
          "summary": "Master the 18 essential technical terms and phraseology for the Semester 1 capstone review, crisis communications, and media press briefings.",
          "terms": [
            {
              "num": "01",
              "term": "airside operations",
              "phonetic": "/ˈeə.saɪd ˌɒp.ərˈeɪ.ʃənz/",
              "pos": "noun phrase",
              "definition": "The complex coordination of aircraft movements, ramp handling, fueling, and pushback tug operations within restricted aerodrome areas.",
              "example": "Airside operations staff coordinated simultaneous de-boarding, baggage unloading, and refueling during the forty-minute turnaround."
            },
            {
              "num": "02",
              "term": "thrust-to-weight ratio",
              "phonetic": "/θrʌst tuː weɪt ˈreɪ.ʃi.əʊ/",
              "pos": "noun phrase",
              "definition": "A dimensionless ratio of total engine thrust output to the total weight of the aircraft, determining climb gradient and acceleration.",
              "example": "With a high thrust-to-weight ratio, twin-engine widebodies achieve steep initial climb gradients even with one engine inoperative."
            },
            {
              "num": "03",
              "term": "angle of attack (AoA)",
              "phonetic": "/ˈæŋ.ɡəl əv əˈtæk/",
              "pos": "noun phrase",
              "definition": "The angle between the chord line of an aircraft's wing and the oncoming relative airflow vector.",
              "example": "Exceeding the critical angle of attack causes boundary layer separation and an immediate aerodynamic stall."
            },
            {
              "num": "04",
              "term": "boundary layer separation",
              "phonetic": "/ˈbaʊn.dər.i ˈleɪ.ər ˌsep.ərˈeɪ.ʃən/",
              "pos": "noun phrase",
              "definition": "The detachment of smooth laminar airflow from the upper surface of a wing, causing sudden lift loss and increased pressure drag.",
              "example": "Vortex generators on the wing delay boundary layer separation at high angles of attack."
            },
            {
              "num": "05",
              "term": "narrowbody airliner",
              "phonetic": "/ˈnær.əʊˌbɒd.i ˈeəˌlaɪ.nər/",
              "pos": "noun phrase",
              "definition": "A commercial transport aircraft featuring a single passenger aisle with three-by-three seating, used for regional and medium-haul routes.",
              "example": "The Airbus A320 and Boeing 737 families dominate the global narrowbody airliner market."
            },
            {
              "num": "06",
              "term": "Flight Data Recorder (FDR)",
              "phonetic": "/flaɪt ˈdeɪ.tə rɪˈkɔː.dər/",
              "pos": "noun phrase",
              "definition": "A crash-survivable flight recorder that logs hundreds of flight parameters including altitude, airspeed, control inputs, and engine status.",
              "example": "Investigators recovered the orange FDR from the seabed, allowing exact reconstruction of control column inputs before impact."
            },
            {
              "num": "07",
              "term": "Crew Resource Management (CRM)",
              "phonetic": "/kruː rɪˈsɔːs ˈmæn.ɪdʒ.mənt/",
              "pos": "noun phrase",
              "definition": "A training system focusing on human factors, interpersonal communication, leadership, and decision-making in the cockpit.",
              "example": "Effective CRM empowers First Officers to assertively question the Captain if flight parameters deviate from stable approach criteria."
            },
            {
              "num": "08",
              "term": "hypoxic drive",
              "phonetic": "/haɪˈpɒk.sɪk draɪv/",
              "pos": "noun phrase",
              "definition": "The body's physiological respiratory drive stimulated by low arterial oxygen levels during high-altitude exposure.",
              "example": "Under the influence of hypoxic drive, the aviator hyperventilated uncontrollably during the altitude chamber simulation."
            },
            {
              "num": "09",
              "term": "windshear advisory",
              "phonetic": "/wɪnd ʃɪər ədˈvaɪ.zər.i/",
              "pos": "noun phrase",
              "definition": "An official broadcast or controller warning alerting incoming and departing traffic to detected wind velocity shifts along approach corridors.",
              "example": "Upon receiving the windshear advisory, the flight crew selected maximum take-off thrust and prepared for a potential go-around."
            },
            {
              "num": "10",
              "term": "supercooled droplet",
              "phonetic": "/ˌsuː.pə.kuːld ˈdrɒp.lət/",
              "pos": "noun phrase",
              "definition": "Liquid water droplets existing in clouds at temperatures below zero degrees Celsius that freeze immediately upon contacting an airframe.",
              "example": "Flying through a cloud deck composed of supercooled droplets created rapid rime ice buildup on windshield wipers."
            },
            {
              "num": "11",
              "term": "explosive trace detection (ETD)",
              "phonetic": "/ɪkˈspləʊ.sɪv treɪs dɪˈtek.ʃən/",
              "pos": "noun phrase",
              "definition": "Security equipment that analyzes chemical residue swabs from passenger hands, electronics, or baggage for microscopic explosive traces.",
              "example": "The security screener wiped a test swab across the passenger's laptop keyboard and inserted it into the ETD analyzer."
            },
            {
              "num": "12",
              "term": "Minimum Equipment List (MEL)",
              "phonetic": "/ˈmɪn.ɪ.məm ɪˈkwɪp.mənt lɪst/",
              "pos": "noun phrase",
              "definition": "The official document governing legal aircraft dispatch with inoperative equipment, specifying repair deadlines and operational limits.",
              "example": "The airline's dispatch office verified that the inoperative weather radar was permitted under MEL for daylight VMC flight only."
            },
            {
              "num": "13",
              "term": "standard operating procedures (SOP)",
              "phonetic": "/ˈstæn.dəd ˈɒp.ər.eɪ.tɪŋ prəˈsiː.dʒəz/",
              "pos": "noun phrase",
              "definition": "Formally prescribed step-by-step checklists and behavioral instructions to be followed by flight crew under all normal and emergency phases.",
              "example": "Strict adherence to company SOPs eliminated ambiguity during the complex CAT III low visibility approach."
            },
            {
              "num": "14",
              "term": "sterile cockpit rule",
              "phonetic": "/ˈster.aɪl ˈkɒk.pɪt ruːl/",
              "pos": "noun phrase",
              "definition": "A regulatory requirement prohibiting non-essential conversation, activities, or interruptions below ten thousand feet during critical phases of flight.",
              "example": "Under the sterile cockpit rule, pilots focus solely on navigation, ATC communications, and flight path monitoring during taxi and departure."
            },
            {
              "num": "15",
              "term": "situational awareness",
              "phonetic": "/ˌsɪtʃ.uˈeɪ.ʃən.əl əˈweə.nəs/",
              "pos": "noun phrase",
              "definition": "An aviator's continuous, accurate perception of the aircraft's position, energy state, systems, weather, and surrounding traffic.",
              "example": "Channelized attention on a single faulty warning light degraded the crew's situational awareness, resulting in unperceived altitude loss."
            },
            {
              "num": "16",
              "term": "Just Culture",
              "phonetic": "/dʒʌst ˈkʌl.tʃər/",
              "pos": "noun phrase",
              "definition": "An organizational environment where front-line operators are not punished for actions, omissions, or decisions commensurate with their experience, but willful misconduct is not tolerated.",
              "example": "Under Just Culture principles, the pilot immediately filed a voluntary safety report regarding the altitude deviation without fear of reprisal."
            },
            {
              "num": "17",
              "term": "Safety Management System (SMS)",
              "phonetic": "/ˈseɪf.ti ˈmæn.ɪdʒ.mənt ˈsɪs.təm/",
              "pos": "noun phrase",
              "definition": "A systematic, comprehensive approach to managing safety, including organizational structures, accountabilities, policies, and risk mitigation procedures.",
              "example": "The airline's SMS identified an emerging trend in runway excursions during wet winter operations, triggering fleetwide simulator drills."
            },
            {
              "num": "18",
              "term": "press briefing",
              "phonetic": "/pres ˈbriː.fɪŋ/",
              "pos": "noun phrase",
              "definition": "A structured, professional presentation given to journalists and news media to announce factual developments and answer questions following an incident.",
              "example": "The airline's Chief Flight Safety Officer delivered a formal press briefing regarding the transatlantic emergency diversion."
            }
          ]
        },
        "materials": {
          "videos": [
            {
              "title": "Video 1: Aviation Crisis Communications: Airline Press Briefings",
              "watchUrl": "https://www.youtube.com/watch?v=YU4HLDqCuzM",
              "tag": "Media Briefing",
              "videoId": "YU4HLDqCuzM",
              "embedUrl": "https://www.youtube-nocookie.com/embed/YU4HLDqCuzM",
              "caption": "Focus: Crisis communication protocols for airline and civil aviation spokespersons: holding statements, factual briefings, avoiding speculation, and handling tough media questions."
            },
            {
              "title": "Video 2: How Safe is Commercial Aviation? Capstone Safety Analysis",
              "watchUrl": "https://www.youtube.com/watch?v=uXptsqZORns",
              "tag": "Semester Review",
              "videoId": "uXptsqZORns",
              "embedUrl": "https://www.youtube-nocookie.com/embed/uXptsqZORns",
              "caption": "Focus: A comprehensive retrospective on commercial aviation safety architecture: redundant systems, fail-safe engineering, human factors training, and global regulatory oversight."
            },
            {
              "title": "Video 3: Inside Air Accident Investigation: How BEA & NTSB Solve Crashes",
              "watchUrl": "https://www.youtube.com/watch?v=Kec7guNWhNU",
              "tag": "Investigation Standards",
              "videoId": "Kec7guNWhNU",
              "embedUrl": "https://www.youtube-nocookie.com/embed/Kec7guNWhNU",
              "caption": "Focus: Air accident investigator breaks down how investigations work: flight data recorder (FDR) and cockpit voice recorder (CVR) recovery, wreckage reconstruction, and safety recommendations."
            }
          ],
          "resources": [
            {
              "url": "https://www.enac.fr",
              "tag": "01 • Academic Hub",
              "name": "ENAC Technical English (AT) Learning Repository",
              "desc": "Complete course documentation, semester objectives, technical vocabulary databases, and continuous assessment rubrics."
            },
            {
              "url": "https://www.icao.int",
              "tag": "02 • Global Standards",
              "name": "ICAO Language Proficiency Requirements (Doc 9835)",
              "desc": "Official international operational level descriptors for Technical English (Pronunciation, Structure, Vocabulary, Fluency, Comprehension, Interaction)."
            },
            {
              "url": "https://www.aviation-safety.net",
              "tag": "03 • Accident Database",
              "name": "Aviation Safety Network Official Accident Database",
              "desc": "Comprehensive global registry of commercial airliner accidents, technical investigation reports, and safety recommendations."
            },
            {
              "url": "https://www.bea.aero",
              "tag": "04 • Investigation Bureau",
              "name": "Bureau d'Enquêtes et d'Analyses pour la Sécurité (BEA)",
              "desc": "Official French civil aviation safety investigation authority publishing preliminary and final technical accident reports."
            },
            {
              "url": "https://www.ntsb.gov",
              "tag": "05 • US Safety Board",
              "name": "NTSB Aviation Investigation Reports & Safety Alerts",
              "desc": "National Transportation Safety Board docket files, Cockpit Voice Recorder (CVR) transcripts, and major safety recommendations."
            },
            {
              "url": "https://www.flightradar24.com",
              "tag": "06 • Flight Tracking",
              "name": "Flightradar24 Global Flight Tracking & Current Events",
              "desc": "Real-time ADS-B flight telemetry, diversion tracking, squawk emergency notifications, and airspace congestion data."
            }
          ],
          "pageUrl": "session4/admat_aas2.html",
          "articles": [
            {
              "topic": "Journal of Aeronautical Communication",
              "sourceTag": "Professional Flight Communication",
              "heading": "Crisis Communication in Commercial Aviation: Press Briefings Under Scrutiny",
              "snippet": "Analysis of corporate communications following landmark aviation emergencies: how clear technical precision, transparent empathy, and rigorous factual discipline maintain public trust.",
              "readTime": "Estimated read: 6-8 mins",
              "url": "https://www.enac.fr"
            },
            {
              "topic": "Air Transport World",
              "sourceTag": "Global Aviation Review",
              "heading": "The Evolution of Modern Commercial Flight Safety: A 50-Year Retrospective",
              "snippet": "Examining the multi-layered technological and human factors revolution that made commercial air transport the safest mode of long-distance transportation in human history.",
              "readTime": "Estimated read: 5-7 mins",
              "url": "https://www.icao.int"
            }
          ],
          "toeicQuestions": [
            {
              "stem": "The chief safety officer emphasized that ________ communication between flight crew members is vital for operational safety.",
              "options": [
                {
                  "letter": "A",
                  "text": "transparent"
                },
                {
                  "letter": "B",
                  "text": "transparently"
                },
                {
                  "letter": "C",
                  "text": "transparency"
                },
                {
                  "letter": "D",
                  "text": "transparencies"
                }
              ],
              "correctLetter": "A",
              "correctText": "transparent",
              "analysis": "The adjective 'transparent' is required to modify the noun 'communication'.",
              "strategy": "Adjective modifying noun: transparent communication."
            },
            {
              "stem": "All Semester 1 vocabulary terms ________ on the revision tab should be reviewed prior to Formative Evaluation 3.",
              "options": [
                {
                  "letter": "A",
                  "text": "listed"
                },
                {
                  "letter": "B",
                  "text": "listing"
                },
                {
                  "letter": "C",
                  "text": "list"
                },
                {
                  "letter": "D",
                  "text": "lists"
                }
              ],
              "correctLetter": "A",
              "correctText": "listed",
              "analysis": "Reduced relative clause with passive participle: terms [which are] listed on the revision tab.",
              "strategy": "Passive participle modifier: terms listed on the tab."
            },
            {
              "stem": "The airline's spokesperson delivered a press briefing ________ explain the precautionary diversion of flight 402.",
              "options": [
                {
                  "letter": "A",
                  "text": "in order to"
                },
                {
                  "letter": "B",
                  "text": "so that"
                },
                {
                  "letter": "C",
                  "text": "because of"
                },
                {
                  "letter": "D",
                  "text": "due to"
                }
              ],
              "correctLetter": "A",
              "correctText": "in order to",
              "analysis": "Purpose connector 'in order to' is followed by the bare infinitive 'explain'.",
              "strategy": "Purpose clause: in order to + bare infinitive."
            },
            {
              "stem": "By the time the investigation concludes next month, the safety board ________ over fifty thousand telemetry data points.",
              "options": [
                {
                  "letter": "A",
                  "text": "will have analyzed"
                },
                {
                  "letter": "B",
                  "text": "analyzed"
                },
                {
                  "letter": "C",
                  "text": "is analyzing"
                },
                {
                  "letter": "D",
                  "text": "has analyzed"
                }
              ],
              "correctLetter": "A",
              "correctText": "will have analyzed",
              "analysis": "Future perfect tense ('will have analyzed') is required with the temporal marker 'By the time ... next month'.",
              "strategy": "Future perfect formula: By the time + present ..., will have + V3."
            },
            {
              "stem": "Students are advised to practice their press briefings in pairs ________ they can deliver their presentations fluently.",
              "options": [
                {
                  "letter": "A",
                  "text": "so that"
                },
                {
                  "letter": "B",
                  "text": "in order to"
                },
                {
                  "letter": "C",
                  "text": "despite"
                },
                {
                  "letter": "D",
                  "text": "because of"
                }
              ],
              "correctLetter": "A",
              "correctText": "so that",
              "analysis": "The purpose conjunction 'so that' introduces a full clause expressing intention ('so that they can deliver').",
              "strategy": "Purpose conjunction: so that + [subject + modal + verb]."
            }
          ]
        },
        "lessonContent": {
          "hero": {
            "title": "Global Semester Review & 3-Team Aviation Grand Prix Quiz",
            "subtitle": "Comprehensive Semester 1 Retrospective, 3-Team Scored Knowledge Competition & FE3 Press Briefing Masterclass",
            "image": "images/aas_m3card4.jpg"
          },
          "openingSession": {
            "title": "Activity 1: Semester 1 Retrospective & Competition Rules (10 mins)",
            "summary": "Review the full Semester 1 aeronautical syllabus, divide into 3 teams, and establish the Grand Prix tournament rules.",
            "modeBadges": [
              "Plenary",
              "Grand Prix Setup",
              "10 Mins"
            ],
            "instructions": [
              "Divide the classroom cohort into 3 competitive squads: Team Alpha, Team Bravo, and Team Charlie.",
              "Each team elects a Team Captain to deliver final answers and keep score on the interactive Grand Prix board.",
              "Review tournament rules: 3 rounds of increasing point values (100, 200, 300 pts). In case of a tie, a sudden-death technical debate tiebreaker will determine the champion."
            ],
            "deliverable": "Confirmed team rosters, assigned team captains, and reviewed tournament scoring rules.",
            "teacherNotes": "Create an energetic, high-engagement tournament atmosphere! Keep time strictly and award bonus points for concise, jargon-free English explanations.",
            "squadRosters": [
              {
                "team": "Team Alpha",
                "focus": "Aerodromes & Ground Handling",
                "motto": "Precision on the Ramp"
              },
              {
                "team": "Team Bravo",
                "focus": "Aircraft Systems & Flight Physics",
                "motto": "Aerodynamic Superiority"
              },
              {
                "team": "Team Charlie",
                "focus": "Human Factors, Weather & Safety",
                "motto": "Unyielding Operational Safety"
              }
            ]
          },
          "teamGrandPrixRound1": {
            "title": "Activity 2: Grand Prix Round 1: Aerodromes, Aircraft Anatomy & Systems (25 mins)",
            "summary": "Competitive round covering Module 1 and Module 2: runway numbering, GSE turnaround, flight control surfaces, and turbofan bypass ratios.",
            "modeBadges": [
              "3 Teams (Alpha/Bravo/Charlie)",
              "Team Competition",
              "25 Mins"
            ],
            "instructions": [
              "Teams take turns selecting challenge questions from the Round 1 Question Board.",
              "Teams have 60 seconds of internal consultation before their Captain must state the final answer in clear English.",
              "Correct answers earn the stated point value (100 to 300 pts). If a team fails, the question rebounds to the next team for half points."
            ],
            "deliverable": "Round 1 score tally recorded in the interactive team scoreboard.",
            "teacherNotes": "Encourage teams to explain the 'why' behind each answer rather than just giving a one-word response.",
            "questions": [
              {
                "id": 1,
                "pts": 100,
                "q": "An aerodrome runway has a magnetic heading of 284 degrees. What two digits are painted at its approach threshold?",
                "answer": "Runway 28 (magnetic headings are rounded to the nearest ten degrees and divided by ten: 284° rounds to 280°, designated as Runway 28)."
              },
              {
                "id": 2,
                "pts": 100,
                "q": "Which flight control surface controls movement about the lateral pitch axis, and where is it located on the aircraft?",
                "answer": "The elevator, hinged on the trailing edge of the horizontal stabilizer in the empennage."
              },
              {
                "id": 3,
                "pts": 200,
                "q": "Name three distinct ground support equipment (GSE) vehicles servicing an airliner during turnaround and state their exact functions.",
                "answer": "(1) Ground Power Unit (GPU) provides electrical power before APU start; (2) Belt Loader transfers bulk baggage into cargo holds; (3) Pushback Tug disconnects and tows aircraft back from the gate stand."
              },
              {
                "id": 4,
                "pts": 200,
                "q": "Why do modern commercial airliners utilize high-bypass turbofan engines instead of low-bypass engines?",
                "answer": "High-bypass turbofans push the majority of incoming air around the engine core through the bypass duct, generating greater propulsive efficiency, significantly lower fuel consumption, and reduced noise."
              },
              {
                "id": 5,
                "pts": 300,
                "q": "What is the primary aerodynamic distinction between single-aisle narrowbody airliners and twin-aisle widebody airliners?",
                "answer": "Narrowbodies (A320/B737) have a single aisle with 3-3 seating designed for short-to-medium haul routes (up to 3,500 NM), while widebodies (A350/B777/B787) feature twin passenger aisles with higher aspect-ratio wings and massive fuel capacity for long-haul intercontinental flight."
              },
              {
                "id": 6,
                "pts": 300,
                "q": "During the pre-flight exterior walkaround, what critical item must be verified on the main landing gear wheel well?",
                "answer": "Verify that all ground safety downlock pins are pulled and stowed, hydraulic lines show no leaks, brake wear indicator pins protrude, and tire tread grooves are intact without visible cords."
              }
            ]
          },
          "teamGrandPrixRound2": {
            "title": "Activity 3: Grand Prix Round 2: Human Factors, Health & Severe Meteorology (25 mins)",
            "summary": "Competitive round covering Module 3: medical triage, EASA FTL fatigue rules, METAR decoding, and microburst physics.",
            "modeBadges": [
              "3 Teams (Alpha/Bravo/Charlie)",
              "Team Competition",
              "25 Mins"
            ],
            "instructions": [
              "Teams tackle Round 2 challenge questions covering aviation medicine, crew fatigue regulations, and severe atmospheric hazards.",
              "Points escalate: 100 pts for clinical definitions, 200 pts for regulatory/METAR decoding, and 300 pts for aerodynamic physics.",
              "Reveal answers after each team attempt and record running totals on the team leaderboard."
            ],
            "deliverable": "Round 2 score tally updated on team scoreboard.",
            "teacherNotes": "Emphasize precise English terminology. Challenge students if they use vague terms like 'bad weather' instead of 'severe convective squall line'.",
            "questions": [
              {
                "id": 1,
                "pts": 100,
                "q": "What is the primary cabin crew intervention when a passenger is hyperventilating due to acute panic?",
                "answer": "Reassure the passenger in calm, measured tones, coach slow diaphragmatic breathing in through the nose and out through pursed lips (or breathing into a paper sickness bag) to restore arterial CO2 levels."
              },
              {
                "id": 2,
                "pts": 100,
                "q": "Under EASA Flight Time Limitations (FTL), what does the acronym WOCL signify and why is it legally restricted?",
                "answer": "Window of Circadian Low (02:00 to 05:59 local physiological time). Flying duties commencing during this window incur severe cognitive fatigue, so allowable flight duty periods (FDP) are significantly reduced."
              },
              {
                "id": 3,
                "pts": 200,
                "q": "Decode the following METAR string: '+TSRA BKN012CB 28020G35KT'",
                "answer": "Heavy thunderstorm with rain, broken cumulonimbus clouds at 1,200 feet above ground level, wind from 280 degrees at 20 knots with gusts up to 35 knots."
              },
              {
                "id": 4,
                "pts": 200,
                "q": "Explain the sudden airspeed and lift changes experienced by an aircraft flying through a microburst on short final approach.",
                "answer": "The aircraft first encounters an intense headwind, causing indicated airspeed and lift to rise suddenly (tempting the pilot to pull thrust back); then it hits a strong downdraft, followed immediately by a severe tailwind causing massive airspeed loss, stalling, and rapid descent."
              },
              {
                "id": 5,
                "pts": 300,
                "q": "What is Time of Useful Consciousness (TUC) at 35,000 feet, and what immediate memory action must pilots execute if cabin altitude exceeds 10,000 feet?",
                "answer": "TUC at FL350 is approximately 30 to 60 seconds. Pilots must immediately don oxygen masks and select 100% pure oxygen under positive pressure before executing an emergency descent."
              },
              {
                "id": 6,
                "pts": 300,
                "q": "What is the somatogravic illusion during a night or instrument go-around, and how does a pilot prevent a catastrophic crash?",
                "answer": "Rapid forward acceleration stimulates the inner ear otolith organs, creating a false sensation that the aircraft is pitching up violently. If the pilot pushes the nose down based on this illusion, the aircraft flies into the ground. The pilot prevents this by ignoring bodily sensations and scanning flight instruments."
              }
            ]
          },
          "teamGrandPrixRound3": {
            "title": "Activity 4: Grand Prix Round 3: Safety vs. Security & Landmark Case Studies (25 mins)",
            "summary": "Competitive round covering airport security screening, pre-flight walkaround, Delta 191/BA 009 case studies, and tournament tiebreaker.",
            "modeBadges": [
              "3 Teams (Alpha/Bravo/Charlie)",
              "Team Competition",
              "25 Mins"
            ],
            "instructions": [
              "Final championship round! High-stakes questions worth 100, 200, and 300 points on Safety vs. Security and landmark case studies.",
              "In case of a points tie between teams, the Sudden-Death Tiebreaker Question will be contested live by the team captains.",
              "Tally final tournament points and crown the Grand Prix Champions!"
            ],
            "deliverable": "Final Grand Prix Tournament Champions declared and podium ceremony.",
            "teacherNotes": "Create excitement as the scoreboard narrows! Celebrate the collaborative effort of all three squads.",
            "questions": [
              {
                "id": 1,
                "pts": 100,
                "q": "In legal and regulatory terms, what is the exact difference between Aviation Safety and Aviation Security?",
                "answer": "Safety (ICAO Annex 19) is the prevention of unintended accidents, mechanical failures, software glitches, and human errors. Security (ICAO Annex 17) is the prevention of intentional, deliberate, malicious criminal acts, terrorism, and sabotage."
              },
              {
                "id": 2,
                "pts": 100,
                "q": "How does a computed tomography (CT) airport baggage scanner differ from a conventional 2D x-ray machine?",
                "answer": "A CT scanner rotates around the baggage taking hundreds of x-ray slices to generate a 3D volumetric image, analyzing material density and atomic number to detect explosives automatically without removing liquids or electronics."
              },
              {
                "id": 3,
                "pts": 200,
                "q": "What permanent technological equipment was mandated on all commercial transport aircraft following the Delta 191 crash at Dallas in 1985?",
                "answer": "Mandatory airborne predictive windshear detection systems (radar and reactive windshear guidance) and Terminal Doppler Weather Radar (TDWR) at commercial hub airports."
              },
              {
                "id": 4,
                "pts": 200,
                "q": "Why did all four engines on British Airways Flight 009 flame out simultaneously over Indonesia in 1982, and why did they restart at lower altitude?",
                "answer": "The aircraft flew into an undetected volcanic ash cloud; the silicate ash melted in the 1,100°C combustion chambers, coating turbine blades and choking airflow. At lower altitude, the cooled engines shed the brittle glass coating as the crew glided, allowing air restart."
              },
              {
                "id": 5,
                "pts": 300,
                "q": "What is the difference between an aircraft Minimum Equipment List (MEL) and a Configuration Deviation List (CDL)?",
                "answer": "The MEL governs dispatch with inoperative system components or instruments (e.g. an inoperative APU or nav radio). The CDL governs dispatch with missing secondary external airframe parts (e.g. a missing flap track fairing or static wick)."
              },
              {
                "id": 6,
                "pts": 300,
                "q": "TIEBREAKER: A passenger flight experiences a false cargo fire alarm caused by a sensor short circuit while approaching an airport where an active security perimeter breach is underway. As airport director, which incident takes immediate runway priority?",
                "answer": "The airborne flight emergency (Safety) takes absolute priority. An in-flight fire alarm requires immediate landing and runway evacuation because an uncontained airborne fire can destroy an aircraft in under 15 minutes. Police must contain the perimeter breach without compromising runway clearance."
              }
            ]
          },
          "fe3MasteryWorkshop": {
            "title": "Activity 5: FE3 Current Events Press Briefing Masterclass (25 mins)",
            "summary": "Pairs workshop preparing the 10-12 minute Press Briefing for Session 5 Formative Evaluation 3, verifying slides and Q&A strategies.",
            "modeBadges": [
              "Pairs / Trios",
              "FE3 Workshop",
              "25 Mins"
            ],
            "instructions": [
              "In your confirmed evaluation pairs/trios, finalize your selection of a major aviation current event from one of the 3 domains (Severe Weather, Medical Emergency Diversion, or Airport Security/Airworthiness).",
              "Structure your 10-12 minute Press Briefing using the 4-phase professional framework: (1) Situation Overview & Initial Facts, (2) Technical Causal Analysis, (3) Operational Immediate Measures, (4) Long-term Corrective Actions & Regulatory Mandates.",
              "Rehearse role handovers so each partner speaks for exactly 5-6 minutes without reading word-for-word from scripts. Review defensive Q&A strategies for the teacher's press conference Q&A."
            ],
            "deliverable": "Completed FE3 Press Briefing outline draft with verified partner roles and slide cue points.",
            "teacherNotes": "Remind students that FE3 is an oral media briefing simulation. Reading written paragraphs word-for-word results in a lower grade in Fluency. Bullet cards and visual slides only!",
            "briefingFramework": [
              {
                "stage": "Stage 1: Situation Overview (2-3 mins)",
                "content": "Welcome journalists, state flight number/airline, date, route, aircraft type, and summarize the emergency situation factually without sensationalism."
              },
              {
                "stage": "Stage 2: Technical Causal Analysis (3-4 mins)",
                "content": "Explain the root engineering, meteorological, aeromedical, or security causal factors using precise aeronautical terminology from Module 3."
              },
              {
                "stage": "Stage 3: Immediate Operational Response (2-3 mins)",
                "content": "Detail flight crew actions, ATC coordination, emergency diversion execution, passenger triage, and airport emergency service response."
              },
              {
                "stage": "Stage 4: Corrective Actions & Regulatory Follow-up (2 mins)",
                "content": "Outline airline internal investigations, BEA/EASA cooperation, fleetwide inspections, and revised standard operating procedures (SOPs)."
              }
            ]
          },
          "closingReview": {
            "title": "Activity 6: Semester 1 Grand Finale & FE3 Action Plan (10 mins)",
            "summary": "Podium celebration for Grand Prix champions, portfolio audit guidelines, and final encouragement for FE3.",
            "modeBadges": [
              "Plenary",
              "Semester Wrap-Up",
              "10 Mins"
            ],
            "instructions": [
              "Congratulate the winning squad of the Semester 1 Grand Prix Tournament!",
              "Review final preparation reminders for Formative Evaluation 3 on Wednesday 24 February 2027 (Week 08).",
              "Verify that your personal Vocabulary Log contains all required aeronautical terms across Modules 1, 2, and 3."
            ],
            "deliverable": "Confirmed FE3 preparation roadmap, verified evaluation timeslot, and finalized media briefing visual slides.",
            "teacherNotes": "End the semester on an encouraging, inspiring high note! Emphasize how much their aeronautical fluency and technical vocabulary have grown since Module 1.",
            "checkpoints": [
              "Mastered 72 specialized Module 3 aeronautical vocabulary items",
              "Synthesized Semester 1 knowledge across Aerodromes, Aircraft & Safety",
              "Competed in the 3-team Grand Prix Tournament",
              "Finalized FE3 Current Events Press Briefing outline and slide deck"
            ]
          }
        }
      }
    }
  }
};

  return {
    "1": aasData["1"],
    "2": aasData["2"],
    "3": aasData["3"],
    aas: aasData
  };
});
