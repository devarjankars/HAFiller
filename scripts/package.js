// scripts/package.js
// Assembles a clean "dist" folder containing only the files needed at
// runtime, then zips it. Cross-platform (no reliance on cp/zip shell
// commands), so this works the same on Windows, macOS, and Linux.

const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

// Files/folders that should end up in the shipped package.
// Add or remove entries here as your project grows.
const RUNTIME_ITEMS = ["index.html", "css/tailwind.css", "css/custom.css", "css/responsive.css", "js", "assets"];

function copyRecursive(src, dest) {
    const stat = fs.statSync(src);
    if (stat.isDirectory()) {
        fs.mkdirSync(dest, { recursive: true });
        for (const entry of fs.readdirSync(src)) {
            // skip .gitkeep placeholder files, they're not needed in the shipped package
            if (entry === ".gitkeep") continue;
            copyRecursive(path.join(src, entry), path.join(dest, entry));
        }
    } else {
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        fs.copyFileSync(src, dest);
    }
}

function main() {
    // Fresh start every time, so stale files never leak into the package.
    if (fs.existsSync(distDir)) {
        fs.rmSync(distDir, { recursive: true, force: true });
    }
    fs.mkdirSync(distDir, { recursive: true });

    for (const item of RUNTIME_ITEMS) {
        const src = path.join(root, item);
        if (!fs.existsSync(src)) {
            console.warn(`Skipping missing item: ${item}`);
            continue;
        }
        const dest = path.join(distDir, item);
        copyRecursive(src, dest);
        console.log(`Copied: ${item}`);
    }

    console.log(`\nDone. Runtime-only package ready at: ${path.relative(root, distDir)}/`);
    console.log("Zip the contents of that folder to send to Mobile Locker.");
}

main();