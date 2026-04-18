# Cuppy Hair E-Commerce Blueprint - Design System

## 1. Core Identity & Creative North Star
**Creative North Star: "The Digital Atelier"**
This design system is built upon the "Digital Atelier" North Star. We are not building a standard e-commerce grid; we are curating a digital flagship store that feels like a high-end editorial spread.

---

## 2. Color Palette (Fidelity Tokens)

### Primary & Brand Colors
- **Primary:** `#735C00` (The Core Gold)
- **On Primary:** `#FFFFFF`
- **Primary Container:** `#D4AF37` (The Gold Foil)
- **On Primary Container:** `#554300`
- **Inverse Primary:** `#E9C349`

### Surface & Background
- **Surface (Base):** `#F9F9F9` (The Main Canvas)
- **On Surface:** `#1A1C1C`
- **Surface Container Lowest:** `#FFFFFF` (Card Lift)
- **Surface Container Low:** `#F3F3F4` (Sectioning)
- **Surface Container:** `#EEEEEE`
- **Surface Container High:** `#E8E8E8`
- **Surface Container Highest:** `#E2E2E2` (Interactive Hover)
- **Surface Bright:** `#F9F9F9`
- **Surface Dim:** `#DADADA`
- **Background:** `#F9F9F9`
- **On Background:** `#1A1C1C`

### Secondary & Tertiary
- **Secondary:** `#5F5E5E` (Matte Charcoal)
- **On Secondary:** `#FFFFFF`
- **Secondary Container:** `#E2DFDE`
- **Tertiary:** `#415BA4`
- **Tertiary Container:** `#97B0FF`

### Utility & Feedback
- **Outline:** `#7F7663`
- **Outline Variant:** `#D0C5AF`
- **Error:** `#BA1A1A`
- **On Error:** `#FFFFFF`
- **Error Container:** `#FFDAD6`

---

## 3. Typography
- **Headlines (NOTO SERIF):** The "Editorial Voice". Used for aspirational messaging and product titles.
- **Body & Labels (MANROPE):** Modern efficiency. Clean, geometric, and highly legible.

---

## 4. Design Guidelines (The Editorial Muse)

### Surface Philosophy
- **The "No-Line" Rule:** Do not use 1px solid borders to section off content. Boundaries must be defined solely through background color shifts (`surface-container-low` vs `surface`).
- **Nesting:** Treat the UI as a series of physical layers (Base -> Cards -> Interactive).
- **Glassmorphism:** Use for floating navigation (70% opacity, 20px backdrop-blur).

### Component Rules
- **Buttons:** 
  - **Primary:** Gold Foil (`primary-container`) with `on-primary-fixed` text. Sharp corners.
  - **Secondary:** Matte Black (`on-background`) with `surface` text.
- **Product Cards:** 4:5 aspect ratio. No divider lines. Sublte image scale on hover.
- **Input Fields:** Minimalist. Only a bottom border using `outline-variant`.

### Spacing & Layout
- **Intentional Asymmetry:** Break the grid. Overlap typography onto images.
- **Generous White Space:** Space is the ultimate luxury. Add 24px more than you think you need.
