# AWS SAA-C03 Learning Hub

An interactive React website for learning AWS services to prepare for the AWS Certified Solutions Architect - Associate (SAA-C03) exam.

![AWS SAA Learning Hub](https://img.shields.io/badge/AWS-SAA--C03-FF9900?style=for-the-badge&logo=amazon-aws)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 🖥️ **Services Explorer** - Browse all AWS services with detailed explanations and exam tips
- 📚 **Interactive Flashcards** - Flip cards for quick revision sessions
- 🧠 **Practice Quizzes** - Multiple choice and scenario-based questions
- 🎮 **Matching Game** - Fun memory game to learn services
- 📊 **Progress Tracking** - Track completed services, quiz scores, and streaks
- 🔍 **Search & Filter** - Find services by name, category, or importance
- 🌙 **Dark Mode** - Easy on the eyes for late-night studying
- 📱 **Mobile Responsive** - Learn on any device
- ⚡ **Smooth Animations** - Powered by Framer Motion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or navigate to the project directory:**
   ```bash
   cd aws-saa-learning
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
aws-saa-learning/
├── public/
│   └── aws-icon.svg
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with navbar & footer
│   ├── context/
│   │   ├── ThemeContext.jsx    # Dark/Light mode
│   │   └── ProgressContext.jsx # Progress tracking (LocalStorage)
│   ├── data/
│   │   └── services.js         # AWS services, quiz questions, flashcards
│   ├── pages/
│   │   ├── Home.jsx            # Landing page
│   │   ├── Services.jsx        # Services explorer
│   │   ├── ServiceDetail.jsx   # Individual service page
│   │   ├── Flashcards.jsx      # Flashcard mode
│   │   ├── Quiz.jsx            # Quiz system
│   │   ├── MatchingGame.jsx    # Memory matching game
│   │   └── Progress.jsx        # Progress dashboard
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 📝 Adding More Services

Edit `src/data/services.js` to add more AWS services:

```javascript
{
  id: 'service-id',           // Unique identifier (used in URLs)
  name: 'Amazon Service',     // Full service name
  shortName: 'Service',       // Short name for cards
  category: 'compute',        // Category ID
  description: 'Brief description',
  fullDescription: 'Detailed description for the detail page',
  keyPoints: [
    'Key point 1',
    'Key point 2',
  ],
  useCases: ['Use case 1', 'Use case 2'],
  examTips: 'Important tips for the exam',
  difficulty: 'essential',    // 'essential', 'important', or 'good-to-know'
  relatedServices: ['ec2', 's3'],  // IDs of related services
}
```

### Adding Quiz Questions

```javascript
{
  id: 1,
  question: 'Your question here?',
  options: ['Option A', 'Option B', 'Option C', 'Option D'],
  correct: 0,  // Index of correct answer (0-3)
  explanation: 'Explanation of the correct answer',
  category: 'compute',
  difficulty: 'easy',  // 'easy', 'medium', or 'hard'
}
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the AWS-themed colors:

```javascript
colors: {
  aws: {
    orange: '#FF9900',
    'orange-dark': '#EC7211',
    'orange-light': '#FFAC31',
    squid: '#232F3E',
    smile: '#146EB4',
  },
}
```

### Adding New Categories

Edit the `categories` array in `src/data/services.js`:

```javascript
{ id: 'new-category', name: 'New Category', icon: 'IconName', color: 'blue' }
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy" - Vercel auto-detects Vite

Or use the CLI:
```bash
npm i -g vercel
vercel
```

### Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`

Or use the CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

### GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repo-name",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/repo-name/',
     // ...
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🔮 Future Enhancements

- [ ] Add more AWS services (100+)
- [ ] Scenario-based questions with architecture diagrams
- [ ] Spaced repetition for flashcards
- [ ] Export/import progress
- [ ] Study plans and schedules
- [ ] Timed practice exams
- [ ] Community discussion features
- [ ] Audio pronunciations
- [ ] Comparison tables between similar services
- [ ] AWS service icons/logos

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -m 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## ⚠️ Disclaimer

This is an unofficial study resource and is not affiliated with, endorsed by, or sponsored by Amazon Web Services (AWS). AWS and all related service names are trademarks of Amazon.com, Inc.

---

**Good luck with your AWS certification! 🎉**
