import { join } from 'path';
import {readFile, writeFile, readdir, stat } from 'fs/promises';

import {parse} from './parser.js';
import { blogTemplate, makeHTML } from './make-html.js';

// import marked from 'marked';

// import {makeHTML} from './make-html.js';

const BLOG_DIR = 'blog';
const OUTPUT_DIR = './dist';

async function main() {
    const files = await readdir(BLOG_DIR);
    
    for(const file of files) {
        const path = join(BLOG_DIR, file);
        const info = await stat(path);    
        if(info.isDirectory()) {
            continue;
        }

        const data = await readFile(path);
        // console.log('data :>> ', data.toString());
        const parsed = parse(data.toString());
        const html = makeHTML(parsed);
        const blog = blogTemplate(parsed.metadata.title,html,parsed.metadata.date);
        const slug = parsed.metadata.slug;
        console.log('slug :>> ', slug);
        const filename = join(OUTPUT_DIR, `${slug}.html`)

        await writeFile(filename, blog);
    }
}

main().catch((err) => console.error(err));