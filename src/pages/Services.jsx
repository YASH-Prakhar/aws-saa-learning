import { useState, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, Filter, Grid, List, ChevronRight, Check, 
  Server, HardDrive, Database, Network, Shield, Settings, 
  Link as LinkIcon, BarChart, X
} from 'lucide-react';
import { servicesByCategory, categories, services } from '../data/services';
import { useProgress } from '../context/ProgressContext';

const categoryIcons = {
  compute: Server,
  storage: HardDrive,
  database: Database,
  networking: Network,
  security: Shield,
  management: Settings,
  integration: LinkIcon,
  analytics: BarChart,
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Services() {
  const { category: categoryParam } = useParams();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const { progress, markServiceComplete, markServiceIncomplete } = useProgress();

  // Use the flattened `services` array (normalized categories)
  const allServices = services;
  const filteredServices = useMemo(() => {
    return allServices.filter(service => {
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           (service.description?.toLowerCase().includes(searchQuery.toLowerCase()) || service.details?.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || service.difficulty === selectedDifficulty;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const difficulties = [
    { id: 'all', label: 'All Levels' },
    { id: 'essential', label: 'Essential' },
    { id: 'important', label: 'Important' },
    { id: 'good-to-know', label: 'Good to Know' },
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="section-title mb-2">AWS Services</h1>
          <p className="section-subtitle">
            Explore {services.length}+ AWS services covered in the SAA-C03 exam
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 space-y-4"
        >
          {/* Search Bar */}
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-aws-orange focus:border-transparent outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`px-4 py-3 rounded-xl border flex items-center gap-2 transition-all ${
                showFilters 
                  ? 'bg-aws-orange text-white border-aws-orange' 
                  : 'border-slate-200 dark:border-slate-700 hover:border-aws-orange'
              }`}
            >
              <Filter className="w-5 h-5" />
              <span className="hidden sm:inline">Filters</span>
            </button>
            <div className="hidden sm:flex border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-3 ${viewMode === 'grid' ? 'bg-aws-orange text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-3 ${viewMode === 'list' ? 'bg-aws-orange text-white' : 'hover:bg-slate-100 dark:hover:bg-slate-700'}`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="card p-6 space-y-4">
                  {/* Categories */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Category
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <button
                        onClick={() => setSelectedCategory('all')}
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
                          onClick={() => setSelectedCategory(cat.id)}
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

                  {/* Difficulty */}
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Exam Importance
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {difficulties.map((diff) => (
                        <button
                          key={diff.id}
                          onClick={() => setSelectedDifficulty(diff.id)}
                          className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                            selectedDifficulty === diff.id
                              ? 'bg-aws-orange text-white'
                              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600'
                          }`}
                        >
                          {diff.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Results Count */}
        <div className="mb-4 text-sm text-slate-500 dark:text-slate-400">
          Showing {filteredServices.length} of {services.length} services
        </div>

        {/* Services Grid/List */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className={viewMode === 'grid' 
            ? 'grid sm:grid-cols-2 lg:grid-cols-3 gap-4' 
            : 'space-y-3'
          }
        >
          {filteredServices.map((service) => {
            const CategoryIcon = categoryIcons[service.category] || Server;
            const isCompleted = progress.completedServices.includes(service.id);
            
            return (
              <motion.div key={service.id} variants={item}>
                {viewMode === 'grid' ? (
                  <Link
                    to={`/service/${service.id}`}
                    className="card card-hover p-5 block group relative"
                  >
                    {/* Completion Badge */}
                    {isCompleted && (
                      <div className="absolute top-3 right-3 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-aws-orange/20 to-aws-orange/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CategoryIcon className="w-6 h-6 text-aws-orange" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-slate-900 dark:text-white truncate mb-1">
                          {service.name}
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                          {service.description || service.details || service.fullDescription}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        service.difficulty === 'essential' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                          : service.difficulty === 'important'
                          ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                          : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                      }`}>
                        {service.difficulty}
                      </span>
                      <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aws-orange group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ) : (
                  <Link
                    to={`/service/${service.id}`}
                    className="card card-hover p-4 flex items-center gap-4 group"
                  >
                    {isCompleted && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                    )}
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-aws-orange/20 to-aws-orange/10 flex items-center justify-center flex-shrink-0">
                      <CategoryIcon className="w-5 h-5 text-aws-orange" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {service.name}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 truncate">
                        {service.description || service.details || service.fullDescription}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded text-xs font-medium hidden sm:block ${
                      service.difficulty === 'essential' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                        : service.difficulty === 'important'
                        ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {service.difficulty}
                    </span>
                    <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-aws-orange transition-colors" />
                  </Link>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Empty State */}
        {filteredServices.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
              No services found
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
              }}
              className="btn-outline"
            >
              Clear Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
