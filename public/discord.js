// Add event listener for 'Enter' key press to submit the form or trigger search
document.getElementById("urlInput").addEventListener("keydown", function(event) {
    // Check if the 'Enter' key was pressed
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent the default action (form submit or other)
        
        // Trigger the search button click programmatically (simulate button press)
        document.getElementById("searchButton").click();
    }
});

// Handle the button click (or Enter key press) to process the URL input
document.getElementById("searchButton").onclick = function(event) {
    event.preventDefault(); // Prevent any default form submission behavior

    let url = document.getElementById("urlInput").value.trim(); // Get the value from input field
    let searchUrl = "https://www.google.com/search?q=";
    let isSearchQuery = false;

    // If the input field is empty or just contains spaces, go directly to Discord
    if (url === "") {
        url = "https://discord.com";
    } else {
        // Validate if it's a valid URL
        try {
            new URL(url); // This will throw if it's not a valid URL
            isSearchQuery = false;
        } catch (e) {
            // If it fails, treat it as a search query
            if (!url.includes(".")) {
                isSearchQuery = true;
            }
        }

        if (!isSearchQuery) {
            // If it's a URL, ensure it starts with http(s)://
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }
    }

    // If it's a search query, use Google to search
    if (isSearchQuery) {
        url = searchUrl + encodeURIComponent(url); // Encode and append to search URL
    }

    // Assuming you have an iframe with id="iframe" to display the URL
    let iframeWindow = document.getElementById("iframe");
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);

    // Optionally, log the final encoded URL for debugging
    console.log("Final URL: ", url);
};

// Add event listener to the Discord button to directly navigate to Discord
document.getElementById("discordButton").onclick = function() {
    // Navigate to Discord directly
    window.location.href = "https://discord.com";
}; 
