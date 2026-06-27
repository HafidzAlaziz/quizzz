// Stats Champions Arena - Core Logic & Animations

// 1. Initial Question Bank (Preloaded data)
const PRELOADED_QUESTIONS = [
  {
    id: 1,
    category: "Pemusatan Data",
    points: 200,
    question: `<p>Tabel berikut menunjukkan nilai ulangan matematika 50 siswa:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Interval Nilai</th>
        <th>Frekuensi (f)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>40 - 49</td><td>5</td></tr>
      <tr><td>50 - 59</td><td>9</td></tr>
      <tr><td>60 - 69</td><td>14</td></tr>
      <tr><td>70 - 79</td><td>13</td></tr>
      <tr><td>80 - 89</td><td>9</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Tentukan nilai: (1) Mean, (2) Median, dan (3) Modus dari data kelompok tersebut!</p>`,
    questionPreview: "Tentukan Mean, Median, dan Modus dari tabel data kelompok nilai ulangan 50 siswa.",
    inputs: [
      { label: "1) Mean (Rata-rata)", type: "text", correctAnswer: "66.9" },
      { label: "2) Median", type: "text", correctAnswer: "67.36" },
      { label: "3) Modus", type: "text", correctAnswer: "67.83" }
    ],
    solved: false
  },
  {
    id: 2,
    category: "Indeks Harga",
    points: 300,
    question: `<p>Diberikan data harga dan kuantitas dari 3 jenis barang kebutuhan pokok:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Barang</th>
        <th>Price 2024 (P₀)</th>
        <th>Price 2025 (Pₙ)</th>
        <th>Qty 2024 (Q₀)</th>
        <th>Qty 2025 (Qₙ)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Beras (A)</td><td>2000</td><td>2500</td><td>50</td><td>60</td></tr>
      <tr><td>Minyak (B)</td><td>3000</td><td>3600</td><td>100</td><td>110</td></tr>
      <tr><td>Gula (C)</td><td>5000</td><td>5500</td><td>40</td><td>35</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Hitunglah nilai: (1) Indeks Laspeyres dan (2) Indeks Paasche dari data di atas!</p>`,
    questionPreview: "Hitung Indeks Laspeyres dan Indeks Paasche dari data harga 3 jenis barang.",
    inputs: [
      { label: "1) Indeks Laspeyres (IL)", type: "text", correctAnswer: "117.5" },
      { label: "2) Indeks Paasche (IP)", type: "text", correctAnswer: "118.16" }
    ],
    solved: false
  },
  {
    id: 3,
    category: "Penyebaran Data",
    points: 200,
    question: `<p>Diberikan sampel data berat badan (kg) dari 10 ekor hewan piaraan:</p>
<div class="data-box">45, 48, 50, 50, 52, 55, 55, 58, 60, 67</div>
<p style="margin-top: 15px;">Tentukan nilai:</p>
<ol style="margin-left: 20px; margin-top: 5px;">
  <li>Range (jangkauan) data</li>
  <li>Standar deviasi sampel</li>
</ol>`,
    questionPreview: "Hitung Range dan Standar deviasi sampel berat badan 10 hewan piaraan.",
    inputs: [
      { label: "a) Range (Jangkauan)", type: "text", correctAnswer: "22" },
      { label: "b) Standar Deviasi Sampel", type: "text", correctAnswer: "6.46" }
    ],
    solved: false
  },
  {
    id: 4,
    category: "Pemusatan Data",
    points: 200,
    question: `<p>Diberikan data kelompok distribusi frekuensi waktu pengerjaan tugas (menit) dari 30 siswa:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Durasi (Menit)</th>
        <th>Frekuensi (f)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>10 - 19</td><td>3</td></tr>
      <tr><td>20 - 29</td><td>7</td></tr>
      <tr><td>30 - 39</td><td>10</td></tr>
      <tr><td>40 - 49</td><td>6</td></tr>
      <tr><td>50 - 59</td><td>4</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Tentukan nilai: (1) Mean, (2) Median, dan (3) Modus data tersebut!</p>`,
    questionPreview: "Hitung Mean, Median, dan Modus dari waktu pengerjaan tugas 30 siswa.",
    inputs: [
      { label: "1) Mean (Rata-rata)", type: "text", correctAnswer: "34.83" },
      { label: "2) Median", type: "text", correctAnswer: "34.5" },
      { label: "3) Modus", type: "text", correctAnswer: "33.79" }
    ],
    solved: false
  },
  {
    id: 5,
    category: "Penyebaran Data",
    points: 200,
    question: `<p>Hasil pengamatan suhu ruangan (dalam °C) pada 10 titik berbeda adalah sebagai berikut:</p>
<div class="data-box">22, 23, 24, 24, 25, 26, 26, 27, 28, 30</div>
<p style="margin-top: 15px;">Hitunglah nilai:</p>
<ol style="margin-left: 20px; margin-top: 5px;">
  <li>Range (jangkauan) suhu</li>
  <li>Standar deviasi sampel suhu</li>
</ol>`,
    questionPreview: "Tentukan Range dan Standar deviasi sampel dari 10 titik suhu ruangan.",
    inputs: [
      { label: "a) Range (Jangkauan)", type: "text", correctAnswer: "8" },
      { label: "b) Standar Deviasi Sampel", type: "text", correctAnswer: "2.42" }
    ],
    solved: false
  },
  {
    id: 6,
    category: "Indeks Harga",
    points: 300,
    question: `<p>Tabel berikut menunjukkan harga dan kuantitas konsumsi sayuran suatu keluarga pada tahun dasar dan tahun berjalan:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Sayuran</th>
        <th>Harga Dasar (P₀)</th>
        <th>Harga Berjalan (Pₙ)</th>
        <th>Qty Dasar (Q₀)</th>
        <th>Qty Berjalan (Qₙ)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Kentang</td><td>8000</td><td>10000</td><td>20</td><td>25</td></tr>
      <tr><td>Wortel</td><td>6000</td><td>7500</td><td>30</td><td>28</td></tr>
      <tr><td>Tomat</td><td>12000</td><td>14000</td><td>15</td><td>18</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Tentukan nilai: (1) Indeks Laspeyres dan (2) Indeks Paasche dari data di atas!</p>`,
    questionPreview: "Tentukan nilai Indeks Laspeyres dan Indeks Paasche dari konsumsi sayuran.",
    inputs: [
      { label: "1) Indeks Laspeyres (IL)", type: "text", correctAnswer: "122.12" },
      { label: "2) Indeks Paasche (IP)", type: "text", correctAnswer: "121.92" }
    ],
    solved: false
  },
  {
    id: 7,
    category: "Penyebaran Data",
    points: 200,
    question: `<p>Data berikut adalah waktu tunggu layanan pelanggan (dalam menit) di loket pos dari 10 customer:</p>
<div class="data-box">8, 10, 12, 14, 15, 16, 18, 20, 22, 25</div>
<p style="margin-top: 15px;">Tentukan nilai:</p>
<ol style="margin-left: 20px; margin-top: 5px;">
  <li>Range (jangkauan) waktu</li>
  <li>Standar deviasi sampel waktu</li>
</ol>`,
    questionPreview: "Tentukan Range dan Standar deviasi sampel waktu tunggu 10 customer.",
    inputs: [
      { label: "a) Range (Jangkauan)", type: "text", correctAnswer: "17" },
      { label: "b) Standar Deviasi Sampel", type: "text", correctAnswer: "5.35" }
    ],
    solved: false
  },
  {
    id: 8,
    category: "Pemusatan Data",
    points: 200,
    question: `<p>Tabel distribusi frekuensi tinggi tanaman hias (cm) setelah 1 bulan:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Tinggi (cm)</th>
        <th>Frekuensi (f)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>50 - 54</td><td>4</td></tr>
      <tr><td>55 - 59</td><td>8</td></tr>
      <tr><td>60 - 64</td><td>12</td></tr>
      <tr><td>65 - 69</td><td>10</td></tr>
      <tr><td>70 - 74</td><td>6</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Tentukan nilai: (1) Mean, (2) Median, dan (3) Modus tinggi tanaman hias!</p>`,
    questionPreview: "Tentukan nilai Mean, Median, dan Modus dari tabel tinggi tanaman hias.",
    inputs: [
      { label: "1) Mean (Rata-rata)", type: "text", correctAnswer: "62.75" },
      { label: "2) Median", type: "text", correctAnswer: "62.83" },
      { label: "3) Modus", type: "text", correctAnswer: "62.83" }
    ],
    solved: false
  },
  {
    id: 9,
    category: "Indeks Harga",
    points: 300,
    question: `<p>Tabel berikut menyajikan harga dan kuantitas dari alat tulis kantor (ATK) pada 2 tahun yang berbeda:</p>
<div class="table-responsive">
  <table class="quiz-table">
    <thead>
      <tr>
        <th>Barang</th>
        <th>Harga 2024 (P₀)</th>
        <th>Harga 2025 (Pₙ)</th>
        <th>Qty 2024 (Q₀)</th>
        <th>Qty 2025 (Qₙ)</th>
      </tr>
    </thead>
    <tbody>
      <tr><td>Buku</td><td>15000</td><td>18000</td><td>10</td><td>12</td></tr>
      <tr><td>Pensil</td><td>4000</td><td>5000</td><td>25</td><td>20</td></tr>
      <tr><td>Penggaris</td><td>8000</td><td>10000</td><td>15</td><td>15</td></tr>
    </tbody>
  </table>
</div>
<p style="margin-top: 15px;">Tentukan: (1) Indeks Laspeyres dan (2) Indeks Paasche dari data ATK tersebut!</p>`,
    questionPreview: "Tentukan Indeks Laspeyres dan Indeks Paasche dari data ATK sekolah.",
    inputs: [
      { label: "1) Indeks Laspeyres (IL)", type: "text", correctAnswer: "122.97" },
      { label: "2) Indeks Paasche (IP)", type: "text", correctAnswer: "122.63" }
    ],
    solved: false
  }
];

