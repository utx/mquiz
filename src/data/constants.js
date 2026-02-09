// src/data/constants.js

export const PRIZE_LADDER = [
  { level: 1, amount: 100 }, 
  { level: 2, amount: 200 }, 
  { level: 3, amount: 300 },
  { level: 4, amount: 400 }, 
  { level: 5, amount: 500 }, 
  { level: 6, amount: 1000, safe: true },
  { level: 7, amount: 2000 }, 
  { level: 8, amount: 4000 }, 
  { level: 9, amount: 8000 },
  { level: 10, amount: 16000 }, 
  { level: 11, amount: 32000, safe: true },
  { level: 12, amount: 64000 }, 
  { level: 13, amount: 125000 }, 
  { level: 14, amount: 250000 },
  { level: 15, amount: 1000000 },
];

export const CATEGORIES = [
  { id: 'math', name: 'Math', icon: '🧮', color: 'from-blue-500 to-blue-600' },
  { id: 'science', name: 'Science', icon: '🔬', color: 'from-green-500 to-green-600' },
  { id: 'kotlc', name: 'KOTLC', icon: '✨', color: 'from-purple-500 to-purple-600' },
  { id: 'soccer', name: 'Soccer', icon: '⚽', color: 'from-emerald-500 to-emerald-600' },
  { id: 'english', name: 'English', icon: '📖', color: 'from-orange-500 to-orange-600' },
  { id: 'trivia', name: 'Trivia', icon: '🧠', color: 'from-pink-500 to-pink-600' },
  { id: 'flags', name: 'Flags', icon: '🚩', color: 'from-red-500 to-red-600' },
];
