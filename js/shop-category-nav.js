const contentContainer = document.getElementById("shop__categoryContainer");
const navLinks = document.querySelectorAll(".categoryNav__navItem"); 


function navigateToPage(page) {

  fetch(`categoryPages/${page}.html`)
    .then(response => response.text())
    .then(html => {
      contentContainer.innerHTML = html;
    })
    .catch(error => {
      console.error("Error loading page:", error);
    });

}

navLinks.forEach(link => {
  link.addEventListener("click", event => {
    event.preventDefault(); 

    const page = link.getAttribute("data-point"); 
    navigateToPage(page);
  });
});
navigateToPage("amplifiers"); 