/**
 * SYNAPSE AI — Core Application Logic v2.0
 * ============================================================
 * Bertanggung jawab atas:
 *   1. Keyword matching & relevance scoring
 *   2. Simulasi proses AI (loading state, kecepatan dapat diatur)
 *   3. Render kartu hasil analisis
 *   4. Manajemen riwayat dengan LocalStorage
 *   5. Dark Mode (toggle + persistence di LocalStorage)
 *   6. Logo dropdown menu + 4 modal popup
 *   7. Pengaturan kecepatan analisis AI
 * ============================================================
 */

/* ── Konstanta ──────────────────────────────────────────────── */
const HISTORY_KEY      = 'synapseai_history';    // Kunci riwayat
const THEME_KEY        = 'synapseai_theme';      // Kunci tema (dark/light)
const SPEED_KEY        = 'synapseai_speed';      // Kunci kecepatan AI
const MAX_HISTORY      = 10;
const MAX_RESULTS      = 3;
const AI_DELAY_SLOW    = 1200;                   // Simulasi AI: 1,2 detik
const AI_DELAY_FAST    = 0;                      // Mode instan
const MIN_SCORE        = 1;

/* ── State ──────────────────────────────────────────────────── */
let selectedChips   = new Set();
let dropdownOpen    = false;
let activeModal     = null;

/* ── Referensi DOM ──────────────────────────────────────────── */
const symptomInput      = document.getElementById('symptomInput');
const analyzeBtn        = document.getElementById('analyzeBtn');
const loadingSection    = document.getElementById('loadingSection');
const resultsSection    = document.getElementById('resultsSection');
const resultsContainer  = document.getElementById('resultsContainer');
const historySection    = document.getElementById('historySection');
const historyList       = document.getElementById('historyList');
const clearHistoryBtn   = document.getElementById('clearHistoryBtn');
const chipContainer     = document.getElementById('chipContainer');
const logoTrigger       = document.getElementById('logoTrigger');
const dropdownMenu      = document.getElementById('dropdownMenu');
const dropdownArrow     = document.getElementById('dropdownArrow');
const loadingDbCount    = document.getElementById('loadingDbCount');

/* ============================================================
   1. DARK MODE
   ============================================================ */

/**
 * Membaca preferensi tema dari LocalStorage dan menerapkannya.
 */
function initTheme() {
  const saved = localStorage.getItem(THEME_KEY) || 'light';
  applyTheme(saved, false);
}

/**
 * Menerapkan tema ke dokumen HTML.
 * @param {'dark'|'light'} theme
 * @param {boolean} save - Apakah disimpan ke LocalStorage
 */
function applyTheme(theme, save = true) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  if (save) localStorage.setItem(THEME_KEY, theme);

  // Sinkronisasi toggle di modal pengaturan (jika sudah dirender)
  syncDarkModeToggle();
}

/**
 * Toggle antara dark dan light mode.
 */
