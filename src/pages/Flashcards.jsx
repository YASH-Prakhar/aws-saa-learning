import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, ChevronRight, RotateCcw, Shuffle, 
  Filter, Check, X, BookOpen, Lightbulb
} from 'lucide-react';
import { flashcards, categories } from '../data/services';
import { useProgress } from '../context/ProgressContext';

export default function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const { markFlashcardReviewed, progress } = useProgress();

  const filteredCards = useMemo(() => {
    if (selectedCategory === 'all') return flashcards;
    return flashcards.filter(card => card.category === selectedCategory);
  }, [selectedCategory]);

  const currentCard = filteredCards[currentIndex];
  const reviewedCount = progress.flashcardsReviewed.length;

  const handleNext = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
    }, 150);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
    }, 150);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex(Math.floor(Math.random() * filteredCards.length));
    }, 150);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && currentCard) {
      markFlashcardReviewed(currentCard.id);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === ' ' || e.key === 'Enter') handleFlip();
  };

  return (
    <div 
      className="min-h-screen py-8 px-4 sm:px-6 lg:px-8"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="section-title mb-2">Flashcards</h1>
          <p className="section-subtitle mx-auto">
            Click cards to flip and reveal details. Use arrow keys to navigate.
          </p>
        </motion.div>

        {/* Stats & Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8"
        >
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-bold text-aws-orange">{currentIndex + 1}</span> / {filteredCards.length}
            </div>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              <span className="font-bold text-green-500">{reviewedCount}</span> reviewed
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShuffle}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Shuffle"
            >
              <Shuffle className="w-5 h-5" />
            </button>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-colors ${
                showFilters 
                  ? 'bg-aws-orange text-white' 
                  : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              <Filter className="w-5 h-5" />
              Filter
            </button>
          </div>
        </motion.div>

        {/* Filter Panel */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-6 overflow-hidden"
            >
              <div className="card p-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => { setSelectedCategory('all'); setCurrentIndex(0); }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                      selectedCategory === 'all'
                        ? 'bg-aws-orange text-white'
                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    All
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setSelectedCategory(cat.id); setCurrentIndex(0); }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-aws-orange text-white'
                          : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                      }`}
                    >
                      {cat.name}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Flashcard */}
        {currentCard && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="perspective-1000 mb-8"
          >
            <motion.div
              className="relative w-full aspect-[4/3] cursor-pointer preserve-3d"
              onClick={handleFlip}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden">
                <div className="card h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
                  <BookOpen className="w-12 h-12 text-aws-orange mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-center text-slate-900 dark:text-white mb-4">
                    {currentCard.front}
                  </h2>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">
                    Click to flip
                  </p>
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <div className="card h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-aws-orange/10 to-aws-orange/5 dark:from-aws-orange/20 dark:to-aws-orange/10 border-2 border-aws-orange/30">
                  <Lightbulb className="w-12 h-12 text-aws-orange mb-4" />
                  <p className="text-xl md:text-2xl font-medium text-center text-slate-900 dark:text-white mb-4">
                    {currentCard.back}
                  </p>
                  {currentCard.details && (
                    <p className="text-sm text-slate-600 dark:text-slate-400 text-center mt-4 px-4 py-3 bg-white/50 dark:bg-slate-800/50 rounded-lg">
                      💡 {currentCard.details}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handlePrev}
            className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleFlip}
            className="px-8 py-4 rounded-xl bg-aws-orange text-white font-semibold hover:bg-aws-orange-dark transition-colors"
          >
            {isFlipped ? 'Show Question' : 'Reveal Answer'}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleNext}
            className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-aws-orange rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentIndex + 1) / filteredCards.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Keyboard Hints */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400"
        >
          <span className="hidden sm:inline">
            Use <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">←</kbd> <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded">→</kbd> to navigate, 
            <kbd className="px-2 py-1 bg-slate-100 dark:bg-slate-800 rounded ml-2">Space</kbd> to flip
          </span>
        </motion.div>
      </div>
    </div>
  );
}
