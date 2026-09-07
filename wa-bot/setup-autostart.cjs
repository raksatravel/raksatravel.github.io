const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const appData = process.env.APPDATA;
const startupDir = path.join(appData, 'Microsoft', 'Windows', 'Start Menu', 'Programs', 'Startup');
const vbsPath = path.join(__dirname, 'start-bot-silent.vbs');
const shortcutTarget = path.join(startupDir, 'RaksaTravel-Bot.vbs');

console.log('==================================================');
console.log('⚡ RAKSA TRAVEL - AUTOSTART & 24/7 SETUP INSTALLER');
console.log('==================================================\n');

// 1. Install to Windows Startup Folder
try {
  fs.copyFileSync(vbsPath, shortcutTarget);
  console.log('✅ [1/2] Startup Folder: Berhasil dipasang ke folder Startup Windows.');
} catch (err) {
  console.error('❌ Gagal memasang Startup Folder:', err.message);
}

// 2. Install to Windows Registry Run Key (Dual-layer guarantee)
try {
  const regCmd = `powershell -Command "Set-ItemProperty -Path 'HKCU:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run' -Name 'RaksaTravelBot' -Value 'wscript.exe \\"${vbsPath}\\"'"`;
  execSync(regCmd, { stdio: 'ignore' });
  console.log('✅ [2/2] Windows Registry: Berhasil didaftarkan ke HKCU Run Key.');
} catch (err) {
  console.error('❌ Gagal mendaftarkan registry:', err.message);
}

console.log('\n🚀 Auto-Start 24 Jam siap! Bot akan otomatis menyala di background setiap kali Windows menyala.');