// App State
let questions = [];
let activeQuestionId = null;

// User Profile state
let currentUser = null; // { username, role, score, solvedQuestions }
let db = null; // Firebase database reference
let firebaseConnected = false;

// Audio Context Lazily Synthesized
let audioCtx = null;

function initAudio() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
}

// 2. Synthesized Sound Effects (No external assets needed)
const SoundEffects = {
  click() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(600, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(100, audioCtx.currentTime + 0.1);

    gain.gain.setValueAtTime(0.05, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.1);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.1);
  },

  success() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;

    // Quick celebratory arpeggio: C5 -> E5 -> G5 -> C6
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);

      gain.gain.setValueAtTime(0, now + idx * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.01, now + idx * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.3);
    });
  },

  error() {
    initAudio();
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const now = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    // Buzz sound: sawtooth going down quickly
    osc.type = "sawtooth";
    osc.frequency.setValueAtTime(130, now);
    osc.frequency.linearRampToValueAtTime(80, now + 0.3);

    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.15, now + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(now + 0.4);
  }
};

// 3. Canvas Animations: Particle System
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

let particles = [];
let stars = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas();

// Star class for background ambience
class Star {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5;
    this.speed = Math.random() * 0.15 + 0.05;
    this.opacity = Math.random();
  }
  update() {
    this.y -= this.speed;
    if (this.y < 0) {
      this.y = canvas.height;
      this.x = Math.random() * canvas.width;
    }
  }
  draw() {
    ctx.fillStyle = `rgba(0, 243, 255, ${this.opacity * 0.4})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Confetti/Particle class for celebratory explosions
class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 8 + 4;
    this.color = ["#00f3ff", "#b624ff", "#ffb700", "#00ff66", "#ff0055"][Math.floor(Math.random() * 5)];

    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 10 + 5;
    this.vx = Math.cos(angle) * speed;
    this.vy = Math.sin(angle) * speed - 3; // bias upwards

    this.gravity = 0.25;
    this.alpha = 1;
    this.decay = Math.random() * 0.015 + 0.01;
    this.rotation = Math.random() * 360;
    this.rotationSpeed = Math.random() * 10 - 5;
  }
  update() {
    this.x += this.vx;
    this.vy += this.gravity;
    this.y += this.vy;
    this.alpha -= this.decay;
    this.rotation += this.rotationSpeed;
  }
  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate((this.rotation * Math.PI) / 180);
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

// Populate background stars
for (let i = 0; i < 70; i++) {
  stars.push(new Star());
}

// Trigger a burst of confetti
function triggerConfettiBurst(x, y) {
  const count = 120;
  for (let i = 0; i < count; i++) {
    particles.push(new ConfettiParticle(x, y));
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background stars
  stars.forEach(star => {
    star.update();
    star.draw();
  });

  // Draw particles (confetti)
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    if (particles[i].alpha <= 0) {
      particles.splice(i, 1);
    } else {
      particles[i].draw();
    }
  }

  requestAnimationFrame(animate);
}
animate();


// 4. Smart Answer Matching & Normalization Engine
function normalizeString(str) {
  if (!str) return "";
  // Lower case, strip spaces, convert comma to dot for basic comparison
  return str.toLowerCase().replace(/,/g, ".").replace(/\s+/g, "").trim();
}

function parseToFloatOrFraction(str) {
  if (!str) return NaN;
  // Convert commas to dots, keep only digits, dots, minus, and fraction slashes
  let cleaned = str.replace(/,/g, '.').replace(/[^\d.\/-]/g, '').trim();

  if (!cleaned) return NaN;

  // Check if it's a fraction (has a slash)
  if (cleaned.includes('/')) {
    const parts = cleaned.split('/');
    if (parts.length === 2) {
      const num = parseFloat(parts[0]);
      const den = parseFloat(parts[1]);
      if (!isNaN(num) && !isNaN(den) && den !== 0) {
        return num / den;
      }
    }
  }

  return parseFloat(cleaned);
}

function checkAnswer(userVal, correctVal) {
  const userNorm = normalizeString(userVal);
  const correctNorm = normalizeString(correctVal);

  // 1. Direct string match (e.g. for text answers or exact matches)
  if (userNorm === correctNorm) return true;

  // 2. Numerical evaluation with Tolerance (Handles commas, rounding errors, and fractions)
  const userNum = parseToFloatOrFraction(userVal);
  const correctNum = parseToFloatOrFraction(correctVal);

  if (!isNaN(userNum) && !isNaN(correctNum)) {
    const diff = Math.abs(userNum - correctNum);
    // Tolerance threshold of 0.099 allows minor rounding discrepancies (e.g., 2.3 for 2.33)
    if (diff <= 0.099) {
      return true;
    }
  }

  return false;
}


// 5. Game Screen Rendering & State Control
function loadQuestions() {
  let saved = null;
  try {
    saved = localStorage.getItem("stats_quiz_questions_v5");
  } catch (e) {
    console.warn("localStorage is not accessible (likely running on file:// protocol). Using in-memory fallback.");
  }

  if (saved) {
    try {
      questions = JSON.parse(saved);
    } catch (e) {
      questions = [...PRELOADED_QUESTIONS];
    }
  } else {
    questions = [...PRELOADED_QUESTIONS];
    saveQuestionsToStorage();
  }
}

function saveQuestionsToStorage() {
  if (firebaseConnected && db) {
    db.ref("questions").set(questions);
  } else {
    try {
      localStorage.setItem("stats_quiz_questions_v5", JSON.stringify(questions));
    } catch (e) {
      console.warn("localStorage is not accessible. Progress will not be saved.");
    }
  }
}

// Generate the grid of cards
function renderBoard() {
  const boardEl = document.getElementById("quizBoard");
  boardEl.innerHTML = "";

  if (questions.length === 0) {
    boardEl.innerHTML = `<div style="grid-column: span 3; text-align: center; color: var(--text-muted); padding: 50px; font-size: 1.2rem;">Belum ada soal kuis aktif di papan. Silakan hubungi tutor/admin.</div>`;
    boardEl.classList.remove("hidden");
    document.getElementById("victoryScreen").classList.add("hidden");
    return;
  }

  const unsolvedQuestions = questions.filter(q => {
    if (!currentUser) return true;
    return !currentUser.solvedQuestions || !currentUser.solvedQuestions[q.id];
  });

  if (unsolvedQuestions.length === 0) {
    // Show victory screen
    boardEl.classList.add("hidden");
    document.getElementById("victoryScreen").classList.remove("hidden");
    return;
  }

  boardEl.classList.remove("hidden");
  document.getElementById("victoryScreen").classList.add("hidden");

  unsolvedQuestions.forEach((q, idx) => {
    const card = document.createElement("div");
    card.className = "quiz-card";
    card.dataset.id = q.id;

    card.innerHTML = `
      <div class="card-header">
        <span class="card-category">${q.category}</span>
        <span class="card-num">SOAL #${q.id}</span>
      </div>
      <div class="card-body">
        <div class="card-question-content">${q.question}</div>
      </div>
      <div class="card-footer">
        <span class="card-points">${q.points} PTS</span>
        <span class="card-action">Klik & Jawab 🎮</span>
      </div>
    `;

    card.addEventListener("click", () => openQuestionModal(q.id));
    boardEl.appendChild(card);
  });
}

// Modal handling
const qModal = document.getElementById("questionModal");
const qText = document.getElementById("modalQuestionText");
const qCategory = document.getElementById("modalCategory");
const qPoints = document.getElementById("modalPoints");
let qInput = document.getElementById("answerInput");
const qForm = document.getElementById("answerForm");

function openQuestionModal(id) {
  SoundEffects.click();
  const q = questions.find(item => item.id === id);
  if (!q) return;

  activeQuestionId = id;
  
  // Show a compact question preview reminder instead of full HTML question
  qText.innerHTML = `<div class="modal-question-reminder">${q.questionPreview}</div>`;
  
  qCategory.textContent = q.category;
  qPoints.textContent = `${q.points} PTS`;

  // Dynamically generate inputs
  if (q.inputs && q.inputs.length > 0) {
    let html = `<div class="multi-input-container">`;
    q.inputs.forEach((input, index) => {
      html += `
        <div class="sub-question-row">
          <span class="sub-question-label">${input.label}</span>
          <div class="sub-question-input-wrapper">
      `;
      if (input.type === "select") {
        html += `
            <select class="sub-question-select" data-index="${index}" required>
              ${input.options.map(opt => `<option value="${opt}">${opt}</option>`).join("")}
            </select>
        `;
      } else {
        html += `
            <input type="text" class="sub-question-input" data-index="${index}" placeholder="Ketik jawaban..." autocomplete="off" required>
        `;
      }
      html += `
          </div>
          <span class="status-icon" id="status-icon-${index}"></span>
        </div>
      `;
    });
    html += `</div>`;

    const inputGroup = qForm.querySelector(".input-group") || qForm.querySelector(".multi-input-container");
    if (inputGroup) {
      inputGroup.outerHTML = html;
    }
    
    // Focus first input
    setTimeout(() => {
      const firstField = qForm.querySelector(".sub-question-input, .sub-question-select");
      if (firstField) firstField.focus();
    }, 150);

  } else {
    // Fallback to single standard input
    const html = `
      <div class="input-group">
        <label for="answerInput" class="input-label">MASUKKAN JAWABAN ANDA:</label>
        <input type="text" id="answerInput" class="custom-input" placeholder="Ketik jawaban di sini..." required>
        <span class="input-glow-bar"></span>
      </div>
    `;
    const inputGroup = qForm.querySelector(".input-group") || qForm.querySelector(".multi-input-container");
    if (inputGroup) {
      inputGroup.outerHTML = html;
    }
    
    qInput = document.getElementById("answerInput");
    if (qInput) {
      qInput.value = "";
      setTimeout(() => qInput.focus(), 150);
    }
  }

  qModal.classList.remove("hidden");
}

function closeQuestionModal() {
  qModal.classList.add("hidden");
  activeQuestionId = null;
}

// Glowing Notification Banner (BENAR / SALAH)
const screenGlow = document.getElementById("screenGlow");
const feedbackBanner = document.getElementById("feedbackBanner");

function triggerFeedback(isCorrect) {
  // Clear any existing classes
  screenGlow.className = "screen-glow";
  feedbackBanner.className = "feedback-banner";

  if (isCorrect) {
    SoundEffects.success();

    // Spawn confetti explosion at the center of the viewport
    triggerConfettiBurst(window.innerWidth / 2, window.innerHeight * 0.4);

    screenGlow.classList.add("success-glow");
    feedbackBanner.classList.add("show", "success");
    feedbackBanner.querySelector(".banner-content").textContent = "BENAR!";

    // Auto-close modal and update board after 1.5s
    setTimeout(() => {
      screenGlow.className = "screen-glow";
      feedbackBanner.className = "feedback-banner";

      // Mark as solved for this student
      const activeQ = questions.find(item => item.id === activeQuestionId);
      if (activeQ && currentUser) {
        markQuestionSolvedForUser(currentUser.username, activeQuestionId, activeQ.points);
      }

      closeQuestionModal();
    }, 1500);

  } else {
    SoundEffects.error();

    // Shake modal card
    const modalContent = document.querySelector(".modal-card");
    modalContent.classList.add("shake");

    screenGlow.classList.add("error-glow");
    feedbackBanner.classList.add("show", "error");
    feedbackBanner.querySelector(".banner-content").textContent = "SALAH! ❌";

    // Reset notification but keep modal open
    setTimeout(() => {
      screenGlow.className = "screen-glow";
      feedbackBanner.className = "feedback-banner";
      modalContent.classList.remove("shake");

      // Handle focus and field clearing
      const activeQ = questions.find(q => q.id === activeQuestionId);
      if (activeQ && activeQ.inputs && activeQ.inputs.length > 0) {
        activeQ.inputs.forEach((inputInfo, index) => {
          const field = qForm.querySelector(`[data-index="${index}"]`);
          if (field && field.classList.contains("input-error")) {
            if (field.tagName === "INPUT") {
              field.value = ""; // clear wrong text inputs
            }
          }
        });
        const firstErrField = qForm.querySelector(".input-error");
        if (firstErrField) firstErrField.focus();
      } else {
        qInput = document.getElementById("answerInput");
        if (qInput) {
          qInput.value = ""; // clear wrong input
          qInput.focus();
        }
      }
    }, 1500);
  }
}

// 6. Tutor Admin Panel Management
const adminModal = document.getElementById("adminModal");
const adminTableBody = document.getElementById("adminQuestionsTableBody");
const addForm = document.getElementById("addQuestionForm");

function renderAdminTable() {
  adminTableBody.innerHTML = "";
  questions.forEach((q, idx) => {
    const row = document.createElement("tr");

    let displayAnswer = "";
    if (q.inputs && q.inputs.length > 0) {
      displayAnswer = q.inputs.map(inp => `${inp.label.split(' ')[0] || ''} ${inp.correctAnswer}`).join(", ");
    } else {
      displayAnswer = q.correctAnswer;
    }

    row.innerHTML = `
      <td>${q.id}</td>
      <td><strong>${q.category}</strong></td>
      <td><span style="color:var(--neon-gold)">${q.points} PTS</span></td>
      <td class="cell-question" title="${q.question.replace(/"/g, '&quot;')}">${q.questionPreview || q.question.replace(/<[^>]*>/g, '').replace(/\n/g, ' ')}</td>
      <td><code>${displayAnswer}</code></td>
      <td>
        <button class="btn-delete" data-id="${q.id}">Hapus 🗑️</button>
      </td>
    `;

    row.querySelector(".btn-delete").addEventListener("click", () => deleteQuestion(q.id));
    adminTableBody.appendChild(row);
  });
}

function deleteQuestion(id) {
  if (confirm(`Apakah Anda yakin ingin menghapus soal #${id}?`)) {
    questions = questions.filter(q => q.id !== id);
    // Re-index remaining questions
    questions.forEach((q, idx) => {
      q.id = idx + 1;
    });
    saveQuestionsToStorage();
    renderBoard();
    renderAdminTable();
  }
}

