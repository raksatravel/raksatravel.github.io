const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appData = process.env.APPDATA;
const startupDir = path.join(appData, 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup');
const vbsPath = path.join(__dirname, 'start-bot-silent.vbs');
const shortcutTarget = path.join(startupDir, 'RaksaTravel-Bot.vbs');

// Copy vbs to Startup folder
try {
  fs.copyFileSync(vbsPath, shortcutTarget);
  console.log('✅ Auto-Start Windows Berhasil Dipasang!');
  console.log('Bot akan otomatis berjalan di background setiap kali laptop Anda dinyalakan.');
} catch (err) {
  console.error('Gagal memasang auto-start:', err.message);
}
