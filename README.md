
# 🚀 ARK Portfolio

A modern, interactive portfolio website built with React, TypeScript, and Framer Motion. This portfolio showcases my projects, skills, and experience through a smooth, animated single-page application with scroll-based transitions and theme switching.

![Portfolio Preview](https://img.shields.io/badge/Portfolio-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.0-cyan)

## ✨ Features

- **Smooth Scroll Animations**: Seamless scene transitions powered by Framer Motion
- **Interactive UI**: Hover effects, click animations, and dynamic elements
- **Dark/Light Theme**: Toggle between themes with persistent storage
- **Responsive Design**: Optimized for all device sizes
- **Performance Optimized**: 60fps animations with GPU acceleration
- **Modern Tech Stack**: Built with cutting-edge technologies

## 🎯 Sections

1. **Hero Section**: Animated introduction with floating elements
2. **About**: Personal timeline and background information
3. **Tech Stack**: Interactive skill cards and technology showcase
4. **Projects**: Portfolio projects with detailed modals
5. **Contact**: Contact form and social media links

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations and transitions

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS preprocessing
- **Custom Gradients** - Dynamic background transitions

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **VS Code** - Development environment

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ARK650/ark-portfolio.git
   cd ark-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The site will hot-reload as you make changes

### Build for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## 📁 Project Structure

```
ark-portfolio/
├── public/                 # Static assets
├── src/
│   ├── components/        # React components
│   │   ├── AboutScene.tsx
│   │   ├── ContactScene.tsx
│   │   ├── IntroScene.tsx
│   │   ├── ProjectsScene.tsx
│   │   ├── TechStackScene.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── FloatingElements.tsx
│   │   └── ui/            # Reusable UI components
│   ├── styles/
│   │   └── globals.css    # Global styles
│   ├── types/             # TypeScript definitions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.tsx`
3. Update scroll progress mapping for proper transitions

### Modifying Animations
- Edit Framer Motion props in component files
- Adjust scroll-based animations in `App.tsx`
- Customize timing and easing functions

### Changing Themes
- Update color schemes in `tailwind.config.js`
- Modify theme variables in `ThemeProvider.tsx`
- Add new gradient combinations in background transitions

### Performance Tips
- Use `transform` for animations (GPU accelerated)
- Implement lazy loading for heavy components
- Optimize images and assets

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**ARK650** - cark98@gmail.com

Project Link: [https://github.com/ARK650/ark-portfolio](https://github.com/ARK650/ark-portfolio)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for amazing animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [React](https://reactjs.org/) for the component architecture
- [Vite](https://vitejs.dev/) for fast development experience

---

⭐ **Star this repository if you found it helpful!**
  