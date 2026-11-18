/**
 * SYNAPSE AI — Symptom Database v2.0
 * ============================================================
 * Format conditionName: "Nama Umum (Nama Ilmiah / Medis)"
 * Setiap kondisi memiliki:
 *   id            — Identifikasi unik (string, kebab-case)
 *   conditionName — Nama umum + nama ilmiah/medis
 *   keywords      — 6–12 kata kunci bahasa Indonesia sehari-hari
 *   triageLevel   — "Mandiri di Rumah" | "Konsultasi Dokter" | "Darurat / Segera ke IGD"
 *   description   — Deskripsi singkat kondisi
 *   firstAid      — Array langkah pertolongan pertama
 *   redFlags      — Array tanda bahaya
 * ============================================================
 * Total kondisi: 40
 * Kategori:
 *   - Pernapasan / THT (1–7)
 *   - Pencernaan (8–13)
 *   - Saraf / Kepala (14–17)
 *   - Otot / Sendi (18–21)
 *   - Kulit / Alergi (22–25)
 *   - Mata (26–27)
 *   - Penyakit Tropis Indonesia (28–31)
 *   - Infeksi Umum / Metabolik (32–35)
 *   - Urologi / Ginjal (36–37)
 *   - Kesehatan Mental / Psikosomatis (38–39)
 *   - Kondisi Darurat (40)
 * ============================================================
 */

