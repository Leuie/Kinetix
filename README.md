# ⚡ Kinetix Performance OS

[![Svelte](https://img.shields.io/badge/Svelte-5.0-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![SvelteKit](https://img.shields.io/badge/SvelteKit-2.0-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> **The Kinetic Monolith: High-Performance Athletic Conditioning, Fasting & Nutrition OS**

A comprehensive, sovereign performance operating system designed for serious physical transformation. Unites intermittent fasting, whole-food nutrition, low-impact joint longevity, and elite bodyweight calisthenics into an authoritative, dark-mode digital coach.

## ✨ Features

### 🎯 **Comprehensive Health & Metabolic Tracking**
- **13+ Health Metrics**: Weight, BMI, body fat %, visceral fat, muscle mass, bone mass, protein %, BMR, metabolic age, and more
- **Athletic Conditioning Standards**: Calibrated to high-performance functional movement benchmarks
- **Fasting & Electrolyte Clock**: Native countdown timers for 16:8 and 20:4 intermittent fasting cycles with electrolyte prep checklists
- **Real-time Analytics**: Interactive charts showing weight trends, calorie burn patterns, and body composition changes
- **Progress Visualization**: Track your transformation with beautiful charts and goal projections

### 📅 **Structured Training System**
- **20-Week Progressive Plan**: Systematic approach to reaching your target weight and fitness goals
- **Multiple Exercise Types**: Walking, strength training (dumbbells, squats, pushups), and cardio
- **Flexible Scheduling**: Morning, evening, and all-day workout options
- **Exercise Logging**: Detailed tracking with distance, duration, sets, reps, calories, heart rate, and pace

### 🏆 **50-Achievement Gamification System**
- **5 Tier System**: Bronze → Silver → Gold → Platinum → Diamond
- **4 Rarity Levels**: Common → Rare → Epic → Legendary
- **7 Categories**: Milestones, Streaks, Exercise Goals, Weight Targets, Body Composition, Strength, Endurance
- **XP Rewards**: 50 XP to 10,000 XP per achievement with level progression
- **Trophy Wall**: Beautiful visual showcase of earned achievements with filtering and search

### 📊 **Smart Analytics & Insights**
- **Calorie Deficit Tracking**: Weekly and monthly projections based on your exercise plan
- **Streak Monitoring**: Track consecutive workout days with badge rewards
- **Body Composition Analysis**: Color coded metrics with status indicators (Excellent, Good, Fair, Poor)
- **Goal Projections**: Visual timeline showing projected achievement of target weight

### 🎨 **Modern User Experience**
- **Dark Theme**: Eye friendly interface optimized for daily use
- **Responsive Design**: Perfect experience on mobile, tablet, and desktop
- **Intuitive Navigation**: Clean sidebar navigation with quick stats
- **Daily Motivation**: Curated motivational quotes with category-based rotation

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Supabase account (for database)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/project-glow-up.git
   cd project-glow-up
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Set up the database**
   - Run the SQL migrations in `/supabase/migrations/` in your Supabase dashboard
   - Or use the Supabase CLI to apply migrations

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5173`

## 🏗️ Tech Stack

### **Frontend**
- **[Svelte 5](https://svelte.dev/)** - Reactive UI framework with runes
- **[SvelteKit](https://kit.svelte.dev/)** - Full stack framework with SSR/SSG
- **[TypeScript](https://www.typescriptlang.org/)** - Type safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility first CSS framework
- **[DaisyUI](https://daisyui.com/)** - Tailwind CSS component library
- **[Lucide Svelte](https://lucide.dev/)** - Beautiful SVG icons

### **Backend & Database**
- **[Supabase](https://supabase.com/)** - PostgreSQL database with real-time subscriptions
- **Row Level Security (RLS)** - Secure data access patterns
- **Authentication** - Email/password with session management

### **Data Visualization**
- **[Chart.js](https://www.chartjs.org/)** - Interactive charts and graphs
- **[date-fns](https://date-fns.org/)** - Date manipulation and formatting

### **Development Tools**
- **[Vite](https://vitejs.dev/)** - Fast build tool and dev server
- **[PostCSS](https://postcss.org/)** - CSS processing
- **[Autoprefixer](https://autoprefixer.github.io/)** - CSS vendor prefixing

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/          # Reusable UI components
│   │   ├── About.svelte
│   │   ├── Achievements.svelte
│   │   ├── Auth.svelte
│   │   ├── Dashboard.svelte
│   │   ├── Progress.svelte
│   │   ├── Schedule.svelte
│   │   ├── Settings.svelte
│   │   ├── Sidebar.svelte
│   │   └── TrophyWall.svelte
│   ├── stores/              # Svelte stores for state management
│   │   ├── auth.ts          # Authentication state
│   │   └── fitness.ts       # Fitness data and operations
│   ├── types/               # TypeScript type definitions
│   │   └── index.ts
│   ├── utils/               # Utility functions
│   │   ├── metrics.ts       # Health metric calculations
│   │   └── quotes.ts        # Motivational quotes system
│   └── supabase.ts          # Supabase client configuration
├── routes/                  # SvelteKit routes
│   ├── about/
│   ├── achievements/
│   ├── auth/
│   ├── progress/
│   ├── schedule/
│   ├── settings/
│   ├── trophy-wall/
│   └── +layout.svelte
├── app.css                  # Global styles
└── app.html                 # HTML template
```

## 🎯 Achievement System

### **Categories & Examples**
- **🎯 Milestones** (10): "First Blood", "Early Bird", "Perfect Week"
- **🔥 Streak Master** (10): "Iron Will", "Relentless", "Unstoppable Force"
- **💪 Exercise Goals** (8): "Rookie", "Century Club", "Ultimate Warrior"
- **⚖️ Weight Targets** (6): "Target Acquired", "Mission Complete", "New You"
- **🏋️ Body Composition** (6): "Heavy Lifter", "Hydra Slayer", "Metabolic Master"
- **💥 Strength Goals** (5): "Pushup Pro", "Iron Pumper", "Strength Master"
- **🏃 Endurance & Performance** (5): "Speed Demon", "Marathon Mindset", "Heart Warrior"

### **Tier System**
- **Bronze** (🥉): Starting achievements (50-200 XP)
- **Silver** (🥈): Consistent progress (200-400 XP)
- **Gold** (🥇): Major milestones (400-800 XP)
- **Platinum** (💎): Elite performance (800-1500 XP)
- **Diamond** (💠): Ultimate mastery (1500-10000 XP)

## 📊 Health Metrics Tracked

| Metric | Unit | Military Standard (37M) |
|--------|------|------------------------|
| Weight | lbs | Target: 175 lbs |
| BMI | - | Optimal: 22-23 |
| Body Fat | % | Excellent: 8-11% |
| Visceral Fat | - | Excellent: ≤4 |
| Body Water | % | Excellent: ≥61% |
| Skeletal Muscle | % | Excellent: ≥41% |
| Muscle Mass | lbs | Progressive increase |
| Bone Mass | lbs | Stable maintenance |
| Protein | % | Optimal: ≥18% |
| BMR | cal | Normal: 1600-1800 |
| Metabolic Age | years | Target: <37 |

## 🔧 Configuration

### **Environment Variables**
```env
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional: Analytics, Error Tracking, etc.
VITE_ANALYTICS_ID=your_analytics_id
```

### **Database Schema**
The application uses the following main tables:
- `users` - User authentication and profiles
- `health_metrics` - Body composition and health data
- `exercise_logs` - Workout and activity tracking
- `user_settings` - Personal preferences and goals
- `user_streaks` - Achievement and streak tracking

## 🚀 Deployment

### **Build for Production**
```bash
npm run build
```

### **Preview Production Build**
```bash
npm run preview
```

### **Deploy to Vercel**
```bash
npm i -g vercel
vercel --prod
```

### **Deploy to Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### **Development Guidelines**
1. Follow the existing code style and conventions
2. Add TypeScript types for new features
3. Test your changes thoroughly
4. Update documentation as needed
5. Ensure all achievements work correctly

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Creator

**Miguel Viddy**

This is my first application of many, built with the mission to improve and better some part of my life through technology. Every tool I create serves a meaningful purpose in bettering my daily existence. If it works for me I'm sure it will(can) work for you as well.

- 🎯 **Mission**: Create technology that genuinely improves lives
- 💪 **Focus**: Health, fitness, and personal transformation
- 🚀 **Vision**: First application of many life-improving tools

## 🙏 Acknowledgments

- Military fitness standards for health metric benchmarks
- Motivational quotes from various fitness and mindset experts
- Open source community for the amazing tools and libraries
- Everyone on their own transformation journey

---

<div align="center">

**Transform your body with analytical precision** 💪

[Get Started](https://projectglowup.app) • [View Achievements](https://projectglowup.app/achievements) • [Learn More](https://projectglowup.app/about)

</div>
