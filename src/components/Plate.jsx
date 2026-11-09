const INK = 'var(--plate-ink)';
const PAPER = 'var(--plate-paper)';
const GREY = 'var(--plate-grey)';
const SOFT = 'var(--plate-soft)';
const ACCENT = 'var(--plate-accent)';

function Freshy() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <rect width="92" height="400" fill={INK} />
      <rect x="20" y="26" width="52" height="10" fill={PAPER} />
      <rect x="20" y="56" width="40" height="6" fill={GREY} />
      <rect x="20" y="74" width="46" height="6" fill={GREY} />
      <rect x="20" y="92" width="34" height="6" fill={GREY} />
      <rect x="20" y="344" width="40" height="6" fill={GREY} />
      <rect x="120" y="26" width="150" height="16" fill={INK} />
      <rect x="120" y="56" width="84" height="6" fill={GREY} />
      <rect x="500" y="20" width="116" height="30" rx="15" fill={INK} />
      <circle cx="522" cy="35" r="5" fill={PAPER} />
      <rect x="538" y="31" width="58" height="8" fill={PAPER} />
      {[120, 292, 464].map((x) => (
        <g key={x}>
          <rect x={x} y="100" width="152" height="120" fill={GREY} />
          <circle cx={x + 24} cy="126" r="12" fill={SOFT} />
          <rect x={x + 16} y="176" width="86" height="8" fill={INK} />
          <rect x={x + 16} y="194" width="54" height="6" fill={SOFT} />
          <rect x={x + 112} y="190" width="24" height="14" fill={INK} />
        </g>
      ))}
      {[120, 292, 464].map((x) => (
        <g key={`b-${x}`}>
          <rect x={x} y="244" width="152" height="120" fill={GREY} />
          <circle cx={x + 24} cy="270" r="12" fill={SOFT} />
          <rect x={x + 16} y="320" width="86" height="8" fill={INK} />
          <rect x={x + 16} y="338" width="54" height="6" fill={SOFT} />
          <rect x={x + 112} y="334" width="24" height="14" fill={INK} />
        </g>
      ))}
      <circle cx="340" cy="160" r="26" fill={ACCENT} />
      <rect x="472" y="334" width="24" height="14" fill={ACCENT} />
    </>
  );
}

function Nabiz() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <rect width="640" height="54" fill={INK} />
      <rect x="24" y="22" width="110" height="10" fill={PAPER} />
      <circle cx="580" cy="27" r="6" fill={PAPER} />
      <circle cx="602" cy="27" r="6" fill={GREY} />
      <circle cx="624" cy="27" r="6" fill={GREY} />
      {[24, 180, 336, 492].map((x, i) => (
        <g key={x}>
          <rect x={x} y="78" width="124" height="298" fill={GREY} />
          <rect x={x + 14} y="94" width="64" height="8" fill={INK} />
          <rect x={x + 96} y="94" width="14" height="8" fill={SOFT} />
          <rect x={x + 12} y="122" width="100" height="52" fill={PAPER} />
          <rect x={x + 22} y="134" width="58" height="6" fill={INK} />
          <rect x={x + 22} y="148" width="76" height="4" fill={GREY} />
          <rect x={x + 22} y="158" width="44" height="4" fill={GREY} />
          <rect x={x + 12} y="186" width="100" height="52" fill={i === 1 ? ACCENT : PAPER} />
          <rect x={x + 22} y="198" width="58" height="6" fill={i === 1 ? PAPER : INK} />
          <rect x={x + 22} y="212" width="66" height="4" fill={i === 1 ? PAPER : GREY} />
          <rect x={x + 12} y="250" width="100" height="52" fill={PAPER} />
          <rect x={x + 22} y="262" width="48" height="6" fill={INK} />
          <rect x={x + 22} y="276" width="70" height="4" fill={GREY} />
          <rect x={x + 12} y="314" width="100" height="32" fill="none" stroke={SOFT} strokeWidth="2" />
        </g>
      ))}
    </>
  );
}

