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
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'EASA Rules & Modal Precision'}</h3>
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
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'EASA Rules & Modal Precision'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Navigating Airport Regulations, Modal Authority & Safeguarding in Plain English'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'GSEA Student Training (TSEEAC Airside & Safeguarding Focus)'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up & The Modal Spectrum -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up & The Modal Spectrum'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Discuss document reading hurdles, test diagnostic entry knowledge, and explore the modal commitment ladder.'}</p>
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
                      <button type="button" onclick="const el=document.getElementById('diagnostic-ans-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Modal Commitment Spectrum Table (Bolstered Component) -->
            <div class="mt-4 p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-slate-200 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black px-2 py-0.5 rounded bg-indigo-100 text-indigo-800">LANGUAGE MATRIX</span>
                  <h5 class="text-xs sm:text-sm font-bold text-slate-900">The Modal Authority Spectrum in Airport Operations</h5>
                </div>
                <span class="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Spoken Authority & Commitment</span>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed">In European aerodrome rules (EASA / ICAO), modal verbs convey strict legal authority. Notice how authority steps down from 100% mandatory law to optional recommendations and discretionary guidance:</p>
              <div class="overflow-x-auto rounded-xl border border-slate-200 shadow-2xs">
                <table class="w-full text-xs text-left">
                  <thead class="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th class="p-2.5">Modal Level</th>
                      <th class="p-2.5">Commitment Level</th>
                      <th class="p-2.5">Regulatory Meaning & Rule Type</th>
                      <th class="p-2.5">Tone in Spoken Commands</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 bg-white">
                    ${(opening.modalSpectrum || []).map(m => {
                      const badgeBg = m.color === 'rose' ? 'bg-rose-100 text-rose-800 border-rose-200' :
                                      m.color === 'red' ? 'bg-red-100 text-red-800 border-red-200' :
                                      m.color === 'amber' ? 'bg-amber-100 text-amber-800 border-amber-200' :
                                      'bg-emerald-100 text-emerald-800 border-emerald-200';
                      return `
                        <tr class="hover:bg-slate-50">
                          <td class="p-2.5 font-black font-mono">
                            <span class="px-2 py-0.5 rounded text-[11px] font-bold border ${badgeBg}">${m.level}</span>
                          </td>
                          <td class="p-2.5 font-bold text-slate-800">${m.commitment}</td>
                          <td class="p-2.5 text-slate-600">${m.desc}</td>
                          <td class="p-2.5 font-medium italic text-slate-700">${m.tone}</td>
                        </tr>
                      `;
                    }).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading the EASA Crane Rule & Jargon Buster -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading the EASA Crane Rule & Jargon Buster'}</h4>
                  <p class="text-[11px] text-slate-500">${doc.summary || 'Scan the authentic EASA CS-ADR-DSN extract and decode bureaucratic legal expressions into plain operational English.'}</p>
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

            <!-- Jargon Buster: Bureaucratic Legal English to Plain Operational English (Bolstered Component) -->
            <div class="mt-4 p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-blue-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-blue-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-blue-950">Jargon Buster: Decoding Dense Regulatory English</h5>
                </div>
                <span class="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Paraphrasing Clinic</span>
              </div>
              <p class="text-xs text-blue-900 leading-relaxed">Official EASA and DGAC documents use heavy legalistic boilerplate. Practice translating these 8 formal expressions into clear, natural plain English:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                ${(doc.jargonBuster || []).map(jb => `
                  <div class="p-3 bg-white border border-blue-200 rounded-lg shadow-2xs space-y-2 flex flex-col justify-between">
                    <div>
                      <div class="flex items-center justify-between gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-blue-600">Formal Phrase 0${jb.id}</span>
                        <span class="text-[10px] font-bold text-slate-400 bg-slate-100 px-1.5 py-0.5 rounded">${jb.note}</span>
                      </div>
                      <p class="text-xs font-black font-mono text-slate-800 mt-1">&ldquo;${jb.formal}&rdquo;</p>
                    </div>
                    <div>
                      <div id="jargon-ans-s1-${jb.id}" class="hidden p-2 bg-emerald-50 border border-emerald-200 rounded text-xs text-emerald-950 font-bold mb-1.5">
                        <span class="text-emerald-700 text-[10px] font-black uppercase block">Plain English Equivalent:</span>
                        ${jb.plain}
                      </div>
                      <button type="button" onclick="const el=document.getElementById('jargon-ans-s1-${jb.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Decode to Plain English' : 'Hide Translation';" class="no-print inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 hover:text-blue-900 cursor-pointer">
                        <span>Decode to Plain English</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Language Clinic: Words for Rules & Direct Phrasing -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: Language Clinic: Words for Rules & Direct Phrasing'}</h4>
                  <p class="text-[11px] text-slate-500">${rules.summary || 'Master modal commitment through practical drills and transform heavy nominalizations into direct ramp instructions.'}</p>
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
                      <td class="p-2.5 italic text-slate-600">&ldquo;${r.example}&rdquo;</td>
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

            <!-- De-Nominalization Clinic (Bolstered Component) -->
            <div class="mt-4 p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-indigo-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-indigo-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-indigo-950">De-Nominalization Clinic: From Heavy Nouns to Direct Ramp Commands</h5>
                </div>
                <span class="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Spoken Clarity</span>
              </div>
              <p class="text-xs text-indigo-900 leading-relaxed">Regulations love long nouns (<em>implementation, notification, cessation, placement</em>). On the ramp, pilots, handlers, and airside drivers need direct, active verbs. Transform these 3 heavy regulatory extracts into direct spoken instructions:</p>
              <div class="space-y-3">
                ${(rules.denominalizationClinic || []).map(item => `
                  <div class="p-3.5 bg-white border border-indigo-200 rounded-xl space-y-2.5">
                    <div class="space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-indigo-700">Case 0${item.id} • Heavy Written Regulation:</span>
                      <p class="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200 leading-relaxed">&ldquo;${item.legal}&rdquo;</p>
                    </div>
                    <div id="denom-ans-s1-${item.id}" class="hidden p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                      <div class="flex items-center gap-2">
                        <span class="text-emerald-800 font-black uppercase text-[10px] tracking-wider">&check; Direct Spoken Ramp Phrasing:</span>
                      </div>
                      <p class="font-bold text-emerald-950 text-xs sm:text-sm">&ldquo;${item.direct}&rdquo;</p>
                      <p class="text-[11px] text-emerald-800/90 pt-1 font-medium">${item.explanation}</p>
                    </div>
                    <button type="button" onclick="const el=document.getElementById('denom-ans-s1-${item.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Direct Ramp Phrasing' : 'Hide Ramp Phrasing';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 hover:text-indigo-950 cursor-pointer">
                      <span>Reveal Direct Ramp Phrasing</span> &rarr;
                    </button>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Interaction: Spot the Bug & Contractor Role-Play -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Spoken Interaction: Spot the Bug & Contractor Role-Play'}</h4>
                  <p class="text-[11px] text-slate-500">${spoken.summary || 'Play the Spot the Compliance Bug listening barrier game, then role-play the 3-student Runway 09 crane safeguarding negotiation.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Spoken Interaction</span>
            </div>

            ${renderActivityInstructions(spoken, theme)}

            <!-- Interactive Auditory Discrimination Game: Spot the Compliance Bug (Bolstered Component) -->
            <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-3">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-purple-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" class="text-purple-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  <div>
                    <h5 class="text-xs sm:text-sm font-black text-purple-950">${(spoken.spotTheBug && spoken.spotTheBug.title) || 'Interactive Listening Barrier Game: Spot the Compliance Bug'}</h5>
                    <p class="text-[11px] text-purple-800">${(spoken.spotTheBug && spoken.spotTheBug.instructions) || 'Student A reads aloud. Student B listens to catch errors in modal tone, numbers, or deadlines.'}</p>
                  </div>
                </div>
                <span class="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200 shrink-0">Auditory Barrier Game</span>
              </div>

              <!-- Checking & Interruption Phrases -->
              <div class="p-3 bg-white border border-purple-200 rounded-lg space-y-1.5">
                <span class="text-[10px] font-black uppercase tracking-wider text-purple-900 block">Target Spoken Interruption Phrases (Use these as soon as you hear a bug):</span>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  ${((spoken.spotTheBug && spoken.spotTheBug.checkingPhrases) || []).map(ph => `
                    <div class="p-2 bg-purple-50/60 border border-purple-100 rounded text-[11px] font-semibold text-purple-950 flex items-center gap-2">
                      <span class="text-purple-600 font-bold">&bull;</span>
                      <span>&ldquo;${ph}&rdquo;</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Interactive Pair Scenario Cards -->
              <div class="space-y-3 pt-1">
                ${((spoken.spotTheBug && spoken.spotTheBug.pairs) || []).map(pair => `
                  <div class="p-3.5 bg-white border border-purple-200/90 rounded-xl space-y-3 shadow-2xs">
                    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-purple-100 pb-2">
                      <span class="text-xs font-black text-purple-950">Scenario ${pair.id}: ${pair.topic}</span>
                      <div class="flex items-center gap-1.5 no-print">
                        <button type="button" onclick="document.getElementById('bug-view-a-${pair.id}').classList.remove('hidden'); document.getElementById('bug-view-b-${pair.id}').classList.add('hidden'); this.className='px-2 py-0.5 rounded text-[10px] font-bold bg-purple-700 text-white cursor-pointer'; this.nextElementSibling.className='px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer';" class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-700 text-white cursor-pointer">Student A (Reader)</button>
                        <button type="button" onclick="document.getElementById('bug-view-b-${pair.id}').classList.remove('hidden'); document.getElementById('bug-view-a-${pair.id}').classList.add('hidden'); this.className='px-2 py-0.5 rounded text-[10px] font-bold bg-purple-700 text-white cursor-pointer'; this.previousElementSibling.className='px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer';" class="px-2 py-0.5 rounded text-[10px] font-bold bg-purple-100 text-purple-800 hover:bg-purple-200 cursor-pointer">Student B (Detector)</button>
                      </div>
                    </div>

                    <!-- Student A View (Clean Official Copy) -->
                    <div id="bug-view-a-${pair.id}" class="space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">Student A • Official Text (Read aloud at normal pace):</span>
                      </div>
                      <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg font-mono text-xs text-slate-800 leading-relaxed select-text">
                        ${pair.studentA}
                      </div>
                    </div>

                    <!-- Student B View (Bugged Copy) -->
                    <div id="bug-view-b-${pair.id}" class="hidden space-y-2">
                      <div class="flex items-center justify-between">
                        <span class="text-[10px] font-black uppercase text-rose-800 bg-rose-100 px-2 py-0.5 rounded border border-rose-200">Student B • Bugged Copy (Listen to Partner &amp; Catch Errors):</span>
                      </div>
                      <div class="p-3 bg-rose-50/50 border border-rose-200 rounded-lg font-mono text-xs text-slate-800 leading-relaxed select-text">
                        ${pair.studentB}
                      </div>
                      <div>
                        <div id="bug-reveal-${pair.id}" class="hidden p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs space-y-1.5 mt-2">
                          <span class="text-[10px] font-black uppercase tracking-wider text-purple-900 block">Bugs Placed in Student B's Text:</span>
                          <ul class="list-disc pl-4 space-y-1 text-[11px] text-purple-950 font-medium">
                            ${pair.bugs.map(b => `<li>${b}</li>`).join('')}
                          </ul>
                        </div>
                        <button type="button" onclick="const el=document.getElementById('bug-reveal-${pair.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal 3 Intentional Bugs' : 'Hide Bugs';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-700 hover:text-purple-950 cursor-pointer mt-1">
                          <span>Reveal 3 Intentional Bugs</span> &rarr;
                        </button>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Scenario Box -->
            <div class="p-4 bg-sky-50/80 border border-sky-200 rounded-xl space-y-2 text-xs mt-4">
              <div class="flex items-center gap-2 text-sky-950 font-bold">
                <svg width="16" height="16" class="text-sky-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>The Operational Scenario: Runway 09 Crane Safeguarding Negotiation</span>
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

          <!-- Activity 5: Safety Check & Rules to Reality -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: What Could Go Wrong?'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || 'Collaborative 4-step safety check and 60-second unscripted ramp reality explanation.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Safety Analysis</span>
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

            <!-- Rules to Reality Wrap-Up (Bolstered Component) -->
            <div class="mt-4 p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-amber-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">${(safety.rulesToReality && safety.rulesToReality.title) || 'Rules to Reality: 60-Second Pair Spoken Wrap-Up'}</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">Spoken Fluency</span>
              </div>
              <p class="text-xs text-amber-900 leading-relaxed font-medium">${(safety.rulesToReality && safety.rulesToReality.prompt) || 'Pick one operational rule from today (crane height, FOD, apron speed, refuelling in lightning, or glycol runoff). In pairs, deliver an unscripted 60-second operational summary explaining: 1) What is the exact rule? 2) Why do ground teams sometimes ignore it? 3) What is the real-world safety consequence on the ramp?'}</p>
            </div>
          </div>

          <!-- Activity 6: Operational Notes & Safeguarding Decision -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes &amp; Safeguarding Decision</h4>
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
                  <span>2. Safeguarding Record &amp; NOTAM Decision:</span>
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
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Safety Alerts & Ramp Briefings'}</h3>
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
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Safety Alerts & Ramp Briefings'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Operational Text Simplification, Chunking & 90-Second Stand-Up Briefings'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'GSEA Student Training (TSEEAC Airside Safety & Ground Operations Focus)'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-bold text-slate-900">${hero.duration || '120 Minutes'}</span>
              </div>
            </div>
          </div>

          <!-- Activity 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up: Modal Quick-Fire & Ramp Hazard Scan'}</h4>
                  <p class="text-[11px] text-slate-500">${opening.summary || 'Rapid retrieval sprint checking modal categories and pair brainstorming on apron danger zones.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Opening Warm-Up</span>
            </div>

            ${renderActivityInstructions(opening, theme)}

            <!-- Modal Quick-Fire Sprint (Bolstered Component) -->
            <div class="p-4 bg-blue-50/70 border border-blue-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-blue-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black px-2 py-0.5 rounded bg-blue-200 text-blue-900">REVIEW SPRINT</span>
                  <h5 class="text-xs sm:text-sm font-bold text-blue-950">Modal Quick-Fire: Hard Law (IR) vs. AMC vs. GM / Permission</h5>
                </div>
                <span class="text-[10px] font-bold text-blue-700 uppercase tracking-wider">Session 1 Retrieval</span>
              </div>
              <p class="text-xs text-blue-900 leading-relaxed">Identify whether each operational statement represents <strong>Hard Law (IR)</strong>, an <strong>Acceptable Means of Compliance (AMC)</strong>, or <strong>Guidance Material / Statutory Permission (GM)</strong>. Look for the modal anchor:</p>
              <div class="space-y-2.5">
                ${(opening.reviewSprint || []).map(item => `
                  <div class="p-3 bg-white border border-blue-200/90 rounded-lg shadow-2xs space-y-2">
                    <div class="flex items-start justify-between gap-2">
                      <div class="flex items-start gap-2">
                        <span class="text-blue-800 font-black text-xs shrink-0 mt-0.5">0${item.id}.</span>
                        <p class="text-xs font-medium text-slate-800 leading-snug">&ldquo;${item.statement}&rdquo;</p>
                      </div>
                    </div>
                    <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <button type="button" onclick="const el=document.getElementById('sprint-ans-s2-${item.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Check Category &amp; Rationale' : 'Hide Rationale';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-blue-700 hover:text-blue-950 cursor-pointer">
                        <span>Check Category &amp; Rationale</span> &rarr;
                      </button>
                      <div id="sprint-ans-s2-${item.id}" class="hidden p-2.5 bg-blue-50 border border-blue-200 rounded-md text-[11px] text-blue-950 w-full space-y-1">
                        <div class="flex items-center gap-2">
                          <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase ${item.badgeColor === 'rose' ? 'bg-rose-100 text-rose-800 border border-rose-200' : (item.badgeColor === 'amber' ? 'bg-amber-100 text-amber-800 border border-amber-200' : 'bg-emerald-100 text-emerald-800 border border-emerald-200')}">${item.type}</span>
                          <span class="text-[10px] font-bold text-slate-500 font-mono">Anchor: ${item.anchor}</span>
                        </div>
                        <p class="leading-relaxed font-medium">${item.explanation}</p>
                      </div>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

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
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">${(opening.diagnostic && opening.diagnostic.title) || 'Safety Alerts & Oral Delivery Entry Spot-Check'}</h5>
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
                      <button type="button" onclick="const el=document.getElementById('diagnostic-ans-s2-${q.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Answer' : 'Hide Answer';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-600 hover:text-slate-900 cursor-pointer">
                        <span>Reveal Answer</span> &rarr;
                      </button>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 2: Reading Authentic Safety Bulletins -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading Authentic Safety Bulletins'}</h4>
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
                  <span>${doc.docRef || 'EASA SIB No. 2023-08'}</span>
                </div>
                <span class="bg-amber-800 text-amber-100 text-[10px] font-bold px-2 py-0.5 rounded">AUTHENTIC EASA EXTRACT</span>
              </div>
              <div class="p-4 font-mono text-[11px] leading-relaxed whitespace-pre-wrap text-slate-200 bg-slate-900/95 max-h-96 overflow-y-auto select-text">${doc.docText || ''}</div>
            </div>

            <!-- Reading Questions -->
            <div class="space-y-3 pt-1">
              <h5 class="text-xs sm:text-sm font-bold text-slate-800">Reading Comprehension Check (Scan the text above):</h5>
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

          <!-- Activity 3: The Simplification Engine, 3-Bullet Rule & Chunking Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: The Simplification Engine, 3-Bullet Rule & Chunking Clinic'}</h4>
                  <p class="text-[11px] text-slate-500">${rules.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Language &amp; Delivery Clinic</span>
            </div>

            ${renderActivityInstructions(rules, theme)}

            <!-- The Simplification Engine Box -->
            <div class="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-indigo-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-indigo-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-indigo-950">The Simplification Engine: De-Nominalization &amp; Voice Reversal</h5>
                </div>
                <span class="text-[10px] font-bold text-indigo-700 uppercase tracking-wider">Methodology</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-2.5 text-xs">
                ${((rules.simplificationEngine && rules.simplificationEngine.steps) || []).map(s => `
                  <div class="p-3 bg-white border border-indigo-200 rounded-lg shadow-2xs space-y-1.5">
                    <span class="text-[10px] font-black uppercase text-indigo-800 bg-indigo-100 px-1.5 py-0.5 rounded">Step 0${s.num}</span>
                    <h6 class="font-bold text-slate-900 text-xs leading-snug">${s.title}</h6>
                    <p class="text-[11px] font-mono text-slate-600 italic bg-slate-50 p-1.5 rounded border border-slate-100">${s.example}</p>
                  </div>
                `).join('')}
              </div>

              <!-- Task A Conversion Drills -->
              <div class="space-y-3 pt-2">
                <h6 class="text-xs font-bold text-indigo-950">Task A: Convert Heavy Regulatory Statements into Active Commands</h6>
                <div class="space-y-3">
                  ${((rules.simplificationEngine && rules.simplificationEngine.taskA) || []).map(t => `
                    <div class="p-3.5 bg-white border border-indigo-200/90 rounded-xl space-y-2.5 shadow-2xs">
                      <div>
                        <span class="text-[10px] font-black uppercase tracking-wider text-indigo-700">SIB Regulatory Formulation 0${t.id}:</span>
                        <p class="text-xs font-mono text-slate-700 bg-slate-50 p-2.5 rounded border border-slate-200 leading-relaxed mt-1">&ldquo;${t.sibText}&rdquo;</p>
                      </div>
                      <div id="taska-ans-s2-${t.id}" class="hidden p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs space-y-1">
                        <span class="text-[10px] font-black uppercase text-emerald-800 block">&check; Operational Active Command:</span>
                        <p class="font-bold text-emerald-950 text-xs sm:text-sm">&ldquo;${t.activeCommand}&rdquo;</p>
                        <p class="text-[11px] text-emerald-800/90 pt-1 font-medium">${t.rationale}</p>
                      </div>
                      <button type="button" onclick="const el=document.getElementById('taska-ans-s2-${t.id}'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Active Command' : 'Hide Command';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-indigo-700 hover:text-indigo-950 cursor-pointer">
                        <span>Reveal Active Command</span> &rarr;
                      </button>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- The Executive 3-Bullet Rule Challenge -->
            <div class="p-4 bg-amber-50/70 border border-amber-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <span class="text-xs font-black px-2 py-0.5 rounded bg-amber-200 text-amber-900">EXECUTIVE CHALLENGE</span>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">The "Executive 3-Bullet Rule" Challenge (EASA SIB No. 2023-08)</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Actionable Directives</span>
              </div>
              <p class="text-xs text-amber-900 leading-relaxed">Under operational pressure, ground handlers only remember concise commands. Reduce the dense lithium battery bulletin to 3 bullets under strict constraints:</p>
              <div class="p-3 bg-white border border-amber-200 rounded-lg space-y-1.5 text-xs text-slate-800 font-medium">
                ${((rules.threeBulletRule && rules.threeBulletRule.constraints) || []).map(c => `
                  <div class="flex items-center gap-2">
                    <span class="text-amber-600 font-bold">&bull;</span>
                    <span>${c}</span>
                  </div>
                `).join('')}
              </div>
              <div>
                <button type="button" onclick="const el=document.getElementById('three-bullet-ans-s2'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'View Model 3-Bullet Summary' : 'Hide Model Summary';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-amber-800 hover:text-amber-950 cursor-pointer mt-1">
                  <span>View Model 3-Bullet Summary</span> &rarr;
                </button>
                <div id="three-bullet-ans-s2" class="hidden mt-2 p-3 bg-white border border-amber-300 rounded-lg text-xs space-y-2">
                  <span class="text-[10px] font-black uppercase tracking-wider text-amber-900 block">Model Answers (All under 12 words with strong action verbs):</span>
                  ${((rules.threeBulletRule && rules.threeBulletRule.modelAnswers) || []).map(m => `
                    <div class="p-2.5 bg-amber-50/70 border border-amber-200 rounded flex items-start justify-between gap-2">
                      <div class="flex items-start gap-2">
                        <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">0${m.bullet}.</span>
                        <p class="text-xs font-bold text-slate-900">&ldquo;${m.text}&rdquo;</p>
                      </div>
                      <span class="text-[10px] font-mono font-bold bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded shrink-0">${m.wordCount} words</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>

            <!-- Pronunciation Clinic: Chunking & Intonation -->
            <div class="p-4 bg-purple-50/70 border border-purple-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between gap-2 border-b border-purple-200/80 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="18" height="18" class="text-purple-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"/></svg>
                  <h5 class="text-xs sm:text-sm font-black text-purple-950">${(rules.chunkingClinic && rules.chunkingClinic.title) || 'Pronunciation Clinic: Text Chunking & Intonation'}</h5>
                </div>
                <span class="text-[10px] font-bold text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">Avoid 'Flat Delivery'</span>
              </div>
              <p class="text-xs text-purple-900 leading-relaxed">${(rules.chunkingClinic && rules.chunkingClinic.explanation) || 'Chunking divides long regulatory sentences into cognitive units separated by breath pauses.'}</p>

              <!-- Example Chunk -->
              <div class="p-3 bg-white border border-purple-200 rounded-lg space-y-1.5 text-xs">
                <span class="text-[10px] font-black uppercase text-purple-800 block">Example Sentence with Pause Lines (|):</span>
                <p class="font-mono text-purple-950 font-bold bg-purple-50 p-2 rounded border border-purple-100 text-xs sm:text-sm">&ldquo;${(rules.chunkingClinic && rules.chunkingClinic.example && rules.chunkingClinic.example.chunked) || ''}&rdquo;</p>
              </div>

              <!-- Drill Sentence -->
              <div class="p-3.5 bg-white border border-purple-200 rounded-xl space-y-2 text-xs">
                <span class="text-[10px] font-black uppercase text-purple-800 block">Drill Sentence (Practice reading aloud with pauses and vocal stress):</span>
                <p class="font-mono text-slate-800 leading-relaxed bg-slate-50 p-2.5 rounded border border-slate-200">&ldquo;${(rules.chunkingClinic && rules.chunkingClinic.drill && rules.chunkingClinic.drill.raw) || ''}&rdquo;</p>
                <div>
                  <button type="button" onclick="const el=document.getElementById('chunk-ans-s2'); el.classList.toggle('hidden'); this.querySelector('span').innerText = el.classList.contains('hidden') ? 'Reveal Rhythmic Chunking &amp; Stressed Words' : 'Hide Rhythm Guide';" class="no-print inline-flex items-center gap-1.5 text-[11px] font-bold text-purple-700 hover:text-purple-950 cursor-pointer mt-1">
                    <span>Reveal Rhythmic Chunking &amp; Stressed Words</span> &rarr;
                  </button>
                  <div id="chunk-ans-s2" class="hidden mt-2 p-3 bg-purple-50 border border-purple-200 rounded-lg space-y-2 text-xs">
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-purple-900 block">Chunking Pattern (| = breath pause):</span>
                      <p class="font-mono font-bold text-purple-950 text-xs sm:text-sm mt-0.5">&ldquo;${(rules.chunkingClinic && rules.chunkingClinic.drill && rules.chunkingClinic.drill.chunked) || ''}&rdquo;</p>
                    </div>
                    <div>
                      <span class="text-[10px] font-black uppercase tracking-wider text-purple-900 block">Operative Stressed Words (Apply vocal emphasis):</span>
                      <div class="flex flex-wrap gap-1.5 mt-1">
                        ${((rules.chunkingClinic && rules.chunkingClinic.drill && rules.chunkingClinic.drill.stressed) || []).map(w => `
                          <span class="px-2 py-0.5 rounded text-[11px] font-black bg-purple-200 text-purple-900 border border-purple-300">${w}</span>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 4: Spoken Simulation: The 90-Second Stand-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Spoken Simulation: The 90-Second Stand-Up'}</h4>
                  <p class="text-[11px] text-slate-500">${spoken.summary || 'Pair simulation delivering a 90-second morning briefing as TSEEAC Airside Safety Officer, with mandatory clarifying questions.'}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Airside Stand-Up Briefing</span>
            </div>

            ${renderActivityInstructions(spoken, theme)}

            <!-- Operational Context Box -->
            <div class="p-4 bg-sky-50/80 border border-sky-200 rounded-xl space-y-2 text-xs">
              <div class="flex items-center gap-2 text-sky-950 font-bold">
                <svg width="16" height="16" class="text-sky-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                <span>Operational Context (06:45 AM Departure Wave):</span>
              </div>
              <p class="text-sky-900 leading-relaxed font-medium">${spoken.context || ''}</p>
            </div>

            <!-- Target Signposts Box -->
            <div class="p-4 bg-emerald-50/70 border border-emerald-200 rounded-xl space-y-2 text-xs">
              <h5 class="font-bold text-emerald-950 flex items-center gap-2">
                <svg width="15" height="15" class="text-emerald-700" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"/></svg>
                <span>Target Briefing Signposts (Use these transitions during your 90-second briefing):</span>
              </h5>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-800">
                ${(spoken.targetSignposts || []).map(ph => `
                  <div class="p-2 bg-white border border-emerald-200 rounded-lg text-[11px] italic text-emerald-950 font-medium shadow-2xs">
                    &ldquo;${ph}&rdquo;
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 3 Stand-Up Scenarios Switcher -->
            <div class="space-y-3 pt-1">
              <div class="flex items-center justify-between border-b border-slate-200 pb-2">
                <h5 class="text-xs sm:text-sm font-bold text-slate-800">Select Briefing Scenario (Rotate roles across pairs):</h5>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">3 Airport Scenarios</span>
              </div>

              ${(spoken.scenarios || []).map((sc, scIdx) => `
                <div class="p-4 bg-white border border-slate-200 rounded-xl space-y-3 shadow-2xs">
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-2">
                    <div class="flex items-center gap-2">
                      <span class="text-xs font-black text-slate-900">${sc.title}</span>
                    </div>
                    <div class="flex items-center gap-1.5 no-print">
                      <button type="button" onclick="document.getElementById('sc-speaker-${sc.id}').classList.remove('hidden'); document.getElementById('sc-interlocutor-${sc.id}').classList.add('hidden'); this.className='px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-700 text-white cursor-pointer'; this.nextElementSibling.className='px-2.5 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer';" class="px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-700 text-white cursor-pointer">Student A (Speaker Briefing)</button>
                      <button type="button" onclick="document.getElementById('sc-interlocutor-${sc.id}').classList.remove('hidden'); document.getElementById('sc-speaker-${sc.id}').classList.add('hidden'); this.className='px-2.5 py-1 rounded text-[10px] font-bold bg-indigo-700 text-white cursor-pointer'; this.previousElementSibling.className='px-2.5 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer';" class="px-2.5 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-700 hover:bg-slate-200 cursor-pointer">Student B (Interlocutor Questions)</button>
                    </div>
                  </div>

                  <!-- Student A: The Speaker -->
                  <div id="sc-speaker-${sc.id}" class="space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-black uppercase text-indigo-800 bg-indigo-100 px-2 py-0.5 rounded border border-indigo-200">${sc.speaker.role}</span>
                      <span class="text-[11px] text-slate-500 font-medium">Mission: ${sc.speaker.mission}</span>
                    </div>
                    <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2">
                      <span class="text-[10px] font-black uppercase tracking-wider text-slate-700 block">Core Information to Convey (Translate into active spoken commands):</span>
                      <ul class="list-disc pl-4 space-y-1.5 text-xs text-slate-800 leading-relaxed">
                        ${sc.speaker.points.map(pt => `<li>${pt}</li>`).join('')}
                      </ul>
                    </div>
                    <div class="p-2.5 bg-indigo-50/60 border border-indigo-100 rounded-lg text-xs space-y-1">
                      <span class="text-[10px] font-black uppercase tracking-wider text-indigo-900 block">Recommended Signposts:</span>
                      <div class="flex flex-wrap gap-1.5">
                        ${sc.speaker.targetSignposts.map(sp => `<span class="italic font-bold text-indigo-950 text-[11px]">&ldquo;${sp}&rdquo;</span>`).join(' • ')}
                      </div>
                    </div>
                  </div>

                  <!-- Student B: The Interlocutor -->
                  <div id="sc-interlocutor-${sc.id}" class="hidden space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-black uppercase text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">${sc.interlocutor.role}</span>
                      <span class="text-[11px] text-slate-500 font-medium">${sc.interlocutor.context}</span>
                    </div>
                    <div class="p-3.5 bg-amber-50/70 border border-amber-200 rounded-lg space-y-2">
                      <div class="flex items-center gap-2">
                        <span class="text-[10px] font-black uppercase tracking-wider text-amber-900 block">Mandatory Clarifying Questions to Ask (Wait until Student A finishes speaking!):</span>
                      </div>
                      <div class="space-y-2 pt-1">
                        ${sc.interlocutor.mandatoryQuestions.map((q, qIdx) => `
                          <div class="p-2.5 bg-white border border-amber-200 rounded-md shadow-2xs flex items-start gap-2">
                            <span class="text-amber-800 font-black text-xs shrink-0 mt-0.5">Q${qIdx + 1}.</span>
                            <p class="text-xs font-bold text-slate-900 leading-snug">&ldquo;${q}&rdquo;</p>
                          </div>
                        `).join('')}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 5: Safety Check & Reality Wrap-Up -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: What Could Go Wrong?'}</h4>
                  <p class="text-[11px] text-slate-500">${safety.summary || ''}</p>
                </div>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider shrink-0">Safety Analysis</span>
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

            <!-- Rules to Reality Wrap-Up Box -->
            <div class="mt-4 p-4 bg-amber-50/80 border border-amber-200 rounded-xl space-y-2.5">
              <div class="flex items-center justify-between gap-2 border-b border-amber-200 pb-2">
                <div class="flex items-center gap-2">
                  <svg width="16" height="16" class="text-amber-700 shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  <h5 class="text-xs sm:text-sm font-bold text-amber-950">${(safety.rulesToReality && safety.rulesToReality.title) || 'Rules to Reality: 60-Second Stand-Up Spoken Wrap-Up'}</h5>
                </div>
                <span class="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">Spoken Fluency</span>
              </div>
              <p class="text-xs text-amber-900 leading-relaxed font-medium">${(safety.rulesToReality && safety.rulesToReality.prompt) || 'In pairs, deliver an unscripted 60-second operational summary.'}</p>
            </div>
          </div>

          <!-- Activity 6: Operational Notes & Ramp Safety Decision -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-slate-800">NOTES</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">Activity 6: Operational Notes &amp; Ramp Safety Decision</h4>
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
                  <span>1. Stand-Up Briefing Takeaways &amp; Operational Solutions:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s2" oninput="window.saveLessonNote('2', 'roleplay', this.value)" rows="3" placeholder="e.g., Stand 12 designated for yellow containment drum. Confirmed ramp procedure: zero water on lithium cells, 3-minute radio alert to ASOC via VHF Channel 2. Contingency for full drum: mobilize secondary sand container at Stand 14..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('2', 'roleplay') : ''}</textarea>
                <div id="print-notes-roleplay-s2" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('2', 'roleplay') : '') || '[No briefing notes recorded]'}</div>
              </div>

              <div class="notes-textarea-container">
                <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                  <span>2. Corrective Action Plan (CAP) &amp; Notification Record:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-safety-s2" oninput="window.saveLessonNote('2', 'safety', this.value)" rows="3" placeholder="e.g., Logged SIB briefing completion on DSAC safety portal. Issued 14-day CAP to ground handling provider: verify high-visibility markings, fit speed limiters, conduct daily morning toolbox talks before scheduled departure waves..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('2', 'safety') : ''}</textarea>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up: Keeping Airports Open During Repairs'}</h4>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 2: Reading the Runway Work Request'}</h4>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${rules.title || 'Activity 3: Connecting Words: Giving Reasons & Explaining Conditions'}</h4>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${spoken.title || 'Activity 4: Spoken Briefing: Explaining the Plan to Airline Pilots'}</h4>
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 5: Safety Check: Is it Safe to Land?'}</h4>
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
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 4</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Ground Inspection & Audit Findings'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session4_banner.jpg'}" alt="${hero.title || 'Ground Inspection & Audit Findings'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card4.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Ground Inspection & Audit Findings (Field to Report)'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Translating Airfield Non-Conformities into Spoken Technical Debriefs'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'Airside Safety Inspector / Auditor'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-semibold text-slate-700">2 Hours (Teacher-Paced)</span>
              </div>
            </div>
          </div>

          <!-- Context Alert Box -->
          <div class="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 text-xs sm:text-[13px] leading-relaxed shadow-2xs space-y-1.5">
            <div class="flex items-center gap-2 font-bold text-blue-900 uppercase tracking-wider text-[11px]">
              <svg class="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
              <span>Operational Field Context: Point ADR.AR.C.055</span>
            </div>
            <p>${hero.context || 'Airside operations inspectors conduct daily walkarounds of aprons, taxiways, and holding positions. When physical defects or unsafe handling behaviors are discovered, inspectors must accurately classify the finding under EASA Part-ADR.AR.C.055, deduce how the failure occurred using past modals, and verbally brief airport leadership on immediate corrective actions.'}</p>
          </div>

          <!-- Opening Session: Quick Warm-Up & Vocabulary Recall -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Stage 1: Field Warm-Up</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Opening Warm-Up • Field Observations to Formal Reports'}</h4>
              </div>
              <span class="text-xs font-bold text-slate-500">Pairs / Trios</span>
            </div>
            <p class="text-xs text-slate-600">${opening.instructions || 'Discuss these three real-world inspection questions with your partner before opening the official EASA report:'}</p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
              ${(opening.questions || []).map(q => `
                <div class="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between space-y-2">
                  <div>
                    <span class="inline-block px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-200 text-slate-700 mb-1">Question ${q.num}</span>
                    <p class="text-xs font-semibold text-slate-900 leading-snug">${q.q}</p>
                  </div>
                  <p class="text-[11px] text-slate-500 italic border-t border-slate-200/60 pt-2">💡 ${q.hint}</p>
                </div>
              `).join('')}
            </div>

            ${opening.teacherPrompt ? `
              <div class="p-3 rounded-lg bg-amber-50/80 border border-amber-200 text-amber-950 text-xs">
                <strong>Teacher Tip:</strong> ${opening.teacherPrompt}
              </div>
            ` : ''}
          </div>

          <!-- Activity 1: Authentic EASA Audit Dossier & Field Inspection Exhibits -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
              <div>
                <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-blue-100 text-blue-900 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <span>Part 2: Evidence Review</span>
                </div>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${doc.title || 'Activity 1: EASA Field Audit Dossier & Inspection Exhibits'}</h4>
                <p class="text-xs text-slate-500">${doc.badge || 'Official Oversight Record • EASA/ADR-INSP/2024-012'}</p>
              </div>
              <a href="docs/GSEA_S3_M1_S4_EASA_Airfield_Audit_Report.pdf" target="_blank" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-xs transition-all cursor-pointer shrink-0">
                <span>View Full Inspection PDF &rarr;</span>
              </a>
            </div>

            <p class="text-xs text-slate-600">${doc.summary || 'Review the three field audit exhibits documented during the comprehensive airside inspection of St. Exupéry International Aerodrome (LFSE):'}</p>

            <div class="space-y-3">
              ${(doc.exhibits || []).map(ex => `
                <div class="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-slate-50 transition-colors space-y-2">
                  <div class="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                    <div class="flex items-center gap-2">
                      <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${ex.levelClass}">${ex.level}</span>
                      <strong class="text-xs font-bold text-slate-900">${ex.id} • ${ex.location}</strong>
                    </div>
                    <span class="text-[11px] font-mono text-slate-500">${ex.rule}</span>
                  </div>
                  <h5 class="text-xs font-black text-slate-800">${ex.title}</h5>
                  <p class="text-xs text-slate-700 leading-relaxed">${ex.facts}</p>
                  <div class="p-2.5 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-800 font-medium">
                    <strong class="text-slate-900">Enforcement Action:</strong> ${ex.enforcement}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 2: Grammar Clinic • Past Modal Deductions -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 3: Language for Technical Reasoning</span>
              <h4 class="text-sm sm:text-base font-black text-slate-900 mt-0.5">${rules.title || 'Activity 2: Grammar Clinic • Past Modal Deductions for Root Cause Analysis'}</h4>
              <p class="text-xs text-slate-500">${rules.summary || 'When investigating how an airfield deficiency occurred, safety engineers use past modals to deduce causes based on physical evidence:'}</p>
            </div>

            <!-- Pattern Banner -->
            <div class="p-3 bg-indigo-50 border border-indigo-200 rounded-xl text-center">
              <span class="text-[11px] font-bold text-indigo-900 uppercase tracking-wider block mb-1">Standard Sentence Formula</span>
              <code class="text-xs sm:text-sm font-black text-indigo-950 font-mono">${rules.formula || "Modal Verb (must / could / should / can't) + HAVE + Past Participle (V3)"}</code>
            </div>

            <!-- Rules Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(rules.rules || []).map(r => `
                <div class="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                  <div class="inline-block px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-white border border-slate-300 text-slate-800">${r.modal}</div>
                  <p class="text-xs text-slate-600 font-medium">${r.meaning}</p>
                  <p class="text-xs text-slate-800 italic pt-1 border-t border-slate-200/60">${r.example}</p>
                </div>
              `).join('')}
            </div>

            ${rules.trap ? `
              <div class="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs flex items-center gap-2">
                <span class="text-base shrink-0">⚠️</span>
                <span>${rules.trap}</span>
              </div>
            ` : ''}

            <!-- Practice Items -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <div class="text-xs font-bold text-slate-800 uppercase tracking-wider">Practice: Deduce the Past Cause</div>
              ${(rules.practiceItems || []).map((item, idx) => `
                <div class="p-3 rounded-lg bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs">
                  <p class="text-slate-800 font-medium">${item.prompt}</p>
                  <div class="p-2 bg-emerald-50 border border-emerald-200 rounded text-emerald-950 font-medium">
                    <span class="font-bold text-emerald-900">Model Spoken Deduction:</span> ${item.model}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Activity 3: Spoken Team Challenge • The 3-Photo Ramp Description Workshop -->
          <div class="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
              <div>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700 text-white font-black text-[10px] uppercase tracking-wider mb-1">
                  Part 4: Spoken Picture Description Workshop
                </span>
                <h4 class="text-sm sm:text-base font-black text-emerald-950">Activity 3: Spoken Team Challenge • The 3-Photo Ramp Description Workshop</h4>
                <p class="text-xs text-emerald-800 font-medium">Pairs / Trios Speaking Challenge • Detailed Scene Description &amp; Past Modal Deductions</p>
              </div>
              <span class="inline-flex items-center text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                3 Authentic Ramp Exhibits
              </span>
            </div>

            <!-- Method Scaffold for B1/B2 Learners -->
            <div class="p-3.5 bg-white border border-emerald-300 rounded-xl space-y-2">
              <div class="flex items-center gap-2 text-emerald-950 font-bold text-xs uppercase tracking-wider">
                <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
                <span>The 4-Step Picture Description Method for Pairs &amp; Trios</span>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-emerald-950 font-medium">
                <div class="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100">
                  <strong class="text-emerald-900 block mb-0.5">Step 1: Set the Scene</strong>
                  <span class="text-[11px] text-emerald-800">Foreground, background, aircraft type, equipment, weather.</span>
                </div>
                <div class="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100">
                  <strong class="text-emerald-900 block mb-0.5">Step 2: Ongoing Actions</strong>
                  <span class="text-[11px] text-emerald-800">Use Present Continuous (is driving, are inspecting, is leaking).</span>
                </div>
                <div class="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100">
                  <strong class="text-emerald-900 block mb-0.5">Step 3: Spot the Hazard</strong>
                  <span class="text-[11px] text-emerald-800">Identify the physical non-conformance or safety threat.</span>
                </div>
                <div class="p-2 rounded-lg bg-emerald-50/80 border border-emerald-100">
                  <strong class="text-emerald-900 block mb-0.5">Step 4: Past Modals</strong>
                  <span class="text-[11px] text-emerald-800">Formulate 2 deductions: must have, could have, should have + V3.</span>
                </div>
              </div>
            </div>

            <!-- 3 Rich Interactive Photo Description Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
              
              <!-- Photo 1: Fuel Spill -->
              <div class="p-3.5 bg-white border border-emerald-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-red-100 text-red-800 border border-red-200">Group 1 • Fuel Servicing</span>
                    <span class="text-[10px] font-bold text-slate-400">Level 1 Finding</span>
                  </div>
                  <div class="relative rounded-lg overflow-hidden border border-slate-200 group cursor-pointer" onclick="window.openImageLightbox('images/s3_s4_ramp_fuel_spill.jpg', 'Exhibit 01 • Ramp Fuel Servicing & Spillage Incident')">
                    <img src="images/s3_s4_ramp_fuel_spill.jpg" alt="Ramp Fuel Servicing Spill" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute bottom-1.5 right-1.5 bg-black/75 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                      <span>🔍 Enlarge</span>
                    </div>
                  </div>
                  <h5 class="text-xs font-black text-slate-900">Exhibit 01: Fuel Hydrant Spill & Drain Hazard</h5>
                  <p class="text-[11.5px] text-slate-600 leading-snug">Two ground handlers in neon vests assess an uncontained fuel spill spreading near the hydrant dispenser and an active storm drain.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-950 italic space-y-1">
                  <strong>Model Spoken Description:</strong>
                  <p>&ldquo;In the foreground, a dark puddle of kerosene is spreading across the concrete. Two handlers are observing it. The bowser operator <strong>must have failed to latch</strong> the hose, and the spill <strong>could have entered</strong> the storm drain.&rdquo;</p>
                </div>
              </div>

              <!-- Photo 2: GSE Congestion -->
              <div class="p-3.5 bg-white border border-emerald-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">Group 2 • Airside Traffic</span>
                    <span class="text-[10px] font-bold text-slate-400">Speed & Clearance</span>
                  </div>
                  <div class="relative rounded-lg overflow-hidden border border-slate-200 group cursor-pointer" onclick="window.openImageLightbox('images/s3_s4_ramp_gse_congestion.jpg', 'Exhibit 02 • Airside Traffic & GSE Congestion')">
                    <img src="images/s3_s4_ramp_gse_congestion.jpg" alt="Airside Traffic & GSE Congestion" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute bottom-1.5 right-1.5 bg-black/75 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                      <span>🔍 Enlarge</span>
                    </div>
                  </div>
                  <h5 class="text-xs font-black text-slate-900">Exhibit 02: High-Density GSE Turnaround Traffic</h5>
                  <p class="text-[11.5px] text-slate-600 leading-snug">A baggage tug pulling luggage carts maneuvers near a belt loader and elevated catering truck within narrow aircraft wing clearances.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-950 italic space-y-1">
                  <strong>Model Spoken Description:</strong>
                  <p>&ldquo;In the foreground, a baggage tug is pulling three luggage carts very close to the wing. The drivers <strong>must have been rushing</strong> under turnaround pressure, and a vehicle <strong>could have struck</strong> the engine cowl.&rdquo;</p>
                </div>
              </div>

              <!-- Photo 3: FOD Inspection -->
              <div class="p-3.5 bg-white border border-emerald-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
                <div class="space-y-2">
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-200">Group 3 • FOD Control</span>
                    <span class="text-[10px] font-bold text-slate-400">Engine Ingestion</span>
                  </div>
                  <div class="relative rounded-lg overflow-hidden border border-slate-200 group cursor-pointer" onclick="window.openImageLightbox('images/s3_s4_ramp_fod_inspection.jpg', 'Exhibit 03 • Ramp FOD Walkdown & Debris Scatter')">
                    <img src="images/s3_s4_ramp_fod_inspection.jpg" alt="Ramp FOD Walkdown" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
                    <div class="absolute bottom-1.5 right-1.5 bg-black/75 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                      <span>🔍 Enlarge</span>
                    </div>
                  </div>
                  <h5 class="text-xs font-black text-slate-900">Exhibit 03: Ramp Walkdown & Lockwire Scatter</h5>
                  <p class="text-[11.5px] text-slate-600 leading-snug">Two inspectors conduct a walkdown on the concrete stand. One kneels to examine metallic lockwire offcuts and tags near the engine intake path.</p>
                </div>
                <div class="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-950 italic space-y-1">
                  <strong>Model Spoken Description:</strong>
                  <p>&ldquo;Here an inspector is kneeling to point at metallic wire on the apron. A technician <strong>must have clipped the lockwire</strong> without a collection pouch, and the jet engine <strong>could have ingested</strong> it.&rdquo;</p>
                </div>
              </div>

            </div>

            <!-- Partner B Checking Prompts -->
            <div class="p-3.5 bg-white border border-emerald-300 rounded-xl space-y-2">
              <span class="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">Partner B Role: Active Checking &amp; Questioning Prompts</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950 italic">
                <div class="p-2 bg-emerald-50/60 rounded border border-emerald-100 flex items-start gap-1.5">
                  <span class="text-emerald-600 font-bold shrink-0">&ldquo;</span>
                  <span>Can you point to the exact location of the hazard in the photograph?&rdquo;</span>
                </div>
                <div class="p-2 bg-emerald-50/60 rounded border border-emerald-100 flex items-start gap-1.5">
                  <span class="text-emerald-600 font-bold shrink-0">&ldquo;</span>
                  <span>Why do you say the ground handler must have failed to monitor the hose?&rdquo;</span>
                </div>
                <div class="p-2 bg-emerald-50/60 rounded border border-emerald-100 flex items-start gap-1.5">
                  <span class="text-emerald-600 font-bold shrink-0">&ldquo;</span>
                  <span>What could have happened if the flight crew started the auxiliary power unit?&rdquo;</span>
                </div>
                <div class="p-2 bg-emerald-50/60 rounded border border-emerald-100 flex items-start gap-1.5">
                  <span class="text-emerald-600 font-bold shrink-0">&ldquo;</span>
                  <span>How does your photo justify classifying this as a Level 1 or Level 2 finding?&rdquo;</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Activity 4: Operational Safety Check • Delivering the 3-Bullet Notice -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="border-b border-slate-100 pb-3">
              <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 5: Executive Delivery</span>
              <h4 class="text-sm sm:text-base font-black text-slate-900 mt-0.5">${safety.title || 'Activity 4: Operational Safety Check • Delivering the 3-Bullet Audit Notice'}</h4>
              <p class="text-xs text-slate-500">${safety.instructions || "Synthesize your group's findings and deliver a crisp, 2-minute oral audit debrief addressing the Airport Director. Use this professional 3-bullet template:"}</p>
            </div>

            <!-- Template Structure -->
            <div class="p-3.5 bg-slate-900 text-white rounded-xl space-y-2">
              <span class="text-[10px] font-bold uppercase tracking-wider text-amber-300">Executive Spoken Template</span>
              <div class="space-y-1.5 text-xs text-slate-200 font-medium">
                ${(safety.template || []).map(tpl => `
                  <div class="p-2 bg-slate-800 rounded border border-slate-700">
                    ${tpl}
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Model Response -->
            ${safety.modelResponse ? `
              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Model 2-Minute Oral Debrief</span>
                <p class="text-xs sm:text-[12.5px] text-slate-800 italic leading-relaxed">
                  &ldquo;${safety.modelResponse}&rdquo;
                </p>
              </div>
            ` : ''}
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
      const photoExhibits = content.photoExhibits || [];
      const dossier = content.dossier || {};
      const swissCheese = content.swissCheeseMatrix || {};
      const debrief = content.debriefTask || {};

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 • Session 5</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'Multi-Source Incident Investigation & Root Cause Analysis'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="${hero.image || 'images/s3_m1_session5_investigation.jpg'}" alt="${hero.title || 'Multi-Source Incident Investigation'}" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card5.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">Technical English • Module 1</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'Multi-Source Incident Investigation & Root Cause Analysis'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || 'Reconstructing Airfield Ground Occurrences & Applying the Swiss Cheese Model'}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Target Level:</span>
                <span class="bg-indigo-100 text-indigo-800 font-bold px-2 py-0.5 rounded">${hero.targetLevel || 'CEFR B1–B2'}</span>
                <span class="text-slate-400">&bull;</span>
                <span class="font-bold text-slate-800">Audience:</span>
                <span class="text-slate-600">${hero.roleContext || 'Airside Safety Investigators & Operations'}</span>
              </div>
              <div class="flex items-center gap-2">
                <span class="font-bold text-slate-800">Total Duration:</span>
                <span class="font-semibold text-slate-700">2 Hours (Teacher-Paced)</span>
              </div>
            </div>
          </div>

          <!-- Context Alert Box -->
          <div class="p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-blue-950 text-xs sm:text-[13px] leading-relaxed shadow-2xs space-y-1.5">
            <div class="flex items-center gap-2 font-bold text-blue-900 uppercase tracking-wider text-[11px]">
              <svg class="w-4 h-4 text-blue-600 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/></svg>
              <span>Operational Investigation Context: Occurrence Dossier BEA/EASA-2024-089</span>
            </div>
            <p>Airside occurrences rarely result from a single failure. When an airliner experiences a pushback shear pin fracture or a contaminated runway excursion, safety investigators synthesize fragmented records—ATC voice logs, METAR storm decodes, deferred maintenance logs, and pilot occurrence reports. By applying the Swiss Cheese Model, investigators uncover latent organizational flaws behind active frontline slips.</p>
          </div>

          <!-- Stage 1: Visual Evidence & Photo Description Challenge -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 1: Visual Evidence</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">Occurrence Photo Description Challenge • Reconstructing Physical Causal Chains</h4>
              </div>
              <span class="text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">Interactive Photos</span>
            </div>

            <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              In pairs, inspect the <strong>three photographic evidence exhibits</strong> from Occurrence 2024-089 below. Click any image to enlarge in full-screen lightbox. Practice describing what you see, identifying the physical damage, and deducing the operational trigger using targeted cause-and-effect connectors (<em>stemming from</em>, <em>triggered by</em>, <em>resulting in</em>, <em>attributable to</em>).
            </p>

            <!-- 3 Rich Interactive Photo Description Cards -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-1">
              ${photoExhibits.map((photo, pIdx) => `
                <div class="p-3.5 bg-white border border-emerald-200 rounded-xl shadow-xs space-y-3 flex flex-col justify-between">
                  <div class="space-y-2">
                    <div class="flex items-center justify-between gap-2">
                      <span class="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200">${photo.badge || `Exhibit 0${pIdx + 1}`}</span>
                      <span class="text-[10px] font-bold text-slate-400">Physical Evidence</span>
                    </div>
                    <div class="relative rounded-lg overflow-hidden border border-slate-200 group cursor-pointer" onclick="window.openImageLightbox('${photo.image}', '${photo.title}')">
                      <img src="${photo.image}" alt="${photo.title}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
                      <div class="absolute bottom-1.5 right-1.5 bg-black/75 text-white text-[9px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-xs">
                        <span>🔍 Enlarge</span>
                      </div>
                    </div>
                    <h5 class="text-xs font-black text-slate-900">${photo.title}</h5>
                    <p class="text-[11.5px] text-slate-600 leading-snug">${photo.caption}</p>
                  </div>
                  <div class="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100 text-[11px] text-emerald-950 italic space-y-1">
                    <strong>Model Spoken Causal Description:</strong>
                    <p>&ldquo;${photo.modelSpoken}&rdquo;</p>
                  </div>
                </div>
              `).join('')}
            </div>

            <!-- Spoken Practice Prompts -->
            <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <span class="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">Useful Spoken Connectors for Photo Description:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs text-slate-800">
                <div class="p-2 bg-white rounded border border-slate-200">
                  <strong class="text-rose-700 block">STEM FROM</strong>
                  <span class="text-[11px] text-slate-500">Points backward to background origin</span>
                </div>
                <div class="p-2 bg-white rounded border border-slate-200">
                  <strong class="text-amber-700 block">TRIGGERED BY</strong>
                  <span class="text-[11px] text-slate-500">Identifies the immediate active spark</span>
                </div>
                <div class="p-2 bg-white rounded border border-slate-200">
                  <strong class="text-blue-700 block">RESULTING IN</strong>
                  <span class="text-[11px] text-slate-500">Connects directly to physical outcome</span>
                </div>
                <div class="p-2 bg-white rounded border border-slate-200">
                  <strong class="text-emerald-700 block">ATTRIBUTABLE TO</strong>
                  <span class="text-[11px] text-slate-500">Assigns operational responsibility</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Stage 2: The Multi-Source Incident Dossier -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 2: Evidence Synthesis</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${dossier.title || 'BEA/EASA Technical Incident Dossier • Occurrence Dossier 2024-089'}</h4>
              </div>
              <span class="text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">4-Source Dossier</span>
            </div>

            <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              Use the tab switcher below to inspect the four operational records. Look for contradictions and chronological correlations between ATC instructions, weather deterioration, maintenance items, and pilot statements.
            </p>

            <!-- Dossier Tabs -->
            <div class="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
              <div class="flex flex-wrap border-b border-slate-200 bg-white" id="dossier-tab-header">
                ${(dossier.tabs || []).map((t, tIdx) => `
                  <button type="button" onclick="window.switchDossierTab('${t.id}')" class="dossier-tab-btn px-4 py-2.5 text-xs font-bold border-b-2 transition-all cursor-pointer flex items-center gap-2 ${tIdx === 0 ? 'border-sky-600 text-sky-700 bg-sky-50/50' : 'border-transparent text-slate-500 hover:text-slate-800'}" data-dossier-tab="${t.id}">
                    <span>${t.title}</span>
                  </button>
                `).join('')}
              </div>

              <div class="p-4 sm:p-5" id="dossier-tab-content">
                ${(dossier.tabs || []).map((t, tIdx) => `
                  <div id="dossier-pane-${t.id}" class="dossier-pane space-y-3 ${tIdx === 0 ? '' : 'hidden'}">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-bold text-slate-700 uppercase tracking-wider">${t.badge}</span>
                      <span class="text-[10px] font-bold text-slate-400 bg-white px-2 py-0.5 rounded border border-slate-200">Official Record</span>
                    </div>
                    <div class="bg-white p-3.5 sm:p-4 rounded-lg border border-slate-200 font-mono text-[11px] sm:text-xs text-slate-800 space-y-1.5 leading-relaxed overflow-x-auto">
                      ${t.content.map(line => `
                        <div class="${line.startsWith('14:') ? 'text-blue-900 font-bold' : (line.startsWith('METAR') || line.startsWith('SPECI') ? 'text-amber-900 font-bold' : (line.startsWith('Statement') ? 'text-purple-900 font-bold mt-2' : ''))}">${line}</div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Stage 3: The Swiss Cheese Model Root Cause Matrix -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 3: Root Cause Mapping</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${swissCheese.title || 'The Swiss Cheese Model: Root Cause Synthesis Matrix'}</h4>
              </div>
              <span class="text-xs font-bold text-amber-800 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full">Systemic Safety</span>
            </div>

            <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              James Reason's model illustrates that accidents occur only when holes in successive organizational and operational barriers align. Review how the findings from Occurrence 2024-089 map across the four structural layers:
            </p>

            <!-- 4 Swiss Cheese Layers Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-1">
              ${(swissCheese.layers || []).map((layer, lIdx) => `
                <div class="p-4 rounded-xl border ${lIdx === 0 ? 'bg-rose-50/60 border-rose-200' : (lIdx === 1 ? 'bg-amber-50/60 border-amber-200' : (lIdx === 2 ? 'bg-blue-50/60 border-blue-200' : 'bg-emerald-50/60 border-emerald-200'))} space-y-2.5">
                  <div class="flex items-center justify-between gap-2 border-b pb-2 ${lIdx === 0 ? 'border-rose-200 text-rose-950' : (lIdx === 1 ? 'border-amber-200 text-amber-950' : (lIdx === 2 ? 'border-blue-200 text-blue-950' : 'border-emerald-200 text-emerald-950'))}">
                    <h5 class="text-xs font-black">${layer.category}</h5>
                    <span class="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/80 border">${layer.badge}</span>
                  </div>
                  <ul class="space-y-1.5 text-xs text-slate-700 leading-snug">
                    ${layer.items.map(it => `
                      <li class="flex items-start gap-1.5">
                        <span class="font-bold shrink-0 ${lIdx === 0 ? 'text-rose-600' : (lIdx === 1 ? 'text-amber-600' : (lIdx === 2 ? 'text-blue-600' : 'text-emerald-600'))}">&bull;</span>
                        <span>${it}</span>
                      </li>
                    `).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Stage 4: Oral Technical Debriefing & Notes -->
          <div class="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-4">
            <div class="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Part 4: Executive Presentation</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${debrief.title || 'Executive Debriefing to the Airport Safety Directorate'}</h4>
              </div>
              <span class="text-xs font-bold text-indigo-800 bg-indigo-50 border border-indigo-200 px-2.5 py-1 rounded-full">Spoken Simulation</span>
            </div>

            <p class="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
              ${debrief.leadPrompt || 'Working with your partner, prepare a concise 2-minute oral presentation summarizing findings, root causes, and safety recommendations.'}
            </p>

            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs text-slate-700">
              <strong class="text-slate-900 block font-bold text-[11px] uppercase tracking-wider">Recommended Debriefing Structure:</strong>
              ${(debrief.structureSteps || []).map(step => `<div class="text-[11.5px]">&bull; ${step}</div>`).join('')}
            </div>

            <!-- Digital Notes Area -->
            <div class="space-y-2 pt-2">
              <div class="flex items-center justify-between">
                <label for="notes-s5-debrief" class="text-xs font-bold text-slate-800 uppercase tracking-wider">Your Team Debriefing Notes &amp; Recommendations:</label>
                <span class="text-[10px] text-slate-400 font-medium no-print">Auto-saves locally</span>
              </div>
              <textarea id="notes-s5-debrief" oninput="window.saveLessonNote('5', 'debrief', this.value); window.updateWordCount && window.updateWordCount(this.value, 'word-count-s5');" rows="5" placeholder="Draft your 2-minute oral debriefing here using cause-and-effect connectors: stemming from, triggered by, resulting in, attributable to, consequently..." class="w-full p-3.5 text-xs sm:text-[13px] bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans shadow-inner">${window.getLessonNote ? window.getLessonNote('5', 'debrief') : ''}</textarea>
              <div class="flex items-center justify-between text-[11px] text-slate-400 no-print">
                <span id="word-count-s5">Word count: 0 words</span>
                <span class="italic">Saved to local browser cache</span>
              </div>
            </div>

            <!-- Revealable Model Debriefing Script -->
            <div class="pt-2">
              <button type="button" onclick="const p = document.getElementById('model-s5-script'); p.classList.toggle('hidden');" class="inline-flex items-center gap-1.5 text-xs font-bold text-sky-700 hover:text-sky-900 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3.5 py-2 rounded-lg transition-colors cursor-pointer">
                <span>💡 Reveal Model Executive Briefing Script</span>
                <span>&darr;</span>
              </button>
              <div id="model-s5-script" class="hidden mt-3 p-4 bg-slate-900 text-white rounded-xl space-y-2 border border-slate-800 text-xs sm:text-[12.5px] leading-relaxed shadow-lg">
                <div class="flex items-center justify-between text-sky-400 border-b border-slate-800 pb-2">
                  <span class="font-bold uppercase tracking-wider text-[10px]">Model Spoken Briefing (Audio Transcript)</span>
                  <button type="button" onclick="if(window.speakText) window.speakText(document.getElementById('s5-model-text').innerText)" class="px-2.5 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded text-[10px] font-bold cursor-pointer">🔊 Read Aloud</button>
                </div>
                <div id="s5-model-text" class="text-slate-200 whitespace-pre-line pt-1">
                  ${debrief.modelDebriefScript || ''}
                </div>
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
      const photoExhibits = content.photoExhibits || [];
      const capDossier = content.capDossier || {};
      const finding41 = capDossier.finding41 || {};
      const finding42 = capDossier.finding42 || {};
      const matrix = capDossier.matrix || [];
      const signOff = capDossier.signOff || {};
      const roleplay = content.negotiationRoleplay || {};
      const studio = content.flippedLessonStudio || {};
      const domains = studio.domains || [];
      const stages = studio.stages || [];
      const roles = studio.roles || [];
      const rubric = studio.rubric || [];

      bodyEl.innerHTML = `
        <div class="space-y-6 printable-lesson-container">
          <!-- Printable Action Bar -->
          <div class="no-print flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-white text-[10px] font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">DIGITAL WORKSHEET</span>
                <span class="text-xs font-bold text-slate-700">AT Module 1 &bull; Session 6</span>
              </div>
              <h3 class="text-sm sm:text-base font-black text-slate-900 mt-1">${hero.title || 'The Corrective Action Plan (CAP) &amp; Lesson 7 Prep'}</h3>
            </div>
            <button type="button" onclick="window.printLessonContent()" class="inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-lg text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-xs transition-all cursor-pointer shrink-0">
              <svg width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print / Save Lesson PDF</span>
            </button>
          </div>

          <!-- Hero Banner & Context -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
            <div class="relative">
              <img src="images/s3_m1_session6_cap.jpg" alt="EASA Corrective Action Plan Meeting" class="w-full h-48 sm:h-64 object-cover" onerror="this.src='images/aas_m1card6.jpg'">
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-4 sm:p-5">
                <span class="text-[11px] font-bold text-amber-300 uppercase tracking-wider">${hero.badge || 'EASA Part-ADR.OR.D.005'}</span>
                <h3 class="text-lg sm:text-2xl font-black text-white mt-0.5">${hero.title || 'The Corrective Action Plan (CAP) &amp; Lesson 7 Prep'}</h3>
                <p class="text-xs sm:text-sm text-slate-200 mt-1 line-clamp-2">${hero.subtitle || ''}</p>
              </div>
            </div>
            <div class="p-4 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
                ${(hero.metrics || []).map(m => `
                  <div class="border-l-2 border-blue-500 pl-2.5">
                    <span class="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">${m.label}</span>
                    <span class="text-xs sm:text-sm font-black text-slate-900">${m.val}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Context Briefing -->
          <div class="p-5 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 rounded-xl shadow-xs text-white space-y-3">
            <div class="flex items-center justify-between">
              <span class="bg-blue-500/20 text-blue-300 border border-blue-400/30 text-[10.5px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                ${opening.badge || 'Safety Directorate Briefing'}
              </span>
              <span class="text-xs font-mono text-slate-300">Reg (EU) No 139/2014 &bull; ADR.OR.D.005</span>
            </div>
            <h4 class="text-base sm:text-lg font-black text-white">${opening.title || 'Aerodrome Audit Finding Notice: The Path to Compliance'}</h4>
            <p class="text-xs sm:text-[13px] text-slate-200 leading-relaxed">${opening.desc || ''}</p>
            ${opening.callout ? `
              <div class="p-3 bg-white/10 border border-white/15 rounded-lg text-xs text-amber-200 font-medium">
                &bull; ${opening.callout}
              </div>
            ` : ''}
          </div>

          <!-- Visual Remediation Gallery: 3 Photo Exhibits with Lightbox -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <div>
                <h4 class="text-sm sm:text-base font-black text-slate-900 flex items-center gap-2">
                  <span class="text-white text-xs font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                  <span>Physical Remediation Gallery &bull; Audit Finding Evidence</span>
                </h4>
                <p class="text-xs text-slate-500 mt-0.5">Click any photograph to zoom in high-resolution, examine remediation works, and inspect technical prompts.</p>
              </div>
              <span class="text-[11px] font-bold text-slate-400 uppercase tracking-wider hidden sm:inline">3 Physical Exhibits</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              ${photoExhibits.map((ex, i) => `
                <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div class="relative group cursor-pointer overflow-hidden" onclick="window.openImageLightbox('${ex.image}', '${ex.title}')">
                      <img src="${ex.image}" alt="${ex.title}" class="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-300">
                      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white text-xs font-bold">
                        <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                        <span>Click to Enlarge</span>
                      </div>
                      <div class="absolute top-2 left-2">
                        <span class="bg-black/75 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-xs">${ex.findingRef}</span>
                      </div>
                    </div>
                    <div class="p-3.5 space-y-2">
                      <div class="text-[10px] font-bold text-blue-600 uppercase tracking-wider">${ex.location}</div>
                      <h5 class="text-xs font-black text-slate-900 leading-snug">${ex.title}</h5>
                      <p class="text-[11.5px] text-slate-600 leading-relaxed">${ex.caption}</p>
                      <div class="p-2.5 bg-blue-50/70 border border-blue-200/80 rounded-lg text-[11px] text-blue-950 font-medium">
                        <span class="font-bold text-blue-900 block mb-0.5">&bull; Speaking Prompt:</span>
                        ${ex.prompt}
                      </div>
                    </div>
                  </div>
                  <div class="p-3.5 pt-0">
                    <button type="button" onclick="document.getElementById('model-ans-${ex.id}').classList.toggle('hidden')" class="w-full py-1.5 px-3 bg-slate-100 hover:bg-slate-200 text-slate-700 text-[11px] font-bold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer">
                      <span>View Model Spoken Response</span>
                      <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/></svg>
                    </button>
                    <div id="model-ans-${ex.id}" class="hidden mt-2 p-2.5 bg-emerald-50 border border-emerald-200 rounded-lg text-[11px] text-emerald-950 italic leading-relaxed">
                      &ldquo;${ex.modelResponse}&rdquo;
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Interactive 4-Tab CAP Dossier -->
          <div class="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs space-y-0">
            <div class="p-4 border-b border-slate-200 bg-slate-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <div class="flex items-center gap-2">
                  <span class="text-white text-xs font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">EASA Part-ADR.OR.D.005 Corrective Action Dossier</h4>
                </div>
                <p class="text-xs text-slate-500 mt-0.5">Explore the official finding statements, SMART remediation actions, and verification milestones.</p>
              </div>
              <div class="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs overflow-x-auto">
                <button type="button" onclick="window.switchCapTab('finding41')" data-cap-tab="finding41" class="cap-tab-btn px-2.5 py-1 text-xs font-bold rounded border-b-2 border-blue-600 text-blue-700 bg-blue-50/50 cursor-pointer transition-all whitespace-nowrap">
                  Finding 041 &bull; Runway Friction
                </button>
                <button type="button" onclick="window.switchCapTab('finding42')" data-cap-tab="finding42" class="cap-tab-btn px-2.5 py-1 text-xs font-bold rounded border-b-2 border-transparent text-slate-500 hover:text-slate-800 cursor-pointer transition-all whitespace-nowrap">
                  Finding 042 &bull; Blast Fence
                </button>
                <button type="button" onclick="window.switchCapTab('matrix')" data-cap-tab="matrix" class="cap-tab-btn px-2.5 py-1 text-xs font-bold rounded border-b-2 border-transparent text-slate-500 hover:text-slate-800 cursor-pointer transition-all whitespace-nowrap">
                  Root-Cause Matrix
                </button>
                <button type="button" onclick="window.switchCapTab('signOff')" data-cap-tab="signOff" class="cap-tab-btn px-2.5 py-1 text-xs font-bold rounded border-b-2 border-transparent text-slate-500 hover:text-slate-800 cursor-pointer transition-all whitespace-nowrap">
                  Authority Sign-Off
                </button>
              </div>
            </div>

            <!-- Tab 1: Finding 041 -->
            <div id="cap-pane-finding41" class="cap-pane p-5 space-y-4">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-red-50 border border-red-200 rounded-lg">
                <div>
                  <span class="text-[10px] font-bold text-red-700 uppercase tracking-wider block">${finding41.severity}</span>
                  <h5 class="text-xs sm:text-sm font-black text-red-950">${finding41.title}</h5>
                </div>
                <span class="text-xs font-mono text-red-800 font-semibold">${finding41.standard}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                  <span class="font-bold text-slate-800 uppercase tracking-wider text-[10.5px] block">1. Inspection &amp; Survey Data</span>
                  <p class="text-slate-700 leading-relaxed">${finding41.surveyData}</p>
                </div>
                <div class="p-3.5 bg-amber-50 rounded-lg border border-amber-200 space-y-1.5">
                  <span class="font-bold text-amber-900 uppercase tracking-wider text-[10.5px] block">2. Mandatory Interim Mitigation (NOTAM)</span>
                  <p class="text-amber-950 leading-relaxed font-mono text-[11px]">${finding41.interimMitigation}</p>
                </div>
              </div>
              <div class="p-3.5 bg-blue-50 rounded-lg border border-blue-200 space-y-1.5 text-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-blue-900 uppercase tracking-wider text-[10.5px]">3. Definitive Remediation &amp; Hydro-Blasting Plan</span>
                  <span class="text-[11px] font-bold text-blue-800 font-mono">${finding41.targetDate}</span>
                </div>
                <p class="text-blue-950 leading-relaxed">${finding41.definitivePlan}</p>
              </div>
            </div>

            <!-- Tab 2: Finding 042 -->
            <div id="cap-pane-finding42" class="cap-pane p-5 space-y-4 hidden">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 bg-amber-50 border border-amber-200 rounded-lg">
                <div>
                  <span class="text-[10px] font-bold text-amber-700 uppercase tracking-wider block">${finding42.severity}</span>
                  <h5 class="text-xs sm:text-sm font-black text-amber-950">${finding42.title}</h5>
                </div>
                <span class="text-xs font-mono text-amber-800 font-semibold">${finding42.standard}</span>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div class="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                  <span class="font-bold text-slate-800 uppercase tracking-wider text-[10.5px] block">1. Defect Description &amp; Blast Exposure</span>
                  <p class="text-slate-700 leading-relaxed">${finding42.defectData}</p>
                </div>
                <div class="p-3.5 bg-amber-50 rounded-lg border border-amber-200 space-y-1.5">
                  <span class="font-bold text-amber-900 uppercase tracking-wider text-[10.5px] block">2. Operational Mitigation (Taxiway Papa)</span>
                  <p class="text-amber-950 leading-relaxed">${finding42.interimMitigation}</p>
                </div>
              </div>
              <div class="p-3.5 bg-blue-50 rounded-lg border border-blue-200 space-y-1.5 text-xs">
                <div class="flex items-center justify-between">
                  <span class="font-bold text-blue-900 uppercase tracking-wider text-[10.5px]">3. Phased Reconstruction &amp; Anchoring</span>
                  <span class="text-[11px] font-bold text-blue-800 font-mono">${finding42.targetDate}</span>
                </div>
                <p class="text-blue-950 leading-relaxed">${finding42.definitivePlan}</p>
              </div>
            </div>

            <!-- Tab 3: Root-Cause Matrix -->
            <div id="cap-pane-matrix" class="cap-pane p-5 space-y-3 hidden">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block">SMART Remediation &amp; Root-Cause Breakdown</span>
              <div class="overflow-x-auto">
                <table class="w-full text-xs text-left border-collapse">
                  <thead>
                    <tr class="bg-slate-100 text-slate-700 text-[11px] uppercase tracking-wider border-b border-slate-300">
                      <th class="p-2.5">Non-Conformity</th>
                      <th class="p-2.5">Identified Root Cause</th>
                      <th class="p-2.5">Immediate Mitigation</th>
                      <th class="p-2.5">Permanent Engineering Fix</th>
                      <th class="p-2.5">Target Date</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-slate-200 text-slate-800 text-[11.5px]">
                    ${matrix.map(m => `
                      <tr class="hover:bg-slate-50">
                        <td class="p-2.5 font-bold text-slate-900">${m.item}</td>
                        <td class="p-2.5 text-slate-600">${m.rootCause}</td>
                        <td class="p-2.5 text-amber-800 bg-amber-50/50 font-medium">${m.immediateAction}</td>
                        <td class="p-2.5 text-blue-900 font-medium">${m.permanentFix}</td>
                        <td class="p-2.5 font-mono font-bold text-slate-900">${m.deadline}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>

            <!-- Tab 4: Authority Sign-Off -->
            <div id="cap-pane-signOff" class="cap-pane p-5 space-y-4 hidden">
              <div class="p-4 bg-emerald-50 border border-emerald-300 rounded-xl space-y-2">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-bold text-emerald-800 uppercase tracking-wider">${signOff.authority}</span>
                  <span class="bg-emerald-200 text-emerald-900 text-[10px] font-black px-2 py-0.5 rounded">${signOff.status}</span>
                </div>
                <h5 class="text-sm font-black text-emerald-950">${signOff.leadInspector}</h5>
                <p class="text-xs text-emerald-900 leading-relaxed">${signOff.conditions}</p>
              </div>
            </div>
          </div>

          <!-- Spoken Negotiation Simulator: Operator vs Inspector -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2 py-0.5 rounded shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Interactive Roleplay &bull; Aerodrome Operator vs Civil Aviation Inspector'}</h4>
              </div>
              <span class="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Pair Speaking Practice</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <!-- Operator Role Card -->
              <div class="p-4 bg-blue-50 border border-blue-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-[10.5px] font-bold text-blue-700 uppercase tracking-wider">Role A &bull; Aerodrome Operator</span>
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                </div>
                <h5 class="text-xs sm:text-sm font-black text-blue-950">${(roleplay.operatorRole || {}).role}</h5>
                <p class="text-xs text-blue-900 leading-relaxed">${(roleplay.operatorRole || {}).goal}</p>
                <div class="space-y-1.5 pt-2 border-t border-blue-200">
                  <span class="text-[10.5px] font-bold text-blue-900 uppercase tracking-wider block">Target Spoken Commitments:</span>
                  ${((roleplay.operatorRole || {}).phrases || []).map(p => `
                    <div class="flex items-start gap-1.5 text-xs text-blue-950">
                      <span class="text-blue-600 font-bold shrink-0">&rarr;</span>
                      <span class="italic">&ldquo;${p}&rdquo;</span>
                    </div>
                  `).join('')}
                </div>
              </div>

              <!-- Inspector Role Card -->
              <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <div class="flex items-center justify-between">
                  <span class="text-[10.5px] font-bold text-slate-600 uppercase tracking-wider">Role B &bull; State Authority Inspector</span>
                  <span class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                </div>
                <h5 class="text-xs sm:text-sm font-black text-slate-900">${(roleplay.inspectorRole || {}).role}</h5>
                <p class="text-xs text-slate-700 leading-relaxed">${(roleplay.inspectorRole || {}).goal}</p>
                <div class="space-y-1.5 pt-2 border-t border-slate-200">
                  <span class="text-[10.5px] font-bold text-slate-800 uppercase tracking-wider block">Target Inspector Phrases:</span>
                  ${((roleplay.inspectorRole || {}).phrases || []).map(p => `
                    <div class="flex items-start gap-1.5 text-xs text-slate-800">
                      <span class="text-slate-500 font-bold shrink-0">&rarr;</span>
                      <span class="italic">&ldquo;${p}&rdquo;</span>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Extended Workshop Studio: Session 7 Flipped Classroom Preparation -->
          <div class="p-5 bg-white border-2 border-emerald-500/80 rounded-xl shadow-md space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2.5">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs bg-emerald-600">Part 4</span>
                <div>
                  <h4 class="text-base sm:text-lg font-black text-slate-900">${studio.title || 'Flipped Classroom Design Studio &bull; Session 7 Peer-Teaching Workshop'}</h4>
                  <p class="text-xs text-slate-500 mt-0.5">${studio.instructions || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-black px-3 py-1 rounded-full whitespace-nowrap shadow-2xs">
                ${studio.duration || '30+ Minutes Studio'}
              </span>
            </div>

            <!-- 30-Minute Architecture -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block">1. Structured 30-Minute Lesson Architecture for Session 7:</span>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
                ${stages.map((st, idx) => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Step ${idx + 1}</span>
                      <span class="text-xs font-mono font-bold text-slate-700">${st.duration}</span>
                    </div>
                    <h5 class="text-xs font-black text-slate-900">${st.stage}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${st.desc}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 4 Topic Domains -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block">2. Select Your Team's Aerodrome Teaching Domain:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                ${domains.map(d => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5 hover:border-emerald-400 transition-colors">
                    <div class="flex items-center justify-between">
                      <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider">${d.num}</span>
                      <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                    </div>
                    <h5 class="text-xs font-black text-slate-900">${d.title}</h5>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${d.topic}</p>
                    <div class="p-2 bg-white rounded border border-slate-200 text-[10.5px] text-slate-700">
                      <span class="font-bold text-slate-800">Suggested Activity:</span> ${d.suggestedActivity}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Team Roles -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block">3. Team Teaching Roles (Pods of 3 to 4 Students):</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                ${roles.map(r => `
                  <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-1">
                    <span class="text-xs font-black text-slate-900 block">${r.title}</span>
                    <p class="text-[11px] text-slate-600 leading-relaxed">${r.role}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- 20-Point Assessment Rubric -->
            <div class="space-y-2">
              <span class="text-xs font-bold text-slate-800 uppercase tracking-wider block">4. Assessment Criteria &bull; 20 Points Total:</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                ${rubric.map(rb => `
                  <div class="p-3 bg-emerald-50/70 border border-emerald-200 rounded-lg space-y-1">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-black text-emerald-950">${rb.criterion}</span>
                      <span class="text-[10px] font-bold text-emerald-800 font-mono">${rb.points}</span>
                    </div>
                    <p class="text-[10.5px] text-emerald-900 leading-relaxed">${rb.descriptors}</p>
                  </div>
                `).join('')}
              </div>
            </div>

            <!-- Interactive On-Screen Planning Scratchpad -->
            <div class="pt-3 border-t border-slate-200 space-y-3">
              <div class="flex items-center justify-between">
                <div>
                  <h5 class="text-xs font-black text-slate-900 uppercase tracking-wider">Lesson Planning Scratchpad &bull; Auto-Saved In Browser</h5>
                  <p class="text-[11px] text-slate-500">Draft your team's lesson title, core activity steps, and teaching roles below. Auto-saves as you type.</p>
                </div>
                <button type="button" onclick="window.clearLessonNotes('6')" class="text-slate-400 hover:text-rose-600 underline text-xs font-medium cursor-pointer no-print">Clear Scratchpad</button>
              </div>

              <div class="space-y-3">
                <div class="notes-textarea-container">
                  <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                    <span>1. Chosen Domain, Lesson Title &amp; Opening Hook (~5 Mins):</span>
                    <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                  </label>
                  <textarea id="notes-flipped_hook-s6" oninput="window.saveLessonNote('6', 'flipped_hook', this.value)" rows="2" placeholder="e.g., Domain: Runway Surface Reporting (GRF). Lesson Title: 'Decoding Braking Action: From CFME to Cockpit SNOWTAM'. Opening Hook: Show photo of A320 landing in standing water; ask classmates: 'What braking action would you report?'" class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'flipped_hook') : ''}</textarea>
                  <div id="print-notes-flipped_hook-s6" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('6', 'flipped_hook') : '') || '[No hook notes recorded]'}</div>
                </div>

                <div class="notes-textarea-container">
                  <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                    <span>2. Core Communicative Activity &amp; Step-by-Step Instructions (~18 Mins):</span>
                    <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                  </label>
                  <textarea id="notes-flipped_activity-s6" oninput="window.saveLessonNote('6', 'flipped_activity', this.value)" rows="3" placeholder="e.g., Distribute 3 CFME survey graphs to classmates in pairs. Step 1: Pairs evaluate friction levels across thirds of runway. Step 2: Pairs draft a 6-line SNOWTAM report using ICAO format. Step 3: Pairs present their operational recommendation to the class while our pod circulates..." class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'flipped_activity') : ''}</textarea>
                  <div id="print-notes-flipped_activity-s6" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('6', 'flipped_activity') : '') || '[No activity notes recorded]'}</div>
                </div>

                <div class="notes-textarea-container">
                  <label class="block text-xs font-bold text-slate-800 mb-1 flex items-center justify-between">
                    <span>3. Team Member Role Allocation &amp; Classroom Delivery Strategy:</span>
                    <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                  </label>
                  <textarea id="notes-flipped_roles-s6" oninput="window.saveLessonNote('6', 'flipped_roles', this.value)" rows="2" placeholder="e.g., Lead Facilitator: Student 1 (Opening briefing &amp; classroom energy). Activity Controller: Student 2 (Pairs guidance &amp; timing). Language Coach: Student 3 (Tracking technical vocab &amp; feedback). Timekeeper/Debriefer: Student 4 (Wrap-up &amp; group presentations)..." class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'flipped_roles') : ''}</textarea>
                  <div id="print-notes-flipped_roles-s6" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('6', 'flipped_roles') : '') || '[No role notes recorded]'}</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      `;
    }


    function renderLessonContentTabSession7(sessionData, theme) {
      const bodyEl = document.getElementById('modal-body');
      const accent = theme.accent || '#2563eb';
      const primary = theme.primary || '#1e3a8a';
      const primaryDark = theme.primaryDark || '#0f172a';

      bodyEl.innerHTML = `
        <div class="space-y-6">
          <!-- Hero Header Card -->
          <div class="relative overflow-hidden rounded-2xl border border-slate-200/80 shadow-md bg-slate-900 text-white">
            <div class="absolute inset-0 z-0">
              <img src="images/s3_s7_peer_lesson_delivery.jpg" alt="Session 7 Peer Teaching" class="w-full h-full object-cover opacity-25 filter brightness-90">
              <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent"></div>
            </div>
            <div class="relative z-10 p-5 sm:p-7 space-y-3">
              <div class="flex flex-wrap items-center gap-2">
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-amber-300 bg-amber-950/80 border border-amber-600/50">
                  Formative Evaluation 1 • Technical English (AT • LV125E)
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-emerald-300 bg-emerald-950/80 border border-emerald-600/50">
                  30-Minute Team Lessons
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider text-sky-300 bg-sky-950/80 border border-sky-600/50">
                  Graded out of 20 Points
                </span>
              </div>
              <div>
                <h3 class="text-lg sm:text-2xl font-black text-white tracking-tight">Session 7: Flipped Classroom Peer-Teaching Workshop</h3>
                <p class="text-xs sm:text-sm text-slate-300 max-w-2xl mt-1 leading-relaxed">
                  Student teams of 3 to 4 take the floor as technical instructors, delivering an engaging 30-minute interactive lesson to classmates based on Module 1 EASA aerodrome operations.
                </p>
              </div>
            </div>
          </div>

          <!-- Section 1: 4-Stage 30-Minute Lesson Architecture -->
          <div class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                  1. The 30-Minute Flipped Lesson Architecture (4 Stages)
                </h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-400">Zero Rigid Minute Timings • Complete Teacher Pacing</span>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase text-slate-500">Stage 1</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white" style="background-color: ${primary};">Opening Phase</span>
                </div>
                <h5 class="text-xs font-bold text-slate-800">Welcome &amp; Context Hook</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">Introduce team members and the aerodrome safety challenge. Hook peer interest with a real incident scenario, photo exhibit, or thought-provoking question.</p>
              </div>

              <div class="p-3.5 bg-amber-50/50 border border-amber-200 rounded-xl space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase text-amber-700">Stage 2</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white" style="background-color: ${accent};">Core Activity</span>
                </div>
                <h5 class="text-xs font-bold text-slate-800">Instructions &amp; Spoken Task</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">Deliver clear, step-by-step instructions in plain B2 English. Ask ICQs to verify task understanding. Classmates complete pair/group work.</p>
              </div>

              <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase text-slate-500">Stage 3</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white" style="background-color: ${primary};">Active Coaching</span>
                </div>
                <h5 class="text-xs font-bold text-slate-800">Circulating &amp; Support</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">Student instructors circulate among tables, clarify questions, prompt quieter peers, provide hints, and ensure 100% English speaking.</p>
              </div>

              <div class="p-3.5 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-1.5">
                <div class="flex items-center justify-between">
                  <span class="text-[10px] font-black uppercase text-emerald-700">Stage 4</span>
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold text-white bg-emerald-700">Debrief Phase</span>
                </div>
                <h5 class="text-xs font-bold text-slate-800">Plenary Review &amp; Debrief</h5>
                <p class="text-[11px] text-slate-600 leading-relaxed">Elicit solutions from student groups, compare recommendations, review technical vocabulary deployed, and invite peer feedback.</p>
              </div>
            </div>
          </div>

          <!-- Section 2: Spoken Facilitation Toolkit for Student Instructors -->
          <div class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                  2. Spoken Facilitation Toolkit &bull; Phrases for Student Instructors
                </h4>
              </div>
              <span class="text-[11px] font-semibold text-slate-400">Deploy During Delivery</span>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              <!-- Box 1: Opening & Setting Tasks -->
              <div class="p-3.5 rounded-xl border border-blue-200 bg-blue-50/40 space-y-2">
                <div class="flex items-center gap-1.5 font-bold text-blue-900">
                  <span>📢</span>
                  <span class="uppercase tracking-wider text-[11px]">Opening Hook &amp; Giving Instructions</span>
                </div>
                <ul class="space-y-1 text-slate-700 leading-relaxed pl-3 list-disc">
                  <li><strong>Hook:</strong> <em>"Good morning everyone. Today our team is putting you in the shoes of airport safety managers..."</em></li>
                  <li><strong>Outcome:</strong> <em>"Our objective by the end of this 30-minute session is to agree on..."</em></li>
                  <li><strong>Pairing:</strong> <em>"Please work in pairs with the person sitting next to you."</em></li>
                  <li><strong>Step Sequencing:</strong> <em>"Step one is to examine the chart. Step two is to identify the non-compliance."</em></li>
                </ul>
              </div>

              <!-- Box 2: Checking Understanding (ICQs) -->
              <div class="p-3.5 rounded-xl border border-amber-200 bg-amber-50/40 space-y-2">
                <div class="flex items-center gap-1.5 font-bold text-amber-900">
                  <span>❓</span>
                  <span class="uppercase tracking-wider text-[11px]">Instruction Checking Questions (ICQs)</span>
                </div>
                <ul class="space-y-1 text-slate-700 leading-relaxed pl-3 list-disc">
                  <li><strong>Task Check:</strong> <em>"Before we start, who can explain what you need to do in step 1?"</em></li>
                  <li><strong>Grouping:</strong> <em>"Are you working individually or in pairs?"</em></li>
                  <li><strong>Output Check:</strong> <em>"What should your team have written down when time is up?"</em></li>
                  <li><strong>Timebox:</strong> <em>"You have 8 minutes for this phase. Any questions before we start?"</em></li>
                </ul>
              </div>

              <!-- Box 3: Table Coaching & Monitoring -->
              <div class="p-3.5 rounded-xl border border-purple-200 bg-purple-50/40 space-y-2">
                <div class="flex items-center gap-1.5 font-bold text-purple-900">
                  <span>👥</span>
                  <span class="uppercase tracking-wider text-[11px]">Circulating &amp; Coaching Classmates</span>
                </div>
                <ul class="space-y-1 text-slate-700 leading-relaxed pl-3 list-disc">
                  <li><strong>Check-in:</strong> <em>"How are things progressing over here? Any questions on the regulatory rule?"</em></li>
                  <li><strong>Prompting:</strong> <em>"What does EASA Part-ADR state about temporary obstacle exemptions?"</em></li>
                  <li><strong>Vocabulary:</strong> <em>"Try using 'provided that' to express the conditional safety measure."</em></li>
                  <li><strong>Time Warning:</strong> <em>"Two minutes remaining, everyone. Please start wrapping up your notes."</em></li>
                </ul>
              </div>

              <!-- Box 4: Debriefing & Peer Feedback -->
              <div class="p-3.5 rounded-xl border border-emerald-200 bg-emerald-50/40 space-y-2">
                <div class="flex items-center gap-1.5 font-bold text-emerald-900">
                  <span>🎯</span>
                  <span class="uppercase tracking-wider text-[11px]">Plenary Debrief &amp; Eliciting Answers</span>
                </div>
                <ul class="space-y-1 text-slate-700 leading-relaxed pl-3 list-disc">
                  <li><strong>Nominating:</strong> <em>"Let's hear from Team B. What root cause did your group identify?"</em></li>
                  <li><strong>Comparing:</strong> <em>"Did any other team reach a different conclusion for this audit finding?"</em></li>
                  <li><strong>Summarizing:</strong> <em>"To recap, the key technical distinction between Level 1 and Level 2 is..."</em></li>
                  <li><strong>Positive Feedback:</strong> <em>"Great participation everyone. Thank you for your active engagement."</em></li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Section 3: Interactive Peer Observation & Feedback Studio -->
          <div class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-slate-200">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full" style="background-color: ${accent};"></span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wide">
                  3. Peer Observer Studio &bull; Active Classroom Observation &amp; Feedback
                </h4>
              </div>
              <span class="text-[10px] text-slate-400 no-print">Auto-Saves In Browser</span>
            </div>

            <p class="text-xs text-slate-600 leading-relaxed">
              When participating in other teams' lessons, record active observation notes below. Your constructive feedback helps your classmates improve their spoken technical leadership.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <!-- Note 1: Strengths -->
              <div class="notes-textarea-container space-y-1.5">
                <label class="block text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>1. Key Strengths &amp; Clear Instructions:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saved</span>
                </label>
                <textarea id="notes-s7_strengths" oninput="window.saveLessonNote('7', 'peer_strengths', this.value)" rows="3" placeholder="e.g., Team 1 gave very clear instructions. The role-play was engaging and kept our pair talking for the entire task..." class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('7', 'peer_strengths') : ''}</textarea>
                <div id="print-notes-s7_strengths" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('7', 'peer_strengths') : '') || '[No strengths recorded]'}</div>
              </div>

              <!-- Note 2: Vocabulary Deployed -->
              <div class="notes-textarea-container space-y-1.5">
                <label class="block text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>2. Technical Vocabulary Deployed:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saved</span>
                </label>
                <textarea id="notes-s7_vocab" oninput="window.saveLessonNote('7', 'peer_vocab', this.value)" rows="3" placeholder="e.g., Terms noted: OLS safeguarding, temporary displaced threshold, Level 1 finding, Swiss Cheese latent conditions..." class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('7', 'peer_vocab') : ''}</textarea>
                <div id="print-notes-s7_vocab" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('7', 'peer_vocab') : '') || '[No vocabulary recorded]'}</div>
              </div>

              <!-- Note 3: Actionable Tip -->
              <div class="notes-textarea-container space-y-1.5">
                <label class="block text-xs font-bold text-slate-800 flex items-center justify-between">
                  <span>3. Actionable Tip for Improvement:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saved</span>
                </label>
                <textarea id="notes-s7_tip" oninput="window.saveLessonNote('7', 'peer_tip', this.value)" rows="3" placeholder="e.g., Next time, walk around the tables a bit more during pairwork to check in with quieter students..." class="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('7', 'peer_tip') : ''}</textarea>
                <div id="print-notes-s7_tip" class="notes-print-display">${(window.getLessonNote ? window.getLessonNote('7', 'peer_tip') : '') || '[No tip recorded]'}</div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-1">
              <span class="text-[11px] text-slate-400">Notes remain stored locally in your browser and link directly to your personal portfolio.</span>
              <button type="button" onclick="window.clearLessonNotes('7')" class="text-slate-400 hover:text-rose-600 underline text-xs font-medium cursor-pointer no-print">Clear Session 7 Notes</button>
            </div>
          </div>

          <!-- Section 4: Collaborative Reflection Exhibit -->
          <div class="rounded-xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs space-y-3">
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <div class="w-full sm:w-1/3 rounded-xl overflow-hidden shadow-xs border border-slate-200 shrink-0">
                <img src="images/s3_s7_peer_feedback_circle.jpg" alt="Peer Reflection Circle" class="w-full h-40 object-cover">
              </div>
              <div class="space-y-2">
                <span class="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100">
                  Continuous Assessment Milestone
                </span>
                <h4 class="text-xs sm:text-sm font-bold text-slate-900">
                  Formative Assessment &amp; Portfolio Integration
                </h4>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Congratulations on completing Module 1! Teaching a complex technical topic to your peers develops the communication agility, instruction clarity, and leadership confidence required for international aviation operations. Be sure to log your key reflections, teacher feedback targets, and active vocabulary in your digital portfolio.
                </p>
              </div>
            </div>
          </div>

        </div>
      `;
    }
