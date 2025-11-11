const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function optimizeImages() {
  const publicDir = path.join(__dirname, "..", "public");

  // Optimize icon.png - create smaller versions for different DPIs
  console.log("Optimizing icon.png...");

  // 1x version (40x40)
  await sharp(path.join(publicDir, "icon.png"))
    .resize(40, 40, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "icon-40.webp"));

  await sharp(path.join(publicDir, "icon.png"))
    .resize(40, 40, { fit: "cover" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(publicDir, "icon-40.png"));

  // 1.5x version (60x60) for high-DPI displays
  await sharp(path.join(publicDir, "icon.png"))
    .resize(60, 60, { fit: "cover" })
    .webp({ quality: 90 })
    .toFile(path.join(publicDir, "icon-60.webp"));

  await sharp(path.join(publicDir, "icon.png"))
    .resize(60, 60, { fit: "cover" })
    .png({ quality: 90, compressionLevel: 9 })
    .toFile(path.join(publicDir, "icon-60.png"));

  // Optimize main-dashboard.png - create responsive versions
  console.log("Optimizing main-dashboard.png...");
  const dashboardPath = path.join(
    publicDir,
    "screenshots",
    "main-dashboard.png"
  );

  // Create 640w version (mobile)
  await sharp(dashboardPath)
    .resize(640, null, { fit: "inside" })
    .webp({ quality: 85 })
    .toFile(path.join(publicDir, "screenshots", "main-dashboard-640.webp"));

  // Create 1024w version (tablet/small desktop)
  await sharp(dashboardPath)
    .resize(1024, null, { fit: "inside" })
    .webp({ quality: 85 })
    .toFile(path.join(publicDir, "screenshots", "main-dashboard-1024.webp"));

  // Create 1920w version (full size) - optimized
  await sharp(dashboardPath)
    .resize(1920, null, { fit: "inside" })
    .webp({ quality: 85 })
    .toFile(path.join(publicDir, "screenshots", "main-dashboard-1920.webp"));

  console.log("Image optimization complete!");
}

optimizeImages().catch(console.error);