function toggleDarkMode() {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

/**
 * Sinkronisasi state visual toggle dark mode di modal.
 */
function syncDarkModeToggle() {
  const toggle = document.getElementById('darkModeToggle');
  if (!toggle) return;
  const isDark = document.documentElement.classList.contains('dark');
  toggle.classList.toggle('active', isDark);
}

/* ============================================================
   2. KECEPATAN AI
   ============================================================ */

/**
 * Mendapatkan delay AI berdasarkan preferensi tersimpan.
 * @returns {number} Delay dalam ms
 */
function getAiDelay() {
  return localStorage.getItem(SPEED_KEY) === 'instant' ? AI_DELAY_FAST : AI_DELAY_SLOW;
}

/**
 * Sinkronisasi state visual toggle kecepatan AI di modal.
 */
function syncSpeedToggle() {
  const toggle = document.getElementById('speedModeToggle');
  if (!toggle) return;
  const isInstant = localStorage.getItem(SPEED_KEY) === 'instant';
  toggle.classList.toggle('active', isInstant);
  const label = document.getElementById('speedModeLabel');
  if (label) label.textContent = isInstant ? 'Mode Instan' : 'Simulasi AI 1,2 detik';
}

/**
 * Toggle kecepatan AI.
 */
function toggleSpeedMode() {
  const current = localStorage.getItem(SPEED_KEY) || 'slow';
  localStorage.setItem(SPEED_KEY, current === 'instant' ? 'slow' : 'instant');
  syncSpeedToggle();
}

/* ============================================================
   3. DROPDOWN MENU
   ============================================================ */

function openDropdown() {
  if (!dropdownMenu) return;
  dropdownOpen = true;
  dropdownMenu.classList.remove('hidden');
  dropdownMenu.classList.add('animate-dropdown');
  if (dropdownArrow) dropdownArrow.style.transform = 'rotate(180deg)';
}

function closeDropdown() {
  if (!dropdownMenu) return;
  dropdownOpen = false;
  dropdownMenu.classList.add('hidden');
  dropdownMenu.classList.remove('animate-dropdown');
  if (dropdownArrow) dropdownArrow.style.transform = 'rotate(0deg)';
}

function toggleDropdown() {
  dropdownOpen ? closeDropdown() : openDropdown();
}

/* ============================================================
   4. MODAL SYSTEM
   ─────────────────────────────────────────────────────────────
   Mendukung 4 modal:
     - 'about'    : Tentang Pembuat
     - 'arch'     : Arsitektur & Database AI
     - 'sos'      : Nomor Darurat Medis
     - 'settings' : Pengaturan Sistem
   ============================================================ */

/**
 * Membangun HTML konten sesuai tipe modal.
 * @param {'about'|'arch'|'sos'|'settings'} type
 * @returns {string} HTML string
 */
function buildModalContent(type) {
  switch (type) {
    case 'about': return buildAboutModal();
    case 'arch':  return buildArchModal();
    case 'sos':   return buildSosModal();
    case 'settings': return buildSettingsModal();
    default: return '';
  }
}

function buildAboutModal() {
  const isDark = document.documentElement.classList.contains('dark');
  return `
    <div class="p-6">
      <!-- Header Modal -->
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-800 ${isDark ? 'text-slate-100' : 'text-slate-800'}">Tentang Pembuat</h2>
        <button onclick="closeModal()" class="w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'} transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Avatar Default -->
      <div class="flex flex-col items-center mb-5">
        <div class="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-emerald-50 dark:bg-slate-700 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 shadow-sm mb-4">
          <!-- Ikon siluet pengguna default (kepala + bahu) -->
          <svg class="w-11 h-11" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Kepala -->
            <circle cx="22" cy="16" r="8" fill="currentColor" opacity="0.85"/>
            <!-- Bahu / Badan -->
            <path d="M6 38c0-8.837 7.163-14 16-14s16 5.163 16 14" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" fill="none" opacity="0.85"/>
          </svg>
        </div>

        <!-- Info Pembuat -->
        <h3 class="text-xl font-800 ${isDark ? 'text-slate-100' : 'text-slate-800'} mb-1">Raihan Noviansyah</h3>
        <p class="text-sm font-600 text-brand-600 mb-1">Frontend &amp; AI System Developer</p>
        <span class="inline-flex items-center gap-1.5 text-xs font-500 ${isDark ? 'bg-slate-700 text-slate-300' : 'bg-slate-100 text-slate-600'} px-3 py-1 rounded-full">
          🎓 Capstone Project — Hacktiv8 × IBM SkillsBuild (2026)
        </span>
      </div>

      <!-- Divider -->
      <div class="h-px ${isDark ? 'bg-slate-700' : 'bg-slate-100'} mb-5"></div>

      <!-- Deskripsi Visi -->
      <div class="${isDark ? 'bg-slate-700/50' : 'bg-brand-50'} rounded-xl p-4 mb-4">
        <p class="text-sm font-600 ${isDark ? 'text-brand-300' : 'text-brand-700'} mb-2 flex items-center gap-1.5">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
          </svg>
          Visi Pengembangan SYNAPSE AI
        </p>
        <p class="text-xs ${isDark ? 'text-slate-300' : 'text-slate-600'} leading-relaxed">
          SYNAPSE AI dikembangkan dengan visi menjadi jembatan antara masyarakat Indonesia dan sistem kesehatan formal. Dengan memanfaatkan pendekatan berbasis kata kunci dan database gejala terstruktur, aplikasi ini bertujuan untuk meningkatkan literasi kesehatan, mendorong keputusan triage yang tepat, dan membantu masyarakat mengenali kapan harus mencari pertolongan medis segera.
        </p>
      </div>

      <!-- Tech Stack -->
      <div class="${isDark ? 'bg-slate-700/30' : 'bg-slate-50'} rounded-xl p-4">
        <p class="text-xs font-600 ${isDark ? 'text-slate-400' : 'text-slate-500'} mb-2">🛠️ Teknologi yang Digunakan</p>
        <div class="flex flex-wrap gap-2">
          ${['HTML5', 'Tailwind CSS', 'Vanilla JS', 'LocalStorage', 'SVG'].map(t =>
            `<span class="text-xs font-500 px-2 py-1 rounded-lg ${isDark ? 'bg-slate-600 text-slate-200' : 'bg-white border border-slate-200 text-slate-600'}">${t}</span>`
          ).join('')}
        </div>
      </div>
    </div>`;
}

function buildArchModal() {
  const isDark = document.documentElement.classList.contains('dark');
  const totalConditions = typeof symptomDatabase !== 'undefined' ? symptomDatabase.length : 0;

  return `
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-800 ${isDark ? 'text-slate-100' : 'text-slate-800'}">Arsitektur & Database AI</h2>
        <button onclick="closeModal()" class="w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'} transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Stat database -->
      <div class="grid grid-cols-2 gap-3 mb-5">
        <div class="${isDark ? 'bg-brand-900/40 border-brand-700' : 'bg-brand-50 border-brand-100'} border rounded-xl p-4 text-center">
          <div class="text-3xl font-800 text-brand-600 mb-1">${totalConditions}</div>
          <div class="text-xs ${isDark ? 'text-brand-300' : 'text-brand-700'} font-500">Kondisi Terindeks</div>
        </div>
        <div class="${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50 border-slate-200'} border rounded-xl p-4 text-center">
          <div class="text-3xl font-800 ${isDark ? 'text-slate-200' : 'text-slate-700'} mb-1">3</div>
          <div class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} font-500">Level Triage</div>
        </div>
      </div>

      <!-- Algoritma -->
      <div class="${isDark ? 'bg-slate-700/50' : 'bg-slate-50'} rounded-xl p-4 mb-4">
        <p class="text-sm font-700 ${isDark ? 'text-slate-200' : 'text-slate-700'} mb-3">⚙️ Cara Kerja Keyword Relevance Scoring</p>
        <ol class="space-y-2.5">
          ${[
            ['1', 'Tokenisasi', 'Input teks dibersihkan dan dipecah menjadi token kata individual.'],
            ['2', 'Frase Match (Bobot ×2)', 'Frase multi-kata yang cocok sepenuhnya mendapat skor lebih tinggi.'],
            ['3', 'Partial Match', 'Token individual dicocokkan dengan semua kata kunci kondisi medis.'],
            ['4', 'Score Ranking', 'Kondisi diurutkan berdasarkan skor, maks 3 hasil ditampilkan.'],
          ].map(([n, t, d]) => `
            <li class="flex items-start gap-2.5">
              <span class="w-5 h-5 rounded-full bg-brand-500 text-white text-xs font-700 flex items-center justify-center flex-shrink-0 mt-0.5">${n}</span>
              <div>
                <span class="text-xs font-700 ${isDark ? 'text-brand-300' : 'text-brand-700'}">${t}</span>
                <span class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}"> — ${d}</span>
              </div>
            </li>`
          ).join('')}
        </ol>
      </div>

      <!-- Triage levels -->
      <div class="${isDark ? 'bg-slate-700/30' : 'bg-white border border-slate-100'} rounded-xl p-4">
        <p class="text-sm font-700 ${isDark ? 'text-slate-200' : 'text-slate-700'} mb-3">🏥 Klasifikasi Level Triage</p>
        <div class="space-y-2">
          <div class="flex items-center gap-3 p-2 rounded-lg ${isDark ? 'bg-green-900/20' : 'bg-green-50'}">
            <div class="w-3 h-3 rounded-full bg-brand-500 flex-shrink-0"></div>
            <div>
              <span class="text-xs font-700 text-brand-700">Mandiri di Rumah</span>
              <span class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}"> — Dapat ditangani sendiri dengan panduan</span>
            </div>
          </div>
          <div class="flex items-center gap-3 p-2 rounded-lg ${isDark ? 'bg-amber-900/20' : 'bg-amber-50'}">
            <div class="w-3 h-3 rounded-full bg-amber-400 flex-shrink-0"></div>
            <div>
              <span class="text-xs font-700 text-amber-700">Konsultasi Dokter</span>
              <span class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}"> — Perlu evaluasi medis profesional</span>
            </div>
          </div>
          <div class="flex items-center gap-3 p-2 rounded-lg ${isDark ? 'bg-rose-900/20' : 'bg-rose-50'}">
            <div class="w-3 h-3 rounded-full bg-rose-500 flex-shrink-0"></div>
            <div>
              <span class="text-xs font-700 text-rose-700">Darurat / Segera ke IGD</span>
              <span class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'}"> — Memerlukan pertolongan segera</span>
            </div>
          </div>
        </div>
      </div>
    </div>`;
}

