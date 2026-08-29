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
const PORT = process.env.PORT || 7860;

const ROOT_DIR = path.resolve(__dirname, '..');
const PROMOS_JSON_PATH = path.join(ROOT_DIR, 'promos.json');
const GITHUB_REPO = 'raksatravel/raksatravel.github.io';
let GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
try {
  const cfgPath = path.join(__dirname, 'config.json');
  if (fs.existsSync(cfgPath)) {
    const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf-8'));
    if (cfg.GITHUB_TOKEN) GITHUB_TOKEN = cfg.GITHUB_TOKEN;
  }
} catch (e) {}

let latestQrDataUrl = '';
let isBotReady = false;
let authStatus = 'Menunggu Scan QR Code';

console.log('====================================================');
console.log('🤖 RAKSA TRAVEL - REAL-TIME LIVE BOT & AUTO-PUSHER');
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
  authStatus = '🚀 BOT ONLINE & MEMANTAU SALURAN WHATSAPP';
  console.log('\n🚀 BOT RAKSA TRAVEL AKTIF & SIAP MEMANTAU SALURAN WHATSAPP!');
  console.log('Mendengarkan postingan promo baru secara real-time...\n');
});

// Helper: Parse raw text or OCR text into structured promo data
// STRICT FILTER: Only returns object if valid ticket keywords / prices are found!
function parsePromoText(text) {
  if (!text || typeof text !== 'string') return null;
  const clean = text.toUpperCase().replace(/\r/g, '\n');
  
  // Keyword validation check
  const ticketKeywords = ['SRIWIJAYA', 'LION', 'CITILINK', 'GARUDA', 'BATIK', 'PELNI', 'KAPAL', 'TIKET', 'FLIGHT', 'PROMO', 'BAGASI', 'TRANSIT', 'LANGSUNG'];
  const hasTicketKeyword = ticketKeywords.some(kw => clean.includes(kw));

  // Detect Price (e.g. 2,780,000 or 1.960.000 or 980.000)
  const priceMatch = clean.match(/(\d{1,3}[.,]\d{3}[.,]\d{3}|\d{1,3}[.,]\d{3})/);
  
  // If no price and no ticket keyword, ignore this message!
  if (!hasTicketKeyword && !priceMatch) {
    return null;
  }

  let badge = 'TIKET PROMO';
  let badgeType = 'airline';
  let transit = 'Penerbangan Langsung';
  
  if (clean.includes('SRIWIJAYA')) {
    badge = clean.includes('TRANSIT') ? 'SRIWIJAYA TRANSIT' : 'SRIWIJAYA AIR';
    if (clean.includes('TRANSIT')) transit = 'Transit Makassar';
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

  let price = priceMatch ? priceMatch[0].replace(/,/g, '.') : (badgeType === 'ship' ? '980.000' : '1.960.000');

  const dateMatch = clean.match(/(TGL\s*[0-9,\sA-Z]+|[0-9]{1,2}\s+(?:JANUARI|FEBRUARI|MARET|APRIL|MEI|JUNI|JULI|AGUSTUS|SEPTEMBER|OKTOBER|NOVEMBER|DESEMBER))/i);
  let date = dateMatch ? dateMatch[0].trim() : 'Keberangkatan Terdekat';

  const baggageMatch = clean.match(/BAGASI\s*\d+\s*KG/i);
  let baggage = baggageMatch ? ('Termasuk ' + baggageMatch[0].trim()) : (badgeType === 'ship' ? 'Bebas Bagasi Besar' : 'Termasuk Bagasi 15 KG');

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

// GitHub API Committer function
async function commitToGitHubApi(contentJsonString) {
  if (!GITHUB_TOKEN) return;

  try {
    const getFileUrl = `https://api.github.com/repos/${GITHUB_REPO}/contents/promos.json`;
    const options = {
      headers: {
        'User-Agent': 'Raksa-WA-Bot',
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json'
      }
    };

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
          message: 'auto: live promo update from WhatsApp Channel',
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
            console.log('🎉 [GITHUB API] Sukses deploy promo baru ke GitHub Pages!');
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

// Save promo & trigger instant Git Push
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

    // Check duplicate
    const isDuplicate = promos.some(p => p.origin === newPromo.origin && p.destination === newPromo.destination && p.price === newPromo.price && p.date === newPromo.date);
    if (isDuplicate) {
      console.log('ℹ️ Promo ini sudah ada di daftar. Melewati duplikat.');
      return;
    }

    promos.unshift(newPromo);
    promos = promos.slice(0, 3);
    const jsonStr = JSON.stringify(promos, null, 2);

    // Save locally
    try {
      fs.writeFileSync(PROMOS_JSON_PATH, jsonStr, 'utf-8');
    } catch (e) {}

    console.log(`\n💾 PROMO BARU TERVERIFIKASI & DISIMPAN:`);
    console.log(`   Rute: ${newPromo.origin} -> ${newPromo.destination} (${newPromo.badge})`);
    console.log(`   Tarif: Rp ${newPromo.price} | ${newPromo.date}`);

    // Clean any stuck index.lock before git push
    const lockPath = path.join(ROOT_DIR, '.git', 'index.lock');
    if (fs.existsSync(lockPath)) {
      try { fs.unlinkSync(lockPath); } catch (e) {}
    }

    // Auto Push to GitHub
    console.log('🔄 Mengirim pembaruan promo langsung ke GitHub raksatravel.github.io...');
    exec('git add promos.json && git commit -m "auto: live promo update from WhatsApp Channel" && git push origin main', { cwd: ROOT_DIR }, (err) => {
      if (err) {
        console.log('ℹ️ Git CLI fallback ke GitHub API:', err.message);
      } else {
        console.log('🎉 [GIT CLI] SUKSES! Website online Anda di GitHub sudah ter-update secara otomatis!');
      }
    });

    // Cloud Git API
    await commitToGitHubApi(jsonStr);

  } catch (err) {
    console.error('Error updatePromos:', err.message);
  }
}

// Incoming message listener
const handleMessage = async (msg) => {
  try {
    if (!msg) return;
    let chatName = '';
    let isChannel = false;
    
    try {
      const chat = await msg.getChat();
      if (chat) {
        chatName = chat.name || '';
        isChannel = chat.isNewsletter || chat.isChannel || chatName.toLowerCase().includes('raksa');
      }
    } catch (e) {}

    const bodyText = msg.body || '';
    
    // Only process if from channel, or fromMe, or has flight/promo words
    const isCandidate = isChannel || msg.fromMe || bodyText.toUpperCase().includes('PROMO') || bodyText.toUpperCase().includes('JAYAPURA') || bodyText.toUpperCase().includes('MAKASSAR') || msg.hasMedia;

    if (isCandidate) {
      if (msg.hasMedia) {
        console.log(`\n📩 [${new Date().toLocaleTimeString('id-ID')}] POSTINGAN MEDIA BARU DI [${chatName || 'WhatsApp'}]:`);
        console.log('🖼️ Menjalankan AI OCR Reader pada gambar poster...');
        
        try {
          // Delay briefly to allow media buffer to be ready
          await new Promise(r => setTimeout(r, 1200));
          const media = await msg.downloadMedia();
          if (media && media.data) {
            const buffer = Buffer.from(media.data, 'base64');
            const { data: { text } } = await Tesseract.recognize(buffer, 'ind+eng');
            console.log('📝 Teks yang berhasil dibaca dari gambar:\n---\n' + text.trim() + '\n---');
            
            const promoData = parsePromoText(text);
            if (promoData) {
              await updatePromos(promoData);
            } else {
              console.log('ℹ️ Gambar bukan tiket promo. Melewati.');
            }
          }
        } catch (mediaErr) {
          console.log('⚠️ Gagal membaca media:', mediaErr.message);
        }
      } else if (bodyText.length > 5) {
        const promoData = parsePromoText(bodyText);
        if (promoData) {
          console.log(`\n📩 [${new Date().toLocaleTimeString('id-ID')}] POSTINGAN TEKS PROMO DI [${chatName || 'WhatsApp'}]:`);
          await updatePromos(promoData);
        }
      }
    }
  } catch (err) {
    // ignore
  }
};

client.on('message_create', handleMessage);
client.on('message', handleMessage);

// Express Web Routes (For Status & Preview)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="id">
    <head>
      <meta charset="UTF-8">
      <title>Raksa Travel Live Bot</title>
      <style>
        body { background: #070d18; color: #fff; font-family: sans-serif; display: flex; align-items: center; justify-content: center; min-height: 100vh; margin: 0; text-align: center; }
        .card { background: #0f1a2e; border: 2px solid #25D366; padding: 35px; border-radius: 20px; box-shadow: 0 10px 40px rgba(37, 211, 102, 0.2); max-width: 440px; }
        h1 { color: #25D366; margin-top: 0; }
        .badge { background: rgba(37, 211, 102, 0.2); color: #25D366; padding: 8px 16px; border-radius: 999px; font-weight: bold; display: inline-block; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🤖 Raksa Travel WA Bot</h1>
        <div class="badge">${isBotReady ? '🟢 ONLINE & AUTO-PUSH AKTIF' : '🟡 ' + authStatus}</div>
        <p>Status: <b>${authStatus}</b></p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🌐 Server Bot berjalan di port ${PORT}`);
});

console.log('⏳ Menginisialisasi WhatsApp Web Client...');
client.initialize();
