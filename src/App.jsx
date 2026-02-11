import React, { useState, useEffect } from 'react';

// ==================== IMPORTS ====================
// Make sure these files exist in your src/data folder!
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
    const bank = QUESTIONS[category]?.
