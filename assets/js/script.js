/* NEO-BRUTALISM WIREFRAME SCRIPT */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // MULTI-LANGUAGE (ID/EN) ENGINE
  // ==========================================
  const translations = {
    id: {
      nav_services: "Layanan",
      nav_pricing: "Harga",
      nav_demo: "Demo",
      nav_process: "Proses",
      nav_faq: "FAQ",
      nav_cta: "Pesan",
      hero_title_suffix: "TAMPIL BEDA.",
      hero_sub: "Kami merancang landing page yang cepat, responsif, dan rapi. Dibangun dengan kode murni tanpa pembengkakan plugin. Garansi selamanya, selesai dalam hitungan hari.",
      hero_cta_start: "Mulai Proyek",
      hero_cta_portfolio: "Lihat Portfolio",
      sec_01_label: "[ SEC-01 // KEUNGGULAN ]",
      sec_01_title: "DIBANGUN UNTUK <span class='hl-yellow'>PERFORMA</span>",
      sec_01_sub: "Struktur kode bersih dan arsitektur desain yang presisi di setiap piksel.",
      feature_01_title: "SUPER CEPAT",
      feature_01_desc: "Kode native HTML, CSS, JS membuat pemuatan halaman instan tanpa hambatan rendering.",
      feature_02_title: "RESPONSIF",
      feature_02_desc: "Tampilan adaptif sempurna. Tata letak akan selalu konsisten di layar komputer maupun ponsel.",
      feature_03_title: "KODE BERSIH",
      feature_03_desc: "Tanpa WordPress atau CMS berat. Tidak ada plugin sampah, tidak ada kerentanan database.",
      feature_04_title: "GARANSI",
      feature_04_desc: "Dukungan teknis purna jual. Jika terjadi anomali pada kode kami, perbaikan gratis tanpa batas waktu.",
      feature_05_title: "SISTEMATIS",
      feature_05_desc: "Setiap penawaran, proses kerja, dan struktur harga diuraikan secara logis tanpa biaya tersembunyi.",
      feature_06_title: "TEPAT WAKTU",
      feature_06_desc: "Batas pengerjaan 1 hingga 7 hari kerja. Anda akan menerima pembaruan setiap fase pengembangan selesai.",
      sec_02_label: "[ SEC-02 // PAKET ]",
      sec_02_title: "PILIHAN <span class='hl-yellow' style='color:var(--text); border-color:var(--text);'>LAYANAN</span>",
      sec_02_sub: "Skalabilitas teknis menyesuaikan dimensi proyek Anda.",
      price_a_tag: "PAKET A - DASAR",
      price_a_title: "Template",
      price_note_idr: "Harga awal (IDR) / Bisa disesuaikan",
      price_a_f1: "Modifikasi dasar dengan tingkat kompleksitas rendah",
      price_a_f2: "Desain responsif penuh",
      price_a_f3: "Revisi minor 1 kali",
      price_a_f4: "Format Single-Page",
      price_a_f5: "SLA 1-3 hari kerja",
      price_a_cta: "Ambil Paket A",
      price_featured_label: "[ REKOMENDASI ]",
      price_b_tag: "PAKET B - STANDAR",
      price_b_title: "Semi Custom",
      price_b_note: "Berdasarkan tingkat kompleksitas layout",
      price_b_f1: "Kustomisasi identitas visual merek",
      price_b_f2: "Integrasi animasi dinamis",
      price_b_f3: "Revisi 1-2 kali",
      price_b_f4: "Struktur tata letak 1-3 halaman",
      price_b_f5: "SLA 3-5 hari kerja",
      price_b_cta: "Ambil Paket B",
      price_c_tag: "PAKET C - PREMIUM",
      price_c_title: "Full Custom",
      price_c_note: "Desain spesifik arsitektur dari nol",
      price_c_f1: "Rancang bangun tanpa batasan template",
      price_c_f2: "Kompleksitas interaksi tingkat lanjut",
      price_c_f3: "Revisi 1-3 kali",
      price_c_f4: "Struktur tata letak 1-7 halaman",
      price_c_f5: "SLA 5-7 hari kerja",
      price_c_cta: "Ambil Paket C",
      sec_03_label: "[ SEC-03 // REPOSITORI ]",
      sec_03_title: "PORTFOLIO <span class='hl-yellow' style='color:var(--text); border-color:var(--text);'>DEMO</span>",
      sec_03_sub_1: "15+ Contoh Tema Landing Page Siap Pakai Untuk berbagai industri bisnis. Klik untuk melihat demo langsung.",
      sec_03_sub_2: "Tema akan terus kami update secara berkala dengan desain terbaru.",
      sec_pricing_label: "[ SEC-03 // STRUKTUR BIAYA ]",
      sec_pricing_title: "MATRIKS <span class='hl-yellow'>HARGA</span>",
      pricing_additional_title: "Biaya Modul Tambahan",
      pricing_revisi_title: "[ REVISI ]",
      pricing_revisi_desc: "Perubahan di luar lingkup awal atau setelah batas persetujuan: <strong>+ IDR 30.000 / revisi</strong>",
      pricing_halaman_title: "[ HALAMAN TAMBAHAN ]",
      pricing_halaman_desc: "Ekspansi struktur per satu halaman (statis): <strong>+ IDR 50.000 / halaman</strong>",
      pricing_hosting_title: "Infrastruktur Hosting & Domain",
      pricing_table_component: "KOMPONEN",
      pricing_table_random: "DOMAIN RANDOM",
      pricing_table_custom: "DOMAIN CUSTOM (.com, .id, .net)",
      pricing_table_setup: "Biaya Setup Awal",
      pricing_table_annual: "Biaya Tahunan",
      pricing_table_example: "Contoh",
      demo_01_label: "[ TEMPLATE 01 ]",
      demo_01_title: "B2B / KORPORAT",
      demo_01_desc: "Landing page profesional untuk perusahaan dan bisnis B2B. Tampilan tegas, kepercayaan merek tinggi.",
      demo_02_label: "[ TEMPLATE 02 ]",
      demo_02_title: "F&B / KULINER",
      demo_02_desc: "Landing page restoran atau kedai makanan. Tampilkan menu, dan sistem reservasi meja.",
      demo_03_label: "[ TEMPLATE 03 ]",
      demo_03_title: "RITEL / FASHION",
      demo_03_desc: "Landing page toko fashion minimalis editorial.",
      demo_04_label: "[ TEMPLATE 04 ]",
      demo_04_title: "KONSULTAN / FREELANCE",
      demo_04_desc: "Landing page personal brand untuk freelancer & konsultan. Portofolio, keahlian, dan form kontak.",
      demo_05_label: "[ TEMPLATE 05 ]",
      demo_05_title: "ACARA / FESTIVAL",
      demo_05_desc: "Landing page acara & festival dengan countdown timer, penjualan tiket, dan lineup artis/pembicara.",
      demo_06_label: "[ TEMA 06 ]",
      demo_06_title: "KLINIK / KESEHATAN",
      demo_06_desc: "Landing page klinik & layanan medis. Profil dokter, jadwal praktik, dan sistem reservasi pasien online.",
      demo_07_label: "[ TEMA 07 ]",
      demo_07_title: "PROPERTI / REAL ESTATE",
      demo_07_desc: "Landing page properti premium. Listing rumah & apartemen, filter pencarian lokasi, harga, dan tipe hunian.",
      demo_08_label: "[ TEMA 08 ]",
      demo_08_title: "COWORKING SPACE",
      demo_08_desc: "Landing page ruang kerja bersama. Tipe ruang, paket membership, dan fasilitas profesional untuk freelancer & tim.",
      demo_09_label: "[ TEMPLATE 09 ]",
      demo_09_title: "TEKNOLOGI / STARTUP",
      demo_09_desc: "Landing page produk SaaS & startup teknologi Dark futuristik.",
      demo_10_label: "[ TEMA 10 ]",
      demo_10_title: "PENDIDIKAN / KURSUS",
      demo_10_desc: "Landing page platform belajar online. Katalog kursus, dan pendaftaran gratis.",
      demo_11_label: "[ TEMA 11 ]",
      demo_11_title: "PERTANIAN / AGRITECH",
      demo_11_desc: "Landing page platform pertanian modern. Teknologi IoT, pasar digital, dan konsultasi agronomi untuk petani.",
      demo_12_label: "[ TEMPLATE 12 ]",
      demo_12_title: "OTOMOTIF / BENGKEL",
      demo_12_desc: "Landing page bengkel & servis kendaraan. Daftar layanan, estimasi biaya, booking online, dan testimoni.",
      demo_13_label: "[ TEMA 13 ]",
      demo_13_title: "TRAVEL / PARIWISATA",
      demo_13_desc: "Landing page agen travel & wisata. Paket destinasi, galeri, harga, dan formulir pemesanan perjalanan.",
      demo_14_label: "[ TEMA 14 ]",
      demo_14_title: "KEUANGAN / FINTECH",
      demo_14_desc: "Landing page aplikasi keuangan & fintech.",
      demo_15_label: "[ TEMA 15 ]",
      demo_15_title: "BARBERSHOP / SALON",
      demo_15_desc: "Landing page barbershop premium. Daftar layanan, profil barber, galeri hasil potongan, dan sistem booking online.",
      demo_16_label: "[ TEMA 16 ]",
      demo_16_title: "ARTISAN BAKERY",
      demo_16_desc: "Landing page hangat bernuansa cokelat klasik untuk toko roti, kue bolu, atau pastry kekinian.",
      demo_17_label: "[ TEMA 17 ]",
      demo_17_title: "DESSERT & GELATO",
      demo_17_desc: "Landing page playful pastel modern untuk dessert cafe, toko gelato, atau modern sweets shop.",
      demo_18_label: "[ TEMA 18 ]",
      demo_18_title: "CUSTOM CAKE",
      demo_18_desc: "Landing page elegan dan minimalis premium untuk pembuat kue pengantin dan custom cake mewah.",
      demo_19_label: "[ TEMA 19 ]",
      demo_19_title: "PREMIUM SUSHI",
      demo_19_desc: "Landing page elegan bernuansa deep-dark & gold, untuk restoran sushi autentik atau fine dining.",
      demo_20_label: "[ TEMA 20 ]",
      demo_20_title: "TOKYO RAMEN",
      demo_20_desc: "Landing page bold & street-style untuk kedai ramen autentik dengan menu signature bowls.",
      demo_21_label: "[ TEMA 21 ]",
      demo_21_title: "PREMIUM GRILL",
      demo_21_desc: "Landing page berkarakter smoky & rustic, cocok untuk premium steakhouse berkonsep open-fire.",
      sec_05_label: "[ SEC-05 // ALUR KERJA ]",
      sec_05_title: "TAHAP <span class='hl-yellow'>EKSEKUSI</span>",
      proc_01_title: "Diskusi Kebutuhan",
      proc_01_desc: "Sampaikan tujuan website, referensi desain, referensi warna, atau fitur yang Anda inginkan melalui pesan WhatsApp.",
      proc_02_title: "Kesepakatan & Uang Muka",
      proc_02_desc: "Kami menghitung total biaya berdasarkan tingkat kerumitan. Jika setuju, pembayaran DP (Uang Muka) sebesar 50% dibayarkan di awal, lalu pengerjaan segera dimulai.",
      proc_03_title: "Proses Pembuatan",
      proc_03_desc: "Kami menulis kode desain (HTML, CSS, JS murni). Website dibangun agar berpenampilan modern, rapih, responsif di handphone maupun laptop, dan sangat cepat diakses.",
      proc_04_title: "Review & Revisi",
      proc_04_desc: "Kami memberikan link percobaan agar Anda bisa mengecek hasilnya secara langsung. Anda bebas meminta revisi jika ada bagian yang belum sesuai kemauan Anda.",
      proc_05_title: "Pelunasan & Penyerahan",
      proc_05_desc: "Setelah website fix 100%, Anda melakukan pelunasan sisa 50%. Kami akan mengunggah website ke hosting/domain Anda dan memberikan hak penuh atas seluruh file *source code*-nya.",
      sec_portfolio_label: "[ SEC-04.5 // KARYA ]",
      sec_portfolio_title: "PROYEK <span style='background:var(--bg); color:var(--text); padding:0 8px; border:2px solid var(--border);'>SELESAI</span>",
      sec_portfolio_sub: "Kompilasi arsip yang disusun secara sistematis, berisi berbagai studi kasus dan proyek yang telah kami kerjakan sebagai gambaran pengalaman dan kualitas kerja kami.",
      port_01_title: "JASA JOKI WEBSITE",
      port_01_desc: "Landing page jasa joki pembuatan website. Desain modern, clean, dan high-converting untuk menarik klien baru.",
      port_02_title: "SENTIMETER ANALISIS SENTIMEN",
      port_02_desc: "Alat analisis sentimen gratis untuk X/Twitter dengan visualisasi data yang interaktif dan mudah dipahami.",
      port_03_title: "XSCRAPER CRAWLING X/TWITTER",
      port_03_desc: "Alat berbasis web untuk menghasilkan kode crawling data X/Twitter yang dapat dijalankan di Google Colab, dengan fitur ekspor tweet berdasarkan keyword atau profil ke format CSV.",
      port_04_title: "ANILIST SCHEDULE",
      port_04_desc: "Website jadwal tayang anime menggunakan AniList API. Update real-time, tampilan bersih, dan mudah digunakan.",
      port_05_title: "OPREK HP JASA SERVICE HP",
      port_05_desc: "Landing page layanan software handphone seperti unlock bootloader, TWRP, root, custom ROM, dan bypass iPhone, lengkap dengan informasi layanan, harga, dan kontak teknisi.",
      port_06_title: "PENDATAAN MBG RW 016",
      port_06_desc: "Sistem pendataan penerima program Makanan Bergizi Gratis untuk ibu hamil, ibu menyusui, dan balita di RW 016.",
      sec_06_label: "[ SEC-06 // Q&A ]",
      sec_06_title: "PERTANYAAN <span class='hl-yellow'>TEKNIS</span>",
      faq_01_q: "Sistem Template vs Custom <span class='faq-icon'></span>",
      faq_01_a: "Template itu pakai desain yang sudah jadi, jadi prosesnya lebih cepat.<br>Custom itu dibuat dari nol sesuai kebutuhan kamu, jadi tampilannya lebih unik dan fleksibel.",
      faq_02_q: "Apakah pakai WordPress? <span class='faq-icon'></span>",
      faq_02_a: "Website kami dibuat tanpa WordPress, melainkan langsung menggunakan HTML, CSS, dan JavaScript sehingga lebih ringan, cepat, mudah dikelola, dan lebih aman dari risiko serangan hack karena tidak bergantung pada plugin atau database.",
      faq_03_q: "Garansi bagaimana? <span class='faq-icon'></span>",
      faq_03_a: "Kalau ada tampilan yang error atau rusak dari awal, akan kami perbaiki gratis.<br>Kalau mau tambah fitur atau revisi setelah jadi, ada biaya mulai dari Rp30.000.",
      faq_04_q: "Apakah dapat file source code? <span class='faq-icon'></span>",
      faq_04_a: "Ya, dapat full.<br>Semua file website (HTML, CSS, JS) bisa kamu download dan pakai sepenuhnya tanpa batasan.",
      sec_07_label: "[ SEC-07 // INISIASI ]",
      sec_07_title: "INISIASI <span class='hl-yellow'>PROYEK MASUK</span>",
      sec_07_sub: "Rute komunikasi langsung menuju eksekutor. Sampaikan topologi kebutuhan sistem yang ingin dibangun.",
      contact_wa: "[->] KONEKSI WHATSAPP",
      contact_price: "[+] RUTE BIAYA",
      footer_desc: "Akselerasi visual komersial melalui arsitektur frontend mekanis dan presisi.",
      footer_loc_title: "LOKASI",
      footer_loc_addr: "Manggahang, Baleendah<br>Kab. Bandung, Jawa Barat<br>40375",
      footer_index_title: "INDEX",
      footer_legal_title: "LEGAL / HUB",
      footer_contact_link: "Enkripsi Kontak",
      footer_privacy: "Privasi",
      floating_wa: "HUBUNGI KAMI",
      typing_words: ['UMKM', 'KORPORAT', 'MAKSIMAL', 'OTENTIK', 'MINIMALIS', 'MODERN']
    },
    en: {
      nav_services: "Services",
      nav_pricing: "Pricing",
      nav_demo: "Demo",
      nav_process: "Process",
      nav_faq: "FAQ",
      nav_cta: "Order",
      hero_title_suffix: "STAND OUT.",
      hero_sub: "We design fast, responsive, and clean landing pages. Built with pure code without plugin bloat. Lifetime warranty, finished in just a few days.",
      hero_cta_start: "Start Project",
      hero_cta_portfolio: "View Portfolio",
      sec_01_label: "[ SEC-01 // ADVANTAGES ]",
      sec_01_title: "BUILT FOR <span class='hl-yellow'>PERFORMANCE</span>",
      sec_01_sub: "Clean code structure and precise design architecture in every pixel.",
      feature_01_title: "ULTRA FAST",
      feature_01_desc: "Native HTML, CSS, and JS code creates instant page loading without rendering obstacles.",
      feature_02_title: "RESPONSIVE",
      feature_02_desc: "Perfectly adaptive display. The layout will always be consistent across desktop and mobile screens.",
      feature_03_title: "CLEAN CODE",
      feature_03_desc: "No WordPress or heavy CMS. No junk plugins, no database vulnerabilities.",
      feature_04_title: "WARRANTY",
      feature_04_desc: "After-sales technical support. If any anomalies occur in our code, free unlimited repairs.",
      feature_05_title: "SYSTEMATIC",
      feature_05_desc: "Every offer, work process, and price structure is explained logically with no hidden costs.",
      feature_06_title: "ON TIME",
      feature_06_desc: "Completion within 1 to 7 business days. You will receive updates as each development phase is completed.",
      sec_02_label: "[ SEC-02 // PACKAGES ]",
      sec_02_title: "SERVICE <span class='hl-yellow' style='color:var(--text); border-color:var(--text);'>PACKAGES</span>",
      sec_02_sub: "Technical scalability tailored to your project dimensions.",
      price_a_tag: "PACKAGE A - BASIC",
      price_a_title: "Template-Based",
      price_note_idr: "Starting price (IDR) / Adjustable",
      price_a_f1: "Basic modifications with low complexity",
      price_a_f2: "Fully responsive design",
      price_a_f3: "1-time minor revision",
      price_a_f4: "Single-Page format",
      price_a_f5: "SLA 1-3 business days",
      price_a_cta: "Get Package A",
      price_featured_label: "[ RECOMMENDATION ]",
      price_b_tag: "PACKAGE B - STANDARD",
      price_b_title: "Semi-Custom",
      price_b_note: "Based on layout complexity levels",
      price_b_f1: "Brand visual identity customization",
      price_b_f2: "Dynamic animation integration",
      price_b_f3: "1-2 times revision",
      price_b_f4: "1-3 page layout structure",
      price_b_f5: "SLA 3-5 business days",
      price_b_cta: "Get Package B",
      price_c_tag: "PACKAGE C - PREMIUM",
      price_c_title: "Full Custom",
      price_c_note: "Spefically engineered architecture from scratch",
      price_c_f1: "Design without template boundaries",
      price_c_f2: "Advanced interaction complexity",
      price_c_f3: "1-3 times revision",
      price_c_f4: "1-7 page layout structure",
      price_c_f5: "SLA 5-7 business days",
      price_c_cta: "Get Package C",
      sec_03_label: "[ SEC-03 // REPOSITORY ]",
      sec_03_title: "DEMO <span class='hl-yellow' style='color:var(--text); border-color:var(--text);'>PORTFOLIO</span>",
      sec_03_sub_1: "15+ Ready-to-use Landing Page themes for various industries. Click to view live demos.",
      sec_03_sub_2: "Themes are updated regularly with the latest design trends.",
      sec_pricing_label: "[ SEC-03 // PRICE STRUCTURE ]",
      sec_pricing_title: "PRICE <span class='hl-yellow'>MATRIX</span>",
      pricing_additional_title: "Additional Module Fees",
      pricing_revisi_title: "[ REVISIONS ]",
      pricing_revisi_desc: "Changes outside the initial scope or after approval limit: <strong>+ IDR 30,000 / revision</strong>",
      pricing_halaman_title: "[ ADDITIONAL PAGES ]",
      pricing_halaman_desc: "Structure expansion per single page (static): <strong>+ IDR 50,000 / page</strong>",
      pricing_hosting_title: "Hosting & Domain Infrastructure",
      pricing_table_component: "COMPONENT",
      pricing_table_random: "RANDOM DOMAIN",
      pricing_table_custom: "CUSTOM DOMAIN (.com, .id, .net)",
      pricing_table_setup: "Initial Setup Fee",
      pricing_table_annual: "Annual Fee",
      pricing_table_example: "Example",
      demo_01_label: "[ TEMPLATE 01 ]",
      demo_01_title: "B2B / CORPORATE",
      demo_01_desc: "Professional landing page for companies and B2B businesses. Bold look, high brand trust.",
      demo_02_label: "[ TEMPLATE 02 ]",
      demo_02_title: "F&B / CULINARY",
      demo_02_desc: "Landing page for restaurants or food stalls. Showcase menus and table reservation systems.",
      demo_03_label: "[ TEMPLATE 03 ]",
      demo_03_title: "RETAIL / FASHION",
      demo_03_desc: "Minimalist editorial fashion store landing page.",
      demo_04_label: "[ TEMPLATE 04 ]",
      demo_04_title: "CONSULTANT / FREELANCE",
      demo_04_desc: "Personal brand landing page for freelancers & consultants. Portfolio, expertise, and contact form.",
      demo_05_label: "[ TEMPLATE 05 ]",
      demo_05_title: "EVENT / FESTIVAL",
      demo_05_desc: "Landing page for events & festivals with countdown timers, ticket sales, and artist/speaker lineups.",
      demo_06_label: "[ THEME 06 ]",
      demo_06_title: "CLINIC / HEALTHCARE",
      demo_06_desc: "Landing page for clinics & medical services. Doctor profiles, practice schedules, and online booking.",
      demo_07_label: "[ THEME 07 ]",
      demo_07_title: "PROPERTY / REAL ESTATE",
      demo_07_desc: "Premium property landing page. House & apartment listings, search filters for location, price, and type.",
      demo_08_label: "[ THEME 08 ]",
      demo_08_title: "COWORKING SPACE",
      demo_08_desc: "Landing page for shared workspaces. Room types, membership packages, and professional facilities.",
      demo_09_label: "[ TEMPLATE 09 ]",
      demo_09_title: "TECH / STARTUP",
      demo_09_desc: "Dark futuristic SaaS product & tech startup landing page.",
      demo_10_label: "[ THEME 10 ]",
      demo_10_title: "EDUCATION / COURSE",
      demo_10_desc: "Online learning platform landing page. Course catalog and free registration.",
      demo_11_label: "[ THEME 11 ]",
      demo_11_title: "AGRICULTURE / AGRITECH",
      demo_11_desc: "Modern farming platform landing page. IoT technology, digital marketplace, and agronomy consulting.",
      demo_12_label: "[ TEMPLATE 12 ]",
      demo_12_title: "AUTOMOTIVE / WORKSHOP",
      demo_12_desc: "Vehicle workshop & service landing page. Service list, cost estimates, online booking, and testimonials.",
      demo_13_label: "[ THEME 13 ]",
      demo_13_title: "TRAVEL / TOURISM",
      demo_13_desc: "Travel agent & tourism landing page. Destination packages, gallery, pricing, and booking forms.",
      demo_14_label: "[ THEME 14 ]",
      demo_14_title: "FINANCE / FINTECH",
      demo_14_desc: "Financial application & fintech landing page.",
      demo_15_label: "[ THEME 15 ]",
      demo_15_title: "BARBERSHOP / SALON",
      demo_15_desc: "Premium barbershop landing page. Service list, barber profiles, cut gallery, and online booking.",
      demo_16_label: "[ THEME 16 ]",
      demo_16_title: "ARTISAN BAKERY",
      demo_16_desc: "Warm classic chocolate-themed landing page for bakeries, cake shops, or modern pastries.",
      demo_17_label: "[ THEME 17 ]",
      demo_17_title: "DESSERT & GELATO",
      demo_17_desc: "Modern playful pastel landing page for dessert cafes, gelato shops, or modern sweet shops.",
      demo_18_label: "[ THEME 18 ]",
      demo_18_title: "CUSTOM CAKE",
      demo_18_desc: "Premium elegant and minimalist landing page for wedding cake makers and luxury custom cakes.",
      demo_19_label: "[ THEME 19 ]",
      demo_19_title: "PREMIUM SUSHI",
      demo_19_desc: "Elegant deep-dark & gold landing page for authentic sushi restaurants or fine dining.",
      demo_20_label: "[ THEME 20 ]",
      demo_20_title: "TOKYO RAMEN",
      demo_20_desc: "Bold & street-style landing page for authentic ramen shops with signature bowl menus.",
      demo_21_label: "[ THEME 21 ]",
      demo_21_title: "PREMIUM GRILL",
      demo_21_desc: "Smoky & rustic character landing page, perfect for premium open-fire concept steakhouses.",
      sec_05_label: "[ SEC-05 // WORKFLOW ]",
      sec_05_title: "EXECUTION <span class='hl-yellow'>PHASES</span>",
      proc_01_title: "Needs Discussion",
      proc_01_desc: "Communicate your website goals, design references, color preferences, or desired features via WhatsApp message.",
      proc_02_title: "Agreement & Down Payment",
      proc_02_desc: "We calculate the total cost based on complexity. If agreed, a 50% DP (Down Payment) is paid upfront, and work begins immediately.",
      proc_03_title: "Creation Process",
      proc_03_desc: "We write the design code (pure HTML, CSS, JS). The website is built to look modern, neat, responsive on mobile and laptop, and very fast to access.",
      proc_04_title: "Review & Revision",
      proc_04_desc: "We provide a demo link so you can check the results directly. You are free to request revisions if any parts do not meet your expectations.",
      proc_05_title: "Final Payment & Handover",
      proc_05_desc: "After the website is 100% fixed, you make the remaining 50% payment. We will upload the website to your hosting/domain and provide full rights to all source code files.",
      sec_portfolio_label: "[ SEC-04.5 // WORKS ]",
      sec_portfolio_title: "FINISHED <span style='background:var(--bg); color:var(--text); padding:0 8px; border:2px solid var(--border);'>PROJECTS</span>",
      sec_portfolio_sub: "A systematically compiled archive containing various case studies and projects we have worked on as a reflection of our experience and quality of work.",
      port_01_title: "WEBSITE CREATION SERVICES",
      port_01_desc: "Landing page for website creation services. Modern, clean, and high-converting design to attract new clients.",
      port_02_title: "SENTIMETER SENTIMENT ANALYSIS",
      port_02_desc: "Free sentiment analysis tool for X/Twitter with interactive and easy-to-understand data visualization.",
      port_03_title: "XSCRAPER X/TWITTER CRAWLING",
      port_03_desc: "Web-based tool to generate X/Twitter data crawling code that can be run on Google Colab, with tweet export features by keyword or profile to CSV format.",
      port_04_title: "ANILIST SCHEDULE",
      port_04_desc: "Anime airing schedule website using AniList API. Real-time updates, clean display, and easy to use.",
      port_05_title: "OPREK HP MOBILE SERVICE",
      port_05_desc: "Landing page for mobile software services such as unlock bootloader, TWRP, root, custom ROM, and iPhone bypass, complete with service information, pricing, and technician contact.",
      port_06_title: "MBG DATA COLLECTION RW 016",
      port_06_desc: "Data collection system for the Free Nutritious Food program recipients for pregnant women, breastfeeding mothers, and toddlers in RW 016.",
      sec_06_label: "[ SEC-06 // Q&A ]",
      sec_06_title: "TECHNICAL <span class='hl-yellow'>INQUIRIES</span>",
      faq_01_q: "Template vs Custom Systems <span class='faq-icon'></span>",
      faq_01_a: "Templates use pre-made designs, making the process faster.<br>Custom is built from scratch to your needs, giving it a more unique and flexible look.",
      faq_02_q: "Do you use WordPress? <span class='faq-icon'></span>",
      faq_02_a: "Our website is built without WordPress, instead using HTML, CSS, and JavaScript directly so it is lighter, faster, easier to manage, and more secure from hack risks as it does not rely on plugins or databases.",
      faq_03_q: "How about the warranty? <span class='faq-icon'></span>",
      faq_03_a: "If there are display errors or damage from the start, we will fix them for free.<br>If you want to add features or revisions after completion, there is a fee starting from IDR 30,000.",
      faq_04_q: "Do I get the source code files? <span class='faq-icon'></span>",
      faq_04_a: "Yes, you get it in full.<br>All website files (HTML, CSS, JS) can be downloaded and used fully without limits.",
      sec_07_label: "[ SEC-07 // INITIATION ]",
      sec_07_title: "PROJECT <span class='hl-yellow'>INITIATION</span>",
      sec_07_sub: "Direct communication route to the executor. Convery your planned system topology requirements.",
      contact_wa: "[->] WHATSAPP CONNECTION",
      contact_price: "[+] PRICE ROUTE",
      footer_desc: "Commercial visual acceleration through mechanical and precise frontend architecture.",
      footer_loc_title: "LOCATION",
      footer_loc_addr: "Manggahang, Baleendah<br>Bandung Reg., West Java<br>40375",
      footer_index_title: "INDEX",
      footer_legal_title: "LEGAL / HUB",
      footer_contact_link: "Contact Encryption",
      footer_privacy: "Privacy",
      floating_wa: "CONTACT US",
      typing_words: ['SME', 'CORPORATE', 'MAXIMAL', 'AUTHENTIC', 'MINIMALIST', 'MODERN']
    }

  };

  let currentLang = localStorage.getItem('lang') || 'id';

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);

    // Update HTML lang attribute
    document.documentElement.lang = lang;

    // Update all elements with data-t attribute
    document.querySelectorAll('[data-t]').forEach(el => {
      const key = el.getAttribute('data-t');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update typing effect words
    if (translations[lang] && translations[lang].typing_words) {
      // Modify the words array in place if possible, or reset effect
      // Since words is a const inside the DOMContentLoaded, we need to handle it.
    }

    // Update Toggle Buttons Text
    const toggleBtns = [document.getElementById('lang-toggle'), document.getElementById('lang-toggle-mobile')];
    toggleBtns.forEach(btn => {
      if (btn) btn.textContent = lang === 'id' ? 'ID | EN' : 'EN | ID';
    });

    // Reset typing effect to start from first word of new language
    wordIndex = 0;
    charIndex = 0;
    isDeleting = false;
  }

  // ==========================================
  // NAVBAR & MOBILE MENU
  // ==========================================
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  // Language Toggle Event Listeners
  const langToggle = document.getElementById('lang-toggle');
  const langToggleMobile = document.getElementById('lang-toggle-mobile');

  if (langToggle) {
    langToggle.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      updateLanguage(nextLang);
    });
  }

  if (langToggleMobile) {
    langToggleMobile.addEventListener('click', () => {
      const nextLang = currentLang === 'id' ? 'en' : 'id';
      updateLanguage(nextLang);
    });
  }

  // Solid background on scroll is handled by CSS, but we can do border stuff if needed.
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.boxShadow = '0 4px 0 var(--border)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });

  const floatingWA = document.querySelector('.floating-wa');

  // Toggle mobile menu
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (floatingWA) floatingWA.style.display = 'none';
  });

  mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('active');
    document.body.style.overflow = '';
    if (floatingWA) floatingWA.style.display = 'flex';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      document.body.style.overflow = '';
      if (floatingWA) floatingWA.style.display = 'flex';
    });
  });

  // ==========================================
  // TYPING EFFECT (Mechanic)
  // ==========================================
  const textElement = document.getElementById('typing-text');

  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const words = translations[currentLang].typing_words;
    const currentWord = words[wordIndex];

    if (isDeleting) {
      textElement.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      speed = 1500; // Pause at full word
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      speed = 400; // Pause before typing new word
    }

    setTimeout(typeEffect, speed);
  }

  if (textElement) {
    typeEffect();
  }

  // Initialize Language on Load
  updateLanguage(currentLang);

  // ==========================================
  // SCROLL REVEAL (Wireframe Block effect)
  // ==========================================
  const revealElements = document.querySelectorAll('.reveal');

  const revealOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    });
  }, revealOptions);

  revealElements.forEach(el => revealObserver.observe(el));

  // ==========================================
  // FAQ ACCORDION (Blocky)
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-q');
    const ans = item.querySelector('.faq-a');

    btn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // Close all others
      faqItems.forEach(otherItem => {
        otherItem.classList.remove('active');
        otherItem.querySelector('.faq-a').style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        ans.style.maxHeight = ans.scrollHeight + "px";
      } else {
        item.classList.remove('active');
        ans.style.maxHeight = null;
      }
    });
  });
});
