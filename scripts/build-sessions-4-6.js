/**
 * Automated Curriculum Generator for GSEA Semester 3 (Sessions 4, 5, 6)
 * Module 1: Aerodrome Maps & Airspace Charts
 * Full Visual Charts, Distinct Communicative Games, Map Description Clinics,
 * Spoken Direction Role-Plays, Safety Checks & 90 Vocabulary Terms.
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const courseDataPath = path.join(rootDir, 'data', 'course-data.js');
const templatesMod1Path = path.join(rootDir, 'src', 'js', '05-templates-mod1.js');
const dispatcherPath = path.join(rootDir, 'src', 'js', '04-templates-dispatcher.js');

console.log('🚀 Running Enhanced GSEA Semester 3 Curriculum Generator with Visual Charts & Games...');

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
  summary: "By the end of this session, GSEA students will be able to orient someone to an airport map with natural spoken confidence, navigate a visual Ground Movement Chart (GMC), give precise physical directions using prepositions of place, play the 'Blind Taxi Navigator' information-gap game, role-play an active runway crossing taxi clearance, and complete a collaborative Safety Check on runway incursion hazards.",
  items: [
    {
      num: 1,
      title: "Orient Someone to an Airport Map (Map Description Skill)",
      description: "Learn and use natural spoken phrases to introduce an airport layout to a colleague (at the top, running north-to-south, directly opposite, adjacent to)."
    },
    {
      num: 2,
      title: "Read a Visual Ground Movement Chart (Visual Chart Scanning)",
      description: "Scan the visual LFMT aerodrome ground movement chart to identify runways, parallel taxiway Alpha, rapid exits Bravo and Charlie, crossing taxiway Delta, and Hot Spot 1."
    },
    {
      num: 3,
      title: "Prepositions of Place & Physical Directions (Language Focus)",
      description: "Master precise location words: adjacent to, opposite, parallel to, between, at the intersection of, short of, and beyond."
    },
    {
      num: 4,
      title: "Communicative Game: 🎮 The Blind Taxi Navigator (Information-Gap Game)",
      description: "Guide your partner from an assigned parking stand to a secret airfield destination using only spoken turn-by-turn physical directions."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Ground Movement Challenge & 'Lost on Tarmac'",
      description: "Role-play a Ground Controller issuing taxi instructions with an active runway crossing, and talk a confused ground driver back to safety."
    },
    {
      num: 6,
      title: "Safety Check: Preventing Runway Incursions (Operational Discussion)",
      description: "Collaborate in teams to analyze a confusing multi-taxiway intersection, evaluate collision risks, and agree on clear safety solutions."
    }
  ]
};

const s4LessonPlan = {
  title: "Session 4 Lesson Plan (2 Hours)",
  summary: "A 2-hour communicative spoken English session covering visual ground chart reading, map orientation skills, prepositions of place, the 'Blind Taxi Navigator' game, a runway crossing role-play, and a runway incursion Safety Check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Navigating on the Ground (15 mins)",
      description: "In pairs, students discuss why taxiing at unfamiliar airports is demanding, share personal navigation tricks, and test entry knowledge with 4 spot-check questions."
    },
    {
      time: "15-40",
      title: "Part 2: Visual Chart & Map Orientation Clinic (25 mins)",
      description: "Analyzing the visual LFMT Ground Movement Chart (GMC), learning standard phrases for orienting colleagues to a map, and completing a 60-second map description challenge."
    },
    {
      time: "40-65",
      title: "Part 3: Language Clinic: Prepositions of Place & Directions (25 mins)",
      description: "Oral drills and pair practice using prepositions of place (adjacent to, opposite, parallel to, between, at the intersection of, short of, beyond) to give crisp physical directions."
    },
    {
      time: "65-90",
      title: "Part 4: Communicative Game: 🎮 The Blind Taxi Navigator (25 mins)",
      description: "Information-gap partner game: Student A guides Student B across the airport to a secret destination using step-by-step spoken directions while Student B traces the route."
    },
    {
      time: "90-120",
      title: "Part 5: Speaking Role-Play & Safety Check (30 mins)",
      description: "Spoken simulation: Ground Controller issues progressive taxi instructions with an active runway crossing, followed by a 4-step collaborative Safety Check on Hot Spot 1."
    }
  ]
};

const s4LessonContent = {
  hero: {
    title: "Aerodrome Ground Layouts & Taxiway Navigation",
    subtitle: "Visual Ground Movement Charts (GMC), Map Orientation, Prepositions of Place & 'Blind Taxi Navigator' Game",
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
    teacherNotes: "Encourage spontaneous speaking. Help students describe physical spaces and relative directions naturally in English without worrying about technical jargon.",
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
    title: "Activity 2: Visual Chart & Map Orientation Clinic (25 mins)",
    summary: "Inspect the visual Ground Movement Chart (LFMT) and learn natural spoken patterns to walk a colleague through an aerodrome layout.",
    visualChart: "images/charts/chart_s4_gmc_lfmt.svg",
    badge: "AUTHENTIC SIMULATION • LFMT GROUND MOVEMENT CHART",
    callsign: "Blagnac-Montpellier Airport (LFMT / Elev 495 ft)",
    mapDescriptionClinic: {
      title: "Speaking Skill: How to Orient & Describe an Airport Map",
      summary: "Use these natural spoken templates to introduce an airport layout clearly without hesitations:",
      phrases: [
        { label: "Overall Orientation", phrase: "If you look at the overall layout, the airport is oriented northwest to southeast, with two parallel runways." },
        { label: "Main Runway", phrase: "The primary runway is 14L/32R on the east side, spanning 3,500 metres with full CAT III ILS capability." },
        { label: "Parallel Taxiway", phrase: "Running parallel to Runway 14L along its entire eastern edge is Taxiway Alpha." },
        { label: "Terminals & Stands", phrase: "Over on the southwest side, you can see Apron North with the passenger terminal and Stands 1 through 16." },
        { label: "Opposite Facilities", phrase: "Directly opposite the terminal on the western boundary is the cargo ramp, while the fire station sits adjacent to Apron North." },
        { label: "Caution Areas", phrase: "Notice Hot Spot 1 at the junction of Alpha and Delta, where crossing vehicles create an incursion risk." }
      ],
      challenge: "Partner Challenge: Take turns giving your partner a 60-second spoken overview of the LFMT layout using at least 4 of the phrases above!"
    },
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
    title: "Activity 3: Language Clinic: Prepositions of Place & Physical Directions (25 mins)",
    summary: "Master clear position words and direction-giving phrases to describe airport facilities with precision.",
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
  communicativeGame: {
    title: "Activity 4: Communicative Game: 🎮 The Blind Taxi Navigator (25 mins)",
    summary: "An information-gap spoken game. Guide your partner from your parking stand to a mystery airfield destination using step-by-step oral directions.",
    instructions: [
      "Student A (The Navigator): Pick one of the 4 Secret Missions below (do NOT tell your partner the destination). Look at the visual chart.",
      "Student B (The Pilot/Driver): Close your eyes or place your finger on the starting point on the chart. Do not look ahead.",
      "Student A gives clear, step-by-step physical directions: 'Start at Stand 14. Turn right onto Taxiway Delta. Taxi forward 150m until you reach the red holding line...'",
      "Student B traces the route with their finger. When Student A says 'You have arrived!', Student B must announce where they think they are!",
      "Switch roles and try another mission."
    ],
    missions: [
      {
        id: 1,
        mission: "Mission 1 (Cargo Delivery): Start at Stand 14 &rarr; Target: Cargo Ramp",
        hints: "Turn right onto Delta, hold short of 14R, cross runway, turn left onto perimeter taxilane, proceed opposite passenger terminal."
      },
      {
        id: 2,
        mission: "Mission 2 (Winter De-icing): Start at Stand 16 &rarr; Target: De-icing Bay 2",
        hints: "Taxi along Delta, cross Runway 14R, turn left onto Alpha, taxi past Hot Spot 1, turn right into the pad between Bravo and the hangar."
      },
      {
        id: 3,
        mission: "Mission 3 (Emergency Drill): Start at Fire Station &rarr; Target: Holding Point A1 (Runway 14L)",
        hints: "Exit station onto apron taxilane, join Delta, cross 14R, turn left on Alpha, taxi north to holding point A1."
      },
      {
        id: 4,
        mission: "Mission 4 (Late Departure): Start at Cargo Ramp &rarr; Target: Stand 12 (Main Terminal)",
        hints: "Taxi east along perimeter, cross Runway 14R carefully, enter Apron North, park at Stand 12 directly opposite the cargo ramp."
      }
    ],
    sampleDialogue: [
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
  roleplaySimulation: {
    title: "Activity 5: Speaking Role-Play: Ground Movement Challenge & 'Lost on Tarmac' (25 mins)",
    summary: "Simulate a realistic spoken interaction between Ground Control and Flight AFR 412, plus a quick recovery dialogue with a lost driver.",
    situation: "Part 1: Flight AFR 412 (Airbus A320) is parked at Stand 14 on Apron North. The pilot requests taxi clearance to Runway 14L. The route requires taxiing along Delta, crossing active Runway 14R, joining Taxiway Alpha, and holding short of 14L at A1.\nPart 2 (Spoken Twist): A ground baggage tug driver has taken a wrong turn in thick fog and is lost near Hot Spot 1. Ground Control must give calm, clear directions to guide the tug back to Apron North.",
    roles: [
      {
        role: "Role A: Ground Controller",
        instructions: "Issue progressive taxi instructions. Give the taxi route: 'Taxi via Delta, hold short of Runway 14R'. When the runway is clear, instruct: 'Cross Runway 14R, taxi via Alpha to holding point A1, Runway 14L'. In Part 2, guide the lost tug driver away from the runway using simple landmarks."
      },
      {
        role: "Role B: Airline Pilot (AFR 412) / Lost Tug Driver",
        instructions: "In Part 1, call Ground ready to taxi. Read back all instructions completely, especially the runway hold-short command. In Part 2, act as the lost tug driver: describe what you see around you ('I see a red stop bar and a yellow taxiway sign saying Delta') and follow directions."
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
      "Clear direction words (left, right, ahead, opposite) were used to recover the lost driver."
    ],
    phrases: [
      "Ground, Air France 412, Stand 14, request taxi to Runway 14L.",
      "Air France 412, taxi via Delta, hold short of Runway 14R.",
      "Taxi via Delta, hold short of Runway 14R, Air France 412.",
      "Air France 412, cross Runway 14R, taxi via Alpha to holding point A1.",
      "Tug 4, do you see the bright fire station lights on your left? Turn left towards the station immediately."
    ]
  },
  safetyCheck: {
    title: "Activity 6: Safety Check: Preventing Runway Incursions (15 mins)",
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

// ----------------------------------------------------------------------------
// SESSION 5 DATA: Airspace Corridors: SIDs, STARs & Transition Routes
// ----------------------------------------------------------------------------
const s5Objectives = {
  title: "Session 5 - Airspace Corridors: SIDs, STARs & Transition Routes Objectives",
  summary: "By the end of this session, GSEA students will be able to explain airspace corridors in plain English, narrate a flight route sequentially using prepositions of movement, scan the visual GAILLAC 4A departure chart, play the 'Airspace Detective' logic game to spot dangerous clearance errors, role-play a cockpit departure briefing and weather diversion, and complete a collaborative Safety Check on route deviations.",
  items: [
    {
      num: 1,
      title: "Trace a Flight Path Aloud (Sequential Narration Skill)",
      description: "Learn and use professional spoken patterns to walk a colleague through a 3D flight corridor from takeoff to cruising level."
    },
    {
      num: 2,
      title: "Read a Visual SID & STAR Route Chart (Visual Chart Scanning)",
      description: "Scan the visual GAILLAC 4A departure chart to locate waypoints, climb restrictions, minimum safe altitudes (MSA), and the GAILLAC holding pattern."
    },
    {
      num: 3,
      title: "Prepositions of Movement & Direction (Language Focus)",
      description: "Master dynamic motion words: climb straight ahead to, turn left towards, proceed via, along corridor, maintain until, and intersect."
    },
    {
      num: 4,
      title: "Communicative Game: 🔍 Airspace Detective: Spot the Route Trap",
      description: "Review 4 simulated flight clearances with a partner, race to detect the hidden safety trap, explain the hazard in spoken English, and issue the correction."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Departure Briefing & Storm Diversion",
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
  summary: "A 2-hour communicative spoken English session covering visual SID charts, sequential flight path narration, prepositions of movement, the 'Airspace Detective' game, a weather diversion role-play, and an altitude safety check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: Why SIDs and STARs Exist (15 mins)",
      description: "In pairs, students discuss how structured departure corridors prevent air traffic conflicts, and test entry knowledge with 4 spot-check questions."
    },
    {
      time: "15-40",
      title: "Part 2: Visual Chart & Flight Path Narration Clinic (25 mins)",
      description: "Analyzing the visual GAILLAC 4A departure chart, learning standard storytelling phrases for narrating a flight path sequentially, and completing a 60-second route briefing."
    },
    {
      time: "40-65",
      title: "Part 3: Language Clinic: Prepositions of Movement & Direction (25 mins)",
      description: "Oral drills and pair practice using prepositions of movement (climb straight ahead to, turn left towards, proceed via, along, maintain until, intersect) to describe 3D climb paths."
    },
    {
      time: "65-90",
      title: "Part 4: Communicative Game: 🔍 Airspace Detective: Spot the Route Trap (25 mins)",
      description: "Spoken detective game: pairs review 4 departure clearance cases, spot the single illegal clearance, explain the danger in spoken English, and propose the fix."
    },
    {
      time: "90-120",
      title: "Part 5: Speaking Role-Play & Safety Check (30 mins)",
      description: "Spoken simulation: Captain briefs First Officer on GAILLAC 4A, calls Departure Radar for a 20° weather diversion around a storm cell, and completes a terrain safety check."
    }
  ]
};

const s5LessonContent = {
  hero: {
    title: "Airspace Corridors: SIDs, STARs & Transition Routes",
    subtitle: "Visual Departure Charts (GAILLAC 4A), Sequential Path Narration, Prepositions of Movement & 'Airspace Detective' Game",
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
    title: "Activity 2: Visual Chart & Flight Path Narration Clinic (25 mins)",
    summary: "Inspect the visual GAILLAC 4A Departure Chart and learn how to narrate a flight path sequentially like an airline flight crew.",
    visualChart: "images/charts/chart_s5_sid_lfmt.svg",
    badge: "AUTHENTIC SIMULATION • SID GAILLAC 4A (LFMT)",
    callsign: "Blagnac-Montpellier Airport (LFMT) • Runway 14L Departures",
    flightPathClinic: {
      title: "Speaking Skill: How to Trace a Flight Path Aloud (Sequential Narration)",
      summary: "Use these sequential phrases to describe a 3D departure route smoothly from liftoff to en-route cruise:",
      phrases: [
        { label: "1. Liftoff & Initial Track", phrase: "Our flight departs Runway 14L on an initial climb track of 142 degrees magnetic." },
        { label: "2. Noise Abatement Altitude", phrase: "We maintain runway heading until reaching 3,000 feet or 5 DME, which protects residential areas from noise." },
        { label: "3. The Climbing Turn", phrase: "Upon passing 3,000 feet, we execute a climbing left turn direct towards waypoint GAILLAC (GAI VOR/DME 114.4)." },
        { label: "4. Altitude Milestones", phrase: "We must cross 8 DME at or above 4,000 feet, and cross GAILLAC at or above Flight Level 070." },
        { label: "5. Transition Altitude", phrase: "At 5,000 feet, we switch altimeters from local QNH to the standard 1013 setting." },
        { label: "6. En-route Join", phrase: "From GAILLAC, we proceed along airway UM733 towards waypoint MENDE to join high-altitude airspace." }
      ],
      challenge: "Partner Challenge: Take turns narrating the entire GAILLAC 4A departure to your partner from memory in 60 seconds!"
    },
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
  communicativeGame: {
    title: "Activity 4: Communicative Game: 🔍 Airspace Detective: Spot the Route Trap (25 mins)",
    summary: "Review 4 simulated departure clearances with your partner. Three are legal, but one contains a dangerous error. Find it, explain the hazard, and fix it!",
    instructions: [
      "In pairs, read each of the 4 simulated ATC clearances below.",
      "Three clearances follow the GAILLAC 4A rules perfectly, but ONE contains a dangerous procedural violation.",
      "Discuss with your partner: Which case is the TRAP? Why is it dangerous? What is the correct radio instruction?",
      "Click 'Reveal Detective Report' to check if your team caught the culprit!"
    ],
    cases: [
      {
        id: "Case Alpha",
        clearance: "AFR 210, cleared GAILLAC 4A departure, after liftoff climb straight ahead to 3,000 ft, turn left direct GAILLAC, climb to FL090, cross GAI at or above FL070.",
        status: "LEGAL",
        note: "Follows all altitude, noise abatement, and route restrictions."
      },
      {
        id: "Case Bravo (THE TRAP!)",
        clearance: "AFR 442, cleared GAILLAC 4A departure. Airborne off 14L at 1,200 ft, immediate left turn direct GAILLAC approved for traffic shortcut, climb to FL080.",
        status: "DANGEROUS TRAP!",
        note: "VIOLATION! The chart strictly mandates: 'No turns below 3,000 ft QNH for noise abatement'. Turning at 1,200 ft violates local noise regulations and risks loss of separation with arrival corridors!"
      },
      {
        id: "Case Charlie",
        clearance: "AFR 884, climbing through 4,000 ft on GAILLAC 4A, maintain 240 knots indicated until passing FL100, climb to FL120.",
        status: "LEGAL",
        note: "Speed is 240 kt (below the 250 kt max limit) and climb profile is respected."
      },
      {
        id: "Case Delta",
        clearance: "AFR 915, passing 3,500 ft, left turn direct GAILLAC approved, enter holding pattern at GAILLAC at FL080, right-hand turns, 1-minute legs.",
        status: "LEGAL",
        note: "Holding parameters match the published plate: FL080 min, right turns, 1 min legs."
      }
    ],
    challengeQuestion: "Explain to the class: What makes Case Bravo dangerous, and how would you correct the controller's instruction in clear English?"
  },
  roleplaySimulation: {
    title: "Activity 5: Speaking Role-Play: Departure Briefing & Storm Diversion (25 mins)",
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
    title: "Activity 6: Safety Check: Managing Departure Route Deviations & Level Busts (15 mins)",
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

// ----------------------------------------------------------------------------
// SESSION 6 DATA: Approach Plates: Final Corridors & Go-Around Paths
// ----------------------------------------------------------------------------
const s6Objectives = {
  title: "Session 6 - Approach Plates: Final Corridors & Go-Around Paths Objectives",
  summary: "By the end of this session, GSEA students will be able to read and explain visual approach plates (IAC / ILS) in plain English, explain vertical descent profiles aloud, play the fast-paced 'Go / No-Go Lightning Challenge', role-play an emergency go-around command, and complete a collaborative Safety Check on unstabilized approach criteria.",
  items: [
    {
      num: 1,
      title: "Read the Side-View Profile Aloud (Profile Briefing Skill)",
      description: "Learn and use standard spoken patterns to explain vertical descent profiles, FAF Maltese cross, glide path angles, and decision heights."
    },
    {
      num: 2,
      title: "Read a Visual Approach Plate (Visual Chart Scanning)",
      description: "Scan the visual ILS Runway 14L approach plate to identify plan view fixes (CAPDENAC, BLAGY), FAF at 5.2 DME, 3.0° glide slope, and decision altitude (692 ft)."
    },
    {
      num: 3,
      title: "Vertical Paths & Cockpit Callouts (Language Focus)",
      description: "Master vertical flight terminology: on the glide slope, slightly high/low, at the final approach fix, upon reaching minimums, and positive climb, gear up."
    },
    {
      num: 4,
      title: "Communicative Game: ⚡ Go / No-Go Lightning Challenge",
      description: "Fast-paced rapid-fire round! Take turns reading approach dilemma cards, call out 'CONTINUE!' or 'GO-AROUND!' in 3 seconds, and defend your choice."
    },
    {
      num: 5,
      title: "Speaking Role-Play: Low Visibility Approach & Emergency Go-Around",
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
  summary: "A 2-hour communicative spoken English session covering visual ILS approach plates, profile view briefings, the 'Go / No-Go Lightning Challenge' game, an emergency go-around role-play, and an unstabilized approach safety check.",
  items: [
    {
      time: "00-15",
      title: "Part 1: Warm-up: The Final 3 Minutes Before Touchdown (15 mins)",
      description: "In pairs, students discuss cockpit workload on final approach, explain stabilized approach gates, and test entry knowledge with 4 spot-check questions."
    },
    {
      time: "15-40",
      title: "Part 2: Visual Chart & Profile View Briefing Clinic (25 mins)",
      description: "Analyzing the visual ILS Runway 14L plate at LFMT, learning standard phrases to describe the vertical step-down profile, and completing a 60-second approach briefing."
    },
    {
      time: "40-65",
      title: "Part 3: Language Clinic: Vertical Paths & Cockpit Callouts (25 mins)",
      description: "Oral drills and pair practice using vertical flight terminology (on the glide slope, at the final approach fix, upon reaching minimums, go-around positive climb)."
    },
    {
      time: "65-90",
      title: "Part 4: Communicative Game: ⚡ Go / No-Go Lightning Challenge (25 mins)",
      description: "Rapid-fire partner game: students evaluate 6 high-pressure approach scenarios, make instant 3-second 'Continue' or 'Go-Around' calls, and defend their choice."
    },
    {
      time: "90-120",
      title: "Part 5: Speaking Role-Play & Safety Check (30 mins)",
      description: "Spoken simulation: Tower Controller commands an immediate go-around due to a vehicle crossing Runway 14L on 2-mile final, followed by a 4-step Safety Check on stabilized criteria."
    }
  ]
};

const s6LessonContent = {
  hero: {
    title: "Approach Plates: Final Corridors & Go-Around Paths",
    subtitle: "Visual ILS Plates (Plan & Profile Views), Vertical Flight Callouts & 'Go / No-Go Lightning Challenge' Game",
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
    title: "Activity 2: Visual Chart & Profile View Briefing Clinic (25 mins)",
    summary: "Inspect the visual ILS Runway 14L plate (Plan View + Profile View) and master how to deliver a crisp spoken approach briefing.",
    visualChart: "images/charts/chart_s6_approach_lfmt.svg",
    badge: "AUTHENTIC SIMULATION • ILS RWY 14L APPROACH PLATE (LFMT)",
    callsign: "Blagnac-Montpellier Airport (LFMT / Elev 495 ft) • ILS or LOC Rwy 14L",
    profileClinic: {
      title: "Speaking Skill: How to Read the Side-View (Profile) Aloud",
      summary: "Use these spoken patterns to walk your colleague through the vertical approach profile from the FAF to the runway:",
      phrases: [
        { label: "1. Navigation Setup", phrase: "This will be the ILS Runway 14L approach, tuned to localizer 109.3 MHz with an inbound track of 142 degrees." },
        { label: "2. Intermediate Fix", phrase: "We cross BLAGY at 9 DME at an altitude of 4,000 feet, where we begin configuring flaps and gear." },
        { label: "3. Final Approach Fix", phrase: "The Maltese Cross marks the Final Approach Fix at 5.2 DME at 2,000 feet, where we intercept the 3-degree glide slope." },
        { label: "4. Vertical Descent", phrase: "Following the 3-degree glide slope downwards, our target descent rate is approximately 750 feet per minute." },
        { label: "5. Decision Altitude", phrase: "Our CAT I Decision Altitude is 692 feet, which gives us a decision height of exactly 200 feet above the touchdown zone." },
        { label: "6. Missed Approach", phrase: "In the event of a go-around: climb straight ahead on track 142° to 2,500 feet, then turn left climbing to 4,000 feet direct TOU VOR." }
      ],
      challenge: "Partner Challenge: Take turns delivering the full approach briefing to your partner in 60 seconds!"
    },
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
    title: "Activity 3: Language Clinic: Vertical Paths & Cockpit Callouts (25 mins)",
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
  communicativeGame: {
    title: "Activity 4: Communicative Game: ⚡ Go / No-Go Lightning Challenge (25 mins)",
    summary: "A high-speed approach dilemma game. Take turns reading the 6 dilemma cards below. You have 3 seconds to shout 'CONTINUE!' or 'GO-AROUND!', and 2 complete sentences to defend your choice!",
    instructions: [
      "Student A reads a Dilemma Card aloud to Student B.",
      "Student B must shout either 'CONTINUE!' or 'GO-AROUND!' within 3 SECONDS.",
      "Student B immediately gives 2 complete spoken sentences defending their decision based on stabilized approach rules.",
      "Student A checks the model defense and awards 2 points for a prompt, correct call + 2 points for fluent justification.",
      "Switch roles for the next card!"
    ],
    cards: [
      {
        id: 1,
        situation: "At 1,000 ft in IMC: airspeed is 170 kt (target approach speed 140 kt), flaps are at position 2 (landing flaps required), and sink rate is 1,300 fpm. Continue or Go-Around?",
        verdict: "GO-AROUND!",
        defense: "The approach is completely unstabilized! The airspeed is 30 knots high, the landing flaps are not set, and the descent rate exceeds the 1,000 fpm safety limit."
      },
      {
        id: 2,
        situation: "At Decision Altitude 692 ft (200 ft AGL): thick fog rolls over the threshold. Zero approach lights or runway markings are visible. Continue or Go-Around?",
        verdict: "GO-AROUND!",
        defense: "Under CAT I ILS rules, visual references are mandatory at Decision Altitude! Without visual contact with the lights or runway, an immediate missed approach must be executed."
      },
      {
        id: 3,
        situation: "At 500 ft in VMC: aircraft is perfectly aligned on the localizer and glide slope, landing gear down and locked, landing flaps 30 set, speed steady at 142 kt with a 700 fpm descent rate. Continue or Go-Around?",
        verdict: "CONTINUE!",
        defense: "All stabilized approach criteria are fully satisfied! The aircraft is in final landing configuration, on speed, on flight path, with normal sink rate."
      },
      {
        id: 4,
        situation: "At 300 ft on short final: the runway and threshold lights are in plain sight, but the Tower Controller suddenly announces: 'Operations vehicle crossing runway at Taxiway Charlie!' Continue or Go-Around?",
        verdict: "GO-AROUND!",
        defense: "The runway is physically obstructed! Continuing the landing creates a severe risk of a high-speed collision, so we must execute an immediate go-around."
      },
      {
        id: 5,
        situation: "At 400 ft in VMC: the pilot forgot to set full landing flaps. The First Officer realizes and says: 'Wait, let me select flaps full right now!' Continue or Go-Around?",
        verdict: "GO-AROUND!",
        defense: "Configuring flaps below the stabilized gate (500 ft in VMC) is strictly forbidden! Trying to configure at 400 ft destabilizes aircraft trim and airspeed close to the ground."
      },
      {
        id: 6,
        situation: "At 800 ft in light rain: bright approach lighting system is spotted, localizer and glide slope are centered, airspeed is on target, landing clearance received. Continue or Go-Around?",
        verdict: "CONTINUE!",
        defense: "The approach is stabilized, visual references are acquired well before minimums, and landing clearance has been confirmed by air traffic control."
      }
    ]
  },
  roleplaySimulation: {
    title: "Activity 5: Speaking Role-Play: Low Visibility Approach & Emergency Go-Around (25 mins)",
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
    title: "Activity 6: Safety Check: Unstabilized Approach & Go-Around Culture (15 mins)",
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

// ----------------------------------------------------------------------------
// ATTACH DATA TO courseData
// ----------------------------------------------------------------------------
m1.sessions["4"].objectives = s4Objectives;
m1.sessions["4"].lessonPlan = s4LessonPlan;
m1.sessions["4"].lessonContent = s4LessonContent;

m1.sessions["5"].objectives = s5Objectives;
m1.sessions["5"].lessonPlan = s5LessonPlan;
m1.sessions["5"].lessonContent = s5LessonContent;

m1.sessions["6"].objectives = s6Objectives;
m1.sessions["6"].lessonPlan = s6LessonPlan;
m1.sessions["6"].lessonContent = s6LessonContent;

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
console.log('✓ Successfully updated data/course-data.js with enhanced activities and games.');

// ============================================================================
// PART B: UPDATE src/js/05-templates-mod1.js
// ============================================================================

// Function generator for Sessions 4, 5, 6
function generateTemplateFunction(sessionNum, sessionTag, moduleName, note1Label, note1Placeholder, note2Label, note2Placeholder, gameRenderer, clinicRenderer) {
  return `    function renderLessonContentTabSession${sessionNum}(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const game = content.communicativeGame || {};
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

          <!-- Activity 2: Visual Chart & Description Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">15-40m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${chart.title || 'Activity 2: Visual Chart & Description Clinic (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">\${chart.badge || 'AERONAUTICAL CHART'}</span>
            </div>

            <!-- Visual Chart Container -->
            <div class="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <div class="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-xs font-mono font-bold text-white tracking-wide uppercase">\${chart.callsign || 'LFMT SPECIFICATION'}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a href="\${chart.visualChart}" target="_blank" rel="noopener noreferrer" class="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 transition-colors">
                    <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    <span>Inspect / Open Full Chart</span>
                  </a>
                </div>
              </div>
              <div class="p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
                <img src="\${chart.visualChart}" alt="\${chart.badge}" class="w-full max-w-4xl h-auto rounded shadow-sm border border-slate-800/80 cursor-pointer transition-transform hover:scale-[1.005]" onclick="window.open('\${chart.visualChart}', '_blank')" title="Click to view full size">
              </div>
            </div>

            <!-- Speaking Skill Clinic (Map / Flight Path / Profile Description) -->
            ${clinicRenderer}

            <!-- Structured Technical Specifications -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Chart Operational Notes &amp; Data:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                \${(chart.sections || []).map(sec => \`
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                    <h6 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1">\${sec.heading}</h6>
                    <ul class="space-y-1 text-xs text-slate-700">
                      \${sec.details.map(d => \`
                        <li class="flex items-start gap-1.5">
                          <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                          <span class="leading-relaxed text-[11px]">\${d}</span>
                        </li>
                      \`).join('')}
                    </ul>
                  </div>
                \`).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">40-65m</span>
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

          <!-- Activity 4: Distinct Communicative Game -->
          ${gameRenderer}

          <!-- Activity 5: Spoken Role-Play Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">90-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${roleplay.title || 'Activity 5: Spoken Role-Play (20 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed whitespace-pre-line">\${roleplay.situation || ''}</p>
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

          <!-- Activity 6: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${safety.title || 'Activity 6: Safety Check (15 mins)'}</h4>
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

          <!-- Activity 7: Operational Notes -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 7: Operational Notes &amp; Game Records</h4>
                  <p class="text-[11px] text-slate-500">Record your team's role-play conclusions and game decisions. Auto-saved in browser local storage.</p>
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

// ----------------------------------------------------------------------------
// SESSION 4 CUSTOM RENDERERS: Map Clinic & Blind Taxi Navigator Game
// ----------------------------------------------------------------------------
const s4ClinicRenderer = `
            <!-- Map Description Skill Box -->
            <div class="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
                  <h5 class="text-xs font-black uppercase tracking-wider text-indigo-900">\${chart.mapDescriptionClinic?.title || 'Map Orientation Skill'}</h5>
                </div>
                <span class="text-[10px] font-bold text-indigo-700 bg-indigo-100 px-2 py-0.5 rounded">Spoken Fluency</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${chart.mapDescriptionClinic?.summary || ''}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                \${(chart.mapDescriptionClinic?.phrases || []).map(p => \`
                  <div class="p-2.5 bg-white border border-indigo-100 rounded-lg text-xs space-y-0.5">
                    <span class="text-[10px] font-bold text-indigo-600 uppercase">\${p.label}:</span>
                    <p class="text-slate-800 italic text-[11px]">&ldquo;\${p.phrase}&rdquo;</p>
                  </div>
                \`).join('')}
              </div>
              <div class="p-2.5 bg-white border border-indigo-200 rounded-lg text-[11px] text-indigo-900 font-bold flex items-center gap-2">
                <span>⏱️</span>
                <span>\${chart.mapDescriptionClinic?.challenge || ''}</span>
              </div>
            </div>
`;

const s4GameRenderer = `
          <!-- Activity 4: Blind Taxi Navigator Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">65-90m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${game.title || 'Activity 4: 🎮 The Blind Taxi Navigator Game (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${game.summary || ''}</p>
                </div>
              </div>
              <span class="bg-amber-100 text-amber-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">INFORMATION-GAP GAME</span>
            </div>

            <!-- Game Instructions -->
            <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg text-xs space-y-1.5">
              <span class="font-bold text-amber-900 uppercase text-[10px] tracking-wider">How to Play:</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                \${(game.instructions || []).map(i => \`<li>\${i}</li>\`).join('')}
              </ul>
            </div>

            <!-- 4 Secret Missions -->
            <div class="space-y-2">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Choose a Secret Mission (Student A Only):</h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                \${(game.missions || []).map(m => \`
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-900">\${m.mission}</span>
                    </div>
                    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                      Show Route Guidance Hints
                    </button>
                    <div class="hidden text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200 italic">
                      Hints: \${m.hints}
                    </div>
                  </div>
                \`).join('')}
              </div>
            </div>

            <!-- Sample Game Dialogue -->
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-bold text-slate-800">Model Spoken Game Dialogue:</h5>
                <span class="text-[10px] font-medium text-slate-500">Notice clear prepositions of place and distances</span>
              </div>
              <div class="p-2.5 bg-white rounded border border-slate-200 space-y-1 text-[11px] font-mono text-slate-700">
                \${(game.sampleDialogue || []).map(d => \`<p>\${d}</p>\`).join('')}
              </div>
            </div>
          </div>
`;

// ----------------------------------------------------------------------------
// SESSION 5 CUSTOM RENDERERS: Flight Path Narration & Airspace Detective Game
// ----------------------------------------------------------------------------
const s5ClinicRenderer = `
            <!-- Flight Path Narration Skill Box -->
            <div class="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-purple-600"></span>
                  <h5 class="text-xs font-black uppercase tracking-wider text-purple-900">\${chart.flightPathClinic?.title || 'Flight Path Narration Skill'}</h5>
                </div>
                <span class="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Sequential Speaking</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${chart.flightPathClinic?.summary || ''}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                \${(chart.flightPathClinic?.phrases || []).map(p => \`
                  <div class="p-2.5 bg-white border border-purple-100 rounded-lg text-xs space-y-0.5">
                    <span class="text-[10px] font-bold text-purple-600 uppercase">\${p.label}:</span>
                    <p class="text-slate-800 italic text-[11px]">&ldquo;\${p.phrase}&rdquo;</p>
                  </div>
                \`).join('')}
              </div>
              <div class="p-2.5 bg-white border border-purple-200 rounded-lg text-[11px] text-purple-900 font-bold flex items-center gap-2">
                <span>⏱️</span>
                <span>\${chart.flightPathClinic?.challenge || ''}</span>
              </div>
            </div>
`;

const s5GameRenderer = `
          <!-- Activity 4: Airspace Detective Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">65-90m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${game.title || 'Activity 4: 🔍 Airspace Detective: Spot the Route Trap (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${game.summary || ''}</p>
                </div>
              </div>
              <span class="bg-indigo-100 text-indigo-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LOGIC &amp; SPEAKING GAME</span>
            </div>

            <!-- Game Instructions -->
            <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-xs space-y-1.5">
              <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider">How to Play:</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                \${(game.instructions || []).map(i => \`<li>\${i}</li>\`).join('')}
              </ul>
            </div>

            <!-- 4 Clearance Cases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              \${(game.cases || []).map(c => \`
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase">\${c.id}</span>
                    <p class="text-xs font-mono font-bold text-slate-800 mt-1 leading-relaxed">&ldquo;\${c.clearance}&rdquo;</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200">
                    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                      Reveal Detective Report
                    </button>
                    <div class="hidden mt-1 p-2 bg-white rounded border border-slate-200 text-[11px]">
                      <span class="font-bold \${c.status.includes('TRAP') ? 'text-rose-600' : 'text-emerald-600'}">\${c.status}:</span>
                      <p class="text-slate-600 mt-0.5 leading-relaxed">\${c.note}</p>
                    </div>
                  </div>
                </div>
              \`).join('')}
            </div>

            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-bold flex items-center gap-2">
              <span>🎤</span>
              <span>\${game.challengeQuestion || ''}</span>
            </div>
          </div>
`;

// ----------------------------------------------------------------------------
// SESSION 6 CUSTOM RENDERERS: Profile Clinic & Go/No-Go Lightning Challenge
// ----------------------------------------------------------------------------
const s6ClinicRenderer = `
            <!-- Profile View Skill Box -->
            <div class="p-4 bg-cyan-50/60 border border-cyan-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-600"></span>
                  <h5 class="text-xs font-black uppercase tracking-wider text-cyan-900">\${chart.profileClinic?.title || 'Profile View Briefing Skill'}</h5>
                </div>
                <span class="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded">Vertical Descent</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">\${chart.profileClinic?.summary || ''}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                \${(chart.profileClinic?.phrases || []).map(p => \`
                  <div class="p-2.5 bg-white border border-cyan-100 rounded-lg text-xs space-y-0.5">
                    <span class="text-[10px] font-bold text-cyan-600 uppercase">\${p.label}:</span>
                    <p class="text-slate-800 italic text-[11px]">&ldquo;\${p.phrase}&rdquo;</p>
                  </div>
                \`).join('')}
              </div>
              <div class="p-2.5 bg-white border border-cyan-200 rounded-lg text-[11px] text-cyan-900 font-bold flex items-center gap-2">
                <span>⏱️</span>
                <span>\${chart.profileClinic?.challenge || ''}</span>
              </div>
            </div>
`;

const s6GameRenderer = `
          <!-- Activity 4: Go / No-Go Lightning Challenge Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: \${theme.primary};">65-90m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">\${game.title || 'Activity 4: ⚡ Go / No-Go Lightning Challenge (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">\${game.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LIGHTNING DECISION GAME</span>
            </div>

            <!-- Game Instructions -->
            <div class="p-3.5 bg-rose-50/70 border border-rose-200 rounded-lg text-xs space-y-1.5">
              <span class="font-bold text-rose-900 uppercase text-[10px] tracking-wider">Lightning Challenge Rules:</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                \${(game.instructions || []).map(i => \`<li>\${i}</li>\`).join('')}
              </ul>
            </div>

            <!-- 6 Dilemma Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              \${(game.cards || []).map(card => \`
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Dilemma Card 0\${card.id}</span>
                    <p class="text-xs font-bold text-slate-800 mt-1 leading-relaxed">\${card.situation}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200">
                    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                      Reveal Verdict &amp; Defense
                    </button>
                    <div class="hidden mt-1 p-2 bg-white rounded border border-slate-200 text-[11px]">
                      <span class="font-bold \${card.verdict.includes('GO-AROUND') ? 'text-rose-600' : 'text-emerald-600'}">\${card.verdict}</span>
                      <p class="text-slate-600 mt-0.5 leading-relaxed">\${card.defense}</p>
                    </div>
                  </div>
                </div>
              \`).join('')}
            </div>
          </div>
`;

const s4TemplateCode = generateTemplateFunction(
  4,
  's4',
  'Aerodrome Ground Layouts & Taxiway Navigation',
  'Blind Taxi Navigator & Taxi Clearance Routing Notes',
  'e.g., Assigned routing for AFR 412: Stand 14 via Taxiway Delta, hold short of Runway 14R at holding point D1. Crossed 14R upon clearance, joined Taxiway Alpha to holding point A1...',
  'Runway Incursion Safety Defenses & Hot Spot 1 Action',
  'e.g., Mandatory red stop bars installed at D1. Enhanced yellow centerline markings painted 45m prior to stop line. Progressive taxi instructions and full verbal readback enforced...',
  s4GameRenderer,
  s4ClinicRenderer
);

const s5TemplateCode = generateTemplateFunction(
  5,
  's5',
  'Airspace Corridors: SIDs, STARs & Transition Routes',
  'Airspace Detective Findings & Departure Routing Notes',
  'e.g., GAILLAC 4A departure briefed: Climb runway heading 142° to 3,000 ft, turn left direct GAI VOR. Caught Case Bravo trap: turn at 1,200 ft violates noise abatement. Weather avoidance: Requested 20° left heading at 4,500 ft to clear CB cell...',
  'Departure Route Deviation & Level Bust Safety Record',
  'e.g., Verified Minimum Safe Altitude (MSA 4,200 ft). Cross-checked terrain floor to south (Pyrenees sector 7,800 ft). Maintained sterile cockpit and 100% verbal readback of tactical headings...',
  s5GameRenderer,
  s5ClinicRenderer
);

const s6TemplateCode = generateTemplateFunction(
  6,
  's6',
  'Approach Plates: Final Corridors & Go-Around Paths',
  'Go / No-Go Lightning Defense & Go-Around Execution Notes',
  'e.g., ILS Runway 14L briefed: Localizer 109.3 MHz, inbound track 142°, FAF 5.2 DME at 2,000 ft, DA 692 ft (DH 200 ft). Defended Card 1 (sink rate > 1,000 fpm = automatic go-around). Go-around called at 400 ft due to vehicle on runway: climbed straight ahead to 2,500 ft, flaps 15, gear up...',
  'Stabilized Approach Criteria & Blame-Free Policy Agreement',
  'e.g., Enforced 1,000 ft IMC stabilized gate (path, speed -0/+10 kt, sink rate <= 1,000 fpm). Confirmed blame-free go-around policy: all flight crews empowered to abort approach whenever doubt exists...',
  s6GameRenderer,
  s6ClinicRenderer
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
console.log('✓ Successfully updated src/js/05-templates-mod1.js with full templates and games for Sessions 4, 5 & 6.');

console.log('🎉 Enhanced Sessions 4, 5 & 6 Curriculum Build Complete!');
