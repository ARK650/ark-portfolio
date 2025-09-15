# 🎯 Component Guide for Beginners

This guide explains each component in simple terms with examples of what you can change.

## 🏠 App.tsx - The Main House

Think of this as the foundation of your house. It holds everything together.

**What's inside:**
- Theme system (light/dark mode)
- All the different sections (rooms in your house)
- Smooth scrolling between sections
- Background animations

**Common changes you might want to make:**
```tsx
// To change the default theme from light to dark:
<ThemeProvider defaultTheme="dark" storageKey="portfolio-theme">

// To add a new section, import it first:
import NewSection from "./components/NewSection";

// Then add it where you want it to appear:
<NewSection />
```

**What happens when you scroll:**
- The website automatically switches between sections
- Each section fades in and out smoothly
- Background elements move at different speeds (parallax effect)

---

## 🌙 ThemeProvider.tsx - The Light Switch System

This component manages the light/dark mode for the entire website.

**How it works:**
1. Remembers your theme choice in browser storage
2. Applies the theme to every component
3. Lets any component ask "what theme are we using?"

**Key parts:**
```tsx
// This saves your theme choice so it persists when you close the browser
localStorage.setItem(storageKey, theme);

// This applies the theme class to the entire website
document.documentElement.className = theme;
```

**Don't change this unless:** You want to add more themes (like "auto" mode)

---

## 🔘 ThemeToggle.tsx - The Light Switch Button

The actual button users click to switch between light and dark mode.

**What you can customize:**
```tsx
// Change the button size:
className="w-12 h-12"  // Make it bigger: w-16 h-16

// Change the colors:
className="bg-gradient-to-r from-purple-500 to-pink-500"
// Try: from-blue-500 to-green-500 for different colors

// Change the animation speed:
transition={{ duration: 0.3 }}  // Make it faster: 0.1, slower: 0.8
```

---

## 🚀 IntroScene.tsx - The Landing Page

This is the first thing visitors see - like your front door.

**What's typically here:**
- Your name and title
- Brief introduction
- Call-to-action button
- Animated text effects

**Easy changes:**
```tsx
// Change your name:
<h1>Your Name Here</h1>

// Change your title:
<h2>Full Stack Developer</h2>  // Change to your role

// Change the description:
<p>I create amazing web experiences...</p>  // Your personal pitch

// Change button text:
<button>View My Work</button>  // Or "Contact Me", "See Projects", etc.
```

---

## 👤 AboutScene.tsx - Your Story

This section tells visitors about you and your journey.

**What's usually included:**
- Personal background
- Education timeline
- Work experience
- Skills overview

**Timeline structure:**
```tsx
const timeline = [
  {
    year: "2023",
    title: "Senior Developer at Tech Company",
    description: "Built amazing applications and led a team of 5 developers..."
  },
  // Add more timeline items here
];
```

**To add a new timeline item:**
```tsx
{
  year: "2024",
  title: "Your New Achievement",
  description: "What you accomplished and what technologies you used..."
}
```

---

## 💻 TechStackScene.tsx - Your Skills Showcase

This displays your technical skills with interactive cards.

**Each tech card shows:**
- Technology logo
- Skill level (progress bar)
- Category (Frontend, Backend, etc.)
- Fun facts about the technology

**To add a new skill:**
```tsx
{
  name: "Vue.js",  // Technology name
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",  // Logo URL
  color: "#4FC08D",  // Official Vue.js green color
  category: "Frontend",  // Type of technology
  level: 75,  // Your skill level (0-100)
  description: "Progressive web framework",  // Brief description
  funFact: "Vue.js was created by Evan You while working at Google...",  // Interesting fact
  yearStarted: 2022,  // When you started learning it
  projectsBuilt: 8,  // How many projects you've built
  favoriteFeature: "The gentle learning curve and excellent documentation!"  // What you love about it
}
```

**Finding logo URLs:**
1. Go to https://cdn.jsdelivr.net/gh/devicons/devicon/
2. Search for your technology
3. Use the "original" version for colored logos
4. Copy the full URL

**Skill levels guide:**
- 0-30: Beginner (just started learning)
- 31-60: Intermediate (can build basic projects)
- 61-80: Advanced (confident and productive)
- 81-95: Expert (teaching others, advanced projects)
- 96-100: Master (contributing to the technology itself)

---

## 📁 ProjectsScene.tsx - Your Portfolio

This showcases your best work and projects.

**Each project should have:**
- Project name
- Description
- Technologies used
- Live demo link
- Source code link
- Screenshots

**Project structure:**
```tsx
{
  title: "E-commerce Website",
  description: "A full-stack online store built with React and Node.js...",
  technologies: ["React", "Node.js", "MongoDB", "Stripe"],
  liveUrl: "https://yourproject.com",
  codeUrl: "https://github.com/yourusername/project",
  image: "/project-images/ecommerce.jpg"  // Put images in public folder
}
```

**Tips for great project descriptions:**
- Explain what problem it solves
- Mention key features
- Include challenges you overcame
- Highlight technologies used

---

## 📧 ContactScene.tsx - How to Reach You

The contact section with your information and a contact form.

**What to customize:**
```tsx
// Your contact information:
const contactInfo = {
  email: "your.email@example.com",
  phone: "+1 (555) 123-4567",
  location: "Your City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername"
};
```

**Form fields you can modify:**
- Name field (required/optional)
- Email field (always required)
- Subject field (helpful for organization)
- Message field (main content)

---

## 🎨 Styling Guide

### Colors
The website uses a consistent color system:

```css
/* In globals.css */
:root {
  --primary: #your-brand-color;
  --secondary: #your-accent-color;
  /* etc. */
}
```

### Fonts
We use Inter for better readability:
```css
font-family: 'Inter', sans-serif;
```

To change fonts:
1. Find a font on Google Fonts
2. Import it in `globals.css`
3. Update the font-family declarations

### Responsive Design
The site works on all devices using these breakpoints:
- Mobile: Default styles
- Tablet: `md:` prefix
- Desktop: `lg:` prefix
- Large screens: `xl:` prefix

Example:
```tsx
className="text-sm md:text-lg lg:text-xl"
// Small text on mobile, larger on tablet, largest on desktop
```

---

## 🚨 Common Mistakes to Avoid

1. **Forgetting to save files:** Always save before testing changes
2. **Breaking the JSON structure:** Make sure commas and brackets are correct
3. **Wrong image paths:** Images go in the `public` folder
4. **Missing imports:** If you add a new component, import it first
5. **Typos in class names:** Tailwind is case-sensitive
6. **Not testing on mobile:** Always check your changes on different screen sizes

---

## 🔧 Development Workflow

1. **Make a small change** - Don't change too much at once
2. **Save the file** - Ctrl+S (Windows) or Cmd+S (Mac)
3. **Check the browser** - See if your change worked
4. **If something breaks** - Undo your change and try again
5. **Test on mobile** - Use browser dev tools to simulate mobile
6. **Commit your changes** - Save your progress with Git

---

## 🆘 Getting Help

If something isn't working:

1. **Check the browser console** - Press F12 and look for red error messages
2. **Read the error message** - It usually tells you what's wrong
3. **Google the error** - Someone else has probably had the same problem
4. **Ask for help** - Don't struggle alone!

## 🎉 You've Got This!

Remember: every expert was once a beginner. Take your time, experiment, and don't be afraid to break things - that's how you learn!
