# Quick Reference Guide

## 🎯 Common Tasks

### Add a New Project
1. Edit `src/lib/portfolioData.ts`
2. Add to `projects` array:
```typescript
{
  id: 'project-id',
  title: 'Project Name',
  description: 'Brief description',
  image: '/images/projects/thumb.jpg',
  tags: ['React', 'Next.js', 'GSAP'],
  liveUrl: 'https://...',
  githubUrl: 'https://...',
  featured: true,
}
```

### Update Skills
Edit `src/lib/portfolioData.ts` skills array:
```typescript
{
  category: 'Frontend',
  items: ['React', 'Next.js', 'TypeScript', ...],
}
```

### Change Accent Color
Edit `tailwind.config.ts`:
```typescript
colors: {
  accent: '#YOUR_COLOR',
}
```

### Modify Animation Speed
Edit `src/lib/constants.ts`:
```typescript
ANIMATION_DURATION.NORMAL = 0.6  // Change duration
```

## 🔧 Running Commands

```bash
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm run start            # Run production build locally
npm run lint             # Check code style
npm run build --analyze  # Analyze bundle size (after setup)
```

## 📁 File Structure Quick Reference

```
Portfolio/
├── src/app/               # Next.js pages
│   ├── layout.tsx        # Root layout, includes Nav + Footer
│   └── page.tsx          # Home page (all sections)
│
├── src/components/
│   ├── sections/         # Hero, About, Skills, Projects, etc.
│   ├── common/          # Reusable: Navigation, Footer
│   └── animations/      # Animation wrappers: ScrollReveal
│
├── src/lib/
│   ├── animations.ts    # GSAP utilities (createScrollReveal, etc.)
│   ├── constants.ts     # Timing, easing, animation values
│   └── portfolioData.ts # ALL CONTENT (name, projects, skills, etc.)
│
├── src/styles/
│   └── globals.css      # Global CSS + animations
│
├── public/images/       # Add images here
│   └── projects/        # Project thumbnails
│
├── netlify.toml         # Deployment config
├── tailwind.config.ts   # Styling config
├── next.config.js       # Next.js config
└── README.md            # Full documentation
```

## 🎨 CSS/Styling Reference

### Custom Classes (in globals.css)
```css
.text-gradient      /* Blue to purple gradient text */
.container-wide     /* Full-width container with max-width + padding */
.section-snap       /* CSS snap alignment (reserved for future use) */
```

### Tailwind Classes (most used)
```
bg-dark             /* Dark background (#0a0a0a) */
text-accent         /* Blue accent color (#3b82f6) */
border-white/10     /* White border with 10% opacity */
hover:border-accent /* Change border on hover */
```

## ⚡ Animation Patterns

### Scroll Reveal (fade in on scroll)
```tsx
<ScrollReveal>
  <div>Content that fades in</div>
</ScrollReveal>
```

### GSAP in useEffect
```tsx
useEffect(() => {
  gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 0.6,
    scrollTrigger: {
      trigger: element,
      start: 'top 75%',
    }
  })
}, [])
```

### Staggered Animation
```tsx
gsap.from(elements, {
  opacity: 0,
  stagger: 0.1,  // Delay between each element
  // ... other properties
})
```

## 🔍 Debug Mode

Add to any component:
```tsx
useEffect(() => {
  console.log('Component mounted')
  console.log('GSAP plugins:', gsap.plugins)
  return () => console.log('Component unmounted')
}, [])
```

View ScrollTrigger markers:
```tsx
// In animations.ts, change:
markers: false  →  markers: true
```

## 🎯 Performance Tips

1. **Use React.memo** for non-animating components to prevent re-renders
2. **Lazy load** images with Next.js Image component
3. **Code split** heavy sections with dynamic imports
4. **Minimize animations** on mobile devices
5. **Use will-change** sparingly: `will-change: transform`

## 🚀 Deployment

### Local Testing (like production)
```bash
npm run build
npm run start
# Visit http://localhost:3000
```

### Push to Netlify
```bash
git add .
git commit -m "Your message"
git push origin main
# Netlify auto-deploys on push
```

## 🔐 Environment Variables

Create `.env.local` (not committed):
```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_ID=G_XXXXX
FORMSPREE_ENDPOINT=https://...
```

Use in code:
```tsx
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
```

## 📱 Responsive Breakpoints

```
sm: 640px   (mobile portrait)
md: 768px   (tablet)
lg: 1024px  (desktop)
xl: 1280px  (wide desktop)
```

Usage in Tailwind:
```html
<div class="w-full md:w-1/2 lg:w-1/3">
  Responsive width
</div>
```

## 🧪 Testing Focus Areas

- [ ] Mobile responsiveness (test on phone)
- [ ] Keyboard navigation (Tab key)
- [ ] Screen reader (VoiceOver, NVDA)
- [ ] Scroll animations (smooth on 60fps)
- [ ] Form submission
- [ ] Social links (open in new tab)

## 🎓 Learning Resources

- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Tailwind Docs: https://tailwindcss.com/docs
- Next.js App Router: https://nextjs.org/docs/app
- TypeScript Handbook: https://www.typescriptlang.org/docs/

---

💡 **Tip**: Most edits go in `src/lib/portfolioData.ts`. Content changes don't require rebuilding the component structure!
