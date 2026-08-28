const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');
const https = require('https');
const { exec } = require('child_process');
const Tesseract = require('tesseract.js');

const app = express();
const PORT = process.env.PORT || 3000;

const ROOT_DIR = path.resolve(__dirname, '..');
const PROMOS_JSON_PATH = path.join(ROOT_DIR, 'promos.json');
const GITHUB_REPO = 'raksatravel/raksatravel.github.io';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';

let latestQrDataUrl = '';
let isBotReady = false;
let authStatus = 'Menunggu Scan QR Code';

console.log('====================================================');
console.log('🤖 RAKSA TRAVEL - 24/7 CLOUD WHATSAPP BOT LISTENER');
console.log('====================================================\n');

// Detect environment browser path
let browserExecutable = process.env.PUPPETEER_EXECUTABLE_PATH || '';
if (!browserExecutable) {
  const bravePath = 'C:\\Program Files\\BraveSoftware\\Brave-Browser\\Application\\brave.exe';
  const chromeLocal = 'C:\\Users\\Raihan\\.cache\\puppeteer\\chrome\\win64-146.0.7680.31\\chrome-win64\\chrome.exe';
  if (fs.existsSync(bravePath)) browserExecutable = bravePath;
  else if (fs.existsSync(chromeLocal)) browserExecutable = chromeLocal;
}

console.log(`🌐 Browser Engine: ${browserExecutable || 'Default Chromium'}\n`);

// Initialize WhatsApp Web Client
const client = new Client({
  authStrategy: new LocalAuth({
    dataPath: path.join(__dirname, '.wwebjs_auth')
  }),
  puppeteer: {
    headless: true,
    executablePath: browserExecutable || undefined,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      '--disable-gpu'
    ]
  }
});

// QR Code Event
client.on('qr', async (qr) => {
  authStatus = 'Silakan Scan QR Code';
  isBotReady = false;
  console.log('\n📱 SILAKAN SCAN QR CODE WHATSAPP:');
  qrcode.generate(qr, { small: true });

  try {
    latestQrDataUrl = await QRCode.toDataURL(qr, { width: 340, margin: 2 });
  } catch (e) {}
});

client.on('authenticated', () => {
  authStatus = '✅ Autentikasi Berhasil! Sesi tersimpan.';
  latestQrDataUrl = '';
  console.log('\n🎉 AUTENTIKASI WHATSAPP BERHASIL!');
});

client.on('ready', async () => {
  isBotReady = true;
  authStatus = '🚀 BOT ONLINE 24/7 & MEMANTAU SALURAN WHATSAPP';
  console.log('\n🚀 BOT RAKSA TRAVEL AKTIF 24/7 DI CLOUD!');
  console.log('Mendengarkan postingan promo baru secara real-time...\n');
});

// Helper: Parse raw text or OCR text into structured promo data
function parsePromoText(text) {
  if (!text) return null;
  const clean = text.toUpperCase().replace(/\r/g, '\n');
  
  let badge = 'TIKET PROMO';
  let badgeType = 'airline';
  let transit = 'Penerbangan Langsung';
  
  if (clean.includes('SRIWIJAYA')) {
    badge = clean.includes('TRANSIT') ? 'SRIWIJAYA TRANSIT' : 'SRIWIJAYA AIR';
    if (clean.includes('TRANSIT')) transit = 'Transit';
  } else if (clean.includes('LION')) {
    badge = clean.includes('LANGSUNG') ? 'LION AIR LANGSUNG' : 'LION AIR';
  } else if (clean.includes('CITILINK')) {
    badge = 'CITILINK';
  } else if (clean.includes('PELNI') || clean.includes('KAPAL')) {
    badge = 'KAPAL PELNI';
    badgeType = 'ship';
    transit = 'Pelayaran Langsung';
  } else if (clean.includes('GARUDA')) {
    badge = 'GARUDA INDONESIA';
  } else if (clean.includes('BATIK')) {
    badge = 'BATIK AIR';
  }

  const cities = [
    { name: 'Jayapura', code: 'DJJ', aliases: ['JAYAPURA', 'SENTANI', 'DJJ'] },
    { name: 'Makassar', code: 'UPG', aliases: ['MAKASSAR', 'UJUNG PANDANG', 'UPG'] },
    { name: 'Surabaya', code: 'SUB', aliases: ['SURABAYA', 'SUB', 'PERAK'] },
    { name: 'Jakarta', code: 'CGK', aliases: ['JAKARTA', 'CGK', 'HLP'] },
    { name: 'Bali', code: 'DPS', aliases: ['BALI', 'DENPASAR', 'DPS'] },
    { name: 'Sorong', code: 'SOQ', aliases: ['SORONG', 'SOQ'] },
    { name: 'Wamena', code: 'WMX', aliases: ['WAMENA', 'WMX'] },
    { name: 'Timika', code: 'TIM', aliases: ['TIMIKA', 'TIM'] },
    { name: 'Biak', code: 'BIK', aliases: ['BIAK', 'BIK'] },
    { name: 'Merauke', code: 'MKQ', aliases: ['MERAUKE', 'MKQ'] }
  ];

  let origin = 'Jayapura';
  let originCode = 'DJJ';
  let destination = 'Makassar';
  let destinationCode = 'UPG';

  const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);
  let foundCities = [];

  for (const line of lines) {
    for (const c of cities) {
      for (const alias of c.aliases) {
        if (line.includes(alias) && !foundCities.some(fc => fc.code === c.code)) {
          foundCities.push(c);
        }
      }
    }
  }

  if (foundCities.length >= 2) {
    origin = foundCities[0].name;
    originCode = foundCities[0].code;
    destination = foundCities[1].name;
    destinationCode = foundCities[1].code;
  }

  const priceMatch = clean.match(/(\d{1,3}[.,]\d{3}[.,]\d{3}|\d{1,3}[.,]\d{3})/);
  let price = priceMatch ? priceMatch[0].replace(/,/g, '.') : '1.950.000';

  const dateMatch = clean.match(/(TGL\s*[0-9,\sA-Z]+|[0-9]{1,2}\s+(?:JANUARI|FEBRUARI|MARET|APRIL|MEI|JUNI|JULI|AGUSTUS|SEPTEMBER|OKTOBER|NOVEMBER|DESEMBER))/i);
  let date = dateMatch ? dateMatch[0].trim() : 'Keberangkatan Terdekat';

  const baggageMatch = clean.match(/BAGASI\s*\d+\s*KG/i);
  let baggage = baggageMatch ? baggageMatch[0].trim() : 'Bagasi Standar';

  return {
    id: `promo-${Date.now()}`,
    badge,
    badgeType,
    airlineLogo: badgeType === 'ship' ? 'ship' : 'plane',
    origin,
    originCode,
    destination,
    destinationCode,
    transit,
    price,
    date,
    baggage,
    waText: encodeURIComponent(`Halo RaksaTravel, saya mau ambil tiket promo ${badge} ${origin} - ${destination} Rp ${price} (${date})`)
  };
}

