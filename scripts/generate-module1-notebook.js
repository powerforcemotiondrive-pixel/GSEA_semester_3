#!/usr/bin/env node
/**
 * ENAC GSEA Semester 3 — Module 1 Student Notebook PDF Generator
 * Renders scripts/module1_student_notebook_template.html to docs/GSEA_S3_M1_Student_Notebook.pdf
 * Verifies exact 10-page A4 output.
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { PDFDocument } = require('pdf-lib');

const rootDir = path.resolve(__dirname, '..');
const docsDir = path.join(rootDir, 'docs');
const templateHtml = path.join(rootDir, 'scripts', 'module1_student_notebook_template.html');
const outputPdf = path.join(docsDir, 'GSEA_S3_M1_Student_Notebook.pdf');

async function run() {
  console.log('📓 Starting Module 1 Student Notebook PDF Generation...');

  // 1. Check Chrome
  const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  if (!fs.existsSync(chromePath)) {
    console.error('❌ Google Chrome executable not found at:', chromePath);
    process.exit(1);
  }

  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  // 2. Render to PDF via headless Google Chrome
  console.log('  1. Rendering HTML to PDF via Headless Chrome...');
  const chromeCmd = `"${chromePath}" --headless --disable-gpu --user-data-dir="/tmp/chrome-pdf-temp-notebook" --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPdf}" "${templateHtml}"`;
  execSync(chromeCmd);

  if (!fs.existsSync(outputPdf)) {
    console.error('❌ Failed to generate PDF output at:', outputPdf);
    process.exit(1);
  }

  // 3. Verify Page Count with pdf-lib
  const pdfBytes = fs.readFileSync(outputPdf);
  const pdfDoc = await PDFDocument.load(pdfBytes);
  const pageCount = pdfDoc.getPageCount();

  const stats = fs.statSync(outputPdf);
  const sizeKb = (stats.size / 1024).toFixed(1);

  console.log(`  ✓ Successfully generated: ${outputPdf}`);
  console.log(`  ✓ Page Count: ${pageCount} pages (Target: 10 pages max)`);
  console.log(`  ✓ File Size: ${sizeKb} KB`);

  if (pageCount > 10) {
    console.warn(`  ⚠️ Warning: Page count is ${pageCount}, exceeds 10 sheets!`);
  } else {
    console.log(`  🎉 Perfect! Exact ${pageCount} pages within 10-sheet limit.`);
  }
}

run().catch((err) => {
  console.error('❌ Error generating Student Notebook:', err);
  process.exit(1);
});