const symptomDatabase = [

  // ══════════════════════════════════════════════════════════════
  // PERNAPASAN / THT (1–7)
  // ══════════════════════════════════════════════════════════════

  {
    id: "flu-common",
    conditionName: "Flu / Influenza (Influenza Virus Infection)",
    keywords: [
      "flu", "influenza", "pilek", "hidung meler", "hidung tersumbat",
      "bersin", "batuk", "demam ringan", "badan pegal", "lelah",
      "sakit tenggorokan", "nyeri otot", "menggigil", "tidak nafsu makan"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi virus pada saluran pernapasan atas yang sangat umum. Biasanya sembuh sendiri dalam 5–7 hari dengan istirahat yang cukup.",
    firstAid: [
      "Istirahat yang cukup dan tidur minimal 8 jam.",
      "Minum air putih yang banyak (minimal 8 gelas/hari) untuk mencegah dehidrasi.",
      "Konsumsi paracetamol sesuai dosis untuk meredakan demam dan nyeri.",
      "Gunakan larutan saline nasal atau uap air hangat untuk melegakan hidung tersumbat.",
      "Makan makanan bergizi dan mudah dicerna seperti sup hangat.",
      "Gunakan masker agar tidak menularkan ke orang lain."
    ],
    redFlags: [
      "Demam di atas 39.5°C yang tidak turun setelah 3 hari.",
      "Sesak napas atau napas terasa berat.",
      "Nyeri dada saat bernapas.",
      "Kebingungan mendadak atau sulit diajak bicara.",
      "Bibir atau kuku membiru (sianosis)."
    ]
  },

  {
    id: "pharyngitis",
    conditionName: "Radang Tenggorokan (Faringitis / Pharyngitis)",
    keywords: [
      "sakit tenggorokan", "radang tenggorokan", "tenggorokan perih",
      "tenggorokan gatal", "susah menelan", "nyeri menelan", "suara serak",
      "amandel", "tonsilitis", "tenggorokan merah", "sulit makan"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada faring yang dapat disebabkan oleh virus atau bakteri (Streptococcus). Perlu diperiksa untuk menentukan apakah diperlukan antibiotik.",
    firstAid: [
      "Berkumur air garam hangat (½ sdt garam dalam segelas air) 3–4 kali sehari.",
      "Minum minuman hangat seperti teh madu lemon untuk meringankan gejala.",
      "Konsumsi paracetamol atau ibuprofen untuk nyeri dan demam.",
      "Hindari minuman dingin dan makanan yang mengiritasi.",
      "Istirahat suara dan hindari berbicara terlalu keras."
    ],
    redFlags: [
      "Kesulitan membuka mulut (trismus).",
      "Air liur berlebihan karena tidak bisa menelan.",
      "Suara terdengar seperti 'mulut penuh'.",
      "Pembesaran kelenjar leher yang terasa sangat nyeri.",
      "Demam tinggi di atas 39°C disertai bintik putih di amandel."
    ]
  },

  {
    id: "bronchitis-acute",
    conditionName: "Bronkitis Akut (Acute Bronchitis / Tracheobronchitis)",
    keywords: [
      "batuk berdahak", "batuk lama", "batuk berlendir", "dahak hijau",
      "dahak kuning", "dada terasa berat", "batuk terus menerus",
      "sesak ringan", "mengi", "batuk tidak sembuh", "batuk seminggu"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada bronkus (saluran udara besar) biasanya akibat infeksi virus. Batuk bisa berlangsung hingga 3 minggu.",
    firstAid: [
      "Istirahat yang cukup dan hindari paparan asap rokok atau polusi.",
      "Minum banyak cairan untuk mengencerkan dahak.",
      "Gunakan humidifier untuk menambah kelembapan udara.",
      "Konsumsi obat batuk ekspektoran (pengencer dahak) sesuai petunjuk.",
      "Paracetamol untuk demam dan nyeri dada."
    ],
    redFlags: [
      "Sesak napas yang semakin parah atau napas cepat.",
      "Batuk darah.",
      "Demam di atas 38.5°C lebih dari 3 hari.",
      "Bibir atau jari membiru.",
      "Riwayat asma atau PPOK yang memburuk."
    ]
  },

  {
    id: "asthma",
    conditionName: "Asma (Asthma Bronchiale)",
    keywords: [
      "asma", "mengi", "napas bunyi", "napas berbunyi ngik", "sesak napas kambuh",
      "dada terasa sempit", "batuk malam", "batuk setelah olahraga",
      "alergi debu sesak", "inhaler", "bronkospasme", "sesak cuaca dingin"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Penyakit saluran napas kronis dengan peradangan dan penyempitan bronkus. Dapat dipicu debu, asap, olahraga, atau perubahan cuaca.",
    firstAid: [
      "Duduk tegak, condong ke depan sedikit — posisi ini membuka saluran napas.",
      "Gunakan inhaler pereda (reliever/SABA) segera saat serangan.",
      "Tetap tenang — panik memperburuk sesak.",
      "Jauhkan dari pemicu (asap, debu, bau menyengat).",
      "Jika inhaler tidak tersedia, coba bernapas lambat dan terkontrol."
    ],
    redFlags: [
      "Inhaler tidak memberikan efek setelah 2–3 kali semprotan.",
      "Tidak mampu berbicara kalimat penuh karena sesak.",
      "Bibir atau kuku membiru.",
      "Denyut nadi sangat cepat (>120x/menit).",
      "Kesadaran menurun atau tampak sangat kelelahan."
    ]
  },

  {
    id: "sinusitis",
    conditionName: "Sinusitis (Rhinosinusitis / Sinus Infection)",
    keywords: [
      "sinusitis", "hidung tersumbat menahun", "tekanan wajah", "nyeri pipi",
      "nyeri sekitar mata", "hidung mampet", "sakit kepala sinus",
      "ingus kental", "ingus kuning hijau", "bau mulut", "nyeri dahi"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada rongga sinus (hidung dan wajah) yang menyebabkan hidung tersumbat, nyeri wajah, dan ingus kental.",
    firstAid: [
      "Inhalasi uap air panas untuk melonggarkan sinus.",
      "Kompres hangat di area pipi dan dahi.",
      "Gunakan semprotan saline nasal untuk membilas hidung.",
      "Minum banyak cairan.",
      "Paracetamol atau ibuprofen untuk nyeri."
    ],
    redFlags: [
      "Pembengkakan di sekitar mata atau dahi.",
      "Penglihatan ganda atau gangguan penglihatan.",
      "Kaku leher disertai demam tinggi.",
      "Nyeri kepala yang sangat hebat.",
      "Gejala tidak membaik setelah 10 hari."
    ]
  },

  {
    id: "pneumonia",
    conditionName: "Pneumonia (Radang Paru-Paru / Pneumonia)",
    keywords: [
      "pneumonia", "radang paru", "batuk berdahak parah", "demam tinggi batuk",
      "dada nyeri saat napas", "napas cepat", "sesak disertai demam",
      "dahak berdarah", "menggigil hebat", "badan lemas batuk"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Infeksi berat pada jaringan paru-paru oleh bakteri, virus, atau jamur. Menyebabkan kantung udara terisi cairan/nanah.",
    firstAid: [
      "⚠️ SEGERA bawa ke IGD atau hubungi 119.",
      "Posisikan pasien duduk tegak untuk memudahkan pernapasan.",
      "Pantau laju napas — napas cepat (>30x/menit) sangat berbahaya.",
      "Jaga pasien tetap hangat dan tenang.",
      "Jangan berikan makanan atau minuman jika sesak berat."
    ],
    redFlags: [
      "Semua kasus pneumonia perlu evaluasi medis segera.",
      "Saturasi oksigen di bawah 94% (cek dengan pulse oximeter).",
      "Frekuensi napas lebih dari 30 kali per menit.",
      "Kebingungan atau tidak responsif.",
      "Tekanan darah sangat rendah (syok)."
    ]
  },

  {
    id: "otitis-media",
    conditionName: "Infeksi Telinga (Otitis Media / Ear Infection)",
    keywords: [
      "sakit telinga", "telinga sakit", "telinga berdenyut", "nyeri telinga",
      "telinga berdenging", "pendengaran berkurang", "keluar cairan telinga",
      "telinga tersumbat", "demam sakit telinga", "bayi nangis pegang telinga"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi pada telinga tengah, umum pada anak-anak, ditandai nyeri telinga, demam, dan terkadang keluarnya cairan.",
    firstAid: [
      "Kompres hangat di area telinga yang sakit.",
      "Paracetamol untuk nyeri dan demam.",
      "Tidur dengan kepala sedikit ditinggikan.",
      "Jangan memasukkan apapun ke dalam saluran telinga.",
      "Jangan berenang sampai kondisi membaik."
    ],
    redFlags: [
      "Cairan atau darah keluar dari telinga.",
      "Pembengkakan di belakang telinga.",
      "Wajah tampak tidak simetris (kelumpuhan wajah).",
      "Demam tinggi tidak turun lebih dari 48 jam.",
      "Bayi di bawah 6 bulan dengan demam."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // PENCERNAAN (8–13)
  // ══════════════════════════════════════════════════════════════

  {
    id: "gastroenteritis",
    conditionName: "Gastroenteritis (Diare & Muntah / Gastroenteritis Akut)",
    keywords: [
      "diare", "mencret", "mual", "muntah", "sakit perut", "kram perut",
      "perut melilit", "bab cair", "keracunan makanan", "mulas",
      "perut kembung", "nyeri perut", "makan tidak enak"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi atau iritasi saluran cerna yang menyebabkan diare dan/atau muntah. Umumnya sembuh dalam 1–3 hari.",
    firstAid: [
      "Minum oralit atau larutan gula-garam untuk mencegah dehidrasi.",
      "Makan makanan BRAT: Pisang, Nasi, Saus apel, Roti tawar.",
      "Hindari makanan berlemak, pedas, dan produk susu.",
      "Minum air putih sedikit-sedikit namun sering.",
      "Istirahat yang cukup.",
      "Probiotik dapat membantu mempersingkat durasi diare."
    ],
    redFlags: [
      "Tanda dehidrasi berat: mulut sangat kering, tidak BAK lebih dari 8 jam, pusing saat berdiri.",
      "Darah pada feses atau muntahan.",
      "Nyeri perut yang sangat hebat dan terlokalisir.",
      "Demam di atas 39°C.",
      "Gejala tidak membaik setelah 48–72 jam."
    ]
  },

  {
    id: "gerd-dyspepsia",
    conditionName: "GERD / Maag (Gastroesophageal Reflux Disease / Gastritis)",
    keywords: [
      "maag", "asam lambung", "perut perih", "perut panas", "heartburn",
      "dada panas", "panas ulu hati", "mual setelah makan", "sendawa",
      "perut begah", "kembung", "refluks", "tenggorokan pahit", "mulut asam",
      "nyeri ulu hati", "perut kosong sakit", "asam lambung naik"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Naiknya asam lambung ke kerongkongan atau peradangan pada lambung. Pola makan tidak teratur dan stres adalah faktor umum.",
    firstAid: [
      "Makan dalam porsi kecil namun lebih sering (5–6 kali sehari).",
      "Hindari makanan pemicu: pedas, asam, berlemak, kopi, coklat.",
      "Jangan berbaring segera setelah makan (tunggu minimal 2–3 jam).",
      "Tinggikan posisi kepala saat tidur.",
      "Kelola stres dengan relaksasi atau meditasi.",
      "Antasida dapat digunakan untuk meredakan gejala akut."
    ],
    redFlags: [
      "Nyeri dada seperti ditekan yang menjalar ke lengan atau rahang.",
      "Kesulitan menelan yang semakin parah.",
      "Penurunan berat badan drastis tanpa sebab jelas.",
      "Muntah darah atau feses berwarna hitam seperti aspal.",
      "Nyeri malam hari yang membangunkan dari tidur."
    ]
  },

  {
    id: "constipation",
    conditionName: "Sembelit (Konstipasi / Constipation)",
    keywords: [
      "sembelit", "susah bab", "konstipasi", "bab keras", "tidak bab",
      "perut penuh", "mengejan", "bab tidak tuntas", "perut tidak nyaman",
      "kurang serat", "susah buang air besar"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Frekuensi BAB kurang dari 3 kali seminggu dengan feses yang keras dan kering. Biasanya terkait pola makan dan gaya hidup.",
    firstAid: [
      "Tingkatkan konsumsi serat: sayuran, buah, biji-bijian.",
      "Minum minimal 8 gelas air putih per hari.",
      "Lakukan aktivitas fisik ringan seperti berjalan kaki.",
      "Jangan menahan rasa ingin BAB.",
      "Konsumsi probiotik untuk kesehatan usus.",
      "Lactulose atau bisacodyl dapat digunakan sesuai petunjuk apoteker."
    ],
    redFlags: [
      "Darah pada feses.",
      "Nyeri perut hebat yang tiba-tiba.",
      "Penurunan berat badan tanpa sebab jelas.",
      "Sembelit berlangsung lebih dari 3 minggu.",
      "Perut terasa keras dan sangat kembung."
    ]
  },

  {
    id: "appendicitis",
    conditionName: "Usus Buntu (Apendisitis / Appendicitis)",
    keywords: [
      "usus buntu", "apendisitis", "nyeri perut kanan bawah", "sakit perut kanan",
      "mual muntah demam", "nyeri saat berjalan", "nyeri saat batuk",
      "perut kanan bawah sakit", "nyeri pusar pindah kanan"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Peradangan pada apendiks (usus buntu) yang memerlukan operasi segera. Nyeri khas dimulai di sekitar pusar lalu berpindah ke perut kanan bawah.",
    firstAid: [
      "⚠️ SEGERA ke IGD — ini adalah kedaruratan bedah.",
      "Jangan makan atau minum apapun (puasa operasi).",
      "Jangan gunakan bantal pemanas di perut — dapat mempercepat perforasi.",
      "Jangan konsumsi pereda nyeri kuat sebelum diperiksa dokter.",
      "Baringkan pasien dengan posisi yang paling nyaman."
    ],
    redFlags: [
      "Semua gejala usus buntu adalah RED FLAG — butuh operasi segera.",
      "Nyeri perut yang semakin parah dan menyebar ke seluruh perut.",
      "Perut terasa keras seperti papan.",
      "Demam tinggi disertai menggigil.",
      "Mual muntah yang tidak berhenti."
    ]
  },

  {
    id: "hemorrhoids",
    conditionName: "Wasir / Ambeien (Hemorrhoid / Hemorrhoids)",
    keywords: [
      "wasir", "ambeien", "hemoroid", "bab berdarah", "darah segar bab",
      "benjolan di anus", "gatal anus", "nyeri saat bab", "perdarahan bab",
      "bantalan anus bengkak"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Pembengkakan pembuluh darah di dalam atau sekitar anus dan rektum bawah. Sangat umum dan sering dipicu oleh sembelit kronis.",
    firstAid: [
      "Rendam area anus dalam air hangat (sitz bath) 10–15 menit, 2–3 kali sehari.",
      "Tingkatkan asupan serat dan cairan.",
      "Hindari mengejan saat BAB.",
      "Gunakan krim atau suppositoria wasir sesuai petunjuk.",
      "Jaga kebersihan area anus."
    ],
    redFlags: [
      "Perdarahan rektum yang banyak dan terus-menerus.",
      "Penurunan berat badan signifikan dengan perubahan kebiasaan BAB.",
      "Nyeri perut yang menyertai.",
      "Benjolan yang tidak bisa dimasukkan kembali.",
      "Demam disertai nyeri anal yang berdenyut (abses)."
    ]
  },

  {
    id: "peptic-ulcer",
    conditionName: "Tukak Lambung (Ulkus Peptikum / Peptic Ulcer Disease)",
    keywords: [
      "tukak lambung", "ulkus", "perut nyeri tengah malam", "nyeri lambung",
      "perut perih saat lapar", "mual kronis", "mencair setelah makan",
      "perut terbakar", "lambung berdarah", "muntah darah lambung"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Luka terbuka pada lapisan lambung atau usus dua belas jari, sering disebabkan bakteri H. pylori atau penggunaan NSAID jangka panjang.",
    firstAid: [
      "Hindari NSAID (aspirin, ibuprofen) dan alkohol.",
      "Makan makanan lunak dan tidak pedas.",
      "Konsumsi antasida untuk meredakan nyeri sementara.",
      "Minum susu dapat meredakan sementara, namun tidak menyembuhkan.",
      "Kurangi stres dengan relaksasi."
    ],
    redFlags: [
      "Muntah darah berwarna merah atau seperti 'kopi bubuk'.",
      "Feses hitam pekat dan berbau busuk (melena).",
      "Nyeri perut tiba-tiba yang sangat hebat (perforasi).",
      "Pusing hebat dan lemas (tanda kehilangan darah).",
      "Pingsan."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // SARAF / KEPALA (14–17)
  // ══════════════════════════════════════════════════════════════

  {
    id: "tension-headache",
    conditionName: "Sakit Kepala Tegang (Tension-Type Headache / Cephalgia)",
    keywords: [
      "sakit kepala", "pusing", "kepala berat", "kepala tertekan",
      "kepala seperti diikat", "kepala belakang sakit", "kepala depan sakit",
      "kepala samping sakit", "nyeri kepala", "stres kepala", "lelah kepala"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Jenis sakit kepala yang paling umum, terasa seperti tekanan di sekitar kepala. Biasanya dipicu oleh stres, kurang tidur, atau ketegangan otot leher.",
    firstAid: [
      "Istirahat di ruangan yang tenang dan redup.",
      "Konsumsi paracetamol atau ibuprofen sesuai dosis.",
      "Kompres dingin atau hangat pada dahi dan leher.",
      "Pijat lembut area kepala, leher, dan bahu.",
      "Minum air putih yang cukup.",
      "Lakukan relaksasi atau pernapasan dalam."
    ],
    redFlags: [
      "Sakit kepala tiba-tiba yang sangat hebat ('seperti tersambar petir').",
      "Sakit kepala disertai demam tinggi, kaku leher, dan peka terhadap cahaya.",
      "Sakit kepala setelah cedera kepala.",
      "Disertai kelemahan, mati rasa, atau gangguan bicara.",
      "Sakit kepala yang semakin memburuk dalam beberapa hari."
    ]
  },

  {
    id: "migraine",
    conditionName: "Migrain (Migraine / Hemicrania)",
    keywords: [
      "migrain", "kepala sebelah", "sakit kepala sebelah", "berdenyut",
      "mual pusing", "peka cahaya", "peka suara", "aura", "penglihatan berkilat",
      "kepala berdenyut", "muntah pusing", "kepala mual"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Sakit kepala berat berdenyut, biasanya sebelah, disertai mual dan kepekaan terhadap cahaya/suara. Dapat berlangsung 4–72 jam.",
    firstAid: [
      "Istirahat di ruangan gelap dan sunyi.",
      "Kompres dingin pada dahi atau leher.",
      "Konsumsi pereda nyeri (ibuprofen/naproxen) di awal serangan.",
      "Hindari pemicu: cahaya terang, suara keras, aroma menyengat.",
      "Minum kafein dosis kecil (kopi) di awal serangan dapat membantu sebagian orang.",
      "Catat pola dan pemicu migrain dalam jurnal."
    ],
    redFlags: [
      "Sakit kepala tiba-tiba terparah dalam hidup ('thunderclap headache').",
      "Kelumpuhan wajah, lengan, atau gangguan bicara.",
      "Migrain pertama kali terjadi setelah usia 50 tahun.",
      "Frekuensi dan intensitas meningkat drastis.",
      "Disertai demam dan kaku leher."
    ]
  },

  {
    id: "vertigo",
    conditionName: "Vertigo (Benign Paroxysmal Positional Vertigo / BPPV)",
    keywords: [
      "vertigo", "pusing berputar", "ruangan berputar", "kepala pusing muter",
      "mual saat bangun tidur", "pusing perubahan posisi", "bumi berputar",
      "pusing saat menoleh", "keseimbangan terganggu", "mabuk darat", "labirin"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Sensasi kepala pusing berputar yang seringkali dipicu oleh perubahan posisi kepala. Penyebab paling umum adalah kristal kalsium di telinga dalam.",
    firstAid: [
      "Duduk atau berbaring segera saat serangan untuk mencegah jatuh.",
      "Gerakkan kepala secara perlahan.",
      "Hindari perubahan posisi mendadak.",
      "Manuver Epley dapat dilakukan jika sudah diajarkan oleh dokter.",
      "Obat anti-mual (dimenhidrinat/betahistin) dapat membantu."
    ],
    redFlags: [
      "Pusing disertai pendengaran hilang mendadak.",
      "Pusing disertai gangguan bicara atau menelan.",
      "Kelemahan atau mati rasa pada wajah/anggota gerak.",
      "Sakit kepala hebat bersamaan.",
      "Vertigo setelah cedera kepala."
    ]
  },

  {
    id: "stroke-tia",
    conditionName: "Stroke / TIA (Stroke / Transient Ischemic Attack)",
    keywords: [
      "stroke", "lumpuh mendadak", "wajah turun sebelah", "bicara pelo",
      "tangan lemas tiba-tiba", "mati rasa mendadak", "penglihatan gelap mendadak",
      "kehilangan keseimbangan tiba-tiba", "sakit kepala tiba-tiba terparah",
      "serangan otak", "bingung mendadak"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Stroke terjadi saat aliran darah ke otak terganggu. Setiap menit sangat berarti — penanganan dalam 4,5 jam pertama dapat menyelamatkan fungsi otak.",
    firstAid: [
      "⚠️ HUBUNGI 119 SEGERA — 'Time is Brain'.",
      "Ingat metode FAST: Wajah (miring?), Tangan (lemas?), Bicara (pelo?), Telepon (segera).",
      "Baringkan pasien dengan kepala sedikit ditinggikan (30°).",
      "Jangan berikan makanan atau minuman.",
      "Jangan berikan aspirin kecuali atas instruksi dokter (bisa berbahaya pada stroke perdarahan).",
      "Pantau pernapasan dan kesadaran."
    ],
    redFlags: [
      "Semua gejala stroke adalah RED FLAG ABSOLUT.",
      "Wajah turun sebelah, tangan lemas satu sisi, bicara pelo.",
      "Kebingungan atau kehilangan kesadaran.",
      "Gangguan penglihatan mendadak.",
      "Sakit kepala terhebat dalam hidup."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // OTOT / SENDI (18–21)
  // ══════════════════════════════════════════════════════════════

  {
    id: "myalgia",
    conditionName: "Nyeri Otot (Mialgia / Myalgia)",
    keywords: [
      "nyeri otot", "pegal", "otot sakit", "badan pegal", "otot kaku",
      "pegal linu", "capek", "nyeri setelah olahraga", "otot tegang",
      "kram otot", "badan sakit semua", "ngilu"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Nyeri atau ketidaknyamanan pada otot, sering setelah aktivitas fisik berlebihan atau postur yang salah.",
    firstAid: [
      "Istirahatkan otot yang sakit.",
      "Kompres es (20 menit) untuk 48 jam pertama, lalu kompres hangat.",
      "Regangkan otot secara perlahan dan lembut.",
      "Konsumsi ibuprofen atau paracetamol untuk nyeri.",
      "Pijat lembut area yang nyeri.",
      "Mandi air hangat untuk merelaksasi otot."
    ],
    redFlags: [
      "Nyeri hebat yang tiba-tiba setelah trauma.",
      "Pembengkakan, kemerahan, atau panas di area tertentu.",
      "Kelemahan otot yang progresif.",
      "Urine berwarna merah/coklat setelah olahraga intensif (rhabdomyolysis).",
      "Nyeri tidak membaik setelah 1 minggu."
    ]
  },

  {
    id: "low-back-pain",
    conditionName: "Nyeri Punggung Bawah (Low Back Pain / Lumbalgia)",
    keywords: [
      "sakit pinggang", "nyeri punggung", "punggung bawah sakit",
      "pinggang kaku", "nyeri pinggang", "tulang belakang sakit",
      "susah membungkuk", "nyeri menjalar ke kaki", "kesemutan kaki",
      "sciatic", "hernia nukleus", "pinggang tegang"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Nyeri di area punggung bawah, sangat umum dan dapat disebabkan oleh ketegangan otot, postur buruk, atau masalah pada tulang belakang.",
    firstAid: [
      "Tetap aktif secara ringan; hindari bed rest berkepanjangan.",
      "Kompres hangat atau dingin pada area yang nyeri.",
      "Konsumsi ibuprofen atau paracetamol.",
      "Perbaiki postur saat duduk dan berdiri.",
      "Lakukan peregangan punggung bawah secara perlahan.",
      "Hindari mengangkat benda berat."
    ],
    redFlags: [
      "Nyeri menjalar ke bawah lutut disertai mati rasa.",
      "Kelemahan atau kelumpuhan pada kaki.",
      "Kehilangan kontrol kandung kemih atau usus.",
      "Nyeri yang sangat hebat saat malam hari.",
      "Riwayat kanker atau penurunan berat badan drastis."
    ]
  },

  {
    id: "arthritis",
    conditionName: "Nyeri Sendi (Artritis / Arthritis)",
    keywords: [
      "nyeri sendi", "sendi bengkak", "lutut sakit", "siku sakit",
      "sendi kaku pagi hari", "sendi merah", "rematik", "artritis",
      "nyeri tulang", "sendi berbunyi", "bengkak merah sendi"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada satu atau lebih sendi yang menyebabkan nyeri, bengkak, dan kaku. Dapat disebabkan osteoarthritis, rheumatoid arthritis, atau asam urat.",
    firstAid: [
      "Istirahatkan sendi yang sakit.",
      "Kompres dingin untuk mengurangi bengkak dan nyeri akut.",
      "Kompres hangat untuk melenturkan sendi yang kaku.",
      "Ibuprofen atau naproxen untuk nyeri dan peradangan.",
      "Lakukan gerakan ringan agar sendi tidak makin kaku."
    ],
    redFlags: [
      "Sendi merah, sangat panas, dan bengkak tiba-tiba (mungkin gout atau infeksi sendi).",
      "Demam bersamaan dengan nyeri sendi.",
      "Nyeri sendi setelah cedera.",
      "Deformitas sendi yang progresif.",
      "Ketidakmampuan menggerakkan sendi."
    ]
  },

  {
    id: "gout",
    conditionName: "Asam Urat (Gout / Gouty Arthritis)",
    keywords: [
      "asam urat", "gout", "nyeri ibu jari kaki", "sendi ibu jari bengkak",
      "serangan gout", "nyeri kaki mendadak", "kaki merah bengkak malam",
      "nyeri saat disentuh", "makanan tinggi purin", "kadar asam urat tinggi"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan sendi akibat penumpukan kristal asam urat (monosodium urate). Serangan sering dimulai tiba-tiba di malam hari, terutama pada ibu jari kaki.",
    firstAid: [
      "Istirahatkan dan tinggikan sendi yang terkena.",
      "Kompres dingin untuk mengurangi nyeri dan bengkak.",
      "Minum banyak air putih (2–3 liter/hari) untuk membantu ekskresi asam urat.",
      "Hindari makanan tinggi purin: jeroan, seafood, daging merah, alkohol.",
      "Ibuprofen atau naproxen untuk meredakan serangan akut."
    ],
    redFlags: [
      "Demam tinggi bersamaan (mungkin infeksi sendi/septic arthritis).",
      "Tofi (benjolan putih keras) yang pecah.",
      "Serangan tidak mereda setelah 7–10 hari.",
      "Nyeri sendi yang sangat parah di banyak sendi sekaligus.",
      "Tanda gagal ginjal: bengkak kaki, urine berkurang."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // KULIT / ALERGI (22–25)
  // ══════════════════════════════════════════════════════════════

  {
    id: "urticaria-allergy",
    conditionName: "Biduran / Urtikaria (Urticaria / Hives)",
    keywords: [
      "biduran", "urtikaria", "gatal-gatal", "bentol", "ruam gatal",
      "kulit merah gatal", "alergi kulit", "bentol merah", "kulit bentol",
      "gatal setelah makan", "alergi makanan", "kulit bengkak gatal"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Reaksi alergi pada kulit yang menimbulkan bentol merah dan gatal. Biasanya dipicu oleh makanan, obat, atau faktor lingkungan.",
    firstAid: [
      "Identifikasi dan hindari pemicu alergi.",
      "Konsumsi antihistamin (cetirizine/loratadine) sesuai dosis.",
      "Kompres dingin pada area yang gatal untuk meredakan rasa gatal.",
      "Hindari menggaruk untuk mencegah iritasi lebih lanjut.",
      "Pakai pakaian longgar dan berbahan katun.",
      "Mandi air dingin atau suam-suam kuku."
    ],
    redFlags: [
      "Pembengkakan pada wajah, bibir, atau tenggorokan (angioedema).",
      "Kesulitan bernapas atau menelan.",
      "Pusing hebat atau pingsan.",
      "Detak jantung sangat cepat.",
      "Gejala muncul tiba-tiba dan parah (anafilaksis)."
    ]
  },

  {
    id: "contact-dermatitis",
    conditionName: "Dermatitis Kontak (Contact Dermatitis / Eczema)",
    keywords: [
      "kulit merah", "ruam kulit", "kulit iritasi", "kulit mengelupas",
      "kulit perih", "alergi sabun", "alergi detergen", "kulit kasar",
      "eksim", "kulit bersisik", "kulit berair", "gatal setempat"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan kulit akibat kontak dengan zat tertentu (iritan atau alergen). Reaksi terlokalisir pada area yang terkena.",
    firstAid: [
      "Hentikan kontak dengan zat penyebab segera.",
      "Bilas area yang terkena dengan air bersih mengalir selama 15–20 menit.",
      "Gunakan pelembap (emolien) bebas parfum.",
      "Krim hidrokortison 1% dapat mengurangi peradangan.",
      "Antihistamin oral untuk mengurangi gatal.",
      "Jaga area tetap bersih dan kering."
    ],
    redFlags: [
      "Ruam menyebar dengan cepat ke seluruh tubuh.",
      "Luka terbuka atau kulit melepuh yang luas.",
      "Tanda infeksi: nanah, panas, bau, demam.",
      "Pembengkakan pada wajah atau tenggorokan.",
      "Tidak membaik setelah 1 minggu perawatan mandiri."
    ]
  },

  {
    id: "acne",
    conditionName: "Jerawat (Akne Vulgaris / Acne Vulgaris)",
    keywords: [
      "jerawat", "akne", "jerawat meradang", "komedo", "jerawat batu",
      "jerawat di punggung", "jerawat di dada", "kulit berminyak jerawat",
      "pustul", "papul", "jerawat hormonal"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kondisi kulit kronis akibat tersumbatnya folikel rambut oleh minyak dan sel kulit mati. Paling umum pada remaja dan dewasa muda.",
    firstAid: [
      "Cuci muka 2 kali sehari dengan sabun lembut bebas minyak.",
      "Jangan memencet atau memecahkan jerawat.",
      "Gunakan pelembap non-comedogenic.",
      "Hindari menyentuh wajah dengan tangan kotor.",
      "Gunakan tabir surya non-comedogenic."
    ],
    redFlags: [
      "Jerawat kistik yang sangat nyeri dan dalam.",
      "Jaringan parut (skar) yang terbentuk.",
      "Jerawat disertai gejala hormonal lain (pertumbuhan rambut berlebihan, gangguan menstruasi).",
      "Infeksi kulit dengan nanah dan demam.",
      "Tidak ada respons terhadap perawatan OTC setelah 2–3 bulan."
    ]
  },

  {
    id: "tinea-fungal",
    conditionName: "Infeksi Jamur Kulit (Tinea / Dermatofitosis)",
    keywords: [
      "jamur kulit", "tinea", "kurap", "panu", "kulit bersisik melingkar",
      "gatal melingkar", "ruam cincin", "kulit bersisik punggung", "panu kulit",
      "kutu air", "jamur kaki", "selangkangan gatal"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi kulit oleh jamur dermatofita yang menyebabkan ruam melingkar dan gatal. Umum di iklim tropis dan lembap seperti Indonesia.",
    firstAid: [
      "Gunakan krim antijamur (miconazole/clotrimazole) 2 kali sehari.",
      "Jaga area yang terinfeksi tetap bersih dan kering.",
      "Pakai pakaian longgar dan menyerap keringat.",
      "Ganti pakaian dalam setiap hari.",
      "Hindari berbagi handuk atau pakaian."
    ],
    redFlags: [
      "Infeksi menyebar luas meskipun sudah diobati.",
      "Kulit melepuh, bernanah, atau sangat meradang.",
      "Rambut rontok di area yang terinfeksi (tinea capitis).",
      "Demam bersamaan.",
      "Pasien immunocompromised (HIV, diabetes, kemoterapi)."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // MATA (26–27)
  // ══════════════════════════════════════════════════════════════

  {
    id: "conjunctivitis",
    conditionName: "Mata Merah (Konjungtivitis / Conjunctivitis / Pink Eye)",
    keywords: [
      "mata merah", "konjungtivitis", "mata gatal", "mata berair",
      "kotoran mata berlebih", "mata lengket pagi hari", "mata bengkak merah",
      "mata pink", "mata perih", "mata terasa berpasir", "mata radang"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada konjungtiva (lapisan tipis yang melapisi mata dan kelopak). Bisa disebabkan virus, bakteri, atau alergi.",
    firstAid: [
      "Kompres hangat pada mata untuk melunakkan kotoran.",
      "Bilas mata dengan air bersih atau saline steril.",
      "Jangan menyentuh atau menggosok mata.",
      "Cuci tangan sering untuk mencegah penularan.",
      "Hindari penggunaan lensa kontak sampai sembuh.",
      "Antihistamin tetes mata untuk konjungtivitis alergi."
    ],
    redFlags: [
      "Nyeri mata yang hebat.",
      "Penglihatan kabur yang tidak membaik setelah berkedip.",
      "Peka terhadap cahaya yang ekstrem.",
      "Keluar nanah berwarna kuning-hijau yang banyak.",
      "Tidak membaik setelah 5–7 hari."
    ]
  },

  {
    id: "eye-strain",
    conditionName: "Kelelahan Mata (Asthenopia / Digital Eye Strain)",
    keywords: [
      "mata lelah", "mata tegang", "mata pegal", "mata berat", "nyeri mata",
      "mata kering", "mata terasa penuh", "layar HP mata lelah",
      "baca lama mata sakit", "komputer mata lelah", "sakit kepala dari mata"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Ketidaknyamanan mata akibat penggunaan layar digital atau aktivitas visual intens dalam waktu lama.",
    firstAid: [
      "Ikuti aturan 20-20-20: Setiap 20 menit, lihat objek berjarak 20 kaki (6 meter) selama 20 detik.",
      "Kurangi kecerahan layar dan sesuaikan dengan lingkungan.",
      "Gunakan tetes mata pelumas (artificial tears).",
      "Tingkatkan pencahayaan ruangan.",
      "Istirahat dari layar minimal 15 menit per jam.",
      "Periksa resep kacamata — mungkin perlu penyesuaian."
    ],
    redFlags: [
      "Penglihatan kabur yang tidak membaik dengan istirahat.",
      "Melihat kilatan cahaya atau bintik-bintik mengambang (floaters) tiba-tiba.",
      "Nyeri mata yang berat.",
      "Mata sangat merah dan nyeri setelah penggunaan layar.",
      "Sakit kepala parah yang menyertai gangguan penglihatan."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // PENYAKIT TROPIS INDONESIA (28–31)
  // ══════════════════════════════════════════════════════════════

  {
    id: "dengue-fever",
    conditionName: "Demam Berdarah (Dengue Hemorrhagic Fever / DBD)",
    keywords: [
      "demam berdarah", "dbd", "dengue", "demam tinggi mendadak", "nyeri tulang",
      "bintik merah kulit", "ptekie", "nyeri di belakang mata", "mual demam",
      "mimisan demam", "gusi berdarah", "trombosit turun", "badan pegal semua"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi virus dengue yang ditularkan nyamuk Aedes aegypti. Fase kritis biasanya pada hari ke-4 hingga ke-6 demam.",
    firstAid: [
      "Istirahat total.",
      "Minum cairan banyak: air putih, oralit, jus jambu (membantu trombosit).",
      "Paracetamol untuk demam — JANGAN ibuprofen atau aspirin (risiko perdarahan).",
      "Pantau tanda bahaya setiap 4–6 jam.",
      "Segera ke dokter untuk cek darah lengkap (trombosit)."
    ],
    redFlags: [
      "Trombosit di bawah 100.000/µL.",
      "Perdarahan spontan: gusi berdarah, mimisan, bintik merah tidak hilang.",
      "Nyeri perut hebat tiba-tiba (tanda kebocoran plasma).",
      "Muntah terus-menerus.",
      "Kesadaran menurun atau gelisah — SEGERA ke IGD."
    ]
  },

  {
    id: "typhoid-fever",
    conditionName: "Tifus (Demam Tifoid / Typhoid Fever)",
    keywords: [
      "tifus", "tipes", "demam tifoid", "typhoid", "demam naik turun",
      "demam lebih tinggi malam", "lidah kotor", "nyeri perut tifus",
      "sembelit tifus", "lesu berkepanjangan", "badan lemas 1 minggu",
      "perut kembung tifus", "mual demam seminggu"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi bakteri Salmonella typhi melalui makanan/minuman terkontaminasi. Demam tinggi yang bertahap naik, terutama pada malam hari.",
    firstAid: [
      "Istirahat total — bed rest penting untuk mencegah komplikasi.",
      "Makan makanan lunak dan mudah dicerna.",
      "Minum cairan banyak untuk mencegah dehidrasi.",
      "Paracetamol untuk meredakan demam.",
      "WAJIB ke dokter untuk diagnosis pasti dan resep antibiotik."
    ],
    redFlags: [
      "Perdarahan atau perforasi usus (nyeri perut tiba-tiba sangat hebat).",
      "Demam sangat tinggi (> 40°C) tidak turun.",
      "Kesadaran menurun atau mengigau.",
      "Feses berdarah.",
      "Komplikasi: pneumonia, miokarditis, hepatitis."
    ]
  },

  {
    id: "malaria",
    conditionName: "Malaria (Malaria / Plasmodium Infection)",
    keywords: [
      "malaria", "demam menggigil periodik", "menggigil hebat", "keringat banyak demam",
      "demam berulang", "demam 3 hari sekali", "nyeri kepala malaria",
      "badan lemas malaria", "urine gelap", "kulit kuning malaria",
      "baru dari daerah endemis"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Penyakit parasit ditularkan nyamuk Anopheles. Umum di Papua, Kalimantan, dan NTT. Siklus demam menggigil-berkeringat adalah ciri khasnya.",
    firstAid: [
      "⚠️ SEGERA ke fasilitas kesehatan untuk tes darah malaria.",
      "Istirahat total.",
      "Minum banyak cairan.",
      "Kompres untuk menurunkan demam.",
      "Jangan menunda pengobatan — malaria berat bisa fatal dalam 24 jam."
    ],
    redFlags: [
      "Kesadaran menurun atau koma (malaria serebral).",
      "Urine berwarna merah/coklat pekat (blackwater fever).",
      "Sesak napas berat.",
      "Kejang.",
      "Kulit dan mata kuning (ikterus berat)."
    ]
  },

  {
    id: "leptospirosis",
    conditionName: "Leptospirosis (Leptospirosis / Weil's Disease)",
    keywords: [
      "leptospirosis", "banjir demam", "demam setelah banjir", "mata kuning",
      "kulit kuning setelah banjir", "nyeri betis hebat", "demam nyeri otot betis",
      "kontak air banjir demam", "tikus demam", "nyeri sendi demam banjir"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Infeksi bakteri Leptospira ditularkan melalui air/tanah yang terkontaminasi urine hewan (terutama tikus). Risiko tinggi saat banjir.",
    firstAid: [
      "⚠️ SEGERA ke IGD — leptospirosis dapat menyebabkan gagal organ.",
      "Cuci luka dengan sabun dan air bersih.",
      "Hindari kontak lebih lanjut dengan air banjir.",
      "Jangan konsumsi air yang mungkin terkontaminasi.",
      "Pantau tanda kuning pada kulit dan mata."
    ],
    redFlags: [
      "Kulit dan mata kuning (ikterus).",
      "Urine berkurang drastis (gagal ginjal).",
      "Sesak napas.",
      "Perdarahan di kulit atau organ.",
      "Kesadaran menurun."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // INFEKSI UMUM / METABOLIK (32–35)
  // ══════════════════════════════════════════════════════════════

  {
    id: "fever-general",
    conditionName: "Demam (Febris / Pyrexia)",
    keywords: [
      "demam", "panas badan", "suhu tinggi", "badan panas", "menggigil",
      "keringat dingin", "demam naik turun", "panas dingin", "suhu 38",
      "suhu 39", "thermometer tinggi", "badan hangat"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peningkatan suhu tubuh di atas 38°C sebagai respons imun terhadap infeksi. Perlu diidentifikasi penyebabnya.",
    firstAid: [
      "Kompres hangat (bukan dingin) di dahi dan ketiak.",
      "Minum banyak cairan untuk mencegah dehidrasi.",
      "Konsumsi paracetamol sesuai dosis untuk menurunkan demam.",
      "Istirahat yang cukup.",
      "Kenakan pakaian tipis dan nyaman.",
      "Pantau suhu setiap 4–6 jam."
    ],
    redFlags: [
      "Suhu di atas 40°C.",
      "Demam pada bayi di bawah 3 bulan.",
      "Disertai kaku leher, peka cahaya, atau ruam.",
      "Kebingungan atau sulit dibangunkan.",
      "Demam berlangsung lebih dari 3–5 hari tanpa sebab jelas."
    ]
  },

  {
    id: "diabetes-hypoglycemia",
    conditionName: "Gula Darah Rendah (Hipoglikemia / Hypoglycemia)",
    keywords: [
      "gula darah rendah", "hipoglikemia", "lemas tiba-tiba", "gemetar", "tremor",
      "pusing lapar", "keringat dingin tiba-tiba", "berdebar lapar",
      "bingung lapar", "ngantuk setelah makan sedikit", "diabetes gula drop"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kadar gula darah di bawah normal (< 70 mg/dL). Sering terjadi pada penderita diabetes yang mendapat terapi insulin atau obat antidiabetes oral.",
    firstAid: [
      "Konsumsi 15 gram karbohidrat cepat serap: 3–4 tablet glukosa, ½ gelas jus, atau permen.",
      "Tunggu 15 menit lalu cek gula darah ulang.",
      "Jika membaik, makan makanan bergizi kecil.",
      "Jangan meninggalkan pasien sendirian.",
      "Jika tidak sadar, jangan berikan apapun melalui mulut."
    ],
    redFlags: [
      "Kesadaran menurun atau tidak sadarkan diri.",
      "Kejang.",
      "Tidak membaik setelah pemberian gula.",
      "Hipoglikemia berulang tanpa sebab jelas.",
      "Riwayat penggunaan insulin atau obat antidiabetes."
    ]
  },

  {
    id: "hypertension",
    conditionName: "Hipertensi (Tekanan Darah Tinggi / Hypertension)",
    keywords: [
      "hipertensi", "tekanan darah tinggi", "darah tinggi", "kepala berat hipertensi",
      "tengkuk kaku", "tengkuk berat", "pusing tekanan darah", "mimisan hipertensi",
      "jantung berdebar tekanan tinggi", "penglihatan kabur darah tinggi"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Tekanan darah persisten ≥ 140/90 mmHg. Sering disebut 'silent killer' karena sering tidak bergejala sampai terjadi komplikasi.",
    firstAid: [
      "Duduk dan istirahat tenang.",
      "Hindari stres, kopi, dan aktivitas berat.",
      "Konsumsi obat antihipertensi yang sudah diresepkan.",
      "Hindari makanan tinggi garam.",
      "Pantau tekanan darah secara rutin."
    ],
    redFlags: [
      "Tekanan darah ≥ 180/120 mmHg (krisis hipertensif).",
      "Nyeri dada atau sesak napas.",
      "Gangguan bicara atau penglihatan tiba-tiba.",
      "Sakit kepala terhebat dalam hidup.",
      "Kelemahan mendadak satu sisi tubuh."
    ]
  },

  {
    id: "urinary-tract-infection",
    conditionName: "Infeksi Saluran Kemih (ISK / Urinary Tract Infection)",
    keywords: [
      "isk", "infeksi saluran kemih", "sakit saat pipis", "nyeri berkemih",
      "pipis sering", "kencing perih", "urine keruh", "urine berbau",
      "nyeri perut bawah wanita", "kencing darah", "anyang-anyangan"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi bakteri pada saluran kemih (kandung kemih, uretra, atau ginjal). Lebih umum pada wanita. Butuh antibiotik.",
    firstAid: [
      "Minum banyak air putih untuk membantu membilas bakteri.",
      "Jangan menahan kencing.",
      "Paracetamol atau ibuprofen untuk nyeri.",
      "Hindari kopi, alkohol, dan minuman berkarbonasi.",
      "Jaga kebersihan area genital.",
      "WAJIB ke dokter untuk mendapat antibiotik yang tepat."
    ],
    redFlags: [
      "Demam tinggi disertai nyeri pinggang (kemungkinan infeksi ginjal/pielonefritis).",
      "Darah pada urine.",
      "Mual dan muntah.",
      "Nyeri pinggang hebat.",
      "Gejala pada pria, anak-anak, atau ibu hamil — selalu butuh evaluasi dokter."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // UROLOGI / GINJAL (36–37)
  // ══════════════════════════════════════════════════════════════

  {
    id: "kidney-stones",
    conditionName: "Batu Ginjal (Urolithiasis / Kidney Stones)",
    keywords: [
      "batu ginjal", "nyeri pinggang hebat", "kolik renal", "nyeri menjalar ke selangkangan",
      "urine berdarah", "nyeri saat buang air kecil", "mual muntah nyeri pinggang",
      "nyeri gelombang pinggang", "batu saluran kemih", "nyeri pinggang kanan kiri"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Endapan mineral dan garam di ginjal. Nyeri kolik ginjal adalah salah satu nyeri paling hebat yang bisa dialami manusia.",
    firstAid: [
      "⚠️ Nyeri kolik renal yang hebat — segera ke IGD untuk manajemen nyeri.",
      "Minum banyak air dapat membantu batu kecil keluar sendiri.",
      "Ibuprofen dapat membantu sementara jika nyeri ringan.",
      "Pantau apakah ada demam (tanda infeksi berbahaya).",
      "Saring urine untuk menangkap batu jika memungkinkan."
    ],
    redFlags: [
      "Demam tinggi bersamaan (pyelonephritis obstruktif — darurat).",
      "Nyeri tidak tertahankan dan tidak membaik.",
      "Hanya memiliki satu ginjal.",
      "Urine tidak keluar sama sekali.",
      "Pasien transplantasi ginjal."
    ]
  },

  {
    id: "acute-kidney-injury",
    conditionName: "Gangguan Fungsi Ginjal Akut (Acute Kidney Injury / AKI)",
    keywords: [
      "ginjal bermasalah", "bengkak kaki mendadak", "urine berkurang",
      "tidak bisa kencing", "bengkak wajah kaki", "urine gelap",
      "mual lemas bengkak", "sesak napas bengkak kaki", "badan bengkak"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Penurunan fungsi ginjal yang tiba-tiba. Dapat disebabkan dehidrasi berat, infeksi, obat-obatan, atau penyakit berat lainnya.",
    firstAid: [
      "⚠️ SEGERA ke IGD — ini adalah kedaruratan medis.",
      "Hentikan obat yang mungkin merusak ginjal (NSAID, antibiotik tertentu).",
      "Pantau jumlah urine yang dikeluarkan.",
      "Jangan berlebihan minum cairan tanpa instruksi medis.",
      "Catat semua obat yang dikonsumsi untuk dokter."
    ],
    redFlags: [
      "Semua tanda AKI memerlukan penanganan segera.",
      "Produksi urine sangat sedikit atau tidak ada.",
      "Sesak napas akibat kelebihan cairan.",
      "Kebingungan atau kejang (uremia).",
      "Kadar kalium darah tinggi (risiko aritmia jantung)."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // KESEHATAN MENTAL / PSIKOSOMATIS (38–39)
  // ══════════════════════════════════════════════════════════════

  {
    id: "anxiety-panic",
    conditionName: "Gangguan Kecemasan / Panik (Anxiety Disorder / Panic Attack)",
    keywords: [
      "panik", "cemas berlebihan", "serangan panik", "jantung berdebar cemas",
      "sesak napas cemas", "gemetar tanpa sebab", "takut tiba-tiba",
      "sulit bernapas saat cemas", "pusing cemas", "mati rasa saat cemas",
      "dada sesak tanpa sebab fisik"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Respons kecemasan atau ketakutan intens yang memicu gejala fisik. Serangan panik terasa seperti serangan jantung namun tidak berbahaya secara fisik.",
    firstAid: [
      "Teknik pernapasan 4-7-8: hirup 4 detik, tahan 7 detik, hembuskan 8 detik.",
      "Grounding 5-4-3-2-1: identifikasi 5 hal yang dilihat, 4 yang dirasakan, dst.",
      "Berbicara dengan orang yang dipercaya.",
      "Pindah ke tempat yang tenang dan aman.",
      "Ingatkan bahwa serangan panik akan berlalu dalam 10–20 menit."
    ],
    redFlags: [
      "Nyeri dada disertai sesak napas — harus dipastikan bukan serangan jantung.",
      "Pemikiran untuk menyakiti diri sendiri.",
      "Serangan panik sangat sering (lebih dari sekali sehari).",
      "Tidak bisa berfungsi dalam kehidupan sehari-hari.",
      "Penyalahgunaan alkohol/obat untuk mengatasi kecemasan."
    ]
  },

  {
    id: "insomnia",
    conditionName: "Insomnia (Gangguan Tidur / Insomnia Disorder)",
    keywords: [
      "insomnia", "susah tidur", "tidak bisa tidur", "tidur tidak nyenyak",
      "sering terbangun", "ngantuk tapi tidak bisa tidur", "tidur gelisah",
      "kurang tidur kronis", "lelah siang hari", "begadang", "tidur terganggu"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kesulitan memulai atau mempertahankan tidur yang mengganggu fungsi sehari-hari. Dapat dipicu oleh stres, kebiasaan tidur buruk, atau kondisi medis.",
    firstAid: [
      "Pertahankan jadwal tidur-bangun yang konsisten setiap hari.",
      "Hindari layar gadget minimal 1 jam sebelum tidur (blue light).",
      "Ciptakan kamar tidur yang sejuk, gelap, dan tenang.",
      "Hindari kafein setelah jam 14.00.",
      "Lakukan rutinitas relaksasi sebelum tidur (mandi hangat, membaca).",
      "Hindari tidur siang lebih dari 20 menit."
    ],
    redFlags: [
      "Mendengkur keras disertai henti napas saat tidur (sleep apnea).",
      "Insomnia menyebabkan kecelakaan atau kesalahan kerja berbahaya.",
      "Depresi atau pemikiran bunuh diri.",
      "Insomnia berlangsung lebih dari 3 bulan.",
      "Kaki terasa tidak nyaman/ingin terus digerakkan saat malam (restless leg syndrome)."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // KONDISI DARURAT (40)
  // ══════════════════════════════════════════════════════════════

  {
    id: "chest-pain-cardiac",
    conditionName: "Nyeri Dada (Sindrom Koroner Akut / Acute Coronary Syndrome)",
    keywords: [
      "nyeri dada", "sakit dada", "dada terasa berat", "dada seperti ditekan",
      "dada sesak", "nyeri menjalar ke lengan", "nyeri ke rahang",
      "nyeri ke punggung", "keringat dingin dada", "dada terasa diremas",
      "jantung sakit", "serangan jantung", "angina"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Nyeri dada dapat menjadi tanda serangan jantung atau kondisi serius lainnya. JANGAN diabaikan. Segera cari bantuan medis.",
    firstAid: [
      "⚠️ HUBUNGI 119 (AMBULANS) SEGERA.",
      "Hentikan semua aktivitas dan duduk atau berbaring dengan nyaman.",
      "Kendurkan pakaian ketat (dasi, ikat pinggang).",
      "Jika tersedia dan tidak alergi, kunyah aspirin 160–320 mg (kecuali ada kontraindikasi).",
      "Tetap tenang dan pertahankan pernapasan lambat.",
      "Jangan makan atau minum apapun.",
      "Jangan mengemudi sendiri ke rumah sakit."
    ],
    redFlags: [
      "Semua gejala nyeri dada adalah RED FLAG — SEGERA ke IGD.",
      "Nyeri menjalar ke lengan kiri, rahang, atau punggung.",
      "Disertai keringat dingin, mual, dan sesak napas.",
      "Rasa seperti dada ditindih benda berat.",
      "Pingsan atau hampir pingsan."
    ]
  },

  {
    id: "respiratory-distress",
    conditionName: "Sesak Napas Berat (Respiratory Distress / Dyspnea Berat)",
    keywords: [
      "sesak napas", "napas pendek", "sulit bernapas", "napas berat",
      "ngos-ngosan", "tidak bisa napas", "napas tersengal",
      "bibir biru", "kuku biru", "asma berat", "serangan asma parah",
      "napas bunyi", "mengi berat", "dada sesak parah"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Kesulitan bernapas yang signifikan adalah kondisi darurat medis. Otak dan organ vital memerlukan oksigen — jangan tunda pertolongan.",
    firstAid: [
      "⚠️ HUBUNGI 119 (AMBULANS) SEGERA.",
      "Dudukkan pasien dengan posisi tegak atau sedikit condong ke depan.",
      "Longgarkan pakaian ketat di leher dan dada.",
      "Pastikan ventilasi ruangan baik — buka jendela.",
      "Jika memiliki inhaler untuk asma, gunakan segera.",
      "Tetap tenang — panik memperburuk sesak napas.",
      "Jangan tinggalkan pasien sendirian."
    ],
    redFlags: [
      "Semua sesak napas berat adalah RED FLAG — SEGERA ke IGD.",
      "Bibir, kuku, atau kulit membiru (sianosis).",
      "Tidak mampu berbicara atau berbicara hanya satu kata.",
      "Kesadaran menurun atau pingsan.",
      "Detak jantung sangat cepat disertai sesak."
    ]
  },

  {
    id: "anaphylaxis",
    conditionName: "Anafilaksis (Anaphylaxis / Reaksi Alergi Berat)",
    keywords: [
      "anafilaksis", "alergi berat", "syok anafilaktik", "bengkak tenggorokan",
      "tidak bisa napas alergi", "alergi sengatan lebah", "alergi obat berat",
      "tekanan darah drop alergi", "bibir bengkak sesak", "muka bengkak sesak napas"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Reaksi alergi sistemik yang mengancam jiwa, dapat terjadi dalam menit setelah paparan alergen. Memerlukan epinefrin segera.",
    firstAid: [
      "⚠️ HUBUNGI 119 SEGERA.",
      "Gunakan EpiPen (epinefrin auto-injector) jika tersedia — suntikkan di paha luar.",
      "Baringkan pasien dengan kaki ditinggikan (kecuali jika sesak napas, dudukkan).",
      "Jauhkan dari alergen penyebab.",
      "Berikan antihistamin (tidak menggantikan epinefrin).",
      "Siapkan CPR jika pasien tidak responsif."
    ],
    redFlags: [
      "Semua gejala anafilaksis memerlukan epinefrin dan IGD.",
      "Sesak napas hebat akibat pembengkakan tenggorokan.",
      "Penurunan tekanan darah drastis (syok).",
      "Kehilangan kesadaran.",
      "Denyut nadi lemah dan cepat."
    ]
  },

  {
    id: "heat-stroke",
    conditionName: "Sengatan Panas (Heat Stroke / Hipertermia)",
    keywords: [
      "heat stroke", "sengatan panas", "kepanasan parah", "suhu tubuh sangat tinggi",
      "tidak berkeringat padahal panas", "bingung kepanasan", "kulit merah kering panas",
      "pingsan panas terik", "dehidrasi parah panas", "heat exhaustion"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Suhu tubuh di atas 40°C akibat paparan panas ekstrem atau aktivitas fisik intens tanpa hidrasi cukup. Dapat menyebabkan kerusakan otak permanen.",
    firstAid: [
      "⚠️ PINDAHKAN ke tempat sejuk dan HUBUNGI 119.",
      "Lepaskan pakaian berlebih.",
      "Kompres dingin di leher, ketiak, dan selangkangan.",
      "Kipasi pasien sambil menyiram air dingin.",
      "Berikan air minum jika pasien masih sadar dan bisa menelan.",
      "Jangan berikan aspirin atau paracetamol pada heat stroke."
    ],
    redFlags: [
      "Suhu tubuh di atas 40°C.",
      "Kulit kering dan merah (tidak berkeringat).",
      "Kebingungan, bicara melantur, atau kejang.",
      "Kehilangan kesadaran.",
      "Napas sangat cepat dan denyut nadi lemah."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  // TAMBAHAN v2.1 — 40 KONDISI BARU (41–80)
  // ══════════════════════════════════════════════════════════════

  // ── A. INFEKSI & PENYAKIT UMUM HARIAN ──────────────────────

  {
    id: "common-cold",
    conditionName: "Batuk Pilek Biasa (Nasofaringitis Akut / Common Cold)",
    keywords: [
      "pilek", "hidung meler", "bersin-bersin", "batuk ringan", "hidung buntu",
      "tenggorokan gatal", "badan agak pegal", "demam ringan pilek",
      "flu ringan", "batuk pilek", "hidung berair", "mampet"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi virus ringan pada saluran napas atas yang sangat umum. Berbeda dari flu (influenza), gejala lebih ringan dan biasanya sembuh dalam 7–10 hari.",
    firstAid: [
      "Istirahat cukup dan minum banyak cairan hangat.",
      "Semprotan saline nasal membantu melegakan hidung tersumbat.",
      "Paracetamol untuk demam atau nyeri tenggorokan ringan.",
      "Hindari kontak dekat dengan orang lain agar tidak menularkan."
    ],
    redFlags: [
      "Demam di atas 39°C atau berlangsung lebih dari 5 hari.",
      "Kesulitan bernapas atau nyeri dada.",
      "Gejala memburuk setelah sempat membaik (kemungkinan infeksi sekunder)."
    ]
  },

  {
    id: "acute-pharyngitis-new",
    conditionName: "Radang Tenggorokan Akut (Faringitis Akut / Acute Pharyngitis)",
    keywords: [
      "tenggorokan sakit mendadak", "nyeri menelan tiba-tiba", "tenggorokan merah parah",
      "demam tinggi sakit tenggorokan", "bintik nanah amandel", "leher kaku sakit tenggorokan",
      "radang akut", "strep throat", "amandel meradang", "sulit makan tenggorokan"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan akut faring yang sering disebabkan Streptococcus grup A. Perlu antibiotik jika penyebab bakteri untuk mencegah komplikasi jantung.",
    firstAid: [
      "Berkumur air garam hangat setiap 2–3 jam.",
      "Paracetamol atau ibuprofen untuk nyeri dan demam.",
      "Minum banyak cairan dingin atau es krim untuk meredakan nyeri.",
      "Segera ke dokter untuk tes Strep dan resep antibiotik jika perlu."
    ],
    redFlags: [
      "Kesulitan membuka mulut atau drooling berlebihan (abses peritonsil).",
      "Demam di atas 39°C lebih dari 48 jam.",
      "Ruam kulit menyertai sakit tenggorokan (demam berdarah streptokokal)."
    ]
  },

  {
    id: "mumps",
    conditionName: "Gondongan / Pipi Bengkak (Parotitis Epidemika / Mumps)",
    keywords: [
      "gondongan", "pipi bengkak", "kelenjar parotis bengkak", "rahang bengkak",
      "demam pipi bengkak", "bengkak di bawah telinga", "sulit mengunyah",
      "leher bengkak satu sisi", "bengkak kelenjar ludah"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi virus paramyxovirus yang menyebabkan pembengkakan kelenjar parotis (di depan dan bawah telinga). Sangat menular dan dapat dicegah dengan vaksin MMR.",
    firstAid: [
      "Istirahat total dan isolasi dari orang lain (menular hingga 5 hari setelah bengkak).",
      "Kompres hangat atau dingin pada area bengkak sesuai kenyamanan.",
      "Paracetamol untuk demam dan nyeri.",
      "Makan makanan lunak yang tidak memerlukan banyak mengunyah."
    ],
    redFlags: [
      "Nyeri kepala hebat, kaku leher, dan peka cahaya (meningitis).",
      "Nyeri testis atau perut bagian bawah pada laki-laki (orkitis).",
      "Penurunan pendengaran mendadak."
    ]
  },

  {
    id: "measles",
    conditionName: "Campak / Gabagen (Morbili / Rubeola / Measles)",
    keywords: [
      "campak", "gabagen", "ruam merah menyebar", "bercak merah dari wajah",
      "demam ruam anak", "bintik koplik", "mata merah campak", "batuk demam ruam",
      "ruam dari kepala ke badan", "morbili"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Penyakit virus sangat menular yang dimulai dengan demam, batuk, mata merah, diikuti ruam khas yang menyebar dari wajah ke seluruh tubuh. Dapat dicegah vaksin.",
    firstAid: [
      "Isolasi penderita di rumah selama 4 hari setelah ruam muncul.",
      "Istirahat total dan minum banyak cairan.",
      "Paracetamol untuk demam; HINDARI aspirin pada anak.",
      "Suplemen vitamin A direkomendasikan untuk anak-anak."
    ],
    redFlags: [
      "Kesulitan bernapas atau batuk parah (pneumonia campak).",
      "Kejang atau kebingungan (ensefalitis campak).",
      "Ruam disertai kulit melepuh atau tanda perdarahan."
    ]
  },

  {
    id: "chikungunya",
    conditionName: "Chikungunya (Demam Chikungunya / Chikungunya Fever)",
    keywords: [
      "chikungunya", "nyeri sendi mendadak", "demam sendi sakit", "semua sendi sakit",
      "badan kaku demam", "sendi bengkak demam", "ruam chikungunya",
      "nyeri tulang demam", "gigitan nyamuk sendi sakit", "lutut bengkak demam"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi virus alphavirus ditularkan nyamuk Aedes. Nyeri sendi yang hebat adalah ciri khas — bisa berlangsung berminggu-minggu hingga berbulan-bulan.",
    firstAid: [
      "Istirahat total; nyeri sendi membaik dengan istirahat.",
      "Paracetamol untuk demam dan nyeri — HINDARI ibuprofen/aspirin sampai dengue disingkirkan.",
      "Minum banyak cairan.",
      "Kompres hangat pada sendi yang nyeri."
    ],
    redFlags: [
      "Perdarahan spontan (mimisan, gusi berdarah) — perlu menyingkirkan DBD.",
      "Nyeri dada atau sesak napas.",
      "Kebingungan atau gangguan kesadaran."
    ]
  },

  {
    id: "tuberculosis",
    conditionName: "TBC / Tuberkulosis Paru (Tuberkulosis Pulmonal / Pulmonary Tuberculosis)",
    keywords: [
      "tbc", "tuberkulosis", "batuk lama lebih 2 minggu", "batuk darah", "keringat malam",
      "berat badan turun batuk", "demam sore hari", "batuk berdarah", "dada nyeri batuk",
      "batuk tidak sembuh obat biasa", "tb paru", "flek paru"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi bakteri Mycobacterium tuberculosis pada paru-paru. Memerlukan pengobatan OAT (Obat Anti Tuberkulosis) selama minimal 6 bulan. Dapat menular melalui udara.",
    firstAid: [
      "WAJIB ke dokter atau Puskesmas untuk tes dahak dan rontgen dada.",
      "Gunakan masker saat batuk untuk mencegah penularan.",
      "Pastikan ventilasi ruangan baik — sinar matahari membunuh bakteri TB.",
      "Jangan hentikan pengobatan sebelum selesai meski gejala mereda."
    ],
    redFlags: [
      "Batuk darah segar yang banyak — segera ke IGD.",
      "Sesak napas berat.",
      "Penurunan kesadaran (TB meningitis)."
    ]
  },

  {
    id: "pneumonia-new",
    conditionName: "Pneumonia / Paru-Paru Basah (Pneumonia Bakterial / Viral)",
    keywords: [
      "paru basah", "radang paru", "batuk berdahak disertai demam tinggi",
      "dada nyeri tarik napas", "napas cepat pendek", "sesak napas demam",
      "menggigil hebat batuk", "dahak hijau berbau", "batuk berdarah demam",
      "napas pendek saat jalan"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Infeksi berat pada jaringan paru oleh bakteri (Streptococcus pneumoniae, dll) atau virus. Memerlukan antibiotik dan sering perlu rawat inap untuk oksigenasi.",
    firstAid: [
      "⚠️ SEGERA bawa ke IGD — pneumonia dapat mengancam jiwa.",
      "Posisikan duduk tegak untuk memudahkan pernapasan.",
      "Pantau laju napas dan kesadaran selama perjalanan ke RS.",
      "Jangan berikan makanan/minuman jika sesak berat."
    ],
    redFlags: [
      "Saturasi oksigen di bawah 94% atau napas lebih dari 30×/menit.",
      "Bibir membiru atau kesadaran menurun.",
      "Tekanan darah sangat rendah (syok sepsis)."
    ]
  },

  // ── B. PENCERNAAN & HATI ────────────────────────────────────

  {
    id: "viral-gastroenteritis",
    conditionName: "Muntaber / Flu Perut (Gastroenteritis Viral / Viral Gastroenteritis)",
    keywords: [
      "muntaber", "flu perut", "mual muntah diare tiba-tiba", "perut kram muntah",
      "diare cair mendadak", "muntah berkali-kali", "perut sakit mual parah",
      "diare 5 kali sehari", "keracunan makanan muntah diare", "gastro"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi virus (norovirus, rotavirus) pada saluran cerna yang menyebabkan muntah dan diare mendadak. Sangat umum dan biasanya sembuh 1–3 hari.",
    firstAid: [
      "Oralit atau larutan gula-garam untuk mencegah dehidrasi.",
      "Minum sedikit-sedikit namun sering (sendok per sendok jika masih muntah).",
      "Istirahat dan hindari makanan padat sampai muntah mereda.",
      "Makanan BRAT (Pisang, Nasi, Roti) saat mulai bisa makan."
    ],
    redFlags: [
      "Tanda dehidrasi berat: mulut sangat kering, mata cekung, tidak BAK > 8 jam.",
      "Darah pada muntahan atau feses.",
      "Bayi di bawah 6 bulan atau lansia dengan gejala berat."
    ]
  },

  {
    id: "dysentery",
    conditionName: "Disentri / BAB Berdarah (Disentri Basiler / Amuba / Dysentery)",
    keywords: [
      "disentri", "bab berdarah lendir", "mencret berdarah", "feses ada darah",
      "bab tidak tuntas nyeri", "kram hebat bab", "tenesmus", "bab lendir darah",
      "nyeri perut kanan bab berdarah", "amoeba"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi usus besar oleh bakteri (Shigella) atau parasit (Entamoeba histolytica). Menyebabkan diare berdarah disertai lendir dan kram perut hebat.",
    firstAid: [
      "Minum banyak cairan dan oralit untuk mengganti yang hilang.",
      "WAJIB ke dokter untuk diagnosis pasti dan resep antibiotik/antiparasit.",
      "Jaga kebersihan tangan — sangat mudah menular.",
      "Paracetamol untuk nyeri dan demam."
    ],
    redFlags: [
      "Perdarahan rektum banyak dan terus-menerus.",
      "Dehidrasi berat: tidak bisa minum, kesadaran menurun.",
      "Demam sangat tinggi (> 39.5°C) tidak turun."
    ]
  },

  {
    id: "hepatitis-a",
    conditionName: "Sakit Kuning / Hepatitis A (Hepatitis Viral Akut / Hepatitis A)",
    keywords: [
      "sakit kuning", "hepatitis a", "kulit kuning", "mata kuning", "urine gelap coklat",
      "mual tidak mau makan", "perut kanan atas nyeri", "badan kuning", "feses pucat",
      "lesu hepatitis", "kencing teh"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Infeksi virus hepatitis A melalui makanan/air terkontaminasi. Menyebabkan peradangan hati dengan ikterus (kuning). Umumnya sembuh sendiri dalam 4–8 minggu.",
    firstAid: [
      "Istirahat total — hati membutuhkan waktu untuk pulih.",
      "Hindari alkohol dan obat-obatan yang diproses hati (paracetamol dosis tinggi).",
      "Makan makanan bergizi rendah lemak, tinggi karbohidrat.",
      "Wajib ke dokter untuk konfirmasi dan pantau fungsi hati."
    ],
    redFlags: [
      "Kebingungan atau perubahan perilaku mendadak (hepatic encephalopathy).",
      "Kuning yang sangat pekat dan cepat memburuk.",
      "Perdarahan abnormal (gusi, kulit memar mudah)."
    ]
  },

  {
    id: "bloating-aerophagia",
    conditionName: "Kembung & Sendawa Berlebih (Aerofagia / Sindrom Dispepsia)",
    keywords: [
      "kembung", "sendawa terus", "perut penuh angin", "perut begah", "perut bunyi",
      "sendawa tidak berhenti", "flatulensi", "kentut berlebih", "perut terasa penuh",
      "makan sedikit sudah kenyang", "angin di perut"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Penumpukan gas berlebih di saluran cerna akibat menelan udara, makanan pembentuk gas, atau gangguan pencernaan fungsional.",
    firstAid: [
      "Makan perlahan dan kunyah makanan dengan baik.",
      "Hindari minuman berkarbonasi, kol, kacang-kacangan, dan bawang.",
      "Olahraga ringan seperti berjalan kaki membantu pergerakan gas.",
      "Simethicone (obat angin) tersedia bebas untuk meredakan gejala."
    ],
    redFlags: [
      "Kembung disertai nyeri perut hebat dan demam.",
      "Penurunan berat badan signifikan.",
      "Kembung persisten lebih dari 2 minggu tanpa sebab jelas."
    ]
  },

  {
    id: "pancreatitis",
    conditionName: "Radang Pankreas Akut (Pankreatitis Akut / Acute Pancreatitis)",
    keywords: [
      "pankreatitis", "nyeri perut tengah atas hebat", "nyeri menjalar ke punggung",
      "mual muntah nyeri perut parah", "perut nyeri setelah makan berlemak",
      "nyeri epigastrik parah", "perut keras nyeri hebat", "nyeri sekitar pusar parah"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Peradangan akut pankreas yang menyebabkan nyeri perut atas yang sangat hebat, sering menjalar ke punggung. Dapat mengancam jiwa.",
    firstAid: [
      "⚠️ SEGERA ke IGD — pankreatitis akut adalah kedaruratan medis.",
      "Puasa total (tidak makan/minum) hingga dievaluasi dokter.",
      "Jangan konsumsi pereda nyeri sebelum diperiksa.",
      "Berbaring dengan posisi paling nyaman (sering posisi fetal/meringkuk)."
    ],
    redFlags: [
      "Semua gejala pankreatitis akut berat adalah RED FLAG.",
      "Perut terasa keras seperti papan.",
      "Tekanan darah sangat rendah dan denyut nadi cepat (syok)."
    ]
  },

  // ── C. MATA, TELINGA, HIDUNG & MULUT ───────────────────────

  {
    id: "bacterial-conjunctivitis",
    conditionName: "Mata Merah Belekan (Konjungtivitis Bakteri / Bacterial Conjunctivitis)",
    keywords: [
      "mata belekan", "kotoran mata kuning hijau", "mata merah bernanah",
      "mata lengket pagi belekan", "mata bernanah", "belek mata",
      "mata kering nanah", "konjungtivitis bakteri", "mata gatal bernanah"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan konjungtiva akibat infeksi bakteri (Staphylococcus, Haemophilus). Ditandai sekret purulen (nanah) kuning-hijau yang banyak, berbeda dari konjungtivitis viral.",
    firstAid: [
      "Bersihkan sekret dengan kapas basah dari sudut dalam ke luar.",
      "Kompres hangat selama 5 menit beberapa kali sehari.",
      "Cuci tangan sering; jangan menyentuh mata.",
      "WAJIB ke dokter untuk tetes mata antibiotik."
    ],
    redFlags: [
      "Nyeri mata yang hebat (bukan sekadar gatal).",
      "Penglihatan kabur yang tidak membaik.",
      "Bayi baru lahir dengan mata bernanah (neonatal conjunctivitis — darurat)."
    ]
  },

  {
    id: "myopia",
    conditionName: "Rabun Jauh (Miopia / Myopia / Nearsightedness)",
    keywords: [
      "rabun jauh", "miopia", "buram melihat jauh", "tulisan papan tidak jelas",
      "menyipitkan mata melihat jauh", "penglihatan jauh buram", "mata minus",
      "jelas melihat dekat buram jauh", "perlu kacamata minus"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kelainan refraksi di mana benda jauh terlihat buram karena cahaya jatuh di depan retina. Sangat umum dan dikoreksi dengan kacamata/lensa kontak minus.",
    firstAid: [
      "Kurangi waktu layar dan istirahatkan mata setiap 20 menit.",
      "Periksa ke dokter mata atau optometris untuk resep kacamata.",
      "Pastikan pencahayaan cukup saat membaca.",
      "Aktivitas di luar ruangan membantu memperlambat progresivitas pada anak."
    ],
    redFlags: [
      "Kilatan cahaya atau floaters (bintik mengambang) tiba-tiba — risiko ablasi retina.",
      "Penglihatan kabur mendadak di satu sisi.",
      "Miopia tinggi (> -6D) perlu pemeriksaan retina rutin."
    ]
  },

  {
    id: "astigmatism",
    conditionName: "Mata Silinder (Astigmatisma / Astigmatism)",
    keywords: [
      "mata silinder", "astigmatisma", "penglihatan berbayang", "tulisan dobel",
      "cahaya lampu malam menyebar", "penglihatan tidak tajam", "mata lelah membaca",
      "sakit kepala dari mata buram", "kacamata silinder"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kelainan bentuk kornea atau lensa yang menyebabkan penglihatan buram/berbayang di semua jarak. Sangat umum dan sering ada bersamaan dengan miopia atau hipermetropia.",
    firstAid: [
      "Periksa ke dokter mata untuk refraksi dan resep kacamata silinder.",
      "Istirahatkan mata secara teratur saat bekerja jarak dekat.",
      "Pencahayaan ruangan yang baik mengurangi ketegangan mata."
    ],
    redFlags: [
      "Penglihatan kabur yang tiba-tiba memburuk tanpa sebab jelas.",
      "Sakit kepala parah yang menyertai gangguan penglihatan.",
      "Silau ekstrem atau halo di sekitar lampu pada malam hari."
    ]
  },

  {
    id: "allergic-rhinitis",
    conditionName: "Pilek Alergi / Alergi Debu (Rinitis Alergi / Allergic Rhinitis)",
    keywords: [
      "pilek pagi hari", "bersin berulang pagi", "hidung meler alergi",
      "bersin debu", "alergi dingin hidung", "hidung gatal bersin",
      "mata berair bersin", "alergi tungau debu", "rinitis", "cuaca dingin bersin"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Respons alergi pada membran mukosa hidung terhadap alergen (debu, serbuk sari, bulu hewan). Menyebabkan bersin berulang, hidung meler, dan hidung tersumbat.",
    firstAid: [
      "Identifikasi dan hindari pemicu alergen.",
      "Antihistamin oral (cetirizine/loratadine) meredakan gejala akut.",
      "Semprotan saline nasal membantu membersihkan alergen.",
      "Tutup jendela saat musim serbuk sari tinggi; gunakan air purifier."
    ],
    redFlags: [
      "Sesak napas atau mengi bersamaan (mungkin asma alergi).",
      "Polip hidung yang menyebabkan sumbatan total.",
      "Gejala tidak terkontrol meski sudah konsumsi antihistamin."
    ]
  },

  {
    id: "nasal-polyp",
    conditionName: "Polip Hidung (Polip Nasi / Nasal Polyps)",
    keywords: [
      "hidung tersumbat terus", "polip hidung", "hidung mampet menahun",
      "suara sengau hidung", "kehilangan penciuman", "tidak bisa mencium",
      "hidung buntu kronis", "benjolan dalam hidung", "sinusitis berulang"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Pertumbuhan jinak non-kanker pada lapisan hidung atau sinus, sering terkait sinusitis kronis atau alergi. Menyebabkan hidung tersumbat persisten dan hilangnya penciuman.",
    firstAid: [
      "Semprotan hidung kortikosteroid (fluticasone) dapat mengecilkan polip kecil.",
      "Bilas hidung dengan larutan saline setiap hari.",
      "Hindari alergen dan iritan (asap, polusi).",
      "Konsultasi dokter THT untuk evaluasi dan kemungkinan operasi."
    ],
    redFlags: [
      "Perdarahan dari hidung yang tidak berhenti.",
      "Nyeri wajah hebat atau penglihatan terganggu.",
      "Polip tumbuh sangat cepat (perlu menyingkirkan keganasan)."
    ]
  },

  {
    id: "wisdom-tooth",
    conditionName: "Gigi Bungsu Tumbuh / Nyeri Rahang (Impaksi Gigi Molar Ketiga / Wisdom Tooth Impaction)",
    keywords: [
      "gigi bungsu", "gigi geraham belakang tumbuh", "nyeri rahang belakang",
      "gusi belakang bengkak", "susah buka mulut", "nyeri menelan rahang",
      "gigi bungsu bengkak", "molar ketiga sakit", "perikoronitis"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Gigi molar ketiga yang tidak tumbuh sempurna (impaksi) menyebabkan nyeri, bengkak, dan kadang infeksi pada gusi di sekitarnya.",
    firstAid: [
      "Berkumur air garam hangat untuk mengurangi peradangan gusi.",
      "Ibuprofen atau paracetamol untuk nyeri.",
      "Kompres dingin di pipi untuk bengkak.",
      "Segera ke dokter gigi untuk evaluasi — mungkin perlu pencabutan."
    ],
    redFlags: [
      "Bengkak menyebar ke leher atau bawah rahang (selulitis fasial — darurat).",
      "Kesulitan menelan atau membuka mulut sama sekali.",
      "Demam tinggi bersamaan dengan nyeri rahang."
    ]
  },

  {
    id: "halitosis",
    conditionName: "Bau Mulut Kronis (Halitosis / Chronic Bad Breath)",
    keywords: [
      "bau mulut", "napas bau", "mulut bau setelah sikat gigi", "bau napas",
      "halitosis", "lidah berlapis putih", "napas tidak segar", "orang jauh karena bau mulut",
      "bau mulut saat puasa"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Bau napas tidak sedap yang persisten, dapat disebabkan bakteri mulut, penyakit gigi/gusi, sinusitis, GERD, atau masalah sistemik lain.",
    firstAid: [
      "Sikat gigi 2 kali/hari dan bersihkan lidah dengan tongue scraper.",
      "Flossing setiap hari untuk membersihkan sela gigi.",
      "Minum banyak air; mulut kering memperburuk bau.",
      "Hindari bawang, bawang putih, dan rokok."
    ],
    redFlags: [
      "Bau sangat khas manis (diabetes), amonia (gagal ginjal), atau busuk (abses).",
      "Disertai gusi berdarah, gigi goyang, atau bengkak.",
      "Bau mulut tidak membaik meski kebersihan mulut sudah baik."
    ]
  },

  // ── D. OTOT, TULANG & SENDI ─────────────────────────────────

  {
    id: "osteoarthritis",
    conditionName: "Pengapuran Sendi / Nyeri Lutut (Osteoartritis / Osteoarthritis)",
    keywords: [
      "pengapuran sendi", "osteoartritis", "lutut nyeri saat jalan", "lutut bunyi",
      "nyeri lutut naik tangga", "sendi kaku pagi hari", "lutut bengkak",
      "nyeri pinggul jalan", "tulang rawan aus", "nyeri sendi orang tua"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kerusakan progresif tulang rawan sendi akibat penuaan atau beban berlebih. Paling sering mengenai lutut, pinggul, dan tulang belakang.",
    firstAid: [
      "Olahraga ringan (renang, bersepeda) untuk memperkuat otot sekitar sendi.",
      "Turunkan berat badan jika berlebih untuk mengurangi beban sendi.",
      "Paracetamol atau ibuprofen untuk nyeri akut.",
      "Kompres hangat sebelum aktivitas, kompres dingin setelah."
    ],
    redFlags: [
      "Nyeri sendi yang sangat hebat tiba-tiba (mungkin fraktur atau infeksi sendi).",
      "Sendi bengkak merah panas dengan demam.",
      "Ketidakmampuan menahan beban badan."
    ]
  },

  {
    id: "rheumatoid-arthritis",
    conditionName: "Rematik / Nyeri Sendi Pagi (Rheumatoid Arthritis / RA)",
    keywords: [
      "rematik", "rheumatoid arthritis", "sendi kaku pagi lebih 1 jam",
      "banyak sendi sakit", "jari bengkak simetris", "pergelangan tangan bengkak",
      "nyeri sendi simetris kiri kanan", "capek berat sendi sakit",
      "sendi hangat meradang kronis"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Penyakit autoimun di mana sistem imun menyerang lapisan sendi, menyebabkan peradangan kronis, nyeri, dan deformitas sendi bilateral.",
    firstAid: [
      "Istirahatkan sendi yang meradang saat flare-up.",
      "NSAID (ibuprofen/naproxen) untuk meredakan peradangan.",
      "Latihan rentang gerak ringan untuk menjaga fleksibilitas.",
      "WAJIB ke dokter reumatologi untuk terapi DMARDs."
    ],
    redFlags: [
      "Deformitas sendi yang progresif cepat.",
      "Gejala sistemik: demam, penurunan berat badan, kelelahan ekstrem.",
      "Nyeri dada atau sesak napas (RA dapat mengenai paru/jantung)."
    ]
  },

  {
    id: "plantar-fasciitis",
    conditionName: "Nyeri Tumit Pagi Hari (Plantar Fasciitis / Fasciitis Plantaris)",
    keywords: [
      "tumit sakit pagi", "plantar fasciitis", "nyeri tumit pertama berdiri",
      "nyeri telapak kaki depan", "heel pain", "kaki sakit saat berdiri pertama",
      "tumit nyeri setelah duduk lama", "nyeri langkah pertama pagi"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan pada plantar fascia (jaringan tebal di telapak kaki). Nyeri khas paling berat saat langkah pertama di pagi hari.",
    firstAid: [
      "Regangkan otot betis dan telapak kaki setiap pagi sebelum berdiri.",
      "Gunakan alas kaki dengan bantalan tumit yang baik.",
      "Es di tumit 15–20 menit setelah aktivitas.",
      "Ibuprofen untuk nyeri dan peradangan."
    ],
    redFlags: [
      "Nyeri yang semakin parah meski sudah istirahat berminggu-minggu.",
      "Pembengkakan, kemerahan, atau panas di area tumit (kemungkinan fraktur stres).",
      "Mati rasa atau kesemutan di telapak kaki."
    ]
  },

  {
    id: "frozen-shoulder",
    conditionName: "Bahu Beku (Frozen Shoulder / Adhesive Capsulitis)",
    keywords: [
      "bahu beku", "frozen shoulder", "bahu sakit tidak bisa diangkat",
      "bahu kaku sulit gerak", "nyeri bahu malam", "bahu tidak bisa memutar",
      "bahu sakit mengambil sesuatu tinggi", "adhesive capsulitis"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Peradangan dan penebalan kapsul sendi bahu yang menyebabkan rasa sakit dan keterbatasan gerak yang progresif. Sering terjadi setelah imobilisasi atau tanpa sebab jelas.",
    firstAid: [
      "Latihan rentang gerak pendulum (ayunan lengan) setiap hari.",
      "Paracetamol atau ibuprofen untuk nyeri.",
      "Kompres hangat sebelum latihan.",
      "Fisioterapi adalah pengobatan utama — konsultasikan dengan dokter."
    ],
    redFlags: [
      "Nyeri bahu yang sangat berat setelah trauma (kemungkinan dislokasi/fraktur).",
      "Kelemahan mendadak pada lengan.",
      "Nyeri menyebar ke leher dan dada (mungkin bukan dari bahu)."
    ]
  },

  {
    id: "fracture-closed",
    conditionName: "Curiga Patah Tulang (Fraktur Tertutup / Closed Fracture)",
    keywords: [
      "patah tulang", "tulang retak", "tulang sakit setelah jatuh", "bengkak setelah trauma",
      "nyeri hebat setelah kecelakaan", "tidak bisa gerakkan tangan kaki",
      "deformitas setelah jatuh", "tulang bunyi saat cedera"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Kerusakan integritas tulang akibat trauma tanpa luka terbuka di kulit. Memerlukan pencitraan (rontgen) dan imobilisasi/operasi segera.",
    firstAid: [
      "⚠️ JANGAN paksakan menggerakkan area yang dicurigai patah.",
      "Imobilisasi dengan bidai improvisasi (papan, majalah digulung).",
      "Es dibungkus kain pada area cedera untuk mengurangi bengkak.",
      "Segera bawa ke IGD untuk rontgen dan penanganan definitif."
    ],
    redFlags: [
      "Semua curiga patah tulang perlu evaluasi IGD.",
      "Tulang menembus kulit (fraktur terbuka — risiko infeksi berat).",
      "Mati rasa/kesemutan di bawah area cedera (cedera saraf/pembuluh darah)."
    ]
  },

  // ── E. KULIT, RAMBUT & REAKSI ALERGI ───────────────────────

  {
    id: "food-allergy",
    conditionName: "Alergi Makanan (Hipersensitivitas Makanan / Food Allergy)",
    keywords: [
      "alergi makanan", "gatal setelah makan", "bentol setelah makan udang",
      "biduran setelah makan", "mual gatal setelah seafood", "alergi kacang",
      "bibir gatal setelah makan", "reaksi alergi makanan", "hipersensitivitas"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Respons imun abnormal terhadap protein makanan tertentu (kacang, seafood, susu, telur). Gejala muncul menit hingga jam setelah makan pemicu.",
    firstAid: [
      "Hentikan konsumsi makanan pemicu segera.",
      "Antihistamin oral (cetirizine/loratadine) untuk reaksi ringan-sedang.",
      "Kompres dingin pada area yang gatal.",
      "Catat makanan pemicu dan hindari di masa mendatang."
    ],
    redFlags: [
      "Bibir, lidah, atau tenggorokan bengkak (angioedema) — risiko anafilaksis.",
      "Sesak napas atau suara serak tiba-tiba setelah makan.",
      "Pusing hebat, pingsan, atau tekanan darah turun drastis."
    ]
  },

  {
    id: "herpes-labialis",
    conditionName: "Lenting Bibir / Herpes Bibir (Herpes Labialis / Cold Sores)",
    keywords: [
      "lenting bibir", "herpes bibir", "bintil bibir", "sariawan luar bibir",
      "gelembung kecil bibir", "bibir melepuh kecil", "cold sore",
      "bibir gatal lalu lenting", "bintil berair bibir"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Infeksi virus HSV-1 yang menyebabkan lenting berisi cairan di sekitar bibir dan mulut. Kambuh saat stres, demam, atau paparan sinar matahari berlebih.",
    firstAid: [
      "Oleskan krim antiviral (acyclovir) di awal tanda (rasa gatal/terbakar).",
      "Hindari menyentuh lenting, lalu menyentuh mata atau area lain.",
      "Kompres dingin untuk meredakan rasa tidak nyaman.",
      "Lindungi dari sinar matahari dengan lip balm SPF."
    ],
    redFlags: [
      "Lenting menyebar ke mata atau kulit sekitar mata (herpes okular — darurat).",
      "Demam tinggi bersamaan.",
      "Pasien immunocompromised (HIV, kemoterapi) — perlu evaluasi segera."
    ]
  },

  {
    id: "warts",
    conditionName: "Kutil Kulit (Veruka Vulgaris / Common Warts)",
    keywords: [
      "kutil", "kutil kulit", "benjolan kasar di tangan", "veruka",
      "kulit kasar menonjol", "kutil di kaki", "plantar wart",
      "kutil jari", "benjolan kulit tidak nyeri"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Pertumbuhan jinak kulit akibat infeksi virus HPV. Sangat umum, tidak berbahaya, dan sering hilang sendiri dalam 1–2 tahun.",
    firstAid: [
      "Obat kutil salisilat (asam salisilat) topikal dijual bebas — oleskan setiap hari.",
      "Rendam area kutil dalam air hangat selama 5 menit sebelum aplikasi obat.",
      "Tutup kutil dengan plester untuk mencegah penyebaran.",
      "Jangan memotong atau mencabut kutil sendiri."
    ],
    redFlags: [
      "Kutil berubah warna, berdarah, atau tumbuh cepat (mungkin bukan kutil biasa).",
      "Kutil di area genital atau anus (perlu pemeriksaan dokter).",
      "Jumlah kutil sangat banyak pada pasien dengan sistem imun lemah."
    ]
  },

  {
    id: "hair-loss",
    conditionName: "Rambut Rontok Berlebih (Alopesia / Telogen Effluvium)",
    keywords: [
      "rambut rontok", "rambut gugur banyak", "kebotakan", "alopesia",
      "rambut menipis", "rambut rontok saat keramas", "mahkota kepala botak",
      "telogen effluvium", "rambut rontok setelah sakit", "rambut rontok stres"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kerontokan rambut lebih dari normal (> 100 helai/hari). Dapat dipicu stres, defisiensi nutrisi (zat besi, vitamin D), masalah tiroid, atau hormonal.",
    firstAid: [
      "Pastikan asupan nutrisi cukup: protein, zat besi, zinc, biotin.",
      "Kelola stres dengan olahraga, tidur cukup, dan relaksasi.",
      "Hindari hairstyle ketat yang menarik rambut.",
      "Ke dokter untuk cek darah lengkap (tiroid, darah rutin, ferritin)."
    ],
    redFlags: [
      "Kebotakan berbentuk bulat tiba-tiba (alopecia areata).",
      "Kerontokan disertai gejala lain: kelelahan, berat badan berubah, kulit kering.",
      "Kulit kepala bersisik, merah, atau gatal bersamaan (infeksi jamur)."
    ]
  },

  {
    id: "intertrigo",
    conditionName: "Ruam Lipatan Kulit (Dermatitis Intertriginosa / Intertrigo)",
    keywords: [
      "ruam lipatan kulit", "iritasi selangkangan", "kulit lipatan merah",
      "bawah payudara ruam", "lipatan perut ruam", "kulit lembap merah gatal",
      "dermatitis lipatan", "ruam merah basah", "lipatan ketiak ruam"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Peradangan kulit pada area lipatan tubuh akibat gesekan, kelembapan, dan panas. Sering diperparah oleh infeksi jamur (Candida) atau bakteri.",
    firstAid: [
      "Jaga area lipatan tetap kering — keringkan dengan lembut setelah mandi.",
      "Gunakan bedak antijamur (miconazole/clotrimazole) pada area yang terkena.",
      "Pakai pakaian longgar dan menyerap keringat (katun).",
      "Turunkan berat badan jika lipatan berlebih terkait obesitas."
    ],
    redFlags: [
      "Kulit melepuh, bernanah, atau berbau busuk (superinfeksi).",
      "Ruam menyebar dengan cepat.",
      "Demam bersamaan."
    ]
  },

  // ── F. JANTUNG, PEMBULUH DARAH & KONDISI DARURAT ───────────

  {
    id: "palpitation",
    conditionName: "Jantung Berdebar (Palpitasi / Takikardia / Heart Palpitation)",
    keywords: [
      "jantung berdebar", "deg-degan", "palpitasi", "detak jantung cepat",
      "takikardia", "jantung berdetak keras", "jantung berdegup tidak teratur",
      "aritmia", "dada berdebar saat santai", "jantung seperti mau copot"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kesadaran akan detak jantung sendiri yang terasa cepat, kuat, atau tidak teratur. Dapat disebabkan stres, kafein, anemia, gangguan tiroid, atau aritmia.",
    firstAid: [
      "Duduk atau berbaring, lakukan pernapasan dalam untuk menenangkan.",
      "Manuver vagal: batuk kuat, menelan air dingin, atau tahan napas sedikit.",
      "Hindari kafein, alkohol, dan nikotin.",
      "Catat kapan terjadi, berapa lama, dan apakah ada gejala lain."
    ],
    redFlags: [
      "Palpitasi disertai nyeri dada, sesak napas, atau pingsan.",
      "Denyut sangat cepat (> 150×/menit) dan tidak bisa mereda.",
      "Palpitasi pada pasien dengan riwayat penyakit jantung."
    ]
  },

  {
    id: "stroke-new",
    conditionName: "Gejala Stroke / Wajah Perot (Stroke / Cerebrovascular Accident)",
    keywords: [
      "wajah perot", "bicara pelo mendadak", "tangan lemas tiba-tiba",
      "kaki lemah mendadak", "mati rasa satu sisi badan", "bingung mendadak parah",
      "penglihatan gelap mendadak", "kehilangan keseimbangan tiba-tiba",
      "sakit kepala terhebat dalam hidup", "stroke"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Gangguan aliran darah ke otak yang bersifat darurat. Setiap menit, 1,9 juta neuron mati — penanganan dalam 4,5 jam pertama sangat menentukan.",
    firstAid: [
      "⚠️ HUBUNGI 119 SEGERA — 'Time is Brain'.",
      "Gunakan F.A.S.T: Face (perot?), Arms (lemas?), Speech (pelo?), Time (telepon sekarang).",
      "Jangan berikan makanan/minuman atau obat apapun.",
      "Baringkan dengan kepala ditinggikan 30°."
    ],
    redFlags: [
      "Semua gejala stroke adalah RED FLAG ABSOLUT.",
      "Wajah turun sebelah + tangan lemas satu sisi + bicara pelo.",
      "Kehilangan kesadaran atau kejang."
    ]
  },

  {
    id: "vasovagal-syncope",
    conditionName: "Pingsan Sementara (Sinkop Vasovagal / Vasovagal Syncope)",
    keywords: [
      "pingsan", "kunang-kunang berat", "hampir pingsan", "sinkop",
      "tiba-tiba gelap sebelum pingsan", "lemas lalu pingsan", "pingsan saat berdiri lama",
      "pingsan melihat darah", "pandangan gelap mendadak saat berdiri",
      "mau pingsan pusing mendadak"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Kehilangan kesadaran sementara akibat penurunan aliran darah ke otak secara tiba-tiba, sering dipicu dehidrasi, panas, berdiri lama, atau emosi kuat.",
    firstAid: [
      "Jika merasa akan pingsan: duduk atau berbaring, angkat kaki.",
      "Longgarkan pakaian ketat dan pastikan sirkulasi udara baik.",
      "Minum air dan makan camilan manis setelah sadar.",
      "Jangan berdiri terlalu cepat — naiki posisi bertahap."
    ],
    redFlags: [
      "Pingsan tanpa peringatan (tidak ada prodromal) — risiko aritmia.",
      "Pingsan disertai nyeri dada atau palpitasi.",
      "Pingsan saat olahraga.",
      "Kejang saat atau setelah pingsan."
    ]
  },

  {
    id: "seizure",
    conditionName: "Kejang (Konvulsi / Seizure / Epilepsi)",
    keywords: [
      "kejang", "konvulsi", "step", "badan kaku gemetar", "mata mendelik",
      "tidak sadarkan diri gemetar", "kejang demam", "epilepsi kambuh",
      "mulut berbusa kejang", "badan bergetar tidak sadar"
    ],
    triageLevel: "Darurat / Segera ke IGD",
    description:
      "Aktivitas listrik otak yang abnormal dan tidak terkontrol. Dapat disebabkan demam tinggi (pada anak), epilepsi, gangguan elektrolit, atau cedera kepala.",
    firstAid: [
      "⚠️ HUBUNGI 119 jika kejang pertama kali atau berlangsung > 5 menit.",
      "Jauhkan dari benda berbahaya; letakkan sesuatu lembut di bawah kepala.",
      "JANGAN memasukkan apapun ke dalam mulut.",
      "Posisikan miring setelah kejang berhenti untuk mencegah tersedak.",
      "Catat berapa lama kejang berlangsung."
    ],
    redFlags: [
      "Kejang berlangsung lebih dari 5 menit (status epilepticus).",
      "Kejang pertama kali pada orang dewasa.",
      "Tidak sadar setelah kejang berhenti (> 5–10 menit).",
      "Cedera kepala sebelum kejang."
    ]
  },

  {
    id: "varicose-veins",
    conditionName: "Varises Kaki (Insufisiensi Vena Kronis / Varicose Veins)",
    keywords: [
      "varises", "urat kaki menonjol", "pembuluh darah biru menonjol",
      "kaki berat dan lelah", "kaki bengkak sore hari", "varises betis",
      "nyeri kaki berdiri lama", "kram kaki malam hari", "spider vein"
    ],
    triageLevel: "Konsultasi Dokter",
    description:
      "Pembengkakan dan pelebaran vena superfisial kaki akibat kerusakan katup vena. Menyebabkan kaki pegal, berat, dan tampak urat biru menonjol.",
    firstAid: [
      "Angkat kaki saat duduk atau berbaring (di atas level jantung).",
      "Gunakan stoking kompresi (compression stockings) selama aktivitas.",
      "Hindari berdiri atau duduk terlalu lama tanpa bergerak.",
      "Olahraga jalan kaki teratur untuk memperkuat pompa otot betis."
    ],
    redFlags: [
      "Kulit di atas varises menjadi merah, panas, dan nyeri (tromboflebitis).",
      "Varises pecah dan berdarah.",
      "Pembengkakan kaki mendadak satu sisi disertai nyeri (kemungkinan DVT)."
    ]
  },

  {
    id: "exercise-side-stitch",
    conditionName: "Nyeri Samping Saat Lari (Exercise-Related Transient Abdominal Pain / Side Stitch)",
    keywords: [
      "sundukan", "nyeri samping saat lari", "sakit perut samping olahraga",
      "nyeri bawah tulang rusuk lari", "kram samping saat jogging",
      "nyeri diafragma lari", "side stitch", "perut nyeri sebelah saat olahraga"
    ],
    triageLevel: "Mandiri di Rumah",
    description:
      "Nyeri tajam sementara di bawah tulang rusuk (biasanya kanan) saat berolahraga, terutama berlari. Diduga terkait ketegangan ligamen diafragma.",
    firstAid: [
      "Perlambat lari atau berhenti sejenak.",
      "Tekan area nyeri dengan jari sambil bernapas dalam.",
      "Tekuk badan ke depan sedikit sambil bernapas perlahan.",
      "Hindari makan besar 2–3 jam sebelum berolahraga."
    ],
    redFlags: [
      "Nyeri samping yang tidak hilang setelah berhenti olahraga.",
      "Disertai mual, muntah, atau demam.",
      "Nyeri menjalar ke bahu kanan (mungkin masalah hati/kantung empedu)."
    ]
  }

];
