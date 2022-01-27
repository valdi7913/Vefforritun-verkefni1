import { describe, expect, it } from '@jest/globals';
import { makeHTML, blogTemplate } from '../make-html';
import {parse} from '../parser';
describe('html', () => {
  it('parses a markdown file', () => {
    const content = 
    {
        content: "<strong>hi</strong>",
        metadata: 
            {
                date: "DATE"
            }, 
    };

    const parsed = makeHTML(content);
    const output = 
    `
    <section>
        <strong>hi</strong>
        <p>Skrifað: DATE</p>
    </section>
    `

    expect(parsed).toBe(output);
  });

  it('makes the HTML template from given html', () => {
    const title = 'hello';
    const date = 'DATE'
    const html = '<strong>hi</strong>';
    const template = blogTemplate(title,html,date);
    const expected = 
    `
    <!doctype>
    <html>
        <head>
            <title> hello </title>
        </head>
        <body>
            <section>
                <strong>hi</strong>
                <p>Skrifað: DATE</p>
            </section>
        </body>
    </html
    `;
    expect(template).toBe(expected);
  });
});