// Add new question
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const category = document.getElementById("inputCategory").value;
  const points = parseInt(document.getElementById("inputPoints").value);
  const question = document.getElementById("inputQuestion").value;
  const correctAnswer = document.getElementById("inputAnswer").value;

  const nextId = questions.length > 0 ? Math.max(...questions.map(q => q.id)) + 1 : 1;

  const newQ = {
    id: nextId,
    category,
    points,
    question,
    correctAnswer,
    solved: false
  };

  questions.push(newQ);
  saveQuestionsToStorage();

  // Reset form
  addForm.reset();
  document.getElementById("inputPoints").value = "200"; // default value

  renderBoard();
  renderAdminTable();

  // Alert tutor
  const submitBtn = addForm.querySelector("button[type='submit']");
  const oldText = submitBtn.textContent;
  submitBtn.textContent = "Berhasil Ditambahkan! ✔️";
  submitBtn.style.borderColor = "var(--neon-green)";

  setTimeout(() => {
    submitBtn.textContent = oldText;
    submitBtn.style.borderColor = "";
  }, 1500);
});

// Setup event listeners
document.getElementById("btnQClose").addEventListener("click", closeQuestionModal);
document.getElementById("btnAdmin").addEventListener("click", () => {
  SoundEffects.click();
  renderAdminTable();
  adminModal.classList.remove("hidden");
});
document.getElementById("btnAdminClose").addEventListener("click", () => {
  adminModal.classList.add("hidden");
});

