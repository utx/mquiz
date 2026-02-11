import React, { useState, useEffect } from 'react';

// ==================== IMPORTS ====================
import { QUESTIONS } from './data/questions';
import { SHOP_ITEMS } from './data/items';
import { PRIZE_LADDER, CATEGORIES } from './data/constants';

// ==================== HELPER ====================
const formatMoney = (n) => {
  if (n >= 1e9) return `$${(n/1e9).toFixed(1)}B`;
  if (n >= 1e6) return `$${(n/1e6).toFixed(1)}M`;
  if (n >= 1e3) return `$${(n/1e3).toFixed(0)}K`;
  return `$${n.toLocaleString()}`;
};

// ==================== COMPONENTS ====================

const Shop = ({ playerData, onBuy, onClose }) => {
  const [tab, setTab] = useState('outfits');
  const tabs = ['outfits', 'weapons', 'pets', 'furniture', 'rooms'];

  return (
    <div className="fixed inset-0 bg-slate-900 z-50 p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-yellow-400">🛒 SHOP</h2>
        <button onClick={onClose} className="text-white">❌</button>
      </div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {tabs.map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-2 rounded ${tab === t ? 'bg-yellow-500 text-black' : 'bg-slate-700 text-white'}`}>
            {t.toUpperCase()}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 overflow-y-auto">
        {(SHOP_ITEMS[tab] || []).map(item => {
          const owned = playerData.ownedItems?.[tab]?.includes(item.id);
          return (
            <div key={item.id} className="bg-slate-800 p-4 rounded border border-slate-700">
              <div className="text-white font-bold">{item.name}</div>
              <div className="text-yellow-400">{formatMoney(item.price)}</div>
              <button 
                onClick={() => !owned && onBuy(tab, item)}
                disabled={owned || playerData.coins < item.price}
                className={`mt-2 w-full py-1 rounded ${owned ? 'bg-green-600' : 'bg-blue-600'}`}
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

// ==================== APP LOGIC ====================

function App() {
  const [screen, setScreen] = useState('menu');
  const [playerData, setPlayerData] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('millionaireV4')) || {
        coins: 0,
        ownedItems: { outfits: [], weapons: [], pets: [], furniture: [], rooms: [] },
        equippedItems: {},
        gamesPlayed: 0
      };
    } catch {
      return { coins: 0, ownedItems: {}, equippedItems: {} };
    }
  });

  const [gameState, setGameState] = useState({ 
    level: 0, 
    category: null, 
    question: null,
    usedQuestions: []
  });

  useEffect(() => {
    localStorage.setItem('millionaireV4', JSON.stringify(playerData));
  }, [playerData]);

  const startGame = (category) => {
    setScreen('play');
    setGameState({ level: 0, category, question: getQuestion(0, category, []), usedQuestions: [] });
  };

  const getQuestion = (level, category, used) => {
    const diff = level < 5 ? 'easy' : level < 10 ? 'medium' : 'hard';
    // This line was broken in your previous file
    const bank = QUESTIONS[category]?.[diff] || QUESTIONS.trivia[diff];
    
    const available = bank.filter(q => !used.includes(q.q));
    if (!available.length) return bank[0]; // Fallback
    return available[Math.floor(Math.random() * available.length)];
  };

  const handleAnswer = (index) => {
    const isCorrect = index === gameState.question.a;
    if (isCorrect) {
      if (gameState.level >= 14) {
        setPlayerData(p => ({ ...p, coins: p.coins + 1000000 }));
        setScreen('won');
      } else {
        const nextLevel = gameState.level + 1;
        setGameState(prev => ({
          ...prev,
          level: nextLevel,
          question: getQuestion(nextLevel, prev.category, [...prev.usedQuestions, prev.question.q]),
          usedQuestions: [...prev.usedQuestions, prev.question.q]
        }));
      }
    } else {
      setScreen('lost');
    }
  };

  const buyItem = (cat, item) => {
    if (playerData.coins >= item.price) {
      setPlayerData(p => ({
        ...p,
        coins: p.coins - item.price,
        ownedItems: { ...p.ownedItems, [cat]: [...(p.ownedItems[cat] || []), item.id] }
      }));
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      {screen === 'menu' && (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h1 className="text-4xl font-bold text-yellow-400">MILLIONAIRE ARENA</h1>
          <div className="text-green-400 font-mono">Coins: {formatMoney(playerData.coins)}</div>
          
          <div className="grid grid-cols-2 gap-4">
            {CATEGORIES.map(cat => (
              <button 
                key={cat.id} 
                onClick={() => startGame(cat.id)}
                className={`p-4 rounded-xl bg-gradient-to-r ${cat.color} font-bold hover:scale-105 transition`}
              >
                {cat.icon} {cat.name}
              </button>
            ))}
          </div>
          
          <button onClick={() => setScreen('shop')} className="px-8 py-3 bg-blue-600 rounded-full font-bold hover:bg-blue-500 transition">
            🛒 ENTER SHOP
          </button>
        </div>
      )}

      {screen === 'play' && gameState.question && (
        <div className="flex flex-col items-center p-4 max-w-2xl mx-auto h-screen">
          <div className="w-full flex justify-between mb-8">
            <span className="text-yellow-400 font-bold">Level: {gameState.level + 1}/15</span>
            <span className="text-green-400 font-bold">Prize: {formatMoney(PRIZE_LADDER[gameState.level])}</span>
          </div>
          
          <div className="bg-slate-800 p-8 rounded-2xl border-2 border-blue-500 w-full mb-8 text-center text-xl shadow-lg">
            {gameState.question.q}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {gameState.question.o.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(idx)}
                className="p-4 bg-slate-700 border border-slate-600 rounded-lg hover:bg-blue-900 hover:border-blue-400 transition text-left flex"
              >
                <span className="text-yellow-500 mr-3 font-bold">{['A','B','C','D'][idx]}:</span>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {screen === 'shop' && (
        <Shop 
          playerData={playerData} 
          onBuy={buyItem} 
          onClose={() => setScreen('menu')} 
        />
      )}

      {(screen === 'lost' || screen === 'won') && (
        <div className="flex flex-col items-center justify-center h-screen space-y-6">
          <h2 className={`text-6xl font-black ${screen === 'won' ? 'text-yellow-400' : 'text-red-500'}`}>
            {screen === 'won' ? 'YOU WON!' : 'GAME OVER'}
          </h2>
          <button 
            onClick={() => setScreen('menu')}
            className="px-12 py-4 bg-white text-black rounded-full font-bold text-xl hover:bg-gray-200 transition"
          >
            RETURN TO MENU
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
