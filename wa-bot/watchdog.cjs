/**
 * RaksaTravel WhatsApp Bot - 24/7 Watchdog Supervisor
 * Ensures continuous 24/7 uptime, self-healing, automatic crash recovery,
 * and background health-check monitoring.
 */

const { spawn, execSync } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

const BOT_DIR = __dirname;
const LOG_FILE = path.join(BOT_DIR, 'bot-watchdog.log');
const BOT_SCRIPT = path.join(BOT_DIR, 'bot.cjs');
const AUTH_SESSION_DIR = path.join(BOT_DIR, '.wwebjs_auth', 'session');

function logWatchdog(msg) {
  const time = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jayapura' });
  const line = `[WATCHDOG ${time}] ${msg}`;
  console.log(line);
  try {
    fs.appendFileSync(LOG_FILE, line + '\n', 'utf-8');
  } catch (e) {}
}

function clearChromeLocks() {
  if (!fs.existsSync(AUTH_SESSION_DIR)) return;
  const lockNames = [
    'lockfile', 'SingletonLock', 'SingletonCookie', 'SingletonSocket',
    'Default/LOCK', 'Default\\LOCK'
  ];
  for (const name of lockNames) {
    const p = path.join(AUTH_SESSION_DIR, name);
    if (fs.existsSync(p)) {
      try {
        fs.unlinkSync(p);
        logWatchdog(`Membersihkan lockfile lama: ${name}`);
      } catch (e) {}
    }
  }
}

function killZombieChrome() {
  try {
    // Kill dangling headless chrome processes if needed
    if (process.platform === 'win32') {
      execSync('taskkill /F /IM chrome.exe /FI "WINDOWTITLE eq about:blank" 2>nul || exit 0', { shell: 'cmd.exe' });
    }
  } catch (e) {}
}

let child = null;
let consecutiveFailures = 0;
let isShuttingDown = false;

function startBot() {
  if (isShuttingDown) return;

  logWatchdog('🚀 Memulai RaksaTravel Bot Engine (bot.cjs)...');
  clearChromeLocks();

  child = spawn(process.execPath, [BOT_SCRIPT], {
    cwd: BOT_DIR,
    stdio: 'inherit',
    env: process.env,
    shell: false
  });

  logWatchdog(`Bot aktif dengan Process ID (PID): ${child.pid}`);

  child.on('error', (err) => {
    logWatchdog(`❌ Error proses bot: ${err.message}`);
  });

  child.on('exit', (code, signal) => {
    logWatchdog(`⚠️ Bot berhenti (Exit Code: ${code}, Signal: ${signal}).`);
    child = null;

    if (!isShuttingDown) {
      logWatchdog('🔄 Me-restart bot otomatis dalam 3 detik...');
      setTimeout(startBot, 3000);
    }
  });
}

// 24/7 Heartbeat & Health Check
// Tests if the internal Express server is alive and responding
function checkHealth() {
  if (!child || isShuttingDown) return;

  const req = http.get('http://localhost:7860/api/status', { timeout: 8000 }, (res) => {
    if (res.statusCode === 200) {
      consecutiveFailures = 0;
    } else {
      consecutiveFailures++;
      logWatchdog(`⚠️ Health-check status code ${res.statusCode} (Gagal ke-${consecutiveFailures})`);
    }
  });

  req.on('error', (err) => {
    consecutiveFailures++;
    // Only warn if fails multiple times in a row (bot might be initializing on startup)
    if (consecutiveFailures >= 3) {
      logWatchdog(`⚠️ Health-check koneksi gagal: ${err.message} (Gagal ke-${consecutiveFailures})`);
    }
  });

  req.on('timeout', () => {
    req.destroy();
    consecutiveFailures++;
    logWatchdog(`⚠️ Health-check timeout (Gagal ke-${consecutiveFailures})`);
  });

  // If unresponsive for 4 checks in a row (~2 minutes of freeze)
  if (consecutiveFailures >= 4) {
    logWatchdog('🚨 Bot tidak merespons selama 2 menit. Melakukan force-kill & restart...');
    consecutiveFailures = 0;
    if (child) {
      try {
        if (process.platform === 'win32') {
          execSync(`taskkill /F /T /PID ${child.pid} 2>nul || exit 0`, { shell: 'cmd.exe' });
        } else {
          child.kill('SIGKILL');
        }
      } catch (e) {}
    }
  }
}

// Start bot
startBot();

// Run health checks every 30 seconds
setInterval(checkHealth, 30000);

// Graceful shutdown handling
process.on('SIGINT', () => {
  logWatchdog('Menerima sinyal SIGINT. Menghentikan Watchdog & Bot...');
  isShuttingDown = true;
  if (child) child.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  logWatchdog('Menerima sinyal SIGTERM. Menghentikan Watchdog & Bot...');
  isShuttingDown = true;
  if (child) child.kill();
  process.exit(0);
});
