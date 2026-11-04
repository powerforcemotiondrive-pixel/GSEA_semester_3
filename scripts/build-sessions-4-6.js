/**
 * Automated Curriculum Generator for GSEA Semester 3 (Sessions 4, 5, 6)
 * Module 1: Aerodrome Maps & Airspace Charts
 * 100% Spoken English, B1-B2 Plain English, Zero Jargon, Interactive Role-Plays,
 * Reading Chart Extracts, Safety Checks & 90 Vocabulary Terms.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesMod1Path = path.join(rootDir, 'src', 'js', '05-templates-mod1.js');
const dispatcherPath = path.join(rootDir, 'src', 'js', '04-templates-dispatcher.js');

console.log('🚀 Running GSEA Semester 3 Curriculum Generator for Sessions 4, 5 & 6...');

// ============================================================================
// PART A: UPDATE data/course-data.js
// ============================================================================

const courseData = require(courseDataPath);
const m1 = courseData.aas ? courseData.aas[1] : courseData[1];

// ----------------------------------------------------------------------------
// SESSION 4 DATA: Aerodrome Ground Layouts & Taxiway Navigation
// ----------------------------------------------------------------------------
const s4Objectives = {
  title: "Session 4 - Aerodrome Ground Layouts & Taxiway Navigation Objectives",
  summary: "By the end of this session, GSEA students will be able to describe aerodrome ground layouts with confidence in English, read ground movement charts (GMC/ADC), use prepositions of place accurately, guide aircraft across taxiways and holding points, role-play a ground movement clearance with a runway crossing, and complete a collaborative Safety Check on runway incursion hazards.",
  items: [
    {
      num: 1,
      title: "Talk About Airport Ground Layouts (Fluency & Spontaneous Speech)",
      description: "Discuss why navigating complex international airports on the ground is demanding for pilots, and share tricks for understanding airport maps quickly."
    },
    {
      num: 2,
      title: "Read a Ground Movement Chart (Chart Scanning)",
      description: "Scan a simulated aerodrome ground chart to identify runways, parallel taxiways, rapid exit taxiways, aprons, holding bays, and hot spots."
    },
    {
      num: 3,
      title: "Words for Airport Locations (Vocabulary Focus)",
      description: "Learn and use essential ground terms: apron, taxiway, holding point, stop bar, hot spot, and displaced threshold."
    },
    {
      num: 4,
      title: "Prepositions of Place (Language Focus)",
      description: "Practice describing where facilities and aircraft are located using precise position words: adjacent to, opposite, parallel to, between, at the intersection of, short of, and beyond."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Ground Movement Challenge (Spoken Interaction)",
      description: "Role-play a clear, polite conversation between an Aerodrome Ground Controller and a Pilot taxiing from the apron to the runway with an active runway crossing."
    },
    {
      num: 6,
      title: "Safety Check: Preventing Runway Incursions (Operational Discussion)",
      description: "Collaborate in teams to analyze a confusing taxiway intersection, evaluate collision risks, and agree on clear safety solutions."
    }
  ]
};

const s4LessonPlan = {
  title: "Session 4 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session for GSEA students covering aerodrome ground layouts, ground movement charts, prepositions of place, a realistic taxi clearance role-play, and a collaborative runway incursion Safety Check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Navigating on the Ground (15 mins)",
      description: "In pairs, students discuss the challenges of taxiing at unfamiliar airports, explain common ground confusion, and test entry knowledge with 4 quick spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the Ground Movement Chart (GMC) (30 mins)",
      description: "Reading a simulated aerodrome ground movement chart (LFMT) to locate runways, parallel taxiway Alpha, rapid exits Bravo and Charlie, crossing taxiway Delta, and Hot Spot 1."
    },
    {
      time: "45-70",
      title: "Part 3: Language Clinic: Prepositions of Place (25 mins)",
      description: "Oral drills and pair practice using prepositions of place (adjacent to, opposite, parallel to, between, at the intersection of, short of, beyond) to describe airport facilities."
    },
    {
      time: "70-105",
      title: "Part 4: Speaking Role-Play: Ground Movement Challenge (35 mins)",
      description: "3-student spoken simulation between a Ground Controller and an Airline Pilot taxiing from Stand 14 to Runway 14L with an active runway crossing, observed with a peer checklist."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: Preventing Runway Incursions (15 mins)",
      description: "Collaborative 4-step safety analysis evaluating a confusing intersection hazard, collision risks, illuminated stop bars, and agreed standard phraseology."
    }
  ]
};

const s4LessonContent = {
  hero: {
    title: "Aerodrome Ground Layouts & Taxiway Navigation",
    subtitle: "Ground Movement Charts (GMC), Taxiway Designations, Holding Points & Prepositions of Place",
    image: "images/s3_m1_session4_aerodrome.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Aerodrome Ground Operations & Technical English",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up & Entry Spot-Check (15 mins)",
    summary: "Break the ice, discuss the challenges of ground navigation at major airports, and test your baseline knowledge of aerodrome ground markings.",
    modeBadges: ["Pairs (2 students)", "Spoken Discussion", "Timing: 15 mins"],
    instructions: [
      "In pairs, discuss the 3 opening questions about navigating airports on the ground.",
      "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
      "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
    ],
    deliverable: "Shared agreement on 2 common ground taxi challenges and completed 4-question diagnostic.",
    teacherNotes: "Encourage spontaneous speaking. Don't worry about technical phraseology yet; focus on helping students describe physical spaces and directions naturally in English.",
    newsPrompts: [
      {
        id: 1,
        question: "Why do pilots often say taxiing at a large international airport can be more stressful than flying?",
        exampleAnswers: [
          "In my opinion, it is because airports like Paris Charles de Gaulle or London Heathrow have dozens of intersecting taxiways, constant radio calls, construction zones, and tight turns.",
          "Also, from the cockpit, visibility of ground markings can be limited, especially at night or in heavy rain and fog. One wrong turn can lead right onto an active runway."
        ]
      },
      {
        id: 2,
        question: "When you look at an airport map, how do you quickly distinguish between a runway and a taxiway?",
        exampleAnswers: [
          "Runways always have numbers based on their magnetic heading (like 14L or 32R) and white centerline markings, while taxiways use single letters (like Alpha or Bravo) and yellow centerlines.",
          "Also, runways are generally wider and longer with bright approach lights, whereas taxiways have blue edge lights and green centerlines."
        ]
      },
      {
        id: 3,
        question: "What is the single most important rule when an aircraft approaches an active runway holding point?",
        exampleAnswers: [
          "The pilot must stop completely before the solid yellow line and hold short until receiving explicit, clear permission from the tower controller to enter or cross.",
          "Even if the runway looks empty, crossing without a clearance is a dangerous runway incursion."
        ]
      }
    ],
    spotCheckQuestions: [
      {
        id: 1,
        question: "What does a taxiway holding position marking (Pattern A) look like on the ground?",
        options: [
          "A single dashed white line across the tarmac.",
          "Two solid yellow lines and two dashed yellow lines across the taxiway.",
          "A red square with white numbers.",
          "A solid green circle painted in the middle of the apron."
        ],
        correct: 1,
        explanation: "Pattern A consists of two solid yellow lines and two dashed yellow lines. When taxiing towards a runway, you face the solid lines first and you must NEVER cross them without ATC clearance."
      },
      {
        id: 2,
        question: "What does the term 'Hold Short' mean in plain, everyday English?",
        options: [
          "Speed up to clear the runway quickly.",
          "Turn around immediately and return to the parking stand.",
          "Stop completely before the specified line or runway and wait for further instructions.",
          "Pause for five seconds and then continue taxiing."
        ],
        correct: 2,
        explanation: "'Hold short' means stop completely before reaching the designated point and do not move forward until you receive clear, explicit permission."
      },
      {
        id: 3,
        question: "Why are some taxiways called 'Rapid Exit' or 'High-Speed' taxiways?",
        options: [
          "They are reserved exclusively for emergency fire vehicles.",
          "They are connected to the runway at an angle (usually 30°) so landing planes can turn off safely at higher speeds, freeing up the runway faster.",
          "They allow planes to taxi at 50 knots back to the terminal.",
          "They are built downhill so planes roll without using engine thrust."
        ],
        correct: 1,
        explanation: "Rapid exit taxiways are angled at approximately 30 degrees, allowing landing aircraft to exit the runway at around 30 to 50 knots, which reduces runway occupancy time."
      },
      {
        id: 4,
        question: "What is an airport 'Hot Spot' (HS) on an aerodrome chart?",
        options: [
          "A designated area where aircraft engines overheat in hot weather.",
          "A location with free Wi-Fi for passengers on the apron.",
          "A specific location on the airport with a history or potential risk of confusion or runway collisions.",
          "The official smoking area for ground handling staff."
        ],
        correct: 2,
        explanation: "A Hot Spot is a clearly marked location on the airport map where complex geometry, confusing signs, or blind spots create a higher risk of runway incursions."
      }
    ]
  },
  chartExtract: {
    title: "Activity 2: Reading the Ground Movement Chart (GMC) (30 mins)",
    summary: "Analyze a simulated Ground Movement Chart for Blagnac-Montpellier Airport (LFMT) and practice identifying key operational areas.",
    badge: "SIMULATED AERODROME GROUND CHART • LFMT",
    callsign: "Blagnac-Montpellier Airport (LFMT / Elev 495 ft)",
    sections: [
      {
        heading: "1. Runway Infrastructure & Orientation",
        details: [
          "Primary Runway 14L/32R: Length 3,500m, Width 45m, Asphalt surface, CAT III ILS equipped, lighted centerline.",
          "Secondary Runway 14R/32L: Length 2,500m, Width 45m, Visual/Non-precision, separated from 14L by 380 metres.",
          "Operational rule: Runway 14L is used for commercial jet departures and arrivals; Runway 14R is used for general aviation and maintenance flights."
        ]
      },
      {
        heading: "2. Taxiway Network & Designations",
        details: [
          "Taxiway Alpha (A): Main parallel taxiway running parallel to Runway 14L along its eastern side.",
          "Taxiway Bravo (B): High-speed rapid exit taxiway connected at 30° to Runway 14L, 1,800m from threshold.",
          "Taxiway Charlie (C): Second high-speed exit connected at 30° to Runway 14L, 2,400m from threshold.",
          "Taxiway Delta (D): 90-degree crossing taxiway connecting Apron North across Runway 14R to Taxiway Alpha.",
          "Taxiway Echo (E): End-around perimeter taxiway leading to the Runway 14L departure holding bay."
        ]
      },
      {
        heading: "3. Aprons, Stands & Facilities",
        details: [
          "Apron North: Commercial passenger terminal with Stands 1 to 16. Stand 14 is equipped with an airbridge.",
          "Cargo Ramp: Situated on the western boundary, opposite the main passenger terminal.",
          "De-icing Pad: Positioned between Taxiway Bravo and the maintenance hangar.",
          "Fire & Rescue Station: Located adjacent to Apron North with direct emergency access to both runways."
        ]
      },
      {
        heading: "4. Holding Points & Hot Spots",
        details: [
          "Holding Point A1: Located at the threshold of Runway 14L; CAT I/II/III illuminated stop bars installed.",
          "Holding Point D1: Located short of Runway 14R on Taxiway Delta; mandatory stop line.",
          "Hot Spot 1 (HS1): Complex intersection of Taxiway Alpha, Delta, and apron taxilane where ground vehicles cross aircraft routes.",
          "Hot Spot 2 (HS2): Intersection of Taxiway Delta and Runway 14R where line of sight from the control tower is partially obstructed during morning mist."
        ]
      }
    ]
  },
  grammarClinic: {
    title: "Activity 3: Language Clinic: Prepositions of Place (25 mins)",
    summary: "Master clear position words to describe airport facilities and aircraft locations with precision and confidence.",
    rules: [
      {
        term: "parallel to",
        meaning: "Running alongside in the same direction at an equal distance.",
        example: "Taxiway Alpha runs parallel to Runway 14L on its eastern side."
      },
      {
        term: "adjacent to",
        meaning: "Very close or next to something, often sharing a boundary.",
        example: "The airport fire station is located adjacent to Apron North."
      },
      {
        term: "opposite",
        meaning: "Directly across from something, facing it.",
        example: "The cargo ramp is directly opposite the passenger terminal."
      },
      {
        term: "between ... and ...",
        meaning: "In the middle space separating two objects or locations.",
        example: "The de-icing pad is located between Taxiway Bravo and the hangar."
      },
      {
        term: "at the intersection of",
        meaning: "At the point where two or more paths, roads, or taxiways cross.",
        example: "Hot Spot 1 is located at the intersection of Taxiway Alpha and Taxiway Delta."
      },
      {
        term: "short of",
        meaning: "Stopping before reaching a specific point, line, or boundary.",
        example: "Air France 412, hold short of Runway 14R on Taxiway Delta."
      },
      {
        term: "beyond",
        meaning: "Further away than a specified point or boundary.",
        example: "The blast pad extends 150 metres beyond the threshold of Runway 32R."
      }
    ],
    drills: [
      {
        id: 1,
        prompt: "Where is the main fire station located relative to Apron North?",
        targetAnswer: "The fire station is located adjacent to Apron North, giving emergency vehicles direct access to both runways."
      },
      {
        id: 2,
        prompt: "Where does Taxiway Alpha lie relative to Runway 14L?",
        targetAnswer: "Taxiway Alpha runs parallel to Runway 14L along its entire eastern length."
      },
      {
        id: 3,
        prompt: "Where is the cargo ramp situated relative to the passenger terminal?",
        targetAnswer: "The cargo ramp is situated on the west side of the airfield, directly opposite the main passenger terminal."
      },
      {
        id: 4,
        prompt: "Where should an aircraft stop when taxiing on Delta towards Runway 14R?",
        targetAnswer: "The aircraft must hold short of Runway 14R at holding point D1 until cleared to cross."
      },
      {
        id: 5,
        prompt: "Where is Hot Spot 1 located on the aerodrome chart?",
        targetAnswer: "Hot Spot 1 is located right at the intersection of Taxiway Alpha and Taxiway Delta."
      }
    ]
  },
  roleplaySimulation: {
    title: "Activity 4: Speaking Role-Play: Ground Movement Challenge (35 mins)",
    summary: "Simulate a realistic spoken interaction between an Aerodrome Ground Controller and an Airline Pilot taxiing from Stand 14 to Runway 14L.",
    situation: "Flight AFR 412 (Airbus A320) is parked at Stand 14 on Apron North. The pilot has completed pushback and engine start and requests taxi clearance to Runway 14L. The route requires taxiing along Taxiway Delta, crossing active Runway 14R, joining Taxiway Alpha, and holding short of Runway 14L at holding point A1.",
    roles: [
      {
        role: "Role A: Ground Controller",
        instructions: "Issue progressive taxi instructions. Give the taxi route: 'Taxi via Delta, hold short of Runway 14R'. When the runway is clear, instruct: 'Cross Runway 14R, taxi via Alpha to holding point A1, Runway 14L'. Listen carefully to the pilot's readback and correct any missing information immediately."
      },
      {
        role: "Role B: Airline Pilot (AFR 412)",
        instructions: "Call Ground Control at Stand 14 ready to taxi. Read back all instructions completely, especially the runway hold-short instruction. Ask for clarification if you are unsure whether you are cleared to cross Runway 14R. Confirm when holding short at holding point A1."
      },
      {
        role: "Role C: Peer Observer & Safety Auditor",
        instructions: "Use the checklist below to evaluate your peers. Did the pilot read back 'hold short of Runway 14R'? Did the controller give clear prepositions of place? Was the spoken English natural and confident?"
      }
    ],
    checklist: [
      "Controller used clear, unambiguous taxi instructions with correct taxiway names.",
      "Pilot read back the runway holding point instruction word-for-word ('Hold short of Runway 14R').",
      "Both speakers used natural, communicative English without long unnatural hesitations.",
      "Clear verification was made before crossing the active runway."
    ],
    phrases: [
      "Ground, Air France 412, Stand 14, request taxi to Runway 14L.",
      "Air France 412, taxi via Delta, hold short of Runway 14R.",
      "Taxi via Delta, hold short of Runway 14R, Air France 412.",
      "Air France 412, cross Runway 14R, taxi via Alpha to holding point A1.",
      "Cross Runway 14R, taxi via Alpha to holding point A1, Air France 412."
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: Preventing Runway Incursions (15 mins)",
    summary: "Work in teams to analyze how confusing taxiway intersections lead to runway incursions and decide on practical safety defenses.",
    steps: [
      {
        step: 1,
        title: "Identify the Hazard",
        text: "At Hot Spot 1, Taxiway Delta crosses active Runway 14R at a 90-degree angle. During early morning mist, pilots exiting Apron North have mistaken holding point D1 for an apron taxilane stop line, resulting in two near-incursions in the past 6 months."
      },
      {
        step: 2,
        title: "Evaluate the Operational Risk",
        text: "If an aircraft crosses holding point D1 without clearance while a light twin or business jet is on takeoff roll or landing on Runway 14R, a catastrophic high-speed collision could occur."
      },
      {
        step: 3,
        title: "Propose Protective Actions",
        text: "1. Install illuminated red stop bars that remain turned on until ATC manually clears the crossing.\n2. Paint enhanced yellow taxiway centerline markings 45 metres prior to holding point D1.\n3. Add flashing yellow runway guard lights (wig-wags) on both sides of the taxiway.\n4. Mandate that Ground Controllers use progressive taxi instructions and always require a full verbal readback."
      },
      {
        step: 4,
        title: "Agree on the Team Decision",
        text: "Agree with your team on the two most effective safety improvements and record your conclusions in the Operational Notes section below."
      }
    ]
  }
};

const s4RevisionTerms = [
  { num: "01", term: "Aerodrome Ground Chart (ADC)", definition: "An official aeronautical chart showing the layout of runways, taxiways, aprons, and airport buildings." },
  { num: "02", term: "Ground Movement Chart (GMC)", definition: "A detailed large-scale chart used by pilots and ground controllers to navigate complex taxiways and apron stands." },
  { num: "03", term: "Apron (Ramp)", definition: "A defined area on an airport intended to accommodate aircraft for boarding, loading, refueling, or parking." },
  { num: "04", term: "Taxiway", definition: "A defined path on an airport established for the taxiing of aircraft between one part of the aerodrome and another." },
  { num: "05", term: "Parallel Taxiway", definition: "A taxiway that runs alongside and parallel to a runway, allowing aircraft to clear the runway quickly." },
  { num: "06", term: "Rapid Exit Taxiway", definition: "A taxiway connected to a runway at an acute angle (typically 30°) designed for landing planes to turn off at higher speeds." },
  { num: "07", term: "Runway Holding Point", definition: "A designated location on a taxiway where aircraft and vehicles must stop and hold until cleared onto an active runway." },
  { num: "08", term: "Intermediate Holding Point", definition: "A designated position on a taxiway for traffic control where an aircraft stops until further instructed by ATC." },
  { num: "09", term: "Pattern A Holding Line", definition: "A ground marking with two solid yellow lines and two dashed yellow lines; you must never cross the solid lines toward the runway without clearance." },
  { num: "10", term: "Pattern B Holding Line", definition: "A ladder-style ground marking used at CAT II/III precision runway holding positions to protect ILS signals." },
  { num: "11", term: "Stop Bar", definition: "A row of red lights across a taxiway showing that traffic must stop; when turned off by ATC, the taxiway is open." },
  { num: "12", term: "Hot Spot (HS)", definition: "A location on an aerodrome movement area with a history or potential risk of collision or runway incursion." },
  { num: "13", term: "Mandatory Instruction Sign", definition: "A red sign with white lettering indicating a runway entrance, critical area, or prohibited zone." },
  { num: "14", term: "Location Sign", definition: "A black sign with yellow lettering identifying the specific taxiway or runway on which the aircraft is currently located." },
  { num: "15", term: "Direction Sign", definition: "A yellow sign with black lettering and arrows indicating the designations and directions of intersecting taxiways." },
  { num: "16", term: "De-icing Pad", definition: "An area on an apron or taxiway equipped for applying heated de-icing and anti-icing fluids to aircraft." },
  { num: "17", term: "Holding Bay", definition: "An area adjacent to a taxiway where aircraft can be held or bypassed to facilitate efficient ground traffic movement." },
  { num: "18", term: "Displaced Threshold", definition: "A runway threshold located at a point other than the beginning of the runway, often used when obstacles penetrate approach paths." },
  { num: "19", term: "Blast Pad", definition: "A specially surfaced area preceding a runway threshold designed to prevent ground erosion from jet engine blast." },
  { num: "20", term: "Stopway", definition: "A defined rectangular area at the end of the takeoff run in which an aircraft can be stopped during an abandoned takeoff." },
  { num: "21", term: "Clearway", definition: "A defined rectangular area at the end of the runway over which an aircraft can make part of its initial climb." },
  { num: "22", term: "Runway Incursion", definition: "Any occurrence involving the incorrect presence of an aircraft, vehicle, or person on an active runway protected area." },
  { num: "23", term: "Hold Short", definition: "An ATC instruction directing a pilot or driver to stop completely before reaching a runway or taxiway and wait." },
  { num: "24", term: "Progressive Taxi", definition: "Step-by-step taxi instructions issued by ground control to assist a pilot unfamiliar with the airport layout." },
  { num: "25", term: "Surface Movement Radar (SMR)", definition: "Radar equipment specifically designed to detect and display the position of aircraft and vehicles on the airfield surface." },
  { num: "26", term: "Enhanced Taxiway Centerline", definition: "Dashed yellow lines alongside the centerline starting 45m before a runway holding position to alert pilots." },
  { num: "27", term: "Follow-Me Vehicle", definition: "An airport ground vehicle equipped with flashing lights that guides aircraft along taxiways to designated parking stands." },
  { num: "28", term: "Pushback", definition: "The procedure during which an aircraft is pushed backwards away from an airport gate or parking stand by a tug vehicle." },
  { num: "29", term: "Maneuvering Area", definition: "That part of an aerodrome used for the takeoff, landing, and taxiing of aircraft, excluding aprons." },
  { num: "30", term: "Movement Area", definition: "That part of an aerodrome used for aircraft surface movement, consisting of the maneuvering area and the aprons." }
];

const s4QuizQuestions = [
  {
    id: 1,
    stem: "While taxiing an A320 along Taxiway Delta towards Runway 14R, the pilot sees two solid yellow lines followed by two dashed yellow lines painted across the asphalt. What is the mandatory action?",
    options: [
      { letter: "A", text: "Cross the lines without stopping if no other aircraft is visible on the runway." },
      { letter: "B", text: "Stop completely before the solid lines and wait for explicit clearance to cross from air traffic control." },
      { letter: "C", text: "Increase taxi speed to clear the crossing zone as rapidly as possible." },
      { letter: "D", text: "Switch the aircraft transponder to standby mode and turn left onto the grass." }
    ],
    correctLetter: "B",
    correctText: "Stop completely before the solid lines and wait for explicit clearance to cross from air traffic control.",
    analysis: "Pattern A holding point lines feature two solid lines on the taxiway side and two dashed lines on the runway side. An aircraft approaching from the solid side must never cross without explicit ATC clearance.",
    strategy: "Remember: solid lines mean stop. Dashed lines mean you may exit the runway freely without stopping."
  },
  {
    id: 2,
    stem: "An aerodrome ground controller says: 'Air France 412, taxi via Alpha, hold short of Runway 14R at Delta.' What is the required readback from the flight crew?",
    options: [
      { letter: "A", text: "'Roger, rolling, Air France 412.'" },
      { letter: "B", text: "'Taxi via Alpha, hold short of Runway 14R at Delta, Air France 412.'" },
      { letter: "C", text: "'Copied, taxiing to the terminal, Air France 412.'" },
      { letter: "D", text: "'Cleared across Runway 14R, Air France 412.'" }
    ],
    correctLetter: "B",
    correctText: "'Taxi via Alpha, hold short of Runway 14R at Delta, Air France 412.'",
    analysis: "ICAO and EASA standard radiotelephony rules mandate a full word-for-word readback of all runway hold-short instructions including the runway identifier and taxiway location.",
    strategy: "Hold-short clearances must always be repeated completely with the aircraft callsign. A simple 'Roger' is never acceptable."
  },
  {
    id: 3,
    stem: "Which airport ground sign is characterized by yellow letters and symbols on a black background?",
    options: [
      { letter: "A", text: "A Mandatory Instruction Sign showing a runway entrance." },
      { letter: "B", text: "A Location Sign identifying the taxiway on which the aircraft is currently located." },
      { letter: "C", text: "A Direction Sign pointing towards another taxiway." },
      { letter: "D", text: "A Destination Sign showing the international terminal." }
    ],
    correctLetter: "B",
    correctText: "A Location Sign identifying the taxiway on which the aircraft is currently located.",
    analysis: "Remember the golden memory rule: 'Yellow on black is where you're at' (Location Sign), while 'Black on yellow points to another fellow' (Direction Sign).",
    strategy: "Black background with yellow lettering confirms your present location."
  },
  {
    id: 4,
    stem: "Why are illuminated red stop bars installed across taxiway holding positions at major international airports?",
    options: [
      { letter: "A", text: "To help ground staff find their luggage carts at night." },
      { letter: "B", text: "To serve as an active physical visual barrier preventing aircraft and vehicles from entering an active runway without clearance." },
      { letter: "C", text: "To indicate that the runway surface is undergoing routine grass cutting." },
      { letter: "D", text: "To warn birds not to land on the paved tarmac." }
    ],
    correctLetter: "B",
    correctText: "To serve as an active physical visual barrier preventing aircraft and vehicles from entering an active runway without clearance.",
    analysis: "Red stop bars provide a high-visibility safeguard. Pilots and vehicle drivers must never cross an illuminated red stop bar, even if verbal clearance has been issued, until the lights are switched off.",
    strategy: "Never cross red lights on the airfield under any operational circumstance."
  },
  {
    id: 5,
    stem: "What is the primary operational advantage of a high-speed rapid exit taxiway connected to a runway at an angle of 30 degrees?",
    options: [
      { letter: "A", text: "It allows landing aircraft to turn off the runway at higher speeds, reducing runway occupancy time for following arrivals." },
      { letter: "B", text: "It provides a shortcut for catering trucks moving between terminals." },
      { letter: "C", text: "It eliminates the need for air traffic controllers in the tower." },
      { letter: "D", text: "It prevents aircraft tires from wearing down during braking." }
    ],
    correctLetter: "A",
    correctText: "It allows landing aircraft to turn off the runway at higher speeds, reducing runway occupancy time for following arrivals.",
    analysis: "By exiting at speeds between 30 and 50 knots via a 30-degree turn, aircraft spend significantly less time on the runway, increasing the airport's overall landing capacity.",
    strategy: "Think capacity: rapid exits get aircraft off the active runway quickly so the next plane can land."
  }
];

// ----------------------------------------------------------------------------
// SESSION 5 DATA: Airspace Corridors: SIDs, STARs & Transition Routes
// ----------------------------------------------------------------------------
const s5Objectives = {
  title: "Session 5 - Airspace Corridors: SIDs, STARs & Transition Routes Objectives",
  summary: "By the end of this session, GSEA students will be able to explain the purpose of standard instrument departures and arrivals in plain English, trace route corridors on simulated charts, use prepositions of movement and direction accurately, role-play a cockpit departure briefing and weather diversion, and complete a collaborative Safety Check on managing route deviations.",
  items: [
    {
      num: 1,
      title: "Talk About Airspace Corridors (Fluency & Spontaneous Speech)",
      description: "Discuss how structured departure and arrival routes organize heavy air traffic flow around major cities and reduce radio congestion."
    },
    {
      num: 2,
      title: "Read a SID & STAR Route Chart (Chart Scanning)",
      description: "Scan a simulated departure chart (GAILLAC 4A) to locate waypoints, climb restrictions, minimum safe altitudes (MSA), and transition altitudes."
    },
    {
      num: 3,
      title: "Words for Corridors & Altitudes (Vocabulary Focus)",
      description: "Learn and use essential route vocabulary: waypoint, fly-by vs fly-over, flight level, transition altitude, minimum safe altitude, and holding fix."
    },
    {
      num: 4,
      title: "Prepositions of Movement & Direction (Language Focus)",
      description: "Practice describing flight paths using dynamic movement words: climb straight ahead to, turn left towards, proceed via, along corridor, maintain until, and intersect."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Departure Briefing & Storm Diversion (Spoken Interaction)",
      description: "Role-play a pre-departure cockpit briefing followed by an urgent radio request to divert 20 degrees around a developing storm cell."
    },
    {
      num: 6,
      title: "Safety Check: Managing Route Deviations & Level Busts (Operational Discussion)",
      description: "Collaborate in teams to analyze a departure route deviation hazard, evaluate terrain risks, and agree on clear safety solutions."
    }
  ]
};

const s5LessonPlan = {
  title: "Session 5 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session for GSEA students covering SIDs, STARs, prepositions of movement, a cockpit briefing and weather diversion role-play, and a collaborative Safety Check on departure deviations.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Why SIDs and STARs Exist (15 mins)",
      description: "In pairs, students discuss how structured departure corridors prevent mid-air conflicts around busy airports, and test entry knowledge with 4 quick spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the Simulated SID & STAR Route Chart (30 mins)",
      description: "Analyzing the simulated GAILLAC 4A departure chart from Runway 14L, tracing waypoints, altitude restrictions, and the GAILLAC holding pattern."
    },
    {
      time: "45-70",
      title: "Part 3: Language Clinic: Prepositions of Movement & Direction (25 mins)",
      description: "Oral drills and pair practice using prepositions of movement (climb straight ahead to, turn left towards, proceed via, along, maintain until, intersect) to describe flight profiles."
    },
    {
      time: "70-105",
      title: "Part 4: Speaking Role-Play: Departure Briefing & Storm Diversion (35 mins)",
      description: "3-student spoken simulation: Captain briefings First Officer on the departure, followed by an urgent radio request to ATC to divert around a thunderstorm, with Peer Observer checklist."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: Managing Route Deviations & Level Busts (15 mins)",
      description: "Collaborative 4-step safety analysis evaluating severe storm hazards, terrain clearance (MSA), sector coordination, and pilot readback verification."
    }
  ]
};

const s5LessonContent = {
  hero: {
    title: "Airspace Corridors: SIDs, STARs & Transition Routes",
    subtitle: "Departure Routes, Terminal Arrivals, Waypoints, Flight Levels & Prepositions of Movement",
    image: "images/s3_m1_session5_sid_star.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Terminal Airspace Navigation & Technical English",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up & Entry Spot-Check (15 mins)",
    summary: "Break the ice, discuss how airspace corridors keep skyways organized, and test your baseline knowledge of departure chart symbols.",
    modeBadges: ["Pairs (2 students)", "Spoken Discussion", "Timing: 15 mins"],
    instructions: [
      "In pairs, discuss the 3 opening questions about airspace corridors and departure routes.",
      "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
      "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
    ],
    deliverable: "Shared agreement on why standard corridors are safer than ad-hoc radar vectors, and completed 4-question diagnostic.",
    teacherNotes: "Encourage spontaneous speaking. Help students feel comfortable using dynamic motion verbs (climb, turn, proceed, join) to describe three-dimensional flight paths.",
    newsPrompts: [
      {
        id: 1,
        question: "Imagine if every aircraft leaving a major hub chose its own climb path and direction. What would happen?",
        exampleAnswers: [
          "It would be total chaos! Air traffic controllers would have to issue hundreds of individual heading calls every minute, which would saturate radio frequencies.",
          "Standard routes create predictable, highway-like corridors where aircraft are separated by design, keeping both pilots and controllers safe."
        ]
      },
      {
        id: 2,
        question: "What is the difference between a waypoint that is a 'fly-by' point and one that is a 'fly-over' point?",
        exampleAnswers: [
          "A fly-by waypoint allows the flight management computer to anticipate the turn slightly early so the plane cuts the corner smoothly and stays on track.",
          "A fly-over waypoint means the aircraft must pass directly over the top of the point before initiating the turn, which is usually required to avoid high terrain or noise-sensitive towns."
        ]
      },
      {
        id: 3,
        question: "Why do charts specify both an initial altitude and a 'Transition Altitude'?",
        exampleAnswers: [
          "The initial altitude keeps the climbing aircraft safely below arriving traffic in the terminal area.",
          "The Transition Altitude (like 5,000 ft) is where pilots switch their altimeters from local ground pressure to the standard 1013 hPa setting so all cruising aircraft share the exact same vertical reference."
        ]
      }
    ],
    spotCheckQuestions: [
      {
        id: 1,
        question: "What does the abbreviation 'SID' stand for in air traffic terminology?",
        options: [
          "Surface Incident Detection.",
          "Standard Instrument Departure.",
          "Special IFR Direction.",
          "Secondary Inbound Descent."
        ],
        correct: 1,
        explanation: "SID stands for Standard Instrument Departure—a published flight route connecting an aerodrome to the en-route airway system."
      },
      {
        id: 2,
        question: "On an aeronautical chart, how is a 'fly-over' waypoint symbolized differently from a standard 'fly-by' waypoint?",
        options: [
          "It is colored bright red instead of blue.",
          "It is a four-pointed star enclosed inside a circle.",
          "It has a small airplane icon next to it.",
          "It is written in italic capital letters."
        ],
        correct: 1,
        explanation: "A fly-over waypoint is shown as a star (or triangle) enclosed in a circle, indicating the aircraft must fly directly overhead before beginning its turn."
      },
      {
        id: 3,
        question: "What does an altitude constraint written as 'FL070+' indicate on a departure chart?",
        options: [
          "The pilot must level off exactly at FL070 and hold indefinitely.",
          "The aircraft must cross that waypoint at Flight Level 070 or higher.",
          "The aircraft must be below FL070 to avoid military airspace.",
          "The aircraft must fly 70 knots faster than normal."
        ],
        correct: 1,
        explanation: "The plus sign indicates 'at or above'. FL070+ means the aircraft must cross the fix at or higher than Flight Level 070 (7,000 feet on standard altimeter setting)."
      },
      {
        id: 4,
        question: "What is the purpose of a published 'Minimum Safe Altitude' (MSA) on a route chart?",
        options: [
          "It is the minimum speed at which an aircraft can fly without stalling.",
          "It provides at least 1,000 feet of clearance above all terrain and obstacles within 25 nautical miles of the navigation aid.",
          "It indicates the lowest altitude for opening the cabin passenger doors.",
          "It is the altitude where clouds permanently disappear."
        ],
        correct: 1,
        explanation: "The MSA guarantees at least 1,000 feet of obstacle clearance (or 2,000 feet in mountainous areas) within 25 NM, providing an emergency safety floor."
      }
    ]
  },
  chartExtract: {
    title: "Activity 2: Reading the Simulated SID & STAR Route Chart (30 mins)",
    summary: "Analyze the simulated GAILLAC 4A Departure from Runway 14L and understand key navigation milestones and constraints.",
    badge: "SIMULATED DEPARTURE ROUTE CHART • GAILLAC 4A (LFMT)",
    callsign: "Blagnac-Montpellier Airport (LFMT) • Runway 14L Departures",
    sections: [
      {
        heading: "1. Initial Climb Profile & Heading",
        details: [
          "Runway Alignment: After liftoff from Runway 14L, climb straight ahead on runway track 142° magnetic.",
          "Initial Altitude Constraint: Maintain runway track until reaching 3,000 ft QNH or 5 DME from TOU VOR (whichever occurs first).",
          "Noise Abatement Constraint: No turns are permitted below 3,000 ft to protect surrounding residential areas from engine noise."
        ]
      },
      {
        heading: "2. Turn & En-Route Interception",
        details: [
          "First Turn: At 3,000 ft, turn left directly towards waypoint GAILLAC (GAI VOR/DME 114.4 MHz).",
          "Intermediate Constraint: Cross 8 DME TOU at or above 4,000 ft.",
          "Fix Constraint: Cross GAI VOR at or above FL070.",
          "En-Route Join: From GAI, proceed along airway UM733 towards waypoint MENDE to join cruising airway network."
        ]
      },
      {
        heading: "3. Speed & Altitude Safeguards",
        details: [
          "Speed Limit: Maximum indicated airspeed 250 knots below FL100 unless cleared by ATC.",
          "Transition Altitude (TA): 5,000 ft AMSL (set standard altimeter pressure 1013.25 hPa on passing 5,000 ft).",
          "Minimum Safe Altitude (MSA): 4,200 ft within 25 NM north and east; 7,800 ft to the south towards the Pyrenees mountain sector."
        ]
      },
      {
        heading: "4. Holding Pattern at GAILLAC (GAI)",
        details: [
          "Inbound Course: 215° magnetic towards GAI VOR.",
          "Turn Direction: Right-hand turns; standard 1-minute outbound leg.",
          "Minimum Holding Level: FL080; maximum holding speed 230 knots."
        ]
      }
    ]
  },
  grammarClinic: {
    title: "Activity 3: Language Clinic: Prepositions of Movement & Direction (25 mins)",
    summary: "Practice using dynamic prepositions and motion verbs to describe three-dimensional flight paths with precision.",
    rules: [
      {
        term: "climb straight ahead to",
        meaning: "Maintain the runway alignment while ascending to a specified altitude.",
        example: "After liftoff, climb straight ahead to 3,000 feet on runway track 142°."
      },
      {
        term: "turn left / right towards",
        meaning: "Change magnetic heading to point directly at a navigation fix or waypoint.",
        example: "At 3,000 feet, turn left directly towards waypoint GAILLAC."
      },
      {
        term: "proceed via",
        meaning: "Follow a designated route, corridor, or sequence of waypoints.",
        example: "Proceed via airway UM733 towards waypoint MENDE."
      },
      {
        term: "along",
        meaning: "Moving in a line parallel to or following a corridor or radial.",
        example: "Fly along the 142-degree outbound radial until intercepting the turn point."
      },
      {
        term: "cross at or above",
        meaning: "Pass over a specific fix at an altitude equal to or greater than the restriction.",
        example: "Cross waypoint GAILLAC at or above flight level 070."
      },
      {
        term: "maintain ... until ...",
        meaning: "Continue a speed, heading, or altitude until a specific event or condition occurs.",
        example: "Maintain 250 knots until passing through 10,000 feet."
      },
      {
        term: "intersect",
        meaning: "To cross or join another path, beam, or route line.",
        example: "Turn right heading 260 to intersect the localizer course."
      }
    ],
    drills: [
      {
        id: 1,
        prompt: "How does the pilot fly immediately after takeoff on Runway 14L?",
        targetAnswer: "After takeoff, the pilot climbs straight ahead on runway heading 142° until reaching 3,000 feet."
      },
      {
        id: 2,
        prompt: "What action is required once passing 3,000 feet?",
        targetAnswer: "At 3,000 feet, the aircraft turns left directly towards waypoint GAILLAC."
      },
      {
        id: 3,
        prompt: "What is the altitude restriction at waypoint GAILLAC?",
        targetAnswer: "The aircraft must cross waypoint GAILLAC at or above Flight Level 070."
      },
      {
        id: 4,
        prompt: "How does the aircraft join the main airway system after GAILLAC?",
        targetAnswer: "The aircraft proceeds via airway UM733 towards waypoint MENDE to join cruising airspace."
      },
      {
        id: 5,
        prompt: "What speed restriction applies during the initial climb below FL100?",
        targetAnswer: "The flight crew must maintain an indicated airspeed of 250 knots or less until passing through 10,000 feet."
      }
    ]
  },
  roleplaySimulation: {
    title: "Activity 4: Speaking Role-Play: Departure Briefing & Storm Diversion (35 mins)",
    summary: "Simulate a two-part spoken challenge: a cockpit departure briefing followed by an urgent radio request to divert around a thunderstorm.",
    situation: "Part 1: The Captain of AFR 624 briefs the First Officer on the GAILLAC 4A departure before takeoff from Runway 14L.\nPart 2: Climbing through 4,500 ft, airborne weather radar shows a severe convective storm cell building directly over the turn towards GAILLAC. The pilot contacts Departure Radar to request a heading 20 degrees left of track.",
    roles: [
      {
        role: "Role A: Airline Captain (AFR 624)",
        instructions: "Brief the First Officer clearly: state the runway (14L), the initial climb (straight ahead to 3,000 ft), the turn point (left direct GAILLAC), the altitude restriction (cross GAI at or above FL070), and the transition altitude (5,000 ft). In Part 2, call Departure Radar calmly to request a 20-degree left heading deviation to avoid the storm cell."
      },
      {
        role: "Role B: Departure Radar Controller",
        instructions: "In Part 1, listen to the briefing as the First Officer and confirm agreement. In Part 2, receive the pilot's diversion request. Check your radar display, check terrain clearance (MSA 4,200 ft), approve the 20-degree left turn, and clear the flight to continue climb to FL090."
      },
      {
        role: "Role C: Peer Observer & Safety Auditor",
        instructions: "Use the checklist below to assess your peers. Was the departure briefing structured and clear? Did the pilot use standard prepositions of movement? Was the radio request calm and precise?"
      }
    ],
    checklist: [
      "Captain covered all 5 key briefing points (runway, climb, turn, altitude restriction, TA).",
      "Both speakers used natural, communicative English without long unnatural pauses.",
      "Pilot stated the reason for diversion clearly ('due to weather/convective cell').",
      "Controller confirmed terrain clearance before approving the deviation."
    ],
    phrases: [
      "This will be the GAILLAC 4A departure from Runway 14L.",
      "After liftoff, climb straight ahead on track 142° to 3,000 feet.",
      "At 3,000 feet, turn left direct to GAILLAC, crossing GAI at or above FL070.",
      "Departure, Air France 624, climbing through 4,500 feet, request heading 20 degrees left of track due to weather.",
      "Air France 624, left heading 20 degrees approved, climb to FL090, report when able to proceed direct GAILLAC."
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: Managing Departure Route Deviations & Level Busts (15 mins)",
    summary: "Work in teams to analyze the safety hazards when weather forces aircraft off published departure corridors.",
    steps: [
      {
        step: 1,
        title: "Identify the Hazard",
        text: "During heavy summer convective weather, a climbing jet turns off the GAILLAC 4A SID corridor to avoid severe hail. In doing so, it moves towards rising mountainous terrain to the south where the Minimum Safe Altitude is 7,800 ft."
      },
      {
        step: 2,
        title: "Evaluate the Operational Risk",
        text: "If the aircraft turns towards high terrain without climbing above the sector MSA, or if an altitude bust occurs due to pilot distraction in heavy turbulence, terrain proximity warnings (CFIT risk) or conflict with inbound arrival traffic could happen."
      },
      {
        step: 3,
        title: "Propose Protective Actions",
        text: "1. Always verify sector Minimum Safe Altitude (MSA) before authorizing or executing any off-route heading vector.\n2. ATC must issue an immediate climb clearance above the terrain floor (FL090 or higher) when approving diversions.\n3. Flight crew must cross-check navigation displays and maintain sterile cockpit procedures during weather deviations.\n4. Ensure full readback of assigned tactical headings and target flight levels."
      },
      {
        step: 4,
        title: "Agree on the Team Decision",
        text: "Agree with your team on the two most critical safety safeguards and record your conclusions in the Operational Notes section below."
      }
    ]
  }
};

const s5RevisionTerms = [
  { num: "01", term: "Standard Instrument Departure (SID)", definition: "A published IFR departure route linking an airport to a specified point on an en-route airway." },
  { num: "02", term: "Standard Terminal Arrival Route (STAR)", definition: "A published IFR arrival route linking an en-route point to a point where an approach can begin." },
  { num: "03", term: "Waypoint", definition: "A specified geographical location used to define an area navigation (RNAV) route or flight path." },
  { num: "04", term: "Fly-by Waypoint", definition: "A waypoint that allows turn anticipation to smoothly join the next segment of a route." },
  { num: "05", term: "Fly-over Waypoint", definition: "A waypoint at which an aircraft must fly directly overhead before starting a turn." },
  { num: "06", term: "Flight Level (FL)", definition: "An altitude reference surface based on standard pressure (1013.25 hPa), expressed in hundreds of feet." },
  { num: "07", term: "Transition Altitude (TA)", definition: "The altitude at or below which vertical position is controlled by reference to local ground pressure (QNH)." },
  { num: "08", term: "Transition Level (TRL)", definition: "The lowest flight level available above the transition altitude, where altimeters are set to standard pressure." },
  { num: "09", term: "Transition Layer", definition: "The airspace between the transition altitude and transition level where altimeter settings change." },
  { num: "10", term: "Minimum Safe Altitude (MSA)", definition: "The lowest altitude providing at least 1,000 feet of obstacle clearance within a 25 NM radius." },
  { num: "11", term: "Altitude Window", definition: "A published vertical constraint requiring an aircraft to cross a waypoint between two specified altitudes." },
  { num: "12", term: "Speed Restriction", definition: "A mandatory maximum or minimum indicated airspeed published on a chart or instructed by ATC." },
  { num: "13", term: "Holding Pattern", definition: "A predetermined racetrack flight maneuver keeping an aircraft within specified airspace while awaiting clearance." },
  { num: "14", term: "Inbound Track", definition: "The magnetic heading flown directly towards a holding fix or navigation facility." },
  { num: "15", term: "Outbound Leg", definition: "The segment of a holding pattern flown in the opposite direction of the inbound track, usually timed for 1 minute." },
  { num: "16", term: "Holding Fix", definition: "A specified location defined by a navaid, waypoint, or intersection where a holding pattern begins." },
  { num: "17", term: "Rate of Climb", definition: "The vertical speed at which an aircraft gains altitude, typically expressed in feet per minute (fpm)." },
  { num: "18", term: "Climb Gradient", definition: "The ratio of altitude gained to horizontal distance covered, expressed as a percentage or ft/NM." },
  { num: "19", term: "Noise Abatement Procedure", definition: "Operational climb procedures designed to minimize aircraft noise over populated communities near an airport." },
  { num: "20", term: "Track (TR)", definition: "The actual path of an aircraft projected over the ground, expressed in degrees from North." },
  { num: "21", term: "Heading (HDG)", definition: "The direction in which the nose of an aircraft points, expressed in degrees from North." },
  { num: "22", term: "Airway", definition: "A controlled airspace corridor established with navigation aids for en-route flight." },
  { num: "23", term: "Upper Airspace", definition: "Airspace above a specified flight level (often FL195) reserved for high-altitude en-route cruising." },
  { num: "24", term: "Terminal Control Area (TMA)", definition: "A controlled airspace established around one or more major airports to manage arriving and departing traffic." },
  { num: "25", term: "Control Zone (CTR)", definition: "Controlled airspace extending upwards from the ground to a specified limit immediately around an aerodrome." },
  { num: "26", term: "Level Bust", definition: "Any unauthorized deviation from an assigned altitude or flight level greater than 300 feet." },
  { num: "27", term: "Area Navigation (RNAV)", definition: "A navigation method permitting flight on any desired path using ground, satellite, or inertial navigation." },
  { num: "28", term: "Radar Vectoring", definition: "Providing navigational guidance to an aircraft in the form of specific magnetic headings using radar." },
  { num: "29", term: "Clearance Limit", definition: "The point to which an aircraft is granted an air traffic control clearance." },
  { num: "30", term: "Lost Communications Procedure", definition: "The published set of standardized flight actions to follow if two-way radio contact is lost." }
];

const s5QuizQuestions = [
  {
    id: 1,
    stem: "While flying the GAILLAC 4A departure, the chart specifies: 'Cross GAI at or above FL070.' What does this restriction mean for the climbing aircraft?",
    options: [
      { letter: "A", text: "The aircraft must level off at FL060 and request lower." },
      { letter: "B", text: "The aircraft must reach at least Flight Level 070 by the time it reaches waypoint GAILLAC." },
      { letter: "C", text: "The aircraft must remain below FL070 until passing GAILLAC." },
      { letter: "D", text: "The aircraft may ignore the altitude restriction if flying in visual conditions." }
    ],
    correctLetter: "B",
    correctText: "The aircraft must reach at least Flight Level 070 by the time it reaches waypoint GAILLAC.",
    analysis: "'At or above FL070' establishes an altitude floor to ensure vertical separation from arriving traffic corridors and adequate terrain clearance.",
    strategy: "Remember: 'at or above' (+) sets a minimum altitude floor that the aircraft must meet or exceed."
  },
  {
    id: 2,
    stem: "Why do aeronautical charts define a 'Transition Altitude' (such as 5,000 ft AMSL)?",
    options: [
      { letter: "A", text: "It is the altitude where the autopilot must be disconnected." },
      { letter: "B", text: "It is the altitude where flight crews change altimeter subscale from local airport pressure (QNH) to standard pressure (1013.25 hPa)." },
      { letter: "C", text: "It is the altitude where flight attendants may start serving beverages." },
      { letter: "D", text: "It is the boundary where aircraft must turn off all exterior lights." }
    ],
    correctLetter: "B",
    correctText: "It is the altitude where flight crews change altimeter subscale from local airport pressure (QNH) to standard pressure (1013.25 hPa).",
    analysis: "Above Transition Altitude, all aircraft fly using Flight Levels referenced to standard atmospheric pressure (1013.25 hPa), guaranteeing identical vertical separation regardless of local weather differences.",
    strategy: "Climbing through Transition Altitude = set standard 1013."
  },
  {
    id: 3,
    stem: "A flight crew climbing on a departure notices severe thunderstorm activity building across the planned track. What is the standard operational procedure?",
    options: [
      { letter: "A", text: "Turn immediately without contacting air traffic control." },
      { letter: "B", text: "Request a weather deviation heading from air traffic control stating the direction and degrees required." },
      { letter: "C", text: "Fly directly through the center of the storm at maximum engine power." },
      { letter: "D", text: "Descend to 500 feet above ground level to fly beneath the clouds." }
    ],
    correctLetter: "B",
    correctText: "Request a weather deviation heading from air traffic control stating the direction and degrees required.",
    analysis: "Pilots must contact ATC as early as possible to request a tactical heading vector (e.g. 'request heading 20 degrees left due to weather') so controllers can coordinate with adjacent airspace sectors.",
    strategy: "Communicate early: specify direction, heading, and the reason ('due to weather')."
  },
  {
    id: 4,
    stem: "What is an altitude deviation of more than 300 feet from an assigned clearance commonly called in safety reporting?",
    options: [
      { letter: "A", text: "A glide path anomaly." },
      { letter: "B", text: "A level bust." },
      { letter: "C", text: "A terrain intrusion." },
      { letter: "D", text: "A vertical climb runaway." }
    ],
    correctLetter: "B",
    correctText: "A level bust.",
    analysis: "A 'level bust' occurs whenever an aircraft deviates more than 300 ft from its assigned level in controlled airspace, potentially eroding vertical separation with other aircraft.",
    strategy: "Level bust = altitude deviation greater than 300 feet."
  },
  {
    id: 5,
    stem: "On an instrument departure plate, what does a maximum speed limit of '250 kt below FL100' aim to achieve?",
    options: [
      { letter: "A", text: "It saves engine fuel during the initial climb." },
      { letter: "B", text: "It standardizes traffic speeds in high-density terminal airspace, allowing controllers to sequence aircraft safely and see-and-avoid visual traffic." },
      { letter: "C", text: "It prevents supersonic shockwaves over the airport." },
      { letter: "D", text: "It reduces tire wear during gear retraction." }
    ],
    correctLetter: "B",
    correctText: "It standardizes traffic speeds in high-density terminal airspace, allowing controllers to sequence aircraft safely and see-and-avoid visual traffic.",
    analysis: "The 250 kt rule below 10,000 ft / FL100 harmonizes speed differences between various aircraft types and provides adequate reaction time in crowded terminal areas.",
    strategy: "Standard terminal speed = 250 knots max below FL100."
  }
];

// ----------------------------------------------------------------------------
// SESSION 6 DATA: Approach Plates: Final Corridors & Go-Around Paths
// ----------------------------------------------------------------------------
const s6Objectives = {
  title: "Session 6 - Approach Plates: Final Corridors & Go-Around Paths Objectives",
  summary: "By the end of this session, GSEA students will be able to read and explain instrument approach plates (IAC / ILS) in plain English, use vertical flight path language accurately, understand decision heights and landing minimums, role-play an approach briefing and unexpected go-around execution, and complete a collaborative Safety Check on unstabilized approach criteria.",
  items: [
    {
      num: 1,
      title: "Talk About the Final Approach Phase (Fluency & Spontaneous Speech)",
      description: "Discuss why the final 3 minutes of flight represent the highest workload phase for pilots, and what factors make landing demanding."
    },
    {
      num: 2,
      title: "Read an ILS Approach Plate (Chart Scanning)",
      description: "Scan a simulated ILS Runway 14L approach plate to locate the localizer course, Final Approach Fix (FAF), glide path angle (3.0°), and decision altitude (DA)."
    },
    {
      num: 3,
      title: "Words for Vertical Profiles & Minimums (Vocabulary Focus)",
      description: "Learn and use essential approach vocabulary: glide slope, localizer, decision altitude/height, minimum descent altitude, RVR, and missed approach point."
    },
    {
      num: 4,
      title: "Describing Vertical Paths & Altitude Callouts (Language Focus)",
      description: "Practice cockpit altitude and path callouts: on the glide slope, slightly high/low, at the final approach fix, upon reaching minimums, and positive climb, gear up."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Final Approach & Go-Around Decision (Spoken Interaction)",
      description: "Role-play a tense final approach where a vehicle incursion on the runway forces the controller to command an immediate go-around."
    },
    {
      num: 6,
      title: "Safety Check: Unstabilized Approach & Go-Around Culture (Operational Discussion)",
      description: "Collaborate in teams to analyze unstabilized approach risks, overcome hesitation traps, and support a blame-free go-around safety culture."
    }
  ]
};

const s6LessonPlan = {
  title: "Session 6 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session for GSEA students covering ILS approach plates, vertical path language, landing minimums, an emergency go-around role-play, and a collaborative Safety Check on unstabilized approaches.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: The Final 3 Minutes Before Touchdown (15 mins)",
      description: "In pairs, students discuss cockpit workload on final approach, explain the concept of stabilized approach gates, and test entry knowledge with 4 quick spot-check questions."
    },
    {
      time: "15-45",
      title: "Part 2: Reading the Simulated ILS Approach Plate (30 mins)",
      description: "Analyzing the plan view and profile view of the simulated ILS Runway 14L plate at LFMT, identifying the FAF Maltese cross, glide path angle, and missed approach routing."
    },
    {
      time: "45-70",
      title: "Part 3: Language Clinic: Vertical Paths & Cockpit Callouts (25 mins)",
      description: "Oral drills and pair practice using vertical flight terminology (on the glide slope, at the final approach fix, upon reaching minimums, go-around positive climb) to describe landings."
    },
    {
      time: "70-105",
      title: "Part 4: Speaking Role-Play: Final Approach & Go-Around Decision (35 mins)",
      description: "3-student spoken simulation: Approach/Tower Controller commands an immediate go-around due to a vehicle crossing the runway on 2-mile final; Pilot executes missed approach, observed with checklist."
    },
    {
      time: "105-120",
      title: "Part 5: Safety Check: Unstabilized Approach & Go-Around Culture (15 mins)",
      description: "Collaborative 4-step safety analysis evaluating unstabilized descent rates, late configuration, go-around hesitation, and promoting a blame-free safety policy."
    }
  ]
};

const s6LessonContent = {
  hero: {
    title: "Approach Plates: Final Corridors & Go-Around Paths",
    subtitle: "Instrument Approach Charts (IAC), Glide Slopes, Decision Heights & Missed Approach Paths",
    image: "images/s3_m1_session6_approach.jpg",
    targetLevel: "CEFR B1–B2",
    roleContext: "GSEA Student Training • Final Approach Operations & Technical English",
    duration: "120 Minutes"
  },
  openingSession: {
    title: "Activity 1: Warm-up & Entry Spot-Check (15 mins)",
    summary: "Break the ice, discuss the intense workload during the final 3 minutes before touchdown, and test your baseline knowledge of approach plate symbols.",
    modeBadges: ["Pairs (2 students)", "Spoken Discussion", "Timing: 15 mins"],
    instructions: [
      "In pairs, discuss the 3 opening questions about flying the final approach.",
      "Read each of the 4 Entry Spot-Check questions below and discuss your answers together.",
      "Click 'Reveal Answer' to check your reasoning and see the plain English explanation."
    ],
    deliverable: "Shared agreement on what constitutes a safe stabilized approach, and completed 4-question diagnostic.",
    teacherNotes: "Encourage spontaneous speaking. Help students understand that a go-around is not a failure, but a normal, professional safety decision.",
    newsPrompts: [
      {
        id: 1,
        question: "Why do aviation safety experts call the final approach phase the 'most critical three minutes' of flight?",
        exampleAnswers: [
          "Because the aircraft is close to the ground, flying at relatively slow speed with flaps and landing gear extended, leaving very little margin for error.",
          "Also, both pilots must manage radio communications, cross-check flight instruments, watch for visual references, and be ready to execute a go-around at a second's notice."
        ]
      },
      {
        id: 2,
        question: "What is the crucial difference between a Decision Altitude (DA) and a Minimum Descent Altitude (MDA)?",
        exampleAnswers: [
          "A Decision Altitude is used on a precision approach (like an ILS); as soon as you reach that exact altitude, you must either see the runway or start climbing immediately.",
          "A Minimum Descent Altitude is used on a non-precision approach; you descend to that altitude, level off, and fly flat until you reach the missed approach point."
        ]
      },
      {
        id: 3,
        question: "Why do some flight crews hesitate to initiate a go-around, even when the approach is unstabilized?",
        exampleAnswers: [
          "Psychological pressure! Flight crews naturally want to complete the flight on schedule to avoid delays, extra fuel burn, or passenger inconvenience.",
          "That is why modern airline safety culture stresses that a go-around is always the correct, blame-free decision whenever any doubt exists."
        ]
      }
    ],
    spotCheckQuestions: [
      {
        id: 1,
        question: "What does the Maltese Cross symbol represent on an instrument approach plate profile view?",
        options: [
          "The airport medical center.",
          "The Final Approach Fix (FAF) where the final descent begins.",
          "The location of the primary control tower.",
          "The point where cabin crew must sit down."
        ],
        correct: 1,
        explanation: "The Maltese Cross marks the Final Approach Fix (FAF), the critical point on the approach where the aircraft initiates its final glide slope descent toward the runway."
      },
      {
        id: 2,
        question: "What is the standard glide path angle for an Instrument Landing System (ILS) precision approach?",
        options: [
          "1.5 degrees.",
          "3.0 degrees.",
          "6.0 degrees.",
          "9.0 degrees."
        ],
        correct: 1,
        explanation: "The standard ILS glide path angle is 3.0 degrees, providing a steady descent of approximately 318 feet per nautical mile (around 700–800 fpm at typical jet approach speeds)."
      },
      {
        id: 3,
        question: "What does 'RVR 550m' mean in the landing minimums section of an approach plate?",
        options: [
          "The runway is 550 metres long.",
          "Runway Visual Range: the horizontal distance down the runway that a pilot can see runway lights or markings is at least 550 metres.",
          "The cloud base is 550 metres above the runway.",
          "The radar antenna is located 550 metres from the tower."
        ],
        correct: 1,
        explanation: "RVR stands for Runway Visual Range—the measured horizontal visibility down the runway surface, which must meet or exceed the published minimum (e.g. 550m for CAT I) to attempt a landing."
      },
      {
        id: 4,
        question: "If visual references are lost or not seen upon reaching Decision Altitude, what must the pilot do?",
        options: [
          "Descend an extra 100 feet to see under the fog.",
          "Immediately execute the published missed approach procedure (go-around).",
          "Switch off the autopilot and guess the runway centerline.",
          "Circle around the runway at 200 feet."
        ],
        correct: 1,
        explanation: "At Decision Altitude, if required visual references (approach lights, threshold markings) are not distinctly visible, the pilot MUST immediately initiate a missed approach without hesitation."
      }
    ]
  },
  chartExtract: {
    title: "Activity 2: Reading the Simulated ILS Approach Plate (30 mins)",
    summary: "Analyze the plan view, vertical profile view, and missed approach instructions for the simulated ILS Runway 14L at LFMT.",
    badge: "SIMULATED INSTRUMENT APPROACH PLATE • ILS RWY 14L (LFMT)",
    callsign: "Blagnac-Montpellier Airport (LFMT / Elev 495 ft) • ILS or LOC Rwy 14L",
    sections: [
      {
        heading: "1. Navigation Frequencies & Course Data",
        details: [
          "Localizer Frequency: I-MT 109.3 MHz • Final Approach Track: 142° magnetic.",
          "Initial Approach Fix (IAF): Waypoint CAPDENAC at 5,000 ft QNH.",
          "Intermediate Fix (IF): Waypoint BLAGY at 4,000 ft QNH.",
          "Final Approach Fix (FAF): Maltese Cross at 5.2 DME I-MT at 2,000 ft QNH."
        ]
      },
      {
        heading: "2. Vertical Profile & Descent Data",
        details: [
          "Glide Path Angle: 3.00° (318 ft per nautical mile, approx 750 fpm descent at 140 kt groundspeed).",
          "Threshold Crossing Height (TCH): 50 ft above runway elevation.",
          "Aerodrome Elevation: 495 ft AMSL • Touchdown Zone Elevation (TDZE): 492 ft AMSL."
        ]
      },
      {
        heading: "3. Published Landing Minimums",
        details: [
          "CAT I ILS Precision Minimums: Decision Altitude (DA) 692 ft AMSL (Decision Height 200 ft AGL) • RVR 550m.",
          "LOC Only (Non-Precision) Minimums: Minimum Descent Altitude (MDA) 890 ft AMSL (MDH 395 ft AGL) • Visibility 1,500m.",
          "Circling Minimums: MDA 1,050 ft AMSL • Visibility 2,400m."
        ]
      },
      {
        heading: "4. Published Missed Approach Procedure (Go-Around)",
        details: [
          "Initial Climb: Climb straight ahead on runway track 142° to 2,500 ft QNH.",
          "Turn Instruction: At 2,500 ft, turn left climbing to 4,000 ft direct to TOU VOR/DME.",
          "Holding Instruction: Enter published holding pattern at TOU VOR at 4,000 ft, or as directed by ATC."
        ]
      }
    ]
  },
  grammarClinic: {
    title: "Activity 3: Language Clinic: Describing Vertical Paths & Cockpit Callouts (25 mins)",
    summary: "Master clear spoken terminology for vertical flight path tracking, approach warnings, and go-around execution.",
    rules: [
      {
        term: "on the glide slope",
        meaning: "Tracking the electronic 3.0-degree descent beam perfectly.",
        example: "We are fully established on the localizer and on the glide slope."
      },
      {
        term: "above / below the glide path",
        meaning: "Displaced vertically from the planned descent path.",
        example: "Check your sink rate; we are one dot below the glide path."
      },
      {
        term: "at the final approach fix",
        meaning: "Passing the Maltese cross where the final descent begins.",
        example: "At the final approach fix: 5.2 DME, 2,000 feet verified, gear down."
      },
      {
        term: "upon reaching decision altitude",
        meaning: "At the exact altitude where the landing or go-around choice must be made.",
        example: "Upon reaching decision altitude at 692 feet, call 'runway in sight' or 'go-around'."
      },
      {
        term: "level off at",
        meaning: "Stopping descent and maintaining level flight.",
        example: "For the LOC approach, descend to MDA and level off at 890 feet."
      },
      {
        term: "execute missed approach",
        meaning: "Initiate the published climb and turn procedure away from the runway.",
        example: "Visual reference not acquired at minimums—executing missed approach."
      },
      {
        term: "positive climb, gear up",
        meaning: "Confirming altimeter and vertical speed show a steady climb before retracting landing gear.",
        example: "Go-around, set flaps 15, positive climb confirmed, gear up."
      }
    ],
    drills: [
      {
        id: 1,
        prompt: "How does the pilot announce that both beams are captured on final approach?",
        targetAnswer: "We are fully established on the localizer and on the glide slope."
      },
      {
        id: 2,
        prompt: "What altitude check is made at the Final Approach Fix (5.2 DME)?",
        targetAnswer: "At the final approach fix: 5.2 DME, altitude 2,000 feet verified, descent continuing."
      },
      {
        id: 3,
        prompt: "What is the mandatory pilot callout upon reaching Decision Altitude (692 ft) in thick cloud?",
        targetAnswer: "Minimums! No visual contact—go-around, flaps 15, positive climb, gear up!"
      },
      {
        id: 4,
        prompt: "What is the initial climb instruction on the published missed approach procedure?",
        targetAnswer: "Climb straight ahead on runway track 142° to 2,500 feet, then turn left towards TOU VOR."
      },
      {
        id: 5,
        prompt: "What does the pilot call when altimeter and VSI confirm ascending flight during a go-around?",
        targetAnswer: "Positive climb confirmed—gear up, set climb thrust."
      }
    ]
  },
  roleplaySimulation: {
    title: "Activity 4: Speaking Role-Play: Final Approach & Go-Around Decision (35 mins)",
    summary: "Simulate a high-stress final approach scenario where an unexpected runway incursion forces an immediate go-around.",
    situation: "Flight AFR 884 is on 3-mile final approach for Runway 14L in light drizzle. At 400 ft AGL, the Tower Controller spots an airport maintenance vehicle inadvertently crossing the runway holding point at Taxiway Charlie. The Controller commands an immediate go-around; the pilot executes the missed approach procedure smoothly.",
    roles: [
      {
        role: "Role A: Tower Controller",
        instructions: "Monitor final approach. Spot the vehicle incursion on Runway 14L at Taxiway Charlie. Transmit immediately with calm authority: 'Air France 884, go around immediately, vehicle on the runway! Climb straight ahead to 2,500 feet, maintain runway heading.' After the pilot reads back, instruct them to contact Departure Radar on 124.35 MHz."
      },
      {
        role: "Role B: Airline Pilot (AFR 884)",
        instructions: "Fly the final approach, calling out '1,000 ft stabilized'. Receive the controller's emergency go-around instruction. Immediately read back: 'Going around, climb to 2,500 feet on runway heading, Air France 884.' Announce cockpit actions: 'Go-around, flaps 15, maximum thrust, positive climb, gear up.' Then contact Departure Radar as instructed."
      },
      {
        role: "Role C: Peer Observer & Safety Auditor",
        instructions: "Use the checklist below to assess your peers. Did the controller speak with calm, decisive authority? Did the pilot read back the go-around instruction without delay? Were cockpit actions announced in proper sequence?"
      }
    ],
    checklist: [
      "Controller gave clear, decisive go-around instruction with the immediate reason ('vehicle on runway').",
      "Pilot acknowledged and read back the go-around instruction without hesitation.",
      "Cockpit go-around sequence was called out cleanly (thrust, flaps, positive climb, gear up).",
      "Both speakers maintained professional composure and clear pronunciation."
    ],
    phrases: [
      "Tower, Air France 884, 4-mile final, Runway 14L.",
      "Air France 884, go around immediately! Vehicle on runway, climb straight ahead 2,500 feet.",
      "Going around, climb straight ahead 2,500 feet, Air France 884.",
      "Go-around, set go-around thrust, flaps 15.",
      "Positive climb verified, gear up. Contact Departure on 124.35, Air France 884."
    ]
  },
  safetyCheck: {
    title: "Activity 5: Safety Check: Unstabilized Approach & Go-Around Culture (15 mins)",
    summary: "Work in teams to analyze the risks of unstabilized approaches and agree on how to build a strong go-around safety culture.",
    steps: [
      {
        step: 1,
        title: "Identify the Hazard",
        text: "At 1,000 ft AGL in instrument meteorological conditions (IMC), an approaching aircraft is flying 25 knots above target approach speed with a descent rate of 1,200 fpm. The landing gear is down, but flaps are not yet in final landing configuration."
      },
      {
        step: 2,
        title: "Evaluate the Operational Risk",
        text: "Continuing an unstabilized approach below 1,000 ft dramatically increases the risk of hard landings, runway excursions (overrunning the paved runway), tail strikes, or loss of control close to the ground."
      },
      {
        step: 3,
        title: "Propose Protective Actions",
        text: "1. Enforce strict stabilized approach criteria: on flight path, target speed -0/+10 kt, sink rate <= 1,000 fpm, landing flaps set by 1,000 ft in IMC (500 ft in VMC).\n2. Mandate an automatic go-around if any single stabilized approach parameter is exceeded.\n3. Foster a blame-free safety policy: flight crews are commended, never reprimanded or questioned, for executing a safety go-around.\n4. Tower controllers should issue go-around instructions proactively whenever runway separation becomes marginal."
      },
      {
        step: 4,
        title: "Agree on the Team Decision",
        text: "Agree with your team on the two most effective safety defenses to prevent runway landing accidents and record your conclusions in the Operational Notes section below."
      }
    ]
  }
};

const s6RevisionTerms = [
  { num: "01", term: "Instrument Approach Chart (IAC)", definition: "An aeronautical chart showing the established instrument approach procedure to a specific runway." },
  { num: "02", term: "Instrument Landing System (ILS)", definition: "A precision runway approach aid providing both horizontal (localizer) and vertical (glide path) guidance." },
  { num: "03", term: "Localizer (LOC)", definition: "The component of an ILS providing lateral (left/right) tracking along the runway centerline." },
  { num: "04", term: "Glide Path (Glide Slope)", definition: "The component of an ILS providing vertical guidance along a specified descent angle (normally 3 degrees)." },
  { num: "05", term: "Final Approach Fix (FAF)", definition: "The point in an instrument approach where the final descent segment begins, marked by a Maltese cross." },
  { num: "06", term: "Initial Approach Fix (IAF)", definition: "The fix that marks the beginning of the initial approach segment towards the runway." },
  { num: "07", term: "Intermediate Fix (IF)", definition: "The fix marking the end of the initial segment and beginning of the intermediate segment for final configuration." },
  { num: "08", term: "Decision Altitude (DA)", definition: "A specified altitude (mean sea level) in a precision approach where a missed approach must be initiated if no visual reference." },
  { num: "09", term: "Decision Height (DH)", definition: "A specified height (above runway threshold) in a precision approach where a missed approach must be initiated if no visual reference." },
  { num: "10", term: "Minimum Descent Altitude (MDA)", definition: "The lowest altitude in a non-precision approach below which descent cannot be made without visual references." },
  { num: "11", term: "Runway Visual Range (RVR)", definition: "The distance down the runway that a pilot on the centerline can see runway surface markings or lights." },
  { num: "12", term: "Missed Approach Procedure (Go-Around)", definition: "The published flight procedure to follow if an approach cannot be safely completed to a landing." },
  { num: "13", term: "Missed Approach Point (MAPt)", definition: "The point in an instrument approach procedure at or before which a missed approach must be initiated." },
  { num: "14", term: "Touchdown Zone Elevation (TDZE)", definition: "The highest elevation in the first 3,000 feet of the landing runway surface." },
  { num: "15", term: "Precision Approach", definition: "An instrument approach and landing utilizing both precision lateral and vertical guidance (such as CAT I, II, or III ILS)." },
  { num: "16", term: "Non-Precision Approach", definition: "An instrument approach utilizing lateral navigation guidance without vertical glide path guidance (e.g. VOR, LOC-only)." },
  { num: "17", term: "Visual References", definition: "Physical ground features (approach lights, threshold markings) required to continue an approach below DA/MDA." },
  { num: "18", term: "Stabilized Approach", definition: "An approach where airspeed, descent rate, engine thrust, and landing configuration are within exact limits by a set gate." },
  { num: "19", term: "Sink Rate", definition: "The rate of descent of an aircraft toward the ground, which should not exceed 1,000 feet per minute on final approach." },
  { num: "20", term: "Maltese Cross", definition: "The chart symbol designating the Final Approach Fix for an approach on an instrument plate profile view." },
  { num: "21", term: "Glide Path Angle", definition: "The angle of descent of the electronic glide slope beam, typically calibrated at 3.0 degrees." },
  { num: "22", term: "Threshold Crossing Height (TCH)", definition: "The theoretical height in feet above the runway threshold where the aircraft's glide path antenna crosses (normally 50 ft)." },
  { num: "23", term: "Runway Threshold", definition: "The beginning of that portion of the runway usable for landing." },
  { num: "24", term: "Approach Lighting System (ALS)", definition: "A system of high-intensity lights extending outward from the runway threshold to assist visual landing transition." },
  { num: "25", term: "Visual Descent Point (VDP)", definition: "A defined point on a non-precision approach from which normal descent from the MDA to the runway may begin." },
  { num: "26", term: "Balked Landing", definition: "A discontinued landing attempt initiated after the aircraft has descended below decision height or after touchdown." },
  { num: "27", term: "Holding on Missed Approach", definition: "The published holding fix where an aircraft holds after executing a go-around while awaiting a second approach or diversion." },
  { num: "28", term: "Alternate Aerodrome", definition: "An aerodrome to which an aircraft can proceed if landing at the destination becomes impossible or inadvisable." },
  { num: "29", term: "Fuel Diversion", definition: "Diverting to an alternate aerodrome before fuel reserves drop below the legal minimum final reserve fuel." },
  { num: "30", term: "Go-Around Mindset", definition: "The safety philosophy where every approach is planned as a go-around until confirming all landing criteria are met." }
];

const s6QuizQuestions = [
  {
    id: 1,
    stem: "While flying an ILS approach to Runway 14L, the flight crew reaches Decision Altitude (692 ft AMSL / 200 ft AGL) in thick cloud with zero visual contact with the runway lights. What is the mandatory pilot action?",
    options: [
      { letter: "A", text: "Descend another 100 feet to check if the fog clears closer to the grass." },
      { letter: "B", text: "Immediately initiate a missed approach (go-around) by applying go-around thrust and pitching into a positive climb." },
      { letter: "C", text: "Level off at 692 feet and fly straight ahead until hearing the landing gear touch down." },
      { letter: "D", text: "Ask the tower controller to guess whether the runway is clear." }
    ],
    correctLetter: "B",
    correctText: "Immediately initiate a missed approach (go-around) by applying go-around thrust and pitching into a positive climb.",
    analysis: "Under ICAO and EASA rules, at Decision Altitude on a precision approach, if required visual references are not visible, an immediate missed approach must be initiated. Continuing descent without visual reference is strictly prohibited.",
    strategy: "No visual reference at DA = immediate go-around."
  },
  {
    id: 2,
    stem: "On an approach chart profile view, what does the 'Maltese Cross' symbol signify to the flight crew?",
    options: [
      { letter: "A", text: "The location of the airport medical emergency station." },
      { letter: "B", text: "The Final Approach Fix (FAF), indicating where the final descent segment begins." },
      { letter: "C", text: "The missed approach holding fix." },
      { letter: "D", text: "The point where cabin crew must make the final landing announcement." }
    ],
    correctLetter: "B",
    correctText: "The Final Approach Fix (FAF), indicating where the final descent segment begins.",
    analysis: "The Maltese Cross represents the Final Approach Fix on profile views, marking where the final approach segment begins and where altitude checks are confirmed against distance.",
    strategy: "Maltese Cross = Final Approach Fix (FAF)."
  },
  {
    id: 3,
    stem: "What is the primary operational criteria for an approach to be considered 'stabilized' at 1,000 feet in instrument conditions?",
    options: [
      { letter: "A", text: "Engines at idle thrust, flaps retracted, and passenger seatbelt sign turned off." },
      { letter: "B", text: "Aircraft on correct flight path, correct landing configuration (gear and flaps set), speed within -0/+10 kt of target, and sink rate 1,000 fpm or less." },
      { letter: "C", text: "Autopilot disconnected and flight attendants serving coffee in the galley." },
      { letter: "D", text: "Aircraft flying at 250 knots with speedbrakes fully extended." }
    ],
    correctLetter: "B",
    correctText: "Aircraft on correct flight path, correct landing configuration (gear and flaps set), speed within -0/+10 kt of target, and sink rate 1,000 fpm or less.",
    analysis: "A stabilized approach requires the aircraft to be configured, on speed, on lateral and vertical path, with engines spooled and sink rate <= 1,000 fpm by the 1,000 ft IMC gate.",
    strategy: "Stabilized = configured, on path, on speed, sink rate <= 1,000 fpm."
  },
  {
    id: 4,
    stem: "Why does modern airline safety culture promote a 'Go-Around Mindset'?",
    options: [
      { letter: "A", text: "Because practicing go-arounds burns more fuel and lowers aircraft landing weight." },
      { letter: "B", text: "Because treating every approach as a planned go-around ensures pilots never hesitate to abort a landing if parameters become unsafe." },
      { letter: "C", text: "Because go-arounds give passengers a better panoramic view of the airport." },
      { letter: "D", text: "Because controllers need extra time to complete paperwork between flights." }
    ],
    correctLetter: "B",
    correctText: "Because treating every approach as a planned go-around ensures pilots never hesitate to abort a landing if parameters become unsafe.",
    analysis: "A go-around mindset eliminates hesitation. If the pilot assumes a go-around is normal, landing becomes a bonus only executed when all conditions are 100% verified.",
    strategy: "Plan to go around; only land if everything is perfect."
  },
  {
    id: 5,
    stem: "On the simulated ILS Runway 14L approach plate, what is the published initial action on the missed approach procedure?",
    options: [
      { letter: "A", text: "Turn immediately right heading 320 degrees to return to the airport terminal." },
      { letter: "B", text: "Climb straight ahead on runway track 142° to 2,500 feet before turning." },
      { letter: "C", text: "Descend to 200 feet and circle around the control tower." },
      { letter: "D", text: "Cut engine power and glide towards the nearest open field." }
    ],
    correctLetter: "B",
    correctText: "Climb straight ahead on runway track 142° to 2,500 feet before turning.",
    analysis: "The published procedure specifies: 'Climb straight ahead on runway track 142° to 2,500 ft QNH. At 2,500 ft, turn left climbing to 4,000 ft direct to TOU VOR and hold.'",
    strategy: "Always follow the published straight-ahead climb to clear obstacles before turning."
  }
];

// ----------------------------------------------------------------------------
// ATTACH DATA TO courseData
// ----------------------------------------------------------------------------
m1.sessions["4"].objectives = s4Objectives;
m1.sessions["4"].lessonPlan = s4LessonPlan;
m1.sessions["4"].lessonContent = s4LessonContent;
m1.sessions["4"].revision = {
  title: "Session 4 Revision - Aerodrome Ground Layouts & Taxiway Navigation",
  summary: "30 essential operational and ground navigation vocabulary terms for GSEA students covering aerodrome charts, taxiways, holding points, and surface markings.",
  terms: s4RevisionTerms
};
m1.sessions["4"].materials.quizTitle = "Airside Scenario Quiz • Aerodrome Ground Layouts & Taxiway Navigation";
m1.sessions["4"].materials.quizSubtitle = "Target pace: ~45 seconds per scenario • Mix of Ground Navigation Dilemmas & Chart Spot-Checks";
m1.sessions["4"].materials.toeicQuestions = s4QuizQuestions;

m1.sessions["5"].objectives = s5Objectives;
m1.sessions["5"].lessonPlan = s5LessonPlan;
m1.sessions["5"].lessonContent = s5LessonContent;
m1.sessions["5"].revision = {
  title: "Session 5 Revision - Airspace Corridors: SIDs, STARs & Transition Routes",
  summary: "30 essential operational and terminal navigation vocabulary terms for GSEA students covering departure routes, arrivals, waypoints, and prepositions of movement.",
  terms: s5RevisionTerms
};
m1.sessions["5"].materials.quizTitle = "Airside Scenario Quiz • Airspace Corridors: SIDs, STARs & Transition Routes";
m1.sessions["5"].materials.quizSubtitle = "Target pace: ~45 seconds per scenario • Mix of Departure Route Dilemmas & Chart Spot-Checks";
m1.sessions["5"].materials.toeicQuestions = s5QuizQuestions;

m1.sessions["6"].objectives = s6Objectives;
m1.sessions["6"].lessonPlan = s6LessonPlan;
m1.sessions["6"].lessonContent = s6LessonContent;
m1.sessions["6"].revision = {
  title: "Session 6 Revision - Approach Plates: Final Corridors & Go-Around Paths",
  summary: "30 essential operational and approach navigation vocabulary terms for GSEA students covering ILS plates, glide slopes, decision heights, and missed approach procedures.",
  terms: s6RevisionTerms
};
m1.sessions["6"].materials.quizTitle = "Airside Scenario Quiz • Approach Plates: Final Corridors & Go-Around Paths";
m1.sessions["6"].materials.quizSubtitle = "Target pace: ~45 seconds per scenario • Mix of Final Approach Dilemmas & Go-Around Spot-Checks";
m1.sessions["6"].materials.toeicQuestions = s6QuizQuestions;

// Serialize courseData back to data/course-data.js
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
console.log('✓ Successfully updated data/course-data.js for Sessions 4, 5 & 6 (90 vocab terms + quizzes + plans).');

// ============================================================================
// PART B: UPDATE src/js/05-templates-mod1.js
// ============================================================================

// Function generator for Sessions 4, 5, 6
function generateTemplateFunction(sessionNum, sessionTag, moduleName, note1Label, note1Placeholder, note2Label, note2Placeholder) {
  return `    function renderLessonContentTabSession${sessionNum}(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const roleplay = content.roleplaySimulation || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = \`
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: \${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session ${sessionNum}</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">\${hero.title || '${moduleName}'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="\${hero.image || 'images/s3_m1_session${sessionNum}_banner.jpg'}" alt="\${hero.title || '${moduleName}'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card${sessionNum}.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">\${hero.title || '${moduleName}'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">\${hero.subtitle || ''}</p>
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
              <div class="flex flex-wrap items-center gap-1.5">
                \${(opening.modeBadges || []).map(b => \`<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">\${b}</span>\`).join('')}
              </div>
            </div>

            <!-- Student Instructions & Teacher Notes -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 p-3.5 bg-slate-50 rounded-lg border border-slate-200 text-xs">
              <div class="md:col-span-2 space-y-1.5">
                <span class="font-bold text-slate-800 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-blue-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"/></svg>
                  Student Instructions:
                </span>
                <ul class="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  \${(opening.instructions || []).map(inst => \`<li>\${inst}</li>\`).join('')}
                </ul>
              </div>
              <div class="space-y-1.5 bg-white p-2.5 rounded border border-slate-200">
                <span class="font-bold text-slate-800 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
                  Teaching Staff Notes:
                </span>
                <p class="text-[11px] text-slate-600 leading-relaxed">\${opening.teacherNotes || ''}</p>
              </div>
            </div>

            <!-- Spoken Discussion Prompts -->
            <div class="space-y-3 pt-2">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Opening Discussion Questions:</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                \${(opening.newsPrompts || []).map((p, idx) => \`
                  <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                        <span>QUESTION 0\${idx + 1}</span>
                        <span class="text-blue-600">Discuss with Partner</span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mb-2">\${p.question}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-100">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                        <span>Show Sample Spoken Answers</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                      <div class="hidden mt-2 p-2 bg-slate-50 rounded text-[11px] text-slate-600 space-y-1.5 border border-slate-200">
                        \${(p.exampleAnswers || []).map(ans => \`<p class="leading-relaxed">&ldquo;\${ans}&rdquo;</p>\`).join('')}
                      </div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Entry Spot-Check Diagnostics -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Entry Spot-Check Diagnostic (4 Questions):</h5>
                <span class="text-[11px] font-medium text-slate-500">Test baseline comprehension</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                \${(opening.spotCheckQuestions || []).map(q => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <p class="text-xs font-bold text-slate-900">\${q.id}. \${q.question}</p>
                    <div class="space-y-1">
                      \${q.options.map((opt, oIdx) => \`
                        <div class="text-[11px] text-slate-700 flex items-start gap-1.5">
                          <span class="font-bold text-slate-500">\${String.fromCharCode(65 + oIdx)})</span>
                          <span>\${opt}</span>
                        </div>
                      \`).join('')}
                    </div>
                    <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-black text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded cursor-pointer">
                        Reveal Answer
                      </button>
                      <div class="hidden text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        \${q.explanation}
                      </div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Chart Extract -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${chart.title || 'Activity 2: Reading the Chart Extract (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">\${chart.badge || 'CHART EXTRACT'}</span>
            </div>

            <!-- Chart Terminal Header -->
            <div class="p-3.5 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-mono font-bold tracking-wide uppercase">\${chart.callsign || 'AUTHENTIC SIMULATION'}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-300">ICAO / EASA STANDARD SPECIFICATION</span>
            </div>

            <!-- Structured Extract Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              \${(chart.sections || []).map(sec => \`
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <h5 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1.5">\${sec.heading}</h5>
                  <ul class="space-y-1.5 text-xs text-slate-700">
                    \${sec.details.map(d => \`
                      <li class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                        <span class="leading-relaxed">\${d}</span>
                      </li>
                    \`).join('')}
                  </ul>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${clinic.title || 'Activity 3: Language Clinic (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${clinic.summary || ''}</p>
                </div>
              </div>
              <span class="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LANGUAGE FOCUS</span>
            </div>

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              \${(clinic.rules || []).map(r => \`
                <div class="p-3 bg-purple-50/50 border border-purple-200 rounded-lg space-y-1">
                  <span class="text-xs font-black text-purple-900 font-mono">\${r.term}</span>
                  <p class="text-[11px] text-slate-600">\${r.meaning}</p>
                  <p class="text-[11px] text-purple-800 italic pt-1 border-t border-purple-100">&ldquo;\${r.example}&rdquo;</p>
                </div>
              \`).join('')}
            </div>

            <!-- Practical Oral Drills -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Practical Spoken Drills (In Pairs):</h5>
              <div class="space-y-2">
                \${(clinic.drills || []).map(d => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="space-y-0.5">
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Drill \${d.id}</span>
                      <p class="text-xs font-bold text-slate-800">\${d.prompt}</p>
                    </div>
                    <div class="shrink-0">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                        Reveal Model Spoken Response
                      </button>
                      <div class="hidden text-xs text-blue-900 font-medium bg-blue-50 p-2 rounded border border-blue-200 mt-1 sm:max-w-md">
                        &ldquo;\${d.targetAnswer}&rdquo;
                      </div>
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Interactive Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${roleplay.title || 'Activity 4: Spoken Role-Play (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed">\${roleplay.situation || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              \${(roleplay.roles || []).map(r => \`
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 shadow-2xs flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900 border-b border-slate-100 pb-1.5">\${r.role}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-1.5">\${r.instructions}</p>
                  </div>
                </div>
              \`).join('')}
            </div>

            <!-- Observer Checklist & Useful Phrases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Peer Observer Checklist:</h5>
                <ul class="space-y-1 text-[11px] text-slate-600">
                  \${(roleplay.checklist || []).map(c => \`
                    <li class="flex items-center gap-1.5">
                      <input type="checkbox" class="rounded text-blue-600">
                      <span>\${c}</span>
                    </li>
                  \`).join('')}
                </ul>
              </div>
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Key Communicative Phrases:</h5>
                <ul class="space-y-1 text-[11px] text-slate-700 italic">
                  \${(roleplay.phrases || []).map(p => \`<li>&bull; &ldquo;\${p}&rdquo;</li>\`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${safety.title || 'Activity 5: Safety Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${safety.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SAFETY ANALYSIS</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              \${(safety.steps || []).map(s => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center">\${s.step}</span>
                    <h5 class="text-xs font-bold text-slate-900">\${s.title}</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">\${s.text}</p>
                </div>
              \`).join('')}
            </div>
          </div>

          <!-- Activity 6: Operational Notes -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes &amp; Decisions</h4>
                  <p class="text-[11px] text-slate-500">Record your team's role-play conclusions and safety decisions. Auto-saved in browser local storage.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[11px]">
                <span id="notes-status-s${sessionNum}" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('${sessionNum}')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. ${note1Label}:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s${sessionNum}" oninput="window.saveLessonNote('${sessionNum}', 'roleplay', this.value)" rows="3" placeholder="${note1Placeholder}" class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">\${window.getLessonNote ? window.getLessonNote('${sessionNum}', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s${sessionNum}" class="notes-print-display">\${(window.getLessonNote ? window.getLessonNote('${sessionNum}', 'roleplay') : '') || '[No simulation notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. ${note2Label}:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s${sessionNum}" oninput="window.saveLessonNote('${sessionNum}', 'safety', this.value)" rows="3" placeholder="${note2Placeholder}" class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">\${window.getLessonNote ? window.getLessonNote('${sessionNum}', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s${sessionNum}" class="notes-print-display">\${(window.getLessonNote ? window.getLessonNote('${sessionNum}', 'safety') : '') || '[No safety check decision recorded]'}</div>
              </div>
            </div>
          </div>
        </div>
      \`;
    }`;
}

const s4TemplateCode = generateTemplateFunction(
  4,
  's4',
  'Aerodrome Ground Layouts & Taxiway Navigation',
  'Taxi Clearance & Runway Crossing Routing Notes',
  'e.g., Assigned routing for AFR 412: Stand 14 via Taxiway Delta, hold short of Runway 14R at holding point D1. Crossed 14R upon clearance, joined Taxiway Alpha to holding point A1...',
  'Runway Incursion Safety Defenses & Hot Spot 1 Action',
  'e.g., Mandatory red stop bars installed at D1. Enhanced yellow centerline markings painted 45m prior to stop line. Progressive taxi instructions and full verbal readback enforced...'
);

const s5TemplateCode = generateTemplateFunction(
  5,
  's5',
  'Airspace Corridors: SIDs, STARs & Transition Routes',
  'Departure Briefing & Storm Diversion Routing Notes',
  'e.g., GAILLAC 4A departure briefed: Climb runway heading 142° to 3,000 ft, turn left direct GAI VOR. Weather avoidance: Requested 20° left heading at 4,500 ft to clear CB cell; approved by ATC to FL090...',
  'Departure Route Deviation & Level Bust Safety Record',
  'e.g., Verified Minimum Safe Altitude (MSA 4,200 ft). Cross-checked terrain floor to south (Pyrenees sector 7,800 ft). Maintained sterile cockpit and 100% verbal readback of tactical headings...'
);

const s6TemplateCode = generateTemplateFunction(
  6,
  's6',
  'Approach Plates: Final Corridors & Go-Around Paths',
  'Final Approach Briefing & Go-Around Execution Notes',
  'e.g., ILS Runway 14L briefed: Localizer 109.3 MHz, inbound track 142°, FAF 5.2 DME at 2,000 ft, DA 692 ft (DH 200 ft). Go-around called at 400 ft due to vehicle on runway: climbed straight ahead to 2,500 ft, flaps 15, gear up...',
  'Stabilized Approach Criteria & Blame-Free Policy Agreement',
  'e.g., Enforced 1,000 ft IMC stabilized gate (path, speed -0/+10 kt, sink rate <= 1,000 fpm). Confirmed blame-free go-around policy: all flight crews empowered to abort approach whenever doubt exists...'
);

// Read existing src/js/05-templates-mod1.js
let templatesMod1 = fs.readFileSync(templatesMod1Path, 'utf8');

// Replace everything from function renderLessonContentTabSession4 to the end
const s4Index = templatesMod1.indexOf('function renderLessonContentTabSession4');
if (s4Index !== -1) {
  templatesMod1 = templatesMod1.substring(0, s4Index);
}

// Append new Session 4, 5, 6 renderers
const updatedTemplatesMod1 = templatesMod1.trimEnd() + '\n\n' + s4TemplateCode + '\n\n' + s5TemplateCode + '\n\n' + s6TemplateCode + '\n';
fs.writeFileSync(templatesMod1Path, updatedTemplatesMod1, 'utf8');
console.log('✓ Successfully updated src/js/05-templates-mod1.js with full templates for Sessions 4, 5 & 6.');

// ============================================================================
// PART C: UPDATE src/js/04-templates-dispatcher.js
// ============================================================================

let dispatcherCode = fs.readFileSync(dispatcherPath, 'utf8');

// Ensure dispatcher routes to session 4, 5, 6
const oldBranch = `      if (modalState.sessionNum === 1) {
        renderLessonContentTabSession1(sessionData, theme);
      } else if (modalState.sessionNum === 2) {
        renderLessonContentTabSession2(sessionData, theme);
      } else if (modalState.sessionNum === 3) {
        renderLessonContentTabSession3(sessionData, theme);
      } else {
        renderLessonContentTabSession4(sessionData, theme);
      }`;

const newBranch = `      if (modalState.sessionNum === 1) {
        renderLessonContentTabSession1(sessionData, theme);
      } else if (modalState.sessionNum === 2) {
        renderLessonContentTabSession2(sessionData, theme);
      } else if (modalState.sessionNum === 3) {
        renderLessonContentTabSession3(sessionData, theme);
      } else if (modalState.sessionNum === 4) {
        renderLessonContentTabSession4(sessionData, theme);
      } else if (modalState.sessionNum === 5) {
        renderLessonContentTabSession5(sessionData, theme);
      } else if (modalState.sessionNum === 6) {
        renderLessonContentTabSession6(sessionData, theme);
      } else {
        renderLessonContentTabSession4(sessionData, theme);
      }`;

if (dispatcherCode.includes(oldBranch)) {
  dispatcherCode = dispatcherCode.replace(oldBranch, newBranch);
  fs.writeFileSync(dispatcherPath, dispatcherCode, 'utf8');
  console.log('✓ Successfully updated src/js/04-templates-dispatcher.js with branches for Sessions 4, 5 & 6.');
} else {
  console.log('ℹ Dispatcher already contains or has different branch structure.');
}

console.log('🎉 Sessions 4, 5 & 6 Curriculum Build Complete!');
