# Modbus Connect Website

Modern Next.js marketing website for Modbus Connect - a professional Modbus TCP/IP monitoring tool.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
website/
├── app/
│   ├── page.tsx           # Homepage with hero, features, pricing
│   ├── download/
│   │   └── page.tsx       # Download page with installers
│   ├── layout.tsx         # Root layout with metadata
│   └── globals.css        # Global styles
├── public/
│   └── screenshots/       # App screenshots (TO BE ADDED)
├── components/            # Reusable components (optional)
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 📸 Required Screenshots

To complete the website, you need to add the following screenshots from the Modbus Connect app:

### 1. **Main Dashboard** (Priority: HIGH)

**Location**: Homepage hero section
**What to capture**:

- Full application window showing:
  - Sidebar with device list
  - Monitoring sessions list
  - Main content area
- **Recommended size**: 1920x1080 or 2560x1440
- **File name**: `main-dashboard.png`
- **Save to**: `website/public/screenshots/`

### 2. **Device Scanner** (Priority: HIGH)

**Location**: Features section or separate features page
**What to capture**:

- Device scanner interface showing:
  - Scan configuration (IP, port, device range)
  - Progress bar during scan
  - Found devices list with details
- **Recommended size**: 1600x900
- **File name**: `device-scanner.png`
- **Save to**: `website/public/screenshots/`

### 3. **Live Monitoring View** (Priority: HIGH)

**Location**: Features section
**What to capture**:

- Monitoring session showing:
  - Real-time register values
  - Value change highlighting
  - Address labels
  - Connection status
- **Recommended size**: 1600x900
- **File name**: `live-monitoring.png`
- **Save to**: `website/public/screenshots/`

### 4. **Real-Time Chart** (Priority: MEDIUM)

**Location**: Features section
**What to capture**:

- Chart view with:
  - Multiple data series (at least 3-4)
  - Time-based X-axis
  - Legend showing series
  - Zoom/pan controls visible
- **Recommended size**: 1600x900
- **File name**: `realtime-chart.png`
- **Save to**: `website/public/screenshots/`

### 5. **Modbus Protocol Logs** (Priority: MEDIUM)

**Location**: Features section
**What to capture**:

- Protocol logging view showing:
  - TX/RX traffic
  - Hex display
  - Timestamps
  - Function codes
- **Recommended size**: 1400x800
- **File name**: `protocol-logs.png`
- **Save to**: `website/public/screenshots/`

### 6. **Workspace Manager** (Priority: LOW)

**Location**: Features section
**What to capture**:

- Workspace save/load dialog
- Shows workspace management features
- **Recommended size**: 1200x700
- **File name**: `workspace-manager.png`
- **Save to**: `website/public/screenshots/`

## 🎨 Screenshot Guidelines

### Best Practices:

1. **Clean Data**: Use realistic but clean test data
2. **No Personal Info**: Remove any IP addresses or device names that might be sensitive
3. **Good Lighting**: Use the light theme for better visibility
4. **High Resolution**: Capture at 2x resolution if possible (Retina display)
5. **Consistent Style**: All screenshots should have similar styling

### Recommended Tools:

- **Windows**: Snipping Tool, ShareX, or Greenshot
- **macOS**: Cmd+Shift+4 (native screenshot)
- **Linux**: Flameshot or GNOME Screenshot

### Post-Processing:

- Crop to remove unnecessary UI elements
- Add subtle shadow for depth (optional)
- Compress images (use TinyPNG or similar)
- Target file size: < 500KB per image

## 🖼️ Logo Integration

The logo files are located at:

```
c:\Users\Maikel\Documents\Projects\modbusconnect\Modbus Connect\src-tauri\icons\
```

Copy the following files to `website/public/`:

- `icon.png` → `website/public/logo.png`
- `icon.icns` (for macOS)
- `icon.ico` (for Windows)

Update the logo in the navigation:

```tsx
// Replace the emoji placeholder in app/page.tsx
<div className="w-10 h-10 bg-primary-500 rounded-lg">
  <Image src="/logo.png" alt="Modbus Connect" width={40} height={40} />
</div>
```

## 🎯 Next Steps

### Phase 1: Content & Screenshots

- [ ] Add all required screenshots
- [ ] Copy logo files to public folder
- [ ] Update logo references in code
- [ ] Test all images load correctly

### Phase 2: Additional Pages

- [ ] Create `/docs` page with documentation
- [ ] Create `/changelog` page with version history
- [ ] Create `/privacy` and `/terms` pages
- [ ] Add blog section (optional)

### Phase 3: Enhancements

- [ ] Add testimonials section (when available)
- [ ] Add video demo (if created)
- [ ] Implement contact form
- [ ] Add analytics (Google Analytics, Plausible, etc.)
- [ ] Add SEO optimization
- [ ] Create social media preview images

### Phase 4: Deployment

- [ ] Deploy to Vercel, Netlify, or GitHub Pages
- [ ] Set up custom domain
- [ ] Configure SSL certificate
- [ ] Test on multiple devices/browsers

## 🔧 Customization

### Colors

The primary color scheme is based on the Modbus Connect brand:

- Primary: `#2f6690` (blue)
- Adjust in `tailwind.config.ts` if needed

### Content

All content is in the page files:

- Homepage: `app/page.tsx`
- Download: `app/download/page.tsx`

### Fonts

Using system fonts for performance:

- Sans: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- Mono: ui-monospace, SF Mono, Monaco, Cascadia Code

## 📦 Build & Deploy

### Static Export

The site is configured for static export (no server required):

```bash
npm run build
```

This creates an `out/` folder with static HTML/CSS/JS files.

### Deployment Options

**Vercel** (Recommended):

```bash
npm install -g vercel
vercel
```

**Netlify**:

```bash
npm install -g netlify-cli
netlify deploy
```

**GitHub Pages**:

1. Push to GitHub
2. Enable GitHub Pages in repository settings
3. Set source to `gh-pages` branch
4. Use GitHub Actions to auto-deploy

## 🐛 Troubleshooting

### Images not loading

- Ensure images are in `public/` folder
- Use `/filename.png` (leading slash) in src
- Check file names match exactly (case-sensitive)

### Build errors

- Run `npm install` to ensure all dependencies are installed
- Clear `.next` folder: `rm -rf .next`
- Check Node.js version (requires 18+)

### Styling issues

- Clear browser cache
- Check Tailwind classes are correct
- Verify `globals.css` is imported in layout

## 📝 License

This website is part of the Modbus Connect project by Crabby.

## 🤝 Contributing

This is a single-developer project, but feedback is welcome!

---

**Built with**: Next.js 14, React 18, TypeScript, Tailwind CSS
**By**: Crabby (Indie Developer)
