import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, XCircle, RotateCcw, ArrowRight, 
  Trophy, Target, Filter, ChevronRight, Zap
} from 'lucide-react';
import { quizQuestions, categories } from '../data/services';
import { useProgress } from '../context/ProgressContext';

export default function Quiz() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const { addQuizScore } = useProgress();

  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return quizQuestions;
    return quizQuestions.filter(q => q.category === selectedCategory);
  }, [selectedCategory]);

  const question = filteredQuestions[currentQuestion];

  const handleAnswer = (index) => {
    if (showResult) return;
    
    setSelectedAnswer(index);
    setShowResult(true);
    
    const isCorrect = index === question.correct;
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
    
    setAnswers(prev => [...prev, { 
      questionId: question.id, 
      selected: index, 
      correct: question.correct,
      isCorrect 
    }]);
  };

  const handleNext = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
      addQuizScore(score, filteredQuestions.length, selectedCategory);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
    setAnswers([]);
    setQuizStarted(false);
  };

  const startQuiz = () => {
    resetQuiz();
    setQuizStarted(true);
  };

  // Quiz Start Screen
  if (!quizStarted) {
    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-aws-orange to-aws-orange-dark rounded-2xl flex items-center justify-center shadow-xl">
              <Target className="w-10 h-10 text-white" />
            </div>
            <h1 className="section-title mb-2">Practice Quiz</h1>
            <p className="section-subtitle mx-auto">
              Test your knowledge of AWS services with exam-style questions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="card p-6 mb-6"
          >
            <h3 className="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <Filter className="w-5 h-5 text-aws-orange" />
              Select Category
            </h3>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-aws-orange text-white'
                    : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                }`}
              >
                All ({quizQuestions.length})
              </button>
              {categories.map((cat) => {
                const count = quizQuestions.filter(q => q.category === cat.id).length;
                if (count === 0) return null;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-aws-orange text-white'
                        : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                    }`}
                  >
                    {cat.name} ({count})
                  </button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="card p-6 mb-6"
          >
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold text-aws-orange">{filteredQuestions.length}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Questions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-aws-orange">~{Math.ceil(filteredQuestions.length * 1.5)}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Minutes</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <button onClick={startQuiz} className="btn-primary">
              <Zap className="w-5 h-5 mr-2" />
              Start Quiz
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  // Quiz Complete Screen
  if (quizComplete) {
    const percentage = Math.round((score / filteredQuestions.length) * 100);
    const isPassing = percentage >= 72; // AWS passing score

    return (
      <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="card p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
                isPassing ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'
              }`}
            >
              <Trophy className={`w-12 h-12 ${isPassing ? 'text-green-500' : 'text-amber-500'}`} />
            </motion.div>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {isPassing ? 'Great Job! 🎉' : 'Keep Practicing! 💪'}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {isPassing 
                ? 'You passed this practice quiz!' 
                : 'You need 72% to pass the actual exam.'}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-aws-orange">{score}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Correct</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className="text-3xl font-bold text-slate-900 dark:text-white">{filteredQuestions.length}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Total</div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-700/50 rounded-xl">
                <div className={`text-3xl font-bold ${isPassing ? 'text-green-500' : 'text-amber-500'}`}>
                  {percentage}%
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400">Score</div>
              </div>
            </div>

            {/* Review Answers */}
            <div className="text-left mb-8">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-4">Review Answers</h3>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {answers.map((answer, i) => {
                  const q = quizQuestions.find(q => q.id === answer.questionId);
                  return (
                    <div
                      key={i}
                      className={`p-3 rounded-lg border ${
                        answer.isCorrect 
                          ? 'border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20' 
                          : 'border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20'
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {answer.isCorrect ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm font-medium text-slate-900 dark:text-white line-clamp-2">
                            {q.question}
                          </p>
                          {!answer.isCorrect && (
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                              Correct: {q.options[answer.correct]}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button onClick={resetQuiz} className="btn-secondary">
                <RotateCcw className="w-5 h-5 mr-2" />
                Try Again
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Active Quiz
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-400">
              Question {currentQuestion + 1} of {filteredQuestions.length}
            </span>
            <span className="text-sm font-medium text-aws-orange">
              Score: {score}
            </span>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-aws-orange rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentQuestion + 1) / filteredQuestions.length) * 100}%` }}
            />
          </div>
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={question.id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="card p-6 mb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                question.difficulty === 'easy'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : question.difficulty === 'medium'
                  ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              }`}>
                {question.difficulty}
              </span>
              <span className="px-2 py-1 rounded text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400">
                {categories.find(c => c.id === question.category)?.name}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-slate-900 dark:text-white mb-6">
              {question.question}
            </h2>

            <div className="space-y-3">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrect = index === question.correct;
                const showCorrect = showResult && isCorrect;
                const showWrong = showResult && isSelected && !isCorrect;

                return (
                  <motion.button
                    key={index}
                    whileHover={!showResult ? { scale: 1.01 } : {}}
                    whileTap={!showResult ? { scale: 0.99 } : {}}
                    onClick={() => handleAnswer(index)}
                    disabled={showResult}
                    className={`w-full p-4 rounded-xl text-left transition-all border-2 ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : showWrong
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : isSelected
                        ? 'border-aws-orange bg-aws-orange/10'
                        : 'border-slate-200 dark:border-slate-700 hover:border-aws-orange/50 bg-white dark:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        showCorrect
                          ? 'bg-green-500 text-white'
                          : showWrong
                          ? 'bg-red-500 text-white'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span className="flex-1 text-slate-700 dark:text-slate-300">
                        {option}
                      </span>
                      {showCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {showWrong && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Explanation */}
        <AnimatePresence>
          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`card p-6 mb-6 border-2 ${
                selectedAnswer === question.correct
                  ? 'border-green-300 bg-green-50 dark:bg-green-900/20 dark:border-green-700'
                  : 'border-red-300 bg-red-50 dark:bg-red-900/20 dark:border-red-700'
              }`}
            >
              <div className="flex items-start gap-3">
                {selectedAnswer === question.correct ? (
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                ) : (
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0" />
                )}
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                    {selectedAnswer === question.correct ? 'Correct!' : 'Incorrect'}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Next Button */}
        {showResult && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <button onClick={handleNext} className="btn-primary">
              {currentQuestion < filteredQuestions.length - 1 ? (
                <>
                  Next Question
                  <ChevronRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  See Results
                  <Trophy className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
