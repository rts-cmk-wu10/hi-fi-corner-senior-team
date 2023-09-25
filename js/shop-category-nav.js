const contentContainer = document.getElementById("shop__categoryContainer");
const navLinks = document.querySelectorAll(".categoryNav__navItem a"); 


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



/*

const URL = new URLSearchParams(window.location.search)

console.log(URL.get("name"))



fetch(`http://localhost:5500/http://localhost:5500/`)
    .then(function (response) {
        if (response.status === 200) {
            return response.json()
        } else {
            document.body.innerText += "Ups, noget gik galt. Prøv igen senere"
        }
    })

    .then(function (data) {
        console.log(data)
        const DIV = document.querySelector(".pokemon")
        DIV.innerHTML = ``
    })

*/ 