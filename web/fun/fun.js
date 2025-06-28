// script.js
const emoji = document.getElementById("emoji");
const emojiText = document.getElementById("emojiText");

// Initial state
emoji.textContent = "😀";
emojiText.textContent = "I'm feeling great today!";

emoji.addEventListener("mouseover", () => {
  emoji.textContent = "😟";
  typeText("Don't click me... I'm shy 😢");
  speak("Don't touch me 😢");
  setMood(50);
});

emoji.addEventListener("mouseout", () => {
  emoji.textContent = "😀";
  typeText("I'm feeling great today!");
  speak("Hi, I'm Emo! 💬");
  setMood(100);
});

emoji.addEventListener("click", () => {
  emoji.textContent = "😭";
  typeText("Waaah! You clicked me 😭");
  speak("Why did you click meee 😭");
  setMood(20);
});

function speak(message) {
  document.getElementById("chatBubble").textContent = message;
}

function typeText(text) {
  emojiText.textContent = "";
  let i = 0;
  let interval = setInterval(() => {
    if (i < text.length) {
      emojiText.textContent += text[i];
      i++;
    } else {
      clearInterval(interval);
    }
  }, 60);
}

function setMood(level) {
  const moodBar = document.getElementById("moodBar");
  moodBar.style.width = `${level}%`;

  if (level > 60) moodBar.style.background = "limegreen";
  else if (level > 30) moodBar.style.background = "orange";
  else moodBar.style.background = "red";
}

function randomMood() {
  const emojis = ["😂", "😡", "😎", "😴", "🤓", "😱", "🤖"];
  const moods = [
    "LOL I'm cracking up!",
    "Hey! I'm angry!",
    "Cool as a cucumber 🥒",
    "Zzz... nap time",
    "Nerd mode activated!",
    "AHH! Spooked!",
    "01001101... I am robot"
  ];

  let i = Math.floor(Math.random() * emojis.length);
  emoji.textContent = emojis[i];
  typeText(moods[i]);
  speak(moods[i]);
  setMood(Math.floor(Math.random() * 100));
}

function cloneEmoji() {
  const army = document.getElementById("emojiArmy");
  let newEmoji = document.createElement("span");
  newEmoji.textContent = emoji.textContent;
  army.appendChild(newEmoji);
}