export function indexTemplate(files) {
  const template = `<!doctype>
    <html>
      <head>
        <title> Gagnavinnsla </title>
        <link rel="stylesheet" href = "styles.css">
      </head>
      <body>
        <h2> Gagnavinnsla </h2>
        <main>
${makeLinks(files)}
        </main>
      </body>
    </html>`;
  return template;
}

export function makeLinks(files) {
  let links = '';
  if (files.length > 0) {
    for (const file of files) {
      links += `          <section> <a href = '${file}.html'> ${file} </a> </section>\n`;
    }
    return links.substring(0, links.lastIndexOf('\n'));
  } else return '';
}

export function dataTemplate(filename, content, numbers) {
  const template = `<!doctype>
<html>
  <head>
    <title> ${filename} </title>
    <link rel="stylesheet" href = "styles.css">
  </head>
  <body>
    <h1> ${filename} </h1>
    <main>
${makeData(content, numbers)}
    </main>
  </body>
</html>
`;
  return template;
}

export function makeData(content, numbers) {
  if (content !== undefined) {
    var template = `      <section>
        <table>
          <thead>
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
          </thead>
          <tbody>
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
          </tbody>
        </table>
      </section>
      `;
    template += `<div class = "tolur">${numbers.join(', ')}</div>`;
    return template;
  } else
    return '      <section> Engin sýnileg gögn eru í þessari skrá </section>';
}
