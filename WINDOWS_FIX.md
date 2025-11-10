# Windows Setup Fix

## Issue

The original configuration had ESM module issues on Windows with the `c:` protocol error.

## What Was Fixed

1. ✅ Converted `tailwind.config.ts` to `tailwind.config.js` (CommonJS)
2. ✅ Converted `postcss.config.mjs` to `postcss.config.js` (CommonJS)
3. ✅ Updated package versions to latest stable
4. ✅ Created `next-env.d.ts` for TypeScript support

## Setup Instructions

### Step 1: Clean Install

```bash
# Navigate to website folder
cd website

# Remove old files (if they exist)
rmdir /s /q node_modules
del package-lock.json

# Install dependencies
npm install
```

### Step 2: Run Development Server

```bash
npm run dev
```

The site should now start at http://localhost:3000

## If You Still Get Errors

### Error: "Cannot find module"

```bash
npm install --legacy-peer-deps
```

### Error: "Port 3000 already in use"

```bash
# Kill the process
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or use a different port
npm run dev -- -p 3001
```

### Error: TypeScript errors

```bash
# Clear Next.js cache
rmdir /s /q .next
npm run dev
```

### Error: Tailwind not working

```bash
# Verify tailwind.config.js exists
dir tailwind.config.js

# If missing, it should contain:
# module.exports = { content: [...], theme: {...}, plugins: [] }
```

## Verification Checklist

After running `npm run dev`, verify:

- [ ] No compilation errors in terminal
- [ ] Browser opens to http://localhost:3000
- [ ] Homepage loads with styling
- [ ] Navigation works
- [ ] No console errors in browser DevTools

## Common Windows Issues

### Issue: Long Path Names

If you get "path too long" errors:

1. Enable long paths in Windows:

```powershell
# Run as Administrator
New-ItemProperty -Path "HKLM:\SYSTEM\CurrentControlSet\Control\FileSystem" -Name "LongPathsEnabled" -Value 1 -PropertyType DWORD -Force
```

2. Or move project closer to root:

```
C:\Projects\modbusconnect\website
```

### Issue: Permission Denied

Run terminal as Administrator or:

```bash
npm cache clean --force
npm install
```

### Issue: Antivirus Blocking

Temporarily disable antivirus or add exception for:

- `node_modules` folder
- `npm` executable

## Success!

If you see this in your terminal:

```
✓ Ready in 2.5s
○ Local:        http://localhost:3000
```

You're all set! 🎉

## Next Steps

1. Add screenshots to `public/screenshots/`
2. Add logo to `public/logo.png`
3. Test all pages
4. Deploy!

See `SETUP.md` for detailed next steps.
