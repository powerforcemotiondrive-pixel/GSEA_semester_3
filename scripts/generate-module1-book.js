#!/usr/bin/env node
/**
 * ENAC GSEA Semester 3 — Module 1 Student Book Generator
 * Compiles Front Matter HTML (Cover, Table of Contents, Student Guide, Objectives, FE1 Guidelines, Vocab)
 * and concatenates with all 7 Session Worksheets & EASA Technical Dossiers into a single unified course book.
 *
 * Uses `pdf-lib` for shared stream compression, resulting in an optimal ~8 MB footprint for 79 pages.
 * Output: docs/GSEA_S3_M1_Full_Student_Book.pdf
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const scriptsDir = path.join(rootDir, 'scripts');
const frontMatterHtml = path.join(scriptsDir, 'module1_book_front_matter.html');
const tempFrontMatterPdf = '/tmp/m1_front_matter.pdf';
const outputBookPdf = path.join(docsDir, 'GSEA_S3_M1_Full_Student_Book.pdf');

async function run() {
  console.log('📚 Starting Module 1 Student Book Generation...');

  // 1. Check Chrome
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (!fs.existsSync(chromePath)) {
    console.error('❌ Google Chrome executable not found at:', chromePath);
    process.exit(1);
  }

  // 2. Compile Front Matter HTML to PDF via Headless Chrome
  console.log('  1. Rendering Front Matter (Cover, Index, Guide, Objectives, FE1 Guidelines)...');
  const chromeCmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="/tmp/chrome-pdf-temp-m1" --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${tempFrontMatterPdf}" "${frontMatterHtml}"`;
  execSync(chromeCmd);

  if (!fs.existsSync(tempFrontMatterPdf)) {
    console.error('❌ Failed to generate front matter PDF.');
    process.exit(1);
  }
  console.log('  ✓ Front matter PDF rendered to:', tempFrontMatterPdf);

  // 3. Define ordered list of PDF components to concatenate
  const pdfFilesToMerge = [
    tempFrontMatterPdf,
    path.join(docsDir, 'GSEA_S3_M1_S1_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S1_EASA_Part_ADR_OPS_Synthesis.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S2_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S2_EASA_SIB_2024_09_Ramp_Safety.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S3_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S3_EASA_Runway_Safety_Case.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S4_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S4_EASA_Airfield_Audit_Report.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S5_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S5_Incident_Investigation_Dossier.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S6_Lesson_Worksheet.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S6_EASA_Corrective_Action_Plan.pdf'),
    path.join(docsDir, 'GSEA_S3_M1_S7_Lesson_Worksheet.pdf')
  ];

  for (const p of pdfFilesToMerge) {
    if (!fs.existsSync(p)) {
      console.error('❌ Missing PDF asset for book compilation:', p);
      process.exit(1);
    }
  }

  console.log(`  2. Merging ${pdfFilesToMerge.length} document sections via pdf-lib with stream optimization...`);
  const mergedPdf = await PDFDocument.create();

  for (const f of pdfFilesToMerge) {
    const bytes = fs.readFileSync(f);
    const pdf = await PDFDocument.load(bytes);
    const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  const mergedPdfBytes = await mergedPdf.save();
  fs.writeFileSync(outputBookPdf, mergedPdfBytes);

  const stats = fs.statSync(outputBookPdf);
  const sizeMb = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`  ✓ Successfully assembled Module 1 Student Book!`);
  console.log(`  ✓ Total Pages: ${mergedPdf.getPageCount()} pages`);
  console.log(`  ✓ Output: ${outputBookPdf} (${sizeMb} MB)`);
}

run().catch((err) => {
  console.error('❌ Error generating Module 1 Book:', err);
  process.exit(1);
});
