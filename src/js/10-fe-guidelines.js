    function renderFeGuidelinesTab(modNum, theme) {
      const bodyEl = document.getElementById('modal-body');
      const isAas = true;

      if (isAas && modNum === 1) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Executive Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${theme.primary};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                30-Minute Interactive Lesson • Teams of 3 to 4 Students
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fef3c7'}; border-color: ${theme.accent}30;">
                Graded out of 20 Points • Continuous Assessment (FE1)
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 1: Guidelines &amp; Learning Objectives
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              In this Formative Evaluation, student teams of <strong>3 to 4</strong> take the floor as technical instructors to deliver an engaging <strong>30-minute interactive lesson</strong> to their classmates based on one of the core EASA aerodrome operations domains studied in Module 1. Your team is assessed on <strong>lesson preparation, creative communicative activity ideas, clear instruction delivery, and classroom peer engagement</strong>.
            </p>
          </div>

          <!-- 5 Core Communicative Objectives (B2 Level) -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  5 Core Communicative Objectives (B2 Standard)
                </h4>
              </div>
              <span class="text-[11px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Spoken Fluency Focus</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div class="flex items-start gap-2.5 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shrink-0 shadow-2xs" style="background-color: ${theme.primary};">01</span>
                <div>
                  <h5 class="font-bold text-slate-800">Structure &amp; Lead a 30-Minute Interactive Lesson</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">Coordinate as a team of 3 to 4 to lead a well-paced lesson without reading aloud from slides or notes.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shrink-0 shadow-2xs" style="background-color: ${theme.primary};">02</span>
                <div>
                  <h5 class="font-bold text-slate-800">Deliver Clear Spoken Instructions in Plain English</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">Sequence activity steps logically and use checking questions (ICQs) before starting group work.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shrink-0 shadow-2xs" style="background-color: ${theme.primary};">03</span>
                <div>
                  <h5 class="font-bold text-slate-800">Facilitate Peer Interaction &amp; Monitor Groups</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">Circulate among classmate pairs, coach speaking, clarify doubts, and keep conversations 100% in English.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shrink-0 shadow-2xs" style="background-color: ${theme.primary};">04</span>
                <div>
                  <h5 class="font-bold text-slate-800">Activate Technical Aviation Vocabulary in Context</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">Naturally deploy 6 to 8 specialized aerodrome terms from Sessions 1–6 in explanations and prompts.</p>
                </div>
              </div>

              <div class="flex items-start gap-2.5 p-3 bg-white border border-slate-200 rounded-xl shadow-2xs sm:col-span-2">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shrink-0 shadow-2xs bg-emerald-700">05</span>
                <div>
                  <h5 class="font-bold text-slate-800">Facilitate Constructive Peer Debrief &amp; Reflection</h5>
                  <p class="text-[11px] text-slate-600 mt-0.5 leading-relaxed">Elicit solutions from tables, moderate a constructive plenary debate, and provide positive feedback to peers.</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Selection of Language-Focused Activity Ideas (Ideas to Help Students Put Together Their Lesson) -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Selection of Activity Ideas for Your Lesson (Language-Focused)
                </h4>
              </div>
              <span class="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Choose or Adapt 1 Archetype</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <!-- Idea 1: Information-Gap Game -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-2.5 hover:border-blue-300 transition-all">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider bg-blue-700">Idea 1 • Game</span>
                  <span class="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Information-Gap</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">&ldquo;Find the Safety Bug&rdquo; Aerodrome Game</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Partner A has an aerodrome layout diagram; Partner B has a ground inspection report with 4 discrepancies hidden. Without showing their papers, partners must ask each other questions to identify the 4 hazards within 8 minutes.
                </p>
                <div class="p-2.5 rounded-lg bg-blue-50/60 border border-blue-100 text-[11px] text-blue-950 space-y-1">
                  <div class="font-bold text-blue-900">Target Language to Elicit:</div>
                  <div class="italic text-[10.5px]">&ldquo;Does your diagram show a stop-bar light at holding point Bravo?&rdquo; • &ldquo;On my sheet, the blast fence is situated adjacent to stand 14.&rdquo;</div>
                </div>
              </div>

              <!-- Idea 2: Negotiation Role-Play -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-2.5 hover:border-amber-300 transition-all">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider bg-amber-600">Idea 2 • Role-Play</span>
                  <span class="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Speaking Debate</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">&ldquo;The Airside Safety Dispute&rdquo; Role-Play</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Trios take roles: (1) EASA Aerodrome Auditor demanding an immediate shutdown, (2) Airport Operations Manager proposing a temporary mitigation, and (3) Airline Operations Duty Officer defending flight schedules. They must reach a negotiated agreement.
                </p>
                <div class="p-2.5 rounded-lg bg-amber-50/60 border border-amber-100 text-[11px] text-amber-950 space-y-1">
                  <div class="font-bold text-amber-900">Target Language to Elicit:</div>
                  <div class="italic text-[10.5px]">&ldquo;We strongly recommend...&rdquo; • &ldquo;From an operational perspective, would you agree to...?&rdquo; • &ldquo;Under Part-ADR, our legal obligation is...&rdquo;</div>
                </div>
              </div>

              <!-- Idea 3: Cold Case Document Analysis -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-2.5 hover:border-indigo-300 transition-all">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider bg-indigo-700">Idea 3 • Document Task</span>
                  <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Analysis &amp; Pitch</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">&ldquo;The 90-Second Verdict&rdquo; Evidence Pitch</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Distribute a short 1-page extract from an official EASA SIB or BEA incident dossier. In pairs, students analyze 3 highlighted pieces of evidence and have 90 seconds to present their spoken verdict on the primary root cause to the class.
                </p>
                <div class="p-2.5 rounded-lg bg-indigo-50/60 border border-indigo-100 text-[11px] text-indigo-950 space-y-1">
                  <div class="font-bold text-indigo-900">Target Language to Elicit:</div>
                  <div class="italic text-[10.5px]">&ldquo;The ground crew must have overlooked...&rdquo; • &ldquo;This could not have happened if...&rdquo; • &ldquo;The evidence clearly points to...&rdquo;</div>
                </div>
              </div>

              <!-- Idea 4: Interactive Decision Quiz -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs space-y-2.5 hover:border-emerald-300 transition-all">
                <div class="flex items-center justify-between">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold uppercase tracking-wider bg-emerald-700">Idea 4 • Decision Quiz</span>
                  <span class="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Team Interaction</span>
                </div>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">&ldquo;Immediate Hazard or Minor Defect?&rdquo; Live Quiz</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">
                  Project 4 visual airside scenarios (fuel dyke crack, vehicle speeding on ramp, missing paint markings, FOD near runway). Tables have 60 seconds to consult, vote on the finding level, and defend their classification against other tables.
                </p>
                <div class="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-950 space-y-1">
                  <div class="font-bold text-emerald-900">Target Language to Elicit:</div>
                  <div class="italic text-[10.5px]">&ldquo;We classify this as a Level 1 finding because...&rdquo; • &ldquo;Our rationale is that it directly lowers safety.&rdquo;</div>
                </div>
              </div>
            </div>
          </div>

          <!-- 30-Minute Roadmap (4 Pedagogical Stages - Zero Timestamps) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                Structured 30-Minute Lesson Architecture (4 Stages)
              </h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <!-- Stage 1 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 1</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">Opening</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Welcome &amp; Context Hook</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Introduce your team and the aerodrome safety challenge. Hook classmates' interest with a short real scenario, photo, or prompt question.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Active audience engagement</div>
              </div>

              <!-- Stage 2 -->
              <div class="border border-amber-200 rounded-xl p-3 bg-amber-50/40 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-amber-200">
                    <span class="text-[10px] font-black uppercase text-amber-700">Stage 2</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.accent};">Core Task</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Instructions &amp; Spoken Task</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Give clear spoken instructions in plain B2 English. Set up a communicative pair or group activity (role-play, decision quiz, or gap game).</p>
                </div>
                <div class="mt-2 pt-2 border-t border-amber-200/60 text-[10px] text-amber-800 font-semibold">Peer speaking in pairs/groups</div>
              </div>

              <!-- Stage 3 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 3</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">Monitoring</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Team Circulating &amp; Support</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Presenters circulate between tables to assist peer groups, answer questions, prompt quieter students, and observe interaction.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Supportive teacher presence</div>
              </div>

              <!-- Stage 4 -->
              <div class="border border-emerald-200 rounded-xl p-3 bg-emerald-50/40 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-emerald-200">
                    <span class="text-[10px] font-black uppercase text-emerald-700">Stage 4</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold bg-emerald-700">Debrief</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Plenary Review &amp; Feedback</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Elicit solutions from classmate groups, compare safety conclusions, summarize key technical vocabulary learned, and invite peer feedback.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-emerald-200/60 text-[10px] text-emerald-800 font-semibold">Constructive peer debrief</div>
              </div>
            </div>
          </div>

          <!-- Team Roles & Responsibilities -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Team Teaching Roles (Pods of 3 to 4 Students)
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Equal Spoken Contribution Required</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div class="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                <span class="px-2 py-0.5 rounded text-white text-[10px] font-bold" style="background-color: ${theme.primary};">ROLE 1</span>
                <h5 class="text-xs font-bold text-slate-800 mt-1.5">Lead Facilitator</h5>
                <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Introduces the topic, presents the real-world scenario hook, outlines the 30-minute schedule, and maintains high classroom energy.</p>
              </div>

              <div class="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                <span class="px-2 py-0.5 rounded text-white text-[10px] font-bold" style="background-color: ${theme.primary};">ROLE 2</span>
                <h5 class="text-xs font-bold text-slate-800 mt-1.5">Activity Instructor</h5>
                <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Delivers step-by-step activity instructions, checks understanding with ICQs, distributes task materials, and explains the deliverable.</p>
              </div>

              <div class="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                <span class="px-2 py-0.5 rounded text-white text-[10px] font-bold" style="background-color: ${theme.primary};">ROLE 3</span>
                <h5 class="text-xs font-bold text-slate-800 mt-1.5">Table Coach &amp; Roving Support</h5>
                <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Circulates among classmate pairs during group work, clarifies questions, prompts quieter students to speak, and supports technical vocabulary.</p>
              </div>

              <div class="border border-slate-200 rounded-xl p-3.5 bg-white shadow-xs">
                <span class="px-2 py-0.5 rounded text-white text-[10px] font-bold" style="background-color: ${theme.primary};">ROLE 4</span>
                <h5 class="text-xs font-bold text-slate-800 mt-1.5">Debrief Anchor &amp; Timekeeper</h5>
                <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Nominates peer speakers to share findings, moderates class discussion, manages transition pacing, and summarizes key safety takeaways.</p>
              </div>
            </div>
          </div>

          <!-- Instruction Checking Questions (ICQs) & Classroom Phrases -->
          <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/80 space-y-3 shadow-2xs">
            <div class="flex items-center gap-2">
              <span class="text-base">🗣️</span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                Instruction Checking Questions (ICQs) &amp; Useful Teacher Phrases
              </h4>
            </div>
            <p class="text-xs text-slate-600 leading-relaxed">
              Before letting classmates start an activity, good instructors check that everyone understands the task by asking quick, direct questions:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <div class="font-bold text-slate-900">Task Setup ICQs:</div>
                <div class="text-slate-600 text-[11px] mt-1 space-y-0.5">
                  <div>&bull; &ldquo;Are you working individually or in pairs?&rdquo;</div>
                  <div>&bull; &ldquo;Do you show your paper to your partner or keep it hidden?&rdquo;</div>
                  <div>&bull; &ldquo;What should you write down on your note sheet?&rdquo;</div>
                </div>
              </div>
              <div class="p-2.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                <div class="font-bold text-slate-900">Monitoring &amp; Debrief Phrases:</div>
                <div class="text-slate-600 text-[11px] mt-1 space-y-0.5">
                  <div>&bull; &ldquo;How is Table 3 progressing? Do you need any hints?&rdquo;</div>
                  <div>&bull; &ldquo;Let's bring everyone back together for 2 minutes.&rdquo;</div>
                  <div>&bull; &ldquo;Table 1, could you explain the rationale behind your decision?&rdquo;</div>
                </div>
              </div>
            </div>
          </div>

          <!-- Selection of 6 Aerodrome Teaching Domains -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  6 Aerodrome Teaching Domains (Module 1 Scope)
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Choose 1 Domain Per Team</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs">
              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Domain 1 (S1)</span>
                <h5 class="font-bold text-slate-800 mt-1">OLS &amp; Airport Crane Safety</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">Obstacle Limitation Surfaces, crane safety permits, mandatory (shall/must) vs advisory (should/may) rules.</p>
              </div>

              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Domain 2 (S2)</span>
                <h5 class="font-bold text-slate-800 mt-1">Ramp Safety &amp; Speed Management</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">EASA SIB No. 2024-09, ground vehicle speed limits, FOD prevention, non-punitive occurrence reporting.</p>
              </div>

              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Domain 3 (S3)</span>
                <h5 class="font-bold text-slate-800 mt-1">Runway Exemptions &amp; Works</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">Basic Regulation Article 71, displaced thresholds, declared distances, proving an Equivalent Level of Safety (ELOS).</p>
              </div>

              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Domain 4 (S4)</span>
                <h5 class="font-bold text-slate-800 mt-1">Airfield Audits &amp; Non-Compliance</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">Part-ADR.AR.C.055 findings, Level 1 immediate hazards vs Level 2, past modal deductions (must/could have).</p>
              </div>

              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Domain 5 (S5)</span>
                <h5 class="font-bold text-slate-800 mt-1">Multi-Source Incident Analysis</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">Swiss Cheese model, cross-referencing ATC radio transcripts, METAR storm decodes, aircraft defect logs.</p>
              </div>

              <div class="p-3 bg-white rounded-xl border border-slate-200 shadow-2xs">
                <span class="text-[10px] font-black uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">Domain 6 (S6)</span>
                <h5 class="font-bold text-slate-800 mt-1">Corrective Action Plans (CAP)</h5>
                <p class="text-slate-600 text-[11px] mt-0.5 leading-relaxed">Part-ADR.OR.D.005 CAP drafting, negotiating remediation deadlines, formal commitment formulas (undertake to).</p>
              </div>
            </div>
          </div>

          <!-- Presenter Checklist & Golden Rules -->
          <div class="p-4 rounded-xl border space-y-2.5" style="background-color: ${theme.highlight || '#fef3c7'}; border-color: ${theme.accent}40;">
            <div class="flex items-center gap-1.5 font-bold text-xs" style="color: ${theme.accent};">
              <span>💡</span>
              <span class="uppercase tracking-wide">Flipped Classroom Golden Rules (FE1)</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>1. No Reading Aloud:</strong> Speak directly and naturally to classmates. Reading from slides or notes is strictly penalized.
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>2. Get Classmates Talking:</strong> At least half of your 30 minutes must involve classmates actively speaking in pairs or small groups.
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>3. Circulate &amp; Coach:</strong> Do not stand frozen at the front; walk around tables and support classmates during tasks.
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 2) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Executive Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${theme.primary};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                30-Minute Oral Tutorial Slot • In Pairs
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fef3c7'}; border-color: ${theme.accent}30;">
                Graded out of 20 Points • Continuous Assessment
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 2: Aircraft / Airlines Presentation
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              The Formative Evaluation takes place in <strong>pairs</strong> during a scheduled <strong>30-minute tutorial slot</strong>. You and your partner will present a comprehensive technical profile of <strong>an aircraft or an airline of your choice</strong>, participate in spontaneous teacher Q&amp;A, demonstrate active mastery of Module 2 vocabulary, present your personal learning log, and conduct an autonomous self-critique of your personal strong and weak points.
            </p>
          </div>

          <!-- 30-Minute Roadmap (5 Stages) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                The 30-Minute Oral Tutorial Roadmap
              </h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <!-- Stage 1 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 1</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">0–2 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Welcome &amp; Setup</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Connect laptop or visual aids (slides, technical drawings). Teacher confirms topic choice and partner roles.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Get settled &amp; relaxed</div>
              </div>

              <!-- Stage 2 -->
              <div class="border border-amber-200 rounded-xl p-3 bg-amber-50/40 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-amber-200">
                    <span class="text-[10px] font-black uppercase text-amber-700">Stage 2</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.accent};">2–14 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Aircraft / Airline Presentation</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Deliver your collaborative briefing with visual supports. Equal 50/50 talking time (~6 mins each). <em>No reading!</em></p>
                </div>
                <div class="mt-2 pt-2 border-t border-amber-200/60 text-[10px] text-amber-800 font-semibold">Equal 50/50 speaking time</div>
              </div>

              <!-- Stage 3 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 3</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">14–20 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Teacher Q&amp;A</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Spontaneous questions testing technical comprehension, fleet strategy, aerodynamic features, and safety record.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Spontaneous dialogue</div>
              </div>

              <!-- Stage 4 -->
              <div class="border border-emerald-200 rounded-xl p-3 bg-emerald-50/40 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-emerald-200">
                    <span class="text-[10px] font-black uppercase text-emerald-700">Stage 4</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold bg-emerald-700">20–26 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Portfolio Check</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Present personal vocabulary log with recorded Module 2 vocabulary. Conduct self-critique of strengths and weaknesses.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-emerald-200/60 text-[10px] text-emerald-800 font-semibold">Self-evaluation ready</div>
              </div>

              <!-- Stage 5 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 5</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">26–30 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Feedback &amp; Targets</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Receive examiner feedback on technical fluency, pronunciation, grammar control, and future targets.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Mark out of 20 awarded</div>
              </div>
            </div>
          </div>

          <!-- Module 2 Task Dimensions -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Module 2 Activity: Aircraft or Airline Comprehensive Profile
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Pair Presentation Task</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
              <h5 class="text-xs sm:text-sm font-bold text-slate-900">Task Overview</h5>
              <p class="text-xs text-slate-600 leading-relaxed">
                In pairs, select <strong>any commercial/civil aircraft</strong> (e.g. <em>Airbus A350, Concorde, Boeing 747, ATR 72, Embraer E195-E2</em>) OR <strong>any airline of your choice</strong> (e.g. <em>Air France, Emirates, Ryanair, Singapore Airlines, Delta, Lufthansa</em>). Over a 10-to-12 minute collaborative briefing, cover technical details, operational key figures, historical moments, and safety records while demonstrating mastery of Module 2 specialized vocabulary.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <!-- Dimension 1: Technical Details -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 1</span>
                  <span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Technical Info</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Technical Information &amp; Specifications</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>If Aircraft:</strong> Aerodynamic design, wingspan, MTOW, engine variants, avionics, seating configuration, and range.</li>
                  <li><strong>If Airline:</strong> Fleet composition, aircraft models operated, engine selections, average fleet age, cabin interior standards.</li>
                </ul>
              </div>

              <!-- Dimension 2: Key Figures & Metrics -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 2</span>
                  <span class="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Key Figures</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Key Figures &amp; Operational Metrics</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>If Aircraft:</strong> Production figures, orders/backlog, fuel burn per seat, launch customers, cruise speed and ceiling.</li>
                  <li><strong>If Airline:</strong> Annual passengers carried, load factors, revenue, hub airport operations, route network breadth.</li>
                </ul>
              </div>

              <!-- Dimension 3: Historical Moments -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 3</span>
                  <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">History</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Historical Moments &amp; Milestones</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>If Aircraft:</strong> First maiden flight, certification challenges, entry into commercial service, iconic speed or endurance records.</li>
                  <li><strong>If Airline:</strong> Founding history, pioneer transatlantic or postal routes, deregulation growth, airline alliance membership.</li>
                </ul>
              </div>

              <!-- Dimension 4: Safety Record & Occurrences -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 4</span>
                  <span class="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Safety Analysis</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Safety Record, Incidents &amp; Upgrades</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>If Aircraft:</strong> Overall hull loss record, notable emergency landings handled safely, airworthiness directives, design fixes.</li>
                  <li><strong>If Airline:</strong> Safety culture evolution, notable incidents handled successfully, modern SMS protocols and crew training.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Vocabulary Activation Box -->
          <div class="border border-amber-200 rounded-xl p-4 bg-amber-50/50 space-y-2.5">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Mandatory Vocabulary Activation (Module 2 Sessions 1 to 4)
              </h5>
            </div>
            <p class="text-xs text-slate-700 leading-relaxed">
              To earn top marks on Criterion 4, deploy at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–4 into your speech:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 1 (Aerodynamics):</strong>
                <em>Lift, thrust, angle of attack, boundary layer, stall, lateral axis, pitch, aileron, rudder.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 2 (Aircraft Anatomy):</strong>
                <em>Fuselage, empennage, slats, flaps, spoilers, radome, pitot tube, static port, walkaround.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 3 (Commercial Fleets):</strong>
                <em>Narrowbody, widebody, turboprop, MTOW, range, payload, duopoly, hub-and-spoke.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 4 (Accidents &amp; Safety):</strong>
                <em>Flight Data Recorder (FDR), CVR, root cause, human factors, CFIT, airworthiness directive.</em>
              </div>
            </div>
          </div>

          <!-- Visual Supports Guidance -->
          <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Visual Supports Guidelines</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-lg text-slate-700">
                <strong class="text-emerald-800 block mb-1">&check; DO:</strong>
                Use 4–6 clean slides, technical cutaway drawings, route maps, and key specification cards with short bullet cue points. Maintain eye contact!
              </div>
              <div class="p-2.5 bg-rose-50/50 border border-rose-200 rounded-lg text-slate-700">
                <strong class="text-rose-800 block mb-1">&cross; DO NOT:</strong>
                Never put full paragraphs on slides, and never read aloud from notes or screens. Reading directly is heavily penalized.
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 3) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Executive Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-teal-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black tracking-wide text-white" style="background-color: ${theme.primary};">
                <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                30-Minute Oral Tutorial Slot • In Pairs / Trios
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#ccfbf1'}; border-color: ${theme.accent}30;">
                Graded out of 20 Points • Continuous Assessment (FE3)
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 3 (FE3) — Aviation Current Events &amp; Press Briefing
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              The Formative Evaluation takes place in <strong>pairs or trios</strong> during a dedicated <strong>30-minute tutorial slot</strong> on <strong>Wednesday 24 February 2027 (Week 08)</strong> with <strong>Tracy NEILL (Group A)</strong> or <strong>Ally HEWETT (Group B)</strong>. You and your partner will roleplay as <strong>Aviation Authority / Airline Spokespersons</strong> delivering a formal 10-12 minute <strong>Press Briefing</strong> on a major recent aviation current event (severe weather disruption, in-flight medical emergency diversion, airport security breach / biometric rollout, or safety maintenance airworthiness directive), followed by spontaneous press conference Q&A, personal vocabulary portfolio audit, and detailed teacher feedback.
            </p>
          </div>

          <!-- 30-Minute Roadmap (5 Stages) -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                The 30-Minute Oral Tutorial Roadmap
              </h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <!-- Stage 1 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 1</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">0–2 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Welcome &amp; Setup</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Connect laptop/tablet to display, confirm visual slides. Teacher confirms current event selection and spokesperson roles.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Setup &amp; role allocation</div>
              </div>

              <!-- Stage 2 -->
              <div class="border border-teal-200 rounded-xl p-3 bg-teal-50/30 flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-teal-100">
                    <span class="text-[10px] font-black uppercase text-teal-700">Stage 2</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.accent};">2–14 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-teal-950 mt-2">Spoken Press Briefing</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Deliver 10–12 minute structured press briefing analyzing the current event: facts, causal analysis, operational impact, and mitigation measures (5–6 min each).</p>
                </div>
                <div class="mt-2 pt-2 border-t border-teal-100 text-[10px] text-teal-800 font-bold">Main Oral Delivery (50%)</div>
              </div>

              <!-- Stage 3 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 3</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">14–22 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Press Q&amp;A Defense</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Spontaneous questions by the teacher acting as investigative journalists. Defend decisions and technical nuances calmly.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Spontaneous interaction</div>
              </div>

              <!-- Stage 4 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 4</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">22–26 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Aeronautical Portfolio Audit</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Review personal Technical Vocabulary Log and course self-study progress.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Continuous learning check</div>
              </div>

              <!-- Stage 5 -->
              <div class="border border-slate-200 rounded-xl p-3 bg-white flex flex-col justify-between shadow-2xs">
                <div>
                  <div class="flex items-center justify-between pb-1.5 border-b border-slate-100">
                    <span class="text-[10px] font-black uppercase text-slate-400">Stage 5</span>
                    <span class="px-2 py-0.5 rounded text-white font-mono text-[10px] font-bold" style="background-color: ${theme.primary};">26–30 min</span>
                  </div>
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Detailed Feedback</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Immediate teacher feedback on pronunciation, technical vocabulary, fluency, and provisional grade out of 20.</p>
                </div>
                <div class="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400 font-semibold">Score &amp; Semester Wrap-Up</div>
              </div>
            </div>
          </div>

          <!-- Current Event Domain Options -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  FE3 Case Study Domain Options
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Select 1 Current Event Domain</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DOMAIN 1</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">Severe Weather &amp; Climate Disruptions</h5>
                <p class="text-[11px] text-slate-600 mt-1.5 leading-relaxed">Analysis of a recent major severe weather event: extreme clear-air turbulence encounter causing cabin injuries, severe winter freezing fog grounding hub operations, or volcanic ash airspace closures.</p>
              </div>

              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DOMAIN 2</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">In-Flight Medical Emergencies &amp; Human Factors</h5>
                <p class="text-[11px] text-slate-600 mt-1.5 leading-relaxed">Analysis of an in-flight medical diversion (cardiac arrest, hypoxia incident, severe cabin decompression, or acute mental health crisis) and crew CRM / ground telemedicine response.</p>
              </div>

              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DOMAIN 3</span>
                <h5 class="text-xs sm:text-sm font-bold text-slate-800 mt-2">Airport Security Breaches &amp; Airworthiness Directives</h5>
                <p class="text-[11px] text-slate-600 mt-1.5 leading-relaxed">Analysis of a perimeter breach / contraband detection incident, biometric screening controversy, emergency fleet grounding by EASA/FAA, or urgent maintenance safety directive.</p>
              </div>
            </div>
          </div>

          <!-- 4 Core Press Briefing Dimensions -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  The 4 Mandatory Press Briefing Dimensions
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Required for All Domains</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 1</span>
                  <span class="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Situation Overview</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Initial Incident Facts &amp; Context</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Core Facts:</strong> Airline, flight number, route, aircraft type, altitude, and timestamp.</li>
                  <li><strong>Situation Statement:</strong> Clear, measured public announcement without sensationalism or premature blame.</li>
                  <li><strong>Initial Impact:</strong> Passenger status, diversion location, and aerodrome operational status.</li>
                </ul>
              </div>

              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 2</span>
                  <span class="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Causal Analysis</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Technical &amp; Human Factors Root Causes</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Technical / Environmental:</strong> Microburst physics, icing accumulation, component failure, or breach point.</li>
                  <li><strong>Human Factors:</strong> Pilot/controller workload, fatigue, sensory illusions, or communication clarity.</li>
                  <li><strong>Jurisdiction:</strong> Explicit distinction between Safety (Annex 19) and Security (Annex 17) implications.</li>
                </ul>
              </div>

              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 3</span>
                  <span class="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Immediate Response</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Operational &amp; Crisis Management Execution</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Flight Crew Actions:</strong> Immediate memory items, emergency checklist discipline, and PAN-PAN/MAYDAY calls.</li>
                  <li><strong>Ground Agency Coordination:</strong> ATC priority, ARFF emergency services, and MedLink / hospital triage.</li>
                  <li><strong>Passenger Care:</strong> Repatriation, medical care, and transparent passenger communications.</li>
                </ul>
              </div>

              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 4</span>
                  <span class="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded border border-teal-200">Corrective Measures</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Long-term Corrective Actions &amp; Regulation</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Safety Investigation:</strong> Cooperation with BEA, NTSB, or EASA technical investigation boards.</li>
                  <li><strong>Fleet &amp; Procedure Fixes:</strong> Urgent airworthiness directives, mandatory maintenance checks, and simulator drills.</li>
                  <li><strong>Just Culture Commitment:</strong> Reaffirmation of non-punitive voluntary reporting and safety culture resilience.</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Presentation Rules & Media Poise -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                Presentation Rules &amp; Media Poise
              </h4>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl text-slate-700">
                <strong class="text-emerald-800 block mb-1">&check; DO:</strong>
                Use 4–6 professional slides with bullet cue points, incident maps, technical diagrams, and key data cards. Maintain direct eye contact with the press gallery!
              </div>
              <div class="p-3 bg-rose-50/50 border border-rose-200 rounded-xl text-slate-700">
                <strong class="text-rose-800 block mb-1">&cross; DO NOT:</strong>
                Never put full paragraphs on slides, and never read aloud from notes or phone screens. Reading directly destroys fluency and is heavily penalized.
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }
    }

    function renderFeObjectivesTab(modNum, theme) {
      const bodyEl = document.getElementById('modal-body');
      const isAas = true;

      if (isAas && modNum === 1) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Target Competencies • B2 CEFR Level</span>
            <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-1">Formative Evaluation 1 Objectives — Flipped Peer-Teaching</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Demonstrate collaborative spoken leadership, instructional clarity in plain B2 English, active classroom facilitation, natural deployment of Module 1 aerodrome safety vocabulary, and constructive peer debrief skills.
            </p>
          </div>

          <!-- 5 Core Objectives -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                5 Core Learning Objectives (B2 Standards)
              </h4>
            </div>

            <div class="space-y-2.5">
              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">01</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Structure and Lead an Interactive 30-Minute Aerodrome Lesson</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Coordinate as a team of 3 to 4 to lead an engaging, well-paced lesson based on a core EASA aerodrome operations domain without reading aloud from written notes or slides.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">02</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Deliver Clear, Actionable Spoken Instructions in Plain B2 English</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Sequence task instructions step by step. Use Instruction Checking Questions (ICQs) to verify task comprehension before classmates begin pair or group work.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">03</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Facilitate Small-Group Spoken Interaction &amp; Monitor Classmates</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Circulate among student pairs during activities, clarify questions, prompt quieter students to speak, provide helpful hints, and keep conversation 100% in English.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">04</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Activate Module 1 Technical Aerodrome Phraseology in Context</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Naturally deploy at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–6 into lesson explanations, prompt questions, and group feedback summaries.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">05</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Conduct a Collaborative Plenary Debrief &amp; Peer Evaluation</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Nominate group spokespersons to share answers, moderate a concluding whole-class debrief, conduct honest team self-evaluation, and offer constructive peer feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 2) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Target Competencies • B2 CEFR Level</span>
            <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-1">Formative Evaluation 2 Objectives (Aircraft / Airlines)</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Demonstrate collaborative spoken production, spontaneous dialogue in teacher Q&amp;A, activation of specialized aerodynamics and fleet vocabulary from Sessions 1–4, grammatical precision with comparatives and narrative tenses, and autonomous portfolio habits.
            </p>
          </div>

          <!-- 5 Core Objectives -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                5 Core Learning Objectives (B2 Standards)
              </h4>
            </div>

            <div class="space-y-2.5">
              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">01</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Deliver a Structured Aircraft / Airline Profile Presentation</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present your chosen aircraft or airline specifications, fleet metrics, and milestones over 10–12 minutes without reading written notes. Effectively utilize diagrams and route maps, link points with logical linking words, and share talking time equally (50/50).
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">02</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Engage in Spontaneous Technical Dialogue (Teacher Q&amp;A)</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Answer teacher follow-up questions spontaneously. Justify choices regarding aerodynamic configurations, engine choices, commercial route economics, and safety modifications without switching languages.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">03</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Activate Module 2 Aerospace Vocabulary (Sessions 1 to 4)</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Naturally integrate at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–4 (e.g. <em>lift-to-drag ratio, angle of attack, leading-edge slats, MTOW, narrowbody, duopoly, CVR/FDR, root cause, airworthiness directive</em>).
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">04</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Demonstrate Grammatical Precision &amp; Comparative Structures</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Accurately deploy comparative and superlative data modifiers (<em>significantly more fuel-efficient, lowest seat-mile cost</em>), past narrative tenses for accident histories, and cause-and-effect connectors.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">05</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Exhibit Autonomous Portfolio Habits &amp; Self-Critique</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present an updated personal vocabulary log with recorded Module 2 vocabulary. Arrive prepared to discuss personal strong points and weak points constructively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 3) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-teal-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Target Competencies • B2/C1 CEFR Level</span>
            <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-1">Formative Evaluation 3 Objectives (Aviation Current Events)</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Demonstrate collaborative spoken media briefing delivery, spontaneous defense during investigative teacher Q&A, active deployment of specialized aviation safety, security, meteorology, and human factors vocabulary from Sessions 1–4, and autonomous portfolio habits.
            </p>
          </div>

          <!-- 5 Core Objectives -->
          <div class="space-y-3">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                5 Core Learning Objectives
              </h4>
            </div>

            <div class="space-y-2.5">
              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">01</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Deliver a Structured Press Briefing</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present a professional 10–12 minute media situation briefing analyzing a major aviation current event across its 4 phases (Facts, Causal Analysis, Operational Measures, Regulatory Follow-up). Share talking time equally (~5–6 mins each) without reading written paragraphs.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">02</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Engage in Spontaneous Press Conference Defense (Teacher Q&amp;A)</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Answer spontaneous questions from the teacher acting as investigative journalists. Justify airline and authority decisions, defend technical trade-offs, and handle uncertainty with professional poise.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">03</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Activate Specialized Platform Vocabulary</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Naturally integrate at least <strong>6 to 8 specialized technical terms</strong> from Module 3 (e.g. <em>PAN-PAN MEDICO, microburst, windshear, clear air turbulence, ICAO Annex 17 vs. 19, walkaround safety checks, Minimum Equipment List</em>) with accurate syllable stress.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">04</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Demonstrate Grammatical Precision &amp; Syntactic Range</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Accurately deploy narrative sequencers, passive voice in incident reports, modal verbs of deduction, conditional cause-and-effect clauses, and formal diplomatic cautious phrasing.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">05</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Exhibit Autonomous Portfolio Habits &amp; Constructive Self-Critique</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present an updated personal vocabulary log with recorded Module 3 vocabulary. Arrive prepared to discuss personal strengths and two concrete action targets for Semester 2.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
        return;
      }
    }

    function renderFeCriteriaTab(modNum, theme) {
      const bodyEl = document.getElementById('modal-body');
      const isAas = true;

      if (isAas && modNum === 1) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official Rubric • Technical English (AT • LV125E)</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md text-white font-mono shadow-xs" style="background-color: ${theme.primary};">
                Total: 20 Points • 4 Criteria (5 Pts Each)
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 1 Marking Criteria — Flipped Peer-Teaching
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Assessment is criteria-referenced across 4 core instructional and communicative competencies. Student teams are evaluated on <strong>preparation, original communicative ideas, spoken instruction delivery, and classroom peer engagement</strong>. Total score out of 20 contributes directly to your official semester grade.
            </p>
          </div>

          <!-- Rubric Table -->
          <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th class="p-3 font-bold w-1/3">Assessment Criterion</th>
                  <th class="p-3 font-bold w-16 text-center">Pts</th>
                  <th class="p-3 font-bold">Teacher &amp; Peer Expectations (B2 CEFR • Spoken Technical English)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">
                    <div>1. Lesson Preparation &amp; Structure</div>
                    <span class="text-[10px] font-normal text-slate-500">Design, objectives, timing balance &amp; team coordination</span>
                  </td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">5</td>
                  <td class="p-3 text-slate-600 leading-relaxed">
                    Well-organized 30-minute lesson structure with clear learning objectives; engaging context hook; smooth sequence of steps; balanced, equal contribution across all 3 to 4 team members. <strong>Zero reading from written notes or scripts!</strong>
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">
                    <div>2. Communicative Activity &amp; Ideas</div>
                    <span class="text-[10px] font-normal text-slate-500">Originality, peer interaction &amp; practical task design</span>
                  </td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">5</td>
                  <td class="p-3 text-slate-600 leading-relaxed">
                    Creative, engaging communicative task (role-play, incident debate, audit inspection, or CAP negotiation) that gets classmates actively speaking in pairs/groups; avoids passive lecturing; keeps students invested throughout.
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">
                    <div>3. Instruction Delivery &amp; Facilitation</div>
                    <span class="text-[10px] font-normal text-slate-500">Clarity, voice projection, ICQs &amp; group monitoring</span>
                  </td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">5</td>
                  <td class="p-3 text-slate-600 leading-relaxed">
                    Spoken instructions delivered in clear, plain B2 English without confusion; effective checking of comprehension (ICQs) before starting; active circulating among tables to coach peers; confident moderation of the plenary debrief.
                  </td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">
                    <div>4. Technical English &amp; Pronunciation</div>
                    <span class="text-[10px] font-normal text-slate-500">Accuracy, vocabulary activation &amp; spoken fluency</span>
                  </td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">5</td>
                  <td class="p-3 text-slate-600 leading-relaxed">
                    Natural activation of at least 6 to 8 specialized Module 1 aerodrome terms (OLS, SIB, derogation, Level 1 non-compliance, Swiss Cheese, CAP); intelligible pronunciation and correct word stress; solid grammatical control with functional structures.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Performance Bands -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-800 block font-bold mb-1">Exemplary (18–20 pts)</strong>
              <p class="text-slate-600">Dynamic student leadership; highly engaging communicative activity; crystal-clear instructions; 100% peer speaking engagement; rich technical vocabulary; equal team contribution.</p>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-800 block font-bold mb-1">Solid B2 (14–17 pts)</strong>
              <p class="text-slate-600">Good lesson structure; classmates actively participate in pairwork; clear spoken instructions with minor slips; good aerodrome terminology; balanced teamwork.</p>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <strong class="text-amber-800 block font-bold mb-1">Developing (10–13 pts)</strong>
              <p class="text-slate-600">Overly lecture-heavy; limited pair speaking time; instructions unclear requiring teacher intervention; unequal team participation; occasional reliance on written scripts.</p>
            </div>
            <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
              <strong class="text-rose-800 block font-bold mb-1">Needs Imp. (&lt;10 pts)</strong>
              <p class="text-slate-600">Direct reading aloud from slides or notes; no interactive activity for classmates; severe communication breakdown; silent team members; lack of preparation.</p>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 2) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-amber-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official Rubric • Technical English (AT)</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md text-white font-mono shadow-xs" style="background-color: ${theme.primary};">
                Total: 20 Points • Continuous Assessment
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 2 Marking Criteria (Aircraft / Airlines Task)
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Assessment is criteria-referenced across 6 core technical communication and autonomous study competencies. Your total score out of 20 contributes directly to your official semester grade.
            </p>
          </div>

          <!-- Rubric Table -->
          <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th class="p-3 font-bold w-1/3">Criterion</th>
                  <th class="p-3 font-bold w-16 text-center">Pts</th>
                  <th class="p-3 font-bold">Examiner Expectations (B2 CEFR • Technical English)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">1. Fluency &amp; Coherence</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Speech flows naturally without long hesitations. Ideas linked smoothly with linking words. <strong>Strictly no reading from notes or slides!</strong></td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">2. Pronunciation &amp; Clarity</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">3</td>
                  <td class="p-3 text-slate-600">Intelligible pronunciation and correct syllable stress placed on aerospace terms (<em>aero-DY-na-mics, ma-nu-FAC-tu-rer, ef-FI-cien-cy, ca-PA-ci-ty, sta-bi-LI-zer</em>).</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">3. Grammar &amp; Sentence Structure</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Accurate comparative/superlative evaluations, past narrative tenses for incident chronologies, and cause/effect connectors.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">4. Vocabulary &amp; Topic Vocabulary</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Active, accurate deployment of at least <strong>6 to 8 specialized technical terms</strong> from Module 2 (aerodynamics, aircraft anatomy, commercial fleets, accident investigation).</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">5. Interaction &amp; Teamwork</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2.5</td>
                  <td class="p-3 text-slate-600">Equal 50/50 balance between partners (~6 mins each), smooth handovers, and spontaneous, thoughtful responses during teacher Q&amp;A.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">6. Portfolio &amp; Self-Critique</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2.5</td>
                  <td class="p-3 text-slate-600">Updated personal vocabulary log with Module 2 terms, and mature self-critique of strong and weak points.</td>
                </tr>
                <tr class="bg-slate-50 font-bold border-t-2 border-slate-300">
                  <td class="p-3 uppercase">Total Score</td>
                  <td class="p-3 text-center font-mono text-white rounded" style="background-color: ${theme.accent};">20</td>
                  <td class="p-3 text-slate-700">Contributes directly to your official Semester 1 Formative Evaluation grade.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Performance Bands -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-800 block font-bold mb-1">Exemplary (18–20 pts)</strong>
              <p class="text-slate-600">Fluent, spontaneous delivery; precise technical aerospace vocabulary; high grammatical accuracy; 50/50 teamwork; portfolio fully updated.</p>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-800 block font-bold mb-1">Solid B2 (14–17 pts)</strong>
              <p class="text-slate-600">Clear presentation; good course vocabulary; good grammar control with minor slips; balanced teamwork; portfolio maintained.</p>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <strong class="text-amber-800 block font-bold mb-1">Developing (10–13 pts)</strong>
              <p class="text-slate-600">Frequent pauses, limited vocabulary, recurring grammar slips, uneven partner balance, incomplete vocabulary portfolio.</p>
            </div>
            <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
              <strong class="text-rose-800 block font-bold mb-1">Needs Imp. (&lt;10 pts)</strong>
              <p class="text-slate-600">Reads presentation directly, severe communication barriers, one partner silent, missing vocabulary log.</p>
            </div>
          </div>
        </div>
        `;
        return;
      }

      if (isAas && modNum === 3) {
        bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Overview Card -->
          <div class="bg-gradient-to-r from-slate-50 to-teal-50/40 border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs">
            <div class="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official Rubric • Technical English (AT)</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md text-white font-mono shadow-xs" style="background-color: ${theme.primary};">
                Total: 20 Points • Continuous Assessment
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 3 Marking Criteria (Aviation Current Events Task)
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Assessment is criteria-referenced across 6 core technical communication and autonomous study competencies. Your total score out of 20 contributes directly to your official semester grade.
            </p>
          </div>

          <!-- Rubric Table -->
          <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
            <table class="w-full text-left border-collapse text-xs">
              <thead>
                <tr class="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th class="p-3 font-bold w-1/3">Criterion</th>
                  <th class="p-3 font-bold w-16 text-center">Pts</th>
                  <th class="p-3 font-bold">Examiner Expectations (B2/C1 CEFR • Technical English)</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-slate-100 bg-white">
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">1. Spoken Fluency &amp; Pronunciation</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Natural delivery flow without artificial reading pauses. Accurate syllable stress on technical terms (<em>cu-mu-lo-NIM-bus, de-FI-bri-lla-tor, clau-stro-PHO-bi-a, re-DUN-dan-cy</em>). <strong>Strictly no reading from notes or slides!</strong></td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">2. Technical &amp; Operational Vocabulary</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Active, accurate deployment of at least <strong>6 to 8 specialized technical terms</strong> from Module 3 (medical triage, severe meteorology, ICAO Annex 17 vs. 19, walkaround checks, MEL).</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">3. Press Briefing Structure &amp; Media Poise</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Logical progression through the 4 media briefing phases (Facts, Root Causes, Operational Response, Regulatory Follow-up). High visual clarity on slides and executive spokesperson composure.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">4. Spontaneous Q&amp;A Defense</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Agile, confident answers during teacher Q&A. Defends decisions factually, acknowledges investigative boundaries appropriately, and avoids speculation.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">5. Teamwork &amp; Pair Balance</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2</td>
                  <td class="p-3 text-slate-600">Equal 50/50 balance between partners (~5–6 mins each), smooth handovers, and active collaboration during the media Q&amp;A phase.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">6. Portfolio &amp; Self-Critique</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2</td>
                  <td class="p-3 text-slate-600">Updated personal vocabulary log with Module 3 terms, and mature self-critique identifying personal strong points and Semester 2 action targets.</td>
                </tr>
                <tr class="bg-slate-50 font-bold border-t-2 border-slate-300">
                  <td class="p-3 uppercase">Total Score</td>
                  <td class="p-3 text-center font-mono text-white rounded" style="background-color: ${theme.accent};">20</td>
                  <td class="p-3 text-slate-700">Contributes directly to your official Semester 1 Formative Evaluation grade.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Performance Bands -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 text-xs">
            <div class="p-3 bg-emerald-50 border border-emerald-200 rounded-xl">
              <strong class="text-emerald-800 block font-bold mb-1">Exemplary (18–20 pts)</strong>
              <p class="text-slate-600">Fluent, spontaneous media delivery; precise technical aerospace vocabulary; high grammatical accuracy; 50/50 teamwork; portfolio fully updated.</p>
            </div>
            <div class="p-3 bg-blue-50 border border-blue-200 rounded-xl">
              <strong class="text-blue-800 block font-bold mb-1">Solid B2 (14–17 pts)</strong>
              <p class="text-slate-600">Clear briefing; good course vocabulary; good grammar control with minor slips; balanced teamwork; portfolio maintained.</p>
            </div>
            <div class="p-3 bg-amber-50 border border-amber-200 rounded-xl">
              <strong class="text-amber-800 block font-bold mb-1">Developing (10–13 pts)</strong>
              <p class="text-slate-600">Frequent pauses, limited vocabulary, recurring grammar slips, uneven partner balance, incomplete vocabulary portfolio.</p>
            </div>
            <div class="p-3 bg-rose-50 border border-rose-200 rounded-xl">
              <strong class="text-rose-800 block font-bold mb-1">Needs Imp. (&lt;10 pts)</strong>
              <p class="text-slate-600">Reads presentation directly, severe communication barriers, one partner silent, missing vocabulary log.</p>
            </div>
          </div>
        </div>
        `;
        return;
      }
    }
