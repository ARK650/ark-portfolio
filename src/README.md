# Ark's Creative Developer Portfolio

A colorful, playful developer portfolio featuring whimsical scroll animations and five distinct scenes that reveal as you scroll. Built with React 18, TypeScript, Tailwind CSS v4, and Framer Motion.

## 🎨 Features

- **Fun Loading Screen** - Animated typing effect with floating particles
- **Theme Toggle** - Light/dark mode with smooth transitions
- **Social Links** - GitHub, Instagram, and Twitch with hover effects
- **5 Interactive Scenes:**
  - Intro with animated text
  - About section with illustrated timeline
  - Tech stack showcase with interactive skill bars
  - Projects section with draggable cards (6 live + 3 coming soon)
  - Contact section styled like a retro arcade game menu
- **Parallax Effects** - Smooth scroll-based animations
- **Responsive Design** - Works on all devices
- **Accessibility** - Keyboard navigation and screen reader friendly

## 🚀 Quick Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd ark-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

The built files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 🛠️ Tech Stack

- **React 18** - Latest React with hooks and concurrent features
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn/ui)
│   ├── AboutScene.tsx   # About section with timeline
│   ├── ContactScene.tsx # Contact form and info
│   ├── FloatingElements.tsx # Decorative animations
│   ├── IntroScene.tsx   # Hero section
│   ├── LoadingScreen.tsx # Initial loading animation
│   ├── ProjectsScene.tsx # Portfolio projects
│   ├── SocialLinks.tsx  # Social media links
│   ├── TechStackScene.tsx # Skills and technologies
│   ├── ThemeProvider.tsx # Theme context
│   └── ThemeToggle.tsx  # Light/dark mode switch
├── styles/
│   └── globals.css      # Global styles and animations
├── App.tsx              # Main application component
├── main.tsx            # React entry point
└── package.json        # Dependencies and scripts
```

## 🎯 Customization

### Update Personal Information

1. **Social Links** - Edit `/components/SocialLinks.tsx`:
   ```tsx
   const socialLinks = [
     {
       name: "GitHub",
       url: "https://github.com/YOUR_USERNAME", // Update this
       // ...
     },
     // ...
   ];
   ```

2. **About Timeline** - Edit `/components/AboutScene.tsx`:
   ```tsx
   const timelineItems = [
     {
       year: "2020-2024",
       title: "Your Education/Experience",
       description: "Your description",
       // ...
     },
     // ...
   ];
   ```

3. **Projects** - Edit `/components/ProjectsScene.tsx` to showcase your projects

4. **Tech Stack** - Edit `/components/TechStackScene.tsx` to reflect your skills

### Styling

- **Colors**: Modify the gradient classes in `/styles/globals.css`
- **Animations**: Adjust animation durations and easing in component files
- **Layout**: Update spacing and sizing using Tailwind classes

## 🎮 Interactive Features

- **Scroll Navigation**: Click navigation dots to jump between sections
- **Draggable Projects**: Drag project cards to explore them
- **Hover Effects**: Rich hover animations throughout the site
- **Theme Toggle**: Switch between light and dark modes
- **Parallax Scrolling**: Elements move at different speeds for depth

## 📱 Browser Support

- Chrome 88+
- Firefox 87+
- Safari 14+
- Edge 88+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin new-feature`
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🎉 Credits

- **Design Inspiration**: Modern portfolio trends and playful UI patterns
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)

---

Made with ❤️ by Ark