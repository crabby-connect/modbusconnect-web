# Download Buttons Setup Guide

## 🎯 Overview

I've updated the download buttons to use proper `<a>` tags instead of `<button>` tags. Now you need to configure where the files are hosted.

## ✅ What's Been Updated

The download page now has working links for:

- ✅ Windows (.exe)
- ✅ macOS (.dmg)
- ✅ Linux (.AppImage)

## 🚀 Option 1: GitHub Releases (Recommended)

This is the **easiest and most professional** way for indie developers.

### Step 1: Build Your Tauri App

From your Modbus Connect project:

```bash
cd "Modbus Connect"
npm run tauri build
```

This creates installers in:

```
src-tauri/target/release/bundle/
├── nsis/           # Windows .exe
├── dmg/            # macOS .dmg
└── appimage/       # Linux .AppImage
```

### Step 2: Create GitHub Repository

1. Create a new repository on GitHub:

   - Name: `modbus-connect`
   - Description: "Modern Modbus TCP/IP monitoring tool"
   - Public or Private (your choice)

2. Push your code:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/modbus-connect.git
git push -u origin main
```

### Step 3: Create a Release

1. Go to your GitHub repository
2. Click **"Releases"** → **"Create a new release"**
3. Tag version: `v0.1.0-beta`
4. Release title: `Modbus Connect v0.1.0 Beta`
5. Description:

   ```markdown
   ## What's New

   - Device scanner with automatic discovery
   - Real-time monitoring with multi-session support
   - Data visualization with charts
   - Protocol logging (TX/RX)
   - Workspace management

   ## Installation

   - **Windows**: Download and run the .exe installer
   - **macOS**: Download .dmg, drag to Applications
   - **Linux**: Download .AppImage, make executable, run

   ## System Requirements

   - Windows 10/11, macOS 11+, or Ubuntu 20.04+
   - 2GB RAM minimum (4GB recommended)
   - 100MB disk space
   ```

6. **Upload your installers**:

   - Drag and drop the files from `src-tauri/target/release/bundle/`
   - Rename them to match the website links:
     - `ModbusConnect-Windows-x64.exe`
     - `ModbusConnect-macOS-Universal.dmg`
     - `ModbusConnect-Linux-x64.AppImage`

7. Click **"Publish release"**

### Step 4: Update Website Links

In `website/app/download/page.tsx`, replace `YOUR_USERNAME` with your actual GitHub username:

```typescript
// Windows
href =
  "https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-Windows-x64.exe";

// macOS
href =
  "https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-macOS-Universal.dmg";

// Linux
href =
  "https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/ModbusConnect-Linux-x64.AppImage";
```

**Example** (if your username is "crabbydev"):

```typescript
href =
  "https://github.com/crabbydev/modbus-connect/releases/latest/download/ModbusConnect-Windows-x64.exe";
```

### Step 5: Test

1. Deploy your website
2. Click download buttons
3. Files should download from GitHub

---

## 🔄 Option 2: Direct File Hosting

If you don't want to use GitHub, you can host files directly.

### A. Host on Your Website

1. **Upload installers to your web server**:

   ```
   yourwebsite.com/downloads/
   ├── ModbusConnect-Windows-x64.exe
   ├── ModbusConnect-macOS-Universal.dmg
   └── ModbusConnect-Linux-x64.AppImage
   ```

2. **Update links in download page**:

   ```typescript
   // Windows
   href = "https://yourwebsite.com/downloads/ModbusConnect-Windows-x64.exe";

   // macOS
   href = "https://yourwebsite.com/downloads/ModbusConnect-macOS-Universal.dmg";

   // Linux
   href = "https://yourwebsite.com/downloads/ModbusConnect-Linux-x64.AppImage";
   ```

### B. Use Cloud Storage

**Dropbox**:

1. Upload files to Dropbox
2. Get public share link
3. Replace `www.dropbox.com` with `dl.dropboxusercontent.com`
4. Use in download page

**Google Drive**:

1. Upload files
2. Right-click → Get link → Anyone with link can view
3. Use direct download link format:
   ```
   https://drive.google.com/uc?export=download&id=FILE_ID
   ```

**OneDrive**:

1. Upload files
2. Share → Get link
3. Replace `?` with `&download=1` at the end

---

## 📦 Option 3: Use Tauri Updater (Advanced)

For automatic updates in the future:

1. **Configure in `tauri.conf.json`**:

```json
{
  "tauri": {
    "updater": {
      "active": true,
      "endpoints": [
        "https://github.com/YOUR_USERNAME/modbus-connect/releases/latest/download/latest.json"
      ],
      "dialog": true,
      "pubkey": "YOUR_PUBLIC_KEY"
    }
  }
}
```

2. **Generate update manifest** when creating releases

3. **App will auto-check for updates** on launch

See: [Tauri Updater Docs](https://tauri.app/v1/guides/distribution/updater)

---

## 🎨 Alternative: "Coming Soon" Approach

If you're not ready to release yet:

### Update Download Page

```typescript
// Replace download links with:
<button
  onClick={() => alert("Coming soon! Sign up for updates at your@email.com")}
  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
