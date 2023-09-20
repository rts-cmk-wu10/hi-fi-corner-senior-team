// Get references to DOM elements
const contentContainer = document.getElementById("shop__categoryContainer");
const navLinks = document.querySelectorAll(".categoryNav__navItem a"); // Select the <a> elements inside .categoryNav__navItem

// Function to update content based on clicked link
function navigateToPage(page) {
  // Use Fetch API to load the content of the HTML file from the "categoryPages" folder
  fetch(`categoryPages/${page}.html`)
    .then(response => response.text())
    .then(html => {
      contentContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading page:", error);
    });
}

// Attach event listeners to navigation links
navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); // Prevent default link behavior
    const page = link.getAttribute("data-point"); // Get the attribute from the link, not the event target
    navigateToPage(page);
  });
});

// Initialize the default page
navigateToPage("amplifiers"); // You can set the default page here
