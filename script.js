/* ===================================================
   RaksaTravel — Main Script
   Bilingual System (ID/EN) + Dark/Light Theme + Interactions
   =================================================== */

// ================= Clean URL Engine =================
// Strips trailing .html from browser address bar smoothly without reloading
(function() {
  try {
    const path = window.location.pathname;
    if (path.endsWith('.html')) {
      let clean = path.replace(/\/index\.html$/, '/').replace(/\.html$/, '');
      if (!clean) clean = '/';
      window.history.replaceState(null, '', clean + window.location.search + window.location.hash);
    }
  } catch (e) {}
})();

/* ===== COMPLETE TRANSLATION DICTIONARY ===== */
const T = {
  // Navigation
  nav_home: { id: 'Beranda', en: 'Home' },
  nav_tickets: { id: 'Cek Tiket', en: 'Check Tickets' },
  nav_about: { id: 'Tentang', en: 'About' },
  nav_services: { id: 'Layanan', en: 'Services' },
  nav_faq: { id: 'FAQ', en: 'FAQ' },
  nav_testimonials: { id: 'Testimoni', en: 'Testimonials' },
  nav_contact: { id: 'Kontak', en: 'Contact' },
  nav_book_now: { id: 'Pesan Sekarang', en: 'Book Now' },

  // Footer
  footer_desc: {
    id: 'Agen tiket pesawat dan kapal laut di Jayapura, Papua. Melayani pembelian tiket, info jadwal keberangkatan, dan konsultasi rute perjalanan antar pulau.',
    en: 'Flight and passenger ship ticketing agent based in Jayapura, Papua. Providing booking services, live schedule updates, and inter-island travel support.'
  },
  footer_quick_links: { id: 'Menu Cepat', en: 'Quick Links' },
  footer_support: { id: 'Bantuan', en: 'Help & Support' },
  footer_contact_title: { id: 'Kontak Admin', en: 'Contact Info' },
  footer_help_center: { id: 'Chat WhatsApp Kami', en: 'WhatsApp Help Desk' },
  footer_rights: { id: '© 2026 RaksaTravel. Hak cipta dilindungi undang-undang.', en: '© 2026 RaksaTravel. All rights reserved.' },
  footer_built_with: { id: 'Website by Raihan ', en: 'Website by Raihan ' },

  // ================= HOME (index.html) =================
  hero_badge_text: {
    id: 'Tiket Maskapai & Pelni • Konfirmasi Cepat',
    en: 'Airlines & PELNI Tickets • Fast Confirmation'
  },
  popular_routes_label: { id: 'Rute Populer:', en: 'Top Routes:' },
  home_hero_title: {
    id: 'Mau Bepergian Naik Pesawat atau Kapal? Kami Bantu Urus Tiketnya.',
    en: 'Traveling by Flight or Ship? Let Us Handle Your Tickets.'
  },
  home_hero_desc: {
    id: 'Tinggal kirim rute dan tanggal keberangkatan ke WhatsApp. Kami carikan jadwal yang cocok dan langsung terbitkan tiket resminya tanpa ribet.',
    en: 'Simply send your route and travel dates to WhatsApp. We will find matching schedules and issue official tickets quickly without hassle.'
  },
  home_hero_cta_wa: { id: 'Pesan Tiket via WhatsApp', en: 'Book via WhatsApp' },
  home_hero_cta_services: { id: 'Lihat Pilihan Layanan', en: 'View Travel Services' },
  home_stat_customers: { id: 'Tiket Diterbitkan', en: 'Tickets Issued' },
  home_stat_routes: { id: 'Rute Pesawat & Laut', en: 'Air & Sea Routes' },
  home_stat_experience: { id: 'Tahun di Jayapura', en: 'Years in Jayapura' },
  hero_logo_tag: { id: 'Pemesanan Tiket Pesawat & Kapal Pelni', en: 'Flight & PELNI Ticket Booking' },

  home_dest_label: { id: 'Tujuan Favorit', en: 'Top Destinations' },
  home_dest_title: { id: 'Rute yang Sering Dipesan Minggu Ini', en: 'Frequently Booked Routes' },
  home_dest_desc: {
    id: 'Beberapa kota tujuan penerbangan dan kapal yang paling ramai dipesan pelanggan kami:',
    en: 'Popular destinations most frequently booked by our travelers this week:'
  },
  home_dest_bali: { id: 'Denpasar (Bali)', en: 'Denpasar (Bali)' },
  home_dest_bali_desc: { id: 'Penerbangan liburan dan wisata santai ke Pulau Dewata.', en: 'Leisure and holiday flights connecting directly to Bali.' },
  home_dest_jakarta: { id: 'Jakarta (CGK/HLP)', en: 'Jakarta (CGK/HLP)' },
  home_dest_jakarta_desc: { id: 'Penerbangan bisnis dan urusan dinas kantor ke Ibukota.', en: 'Business and official trips to the capital city hubs.' },
  home_dest_surabaya: { id: 'Surabaya (SUB)', en: 'Surabaya (SUB)' },
  home_dest_surabaya_desc: { id: 'Pintu masuk Jawa Timur dan transit kapal Tanjung Perak.', en: 'East Java gateway and Tanjung Perak maritime seaport route.' },
  home_dest_action: { id: 'Tanya Jadwal', en: 'Ask Schedule' },
  home_price_from: { id: 'Mulai', en: 'From' },

  home_why_label: { id: 'Kemudahan Layanan', en: 'Service Benefits' },
  home_why_title: { id: 'Alasan Penumpang Nyaman Pesan di Raksa Travel', en: 'Why Travelers Book With Raksa Travel' },
  home_why_desc: {
    id: 'Kami pastikan proses pembelian tiket Anda jelas, aman, dan langsung direspons staf kami:',
    en: 'We ensure your booking process is clear, transparent, and assisted directly by staff:'
  },
  home_why_card1_title: { id: 'Tiket Resmi Berkode PNR', en: 'Official PNR Booking Code' },
  home_why_card1_desc: { id: 'Setiap tiket pesawat dan kapal langsung terdaftar di sistem maskapai atau Pelni. Anda bisa cek langsung di situs resmi maskapai.', en: 'Every ticket is registered in the airline or PELNI database with official PNR for direct validation.' },
  home_why_card2_title: { id: 'Rincian Biaya Terbuka', en: 'Transparent Upfront Pricing' },
  home_why_card2_desc: { id: 'Harga yang kami sampaikan di awal sudah termasuk pajak bandara dan bagasi. Tidak ada biaya tambahan yang disembunyikan.', en: 'Quoted prices include airport taxes and standard baggage with zero hidden charges.' },
  home_why_card3_title: { id: 'Dibantu Staf Berpengalaman', en: 'Assisted by Real Staff' },
  home_why_card3_desc: { id: 'Kalau butuh ubah tanggal keberangkatan, salah ketik nama, atau tambah bagasi, staf kami siap bantu sampai selesai.', en: 'Need reschedule, name fixes, or extra baggage? Our staff guides you until completed.' },

  home_stat_travelers: { id: 'Penumpang', en: 'Travelers' },
  home_stat_total_routes: { id: 'Pilihan Rute', en: 'Route Options' },
  home_stat_partners: { id: 'Maskapai & Kapal', en: 'Carriers & Lines' },
  home_stat_satisfaction: { id: 'Kepuasan Penumpang', en: 'Satisfaction Rate' },

  home_cta_title: { id: 'Sudah Tahu Mau Berangkat Kapan?', en: 'Ready to Plan Your Trip?' },
  home_cta_desc: {
    id: 'Ketik kota asal, tujuan, dan perkiraan tanggal berangkat ke WhatsApp kami. Staf kami akan langsung infokan jam dan harga tiketnya.',
    en: 'Send your departure city, destination, and dates to our WhatsApp. Our team will check schedules and prices immediately.'
  },
  home_cta_btn_wa: { id: 'Chat Admin di WhatsApp', en: 'Chat with Admin on WhatsApp' },
  home_cta_btn_routes: { id: 'Cek Pilihan Tiket', en: 'Check Available Routes' },

  // ================= CEK TIKET (cek-tiket.html) =================
  check_hero_title: { id: 'Cek Jadwal & Harga Tiket Perjalanan', en: 'Check Travel Schedules & Fares' },
  check_hero_desc: {
    id: 'Pilih jenis tiket pesawat atau kapal laut, isi kota asal dan tujuan, lalu klik cari. Tim kami segera kirimkan daftar jam keberangkatan dan harga terbarunya.',
    en: 'Pick flights or sea ferries, fill in your origin and destination, and submit. Our staff will send available departure times and current fares via WhatsApp.'
  },
  check_breadcrumb: { id: 'Cek Tiket', en: 'Check Tickets' },

  check_form_type: { id: 'Jenis Moda Transportasi', en: 'Transport Mode' },
  check_form_type_plane: { id: 'Tiket Pesawat (Domestik / Internasional)', en: 'Flight Ticket (Domestic / International)' },
  check_form_type_ship: { id: 'Tiket Kapal Laut / Feri (PELNI / ASDP)', en: 'Ship / Ferry Ticket (PELNI / ASDP)' },
  check_form_from: { id: 'Kota Keberangkatan', en: 'Departure City' },
  check_form_from_ph: { id: 'Contoh: Jayapura (DJJ)', en: 'e.g. Jayapura (DJJ)' },
  check_form_to: { id: 'Kota Tujuan', en: 'Destination City' },
  check_form_to_ph: { id: 'Contoh: Surabaya (SUB)', en: 'e.g. Surabaya (SUB)' },
  check_form_date: { id: 'Tanggal Rencana Berangkat', en: 'Travel Date' },
  check_form_pax: { id: 'Jumlah Penumpang', en: 'Passenger Count' },
  check_form_submit: { id: 'Cari Jadwal via WhatsApp', en: 'Check Schedule on WhatsApp' },

  // Image 3 texts
  check_showcase_label: { id: 'RUTE PILIHAN', en: 'FEATURED ROUTES' },
  check_showcase_title: {
    id: 'Rute yang Paling Sering Dipesan Minggu Ini',
    en: 'Our Most Frequently Booked Routes This Week'
  },
  check_showcase_desc: {
    id: 'Pilih salah satu kota di bawah untuk langsung menanyakan ketersediaan kursi dan harga tiket ke admin kami.',
    en: 'Select any destination below to immediately check seat availability and fares with our team.'
  },
  check_reg_jatim: { id: 'JAWA TIMUR', en: 'EAST JAVA' },
  check_dest_sby: { id: 'Surabaya', en: 'Surabaya' },
  check_reg_dki: { id: 'DKI JAKARTA', en: 'DKI JAKARTA' },
  check_dest_jkt: { id: 'Jakarta', en: 'Jakarta' },
  check_reg_sulsel: { id: 'SULAWESI SELATAN', en: 'SOUTH SULAWESI' },
  check_dest_mks: { id: 'Makassar', en: 'Makassar' },
  check_reg_papua: { id: 'PAPUA', en: 'PAPUA' },
  check_dest_jayapura: { id: 'Jayapura', en: 'Jayapura' },
  check_card_action: { id: 'Tanya Jadwal & Harga Tiket →', en: 'Ask Schedule & Price →' },

  check_steps_label: { id: 'Cara Pesan', en: 'How It Works' },
  check_steps_title: { id: '4 Langkah Cepat Beli Tiket di RaksaTravel', en: '4 Simple Steps to Get Your Ticket' },
  check_step1_title: { id: '1. Kirim Rute & Tanggal', en: '1. Send Route & Date' },
  check_step1_desc: { id: 'Beri tahu kami kota asal, tujuan, dan perkiraan tanggal berangkat Anda lewat chat WhatsApp.', en: 'Message us your departure, destination, and preferred travel date on WhatsApp.' },
  check_step2_title: { id: '2. Pilih Jam & Tarif', en: '2. Pick Flight & Fare' },
  check_step2_desc: { id: 'Admin kami kirimkan pilihan jadwal penerbangan atau kapal laut beserta harga termurah yang tersedia.', en: 'We send available departure times and the lowest prices directly for you to choose.' },
  check_step3_title: { id: '3. Pembayaran Aman', en: '3. Secure Payment' },
  check_step3_desc: { id: 'Transfer via rekening resmi bank kami atau scan QRIS. Konfirmasi pembayaran diverifikasi dalam hitungan menit.', en: 'Transfer via our official bank account or QRIS. Payment is verified within minutes.' },
  check_step4_title: { id: '4. E-Ticket Langsung Dikirim', en: '4. Receive E-Ticket' },
  check_step4_desc: { id: 'File PDF tiket resmi dikirim ke WhatsApp Anda, lengkap dengan kode PNR untuk langsung check-in.', en: 'Your official e-ticket PDF is sent straight to WhatsApp, ready for easy airport/port check-in.' },

  check_cta_title: { id: 'Butuh Tiket Rombongan Kantor atau Keluarga Besar?', en: 'Planning a Group Booking for Office or Family?' },
  check_cta_desc: { id: 'Kami siap bantu carikan kuota kursi rombongan dengan pengaturan bagasi dan tarif spesial yang lebih hemat.', en: 'We help organize group seat quotas, manage baggage logistics, and secure special package rates.' },
  check_cta_btn_wa: { id: 'Konsultasi Tiket Rombongan', en: 'Inquire Group Booking' },
  check_cta_btn_contact: { id: 'Lihat Info Kontak', en: 'View Contact Info' },

  // ================= TENTANG (tentang.html) =================
  about_hero_title: { id: 'Tentang RaksaTravel', en: 'About RaksaTravel' },
  about_hero_desc: { id: 'Mengenal biro tiket perjalanan resmi di Jayapura yang berkomitmen memberikan layanan tiket transparan, jujur, dan mudah diakses siapa saja.', en: 'Learn about our authorized travel ticketing agency in Jayapura, committed to transparent and dependable travel services.' },
  about_breadcrumb: { id: 'Tentang Kami', en: 'About Us' },

  about_story_label: { id: 'Perjalanan Kami', en: 'Our Story' },
  about_story_title: { id: 'Bermula dari Niat Membantu Penumpang Dapat Tiket Resmi', en: 'Started from a Mission to Make Ticketing Honest' },
  about_story_p1: {
    id: 'RaksaTravel pertama kali membuka layanan di Jayapura pada tahun 2016. Saat itu, banyak calon penumpang kapal PELNI dan pesawat mengeluhkan susahnya mencari tiket resmi tanpa tergiur calo atau harga yang melambung tak wajar.',
    en: 'RaksaTravel first opened its doors in Jayapura in 2016. Back then, many travelers struggled to secure official ship and flight tickets without risking unauthorized scalpers or arbitrary markups.'
  },
  about_story_p2: {
    id: 'Dari sana kami hadir dengan prinsip sederhana: melayani setiap pesanan secara terbuka, menerbitkan tiket resmi bergaransi, dan merespons setiap pertanyaan pelanggan dengan cepat lewat chat WhatsApp. Sampai sekarang, lebih dari 1.500 penumpang telah mempercayakan perjalanannya kepada kami.',
    en: 'We built our service on a simple premise: transparent pricing, verified official tickets, and swift, personal customer service on WhatsApp. Today, over 1,500 travelers rely on us for their journeys.'
  },
  about_story_btn: { id: 'Hubungi Tim Kami', en: 'Talk with Our Team' },

  about_vm_label: { id: 'Komitmen Kami', en: 'Our Commitment' },
  about_vm_title: { id: 'Visi & Misi Layanan', en: 'Vision & Mission' },
  about_vision_title: { id: 'Visi', en: 'Vision' },
  about_vision_desc: { id: 'Menjadi biro layanan tiket perjalanan paling dapat diandalkan dan paling nyaman diajak konsultasi di Papua dan seluruh Indonesia.', en: 'To be the most dependable, friendly, and accessible travel ticket partner across Papua and Indonesia.' },
  about_mission_title: { id: 'Misi', en: 'Mission' },
  about_mission_desc: { id: 'Menyediakan akses tiket resmi maskapai dan kapal laut dengan tarif transparan, proses cepat, serta pendampingan ramah dari awal tanya hingga penumpang tiba di tujuan.', en: 'Providing genuine airline and ferry tickets with honest fares, quick turnaround, and attentive customer care every step of the journey.' },

  about_values_label: { id: 'Prinsip Kerja', en: 'Our Values' },
  about_values_title: { id: '3 Nilai yang Selalu Kami Pegang', en: '3 Values We Stand By' },
  about_val1_title: { id: 'Kejujuran Tarif', en: 'Honest Pricing' },
  about_val1_desc: { id: 'Tidak ada biaya tersembunyi. Rincian harga tiket, pajak, dan bagasi kami jelaskan gamblang sebelum Anda transfer.', en: 'Zero unexpected charges. Full fare breakdowns, taxes, and baggage allowances are stated clearly upfront.' },
  about_val2_title: { id: 'Respon Cepat', en: 'Prompt Response' },
  about_val2_desc: { id: 'Kami tahu Anda butuh kepastian jadwal secepatnya. Admin kami selalu siap membalas chat Anda dalam hitungan menit.', en: 'We know travel plans require quick certainty. Our ticketing team responds promptly within minutes.' },
  about_val3_title: { id: 'Tanggung Jawab Penuh', en: 'Full Accountability' },
  about_val3_desc: { id: 'Ada kendala reschedule, pembatalan penerbangan dari maskapai, atau ganti nama? Kami kawal prosesnya sampai tuntas.', en: 'Facing schedule changes, carrier cancellations, or name updates? We guide you through until fully resolved.' },

  about_team_label: { id: 'Tim Kami', en: 'Our People' },
  about_team_title: { id: 'Staf Berpengalaman di Balik RaksaTravel', en: 'The Dedicated Team Behind RaksaTravel' },
  about_team_member1_role: { id: 'Founder & Pengelola Operasional', en: 'Founder & Operations Lead' },
  about_team_member1_desc: { id: 'Berpengalaman lebih dari 10 tahun menangani reservasi tiket penerbangan dan pelayaran di Indonesia Timur.', en: 'Over 10 years of hands-on experience managing flight and sea travel reservations across Eastern Indonesia.' },
  about_team_member2_role: { id: 'Manajer Reservasi Maskapai', en: 'Flight Reservation Specialist' },
  about_team_member2_desc: { id: 'Mengawal integrasi sistem tiket maskapai agar penerbitan kode PNR berjalan instan dan akurat.', en: 'Oversees airline ticketing channels ensuring immediate, accurate PNR issuance for all airlines.' },
  about_team_member3_role: { id: 'Koordinator Tiket Kapal & Feri', en: 'Maritime Routes Coordinator' },
  about_team_member3_desc: { id: 'Spesialis jadwal kapal PELNI, pemesanan kabin kelas, dan tiket penyeberangan feri kendaraan.', en: 'Specialist in PELNI passenger ship schedules, cabin reservations, and vehicle ferry crossings.' },
  about_team_member4_role: { id: 'Customer Care WhatsApp', en: 'WhatsApp Customer Support' },
  about_team_member4_desc: { id: 'Siap membantu konsultasi rute, cek ketersediaan kursi, dan bantuan reschedule setiap hari.', en: 'Dedicated to helping with route inquiries, seat checks, and rescheduling assistance daily.' },

  // ================= LAYANAN (layanan.html) =================
  services_hero_title: { id: 'Layanan Pemesanan Tiket Resmi', en: 'Official Ticketing & Travel Services' },
  services_hero_desc: { id: 'Dari tiket pesawat seluruh maskapai, kapal penumpang PELNI, feri penyeberangan, hingga pengaturan tiket rombongan keluarga dan dinas.', en: 'From major domestic & international airlines to PELNI ships, vehicle ferries, and group corporate bookings.' },
  services_breadcrumb: { id: 'Layanan Kami', en: 'Our Services' },

  services_main_label: { id: 'Layanan Utama', en: 'Core Services' },
  services_main_title: { id: 'Pilihan Transportasi yang Kami Layani', en: 'Transport Modes We Cover' },
  services_main_desc: { id: 'Melayani rute penerbangan dan pelayaran domestik ke seluruh Nusantara serta penerbangan internasional pilihan.', en: 'Covering domestic routes nationwide across Indonesia as well as selected international flights.' },

  services_flight_tag: { id: 'PESAWAT TERBANG', en: 'AIRLINE FLIGHTS' },
  services_flight_title: { id: 'Tiket Pesawat Domestik & Internasional', en: 'Domestic & International Flight Tickets' },
  services_flight_desc: {
    id: 'Pemesanan tiket resmi untuk semua maskapai nasional seperti Garuda Indonesia, Citilink, Batik Air, Lion Air, Super Air Jet, Sriwijaya Air, dan Wings Air. Tersedia rute langsung maupun transit dengan pilihan bagasi sesuai kebutuhan Anda.',
    en: 'Official reservations for Garuda Indonesia, Citilink, Batik Air, Lion Air, Super Air Jet, Sriwijaya Air, and Wings Air. Direct and transit options with flexible baggage selections.'
  },
  services_flight_btn: { id: 'Pesan Tiket Pesawat', en: 'Book Flight Ticket' },

  services_ship_tag: { id: 'KAPAL LAUT & FERI', en: 'PASSENGER SHIPS & FERRIES' },
  services_ship_title: { id: 'Tiket Kapal PELNI & Feri Penyeberangan', en: 'PELNI Vessels & Ferry Crossings' },
  services_ship_desc: {
    id: 'Layanan tiket resmi kapal penumpang PELNI (seperti KM Dobonsolo, KM Labobar, KM Sinabung, dll) dan penyeberangan feri ASDP. Pilihan kelas ekonomi, kabin wisata ber-AC, serta tiket untuk membawa motor atau mobil pribadi.',
    en: 'Official ticketing for PELNI passenger vessels (KM Dobonsolo, KM Labobar, KM Sinabung, etc.) and ASDP ferry crossings. Economy berths, AC tourist cabins, and vehicle boarding passes.'
  },
  services_ship_btn: { id: 'Pesan Tiket Kapal Laut', en: 'Book Ship Ticket' },

  services_extra_label: { id: 'Bantuan Ekstra', en: 'Additional Assistance' },
  services_extra_title: { id: 'Layanan Pendukung Perjalanan Anda', en: 'Travel Support Services' },
  services_extra1_title: { id: 'Asuransi Perjalanan Tambahan', en: 'Travel Protection' },
  services_extra1_desc: { id: 'Bagi Anda yang menginginkan proteksi lebih selama di perjalanan untuk kenyamanan ekstra bersama keluarga.', en: 'Comprehensive travel coverage for complete peace of mind during your journeys.' },
  services_extra2_title: { id: 'Bantuan Reschedule & Ganti Jadwal', en: 'Reschedule & Date Modifications' },
  services_extra2_desc: { id: 'Rencana kerja atau liburan mendadak bergeser? Kami bantu proses pengajuan perubahan tanggal tiket ke pihak maskapai.', en: 'Travel plans shifted? We handle the date change and rebooking process with the transport operator.' },
  services_extra3_title: { id: 'Tiket Rombongan & Carter Perjalanan', en: 'Group & Corporate Travel' },
  services_extra3_desc: { id: 'Pengaturan tiket untuk dinas instansi, studi tour sekolah, atau rombongan keluarga besar dengan koordinasi satu pintu.', en: 'Seamless group booking arrangements for corporate trips, school tours, or large family gatherings.' },
  services_ask_btn: { id: 'Tanya via WhatsApp', en: 'Ask on WhatsApp' },

  // ================= FAQ (faq.html) =================
  faq_hero_title: { id: 'Pertanyaan yang Sering Diajukan', en: 'Frequently Asked Questions' },
  faq_hero_desc: { id: 'Jawaban langsung seputar cara pemesanan, verifikasi tiket resmi, metode transfer, dan bantuan jadwal ulang.', en: 'Direct answers regarding ticket reservations, official PNR verification, payment methods, and rescheduling.' },
  faq_breadcrumb: { id: 'Tanya Jawab (FAQ)', en: 'FAQ' },

  faq_sec1_label: { id: 'Pemesanan', en: 'Booking Inquiries' },
  faq_sec1_title: { id: 'Cara Pesan & Verifikasi Tiket', en: 'Booking & Ticket Verification' },
  faq_q1: { id: 'Bagaimana cara pesan tiket di RaksaTravel?', en: 'How do I book a ticket through RaksaTravel?' },
  faq_a1: {
    id: 'Cukup kirim pesan ke WhatsApp kami di 0821-5304-3601. Sebutkan rute asal, kota tujuan, tanggal rencana jalan, dan jumlah orang. Tim kami langsung cekkan ketersediaan kursi dan pilihan harga termurah untuk Anda.',
    en: 'Just message our WhatsApp at 0821-5304-3601 with your departure city, destination, preferred date, and number of passengers. We will look up live seats and send the best options right away.'
  },
  faq_q2: { id: 'Apakah tiketnya pasti resmi dan bisa dipakai check-in?', en: 'Are the tickets guaranteed official for airport check-in?' },
  faq_a2: {
    id: 'Pasti 100% resmi. Untuk tiket pesawat, Anda akan menerima Kode Booking (PNR) yang bisa dicek langsung di situs resmi maskapai bersangkutan. Untuk tiket kapal laut, kami sertakan barcode resmi untuk cetak boarding pass di pelabuhan.',
    en: '100% genuine. For flights, you receive a valid Booking Code (PNR) verifiable directly on the airline’s website. Ship tickets include official barcoded vouchers for port boarding pass issuance.'
  },
  faq_q3: { id: 'Berapa lama e-ticket dikirim setelah saya transfer?', en: 'How fast will I receive my e-ticket after payment?' },
  faq_a3: {
    id: 'Begitu transfer kami terima, e-ticket resmi biasanya langsung terbit dan dikirimkan ke WhatsApp Anda dalam waktu 5 sampai 15 menit.',
    en: 'Once payment is received, your official PDF e-ticket is typically issued and sent to your WhatsApp in 5 to 15 minutes.'
  },

  faq_sec2_label: { id: 'Kapal Laut & Feri', en: 'Maritime & Ferry' },
  faq_sec2_title: { id: 'Ketentuan Tiket Kapal Laut', en: 'Sea Voyage Details' },
  faq_q4: { id: 'Bisa pesan tiket kapal untuk bawa motor atau mobil?', en: 'Can I book ferry tickets for my motorcycle or car?' },
  faq_a4: {
    id: 'Bisa. Kami melayani tiket penumpang kapal PELNI maupun tiket penyeberangan feri ASDP lengkap dengan kendaraan (motor, mobil keluarga, maupun mobil pick-up).',
    en: 'Yes. We handle passenger tickets for PELNI vessels as well as ASDP ferry boarding passes for passengers with motorcycles or cars.'
  },
  faq_q5: { id: 'Berapa jam sebelum kapal berangkat saya harus standby di pelabuhan?', en: 'How early should I arrive at the port before departure?' },
  faq_a5: {
    id: 'Sebaiknya tiba di pelabuhan minimal 2 jam sebelum jadwal keberangkatan untuk menukar e-ticket dengan boarding pass fisik dan melewati pemeriksaan bagasi.',
    en: 'We recommend arriving at least 2 hours before scheduled departure to exchange your voucher for physical boarding passes and clear baggage check.'
  },

  faq_sec3_label: { id: 'Pembayaran & Reschedule', en: 'Payment & Reschedule' },
  faq_sec3_title: { id: 'Metode Bayar & Perubahan Tiket', en: 'Payments & Date Changes' },
  faq_q6: { id: 'Pembayaran bisa lewat apa saja?', en: 'What payment options do you accept?' },
  faq_a6: {
    id: 'Bisa lewat transfer bank nasional (BCA, Mandiri, BRI, BNI, BSI) maupun scan QRIS untuk semua aplikasi e-wallet (GoPay, OVO, DANA, ShopeePay).',
    en: 'We support bank transfers (BCA, Mandiri, BRI, BNI, BSI) and QRIS payments via all popular e-wallets.'
  },
  faq_q7: { id: 'Kalau jadwal mendadak berubah, apakah bisa reschedule?', en: 'Can I reschedule if my plans change unexpectedly?' },
  faq_a7: {
    id: 'Bisa. Segera kabari admin kami di WhatsApp. Kami bantu ajukan reschedule ke maskapai atau operator kapal sesuai dengan aturan dan ketentuan tarif yang berlaku.',
    en: 'Yes. Notify our WhatsApp admin as soon as possible. We will guide and process your reschedule request following carrier fare policies.'
  },

  // ================= TESTIMONI (testimoni.html) =================
  testi_hero_title: { id: 'Cerita Pengalaman Pelanggan Kami', en: 'Reviews from Our Travelers' },
  testi_hero_desc: { id: 'Ulasan asli dari para penumpang yang memesan tiket pesawat dan kapal laut lewat RaksaTravel.', en: 'Real experiences and honest feedback from passengers who book their journeys with RaksaTravel.' },
  testi_breadcrumb: { id: 'Testimoni Pelanggan', en: 'Testimonials' },

  testi_stat_rating: { id: 'Kepuasan Layanan Pelanggan', en: 'Customer Satisfaction Score' },
  testi_stat_tickets: { id: 'Tiket Berhasil Diterbitkan', en: 'Tickets Successfully Issued' },

  testi_card1_text: {
    id: '"Waktu itu butuh tiket pesawat Jayapura ke Makassar mendadak untuk urusan kerjaan kantor. Chat admin jam 7 pagi langsung dibalas, 10 menit kemudian e-ticket sudah masuk WA. Sangat membantu saat buru-buru."',
    en: '"Needed an urgent flight from Jayapura to Makassar for work. Messaged their team at 7 AM and got an immediate reply. Within 10 minutes, my e-ticket was in my WhatsApp. Lifesaver!"'
  },
  testi_card1_author: { id: 'Bambang Prasetyo', en: 'Bambang Prasetyo' },
  testi_card1_role: { id: 'Pegawai Swasta, Jayapura', en: 'Private Sector Employee, Jayapura' },

  testi_card2_text: {
    id: '"Baru pertama kali beli tiket kapal PELNI buat mudik sekeluarga 6 orang. Dijelaskan detail bedanya kelas ekonomi sama kabin ber-AC. Harganya pas dan gak ada biaya aneh-aneh."',
    en: '"First time booking PELNI ship tickets for a family of 6. The staff explained the difference between economy and AC cabins clearly. Honest price without hidden markups."'
  },
  testi_card2_author: { id: 'Ibu Andini', en: 'Ibu Andini' },
  testi_card2_role: { id: 'Ibu Rumah Tangga, Surabaya', en: 'Homemaker, Surabaya' },

  testi_card3_text: {
    id: '"Sempat panik karena salah sebut tanggal keberangkatan saat pesan tiket ke Bali. Untung adminnya sabar banget dan bantu proses ganti jadwal sampai tuntas tanpa ribet."',
    en: '"Panicked when I realized I gave the wrong departure date for my Bali flight. Thankfully their admin patiently sorted out the reschedule smoothly."'
  },
  testi_card3_author: { id: 'Zakkry Al-Nazar', en: 'Zakkry Al-Nazar' },
  testi_card3_role: { id: 'Fotografer Lepas, Wamena', en: 'Freelance Photographer, Wamena' },

  testi_card4_text: {
    id: '"Sudah jadi langganan tetap tiap kali pesan tiket penyeberangan feri dan kapal logistik kantor. Praktis tinggal WhatsApp, gak perlu antre berdesakan di loket pelabuhan."',
    en: '"Our go-to contact for office vehicle ferry and logistics ticketing. Extremely convenient via WhatsApp, no need to queue for hours at crowded port counters."'
  },
  testi_card4_author: { id: 'Agus Salim', en: 'Agus Salim' },
  testi_card4_role: { id: 'Staf Logistik, Merauke', en: 'Logistics Staff, Merauke' },

  testi_card5_text: {
    id: '"Penjelasannya ramah dan jelas banget untuk orang tua seperti saya yang jarang bepergian naik pesawat. Terasa aman dan tenang bertransaksi di sini."',
    en: '"Patient and clear instructions, especially helpful for seniors like me who rarely travel by plane. Felt safe and well-guided throughout."'
  },
  testi_card5_author: { id: 'Siti Rahmawati', en: 'Siti Rahmawati' },
  testi_card5_role: { id: 'Wirausaha, Biak', en: 'Business Owner, Biak' },

  testi_card6_text: {
    id: '"Harga tiketnya bersaing dan pilihan jam terbangnya selalu dicarikan yang paling pas sama jadwal kegiatan. Rekomendasi buat yang mau beli tiket tanpa repot."',
    en: '"Competitive fares and they always find departure times that fit my schedule perfectly. Highly recommended for hassle-free ticketing."'
  },
  testi_card6_author: { id: 'Kevin Wijaya', en: 'Kevin Wijaya' },
  testi_card6_role: { id: 'Pengusaha, Makassar', en: 'Business Owner, Makassar' },

  // ================= KONTAK (kontak.html) =================
  contact_hero_title: { id: 'Hubungi Tim RaksaTravel', en: 'Contact RaksaTravel Team' },
  contact_hero_desc: { id: 'Ada pertanyaan tentang jadwal penerbangan, harga tiket kapal, atau bantuan perubahan tiket? Tim kami siap melayani Anda setiap hari kerja.', en: 'Have questions about flights, ship schedules, or need help with bookings? Our team is ready to assist daily.' },
  contact_breadcrumb: { id: 'Kontak Kami', en: 'Contact Us' },

  // Image 1 cards
  contact_card_wa_title: { id: 'WhatsApp', en: 'WhatsApp' },
  contact_card_wa_val: { id: '0821-5304-3601', en: '0821-5304-3601' },
  contact_card_email_title: { id: 'Email', en: 'Email' },
  contact_card_email_val: { id: 'santisalmi1005@gmail.com', en: 'santisalmi1005@gmail.com' },
  contact_card_ig_title: { id: 'Instagram', en: 'Instagram' },
  contact_card_ig_val: { id: '@raksatraveljayapura', en: '@raksatraveljayapura' },
  contact_card_fb_title: { id: 'Facebook', en: 'Facebook' },
  contact_card_fb_val: { id: 'RaksaTravelJayapura', en: 'RaksaTravelJayapura' },
  contact_card_addr_title: { id: 'Lokasi Kantor', en: 'Office Location' },
  contact_card_addr_val: { id: 'Kompleks Asri Residence, Jayapura, Papua', en: 'Kompleks Asri Residence, Jayapura, Papua' },
  contact_card_hours_title: { id: 'Jam Operasional', en: 'Office Hours' },
  contact_card_hours_val: { id: 'Senin - Sabtu, 08.00 - 20.00 WIT', en: 'Monday - Saturday, 08.00 - 20.00 WIT' },

  contact_form_title: { id: 'Tulis Pesan atau Pertanyaan Anda', en: 'Send an Inquiry' },
  contact_form_desc: { id: 'Isi pesan di bawah dan percakapan akan langsung tersambung ke admin WhatsApp kami untuk ditanggapi.', en: 'Fill out your message below to immediately connect with our WhatsApp admin for quick assistance.' },
  contact_form_name: { id: 'Nama Lengkap', en: 'Full Name' },
  contact_form_name_ph: { id: 'Contoh: Ahmad Rizki', en: 'e.g. Ahmad Rizki' },
  contact_form_email: { id: 'Alamat Email', en: 'Email Address' },
  contact_form_email_ph: { id: 'Contoh: ahmad@email.com', en: 'e.g. ahmad@email.com' },
  contact_form_subject: { id: 'Kategori Keperluan', en: 'Inquiry Subject' },
  contact_form_msg: { id: 'Pesan / Rincian Rute', en: 'Your Message / Route Details' },
  contact_form_msg_ph: { id: 'Tuliskan rute, perkiraan tanggal keberangkatan, atau hal yang ingin Anda tanyakan...', en: 'Describe your route, planned departure date, or questions...' },
  contact_form_submit: { id: 'Kirim Pesan ke WhatsApp', en: 'Send to WhatsApp' },

  contact_map_title: { id: 'Alamat Kantor Kami', en: 'Our Physical Office' },
  contact_map_open_btn: { id: 'Buka Petunjuk Arah di Google Maps', en: 'Open Directions in Google Maps' },
  contact_hours_detail_title: { id: 'Jam Layanan Customer Support', en: 'Customer Support Hours' },
  contact_day_mon: { id: 'Senin', en: 'Monday' },
  contact_day_tue: { id: 'Selasa', en: 'Tuesday' },
  contact_day_wed: { id: 'Rabu', en: 'Wednesday' },
  contact_day_thu: { id: 'Kamis', en: 'Thursday' },
  contact_day_fri: { id: 'Jumat', en: 'Friday' },
  contact_day_sat: { id: 'Sabtu', en: 'Saturday' },
  contact_day_sun: { id: 'Minggu / Tanggal Merah', en: 'Sunday / Public Holidays' },
  contact_status_closed: { id: 'Tutup (Emergency WhatsApp Tetap Siaga)', en: 'Closed (Emergency WhatsApp on Standby)' },

  // Select options
  select_inquiry_options: {
    id: ['Tanya Jadwal & Harga Tiket', 'Pemesanan Tiket Baru', 'Permintaan Reschedule / Ganti Jadwal', 'Bantuan Refund / Pembatalan', 'Pemesanan Rombongan / Korporat', 'Lainnya'],
    en: ['Check Schedule & Ticket Price', 'New Ticket Booking', 'Reschedule / Date Change Request', 'Refund Assistance', 'Group / Corporate Booking', 'Other']
  }
};

