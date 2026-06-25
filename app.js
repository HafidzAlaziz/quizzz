// Stats Champions Arena - Core Logic & Animations

// 1. Initial Question Bank (Preloaded data)
const PRELOADED_QUESTIONS = [
  {
    id: 1,
    category: "Ukuran Pemusatan",
    points: 100,
    question: "Diberikan data nilai statistika: 6, 7, 8, 8, 5, 9, 8, 7, 6, 10.\nTentukan nilai Median dari data tersebut!",
    correctAnswer: "7.5",
    solved: false
  },
  {
    id: 2,
    category: "Rata-rata Gabungan",
    points: 150,
    question: "Rata-rata tinggi badan 9 siswa adalah 162 cm. Jika ditambah 1 siswa baru, rata-ratanya menjadi 163 cm. Berapa tinggi badan siswa baru tersebut (dalam cm)?",
    correctAnswer: "172",
    solved: false
  },
  {
    id: 3,
    category: "Peluang Kejadian",
    points: 100,
    question: "Sebuah dadu dan sebuah koin dilempar undi bersamaan satu kali. Peluang munculnya angka prima pada dadu DAN gambar (G) pada koin adalah...",
    correctAnswer: "1/4",
    solved: false
  },
  {
    id: 4,
    category: "Kombinatorika",
    points: 200,
    question: "Dari 8 orang siswa berprestasi, akan dipilih 3 orang untuk mengikuti kompetisi statistika tingkat nasional. Banyak cara pemilihan susunan delegasi tersebut adalah...",
    correctAnswer: "56",
    solved: false
  },
  {
    id: 5,
    category: "Ukuran Penyebaran",
    points: 100,
    question: "Diketahui data statistik: 4, 6, 8, 2, 5. Tentukan nilai Jangkauan (Range) dari data tersebut!",
    correctAnswer: "6",
    solved: false
  },
  {
    id: 6,
    category: "Peluang Dadu",
    points: 200,
    question: "Dua buah dadu dilempar bersamaan satu kali. Peluang munculnya mata dadu berjumlah 8 adalah...",
    correctAnswer: "5/36",
    solved: false
  },
  {
    id: 7,
    category: "Kuartil Data",
    points: 200,
    question: "Tentukan Kuartil Atas (Q₃) dari kumpulan data berikut:\n2, 3, 5, 5, 7, 8, 8, 9, 10.",
    correctAnswer: "8.5",
    solved: false
  },
  {
    id: 8,
    category: "Deviasi Standar",
    points: 250,
    question: "Tentukan nilai Varian (ragam) dari data tunggal berikut:\n2, 4, 5, 6, 8 (Petunjuk: x̄ = 5)",
    correctAnswer: "4",
    solved: false
  }
];

// App State
let questions = [];
let activeQuestionId = null;

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
  const saved = localStorage.getItem("stats_quiz_questions");
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
  localStorage.setItem("stats_quiz_questions", JSON.stringify(questions));
}

// Generate the grid of cards
function renderBoard() {
  const boardEl = document.getElementById("quizBoard");
  boardEl.innerHTML = "";

  const unsolvedQuestions = questions.filter(q => !q.solved);

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

    // Replace text newlines with html breaks
    const previewText = q.question.replace(/\n/g, "<br>");

    card.innerHTML = `
      <div class="card-header">
        <span class="card-category">${q.category}</span>
        <span class="card-num">SOAL #${q.id}</span>
      </div>
      <div class="card-body">
        <p class="card-question-preview">${previewText}</p>
      </div>
      <div class="card-footer">
        <span class="card-points">${q.points} PTS</span>
        <span class="card-action">Klik & Jawab</span>
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
const qInput = document.getElementById("answerInput");
const qForm = document.getElementById("answerForm");

function openQuestionModal(id) {
  SoundEffects.click();
  const q = questions.find(item => item.id === id);
  if (!q) return;

  activeQuestionId = id;
  qText.innerHTML = q.question.replace(/\n/g, "<br>");
  qCategory.textContent = q.category;
  qPoints.textContent = `${q.points} PTS`;
  qInput.value = "";

  qModal.classList.remove("hidden");

  // Autofocus input
  setTimeout(() => qInput.focus(), 150);
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

      // Mark as solved
      const qIndex = questions.findIndex(item => item.id === activeQuestionId);
      if (qIndex !== -1) {
        questions[qIndex].solved = true;
        saveQuestionsToStorage();
      }

      closeQuestionModal();
      renderBoard();
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
      qInput.value = ""; // clear wrong input
      qInput.focus();
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
    row.innerHTML = `
      <td>${q.id}</td>
      <td><strong>${q.category}</strong></td>
      <td><span style="color:var(--neon-gold)">${q.points} PTS</span></td>
      <td class="cell-question" title="${q.question.replace(/"/g, '&quot;')}">${q.question.replace(/\n/g, ' ')}</td>
      <td><code>${q.correctAnswer}</code></td>
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
  questions.forEach(q => q.solved = false);
  saveQuestionsToStorage();
  renderBoard();
});

// Submit answer verifier
qForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userAns = qInput.value;
  if (!userAns.trim()) return;

  const activeQ = questions.find(q => q.id === activeQuestionId);
  if (!activeQ) return;

  const isCorrect = checkAnswer(userAns, activeQ.correctAnswer);
  triggerFeedback(isCorrect);
});

// Global initializations
loadQuestions();
renderBoard();