function buildSosModal() {
  const isDark = document.documentElement.classList.contains('dark');
  const contacts = [
    { number: '119', label: 'Ambulans Darurat', sub: 'Kemenkes RI — 24 jam', color: 'rose', icon: '🚑' },
    { number: '112', label: 'Layanan Darurat Nasional', sub: 'Polisi, Pemadam, Ambulans', color: 'brand', icon: '🆘' },
    { number: '1500-567', label: 'Halo Kemenkes', sub: 'Konsultasi Kesehatan 24 jam', color: 'amber', icon: '📞' },
  ];

  const colorMap = {
    rose:  { bg: isDark ? 'bg-rose-900/30 border-rose-800' : 'bg-rose-50 border-rose-100', num: 'text-rose-600', label: isDark ? 'text-rose-300' : 'text-rose-700', sub: isDark ? 'text-rose-400/70' : 'text-rose-500' },
    brand: { bg: isDark ? 'bg-brand-900/30 border-brand-800' : 'bg-brand-50 border-brand-100', num: 'text-brand-600', label: isDark ? 'text-brand-300' : 'text-brand-700', sub: isDark ? 'text-brand-400/70' : 'text-brand-500' },
    amber: { bg: isDark ? 'bg-amber-900/30 border-amber-800' : 'bg-amber-50 border-amber-100', num: 'text-amber-600', label: isDark ? 'text-amber-300' : 'text-amber-700', sub: isDark ? 'text-amber-400/70' : 'text-amber-500' },
  };

  return `
    <div class="p-6">
      <div class="flex items-center justify-between mb-2">
        <h2 class="text-lg font-800 ${isDark ? 'text-slate-100' : 'text-slate-800'}">Nomor Darurat Medis</h2>
        <button onclick="closeModal()" class="w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'} transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
      <p class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} mb-6 leading-relaxed">
        Hubungi nomor darurat di bawah ini segera jika mengalami kondisi medis yang mengancam jiwa.
      </p>

      <div class="space-y-3 mb-5">
        ${contacts.map(c => {
          const cm = colorMap[c.color];
          return `
            <div class="sos-card flex items-center gap-4 p-4 rounded-xl border ${cm.bg}">
              <div class="text-2xl flex-shrink-0">${c.icon}</div>
              <div class="flex-1 min-w-0">
                <div class="text-xl font-800 ${cm.num} leading-none mb-1">${c.number}</div>
                <div class="text-sm font-700 ${cm.label}">${c.label}</div>
                <div class="text-xs ${cm.sub}">${c.sub}</div>
              </div>
              <a href="tel:${c.number.replace('-','')}" class="flex-shrink-0 w-9 h-9 rounded-full bg-white dark:bg-slate-700 shadow flex items-center justify-center text-brand-600 hover:bg-brand-50 transition-colors">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </a>
            </div>`;
        }).join('')}
      </div>

      <div class="${isDark ? 'bg-rose-900/20 border-rose-800' : 'bg-rose-50 border-rose-100'} border rounded-xl p-4">
        <p class="text-xs font-700 ${isDark ? 'text-rose-300' : 'text-rose-700'} mb-1">🚨 Kapan Harus Menghubungi 119?</p>
        <ul class="text-xs ${isDark ? 'text-rose-400/80' : 'text-rose-600'} space-y-1">
          <li>• Nyeri dada / sesak napas berat</li>
          <li>• Stroke: wajah miring, bicara pelo, tangan lemas</li>
          <li>• Pingsan atau tidak sadarkan diri</li>
          <li>• Kecelakaan atau cedera parah</li>
        </ul>
      </div>
    </div>`;
}

