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

// Function to check if Discord can be embedded
function isDiscordUrl(url) {
    // Check if the URL contains 'discord.com' (you may add more checks here)
    return url.includes("discord.com");
}

// Automatically process the Discord URL
let urlToLoad = processUrl(defaultUrl);

// Check if the URL is a Discord URL and try to open it as a widget
if (isDiscordUrl(urlToLoad)) {
    // Use Discord Widget if the URL is a Discord URL
    let discordWidgetUrl = `https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark`; // Replace YOUR_SERVER_ID with actual ID
    iframeWindow.src = discordWidgetUrl;  // Set widget URL in the iframe
} else {
    // Otherwise, process the URL and load it in iframe
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(urlToLoad);
}

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

    // If it's a Discord URL, try using the Discord widget, else load normally
    if (isDiscordUrl(processedUrl)) {
        let discordWidgetUrl = `https://discord.com/widget?id=YOUR_SERVER_ID&theme=dark`; // Replace YOUR_SERVER_ID
        iframeWindow.src = discordWidgetUrl;
    } else {
        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(processedUrl);
    }
};

// If Discord is blocked in iframe, open it in a new tab
function openInNewTab(url) {
    window.open(url, "_blank");
}

// Fallback: If iframe is blocked, open Discord in a new window instead
iframeWindow.onload = function () {
    try {
        // Check if content inside iframe is accessible or blocked
        let iframeContent = iframeWindow.document.body;
        if (!iframeContent || iframeContent.innerHTML === "") {
            // If content is not loaded (empty), open in new tab
            openInNewTab(defaultUrl);
        }
    } catch (e) {
        // If there’s an error accessing the iframe content, fallback to new tab
        openInNewTab(defaultUrl);
    }
};
