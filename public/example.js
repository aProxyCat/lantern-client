// Get the search input and iframe elements
const urlInput = document.getElementById('urlInput');
const searchButton = document.getElementById('searchButton');
const iframeWindow = document.getElementById('iframeWindow');
const popoutButton = document.getElementById('popoutButton');

// Function to update the iframe content based on the URL input
function updateIframe(url) {
    iframeWindow.src = url;
}

// Handle Search button click event
searchButton.addEventListener('click', () => {
    const url = urlInput.value;
    if (url) {
        let searchUrl = "https://www.google.com/search?q=";

        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else {
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        updateIframe(__uv$config.prefix + __uv$config.encodeUrl(url));
});

// Handle Enter key press for search
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const url = urlInput.value;
        if (url) {
            let searchUrl = "https://www.google.com/search?q=";

            if (!url.includes(".")) {
                url = searchUrl + encodeURIComponent(url);
            } else {
                if (!url.startsWith("http://") && !url.startsWith("https://")) {
                    url = "https://" + url;
                }
            }

            updateIframe(__uv$config.prefix + __uv$config.encodeUrl(url));
        }
    }
});

// Popout button: Open iframe content in a new window
popoutButton.addEventListener('click', () => {
    const iframeSrc = iframeWindow.src;
    if (iframeSrc) {
        const popoutWindow = window.open('about:blank', '_blank');
        popoutWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Popout Iframe</title>
            </head>
            <body style="margin: 0; padding: 0;">
                <iframe src="${iframeSrc}" style="width: 100%; height: 100vh; border: none;"></iframe>
            </body>
            </html>
        `);
        popoutWindow.document.close(); // Ensure the new window loads correctly
    }
});