/* ===== THEME CONTROLLER ===== */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('raksaTheme', theme);

  const icon = document.getElementById('themeIcon');
  if (icon) {
    icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
  }
}

/* ===== LANGUAGE CONTROLLER ===== */
function applyLanguage(lang) {
  document.documentElement.setAttribute('data-lang', lang);
  document.documentElement.lang = lang;
  localStorage.setItem('raksaLang', lang);

  // Update text elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (T[key] && T[key][lang] !== undefined) {
      el.textContent = T[key][lang];
    }
  });

  // Update placeholder attributes
  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    if (T[key] && T[key][lang] !== undefined) {
      el.placeholder = T[key][lang];
    }
  });

  // Update dropdown options
  document.querySelectorAll('[data-i18n-opts]').forEach((selectEl) => {
    const key = selectEl.getAttribute('data-i18n-opts');
    if (T[key] && T[key][lang]) {
      const opts = T[key][lang];
      selectEl.querySelectorAll('option').forEach((opt, idx) => {
        if (opts[idx]) opt.textContent = opts[idx];
      });
    }
  });

  // Update nav lang indicators
  const idOpt = document.getElementById('langOptId');
  const enOpt = document.getElementById('langOptEn');
  if (idOpt && enOpt) {
    idOpt.classList.toggle('active', lang === 'id');
    enOpt.classList.toggle('active', lang === 'en');
  }
}

