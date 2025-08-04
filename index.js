const pickFighters = document.getElementById("pick-fighters");
let stageEl = document.getElementById("stage");
let fighters = [
    "🐍", "🐸", "🐜", "🦋", "🕷️"
]

const popup = document.getElementById("winner-popup");
const winnerMsg = document.getElementById("winner-message")
const winnerDisplay = document.getElementById("winner-display");


// Fighters selection
pickFighters.addEventListener('click', function() {
let randomFighterOne = fighters[Math.floor(Math.random() * fighters.length)];
let randomFighterTwo = fighters[Math.floor(Math.random() * fighters.length)];


stageEl.textContent = `${randomFighterOne} VS ${randomFighterTwo}`;

setTimeout(() => {
    const winner = Math.random() > 0.5 ? randomFighterOne : randomFighterTwo;
// A fighter won
    winnerMsg.innerHTML = `
        <div>
            <h1>Yo! ${winner} won! 🎉</h1>
            <img src="https://media.giphy.com/media/26tOZ42Mg6pbTUPHW/giphy.gif" alt="Party Pop" class="popper-gif"/>
        </div>
    
    `;
    winnerDisplay.textContent = winner;
    popup.classList.remove("hidden"); 

    setTimeout(() => {
            popup.classList.add("hidden");
        }, 4000);
}, 2000);
})