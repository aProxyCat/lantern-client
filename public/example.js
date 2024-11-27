// Makes it so you can press enter to submit as opposed to just being able to press a button
document.getElementById("urlInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

// Search Button click event
document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; // Get the URL from the input field
    let searchUrl = "https://www.google.com/search?q=";

    // If no periods are detected in the input, perform a Google search instead
    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        // If no http:// or https:// is detected, automatically add https://
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
    }

    // Update iframe source with the final URL
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};

// Popout Button functionality
document.getElementById("popoutButton").onclick = function () {
    const iframeSrc = iframeWindow.src; // Get the current iframe source URL

    // Only proceed if the iframe has a valid source
    if (iframeSrc && iframeSrc !== '') {
        // Open a new window with about:blank
        const popoutWindow = window.open('about:blank', '_blank');

        // Write the iframe content into the new popout window
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
        popoutWindow.document.close(); // Ensure the document is fully rendered
    }
};
