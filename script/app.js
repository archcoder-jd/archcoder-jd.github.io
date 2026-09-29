
const scenes = [
  `<svg viewBox="0 0 400 400">
    <rect class="st draw" x="60" y="90" width="130" height="220" rx="8"/>
    <line class="st draw" x1="80" y1="120" x2="170" y2="120"/>
    <circle class="st" cx="125" cy="270" r="14"/>
    <rect class="st draw" x="230" y="70" width="110" height="80"/>
    <rect class="fa" x="255" y="92" width="26" height="26"/>
    <rect class="st" x="292" y="92" width="30" height="12"/>
    <rect class="st" x="292" y="110" width="30" height="12"/>
    <rect class="st draw" x="240" y="185" width="90" height="22"/>
    <rect class="fi" x="240" y="232" width="60" height="16"/>
    <path class="sa draw" d="M190 150 C215 150 215 110 230 110"/>
    <path class="sa draw" d="M190 200 C215 200 220 196 240 196"/>
    <path class="sa draw" d="M190 240 C215 240 220 240 240 240"/>
    <text class="tx" x="60" y="345">01001000 01010100 01001101 01001100</text>
  </svg>`,
  (() => { let c = ''; const hol = [4, 16, 25], bk = [2, 8, 9, 13, 19, 20, 22, 27, 30];
    for (let i = 0; i < 35; i++) { const x = 70 + (i % 7) * 38, y = 130 + Math.floor(i / 7) * 38;
      if (hol.includes(i)) c += `<rect class="fi" x="${x}" y="${y}" width="32" height="32" rx="4"/><line x1="${x+7}" y1="${y+7}" x2="${x+25}" y2="${y+25}" stroke="var(--paper)" stroke-width="2.5"/>`;
      else if (bk.includes(i)) c += `<rect class="fa" x="${x}" y="${y}" width="32" height="32" rx="4"/>`;
      else c += `<rect class="st" x="${x}" y="${y}" width="32" height="32" rx="4" stroke-width="1.5"/>`; }
    return `<svg viewBox="0 0 400 400"><rect class="st draw" x="55" y="70" width="290" height="270" rx="12"/>
      <line class="st" x1="55" y1="112" x2="345" y2="112"/><text class="tb" x="72" y="97">Training Centre bookings</text>${c}
      <rect class="fa" x="72" y="355" width="12" height="12"/><text class="tx" x="90" y="366">Booked</text>
      <rect class="fi" x="160" y="355" width="12" height="12"/><text class="tx" x="178" y="366">Holiday, blocked</text></svg>`; })(),
  (() => { const n = [["Government",90,80], ["Fitness",310,80],["Shipping",50,220],["Oil & Gas",330,220],["Food",200,335]];
    let l = '', d = ''; n.forEach(([t, x, y]) => { l += `<path class="sa draw" d="M200 200 L${x} ${y}"/>`;
      d += `<circle cx="${x}" cy="${y}" r="9" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/><text class="tb" x="${x}" y="${y > 300 ? y + 30 : y - 18}" text-anchor="middle">${t}</text>`; });
    return `<svg viewBox="0 0 400 400">${l}<rect x="160" y="155" width="80" height="90" rx="8" fill="var(--panel)" stroke="var(--ink)" stroke-width="2.5"/>
      <line class="st" x1="170" y1="185" x2="230" y2="185"/><line class="st" x1="170" y1="215" x2="230" y2="215"/>
      <circle class="fa" cx="222" cy="170" r="4"/><circle class="fa" cx="222" cy="200" r="4"/><circle class="fi" cx="222" cy="230" r="4"/>${d}</svg>`; })(),
  `<svg viewBox="0 0 400 400">
    <rect class="st draw" x="125" y="45" width="150" height="310" rx="24"/>
    <line class="st" x1="180" y1="62" x2="220" y2="62"/>
    <rect x="145" y="95" width="110" height="34" rx="4" fill="var(--panel)" stroke="var(--ink)" stroke-width="1.5"/>
    <text class="tx" x="153" y="117">A heist film, but funny</text>
    <rect class="fa" x="160" y="145" width="95" height="60" rx="4"/>
    <rect x="172" y="158" width="16" height="22" fill="var(--paper)"/>
    <rect x="194" y="158" width="16" height="22" fill="var(--paper)"/>
    <rect x="216" y="158" width="16" height="22" fill="var(--paper)"/>
    <line x1="172" y1="192" x2="236" y2="192" stroke="var(--paper)" stroke-width="3" stroke-linecap="round"/>
    <path class="sa draw" d="M145 250 h110 M145 272 h80 M145 294 h95"/>
    <circle class="fi" cx="200" cy="330" r="7"/>
    <text class="tb" x="40" y="200">Swift</text><text class="tb" x="300" y="130">Java</text><text class="tb" x="300" y="290">AI</text>
  </svg>`
];
const frame = document.getElementById('frame'), rail = document.getElementById('rail');
const chapters = [...document.querySelectorAll('.chapter')];

frame.innerHTML = scenes.map((s, i) => `<div class="scene" data-i="${i}">${s}<?div>`).join('');

document.querySelectorAll('.inline-fig').forEach(f => { 
  f.innerHTML = `<div class="scene">${scenes[f.dataset.fig]}</div>`;
});