// Victory screen Play Again
document.getElementById("btnPlayAgain").addEventListener("click", () => {
  SoundEffects.click();
  if (currentUser) {
    const usernameKey = currentUser.username.toLowerCase();
    if (firebaseConnected && db) {
      db.ref("users/" + usernameKey + "/solvedQuestions").remove();
      db.ref("users/" + usernameKey + "/score").set(0);
      db.ref("users/" + usernameKey + "/solvedCount").set(0);
      db.ref("users/" + usernameKey + "/lastSolvedTimestamp").set(Date.now());
    } else {
      let localUsers = {};
      try {
        const saved = localStorage.getItem("stats_quiz_local_users");
        if (saved) localUsers = JSON.parse(saved);
        if (localUsers[usernameKey]) {
          localUsers[usernameKey].solvedQuestions = {};
          localUsers[usernameKey].score = 0;
          localUsers[usernameKey].solvedCount = 0;
          localUsers[usernameKey].lastSolvedTimestamp = Date.now();
          localStorage.setItem("stats_quiz_local_users", JSON.stringify(localUsers));
          
          currentUser = localUsers[usernameKey];
          localStorage.setItem("stats_quiz_current_user", JSON.stringify(currentUser));
        }
      } catch(e) {}
      renderBoard();
      updateOfflineLeaderboard();
    }
  }
});

