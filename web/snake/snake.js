const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set canvas size for mobile
canvas.width = 300;
canvas.height = 300;

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [];
let direction = { x: 0, y: 0 };
let apple = {};
let speed = 150; // base speed, updated per level
let lastMoveTime = 0;
let score = 0;
let highScore = localStorage.getItem("snakeHighScore") ? parseInt(localStorage.getItem("snakeHighScore")) : 0;

let isPaused = false;
let gameOver = false;
let themeIndex = 0;
let selectedLevelSpeed = null;

const themes = [
  ["#00ffea", "#00d1b2", "#009c89"],
  ["#ff6ec7", "#ff9cd2", "#fa7d09"],
  ["#00ff00", "#7fff00", "#adff2f"],
];

// Sounds (optional)
const eatSound = new Audio("https://actions.google.com/sounds/v1/cartoon/pop.ogg");
const gameOverSound = new Audio("https://actions.google.com/sounds/v1/cartoon/clang_and_wobble.ogg");

// DOM Elements
const levelsDiv = document.getElementById("levels");
const startBtn = document.getElementById("startBtn");
const menuDiv = document.getElementById("menu");
const gameContainer = document.getElementById("gameContainer");
const statusP = document.getElementById("status");
const pauseBtn = document.getElementById("pauseBtn");
const continueBtn = document.getElementById("continueBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");
const backMenuBtn = document.getElementById("backMenuBtn");
const changeThemeBtn = document.getElementById("changeThemeBtn");
const currentScoreP = document.getElementById("currentScore");
const highScoreP = document.getElementById("highScore");
const upBtn = document.getElementById("upBtn");
const downBtn = document.getElementById("downBtn");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

// Levels
const levelSpeeds = [200, 150, 100, 75, 50];
for (let i = 0; i < levelSpeeds.length; i++) {
  const btn = document.createElement("button");
  btn.textContent = `Level ${i + 1}`;
  btn.classList.add("level-btn");
  btn.dataset.speed = levelSpeeds[i];
  btn.onclick = () => selectLevel(btn);
  levelsDiv.appendChild(btn);
}

function selectLevel(button) {
  document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("selected"));
  button.classList.add("selected");
  selectedLevelSpeed = parseInt(button.dataset.speed);
  startBtn.disabled = false;
}

startBtn.onclick = () => {
  if (!selectedLevelSpeed) return;
  speed = selectedLevelSpeed;
  menuDiv.style.display = "none";
  gameContainer.style.display = "block";
  resetGame();
  lastMoveTime = performance.now();
  requestAnimationFrame(gameLoop);
};

pauseBtn.onclick = () => {
  if (!gameOver) {
    isPaused = true;
    statusP.textContent = "⏸ Game Paused";
  }
};
continueBtn.onclick = () => {
  if (!gameOver && isPaused) {
    isPaused = false;
    statusP.textContent = "";
    lastMoveTime = performance.now();
    requestAnimationFrame(gameLoop);
  }
};
tryAgainBtn.onclick = () => {
  if (!selectedLevelSpeed) return;
  resetGame();
  lastMoveTime = performance.now();
  requestAnimationFrame(gameLoop);
};
backMenuBtn.onclick = () => {
  backToMenu();
};
changeThemeBtn.onclick = () => {
  themeIndex = (themeIndex + 1) % themes.length;
  changeThemeBtn.style.backgroundColor = themes[themeIndex][0];
};

// Directional button controls
function handleDirectionChange(newDirection) {
  if (gameOver || isPaused) return;
  // Prevent reversing direction
  if (
    (newDirection.x === -direction.x && direction.x !== 0) ||
    (newDirection.y === -direction.y && direction.y !== 0)
  ) {
    return;
  }
  direction = newDirection;
}

upBtn.addEventListener("click", () => handleDirectionChange({ x: 0, y: -1 }));
downBtn.addEventListener("click", () => handleDirectionChange({ x: 0, y: 1 }));
leftBtn.addEventListener("click", () => handleDirectionChange({ x: -1, y: 0 }));
rightBtn.addEventListener("click", () => handleDirectionChange({ x: 1, y: 0 }));

// Prevent default touch behavior and handle touch events
[upBtn, downBtn, leftBtn, rightBtn].forEach(btn => {
  btn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent scrolling or zooming
    btn.click(); // Trigger the same click handler
  }, { passive: false });
});

// Reset game state for new start
function resetGame() {
  snake = [{ x: 7, y: 7 }]; // Adjusted for smaller canvas (15x15 grid)
  direction = { x: 1, y: 0 }; // important to set initial movement!
  position = { x: 7, y: 7 };
  target = { x: 8, y: 7 };
  moveProgress = 0;
  apple = getRandomApplePosition();
  score = 0;
  updateScoreDisplay();
  isPaused = false;
  gameOver = false;
  statusP.textContent = "";
}