>
  <Download className="w-4 h-4 mr-2" />
  Notify Me When Ready
</button>
```

Or redirect to a signup form:

```typescript
<Link
  href="https://forms.gle/YOUR_FORM_ID"
  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-medium flex items-center justify-center"
>
  <Download className="w-4 h-4 mr-2" />
  Join Waitlist
</Link>
```

---

## 📊 Track Downloads (Optional)

### Google Analytics

Add to `app/layout.tsx`:

```typescript
<Script id="google-analytics">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  `}
</Script>
```

Track downloads:

```typescript
<a
  href="..."
  onClick={() => {
    // Track download
    if (typeof gtag !== "undefined") {
      gtag("event", "download", {
        event_category: "installer",
        event_label: "windows",
      });
    }
  }}
>
  Download
</a>
```

---

## ✅ Quick Setup Checklist

For GitHub Releases (recommended):

- [ ] Build Tauri app (`npm run tauri build`)
- [ ] Create GitHub repository
- [ ] Create release (v0.1.0-beta)
- [ ] Upload installers with correct names
- [ ] Update `YOUR_USERNAME` in download page
- [ ] Test download buttons
- [ ] Deploy website

---

## 🐛 Troubleshooting

### Downloads Not Working?

1. **Check file names match exactly**:

   - Website expects: `ModbusConnect-Windows-x64.exe`
   - GitHub release must have same name

2. **Check GitHub release is published**:

   - Not draft
   - Files are attached
   - Release is public (if repo is public)

3. **Test direct link**:
   - Copy download URL
   - Paste in browser
   - Should download file

### 404 Error?

- Verify GitHub username is correct
- Check repository name matches
- Ensure release exists
- Verify file names match

---

## 📝 Example: Complete Setup

Here's a real example:

**GitHub**: `github.com/crabbydev/modbus-connect`

**Release**: `v0.1.0-beta`

**Files uploaded**:

- `ModbusConnect-Windows-x64.exe` (52 MB)
- `ModbusConnect-macOS-Universal.dmg` (48 MB)
- `ModbusConnect-Linux-x64.AppImage` (50 MB)

**Download page links**:

```typescript
// Windows
href =
  "https://github.com/crabbydev/modbus-connect/releases/latest/download/ModbusConnect-Windows-x64.exe";

// macOS
href =
  "https://github.com/crabbydev/modbus-connect/releases/latest/download/ModbusConnect-macOS-Universal.dmg";

// Linux
href =
  "https://github.com/crabbydev/modbus-connect/releases/latest/download/ModbusConnect-Linux-x64.AppImage";
```

**Result**: Click button → File downloads from GitHub ✅

---

## 🎉 You're Done!

Once you've set up GitHub releases and updated the username, your download buttons will work perfectly!

**Next Steps**:

1. Build your app
2. Create GitHub release
3. Update username in code
4. Deploy website
5. Test downloads

Good luck! 🚀
