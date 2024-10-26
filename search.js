// Function to handle the search query
function handleSearch(event) {
    event.preventDefault(); // Prevent form submission
    const searchQuery = document.getElementById('search-input').value.toLowerCase().trim();

    if (!searchQuery) {
        alert('Please enter a search term.');
        return;
    }

    // Get all text content from the website
    const bodyText = document.body.innerText.toLowerCase();
    
    // Check if the search query exists in the body content
    if (bodyText.includes(searchQuery)) {
        // Highlight the search term in the content (optional)
        highlightText(searchQuery);
    } else {
        // If no result is found, show the alert message
        alert('No results found. Try a different search term.');
    }
}

// Optional: Function to highlight the search term
function highlightText(searchQuery) {
    const bodyHTML = document.body.innerHTML;
    const regex = new RegExp(`(${searchQuery})`, 'gi'); // Create a regex to find the search term globally and case-insensitive
    
    // Replace matching text with highlighted version
    const highlightedHTML = bodyHTML.replace(regex, '<span style="background-color: yellow;">$1</span>');
    
    document.body.innerHTML = highlightedHTML; // Update the page content with the highlighted text
}
