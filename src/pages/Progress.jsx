import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Trophy, Target, Flame, BarChart, Book, Brain, 
  RefreshCw, ChevronRight, TrendingUp, Award, Calendar
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { servicesByCategory, categories } from '../data/services';

export default function Progress() {
  const { 
    progress, 
    getServiceProgress, 
    getQuizStats, 
    resetProgress 
  } = useProgress();
  
  const serviceProgress = getServiceProgress();
  const quizStats = getQuizStats();

  // Flatten all services from servicesByCategory
  const allServices = Object.values(servicesByCategory).flat();
  const categoryProgress = categories.map(cat => {
    const categoryServices = allServices.filter(s => s.category === cat.id);
    const completed = categoryServices.filter(s => 
      progress.completedServices.includes(s.id)
    ).length;
    return {
      ...cat,
      total: categoryServices.length,
      completed,
      percentage: categoryServices.length > 0 
        ? Math.round((completed / categoryServices.length) * 100) 
        : 0
    };
  });

  const totalServices = allServices.length;
  const completedServices = progress.completedServices.length;
  const overallPercentage = Math.round((completedServices / totalServices) * 100);

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="section-title mb-2">Your Progress</h1>
          <p className="section-subtitle mx-auto">
            Track your learning journey and stay motivated
          </p>
        </motion.div>

        {/* Overview Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8"
        >
          {/* Streak */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Streak</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              {progress.streak} <span className="text-lg">days</span>
            </div>
          </div>

          {/* Services Completed */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Book className="w-5 h-5 text-green-500" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Services</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              {completedServices} <span className="text-lg text-slate-500">/ {totalServices}</span>
            </div>
          </div>

          {/* Quiz Score */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Brain className="w-5 h-5 text-purple-500" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Avg Score</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              {quizStats.avgScore}<span className="text-lg">%</span>
            </div>
          </div>

          {/* Quizzes Taken */}
          <div className="card p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Target className="w-5 h-5 text-blue-500" />
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Quizzes</div>
            </div>
            <div className="text-3xl font-bold text-slate-900 dark:text-white">
              {quizStats.totalTaken}
            </div>
          </div>
        </motion.div>

        {/* Overall Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-aws-orange" />
              Overall Progress
            </h2>
            <span className="text-2xl font-bold text-aws-orange">{overallPercentage}%</span>
          </div>
          
          <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden mb-4">
            <motion.div
              className="h-full bg-gradient-to-r from-aws-orange to-aws-orange-dark rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${overallPercentage}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>

          <p className="text-slate-600 dark:text-slate-400">
            {overallPercentage >= 80 
              ? "🎉 You're almost there! Keep up the great work!"
              : overallPercentage >= 50
              ? "💪 Great progress! You're over halfway through."
              : overallPercentage >= 25
              ? "📚 Good start! Keep learning every day."
              : "🚀 Just getting started! Every journey begins with a single step."}
          </p>
        </motion.div>

        {/* Category Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <BarChart className="w-5 h-5 text-aws-orange" />
            Progress by Category
          </h2>

          <div className="space-y-4">
            {categoryProgress.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.05 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <Link 
                    to={`/services/${cat.id}`}
                    className="font-medium text-slate-900 dark:text-white hover:text-aws-orange transition-colors flex items-center gap-1"
                  >
                    {cat.name}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                  <span className="text-sm text-slate-500 dark:text-slate-400">
                    {cat.completed} / {cat.total}
                  </span>
                </div>
                <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-aws-orange rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${cat.percentage}%` }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.05 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quiz History */}
        {progress.quizScores.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6 mb-8"
          >
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-aws-orange" />
              Recent Quiz Scores
            </h2>

            <div className="space-y-3">
              {progress.quizScores.slice(-5).reverse().map((quiz, i) => {
                const percentage = Math.round((quiz.score / quiz.total) * 100);
                const isPassing = percentage >= 72;
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700/50 rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isPassing ? 'bg-green-100 dark:bg-green-900/30' : 'bg-amber-100 dark:bg-amber-900/30'
                      }`}>
                        <Trophy className={`w-5 h-5 ${isPassing ? 'text-green-500' : 'text-amber-500'}`} />
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 dark:text-white">
                          {quiz.category === 'all' ? 'All Categories' : 
                            categories.find(c => c.id === quiz.category)?.name || quiz.category}
                        </div>
                        <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(quiz.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                    <div className={`text-xl font-bold ${isPassing ? 'text-green-500' : 'text-amber-500'}`}>
                      {percentage}%
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="card p-6 mb-8"
        >
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-aws-orange" />
            Achievements
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { 
                id: 'first-service', 
                title: 'First Step', 
                desc: 'Complete 1 service',
                unlocked: completedServices >= 1,
                icon: '🎯'
              },
              { 
                id: 'five-services', 
                title: 'Getting Started', 
                desc: 'Complete 5 services',
                unlocked: completedServices >= 5,
                icon: '📚'
              },
              { 
                id: 'quiz-taker', 
                title: 'Quiz Taker', 
                desc: 'Take your first quiz',
                unlocked: quizStats.totalTaken >= 1,
                icon: '🧠'
              },
              { 
                id: 'perfect-score', 
                title: 'Perfect!', 
                desc: 'Score 100% on a quiz',
                unlocked: progress.quizScores.some(q => q.score === q.total),
                icon: '⭐'
              },
              { 
                id: 'streak-3', 
                title: 'On Fire', 
                desc: '3 day streak',
                unlocked: progress.streak >= 3,
                icon: '🔥'
              },
              { 
                id: 'streak-7', 
                title: 'Week Warrior', 
                desc: '7 day streak',
                unlocked: progress.streak >= 7,
                icon: '💪'
              },
              { 
                id: 'halfway', 
                title: 'Halfway There', 
                desc: 'Complete 50% of services',
                unlocked: overallPercentage >= 50,
                icon: '🎖️'
              },
              { 
                id: 'master', 
                title: 'AWS Master', 
                desc: 'Complete all services',
                unlocked: overallPercentage >= 100,
                icon: '🏆'
              },
            ].map((achievement) => (
              <div
                key={achievement.id}
                className={`p-4 rounded-xl text-center transition-all ${
                  achievement.unlocked
                    ? 'bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-2 border-amber-200 dark:border-amber-700'
                    : 'bg-slate-50 dark:bg-slate-700/50 opacity-50'
                }`}
              >
                <div className="text-3xl mb-2 grayscale-0 transition-all" style={{ 
                  filter: achievement.unlocked ? 'none' : 'grayscale(100%)' 
                }}>
                  {achievement.icon}
                </div>
                <div className="font-semibold text-sm text-slate-900 dark:text-white">
                  {achievement.title}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  {achievement.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Reset Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <button
            onClick={() => {
              if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
                resetProgress();
              }
            }}
            className="inline-flex items-center gap-2 px-4 py-2 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Reset All Progress
          </button>
        </motion.div>
      </div>
    </div>
  );
}