function buildSettingsModal() {
  const isDark = document.documentElement.classList.contains('dark');
  const isInstant = localStorage.getItem(SPEED_KEY) === 'instant';

  return `
    <div class="p-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-800 ${isDark ? 'text-slate-100' : 'text-slate-800'}">Pengaturan Sistem</h2>
        <button onclick="closeModal()" class="w-8 h-8 flex items-center justify-center rounded-full ${isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-slate-100 text-slate-500'} transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <div class="space-y-4">
        <!-- Toggle Dark Mode -->
        <div class="${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50 border-slate-200'} border rounded-xl p-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-700 ${isDark ? 'text-slate-200' : 'text-slate-700'}">🌙 Mode Gelap (Dark Mode)</p>
            <p class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-0.5">Tampilan nyaman di mata di malam hari</p>
          </div>
          <div id="darkModeToggle" onclick="toggleDarkMode()" class="toggle-track ${isDark ? 'active' : ''}">
            <div class="toggle-thumb"></div>
          </div>
        </div>

        <!-- Toggle Kecepatan AI -->
        <div class="${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50 border-slate-200'} border rounded-xl p-4 flex items-center justify-between gap-3">
          <div>
            <p class="text-sm font-700 ${isDark ? 'text-slate-200' : 'text-slate-700'}">⚡ Kecepatan Analisis AI</p>
            <p id="speedModeLabel" class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-0.5">${isInstant ? 'Mode Instan' : 'Simulasi AI 1,2 detik'}</p>
          </div>
          <div id="speedModeToggle" onclick="toggleSpeedMode()" class="toggle-track ${isInstant ? 'active' : ''}">
            <div class="toggle-thumb"></div>
          </div>
        </div>

        <!-- Hapus Riwayat -->
        <div class="${isDark ? 'bg-slate-700/50 border-slate-600' : 'bg-slate-50 border-slate-200'} border rounded-xl p-4">
          <div class="flex items-start justify-between gap-3 mb-3">
            <div>
              <p class="text-sm font-700 ${isDark ? 'text-slate-200' : 'text-slate-700'}">🗑️ Riwayat Pemeriksaan</p>
              <p class="text-xs ${isDark ? 'text-slate-400' : 'text-slate-500'} mt-0.5">Hapus semua data riwayat yang tersimpan</p>
            </div>
          </div>
          <button onclick="clearHistoryFromSettings()" class="w-full text-xs font-600 text-rose-600 hover:text-rose-700 border border-rose-200 hover:border-rose-300 dark:border-rose-800 dark:hover:border-rose-700 py-2 rounded-xl transition-colors hover:bg-rose-50 dark:hover:bg-rose-900/20">
            Hapus Semua Riwayat
          </button>
        </div>

        <!-- Info versi -->
        <div class="text-center pt-2">
          <p class="text-xs ${isDark ? 'text-slate-500' : 'text-slate-400'}">SYNAPSE AI v2.0 — Capstone Project</p>
          <p class="text-xs ${isDark ? 'text-slate-600' : 'text-slate-300'}">Database: ${typeof symptomDatabase !== 'undefined' ? symptomDatabase.length : 0} kondisi medis terindeks</p>
        </div>
      </div>
    </div>`;
}