// Submit answer verifier
qForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const activeQ = questions.find(q => q.id === activeQuestionId);
  if (!activeQ) return;

  if (activeQ.inputs && activeQ.inputs.length > 0) {
    let allCorrect = true;

    // Validate each input field
    activeQ.inputs.forEach((inputInfo, index) => {
      const field = qForm.querySelector(`[data-index="${index}"]`);
      const statusIcon = document.getElementById(`status-icon-${index}`);
      if (!field || !statusIcon) return;

      const userVal = field.value.trim();
      const isCorrect = checkAnswer(userVal, inputInfo.correctAnswer);

      // Reset classes
      field.classList.remove("input-success", "input-error");
      statusIcon.className = "status-icon";

      if (isCorrect) {
        field.classList.add("input-success");
        statusIcon.classList.add("correct");
        statusIcon.textContent = "✔️";
      } else {
        field.classList.add("input-error");
        statusIcon.classList.add("incorrect");
        statusIcon.textContent = "❌";
        allCorrect = false;
      }
    });

    triggerFeedback(allCorrect);

  } else {
    // Original single-input logic
    const qInputEl = document.getElementById("answerInput");
    if (!qInputEl) return;
    const userAns = qInputEl.value;
    if (!userAns.trim()) return;

    const isCorrect = checkAnswer(userAns, activeQ.correctAnswer);
    triggerFeedback(isCorrect);
  }
});