function GitStats() {
  const bars = [
    [270, 120, 26],
    [306, 86, 26],
    [342, 154, 26],
    [378, 64, 26],
    [414, 132, 26],
    [450, 42, 26],
    [486, 108, 26],
    [522, 78, 26],
    [558, 100, 26],
  ];
  const cells = [];
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 28; col += 1) {
      const hot = (row === 1 && col === 5) || (row === 2 && col === 12) || (row === 3 && col === 20);
      cells.push(
        <rect
          key={`${row}-${col}`}
          x={24 + col * 14}
          y={260 + row * 14}
          width="10"
          height="10"
          fill={hot ? ACCENT : col % 4 === 0 ? SOFT : GREY}
        />,
      );
    }
  }
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <circle cx="132" cy="126" r="66" fill={INK} />
      <rect x="100" y="212" width="64" height="8" fill={ACCENT} />
      <rect x="100" y="230" width="96" height="5" fill={GREY} />
      <rect x="100" y="242" width="72" height="5" fill={GREY} />
      {bars.map(([x, h, w], i) => (
        <rect key={x} x={x} y={296 - h} width={w} height={h} fill={i === 5 ? ACCENT : i === 7 ? INK : GREY} />
      ))}
      <line x1="248" y1="296" x2="596" y2="296" stroke={INK} strokeWidth="2" />
      {cells}
    </>
  );
}

function Secmece() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <g transform="rotate(-9 240 200)">
        <rect x="128" y="58" width="210" height="284" rx="6" fill={INK} />
        <rect x="150" y="82" width="166" height="12" fill={PAPER} />
        <rect x="150" y="108" width="112" height="6" fill={GREY} />
        <circle cx="233" cy="218" r="52" fill={ACCENT} />
        <rect x="150" y="300" width="80" height="6" fill={GREY} />
      </g>
      <g transform="rotate(8 410 200)">
        <rect x="306" y="58" width="210" height="284" rx="6" fill={PAPER} stroke={INK} strokeWidth="4" />
        <rect x="330" y="84" width="102" height="10" fill={INK} />
        <rect x="330" y="108" width="146" height="6" fill={GREY} />
        <rect x="330" y="122" width="118" height="6" fill={GREY} />
        <rect x="330" y="286" width="66" height="22" fill={ACCENT} />
        <circle cx="484" cy="98" r="12" fill={ACCENT} />
      </g>
      <rect x="250" y="350" width="140" height="6" fill={INK} />
      <rect x="292" y="364" width="56" height="4" fill={GREY} />
    </>
  );
}

function Mecrenas() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <circle cx="196" cy="146" r="92" fill={INK} />
      <path d="M96 400 C96 296 146 252 196 252 C246 252 296 296 296 400 Z" fill={INK} />
      <circle cx="252" cy="182" r="10" fill={ACCENT} />
      <rect x="352" y="72" width="220" height="16" fill={INK} />
      <rect x="352" y="104" width="150" height="7" fill={GREY} />
      <rect x="352" y="120" width="184" height="7" fill={GREY} />
      <line x1="352" y1="160" x2="600" y2="160" stroke={GREY} strokeWidth="2" />
      {[
        [190, 100],
        [216, 130],
        [242, 80],
      ].map(([y, w]) => (
        <g key={y}>
          <rect x="352" y={y} width={w} height="8" fill={SOFT} />
          <rect x="560" y={y} width="38" height="8" fill={INK} />
        </g>
      ))}
      <rect x="352" y="286" width="96" height="30" fill={ACCENT} />
      <rect x="460" y="286" width="96" height="30" fill="none" stroke={INK} strokeWidth="2" />
      <rect x="352" y="344" width="204" height="4" fill={GREY} />
    </>
  );
}

function Reno() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <rect width="640" height="46" fill={INK} />
      <rect x="24" y="18" width="120" height="10" fill={PAPER} />
      <circle cx="574" cy="23" r="6" fill={ACCENT} />
      <circle cx="598" cy="23" r="6" fill={GREY} />
      <path d="M74 232 L128 158 L344 158 L402 232 L566 232 L566 286 L74 286 Z" fill={INK} />
      <path d="M148 172 L204 172 L204 220 L116 220 Z" fill={PAPER} />
      <path d="M222 172 L318 172 L318 220 L222 220 Z" fill={PAPER} />
      <circle cx="170" cy="290" r="30" fill={INK} />
      <circle cx="170" cy="290" r="12" fill={PAPER} />
      <circle cx="480" cy="290" r="30" fill={INK} />
      <circle cx="480" cy="290" r="12" fill={PAPER} />
      <rect x="74" y="338" width="230" height="8" fill={GREY} />
      <rect x="74" y="356" width="160" height="6" fill={SOFT} />
      <rect x="416" y="338" width="150" height="26" fill={ACCENT} />
      <rect x="432" y="348" width="86" height="6" fill={PAPER} />
    </>
  );
}

