# Downloads - Quick Reference

## ✅ Current Setup

Download buttons now use: `/downloads/` folder (hosted on Vercel)

## 🚀 Quick Setup (3 Commands)

```bash
# 1. Create folder
mkdir website\public\downloads

# 2. Copy your installers (after building)
copy "..\Modbus Connect\src-tauri\target\release\bundle\nsis\*.exe" "public\downloads\ModbusConnect-Windows-x64.exe"

# 3. Deploy
vercel
```

**Done!** ✅

## 📁 File Names Required

Your installers must be named exactly:

- `ModbusConnect-Windows-x64.exe`
- `ModbusConnect-macOS-Universal.dmg`
- `ModbusConnect-Linux-x64.AppImage`

## 🎯 Best Options (No GitHub)

### Option 1: Vercel Public Folder ⭐

- **Cost**: Free
- **Setup**: 3 commands
- **Limit**: 100MB per file
- **Best for**: Most indie apps

### Option 2: Cloudflare R2

- **Cost**: Free (10GB)
- **Setup**: 5 minutes
- **Limit**: No limit
- **Best for**: Large files (>100MB)

### Option 3: Gumroad

- **Cost**: Free + 10% fee
- **Setup**: 10 minutes
- **Limit**: No limit
- **Best for**: Want email collection

## 📊 File Size Check

Check your installer sizes:

```bash
dir "..\Modbus Connect\src-tauri\target\release\bundle\nsis"
```

- **< 100MB**: Use Vercel ✅
- **> 100MB**: Use Cloudflare R2

## 🔗 Current Links

Download page uses:

```
/downloads/ModbusConnect-Windows-x64.exe
/downloads/ModbusConnect-macOS-Universal.dmg
/downloads/ModbusConnect-Linux-x64.AppImage
```

## 📚 Full Guides

- `SIMPLE_DOWNLOAD_SETUP.md` - Step-by-step Vercel setup
- `VERCEL_DOWNLOAD_SETUP.md` - All hosting options
- `DOWNLOAD_SETUP_GUIDE.md` - GitHub releases (if you change your mind)

## ✨ That's It!

No GitHub, no complex setup. Just copy files and deploy! 🚀
