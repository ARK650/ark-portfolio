/**
 * THEME PROVIDER COMPONENT - ThemeProvider.tsx
 * 
 * This component provides theme switching functionality (light/dark mode) throughout the entire app.
 * It uses React Context to share theme state globally and persists preferences in localStorage.
 * 
 * HOW IT WORKS:
 * 1. Creates a React Context for theme state
 * 2. Manages theme state (light/dark) and provides switching functions
 * 3. Persists theme choice in browser's localStorage
 * 4. Applies theme classes to document.documentElement for CSS targeting
 * 5. Provides useTheme hook for components to access theme state
 * 
 * USAGE IN OTHER COMPONENTS:
 * ```typescript
 * import { useTheme } from './ThemeProvider';
 * 
 * const MyComponent = () => {
 *   const { theme, setTheme, toggleTheme } = useTheme();
 *   
 *   return (
 *     <div className="bg-white dark:bg-black">
 *       <button onClick={toggleTheme}>Toggle Theme</button>
 *     </div>
 *   );
 * };
 * ```
 * 
 * CSS INTEGRATION:
 * - Adds 'light' or 'dark' class to <html> element
 * - Tailwind CSS uses 'dark:' prefix to apply dark mode styles
 * - Example: 'bg-white dark:bg-black' switches background color
 * 
 * CUSTOMIZATION:
 * - Change defaultTheme prop to set initial theme
 * - Modify storageKey to change localStorage key name
 * - Add additional themes by expanding Theme type
 */

import { createContext, useContext, useEffect, useState } from "react";

// TYPE DEFINITIONS
type Theme = "light" | "dark"; // Can be extended to include more themes like "auto"

type ThemeProviderProps = {
  children: React.ReactNode;  // All child components that will have access to theme
  defaultTheme?: Theme;       // Initial theme (defaults to "light" if not specified)
  storageKey?: string;        // localStorage key for persistence (defaults to "portfolio-theme")
};

type ThemeProviderState = {
  theme: Theme;                    // Current active theme
  setTheme: (theme: Theme) => void; // Function to set specific theme
  toggleTheme: () => void;         // Function to switch between light/dark
};

// Default state when no provider is found (fallback)
const initialState: ThemeProviderState = {
  theme: "light",
  setTheme: () => null,
  toggleTheme: () => null,
};

// Create React Context for theme state - this allows any component to access theme
const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

/**
 * THEME PROVIDER COMPONENT
 * 
 * This is the main provider component that wraps your entire app.
 * It manages theme state and provides functions to change themes.
 * 
 * PROPS:
 * - children: All components that need access to theme
 * - defaultTheme: Starting theme ("light" or "dark")
 * - storageKey: Key name for localStorage persistence
 * 
 * HOW TO WRAP YOUR APP:
 * ```jsx
 * <ThemeProvider defaultTheme="light" storageKey="my-app-theme">
 *   <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider({
  children,
  defaultTheme = "light",        // Default to light theme if nothing specified
  storageKey = "portfolio-theme", // localStorage key for persistence
  ...props
}: ThemeProviderProps) {
  
  // THEME STATE MANAGEMENT
  // Initialize theme from localStorage or use default
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      // Try to get saved theme from browser storage
      const stored = localStorage.getItem(storageKey) as Theme;
      console.log("Loading theme from localStorage:", stored);
      return stored || defaultTheme;
    } catch (error) {
      // If localStorage fails (private browsing, etc.), use default
      console.log("localStorage failed, using default theme:", defaultTheme);
      return defaultTheme;
    }
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Remove both classes first
    root.classList.remove("light", "dark");
    
    // Add the current theme class
    root.classList.add(theme);
    
    console.log("Theme changed to:", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("Setting theme to:", newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
      setTheme(newTheme);
    },
    toggleTheme: () => {
      const newTheme = theme === "light" ? "dark" : "light";
      console.log("Toggling theme from", theme, "to", newTheme);
      try {
        localStorage.setItem(storageKey, newTheme);
      } catch (error) {
        console.warn("Failed to save theme to localStorage:", error);
      }
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};