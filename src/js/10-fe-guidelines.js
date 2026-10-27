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
                30-Minute Oral Tutorial Slot • In Pairs
              </span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md border" style="color: ${theme.accent}; background-color: ${theme.highlight || '#fef3c7'}; border-color: ${theme.accent}30;">
                Graded out of 20 Points • Contributes to Semester FE
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              How the Formative Evaluation Works
            </h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              The Formative Evaluation takes place in <strong>pairs</strong> during a scheduled <strong>30-minute tutorial slot</strong>. You and your partner will present a comprehensive technical profile of an airport of your choice, participate in spontaneous teacher Q&amp;A, demonstrate active mastery of Module 1 technical vocabulary, present your personal vocabulary learning log, and conduct an autonomous self-critique of your personal strong and weak points.
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
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Connect laptop or visual aids (charts, slides). Teacher confirms airport choice and division of roles.</p>
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
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Airport Presentation</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Deliver technical airport analysis with visual aids. Equal 50/50 talking time (~6 mins each). <em>No reading!</em></p>
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
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Spontaneous questions testing technical comprehension, hot spot risk assessment, and incident cause justification.</p>
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
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Present personal vocabulary log with Module 1 vocabulary. Conduct self-critique of strengths and weaknesses.</p>
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

          <!-- Module 1 Task: Airports -->
          <div class="space-y-3">
            <div class="flex items-center justify-between">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-800 uppercase tracking-wide">
                  Module 1 Activity: Technical Airport Profile &amp; Operational Analysis
                </h4>
              </div>
              <span class="text-[11px] text-slate-400">Pair Presentation Task</span>
            </div>

            <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/70 space-y-1.5">
              <h5 class="text-xs sm:text-sm font-bold text-slate-900">Task Overview</h5>
              <p class="text-xs text-slate-600 leading-relaxed">
                In pairs, select any commercial or civil aerodrome of your choice worldwide (e.g. <em>Toulouse-Blagnac, London Heathrow, Chicago O'Hare, Madeira Funchal, St. Maarten Princess Juliana, Tokyo Haneda, Gibraltar, Courchevel</em>). Over a 10-to-12 minute collaborative presentation, deliver an operational briefing analyzing layout, traffic constraints, safety hot spots, and incident history, while demonstrating mastery of Module 1 specialized vocabulary.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <!-- Dimension 1: Technical Details -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 1</span>
                  <span class="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">Infrastructure</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Technical Details &amp; Physical Infrastructure</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Runways:</strong> Magnetic designators (azimuth headings), lengths, surface pavement, ALS/PAPI lighting.</li>
                  <li><strong>Movement Areas:</strong> Taxiway designators, holding points, CAT I/II/III illuminated stop bars.</li>
                  <li><strong>Apron &amp; Stands:</strong> Contact gates with passenger jet bridges, remote stands, GSE lanes.</li>
                  <li><strong>NAV Facilities:</strong> Control tower height and line-of-sight, surface movement radar (A-SMGCS), ILS antennas.</li>
                </ul>
              </div>

              <!-- Dimension 2: Traffic & Constraints -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 2</span>
                  <span class="text-[10px] font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">Traffic &amp; Ops</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Key Information, Traffic &amp; Constraints</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Classification:</strong> International hub, secondary regional field, cargo hub, civil/military.</li>
                  <li><strong>Traffic Volumes:</strong> Annual passenger throughput, cargo tonnage, peak-hour movements.</li>
                  <li><strong>Slot &amp; Capacity:</strong> Coordinated slot allocation, turnaround time (TAT), CTOT compliance.</li>
                  <li><strong>Environmental Procedures:</strong> Noise abatement departure procedures (NADP), night curfews.</li>
                </ul>
              </div>

              <!-- Dimension 3: Safety Hot Spots -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 3</span>
                  <span class="text-[10px] font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">Safety Hazards</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Aerodrome Hot Spots &amp; Operational Hazards</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Published Hot Spots:</strong> Complex taxiway intersections, converging crossings, tower blind spots.</li>
                  <li><strong>Apron Servicing:</strong> Congested vehicle corridors, GSE pushback conflicts, and FOD hazards.</li>
                  <li><strong>Adverse Weather:</strong> Crosswind limits, Low Visibility Procedures (LVP / RVR), de-icing pads.</li>
                  <li><strong>Wildlife &amp; Obstacles:</strong> Bird hazard management programs and obstacle limitation surfaces (OLS).</li>
                </ul>
              </div>

              <!-- Dimension 4: Incidents & Accidents -->
              <div class="border border-slate-200 rounded-xl p-4 bg-white shadow-xs">
                <div class="flex items-center justify-between mb-2">
                  <span class="px-2.5 py-0.5 rounded-full text-white text-[10px] font-bold tracking-wide" style="background-color: ${theme.primary};">DIMENSION 4</span>
                  <span class="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">Case Analysis</span>
                </div>
                <h5 class="text-sm font-bold text-slate-800">Notable Incidents, Accidents &amp; Safety Lessons</h5>
                <ul class="text-xs text-slate-600 space-y-1 mt-2 list-disc pl-4">
                  <li><strong>Case Study:</strong> Detail at least one historical surface occurrence (runway incursion, landing overrun, apron collision).</li>
                  <li><strong>Causal Chain:</strong> Analyze root causes (phraseology breakdown, human factors, loss of situational awareness).</li>
                  <li><strong>Safety Upgrades:</strong> Procedural or physical fixes introduced (red stop bars, radar safety logic, enhanced markings, SOPs).</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Vocabulary Activation Box -->
          <div class="border border-amber-200 rounded-xl p-4 bg-amber-50/50 space-y-2.5">
            <div class="flex items-center gap-2">
              <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${theme.accent};"></span>
              <h5 class="text-xs font-bold text-slate-900 uppercase tracking-wide">
                Mandatory Vocabulary Activation (Sessions 1 to 4)
              </h5>
            </div>
            <p class="text-xs text-slate-700 leading-relaxed">
              To earn top marks on Criterion 4, deploy at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–4 into your speech:
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 text-[11px]">
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 1 (Survey &amp; Regs):</strong>
                <em>Passenger rights (EU261), slot allocation, security screening, noise abatement, hub carrier, suborbital.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 2 (Airfield Movement):</strong>
                <em>Airside vs. landside, runway designators, taxiway markings, holding points, stop bars, jet bridge.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 3 (Turnaround &amp; GSE):</strong>
                <em>Turnaround time (TAT), GPU, pushback tug, belt loader, de-icing rig, Foreign Object Debris (FOD), chocks.</em>
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-amber-200">
                <strong class="text-amber-900 block mb-0.5">Session 4 (Jobs in Aviation):</strong>
                <em>ATCO vs. AFISO, Turnaround Coordinator, Flight Dispatcher, Ramp Agent, responsible for, tasked with.</em>
              </div>
            </div>
          </div>

          <!-- Visual Supports Guidance -->
          <div class="p-3.5 bg-white rounded-xl border border-slate-200 space-y-2">
            <h5 class="text-xs font-bold text-slate-800 uppercase tracking-wide">Visual Supports Guidelines</h5>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div class="p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-lg text-slate-700">
                <strong class="text-emerald-800 block mb-1">✅ DO:</strong>
                Use 4–6 clean slides, official aerodrome charts, runway diagrams, and photos with short bullet cue points. Make eye contact!
              </div>
              <div class="p-2.5 bg-rose-50/50 border border-rose-200 rounded-lg text-slate-700">
                <strong class="text-rose-800 block mb-1">❌ DO NOT:</strong>
                Never put full paragraphs on slides, and never read aloud from notes or screens. Reading directly is heavily penalized.
              </div>
            </div>
          </div>

          <!-- Student Success Tips -->
          <div class="p-4 rounded-xl border space-y-2.5" style="background-color: ${theme.highlight || '#fef3c7'}; border-color: ${theme.accent}40;">
            <div class="flex items-center gap-1.5 font-bold text-xs" style="color: ${theme.accent};">
              <span>💡</span>
              <span class="uppercase tracking-wide">B2 Student Success Tips (AT FE 1)</span>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>1. 50/50 Rule:</strong> Practice smooth handovers with your partner. Equal speaking time is part of the grade.
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>2. Plant Words:</strong> Select 6 to 8 technical terms beforehand and use them naturally in context.
              </div>
              <div class="p-2.5 bg-white rounded-lg border border-slate-200 shadow-2xs">
                <strong>3. Vocabulary Log:</strong> Have your portfolio open. Note: TOEIC drills are maintained independently and not graded here.
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
                  <h5 class="text-xs font-bold text-slate-800 mt-2">Portfolio &amp; TOEIC Audit</h5>
                  <p class="text-[11px] text-slate-600 mt-1 leading-relaxed">Review personal Vocabulary Log (72 Module 3 aeronautical terms), TOEIC exercise completion, and self-study progress.</p>
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
            <h3 class="text-base sm:text-lg font-bold text-slate-800 mt-1">Formative Evaluation 1 Objectives (AAS Track)</h3>
            <p class="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
              Demonstrate collaborative spoken production, spontaneous dialogue in teacher Q&amp;A, activation of specialized aerodrome vocabulary from Sessions 1–4, grammatical precision with modal verbs and passives, and autonomous portfolio habits.
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
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Deliver a Structured Technical Airport Profile Presentation</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present your chosen airport's infrastructure, runways, taxiways, and apron operations over 10–12 minutes without reading written notes. Effectively utilize aerodrome charts and visual diagrams, link points with logical linking words, and share talking time equally (50/50).
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">02</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Engage in Spontaneous Operational Dialogue (Teacher Q&amp;A)</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Answer teacher follow-up questions spontaneously. Justify choices regarding layout trade-offs, published runway hot spots, ATC visibility constraints, and surface incident root causes without switching languages.
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">03</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Activate Module 1 Aerodrome Vocabulary (Sessions 1 to 4)</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Naturally integrate at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–4 (e.g. <em>runway designators, holding points, stop bars, turnaround time, GPU, pushback tug, FOD, ATCO separation authority, AFISO advisory service</em>).
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">04</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Demonstrate Grammatical Precision &amp; Functional Structures</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Accurately deploy modal verbs of obligation and necessity (<em>must, should, are required to</em>), past passive constructions when analyzing incidents (<em>"The runway was crossed before clearance was received"</em>), and job responsibility structures (<em>responsible for + -ing, tasked with</em>).
                  </p>
                </div>
              </div>

              <div class="flex items-start gap-3 p-3.5 bg-white border border-slate-200 rounded-xl shadow-xs">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shrink-0 shadow-xs" style="background-color: ${theme.primary};">05</span>
                <div>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-800">Exhibit Autonomous Portfolio Habits &amp; Self-Critique</h5>
                  <p class="text-[11px] sm:text-xs text-slate-600 leading-relaxed mt-0.5">
                    Present an updated personal vocabulary log with recorded Module 1 vocabulary. Arrive prepared to discuss personal strong points and weak points constructively. <em>(Note: TOEIC practice is maintained independently on the AAS portal and is not graded in this evaluation).</em>
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
                    Present an updated personal vocabulary log with recorded Module 2 vocabulary. Arrive prepared to discuss personal strong points and weak points constructively. <em>(Note: TOEIC practice is maintained independently on the AAS portal and is not graded in this evaluation).</em>
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
                    Present an updated personal vocabulary log with recorded Module 3 vocabulary. Arrive prepared to discuss personal strengths and two concrete action targets for Semester 2. <em>(Note: TOEIC practice is maintained independently on the AAS portal and is not graded in this evaluation).</em>
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
              <span class="text-xs font-bold uppercase tracking-wider text-slate-500">Official Rubric • Technical English (AT)</span>
              <span class="text-xs font-bold px-2.5 py-0.5 rounded-md text-white font-mono shadow-xs" style="background-color: ${theme.primary};">
                Total: 20 Points • B2 Standard
              </span>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-800">
              Formative Evaluation 1 Marking Criteria (Airports Task)
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
                  <td class="p-3 text-slate-600">Intelligible pronunciation and correct syllable stress placed on aeronautical terms (<em>au-THOR-i-ty, co-OR-di-na-tor, tech-NI-cian, ca-PA-ci-ty, de-i-cing</em>).</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">3. Grammar &amp; Sentence Structure</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Accurate modal verbs of obligation (<em>must, should, are required to</em>), past passive voice for incidents, and responsibility formulas (<em>responsible for + -ing</em>).</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">4. Vocabulary &amp; Topic Vocabulary</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">4</td>
                  <td class="p-3 text-slate-600">Active, accurate deployment of at least <strong>6 to 8 specialized technical terms</strong> from Sessions 1–4.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">5. Interaction &amp; Teamwork</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2.5</td>
                  <td class="p-3 text-slate-600">Equal 50/50 balance between partners (~6 mins each), smooth handovers, and spontaneous, thoughtful responses during teacher Q&amp;A.</td>
                </tr>
                <tr class="hover:bg-slate-50/60">
                  <td class="p-3 font-bold text-slate-800">6. Portfolio &amp; Self-Critique</td>
                  <td class="p-3 text-center font-bold font-mono text-white rounded" style="background-color: ${theme.primary};">2.5</td>
                  <td class="p-3 text-slate-600">Updated personal vocabulary log with Module 1 terms, and mature self-critique of strong and weak points. <em>(Note: TOEIC testing does not factor into this grade).</em></td>
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
              <p class="text-slate-600">Fluent, spontaneous delivery; precise technical aerodrome vocabulary; high grammatical accuracy; 50/50 teamwork; portfolio fully updated.</p>
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
                  <td class="p-3 text-slate-600">Updated personal vocabulary log with Module 2 terms, and mature self-critique of strong and weak points. <em>(Note: TOEIC testing does not factor into this grade).</em></td>
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
                  <td class="p-3 text-slate-600">Updated personal vocabulary log with Module 3 terms, and mature self-critique identifying personal strong points and Semester 2 action targets. <em>(Note: TOEIC testing does not factor into this grade).</em></td>
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
