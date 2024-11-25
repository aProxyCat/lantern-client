document.addEventListener("DOMContentLoaded", function () {
    // Set a predefined URL
    let predefinedUrl = "https://chatgpt.com/"; // Change this to any URL you want to automatically use

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

    // Handle the "Enter" key press to submit the form
    document.getElementById("urlInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();  // Prevent default action (form submit)
            processUrl(document.getElementById("urlInput").value);  // Process the URL from the input field
        }
    });

    // Handle the "Search" button click
    document.getElementById("searchButton").onclick = function (event) {
        event.preventDefault();  // Prevent default button click behavior
        processUrl(document.getElementById("urlInput").value);  // Process the URL from the input field
    };

    // Automatically process the predefined URL (this is for the initial loading scenario)
    // You can set this URL in the input field and trigger the button click or just call the processUrl directly
    document.getElementById("urlInput").value = predefinedUrl;  // Set the predefined URL in the input
    processUrl(predefinedUrl);  // Automatically process it (this could be removed if you don't want auto-processing)
});
