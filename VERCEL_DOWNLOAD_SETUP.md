# Hosting Downloads on Vercel

## 🚀 Option 1: Vercel Blob Storage (Recommended)

Vercel Blob is perfect for hosting your installers directly on Vercel.

### Step 1: Install Vercel Blob

```bash
cd website
npm install @vercel/blob
```

### Step 2: Upload Your Installers

Create a script to upload files:

```bash
# Create upload script
echo 'const { put } = require("@vercel/blob");

async function uploadFiles() {
  const fs = require("fs");

  // Upload Windows installer
  const windowsFile = fs.readFileSync("../Modbus Connect/src-tauri/target/release/bundle/nsis/ModbusConnect_0.1.0_x64-setup.exe");
  const windowsBlob = await put("ModbusConnect-Windows-x64.exe", windowsFile, {
    access: "public",
  });
  console.log("Windows:", windowsBlob.url);

  // Upload macOS installer
  const macFile = fs.readFileSync("../Modbus Connect/src-tauri/target/release/bundle/dmg/ModbusConnect_0.1.0_x64.dmg");
  const macBlob = await put("ModbusConnect-macOS-Universal.dmg", macFile, {
    access: "public",
  });
  console.log("macOS:", macBlob.url);

  // Upload Linux installer
  const linuxFile = fs.readFileSync("../Modbus Connect/src-tauri/target/release/bundle/appimage/modbus-connect_0.1.0_amd64.AppImage");
  const linuxBlob = await put("ModbusConnect-Linux-x64.AppImage", linuxFile, {
    access: "public",
  });
  console.log("Linux:", linuxBlob.url);
}

uploadFiles();' > upload-to-vercel.js

# Run upload
node upload-to-vercel.js
```

### Step 3: Update Download Links

The script will output URLs like:

```
https://your-project.vercel.app/_vercel/blob/ModbusConnect-Windows-x64.exe
```

Update `app/download/page.tsx` with these URLs.

**Pricing**:

- Free tier: 500MB storage
- Pro: $20/month for 100GB

---

## 🎯 Option 2: Vercel Public Folder (Simplest)

Host files directly in your Next.js project!

### Step 1: Create Downloads Folder

```bash
mkdir website/public/downloads
```

### Step 2: Copy Your Installers

```bash
# Copy installers to public folder
copy "..\Modbus Connect\src-tauri\target\release\bundle\nsis\*.exe" "public\downloads\ModbusConnect-Windows-x64.exe"
copy "..\Modbus Connect\src-tauri\target\release\bundle\dmg\*.dmg" "public\downloads\ModbusConnect-macOS-Universal.dmg"
copy "..\Modbus Connect\src-tauri\target\release\bundle\appimage\*.AppImage" "public\downloads\ModbusConnect-Linux-x64.AppImage"
```

### Step 3: Update Download Links

In `app/download/page.tsx`:

```typescript
// Windows
href = "/downloads/ModbusConnect-Windows-x64.exe";

// macOS
href = "/downloads/ModbusConnect-macOS-Universal.dmg";

// Linux
href = "/downloads/ModbusConnect-Linux-x64.AppImage";
```

### Step 4: Update .gitignore

Add to `.gitignore`:

```
public/downloads/*.exe
public/downloads/*.dmg
public/downloads/*.AppImage
```

**Pros**:

- ✅ Super simple
- ✅ No extra cost
- ✅ Works immediately

**Cons**:

- ❌ Large files in your repo (if you commit them)
- ❌ Slower deployments
- ❌ 100MB file size limit on Vercel free tier

---

## 🌐 Option 3: Cloudflare R2 (Best for Large Files)

Free storage with no egress fees!

### Setup

1. **Create Cloudflare account** (free)
2. **Create R2 bucket**: `modbus-connect-downloads`
3. **Upload files** via dashboard
4. **Make bucket public**
5. **Get public URLs**

### Pricing

- ✅ **FREE**: 10GB storage, unlimited downloads
- No bandwidth charges!

### Update Links

```typescript
href = "https://pub-YOUR-BUCKET-ID.r2.dev/ModbusConnect-Windows-x64.exe";
```

---

## 📦 Option 4: Backblaze B2 (Cheapest)

Super cheap cloud storage.

