window.onload = function () {
    // Automatically set the input to "discord.com" on load
    document.getElementById("urlInput").value = "discord.com"; // Set the input value to "discord.com"
    
    // Trigger the search on page load
    document.getElementById("searchButton").click(); // Simulate a button click to initiate the search

    // Hide the search bar on page load
    document.getElementById("searchBar").style.display = "none"; // Adjust this based on your actual element ID or class

    // Listen for "Enter" key press in the search input field
    document.getElementById("urlInput").addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Prevent the default action (form submission)
            document.getElementById("searchButton").click(); // Trigger the search button click
        }
    });

    // Handle the search button click
    document.getElementById("searchButton").onclick = function (event) {
        event.preventDefault(); // Prevent default button action (if any)

        let url = document.getElementById("urlInput").value; // Get the input value
        let searchUrl = "https://www.google.com/search?q=";

        // If the input doesn't contain a period, assume it's a search query
        if (!url.includes(".")) {
            url = searchUrl + encodeURIComponent(url); // Prepare the Google search URL
        } else {
            // If the input doesn't start with "http://" or "https://", add "https://"
            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "https://" + url;
            }
        }

        // Assuming iframeWindow is a reference to an iframe, update its src attribute
        iframeWindow.src = __uv$config.prefix + __uv$config.encodeUrl(url);
    };
};
