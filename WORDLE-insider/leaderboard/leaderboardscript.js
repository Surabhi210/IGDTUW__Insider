const todayData = [
  { name: "Riya S.", pts: 5, tries: "2/6", time: "1:24", rank: "1" },
  { name: "WordleQueen", pts: 4, tries: "3/6", time: "2:07", rank: "2" },
  { name: "CSE_Batch25", pts: 4, tries: "3/6", time: "3:41", rank: "3" },
  { name: "Priya N.", pts: 3, tries: "4/6", time: "4:15", rank: "4" },
  { name: "Aisha K.", pts: "—", tries: "—", time: "Playing...", you: true, rank: "5" },
  { name: "Shreya M.", pts: 2, tries: "5/6", time: "6:30", rank: "6" },
  { name: "Tanisha G.", pts: 0, tries: "6/6", time: "9:58", rank: "7" }
];

const allTimeData = [
  { name: "Riya S.", total: 142, played: 31, win: "94%", streak: 14, rank: "1" },
  { name: "WordleQueen", total: 118, played: 28, win: "89%", streak: 9, rank: "2" },
  { name: "Priya N.", total: 97, played: 25, win: "84%", streak: 7, rank: "3" },
  { name: "CSE_Batch25", total: 81, played: 22, win: "81%", streak: 5, rank: "4" },
  { name: "Shreya M.", total: 64, played: 20, win: "75%", streak: 2, rank: "5" },
  { name: "Aisha K.", total: 19, played: 12, win: "75%", streak: 4, you: true, rank: "6" },
  { name: "Tanisha G.", total: 11, played: 8, win: "62%", streak: 0, rank: "7" }
];

// Render Today
const todayList = document.getElementById("today-list");
todayData.forEach((p) => {
  const isPlaying = p.time === "Playing...";
  todayList.innerHTML += `
    <div class="row today-grid ${p.you ? 'current-user' : ''}">
      <div>${p.rank}</div>
      <div class="player">
        <span class="player-name">${p.name}</span>${p.you ? '<span class="you">YOU</span>' : ''}
      </div>
      <div class="${p.pts !== '—' ? 'pts-green' : ''}">${p.pts}</div>
      <div>${p.tries}</div>
      <div class="${isPlaying ? 'playing-txt' : ''}">${p.time}</div>
    </div>
  `;
});

// Render All-time
const allList = document.getElementById("alltime-list");
allTimeData.forEach((p) => {
  allList.innerHTML += `
    <div class="row alltime-grid">
      <div>${p.rank}</div>
      <div class="player">
        <span class="player-name">${p.name}</span>${p.you ? '<span class="you">YOU</span>' : ''}
        <span class="streak-label">Streak: ${p.streak}</span>
      </div>
      <div class="pts-green">${p.total}</div>
      <div>${p.played}</div>
      <div>${p.win}</div>
    </div>
  `;
});

// Tab Switching Logic
document.querySelectorAll(".tab").forEach(btn => {
  btn.onclick = () => {
    // Switch active tab button
    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // Switch visible content
    document.querySelectorAll(".content").forEach(c => c.classList.remove("active"));
    document.getElementById(btn.dataset.tab).classList.add("active");
  };
});