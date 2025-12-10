import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, Check, X, BookOpen, Lightbulb, Target, 
  Link as LinkIcon, ChevronRight, ExternalLink
} from 'lucide-react';
import { services, categories } from '../data/services';
import { useProgress } from '../context/ProgressContext';

export default function ServiceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { progress, markServiceComplete, markServiceIncomplete } = useProgress();
  
  const service = services.find(s => s.id === id);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/services" className="btn-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.id === service.category);
  const isCompleted = progress.completedServices.includes(service.id);
  const relatedServices = service.relatedServices
    ?.map(id => services.find(s => s.id === id))
    .filter(Boolean) || [];

  const handleToggleComplete = () => {
    if (isCompleted) {
      markServiceIncomplete(service.id);
    } else {
      markServiceComplete(service.id);
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6"
        >
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-aws-orange transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Services
          </button>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="card p-8 mb-6"
        >
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 rounded-full bg-aws-orange/10 text-aws-orange text-sm font-medium">
                  {category?.name}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  service.difficulty === 'essential' 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    : service.difficulty === 'important'
                    ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                }`}>
                  {service.difficulty}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold font-display text-slate-900 dark:text-white mb-2">
                {service.name}
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                {service.description}
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleToggleComplete}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all ${
                isCompleted
                  ? 'bg-green-500 text-white hover:bg-green-600'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {isCompleted ? (
                <>
                  <Check className="w-5 h-5" />
                  Completed
                </>
              ) : (
                <>
                  <Target className="w-5 h-5" />
                  Mark Complete
                </>
              )}
            </motion.button>
          </div>

          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {service.fullDescription}
          </p>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="card p-6 mb-6"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
            <BookOpen className="w-5 h-5 text-aws-orange" />
            Key Points
          </h2>
          <ul className="space-y-3">
            {service.keyPoints.map((point, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300">{point}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card p-6 mb-6"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
            <Target className="w-5 h-5 text-aws-orange" />
            Common Use Cases
          </h2>
          <div className="flex flex-wrap gap-2">
            {service.useCases.map((useCase, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300"
              >
                {useCase}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Exam Tips */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="card p-6 mb-6 border-2 border-aws-orange/30 bg-aws-orange/5 dark:bg-aws-orange/10"
        >
          <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
            <Lightbulb className="w-5 h-5 text-aws-orange" />
            Exam Tips
          </h2>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            {service.examTips}
          </p>
        </motion.div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="card p-6"
          >
            <h2 className="flex items-center gap-2 text-xl font-bold text-slate-900 dark:text-white mb-4">
              <LinkIcon className="w-5 h-5 text-aws-orange" />
              Related Services
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {relatedServices.map((related) => (
                <Link
                  key={related.id}
                  to={`/service/${related.id}`}
                  className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
                >
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white">
                      {related.name}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {related.description}
                    </p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aws-orange group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        {/* External Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center"
        >
          <a
            href={`https://aws.amazon.com/${service.id}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-aws-orange hover:underline"
          >
            View on AWS Documentation
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
