const searchURL = new URLSearchParams(window.location.search);

let selectedCategory = null;
let selectedBrand = searchURL.get("brand");
  

// click events
document.querySelectorAll(".navItem a").forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault(); 
        const clickedCategory = link.getAttribute("data-category");
        if (selectedCategory === clickedCategory) {
            // vælg kategori og nulstil display
            selectedCategory = null;
            selectedBrand = null;
        } else {
            // update valgt kategori og clear brand
            selectedCategory = clickedCategory;
            selectedBrand = null;
        }
        Products_filter();
    });
});


document.querySelectorAll(".categoryList__shopBy .navItem a").forEach(function (brandLink) {
    brandLink.addEventListener("click", function (event) {
        event.preventDefault();
        selectedBrand = brandLink.getAttribute("data-brand");
        Products_filter();
    });
});

function Products_filter() {
    fetch(`http://localhost:3000/products`)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const UL = document.querySelector(".categoryList__Ul");
            UL.innerHTML = "";

            data.forEach(function (result) {
                // checker om kategori og brand matcher med value 
                 
                if (
                    (selectedCategory === null || result.category === selectedCategory) &&
                    (selectedBrand === null || result.brand.toLowerCase() === selectedBrand.toLowerCase()) 
                ) {
                    const DIV = document.createElement("div");
                    DIV.className = ("productDiv")
                    DIV.innerHTML = `
                    <a class="productLink" href="/singleProduct.html?products=${result.id}">
                    <img class="listImg" src="${result.img}"></>
                    <p class="productList_text">${result.model}</p>  
                    </a>
                    <p class="productList_text">${result.category}</p>
                    <div class="price">
                    <p class="previousPrice">${result.previousPrice}</p>
                    <p class="currentPrice">${result.currentPrice}</p>
                    </div>
                    <button class="actionButton">add to cart</button>
                    `;
                    UL.appendChild(DIV);
                }
            });
        })
        .catch(function (error) {
            console.error("Fetch error: ", error);
        });
}