// Update score and high score display
function updateScoreDisplay() {
  currentScoreP.textContent = `Score: ${score}`;
  highScoreP.textContent = `High Score: ${highScore}`;
}

// Game loop with smooth movement
function gameLoop(timestamp) {
  if (gameOver) return;

  if (!isPaused) {
    const delta = timestamp - lastMoveTime;
    const interval = speed;

    moveProgress += delta / interval;

    while (moveProgress >= 1) {
      moveProgress -= 1;
      advanceSnake();
    }

    drawEverythingSmooth(moveProgress);
  }

  lastMoveTime = timestamp;
  requestAnimationFrame(gameLoop);
}

// Advance snake logic
function advanceSnake() {
  position = { ...target };
  snake.unshift({ x: target.x, y: target.y });

  if (target.x === apple.x && target.y === apple.y) {
    score += 10; // Increment score by 10 for each apple
    if (score > highScore) {
      highScore = score;
      localStorage.setItem("snakeHighScore", highScore);
    }
    updateScoreDisplay();
    if (eatSound) eatSound.play();
    apple = getRandomApplePosition();
  } else {
    snake.pop();
  }

  target = { x: target.x + direction.x, y: target.y + direction.y };

  checkCollision();
}

// Collision detection
function checkCollision() {
  // Wall collision
  if (target.x < 0 || target.x >= tileCount || target.y < 0 || target.y >= tileCount) {
    endGame();
  }

  // Self collision
  for (let i = 1; i < snake.length; i++) {
    if (snake[i].x === target.x && snake[i].y === target.y) {
      endGame();
    }
  }
}

function endGame() {
  gameOver = true;
  isPaused = true;
  statusP.textContent = "💀 Game Over! Press Try Again or Back to Menu.";
  if (gameOverSound) gameOverSound.play();
}

function backToMenu() {
  gameOver = true;
  isPaused = true;
  menuDiv.style.display = "block";
  gameContainer.style.display = "none";
  selectedLevelSpeed = null;
  startBtn.disabled = true;
  document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("selected"));
  statusP.textContent = "";
  direction = { x: 0, y: 0 };
  snake = [];
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  changeThemeBtn.style.backgroundColor = "";
  updateScoreDisplay();
}

// Draw with smooth interpolation for all segments
function drawEverythingSmooth(progress) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw apple with glow
  ctx.fillStyle = "#ffff00";
  ctx.shadowColor = "#ffff00";
  ctx.shadowBlur = 10;
  ctx.beginPath();
  ctx.arc(apple.x * gridSize + gridSize / 2, apple.y * gridSize + gridSize / 2, gridSize / 2 - 2, 0, Math.PI * 2);
  ctx.fill();

  // Draw snake body smoothly
  const colors = themes[themeIndex];

  for (let i = 0; i < snake.length; i++) {
    let segment = snake[i];

    let drawX, drawY;

    if (i === 0) {
      // Head interpolates between position and target
      drawX = lerp(position.x, target.x, progress) * gridSize;
      drawY = lerp(position.y, target.y, progress) * gridSize;
    } else {
      // For body segments, interpolate between previous and current segment positions
      let prevSegment = snake[i - 1];
      drawX = lerp(segment.x, prevSegment.x, progress) * gridSize;
      drawY = lerp(segment.y, prevSegment.y, progress) * gridSize;
    }

    let color = colors[i % colors.length];
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 8;
    drawRoundedRect(drawX + 2, drawY + 2, gridSize - 4, gridSize - 4, 6);
  }
  ctx.shadowBlur = 0;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function drawRoundedRect(x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
  ctx.fill();
}

function getRandomApplePosition() {
  let pos;
  do {
    pos = {
      x: Math.floor(Math.random() * tileCount),
      y: Math.floor(Math.random() * tileCount),
    };
  } while (snake.some(s => s.x === pos.x && s.y === pos.y));
  return pos;
}

// Keyboard controls
window.addEventListener("keydown", e => {
  if (gameOver || isPaused) return;

  switch (e.key) {
    case "ArrowUp":
    case "w":
      handleDirectionChange({ x: 0, y: -1 });
      break;
    case "ArrowDown":
    case "s":
      handleDirectionChange({ x: 0, y: 1 });
      break;
    case "ArrowLeft":
    case "a":
      handleDirectionChange({ x: -1, y: 0 });
      break;
    case "ArrowRight":
    case "d":
      handleDirectionChange({ x: 1, y: 0 });
      break;
  }
});

// Initialize high score display
updateScoreDisplay();