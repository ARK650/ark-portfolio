# Portfolio Website Documentation

## 🌟 Welcome! 

This documentation is designed to help you understand and modify this portfolio website. Everything is explained in simple terms with examples.

## 📁 Project Structure

```
src/
├── App.tsx                 # Main app component - the heart of the website
├── main.tsx               # Entry point - where React starts
├── index.css              # Basic CSS reset and setup
├── components/            # All reusable components
│   ├── ThemeProvider.tsx  # Light/dark mode functionality
│   ├── ThemeToggle.tsx    # The button to switch themes
│   ├── IntroScene.tsx     # Hero/landing section
│   ├── AboutScene.tsx     # About me section
│   ├── TechStackScene.tsx # Skills and technologies
│   ├── ProjectsScene.tsx  # Portfolio projects
│   ├── ContactScene.tsx   # Contact form
│   ├── TechModal.tsx      # Popup for tech details
│   ├── SocialLinks.tsx    # Social media links
│   └── FloatingElements.tsx # Animated background
└── styles/
    └── globals.css        # All custom styles and themes
```

## 🎨 Theme System (Light/Dark Mode)

### How It Works
The theme system uses React Context to share theme state across all components.

**Key Files:**
- `ThemeProvider.tsx` - Manages theme state and persistence
- `ThemeToggle.tsx` - The button users click to switch themes
- `globals.css` - Contains light and dark color definitions

### How to Customize Colors

**In `globals.css`, look for these sections:**

```css
:root {
  /* Light mode colors */
  --background: #ffffff;
  --foreground: #000000;
  /* ... more colors */
}

.dark {
  /* Dark mode colors */
  --background: #000000;
  --foreground: #ffffff;
  /* ... more colors */
}
```

**To change colors:**
1. Find the color variable you want to change
2. Update the hex code or color value
3. Make sure both light and dark modes have appropriate contrast

**In components, colors are used like this:**
```tsx
className="bg-white dark:bg-black text-gray-900 dark:text-white"
```
- `bg-white` = light mode background
- `dark:bg-black` = dark mode background
- `text-gray-900` = light mode text
- `dark:text-white` = dark mode text

## 🔧 Components Breakdown

### 1. App.tsx - The Main Controller
**What it does:**
- Wraps everything in ThemeProvider for theme switching
- Manages scroll-based animations between sections
- Controls which section is visible based on scroll position

**How to modify:**
- **Add new sections:** Import component, add to JSX
- **Change section order:** Rearrange components in the return statement
- **Adjust scroll behavior:** Modify the `sceneProgress` values

### 2. IntroScene.tsx - Hero Section
**What it displays:**
- Main headline and subheading
- Animated text effects
- Call-to-action elements

**Easy customizations:**
- **Change name/title:** Look for the main heading text
- **Update bio:** Find the description paragraph
- **Modify animations:** Adjust `motion` component props

### 3. AboutScene.tsx - About Me Section
**What it displays:**
- Personal information
- Timeline of experience/education
- Skills overview

**How to update:**
- **Change personal info:** Look for text content in JSX
- **Update timeline:** Find the timeline array and modify objects
- **Add timeline items:** Add new objects to the timeline array

**Timeline data structure:**
```javascript
{
  year: "2023",
  title: "Job Title",
  description: "What you did..."
}
```

### 4. TechStackScene.tsx - Skills Section
**What it displays:**
- Interactive cards for each technology
- Skill level progress bars
- Clickable cards that open detailed modals

**How to add new technologies:**
1. Find the `techStack` array
2. Add a new object with this structure:
```javascript
{
  name: "Technology Name",
  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/techname/techname-original.svg",
  color: "#BRANDCOLOR",
  category: "Frontend", // or Backend, Language, etc.
  level: 85, // 0-100 skill level
  description: "Brief description",
  funFact: "Interesting fact about this technology",
  yearStarted: 2020,
  projectsBuilt: 15,
  favoriteFeature: "What you love about it"
}
```

**Finding tech logos:**
- Go to https://cdn.jsdelivr.net/gh/devicons/devicon/
- Browse for your technology
- Use the "original" or "plain" version
- Copy the full URL

### 5. ProjectsScene.tsx - Portfolio Projects
**What it displays:**
- Grid of project cards
- Project descriptions and technologies used
- Links to live demos and code

**How to add projects:**
1. Find the projects array
2. Add new project objects
3. Include project images in the public folder
4. Update the image paths

### 6. ContactScene.tsx - Contact Information
**What it displays:**
- Contact form
- Social media links
- Contact information

**How to customize:**
- **Update contact info:** Change email, phone, location
- **Modify form:** Add/remove form fields
- **Update social links:** Change URLs and platforms

## 🎯 Common Customizations

### Changing Colors
1. **For entire themes:** Edit `globals.css` CSS variables
2. **For specific elements:** Modify Tailwind classes in components
3. **For brand colors:** Update the color values in tech stack or project data

### Adding Animations
The site uses Framer Motion for animations. Common patterns:

```tsx
<motion.div
  initial={{ opacity: 0, y: 50 }}    // Starting state
  animate={{ opacity: 1, y: 0 }}     // End state
  transition={{ duration: 0.8 }}     // How long it takes
>
  Content here
</motion.div>
```

### Responsive Design
The site uses Tailwind CSS for responsive design:
- `sm:` = small screens and up
- `md:` = medium screens and up
- `lg:` = large screens and up
- `xl:` = extra large screens and up

Example:
```tsx
className="text-sm md:text-lg lg:text-xl"
```
This makes text small on mobile, large on tablets, and extra large on desktops.

## 🚀 Deployment

### Building for Production
1. Open terminal in project folder
2. Run: `npm run build`
3. Upload the `dist` folder to your web host

### Environment Setup
- Make sure Node.js is installed
- Run `npm install` to install dependencies
- Run `npm run dev` to start development server

## 🐛 Common Issues and Solutions

### Theme Not Switching
1. Check if ThemeProvider wraps the entire app
2. Verify CSS classes are using `dark:` prefix correctly
3. Check browser console for errors

### Images Not Loading
1. Make sure images are in the `public` folder
2. Check image file paths are correct
3. Verify image file extensions match

### Animations Not Working
1. Check if Framer Motion is imported correctly
2. Verify motion components are used instead of regular divs
3. Check console for JavaScript errors

### Responsive Issues
1. Test on different screen sizes
2. Check Tailwind responsive classes are applied
3. Use browser dev tools to debug

## 💡 Tips for Beginners

1. **Start small:** Make one change at a time
2. **Use browser dev tools:** Right-click and "Inspect" to see styles
3. **Check the console:** Press F12 to see any error messages
4. **Save often:** Save your changes frequently while testing
5. **Test on mobile:** Always check how changes look on phones
6. **Ask for help:** Don't hesitate to reach out if you get stuck!

## 📝 Quick Reference

### Most Common Changes
- **Personal info:** `IntroScene.tsx` and `AboutScene.tsx`
- **Colors:** `globals.css` CSS variables
- **Projects:** `ProjectsScene.tsx` projects array
- **Skills:** `TechStackScene.tsx` techStack array
- **Contact info:** `ContactScene.tsx`

### File Extensions
- `.tsx` = React components with TypeScript
- `.css` = Stylesheet files
- `.md` = Documentation files (like this one)

### Key Concepts
- **Components:** Reusable pieces of UI
- **Props:** Data passed between components
- **State:** Data that can change over time
- **CSS Classes:** Styling instructions for elements

Remember: Every change you make should be tested by running `npm run dev` and checking the website in your browser!
