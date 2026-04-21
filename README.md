# Hassan Raza - Dynamic Animated Portfolio

A modern, motion-rich personal portfolio website built with Next.js, TypeScript, and GSAP animations. Features scroll-triggered animations, horizontal scrolling galleries, parallax effects, and a fully responsive design.

## 🚀 Features

- **Dynamic Scroll Animations**: Scroll-triggered reveals, parallax effects, and kinetic animations
- **Horizontal Scroll Gallery**: Projects section with smooth horizontal scrolling controlled by scroll progress
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety across the application
- **Accessibility First**: Respects prefers-reduced-motion, semantic HTML, keyboard navigation
- **Performance Optimized**: Fast build times with Next.js 16, optimized images, code splitting
- **Dark Modern Aesthetic**: Creative experimental design with gradient accents and animated backgrounds

## 📋 Sections

1. **Hero** - Animated introduction with gradient text and CTA buttons
2. **About** - Personal bio with parallax image and stats
3. **Skills** - Animated progress bars by category
4. **Projects** - Horizontal scroll gallery with project cards
5. **Experience** - Timeline with alternating cards and animated connector
6. **Education** - Education history and certifications
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.2 with App Router
- **Language**: TypeScript 5.3
- **Styling**: Tailwind CSS 3.4
- **Animations**: GSAP 3.12 + ScrollTrigger
- **Deployment**: Netlify

## 📦 Installation

```bash
# Clone the repository
cd Portfolio

# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Visit http://localhost:3000
```

## 🏗️ Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with nav/footer
│   └── page.tsx        # Home page with all sections
├── components/
│   ├── sections/       # Section components (Hero, About, Skills, etc.)
│   ├── common/         # Reusable components (Navigation, Footer)
│   └── animations/     # Animation wrappers (ScrollReveal, etc.)
├── hooks/              # Custom React hooks (useAnimations, useScrollProgress)
├── lib/
│   ├── animations.ts   # GSAP animation utilities
│   ├── constants.ts    # Animation timing and easing constants
│   └── portfolioData.ts # Placeholder content (replace with your data)
├── styles/
│   └── globals.css     # Global styles and keyframe animations
└── types/
    └── portfolio.ts    # TypeScript interfaces

public/
└── images/             # Project and section images
```

## 🎨 Customization

### Replace Content

1. **Personal Data**: Edit `src/lib/portfolioData.ts`
   - Update name, title, bio, email
   - Add your projects with descriptions and links
   - Update skills, experience, education

2. **Images**: Add images to `public/images/`
   - Profile image for About section
   - Project thumbnails
   - Background images (optional)

3. **Styles**: Modify `tailwind.config.ts` for colors, fonts, spacing
   - Change accent color (default: blue #3b82f6)
   - Add custom fonts
   - Adjust breakpoints if needed

4. **Social Links**: Update in portfolioData.ts or Navigation component

### Animation Configuration

All animation timings and easing are configured in `src/lib/constants.ts`:

```typescript
ANIMATION_DURATION.NORMAL  // 0.6s
ANIMATION_DELAY.STAGGER    // 0.1s
EASING.EASE_OUT           // cubic-bezier(0.16, 1, 0.3, 1)
```

## 🚀 Deployment

### Deploy to Netlify

1. **Connect Repository**
   - Push code to GitHub
   - Go to netlify.com and connect your repo
   - Netlify will auto-detect Next.js settings

2. **Build Settings** (already configured in netlify.toml)
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Environment Variables** (if needed)
   - Add any API keys via Netlify UI
   - Set NEXT_PUBLIC_SITE_URL if using dynamic features

4. **Custom Domain**
   - Go to Site Settings → Domain Management
   - Add your custom domain

### Deploy Manually

```bash
# Build for production
npm run build

# Preview production build locally
npm run start
```

## ♿ Accessibility

- ✅ Respects `prefers-reduced-motion` preference
- ✅ Semantic HTML structure
- ✅ ARIA labels on interactive elements
- ✅ Keyboard navigation support
- ✅ Sufficient color contrast ratios
- ✅ Tested with screen readers

## 📊 Performance

- Lighthouse Score Target: 90+
- Core Web Vitals: All Green
- Optimized images with Next.js Image component
- CSS minification and tree-shaking
- Code splitting for optimal bundle size

## 🔒 Security Headers

Netlify configuration includes:
- Content-Security-Policy
- X-Content-Type-Options
- X-Frame-Options
- Referrer-Policy

## 🐛 Troubleshooting

### Animations not playing?
- Check if your browser has `prefers-reduced-motion` enabled
- Verify GSAP and ScrollTrigger are loaded (check browser console)
- Clear browser cache and rebuild

### Horizontal scroll not working?
- Ensure project cards are wider than container
- Check browser zoom level (should be 100%)
- Test in Chrome/Edge for best performance

### TypeScript errors?
- Run `npm run build` to compile and check for errors
- Check tsconfig.json paths match your file structure

## 📝 Contact Form Integration

The contact form currently shows a success/error message but doesn't actually send emails. To enable submissions:

### Option 1: Netlify Forms (Recommended)
- Form already has `netlify` attribute
- Enable on Netlify dashboard → Form Settings
- Submissions appear in Netlify UI

### Option 2: Formspree
- Create account at formspree.io
- Update form action to your Formspree endpoint
- Add hidden `_redirect` field

### Option 3: Custom Backend
- Set up API endpoint (e.g., Resend, SendGrid)
- Update handleSubmit in Contact.tsx

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [GSAP Documentation](https://gsap.com/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Netlify Deploy](https://docs.netlify.com/)

## 📄 License

This portfolio template is free to use and modify for personal use.

## 🎉 Next Steps

1. Update content in `src/lib/portfolioData.ts`
2. Add your images to `public/images/`
3. Test locally with `npm run dev`
4. Deploy to Netlify
5. Set up custom domain
6. Add contact form backend
7. Enable analytics (Vercel Analytics or Plausible)

---

Built with ❤️ using Next.js and GSAP animations
