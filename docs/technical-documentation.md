# Technical Documentation

## Overview

This project delivers a static personal portfolio site for Abdulellah Alamer . It is built with semantic HTML, modern CSS (flexbox, grid, custom properties), and vanilla JavaScript to satisfy Assignment 1 requirements: responsive design, basic interactivity, and transparent AI usage.

## File Breakdown

- `index.html` – Core markup containing the hero (About), Experience, Projects, Certificates, and Contact sections, along with navigation and footer.
- `css/styles.css` – Styling layer that defines the color system, component styles, responsive grids, and theme-specific variables.
- `js/script.js` – Handles theme persistence, mobile navigation toggling, smooth scrolling, and contact form feedback.
- `assets/images/` – Placeholder directory for future profile or project imagery.
- `docs/` – Contains AI usage notes and this technical documentation.

## HTML Structure Highlights

- Navigation links use in-page anchors for smooth scrolling between sections.
- Each major section is wrapped in a semantic `<section>` with contextual headings for accessibility.
- The contact form uses native HTML validation (`required`, `type="email"`) and provides a live region for submission feedback.

## Styling Approach

- CSS custom properties power the color palette and enable quick theme switching.
- Shared `.card` styles promote consistency across experience, project, and certificate entries.
- Flexbox and CSS grid provide adaptive layouts, while media queries adjust the navigation and spacing for narrow viewports.
- A gradient hero background and placeholder profile component hint at the original branding without external dependencies.

## JavaScript Behavior

- **Theme Toggle:** Stores the user preference in `localStorage` and respects the operating system's default on first load.
- **Mobile Navigation:** Toggles visibility of the primary navigation list and keeps `aria-expanded` in sync for screen readers.
- **Smooth Scrolling:** Intercepts internal anchor clicks and calls `scrollIntoView` for progressive enhancement.
- **Contact Form Feedback:** Prevents default submission, echoes a friendly confirmation message, and clears the input fields.
- **Footer Year:** Automatically updates the year to keep the footer current.

## Responsive Design

- Layout scales from single-column stacks on mobile (≤600px) to multi-column grids on tablets and desktops.
- Navigation condenses into a hamburger trigger on viewports narrower than 900px.
- Buttons and interactive elements retain comfortable touch targets and focus states across breakpoints.

## Extensibility Notes

- Swap the hero placeholder for a real image by adding an asset to `assets/images/` and updating the `.hero__media` markup.
- Replace project cards with live links, GitHub repositories, or case studies as new work is completed.
- Connect the contact form to a serverless function or third-party provider to handle real submissions.
- Expand JavaScript interactivity (e.g., filter projects, animate scroll progress) while keeping the code modular.

## Testing Checklist

- Resize the browser to confirm sections remain legible on mobile, tablet, and desktop widths.
- Toggle the theme and reload the page to ensure the preference persists.
- Submit the contact form with sample data to confirm the inline confirmation message appears.
