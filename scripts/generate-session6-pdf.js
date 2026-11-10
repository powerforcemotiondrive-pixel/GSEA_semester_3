/**
 * GSEA Semester 3 - Session 6 Lesson Worksheet PDF Generator
 * Author: Phil PARRIS (ENAC LH/LAN)
 */
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const outputPath = path.join(rootDir, 'docs', 'GSEA_S3_M1_S6_Lesson_Worksheet.pdf');
const htmlTemplatePath = path.join(__dirname, 's6_worksheet_template.html');

if (!fs.existsSync(htmlTemplatePath)) {
  console.error("HTML template not found:", htmlTemplatePath);
  process.exit(1);
}

const chromePath = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
if (!fs.existsSync(chromePath)) {
  console.error("Chrome executable not found at:", chromePath);
  process.exit(1);
}

const cmd = `"${chromePath}" --headless --disable-gpu --run-all-compositor-stages-before-draw --no-pdf-header-footer --print-to-pdf="${outputPath}" "${htmlTemplatePath}"`;

console.log("Generating Session 6 Lesson Worksheet PDF...");
execSync(cmd);
console.log("✓ PDF generated successfully at:", outputPath);

const stats = fs.statSync(outputPath);
console.log("File size:", stats.size, "bytes (" + (stats.size / 1024).toFixed(1) + " KB)");