function RagPdf() {
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <rect x="42" y="38" width="238" height="324" fill={GREY} />
      <rect x="66" y="66" width="124" height="12" fill={INK} />
      {[100, 114, 128, 152, 166, 180].map((y, i) => (
        <rect key={y} x="66" y={y} width={i % 3 === 0 ? 176 : 144} height="5" fill={SOFT} />
      ))}
      <rect x="66" y="214" width="96" height="8" fill={INK} />
      {[234, 248, 262].map((y) => (
        <rect key={y} x="66" y={y} width="160" height="5" fill={SOFT} />
      ))}
      {[
        [250, 104],
        [274, 128],
        [298, 152],
        [322, 176],
        [346, 200],
      ].map(([x, y], i) => (
        <circle key={x} cx={x} cy={y} r={i === 2 ? 9 : 5} fill={i === 2 ? ACCENT : INK} />
      ))}
      <rect x="332" y="54" width="266" height="176" rx="4" fill={PAPER} stroke={INK} strokeWidth="3" />
      <rect x="356" y="80" width="126" height="9" fill={INK} />
      {[106, 122, 138, 154].map((y, i) => (
        <rect key={y} x="356" y={y} width={i === 3 ? 132 : 196} height="5" fill={GREY} />
      ))}
      <rect x="356" y="184" width="72" height="20" fill={ACCENT} />
      <rect x="356" y="266" width="242" height="96" rx="4" fill={INK} />
      <rect x="382" y="292" width="130" height="6" fill={PAPER} />
      <rect x="382" y="310" width="176" height="5" fill={GREY} />
      <rect x="382" y="324" width="146" height="5" fill={GREY} />
      <circle cx="562" cy="288" r="14" fill={ACCENT} />
    </>
  );
}

function Finance() {
  const bars = [
    [44, 92],
    [96, 130],
    [148, 70],
    [200, 168],
    [252, 112],
    [304, 196],
    [356, 148],
  ];
  return (
    <>
      <rect width="640" height="400" fill={PAPER} />
      <rect x="24" y="24" width="148" height="12" fill={INK} />
      <rect x="24" y="46" width="92" height="5" fill={GREY} />
      {bars.map(([x, h], i) => (
        <rect key={x} x={x} y={310 - h} width="34" height={h} fill={i === 3 ? INK : i === 5 ? ACCENT : GREY} />
      ))}
      <line x1="24" y1="310" x2="414" y2="310" stroke={INK} strokeWidth="3" />
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <rect x="452" y={69 + i * 44} width="128" height="8" fill={i === 2 ? INK : GREY} />
          <rect x="592" y={69 + i * 44} width="24" height="8" fill={i === 2 ? ACCENT : SOFT} />
          <line x1="452" y1={89 + i * 44} x2="616" y2={89 + i * 44} stroke={SOFT} strokeWidth="2" />
        </g>
      ))}
      <circle cx="548" cy="330" r="36" fill={ACCENT} />
      <circle cx="548" cy="330" r="20" fill="none" stroke={PAPER} strokeWidth="3" />
    </>
  );
}

const plates = {
  freshy: Freshy,
  nabiz: Nabiz,
  gitstats: GitStats,
  secmece: Secmece,
  mecrenas: Mecrenas,
  reno: Reno,
  ragpdf: RagPdf,
  finance: Finance,
};

export default function Plate({ kind }) {
  const Graphic = plates[kind];
  if (!Graphic) return null;
  return (
    <svg
      className="plate-svg"
      viewBox="0 0 640 400"
      preserveAspectRatio="xMidYMid meet"
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <Graphic />
    </svg>
  );
}