// --- Firebase Database Synchronization & Fallback ---
function initFirebase() {
  const isValidConfig = typeof firebaseConfig !== 'undefined' && 
                        firebaseConfig.apiKey && 
                        firebaseConfig.apiKey !== 'YOUR_API_KEY_HERE' &&
                        firebaseConfig.databaseURL && 
                        firebaseConfig.databaseURL !== 'YOUR_DATABASE_URL_HERE';
  
  const statusDot = document.getElementById("connectionStatus");

  if (isValidConfig) {
    try {
      firebase.initializeApp(firebaseConfig);
      db = firebase.database();
      firebaseConnected = true;
      
      if (statusDot) {
        statusDot.className = "status-dot online";
        statusDot.title = "Mode Online (Database Firebase Terhubung)";
      }
      console.log("Firebase Realtime Database successfully initialized.");
      
      // Load questions from Firebase first, then trigger checkAuth once loaded
      let isFirstLoad = true;
      const qRef = db.ref("questions");
      qRef.on("value", (snapshot) => {
        const val = snapshot.val();
        if (val) {
          questions = Array.isArray(val) ? val.filter(Boolean) : Object.values(val);
        } else {
          console.log("Database is empty. Seeding with preloaded questions...");
          qRef.set(PRELOADED_QUESTIONS);
          questions = [...PRELOADED_QUESTIONS];
        }
        
        // Render the board
        renderBoard();
        
        // Trigger auth check ONLY on first load
        if (isFirstLoad) {
          isFirstLoad = false;
          checkAuth();
        }
      });
      
      // Start listening to leaderboard (for admin screen)
      listenToLeaderboard();
      
    } catch (e) {
      console.error("Firebase failed to initialize: ", e);
      fallbackToOfflineMode();
    }
  } else {
    console.warn("Firebase configuration is not set or placeholder. Running in Offline Mode.");
    fallbackToOfflineMode();
  }
}

function fallbackToOfflineMode() {
  firebaseConnected = false;
  db = null;
  const statusDot = document.getElementById("connectionStatus");
  if (statusDot) {
    statusDot.className = "status-dot offline";
    statusDot.title = "Mode Offline (Menyimpan lokal di browser)";
  }
  
  loadQuestions();
  updateOfflineLeaderboard();
  checkAuth();
}

function syncQuestionsFromFirebase() {
  if (!firebaseConnected || !db) return;
  const qRef = db.ref("questions");
  qRef.on("value", (snapshot) => {
    const val = snapshot.val();
    if (val) {
      questions = Array.isArray(val) ? val.filter(Boolean) : Object.values(val);
      renderBoard();
    }
  });
}

function listenToLeaderboard() {
  if (!firebaseConnected || !db) return;
  
  const usersRef = db.ref("users");
  usersRef.on("value", (snapshot) => {
    const val = snapshot.val();
    const usersList = [];
    if (val) {
      Object.keys(val).forEach(key => {
        if (key !== "admin") {
          usersList.push(val[key]);
        }
      });
    }
    
    // Sort: highest score first, then earliest lastSolvedTimestamp
    usersList.sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return (a.lastSolvedTimestamp || 0) - (b.lastSolvedTimestamp || 0);
    });
    
    renderLeaderboardTable(usersList);
  });
}

