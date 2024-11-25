// Define the default URL (Discord in this case)
let defaultUrl = "https://discord.com/";

// Function to process the URL (if you want to include your existing checks)
function processUrl(url) {
    let searchUrl = "https://www.google.com/search?q=";

    if (!url.includes(".")) {
        // If no period in the URL, treat it as a search term
        return searchUrl + encodeURIComponent(url);
    } else {
        // If the URL doesn't start with http:// or https://, prepend https://
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
        return url;
    }
}

// Automatically process the Discord URL
let urlToLoad = processUrl(defaultUrl);

// Automatically set the iframe src
iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(urlToLoad);
