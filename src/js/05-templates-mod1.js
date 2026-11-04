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
                <span class="bg-blue-800 text-blue-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EASA EXTRACT</span>
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

          <!-- Activity 6: Operational Notes & Safeguarding Decision -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes & Safeguarding Decision</h4>
                  <p class="text-[11px] text-slate-500">Record your team's role-play conclusions and safeguarding decisions for the crane. Auto-saved in browser.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[11px]">
                <span id="notes-status-s1" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('1')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Negotiation Outcome with Building Contractor:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s1" oninput="window.saveLessonNote('1', 'roleplay', this.value)" rows="3" placeholder="e.g., Agreed conditions with contractor: 28-day notice confirmed, boom must be lowered below 35m during active flight hours (06h00–22h00), red obstacle warning lights installed at crane tip..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('1', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s1" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('1', 'roleplay') : '') || '[No negotiation notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Safeguarding Record & NOTAM Decision:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s1" oninput="window.saveLessonNote('1', 'safety', this.value)" rows="3" placeholder="e.g., OLS approach surface protected (gradient 2%). Issue NOTAM 48 hours prior to crane erection stating temporary obstacle 48m AGL at 2,200m from Runway 09 threshold..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('1', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s1" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('1', 'safety') : '') || '[No safeguarding decision recorded]'}</div>
              </div>
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
              <img src="${hero.image || 'images/s3_m1_session2_audit.jpg'}" alt="${hero.title || 'Safety Alerts'}" class="w-full h-48 sm:h-64 object-cover object-top" style="object-position: center 12%;" onerror="this.src='images/aas_m1card2.jpg'">
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
                <span class="bg-amber-800 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EASA EXTRACT</span>
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

          <!-- Activity 6: Operational Notes & Ramp Safety Decision -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes & Ramp Safety Decision</h4>
                  <p class="text-[11px] text-slate-500">Record your team's audit findings and corrective actions for apron vehicles. Auto-saved in browser.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[11px]">
                <span id="notes-status-s2" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('2')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Ramp Audit Findings & Driver Clarification:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s2" oninput="window.saveLessonNote('2', 'roleplay', this.value)" rows="3" placeholder="e.g., Vehicle tug observed exceeding 20 km/h in lane B. Baggage handler explained time pressure for flight AF1234. Objective evidence: telematics record showed 27 km/h..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('2', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s2" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('2', 'roleplay') : '') || '[No audit notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Corrective Action Plan (CAP) & Occurrence Report Decision:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s2" oninput="window.saveLessonNote('2', 'safety', this.value)" rows="3" placeholder="e.g., Level 2 finding issued. Handler must submit CAP within 14 days. Corrective actions: fit speed limiter at 20 km/h, conduct 10-minute toolbox talk on right-of-way, log occurrence under Regulation 376/2014..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('2', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s2" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('2', 'safety') : '') || '[No CAP decision recorded]'}</div>
              </div>
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
                <span class="bg-indigo-800 text-indigo-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EASA EXTRACT</span>
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

          <!-- Activity 6: Operational Notes & Runway Works Decision -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes & Runway Works Decision</h4>
                  <p class="text-[11px] text-slate-500">Record your team's airline briefing points and Article 71 compensatory measures. Auto-saved in browser.</p>
                </div>
              </div>
              <div class="flex items-center gap-2 text-[11px]">
                <span id="notes-status-s3" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('3')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Flight Operations & Airline Briefing Talking Points:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s3" oninput="window.saveLessonNote('3', 'roleplay', this.value)" rows="3" placeholder="e.g., Runway 27 threshold temporarily displaced by 150m. Landing Distance Available (LDA) reduced to 1,950m. Take-Off Run Available (TORA) unchanged at 2,400m..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('3', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s3" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('3', 'roleplay') : '') || '[No flight ops briefing notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Article 71 Exemption & Compensatory Measures Decision:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s3" oninput="window.saveLessonNote('3', 'safety', this.value)" rows="3" placeholder="e.g., Granted under Article 71 for 6 weeks. Compensatory measures: wet runway operations strictly prohibited, crosswind limit lowered to 15 kts, RFFS fire crew on standby at taxiway C during heavy arrivals..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('3', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s3" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('3', 'safety') : '') || '[No compensatory measures recorded]'}</div>
              </div>
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
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const roleplay = content.roleplaySimulation || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Aerodrome Ground Layouts & Taxiway Navigation'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session4_banner.jpg'}" alt="${hero.title || 'Aerodrome Ground Layouts & Taxiway Navigation'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Aerodrome Ground Layouts & Taxiway Navigation'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || ''}</p>
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
              <div class="flex flex-wrap items-center gap-1.5">
                ${(opening.modeBadges || []).map(b => `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">${b}</span>`).join('')}
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
                  ${(opening.instructions || []).map(inst => `<li>${inst}</li>`).join('')}
                </ul>
              </div>
              <div class="space-y-1.5 bg-white p-2.5 rounded border border-slate-200">
                <span class="font-bold text-slate-800 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
                  Teaching Staff Notes:
                </span>
                <p class="text-[11px] text-slate-600 leading-relaxed">${opening.teacherNotes || ''}</p>
              </div>
            </div>

            <!-- Spoken Discussion Prompts -->
            <div class="space-y-3 pt-2">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Opening Discussion Questions:</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${(opening.newsPrompts || []).map((p, idx) => `
                  <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                        <span>QUESTION 0${idx + 1}</span>
                        <span class="text-blue-600">Discuss with Partner</span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mb-2">${p.question}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-100">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                        <span>Show Sample Spoken Answers</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                      <div class="hidden mt-2 p-2 bg-slate-50 rounded text-[11px] text-slate-600 space-y-1.5 border border-slate-200">
                        ${(p.exampleAnswers || []).map(ans => `<p class="leading-relaxed">&ldquo;${ans}&rdquo;</p>`).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Entry Spot-Check Diagnostics -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Entry Spot-Check Diagnostic (4 Questions):</h5>
                <span class="text-[11px] font-medium text-slate-500">Test baseline comprehension</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(opening.spotCheckQuestions || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <p class="text-xs font-bold text-slate-900">${q.id}. ${q.question}</p>
                    <div class="space-y-1">
                      ${q.options.map((opt, oIdx) => `
                        <div class="text-[11px] text-slate-700 flex items-start gap-1.5">
                          <span class="font-bold text-slate-500">${String.fromCharCode(65 + oIdx)})</span>
                          <span>${opt}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-black text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded cursor-pointer">
                        Reveal Answer
                      </button>
                      <div class="hidden text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        ${q.explanation}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Chart Extract -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${chart.title || 'Activity 2: Reading the Chart Extract (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">${chart.badge || 'CHART EXTRACT'}</span>
            </div>

            <!-- Chart Terminal Header -->
            <div class="p-3.5 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-mono font-bold tracking-wide uppercase">${chart.callsign || 'AUTHENTIC SIMULATION'}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-300">ICAO / EASA STANDARD SPECIFICATION</span>
            </div>

            <!-- Structured Extract Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(chart.sections || []).map(sec => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <h5 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1.5">${sec.heading}</h5>
                  <ul class="space-y-1.5 text-xs text-slate-700">
                    ${sec.details.map(d => `
                      <li class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                        <span class="leading-relaxed">${d}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${clinic.title || 'Activity 3: Language Clinic (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${clinic.summary || ''}</p>
                </div>
              </div>
              <span class="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LANGUAGE FOCUS</span>
            </div>

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(clinic.rules || []).map(r => `
                <div class="p-3 bg-purple-50/50 border border-purple-200 rounded-lg space-y-1">
                  <span class="text-xs font-black text-purple-900 font-mono">${r.term}</span>
                  <p class="text-[11px] text-slate-600">${r.meaning}</p>
                  <p class="text-[11px] text-purple-800 italic pt-1 border-t border-purple-100">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>

            <!-- Practical Oral Drills -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Practical Spoken Drills (In Pairs):</h5>
              <div class="space-y-2">
                ${(clinic.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="space-y-0.5">
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Drill ${d.id}</span>
                      <p class="text-xs font-bold text-slate-800">${d.prompt}</p>
                    </div>
                    <div class="shrink-0">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                        Reveal Model Spoken Response
                      </button>
                      <div class="hidden text-xs text-blue-900 font-medium bg-blue-50 p-2 rounded border border-blue-200 mt-1 sm:max-w-md">
                        &ldquo;${d.targetAnswer}&rdquo;
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Interactive Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Spoken Role-Play (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed">${roleplay.situation || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 shadow-2xs flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900 border-b border-slate-100 pb-1.5">${r.role}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-1.5">${r.instructions}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Observer Checklist & Useful Phrases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Peer Observer Checklist:</h5>
                <ul class="space-y-1 text-[11px] text-slate-600">
                  ${(roleplay.checklist || []).map(c => `
                    <li class="flex items-center gap-1.5">
                      <input type="checkbox" class="rounded text-blue-600">
                      <span>${c}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Key Communicative Phrases:</h5>
                <ul class="space-y-1 text-[11px] text-slate-700 italic">
                  ${(roleplay.phrases || []).map(p => `<li>&bull; &ldquo;${p}&rdquo;</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SAFETY ANALYSIS</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(safety.steps || []).map(s => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center">${s.step}</span>
                    <h5 class="text-xs font-bold text-slate-900">${s.title}</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">${s.text}</p>
                </div>
              `).join('')}
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
                <span id="notes-status-s4" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('4')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Taxi Clearance & Runway Crossing Routing Notes:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s4" oninput="window.saveLessonNote('4', 'roleplay', this.value)" rows="3" placeholder="e.g., Assigned routing for AFR 412: Stand 14 via Taxiway Delta, hold short of Runway 14R at holding point D1. Crossed 14R upon clearance, joined Taxiway Alpha to holding point A1..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('4', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s4" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('4', 'roleplay') : '') || '[No simulation notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Runway Incursion Safety Defenses & Hot Spot 1 Action:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s4" oninput="window.saveLessonNote('4', 'safety', this.value)" rows="3" placeholder="e.g., Mandatory red stop bars installed at D1. Enhanced yellow centerline markings painted 45m prior to stop line. Progressive taxi instructions and full verbal readback enforced..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('4', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s4" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('4', 'safety') : '') || '[No safety check decision recorded]'}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession5(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const roleplay = content.roleplaySimulation || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 5</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Airspace Corridors: SIDs, STARs & Transition Routes'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session5_banner.jpg'}" alt="${hero.title || 'Airspace Corridors: SIDs, STARs & Transition Routes'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card5.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Airspace Corridors: SIDs, STARs & Transition Routes'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || ''}</p>
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
              <div class="flex flex-wrap items-center gap-1.5">
                ${(opening.modeBadges || []).map(b => `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">${b}</span>`).join('')}
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
                  ${(opening.instructions || []).map(inst => `<li>${inst}</li>`).join('')}
                </ul>
              </div>
              <div class="space-y-1.5 bg-white p-2.5 rounded border border-slate-200">
                <span class="font-bold text-slate-800 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
                  Teaching Staff Notes:
                </span>
                <p class="text-[11px] text-slate-600 leading-relaxed">${opening.teacherNotes || ''}</p>
              </div>
            </div>

            <!-- Spoken Discussion Prompts -->
            <div class="space-y-3 pt-2">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Opening Discussion Questions:</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${(opening.newsPrompts || []).map((p, idx) => `
                  <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                        <span>QUESTION 0${idx + 1}</span>
                        <span class="text-blue-600">Discuss with Partner</span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mb-2">${p.question}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-100">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                        <span>Show Sample Spoken Answers</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                      <div class="hidden mt-2 p-2 bg-slate-50 rounded text-[11px] text-slate-600 space-y-1.5 border border-slate-200">
                        ${(p.exampleAnswers || []).map(ans => `<p class="leading-relaxed">&ldquo;${ans}&rdquo;</p>`).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Entry Spot-Check Diagnostics -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Entry Spot-Check Diagnostic (4 Questions):</h5>
                <span class="text-[11px] font-medium text-slate-500">Test baseline comprehension</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(opening.spotCheckQuestions || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <p class="text-xs font-bold text-slate-900">${q.id}. ${q.question}</p>
                    <div class="space-y-1">
                      ${q.options.map((opt, oIdx) => `
                        <div class="text-[11px] text-slate-700 flex items-start gap-1.5">
                          <span class="font-bold text-slate-500">${String.fromCharCode(65 + oIdx)})</span>
                          <span>${opt}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-black text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded cursor-pointer">
                        Reveal Answer
                      </button>
                      <div class="hidden text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        ${q.explanation}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Chart Extract -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${chart.title || 'Activity 2: Reading the Chart Extract (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">${chart.badge || 'CHART EXTRACT'}</span>
            </div>

            <!-- Chart Terminal Header -->
            <div class="p-3.5 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-mono font-bold tracking-wide uppercase">${chart.callsign || 'AUTHENTIC SIMULATION'}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-300">ICAO / EASA STANDARD SPECIFICATION</span>
            </div>

            <!-- Structured Extract Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(chart.sections || []).map(sec => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <h5 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1.5">${sec.heading}</h5>
                  <ul class="space-y-1.5 text-xs text-slate-700">
                    ${sec.details.map(d => `
                      <li class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                        <span class="leading-relaxed">${d}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${clinic.title || 'Activity 3: Language Clinic (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${clinic.summary || ''}</p>
                </div>
              </div>
              <span class="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LANGUAGE FOCUS</span>
            </div>

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(clinic.rules || []).map(r => `
                <div class="p-3 bg-purple-50/50 border border-purple-200 rounded-lg space-y-1">
                  <span class="text-xs font-black text-purple-900 font-mono">${r.term}</span>
                  <p class="text-[11px] text-slate-600">${r.meaning}</p>
                  <p class="text-[11px] text-purple-800 italic pt-1 border-t border-purple-100">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>

            <!-- Practical Oral Drills -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Practical Spoken Drills (In Pairs):</h5>
              <div class="space-y-2">
                ${(clinic.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="space-y-0.5">
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Drill ${d.id}</span>
                      <p class="text-xs font-bold text-slate-800">${d.prompt}</p>
                    </div>
                    <div class="shrink-0">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                        Reveal Model Spoken Response
                      </button>
                      <div class="hidden text-xs text-blue-900 font-medium bg-blue-50 p-2 rounded border border-blue-200 mt-1 sm:max-w-md">
                        &ldquo;${d.targetAnswer}&rdquo;
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Interactive Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Spoken Role-Play (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed">${roleplay.situation || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 shadow-2xs flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900 border-b border-slate-100 pb-1.5">${r.role}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-1.5">${r.instructions}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Observer Checklist & Useful Phrases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Peer Observer Checklist:</h5>
                <ul class="space-y-1 text-[11px] text-slate-600">
                  ${(roleplay.checklist || []).map(c => `
                    <li class="flex items-center gap-1.5">
                      <input type="checkbox" class="rounded text-blue-600">
                      <span>${c}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Key Communicative Phrases:</h5>
                <ul class="space-y-1 text-[11px] text-slate-700 italic">
                  ${(roleplay.phrases || []).map(p => `<li>&bull; &ldquo;${p}&rdquo;</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SAFETY ANALYSIS</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(safety.steps || []).map(s => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center">${s.step}</span>
                    <h5 class="text-xs font-bold text-slate-900">${s.title}</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">${s.text}</p>
                </div>
              `).join('')}
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
                <span id="notes-status-s5" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('5')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Departure Briefing & Storm Diversion Routing Notes:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s5" oninput="window.saveLessonNote('5', 'roleplay', this.value)" rows="3" placeholder="e.g., GAILLAC 4A departure briefed: Climb runway heading 142° to 3,000 ft, turn left direct GAI VOR. Weather avoidance: Requested 20° left heading at 4,500 ft to clear CB cell; approved by ATC to FL090..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('5', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s5" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('5', 'roleplay') : '') || '[No simulation notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Departure Route Deviation & Level Bust Safety Record:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s5" oninput="window.saveLessonNote('5', 'safety', this.value)" rows="3" placeholder="e.g., Verified Minimum Safe Altitude (MSA 4,200 ft). Cross-checked terrain floor to south (Pyrenees sector 7,800 ft). Maintained sterile cockpit and 100% verbal readback of tactical headings..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('5', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s5" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('5', 'safety') : '') || '[No safety check decision recorded]'}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    function renderLessonContentTabSession6(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      if (!bodyEl) return;
      const content = sessionData.lessonContent || {};
      const hero = content.hero || {};
      const opening = content.openingSession || {};
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const roleplay = content.roleplaySimulation || {};
      const safety = content.safetyCheck || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 6</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Approach Plates: Final Corridors & Go-Around Paths'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session6_banner.jpg'}" alt="${hero.title || 'Approach Plates: Final Corridors & Go-Around Paths'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card6.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Approach Plates: Final Corridors & Go-Around Paths'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || ''}</p>
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
              <div class="flex flex-wrap items-center gap-1.5">
                ${(opening.modeBadges || []).map(b => `<span class="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200">${b}</span>`).join('')}
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
                  ${(opening.instructions || []).map(inst => `<li>${inst}</li>`).join('')}
                </ul>
              </div>
              <div class="space-y-1.5 bg-white p-2.5 rounded border border-slate-200">
                <span class="font-bold text-slate-800 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"/></svg>
                  Teaching Staff Notes:
                </span>
                <p class="text-[11px] text-slate-600 leading-relaxed">${opening.teacherNotes || ''}</p>
              </div>
            </div>

            <!-- Spoken Discussion Prompts -->
            <div class="space-y-3 pt-2">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Opening Discussion Questions:</h5>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${(opening.newsPrompts || []).map((p, idx) => `
                  <div class="p-3 bg-white border border-slate-200 rounded-lg shadow-2xs flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between text-[11px] font-bold text-slate-400 mb-1">
                        <span>QUESTION 0${idx + 1}</span>
                        <span class="text-blue-600">Discuss with Partner</span>
                      </div>
                      <p class="text-xs font-bold text-slate-800 mb-2">${p.question}</p>
                    </div>
                    <div class="pt-2 border-t border-slate-100">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer flex items-center gap-1">
                        <span>Show Sample Spoken Answers</span>
                        <svg class="w-3 h-3" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                      </button>
                      <div class="hidden mt-2 p-2 bg-slate-50 rounded text-[11px] text-slate-600 space-y-1.5 border border-slate-200">
                        ${(p.exampleAnswers || []).map(ans => `<p class="leading-relaxed">&ldquo;${ans}&rdquo;</p>`).join('')}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Entry Spot-Check Diagnostics -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <div class="flex items-center justify-between">
                <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Entry Spot-Check Diagnostic (4 Questions):</h5>
                <span class="text-[11px] font-medium text-slate-500">Test baseline comprehension</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${(opening.spotCheckQuestions || []).map(q => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                    <p class="text-xs font-bold text-slate-900">${q.id}. ${q.question}</p>
                    <div class="space-y-1">
                      ${q.options.map((opt, oIdx) => `
                        <div class="text-[11px] text-slate-700 flex items-start gap-1.5">
                          <span class="font-bold text-slate-500">${String.fromCharCode(65 + oIdx)})</span>
                          <span>${opt}</span>
                        </div>
                      `).join('')}
                    </div>
                    <div class="pt-2 border-t border-slate-200 flex items-center justify-between">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-black text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded cursor-pointer">
                        Reveal Answer
                      </button>
                      <div class="hidden text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">
                        ${q.explanation}
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the Chart Extract -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">15-45m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${chart.title || 'Activity 2: Reading the Chart Extract (30 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">${chart.badge || 'CHART EXTRACT'}</span>
            </div>

            <!-- Chart Terminal Header -->
            <div class="p-3.5 bg-slate-900 text-white rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span class="text-xs font-mono font-bold tracking-wide uppercase">${chart.callsign || 'AUTHENTIC SIMULATION'}</span>
              </div>
              <span class="text-[10px] font-mono text-slate-300">ICAO / EASA STANDARD SPECIFICATION</span>
            </div>

            <!-- Structured Extract Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              ${(chart.sections || []).map(sec => `
                <div class="p-4 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                  <h5 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1.5">${sec.heading}</h5>
                  <ul class="space-y-1.5 text-xs text-slate-700">
                    ${sec.details.map(d => `
                      <li class="flex items-start gap-2">
                        <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                        <span class="leading-relaxed">${d}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">45-70m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${clinic.title || 'Activity 3: Language Clinic (25 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${clinic.summary || ''}</p>
                </div>
              </div>
              <span class="bg-purple-100 text-purple-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LANGUAGE FOCUS</span>
            </div>

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(clinic.rules || []).map(r => `
                <div class="p-3 bg-purple-50/50 border border-purple-200 rounded-lg space-y-1">
                  <span class="text-xs font-black text-purple-900 font-mono">${r.term}</span>
                  <p class="text-[11px] text-slate-600">${r.meaning}</p>
                  <p class="text-[11px] text-purple-800 italic pt-1 border-t border-purple-100">&ldquo;${r.example}&rdquo;</p>
                </div>
              `).join('')}
            </div>

            <!-- Practical Oral Drills -->
            <div class="space-y-3 pt-3 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Practical Spoken Drills (In Pairs):</h5>
              <div class="space-y-2">
                ${(clinic.drills || []).map(d => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div class="space-y-0.5">
                      <span class="text-[10px] font-bold text-slate-400 uppercase">Drill ${d.id}</span>
                      <p class="text-xs font-bold text-slate-800">${d.prompt}</p>
                    </div>
                    <div class="shrink-0">
                      <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                        Reveal Model Spoken Response
                      </button>
                      <div class="hidden text-xs text-blue-900 font-medium bg-blue-50 p-2 rounded border border-blue-200 mt-1 sm:max-w-md">
                        &ldquo;${d.targetAnswer}&rdquo;
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Interactive Spoken Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">70-105m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 4: Spoken Role-Play (35 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed">${roleplay.situation || ''}</p>
            </div>

            <!-- Role Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(roleplay.roles || []).map(r => `
                <div class="p-3.5 bg-white border border-slate-200 rounded-lg space-y-2 shadow-2xs flex flex-col justify-between">
                  <div>
                    <h5 class="text-xs font-black text-slate-900 border-b border-slate-100 pb-1.5">${r.role}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed pt-1.5">${r.instructions}</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Observer Checklist & Useful Phrases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Peer Observer Checklist:</h5>
                <ul class="space-y-1 text-[11px] text-slate-600">
                  ${(roleplay.checklist || []).map(c => `
                    <li class="flex items-center gap-1.5">
                      <input type="checkbox" class="rounded text-blue-600">
                      <span>${c}</span>
                    </li>
                  `).join('')}
                </ul>
              </div>
              <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                <h5 class="text-xs font-bold text-slate-800">Key Communicative Phrases:</h5>
                <ul class="space-y-1 text-[11px] text-slate-700 italic">
                  ${(roleplay.phrases || []).map(p => `<li>&bull; &ldquo;${p}&rdquo;</li>`).join('')}
                </ul>
              </div>
            </div>
          </div>

          <!-- Activity 5: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">105-120m</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check (15 mins)'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SAFETY ANALYSIS</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${(safety.steps || []).map(s => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                  <div class="flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full bg-slate-800 text-white font-bold text-[10px] flex items-center justify-center">${s.step}</span>
                    <h5 class="text-xs font-bold text-slate-900">${s.title}</h5>
                  </div>
                  <p class="text-[11px] text-slate-600 leading-relaxed whitespace-pre-line">${s.text}</p>
                </div>
              `).join('')}
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
                <span id="notes-status-s6" class="font-bold text-emerald-600 flex items-center gap-1">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"/></svg>
                  <span>Auto-saved locally</span>
                </span>
                <button type="button" onclick="window.clearLessonNotes('6')" class="text-slate-400 hover:text-rose-600 underline cursor-pointer no-print ml-2 font-medium">Clear</button>
              </div>
            </div>

            <div class="space-y-4">
              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>1. Final Approach Briefing & Go-Around Execution Notes:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s6" oninput="window.saveLessonNote('6', 'roleplay', this.value)" rows="3" placeholder="e.g., ILS Runway 14L briefed: Localizer 109.3 MHz, inbound track 142°, FAF 5.2 DME at 2,000 ft, DA 692 ft (DH 200 ft). Go-around called at 400 ft due to vehicle on runway: climbed straight ahead to 2,500 ft, flaps 15, gear up..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s6" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('6', 'roleplay') : '') || '[No simulation notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Stabilized Approach Criteria & Blame-Free Policy Agreement:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s6" oninput="window.saveLessonNote('6', 'safety', this.value)" rows="3" placeholder="e.g., Enforced 1,000 ft IMC stabilized gate (path, speed -0/+10 kt, sink rate <= 1,000 fpm). Confirmed blame-free go-around policy: all flight crews empowered to abort approach whenever doubt exists..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'safety') : ''}</textarea>
                <div id="print-notes-safety-s6" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('6', 'safety') : '') || '[No safety check decision recorded]'}</div>
              </div>
            </div>
          </div>
        </div>
      `;
    }
