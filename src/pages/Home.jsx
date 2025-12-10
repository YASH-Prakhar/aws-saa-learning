import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, BookOpen, HelpCircle, Gamepad2, Server, 
  Zap, Target, Trophy, Sparkles, Cloud, Database, Shield,
  ChevronRight
} from 'lucide-react';
import { useProgress } from '../context/ProgressContext';
import { services, categories } from '../data/services';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  const { getServiceProgress, getQuizStats, progress } = useProgress();
  const serviceProgress = getServiceProgress();
  const quizStats = getQuizStats();

  const features = [
    {
      icon: Server,
      title: 'Services Explorer',
      description: 'Browse all AWS services covered in the SAA-C03 exam with detailed explanations and exam tips.',
      link: '/services',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: BookOpen,
      title: 'Flashcards',
      description: 'Review services with interactive flip cards. Perfect for quick revision sessions.',
      link: '/flashcards',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: HelpCircle,
      title: 'Practice Quizzes',
      description: 'Test your knowledge with multiple choice and scenario-based questions.',
      link: '/quiz',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Gamepad2,
      title: 'Matching Game',
      description: 'Learn by matching services to their descriptions in this fun memory game.',
      link: '/matching',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const stats = [
    { value: services.length + '+', label: 'AWS Services', icon: Cloud },
    { value: '4', label: 'Exam Domains', icon: Target },
    { value: '65', label: 'Exam Questions', icon: HelpCircle },
    { value: '130', label: 'Minutes', icon: Zap },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-aws-orange/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-400" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow animation-delay-200" />
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[Cloud, Database, Shield, Server].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute text-slate-200 dark:text-slate-700"
              style={{
                left: `${20 + i * 20}%`,
                top: `${20 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Icon className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-aws-orange/10 text-aws-orange text-sm font-semibold mb-6"
            >
              <Sparkles className="w-4 h-4" />
              SAA-C03 Exam Prep
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-6">
              Master
              <span className="gradient-text"> AWS Services </span>
              <br />
              for the SAA-C03
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Interactive learning platform to help you ace the AWS Solutions Architect Associate certification exam.
            </p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services" className="btn-primary group">
                Start Learning
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/quiz" className="btn-secondary">
                Take a Quiz
              </Link>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                variants={item}
                className="card p-4 text-center"
              >
                <stat.icon className="w-6 h-6 text-aws-orange mx-auto mb-2" />
                <div className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">
              Learn Your Way
            </h2>
            <p className="section-subtitle mx-auto">
              Multiple interactive tools designed to help you understand and remember AWS services.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {features.map((feature, i) => (
              <motion.div key={i} variants={item}>
                <Link
                  to={feature.link}
                  className="card card-hover p-6 flex gap-5 group"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                      {feature.title}
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aws-orange group-hover:translate-x-1 transition-all" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="section-title mb-4">
              AWS Service Categories
            </h2>
            <p className="section-subtitle mx-auto">
              Explore services organized by their primary function.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {categories.map((category, i) => {
              const categoryServices = services.filter(s => s.category === category.id);
              return (
                <motion.div key={category.id} variants={item}>
                  <Link
                    to={`/services/${category.id}`}
                    className="card card-hover p-5 text-center group"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-aws-orange/20 to-aws-orange/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Server className="w-6 h-6 text-aws-orange" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {category.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {categoryServices.length} services
                    </p>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Progress Preview */}
      {(serviceProgress.completed > 0 || quizStats.totalTaken > 0) && (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                  <Trophy className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    Your Progress
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    {progress.streak > 0 ? `🔥 ${progress.streak} day streak!` : 'Keep learning daily!'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold text-aws-orange">{serviceProgress.completed}</div>
                  <div className="text-sm text-slate-500">Services Learned</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-aws-orange">{quizStats.avgScore}%</div>
                  <div className="text-sm text-slate-500">Avg Quiz Score</div>
                </div>
              </div>

              <Link
                to="/progress"
                className="mt-6 inline-flex items-center text-aws-orange font-semibold hover:gap-3 transition-all"
              >
                View Full Progress
                <ChevronRight className="w-5 h-5 ml-1" />
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-aws-orange via-aws-orange-dark to-aws-smile rounded-3xl p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Get Certified?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Start your journey to becoming an AWS Certified Solutions Architect today.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 bg-white text-aws-orange font-bold rounded-xl hover:bg-slate-100 transition-colors shadow-xl hover:shadow-2xl"
            >
              Get Started Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
