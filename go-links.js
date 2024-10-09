const goLinksURL = "go.thepf.network";
const goLinkNotFoundURL = "thepf.network";

const goLinks = {
	// settings
	'add': 'https://github.com/MichelGrolet/go/edit/main/go-links.js',
	'new': 'add',
	'edit': 'add',
	// socials
	'insta': 'https://www.instagram.com/mi.grlt/',
	'linkedin': 'https://www.linkedin.com/in/michelgrolet/',
	'ln': 'linkedin',
	'twitter': 'https://x.com/michelgrolet',
	'x': 'twitter',
	'github': 'https://github.com/michelgrolet',
	'gh': 'github',
	// photo
	'tarifs-photo': 'https://photographe.michelgrolet.fr/tarifs',
	// lvx
	'programme-meute-2024-2025':'https://drive.google.com/file/d/1APaKU42Mcxv7Z04g7zIBCVu3f_zyULyJ/view?usp=sharing',
	// perso misc
	'site': 'https://www.michelgrolet.fr/',
	'calendar': 'https://calendar.google.com/calendar/embed?src=Z3JvbGV0QGdvb2dsZS5jb20&src=bDBwMHNjOW1obWtqOXBydHR2ZWplZnRicjFraWtiZGNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bWljaGVsZ3JvbGV0QGdtYWlsLmNvbQ&src=bWljaGVsQGdldG91dC5zcG9ydA&ctz=Europe/Paris',
	'oo': 'calendar',
	'calendar-sf': 'https://calendar.google.com/calendar/embed?src=Z3JvbGV0QGdvb2dsZS5jb20&src=bDBwMHNjOW1obWtqOXBydHR2ZWplZnRicjFraWtiZGNAaW1wb3J0LmNhbGVuZGFyLmdvb2dsZS5jb20&src=bWljaGVsZ3JvbGV0QGdtYWlsLmNvbQ&src=bWljaGVsQGdldG91dC5zcG9ydA&ctz=America/Los_Angeles',
	'oo-sf': 'calendar-sf',
	'denaro': 'https://michelgrolet.notion.site/Denaro-a23a0dcbebce4f7c80cd7f17ad5c0078',
	'islam': 'https://drive.google.com/file/d/172MvsrDKxzeINuGkWMYg6a7D9RMvFkHR/view?usp=sharing',
	'profil': 'https://photos.app.goo.gl/maDYfXWnCPSMFkTA8',
	'profile': 'profil',
	'pp': 'profil',
	'edit-profile': 'https://docs.google.com/document/d/1Rw3iPQPOCEOUOB8BrgImoyNzDoYbZrSg_Z0aQieyMyg/edit?usp=sharing',
	'edit-profil': 'edit-profile',
	'new-profil': 'edit-profile',
	'abs': 'https://youtu.be/8PwoytUU06g',
	'google-apprenticeship-tips': 'https://docs.google.com/document/d/1bc5fVke9FZ2FCLy5J3UGarqRV7v2R93-mVeyDSoXagA',
	'google-swe-tips': 'https://docs.google.com/document/d/13VHGvUMRfMClncWJ1Q35vJ9eveC89n2v4wkS5Hhx6BQ',
	'business-profile': 'https://www.google.com/search?q=Michel%20Grolet&stick=H4sIAAAAAAAAAONgU1IxqEg1TzExS7NIMTU3MUq1tLQyqLBINjM3N0szM0w2NDJKNE1exMrrm5mckZqj4F6Un5NaAgBSKd-COAAAAA',
	'maps-profile': 'https://maps.app.goo.gl/C2xUWsSqeDYsvmk79',
	'contact': 'https://gravatar.com/mgrolet',
	'k': 'https://www.amazon.com/sendtokindle',
	'kindle': 'k'
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