/**
 * Membuka modal sesuai tipe.
 * @param {'about'|'arch'|'sos'|'settings'} type
 */
function openModal(type) {
  closeDropdown();

  // Bersihkan modal yang sudah ada
  const existing = document.getElementById('modalOverlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'modalOverlay';
  overlay.className = 'modal-overlay animate-modal-backdrop';
  overlay.innerHTML = `
    <div class="modal-panel animate-modal-panel" role="dialog" aria-modal="true">
      ${buildModalContent(type)}
    </div>`;

  // Klik backdrop menutup modal
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  document.body.appendChild(overlay);
  activeModal = type;

  // Focus trap sederhana — cegah scroll di body
  document.body.style.overflow = 'hidden';
}

/**
 * Menutup modal yang sedang aktif.
 */
function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (overlay) {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.15s ease';
    setTimeout(() => overlay.remove(), 150);
  }
  document.body.style.overflow = '';
  activeModal = null;
}

/* ============================================================
   5. KEYWORD MATCHING & RELEVANCE SCORING
   ============================================================ */

/**
 * Tokenisasi teks input.
 * @param {string} text
 * @returns {string[]}
 */
function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(token => token.length >= 3);  // kata < 3 karakter (mis. "tes") diabaikan
}

/**
 * Menghitung skor relevansi satu kondisi terhadap token input.
 * @param {object} condition
 * @param {string[]} inputTokens
 * @returns {number}
 */
