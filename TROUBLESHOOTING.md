# 🔧 Portfolio Troubleshooting Guide

## Quick Diagnosis Steps

If your portfolio isn't working, follow these steps in order:

### 1. Check Development Server

```bash
npm run dev
```

- ✅ Should start on `http://localhost:3000`
- ❌ If it fails, run `npm install` first

### 2. Verify Dependencies

```bash
npm list framer-motion tailwindcss
```

Expected versions:

- `framer-motion@12.23.12`
- `tailwindcss@3.4.0`

### 3. Clear Cache and Reinstall

```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Common Problems & Solutions

### Problem: "Loading screen shows but no content after"

**Cause**: CSS height/scroll issues
**Solution**:

1. Check `globals.css` has proper body/html height settings
2. Verify scenes have `h-screen` classes
3. Ensure scroll-based animations are properly configured

### Problem: "Animations not working"

**Cause**: Framer Motion version incompatibility
**Solution**:

```bash
npm install framer-motion@12.23.12
```

### Problem: "TypeScript errors with motion components"

**Cause**: Wrong framer-motion version or missing types
**Solution**:

```bash
npm install @types/react@^19.1.12 @types/react-dom@^19.1.9
npm install framer-motion@12.23.12
```

### Problem: "Tailwind styles not applying"

**Cause**: PostCSS configuration issues
**Solution**:

1. Ensure `postcss.config.js` exists:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

2. Check `tailwind.config.js` content paths
3. Verify `globals.css` imports:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Problem: "Blank screen or console errors"

**Cause**: Component import issues
**Solution**:

1. Check browser console (F12)
2. Verify all scene components exist and export properly
3. Ensure all imports use correct paths

### Problem: "Performance issues/laggy animations"

**Cause**: Too many animated elements
**Solution**:

1. Reduce number of floating elements
2. Use `will-change: transform` sparingly
3. Consider using `transform3d` for GPU acceleration

## Development Tips

### Best Practices

1. **Always run `npm install` after cloning**
2. **Use exact dependency versions for stability**
3. **Clear browser cache when testing**
4. **Test on multiple browsers**

### Performance Monitoring

```bash
# Build and check bundle size
npm run build

# Preview production build
npm run preview
```

### Environment Requirements

- **Node.js**: 20.13.1+
- **npm**: 10.8.1+
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+

## Emergency Reset

If nothing else works:

```bash
# Complete reset
rm -rf node_modules package-lock.json .vite
npm cache clean --force
npm install
npm run dev
```

## Getting Help

1. **Check browser console** for error messages
2. **Verify all files exist** in correct locations
3. **Test with minimal loading screen** (reduce phases to 1)
4. **Compare package.json** with working version

## File Checklist

Essential files that must exist:

- ✅ `package.json` with correct dependencies
- ✅ `tailwind.config.js`
- ✅ `postcss.config.js`
- ✅ `tsconfig.json`
- ✅ `vite.config.ts`
- ✅ `src/styles/globals.css`
- ✅ All scene components in `src/components/`

If any are missing, copy from a working version or recreate based on the setup guide.