function updateOfflineLeaderboard() {
  let localUsers = {};
  try {
    const saved = localStorage.getItem("stats_quiz_local_users");
    if (saved) localUsers = JSON.parse(saved);
  } catch(e) {}
  
  const usersList = [];
  Object.keys(localUsers).forEach(key => {
    if (key !== "admin") {
      usersList.push(localUsers[key]);
    }
  });
  
  usersList.sort((a, b) => {
    if (b.score !== a.score) {
      return b.score - a.score;
    }
    return (a.lastSolvedTimestamp || 0) - (b.lastSolvedTimestamp || 0);
  });
  
  renderLeaderboardTable(usersList);
}

function renderLeaderboardTable(usersList) {
  const tbody = document.getElementById("adminLeaderboardTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";
  
  if (usersList.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted); padding: 20px;">Belum ada siswa yang bergabung / mengerjakan kuis.</td></tr>`;
    return;
  }
  
  usersList.forEach((user, index) => {
    const rank = index + 1;
    let rankBadgeClass = "rank-other";
    if (rank === 1) rankBadgeClass = "rank-1";
    else if (rank === 2) rankBadgeClass = "rank-2";
    else if (rank === 3) rankBadgeClass = "rank-3";
    
    // Format timestamp nicely (HH:MM:SS)
    let timeStr = "-";
    if (user.lastSolvedTimestamp) {
      const date = new Date(user.lastSolvedTimestamp);
      timeStr = date.toLocaleTimeString("id-ID");
    }
    
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><span class="rank-badge ${rankBadgeClass}">${rank}</span></td>
      <td style="font-weight: 700; color: var(--text-primary);">${user.username}</td>
      <td style="color: var(--neon-cyan); font-weight: bold;">${user.score || 0} PTS</td>
      <td>${user.solvedCount || 0} / ${questions.length}</td>
      <td style="font-family: monospace; color: var(--text-secondary); font-size: 0.85rem;">${timeStr}</td>
      <td>
        <button class="btn-delete" onclick="deleteUser('${user.username.toLowerCase()}')">Hapus 🗑️</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

window.deleteUser = function(usernameKey) {
  if (confirm(`Apakah Anda yakin ingin menghapus user ini dari leaderboard?`)) {
    if (firebaseConnected && db) {
      db.ref("users/" + usernameKey).remove();
    } else {
      let localUsers = {};
      try {
        const saved = localStorage.getItem("stats_quiz_local_users");
        if (saved) localUsers = JSON.parse(saved);
        delete localUsers[usernameKey];
        localStorage.setItem("stats_quiz_local_users", JSON.stringify(localUsers));
      } catch(e) {}
      updateOfflineLeaderboard();
    }
  }
};

function markQuestionSolvedForUser(username, questionId, points) {
  const usernameKey = username.toLowerCase();
  
  if (firebaseConnected && db) {
    const userRef = db.ref("users/" + usernameKey);
    userRef.once("value").then(snapshot => {
      let userData = snapshot.val() || {
        username: username,
        score: 0,
        solvedCount: 0,
        lastSolvedTimestamp: 0,
        solvedQuestions: {}
      };
      
      if (!userData.solvedQuestions) userData.solvedQuestions = {};
      
      // If already solved, don't re-solve
      if (userData.solvedQuestions[questionId]) return;
      
      userData.solvedQuestions[questionId] = true;
      userData.score = (userData.score || 0) + points;
      userData.solvedCount = (userData.solvedCount || 0) + 1;
      userData.lastSolvedTimestamp = Date.now();
      
      // Update firebase
      userRef.set(userData);
      
      // Update local state copy
      currentUser = userData;
      renderBoard();
    });
  } else {
    // Offline fallback (localStorage)
    let localUsers = {};
    try {
      const saved = localStorage.getItem("stats_quiz_local_users");
      if (saved) localUsers = JSON.parse(saved);
    } catch(e) {}
    
    let userData = localUsers[usernameKey] || {
      username: username,
      score: 0,
      solvedCount: 0,
      lastSolvedTimestamp: 0,
      solvedQuestions: {}
    };
    
    if (!userData.solvedQuestions) userData.solvedQuestions = {};
    if (userData.solvedQuestions[questionId]) return;
    
    userData.solvedQuestions[questionId] = true;
    userData.score = (userData.score || 0) + points;
    userData.solvedCount = (userData.solvedCount || 0) + 1;
    userData.lastSolvedTimestamp = Date.now();
    
    localUsers[usernameKey] = userData;
    try {
      localStorage.setItem("stats_quiz_local_users", JSON.stringify(localUsers));
      localStorage.setItem("stats_quiz_current_user", JSON.stringify(userData));
    } catch(e) {}
    
    currentUser = userData;
    renderBoard();
    updateOfflineLeaderboard();
  }
}

// --- Authentication Flow ---
const loginScreen = document.getElementById("loginScreen");
const appContainer = document.getElementById("appContainer");
const loginForm = document.getElementById("loginForm");
const loginInput = document.getElementById("loginUsernameInput");
const btnAdmin = document.getElementById("btnAdmin");
const userNameDisplay = document.getElementById("userNameDisplay");
const btnLogout = document.getElementById("btnLogout");

function checkAuth() {
  let userRaw = null;
  try {
    userRaw = localStorage.getItem("stats_quiz_current_user");
  } catch (e) {
    console.warn("localStorage is not accessible.");
  }

  if (userRaw) {
    try {
      const user = JSON.parse(userRaw);
      loginUser(user.username);
      return;
    } catch (e) {}
  }
  showLogin();
}

function showLogin() {
  loginScreen.classList.remove("hidden");
  appContainer.classList.add("hidden");
  loginInput.value = "";
  setTimeout(() => loginInput.focus(), 150);
}

function showGame(username, role) {
  loginScreen.classList.add("hidden");
  appContainer.classList.remove("hidden");
  
  const displayName = username.charAt(0).toUpperCase() + username.slice(1);
  userNameDisplay.textContent = displayName;
  
  if (role === "admin") {
    btnAdmin.classList.remove("hidden");
  } else {
    btnAdmin.classList.add("hidden");
  }
  
  renderBoard();
}

function loginUser(username) {
  const usernameKey = username.toLowerCase();
  
  if (firebaseConnected && db) {
    const userRef = db.ref("users/" + usernameKey);
    userRef.once("value").then(snapshot => {
      let userData = snapshot.val();
      if (!userData) {
        userData = {
          username: username,
          score: 0,
          solvedCount: 0,
          lastSolvedTimestamp: Date.now(),
          solvedQuestions: {}
        };
        userRef.set(userData);
      }
      
      currentUser = userData;
      try {
        localStorage.setItem("stats_quiz_current_user", JSON.stringify(userData));
      } catch (e) {}
      
      // Attach live listener for student profile
      userRef.on("value", (snap) => {
        const val = snap.val();
        if (!val) {
          // If deleted by admin, logout
          logoutUserSilent();
          return;
        }
        currentUser = val;
        renderBoard();
      });
      
      showGame(username, usernameKey === "admin" ? "admin" : "student");
    });
  } else {
    // Offline mode
    let localUsers = {};
    try {
      const saved = localStorage.getItem("stats_quiz_local_users");
      if (saved) localUsers = JSON.parse(saved);
    } catch(e) {}
    
    let userData = localUsers[usernameKey];
    if (!userData) {
      userData = {
        username: username,
        score: 0,
        solvedCount: 0,
        lastSolvedTimestamp: Date.now(),
        solvedQuestions: {}
      };
      localUsers[usernameKey] = userData;
      try {
        localStorage.setItem("stats_quiz_local_users", JSON.stringify(localUsers));
      } catch(e) {}
    }
    
    currentUser = userData;
    try {
      localStorage.setItem("stats_quiz_current_user", JSON.stringify(userData));
    } catch(e) {}
    
    showGame(username, usernameKey === "admin" ? "admin" : "student");
    updateOfflineLeaderboard();
  }
}

function logoutUserSilent() {
  currentUser = null;
  try {
    localStorage.removeItem("stats_quiz_current_user");
  } catch(e) {}
  showLogin();
}

// Login Submit
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = loginInput.value.trim();
  if (!username) return;
  
  SoundEffects.click();
  loginUser(username);
});

// Logout Click
btnLogout.addEventListener("click", () => {
  SoundEffects.click();
  if (firebaseConnected && db && currentUser) {
    db.ref("users/" + currentUser.username.toLowerCase()).off();
  }
  logoutUserSilent();
});

// Clear Leaderboard (Delete all users)
const btnClearLeaderboard = document.getElementById("btnClearLeaderboard");
if (btnClearLeaderboard) {
  btnClearLeaderboard.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin menghapus SEMUA user dari database leaderboard? Progres mereka akan hilang.")) {
      if (firebaseConnected && db) {
        db.ref("users").remove();
      } else {
        try {
          localStorage.removeItem("stats_quiz_local_users");
          localStorage.removeItem("stats_quiz_current_user");
        } catch(e) {}
        updateOfflineLeaderboard();
      }
      SoundEffects.success();
    }
  });
}

