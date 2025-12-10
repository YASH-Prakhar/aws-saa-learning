import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, Trophy, Clock, Zap, Play } from 'lucide-react';
import { matchingPairs } from '../data/services';

export default function MatchingGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [timer, setTimer] = useState(0);
  const [difficulty, setDifficulty] = useState('easy'); // easy: 6 pairs, medium: 9 pairs, hard: 12 pairs

  const pairCount = difficulty === 'easy' ? 6 : difficulty === 'medium' ? 9 : 12;

  const initializeGame = () => {
    const selectedPairs = matchingPairs.slice(0, pairCount);
    const gameCards = [];
    
    selectedPairs.forEach((pair) => {
      gameCards.push({ id: `${pair.id}-term`, pairId: pair.id, content: pair.term, type: 'term' });
      gameCards.push({ id: `${pair.id}-def`, pairId: pair.id, content: pair.definition, type: 'definition' });
    });

    // Shuffle
    for (let i = gameCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [gameCards[i], gameCards[j]] = [gameCards[j], gameCards[i]];
    }

    setCards(gameCards);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameComplete(false);
    setTimer(0);
  };

  const startGame = () => {
    initializeGame();
    setGameStarted(true);
  };

  useEffect(() => {
    let interval;
    if (gameStarted && !gameComplete) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameStarted, gameComplete]);

  useEffect(() => {
    if (matched.length === pairCount && gameStarted) {
      setGameComplete(true);
    }
  }, [matched, pairCount, gameStarted]);

  useEffect(() => {
    if (flipped.length === 2) {
      const [first, second] = flipped;
      const firstCard = cards.find(c => c.id === first);
      const secondCard = cards.find(c => c.id === second);

      if (firstCard.pairId === secondCard.pairId && firstCard.type !== secondCard.type) {
        setMatched(prev => [...prev, firstCard.pairId]);
        setFlipped([]);
      } else {
        setTimeout(() => {
          setFlipped([]);
        }, 1000);
      }
      setMoves(prev => prev + 1);
    }
  }, [flipped, cards]);

  const handleCardClick = (cardId) => {
    if (flipped.length === 2) return;
    if (flipped.includes(cardId)) return;
    if (matched.includes(cards.find(c => c.id === cardId)?.pairId)) return;

    setFlipped(prev => [...prev, cardId]);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // Start Screen
  if (!gameStarted) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
            <h1 className="section-title mb-2">Matching Game</h1>
            <p className="section-subtitle mx-auto">
              Match AWS services with their descriptions to test your memory!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6 mb-6"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Select Difficulty</h3>
            <div className="grid grid-cols-3 gap-3">
              {[
                { id: 'easy', label: 'Easy', pairs: 6, color: 'green' },
                { id: 'medium', label: 'Medium', pairs: 9, color: 'amber' },
                { id: 'hard', label: 'Hard', pairs: 12, color: 'red' },
              ].map((diff) => (
                <button
                  key={diff.id}
                  onClick={() => setDifficulty(diff.id)}
                  className={`p-4 rounded-xl border-2 transition-all ${
                    difficulty === diff.id
                      ? `border-${diff.color}-500 bg-${diff.color}-50 dark:bg-${diff.color}-900/20`
                      : 'border-slate-200 dark:border-slate-700 hover:border-slate-300'
                  }`}
                >
                  <div className={`font-bold ${difficulty === diff.id ? `text-${diff.color}-600` : 'text-slate-900 dark:text-white'}`}>
                    {diff.label}
                  </div>
                  <div className="text-sm text-slate-500">{diff.pairs} pairs</div>
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <button onClick={startGame} className="btn-primary">
              <Play className="w-5 h-5 mr-2" />
              Start Game
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Game Complete Screen
  if (gameComplete) {
    const stars = moves <= pairCount ? 3 : moves <= pairCount * 1.5 ? 2 : 1;
    
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-xl"
            >
              <Trophy className="w-12 h-12 text-white" />
            </motion.div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              Congratulations! 🎉
            </h2>
            
            {/* Stars */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3].map((star) => (
                <motion.span
                  key={star}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: star <= stars ? 1 : 0.5, rotate: 0 }}
                  transition={{ delay: 0.3 + star * 0.1 }}
                  className={`text-3xl ${star <= stars ? '' : 'opacity-30'}`}
                >
                  ⭐
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-aws-orange">{moves}</div>
                <div className="text-sm text-slate-500">Moves</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-2xl font-bold text-aws-orange">{formatTime(timer)}</div>
                <div className="text-sm text-slate-500">Time</div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={startGame} className="btn-primary">
                <RotateCcw className="w-5 h-5 mr-2" />
                Play Again
              </button>
              <button 
                onClick={() => setGameStarted(false)} 
                className="btn-secondary"
              >
                Change Difficulty
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Active Game
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-6"
        >
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Matching Game</h1>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <Clock className="w-4 h-4 text-slate-500" />
              <span className="font-mono font-bold">{formatTime(timer)}</span>
            </div>
            <div className="px-3 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg">
              <span className="font-bold">{moves}</span>
              <span className="text-slate-500 ml-1">moves</span>
            </div>
            <div className="px-3 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-lg">
              <span className="font-bold">{matched.length}</span>
              <span className="ml-1">/ {pairCount}</span>
            </div>
            <button
              onClick={startGame}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700"
            >
              <RotateCcw className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Game Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`grid gap-3 ${
            difficulty === 'easy' ? 'grid-cols-3 sm:grid-cols-4' : 
            difficulty === 'medium' ? 'grid-cols-3 sm:grid-cols-6' : 
            'grid-cols-4 sm:grid-cols-6'
          }`}
        >
          {cards.map((card) => {
            const isFlipped = flipped.includes(card.id);
            const isMatched = matched.includes(card.pairId);

            return (
              <motion.div
                key={card.id}
                whileHover={!isFlipped && !isMatched ? { scale: 1.02 } : {}}
                whileTap={!isFlipped && !isMatched ? { scale: 0.98 } : {}}
                onClick={() => handleCardClick(card.id)}
                className={`aspect-square cursor-pointer perspective-1000 ${isMatched ? 'pointer-events-none' : ''}`}
              >
                <motion.div
                  className="relative w-full h-full preserve-3d"
                  animate={{ rotateY: isFlipped || isMatched ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {/* Back (hidden) */}
                  <div className="absolute inset-0 backface-hidden">
                    <div className="w-full h-full rounded-xl bg-gradient-to-br from-aws-orange to-aws-orange-dark flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">?</span>
                    </div>
                  </div>

                  {/* Front (revealed) */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180">
                    <div className={`w-full h-full rounded-xl p-2 flex items-center justify-center text-center shadow-lg ${
                      isMatched 
                        ? 'bg-green-100 dark:bg-green-900/30 border-2 border-green-500' 
                        : card.type === 'term'
                        ? 'bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-700'
                        : 'bg-purple-100 dark:bg-purple-900/30 border-2 border-purple-300 dark:border-purple-700'
                    }`}>
                      <span className={`text-xs sm:text-sm font-medium ${
                        isMatched 
                          ? 'text-green-700 dark:text-green-400'
                          : card.type === 'term'
                          ? 'text-blue-700 dark:text-blue-400'
                          : 'text-purple-700 dark:text-purple-400'
                      }`}>
                        {card.content}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 flex justify-center gap-6 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-blue-200 dark:bg-blue-800"></div>
            <span className="text-slate-600 dark:text-slate-400">Service Name</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-purple-200 dark:bg-purple-800"></div>
            <span className="text-slate-600 dark:text-slate-400">Description</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-200 dark:bg-green-800"></div>
            <span className="text-slate-600 dark:text-slate-400">Matched</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
