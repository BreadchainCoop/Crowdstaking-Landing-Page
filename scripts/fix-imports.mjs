import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';

const uiDir = join(process.cwd(), 'Crowdstaking Landing Page', 'components', 'ui');

async function fixImports() {
  const files = await readdir(uiDir);
  
  for (const file of files) {
    if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
    
    const filePath = join(uiDir, file);
    let content = await readFile(filePath, 'utf-8');
    
    // Remove version numbers from imports like "package@1.2.3" -> "package"
    const original = content;
    content = content.replace(/"([^"]+)@\d+\.\d+\.\d+"/g, '"$1"');
    
    if (content !== original) {
      await writeFile(filePath, content, 'utf-8');
      console.log(`Fixed: ${file}`);
    }
  }
  
  console.log('Done fixing imports.');
}

fixImports().catch(console.error);
