# 🚀 Portfolio Website - Complete Setup Guide

A comprehensive guide to set up, understand, and customize your modern portfolio website. This guide is written for beginners and assumes no prior experience with web development.

## 👋 Welcome!

This portfolio website is built with modern web technologies to showcase your skills and projects. Don't worry if the technical terms seem overwhelming - this guide will walk you through everything step by step!

## 🛠️ What You Need Before Starting

### Required Software (Must Have)

1. **Node.js** - The JavaScript runtime that powers the website
   - **Where to get it**: [nodejs.org](https://nodejs.org/)
   - **Which version**: Download the "LTS" (Long Term Support) version
   - **Why you need it**: This runs the website on your computer

2. **A Code Editor** - Where you'll edit the website files
   - **Recommended**: [Visual Studio Code](https://code.visualstudio.com/) (Free)
   - **Alternative**: [Sublime Text](https://www.sublimetext.com/)
   - **Why you need it**: To edit text files and see your changes

3. **A Web Browser** - To view your website
   - **Best options**: Chrome, Firefox, Safari, or Edge
   - **Why you need it**: To see how your website looks

### Optional but Helpful

- **Git** - Version control (saves your changes safely)
- **GitHub Desktop** - Easy-to-use Git interface
- **Browser Dev Tools** - Built into your browser (F12 key)

## � Step-by-Step Installation

### Step 1: Verify Node.js Installation

1. Open your **Command Prompt** (Windows) or **Terminal** (Mac/Linux)
2. Type this command and press Enter:
   ```bash
   node --version
   ```
3. You should see something like `v20.13.1` or similar
4. If you get an error, go back and install Node.js first

### Step 2: Navigate to Your Project

1. Open Command Prompt/Terminal
2. Navigate to where you saved the portfolio folder:
   ```bash
   cd "C:\Users\YourUsername\Desktop\portfolio\updated\updated"
   ```
   **Replace `YourUsername` with your actual username!**

### Step 3: Install Dependencies

Dependencies are like ingredients for a recipe - your website needs them to work.

1. In the same Command Prompt/Terminal, type:
   ```bash
   npm install
   ```
2. Wait for it to finish (this might take 2-5 minutes)
3. You'll see lots of text scrolling - this is normal!
4. When it's done, you'll see a success message

### Step 4: Start the Website

1. Type this command:
   ```bash
   npm run dev
   ```
2. You'll see a message like "Local: http://localhost:5173"
3. Open your web browser
4. Go to `http://localhost:5173`
5. You should see your portfolio website! 🎉

### Step 5: Make Your First Change

Let's test that everything works by making a small change:

1. Open your code editor (Visual Studio Code)
2. Open the portfolio folder in your editor
3. Find the file: `src/components/IntroScene.tsx`
4. Look for your name in the file and change it
5. Save the file (Ctrl+S or Cmd+S)
6. Go back to your browser - it should automatically update!

## 🎯 Understanding the Website Structure

### Main Folders You'll Work With

```
portfolio/
├── src/                     # 👈 Your main working folder
│   ├── components/          # 👈 Individual sections of your website
│   │   ├── IntroScene.tsx   # 👈 Hero/landing section (your name, title)
│   │   ├── AboutScene.tsx   # 👈 About me section (your story)
│   │   ├── TechStackScene.tsx # 👈 Your skills and technologies
│   │   ├── ProjectsScene.tsx  # 👈 Your projects and work
│   │   ├── ContactScene.tsx   # 👈 Contact information and form
│   │   └── ...              # 👈 Other components
│   ├── styles/              # 👈 How things look (colors, fonts, etc.)
│   │   └── globals.css      # 👈 Main style file
│   └── App.tsx              # 👈 Main file that connects everything
├── public/                  # 👈 Images and files users can see
└── package.json             # 👈 List of what the website needs to work
```

### What Each Section Does

1. **IntroScene** - First thing visitors see (your name, job title)
2. **AboutScene** - Your background, experience, education
3. **TechStackScene** - Programming languages and tools you know
4. **ProjectsScene** - Cool things you've built
5. **ContactScene** - How people can reach you

## 🎨 Key Technologies (Don't Worry, You Don't Need to Learn These!)

### What Makes Your Website Work

- **React** - Makes the website interactive and fast
- **TypeScript** - Helps prevent bugs in the code
- **Tailwind CSS** - Makes styling easy with simple class names
- **Framer Motion** - Creates smooth animations
- **Vite** - Builds and serves your website quickly

### What This Means for You

- **React**: You'll work with `.tsx` files (like fancy HTML)
- **Tailwind**: You'll use classes like `bg-blue-500` instead of writing CSS
- **Framer Motion**: Animations are already built-in
- **Vite**: Automatically refreshes your browser when you make changes

## 🔧 Common Tasks You'll Want to Do

### Change Your Personal Information

**Your Name and Title** (in `src/components/IntroScene.tsx`):
```tsx
<h1>John Doe</h1>  {/* Change to your name */}
<h2>Full Stack Developer</h2>  {/* Change to your title */}
```

**Your Contact Info** (in `src/components/ContactScene.tsx`):
```tsx
email: "your.email@example.com",     // Your email
phone: "+1 (555) 123-4567",         // Your phone
location: "Your City, Country",      // Your location
```

### Add a New Skill/Technology

Go to `src/components/TechStackScene.tsx` and add to the `techStack` array:
```tsx
{
  name: "Python",                    // Technology name
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  color: "#3776AB",                  // Official Python blue
  category: "Backend",               // Frontend, Backend, Language, etc.
  level: 75,                         // Your skill level (0-100)
  description: "Data analysis and web development",
  // ... more details
}
```

### Add a New Project

Go to `src/components/ProjectsScene.tsx` and add to the projects array:
```tsx
{
  title: "My Awesome App",
  description: "A mobile app that helps people...",
  technologies: ["React Native", "Node.js", "MongoDB"],
  liveUrl: "https://myapp.com",
  codeUrl: "https://github.com/username/myapp",
  image: "/images/myapp.jpg"  // Put image in public/images/ folder
}
```

### Change Colors (Theme)

Go to `src/styles/globals.css` and modify the CSS variables:
```css
:root {
  --background: #ffffff;    /* Light mode background */
  --foreground: #000000;    /* Light mode text */
}

.dark {
  --background: #000000;    /* Dark mode background */
  --foreground: #ffffff;    /* Dark mode text */
}
```

## 🚨 Troubleshooting Guide

### Website Won't Start

**Problem**: `npm run dev` doesn't work
**Solutions**:
1. Make sure you're in the right folder
2. Run `npm install` first
3. Check that Node.js is installed: `node --version`
4. Try closing and reopening Command Prompt/Terminal

### Changes Don't Show Up

**Problem**: I edited a file but nothing changed
**Solutions**:
1. Make sure you saved the file (Ctrl+S)
2. Check the browser console for errors (F12, then Console tab)
3. Try refreshing the browser (Ctrl+R or Cmd+R)
4. Make sure the development server is still running

### Website Looks Broken

**Problem**: Layout is messed up or missing styles
**Solutions**:
1. Check that you didn't accidentally delete important code
2. Look for red error messages in the console (F12)
3. Try undoing your last change (Ctrl+Z)
4. Restart the development server (Ctrl+C, then `npm run dev`)

### Can't Find a File

**Problem**: The guide mentions a file I can't find
**Solutions**:
1. Use your editor's search function (Ctrl+Shift+F)
2. Check that you're looking in the `src` folder
3. File names are case-sensitive (IntroScene.tsx vs introscene.tsx)

## 🎯 Best Practices for Beginners

### Before Making Changes

1. **Save everything** you're working on
2. **Test the website** to make sure it's working
3. **Make small changes** one at a time
4. **Keep notes** of what you changed

### When Editing Files

1. **Be careful with punctuation** - missing commas or brackets break things
2. **Keep backup copies** of important files
3. **Don't delete code** you don't understand - comment it out instead
4. **Test frequently** - save and check after each change

### If Something Breaks

1. **Don't panic!** - breaking things is how you learn
2. **Undo your last change** (Ctrl+Z)
3. **Check the console** for error messages
4. **Ask for help** - everyone starts somewhere!

## 📚 Learning Resources

### If You Want to Learn More

- **React Basics**: [react.dev/learn](https://react.dev/learn)
- **JavaScript**: [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- **Tailwind CSS**: [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **YouTube**: Search for "React beginner tutorial"

### Helpful Tools

- **Browser DevTools**: Press F12 to inspect elements
- **VS Code Extensions**: Install "ES7+ React/Redux/React-Native snippets"
- **Color Picker**: Use [coolors.co](https://coolors.co) for choosing colors

## 🚀 Deploying Your Website

When you're ready to show your website to the world:

### Option 1: Netlify (Easiest)
1. Run `npm run build`
2. Drag the `dist` folder to [netlify.com](https://netlify.com)
3. Get a free website URL!

### Option 2: Vercel
1. Sign up at [vercel.com](https://vercel.com)
2. Connect your GitHub repository
3. Auto-deploy on every change!

### Option 3: GitHub Pages
1. Build the project: `npm run build`
2. Upload to GitHub
3. Enable GitHub Pages in repository settings

## 🆘 Getting Help

### When You're Stuck

1. **Read the error message** - it usually tells you what's wrong
2. **Google the error** - copy/paste it into Google
3. **Check Stack Overflow** - millions of developers help each other there
4. **Ask on Reddit** - r/webdev and r/reactjs are helpful communities
5. **Don't give up!** - Every expert was once a beginner

### Emergency Fixes

**If everything breaks and you can't fix it:**
1. Close everything
2. Delete the `node_modules` folder
3. Run `npm install` again
4. Run `npm run dev`
5. If that doesn't work, ask for help!

## 🎉 You've Got This!

Remember:
- **Everyone starts somewhere** - even senior developers Google basic things
- **Breaking things is normal** - that's how you learn what not to do
- **Small changes first** - build confidence with easy wins
- **Ask for help** - the development community is very welcoming
- **Have fun!** - you're building something awesome

---

**Need Help?** Don't hesitate to ask! The development community is full of people who love to help beginners succeed.

**Last Updated**: September 2025  
**Written for**: Complete beginners  
**Tested with**: Node.js v20+ and npm v10+

Happy coding! 🚀✨
