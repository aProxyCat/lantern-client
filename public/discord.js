document.addEventListener("DOMContentLoaded", function () {
    // Set a predefined URL
    let predefinedUrl = "discord.com"; // Change this to any URL you want to automatically use

    // Function to handle the logic for processing the URL
    function processUrl(url) {
        let searchUrl = "https://www.google.com/search?q=";

        // If the URL does not contain a period (.), perform a Google search instead
        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url);
        } else {
            // Ensure the URL starts with "https://"
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        // Now, perform the action you would normally do (setting the iframe src)
        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    }

    // Automatically process the predefined URL without user input
    processUrl(predefinedUrl);

    // Alternatively, if you want to trigger this by emulating a button click after setting the predefined URL
    // document.getElementById("urlInput").value = predefinedUrl;
    // document.getElementById("searchButton").click();
});
