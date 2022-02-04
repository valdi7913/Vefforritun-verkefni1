import { describe, expect, it } from '@jest/globals';
import { indexTemplate, makeLinks, dataTemplate, makeData} from '../make-html';

describe('html', () => {
  it('indexTemplate, basic test' , () => {
    const files = ['file1.txt', 'file2.txt'];
    const template = indexTemplate(files);
    const expected =
  `<!doctype>
    <html>
      <head>
        <title> index </title>
        <link rel="stylesheet" href = "styles.css">
      </head>
      <body>
        <h2> Welcome, please select a file to view </h2>
        <main>
          <section> <a href = 'file1.txt.html'> file1.txt </a> </section>
          <section> <a href = 'file2.txt.html'> file2.txt </a> </section>
        </main>
      </body>
    </html>`;
    expect(template).toBe(expected);
  });

  it('indexTemplate, empty test' , () => {
    const files = [];
    const template = indexTemplate(files);
    const expected =
    `<!doctype>
    <html>
      <head>
        <title> index </title>
        <link rel="stylesheet" href = "styles.css">
      </head>
      <body>
        <h2> Welcome, please select a file to view </h2>
        <main>

        </main>
      </body>
    </html>`;
  expect(template).toBe(expected);
});

  it('makeLinks, basic test', () => {
    const files = ['file1.txt', 'file2.txt'];
    const template = makeLinks(files);
    const expected =
`          <section> <a href = 'file1.txt.html'> file1.txt </a> </section>
          <section> <a href = 'file2.txt.html'> file2.txt </a> </section>`;
    expect(template).toEqual(expected);
  });

  it('makeLinks, empty file', () => {
    const files = [];
    const template = makeLinks(files);
    const expected = '';
  expect(template).toEqual(expected);
  });

  it('dataTemplate, basic test', () => {
      const content = {
        Max: 1,
        Min: 1,
        Mean: 1,
        Median: 1,
        Stdev: 1,
        Sum: 1,
        Range: 1,
        Variance: 1,
      };
      const filename = 'file1.txt';
      const template = dataTemplate(filename, content);
      const expected = `<!doctype>
<html>
  <head>
    <title> file1.txt </title>
    <link rel="stylesheet" href = "styles.css">
  </head>
  <body>
    <h1> file1.txt </h1>
    <main>
      <section>
        <table>
          <tr>
            <th> Max </th>
            <th> Min </th>
            <th> Mean </th>
            <th> Median </th>
            <th> StDev </th>
            <th> Sum </th>
            <th> Range </th>
            <th> Variance </th>
          </tr>
          <tr>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
            <td> 1 </td>
          </tr>
        </table>
      </section>
    </main>
  </body>
</html>
`;
      expect(template).toBe(expected);
  });

  it('dataTemplate, empty test', () => {
    const filename = 'file1.txt';
    const content = undefined;
    const template = dataTemplate(filename, content);
    const expected =
`<!doctype>
<html>
  <head>
    <title> file1.txt </title>
    <link rel="stylesheet" href = "styles.css">
  </head>
  <body>
    <h1> file1.txt </h1>
    <main>
      <section> Engin sýnileg gögn eru í þessari skrá </section>
    </main>
  </body>
</html>
`;
    expect(template).toEqual(expected);
  });

  it('makeData, basic test', () => {
    const content = {
      Max: 1,
      Min: 1,
      Mean: 1,
      Median: 1,
      Stdev: 1,
      Sum: 1,
      Range: 1,
      Variance: 1,
    };
    const template = makeData(content);
    const expected =`      <section>
        <table>
          <tr>
            <th> Max </th>
            <th> Min </th>
            <th> Mean </th>
            <th> Median </th>
            <th> StDev </th>
            <th> Sum </th>
            <th> Range </th>
            <th> Variance </th>
          </tr>
          <tr>
            <td> ${content.Max} </td>
            <td> ${content.Min} </td>
            <td> ${content.Mean} </td>
            <td> ${content.Median} </td>
            <td> ${content.Stdev} </td>
            <td> ${content.Sum} </td>
            <td> ${content.Range} </td>
            <td> ${content.Variance} </td>
          </tr>
        </table>
      </section>`;
    expect(template).toEqual(expected);
  });

  it('makeData, empty test', () => {
    const content = undefined;
    const template = makeData(content);
    const expected = '      <section> Engin sýnileg gögn eru í þessari skrá </section>';
    expect(template).toEqual(expected);
  });
});
