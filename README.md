# Car Info

An informative automotive website built with semantic HTML5 and modern CSS3.

## Project structure

```
car-info/
├── index.html           # Homepage
├── about.html           # About page
├── contact.html         # Contact page
├── css/
│   ├── reset.css        # Modern CSS reset
│   ├── variables.css    # CSS custom properties (design tokens)
│   ├── layout.css       # Layout utilities (grid, flex, header, footer)
│   └── main.css         # Components & page-specific styles
├── js/
│   └── main.js          # Minimal vanilla JavaScript
├── assets/
│   ├── images/          # Image assets (add your own)
│   ├── icons/           # Icons & favicon (add your own)
│   └── fonts/           # Web fonts (add your own)
└── README.md            # This file
```

## Getting started

This is a static, build-free project. No install step is required.

1. Open the folder in your code editor.
2. Open `index.html` directly in your browser, or serve it with any static server:

   **Python 3:**
   ```bash
   python -m http.server 8000
   ```

   **Node.js (http-server):**
   ```bash
   npx http-server
   ```

   **PHP:**
   ```bash
   php -S localhost:8000
   ```

3. Visit `http://localhost:8000` (or the URL your server reports).

## Design tokens

Colors, spacing, typography, breakpoints, and more are defined as CSS custom
properties in `css/variables.css`. Override them or add a `[data-theme="dark"]`
block to support dark mode.

## Accessibility

- Semantic HTML5 landmarks (`<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<aside>`)
- Skip-to-content link for keyboard users
- Visible focus states and `focus-visible` outlines
- `aria-current` on the active navigation link
- `aria-expanded` on the mobile menu toggle
- Form labels, required-field validation, and image `alt` text
- Respects `prefers-color-scheme: dark`

## Browser support

Modern evergreen browsers. CSS Grid, Flexbox, CSS custom properties, and
`:focus-visible` are used.

## License

MIT
