// Define the default URL (Discord in this case)
let defaultUrl = "https://discord.com/";

// Function to process the URL input (both automatically and manually)
function processUrl(url) {
    let searchUrl = "https://www.google.com/search?q=";

    // If no period is in the URL, treat it as a search term
    if (!url.includes(".")) {
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

// Set the iframe src with the processed URL
iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(urlToLoad);

// Event listener for Enter key in the input field
document.getElementById("urlInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});

// Click event for the search button
document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; 
    // Process the entered URL
    let processedUrl = processUrl(url);

    // Set the iframe src with the processed URL
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(processedUrl);
};
