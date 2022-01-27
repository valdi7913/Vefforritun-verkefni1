export function makeHTML(input) {
    const html = input.content;
    const date = input.metadata.date;

    const template = 
    `
    <section>
        ${html}
        <p>Skrifað: ${date}</p>
    </section>
    `
   
    return template;
}

/**
 * Takes HTML for a single blog entry and returns it with the site template
 */
export function blogTemplate(title, content, date){
    
    const template = 
    `
    <!doctype>
    <html>
        <head>
            <title> ${title} </title>
            <link rel="stylesheet" href = "styles.css">
        </head>
        <body>
            <section>
                ${content}
                <p>Skrifað: ${date}</p>
            </section>
        </body>
    </html
    `;

    return template;
}