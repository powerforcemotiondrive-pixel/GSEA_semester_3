    function renderLessonContentTabSession1(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 1</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'EASA Rules & Finding Information Fast'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session1_easa.jpg'}" alt="${hero.title || 'EASA Rules'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card1.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'EASA Rules & Finding Information Fast'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Navigating Airport Regulations, Words for Rules & Obstacle Safeguarding'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up & Entry Spot-Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up & Entry Spot-Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

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
                ${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return `
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">${qText}</p>
                      </div>
                      ${answers.length > 0 ? `
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s1-${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s1-${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            ${answers.map(ans => `
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;${ans}&rdquo;</span>
                              </div>
                            `).join('')}
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Questions Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Airport Rules Entry Spot-Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-${q.id}" onclick="window.toggleDiagnosticAnswer(${q.id})" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the EASA Crane Rule -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading the EASA Crane Rule (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Authentic EASA Document</span>
            </div>

            ${renderActivityInstructions(doc, theme)}

            <!-- Document Viewer Box -->
            <div class="rounded-xl border border-blue-200 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-blue-950 px-4 py-2.5 border-b border-blue-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-blue-200">
                  <svg width="15" height="15" class="text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>${doc.docRef || 'EASA CS-ADR-DSN • Subpart H'}</span>
                </div>
                <span class="bg-blue-800 text-blue-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions Grid -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check (Scan the text above):</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((doc.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-blue-600">Check ${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s1-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> ${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s1-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-600 hover:text-blue-800 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Words for Rules -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: Words for Rules: Must, Shall, Should, May (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Focus</span>
            </div>

            ${renderActivityInstructions(rules, theme)}

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
                  ${(rules.rulesTable || []).map(r => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold text-blue-900">${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">"${r.example}"</td>
                      <td class="p-2.5 text-[11px] text-slate-500">${r.tip}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- 5 Interactive Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Practice Drills: Choose the correct rule word</h5>
              <div class="space-y-2.5">
                ${(rules.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">${d.id}. ${d.sentence}</p>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        ${d.options.map(opt => `
                          <button type="button" onclick="const ans=document.getElementById('drill-ans-s1-${d.id}'); ans.classList.remove('hidden');" class="px-2.5 py-1 bg-white hover:bg-blue-50 border border-slate-300 rounded text-xs font-bold text-slate-700 cursor-pointer">${opt}</button>
                        `).join('')}
                      </div>
                      <div id="drill-ans-s1-${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        &check; Correct: ${d.correct} (${d.rationale})
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Speaking Role-Play: Talking to the Builder (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Person Spoken Simulation</span>
            </div>

            ${renderActivityInstructions(spoken, theme)}

            <!-- Scenario Box -->
            <div class="p-4 bg-sky-50/80 border border-sky-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-sky-950 font-bold">
                <svg width="16" height="16" class="text-sky-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Scenario:</span>
              </div>
              <p class="text-sky-900 leading-relaxed font-medium">${spoken.scenario || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              ${(spoken.roles || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      ${r.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Conversational Phrases (Use these during the role-play):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                ${(spoken.usefulPhrases || []).map(ph => `
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;${ph}&rdquo;
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: What Could Go Wrong? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            ${renderActivityInstructions(safety, theme)}

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
                  ${(safety.rows || []).map(row => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">${row.answer}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession2(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 2</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Safety Alerts & Ramp Inspections'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session2_audit.jpg'}" alt="${hero.title || 'Safety Alerts'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card2.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Safety Alerts & Ramp Inspections'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Apron Vehicle Safety, Objective Phrasing & Fix-It Plans'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up: Danger on the Ramp -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up: Danger on the Ramp (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

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
                ${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return `
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">${qText}</p>
                      </div>
                      ${answers.length > 0 ? `
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s2-${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s2-${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            ${answers.map(ans => `
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;${ans}&rdquo;</span>
                              </div>
                            `).join('')}
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Ramp Safety Spot-Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-s2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-s2-${q.id}" onclick="const el=document.getElementById('diagnostic-ans-s2-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the EASA Ramp Speed Alert -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading the EASA Ramp Speed Alert (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Authentic SIB Extract</span>
            </div>

            ${renderActivityInstructions(doc, theme)}

            <!-- SIB Viewer -->
            <div class="rounded-xl border border-amber-300 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-amber-950 px-4 py-2.5 border-b border-amber-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-amber-200">
                  <svg width="15" height="15" class="text-amber-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>
                  <span>${doc.docRef || 'EASA SIB No. 2024-11'}</span>
                </div>
                <span class="bg-amber-800 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((doc.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-amber-600">Check ${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s2-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> ${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s2-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Polite Language for Inspections -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: Polite Language for Inspections (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Clinic</span>
            </div>

            ${renderActivityInstructions(rules, theme)}

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
                  ${(rules.rulesTable || []).map(r => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold ${r.word.includes('Harsh') ? 'text-rose-700' : 'text-emerald-700'}">${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">${r.example}</td>
                      <td class="p-2.5 text-[11px] text-slate-500">${r.tip}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Rewriting Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Rewriting Drills: Choose the most polite, professional sentence</h5>
              <div class="space-y-2.5">
                ${(rules.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">${d.id}. ${d.sentence}</p>
                    <div class="space-y-1.5">
                      ${d.options.map(opt => `
                        <div onclick="const ans=document.getElementById('drill-ans-s2-${d.id}'); ans.classList.remove('hidden');" class="p-2 bg-white hover:bg-slate-100 border border-slate-200 rounded text-xs font-medium text-slate-700 cursor-pointer">${opt}</div>
                      `).join('')}
                    </div>
                    <div id="drill-ans-s2-${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 p-2 rounded border border-emerald-200">
                      &check; Recommended: "${d.correct}" (${d.rationale})
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Ramp Safety Meeting -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Speaking Role-Play: The Ramp Safety Meeting (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Person Audit Simulation</span>
            </div>

            ${renderActivityInstructions(spoken, theme)}

            <!-- Scenario -->
            <div class="p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-amber-950 font-bold">
                <svg width="16" height="16" class="text-amber-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Audit Scenario:</span>
              </div>
              <p class="text-amber-900 leading-relaxed font-medium">${spoken.scenario || ''}</p>
            </div>

            <!-- 3 Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              ${(spoken.roles || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      ${r.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Conversational Phrases (Constructive &amp; Professional):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                ${(spoken.usefulPhrases || []).map(ph => `
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;${ph}&rdquo;
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: What Could Go Wrong? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            ${renderActivityInstructions(safety, theme)}

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
                  ${(safety.rows || []).map(row => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">${row.answer}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession3(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const doc = content.documentExtract || {};
      const rules = content.rulesPractice || {};
      const spoken = content.spokenActivity || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 3</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Special Requests & Runway Safety Cases'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session3_derogation.jpg'}" alt="${hero.title || 'Special Requests'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card3.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Special Requests & Runway Safety Cases'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Temporary Works, Connecting Words & Airline Operational Briefings'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'GSEA Student Training'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Keeping Airports Open During Repairs -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">00-15m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up: Keeping Airports Open During Repairs (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

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
                ${(opening.newsPrompts || []).map((p, idx) => {
                  const pId = typeof p === 'object' ? (p.id || idx + 1) : idx + 1;
                  const qText = typeof p === 'object' ? p.question : p;
                  const answers = typeof p === 'object' && Array.isArray(p.exampleAnswers) ? p.exampleAnswers : [];
                  return `
                    <div class="p-3 bg-white border border-amber-200/90 rounded-lg shadow-2xs space-y-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0${pId}.</span>
                        <p class="text-xs font-bold text-slate-800 leading-snug">${qText}</p>
                      </div>
                      ${answers.length > 0 ? `
                        <div class="pt-1">
                          <button type="button" onclick="const box=document.getElementById('disc-ans-s3-${pId}'); box.classList.toggle('hidden'); this.querySelector('span').innerText = box.classList.contains('hidden') ? '💡 View Example Ideas &amp; Answers' : 'Hide Example Ideas';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-700 hover:text-amber-900 cursor-pointer">
                            <span>💡 View Example Ideas &amp; Answers</span> &rarr;
                          </button>
                          <div id="disc-ans-s3-${pId}" class="hidden mt-2 p-2.5 bg-amber-50/90 border border-amber-200 rounded-md text-[11px] text-slate-700 space-y-1.5">
                            <span class="text-[10px] font-bold uppercase tracking-wider text-amber-900 block mb-1">Example Student Answers &amp; Talking Points:</span>
                            ${answers.map(ans => `
                              <div class="flex items-start gap-2">
                                <span class="text-amber-600 font-bold shrink-0 mt-0.5">&bull;</span>
                                <span class="italic text-slate-800 leading-relaxed">&ldquo;${ans}&rdquo;</span>
                              </div>
                            `).join('')}
                          </div>
                        </div>
                      ` : ''}
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- Spot-Check Grid -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Runway Works Entry Check'}</h5>
                <span class="text-[11px] text-slate-500">${(opening.diagnostic && opening.diagnostic.instructions) || ''}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.diagnostic && opening.diagnostic.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-slate-500">Question 0${q.id}</span>
                        <span class="w-2 h-2 rounded-full" style="background-color: ${theme.primary};"></span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="diagnostic-ans-s3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-slate-900">Plain English Answer:</span> ${q.answer}
                      </div>
                      <button type="button" id="diagnostic-btn-s3-${q.id}" onclick="const el=document.getElementById('diagnostic-ans-s3-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Runway Work Request -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading the Runway Work Request (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${doc.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Official Exemption File</span>
            </div>

            ${renderActivityInstructions(doc, theme)}

            <!-- Exemption File Viewer -->
            <div class="rounded-xl border border-indigo-300 bg-slate-900 text-slate-100 overflow-hidden shadow-sm">
              <div class="bg-indigo-950 px-4 py-2.5 border-b border-indigo-800/80 flex items-center justify-between text-xs">
                <div class="flex items-center gap-2 font-mono font-bold text-indigo-200">
                  <svg width="15" height="15" class="text-indigo-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                  <span>${doc.docRef || 'EASA/ADR-EXEMP/2024-009'}</span>
                </div>
                <span class="bg-indigo-800 text-indigo-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EXTRACT (+50% EXPANDED)</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((doc.questions) || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2.5 flex flex-col justify-between">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-indigo-600">Check ${q.id}</span>
                      <p class="text-xs font-bold text-slate-800 mt-1">${q.q}</p>
                    </div>
                    <div>
                      <div id="read-ans-s3-${q.id}" class="hidden p-2.5 bg-white border border-slate-200 rounded-lg text-[11px] text-slate-700 leading-relaxed shadow-xs mb-2">
                        <span class="font-bold text-emerald-800">Answer:</span> ${q.answer}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('read-ans-s3-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 hover:text-indigo-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Connecting Words -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: Connecting Words: Giving Reasons & Explaining Conditions (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language Focus</span>
            </div>

            ${renderActivityInstructions(rules, theme)}

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
                  ${(rules.rulesTable || []).map(r => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-2.5 font-bold text-indigo-900">${r.word}</td>
                      <td class="p-2.5 font-semibold text-slate-800">${r.meaning}</td>
                      <td class="p-2.5 italic text-slate-600">${r.example}</td>
                      <td class="p-2.5 text-[11px] text-slate-500">${r.tip}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Drills -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Gap-Fill Drills: Choose the correct connecting word</h5>
              <div class="space-y-2.5">
                ${(rules.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <p class="text-xs font-bold text-slate-900">${d.id}. ${d.sentence}</p>
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        ${d.options.map(opt => `
                          <button type="button" onclick="const ans=document.getElementById('drill-ans-s3-${d.id}'); ans.classList.remove('hidden');" class="px-2.5 py-1 bg-white hover:bg-indigo-50 border border-slate-300 rounded text-xs font-bold text-slate-700 cursor-pointer">${opt}</button>
                        `).join('')}
                      </div>
                      <div id="drill-ans-s3-${d.id}" class="hidden text-xs text-emerald-800 font-bold bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                        &check; Correct: ${d.correct} (${d.rationale})
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Briefing to Airline Pilots -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${spoken.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">3-Minute Spoken Briefing</span>
            </div>

            ${renderActivityInstructions(spoken, theme)}

            <!-- Scenario -->
            <div class="p-4 bg-indigo-50/80 border border-indigo-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-indigo-950 font-bold">
                <svg width="16" height="16" class="text-indigo-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Briefing Scenario:</span>
              </div>
              <p class="text-indigo-900 leading-relaxed font-medium">${spoken.scenario || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1">
              ${(spoken.roles || []).map(r => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2 flex flex-col justify-between">
                  <div>
                    <div class="flex items-center justify-between gap-1 border-b border-slate-200 pb-1.5">
                      <h5 class="text-xs font-bold text-slate-900">${r.title}</h5>
                      <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shadow-2xs">${r.badge}</span>
                    </div>
                    <ul class="mt-2 space-y-1.5 pl-4 list-disc text-[11px] text-slate-700 leading-relaxed">
                      ${r.bullets.map(b => `<li>${b}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Useful Phrases Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Useful Briefing Phrases (Clear &amp; Reassuring):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                ${(spoken.usefulPhrases || []).map(ph => `
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;${ph}&rdquo;
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: Is it Safe to Land? (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Simple Safety Check</span>
            </div>

            ${renderActivityInstructions(safety, theme)}

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
                  ${(safety.rows || []).map(row => `
                    <tr class="hover:bg-slate-50">
                      <td class="p-3 font-bold text-slate-900 bg-slate-50/50">${row.question}</td>
                      <td class="p-3 text-[11px] leading-relaxed text-slate-800">${row.answer}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      `;
    }

function renderLessonContentTabSession4(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const taxonomy = content.jobTaxonomy || {};
      const clinic = content.grammarClinic || {};
      const handoffs = content.handoffSimulation || {};
      const debate = content.careerForumDebate || {};
      const closing = content.closingReview || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/aas_m1card4.jpg'}" alt="${hero.title || 'Jobs in Aviation'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/ag_m1card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Aviation Roles &amp; Operational Interfaces</span>
                <h2 class="text-base sm:text-xl font-black text-white mt-0.5">${hero.title || 'Jobs in Aviation: Roles, Responsibilities &amp; Operational Interfaces'}</h2>
                <p class="text-xs text-white/90 mt-1 max-w-2xl">${hero.subtitle || 'Landside, Airside, Flight Crew, Air Traffic Services &amp; Civil Aviation Corps (TSEEAC).'}</p>
              </div>
            </div>
          </div>

          <!-- Activity 1: Aviation News & Session 3 Spot-Check (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">01</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${opening.title || 'Activity 1: Aviation News &amp; Session 3 Spot-Check (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Warm-Up &amp; Catch-Up</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${opening.summary || ''}</p>

            ${renderActivityInstructions(opening, theme)}

            <!-- News Prompts -->
            <div class="p-3.5 rounded-lg bg-sky-50/70 border border-sky-200">
              <span class="text-[11px] font-bold text-sky-900 uppercase tracking-wider">📰 Aviation News &amp; Current Events Prompts</span>
              <ul class="space-y-1.5 mt-2 text-xs text-sky-950">
                ${(opening.newsPrompts || []).map(p => `
                  <li class="flex items-start gap-1.5">
                    <span class="font-bold text-sky-700">&bull;</span>
                    <span>${p}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Session 3 Vocabulary Spot-Check -->
            <div class="space-y-2.5 pt-1">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Session 3 Catch-Up: Ground Operations &amp; GSE Spot-Check</span>
                <span class="text-[11px] text-slate-500">Rapid-fire student recall</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${((opening.spotCheck && opening.spotCheck.questions) || []).map(q => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <div class="space-y-1">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">Question ${q.id}</span>
                      </div>
                      <p class="text-xs font-semibold text-slate-900">${q.q}</p>
                    </div>
                    <div>
                      <div id="s4-spotcheck-ans-${q.id}" class="hidden mt-2 p-2 rounded bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                        ${q.answer}
                      </div>
                      <button type="button" id="s4-spotcheck-btn-${q.id}" onclick="window.toggleS4SpotCheckAnswer(${q.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Aviation Job Taxonomy & The Operational Spectrum (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">02</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${taxonomy.title || 'Activity 2: Aviation Roles Across the Industry (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">5 Primary Domains</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${taxonomy.summary || ''}</p>

            ${renderActivityInstructions(taxonomy, theme)}

            <div class="space-y-3">
              ${(taxonomy.domains || []).map(dom => {
                const isTseeac = dom.id === 'tseeac';
                const isAtco = dom.id === 'atco';
                const borderCol = isTseeac ? 'border-emerald-300 bg-emerald-50/40' : (isAtco ? 'border-rose-200 bg-rose-50/30' : 'border-slate-200 bg-slate-50/60');
                return `
                  <div class="p-3.5 sm:p-4 rounded-xl border ${borderCol} space-y-2.5">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="text-[11px] font-bold px-2 py-0.5 rounded text-white ${isTseeac ? 'bg-emerald-700' : (isAtco ? 'bg-rose-700' : 'bg-slate-700')}">${dom.name}</span>
                        ${isTseeac ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 border border-emerald-300">AFISO &bull; DGAC Safety &bull; Non-Separation</span>' : ''}
                        ${isAtco ? '<span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-800 border border-rose-300">Tactical Separation Authority</span>' : ''}
                      </div>
                      <span class="text-[11px] text-slate-500 font-medium">Jurisdiction: ${dom.keyJurisdiction || ''}</span>
                    </div>
                    <p class="text-xs text-slate-700 leading-relaxed">${dom.description}</p>
                    <div class="flex flex-wrap gap-1.5 pt-1">
                      ${(dom.roles || []).map(r => `
                        <span class="text-[10.5px] font-bold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-800 shadow-2xs">${r}</span>
                      `).join('')}
                    </div>
                    <div class="p-2.5 rounded-lg bg-white/80 border border-slate-200 text-[11px] text-slate-600">
                      <strong class="text-slate-800">Sample Operational Responsibility:</strong> ${dom.sampleDuty || ''}
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <!-- Activity 3: Functional Grammar & Authority Clinic (20 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">03</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${clinic.title || 'Activity 3: Language Focus: Roles, Responsibilities &amp; Authority (20 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Target Language</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${clinic.summary || ''}</p>

            ${renderActivityInstructions(clinic, theme)}

            <!-- Formula Banner -->
            <div class="p-3 rounded-lg bg-slate-900 text-white space-y-1">
              <span class="text-[10px] font-bold tracking-wider uppercase text-amber-400">Core Functional Formulas</span>
              <p class="font-mono text-xs sm:text-[13px] font-bold text-slate-100">
                BE RESPONSIBLE FOR + -ING &bull; BE TASKED WITH + -ING &bull; HAVE AUTHORITY OVER / TO &bull; ENSURE THAT + CLAUSE
              </p>
            </div>

            <!-- Formulas Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
              ${(clinic.formulas || []).map(f => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1.5">
                  <span class="font-mono text-xs font-bold text-amber-700 block">${f.structure}</span>
                  <p class="text-[10.5px] font-semibold text-slate-600">${f.usage}</p>
                  <p class="text-[11px] text-slate-800 italic bg-white p-2 rounded border border-slate-100">"${f.example}"</p>
                </div>
              `).join('')}
            </div>

            <!-- Role Clinic Challenge -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🎯 Roles & Responsibilities Quick Practice</span>
                <span class="text-[11px] text-slate-500">Select the correct preposition or verb form</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(clinic.roleClinic || []).map(item => `
                  <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col justify-between gap-2">
                    <p class="text-xs font-medium text-slate-800">${item.prompt}</p>
                    <div>
                      <div id="s4-roleclinic-ans-${item.id}" class="hidden mt-2 p-2 rounded bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-900 font-medium">
                        <strong>Answer:</strong> ${item.answer}<br>
                        <span class="text-slate-600">${item.explanation}</span>
                      </div>
                      <button type="button" id="s4-roleclinic-btn-${item.id}" onclick="window.toggleS4RoleClinicAnswer(${item.id})" class="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1 cursor-pointer">
                        <span>Check Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Pairwork & Triad Simulation — 'A Day in the Life' Role Handoff (25 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">04</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${handoffs.title || 'Activity 4: Pairwork &amp; Triad Simulation — Role Handoffs (25 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Pair &amp; Triad Speaking</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${handoffs.summary || ''}</p>

            ${renderActivityInstructions(handoffs, theme)}

            <div class="space-y-4">
              ${(handoffs.scenarios || []).map(sc => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60 space-y-3">
                  <div class="flex items-center justify-between">
                    <h4 class="text-xs sm:text-sm font-bold text-slate-900">${sc.title}</h4>
                    <span class="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-300">Live Simulation</span>
                  </div>
                  <p class="text-xs text-slate-600 bg-white p-2.5 rounded-lg border border-slate-200"><strong>Context:</strong> ${sc.context}</p>
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div class="p-3 rounded-lg bg-sky-50/70 border border-sky-200 text-sky-950">
                      <strong class="text-sky-900 block mb-1">Role A Task:</strong>
                      ${sc.roleA}
                    </div>
                    <div class="p-3 rounded-lg bg-indigo-50/70 border border-indigo-200 text-indigo-950">
                      <strong class="text-indigo-900 block mb-1">Role B Task:</strong>
                      ${sc.roleB}
                    </div>
                  </div>
                  <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-600 space-y-1">
                    <strong class="text-slate-800">Target Phrases to Deploy:</strong>
                    <ul class="space-y-0.5 list-disc pl-4 text-slate-700">
                      ${(sc.targetPhrases || []).map(tp => `<li>${tp}</li>`).join('')}
                    </ul>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Aviation Career Forum & Operational Dilemma Debate (35 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">05</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${debate.title || 'Activity 5: Aviation Career Forum &amp; Operational Dilemma Debate (35 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">Multi-Stakeholder Forum</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${debate.summary || ''}</p>

            ${renderActivityInstructions(debate, theme)}

            <!-- Scenario Box -->
            <div class="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1.5">
              <span class="text-[10px] font-bold text-amber-900 uppercase tracking-wider">⚡ Crisis Dilemma: Winter Storm &amp; Diversion Gridlock</span>
              <p class="text-xs text-amber-950 leading-relaxed">${debate.scenario || ''}</p>
            </div>

            <!-- Stakeholders Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(debate.stakeholders || []).map(st => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/60 space-y-1.5">
                  <div class="flex items-center justify-between">
                    <span class="text-xs font-bold text-slate-900">${st.name}</span>
                  </div>
                  <p class="text-[11px] text-slate-700"><strong>Priority:</strong> ${st.priority}</p>
                  <p class="text-[11px] text-slate-600 bg-white p-2 rounded border border-slate-200"><strong>Stance:</strong> ${st.stance}</p>
                </div>
              `).join('')}
            </div>

            <!-- Consensus Challenge & Agreement Tracker -->
            <div class="p-3.5 rounded-xl bg-white border border-slate-200 space-y-2.5">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider">🤝 Consensus Summary Table</span>
              <p class="text-xs text-slate-600">${debate.consensusChallenge || 'Rate agreement across priorities and negotiate a formal sequence of actions.'}</p>
              
              <div class="space-y-2 pt-1">
                ${[
                  { id: 1, label: "Prioritize emergency fuel diversion over outbound departure slot on Stand 2" },
                  { id: 2, label: "Dispatch replacement de-icing rig to Stand 2 to avoid crew flight duty cancellation" },
                  { id: 3, label: "Direct AFISO / Operations team to hold taxiway snowplows until inbound flights touch down" }
                ].map(item => `
                  <div class="p-2.5 rounded-lg border border-slate-200 bg-slate-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <span class="text-xs font-medium text-slate-800">${item.label}</span>
                    <div class="flex items-center gap-1 shrink-0">
                      ${[1, 2, 3, 4, 5].map(score => `
                        <button type="button" id="s4-debate-${item.id}-btn-${score}" onclick="window.setS4JobDebateAgreement(${item.id}, ${score})" class="w-7 h-7 text-xs font-bold rounded border border-slate-300 text-slate-600 hover:bg-slate-200 transition-all cursor-pointer">
                          ${score}
                        </button>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 6: Vocabulary Review, Pronunciation & Wrap-Up (10 mins) -->
          <div class="bg-white border border-slate-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-slate-100">
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">06</span>
                <h3 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-800">${closing.title || 'Activity 6: Vocabulary Review, Pronunciation &amp; Class Wrap-Up (10 mins)'}</h3>
              </div>
              <span class="text-[11px] font-semibold text-slate-500">10-Minute Consolidation</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${closing.summary || ''}</p>

            ${renderActivityInstructions(closing, theme)}

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(closing.reviewPrompts || []).map(rp => `
                <div class="p-3 rounded-lg border border-slate-200 bg-slate-50/70 space-y-1">
                  <span class="text-xs font-bold text-slate-800 block">${rp.title}</span>
                  <p class="text-[11px] text-slate-600 leading-relaxed">${rp.desc}</p>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `;
    }

    window.toggleS4SpotCheckAnswer = function(id) {
      const el = document.getElementById(`s4-spotcheck-ans-${id}`);
      const btn = document.getElementById(`s4-spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleS4RoleClinicAnswer = function(id) {
      const el = document.getElementById(`s4-roleclinic-ans-${id}`);
      const btn = document.getElementById(`s4-roleclinic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Check Answer</span> &rarr;';
      }
    };

    window.setS4JobDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`s4-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-200');
        } else {
          btn.classList.remove('bg-amber-600', 'text-white', 'border-amber-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-200');
        }
      }
    };

    window.toggleDiagnosticAnswer = function(id) {
      const el = document.getElementById(`diagnostic-ans-${id}`);
      const btn = document.getElementById(`diagnostic-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleModalChallengeAnswer = function(id) {
      const el = document.getElementById(`modal-chal-ans-${id}`);
      const btn = document.getElementById(`modal-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setSurveyAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`survey-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleCatchUpAnswer = function(id) {
      const el = document.getElementById(`catchup-ans-${id}`);
      const btn = document.getElementById(`catchup-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.togglePrepositionChallengeAnswer = function(id) {
      const el = document.getElementById(`prep-chal-ans-${id}`);
      const btn = document.getElementById(`prep-chal-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Rationale</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Verify Rationale</span> &rarr;';
      }
    };

    window.setTerminalDebateAgreement = function(topicId, score) {
      for (let s = 1; s <= 5; s++) {
        const btn = document.getElementById(`terminal-debate-${topicId}-btn-${s}`);
        if (!btn) continue;
        if (s === score) {
          btn.classList.add('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.remove('text-slate-600', 'hover:bg-slate-100');
        } else {
          btn.classList.remove('bg-indigo-600', 'text-white', 'border-indigo-600');
          btn.classList.add('text-slate-600', 'hover:bg-slate-100');
        }
      }
    };

    window.toggleSpotCheckAnswer = function(id) {
      const el = document.getElementById(`spotcheck-ans-${id}`);
      const btn = document.getElementById(`spotcheck-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Answer</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Reveal Answer</span> &rarr;';
      }
    };

    window.toggleVehicleCardView = function(id) {
      const clueEl = document.getElementById(`vehicle-clue-${id}`);
      const revealEl = document.getElementById(`vehicle-reveal-${id}`);
      const btn = document.getElementById(`vehicle-toggle-btn-${id}`);
      if (!clueEl || !revealEl || !btn) return;
      const isHidden = revealEl.classList.contains('hidden');
      if (isHidden) {
        revealEl.classList.remove('hidden');
        clueEl.classList.add('hidden');
        btn.innerHTML = '<span>Show Clues</span> &larr;';
        btn.classList.add('bg-slate-200');
      } else {
        revealEl.classList.add('hidden');
        clueEl.classList.remove('hidden');
        btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
        btn.classList.remove('bg-slate-200');
      }
    };

    window.toggleAllVehicles = function(showAll) {
      for (let i = 1; i <= 10; i++) {
        const clueEl = document.getElementById(`vehicle-clue-${i}`);
        const revealEl = document.getElementById(`vehicle-reveal-${i}`);
        const btn = document.getElementById(`vehicle-toggle-btn-${i}`);
        if (!clueEl || !revealEl || !btn) continue;
        if (showAll) {
          revealEl.classList.remove('hidden');
          clueEl.classList.add('hidden');
          btn.innerHTML = '<span>Show Clues</span> &larr;';
          btn.classList.add('bg-slate-200');
        } else {
          revealEl.classList.add('hidden');
          clueEl.classList.remove('hidden');
          btn.innerHTML = '<span>Reveal Vehicle</span> &rarr;';
          btn.classList.remove('bg-slate-200');
        }
      }
    };

    window.toggleScenarioModel = function(id) {
      const el = document.getElementById(`scenario-model-${id}`);
      const btn = document.getElementById(`scenario-btn-${id}`);
      if (!el || !btn) return;
      const isHidden = el.classList.contains('hidden');
      if (isHidden) {
        el.classList.remove('hidden');
        btn.innerHTML = '<span>Hide Model</span> &larr;';
      } else {
        el.classList.add('hidden');
        btn.innerHTML = '<span>Show Target Model</span> &rarr;';
      }
    };

    window.printLessonContent = function() {
      document.body.classList.add('printing-lesson-active');
      window.print();
    };
    window.addEventListener('afterprint', function() {
      document.body.classList.remove('printing-lesson-active');
    });

