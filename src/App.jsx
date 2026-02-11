import React, { useState, useEffect } from 'react';

// ==================== IMPORTS ====================
import { QUESTIONS } from './data/questions';
import { SHOP_ITEMS } from './data/items';
import { PRIZE_LADDER, CATEGORIES } from './data/constants';

// ==================== HELPER: FORMAT MONEY ====================
const formatMoney = (n) => {
  if (n >= 1e9) return `$${(n/1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n/1e3).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
};

// ==================== COMPONENT: PIXEL ART ICONS ====================
// This component draws unique pixel art based on the specific Item ID
const PixelIcon = ({ name, type, size = 50 }) => {
  const s = size;
  const nameLower = name.toLowerCase();

  // --- OUTFITS ---
  if (type === 'outfits') {
    if (nameLower.includes('shirt') || nameLower.includes('hoodie')) {
      const color = nameLower.includes('red') ? '#ef4444' : 
                    nameLower.includes('blue') ? '#3b82f6' : 
                    nameLower.includes('green') ? '#22c55e' : 
                    nameLower.includes('black') ? '#1f2937' : 
                    nameLower.includes('gold') ? '#eab308' : '#cbd5e1';
      return (
        <div style={{ width: s, height: s, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '10%', left: '10%', width: '80%', height: '80%', background: color, borderRadius: '10%' }} />
          <div style={{ position: 'absolute', top: '10%', left: '30%', width: '40%', height: '20%', background: '#1e293b', borderRadius: '0 0 50% 50%' }} />
          <div style={{ position: 'absolute', top: '40%', left: '40%', fontSize: s/2.5 }}>👕</div>
        </div>
      );
    }
    if (nameLower.includes('hat') || nameLower.includes('crown')) {
      return (
        <div style={{ width: s, height: s, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: s/1.5 }}>
           {nameLower.includes('crown') ? '👑' : nameLower.includes('wizard') ? '🧙‍♂️' : '🧢'}
        </div>
      );
    }
    return <div style={{ fontSize: s/1.5 }}>👔</div>;
  }

  // --- WEAPONS ---
  if (type === 'weapons') {
    let icon = '⚔️';
    if (nameLower.includes('wand')) icon = '🪄';
    if (nameLower.includes('bow')) icon = '🏹';
    if (nameLower.includes('guitar')) icon = '🎸';
    if (nameLower.includes('lightsaber')) icon = '🗡️';
    return <div style={{ fontSize: s/1.5 }}>{icon}</div>;
  }

  // --- PETS ---
  if (type === 'pets') {
    let icon = '🐾';
    if (nameLower.includes('dog')) icon = '🐕';
    if (nameLower.includes('cat')) icon = '🐈';
    if (nameLower.includes('dragon')) icon = '🐉';
    if (nameLower.includes('phoenix')) icon = '🔥';
    if (nameLower.includes('robot')) icon = '🤖';
    if (nameLower.includes('unicorn')) icon = '🦄';
    return <div style={{ fontSize: s/1.5 }}>{icon}</div>;
  }

  // --- FURNITURE ---
  if (type === 'furniture') {
    let icon = '📦';
    if (nameLower.includes('lamp')) icon = '🛋️';
    if (nameLower.includes('bed')) icon = '🛏️';
    if (nameLower.includes('plant')) icon = '🪴';
    if (nameLower.includes('rug')) icon = '🧶';
    if (nameLower.includes('painting')) icon = '🖼️';
    if (nameLower.includes('throne')) icon = '💺';
    return <div style={{ fontSize: s/1.5 }}>{icon}</div>;
  }

  return <div style={{ fontSize: s/2 }}>❓</div>;
};

// ==================== VISUAL COMPONENTS ====================

const RoamingPet = ({ type }) => {
  const [pos, setPos] = useState({ x: 50, y: 80 });
  const [msg, setMsg] = useState('');
  const [direction, setDirection] = useState(1);

  const emojis = { dog: '🐕', cat: '🐈', dragon: '🐉', phoenix: '🔥', robot: '🤖', unicorn: '🦄' };
  const quotes = ["Winning!", "Feed me!", "So rich!", "Let's play!", "Shiny!", "Woof?"];

  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos(prev => {
        const newX = Math.max(10, Math.min(90, prev.x + (Math.random() - 0.5) * 40));
        setDirection(newX > prev.x ? 1 : -1);
        return { x: newX, y: 80 + (Math.random() * 10) };
      });
    }, 3000);

    const talkInterval = setInterval(() => {
      if (Math.random() > 0.7) {
        setMsg(quotes[Math.floor(Math.random() * quotes.length)]);
        setTimeout(() => setMsg(''), 2000);
      }
    }, 4000);

    return () => { clearInterval(moveInterval); clearInterval(talkInterval); };
  }, []);

  return (
    <div style={{ 
      position: 'absolute', left: `${pos.x}%`, top: `${pos.y}%`, 
      transition: 'all 2s ease-in-out', zIndex: 20, transform: `scaleX(${direction})` 
    }}>
      {msg && (
        <div className="absolute -top-12 -left-10 bg-white text-black p-1 rounded-lg text-xs w-24 text-center border-2 border-black z-30">
          {msg}
          <div className="absolute bottom-[-6px] left-1/2 w-2 h-2 bg-white rotate-45 border-r-2 border-b-2 border-black"></div>
        </div>
      )}
      <div className="text-4xl drop-shadow-md">{emojis[type] || '🐾'}</div>
    </div>
  );
};

const PixelAvatar = ({ equipped, size = 100 }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative' }}>
       {/* BASE BODY */}
       <div className="absolute bottom-0 left-1/4 w-1/2 h-1/3 bg-slate-700" />
       <div className="absolute bottom-1/3 left-1/5 w-3/5 h-1/3 bg-blue-500 rounded-sm" />
       <div className="absolute bottom-2/3 left-1/4 w-1/2 h-1/3 bg-orange-200 rounded-full" />
       
       {/* EQUIPPED VISUALS */}
       {equipped.outfits && equipped.outfits.includes('crown') && <div className="absolute -top-4 left-1/4 text-4xl">👑</div>}
       {equipped.outfits && equipped.outfits.includes('wizard') && <div className="absolute -top-6 left-1/4 text-4xl">🧙‍♂️</div>}
       {equipped.outfits && equipped.outfits.includes('tophat') && <div className="absolute -top-6 left-1/4 text-4xl">🎩</div>}
       
       {equipped.weapons && equipped.weapons.includes('sword') && <div className="absolute top-1/2 -right-6 text-4xl rotate-45">⚔️</div>}
       {equipped.weapons && equipped.weapons.includes('wand') && <div className="absolute top-1/2 -right-6 text-4xl rotate-12">🪄</div>}
       {equipped.weapons && equipped.weapons.includes('guitar') && <div className="absolute top-1/3 -right-6 text-4xl rotate-12">🎸</div>}
    </div>
  );
};

// ==================== SCREEN: CASINO GAUNTLET ====================
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
    return available.length > 0 
      ? available[Math.floor(Math.random() * available.length)] 
      : bank[Math.floor(Math.random() * bank.length)];
  };

  const startGauntlet = () => {
    if (bet <= 0 || bet > playerData.coins) {
      setMsg("Invalid bet amount!");
      return;
    }
    updateCoins(-bet);
    setStreak(0);
    setMsg("");
    setSessionUsed([]);
    loadNextQuestion();
    setPhase('playing');
  };

  const loadNextQuestion = () => {
    const newQ = getRandomGlobalQuestion();
    setSessionUsed(prev => [...prev, newQ.q]);
    setQ(newQ);
  };

  const handleAnswer = (idx) => {
    if (idx === q.a) {
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (newStreak === 5) {
        const winnings = bet * 5;
        updateCoins(winnings); 
        setMsg(`JACKPOT! 5 IN A ROW! +${formatMoney(winnings)}`);
        setPhase('result');
      } else {
        loadNextQuestion();
      }
    } else {
      setMsg(`WRONG! You lost ${formatMoney(bet)}.`);
      setPhase('result');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
      <div className="bg-purple-900 border-4 border-yellow-400 p-8 rounded-2xl w-full max-w-lg text-center shadow-[0_0_50px_rgba(250,204,21,0.5)]">
        <h2 className="text-4xl font-black text-yellow-400 mb-2">🎰 THE GAUNTLET</h2>
        <p className="text-purple-200 mb-6 text-sm">5 QUESTIONS. 5X PAYOUT. 1 LIFE.</p>
        
        {phase === 'betting' && (
          <div className="space-y-4">
            <p className="text-white">Bank: {formatMoney(playerData.coins)}</p>
            <input 
              type="number" 
              className="w-full p-4 text-black text-2xl font-bold rounded text-center"
              placeholder="Enter Bet Amount"
              onChange={(e) => setBet(Number(e.target.value))}
            />
            {msg && <p className="text-red-400 font-bold">{msg}</p>}
            <div className="flex gap-4 justify-center">
              <button onClick={startGauntlet} className="bg-green-500 hover:bg-green-400 text-black px-8 py-4 rounded-xl font-bold text-xl w-full">
                START RUN
              </button>
              <button onClick={onClose} className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold w-full">
                EXIT
              </button>
            </div>
          </div>
        )}

        {phase === 'playing' && q && (
          <div>
            <div className="flex justify-between items-center mb-4 px-2">
              <span className="text-yellow-400 font-bold">STREAK: {streak}/5</span>
              <span className="text-green-400 font-bold">POT: {formatMoney(bet * 5)}</span>
            </div>
            <div className="bg-white text-black p-4 rounded-xl font-bold text-lg mb-6 border-4 border-blue-500 min-h-[100px] flex items-center justify-center">
              {q.q}
            </div>
            <div className="grid grid-cols-2 gap-4">
              {q.o.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i)} className="bg-slate-800 hover:bg-yellow-400 hover:text-black border-2 border-slate-600 p-4 rounded-lg font-bold transition">
                  {opt}
                </button>
              ))}
            </div>
          </div>
        )}

        {phase === 'result' && (
          <div className="space-y-6 animate-fade-in">
            <h3 className={`text-3xl font-black ${msg.includes('JACKPOT') ? 'text-green-400' : 'text-red-500'}`}>{msg}</h3>
            {msg.includes('WRONG') && (
               <p className="text-white">Correct: <span className="text-yellow-400 font-bold">{q.o[q.a]}</span></p>
            )}
            <button onClick={() => setPhase('betting')} className="bg-yellow-400 text-black px-8 py-3 rounded-full font-bold text-xl hover:scale-105 transition">
              PLAY AGAIN
            </button>
            <button onClick={onClose} className="block w-full text-slate-400 hover:text-white mt-4">Return to Menu</button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==================== SCREEN: HOUSE ====================
const House = ({ playerData, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 bg-slate-900 flex items-center justify-center">
      <div className="relative w-full max-w-4xl h-[80vh] bg-[#F0E68C] border-8 border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 w-full h-[70%] bg-[#FFDAB9] border-b-4 border-slate-400"></div>
        <div className="absolute bottom-0 w-full h-[30%] bg-[#8B4513]"></div>
        
        <button onClick={onClose} className="absolute top-4 right-4 bg-red-500 text-white p-2 rounded-full z-50 font-bold border-2 border-white">EXIT HOUSE</button>

        {playerData.ownedItems?.furniture?.map((item, i) => (
          <div key={i} className="absolute bottom-[25%] text-6xl drop-shadow-lg" style={{ left: `${10 + (i * 15)}%` }}>
             <PixelIcon name={item} type="furniture" size={80} />
          </div>
        ))}

        <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 z-10 hover:scale-110 transition">
          <PixelAvatar equipped={playerData.equippedItems} size={150} />
          <div className="bg-black/50 text-white text-xs px-2 rounded mt-1 text-center">YOU</div>
        </div>

        {playerData.ownedItems?.pets?.map((pet, i) => (
          <RoamingPet key={i} type={pet} />
        ))}
      </div>
    </div>
  );
};

// ==================== SCREEN: SHOP ====================
const Shop = ({ playerData, onBuy, onClose }) => {
  const [tab, setTab] = useState('outfits');
  const tabs = ['outfits', 'weapons', 'pets', 'furniture'];

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-yellow-400">🛒 SHOP</h2>
        <button onClick={onClose} className="text-white text-2xl">❌</button>
      </div>
      <div className="flex gap-2 mb-4">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded font-bold ${tab === t ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'}`}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto">
        {(SHOP_ITEMS[tab] || []).map(item => {
          const owned = playerData.ownedItems?.[tab]?.includes(item.id);
          return (
            <div key={item.id} className="bg-slate-800 p-4 rounded border border-slate-700 flex flex-col items-center hover:bg-slate-750 transition">
              {/* NEW ICON SYSTEM */}
              <div className="mb-3 p-2 bg-slate-900 rounded-lg border border-slate-600">
                <PixelIcon name={item.id} type={tab} size={60} />
              </div>
              
              <div className="text-white font-bold text-center leading-tight mb-1">{item.name}</div>
              <div className="text-yellow-400 text-sm mb-2">{formatMoney(item.price)}</div>
              
              <button 
                onClick={() => !owned && onBuy(tab, item)}
                disabled={owned || playerData.coins < item.price}
                className={`w-full py-2 rounded font-bold text-sm ${owned ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-500'} ${playerData.coins < item.price && !owned ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
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
      return JSON.parse(localStorage.getItem('millionaireV8')) || {
        coins: 50000, 
        ownedItems: { outfits: [], weapons: [], pets: [], furniture: [] },
        equippedItems: { outfits: null, weapons: null },
      };
    } catch {
      return { coins: 0, ownedItems: {}, equippedItems: {} };
    }
  });

  const [gameState, setGameState] = useState({ level: 0, category: null, question: null, used: [] });

  useEffect(() => {
    localStorage.setItem('millionaireV8', JSON.stringify(playerData));
  }, [playerData]);

  const startGame = (category) => {
    setScreen('play');
    setGameState({ level: 0, category, question: getQuestion(0, category, []), used: [] });
  };

  const getQuestion = (level, category, used) => {
    const diff = level < 5 ? 'easy' : level < 10 ? 'medium' : 'hard';
    const bank = QUESTIONS[category]?.[diff] || QUESTIONS.trivia[diff];
    const available = bank.filter(q => !used.includes(q.q));
    return available.length ? available[Math.floor(Math.random() * available.length)] : bank[0];
  };

  const handleGameAnswer = (index) => {
    if (index === gameState.question.a) {
      if (gameState.level >= 14) {
        setPlayerData(p => ({ ...p, coins: p.coins + 1000000 }));
        setScreen('won');
      } else {
        const next = gameState.level + 1;
        setGameState(prev => ({ ...prev, level: next, question: getQuestion(next, prev.category, [...prev.used, prev.question.q]) }));
      }
    } else {
      setScreen('lost');
    }
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

  const updateCoins = (amount) => {
    setPlayerData(p => ({ ...p, coins: p.coins + amount }));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans overflow-hidden select-none">
      
      {/* MENU */}
      {screen === 'menu' && (
        <div className="flex flex-col items-center justify-center h-screen space-y-6 relative">
          <h1 className="text-5xl font-black text-yellow-400 drop-shadow-lg">MILLIONAIRE CITY</h1>
          
          <div className="bg-slate-800 p-4 rounded-xl border-4 border-blue-500 shadow-xl flex items-center gap-4">
             <div className="text-green-400 font-mono text-2xl font-bold">{formatMoney(playerData.coins)}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full max-w-md px-4">
            {CATEGORIES.map(cat => (
              <button key={cat.id} onClick={() => startGame(cat.id)} className={`p-4 rounded-xl bg-gradient-to-r ${cat.color} font-bold hover:scale-105 transition shadow-lg`}>
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          
          <div className="flex gap-4">
            <button onClick={() => setScreen('house')} className="px-6 py-3 bg-green-600 rounded-lg font-bold shadow-lg border-b-4 border-green-800 hover:translate-y-1 transition">
              🏠 HOUSE
            </button>
            <button onClick={() => setScreen('shop')} className="px-6 py-3 bg-blue-600 rounded-lg font-bold shadow-lg border-b-4 border-blue-800 hover:translate-y-1 transition">
              🛒 SHOP
            </button>
            <button onClick={() => setScreen('casino')} className="px-6 py-3 bg-purple-600 rounded-lg font-bold shadow-lg border-b-4 border-purple-800 hover:translate-y-1 transition">
              🎰 CASINO
            </button>
          </div>
        </div>
      )}

      {/* GAMEPLAY */}
      {screen === 'play' && gameState.question && (
        <div className="flex flex-col items-center h-screen p-4 max-w-2xl mx-auto">
          <div className="flex justify-between w-full mb-8 text-xl font-bold">
             <span className="text-yellow-400">Level {gameState.level + 1}</span>
             <span className="text-green-400">{formatMoney(PRIZE_LADDER[gameState.level])}</span>
          </div>
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-blue-400 w-full mb-8 text-center text-2xl shadow-lg">
            {gameState.question.q}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {gameState.question.o.map((opt, i) => (
              <button key={i} onClick={() => handleGameAnswer(i)} className="p-6 bg-slate-700 border-2 border-slate-600 rounded-xl hover:bg-yellow-500 hover:text-black font-bold transition text-left">
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* OVERLAYS */}
      {screen === 'house' && <House playerData={playerData} onClose={() => setScreen('menu')} />}
      {screen === 'shop' && <Shop playerData={playerData} onBuy={buyItem} onClose={() => setScreen('menu')} />}
      {screen === 'casino' && <Casino playerData={playerData} updateCoins={updateCoins} onClose={() => setScreen('menu')} />}
      
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
