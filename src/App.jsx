import React, { useState, useEffect, useRef } from 'react';

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

const ItemGraphic = ({ itemId, size = 40, style = {} }) => {
  const s = size;
  // Simple placeholders for graphics to save space. 
  // In a real app, these would be the SVGs you had before.
  // For now, we use colored shapes to keep the file size manageable.
  
  const item = 
    SHOP_ITEMS.outfits.find(i => i.id === itemId) || 
    SHOP_ITEMS.weapons.find(i => i.id === itemId) ||
    SHOP_ITEMS.furniture.find(i => i.id === itemId);

  const color = item?.color || '#ccc';

  return (
    <div style={{
      width: s, 
      height: s, 
      backgroundColor: color, 
      borderRadius: itemId?.includes('hat') || itemId?.includes('hair') ? '50% 50% 0 0' : '4px',
      border: '2px solid rgba(0,0,0,0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: s/2,
      ...style
    }}>
      {/* Optional: Add simple icons based on ID */}
      {itemId === 'crown' && '👑'}
      {itemId === 'sword' && '⚔️'}
    </div>
  );
};

const AnimatedPet = ({ pet, containerWidth = 300, containerHeight = 200, startOffset = 0 }) => {
  const [pos, setPos] = useState({ x: 50 + startOffset, y: 50 + (startOffset % 30) });
  const [direction, setDirection] = useState(1);
  
  useEffect(() => {
    const moveInterval = setInterval(() => {
      setPos(p => {
        const newX = Math.max(20, Math.min(containerWidth - 50, p.x + (Math.random() - 0.5) * 60));
        const newY = Math.max(20, Math.min(containerHeight - 50, p.y + (Math.random() - 0.5) * 40));
        setDirection(newX > p.x ? 1 : -1);
        return { x: newX, y: newY };
      });
    }, 2000 + Math.random() * 1000);
    return () => clearInterval(moveInterval);
  }, [containerWidth, containerHeight]);

  const emojis = { dog: '🐕', cat: '🐈', bunny: '🐰', dragon: '🐉', unicorn: '🦄', phoenix: '🔥', owl: '🦉', turtle: '🐢' };

  return (
    <div style={{ 
      position: 'absolute', left: pos.x, top: pos.y, 
      transition: 'all 1.5s ease-in-out', zIndex: 10, 
      transform: `scaleX(${direction})`, fontSize: '2rem' 
    }}>
      {emojis[pet] || '🐾'}
    </div>
  );
};

const PixelCharacter = ({ equipped = {}, size = 100 }) => {
  return (
    <div style={{ width: size, height: size, position: 'relative', background: 'none' }}>
      {/* Simple Character Representation */}
      <div style={{ position: 'absolute', bottom: 0, left: '25%', width: '50%', height: '40%', background: '#2c3e50' }} /> {/* Legs */}
      <div style={{ position: 'absolute', bottom: '40%', left: '20%', width: '60%', height: '40%', background: '#3498db' }} /> {/* Body */}
      <div style={{ position: 'absolute', bottom: '80%', left: '25%', width: '50%', height: '30%', background: '#FFDAB9', borderRadius: '50%' }} /> {/* Head */}
      
      {/* Items overlay */}
      {equipped.head && <div style={{ position: 'absolute', top: '-10%', left: '25%' }}>👑</div>}
      {equipped.weapon && <div style={{ position: 'absolute', right: '-10%', top: '50%' }}>⚔️</div>}
    </div>
  );
};

// ==================== SCREENS ====================

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
          
          <button onClick={() => setScreen('shop')} className="px-8 py-3
