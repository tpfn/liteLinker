const goLinksURL = "go.thepf.network";
const goLinkNotFoundURL = "thepf.network";

const goLinks = {
	// settings
	'add': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
	'new': 'add',
	'edit': 'add',
	// socials
	'linkedin': 'https://www.linkedin.com/in/michelgrolet/',
	'ln': 'linkedin',
	'twitter': 'https://x.com/michelgrolet',
	'x': 'twitter',
	// misc
	'oo': 'https://calendar.app.google/CqKGM8pKw9iWbPpQ9',
};

function redirect() {
    const basePath = 'go'; // repository name
    let path = window.location.pathname.substr(1); // get the part after the initial slash

    if (path === 'links') return; // Prevent redirect on /links

    if (path.startsWith(basePath)) {
        path = path.substr(basePath.length + 1); // +1 to account for the slash
    }

    const redirectURL = goLinks[path];
    if (redirectURL) {
        window.location.href = redirectURL;
    } else {
        window.location.href = goLinkNotFoundURL;
    }
}

function generateLinksPage() {
    let html = '<!DOCTYPE html><html><head><title>Go Links</title></head><body>';
    html += '<h1>Go Links</h1><ul>';

    for (const [key, url] of Object.entries(goLinks)) {
        html += `<li><a href="${url}">${key}</a></li>`;
    }

    html += '</ul></body></html>';
    return html;
}

const http = require('http');

http.createServer((req, res) => {
    if (req.url === '/links') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(generateLinksPage());
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
}).listen(80, () => {
    console.log(`Server is running at ${goLinksURL}`);
});

// Call redirect function on page load
redirect();
