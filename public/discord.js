// This function processes the URL and loads the iframe
function loadWebsite(url) {
    let searchUrl = "https://www.google.com/search?q=";
    
    // If the URL doesn't contain a period, treat it as a search term (Google search)
    if (!url.includes(".")) {
        url = searchUrl + encodeURIComponent(url);
    } else {
        // If the URL doesn't start with http:// or https://, add https://
        if (!url.startsWith("http://") && !url.startsWith("https://")) {
            url = "https://" + url;
        }
    }

    // Update the iframe source with the encoded URL
    iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
}

// Automatically load website if input is populated when the page is first loaded
window.addEventListener('load', function() {
    let inputField = document.getElementById("urlInput");
    let initialValue = inputField.value.trim();

    // If there's already a URL in the input, automatically load it
    if (initialValue) {
        loadWebsite(initialValue);
    }
});

// Add event listener to trigger search when 'Enter' key is pressed in the input field
document.getElementById("urlInput").addEventListener("keydown", function(event) {
    // Only trigger search if the 'Enter' key is pressed in the search input field
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("searchButton").click(); // Trigger the search button click manually
    }
});

// Add the search button click event handler
document.getElementById("searchButton").onclick = function(event) {
    event.preventDefault();
    
    let url = document.getElementById("urlInput").value; // Get value from input field
    loadWebsite(url); // Process and load the website or search results
};
