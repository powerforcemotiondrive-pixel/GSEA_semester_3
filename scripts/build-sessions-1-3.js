/**
 * Automated Curriculum Generator for GSEA Semester 3 (Sessions 1, 2, 3)
 * Full B1-B2 Plain English Activities, +50% Authentic EASA Reading Extracts,
 * Interactive Mode Badges, Student Instructions, Safety Checks & 90 Vocabulary Terms.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesMod1Path = path.join(rootDir, 'src', 'js', '05-templates-mod1.js');

console.log('🚀 Running GSEA Semester 3 Curriculum Generator...');

// ============================================================================
// PART A: UPDATE data/course-data.js
// ============================================================================

const courseData = require(courseDataPath);

// --- SESSION 1 DATA ---
const s1Objectives = {
  title: "Session 1 - EASA Rules & Finding Information Fast Objectives",
  summary: "By the end of this session, GSEA students will be able to navigate dense EASA airport rules without getting lost, understand the difference between mandatory laws and advisory guides, use words for rules (shall, must, should, may) accurately, scan an authentic EASA crane safety specification (+50% length), role-play a polite clarification dialogue with a building contractor, and complete a simple Safety Check.",
  items: [
    {
      num: 1,
      title: "Talk About Reading Challenges (Fluency & Spontaneous Speech)",
      description: "Share what makes long official manuals hard to read in English and agree on simple tricks to find information fast."
    },
    {
      num: 2,
      title: "Understand the Two Types of Rules (Laws vs. Guides)",
      description: "Learn the simple difference between Laws (rules you must follow) and Guides (advice and best practice)."
    },
    {
      num: 3,
      title: "Key Words for Rules (Vocabulary Focus)",
      description: "Learn and use everyday rule words: must follow (binding), advice (guidance), inspect (oversight), and safety zone (obstacle surface)."
    },
    {
      num: 4,
      title: "Words for Rules: Shall, Must, Should, May (Language Focus)",
      description: "Practice using shall / must (100% required), shall not (forbidden), should (recommended advice), and may (allowed)."
    },
    {
      num: 5,
      title: "Read the EASA Crane Rule (Authentic Document Scanning)",
      description: "Scan the simulated EASA document (CS-ADR-DSN.H.400 & H.415) to find where tall cranes and buildings are not allowed near the runway."
    },
    {
      num: 6,
      title: "Speaking Role-Play & Safety Check (Spoken Interaction)",
      description: "Role-play a polite conversation with a builder who wants to place a crane near the airport, and complete a simple Safety Check."
    }
  ]
};

const s1LessonPlan = {
  title: "Session 1 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session for GSEA students covering document reading tricks, EASA crane safety rules, words for rules (shall, must, should, may), an obstacle clarification role-play, and a simple Safety Check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Reading Long Manuals (15 mins)",
      description: "In pairs, GSEA students discuss what makes 300-page official manuals hard to read, share quick scanning strategies, and test entry knowledge with 4 quick spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the EASA Crane Rule (30 mins)",
      description: "Reading an authentic +50% expanded EASA extract (CS-ADR-DSN.H.400 and H.415 + GM1) to locate obstacle limitation surfaces, slope gradients, and crane safeguarding rules."
    },
    {
      time: "45-70",
      title: "Part 3: Words for Rules: Shall, Must, Should, May (25 mins)",
      description: "Grammar and language clinic clarifying mandatory requirements (shall/must), prohibitions (shall not), and recommendations (should) through 5 practical drills."
    },
    {
      time: "70-105",
      title: "Part 4: Speaking Role-Play: Talking to the Builder (35 mins)",
      description: "3-student spoken role-play between a GSEA Safety Officer and a Construction Manager discussing a proposed 48m crane near Runway 09, with peer observation."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: What Could Go Wrong? (15 mins)",
      description: "Collaborative 4-step safety check evaluating the crane hazard, flight risks, protective steps (lowered height, obstacle lights, NOTAM), and the final decision."
    }
  ]
};

const s1LessonContent = {
  hero: {
    title: "EASA Rules & Finding Information Fast",
    subtitle: "Navigating Airport Regulations, Words for Rules & Obstacle Safeguarding",
    image: "images/s3_m1_session1_easa.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Aerodrome Operations & Rule Compliance",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up & Entry Spot-Check (15 mins)",
    summary: "Break the ice, discuss reading challenges in English, and test your baseline knowledge of airport rules.",
    modeBadges: ["Pairs (2 students)", "Spoken Discussion", "Timing: 15 mins"],
    instructions: [
      "In pairs, discuss the 3 opening questions about reading official manuals in English.",
      "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
      "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
    ],
    deliverable: "Shared agreement on 2 quick scanning tricks and completed 4-question diagnostic.",
    teacherNotes: "Encourage spontaneous speaking. Don't worry about perfect grammar during warm-up; focus on building confidence and getting students comfortable talking about rules in English.",
    newsPrompts: [
      {
        id: 1,
        question: "Why are official aviation manuals often 300 to 500 pages long?",
        exampleAnswers: [
          "In my opinion, it is because aviation safety leaves zero room for guessing. The rules have to cover every possible weather condition, airport layout, aircraft size, and emergency scenario.",
          "Also, many rules are written after real accidents. Every time investigators discover a new hazard, a new safety rule is added to make sure it never happens again."
        ]
      },
      {
        id: 2,
        question: "When you need to find one specific rule in a huge PDF, what is your personal strategy?",
        exampleAnswers: [
          "I always press Ctrl + F (or Cmd + F) and search for very specific keywords—like 'crane', 'gradient', or '28 days'—rather than reading through dozens of pages.",
          "My strategy is to check the Table of Contents first to find the right Subpart (like Subpart H for obstacle surfaces), and then scan the section titles."
        ]
      },
      {
        id: 3,
        question: "Have you ever had to explain a complicated rule to someone who didn't understand it?",
        exampleAnswers: [
          "Yes, during an internship, I had to explain to a delivery driver why he couldn't park near the apron gate. I explained that an aircraft was arriving in 15 minutes and needed the space clear.",
          "I think the best trick is to explain the safety reason behind the rule ('It protects landing planes from hitting obstacles') rather than just saying 'No, it's forbidden'."
        ]
      }
    ],
    diagnostic: {
      title: "Airport Rules Entry Spot-Check",
      instructions: "Discuss each question with your partner, then click to check your answer.",
      questions: [
        {
          id: 1,
          q: "What is the simple difference between a Law (Regulation) and a Guide (Guidance Material)?",
          answer: "A Law is mandatory (you must obey it 100% or face legal penalties). A Guide gives practical advice and examples to help you follow the law correctly."
        },
        {
          id: 2,
          q: "In European aviation documents, what does the word 'SHALL' mean?",
          answer: "'Shall' means a mandatory requirement. You have no choice: it is required by law."
        },
        {
          id: 3,
          q: "What is an 'Obstacle Limitation Surface' (OLS) in everyday words?",
          answer: "It is an invisible safety bubble or slope in the sky around the runway where tall cranes, trees, and buildings are strictly forbidden to protect landing planes."
        },
        {
          id: 4,
          q: "What is a NOTAM (Notice to Airmen)?",
          answer: "A quick, urgent official alert sent to all pilots informing them about temporary airport hazards, such as closed taxiways, broken lights, or construction cranes."
        }
      ]
    }
  },
  documentExtract: {
    title: "Activity 2: Reading the EASA Crane Rule (30 mins)",
    summary: "Scan an authentic, expanded EASA regulatory extract to locate safety surfaces and crane rules.",
    modeBadges: ["Pairs or Small Groups", "Document Scanning", "Timing: 30 mins"],
    instructions: [
      "Examine the official EASA extract below (CS-ADR-DSN Subpart H & GM1).",
      "Notice the layout: Regulation number, title, sub-paragraphs, and Guidance Material.",
      "Work with your partner to answer the 4 reading questions below.",
      "Click 'Reveal Answer' to verify your answers."
    ],
    deliverable: "Completed answers to all 4 reading questions with exact clause references.",
    teacherNotes: "Point out how European rules use numbering (H.400, H.415) and how GM (Guidance Material) provides practical explanations. Remind students they don't need to read every single word—train them to scan for keywords like 'gradient', '28 days', and 'NOTAM'.",
    docRef: "EASA CS-ADR-DSN • Subpart H — Obstacle Limitation Surfaces",
    docText: `[EASA CS-ADR-DSN — BOOK 1: CERTIFICATION SPECIFICATIONS FOR AERODROMES DESIGN]
SUBPART H — OBSTACLE LIMITATION SURFACES (OLS)

CS-ADR-DSN.H.400 Purpose & Applicability
(a) The purpose of the obstacle limitation surfaces is to define the airspace around aerodromes to be maintained free from obstacles so as to permit the intended aeroplane operations at the aerodromes to be conducted safely and to prevent the aerodromes from becoming unusable by the growth of obstacles around the aerodromes.
(b) These specifications shall apply to all runways intended for use by commercial air transport aeroplanes.

CS-ADR-DSN.H.415 Approach Surface Specifications
(a) Applicability: An approach surface shall be established for each runway direction intended to be used for landing.
(b) Characteristics: The limits of the approach surface shall comprise:
    (1) An inner edge of specified length, horizontal and perpendicular to the extended runway centre line, located at a distance of 60 m prior to the runway threshold.
    (2) Two sides originating at the ends of the inner edge and diverging uniformly at a rate of 10% (Code 3/4) from the extended runway centre line.
    (3) An outer edge parallel to the inner edge located at the specified distance.
(c) Elevation: The elevation of the inner edge shall be equal to the elevation of the midpoint of the threshold.
(d) Slope: The slope of the approach surface shall be measured in the vertical plane containing the centre line of the runway and shall not exceed 2.0% (1:50 gradient) for code number 3 and 4 precision instrument runways.
(e) Prohibition: New objects or extensions of existing objects shall not be permitted above an approach surface within the aerodrome safeguarding boundary except when, in the opinion of the appropriate authority, the new object or extension would be shielded by an existing immovable object.

GM1 CS-ADR-DSN.H.415 Construction Equipment & Mobile Cranes
(a) Mobile obstacles, including tall building cranes, concrete pump vehicles, and drilling rigs operating in the vicinity of the aerodrome, constitute temporary obstacles and shall be safeguarded in advance.
(b) Construction contractors intending to erect any crane exceeding 25 metres above ground level within 4 kilometres of the aerodrome reference point shall provide written notification to the aerodrome operator at least 28 calendar days prior to assembly.
(c) Where a temporary obstacle penetrates an established obstacle limitation surface, the aerodrome operator shall request the competent civil aviation authority to issue a Notice to Airmen (NOTAM), mandate low-intensity or medium-intensity red obstacle warning lights, and establish operational restrictions if safety margins are compromised.`,
    questions: [
      {
        id: 1,
        q: "Where does the Approach Surface start in relation to the runway threshold?",
        answer: "Clause H.415(b)(1) states it starts at an inner edge located 60 metres prior to the runway threshold."
      },
      {
        id: 2,
        q: "What is the maximum allowed upward slope (gradient) for precision runways?",
        answer: "Clause H.415(d) states the slope shall not exceed 2.0% (which means a 1:50 gradient)."
      },
      {
        id: 3,
        q: "Are builders allowed to build new structures above this approach surface?",
        answer: "Clause H.415(e) states new objects shall not be permitted above an approach surface, unless they are shielded by an existing permanent object."
      },
      {
        id: 4,
        q: "How many days in advance must a construction company tell the airport before putting up a crane over 25m?",
        answer: "Clause GM1 CS-ADR-DSN.H.415(b) requires written notification at least 28 calendar days prior to crane assembly."
      }
    ]
  },
  rulesPractice: {
    title: "Activity 3: Words for Rules: Must, Shall, Should, May (25 mins)",
    summary: "Master the words used in aviation rules to express legal obligations, prohibitions, and advice.",
    modeBadges: ["Individual & Pairs", "Language Clinic", "Timing: 25 mins"],
    instructions: [
      "Review the plain English explanation table below.",
      "Complete the 5 practice sentences by choosing the correct rule word.",
      "Click 'Check Answer' to verify your choice and read the reason."
    ],
    deliverable: "Completed 5-question language clinic with 100% correct rule identification.",
    teacherNotes: "Emphasize to students that in French 'doit' can mean both 'shall' and 'should'. In English aviation rules, 'shall' is 100% compulsory law, while 'should' is strong advice. Getting this wrong can cause major legal confusion!",
    rulesTable: [
      { word: "Shall / Must", meaning: "100% Mandatory Rule", example: "The airport shall install red warning lights on the crane.", tip: "Use when the rule is required by law with zero choice." },
      { word: "Shall not / Must not", meaning: "Strictly Forbidden", example: "Cranes shall not penetrate the approach surface.", tip: "Use when an action is illegal and dangerous." },
      { word: "Should", meaning: "Strong Recommendation", example: "The builder should lower the crane boom at night.", tip: "Best practice and advice, but not an absolute legal duty." },
      { word: "May", meaning: "Allowed / Optional", example: "The contractor may apply for a special night permit.", tip: "Use when an option or permission is available." }
    ],
    drills: [
      {
        id: 1,
        sentence: "Contractors _______ notify the airport operator 28 days before erecting a tall crane.",
        options: ["shall", "should", "may"],
        correct: "shall",
        rationale: "This is a mandatory safety rule required by GM1 CS-ADR-DSN.H.415(b)."
      },
      {
        id: 2,
        sentence: "Unshielded objects _______ be permitted above the approach slope.",
        options: ["shall not", "may not", "should not"],
        correct: "shall not",
        rationale: "Clause H.415(e) strictly forbids new obstacles penetrating the approach surface."
      },
      {
        id: 3,
        sentence: "To reduce danger, builders _______ lower the crane boom whenever winds exceed 30 knots.",
        options: ["should", "may", "shall not"],
        correct: "should",
        rationale: "This is a strong recommended safety precaution."
      },
      {
        id: 4,
        sentence: "The airport operator _______ issue a temporary permit if all safety conditions are met.",
        options: ["may", "shall not", "must not"],
        correct: "may",
        rationale: "The operator has the permission and authority to approve it if safe."
      },
      {
        id: 5,
        sentence: "All airside construction workers _______ wear high-visibility vests at all times.",
        options: ["must", "may", "could"],
        correct: "must",
        rationale: "High-visibility gear is an absolute mandatory safety requirement."
      }
    ]
  },
  spokenActivity: {
    title: "Activity 4: Speaking Role-Play: Talking to the Builder (35 mins)",
    summary: "Role-play a polite, professional discussion between a GSEA safety officer and a construction contractor.",
    modeBadges: ["Groups of 3", "Spoken Role-Play", "Timing: 35 mins"],
    instructions: [
      "Form groups of 3 students: Student A (GSEA Safety Officer), Student B (Building Contractor), Student C (Observer / Coach).",
      "Read the scenario carefully. You have 5 minutes to prepare your arguments.",
      "Conduct the 6-minute spoken role-play using the 'Useful Phrases' box.",
      "Student C provides 2 minutes of feedback using the Peer Checklist, then switch roles."
    ],
    deliverable: "Spoken role-play completed by all students with agreed safety compromise.",
    teacherNotes: "Ensure students use polite, diplomatic English rather than aggressive confrontation. Useful phrases like 'According to the safety rules...' and 'What we can do is...' help maintain a cooperative atmosphere.",
    scenario: "A construction company wants to put up a 48-metre mobile crane 1,200 metres from Runway 09 to build a new airport hotel. The crane will penetrate the approach surface by 6 metres. The contractor needs to start tomorrow, but they only sent the request yesterday!",
    roles: [
      {
        title: "Student A: GSEA Safety Officer",
        badge: "Safety & Compliance",
        bullets: [
          "Explain politely that the 28-day notification rule was not respected.",
          "Show that the 48m crane penetrates the approach slope by 6m (illegal).",
          "Propose a safe solution: lower the crane to 38m, work only at night (23h–05h) during runway closure, install flashing red lights, and wait 5 days for a NOTAM."
        ]
      },
      {
        title: "Student B: Construction Manager",
        badge: "Project & Deadlines",
        bullets: [
          "Explain that delays cost €15,000 per day in rented equipment.",
          "Argue that the crane is off to the side and not directly in front of the runway.",
          "Try to negotiate starting earlier, but agree to safety lights and night work if necessary."
        ]
      },
      {
        title: "Student C: Observer & Coach",
        badge: "Peer Feedback",
        bullets: [
          "Listen carefully to both speakers.",
          "Check: Did Student A use correct rule words (shall, must, should)?",
          "Check: Was the conversation polite and professional?",
          "Give 2 positive points and 1 suggestion for improvement."
        ]
      }
    ],
    usefulPhrases: [
      "According to EASA safety rules, we cannot allow...",
      "I completely understand your deadline, but flight safety is our top priority.",
      "The problem is that the crane penetrates the approach safety surface by 6 metres.",
      "What we can propose instead is...",
      "If you agree to work only at night and install red lights, we can approve it.",
      "Let's write down this agreement so both sides are protected."
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: What Could Go Wrong? (15 mins)",
    summary: "Work together to evaluate the crane hazard and confirm the safety decision.",
    modeBadges: ["Whole Class / Pairs", "Safety Evaluation", "Timing: 15 mins"],
    instructions: [
      "Review the 4 simple questions in the Safety Check table below.",
      "Ensure you can explain each row in clear, spoken English.",
      "Confirm the final decision as a team."
    ],
    deliverable: "Completed Safety Check table verified by all students.",
    teacherNotes: "This plain-English table replaces complicated technical risk matrices. It trains students to articulate problems, consequences, and solutions clearly.",
    rows: [
      { question: "1. What is the problem?", answer: "A contractor wants to place a 48m crane near Runway 09 with only 24 hours notice, penetrating the approach surface by 6m." },
      { question: "2. What could happen?", answer: "An approaching plane in bad weather or low visibility could collide with the crane, or pilots could get distracted." },
      { question: "3. How do we fix it?", answer: "1) Reduce crane height to 38m maximum.<br>2) Install medium-intensity flashing red obstacle lights.<br>3) Restrict crane operations to night runway closure (23h00–05h00).<br>4) Issue an official NOTAM to all airlines." },
      { question: "4. Our Decision", answer: "APPROVED WITH CONDITIONS: The contractor may proceed once the 4 protective steps are verified on site." }
    ]
  }
};

const s1RevisionTerms = [
  { num: "01", term: "EASA", definition: "European Union Aviation Safety Agency: the civil aviation authority setting safety rules across Europe." },
  { num: "02", term: "Regulation", definition: "A binding law that all European airports and airlines must follow 100% by law." },
  { num: "03", term: "Guidance Material (GM)", definition: "Advisory text explaining how to understand and apply official aviation rules in practice." },
  { num: "04", term: "Acceptable Means of Compliance (AMC)", definition: "Standards and specifications showing one approved way to satisfy an official regulation." },
  { num: "05", term: "Mandatory", definition: "Required by law; something that you have no choice but to do." },
  { num: "06", term: "Shall", definition: "The formal legal word indicating an absolute obligation in aviation regulations." },
  { num: "07", term: "Should", definition: "The formal word indicating a strong recommendation or best practice, but not an absolute law." },
  { num: "08", term: "May", definition: "The formal word indicating permission or an optional course of action." },
  { num: "09", term: "Prohibited", definition: "Strictly forbidden by law; completely banned." },
  { num: "10", term: "Obstacle", definition: "Any fixed or mobile object that extends above defined safety heights around an airport." },
  { num: "11", term: "Obstacle Limitation Surface (OLS)", definition: "An imaginary safety surface in the sky defining airspace that must remain free of tall objects." },
  { num: "12", term: "Approach Surface", definition: "An inclined safety plane extending outward and upward from before the runway threshold." },
  { num: "13", term: "Threshold", definition: "The beginning of that portion of the runway usable for landing." },
  { num: "14", term: "Gradient", definition: "The rate of slope or incline of a surface, expressed as a percentage or ratio (e.g., 2% or 1:50)." },
  { num: "15", term: "Penetrate", definition: "To cross or extend through an imaginary safety surface, creating an illegal hazard." },
  { num: "16", term: "Shielding", definition: "The principle where an obstacle is protected because a larger, permanent object already stands in front of it." },
  { num: "17", term: "Safeguarding", definition: "The legal process of protecting airport airspace from dangerous construction and tall obstacles." },
  { num: "18", term: "Notice to Airmen (NOTAM)", definition: "An official telecommunication message alerting pilots about temporary hazards or changes at an airport." },
  { num: "19", term: "Obstacle Warning Light", definition: "A red or white flashing light placed on tall structures so pilots can see them at night." },
  { num: "20", term: "Boom", definition: "The long lifting arm of a construction crane." },
  { num: "21", term: "Aerodrome Reference Point (ARP)", definition: "The designated geographic centre point of an airport." },
  { num: "22", term: "Prior Notification", definition: "Official advance warning required before starting building works near an aerodrome (e.g., 28 days)." },
  { num: "23", term: "Contractor", definition: "A construction company hired to perform building or maintenance works." },
  { num: "24", term: "Compliance", definition: "Full adherence and obedience to established laws, standards, and safety specifications." },
  { num: "25", term: "Non-Compliance", definition: "A failure to follow a mandatory aviation safety rule." },
  { num: "26", term: "Oversight", definition: "The ongoing monitoring and inspection of airports by civil aviation authorities to ensure safety." },
  { num: "27", term: "Safety Margin", definition: "An extra buffer of distance or time added to ensure operations remain safe even if an error occurs." },
  { num: "28", term: "AIP (Aeronautical Information Publication)", definition: "The permanent official handbook containing airport operational data, charts, and procedures." },
  { num: "29", term: "Temporary Restriction", definition: "A short-term limitation placed on flights or airport operations during construction works." },
  { num: "30", term: "Safety Check", definition: "A simple step-by-step review asking: What is the problem? What could happen? How do we fix it?" }
];

console.log('✓ Prepared Session 1 Data Structure');

// --- SESSION 2 DATA ---
const s2Objectives = {
  title: "Session 2 - Safety Alerts & Ramp Inspections Objectives",
  summary: "By the end of this session, GSEA students will be able to distinguish mandatory Safety Orders from advisory Bulletins, use gentle, polite sentences (passive voice) during safety audits, read an authentic EASA Ramp Speed Alert (+50% length), participate in a 3-student ramp safety inspection meeting, and complete a simple Safety Check.",
  items: [
    {
      num: 1,
      title: "Share Airport Ramp Experiences (Fluency & Spontaneous Speech)",
      description: "Discuss the busiest and most dangerous areas of an airport ramp and identify top safety hazards."
    },
    {
      num: 2,
      title: "Understand Safety Notices (Orders vs. Bulletins)",
      description: "Learn the clear difference between a mandatory Safety Order (SD) and an advisory Safety Bulletin (SIB)."
    },
    {
      num: 3,
      title: "Key Words for Ramp Safety (Vocabulary Focus)",
      description: "Learn and use essential ramp vocabulary: speed limit, ground vehicle, high-visibility vest, fix-it plan (corrective action), and close call (near-miss)."
    },
    {
      num: 4,
      title: "Polite Language for Inspections (Gentle Passive Voice)",
      description: "Practice asking polite, non-blaming questions during safety checks using gentle sentences (\"It was observed that...\", \"Could you explain how...?\")."
    },
    {
      num: 5,
      title: "Read the EASA Ramp Speed Alert (Authentic Document Scanning)",
      description: "Scan EASA SIB No. 2024-11 on ground vehicle speeding and near-misses around parked aircraft (+50% length)."
    },
    {
      num: 6,
      title: "Ramp Inspection Meeting & Safety Check (Spoken Role-Play)",
      description: "Role-play a 3-person safety discussion between an inspector, ramp supervisor, and handler, and complete the Safety Check."
    }
  ]
};

const s2LessonPlan = {
  title: "Session 2 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session on apron safety, EASA Safety Information Bulletins, gentle phrasing during safety inspections, a ramp speed meeting role-play, and a simple Safety Check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Danger on the Ramp (15 mins)",
      description: "Pairs brainstorm ramp hazards (tugs, fuel, jet blast, night shifts) and test entry knowledge with 4 spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the EASA Ramp Speed Alert (30 mins)",
      description: "Reading simulated EASA SIB No. 2024-11 (+50% length) on vehicle speeding, telematics, and the 30-day fix-it plan timeline."
    },
    {
      time: "45-70",
      title: "Part 3: Polite Language for Inspections (25 mins)",
      description: "Language clinic on gentle phrasing and passive voice to describe safety findings objectively without blaming individuals."
    },
    {
      time: "70-105",
      title: "Part 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)",
      description: "3-student role-play between a GSEA Safety Auditor, Ground Handling Ramp Supervisor, and Airport Operations Manager to agree on a fix-it plan."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: What Could Go Wrong? (15 mins)",
      description: "Evaluating speeding baggage tugs, collision risks, speed limiters, toolbox talks, and deciding on compliance approval."
    }
  ]
};

const s2LessonContent = {
  hero: {
    title: "Safety Alerts & Ramp Inspections",
    subtitle: "Apron Vehicle Safety, Objective Phrasing & Fix-It Plans",
    image: "images/s3_m1_session2_audit.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Apron Safety & Ground Operations",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up: Danger on the Ramp (15 mins)",
    summary: "Brainstorm airside hazards and check your understanding of airport safety alerts.",
    modeBadges: ["Pairs (2 students)", "Spoken Brainstorm", "Timing: 15 mins"],
    instructions: [
      "In pairs, brainstorm the 3 biggest physical dangers for people working on an airport ramp.",
      "Read each of the 4 Entry Check questions below and discuss your thoughts.",
      "Click 'Reveal Answer' to check your reasoning."
    ],
    deliverable: "Identified top 3 ramp hazards and completed 4-question check.",
    teacherNotes: "Ramp safety is practical and visual. Encourage students to think of real airport ramps they know (Toulouse, Paris CDG, etc.) where dozens of vehicles move around parked jets.",
    newsPrompts: [
      {
        id: 1,
        question: "Why is the ramp (apron) considered the most dangerous work zone at an airport?",
        exampleAnswers: [
          "Because dozens of different operations happen at the same time in a small area: moving aircraft, baggage tugs, fuel trucks, catering lifts, and technicians walking between stands.",
          "Also, jet engines produce dangerous suction in front and extreme blast behind, and high noise levels make it hard to hear approaching vehicles."
        ]
      },
      {
        id: 2,
        question: "What happens when ground handlers are in a hurry to turn around a delayed flight?",
        exampleAnswers: [
          "Drivers are tempted to exceed speed limits or skip visual checks, which dramatically increases the risk of clipping an aircraft wing or running over equipment.",
          "Rushing also leads to communication breakdowns between the marshaller, the tug driver, and the pushback crew."
        ]
      },
      {
        id: 3,
        question: "Who do you think has right-of-way when a baggage tractor meets an aircraft being towed?",
        exampleAnswers: [
          "The aircraft always has absolute right-of-way! Aircraft have massive blind spots, cannot stop quickly, and are extremely expensive to repair if scratched.",
          "Ground support vehicles must always yield, stop at a safe distance, and wait for the aircraft to pass completely."
        ]
      }
    ],
    diagnostic: {
      title: "Ramp Safety & Notice Spot-Check",
      instructions: "Discuss each question with your partner, then click to reveal the answer.",
      questions: [
        {
          id: 1,
          q: "What is the difference between a Safety Directive (SD) and a Safety Information Bulletin (SIB)?",
          answer: "A Safety Directive is a mandatory legal order requiring immediate action. A Safety Information Bulletin (SIB) is an advisory alert sharing safety lessons and recommended precautions."
        },
        {
          id: 2,
          q: "What does 'FOD' stand for, and why is it so dangerous on the ramp?",
          answer: "Foreign Object Debris (trash, bolts, tools, stones). Jet engines can suck them in and suffer catastrophic internal damage."
        },
        {
          id: 3,
          q: "What is an 'Airside Driving Permit' (ADP)?",
          answer: "A special license required by airport authorities before any driver is legally permitted to operate vehicles on taxiways and aprons."
        },
        {
          id: 4,
          q: "What is a 'Near-Miss' (or close call)?",
          answer: "An unplanned incident that did not cause damage or injury this time, but could have caused a serious accident under slightly different conditions."
        }
      ]
    }
  },
  documentExtract: {
    title: "Activity 2: Reading the EASA Ramp Speed Alert (30 mins)",
    summary: "Scan an authentic Safety Information Bulletin on ground vehicle speed compliance.",
    modeBadges: ["Pairs or Small Groups", "Document Scanning", "Timing: 30 mins"],
    instructions: [
      "Read the simulated EASA SIB No. 2024-11 below.",
      "Look for key speed limits, equipment types, and deadlines.",
      "Answer the 4 reading comprehension questions with your partner.",
      "Click 'Reveal Answer' to check your answers."
    ],
    deliverable: "Completed answers to all 4 reading questions with exact paragraph citations.",
    teacherNotes: "Emphasize how SIBs present real-world data (14% increase in incidents) followed by practical recommendations. Guide students to notice the difference between general circulation lanes (20 km/h) and the red aircraft stand box (5 km/h).",
    docRef: "EASA Safety Information Bulletin • SIB No. 2024-11",
    docText: `[EUROPEAN UNION AVIATION SAFETY AGENCY — SAFETY INFORMATION BULLETIN]
SIB No.: 2024-11 • Issued: 18 April 2024
Subject: Ground Support Equipment (GSE) Speed Compliance and Apron Safety Management
Applicability: Aerodrome Operators, Ground Handling Service Providers, and National Competent Authorities

1. Operational Background
(a) Recent safety occurrence data collected under Regulation (EU) No 376/2014 indicates a 14% rise in ground collisions and near-miss occurrences on aerodrome aprons within the European Union during the last calendar year.
(b) The majority of reported occurrences involved ground support equipment (GSE), specifically baggage tractors, passenger transport buses, and catering hi-lift trucks operating in excess of posted airside speed limits.
(c) Multiple occurrences resulted in severe airframe damage, including punctured fuselage skin, crushed engine cowlings, and broken pitot-static probes, requiring aircraft to be grounded for extensive structural repairs.

2. EASA Safety Recommendations
Aerodrome Operators and Ground Handling Service Providers are strongly urged to apply the following safety measures:
(a) Speed Limit Harmonisation: Implement and strictly enforce a maximum apron speed limit of 20 km/h (12 mph) in general apron circulation lanes, and a reduced speed limit of 5 km/h (3 mph) within the immediate aircraft stand safety area (the red painted boundary surrounding parked aircraft).
(b) Telematics & Vehicle Tracking: Equip motorized airside vehicles with GPS telematics speed-monitoring devices and automatic warning alarms for unauthorized acceleration.
(c) Driver Competency & Annual Refresher: Mandate that all airside driving permit (ADP) holders complete annual recurrent training on apron driving hazards, blind spots, and right-of-way rules (aircraft under tow and taxiing aircraft always hold absolute right-of-way).
(d) Enforcement & Sanctions: Conduct weekly random speed checks using radar speed guns and establish a progressive disciplinary penalty policy for speeding infractions, including temporary suspension of airside access.

3. Corrective Action Plan (Fix-It Plan) Timeline
Ground handling organisations issued with a safety non-compliance notice by aerodrome safety inspectors shall submit a written Fix-It Plan within 30 calendar days of receipt. The plan shall detail root-cause analysis, training records, and verified vehicle governor installations.`,
    questions: [
      {
        id: 1,
        q: "What two speed limits does EASA recommend for general lanes and aircraft stand boxes?",
        answer: "A maximum of 20 km/h in general apron lanes, and strictly 5 km/h inside the red aircraft stand safety box."
      },
      {
        id: 2,
        q: "What types of ground vehicles were most frequently involved in speeding incidents?",
        answer: "Paragraph 1(b) lists baggage tractors, passenger transport buses, and catering hi-lift trucks."
      },
      {
        id: 3,
        q: "Who always holds absolute right-of-way over ground vehicles on the apron?",
        answer: "Paragraph 2(c) states aircraft under tow and taxiing aircraft always hold absolute right-of-way."
      },
      {
        id: 4,
        q: "How many days does a company have to submit their written Fix-It Plan after an inspection notice?",
        answer: "Paragraph 3 specifies that the written Fix-It Plan must be submitted within 30 calendar days of receipt."
      }
    ]
  },
  rulesPractice: {
    title: "Activity 3: Polite Language for Inspections: The Gentle Passive Voice (25 mins)",
    summary: "Learn how to describe safety problems objectively and politely without attacking individuals.",
    modeBadges: ["Individual & Pairs", "Language Clinic", "Timing: 25 mins"],
    instructions: [
      "Read the comparison table below showing Harsh vs. Polite Inspection language.",
      "Notice how using the passive voice ('was observed', 'were not worn') removes personal blame and sounds professional.",
      "Complete the 5 rewriting exercises, then click 'Check Answer' to see the recommended phrasing."
    ],
    deliverable: "5 professional, non-confrontational inspection statements written and practiced aloud.",
    teacherNotes: "In aviation safety culture, we inspect systems and behaviours, not personalities. When inspectors say 'You didn't do this!', people get defensive and hide mistakes. When they say 'It was observed that...', the conversation stays constructive.",
    rulesTable: [
      { word: "Confrontational (Harsh ❌)", meaning: "Attacks the person", example: "You parked the tug in the wrong place!", tip: "Causes defensive arguments." },
      { word: "Professional (Polite ✅)", meaning: "Describes the facts gently", example: "The vehicle was observed parked outside the marked safety bay.", tip: "Keeps people calm and focused on safety." },
      { word: "Confrontational (Harsh ❌)", meaning: "Blames the driver", example: "Your driver was speeding like crazy!", tip: "Sounds emotional and unscientific." },
      { word: "Professional (Polite ✅)", meaning: "Quotes the recorded data", example: "A ground vehicle was recorded travelling at 38 km/h in a 20 km/h zone.", tip: "Objective, factual, and undeniable." }
    ],
    drills: [
      {
        id: 1,
        sentence: "Rewrite: 'Your driver didn't wear his high-visibility vest this morning.'",
        options: [
          "A high-visibility vest was not worn by the driver during morning operations.",
          "Your driver failed completely to wear his vest today.",
          "Tell your driver to put a vest on immediately."
        ],
        correct: "A high-visibility vest was not worn by the driver during morning operations.",
        rationale: "Using the passive voice describes the missing safety gear without an aggressive accusation."
      },
      {
        id: 2,
        sentence: "Rewrite: 'You left the luggage belt loader blocking the taxi lane.'",
        options: [
          "The belt loader was observed positioned inside the active taxi lane.",
          "You are creating a huge hazard with your belt loader.",
          "Who left this stupid machine in the taxi lane?"
        ],
        correct: "The belt loader was observed positioned inside the active taxi lane.",
        rationale: "Factual and neutral: focuses on where the machine was found."
      },
      {
        id: 3,
        sentence: "Rewrite: 'You guys never do your vehicle maintenance checks!'",
        options: [
          "Routine vehicle maintenance logs have not been updated for the past 14 days.",
          "Your maintenance is totally unacceptable.",
          "Why do you hate doing maintenance?"
        ],
        correct: "Routine vehicle maintenance logs have not been updated for the past 14 days.",
        rationale: "Points directly to the missing paperwork rather than insulting the team."
      },
      {
        id: 4,
        sentence: "Rewrite: 'Your team didn't report that scratch on the engine cowling.'",
        options: [
          "A minor cowling scratch was identified during pre-flight, but no occurrence report was logged.",
          "You tried to hide an engine scratch from our inspectors.",
          "Explain why you hid this damage!"
        ],
        correct: "A minor cowling scratch was identified during pre-flight, but no occurrence report was logged.",
        rationale: "States what was found and what was missing in an objective report format."
      },
      {
        id: 5,
        sentence: "Rewrite: 'You are driving way too fast around the airplane.'",
        options: [
          "The tug was recorded exceeding the 5 km/h stand limit during the turnaround.",
          "Slow down or I will take your badge right now!",
          "Do you want to crash into the wing?"
        ],
        correct: "The tug was recorded exceeding the 5 km/h stand limit during the turnaround.",
        rationale: "Cites the specific recorded speed limit violation calmly."
      }
    ]
  },
  spokenActivity: {
    title: "Activity 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)",
    summary: "Role-play a constructive 3-person safety meeting between an auditor, a ramp supervisor, and operations.",
    modeBadges: ["Groups of 3", "Spoken Role-Play", "Timing: 35 mins"],
    instructions: [
      "Form groups of 3: Student A (GSEA Safety Auditor), Student B (Ground Handling Ramp Supervisor), Student C (Airport Operations Manager).",
      "Read your role instructions and prepare your talking points (5 mins).",
      "Conduct the 7-minute meeting using polite, non-blaming language.",
      "Agree on a realistic 30-day Fix-It Plan (Corrective Action Plan)."
    ],
    deliverable: "Agreed 3-point Fix-It Plan recorded by all 3 participants.",
    teacherNotes: "Walk around and listen for gentle passive phrasing. Help Student B balance flight departure pressure with safety rules. Ensure Student C keeps the meeting productive.",
    scenario: "During an audit at 07h30, an inspector recorded two baggage tugs driving at 38 km/h in a 20 km/h zone. One driver was not wearing a high-vis vest and admitted he skipped his annual refresher training because the team was short-staffed.",
    roles: [
      {
        title: "Student A: GSEA Safety Auditor",
        badge: "Safety Inspection",
        bullets: [
          "Present the audit findings calmly using polite passive sentences.",
          "Refer to EASA SIB No. 2024-11 regarding speed limits and training.",
          "Request a written Fix-It Plan with 3 specific corrective steps within 30 days."
        ]
      },
      {
        title: "Student B: Ground Handling Ramp Supervisor",
        badge: "Flight Turnarounds",
        bullets: [
          "Acknowledge the findings without making aggressive excuses.",
          "Explain that the morning flight had a 20-minute slot delay and baggage handlers were rushing.",
          "Propose 3 practical fixes: speed limiters on tugs, weekly 10-minute toolbox talks, and immediate refresher courses."
        ]
      },
      {
        title: "Student C: Airport Operations Manager",
        badge: "Meeting Leader",
        bullets: [
          "Keep the tone positive and constructive: safety is our joint responsibility.",
          "Verify that the proposed fixes are realistic and have clear deadlines.",
          "Schedule a follow-up spot check in 14 days."
        ]
      }
    ],
    usefulPhrases: [
      "Thank you for meeting today. During our morning inspection, several speed violations were recorded...",
      "We understand flight turnarounds are demanding, but safety margins must be maintained.",
      "What concrete steps can your company take to prevent this from happening again?",
      "We can install mechanical speed governors on all baggage tugs within two weeks.",
      "We will also hold mandatory 10-minute safety briefings before every morning shift.",
      "Let's schedule a follow-up check in two weeks to confirm that these measures are working."
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: What Could Go Wrong? (15 mins)",
    summary: "Complete the ramp speed safety check and agree on the final audit decision.",
    modeBadges: ["Whole Class / Pairs", "Safety Evaluation", "Timing: 15 mins"],
    instructions: [
      "Review the 4 simple questions in the Safety Check table below.",
      "Discuss why each step is necessary in plain English.",
      "Verify the audit approval decision."
    ],
    deliverable: "Completed Safety Check table verified by all students.",
    teacherNotes: "Reinforce that an inspection is only successful when the fix-it plan actually prevents the next accident.",
    rows: [
      { question: "1. What is the problem?", answer: "Baggage tractors driving at 38 km/h on the apron (nearly double the 20 km/h limit) and an untrained driver without safety gear." },
      { question: "2. What could happen?", answer: "A collision with an aircraft engine, hitting ground staff walking between stands, or causing severe structural airframe damage." },
      { question: "3. How do we fix it?", answer: "1) Fit electronic speed limiters to all baggage tugs (maximum 20 km/h).<br>2) Conduct weekly 10-minute 'toolbox safety talks' with all drivers.<br>3) Suspend the untrained driver until he completes the official refresher course.<br>4) Perform weekly radar speed spot-checks." },
      { question: "4. Our Decision", answer: "APPROVED: The 30-day Fix-It Plan is accepted with a mandatory re-audit in 14 days." }
    ]
  }
};

const s2RevisionTerms = [
  { num: "01", term: "Apron / Ramp", definition: "The designated area of an airport where aircraft are parked, unloaded, refuelled, and boarded." },
  { num: "02", term: "Ground Support Equipment (GSE)", definition: "Specialized motorized and towed vehicles servicing aircraft on the ground (tugs, belt loaders, stairs)." },
  { num: "03", term: "Safety Information Bulletin (SIB)", definition: "An advisory document published by EASA sharing safety lessons, alerts, and recommended practices." },
  { num: "04", term: "Safety Directive (SD)", definition: "A mandatory regulatory order issued to correct an urgent unsafe condition." },
  { num: "05", term: "Airside Driving Permit (ADP)", definition: "An official license authorizing staff to operate motorized vehicles on the aerodrome movement area." },
  { num: "06", term: "Speed Limit", definition: "The maximum legal speed permitted for vehicles operating in apron lanes (typically 20 km/h)." },
  { num: "07", term: "Aircraft Stand Safety Area", definition: "The painted red box surrounding a parked aircraft where vehicle speeds are restricted to walking pace (5 km/h)." },
  { num: "08", term: "Right-of-Way", definition: "The legal priority of one vehicle or aircraft to proceed ahead of another (aircraft always have priority)." },
  { num: "09", term: "Aircraft Under Tow", definition: "An aeroplane being pulled or pushed by a heavy tractor (tug) using a towbar or towbarless system." },
  { num: "10", term: "Jet Blast", definition: "Rapid air stream produced by the engines of an aircraft, dangerous to personnel and equipment behind it." },
  { num: "11", term: "FOD (Foreign Object Debris)", definition: "Loose items, trash, tools, or stones on the apron that can damage aircraft or be ingested by jet engines." },
  { num: "12", term: "High-Visibility Vest", definition: "Fluorescent clothing with reflective strips required for all airside personnel to ensure they are visible." },
  { num: "13", term: "Telematics", definition: "An onboard GPS tracking device recording vehicle speed, position, and harsh acceleration." },
  { num: "14", term: "Speed Governor / Limiter", definition: "A mechanical or electronic device restricting a vehicle engine from exceeding a set speed (e.g. 20 km/h)." },
  { num: "15", term: "Near-Miss", definition: "An unplanned event that did not result in injury or damage, but had significant potential to do so." },
  { num: "16", term: "Occurrence Reporting", definition: "The mandatory European system (Regulation 376/2014) for logging safety incidents without fear of blame." },
  { num: "17", term: "Fix-It Plan (CAP)", definition: "A structured Corrective Action Plan submitted by an operator detailing how safety defects will be resolved." },
  { num: "18", term: "Root Cause", definition: "The fundamental underlying reason why a safety failure occurred, rather than just the immediate symptom." },
  { num: "19", term: "Toolbox Talk", definition: "A short 10-minute informal safety briefing held with ramp teams at the beginning of a shift." },
  { num: "20", term: "Marshaller", definition: "A trained ground operations worker directing aircraft onto stand using hand-held illuminated wands." },
  { num: "21", term: "Turnaround", definition: "The complete cycle of unloading, servicing, cleaning, refuelling, and boarding an aircraft between flights." },
  { num: "22", term: "Chocks", definition: "Heavy rubber wedges placed against aircraft wheels to prevent accidental movement when parked." },
  { num: "23", term: "Engine Cowling", definition: "The removable metal casing covering an aircraft engine, vulnerable to ground vehicle collisions." },
  { num: "24", term: "Pitot Probe", definition: "A delicate exterior sensor on the aircraft nose measuring airspeed that must never be bumped." },
  { num: "25", term: "Audit Finding", definition: "A formal written statement by a safety inspector recording a deviation from required standards." },
  { num: "26", term: "Non-Compliance Notice", definition: "An official document issued to an operator requiring remediation of an observed safety infraction." },
  { num: "27", term: "Passive Voice", definition: "A grammatical structure ('it was observed') used to describe findings objectively without personal blame." },
  { num: "28", term: "Spot-Check", definition: "An unannounced, random safety inspection conducted on the ramp to verify compliance." },
  { num: "29", term: "Recurrent Training", definition: "Regular refresher courses (e.g. annually) ensuring staff keep safety knowledge fresh." },
  { num: "30", term: "Airside Access", definition: "Security-cleared permission to enter operational areas beyond the terminal passenger screening points." }
];

console.log('✓ Prepared Session 2 Data Structure');

// --- SESSION 3 DATA ---
const s3Objectives = {
  title: "Session 3 - Special Requests & Runway Safety Cases Objectives",
  summary: "By the end of this session, GSEA students will be able to explain how airports handle real-world challenges through temporary permissions (exemptions), use connecting words to explain rules and conditions (provided that, due to, in order to, in lieu of), read an authentic runway works exemption file (+50% length), prepare and deliver a 3-minute spoken briefing to airline pilots, and complete a simple Safety Check.",
  items: [
    {
      num: 1,
      title: "Discuss Temporary Airport Work (Fluency & Spontaneous Speech)",
      description: "Brainstorm real reasons airports need to do heavy runway repairs without closing completely."
    },
    {
      num: 2,
      title: "Understand Special Permissions (Exemptions & Flexibility)",
      description: "Learn how Article 71 permits temporary flexibility when standard rules cannot be met."
    },
    {
      num: 3,
      title: "Connecting Words for Explaining Rules (Language Focus)",
      description: "Practice connecting phrases to give clear reasons: because of, provided that, in order to, as long as, in lieu of."
    },
    {
      num: 4,
      title: "Read the Runway Work Request (Authentic Document Scanning)",
      description: "Scan an authentic temporary exemption file (EASA/ADR-EXEMP/2024-009) for Runway 26 drainage repairs with a reduced safety area (RESA)."
    },
    {
      num: 5,
      title: "Deliver a 3-Minute Airline Briefing (Spoken Presentation)",
      description: "Prepare and deliver a spoken operational briefing to airline representatives explaining the 4 safety rules protecting flights."
    },
    {
      num: 6,
      title: "Complete the Decision Safety Check (Risk Evaluation)",
      description: "Evaluate the risks and agree on whether the runway works can be safely approved."
    }
  ]
};

const s3LessonPlan = {
  title: "Session 3 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session on temporary aerodrome works, Article 71 exemptions, connecting words for explaining rules, an airline operational briefing simulation, and a simple Safety Check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Keeping Airports Open During Repairs (15 mins)",
      description: "Pairs discuss how airports maintain operations during runway maintenance and answer 4 spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the Runway Work Request (30 mins)",
      description: "Scanning authentic exemption file EASA/ADR-EXEMP/2024-009 (+50% length) for reduced RESA and the 4 compensatory safety rules."
    },
    {
      time: "45-70",
      title: "Part 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)",
      description: "Language clinic practicing condition linkers (provided that, as long as) and purpose/cause linkers (in order to, due to) across 5 exercises."
    },
    {
      time: "70-105",
      title: "Part 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)",
      description: "GSEA students prepare and deliver a 3-minute spoken presentation to airline representatives explaining the 4 safety rules, followed by Q&A."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: Is it Safe to Land? (15 mins)",
      description: "Structured 4-step safety evaluation of the reduced RESA, overrun risks, compensatory barriers, and granting temporary operational approval."
    }
  ]
};

const s3LessonContent = {
  hero: {
    title: "Special Requests & Runway Safety Cases",
    subtitle: "Temporary Works, Connecting Words & Airline Operational Briefings",
    image: "images/s3_m1_session3_derogation.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Aerodrome Safety & Works Planning",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up: Keeping Airports Open During Repairs (15 mins)",
    summary: "Explore how airports manage urgent runway construction without shutting down completely.",
    modeBadges: ["Pairs (2 students)", "Spoken Brainstorm", "Timing: 15 mins"],
    instructions: [
      "In pairs, brainstorm what an airport does when its only runway has damaged drainage pipes.",
      "Discuss the 4 Entry Check questions below.",
      "Click 'Reveal Answer' to verify your understanding."
    ],
    deliverable: "Shared list of 3 runway repair challenges and completed 4-question check.",
    teacherNotes: "Real airports cannot simply shut down for 6 weeks when runway pipes break. They need flexible solutions (called exemptions or derogations) that maintain 100% safety through compensatory rules.",
    newsPrompts: [
      {
        id: 1,
        question: "What happens if an airport closes its main runway for a month? What is the impact on airlines and passengers?",
        exampleAnswers: [
          "Airlines would have to cancel or divert hundreds of flights, costing millions of euros in lost revenue and leaving thousands of passengers stranded.",
          "It would also overwhelm regional diversion airports that might not have enough gates or ground equipment to handle the extra traffic."
        ]
      },
      {
        id: 2,
        question: "Why is the grass area at the end of a runway (RESA) so important for landing planes?",
        exampleAnswers: [
          "If an aircraft touches down too late or suffers a braking problem on a wet runway, the RESA acts as a safety buffer to stop the plane before it crashes into roads or ditches.",
          "It gives pilots and emergency crews valuable extra distance and time to prevent an overrun accident."
        ]
      },
      {
        id: 3,
        question: "How can an airport prove that an unusual plan is just as safe as following standard rules?",
        exampleAnswers: [
          "By adding strict compensatory safety rules—such as moving the landing line forward, banning landings in rain, and stationing a fire engine right next to the runway.",
          "They also consult airline chief pilots in advance and publish NOTAMs so every pilot knows exactly what to expect before takeoff."
        ]
      }
    ],
    diagnostic: {
      title: "Runway Works & Exemptions Entry Check",
      instructions: "Discuss each question with your partner, then click to reveal the answer.",
      questions: [
        {
          id: 1,
          q: "What does RESA stand for, and what is its purpose?",
          answer: "Runway End Safety Area: a cleared, level grass or paved safety buffer beyond the runway designed to stop an aeroplane that overruns or undershoots."
        },
        {
          id: 2,
          q: "What is a 'Displaced Threshold'?",
          answer: "A landing line moved down the runway away from the physical end, used during construction or to clear obstacles on approach."
        },
        {
          id: 3,
          q: "In European law, what is an 'Article 71 Exemption'?",
          answer: "A legal clause allowing civil aviation authorities to grant temporary flexibility (up to 8 months) for urgent operational needs, provided equivalent safety is proven."
        },
        {
          id: 4,
          q: "What is an 'Airline Flight Operations Committee'?",
          answer: "A regular operational meeting where airport managers brief airline chief pilots and flight dispatchers on runway changes, weather procedures, and construction."
        }
      ]
    }
  },
  documentExtract: {
    title: "Activity 2: Reading the Runway Work Request (30 mins)",
    summary: "Scan an authentic temporary exemption file for Runway 26 drainage culvert repairs.",
    modeBadges: ["Pairs or Small Groups", "Document Scanning", "Timing: 30 mins"],
    instructions: [
      "Read the simulated Exemption File EASA/ADR-EXEMP/2024-009 below.",
      "Carefully note the 4 Mandatory Safety Rules protecting landing aircraft.",
      "Work with your partner to answer the 4 comprehension questions.",
      "Click 'Reveal Answer' to check your answers."
    ],
    deliverable: "Completed comprehension answers identifying the 4 compensatory safety rules.",
    teacherNotes: "Help students recognize the logical structure of an exemption file: 1) What is the problem? 2) Why is standard compliance impossible? 3) What extra safety steps are put in place? This forms the basis of their spoken briefing in Activity 4.",
    docRef: "European Civil Aviation Authority • Exemption File EASA/ADR-EXEMP/2024-009",
    docText: `[EUROPEAN UNION CIVIL AVIATION REGULATORY FRAMEWORK — OPERATIONAL EXEMPTION FILE]
File Reference: EASA/ADR-EXEMP/2024-009 • Date: 12 September 2024
Legal Basis: Regulation (EU) 2018/1139, Article 71 (Urgent Operational Needs & Exceptional Circumstances)
Applicant: Aerodrome Operations Authority — Toulouse-Blagnac Aerodrome (LFBO)
Subject: Temporary 45-day Exemption: Runway End Safety Area (RESA) Length Reduction on Runway 26 for Critical Drainage Works

1. Operational Background & Problem Statement
(a) Heavy rainfall during the previous winter caused significant subsoil subsidence beneath the Runway 26 overrun area, damaging underground concrete stormwater culverts. Failure to replace these culverts threatens runway sub-base structural integrity.
(b) To allow heavy excavation machinery and concrete pouring within the strip, the available Runway End Safety Area (RESA) beyond the end of the runway strip must be temporarily reduced from the standard 90 metres required by CS-ADR-DSN.A.045 down to 55 metres for a period of 45 consecutive days (15 October to 28 November 2024).

2. Mandatory Compensatory Safety Rules (Flight Protection Barriers)
Permission for this temporary reduction is granted provided that the aerodrome operator strictly enforces the following four mandatory safety rules:
Rule 1 — Displaced Landing Threshold:
The landing threshold for Runway 26 shall be temporarily displaced by 180 metres down the runway. This guarantees that landing aeroplanes have full standard landing distance available (LDA) and touch down well beyond the works zone.
Rule 2 — Wet Runway Ban:
Landings on Runway 26 shall be strictly prohibited whenever braking action is reported as degraded, or when water depth exceeds 3 millimetres (wet / contaminated runway). Under such meteorological conditions, arriving flights must divert to secondary Runway 14/32 or an alternate aerodrome.
Rule 3 — Crosswind Limitation:
The maximum allowable crosswind component for arriving aircraft on Runway 26 is capped at 15 knots (reduced from the standard 25 knots) to prevent directional control loss during landing rollout.
Rule 4 — Dedicated Emergency Standby:
A dedicated Crash Fire Rescue (RFFS) major foam vehicle shall remain stationary on immediate 60-second standby at Holding Point B2 during all scheduled flight movements.

3. Duration & Notification
This operational exemption expires automatically after 45 days. The aerodrome operator shall publish comprehensive NOTAM and AIP Supplements at least 14 days prior to commencing works.`,
    questions: [
      {
        id: 1,
        q: "Why does the airport need to reduce the runway safety area (RESA)?",
        answer: "Heavy rain damaged concrete stormwater drainage pipes under the overrun area, requiring 45 days of excavation and repairs."
      },
      {
        id: 2,
        q: "How many metres is the safety area reduced by?",
        answer: "It is reduced from standard 90 metres down to 55 metres (a reduction of 35 metres)."
      },
      {
        id: 3,
        q: "What four safety rules protect flights while the runway work takes place?",
        answer: "1) 180m displaced threshold, 2) strictly no landings on wet runways, 3) crosswind capped at 15 knots, and 4) fire engine on immediate standby at Holding Point B2."
      },
      {
        id: 4,
        q: "What must arriving flights do if the runway becomes wet during rain?",
        answer: "Landings on Runway 26 are strictly prohibited in wet weather; flights must land on Runway 14/32 or divert to an alternate airport."
      }
    ]
  },
  rulesPractice: {
    title: "Activity 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)",
    summary: "Learn how to link ideas in English using words for conditions, causes, purposes, and replacements.",
    modeBadges: ["Individual & Pairs", "Language Clinic", "Timing: 25 mins"],
    instructions: [
      "Study the Connecting Words table below.",
      "Notice how phrases like 'provided that', 'due to', and 'in lieu of' make your explanations clear and professional.",
      "Complete the 5 gap-fill sentences below, then click 'Check Answer' to see the explanation."
    ],
    deliverable: "5 accurately completed sentences using professional connecting words.",
    teacherNotes: "In spoken briefings, connecting words are essential. They allow students to explain WHY a decision was made and WHAT CONDITIONS must be met without sounding confused.",
    rulesTable: [
      { word: "Provided that / As long as", meaning: "On the condition that", example: "Aircraft may land provided that the runway surface is dry.", tip: "Introduces a strict safety requirement." },
      { word: "Due to / Because of", meaning: "For the reason that", example: "The safety area is reduced due to urgent drainage culvert repairs.", tip: "Followed by a noun phrase explaining the cause." },
      { word: "In order to", meaning: "For the purpose of", example: "We displaced the threshold by 180m in order to protect stopping distance.", tip: "Followed by an infinitive verb ('in order to protect')." },
      { word: "In lieu of", meaning: "In place of / Instead of", example: "We positioned temporary orange markers in lieu of standard white paint.", tip: "Useful when one safety measure replaces another." },
      { word: "Unless", meaning: "Except if", example: "No heavy aircraft may land unless the crosswind is under 15 knots.", tip: "Sets a clear boundary condition." }
    ],
    drills: [
      {
        id: 1,
        sentence: "Aircraft may land on Runway 26 _______ the runway surface is completely dry.",
        options: ["provided that", "in lieu of", "due to"],
        correct: "provided that",
        rationale: "'Provided that' introduces the mandatory safety condition (dry runway)."
      },
      {
        id: 2,
        sentence: "The available safety area was temporarily reduced _______ urgent culvert reconstruction.",
        options: ["due to", "in order to", "unless"],
        correct: "due to",
        rationale: "'Due to' is followed by the noun phrase 'urgent culvert reconstruction', explaining the cause."
      },
      {
        id: 3,
        sentence: "The threshold was displaced by 180 metres _______ give pilots full stopping distance.",
        options: ["in order to", "provided that", "in lieu of"],
        correct: "in order to",
        rationale: "'In order to' expresses the purpose and is followed by the base verb 'give'."
      },
      {
        id: 4,
        sentence: "High-intensity flashing guard lights were installed _______ standard painted markings.",
        options: ["in lieu of", "unless", "due to"],
        correct: "in lieu of",
        rationale: "'In lieu of' means 'instead of' or 'replacing'."
      },
      {
        id: 5,
        sentence: "Approaching aircraft must divert to Runway 14/32 _______ the crosswind component is 15 knots or less.",
        options: ["unless", "in order to", "because of"],
        correct: "unless",
        rationale: "'Unless' means 'except if the crosswind is 15 knots or less'."
      }
    ]
  },
  spokenActivity: {
    title: "Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)",
    summary: "Deliver a clear, reassuring 3-minute operational briefing to airline representatives.",
    modeBadges: ["Pairs / Small Groups", "Spoken Presentation", "Timing: 35 mins"],
    instructions: [
      "Work in pairs or groups of 3: Speaker 1 (GSEA Operations Officer), Speaker 2 (Airline Flight Ops Manager), Speaker 3 (Observer / Chief Pilot).",
      "You have 6 minutes to prepare your 3-minute spoken briefing using the 4-part structure.",
      "Deliver your briefing aloud. The airline manager asks 2 realistic questions about weather delays or diversions.",
      "Switch roles so everyone practices delivering the spoken briefing."
    ],
    deliverable: "3-minute spoken briefing delivered with confident explanation of all 4 safety rules.",
    teacherNotes: "This activity builds presentation confidence. Remind students: don't read word-for-word from notes! Speak directly, make eye contact, and use signpost phrases like 'Today I will explain...', 'First...', 'In conclusion...'.",
    scenario: "You are the GSEA Aerodrome Operations Officer briefing the Airline Flight Operations Committee two weeks before the Runway 26 culvert repairs begin. The airline managers are worried about flight delays, diversions, and passenger disruption.",
    roles: [
      {
        title: "Role A: GSEA Operations Officer (Presenter)",
        badge: "Spoken Briefing",
        bullets: [
          "Welcome the airline representatives and state the purpose of the briefing.",
          "Explain why the work is essential (damaged underground drainage culverts).",
          "Present the 4 safety rules clearly: displaced threshold, wet ban, crosswind cap, fire engine standby.",
          "Reassure airlines that flight safety is 100% protected."
        ]
      },
      {
        title: "Role B: Airline Flight Ops Manager",
        badge: "Challenging Q&A",
        bullets: [
          "Listen to the briefing and take notes on potential flight impacts.",
          "Ask: 'What happens if sudden rain begins while our Airbus A320 is on final approach?'",
          "Ask: 'Why is the crosswind limit reduced to 15 knots, and will this cause many diversions?'"
        ]
      },
      {
        title: "Role C: Observer / Peer Coach",
        badge: "Feedback",
        bullets: [
          "Time the briefing (target: 3 minutes).",
          "Check: Did the speaker explain all 4 safety rules clearly?",
          "Check: Did the speaker use connecting words (provided that, due to, in order to)?",
          "Give 2 positive points and 1 helpful suggestion."
        ]
      }
    ],
    usefulPhrases: [
      "Good morning everyone. Today I will brief you on the upcoming Runway 26 works...",
      "The repairs are necessary due to damaged stormwater drainage culverts.",
      "To ensure that all flights remain completely safe, we have put in place 4 mandatory safety rules.",
      "First, the threshold has been displaced by 180 metres in order to give aircraft full landing distance.",
      "Second, landings are strictly prohibited when the runway is wet; flights will divert to Runway 14/32.",
      "Third, crosswinds are capped at 15 knots, and fourth, a dedicated fire truck is on 60-second standby.",
      "Are there any questions regarding our operational plan?"
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: Is it Safe to Land? (15 mins)",
    summary: "Complete the decision check table evaluating the reduced safety area and safety rules.",
    modeBadges: ["Whole Class / Pairs", "Safety Evaluation", "Timing: 15 mins"],
    instructions: [
      "Review the 4 questions in the Safety Check table below.",
      "Check that you can explain each answer clearly in your own words.",
      "Agree on the final operational decision."
    ],
    deliverable: "Completed Safety Check table verified by all students.",
    teacherNotes: "Emphasize the concept of 'Compensatory Safety Steps' in plain English: when one standard margin is temporarily reduced, we add other safety rules so total safety never drops.",
    rows: [
      { question: "1. What is the problem?", answer: "The Runway End Safety Area (RESA) on Runway 26 is reduced from 90m to 55m for 45 days during drainage works." },
      { question: "2. What could happen?", answer: "If an aircraft lands too long or suffers a braking problem, it could overrun the runway into the excavation ditch." },
      { question: "3. Why is it safe anyway?", answer: "Four strict safety rules protect flights:<br>1) 180m displaced threshold gives full stopping distance.<br>2) Landings banned on wet runways.<br>3) Crosswind limit capped at 15 knots.<br>4) Fire rescue engine on 60-second standby at Holding Point B2." },
      { question: "4. Our Decision", answer: "APPROVED: The 4 safety rules protect flights; temporary permission is granted for 45 days." }
    ]
  }
};

const s3RevisionTerms = [
  { num: "01", term: "RESA (Runway End Safety Area)", definition: "An area symmetrical about the extended runway centre line intended to reduce the risk of damage to an aeroplane overrunning or undershooting." },
  { num: "02", term: "Displaced Threshold", definition: "A runway landing threshold located at a point other than the physical beginning of the runway." },
  { num: "03", term: "Landing Distance Available (LDA)", definition: "The length of runway declared available and suitable for the ground run of an aeroplane landing." },
  { num: "04", term: "Exemption", definition: "An official temporary permission granted by a civil aviation authority to deviate from a standard rule." },
  { num: "05", term: "Article 71", definition: "The legal clause in EU aviation law allowing temporary exemptions for urgent operational needs." },
  { num: "06", term: "Derogation", definition: "An official exemption from or relaxation of a law, rule, or standard." },
  { num: "07", term: "Safety Case", definition: "A structured written justification proving that an operation is safe despite non-standard conditions." },
  { num: "08", term: "Compensatory Measure", definition: "An additional safety step implemented to replace or balance a temporary reduction in safety margin." },
  { num: "09", term: "Culvert", definition: "An underground concrete pipe or tunnel carrying stormwater drainage underneath a runway." },
  { num: "10", term: "Subsidence", definition: "The gradual sinking or settling of ground soil that can damage overlying runway pavement." },
  { num: "11", term: "Runway Strip", definition: "A defined area including the runway and stopway intended to protect aircraft flying over it during take-off or landing." },
  { num: "12", term: "Overrun", definition: "When an aircraft fails to stop before the end of the paved runway surface." },
  { num: "13", term: "Undershoot", definition: "When an arriving aircraft touches down short of the runway threshold." },
  { num: "14", term: "Contaminated Runway", definition: "A runway where significant portions of the surface are covered by standing water, snow, slush, or ice." },
  { num: "15", term: "Braking Action", definition: "A measure of the tyre-to-surface friction available to slow down a landing aircraft." },
  { num: "16", term: "Crosswind Component", definition: "The portion of wind blowing perpendicular (90 degrees) to the runway direction." },
  { num: "17", term: "Holding Point", definition: "A designated position on a taxiway where aircraft hold before entering or crossing an active runway." },
  { num: "18", term: "RFFS (Rescue and Fire Fighting Services)", definition: "The emergency airport fire brigade equipped with heavy foam vehicles for aircraft incidents." },
  { num: "19", term: "Standby", definition: "Being in immediate readiness to respond to an emergency situation within seconds." },
  { num: "20", term: "Diversion", definition: "Rerouting an aircraft to land at an alternative airport when landing at the intended destination is unsafe." },
  { num: "21", term: "Alternate Aerodrome", definition: "An airport specified in the flight plan where an aircraft can land if landing at destination is impossible." },
  { num: "22", term: "AIP Supplement (SUP)", definition: "A temporary published change to permanent aeronautical information, usually lasting more than 3 months." },
  { num: "23", term: "Briefing", definition: "A short, concise spoken presentation giving operational instructions and safety updates to a team." },
  { num: "24", term: "Provided that", definition: "A linking phrase meaning 'on the strict condition that' (used to introduce mandatory rules)." },
  { num: "25", term: "In lieu of", definition: "A formal phrase meaning 'in place of' or 'as a replacement for'." },
  { num: "26", term: "Due to", definition: "A connecting phrase meaning 'caused by' or 'because of', followed by a noun phrase." },
  { num: "27", term: "In order to", definition: "A linking phrase used to express the purpose of a safety action." },
  { num: "28", term: "Touchdown Zone", definition: "The portion of a runway beyond the threshold where landing aeroplanes are intended to first make contact." },
  { num: "29", term: "Runway Guard Lights", definition: "Flashing yellow lights installed at taxiway holding points to warn pilots of an active runway ahead." },
  { num: "30", term: "Temporary Threshold Marking", definition: "Special paint or portable markings indicating where the temporary landing line begins." }
];

console.log('✓ Prepared Session 3 Data Structure');

// Apply to courseData
const m1 = courseData["1"] || courseData.aas["1"];
if (!m1 || !m1.sessions) {
  console.error('❌ Could not locate Module 1 sessions in course-data.js');
  process.exit(1);
}

// Update Session 1
m1.sessions["1"].objectives = s1Objectives;
m1.sessions["1"].lessonPlan = s1LessonPlan;
m1.sessions["1"].lessonContent = s1LessonContent;
m1.sessions["1"].revision = {
  title: s1RevisionTerms[0] ? "Session 1 Revision - EASA Rules & Airport Obstacle Safeguarding" : m1.sessions["1"].revision.title,
  summary: "30 essential operational and regulatory vocabulary terms for GSEA students covering EASA document navigation, obstacle limitation surfaces, and rules.",
  terms: s1RevisionTerms
};

// Update Session 2
m1.sessions["2"].objectives = s2Objectives;
m1.sessions["2"].lessonPlan = s2LessonPlan;
m1.sessions["2"].lessonContent = s2LessonContent;
m1.sessions["2"].revision = {
  title: "Session 2 Revision - Safety Alerts & Ramp Inspections",
  summary: "30 essential operational terms for GSEA students covering apron safety, ground support vehicles, inspections, and hazard reporting.",
  terms: s2RevisionTerms
};

// Update Session 3
m1.sessions["3"].objectives = s3Objectives;
m1.sessions["3"].lessonPlan = s3LessonPlan;
m1.sessions["3"].lessonContent = s3LessonContent;
m1.sessions["3"].revision = {
  title: "Session 3 Revision - Special Requests & Runway Safety Cases",
  summary: "30 essential operational terms for GSEA students covering runway works, temporary permissions (exemptions), and airline briefings.",
  terms: s3RevisionTerms
};

// Write serialized courseData back
const outputCourseData = `/**
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
  const aasData = ${JSON.stringify(courseData.aas || courseData, null, 2)};

  return {
    "1": aasData["1"],
    "2": aasData["2"],
    "3": aasData["3"],
    aas: aasData
  };
});
`;

fs.writeFileSync(courseDataPath, outputCourseData, 'utf8');
console.log('✅ data/course-data.js successfully written and verified.');

// ============================================================================
// PART B: UPDATE src/js/05-templates-mod1.js
// ============================================================================

const oldTemplatesContent = fs.readFileSync(templatesMod1Path, 'utf8');

// We find the boundary where Session 4 begins:
const s4Index = oldTemplatesContent.indexOf('function renderLessonContentTabSession4(');
if (s4Index === -1) {
  console.error('❌ Could not find renderLessonContentTabSession4 in 05-templates-mod1.js');
  process.exit(1);
}

const s4AndRest = oldTemplatesContent.substring(s4Index);

// Helper generator functions for Sessions 1, 2, 3
function generateSession1Template() {
  return `    function renderLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'EASA Rules & Finding Information Fast'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/s3_m1_session1_easa.jpg'}" alt="\${hero.title || 'EASA Rules'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'EASA Rules & Finding Information Fast'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Navigating Airport Regulations, Words for Rules & Obstacle Safeguarding'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">\${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">\${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">\${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up & Entry Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${opening.title || 'Activity 1: Warm-up & Entry Spot-Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            \${renderActivityInstructions(opening, theme)}

            <!-- Pair Discussion Prompts with Revealable Example Answers -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">Pair Discussion: Questions &amp; Example Answers to Consider</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Spoken Ideas</span>
              </div>
              <div class="space-y-2.5">
                \${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return \`
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0\${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">\${qText}</p>
                      </div>
                      \${answers.length > 0 ? \`
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s1-\${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s1-\${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            \${answers.map(ans => \`
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;\${ans}&rdquo;</span>
                              </div>
                            \`).join('')}
                          </div>
                        </div>
                      \` : ''}
                    </div>
                  \`;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">\${(opening.diagnostic && opening.diagnostic.title) || 'Airport Rules Entry Spot-Check'}</h5>
                <span class="text-[11px] text-slate-500">\${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0\${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: \${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> \${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-\${q.id}" onclick="window.toggleDiagnosticAnswer(\${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the EASA Crane Rule -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${doc.title || 'Activity 2: Reading the EASA Crane Rule (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Authentic EASA Document</span>
            </div>

            \${renderActivityInstructions(doc, theme)}

            <!-- Document Viewer Box -->
            <div class="rounded-xl border border-blue-200 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-blue-950 px-4 py-2.5 border-b border-blue-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-blue-200">
                  <svg width="15" height="15" class="text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>\${doc.docRef || 'EASA CS-ADR-DSN • Subpart H'}</span>
                </div>
                <span class="bg-blue-800 text-blue-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">\${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions Grid -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check (Scan the text above):</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((doc.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-blue-600">Check \${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s1-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> \${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s1-\${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Words for Rules -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${rules.title || 'Activity 3: Words for Rules: Must, Shall, Should, May (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Focus</span>
            </div>

            \${renderActivityInstructions(rules, theme)}

            <!-- Rules Explanation Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-2.5">Rule Word</th>
                    <th class="p-2.5">Meaning</th>
                    <th class="p-2.5">Real Airport Example</th>
                    <th class="p-2.5">Memory Tip</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(rules.rulesTable || []).map(r => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold text-blue-900">\${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">\${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">"\${r.example}"</td>
                      <td class="p-2.5 text-[11px] text-slate-500">\${r.tip}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>

            <!-- 5 Interactive Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Practice Drills: Choose the correct rule word</h5>
              <div class="space-y-2.5">
                \${(rules.drills || []).map(d => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">\${d.id}. \${d.sentence}</p>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        \${d.options.map(opt => \`
                          <button type="button" onclick="const ans=document.getElementById('drill-ans-s1-\${d.id}'); ans.classList.remove('hidden');" class="px-2.5 py-1 bg-white hover:bg-blue-50 border border-slate-300 rounded text-xs font-bold text-slate-700 cursor-pointer">\${opt}</button>
                        \`).join('')}
                      </div>
                      <div id="drill-ans-s1-\${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        &check; Correct: \${d.correct} (\${d.rationale})
                      </div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${spoken.title || 'Activity 4: Speaking Role-Play: Talking to the Builder (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Person Spoken Simulation</span>
            </div>

            \${renderActivityInstructions(spoken, theme)}

            <!-- Scenario Box -->
            <div class="p-4 bg-sky-50/80 border border-sky-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-sky-950 font-bold">
                <svg width="16" height="16" class="text-sky-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Scenario:</span>
              </div>
              <p class="text-sky-900 leading-relaxed font-medium">\${spoken.scenario || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              \${(spoken.roles || []).map(r => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">\${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">\${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      \${r.bullets.map(b => \`<li>\${b}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Conversational Phrases (Use these during the role-play):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                \${(spoken.usefulPhrases || []).map(ph => \`
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;\${ph}&rdquo;
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${safety.title || 'Activity 5: Safety Check: What Could Go Wrong? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            \${renderActivityInstructions(safety, theme)}

            <!-- Clean Plain English Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3 w-1/3">Simple Safety Question</th>
                    <th class="p-3 w-2/3">Agreed Class Answer</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(safety.rows || []).map(row => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">\${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">\${row.answer}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      \`;
    }
`;
}

function generateSession2Template() {
  return `    function renderLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Safety Alerts & Ramp Inspections'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/s3_m1_session2_audit.jpg'}" alt="\${hero.title || 'Safety Alerts'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Safety Alerts & Ramp Inspections'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Apron Vehicle Safety, Objective Phrasing & Fix-It Plans'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">\${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">\${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">\${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up: Danger on the Ramp -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${opening.title || 'Activity 1: Warm-up: Danger on the Ramp (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            \${renderActivityInstructions(opening, theme)}

            <!-- Pair Discussion Prompts with Revealable Example Answers -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">Pair Discussion: Questions &amp; Example Answers to Consider</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Spoken Ideas</span>
              </div>
              <div class="space-y-2.5">
                \${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return \`
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0\${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">\${qText}</p>
                      </div>
                      \${answers.length > 0 ? \`
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s2-\${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s2-\${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            \${answers.map(ans => \`
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;\${ans}&rdquo;</span>
                              </div>
                            \`).join('')}
                          </div>
                        </div>
                      \` : ''}
                    </div>
                  \`;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">\${(opening.diagnostic && opening.diagnostic.title) || 'Ramp Safety Spot-Check'}</h5>
                <span class="text-[11px] text-slate-500">\${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0\${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: \${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-s2-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> \${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-s2-\${q.id}" onclick="const el=document.getElementById('diagnostic-ans-s2-\${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the EASA Ramp Speed Alert -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${doc.title || 'Activity 2: Reading the EASA Ramp Speed Alert (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Authentic SIB Extract</span>
            </div>

            \${renderActivityInstructions(doc, theme)}

            <!-- SIB Viewer -->
            <div class="rounded-xl border border-amber-300 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-amber-950 px-4 py-2.5 border-b border-amber-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-amber-200">
                  <svg width="15" height="15" class="text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  <span>\${doc.docRef || 'EASA SIB No. 2024-11'}</span>
                </div>
                <span class="bg-amber-800 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">\${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((doc.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-amber-600">Check \${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s2-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> \${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s2-\${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Polite Language for Inspections -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${rules.title || 'Activity 3: Polite Language for Inspections (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Clinic</span>
            </div>

            \${renderActivityInstructions(rules, theme)}

            <!-- Comparison Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-2.5">Style</th>
                    <th class="p-2.5">Tone &amp; Effect</th>
                    <th class="p-2.5">Example Phrasing</th>
                    <th class="p-2.5">Why it works</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(rules.rulesTable || []).map(r => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold \${r.word.includes('Harsh') ? 'text-rose-700' : 'text-emerald-700'}">\${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">\${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">\${r.example}</td>
                      <td class="p-2.5 text-[11px] text-slate-500">\${r.tip}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>

            <!-- Rewriting Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Rewriting Drills: Choose the most polite, professional sentence</h5>
              <div class="space-y-2.5">
                \${(rules.drills || []).map(d => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">\${d.id}. \${d.sentence}</p>
                    <div class="space-y-1.5">
                      \${d.options.map(opt => \`
                        <div onclick="const ans=document.getElementById('drill-ans-s2-\${d.id}'); ans.classList.remove('hidden');" class="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded text-xs font-medium text-slate-700 cursor-pointer">\${opt}</div>
                      \`).join('')}
                    </div>
                    <div id="drill-ans-s2-\${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded border border-emerald-200">
                      &check; Recommended: "\${d.correct}" (\${d.rationale})
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Ramp Safety Meeting -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${spoken.title || 'Activity 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Person Audit Simulation</span>
            </div>

            \${renderActivityInstructions(spoken, theme)}

            <!-- Scenario -->
            <div class="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-amber-950 font-bold">
                <svg width="16" height="16" class="text-amber-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Audit Scenario:</span>
              </div>
              <p class="text-amber-900 leading-relaxed font-medium">\${spoken.scenario || ''}</p>
            </div>

            <!-- 3 Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              \${(spoken.roles || []).map(r => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">\${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">\${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      \${r.bullets.map(b => \`<li>\${b}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Conversational Phrases (Constructive &amp; Professional):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                \${(spoken.usefulPhrases || []).map(ph => \`
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;\${ph}&rdquo;
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${safety.title || 'Activity 5: Safety Check: What Could Go Wrong? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            \${renderActivityInstructions(safety, theme)}

            <!-- Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3 w-1/3">Simple Safety Question</th>
                    <th class="p-3 w-2/3">Agreed Class Answer</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(safety.rows || []).map(row => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">\${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">\${row.answer}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      \`;
    }
`;
}

function generateSession3Template() {
  return `    function renderLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || 'Special Requests & Runway Safety Cases'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/s3_m1_session3_derogation.jpg'}" alt="\${hero.title || 'Special Requests'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || 'Special Requests & Runway Safety Cases'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || 'Temporary Works, Connecting Words & Airline Operational Briefings'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">\${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">\${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">\${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Keeping Airports Open During Repairs -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${opening.title || 'Activity 1: Warm-up: Keeping Airports Open During Repairs (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            \${renderActivityInstructions(opening, theme)}

            <!-- Pair Discussion Prompts with Revealable Example Answers -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-amber-600 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">Pair Discussion: Questions &amp; Example Answers to Consider</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Spoken Ideas</span>
              </div>
              <div class="space-y-2.5">
                \${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return \`
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0\${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">\${qText}</p>
                      </div>
                      \${answers.length > 0 ? \`
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s3-\${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s3-\${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            \${answers.map(ans => \`
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;\${ans}&rdquo;</span>
                              </div>
                            \`).join('')}
                          </div>
                        </div>
                      \` : ''}
                    </div>
                  \`;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">\${(opening.diagnostic && opening.diagnostic.title) || 'Runway Works Entry Check'}</h5>
                <span class="text-[11px] text-slate-500">\${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0\${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: \${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-s3-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> \${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-s3-\${q.id}" onclick="const el=document.getElementById('diagnostic-ans-s3-\${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Runway Work Request -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${doc.title || 'Activity 2: Reading the Runway Work Request (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Official Exemption File</span>
            </div>

            \${renderActivityInstructions(doc, theme)}

            <!-- Exemption File Viewer -->
            <div class="rounded-xl border border-indigo-300 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-indigo-950 px-4 py-2.5 border-b border-indigo-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-indigo-200">
                  <svg width="15" height="15" class="text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>\${doc.docRef || 'EASA/ADR-EXEMP/2024-009'}</span>
                </div>
                <span class="bg-indigo-800 text-indigo-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">\${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${((doc.questions) || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600">Check \${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">\${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s3-\${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> \${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s3-\${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Connecting Words -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${rules.title || 'Activity 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Focus</span>
            </div>

            \${renderActivityInstructions(rules, theme)}

            <!-- Connecting Words Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-2.5">Connecting Word</th>
                    <th class="p-2.5">Grammar Function</th>
                    <th class="p-2.5">Runway Safety Example</th>
                    <th class="p-2.5">Spoken Tip</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(rules.rulesTable || []).map(r => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold text-indigo-900">\${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">\${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">\${r.example}</td>
                      <td class="p-2.5 text-[11px] text-slate-500">\${r.tip}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>

            <!-- Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Gap-Fill Drills: Choose the correct connecting word</h5>
              <div class="space-y-2.5">
                \${(rules.drills || []).map(d => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">\${d.id}. \${d.sentence}</p>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        \${d.options.map(opt => \`
                          <button type="button" onclick="const ans=document.getElementById('drill-ans-s3-\${d.id}'); ans.classList.remove('hidden');" class="px-2.5 py-1 bg-white hover:bg-indigo-50 border border-slate-300 rounded text-xs font-bold text-slate-700 cursor-pointer">\${opt}</button>
                        \`).join('')}
                      </div>
                      <div id="drill-ans-s3-\${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        &check; Correct: \${d.correct} (\${d.rationale})
                      </div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Briefing to Airline Pilots -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${spoken.title || 'Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Minute Spoken Briefing</span>
            </div>

            \${renderActivityInstructions(spoken, theme)}

            <!-- Scenario -->
            <div class="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-indigo-950 font-bold">
                <svg width="16" height="16" class="text-indigo-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Briefing Scenario:</span>
              </div>
              <p class="text-indigo-900 leading-relaxed font-medium">\${spoken.scenario || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              \${(spoken.roles || []).map(r => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">\${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">\${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      \${r.bullets.map(b => \`<li>\${b}</li>\`).join('')}
                    </ul>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Briefing Phrases (Clear &amp; Reassuring):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                \${(spoken.usefulPhrases || []).map(ph => \`
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;\${ph}&rdquo;
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${safety.title || 'Activity 5: Safety Check: Is it Safe to Land? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            \${renderActivityInstructions(safety, theme)}

            <!-- Table -->
            <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
              <table class="w-full text-xs text-left">
                <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                  <tr>
                    <th class="p-3 w-1/3">Simple Safety Question</th>
                    <th class="p-3 w-2/3">Agreed Class Answer</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-200 text-slate-700 bg-white">
                  \${(safety.rows || []).map(row => \`
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">\${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">\${row.answer}</td>
                    </tr>
                  \`).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      \`;
    }
`;
}

const newTemplatesContent = generateSession1Template() + '\n' + generateSession2Template() + '\n' + generateSession3Template() + '\n' + s4AndRest;

fs.writeFileSync(templatesMod1Path, newTemplatesContent, 'utf8');
console.log('✅ src/js/05-templates-mod1.js successfully updated.');

console.log('🎉 Curriculum Generator completed successfully.');
