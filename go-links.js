const goLinks = {
	'wikirandom': 'https://en.wikipedia.org/wiki/Special:Random',
	'photographer': 'https://photographe.michelgrolet.fr',
	// add more shortcuts as needed
  };
  
  function redirect() {
	const basePath = 'liteLinker'; // repository name
	let path = window.location.pathname.substr(1); // get the part after the initial slash
	
	if (path.startsWith(basePath)) {
	  path = path.substr(basePath.length + 1); // +1 to account for the slash
	}
  
	const redirectURL = goLinks[path];
	if (redirectURL) {
	  window.location.href = redirectURL;
	} else {
	  document.body.innerHTML = 'Go link not found.';
	}
  }