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


// Function to filter products based on the search query
function searchProducts(query) {
  query = query.toLowerCase();

  return productsArray.products.filter(function (product) {
    const productFields = [
      product.product ? product.product.toLowerCase() : "",
      product.model ? product.model.toLowerCase() : "",
      product.brand ? product.brand.toLowerCase() : "",
      product.warranty ? product.warranty.toLowerCase() : "",
      product.price ? product.price.toLowerCase() : "",
      product.delivery_charge ? product.delivery_charge.toLowerCase() : "",
      product.delivery_time ? product.delivery_time.toLowerCase() : "",
    ];

    // Check if product.color exists and if any of its colors match the search query
    const colorMatches =
      product.color &&
      product.color.some((color) => color.toLowerCase().includes(query));

    // Check if any of the product fields contain the search query
    const containsSearchValue = productFields.some((field) =>
      field.includes(query)
    );

    return containsSearchValue || colorMatches;
  });
}

const FORM = document.querySelector(".searchForm");
const productGrid = document.getElementById("product-grid"); // Updated product grid container
const PARAMS = new URLSearchParams(window.location.search);
const SEARCH = PARAMS.get("search");
console.log(productGrid);

fetch(`http://localhost:3000/products${SEARCH ? "?q=" + SEARCH : ''}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(function (product) {
      let theProduct = createProductDiv(product);
      productGrid.appendChild(theProduct);
    });
  });
FORM.addEventListener("submit", submitHandler);

function submitHandler(event) {
  //event.preventDefault();

  const searchValue = event.target.search.value.toLowerCase();

  const RESULTS = searchProducts(searchValue);

  productGrid.innerHTML = ""; // Clear the product grid

  if (RESULTS.length > 0) {
    RESULTS.forEach(function (result) {
      const productDiv = createProductDiv(result);
      productGrid.appendChild(productDiv);
    });
  } else {
    productGrid.innerHTML = "No results found.";
  }
}

// Function to create a product div
function createProductDiv(product) {
  // Create a div element for the product
  const productDiv = document.createElement("div");
  productDiv.classList.add("product");

  // Create and append elements for product properties
  const productTitle = document.createElement("h3");
  productTitle.textContent = `Product: ${product.product}`;

  const productModel = document.createElement("p");
  productModel.textContent = `Model: ${product.model}`;

  const productBrand = document.createElement("p");
  productBrand.textContent = `Brand: ${product.brand}`;

  const productWarranty = document.createElement("p");
  productWarranty.textContent = `Warranty: ${product.warranty}`;

  const productColor = document.createElement("p");
  productColor.textContent = `Color: ${
    product.color ? product.color.join(", ") : "N/A"
  }`;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${product.price}`;
  productPrice.classList.add("price__text"); // Adds a class to the element

  const deliveryInfo = document.createElement("p");
  deliveryInfo.textContent = `Delivery Charge: ${product.delivery_charge}, Delivery Time: ${product.delivery_time}`;

  // Append all elements to the product div
  productDiv.appendChild(productTitle);
  productDiv.appendChild(productModel);
  productDiv.appendChild(productBrand);
  productDiv.appendChild(productWarranty);
  productDiv.appendChild(productColor);
  productDiv.appendChild(productPrice);
  productDiv.appendChild(deliveryInfo);

  return productDiv;
}
