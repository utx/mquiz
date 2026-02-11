import React, { useState, useEffect } from 'react';

// ==================== DATA IMPORTS ====================
import { QUESTIONS } from './data/questions';
import { SHOP_ITEMS } from './data/items';
import { PRIZE_LADDER, CATEGORIES } from './data/constants';

// ==================== HELPER: MONEY FORMATTER ====================
const formatMoney = (n) => {
  if (n >= 1e9) return `$${(n/1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n/1e3).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
};

// ==================== 8-BIT ART ENGINE (UPDATED v7.0) ====================
const PixelArt = ({ type, size = 50, className = "" }) => {
  const style = { width: size, height: size, imageRendering: 'pixelated', shapeRendering: 'crispEdges' };
  
  // PALETTE
  const c = {
    skin: "#FFDCB1",
    wood: "#8B4513",
    darkWood: "#5D4037",
    gold: "#FFD700",
    steel: "#94A3B8",
    black: "#1F2937",
    white: "#F8FAFC",
    red: "#EF4444",
    blue: "#3B82F6",
    green: "#22C55E",
    glass: "#60A5FA",
    screen: "#111",
    leaves: "#4ADE80"
  };

  // --- DYNAMIC COLOR LOGIC ---
  const nameLower = type.toLowerCase();
  let dynamicColor = c.blue; // Default
  if (nameLower.includes('red')) dynamicColor = "#EF4444";
  if (nameLower.includes('blue')) dynamicColor = "#3B82F6";
  if (nameLower.includes('green')) dynamicColor = "#22C55E";
  if (nameLower.includes('pink')) dynamicColor = "#EC4899";
  if (nameLower.includes('black')) dynamicColor = "#111";
  if (nameLower.includes('white')) dynamicColor = "#F1F5F9";
  if (nameLower.includes('gray') || nameLower.includes('grey')) dynamicColor = "#64748B";
  if (nameLower.includes('brown')) dynamicColor = "#78350F";
  if (nameLower.includes('blonde')) dynamicColor = "#FACC15";

  // --- ASSETS LIBRARY ---
  const assets = {
    // === CUSTOMIZATION ===
    hair: (
      <svg viewBox="0 0 24 24" style={style}>
        {/* Hair Shape */}
        <path d="M4 8h16v6h-2v2h-2v-2H8v2H6v-2H4z" fill={dynamicColor} />
        <rect x="4" y="6" width="16" height="2" fill={dynamicColor} />
        <rect x="6" y="4" width="12" height="2" fill={dynamicColor} />
      </svg>
    ),
    eyes: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="2" y="6" width="20" height="12" fill={c.skin} rx="4" />
        {nameLower.includes('cool') ? (
          // Sunglasses
          <g>
             <rect x="4" y="10" width="16" height="4" fill="black" />
             <rect x="5" y="11" width="5" height="1" fill="#444" />
             <rect x="14" y="11" width="5" height="1" fill="#444" />
          </g>
        ) : (
          // Normal Eyes
          <g>
            <rect x="6" y="10" width="4" height="4" fill="white" />
            <rect x="7" y="11" width="2" height="2" fill="black" />
            <rect x="14" y="10" width="4" height="4" fill="white" />
            <rect x="15" y="11" width="2" height="2" fill="black" />
          </g>
        )}
      </svg>
    ),
    shirt: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="4" y="6" width="16" height="14" fill={dynamicColor} rx="2" />
        <path d="M8 6 L12 10 L16 6" fill="none" stroke="rgba(0,0,0,0.2)" strokeWidth="1" />
        <rect x="9" y="8" width="6" height="8" fill="rgba(255,255,255,0.1)" />
      </svg>
    ),
    pants: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="6" y="4" width="12" height="4" fill={dynamicColor} />
        <rect x="6" y="8" width="5" height="12" fill={dynamicColor} />
        <rect x="13" y="8" width="5" height="12" fill={dynamicColor} />
        <rect x="11" y="8" width="2" height="4" fill={dynamicColor} /> {/* Crotch */}
        <rect x="6" y="20" width="5" height="2" fill="#111" /> {/* Shoes */}
        <rect x="13" y="20" width="5" height="2" fill="#111" />
      </svg>
    ),

    // === FURNITURE ===
    bed: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="2" y="10" width="20" height="10" fill={c.wood} rx="2"/> {/* Frame */}
        <rect x="2" y="8" width="2" height="4" fill={c.wood} /> {/* Headboard post */}
        <rect x="20" y="8" width="2" height="4" fill={c.wood} />
        <rect x="4" y="12" width="16" height="6" fill="#60A5FA" /> {/* Blanket */}
        <rect x="4" y="12" width="16" height="2" fill="white" /> {/* Sheet */}
        <rect x="5" y="9" width="6" height="3" fill="white" rx="1" /> {/* Pillow */}
      </svg>
    ),
    couch: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="2" y="10" width="20" height="10" fill={c.darkWood} rx="2" /> {/* Base */}
        <rect x="2" y="12" width="4" height="4" fill={c.red} /> {/* Arm */}
        <rect x="18" y="12" width="4" height="4" fill={c.red} /> {/* Arm */}
        <rect x="6" y="8" width="12" height="12" fill="#EF4444" /> {/* Seat */}
        <rect x="6" y="6" width="12" height="4" fill="#B91C1C" /> {/* Back */}
      </svg>
    ),
    chair: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="10" y="12" width="4" height="10" fill="black" /> {/* Stand */}
        <rect x="6" y="20" width="12" height="2" fill="black" /> {/* Base legs */}
        <rect x="6" y="10" width="12" height="2" fill="#22C55E" /> {/* Seat */}
        <rect x="7" y="4" width="10" height="8" fill="#166534" /> {/* Back */}
        <rect x="8" y="6" width="8" height="4" fill="#22C55E" /> {/* Cushion */}
      </svg>
    ),
    tv: (
      <svg viewBox="0 0 24 24" style={style}>
         <rect x="2" y="4" width="20" height="14" fill="#111" rx="2" /> {/* Frame */}
         <rect x="4" y="6" width="16" height="10" fill="#333" /> {/* Screen Off */}
         <rect x="8" y="18" width="8" height="4" fill="#111" /> {/* Stand */}
         <rect x="6" y="21" width="12" height="1" fill="#444" />
      </svg>
    ),
    pc: (
      <svg viewBox="0 0 24 24" style={style}>
         {/* Monitor */}
         <rect x="2" y="4" width="14" height="10" fill="#111" />
         <rect x="3" y="5" width="12" height="8" fill="#60A5FA" />
         <rect x="6" y="14" width="6" height="4" fill="#111" /> {/* Stand */}
         {/* Tower */}
         <rect x="17" y="6" width="5" height="12" fill="#111" />
         <rect x="18" y="8" width="1" height="8" fill="#EF4444" /> {/* LED Strip */}
      </svg>
    ),
    bookshelf: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="4" y="2" width="16" height="20" fill={c.wood} />
        <rect x="6" y="6" width="12" height="2" fill={c.darkWood} /> {/* Shelf 1 */}
        <rect x="6" y="12" width="12" height="2" fill={c.darkWood} /> {/* Shelf 2 */}
        <rect x="6" y="18" width="12" height="2" fill={c.darkWood} /> {/* Shelf 3 */}
        {/* Books */}
        <rect x="7" y="8" width="2" height="4" fill={c.red} />
        <rect x="10" y="8" width="2" height="4" fill={c.blue} />
        <rect x="13" y="14" width="2" height="4" fill={c.green} />
      </svg>
    ),
    piano: (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M4 6h16v12H4z" fill="black" /> {/* Body */}
        <rect x="4" y="14" width="16" height="4" fill="white" /> {/* Keys base */}
        <rect x="5" y="14" width="1" height="2" fill="black" />
        <rect x="7" y="14" width="1" height="2" fill="black" />
        <rect x="10" y="14" width="1" height="2" fill="black" />
        <rect x="12" y="14" width="1" height="2" fill="black" />
        <rect x="14" y="14" width="1" height="2" fill="black" />
        <rect x="6" y="18" width="2" height="4" fill="black" /> {/* Leg */}
        <rect x="16" y="18" width="2" height="4" fill="black" /> {/* Leg */}
      </svg>
    ),
    fishtank: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="4" y="6" width="16" height="10" fill="#60A5FA" opacity="0.5" /> {/* Water */}
        <rect x="4" y="6" width="16" height="10" fill="none" stroke="#3B82F6" strokeWidth="2" /> {/* Frame */}
        <rect x="6" y="14" width="12" height="2" fill="#EAB308" /> {/* Sand */}
        <rect x="8" y="10" width="2" height="1" fill="#F97316" /> {/* Fish 1 */}
        <rect x="14" y="8" width="2" height="1" fill="#F97316" /> {/* Fish 2 */}
      </svg>
    ),
    
    // === OUTFITS/MISC ===
    crown: (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M4 16h16v4H4z" fill={c.gold} />
        <path d="M4 16l4-8 4 4 4-4 4 8H4z" fill={c.gold} />
        <rect x="8" y="6" width="2" height="2" fill={c.red} />
        <rect x="14" y="6" width="2" height="2" fill={c.red} />
      </svg>
    ),
    sword: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(45)">
        <rect x="10" y="14" width="4" height="8" fill={c.wood} />
        <rect x="8" y="12" width="8" height="2" fill={c.gold} />
        <rect x="10" y="2" width="4" height="10" fill={c.steel} />
      </svg>
    ),
    wand: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(15)">
        <rect x="10" y="8" width="4" height="14" fill={c.wood} />
        <path d="M12 2l2 4-2 2-2-2z" fill="#4ADE80" />
      </svg>
    ),
    guitar: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(-15)">
        <rect x="10" y="2" width="4" height="10" fill={c.wood} />
        <path d="M8 12h8v8a4 4 0 01-8 0v-8z" fill={c.red} />
        <circle cx="12" cy="16" r="2" fill={c.black} />
      </svg>
    ),
    generic: (
       <svg viewBox="0 0 24 24" style={style}>
         <rect x="4" y="4" width="16" height="16" fill="#475569" rx="4" />
         <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12" fontFamily="monospace">?</text>
       </svg>
    )
  };

  // --- SELECTION LOGIC ---
  if (nameLower.includes('hair')) return assets.hair;
  if (nameLower.includes('eyes')) return assets.eyes;
  if (nameLower.includes('shirt')) return assets.shirt;
  if (nameLower.includes('pants')) return assets.pants;
  
  if (nameLower.includes('bed')) return assets.bed;
  if (nameLower.includes('couch') || nameLower.includes('sofa')) return assets.couch;
  if (nameLower.includes('chair')) return assets.chair;
  if (nameLower.includes('tv') || nameLower.includes('screen')) return assets.tv;
  if (nameLower.includes('pc') || nameLower.includes('computer')) return assets.pc;
  if (nameLower.includes('shelf') || nameLower.includes('book')) return assets.bookshelf;
  if (nameLower.includes('piano')) return assets.piano;
  if (nameLower.includes('tank') || nameLower.includes('fish')) return assets.fishtank;

  if (nameLower.includes('crown')) return assets.crown;
  if (nameLower.includes('sword')) return assets.sword;
  if (nameLower.includes('wand')) return assets.wand;
  if (nameLower.includes('guitar')) return assets.guitar;

  return assets.generic;
};

// ==================== VISUAL COMPONENTS ====================

const RoamingPet = ({ type }) => {
  const [pos, setPos] = useState({ x: 50, y: 80 });
  const [direction, setDirection] = useState(1);
  const emojis = { dog: '🐕', cat: '🐈', dragon: '🐉', phoenix: '🔥', robot: '🤖', unicorn: '🦄' };

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos(prev => {
        const newX = Math.max(10, Math.min(90, prev.x + (Math.random() - 0.5) * 40));
        setDirection(newX > prev.x ? -1 : 1); 
        return { x: newX, y: 80 + (Math.random() * 5) };
      });
    }, 2500);
    return () => clearInterval(moveInterval);
  }, []);

  return (
    <div style={{ position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, transition: 'all 2.5s ease-in-out', zIndex: 20, transform: `scaleX(${direction})` }}>
      <div style={{ fontSize: '3rem', filter: 'drop-shadow(0 4px 2px rgba(0,0,0,0.3))' }}>{emojis[type] || '🐾'}</div>
    </div>
  );
};

const PlayerAvatar = ({ equipped, size = 150 }) => {
  // Determine shirt color
  let shirtColor = "#3B82F6"; 
  if (equipped.outfits?.includes('red')) shirtColor = "#EF4444";
  if (equipped.outfits?.includes('green')) shirtColor = "#22C55E";
  if (equipped.outfits?.includes('black')) shirtColor = "#1F2937";
  if (equipped.outfits?.includes('white')) shirtColor = "#F8FAFC";
  if (equipped.outfits?.includes('gray')) shirtColor = "#64748B";

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
       {/* Body Base */}
       <div className="absolute bottom-0 left-[25%] w-[50%] h-[35%] bg-slate-800" /> {/* Legs */}
       <div className="absolute bottom-[35%] left-[20%] w-[60%] h-[35%] rounded-sm" style={{ backgroundColor: shirtColor }} /> {/* Torso */}
       <div className="absolute bottom-[70%] left-[25%] w-[50%] h-[30%] bg-[#FFDCB1] rounded-lg" /> {/* Head */}

       {/* Facial Features */}
       <div className="absolute bottom-[80%] left-[35%] w-[10%] h-[5%] bg-black" /> {/* Eye L */}
       <div className="absolute bottom-[80%] left-[55%] w-[10%] h-[5%] bg-black" /> {/* Eye R */}

       {/* Hats/Accessories */}
       {equipped.outfits?.includes('crown') && <div className="absolute -top-6 left-2"><PixelArt type="crown" size={size/1.5} /></div>}
       
       {/* Weapons */}
       {equipped.weapons && (
         <div className="absolute top-1/2 -right-8" style={{ transform: 'translateY(-50%)' }}>
           <PixelArt type={equipped.weapons} size={size * 0.7} />
         </div>
       )}
    </div>
  );
};

// ==================== SCREENS ====================

const Casino = ({ playerData, updateCoins, onClose }) => {
  const [bet, setBet] = useState(0);
  const [phase, setPhase] = useState('betting'); 
  const [streak, setStreak] = useState(0);
  const [q, setQ] = useState(null);
  const [msg, setMsg] = useState("");
  const [sessionUsed, setSessionUsed] = useState([]);

  const getRandomGlobalQuestion = () => {
    const allCats = Object.keys(QUESTIONS);
    const randCat = allCats[Math.floor(Math.random() * allCats.length)];
    const diffs = ['easy', 'medium', 'hard'];
    const randDiff = diffs[Math.floor(Math.random() * diffs.length)];
    const bank = QUESTIONS[randCat]?.[randDiff] || QUESTIONS.trivia.easy;
    const available = bank.filter(item => !sessionUsed.includes(item.q));
    return available.length > 0 ? available[Math.floor(Math.random() * available.length)] : bank[0];
  };

  const startGauntlet = () => {
    if (bet <= 0 || bet > playerData.coins) { setMsg("Invalid bet!"); return; }
    updateCoins(-bet); setStreak(0); setMsg(""); setSessionUsed([]); loadNextQuestion(); setPhase('playing');
  };

  const loadNextQuestion = () => {
    const newQ = getRandomGlobalQuestion();
    setSessionUsed(prev => [...prev, newQ.q]); setQ(newQ);
  };

  const handleAnswer = (idx) => {
    if (idx === q.a) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak === 5) {
        const winnings = bet * 5;
        updateCoins(winnings); 
        setMsg(`JACKPOT! +${formatMoney(winnings)}`);
        setPhase('result');
      } else {
        loadNextQuestion();
      }
    } else {
      setMsg(`LOST! -${formatMoney(bet)}`);
      setPhase('result');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="bg-purple-900 border-4 border-yellow-400 p-8 rounded-2xl w-full max-w-lg text-center shadow-[0_0_50px_rgba(250,204,21,0.5)]">
        <h2 className="text-4xl font-black text-yellow-400 mb-2">🎰 THE GAUNTLET</h2>
        <p className="text-purple-200 mb-6 text-sm">5 QUESTIONS. 5X PAYOUT.</p>
        
        {phase === 'betting' && (
          <div className="space-y-4">
            <p className="text-white">Bank: {formatMoney(playerData.coins)}</p>
            <input type="number" className="w-full p-4 text-black text-2xl font-bold rounded text-center" placeholder="Bet Amount" onChange={(e) => setBet(Number(e.target.value))} />
            {msg && <p className="text-red-400 font-bold">{msg}</p>}
            <div className="flex gap-4"><button onClick={startGauntlet} className="bg-green-500 text-black px-6 py-4 rounded-xl font-bold w-full">START</button><button onClick={onClose} className="bg-red-600 text-white px-6 py-4 rounded-xl font-bold w-full">EXIT</button></div>
          </div>
        )}

        {phase === 'playing' && q && (
          <div>
            <div className="flex justify-between mb-4"><span className="text-yellow-400 font-bold">STREAK: {streak}/5</span><span className="text-green-400 font-bold">POT: {formatMoney(bet * 5)}</span></div>
            <div className="bg-white text-black p-4 rounded-xl font-bold text-lg mb-6 border-4 border-blue-500">{q.q}</div>
            <div className="grid grid-cols-2 gap-4">{q.o.map((opt, i) => <button key={i} onClick={() => handleAnswer(i)} className="bg-slate-800 hover:bg-yellow-400 hover:text-black border-2 border-slate-600 p-4 rounded-lg font-bold">{opt}</button>)}</div>
          </div>
        )}

        {phase === 'result' && (
          <div className="space-y-6">
            <h3 className={`text-3xl font-black ${msg.includes('JACKPOT') ? 'text-green-400' : 'text-red-500'}`}>{msg}</h3>
            {msg.includes('LOST') && <p className="text-white">Answer: {q.o[q.a]}</p>}
            <button onClick={() => setPhase('betting')} className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold">PLAY AGAIN</button>
            <button onClick={onClose} className="block w-full text-slate-400 hover:text-white mt-4">Return to Menu</button>
          </div>
        )}
      </div>
    </div>
  );
};

const House = ({ playerData, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-slate-900 flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-[80vh] bg-[#F0E68C] border-8 border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 w-full h-[70%] bg-[#FFDAB9] border-b-4 border-slate-400"></div>
        <div className="absolute bottom-0 w-full h-[30%] bg-[#8B4513]"></div>
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-50 font-bold border-2 border-white">EXIT HOUSE</button>

        {playerData.ownedItems?.furniture?.map((item, i) => (
          <div key={i} className="absolute bottom-[20%] drop-shadow-lg" style={{ left: `${10 + (i * 20)}%` }}>
             <PixelArt type={item} size={100} />
          </div>
        ))}

        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 z-10 hover:scale-110 transition">
          <PlayerAvatar equipped={playerData.equippedItems} size={180} />
        </div>

        {playerData.ownedItems?.pets?.map((pet, i) => <RoamingPet key={i} type={pet} />)}
      </div>
    </div>
  );
};

const Shop = ({ playerData, onBuy, onClose }) => {
  const [tab, setTab] = useState('outfits');
  const tabs = ['outfits', 'weapons', 'pets', 'furniture'];

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold text-yellow-400">🛒 SHOP</h2><button onClick={onClose} className="text-white text-2xl">❌</button></div>
      <div className="flex gap-2 mb-4">{tabs.map(t => <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded font-bold ${tab === t ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'}`}>{t.toUpperCase()}</button>)}</div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto">
        {(SHOP_ITEMS[tab] || []).map(item => {
          const owned = playerData.ownedItems?.[tab]?.includes(item.id);
          return (
            <div key={item.id} className="bg-slate-800 p-4 rounded border border-slate-700 flex flex-col items-center hover:bg-slate-750 transition group">
              <div className="mb-3 p-4 bg-slate-900 rounded-lg border border-slate-600 group-hover:border-yellow-400 transition">
                {/* Dynamically Render the Correct Pixel Art */}
                <PixelArt type={item.id} size={80} />
              </div>
              <div className="text-white font-bold text-center mb-1">{item.name}</div>
              <div className="text-yellow-400 text-sm mb-2">{formatMoney(item.price)}</div>
              <button onClick={() => !owned && onBuy(tab, item)} disabled={owned || playerData.coins < item.price} className={`w-full py-2 rounded font-bold text-sm ${owned ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'} ${playerData.coins < item.price && !owned ? 'opacity-50' : ''}`}>
                {owned ? 'OWNED' : 'BUY'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ==================== MAIN APP ====================

function App() {
  const [screen, setScreen] = useState('menu');
  const [playerData, setPlayerData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('millionaireV10')) || {
        coins: 50000, 
        ownedItems: { outfits: [], weapons: [], pets: [], furniture: [] },
        equippedItems: { outfits: null, weapons: null },
      };
    } catch { return { coins: 0, ownedItems: {}, equippedItems: {} }; }
  });
  const [gameState, setGameState] = useState({ level: 0, category: null, question: null, used: [] });

  useEffect(() => { localStorage.setItem('millionaireV10', JSON.stringify(playerData)); }, [playerData]);

  const startGame = (cat) => { setScreen('play'); setGameState({ level: 0, category: cat, question: getQuestion(0, cat, []), used: [] }); };
  const getQuestion = (lvl, cat, used) => {
    const diff = lvl < 5 ? 'easy' : lvl < 10 ? 'medium' : 'hard';
    const bank = QUESTIONS[cat]?.[diff] || QUESTIONS.trivia[diff];
    const available = bank.filter(q => !used.includes(q.q));
    return available.length ? available[Math.floor(Math.random() * available.length)] : bank[0];
  };
  const handleGameAnswer = (idx) => {
    if (idx === gameState.question.a) {
      if (gameState.level >= 14) { setPlayerData(p => ({ ...p, coins: p.coins + 1000000 })); setScreen('won'); }
      else { const next = gameState.level + 1; setGameState(prev => ({ ...prev, level: next, question: getQuestion(next, prev.category, [...prev.used, prev.question.q]) })); }
    } else { setScreen('lost'); }
  };
  const buyItem = (cat, item) => {
    if (playerData.coins >= item.price) {
      setPlayerData(p => {
        const newOwned = { ...p.ownedItems, [cat]: [...(p.ownedItems[cat] || []), item.id] };
        const newEquipped = (cat === 'outfits' || cat === 'weapons') ? { ...p.equippedItems, [cat]: item.id } : p.equippedItems;
        return { ...p, coins: p.coins - item.price, ownedItems: newOwned, equippedItems: newEquipped };
      });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden select-none">
      {screen === 'menu' && (
        <div className="flex flex-col items-center justify-center h-screen space-y-6 relative">
          <h1 className="text-5xl font-black text-yellow-400 drop-shadow-lg">MILLIONAIRE CITY</h1>
          <div className="bg-slate-800 p-4 rounded-xl border-4 border-blue-500 shadow-xl flex items-center gap-4">
             <div className="text-green-400 font-mono text-2xl font-bold">{formatMoney(playerData.coins)}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 w-full max-w-md px-4">{CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => startGame(cat.id)} className={`p-4 rounded-xl bg-gradient-to-r ${cat.color} font-bold hover:scale-105 transition shadow-lg`}>{cat.icon} {cat.name}</button>
            ))}</div>
          <div className="flex gap-4">
            <button onClick={() => setScreen('house')} className="px-6 py-3 bg-green-600 rounded-lg font-bold shadow-lg border-b-4 border-green-800 hover:translate-y-1 transition">🏠 HOUSE</button>
            <button onClick={() => setScreen('shop')} className="px-6 py-3 bg-blue-600 rounded-lg font-bold shadow-lg border-b-4 border-blue-800 hover:translate-y-1 transition">🛒 SHOP</button>
            <button onClick={() => setScreen('casino')} className="px-6 py-3 bg-purple-600 rounded-lg font-bold shadow-lg border-b-4 border-purple-800 hover:translate-y-1 transition">🎰 CASINO</button>
          </div>
        </div>
      )}
      {screen === 'play' && gameState.question && (
        <div className="flex flex-col items-center h-screen p-4 max-w-2xl mx-auto">
          <div className="flex justify-between w-full mb-8 text-xl font-bold"><span className="text-yellow-400">Level {gameState.level + 1}</span><span className="text-green-400">{formatMoney(PRIZE_LADDER[gameState.level])}</span></div>
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-blue-400 w-full mb-8 text-center text-2xl shadow-lg">{gameState.question.q}</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">{gameState.question.o.map((opt, i) => <button key={i} onClick={() => handleGameAnswer(i)} className="p-6 bg-slate-700 border-2 border-slate-600 rounded-xl hover:bg-yellow-500 hover:text-black font-bold transition text-left">{opt}</button>)}</div>
        </div>
      )}
      {/* OVERLAYS */}
      {screen === 'house' && <House playerData={playerData} onClose={() => setScreen('menu')} />}
      {screen === 'shop' && <Shop playerData={playerData} onBuy={buyItem} onClose={() => setScreen('menu')} />}
      {screen === 'casino' && <Casino playerData={playerData} updateCoins={(a) => setPlayerData(p => ({...p, coins: p.coins + a}))} onClose={() => setScreen('menu')} />}
      {(screen === 'lost' || screen === 'won') && (
        <div className="flex flex-col items-center justify-center h-screen space-y-6 bg-black/80 absolute inset-0 z-50">
          <h2 className={`text-6xl font-black ${screen === 'won' ? 'text-yellow-400' : 'text-red-500'}`}>{screen === 'won' ? 'MILLIONAIRE!' : 'GAME OVER'}</h2>
          <button onClick={() => setScreen('menu')} className="px-12 py-4 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200">MENU</button>
        </div>
      )}
    </div>
  );
}

export default App;