// Reset Game Stats (Reset solved status of all questions for all active users)
const btnResetGameStats = document.getElementById("btnResetGameStats");
if (btnResetGameStats) {
  btnResetGameStats.addEventListener("click", () => {
    if (confirm("Apakah Anda yakin ingin mereset status soal (skor dan progres) seluruh siswa kembali ke 0?")) {
      if (firebaseConnected && db) {
        db.ref("users").once("value").then(snapshot => {
          const val = snapshot.val();
          if (val) {
            const updates = {};
            Object.keys(val).forEach(key => {
              updates[`users/${key}/score`] = 0;
              updates[`users/${key}/solvedCount`] = 0;
              updates[`users/${key}/lastSolvedTimestamp`] = Date.now();
              updates[`users/${key}/solvedQuestions`] = {};
            });
            db.ref().update(updates);
          }
        });
      } else {
        let localUsers = {};
        try {
          const saved = localStorage.getItem("stats_quiz_local_users");
          if (saved) localUsers = JSON.parse(saved);
          
          Object.keys(localUsers).forEach(key => {
            localUsers[key].score = 0;
            localUsers[key].solvedCount = 0;
            localUsers[key].lastSolvedTimestamp = Date.now();
            localUsers[key].solvedQuestions = {};
          });
          localStorage.setItem("stats_quiz_local_users", JSON.stringify(localUsers));
        } catch(e) {}
        updateOfflineLeaderboard();
      }
      SoundEffects.success();
    }
  });
}

// Global initializations
initFirebase();