function scoreCondition(condition, inputTokens) {
  let score = 0;
  // Susun kembali sebagai string dengan spasi di tepi agar word-boundary regex bekerja
  const fullInputLower = ' ' + inputTokens.join(' ') + ' ';

  for (const keyword of condition.keywords) {
    const keywordLower = keyword.toLowerCase();
    const keywordTokens = keywordLower.split(/\s+/);
    const keywordWeight = keywordTokens.length;

    // Cocok frase penuh (word-boundary) → bonus x2
    // Escape karakter regex khusus lalu cek batas kata
    const escapedPhrase = keywordLower.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp('(?<![a-z0-9])' + escapedPhrase + '(?![a-z0-9])').test(fullInputLower)) {
      score += keywordWeight * 2;
      continue;
    }

    // Per-token word-boundary matching (hanya kata utuh, bukan substring acak)
    for (const kToken of keywordTokens) {
      if (kToken.length < 3) continue;
      const escapedToken = kToken.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const tokenRegex = new RegExp('(?<![a-z0-9])' + escapedToken + '(?![a-z0-9])');
      if (tokenRegex.test(fullInputLower)) {
        score += 1;
      }
    }
  }

  return score;
}

/**
 * Mencari kondisi yang paling relevan dari input pengguna.
 * @param {string} userInput
 * @returns {Array<{condition: object, score: number}>}
 */
function findMatchingConditions(userInput) {
  const tokens = tokenize(userInput);
  if (tokens.length === 0) return [];

  const scored = symptomDatabase.map(condition => ({
    condition,
    score: scoreCondition(condition, tokens)
  }));

  return scored
    .filter(item => item.score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_RESULTS);
}

/* ============================================================
   6. RENDER HASIL ANALISIS
   ============================================================ */

function getTriageStyle(triageLevel) {
  const map = {
    "Mandiri di Rumah": {
      badgeClass: "badge-mandiri",
      cardClass: "triage-mandiri",
      icon: `<svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
      dotColor: "#10B981",
      label: "Mandiri di Rumah"
    },
    "Konsultasi Dokter": {
      badgeClass: "badge-konsultasi",
      cardClass: "triage-konsultasi",
      icon: `<svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>`,
      dotColor: "#F59E0B",
      label: "Konsultasi Dokter"
    },
    "Darurat / Segera ke IGD": {
      badgeClass: "badge-darurat",
      cardClass: "triage-darurat",
      icon: `<svg class="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/></svg>`,
      dotColor: "#F43F5E",
      label: "Darurat / Segera ke IGD"
    }
  };
  return map[triageLevel] || map["Konsultasi Dokter"];
}

function buildResultCard(condition, score, index) {
  const style = getTriageStyle(condition.triageLevel);
  const maxPossibleScore = condition.keywords.length * 2;
  const pct = Math.min(100, Math.round((score / maxPossibleScore) * 100));
  const delayClass = index === 1 ? 'animation-delay-100' : index === 2 ? 'animation-delay-200' : '';

  const firstAidItems = condition.firstAid
    .map(step => `<li class="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
                    <span class="text-brand-500 mt-0.5 flex-shrink-0">✓</span>
                    <span>${escapeHtml(step)}</span>
                  </li>`)
    .join('');

  const redFlagItems = condition.redFlags
    .map(flag => `<li class="flex items-start gap-2 text-sm text-rose-700 dark:text-rose-300">
                    <span class="mt-0.5 flex-shrink-0">⚠</span>
                    <span>${escapeHtml(flag)}</span>
                  </li>`)
    .join('');

  return `
    <div class="result-card animate-fade-in-up ${delayClass} bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 overflow-hidden ${style.cardClass}">
      <div class="px-5 pt-5 pb-4">
        <div class="flex items-start justify-between gap-3 mb-3">
          <div class="flex-1">
            <h3 class="font-700 text-lg text-slate-800 dark:text-slate-100 leading-tight">${escapeHtml(condition.conditionName)}</h3>
          </div>
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-600 flex-shrink-0 ${style.badgeClass}">
            ${style.icon}
            ${escapeHtml(style.label)}
          </span>
        </div>
        <div class="mb-3">
          <div class="flex items-center justify-between mb-1">
            <span class="text-xs text-slate-400 font-500">Relevansi gejala</span>
            <span class="text-xs font-600 text-brand-600">${pct}%</span>
          </div>
          <div class="w-full h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
            <div class="score-bar-fill" style="width: ${pct}%"></div>
          </div>
        </div>
        <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">${escapeHtml(condition.description)}</p>
      </div>
      <div class="px-5 pb-4">
        <div class="bg-brand-50 dark:bg-brand-900/30 rounded-xl p-4">
          <h4 class="text-sm font-700 text-brand-800 dark:text-brand-300 mb-2.5 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
            Pertolongan Pertama
          </h4>
          <ul class="space-y-1.5">${firstAidItems}</ul>
        </div>
      </div>
      <div class="px-5 pb-5">
        <div class="bg-rose-50 dark:bg-rose-900/20 rounded-xl p-4">
          <h4 class="text-sm font-700 text-rose-700 dark:text-rose-300 mb-2.5 flex items-center gap-1.5">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/></svg>
            Tanda Bahaya — Segera Minta Bantuan
          </h4>
          <ul class="space-y-1.5">${redFlagItems}</ul>
        </div>
      </div>
    </div>`;
}

