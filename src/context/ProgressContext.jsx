import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'aws-learning-progress';

const defaultProgress = {
  completedServices: [],
  quizScores: [],
  flashcardsReviewed: [],
  streak: 0,
  lastVisit: null,
  totalQuizzesTaken: 0,
  correctAnswers: 0,
  totalQuestions: 0,
};

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Check streak
        const lastVisit = parsed.lastVisit ? new Date(parsed.lastVisit) : null;
        const today = new Date();
        const diffDays = lastVisit 
          ? Math.floor((today - lastVisit) / (1000 * 60 * 60 * 24))
          : 0;
        
        if (diffDays > 1) {
          parsed.streak = 0;
        } else if (diffDays === 1) {
          parsed.streak = (parsed.streak || 0) + 1;
        }
        parsed.lastVisit = today.toISOString();
        return parsed;
      }
    }
    return { ...defaultProgress, lastVisit: new Date().toISOString() };
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const markServiceComplete = (serviceId) => {
    setProgress(prev => ({
      ...prev,
      completedServices: prev.completedServices.includes(serviceId)
        ? prev.completedServices
        : [...prev.completedServices, serviceId],
    }));
  };

  const markServiceIncomplete = (serviceId) => {
    setProgress(prev => ({
      ...prev,
      completedServices: prev.completedServices.filter(id => id !== serviceId),
    }));
  };

  const addQuizScore = (score, total, category) => {
    setProgress(prev => ({
      ...prev,
      quizScores: [...prev.quizScores, { score, total, category, date: new Date().toISOString() }],
      totalQuizzesTaken: prev.totalQuizzesTaken + 1,
      correctAnswers: prev.correctAnswers + score,
      totalQuestions: prev.totalQuestions + total,
    }));
  };

  const markFlashcardReviewed = (cardId) => {
    setProgress(prev => ({
      ...prev,
      flashcardsReviewed: prev.flashcardsReviewed.includes(cardId)
        ? prev.flashcardsReviewed
        : [...prev.flashcardsReviewed, cardId],
    }));
  };

  const resetProgress = () => {
    setProgress({ ...defaultProgress, lastVisit: new Date().toISOString() });
  };

  const getServiceProgress = () => {
    return {
      completed: progress.completedServices.length,
      percentage: (progress.completedServices.length / 20) * 100, // Adjust based on total services
    };
  };

  const getQuizStats = () => {
    const recent = progress.quizScores.slice(-10);
    const avgScore = recent.length > 0
      ? recent.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / recent.length
      : 0;
    return {
      totalTaken: progress.totalQuizzesTaken,
      avgScore: Math.round(avgScore),
      totalCorrect: progress.correctAnswers,
      totalQuestions: progress.totalQuestions,
    };
  };

  return (
    <ProgressContext.Provider value={{
      progress,
      markServiceComplete,
      markServiceIncomplete,
      addQuizScore,
      markFlashcardReviewed,
      resetProgress,
      getServiceProgress,
      getQuizStats,
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
};
