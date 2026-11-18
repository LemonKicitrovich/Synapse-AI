# 🩺 SYNAPSE AI — System for Symptom Navigation & Predictive Evaluation

![Status](https://img.shields.io/badge/Status-Completed_MVP-10B981?style=flat-square)
![Program](https://img.shields.io/badge/Capstone-Hacktiv8_x_IBM_SkillsBuild-059669?style=flat-square)
![Built With](https://img.shields.io/badge/Built_With-IBM_Bob-0F172A?style=flat-square)
![Tech](https://img.shields.io/badge/Stack-HTML5_%7C_Tailwind_CSS_%7C_Vanilla_JS-38BDF8?style=flat-square)

**SYNAPSE AI** adalah aplikasi web asisten kesehatan mandiri berbasis *frontend* yang dirancang untuk membantu masyarakat melakukan skrining gejala awal dan mendapatkan panduan *triage* medis secara cepat, terstruktur, dan mudah dipahami.

Proyek ini dikembangkan sebagai **Final Project (Capstone Project)** pada program **Hacktiv8 x IBM SkillsBuild (2026)** menggunakan **IBM Bob**.

---

## Latar Belakang & Tujuan

Masyarakat sering kali mengalami kebingungan saat menghadapi keluhan kesehatan mendadak—sulit membedakan mana gejala ringan yang cukup ditangani di rumah dan mana kondisi serius yang memerlukan penanganan medis segera. Pencarian informasi acak di internet kerap memicu kepanikan berlebih (*cyberchondria*) atau justru keterlambatan penanganan.

**SYNAPSE AI** hadir untuk menjembatani kebutuhan tersebut melalui:
* Penerjemahan keluhan bahasa sehari-hari menjadi estimasi kondisi medis yang relevan.
* Klasifikasi tingkat urgensi (*triage*) yang jelas agar pengguna tahu langkah selanjutnya.
* Panduan pertolongan pertama (*first-aid*) yang aman serta peringatan tanda bahaya (*red flags*).

---

## Fitur Utama

1. **Basis Pengetahuan 140+ Kondisi Medis:**
   Mencakup penyakit umum harian, gangguan pernapasan/THT, pencernaan, penyakit tropis Indonesia (seperti DBD dan Tifus), kulit, mata, saraf/ergonomi, hingga kondisi gawat darurat. Setiap hasil dilengkapi penamaan standar **`Nama Umum (Nama Ilmiah / Medis)`**.
2. **Sistem Klasifikasi Triage 3 Tingkat:**
   * 🟢 **Mandiri di Rumah:** Keluhan ringan yang dapat ditangani dengan perawatan mandiri dan pemantauan.
   * 🟡 **Konsultasi Dokter:** Kondisi yang memerlukan pemeriksaan dan resep tenaga medis profesional.
   * 🔴 **Darurat / Segera ke IGD:** Kondisi berisiko tinggi yang membutuhkan penanganan medis darurat segera.
3. **Mesin Analisis Berbasis Aturan & Guardrails Keamanan:**
   * Menggunakan algoritma *Word-Boundary Keyword Matching & Relevance Scoring* untuk menghitung tingkat kecocokan gejala secara akurat.
   * Dilengkapi **Input Guardrails** yang secara otomatis menyaring dan menolak input tidak valid, terlalu singkat (`< 3` karakter), atau teks acak (*gibberish*) agar sistem tidak memberikan hasil keliru (*false positive*).
4. **Menu Logo Interaktif & Kontrol Sistem:**
   * **Tentang Pembuat:** Profil pengembang dan informasi program Capstone.
   * **Arsitektur & Database AI:** Penghitung otomatis total kondisi medis yang terindeks dan penjelasan transparansi logika sistem.
   * **Nomor Darurat Medis (SOS):** Daftar kontak cepat layanan kesehatan darurat Indonesia (`119`, `112`, `1500-567`).
   * **Pengaturan Sistem:** Pengalih tema **Mode Gelap (Dark Mode)**, pengaturan kecepatan simulasi analisis AI, dan manajemen riwayat pemeriksaan.
5. **Riwayat Pemeriksaan Lokal (*LocalStorage*):**
   Menyimpan riwayat pengecekan gejala yang valid langsung di browser pengguna tanpa memerlukan server eksternal sehingga privasi tetap terjaga.

---

## Struktur Proyek

Aplikasi ini dibangun menggunakan arsitektur *frontend* modular tanpa ketergantungan *framework* berat maupun API eksternal:

```text
SYNAPSE-AI/
├── index.html      # Struktur antarmuka utama, modal menu interaktif, dan konfigurasi Tailwind
├── style.css       # Kustomisasi animasi, transisi halus, dan styling pendukung
├── data.js         # Basis pengetahuan 140+ kondisi medis (keywords, triage, first-aid, red flags)
├── script.js       # Logika pencocokan gejala, input guardrails, Dark Mode, dan LocalStorage
└── README.md       # Dokumentasi proyek
```

---

## Cara Menjalankan Aplikasi

Karena berjalan 100% di sisi klien (*client-side*), aplikasi ini dapat langsung dijalankan tanpa proses instalasi:

1. Unduh atau *clone* seluruh file di dalam folder proyek ini.
2. Pastikan kelima file (`index.html`, `style.css`, `data.js`, `script.js`, `README.md`) berada dalam satu folder yang sama.
3. Klik dua kali file **`index.html`** untuk membukanya langsung di browser (Chrome, Edge, Firefox, atau Safari), atau gunakan ekstensi **Live Server** di VS Code.

---

##  Pengembang

* **Nama:** Raihan Noviansyah
* **Peran:** Frontend & AI System Developer
* **Program:** Capstone Project — Hacktiv8 x IBM SkillsBuild (2026)

---

## Disclaimer Medis

> **Penting:** Informasi dan hasil evaluasi yang ditampilkan oleh **SYNAPSE AI** hanya bertujuan untuk edukasi dan panduan *triage* awal, **bukan merupakan diagnosis medis klinis**. Selalu konsultasikan kondisi kesehatan Anda dengan dokter atau tenaga kesehatan berlisensi untuk mendapatkan pemeriksaan dan penanganan yang akurat.