/* ===== DOM INITIALIZATION ===== */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Theme (Default Dark Mode)
  const savedTheme = localStorage.getItem('raksaTheme') || 'dark';
  applyTheme(savedTheme);

  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 2. Initialize Language (Default Indonesian)
  const savedLang = localStorage.getItem('raksaLang') || 'id';
  applyLanguage(savedLang);

  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const currentLang = document.documentElement.getAttribute('data-lang') || 'id';
      applyLanguage(currentLang === 'id' ? 'en' : 'id');
    });
  }

  // 3. Navbar Sticky Effect, Top Progress Bar & Back to Top Button
  const navbar = document.querySelector('.navbar');

  // Inject Top Scroll Progress Bar if not present
  let progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) {
    progressBar = document.createElement('div');
    progressBar.className = 'scroll-progress-bar';
    document.body.prepend(progressBar);
  }

  // Inject Back to Top Button if not present
  let backToTopBtn = document.querySelector('.back-to-top');
  if (!backToTopBtn) {
    backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top';
    backToTopBtn.setAttribute('aria-label', 'Kembali ke atas');
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Inject Floating WhatsApp Tooltip
  document.querySelectorAll('.wa-float').forEach((waBtn) => {
    if (!waBtn.querySelector('.wa-tooltip')) {
      const tooltip = document.createElement('span');
      tooltip.className = 'wa-tooltip';
      tooltip.textContent = 'Chat Kami di WhatsApp';
      waBtn.appendChild(tooltip);
    }
  });

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (navbar) {
      navbar.classList.toggle('scrolled', scrollY > 30);
    }
    if (progressBar && docHeight > 0) {
      const progress = Math.min((scrollY / docHeight) * 100, 100);
      progressBar.style.width = `${progress}%`;
    }
    if (backToTopBtn) {
      backToTopBtn.classList.toggle('visible', scrollY > 280);
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // Smooth Card Interactive Tilt Effect for General Cards & Destination/Service 3D Cards
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    // 1. Destination & Service Cards (Deep 3D Hologram Tilt & Parallax)
    const deep3DCards = document.querySelectorAll('.dest-card, .dest-showcase-card, .service-card');
    deep3DCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -11;
        const rotateY = ((x - centerX) / centerX) * 11;
        card.style.transform = `perspective(1000px) translateY(-10px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });

    // 2. Standard Interactive Cards
    const standardCards = document.querySelectorAll('.card:not(.dest-card), .testimonial-card, .team-card, .contact-card');
    standardCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -3.5;
        const rotateY = ((x - centerX) / centerX) * 3.5;
        card.style.transform = `perspective(1000px) translateY(-6px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  // 3D Interactive Hologram Logo Physics Engine (Hero Section - Lightweight & Battery-Friendly)
  const hero3DStage = document.getElementById('hero3DStage');
  const hero3DCard = document.getElementById('hero3DCard');
  const heroLogoShine = document.getElementById('heroLogoShine');

  if (hero3DStage && hero3DCard) {
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let currentZ = 0, targetZ = 0;
    let isHovered = false;
    let idleAngle = 0;
    let isStageInView = true;
    let animationFrameId = null;

    // Viewport Liveness Observer (Zero CPU & Battery consumption when scrolled away)
    if ('IntersectionObserver' in window) {
      const stageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            isStageInView = entry.isIntersecting;
            hero3DCard.style.animationPlayState = isStageInView ? 'running' : 'paused';
            if (isStageInView && !animationFrameId && !isTouchDevice) {
              animate3D();
            }
          });
        },
        { threshold: 0.1 }
      );
      stageObserver.observe(hero3DStage);
    }

    const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (window.innerWidth <= 768);

    const handlePointerMove = (clientX, clientY) => {
      const rect = hero3DStage.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      targetX = Math.max(Math.min((y / (rect.height / 2)) * -16, 16), -16);
      targetY = Math.max(Math.min((x / (rect.width / 2)) * 16, 16), -16);
      targetZ = 20;

      if (heroLogoShine) {
        const shineX = 50 + (x / (rect.width / 2)) * 35;
        const shineY = 50 + (y / (rect.height / 2)) * 35;
        heroLogoShine.style.background = `radial-gradient(circle at ${shineX.toFixed(1)}% ${shineY.toFixed(1)}%, rgba(255, 255, 255, 0.6) 0%, transparent 65%)`;
      }
    };

    if (!isTouchDevice) {
      const heroSection = document.querySelector('.hero');
      if (heroSection) {
        heroSection.addEventListener('mousemove', (e) => {
          const rect = hero3DStage.getBoundingClientRect();
          if (
            e.clientX >= rect.left - 150 &&
            e.clientX <= rect.right + 150 &&
            e.clientY >= rect.top - 150 &&
            e.clientY <= rect.bottom + 150
          ) {
            isHovered = true;
            handlePointerMove(e.clientX, e.clientY);
          } else {
            isHovered = false;
            targetZ = 0;
          }
        }, { passive: true });

        heroSection.addEventListener('mouseleave', () => {
          isHovered = false;
          targetZ = 0;
        });
      }

      hero3DStage.addEventListener('mousedown', () => { targetZ = -10; });
      window.addEventListener('mouseup', () => { if (isHovered) targetZ = 20; });

      // High performance smooth render loop only on desktop
      const animate3D = () => {
        if (!isStageInView) {
          animationFrameId = null;
          return;
        }

        if (isHovered) {
          currentX += (targetX - currentX) * 0.1;
          currentY += (targetY - currentY) * 0.1;
          currentZ += (targetZ - currentZ) * 0.1;
        } else {
          idleAngle += 0.02;
          const idleTiltX = Math.sin(idleAngle) * 4.5;
          const idleTiltY = Math.cos(idleAngle * 0.7) * 6;
          currentX += (idleTiltX - currentX) * 0.04;
          currentY += (idleTiltY - currentY) * 0.04;
          currentZ += (0 - currentZ) * 0.05;
        }

        hero3DCard.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(${currentZ.toFixed(1)}px)`;
        animationFrameId = requestAnimationFrame(animate3D);
      };

      animate3D();
    } else {
      // Fluid mobile touch 3D gesture
      hero3DStage.addEventListener('touchstart', (e) => {
        if (e.touches.length > 0) {
          hero3DCard.style.animationPlayState = 'paused';
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
          hero3DCard.style.transform = `rotateX(${targetX.toFixed(2)}deg) rotateY(${targetY.toFixed(2)}deg) translateZ(8px)`;
        }
      }, { passive: true });

      hero3DStage.addEventListener('touchmove', (e) => {
        if (e.touches.length > 0) {
          handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
          hero3DCard.style.transform = `rotateX(${targetX.toFixed(2)}deg) rotateY(${targetY.toFixed(2)}deg) translateZ(8px)`;
        }
      }, { passive: true });

      hero3DStage.addEventListener('touchend', () => {
        hero3DCard.style.transform = '';
        hero3DCard.style.animationPlayState = isStageInView ? 'running' : 'paused';
      }, { passive: true });
    }
  }

  // 4. Mobile Menu Navigation
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  const navOverlay = document.getElementById('navOverlay');

  const openMobileMenu = () => {
    if (!navToggle || !navLinks) return;
    navLinks.classList.add('active');
    navToggle.classList.add('active');
    if (navOverlay) navOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeMobileMenu = () => {
    if (!navToggle || !navLinks) return;
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    if (navOverlay) navOverlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  const toggleMobileMenu = (e) => {
    if (e) e.stopPropagation();
    if (!navLinks) return;
    if (navLinks.classList.contains('active')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  if (navToggle) {
    navToggle.addEventListener('click', toggleMobileMenu);
  }
  if (navOverlay) {
    navOverlay.addEventListener('click', closeMobileMenu);
  }

  // Close when clicking any menu link
  document.querySelectorAll('#navLinks a').forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  });

  // Reset menu if window is resized above 1024px
  window.addEventListener('resize', () => {
    if (window.innerWidth > 1024 && navLinks && navLinks.classList.contains('active')) {
      closeMobileMenu();
    }
  }, { passive: true });

  // 5. Scroll Reveal with IntersectionObserver & Instant Hero Reveal
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 50px 0px' }
    );
    revealElements.forEach((el) => revealObserver.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add('visible'));
  }

  // Immediate reveal for hero elements so they render without any delay
  requestAnimationFrame(() => {
    document.querySelectorAll('.hero .reveal, .page-hero .reveal, .navbar').forEach((el) => {
      el.classList.add('visible');
    });
  });

  // 6. Number Counter Animation
  const counters = document.querySelectorAll('[data-counter]');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter'), 10);
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 1800;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentVal = Math.round(target * easedProgress);
          el.textContent = prefix + currentVal.toLocaleString('id-ID') + suffix;
          if (progress < 1) requestAnimationFrame(updateCounter);
        };

        requestAnimationFrame(updateCounter);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.3 }
  );
  counters.forEach((el) => counterObserver.observe(el));

  // 7. Interactive FAQ Accordion
  document.querySelectorAll('.faq-item').forEach((item) => {
    const question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', () => {
      const isCurrentlyActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach((otherItem) => {
        otherItem.classList.remove('active');
      });
      if (!isCurrentlyActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. Contact Form Submission → WhatsApp
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('formName')?.value.trim() || '';
      const email = document.getElementById('formEmail')?.value.trim() || '';
      const subject = document.getElementById('formSubject')?.value || '';
      const message = document.getElementById('formMessage')?.value.trim() || '';

      const currentLang = document.documentElement.getAttribute('data-lang') || 'id';
      let waText = '';

      if (currentLang === 'en') {
        waText = `Hello RaksaTravel, my name is ${name}.\nEmail: ${email}\nCategory: ${subject}\n\nMessage:\n${message}`;
      } else {
        waText = `Halo RaksaTravel, nama saya ${name}.\nEmail: ${email}\nKategori: ${subject}\n\nPesan:\n${message}`;
      }

      const waUrl = `https://wa.me/6282153043601?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 9. Ticket Search Form Submission → WhatsApp
  const ticketForm = document.getElementById('ticketForm');
  if (ticketForm) {
    ticketForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const type = document.getElementById('ticketType')?.value || '';
      const from = document.getElementById('departure')?.value.trim() || '';
      const to = document.getElementById('destination')?.value.trim() || '';
      const date = document.getElementById('travelDate')?.value || '';
      const pax = document.getElementById('passengers')?.value || '1';

      const currentLang = document.documentElement.getAttribute('data-lang') || 'id';
      let waText = '';

      if (currentLang === 'en') {
        waText = `Hello RaksaTravel, I would like to book a ticket:\n- Transport: ${type}\n- From: ${from}\n- To: ${to}\n- Date: ${date}\n- Passengers: ${pax} person(s)\n\nCould you please share available schedules and fares?`;
      } else {
        waText = `Halo RaksaTravel, saya ingin menanyakan dan memesan tiket:\n- Jenis: ${type}\n- Asal: ${from}\n- Tujuan: ${to}\n- Tanggal: ${date}\n- Jumlah: ${pax} orang\n\nMohon info jadwal dan harga tiket yang tersedia. Terima kasih!`;
      }

      const waUrl = `https://wa.me/6282153043601?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
    });
  }

  // 10. Mark Active Nav Item (Supports Clean URL and .html)
  const currentCleanPath = window.location.pathname.split('/').pop().replace(/\.html$/, '') || '';
  document.querySelectorAll('#navLinks > a').forEach((link) => {
    const hrefClean = (link.getAttribute('href') || '').replace(/^\.\//, '').replace(/\.html$/, '');
    if (
      (currentCleanPath === '' && (hrefClean === '' || hrefClean === '.' || hrefClean === 'index')) ||
      (currentCleanPath !== '' && hrefClean === currentCleanPath)
    ) {
      link.classList.add('active');
    }
  });

  // Mobile Bottom Bar Clean Link
  const mobileCheckLink = document.querySelector('.mobile-bar-tickets');
  if (mobileCheckLink) {
    mobileCheckLink.setAttribute('href', 'cek-tiket');
  }

  // 11. Live Social Proof Booking Toast Notification (High Conversion)
  const recentBookings = [
    { name: 'Bambang P.', route: 'Tiket Pesawat: Jayapura - Makassar', time: '2 menit lalu', icon: 'fa-plane' },
    { name: 'Siti Rahma', route: 'Tiket Kapal: Surabaya - Sorong', time: '5 menit lalu', icon: 'fa-ship' },
    { name: 'Andini W.', route: 'Tiket Pesawat: Jayapura - Surabaya', time: '8 menit lalu', icon: 'fa-plane' },
    { name: 'Zakkry A.', route: 'Tiket Pesawat: Jayapura - Wamena', time: '11 menit lalu', icon: 'fa-plane' },
    { name: 'Agus Salim', route: 'Tiket Kapal PELNI: Jayapura - Biak', time: '14 menit lalu', icon: 'fa-ship' },
    { name: 'Kevin W.', route: 'Tiket Pesawat: Jayapura - Jakarta', time: '18 menit lalu', icon: 'fa-plane' }
  ];

  let toastEl = document.querySelector('.live-booking-toast');
  if (!toastEl) {
    toastEl = document.createElement('div');
    toastEl.className = 'live-booking-toast';
    document.body.appendChild(toastEl);
  }

  let bookingIndex = 0;
  let toastTimeout = null;

  const showNextBooking = () => {
    if (!toastEl) return;
    const booking = recentBookings[bookingIndex];
    bookingIndex = (bookingIndex + 1) % recentBookings.length;

    toastEl.innerHTML = `
      <div class="toast-avatar"><i class="fas ${booking.icon}"></i></div>
      <div class="toast-body">
        <div class="toast-title">${booking.name} baru memesan</div>
        <div class="toast-route">${booking.route}</div>
        <div class="toast-time"><i class="far fa-clock"></i> ${booking.time} • Terverifikasi</div>
      </div>
      <button class="toast-close" aria-label="Tutup"><i class="fas fa-times"></i></button>
    `;

    toastEl.classList.add('show');

    toastEl.onclick = (e) => {
      if (e.target.closest('.toast-close')) {
        toastEl.classList.remove('show');
        return;
      }
      window.open('https://wa.me/6282153043601?text=Halo%20RaksaTravel%2C%20saya%20ingin%20tanya%20dan%20pesan%20tiket', '_blank');
    };

    if (toastTimeout) clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 4500);
  };

  // Start showing social proof after 4.5 seconds, then periodically
  const isMobileForToast = window.innerWidth <= 768;
  const toastInterval = isMobileForToast ? 25000 : 14000;
  const toastInitialDelay = isMobileForToast ? 6000 : 4500;
  setTimeout(() => {
    showNextBooking();
    setInterval(showNextBooking, toastInterval);
  }, toastInitialDelay);

    // 14. Dynamic Poster Gallery Loader from promo-posters.json (With Mobile/PC Adaptive Rendering)
    const posterGrid = document.getElementById('promoPosterGrid');
    if (posterGrid) {
      const isMobileDevice = window.innerWidth <= 768;
      fetch(`promo-posters.json?_t=${Date.now()}`)
        .then(res => {
          if (!res.ok) throw new Error('Network error');
          return res.json();
        })
        .then(posters => {
          if (!Array.isArray(posters) || posters.length === 0) return;

          posterGrid.innerHTML = posters.slice(0, 6).map((p, idx) => {
            const icon = p.badgeType === 'ship' ? 'fa-ship' : 'fa-plane';
            const badgeLabel = p.badge || 'TIKET PROMO';
            const title = p.title || 'Promo Spesial';
            const desc = p.desc || `Promo ${badgeLabel} dengan harga spesial. Terbatas!`;
            const waLink = `https://wa.me/6282153043601?text=${p.waText || encodeURIComponent('Halo RaksaTravel, saya tertarik promo ' + title)}`;

            return `
              <div class="promo-poster-card visible">
                <div class="promo-poster-img">
                  <img src="${p.image}" alt="${title}" loading="${idx === 0 || !isMobileDevice ? 'eager' : 'lazy'}" decoding="async">
                </div>
                <div class="promo-poster-body">
                  <span class="promo-poster-tag"><i class="fas ${icon}"></i> ${badgeLabel}</span>
                  <h3>${title}</h3>
                  <p>${desc}</p>
                  <a href="${waLink}" class="btn btn-accent btn-sm" target="_blank" rel="noopener">
                    <i class="fab fa-whatsapp"></i> Pesan Sekarang
                  </a>
                </div>
              </div>
            `;
          }).join('');
        })
        .catch(() => {});
    }

  // ===================================================
  // 15. PC Motion Cursor & Magnetic Physics Engine (Framer Motion Inspired)
  // ===================================================
  const isFinePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 992px)').matches;
  const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (isFinePointer && !isReducedMotion) {
    // Inject Cursor DOM
    const dot = document.createElement('div');
    dot.className = 'motion-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'motion-cursor-ring';
    const glow = document.createElement('div');
    glow.className = 'motion-cursor-glow';

    document.body.appendChild(glow);
    document.body.appendChild(ring);
    document.body.appendChild(dot);

    let mouseX = -200, mouseY = -200;
    let dotX = -200, dotY = -200;
    let ringX = -200, ringY = -200;
    let glowX = -200, glowY = -200;
    let isVisible = false;
    let isHovering = false;

    // Smooth Spring Lerp interpolation (mass/damping model)
    const lerp = (start, end, factor) => start + (end - start) * factor;

    // Motion Loop
    const renderMotionCursor = () => {
      // Dot follows immediately with tight spring
      dotX = lerp(dotX, mouseX, 0.45);
      dotY = lerp(dotY, mouseY, 0.45);
      dot.style.transform = `translate3d(${dotX - 4}px, ${dotY - 4}px, 0)`;

      // Ring trails with smooth physics easing
      ringX = lerp(ringX, mouseX, isHovering ? 0.28 : 0.18);
      ringY = lerp(ringY, mouseY, isHovering ? 0.28 : 0.18);
      ring.style.transform = `translate3d(${ringX - 19}px, ${ringY - 19}px, 0)`;

      // Ambient glow follows lazily
      glowX = lerp(glowX, mouseX, 0.08);
      glowY = lerp(glowY, mouseY, 0.08);
      glow.style.transform = `translate3d(${glowX - 160}px, ${glowY - 160}px, 0)`;

      requestAnimationFrame(renderMotionCursor);
    };

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dotX = mouseX;
        dotY = mouseY;
        ringX = mouseX;
        ringY = mouseY;
        glowX = mouseX;
        glowY = mouseY;
        glow.style.opacity = '1';
        dot.classList.remove('motion-cursor-hidden');
        ring.classList.remove('motion-cursor-hidden');
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      glow.style.opacity = '0';
      dot.classList.add('motion-cursor-hidden');
      ring.classList.add('motion-cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      glow.style.opacity = '1';
      dot.classList.remove('motion-cursor-hidden');
      ring.classList.remove('motion-cursor-hidden');
    });

    // Interactive Hover Elements (Links, Buttons, Cards, Inputs)
    const interactiveSelector = 'a, button, input, select, textarea, .card, .dest-card, .dest-showcase-card, .service-card, .faq-question, .contact-card, .badge, .hero-search-btn';
    
    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        isHovering = true;
        ring.classList.add('cursor-hover');
        dot.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest(interactiveSelector);
      if (target) {
        isHovering = false;
        ring.classList.remove('cursor-hover');
        dot.classList.remove('cursor-hover');
      }
    });

    // Click micro-motion
    document.addEventListener('mousedown', () => {
      ring.classList.add('cursor-active');
      dot.classList.add('cursor-active');
    });

    document.addEventListener('mouseup', () => {
      ring.classList.remove('cursor-active');
      dot.classList.remove('cursor-active');
    });

    // Magnetic pull effect on primary buttons
    const magneticBtns = document.querySelectorAll('.btn, .theme-toggle-btn, .lang-toggle-btn, .nav-logo');
    magneticBtns.forEach((btn) => {
      btn.addEventListener('mousemove', (e) => {
        const rect = btn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const pullX = (e.clientX - centerX) * 0.22;
        const pullY = (e.clientY - centerY) * 0.22;
        btn.style.transform = `translate3d(${pullX.toFixed(2)}px, ${pullY.toFixed(2)}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = '';
      });
    });

    // Particle ripple burst on click
    document.addEventListener('click', (e) => {
      const colors = ['#60A5FA', '#3B82F6', '#F97316', '#38BDF8'];
      for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.className = 'motion-click-particle';
        particle.style.background = colors[i % colors.length];
        document.body.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 5;
        const distance = 24 + Math.random() * 18;
        const targetX = e.clientX + Math.cos(angle) * distance;
        const targetY = e.clientY + Math.sin(angle) * distance;

        particle.animate([
          { transform: `translate3d(${e.clientX}px, ${e.clientY}px, 0) scale(1)`, opacity: 0.9 },
          { transform: `translate3d(${targetX}px, ${targetY}px, 0) scale(0)`, opacity: 0 }
        ], {
          duration: 450,
          easing: 'cubic-bezier(0.16, 1, 0.3, 1)'
        }).onfinish = () => particle.remove();
      }
    });

    // Start requestAnimationFrame loop
    renderMotionCursor();
  }
});
