# Download Buttons - Quick Summary

## ✅ What I Did

Changed download buttons from `<button>` to `<a>` tags with proper download links.

## 🔗 Current Links

The download page now has these links (you need to update `YOUR_USERNAME`):

### Windows

```
https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-Windows-x64.exe
```

### macOS

```
https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-macOS-Universal.dmg
```

### Linux

```
https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-Linux-x64.AppImage
```

## 🚀 Quick Setup (5 Steps)

### 1. Build Your App

```bash
cd "Modbus Connect"
npm run tauri build
```

### 2. Create GitHub Repo

- Go to github.com
- Create new repository: `modbus-connect`
- Push your code

### 3. Create Release

- Go to Releases → Create new release
- Tag: `v0.1.0-beta`
- Upload your installers from `src-tauri/target/release/bundle/`
- Rename files to match:
  - `ModbusConnect-Windows-x64.exe`
  - `ModbusConnect-macOS-Universal.dmg`
  - `ModbusConnect-Linux-x64.AppImage`

### 4. Update Website

In `website/app/download/page.tsx`, replace `YOUR_USERNAME` with your GitHub username.

**Example**: If your username is `crabbydev`:

```typescript
href =
  "https://github.com/crabbydev/modbus-connect/releases/latest/download/ModbusConnect-Windows-x64.exe";
```

### 5. Test

- Deploy website
- Click download buttons
- Files should download ✅

## 📁 Where to Find Your Installers

After running `npm run tauri build`:

```
Modbus Connect/src-tauri/target/release/bundle/
├── nsis/
│   └── ModbusConnect_0.1.0_x64-setup.exe    ← Windows
├── dmg/
│   └── ModbusConnect_0.1.0_x64.dmg          ← macOS
└── appimage/
    └── modbus-connect_0.1.0_amd64.AppImage  ← Linux
```

Rename these to match the website links!

## 🎯 Alternative: Not Ready Yet?

If you're not ready to release, you can:

### Option A: Coming Soon Message

```typescript
<button
  onClick={() => alert("Coming soon! Join our waitlist at...")}
  className="..."
>
  Notify Me
</button>
```

### Option B: Waitlist Form

```typescript
<Link href="https://forms.gle/YOUR_FORM" className="...">
  Join Waitlist
</Link>
```

### Option C: Email Signup

```typescript
<Link href="mailto:your@email.com?subject=Modbus Connect Beta" className="...">
  Request Beta Access
</Link>
```

## 📚 Full Documentation

See `DOWNLOAD_SETUP_GUIDE.md` for:

- Detailed GitHub setup
- Alternative hosting options
- Tauri updater configuration
- Download tracking with analytics
- Troubleshooting guide

## ✨ Benefits of GitHub Releases

- ✅ Free hosting
- ✅ Automatic CDN
- ✅ Version management
- ✅ Download statistics
- ✅ Professional appearance
- ✅ Easy updates

## 🎉 That's It!

Once you:

1. Create GitHub release with your installers
2. Update `YOUR_USERNAME` in the code
3. Deploy the website

Your download buttons will work perfectly!

---

**Need Help?** Check `DOWNLOAD_SETUP_GUIDE.md` for detailed instructions.