function buildFallbackCard() {
  return `
    <div class="animate-fade-in bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 p-6 text-center">
      <div class="w-14 h-14 bg-amber-50 dark:bg-amber-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-7 h-7 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      </div>
      <h3 class="font-700 text-slate-700 dark:text-slate-200 mb-2">Gejala Tidak Dikenali</h3>
      <p class="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4">
        SYNAPSE AI tidak dapat mengenali gejala dari input Anda. Pastikan Anda mengetikkan nama gejala yang nyata dalam bahasa Indonesia (contoh: "demam", "batuk", "sakit kepala").
      </p>
      <div class="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-xl p-4 text-left">
        <p class="text-xs font-600 text-amber-700 dark:text-amber-400 mb-1.5">💡 Tips Memasukkan Gejala:</p>
        <ul class="text-xs text-amber-600 dark:text-amber-500 space-y-1">
          <li>• Gunakan kata sehari-hari: "pusing", "mual", "batuk"</li>
          <li>• Kombinasikan beberapa gejala: "demam dan sakit kepala"</li>
          <li>• Klik chip gejala cepat di atas untuk memulai</li>
        </ul>
      </div>
      <p class="text-xs text-slate-400 dark:text-slate-500 mt-4">
        Jika gejala Anda terasa berat atau mengkhawatirkan, segera hubungi dokter atau datang ke fasilitas kesehatan terdekat.
      </p>
    </div>`;
}

/* ============================================================
   7. SIMULASI AI & ALUR ANALISIS UTAMA
   ============================================================ */

async function runAnalysis() {
  const textInput    = symptomInput.value.trim();
  const chipInput    = Array.from(selectedChips).join(' ');
  const combinedInput = `${textInput} ${chipInput}`.trim();

  if (!combinedInput) {
    showInputError('Mohon masukkan gejala Anda terlebih dahulu.');
    return;
  }

  // Tolak input yang tidak menghasilkan token valid (< 3 karakter semua)
  // Ini menangkap teks acak/gibberish maupun input sangat pendek seperti "tes"
  const preTokens = tokenize(combinedInput);
  if (preTokens.length === 0) {
    showInputError('Input terlalu pendek atau tidak dikenali. Ketik nama gejala (mis: "demam", "batuk").');
    return;
  }

  // Nonaktifkan tombol
  analyzeBtn.disabled = true;
  analyzeBtn.innerHTML = `
    <span class="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
    Menganalisis...`;

  resultsSection.classList.add('hidden');
  loadingSection.classList.remove('hidden');
  loadingSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  // Simulasi AI — delay sesuai preferensi
  await delay(getAiDelay());

  const matches = findMatchingConditions(combinedInput);

  loadingSection.classList.add('hidden');

  if (matches.length === 0) {
    resultsContainer.innerHTML = buildFallbackCard();
  } else {
    resultsContainer.innerHTML = matches
      .map((m, i) => buildResultCard(m.condition, m.score, i))
      .join('');

    // Trigger score bar animation
    requestAnimationFrame(() => {
      document.querySelectorAll('.score-bar-fill').forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        requestAnimationFrame(() => { bar.style.width = targetWidth; });
      });
    });
  }

  resultsSection.classList.remove('hidden');
  resultsSection.classList.add('section-reveal');
  resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

  if (matches.length > 0) {
    saveToHistory(combinedInput, matches);
  }

  analyzeBtn.disabled = false;
  analyzeBtn.innerHTML = `
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
    </svg>
    Analisis Gejala`;
}

