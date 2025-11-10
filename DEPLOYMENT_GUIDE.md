# Deployment Guide - Modbus Connect Website

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended - Easiest)

Vercel is the creators of Next.js and offers the best integration.

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy (from website folder)
cd website
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? modbus-connect-website
# - Directory? ./
# - Override settings? No
```

**Automatic Deployments:**
t

1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Every push to main branch auto-deploys

**Custom Domain:**

1. Go to Vercel dashboard → Settings → Domains
2. Add your domain (e.g., modbusconnect.com)
3. Update DNS records as instructed

---

### Option 2: Netlify

Great alternative with similar features.

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the site
npm run build

# Deploy
netlify deploy

# For production
netlify deploy --prod
```

**Automatic Deployments:**

1. Push code to GitHub
2. Connect repository in Netlify dashboard
3. Set build command: `npm run build`
4. Set publish directory: `out`

---

### Option 3: GitHub Pages (Free)

Perfect for open-source projects.

**Setup:**

1. **Add to package.json:**

```json
{
  "scripts": {
    "deploy": "next build && touch out/.nojekyll && gh-pages -d out -t true"
  }
}
```

2. **Install gh-pages:**

```bash
npm install --save-dev gh-pages
```

3. **Update next.config.mjs:**

```javascript
const nextConfig = {
  output: "export",
  basePath: "/modbus-connect-website", // Your repo name
  images: {
    unoptimized: true,
  },
};
```

4. **Deploy:**

```bash
npm run deploy
```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: gh-pages
   - Folder: / (root)

---

### Option 4: Self-Hosted (VPS/Server)

For complete control.

**Requirements:**

- Node.js 18+ installed
- Nginx or Apache web server
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Build the site:**

```bash
npm run build
```

2. **Copy `out/` folder to server:**

```bash
scp -r out/* user@yourserver.com:/var/www/modbusconnect/
```

3. **Nginx configuration:**

```nginx
server {
    listen 80;
    server_name modbusconnect.com www.modbusconnect.com;

    root /var/www/modbusconnect;
    index index.html;

    location / {
        try_files $uri $uri/ $uri.html =404;
    }

    # Cache static assets
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

4. **SSL with Let's Encrypt:**

```bash
sudo certbot --nginx -d modbusconnect.com -d www.modbusconnect.com
```

---

## 📋 Pre-Deployment Checklist

### Content

- [ ] All screenshots added to `public/screenshots/`
- [ ] Logo files copied to `public/`
- [ ] Logo references updated in code
- [ ] All placeholder text replaced
- [ ] Contact information updated
- [ ] GitHub links updated with actual repository

### Technical

- [ ] Run `npm run build` successfully
- [ ] Test production build locally: `npm run start`
- [ ] Check all pages load correctly
- [ ] Verify all images display
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Check browser console for errors

### SEO & Performance

- [ ] Update metadata in `app/layout.tsx`
- [ ] Add favicon to `public/`
- [ ] Optimize images (< 500KB each)
- [ ] Test page load speed
- [ ] Add robots.txt
- [ ] Add sitemap.xml

### Legal

- [ ] Create Privacy Policy page
- [ ] Create Terms of Service page
- [ ] Add cookie consent (if using analytics)

---

## 🔧 Post-Deployment Tasks

### 1. Set Up Analytics

**Google Analytics:**

```tsx
// app/layout.tsx
<Script
  src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
  strategy="afterInteractive"
/>
<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

**Plausible (Privacy-friendly alternative):**

```tsx
<Script
  defer
  data-domain="modbusconnect.com"
  src="https://plausible.io/js/script.js"
/>
```

### 2. Set Up Custom Domain

**DNS Records:**

```
Type    Name    Value
A       @       76.76.21.21 (Vercel IP)
CNAME   www     cname.vercel-dns.com
```

### 3. Enable HTTPS

Most platforms (Vercel, Netlify) provide automatic HTTPS.
For self-hosted, use Let's Encrypt (see above).

### 4. Set Up Monitoring

**Uptime Monitoring:**

- UptimeRobot (free)
- Pingdom
- StatusCake

**Error Tracking:**

- Sentry
- LogRocket
- Rollbar

---

## 🎯 Performance Optimization

### Image Optimization

Already configured in `next.config.mjs`:

```javascript
images: {
  unoptimized: true, // For static export
}
```

For better performance, use Next.js Image component:

```tsx
import Image from "next/image";

<Image
  src="/screenshots/main-dashboard.png"
  alt="Dashboard"
  width={1920}
  height={1080}
  priority // For above-the-fold images
/>;
```

### Caching

Add cache headers in deployment platform:

```
# Vercel (vercel.json)
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

---

## 🐛 Common Deployment Issues

### Build Fails

**Error: Module not found**

```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Error: Out of memory**

```bash
# Solution: Increase Node memory
NODE_OPTIONS=--max_old_space_size=4096 npm run build
```

### Images Not Loading

**Issue: 404 on images**

- Ensure images are in `public/` folder
- Use `/image.png` (leading slash) in src
- Check file names match exactly (case-sensitive)

### Routing Issues

**Issue: 404 on page refresh**

- Ensure static export is configured
- Check `next.config.mjs` has `output: 'export'`
- Verify hosting platform serves `index.html` for routes

---

## 📊 Monitoring & Maintenance

### Weekly Tasks

- [ ] Check analytics for traffic
- [ ] Review error logs
- [ ] Test all forms and links
- [ ] Check uptime reports

### Monthly Tasks

- [ ] Update dependencies: `npm update`
- [ ] Review and optimize images
- [ ] Check page load speeds
- [ ] Update content as needed

### Quarterly Tasks

- [ ] Major dependency updates
- [ ] Security audit
- [ ] Performance review
- [ ] Content refresh

---

## 🔐 Security Best Practices

1. **Keep Dependencies Updated**

```bash
npm audit
npm audit fix
```

2. **Environment Variables**

- Never commit API keys
- Use `.env.local` for secrets
- Set environment variables in deployment platform

3. **HTTPS Only**

- Force HTTPS redirects
- Use HSTS headers
- Check SSL certificate validity

4. **Content Security Policy**

```tsx
// app/layout.tsx
<meta
  httpEquiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'unsafe-inline'"
/>
```

---

## 📞 Support & Resources

### Deployment Platforms

- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [GitHub Pages Guide](https://pages.github.com)

### Next.js Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

### Performance Tools

- [Google PageSpeed Insights](https://pagespeed.web.dev)
- [GTmetrix](https://gtmetrix.com)
- [WebPageTest](https://www.webpagetest.org)

---

**Ready to Deploy?** Start with Vercel for the easiest experience!

```bash
cd website
npm install
npm run build
vercel
```

Good luck! 🚀
