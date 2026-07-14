# NexaSoul Membership Drive Showcase - Vercel Deployment Guide

## Overview
This is a static HTML landing page for the NexaSoul Membership Drive showcase. The page is optimized for stall display with interactive elements and responsive design.

## Files Structure
```
outputs/
├── NexaSoul_Membership_Drive_Showcase.html  # Main HTML file
├── nexasoul-assets/                          # Image assets folder
│   ├── cu-logo.png
│   ├── nexasoul-logo.png
│   ├── qr-instagram.png
│   ├── qr-linkedin.png
│   ├── qr-website.png
│   └── qr-whatsapp.png
└── hero-effects.js                           # Hero animation script
```

## Deployment to Vercel

### Method 1: Direct Vercel Deployment (Recommended)

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Navigate to the project directory**:
   ```bash
   cd C:/Users/krish/Documents/Codex/2026-07-14/below-is-a-polished-structured-ai/outputs
   ```

3. **Deploy to Vercel**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? → `Y`
   - Which scope? → Select your account
   - Link to existing project? → `N` (for new project)
   - Project name → `nexasoul-showcase` (or your preferred name)
   - In which directory is your code located? → `./` (current directory)
   - Want to override settings? → `N`

5. **Your site will be live** at the URL provided by Vercel

### Method 2: GitHub + Vercel Integration

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NexaSoul Showcase"
   git branch -M main
   git remote add origin https://github.com/shubham123df/NexaSoul-Simulation.git
   git push -u origin main
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it as a static site
   - Click "Deploy"

## Features Implemented

### Interactive Elements
- ✅ **Live Stats Strip** - Animated counters that increment on scroll
- ✅ **Interactive Skills Selector** - Click categories to see different skill details
- ✅ **Expandable Journey Roadmap** - Click levels to expand/collapse details
- ✅ **Persistent Floating CTA** - Fixed button with QR popup
- ✅ **Weekly Rhythm Hover Effects** - Cards lift and glow on hover

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet and desktop optimizations
- ✅ Touch-friendly interactions

### Performance
- ✅ Single HTML file with embedded CSS/JS
- ✅ No external dependencies
- ✅ Optimized images
- ✅ Smooth animations

## Customization

### Updating Statistics
Edit the `data-target` attributes in the stats strip:
```html
<span class="stat-number" data-target="500">0</span>
```

### Updating Skills Content
Edit the `data-skills` JSON in skill categories:
```html
<div class="skill-cat" data-skills='[{"name":"Skill Name","progress":80,"time":"Time to master"}]'>
```

### Updating Testimonials
Edit the testimonial cards in the marquee section.

## Environment Variables
No environment variables required for this static site.

## Domain Configuration
After deployment, you can:
1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Images not loading
- Ensure `nexasoul-assets/` folder is uploaded
- Check image paths in HTML file
- Verify image file names match exactly

### Animations not working
- Ensure JavaScript is enabled in browser
- Check browser console for errors
- Verify `hero-effects.js` is present

### Mobile display issues
- Test on different screen sizes
- Check responsive CSS media queries
- Ensure viewport meta tag is present

## Support
For issues or questions:
- GitHub: https://github.com/shubham123df/NexaSoul-Simulation
- Contact NexaSoul team

## License
© 2026 NexaSoul - Chandigarh University
