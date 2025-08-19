import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = "public";
const outputDir = "public/optimized";

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

fs.readdirSync(inputDir).forEach(file => {
  if (/\.(jpg|jpeg|png)$/i.test(file)) {
    const inputPath = path.join(inputDir, file);
    const basename = path.parse(file).name;

    sharp(inputPath)
      .webp({ quality: 75 })
      .toFile(path.join(outputDir, `${basename}.webp`));

    sharp(inputPath)
      .avif({ quality: 50 })
      .toFile(path.join(outputDir, `${basename}.avif`));

    console.log(`Optimized: ${file}`);
  }
});