### Setup

1. Create Backblaze account
2. Create bucket: `modbus-connect`
3. Upload files
4. Make bucket public
5. Get URLs

### Pricing

- $0.005/GB/month storage
- $0.01/GB download
- ~$0.50/month for 100GB storage

### Update Links

```typescript
href =
  "https://f002.backblazeb2.com/file/modbus-connect/ModbusConnect-Windows-x64.exe";
```

---

## 💾 Option 5: DigitalOcean Spaces

S3-compatible storage.

### Setup

1. Create DigitalOcean account
2. Create Space: `modbus-connect`
3. Upload files
4. Enable CDN
5. Make files public

### Pricing

- $5/month for 250GB storage + 1TB transfer
- Includes CDN

### Update Links

```typescript
href =
  "https://modbus-connect.nyc3.digitaloceanspaces.com/ModbusConnect-Windows-x64.exe";
```

---

## 🎨 Option 6: Gumroad (For Paid/Free Products)

If you want to collect emails or charge later:

### Setup

1. Create Gumroad account
2. Create product (set price to $0 for free)
3. Upload files
4. Get product link

### Benefits

- ✅ Collect emails
- ✅ Analytics
- ✅ Easy to add pricing later
- ✅ Professional checkout

### Update Links

```typescript
href = "https://crabby.gumroad.com/l/modbus-connect";
```

---

## 📊 Comparison Table

| Platform          | Cost       | Setup      | Best For                  |
| ----------------- | ---------- | ---------- | ------------------------- |
| **Vercel Public** | Free       | ⭐ Easiest | Small files (<100MB)      |
| **Vercel Blob**   | Free/Paid  | Easy       | Medium files              |
| **Cloudflare R2** | Free       | Medium     | Large files, high traffic |
| **Backblaze B2**  | ~$0.50/mo  | Medium     | Budget-conscious          |
| **DigitalOcean**  | $5/mo      | Medium     | Professional setup        |
| **Gumroad**       | Free + 10% | Easy       | Want email collection     |

---

## 🎯 My Recommendation

### For You (Indie Dev, Beta Release):

**Use Vercel Public Folder** for now:

1. Simple and free
2. No extra accounts needed
3. Works immediately
4. Easy to update

**Later, switch to Cloudflare R2**:

- When files get bigger
- When you have more traffic
- Still free!

---

## 🚀 Quick Setup: Vercel Public Folder

Here's exactly what to do:

### 1. Create folder

```bash
mkdir website\public\downloads
```

### 2. Copy installers

```bash
# After building your Tauri app
copy "..\Modbus Connect\src-tauri\target\release\bundle\nsis\*.exe" "public\downloads\ModbusConnect-Windows-x64.exe"
```

### 3. Update download page

```typescript
// In app/download/page.tsx
href = "/downloads/ModbusConnect-Windows-x64.exe";
href = "/downloads/ModbusConnect-macOS-Universal.dmg";
href = "/downloads/ModbusConnect-Linux-x64.AppImage";
```

### 4. Deploy

```bash
vercel
```

**Done!** Files are hosted on Vercel CDN.

---

## 🔄 Updating Files

When you release a new version:

1. Build new installers
2. Copy to `public/downloads/`
3. Deploy: `vercel --prod`

That's it!

---

## 💡 Pro Tips

### Tip 1: Version Your Files

Instead of overwriting, use versions:

```
/downloads/v0.1.0/ModbusConnect-Windows-x64.exe
/downloads/v0.2.0/ModbusConnect-Windows-x64.exe
```

### Tip 2: Add Download Tracking

```typescript
<a
  href="/downloads/ModbusConnect-Windows-x64.exe"
  onClick={() => {
    // Track with analytics
    console.log("Download started: Windows");
  }}
>
  Download
</a>
```

### Tip 3: Show File Sizes

```typescript
<p className="text-xs text-gray-500 text-center mt-2">v0.1.0-beta • 52 MB</p>
```

---

## ✅ Final Recommendation

**Start with Vercel Public Folder**:

- Zero setup
- Free
- Works now
- Easy to change later

**Upgrade to Cloudflare R2 when**:

- Files > 100MB
- High download traffic
- Want better performance

Both are free and work great! 🚀
