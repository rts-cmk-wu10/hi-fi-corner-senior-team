const mainContent = document.getElementById("mainContent");
const primaryNavigation__navigationItem = document.getElementsByClassName("primaryNavigation__navigationItem")

const pages = {
    page1:"./page1.html",
    page2:"./page2.html",
    page3:"./page3.html"

}


function navigateToPage(page) {
    contentContainer.innerHTML = pages[page];
}

// Attach event listeners to navigation links
navLinks.forEach(link => {
    link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default link behavior
        const page = event.target.getAttribute("data-page");
        navigateToPage(page);
    });
});

// Initialize the default page
navigateToPage("home");

