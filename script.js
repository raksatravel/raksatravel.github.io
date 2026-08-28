/* ===================================================
   RaksaTravel — Main Script
   Bilingual System (ID/EN) + Dark/Light Theme + Interactions
   =================================================== */

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
    id: 'Mitra perjalanan terpercaya untuk pemesanan tiket pesawat dan kapal laut ke seluruh pelosok Nusantara. Pelayanan cepat, ramah, dan harga transparan.',
    en: 'Your trusted travel partner for airplane and ship ticket booking across Indonesia. Fast service, friendly team, and transparent pricing.'
  },
  footer_quick_links: { id: 'Menu Cepat', en: 'Quick Links' },
  footer_support: { id: 'Bantuan & Layanan', en: 'Support & Help' },
  footer_contact_title: { id: 'Hubungi Kami', en: 'Contact Info' },
  footer_help_center: { id: 'Pusat Bantuan WhatsApp', en: 'WhatsApp Help Center' },
  footer_rights: { id: '© 2026 RaksaTravel. Hak cipta dilindungi undang-undang.', en: '© 2026 RaksaTravel. All rights reserved.' },
  footer_built_with: { id: 'Website by Raihan ', en: 'Website by Raihan ' },

  // ================= HOME (index.html) =================
  hero_badge_text: {
    id: 'Mitra Resmi Tiket Pesawat & PELNI Terpercaya',
    en: 'Authorized Flight & Ferry Ticket Partner'
  },
  popular_routes_label: { id: 'Rute Favorit:', en: 'Top Routes:' },
  home_hero_title: {
    id: 'Perjalanan Nyaman Dimulai Bersama RaksaTravel',
    en: 'Comfortable Journeys Begin With RaksaTravel'
  },
  home_hero_desc: {
    id: 'Pesan tiket pesawat dan kapal laut resmi dengan mudah. Kami bantu carikan rute terbaik dan harga bersahabat untuk liburan maupun urusan kerja Anda.',
    en: 'Book official airplane and ship tickets with ease. We help you find the best routes and honest fares for vacations or business trips.'
  },
  home_hero_cta_wa: { id: 'Pesan Tiket via WhatsApp', en: 'Book Tickets via WhatsApp' },
  home_hero_cta_services: { id: 'Lihat Layanan', en: 'Explore Services' },
  home_stat_customers: { id: 'Pelanggan Terlayani', en: 'Satisfied Travelers' },
  home_stat_routes: { id: 'Pilihan Rute Perjalanan', en: 'Available Routes' },
  home_stat_experience: { id: 'Tahun Pengalaman', en: 'Years Experience' },
  hero_logo_tag: { id: 'Travel Agent Tiket Pesawat & Kapal', en: 'Flight & Ferry Ticket Travel Agent' },

  home_dest_label: { id: 'Destinasi Populer', en: 'Popular Destinations' },
  home_dest_title: { id: 'Pilihan Rute Liburan Favorit', en: 'Favorite Holiday Destinations' },
  home_dest_desc: {
    id: 'Mulai dari pantai eksotis hingga pusat bisnis kota besar, temukan tujuan perjalanan impian Anda bersama kami.',
    en: 'From exotic beaches to bustling business hubs, discover your dream travel destination with us.'
  },
  home_dest_bali: { id: 'Denpasar, Bali', en: 'Denpasar, Bali' },
  home_dest_bali_desc: { id: 'Wisata pantai, budaya memukau, dan relaksasi pulau dewata.', en: 'Tropical beaches, rich culture, and island relaxation.' },
  home_dest_jakarta: { id: 'DKI Jakarta', en: 'DKI Jakarta' },
  home_dest_jakarta_desc: { id: 'Pusat bisnis, kuliner nusantara, dan wisata belanja modern.', en: 'Business capital, diverse cuisine, and vibrant city life.' },
  home_dest_surabaya: { id: 'Surabaya, Jawa Timur', en: 'Surabaya, East Java' },
  home_dest_surabaya_desc: { id: 'Kota pahlawan, gerbang menuju Bromo dan wisata bahari.', en: 'City of heroes, gateway to Mount Bromo and marine travel.' },
  home_dest_action: { id: 'Tanya Tiket', en: 'Ask for Tickets' },
  home_price_from: { id: 'Mulai', en: 'From' },

  home_why_label: { id: 'Keunggulan Kami', en: 'Why Choose Us' },
  home_why_title: { id: 'Kenapa Memilih RaksaTravel?', en: 'Why Choose RaksaTravel?' },
  home_why_desc: {
    id: 'Kami mengutamakan kejujuran, kecepatan tanggapan, dan kenyamanan pelanggan sejak awal bertanya hingga tiket terbit.',
    en: 'We prioritize honesty, fast response, and customer comfort from your first inquiry until ticket issuance.'
  },
  home_why_card1_title: { id: 'Tiket Resmi & Valid', en: 'Official & Valid Tickets' },
  home_why_card1_desc: { id: 'Bekerja sama langsung dengan maskapai penerbangan dan operator kapal laut terkemuka di Indonesia.', en: 'Direct partnerships with leading airlines and sea ferry operators across Indonesia.' },
  home_why_card2_title: { id: 'Harga Jujur & Bersaing', en: 'Honest & Best Rates' },
  home_why_card2_desc: { id: 'Tidak ada biaya tersembunyi. Rincian tarif dijelaskan terbuka sebelum Anda melakukan pembayaran.', en: 'No hidden fees. Full fare breakdown is explained clearly before you make any payment.' },
  home_why_card3_title: { id: 'Layanan Cepat via WhatsApp', en: 'Fast WhatsApp Service' },
  home_why_card3_desc: { id: 'Tidak perlu ribet mengisi formulir rumit. Konsultasikan jadwal dan kami siapkan tiketnya secara langsung.', en: 'No complicated registration needed. Chat with our team and we will arrange your tickets quickly.' },

  home_stat_travelers: { id: 'Pelanggan Puas', en: 'Happy Travelers' },
  home_stat_total_routes: { id: 'Rute Pesawat & Kapal', en: 'Flight & Ferry Routes' },
  home_stat_partners: { id: 'Mitra Transportasi', en: 'Transport Partners' },
  home_stat_satisfaction: { id: 'Tingkat Kepuasan', en: 'Satisfaction Rate' },

  home_cta_title: { id: 'Sudah Punya Rencana Bepergian?', en: 'Planning Your Next Trip?' },
  home_cta_desc: {
    id: 'Diskusikan rute, tanggal, dan jumlah penumpang bersama tim kami di WhatsApp. Kami siap bantu carikan harga terbaik.',
    en: 'Discuss your routes, travel dates, and passenger details with our friendly team on WhatsApp today.'
  },
  home_cta_btn_wa: { id: 'Chat WhatsApp Sekarang', en: 'Chat on WhatsApp Now' },
  home_cta_btn_routes: { id: 'Cek Pilihan Tiket', en: 'Check Available Tickets' },

  // ================= CEK TIKET (cek-tiket.html) =================
  check_hero_title: { id: 'Cari & Pesan Tiket Perjalanan', en: 'Search & Book Travel Tickets' },
  check_hero_desc: {
    id: 'Pilih moda transportasi yang Anda inginkan, tentukan kota asal dan tujuan, lalu dapatkan konfirmasi jadwal tercepat via WhatsApp.',
    en: 'Choose your preferred mode of transport, select departure and destination, and get fast schedule confirmation via WhatsApp.'
  },
  check_breadcrumb: { id: 'Cek Tiket', en: 'Check Tickets' },

  check_form_type: { id: 'Jenis Tiket', en: 'Ticket Type' },
  check_form_type_plane: { id: 'Tiket Pesawat (Domestik / Internasional)', en: 'Airplane Ticket (Domestic / International)' },
  check_form_type_ship: { id: 'Tiket Kapal Laut / Feri (PELNI / ASDP)', en: 'Ship / Ferry Ticket (PELNI / ASDP)' },
  check_form_from: { id: 'Kota Asal', en: 'Departure City' },
  check_form_from_ph: { id: 'Contoh: Jakarta', en: 'e.g. Jakarta' },
  check_form_to: { id: 'Kota Tujuan', en: 'Destination City' },
  check_form_to_ph: { id: 'Contoh: Surabaya', en: 'e.g. Surabaya' },
  check_form_date: { id: 'Tanggal Berangkat', en: 'Travel Date' },
  check_form_pax: { id: 'Jumlah Penumpang', en: 'Passengers' },
  check_form_submit: { id: 'Cari Jadwal via WhatsApp', en: 'Check Schedule via WhatsApp' },

  // Image 3 texts
  check_showcase_label: { id: 'DESTINASI FAVORIT', en: 'FAVORITE DESTINATIONS' },
  check_showcase_title: {
    id: 'Rute yang paling banyak dipesan lewat Raksa Travel.',
    en: 'The most booked routes through Raksa Travel.'
  },
  check_showcase_desc: {
    id: 'Arahkan kursor untuk lihat sekilas ceritanya, klik untuk langsung tanya jadwal & harga tiketnya.',
    en: 'Hover to see a brief story, click to ask about schedules & ticket prices.'
  },
  check_reg_jatim: { id: 'JAWA TIMUR', en: 'EAST JAVA' },
  check_dest_sby: { id: 'Surabaya', en: 'Surabaya' },
  check_reg_dki: { id: 'DKI JAKARTA', en: 'DKI JAKARTA' },
  check_dest_jkt: { id: 'Jakarta', en: 'Jakarta' },
  check_reg_sulsel: { id: 'SULAWESI SELATAN', en: 'SOUTH SULAWESI' },
  check_dest_mks: { id: 'Makassar', en: 'Makassar' },
  check_reg_papua: { id: 'PAPUA', en: 'PAPUA' },
  check_dest_jayapura: { id: 'Jayapura', en: 'Jayapura' },
  check_card_action: { id: 'Tanya Jadwal & Harga Tiket →', en: 'Inquire Schedule & Price →' },

  check_steps_label: { id: 'Alur Pemesanan', en: 'Booking Process' },
  check_steps_title: { id: '4 Langkah Mudah Mendapatkan Tiket', en: '4 Simple Steps to Get Your Ticket' },
  check_step1_title: { id: '1. Tentukan Rute', en: '1. Select Your Route' },
  check_step1_desc: { id: 'Pilih kota keberangkatan dan tujuan yang Anda tuju.', en: 'Choose your departure point and desired destination.' },
  check_step2_title: { id: '2. Tentukan Tanggal', en: '2. Pick Travel Date' },
  check_step2_desc: { id: 'Beri tahu kami perkiraan tanggal bepergian dan jumlah orang.', en: 'Let us know your preferred dates and group size.' },
  check_step3_title: { id: '3. Konfirmasi via WA', en: '3. Confirm via WhatsApp' },
  check_step3_desc: { id: 'Tim kami berikan opsi jadwal dan tarif terbaik yang tersedia.', en: 'We send available time slots and the best fare options.' },
  check_step4_title: { id: '4. E-Ticket Diterbitkan', en: '4. Receive E-Ticket' },
  check_step4_desc: { id: 'Lakukan pembayaran aman dan e-ticket resmi dikirim ke WhatsApp Anda.', en: 'Complete secure payment and receive your official e-ticket.' },

  check_cta_title: { id: 'Punya Rute Khusus atau Tiket Rombongan?', en: 'Need a Custom Route or Group Booking?' },
  check_cta_desc: { id: 'Kami siap melayani kebutuhan tiket rombongan, keluarga, atau instansi dengan penawaran khusus.', en: 'We provide tailored deals for family holidays, group outings, and corporate travel.' },
  check_cta_btn_wa: { id: 'Hubungi Customer Care', en: 'Contact Customer Care' },
  check_cta_btn_contact: { id: 'Lihat Info Kontak', en: 'View Contact Details' },

  // ================= TENTANG (tentang.html) =================
  about_hero_title: { id: 'Mengenal Lebih Dekat RaksaTravel', en: 'Getting to Know RaksaTravel' },
  about_hero_desc: { id: 'Perjalanan kami dalam menghadirkan kemudahan tiket perjalanan darat, laut, dan udara bagi masyarakat Indonesia.', en: 'Our journey in bringing accessible and reliable flight and sea travel tickets to everyone.' },
  about_breadcrumb: { id: 'Tentang Kami', en: 'About Us' },

  about_story_label: { id: 'Cerita Kami', en: 'Our Story' },
  about_story_title: { id: 'Berawal dari Komitmen Melayani dengan Tulus', en: 'Started from a Genuine Commitment to Serve' },
  about_story_p1: {
    id: 'RaksaTravel didirikan pada tahun 2016 di Jayapura dengan niat sederhana: membantu masyarakat mendapatkan tiket perjalanan tanpa rasa khawatir akan penipuan atau harga yang melambung tinggi.',
    en: 'RaksaTravel was established in 2016 in Jayapura with a simple aim: to help people obtain genuine travel tickets without worrying about scams or inflated prices.'
  },
  about_story_p2: {
    id: 'Kini, kami telah melayani lebih dari 1.500 pelanggan dari berbagai daerah. Baik Anda yang ingin mudik berkumpul bersama keluarga, berlibur santai, maupun bertugas ke luar pulau, RaksaTravel siap menjadi kawan perjalanan setia Anda.',
    en: 'Today, we have served over 1.500 travelers across Indonesia. Whether visiting family back home, holidaying, or traveling for work, RaksaTravel is your dependable companion.'
  },
  about_story_btn: { id: 'Hubungi Tim Kami', en: 'Get in Touch' },

  about_vm_label: { id: 'Tujuan Kami', en: 'Our Direction' },
  about_vm_title: { id: 'Visi & Misi Perusahaan', en: 'Vision & Mission' },
  about_vision_title: { id: 'Visi Kami', en: 'Our Vision' },
  about_vision_desc: { id: 'Menjadi biro layanan tiket perjalanan paling terpercaya dan paling bersahabat di Indonesia dengan standar pelayanan prima.', en: 'To be Indonesia’s most trusted and friendly travel ticket agency with exemplary customer service standards.' },
  about_mission_title: { id: 'Misi Kami', en: 'Our Mission' },
  about_mission_desc: { id: 'Memberikan kemudahan akses tiket transportasi resmi, tarif bersaing, serta pendampingan ramah dan responsif bagi setiap pelanggan.', en: 'To deliver accessible official tickets, competitive fares, and responsive, heartfelt assistance for every traveler.' },

  about_values_label: { id: 'Prinsip Kerja', en: 'Core Principles' },
  about_values_title: { id: 'Nilai-Nilai yang Kami Pegang', en: 'Values That Guide Us' },
  about_val1_title: { id: 'Integritas & Kejujuran', en: 'Integrity & Honesty' },
  about_val1_desc: { id: 'Informasi rute, harga, dan ketersediaan kursi disampaikan apa adanya tanpa ada yang ditutupi.', en: 'All route details, prices, and seat availability are shared transparently without surprises.' },
  about_val2_title: { id: 'Kecepatan Tanggapan', en: 'Fast Responsiveness' },
  about_val2_desc: { id: 'Waktu Anda sangat berharga. Tim kami selalu siap merespons chat dan pertanyaan Anda dengan sigap.', en: 'Your time is valuable. Our dedicated team is always ready to assist promptly.' },
  about_val3_title: { id: 'Pelayanan Ramah', en: 'Heartfelt Hospitality' },
  about_val3_desc: { id: 'Kami mendengarkan kebutuhan perjalanan Anda layaknya membantu keluarga atau sahabat sendiri.', en: 'We listen to your travel requirements just like we would assist our own family and friends.' },

  about_team_label: { id: 'Orang di Balik Layanan', en: 'Our People' },
  about_team_title: { id: 'Tim Profesional RaksaTravel', en: 'The RaksaTravel Team' },
  about_team_member1_role: { id: 'Founder & Direktur Utama', en: 'Founder & Managing Director' },
  about_team_member1_desc: { id: 'Berpengalaman lebih dari 10 tahun di industri pariwisata dan tiket transportasi nasional.', en: 'Over 10 years of experience in the national travel and transportation industry.' },
  about_team_member2_role: { id: 'Manajer Operasional Tiket', en: 'Ticketing Operations Manager' },
  about_team_member2_desc: { id: 'Memastikan integrasi sistem reservasi maskapai dan kapal berjalan lancar dan akurat.', en: 'Ensures seamless reservation integration across airline and maritime partners.' },
  about_team_member3_role: { id: 'Kepala Layanan Pelanggan', en: 'Customer Care Lead' },
  about_team_member3_desc: { id: 'Memimpin tim WhatsApp support yang siap siaga membantu pemesanan dan jadwal ulang.', en: 'Leads our WhatsApp support team ready to assist with bookings and rescheduling.' },
  about_team_member4_role: { id: 'Koordinator Rute Laut & Feri', en: 'Maritime Routes Coordinator' },
  about_team_member4_desc: { id: 'Spesialis jadwal kapal laut PELNI dan feri penyeberangan antar pulau di Nusantara.', en: 'Specialist in PELNI vessel schedules and inter-island ferry services nationwide.' },

  // ================= LAYANAN (layanan.html) =================
  services_hero_title: { id: 'Layanan Tiket & Perjalanan Lengkap', en: 'Complete Ticketing & Travel Services' },
  services_hero_desc: { id: 'Solusi lengkap pemesanan tiket pesawat, kapal laut, hingga kebutuhan pendukung perjalanan Anda.', en: 'Your comprehensive solution for airline tickets, ship voyages, and travel support.' },
  services_breadcrumb: { id: 'Layanan Kami', en: 'Our Services' },

  services_main_label: { id: 'Layanan Utama', en: 'Primary Services' },
  services_main_title: { id: 'Pilihan Transportasi Unggulan', en: 'Featured Transport Modes' },
  services_main_desc: { id: 'Kami melayani rute domestik seluruh Nusantara dan rute internasional terpopuler.', en: 'We serve all domestic routes across Indonesia and popular international destinations.' },

  services_flight_tag: { id: 'PESAWAT TERBANG', en: 'AIRPLANE FLIGHTS' },
  services_flight_title: { id: 'Tiket Pesawat Domestik & Internasional', en: 'Domestic & International Flight Tickets' },
  services_flight_desc: {
    id: 'Pemesanan tiket seluruh maskapai terkemuka seperti Garuda Indonesia, Citilink, Lion Air, Batik Air, Super Air Jet, AirAsia, dan maskapai internasional lainnya. Opsi penerbangan langsung maupun transit dengan harga transparan.',
    en: 'Booking for all major airlines including Garuda Indonesia, Citilink, Lion Air, Batik Air, Super Air Jet, AirAsia, and international carriers. Direct or transit flights with clear pricing.'
  },
  services_flight_btn: { id: 'Pesan Tiket Pesawat', en: 'Book Flight Ticket' },

  services_ship_tag: { id: 'KAPAL LAUT & FERI', en: 'SHIP & FERRY' },
  services_ship_title: { id: 'Tiket Kapal Laut PELNI & Feri Penyeberangan', en: 'PELNI Ship & Ferry Crossing Tickets' },
  services_ship_desc: {
    id: 'Layanan pemesanan tiket resmi kapal PELNI ke berbagai pelabuhan di Indonesia serta tiket feri ASDP untuk penumpang dan kendaraan. Pilihan kelas ekonomi, kabin wisata, hingga logistik kendaraan.',
    en: 'Official ticketing for PELNI passenger vessels across Indonesian ports and ASDP ferry crossings for passengers and vehicles. Economy class, cabin options, and vehicle transport.'
  },
  services_ship_btn: { id: 'Pesan Tiket Kapal Laut', en: 'Book Ship Ticket' },

  services_extra_label: { id: 'Layanan Tambahan', en: 'Extra Value' },
  services_extra_title: { id: 'Kebutuhan Perjalanan Lainnya', en: 'Complementary Travel Services' },
  services_extra1_title: { id: 'Asuransi Perjalanan', en: 'Travel Insurance' },
  services_extra1_desc: { id: 'Perlindungan ekstra selama perjalanan untuk kenyamanan dan ketenangan pikiran Anda serta keluarga.', en: 'Extra coverage during your journey for peace of mind for you and your family.' },
  services_extra2_title: { id: 'Bantuan Reschedule & Refund', en: 'Reschedule & Refund Help' },
  services_extra2_desc: { id: 'Rencana perjalanan berubah? Kami bantu proses pengajuan perubahan jadwal atau pengembalian dana sesuai kebijakan operator.', en: 'Schedule changes? We assist with date modifications or refund requests in line with carrier policies.' },
  services_extra3_title: { id: 'Tiket Rombongan & Korporat', en: 'Group & Corporate Booking' },
  services_extra3_desc: { id: 'Layanan khusus untuk perjalanan dinas kantor, studi tour sekolah, atau rombongan keluarga besar dengan penawaran menarik.', en: 'Specialized arrangements for corporate trips, school study tours, or large family groups with special quotes.' },
  services_ask_btn: { id: 'Konsultasikan via WA', en: 'Inquire on WhatsApp' },

  // ================= FAQ (faq.html) =================
  faq_hero_title: { id: 'Tanya Jawab Seputar Layanan', en: 'Frequently Asked Questions' },
  faq_hero_desc: { id: 'Jawaban lengkap untuk pertanyaan umum mengenai cara pemesanan, pembayaran, dan ketentuan tiket.', en: 'Clear answers to common questions regarding booking procedures, payments, and ticket terms.' },
  faq_breadcrumb: { id: 'Tanya Jawab (FAQ)', en: 'FAQ' },

  faq_sec1_label: { id: 'Pemesanan Umum', en: 'General Booking' },
  faq_sec1_title: { id: 'Pertanyaan Seputar Pemesanan Tiket', en: 'Ticket Booking Questions' },
  faq_q1: { id: 'Bagaimana langkah praktis memesan tiket di RaksaTravel?', en: 'What are the practical steps to book a ticket with RaksaTravel?' },
  faq_a1: {
    id: 'Sangat mudah! Anda cukup menghubungi kami via WhatsApp di 0821-5304-3601, sebutkan kota asal, tujuan, tanggal keberangkatan, dan jumlah penumpang. Tim kami akan segera mengirimkan daftar jadwal dan harga terbaik untuk Anda pilih.',
    en: 'Very simple! Just contact us on WhatsApp at 0821-5304-3601, specify departure city, destination, travel date, and passenger count. We will send the best schedules and fares for your selection.'
  },
  faq_q2: { id: 'Apakah tiket yang diterbitkan dijamin resmi dan bisa langsung dipakai check-in?', en: 'Are tickets guaranteed official and valid for direct check-in?' },
  faq_a2: {
    id: 'Ya, 100% resmi. Tiket pesawat dilengkapi Kode Booking (PNR) yang bisa Anda cek langsung di website maskapai. Tiket kapal laut juga menyertakan barcode resmi untuk cetak boarding pass di pelabuhan.',
    en: 'Yes, 100% official. Flight tickets come with valid PNR codes verifiable on airline websites. Sea tickets include official barcodes for boarding pass collection at ports.'
  },
  faq_q3: { id: 'Berapa lama proses penerbitan e-ticket setelah pembayaran?', en: 'How long does e-ticket issuance take after payment confirmation?' },
  faq_a3: {
    id: 'Setelah pembayaran terverifikasi, e-ticket biasanya diterbitkan dan dikirimkan ke WhatsApp Anda dalam waktu 5 hingga 15 menit.',
    en: 'Once payment is verified, e-tickets are typically issued and sent to your WhatsApp within 5 to 15 minutes.'
  },

  faq_sec2_label: { id: 'Kapal Laut & Feri', en: 'Ship & Ferry' },
  faq_sec2_title: { id: 'Ketentuan Perjalanan Laut', en: 'Sea Voyage Terms' },
  faq_q4: { id: 'Apakah bisa memesan tiket kapal untuk membawa kendaraan pribadi?', en: 'Can I book ferry tickets for my personal vehicle?' },
  faq_a4: {
    id: 'Bisa. Untuk penyeberangan feri (seperti Merak - Bakauheni, Ketapang - Gilimanuk, dll), kami melayani pemesanan tiket untuk motor, mobil pribadi, maupun truk muatan.',
    en: 'Yes. For ferry crossings (such as Merak - Bakauheni, Ketapang - Gilimanuk, etc.), we arrange tickets for motorcycles, private cars, and freight vehicles.'
  },
  faq_q5: { id: 'Berapa jam sebelum keberangkatan kapal saya harus tiba di pelabuhan?', en: 'How early should I arrive at the port before ship departure?' },
  faq_a5: {
    id: 'Kami menyarankan tiba di pelabuhan minimal 2 jam sebelum jadwal keberangkatan untuk proses penukaran tiket/boarding pass dan pemeriksaan bagasi.',
    en: 'We recommend arriving at the harbor at least 2 hours before scheduled departure for boarding pass exchange and baggage check.'
  },

  faq_sec3_label: { id: 'Pembayaran & Perubahan', en: 'Payment & Changes' },
  faq_sec3_title: { id: 'Metode Bayar & Kebijakan Jadwal', en: 'Payment Methods & Changes' },
  faq_q6: { id: 'Metode pembayaran apa saja yang diterima?', en: 'What payment methods are supported?' },
  faq_a6: {
    id: 'Kami menerima transfer antar bank nasional (BCA, Mandiri, BNI, BRI, BSI), QRIS untuk semua e-wallet (GoPay, OVO, DANA, ShopeePay), serta rekening resmi perusahaan.',
    en: 'We accept national bank transfers (BCA, Mandiri, BNI, BRI, BSI), QRIS across all e-wallets, and official company accounts.'
  },
  faq_q7: { id: 'Bagaimana jika saya ingin mengubah tanggal (reschedule) atau membatalkan tiket?', en: 'What if I need to reschedule or cancel my ticket?' },
  faq_a7: {
    id: 'Hubungi tim kami sesegera mungkin di WhatsApp. Kami akan membantu proses reschedule atau pembatalan sesuai ketentuan dan biaya administrasi maskapai atau operator kapal.',
    en: 'Contact our team on WhatsApp as early as possible. We will assist you with rescheduling or cancellations per the transport operator’s specific policies.'
  },

  // ================= TESTIMONI (testimoni.html) =================
  testi_hero_title: { id: 'Pengalaman Nyata Bersama Kami', en: 'Real Experiences with RaksaTravel' },
  testi_hero_desc: { id: 'Simak cerita dan ulasan tulus dari ribuan pelanggan yang mempercayakan perjalanan mereka kepada RaksaTravel.', en: 'Read sincere reviews from thousands of travelers who rely on RaksaTravel for their journeys.' },
  testi_breadcrumb: { id: 'Testimoni Pelanggan', en: 'Testimonials' },

  testi_stat_rating: { id: 'Penilaian Rata-rata Pelanggan', en: 'Average Customer Rating' },
  testi_stat_tickets: { id: 'Tiket Sukses Diterbitkan', en: 'Tickets Successfully Issued' },

  testi_card1_text: {
    id: '"Pesan tiket pesawat Jakarta - Surabaya mendadak buat urusan dinas. Respon admin WhatsApp sangat cepat dan ramah, 10 menit tiket sudah masuk WA. Sangat membantu!"',
    en: '"Booked a last-minute flight from Jakarta to Surabaya for urgent business. The WhatsApp response was super fast and friendly; e-ticket arrived in 10 minutes!"'
  },
  testi_card1_author: { id: 'Bambang Prasetyo', en: 'Bambang Prasetyo' },
  testi_card1_role: { id: 'Karyawan Swasta, Jakarta', en: 'Corporate Professional, Jakarta' },

  testi_card2_text: {
    id: '"Pertama kali ajak keluarga besar mudik naik kapal laut ke Makassar. Dibantu dari pemilihan kelas kabin sampai tips barang bawaan. Harganya jujur tanpa biaya aneh-aneh."',
    en: '"First time taking my extended family home by ship to Makassar. Guided from cabin selection to baggage advice. Honest pricing with zero hidden costs."'
  },
  testi_card2_author: { id: 'Andini', en: 'Andini' },
  testi_card2_role: { id: 'Ibu Rumah Tangga, Surabaya', en: 'Homemaker, Surabaya' },

  testi_card3_text: {
    id: '"Pernah salah tanggal waktu pesan tiket ke Bali karena terburu-buru. Admin RaksaTravel bantu proses perubahan jadwal dengan sabar dan tuntas. Pelayanan jempolan!"',
    en: '"I once picked the wrong date when rushing to book a Bali flight. RaksaTravel team patiently handled the rescheduling smoothly. Top notch service!"'
  },
  testi_card3_author: { id: 'Zakkry Al-Nazar', en: 'Zakkry Al-Nazar' },
  testi_card3_role: { id: 'Pekerja Kreatif, Wamena', en: 'Creative Worker, Wamena' },

  testi_card4_text: {
    id: '"Langganan tiket kapal feri penyeberangan rombongan mobil kantor ke Lampung. Sangat praktis, tidak perlu antre beli tiket fisik di pelabuhan. Sukses terus RaksaTravel!"',
    en: '"Regular client for group ferry bookings across to Lampung. Extremely convenient; no need to queue for physical tickets at the port. Keep it up!"'
  },
  testi_card4_author: { id: 'Agus Salim', en: 'Agus Salim' },
  testi_card4_role: { id: 'Koordinator Logistik, Tangerang', en: 'Logistics Coordinator, Tangerang' },

  testi_card5_text: {
    id: '"Pelayanan ramah dan penjelasannya sangat jelas buat saya yang jarang bepergian naik pesawat. Terasa aman dan tenang bertransaksi di sini."',
    en: '"Friendly service with clear guidance for someone like me who rarely flies. Felt completely secure and assured transacting with them."'
  },
  testi_card5_author: { id: 'Siti Rahmawati', en: 'Siti Rahmawati' },
  testi_card5_role: { id: 'Wirausaha, Yogyakarta', en: 'Entrepreneur, Yogyakarta' },

  testi_card6_text: {
    id: '"Harga tiketnya bersaing dan pilihan jam terbangnya lengkap. Selalu jadi pilihan pertama keluarga kalau mau liburan."',
    en: '"Competitive fares and comprehensive flight schedules. Always our family’s first choice whenever we plan a holiday."'
  },
  testi_card6_author: { id: 'Kevin Wijaya', en: 'Kevin Wijaya' },
  testi_card6_role: { id: 'Pengusaha, Semarang', en: 'Business Owner, Semarang' },

  // ================= KONTAK (kontak.html) =================
  contact_hero_title: { id: 'Hubungi Tim RaksaTravel', en: 'Get in Touch with RaksaTravel' },
  contact_hero_desc: { id: 'Ada pertanyaan seputar rute, ketersediaan tiket, atau ingin konsultasi jadwal perjalanan? Kami siap melayani Anda.', en: 'Have questions about routes, ticket availability, or need travel schedule advice? We are ready to help.' },
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
  contact_card_addr_title: { id: 'Alamat Kantor', en: 'Office Address' },
  contact_card_addr_val: { id: 'Kompleks Asri Residence, Jayapura, Papua', en: 'Kompleks Asri Residence, Jayapura, Papua' },
  contact_card_hours_title: { id: 'Jam Operasional', en: 'Business Hours' },
  contact_card_hours_val: { id: 'Senin – Sabtu, 08.00 – 20.00 WIT', en: 'Monday – Saturday, 08.00 – 20.00 WIT' },

  contact_form_title: { id: 'Kirim Pesan atau Pertanyaan', en: 'Send a Message or Inquiry' },
  contact_form_desc: { id: 'Tuliskan pesan Anda dan pesan akan langsung diteruskan ke staf WhatsApp kami untuk ditindaklanjuti.', en: 'Write your inquiry below and it will open directly in WhatsApp for prompt follow-up.' },
  contact_form_name: { id: 'Nama Lengkap', en: 'Full Name' },
  contact_form_name_ph: { id: 'Contoh: Ahmad Rizki', en: 'e.g. Ahmad Rizki' },
  contact_form_email: { id: 'Alamat Email', en: 'Email Address' },
  contact_form_email_ph: { id: 'Contoh: ahmad@email.com', en: 'e.g. ahmad@email.com' },
  contact_form_subject: { id: 'Kategori Keperluan', en: 'Inquiry Category' },
  contact_form_msg: { id: 'Pesan / Pertanyaan Anda', en: 'Your Message / Inquiry' },
  contact_form_msg_ph: { id: 'Tuliskan rute, tanggal rencana berangkat, atau pertanyaan yang ingin disampaikan...', en: 'Describe your route, planned travel date, or questions in detail...' },
  contact_form_submit: { id: 'Kirim Pesan ke WhatsApp', en: 'Send Message to WhatsApp' },

  contact_map_title: { id: 'Lokasi Kantor Kami', en: 'Our Office Location' },
  contact_map_open_btn: { id: 'Buka Petunjuk Arah di Google Maps', en: 'Open Directions in Google Maps' },
  contact_hours_detail_title: { id: 'Jadwal Layanan Customer Support', en: 'Customer Support Schedule' },
  contact_day_mon: { id: 'Senin', en: 'Monday' },
  contact_day_tue: { id: 'Selasa', en: 'Tuesday' },
  contact_day_wed: { id: 'Rabu', en: 'Wednesday' },
  contact_day_thu: { id: 'Kamis', en: 'Thursday' },
  contact_day_fri: { id: 'Jumat', en: 'Friday' },
  contact_day_sat: { id: 'Sabtu', en: 'Saturday' },
  contact_day_sun: { id: 'Minggu / Hari Libur', en: 'Sunday / Public Holidays' },
  contact_status_closed: { id: 'Tutup (Emergency WhatsApp Tetap Siaga)', en: 'Closed (Emergency WhatsApp on Standby)' },

  // Select options
  select_inquiry_options: {
    id: ['Tanya Jadwal & Harga Tiket', 'Pemesanan Tiket Baru', 'Permintaan Reschedule / Jadwal Ulang', 'Bantuan Refund / Pembatalan', 'Pemesanan Rombongan / Korporat', 'Lainnya'],
    en: ['Inquire Schedule & Ticket Price', 'New Ticket Booking', 'Reschedule Request', 'Refund Assistance', 'Group / Corporate Booking', 'Other']
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

  // 3D Interactive Hologram Logo Physics Engine (Hero Section - 100% Glitch-Free)
  const hero3DStage = document.getElementById('hero3DStage');
  const hero3DCard = document.getElementById('hero3DCard');
  const heroLogoShine = document.getElementById('heroLogoShine');

  if (hero3DStage && hero3DCard) {
    let currentX = 0, currentY = 0;
    let targetX = 0, targetY = 0;
    let currentZ = 0, targetZ = 0;
    let isHovered = false;
    let idleAngle = 0;

    const handlePointerMove = (clientX, clientY) => {
      const rect = hero3DStage.getBoundingClientRect();
      const x = clientX - (rect.left + rect.width / 2);
      const y = clientY - (rect.top + rect.height / 2);
      targetX = Math.max(Math.min((y / (rect.height / 2)) * -22, 22), -22);
      targetY = Math.max(Math.min((x / (rect.width / 2)) * 22, 22), -22);
      targetZ = 20; // 3D Elevation lift on hover

      // Dynamic Specular Light Glare Follower
      if (heroLogoShine) {
        const shineX = 50 + (x / (rect.width / 2)) * 35;
        const shineY = 50 + (y / (rect.height / 2)) * 35;
        heroLogoShine.style.background = `radial-gradient(circle at ${shineX.toFixed(1)}% ${shineY.toFixed(1)}%, rgba(255, 255, 255, 0.6) 0%, transparent 65%)`;
      }
    };

    const heroSection = document.querySelector('.hero');
    if (heroSection) {
      heroSection.addEventListener('mousemove', (e) => {
        const rect = hero3DStage.getBoundingClientRect();
        if (
          e.clientX >= rect.left - 180 &&
          e.clientX <= rect.right + 180 &&
          e.clientY >= rect.top - 180 &&
          e.clientY <= rect.bottom + 180
        ) {
          isHovered = true;
          handlePointerMove(e.clientX, e.clientY);
        } else {
          isHovered = false;
          targetZ = 0;
        }
      });

      heroSection.addEventListener('mouseleave', () => {
        isHovered = false;
        targetZ = 0;
      });
    }

    // Interactive Click / Tap Spring Pulse
    hero3DStage.addEventListener('mousedown', () => {
      targetZ = -15; // Press down
    });
    window.addEventListener('mouseup', () => {
      if (isHovered) targetZ = 20;
    });

    // Touch support for Mobile
    hero3DStage.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        isHovered = true;
        handlePointerMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    hero3DStage.addEventListener('touchend', () => {
      isHovered = false;
      targetZ = 0;
    });

    // 60FPS Smooth Inertia, Depth Lift, & Idle Floating Loop
    const animate3D = () => {
      if (isHovered) {
        currentX += (targetX - currentX) * 0.09;
        currentY += (targetY - currentY) * 0.09;
        currentZ += (targetZ - currentZ) * 0.1;
      } else {
        idleAngle += 0.022;
        const idleTiltX = Math.sin(idleAngle) * 6;
        const idleTiltY = Math.cos(idleAngle * 0.7) * 9;
        currentX += (idleTiltX - currentX) * 0.045;
        currentY += (idleTiltY - currentY) * 0.045;
        currentZ += (0 - currentZ) * 0.06;
      }

      hero3DCard.style.transform = `rotateX(${currentX.toFixed(2)}deg) rotateY(${currentY.toFixed(2)}deg) translateZ(${currentZ.toFixed(1)}px)`;
      requestAnimationFrame(animate3D);
    };
    animate3D();
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

  // 5. Scroll Reveal with IntersectionObserver
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
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

  // 10. Mark Active Nav Item
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#navLinks > a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // 11. Live Social Proof Booking Toast Notification (High Conversion)
  const recentBookings = [
    { name: 'Bambang P.', route: 'Tiket Pesawat: Jayapura ✈️ Makassar', time: '2 menit lalu', icon: 'fa-plane' },
    { name: 'Siti Rahma', route: 'Tiket Kapal: Surabaya 🚢 Sorong', time: '5 menit lalu', icon: 'fa-ship' },
    { name: 'Andini W.', route: 'Tiket Pesawat: Jayapura ✈️ Surabaya', time: '8 menit lalu', icon: 'fa-plane' },
    { name: 'Zakkry A.', route: 'Tiket Pesawat: Jayapura ✈️ Wamena', time: '11 menit lalu', icon: 'fa-plane' },
    { name: 'Agus Salim', route: 'Tiket Kapal PELNI: Jayapura 🚢 Biak', time: '14 menit lalu', icon: 'fa-ship' },
    { name: 'Kevin W.', route: 'Tiket Pesawat: Jayapura ✈️ Jakarta', time: '18 menit lalu', icon: 'fa-plane' }
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
        <div class="toast-title">✨ ${booking.name} baru memesan</div>
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

  // Start showing social proof after 4.5 seconds, then every 14 seconds
  setTimeout(() => {
    showNextBooking();
    setInterval(showNextBooking, 14000);
  }, 4500);

  // 12. Ergonomic Mobile Bottom Action Bar Injector
  let mobileBar = document.querySelector('.mobile-bottom-bar');
  if (!mobileBar) {
    mobileBar = document.createElement('div');
    mobileBar.className = 'mobile-bottom-bar';
    mobileBar.innerHTML = `
      <div class="mobile-bottom-bar-inner">
        <a href="https://wa.me/6282153043601?text=Halo%20RaksaTravel%2C%20saya%20ingin%20tanya%20dan%20pesan%20tiket" class="mobile-bar-btn mobile-bar-wa" target="_blank" rel="noopener">
          <i class="fab fa-whatsapp"></i> <span>Pesan via WhatsApp</span>
        </a>
        <a href="cek-tiket.html" class="mobile-bar-btn mobile-bar-tickets">
          <i class="fas fa-search"></i> <span>Cek Tiket</span>
        </a>
      </div>
    `;
    document.body.appendChild(mobileBar);
  }
});
