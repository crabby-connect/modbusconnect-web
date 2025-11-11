const fs = require("fs");
const path = require("path");

function processHtmlFiles(dir) {
  const files = fs.readdirSync(dir);
  let count = 0;

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      count += processHtmlFiles(filePath);
    } else if (file.endsWith(".html")) {
      let html = fs.readFileSync(filePath, "utf8");
      let modified = false;

      // Add fetchpriority="high" to hero images
      if (html.includes("main-dashboard")) {
        html = html.replace(
          /<img([^>]*src="[^"]*main-dashboard[^"]*"[^>]*)>/g,
          '<img$1 fetchpriority="high">'
        );
        modified = true;
      }

      // Add preload hint for CSS to improve loading without blocking
      if (html.includes('rel="stylesheet"')) {
        const cssMatch = html.match(/href="([^"]*\.css)"/);
        if (cssMatch && !html.includes('rel="preload"')) {
          const cssPath = cssMatch[1];
          html = html.replace(
            '<link rel="stylesheet"',
            `<link rel="preload" href="${cssPath}" as="style"><link rel="stylesheet"`
          );
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(filePath, html, "utf8");
        count++;
      }
    }
  });

  return count;
}

const outDir = path.join(__dirname, "..", "out");
if (fs.existsSync(outDir)) {
  console.log("Post-build optimization starting...");
  const count = processHtmlFiles(outDir);
  console.log(`Optimized ${count} HTML file(s)`);
} else {
  console.log("Output directory not found. Run build first.");
  process.exit(1);
}
