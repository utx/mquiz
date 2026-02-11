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

// ==================== 8-BIT ART ENGINE ====================
// This component renders crisp SVG pixel art without needing external files.

const PixelArt = ({ type, color = "currentColor", size = 50, className = "" }) => {
  // Common styles for 8-bit look
  const style = { width: size, height: size, imageRendering: 'pixelated', shapeRendering: 'crispEdges' };
  
  // PALETTE
  const c = {
    skin: "#FFDCB1",
    darkSkin: "#E0B080",
    outline: "#2D1B00",
    shirt: "#3B82F6",
    pants: "#1E3A8A",
    gold: "#FFD700",
    steel: "#94A3B8",
    wood: "#8B4513",
    leaves: "#22C55E",
    red: "#EF4444",
    black: "#111",
    white: "#FFF"
  };

  // --- ART ASSETS (16x16 or 24x24 Grids) ---
  const assets = {
    // === CHARACTER ===
    base_character: (
      <svg viewBox="0 0 24 24" style={style} className={className}>
        {/* Legs */}
        <rect x="8" y="16" width="3" height="8" fill={c.pants} />
        <rect x="13" y="16" width="3" height="8" fill={c.pants} />
        {/* Torso */}
        <rect x="7" y="10" width="10" height="7" fill={color === "currentColor" ? c.shirt : color} />
        {/* Head */}
        <rect x="8" y="3" width="8" height="7" fill={c.skin} />
        {/* Eyes */}
        <rect x="10" y="5" width="1" height="1" fill={c.black} />
        <rect x="13" y="5" width="1" height="1" fill={c.black} />
      </svg>
    ),
    
    // === OUTFITS ===
    crown: (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M4 16h16v4H4z" fill={c.gold} /> {/* Band */}
        <path d="M4 16l4-8 4 4 4-4 4 8H4z" fill={c.gold} /> {/* Spikes */}
        <rect x="8" y="6" width="2" height="2" fill={c.red} /> {/* Jewels */}
        <rect x="14" y="6" width="2" height="2" fill={c.red} />
      </svg>
    ),
    wizard_hat: (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M2 18h20v2H2z" fill="#4B0082" /> {/* Brim */}
        <path d="M6 18L12 2l6 16H6z" fill="#5D3FD3" /> {/* Cone */}
        <path d="M8 12l2-1 2 4z" fill={c.gold} /> {/* Star */}
      </svg>
    ),
    tophat: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="4" y="16" width="16" height="2" fill={c.black} />
        <rect x="6" y="6" width="12" height="10" fill={c.black} />
        <rect x="6" y="14" width="12" height="2" fill={c.red} />
      </svg>
    ),

    // === WEAPONS ===
    sword: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(45)">
        <rect x="10" y="14" width="4" height="8" fill={c.wood} /> {/* Hilt */}
        <rect x="8" y="12" width="8" height="2" fill={c.gold} /> {/* Guard */}
        <rect x="10" y="2" width="4" height="10" fill={c.steel} /> {/* Blade */}
        <rect x="11" y="2" width="2" height="10" fill="#CBD5E1" /> {/* Shine */}
      </svg>
    ),
    wand: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(15)">
        <rect x="10" y="8" width="4" height="14" fill={c.wood} />
        <path d="M12 2l2 4-2 2-2-2z" fill="#4ADE80" /> {/* Gem */}
        <circle cx="12" cy="4" r="3" fill="rgba(74, 222, 128, 0.3)" /> {/* Glow */}
      </svg>
    ),
    guitar: (
      <svg viewBox="0 0 24 24" style={style} transform="rotate(-15)">
        <rect x="10" y="2" width="4" height="10" fill={c.wood} /> {/* Neck */}
        <path d="M8 12h8v8a4 4 0 01-8 0v-8z" fill={c.red} /> {/* Body */}
        <circle cx="12" cy="16" r="2" fill={c.black} />
      </svg>
    ),

    // === PETS ===
    dog: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="8" y="12" width="10" height="6" fill="#D97706" /> {/* Body */}
        <rect x="8" y="18" width="2" height="4" fill="#D97706" /> {/* Leg */}
        <rect x="16" y="18" width="2" height="4" fill="#D97706" /> {/* Leg */}
        <rect x="4" y="8" width="6" height="6" fill="#D97706" /> {/* Head */}
        <rect x="4" y="10" width="2" height="2" fill={c.black} /> {/* Nose */}
        <rect x="6" y="6" width="2" height="4" fill="#B45309" /> {/* Ear */}
        <rect x="18" y="10" width="4" height="2" fill="#D97706" /> {/* Tail */}
      </svg>
    ),
    cat: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="8" y="12" width="8" height="6" fill="#333" />
        <rect x="8" y="18" width="2" height="3" fill="#333" />
        <rect x="14" y="18" width="2" height="3" fill="#333" />
        <rect x="6" y="8" width="6" height="5" fill="#333" />
        <path d="M6 8l-2-2h2z" fill="#333" /> {/* Ear */}
        <path d="M12 8l2-2h-2z" fill="#333" /> {/* Ear */}
        <rect x="16" y="10" width="4" height="2" fill="#333" /> {/* Tail */}
      </svg>
    ),
    dragon: (
      <svg viewBox="0 0 24 24" style={style}>
        <path d="M6 14h10v6H6z" fill="#DC2626" /> {/* Body */}
        <path d="M14 6h6v8h-6z" fill="#DC2626" /> {/* Head */}
        <rect x="4" y="10" width="6" height="6" fill="#991B1B" /> {/* Wing */}
        <rect x="18" y="8" width="2" height="2" fill={c.gold} /> {/* Eye */}
        <path d="M20 10l4 2-4 2z" fill="#F59E0B" /> {/* Fire */}
      </svg>
    ),

    // === FURNITURE ===
    plant: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="8" y="16" width="8" height="6" fill="#B45309" /> {/* Pot */}
        <rect x="11" y="10" width="2" height="6" fill="#166534" /> {/* Stem */}
        <circle cx="12" cy="8" r="4" fill={c.leaves} />
        <circle cx="8" cy="10" r="3" fill={c.leaves} />
        <circle cx="16" cy="10" r="3" fill={c.leaves} />
      </svg>
    ),
    lamp: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="11" y="12" width="2" height="10" fill={c.wood} />
        <path d="M6 12h12L15 4H9z" fill="#FEF08A" /> {/* Shade */}
        <rect x="8" y="22" width="8" height="2" fill={c.wood} />
      </svg>
    ),
    painting: (
      <svg viewBox="0 0 24 24" style={style}>
        <rect x="4" y="4" width="16" height="16" fill={c.wood} />
        <rect x="6" y="6" width="12" height="12" fill="#87CEEB" />
        <circle cx="14" cy="10" r="2" fill="#FDE047" /> {/* Sun */}
        <path d="M6 18l4-6 4 6z" fill="#22C55E" /> {/* Mountain */}
      </svg>
    ),
    rug: (
      <svg viewBox="0 0 24 24" style={style} transform="scale(1, 0.5)">
        <rect x="2" y="4" width="20" height="16" rx="2" fill="#BE123C" />
        <rect x="4" y="6" width="16" height="12" rx="2" fill="#F43F5E" />
      </svg>
    ),
    generic: (
      <svg viewBox="0 0 24 24" style={style}>
         <rect x="4" y="4" width="16" height="16" fill="#64748B" rx="4" />
         <text x="12" y="16" textAnchor="middle" fill="white" fontSize="12">?</text>
      </svg>
    )
  };

  // LOGIC TO PICK ASSET BASED ON NAME
  const nameLower = type.toLowerCase();
  
  if (nameLower.includes('shirt')) return React.cloneElement(assets.base_character, { className }); // Color handled in SVG
  
  // Specific Matches
  if (nameLower.includes('crown')) return assets.crown;
  if (nameLower.includes('wizard')) return assets.wizard_hat;
  if (nameLower.includes('hat')) return assets.tophat;
  if (nameLower.includes('sword')) return assets.sword;
  if (nameLower.includes('wand')) return assets.wand;
  if (nameLower.includes('guitar')) return assets.guitar;
  if (nameLower.includes('dog')) return assets.dog;
  if (nameLower.includes('cat')) return assets.cat;
  if (nameLower.includes('dragon')) return assets.dragon;
  if (nameLower.includes('plant')) return assets.plant;
  if (nameLower.includes('lamp')) return assets.lamp;
  if (nameLower.includes('painting')) return assets.painting;
  if (nameLower.includes('rug')) return assets.rug;

  // Fallback
  return assets.generic;
};

