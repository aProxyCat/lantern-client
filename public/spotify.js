document.addEventListener("DOMContentLoaded", function () {
    // Set a predefined URL
    let predefinedUrl = "https://spotify-react-web-client.onrender.com/?code=AQDNKCPJzv_7mAXtY4CyRW_Z834r86wWiAg1zgASeFkqzAwpuJ88yB1H-54AQj1TLR_lL2SDCS35jn3_6ieHgmin2f-UkYN5N42B7rDWGfoenaRKpH8Dd62GgFjpadgWRGw1Qz2m3rJjsaFXAkooN3x0cyQZHn7Xpb9jXGwgr7AuXZ0_E8sWE0d2lUSucud_6srI_55RUGx3dihONXNnSPsFXOu-ZokBsXI-vJ8aA8MTb3NlGDC1BkQtG3wz_aaxcIoNM0PzPw_mSV2qnHDVXGBXA-Cqvkw0XDuUlqfIMU_JzKlxKcBaFsW5rOd4o5JUoPaMrd6AJwjq9xR0aBOsz1_GWWaSL1z3EqSlsTK44hlapMLQdyYwrRZHJeXX_Zw1QjqPL5nfCWdHWqgIZfgLWcMcCzvkIRW1u5hfP7ekD2ey2ODlcaSXWVd_UAbLdN0PD6rs60wBWEFWvRAleKgrqVY4Nj3x6-TzgQlth3SkBLMABCRxVDVhGAQVwd4-cC36FGGefgHq4zAgcUViSDRQ-UUZ5totL2InnZ4AWnF4kateWjVvQyaAhdSrvBalPMJVUrqxyxWqM8LsxRvvsW8-qkSCMxKetjnbX9zHkPfmRxFDj2d-IKgUAkdwPfKpZ160Dd7u37iDfgtTslApPJXpp6TVVI1Sr4LlGzUV5iaV6bJ_Vmh8v1e_yQIpXcNAYDg3JUqxyksKGY-w2LdBWov5LRkr6dqGK4Ct_5pk2Utb"; // Change this to any URL you want to automatically use

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
