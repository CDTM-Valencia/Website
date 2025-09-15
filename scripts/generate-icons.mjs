import sharp from 'sharp';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectRoot = join(__dirname, '..');
const publicDir = join(projectRoot, 'public');
const svgPath = join(publicDir, 'icon.svg');

async function run() {
    const svg = await readFile(svgPath);
    const sizes = [16, 32, 180];

    await Promise.all(
        sizes.map(async (s) => {
            const out = join(publicDir, `icon-${s}.png`);
            await sharp(svg).resize(s, s, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile(out);
        })
    );
}

run().catch((err) => {
    console.error(err);
    process.exit(1);
});


