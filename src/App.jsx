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
