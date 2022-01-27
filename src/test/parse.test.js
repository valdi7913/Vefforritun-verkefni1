import { describe, expect, it } from '@jest/globals';
import {parse} from '../parser';
describe('parser', () => {
  it('parses a markdown file', () => {
    const input = `# hello world`;

    const parsed = parse(input);
    const expected = {
      content: "<h1 id=\"hello-world\">hello world</h1>",
      metadata: {title: undefined,slug: undefined,date: undefined}

    }
    console.log('parsed :>> ', parsed);
    console.log('expected :>> ', expected);
    expect(parsed).toBe(expected);
  });

  // it('parses a markdown file2', () => {
  //   const input = `# hello world`;

  //   const parsed = parse(input);

  //   expect(parsed).toBe('<h1 id="hello-world">hello world</h1>')

  // });
});