// GitHub API Committer function (Cloud-Ready without git cli dependency)
async function commitToGitHubApi(contentJsonString) {
  if (!GITHUB_TOKEN) {
    console.log('⚠️ GITHUB_TOKEN tidak ditemukan di environment. Melewati auto-push GitHub API.');
    return;
  }

  try {
    const getFileUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/promos.json`;
    const options = {
      headers: {
        'User-Agent': 'Raksa-WA-Bot',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    };

    // Get current SHA
    https.get(getFileUrl, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        let sha = '';
        try {
          const fileData = JSON.parse(data);
          sha = fileData.sha || '';
        } catch (e) {}

        const putData = JSON.stringify({
          message: 'auto: update live promo tickets from WhatsApp Channel',
          content: Buffer.from(contentJsonString).toString('base64'),
          sha: sha || undefined
        });

        const req = https.request(getFileUrl, {
          method: 'PUT',
          headers: {
            ...options.headers,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(putData)
          }
        }, (putRes) => {
          if (putRes.statusCode === 200 || putRes.statusCode === 201) {
            console.log('🎉 SUKSES! Website raksatravel.github.io berhasil di-update via GitHub API!');
          } else {
            console.log('⚠️ GitHub API response code:', putRes.statusCode);
          }
        });

        req.write(putData);
        req.end();
      });
    });
  } catch (err) {
    console.error('Error GitHub API:', err.message);
  }
}

// Save promo & trigger sync
async function updatePromos(newPromo) {
  try {
    let promos = [];
    if (fs.existsSync(PROMOS_JSON_PATH)) {
      try {
        promos = JSON.parse(fs.readFileSync(PROMOS_JSON_PATH, 'utf-8'));
      } catch (e) {
        promos = [];
      }
    }

    promos.unshift(newPromo);
    promos = promos.slice(0, 3);
    const jsonStr = JSON.stringify(promos, null, 2);

    // Save locally
    try {
      fs.writeFileSync(PROMOS_JSON_PATH, jsonStr, 'utf-8');
    } catch (e) {}

    console.log(`\n💾 Promo baru disimpan: ${newPromo.origin} -> ${newPromo.destination} (Rp ${newPromo.price})`);

    // Cloud Git Sync
    if (GITHUB_TOKEN) {
      await commitToGitHubApi(jsonStr);
    } else {
      // Local Git CLI
      exec('git add promos.json && git commit -m "auto: update live promo" && git push origin main', { cwd: ROOT_DIR }, () => {});
    }
  } catch (err) {
    console.error('Error updatePromos:', err.message);
  }
}

// Incoming message listener
const handleMessage = async (msg) => {
  try {
    if (!msg) return;
    let isChannel = false;
    try {
      const chat = await msg.getChat();
      if (chat) {
        isChannel = chat.isNewsletter || chat.isChannel || (chat.name || '').toLowerCase().includes('raksa');
      }
    } catch (e) {}

    const bodyText = msg.body || '';
    const isRelevant = isChannel || msg.fromMe || bodyText.toLowerCase().includes('jayapura') || bodyText.toLowerCase().includes('promo') || msg.hasMedia;

    if (isRelevant) {
      console.log(`\n📩 [${new Date().toLocaleTimeString('id-ID')}] POSTINGAN PROMO TERDETEKSI:`);
      if (msg.hasMedia) {
        console.log('🖼️ Menjalankan OCR AI Reader pada gambar poster...');
        const media = await msg.downloadMedia();
        if (media && media.data) {
          const buffer = Buffer.from(media.data, 'base64');
          const { data: { text } } = await Tesseract.recognize(buffer, 'ind+eng');
          console.log('📝 Hasil OCR:\n', text.trim());
          const promoData = parsePromoText(text);
          if (promoData) await updatePromos(promoData);
        }
      } else if (bodyText.length > 0) {
        console.log('📝 Teks:', bodyText);
        const promoData = parsePromoText(bodyText);
        if (promoData) await updatePromos(promoData);
      }
    }
  } catch (err) {
    console.error('Error handleMessage:', err.message);
  }
};

client.on('message_create', handleMessage);
client.on('message', handleMessage);

// Express Web Routes (For Render.com)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Raksa Travel 24/7 Bot Status</title>
      <style>
        body { background: #070d18; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
        .card { background: #0f1a2e; border: 2px solid #25D366; padding: 35px; border-radius: 20px; box-shadow: 0 10px 40px rgba(37, 211, 102, 0.2); max-width: 440px; }
        h1 { color: #25D366; margin-top: 0; }
        .badge { background: rgba(37, 211, 102, 0.2); color: #25D366; padding: 8px 16px; border-radius: 999px; font-weight: bold; display: inline-block; margin: 15px 0; }
        a { color: #38bdf8; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🤖 Raksa Travel WA Bot</h1>
        <div class="badge">${isBotReady ? '🟢 ONLINE 24/7' : '🟡 ' + authStatus}</div>
        <p>Status: <b>${authStatus}</b></p>
        <p><a href="/qr">👉 Buka Halaman Scan QR Code</a></p>
      </div>
    </body>
    </html>
  `);
});

