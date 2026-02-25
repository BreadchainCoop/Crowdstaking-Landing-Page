import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const uiDir = '/vercel/share/v0-project/Crowdstaking Landing Page/components/ui';

const files = await readdir(uiDir);
let totalFixed = 0;

for (const file of files) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;

  const filePath = join(uiDir, file);
  const content = await readFile(filePath, 'utf-8');

  // Remove version numbers from imports like "package@1.2.3" -> "package"
  const fixed = content.replace(/"([^"]+)@\d+\.\d+\.\d+"/g, '"$1"');

  if (fixed !== content) {
    await writeFile(filePath, fixed, 'utf-8');
    totalFixed++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Done. Fixed ${totalFixed} out of ${files.length} files.`);
