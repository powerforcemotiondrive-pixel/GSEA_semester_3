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

          <!-- Activity 3: Spoken Team Challenge • The Photo-Audit Field Briefing -->
          <div class="p-4 sm:p-5 rounded-xl bg-emerald-50/80 border border-emerald-200 shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-emerald-200/80 pb-3">
              <div>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-700 text-white font-black text-[10px] uppercase tracking-wider mb-1">
                  Part 4: Spoken Interaction
                </span>
                <h4 class="text-sm sm:text-base font-black text-emerald-950">${spoken.title || 'Activity 3: Spoken Team Challenge • The Photo-Audit Field Briefing'}</h4>
              </div>
              <span class="inline-flex items-center text-[11px] font-semibold text-emerald-800 bg-white px-2.5 py-1 rounded-md border border-emerald-200 shrink-0">
                Pairs / Trios Role-Play
              </span>
            </div>

            <p class="text-xs text-emerald-950 font-medium leading-relaxed">${spoken.instructions || 'Divide into pairs or trios. Each group takes one finding exhibit (Group 1: Stand 14 Fuel Spill; Group 2: Holding Point B2 Guard Lights; Group 3: Stand 12 Missing FOD Bins). Complete these steps in English:'}</p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              ${(spoken.steps || []).map(st => `
                <div class="p-2.5 bg-white border border-emerald-200 rounded-lg text-xs font-semibold text-emerald-950 flex items-center gap-2">
                  <span class="text-emerald-700 font-bold">&bull;</span>
                  <span>${st}</span>
                </div>
              `).join('')}
            </div>

            <!-- Partner Checking Prompts -->
            <div class="p-3.5 bg-white border border-emerald-300 rounded-xl space-y-2">
              <span class="text-[11px] font-bold text-emerald-900 uppercase tracking-wider block">Partner B Role: Active Safety Manager Prompts</span>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-emerald-950 italic">
                ${(spoken.checkingPrompts || []).map(p => `
                  <div class="p-2 bg-emerald-50/60 rounded border border-emerald-100 flex items-start gap-1.5">
                    <span class="text-emerald-600 font-bold shrink-0">&ldquo;</span>
                    <span>${p}&rdquo;</span>
                  </div>
                `).join('')}
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
      const chart = content.chartExtract || {};
      const clinic = content.grammarClinic || {};
      const game = content.communicativeGame || {};
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up & Entry Spot-Check'}</h4>
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

          <!-- Activity 2: Visual Chart & Description Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${chart.title || 'Activity 2: Visual Chart & Description Clinic'}</h4>
                  <p class="text-[11px] text-slate-500">${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">${chart.badge || 'AERONAUTICAL CHART'}</span>
            </div>

            <!-- Visual Chart Container -->
            <div class="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <div class="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-xs font-mono font-bold text-white tracking-wide uppercase">${chart.callsign || 'LFMT SPECIFICATION'}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a href="${chart.visualChart}" target="_blank" rel="noopener noreferrer" class="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 transition-colors">
                    <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    <span>Inspect / Open Full Chart</span>
                  </a>
                </div>
              </div>
              <div class="p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
                <img src="${chart.visualChart}" alt="${chart.badge}" class="w-full max-w-4xl h-auto rounded shadow-sm border border-slate-800/80 cursor-pointer transition-transform hover:scale-[1.005]" onclick="window.open('${chart.visualChart}', '_blank')" title="Click to view full size">
              </div>
            </div>

            <!-- Speaking Skill Clinic (Map / Flight Path / Profile Description) -->
            
            <!-- Flight Path Narration Skill Box -->
            <div class="p-4 bg-purple-50/60 border border-purple-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-purple-600"></span>
                  <h5 class="text-xs font-black uppercase tracking-wider text-purple-900">${chart.flightPathClinic?.title || 'Flight Path Narration Skill'}</h5>
                </div>
                <span class="text-[10px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">Sequential Speaking</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">${chart.flightPathClinic?.summary || ''}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${(chart.flightPathClinic?.phrases || []).map(p => `
                  <div class="p-2.5 bg-white border border-purple-100 rounded-lg text-xs space-y-0.5">
                    <span class="text-[10px] font-bold text-purple-600 uppercase">${p.label}:</span>
                    <p class="text-slate-800 italic text-[11px]">&ldquo;${p.phrase}&rdquo;</p>
                  </div>
                `).join('')}
              </div>
              <div class="p-2.5 bg-white border border-purple-200 rounded-lg text-[11px] text-purple-900 font-bold flex items-center gap-2">
                <span>⏱️</span>
                <span>${chart.flightPathClinic?.challenge || ''}</span>
              </div>
            </div>


            <!-- Structured Technical Specifications -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Chart Operational Notes &amp; Data:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${(chart.sections || []).map(sec => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                    <h6 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1">${sec.heading}</h6>
                    <ul class="space-y-1 text-xs text-slate-700">
                      ${sec.details.map(d => `
                        <li class="flex items-start gap-1.5">
                          <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                          <span class="leading-relaxed text-[11px]">${d}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${clinic.title || 'Activity 3: Language Clinic'}</h4>
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

          <!-- Activity 4: Distinct Communicative Game -->
          
          <!-- Activity 4: Airspace Detective Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${game.title || 'Activity 4: 🔍 Airspace Detective: Spot the Route Trap'}</h4>
                  <p class="text-[11px] text-slate-500">${game.summary || ''}</p>
                </div>
              </div>
              <span class="bg-indigo-100 text-indigo-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LOGIC &amp; SPEAKING GAME</span>
            </div>

            <!-- Game Instructions -->
            <div class="p-3.5 bg-indigo-50/70 border border-indigo-200 rounded-lg text-xs space-y-1.5">
              <span class="font-bold text-indigo-900 uppercase text-[10px] tracking-wider">How to Play:</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                ${(game.instructions || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <!-- 4 Clearance Cases -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              ${(game.cases || []).map(c => `
                <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase">${c.id}</span>
                    <p class="text-xs font-mono font-bold text-slate-800 mt-1 leading-relaxed">&ldquo;${c.clearance}&rdquo;</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200">
                    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                      Reveal Detective Report
                    </button>
                    <div class="hidden mt-1 p-2 bg-white rounded border border-slate-200 text-[11px]">
                      <span class="font-bold ${c.status.includes('TRAP') ? 'text-rose-600' : 'text-emerald-600'}">${c.status}:</span>
                      <p class="text-slate-600 mt-0.5 leading-relaxed">${c.note}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>

            <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 font-bold flex items-center gap-2">
              <span>🎤</span>
              <span>${game.challengeQuestion || ''}</span>
            </div>
          </div>


          <!-- Activity 5: Spoken Role-Play Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 5: Spoken Role-Play'}</h4>
                  <p class="text-[11px] text-slate-500">${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed whitespace-pre-line">${roleplay.situation || ''}</p>
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

          <!-- Activity 6: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 6: Safety Check'}</h4>
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
                  <span>1. Airspace Detective Findings & Departure Routing Notes:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s5" oninput="window.saveLessonNote('5', 'roleplay', this.value)" rows="3" placeholder="e.g., GAILLAC 4A departure briefed: Climb runway heading 142° to 3,000 ft, turn left direct GAI VOR. Caught Case Bravo trap: turn at 1,200 ft violates noise abatement. Weather avoidance: Requested 20° left heading at 4,500 ft to clear CB cell..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('5', 'roleplay') : ''}</textarea>
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
      const game = content.communicativeGame || {};
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
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 1</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${opening.title || 'Activity 1: Warm-up & Entry Spot-Check'}</h4>
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

          <!-- Activity 2: Visual Chart & Description Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-5">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 2</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${chart.title || 'Activity 2: Visual Chart & Description Clinic'}</h4>
                  <p class="text-[11px] text-slate-500">${chart.summary || ''}</p>
                </div>
              </div>
              <span class="bg-blue-100 text-blue-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">${chart.badge || 'AERONAUTICAL CHART'}</span>
            </div>

            <!-- Visual Chart Container -->
            <div class="bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-md">
              <div class="p-3 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span class="text-xs font-mono font-bold text-white tracking-wide uppercase">${chart.callsign || 'LFMT SPECIFICATION'}</span>
                </div>
                <div class="flex items-center gap-2">
                  <a href="${chart.visualChart}" target="_blank" rel="noopener noreferrer" class="no-print inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded border border-slate-600 transition-colors">
                    <svg class="w-3.5 h-3.5 text-blue-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                    <span>Inspect / Open Full Chart</span>
                  </a>
                </div>
              </div>
              <div class="p-2 sm:p-4 bg-slate-950 flex items-center justify-center">
                <img src="${chart.visualChart}" alt="${chart.badge}" class="w-full max-w-4xl h-auto rounded shadow-sm border border-slate-800/80 cursor-pointer transition-transform hover:scale-[1.005]" onclick="window.open('${chart.visualChart}', '_blank')" title="Click to view full size">
              </div>
            </div>

            <!-- Speaking Skill Clinic (Map / Flight Path / Profile Description) -->
            
            <!-- Profile View Skill Box -->
            <div class="p-4 bg-cyan-50/60 border border-cyan-200 rounded-xl space-y-3">
              <div class="flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-2 h-2 rounded-full bg-cyan-600"></span>
                  <h5 class="text-xs font-black uppercase tracking-wider text-cyan-900">${chart.profileClinic?.title || 'Profile View Briefing Skill'}</h5>
                </div>
                <span class="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded">Vertical Descent</span>
              </div>
              <p class="text-xs text-slate-700 leading-relaxed">${chart.profileClinic?.summary || ''}</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                ${(chart.profileClinic?.phrases || []).map(p => `
                  <div class="p-2.5 bg-white border border-cyan-100 rounded-lg text-xs space-y-0.5">
                    <span class="text-[10px] font-bold text-cyan-600 uppercase">${p.label}:</span>
                    <p class="text-slate-800 italic text-[11px]">&ldquo;${p.phrase}&rdquo;</p>
                  </div>
                `).join('')}
              </div>
              <div class="p-2.5 bg-white border border-cyan-200 rounded-lg text-[11px] text-cyan-900 font-bold flex items-center gap-2">
                <span>⏱️</span>
                <span>${chart.profileClinic?.challenge || ''}</span>
              </div>
            </div>


            <!-- Structured Technical Specifications -->
            <div class="space-y-2 pt-2 border-t border-slate-100">
              <h5 class="text-xs font-black uppercase tracking-wider text-slate-700">Chart Operational Notes &amp; Data:</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                ${(chart.sections || []).map(sec => `
                  <div class="p-3.5 bg-slate-50 border border-slate-200 rounded-lg space-y-1.5">
                    <h6 class="text-xs font-black text-slate-800 border-b border-slate-200 pb-1">${sec.heading}</h6>
                    <ul class="space-y-1 text-xs text-slate-700">
                      ${sec.details.map(d => `
                        <li class="flex items-start gap-1.5">
                          <span class="text-blue-600 font-bold mt-0.5">&bull;</span>
                          <span class="leading-relaxed text-[11px]">${d}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Activity 3: Language Clinic -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 3</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${clinic.title || 'Activity 3: Language Clinic'}</h4>
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

          <!-- Activity 4: Distinct Communicative Game -->
          
          <!-- Activity 4: Go / No-Go Lightning Challenge Game -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 4</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${game.title || 'Activity 4: ⚡ Go / No-Go Lightning Challenge'}</h4>
                  <p class="text-[11px] text-slate-500">${game.summary || ''}</p>
                </div>
              </div>
              <span class="bg-rose-100 text-rose-900 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">LIGHTNING DECISION GAME</span>
            </div>

            <!-- Game Instructions -->
            <div class="p-3.5 bg-rose-50/70 border border-rose-200 rounded-lg text-xs space-y-1.5">
              <span class="font-bold text-rose-900 uppercase text-[10px] tracking-wider">Lightning Challenge Rules:</span>
              <ul class="list-disc pl-4 space-y-1 text-slate-700 text-[11px]">
                ${(game.instructions || []).map(i => `<li>${i}</li>`).join('')}
              </ul>
            </div>

            <!-- 6 Dilemma Cards -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              ${(game.cards || []).map(card => `
                <div class="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2 flex flex-col justify-between">
                  <div>
                    <span class="text-[10px] font-bold text-slate-400 uppercase">Dilemma Card 0${card.id}</span>
                    <p class="text-xs font-bold text-slate-800 mt-1 leading-relaxed">${card.situation}</p>
                  </div>
                  <div class="pt-2 border-t border-slate-200">
                    <button type="button" onclick="this.nextElementSibling.classList.toggle('hidden')" class="text-[10px] font-bold text-blue-600 hover:underline cursor-pointer">
                      Reveal Verdict &amp; Defense
                    </button>
                    <div class="hidden mt-1 p-2 bg-white rounded border border-slate-200 text-[11px]">
                      <span class="font-bold ${card.verdict.includes('GO-AROUND') ? 'text-rose-600' : 'text-emerald-600'}">${card.verdict}</span>
                      <p class="text-slate-600 mt-0.5 leading-relaxed">${card.defense}</p>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>


          <!-- Activity 5: Spoken Role-Play Simulation -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${roleplay.title || 'Activity 5: Spoken Role-Play'}</h4>
                  <p class="text-[11px] text-slate-500">${roleplay.summary || ''}</p>
                </div>
              </div>
              <span class="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider">SPOKEN SIMULATION</span>
            </div>

            <!-- Situation Brief -->
            <div class="p-3.5 bg-emerald-50/70 border border-emerald-200 rounded-lg text-xs space-y-1">
              <span class="font-bold text-emerald-900 uppercase text-[10px] tracking-wider">Scenario Situation Brief:</span>
              <p class="text-slate-800 leading-relaxed whitespace-pre-line">${roleplay.situation || ''}</p>
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

          <!-- Activity 6: Safety Check -->
          <div class="p-5 bg-white border border-slate-200 rounded-xl shadow-xs space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-3">
              <div class="flex items-center gap-2">
                <span class="text-white text-xs font-black px-2.5 py-1 rounded-md shadow-xs" style="background-color: ${theme.primary};">Part 5</span>
                <div>
                  <h4 class="text-sm sm:text-base font-black text-slate-900">${safety.title || 'Activity 6: Safety Check'}</h4>
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
                  <span>1. Go / No-Go Lightning Defense & Go-Around Execution Notes:</span>
                  <span class="text-[10px] font-normal text-slate-400 no-print">Auto-saves on typing</span>
                </label>
                <textarea id="notes-roleplay-s6" oninput="window.saveLessonNote('6', 'roleplay', this.value)" rows="3" placeholder="e.g., ILS Runway 14L briefed: Localizer 109.3 MHz, inbound track 142°, FAF 5.2 DME at 2,000 ft, DA 692 ft (DH 200 ft). Defended Card 1 (sink rate > 1,000 fpm = automatic go-around). Go-around called at 400 ft due to vehicle on runway: climbed straight ahead to 2,500 ft, flaps 15, gear up..." class="w-full p-3 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-slate-800 placeholder-slate-400 leading-relaxed font-sans">${window.getLessonNote ? window.getLessonNote('6', 'roleplay') : ''}</textarea>
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
