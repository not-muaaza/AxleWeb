# Axle Footer Component

A modern, responsive redesign of the Axle Global footer with enhanced interactivity, animations, and accessibility.

## 📁 Folder Structure

```
footer/
├── index.html          # Main footer markup
├── styles.css          # Styling and animations
└── README.md          # This file
```

## ✨ Features

### Design Improvements
- **Modern Layout**: Clean grid-based structure with better spacing
- **Enhanced CTA Section**: Eye-catching call-to-action with animated arrow icon
- **Gradient Orbs**: Animated background elements for visual depth
- **Smooth Transitions**: Elegant hover states and animations
- **Accessibility**: Proper semantic HTML and ARIA labels

### Interactive Elements
- **Animated Arrow Icon**: Pulsing and sliding animations
- **Hover Effects**: Links with animated underlines
- **Social Icons**: Interactive hover states with color transitions
- **Button Interactions**: Elevation and color shift on hover
- **Scroll Animations**: Elements fade in on page load

### Responsive Design
- **Mobile Optimized**: Adapts gracefully to all screen sizes
- **Tablet Layout**: Grid adjusts from 4 to 2 columns
- **Mobile Layout**: Single column for small devices
- **Touch-Friendly**: Larger tap targets for mobile users

## 🎨 Color Scheme

- **Primary**: `#5182ff` (Axle Blue)
- **Primary Dark**: `#3d5fb8`
- **Dark Background**: `#030712`
- **Dark Secondary**: `#1a1f35`
- **Text Light**: `rgba(255, 255, 255, 0.8)`
- **Text Muted**: `rgba(255, 255, 255, 0.5)`
- **Border**: `rgba(81, 130, 255, 0.2)`

## 📦 Sections

### 1. CTA Section
- Large heading: "Ready to Build Something That Actually Works?"
- Description text
- Call-to-action button
- Animated arrow icon

### 2. Quick Links
- Home, What We Build, Axle Launch, Work, About, Insights, Careers

### 3. Portfolio
- Web Design & Development
- Digital Marketing
- Branding & Identity
- Product Strategy
- UX/UI Design

### 4. Contact Information
- Phone numbers
- Physical address
- Email address

### 5. Brand Info
- Axle logo
- Tagline
- Social media links (LinkedIn, Facebook, Instagram, Behance)

### 6. Footer Bottom
- Copyright notice
- Credit line

## 🚀 Usage

### Basic Implementation
```html
<!-- Include the footer in your HTML -->
<link rel="stylesheet" href="footer/styles.css">
<!-- Add footer markup from index.html -->
```

### Integration with Axle Design
The footer is fully responsive and works seamlessly with the main Axle website design:
- Matches the dark theme
- Uses consistent typography
- Follows the color scheme
- Responsive breakpoints align with main site

## 🎬 Animations

### Available Animations
1. **fadeInUp**: Elements fade in and slide up on page load
2. **float**: Background orbs float up and down
3. **pulse**: Arrow icon pulses with shadow effect
4. **slideRight**: Arrow inside icon slides right continuously

### Animation Delays
- CTA Section: 0.2s
- Footer Content: 0.4s
- Footer Bottom: 0.6s

## 📱 Responsive Breakpoints

- **Desktop**: 1440px+
- **Tablet**: 1024px - 1439px
- **Large Mobile**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Small Mobile**: < 480px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels for social links
- Color contrast meets WCAG AA standards
- Keyboard navigation support
- Readable font sizes at all breakpoints

## 🔧 Customization

### Colors
Edit the CSS variables in `:root`:
```css
:root {
    --primary: #5182ff;
    --primary-dark: #3d5fb8;
    --dark-bg: #030712;
    /* ... */
}
```

### Fonts
Currently uses:
- Gordita (headings, branding)
- Poppins (body text)
- System fonts as fallback

### Spacing
Modify padding/gap values:
```css
.footer-container {
    padding: 0 64px; /* Change this */
}
```

## 🐛 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

Part of the Axle Global design system.

## 📞 Contact

For questions or updates:
- Email: hello@axleglobal.com
- Web: axleglobal.com