/* ============================================================
   8. MANAJEMEN RIWAYAT — LOCALSTORAGE
   ============================================================ */

function loadHistory() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveHistory(history) {
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
  } catch { /* silent fail */ }
}

function saveToHistory(query, results) {
  const history = loadHistory();
  const topCondition = results[0].condition;

  const entry = {
    id:        Date.now(),
    query,
    timestamp: new Date().toISOString(),
    topResult: topCondition.conditionName,
    triage:    topCondition.triageLevel,
    count:     results.length
  };

  history.unshift(entry);
  if (history.length > MAX_HISTORY) history.pop();

  saveHistory(history);
  renderHistory();
}

function formatTimestamp(isoString) {
  const date = new Date(isoString);
  const diff  = new Date() - date;
  if (diff < 60000)   return 'Baru saja';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} menit lalu`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} jam lalu`;
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' });
}

function renderHistory() {
  const history = loadHistory();
  if (history.length === 0) {
    historySection.classList.add('hidden');
    return;
  }
  historySection.classList.remove('hidden');
  historyList.innerHTML = history.map(entry => {
    const style = getTriageStyle(entry.triage);
    return `
      <div class="history-item flex items-center gap-3 p-3 rounded-xl border border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800">
        <div class="flex-1 min-w-0">
          <p class="text-sm font-600 text-slate-700 dark:text-slate-200 truncate">${escapeHtml(entry.topResult)}</p>
          <p class="text-xs text-slate-400 truncate mt-0.5">"${escapeHtml(entry.query.substring(0, 50))}${entry.query.length > 50 ? '…' : ''}"</p>
        </div>
        <div class="flex flex-col items-end gap-1 flex-shrink-0">
          <span class="inline-flex px-2 py-0.5 rounded-full text-xs font-600 ${style.badgeClass}">${escapeHtml(entry.triage)}</span>
          <span class="text-xs text-slate-400">${formatTimestamp(entry.timestamp)}</span>
        </div>
      </div>`;
  }).join('');
}

/* ── Hapus riwayat dari modal settings ── */
function clearHistoryFromSettings() {
  if (confirm('Hapus semua riwayat pemeriksaan?')) {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
    // Re-render modal settings agar tampilan fresh
    openModal('settings');
  }
}

/* ============================================================
   9. QUICK-SELECT CHIP INTERACTIVITY
   ============================================================ */

function initChips() {
  if (!chipContainer) return;
  chipContainer.querySelectorAll('.symptom-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const val = chip.dataset.symptom;
      if (selectedChips.has(val)) {
        selectedChips.delete(val);
        chip.classList.remove('selected');
      } else {
        selectedChips.add(val);
        chip.classList.add('selected');
      }
    });
  });
}

/* ============================================================
   10. UTILITAS
   ============================================================ */

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function showInputError(message) {
  const existing = document.getElementById('inputError');
  if (existing) existing.remove();
  const err = document.createElement('p');
  err.id = 'inputError';
  err.className = 'text-sm text-rose-500 mt-1.5 animate-fade-in';
  err.textContent = message;
  symptomInput.parentElement.appendChild(err);
  symptomInput.focus();
  setTimeout(() => err.remove(), 3000);
}

/* ============================================================
   11. EVENT LISTENERS & INISIALISASI
   ============================================================ */

// Analisis
analyzeBtn.addEventListener('click', runAnalysis);

// Enter key di textarea
symptomInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    runAnalysis();
  }
});

// Hapus riwayat (tombol di historySection)
clearHistoryBtn.addEventListener('click', () => {
  if (confirm('Hapus semua riwayat pemeriksaan?')) {
    localStorage.removeItem(HISTORY_KEY);
    renderHistory();
  }
});

// Logo dropdown toggle
if (logoTrigger) {
  logoTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleDropdown();
  });
}

// Tutup dropdown saat klik di luar
document.addEventListener('click', (e) => {
  if (dropdownMenu && !dropdownMenu.contains(e.target) && e.target !== logoTrigger) {
    closeDropdown();
  }
});

// Tutup modal/dropdown dengan Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (activeModal) closeModal();
    else closeDropdown();
  }
});

// Inisialisasi saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initChips();
  renderHistory();

  // Update teks jumlah database di loading section
  if (loadingDbCount) {
    loadingDbCount.textContent = typeof symptomDatabase !== 'undefined'
      ? symptomDatabase.length
      : '40';
  }
});
