# NexaSoul Membership Drive Showcase

A modern, responsive landing page for the NexaSoul student developer community at Chandigarh University. This page is designed to attract new members during membership drives with an engaging UI and smooth interactions.

## 📁 File Structure

```
outputs/
├── NexaSoul_Membership_Drive_Showcase.html  # Main HTML file
├── nexasoul-assets/                         # Asset directory
│   ├── nexasoul-logo.png                    # NexaSoul logo
│   ├── cu-logo.png                          # Chandigarh University logo
│   ├── qr-whatsapp.png                      # WhatsApp community QR code
│   ├── qr-website.png                       # Website QR code
│   ├── qr-instagram.png                     # Instagram QR code
│   └── qr-linkedin.png                      # LinkedIn QR code
└── hero-effects.js                         # Hero section animations
```

## 🎨 Page Components

### 1. Navigation Bar
- **Fixed positioning** at the top of the page
- **Logo display**: NexaSoul and Chandigarh University logos
- **Navigation links**: Journey, What we do, For Parents
- **CTA button**: "Join NexaSoul ↗"
- **Behavior**: Only visible in the hero section, hides when scrolling past it

### 2. Hero Section
- **Gradient background** with animated blobs
- **Main headline**: "Don't just learn code. Build a future."
- **Subheadline**: Description of NexaSoul community
- **CTA buttons**: "Become a member →" and "See your journey ↓"
- **Quick info cards**: Learn together, Build projects, Compete boldly, Lead forward
- **Animations**: Smooth drift effects on background blobs

### 3. The NexaSoul Difference Section
- **Gradient background** (blue to cyan)
- **Key benefits grid**:
  - Practical skill development
  - Project-based learning
  - Mentors & peer network
  - Career-ready confidence

### 4. Journey Roadmap Section
- **Timeline layout** with alternating left/right cards
- **Six levels**:
  - Level 01: Foundation
  - Level 02: Learning cohorts
  - Level 03: Project builder
  - Level 04: Collaborate & compete
  - Level 05: Industry preparation
  - Level 06: Leadership & mentorship
- **Gradient line** connecting the levels

### 5. What Happens Inside the Club Section
- **Grid layout** showcasing activities:
  - Weekly learning labs
  - Projects with purpose
  - Hackathons & open source
  - Mentorship & belonging
- **Hover effects** with radial gradient backgrounds

### 6. Skills Section
- **Tag cloud layout** displaying skills:
  - Frontend, Backend, Python, Java & C++
  - DSA, Git & GitHub, Open Source
  - AI & ML, Competitive Programming
  - Hackathons, Databases, Cloud
  - Problem Solving, Interview Preparation
  - Resume Building, Communication, Leadership

### 7. Weekly Rhythm Section
- **Day-by-day breakdown**:
  - Monday: Learning session
  - Tuesday: Coding practice
  - Wednesday: Project building
  - Thursday: Mock interviews
  - Friday: Hackathon time
  - Weekend: Community meetups

### 8. For Parents Section
- **Light gradient background**
- **Six benefit cards** for parents:
  - Skills with substance
  - Guidance & mentorship
  - Career awareness
  - Confidence & teamwork
  - Real-world exposure
  - A lasting network

### 9. Footer Section
- **Gradient background** (blue to cyan)
- **Main content**:
  - Headline: "Ready to learn, build, and lead?"
  - WhatsApp QR code card (initially visible)
  - "Find your path →" button (triggers popup)
- **Footer bar**:
  - NexaSoul logo
  - "CODE • CONNECT • CONQUER" text
  - Chandigarh University logo
  - Light blue background

## ⚡ Features & Functionality

### 1. Scroll Animations
- **Intersection Observer** for reveal animations
- Elements fade in and slide up when scrolled into view
- Smooth transitions with 0.65s duration

### 2. Navbar Behavior
- **Hero-only visibility**: Navbar only shows in the hero section
- **Auto-hide**: Disappears when scrolling past the hero section
- **Smooth transitions**: Fade and slide animation when hiding/showing

### 3. QR Code Popup
- **Trigger**: "Find your path →" button in footer
- **Content**: Three QR code cards (Website, Instagram, LinkedIn)
- **Styling**: Large cards (200px width) with light background
- **Close button**: Gradient-styled button to dismiss popup

### 4. Responsive Design
- **Mobile-first approach**
- **Breakpoints**:
  - Desktop: 801px+
  - Tablet: 521px - 800px
  - Mobile: ≤520px
- **Adaptive layouts**: Grid changes from multi-column to single column

### 5. Hover Effects
- **Cards**: Lift and scale on hover
- **Buttons**: Transform and shadow enhancement
- **Skills tags**: Rotate and border color change
- **QR cards**: Scale and lift effect

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Flexbox and Grid layouts
  - CSS custom properties (variables)
  - Gradients and animations
  - Media queries for responsiveness
  - Backdrop filters for glassmorphism effects
- **JavaScript**:
  - DOM manipulation
  - Event listeners (scroll, click)
  - Intersection Observer API
  - Dynamic class toggling

## 🚀 How to Run

### Option 1: Python HTTP Server
```bash
cd outputs
python -m http.server 8080
```
Then open `http://localhost:8080/NexaSoul_Membership_Drive_Showcase.html` in your browser.

### Option 2: Direct File Open
Simply open `NexaSoul_Membership_Drive_Showcase.html` in any modern web browser.

## 🎨 Color Palette

- **Primary Blue**: #315cf4
- **Violet**: #7458f5
- **Cyan**: #04bfd5
- **Lime**: #9fdd42
- **Ink**: #0b1740
- **Subtext**: #5f6e8d
- **White**: #ffffff
- **Light Background**: #f7faff

## 📱 Responsive Breakpoints

- **Desktop**: 801px and above
  - Larger navigation bar (104px height)
  - Bigger logos (80px, 72px)
  - Full grid layouts

- **Tablet**: 521px - 800px
  - Medium navigation bar (82px height)
  - Adjusted logo sizes
  - 2-column grids

- **Mobile**: 520px and below
  - Compact navigation (69px height)
  - Single-column layouts
  - Smaller logos and text

## 🔧 Customization

### Changing Colors
Edit the CSS custom properties in the `:root` selector:
```css
:root {
  --blue: #315cf4;
  --violet: #7458f5;
  --cyan: #04bfd5;
  /* ... other variables */
}
```

### Modifying Content
All text content is in the HTML body. Search for specific text to update:
- Headlines: `<h1>`, `<h2>`, `<h3>` tags
- Descriptions: `<p>` tags
- Button text: `<a>` tags with button classes

### Adding New Sections
Follow the existing pattern:
```html
<section>
  <div class="wrap">
    <!-- Section content -->
  </div>
</section>
```

## 📝 Notes

- The page uses inline CSS for portability (all styles in `<style>` tags)
- JavaScript is embedded at the bottom of the HTML file
- Images are loaded from the `nexasoul-assets/` directory
- The page is self-contained and can be deployed anywhere static files are hosted

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is part of the NexaSoul Membership Drive at Chandigarh University.
