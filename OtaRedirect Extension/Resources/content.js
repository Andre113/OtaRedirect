function redirectEcosia() {
    // Redirect ecosia to kagi
    const newUrl = window.location.href.replace(
        /^(https?:\/\/)(?:www\.)?ecosia\.org\/search\?q=(.+)/,
        '$1kagi.com/search?q=$2'
      );
    window.location.replace(newUrl);
}

function redirectFandom() {
    // Do not redirect non english pages
    if (window.location.pathname.startsWith('/wiki')) {
        const newUrl = window.location.href.replace(
            /^(https?:\/\/)([^/]+)\.fandom\.com\/(.*)/,
            '$1wiki.overtheairdre.com/$2/$3'
        );
        window.location.replace(newUrl);
    }
}

const hostnameRedirects = {
    'ecosia.org': redirectEcosia,
    'fandom.com': redirectFandom
};

// Get the end of a domain (eg: fandom.com, ecosia.org)
function getFinalDomain(url) {
  const hostname = new URL(url).hostname;
  const parts = hostname.split('.');
  return parts.slice(-2).join('.');
}

// Get hostname
const hostname = getFinalDomain(window.location.href);

// Redirect
if (hostname in hostnameRedirects) {
    hostnameRedirects[hostname]();
} else {
    console.log("no redirect");
}