// ==================== VISUAL COMPONENTS ====================

const RoamingPet = ({ type }) => {
  const [pos, setPos] = useState({ x: 50, y: 80 });
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos(prev => {
        const newX = Math.max(10, Math.min(90, prev.x + (Math.random() - 0.5) * 40));
        setDirection(newX > prev.x ? -1 : 1); // Flip based on direction
        return { x: newX, y: 80 + (Math.random() * 5) };
      });
    }, 2500);
    return () => clearInterval(moveInterval);
  }, []);

  return (
    <div style={{ 
      position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, 
      transition: 'all 2.5s ease-in-out', zIndex: 20, 
      transform: `scaleX(${direction})` // Flip SVG
    }}>
      <PixelArt type={type} size={64} />
    </div>
  );
};

const PlayerAvatar = ({ equipped, size = 100 }) => {
  // Determine shirt color based on equipped item name
  let shirtColor = "#3B82F6"; // Default Blue
  if (equipped.outfits?.includes('red')) shirtColor = "#EF4444";
  if (equipped.outfits?.includes('green')) shirtColor = "#22C55E";
  if (equipped.outfits?.includes('black')) shirtColor = "#111827";
  if (equipped.outfits?.includes('gold')) shirtColor = "#EAB308";

  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
       {/* Base Body with dynamic shirt color */}
       <PixelArt type="base_character" color={shirtColor} size={size} />
       
       {/* Hats Layer */}
       {equipped.outfits?.includes('crown') && <div className="absolute -top-6 left-0"><PixelArt type="crown" size={size} /></div>}
       {equipped.outfits?.includes('wizard') && <div className="absolute -top-8 left-0"><PixelArt type="wizard_hat" size={size} /></div>}
       {equipped.outfits?.includes('tophat') && <div className="absolute -top-8 left-0"><PixelArt type="tophat" size={size} /></div>}
       
       {/* Weapons Layer */}
       {equipped.weapons && (
         <div className="absolute top-1/2 -right-4" style={{ transform: 'translateY(-50%)' }}>
           <PixelArt type={equipped.weapons} size={size * 0.8} />
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
          <PlayerAvatar equipped={playerData.equippedItems} size={160} />
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
      return JSON.parse(localStorage.getItem('millionaireV9')) || {
        coins: 50000, 
        ownedItems: { outfits: [], weapons: [], pets: [], furniture: [] },
        equippedItems: { outfits: null, weapons: null },
      };
    } catch { return { coins: 0, ownedItems: {}, equippedItems: {} }; }
  });
  const [gameState, setGameState] = useState({ level: 0, category: null, question: null, used: [] });

  useEffect(() => { localStorage.setItem('millionaireV9', JSON.stringify(playerData)); }, [playerData]);

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