app.get('/qr', (req, res) => {
  if (isBotReady) {
    return res.send(`
      <!DOCTYPE html>
      <html><head><meta charset="UTF-8"><title>Bot Sudah Terhubung</title><style>body{background:#070d18;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;}</style></head>
      <body><div><h1 style="color:#25D366;">✅ Bot Sudah Terhubung!</h1><p>Bot sedang aktif 24 jam memantau Saluran WhatsApp Raksa Travel.</p><p><a href="/" style="color:#38bdf8;">Kembali ke Beranda</a></p></div></body></html>
    `);
  }

  if (!latestQrDataUrl) {
    return res.send(`
      <!DOCTYPE html>
      <html><head><meta charset="UTF-8"><meta http-equiv="refresh" content="3"><title>Menunggu QR Code...</title><style>body{background:#070d18;color:#fff;font-family:sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;}</style></head>
      <body><div><h2>⏳ Sedang Memuat QR Code WhatsApp...</h2><p>Halaman akan refresh otomatis dalam 3 detik...</p></div></body></html>
    `);
  }

  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Scan QR WhatsApp - Raksa Travel</title>
      <style>
        body { background: #070d18; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; padding: 20px; text-align: center; }
        .card { background: #0f1a2e; border: 2px solid #25D366; padding: 30px; border-radius: 20px; box-shadow: 0 10px 40px rgba(37, 211, 102, 0.2); max-width: 420px; }
        h2 { color: #25D366; margin-top: 0; }
        .qr-box { background: #fff; padding: 15px; border-radius: 12px; display: inline-block; margin: 15px 0; }
        .steps { text-align: left; background: rgba(255,255,255,0.05); padding: 15px 20px; border-radius: 10px; font-size: 13px; color: #cbd5e1; }
      </style>
    </head>
    <body>
      <div class="card">
        <h2>📱 Scan QR WhatsApp Cloud</h2>
        <p>Hubungkan bot 24 jam ini ke akun WhatsApp Anda:</p>
        <div class="qr-box">
          <img src="${latestQrDataUrl}" alt="Scan QR WhatsApp" width="280" height="280">
        </div>
        <div class="steps">
          <b>Langkah di HP Anda:</b><br>
          1. Buka <b>WhatsApp</b> di HP<br>
          2. Tekan <b>Titik Tiga</b> > <b>Perangkat Tertaut</b><br>
          3. Tekan <b>Tautkan Perangkat</b> lalu scan gambar di atas
        </div>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🌐 Web Server Render berjalan di port ${PORT}`);
});

console.log('⏳ Menginisialisasi WhatsApp Web Client...');
client.initialize();
