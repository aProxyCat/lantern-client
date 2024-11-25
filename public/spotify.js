// Listen for "Enter" key press to trigger the search
document.getElementById("urlInput").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        // Only trigger if the page hasn't already been loaded
        if (!sessionStorage.getItem("pageLoaded")) {
            document.getElementById("searchButton").click();
            sessionStorage.setItem("pageLoaded", "true"); // Mark as loaded
        }
    }
});

// Handle the search button click
document.getElementById("searchButton").onclick = function (event) {
    event.preventDefault();

    let url = document.getElementById("urlInput").value; // Get the input value
    let searchUrl = "https://www.google.com/search?q=";

    // If the input doesn't contain a period, treat it as a search query
    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        // If no protocol (http/https) is provided, prepend "https://"
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
    }

    // Assuming iframeWindow is your iframe element
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
};

// Automatically trigger the search when the page loads
window.onload = function() {
    // Set a default URL if the input field is empty
    let initialUrl = document.getElementById("urlInput").value || "https://open.spotify.com/"; 

    // Set the input field's value to the default URL
    document.getElementById("urlInput").value = initialUrl;

    // Trigger the search button click automatically only once
    if (!sessionStorage.getItem("pageLoaded")) {
        document.getElementById("searchButton").click();
        sessionStorage.setItem("pageLoaded", "true"); // Mark as loaded
    }
};
