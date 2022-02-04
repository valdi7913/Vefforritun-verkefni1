import { join } from 'path';
import { writeFile, readdir, stat } from 'fs/promises';

import { readNumberFile, parseData } from './parser.js';
import { dataTemplate, indexTemplate } from './make-html.js';

const OUTPUT_DIR = './dist';
const DATA_DIR = './data';

async function main() {
  //Create index.html
  const files = await readdir(DATA_DIR);
  const indexHtml = await indexTemplate(files);
  await writeFile(join(OUTPUT_DIR, 'index.html'), indexHtml);

  //Create data files
  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await stat(path);
    if (info.isDirectory()) continue;
    const data = await readNumberFile(path);
    console.log('file :>> ', file);
    console.log('data :>> ', data);
    const parsed = parseData(data);
    const content = dataTemplate(file,parsed);
    const outputpath = join(OUTPUT_DIR, `${file}.html`);
    await writeFile(outputpath, content);
  }
}

main().catch((err) => console.error(err));
