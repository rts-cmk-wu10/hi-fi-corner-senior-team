const HEADER = document.querySelector(".header__search");
HEADER.innerHTML = `
<section class="header__top">

<form class="search__form" autocomplete="off">
<input type="search" list="products" name="search" class="search_form--input" placeholder="Search entire store here...">
<datalist id="products"></datalist>
<button type="submit" class="header__submit">Søg</button>
</form>

<i class="fa-solid fa-user"></i> account
<i class="fa-solid fa-cart-shopping"></i> cart
<i class="fa-solid fa-location-dot"></i>
<i class="fa-solid fa-phone"></i>
<i class="fa-regular fa-envelope"></i>

</section>

<section class="header__navbar">
<nav class="header__nav">
<a href="index.html">home</a>
<a href="aboutUs.html">about us</a>
<a href="branch.html">brands</a>
<a href="events.html">events</a>
<a href="shopCategory.html">shop</a>
<a href="contact.html">contact us</a>
</nav>
</section>
`;




// Leas search function  //

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

const FORM = document.querySelector(".search_form--input");
const productGrid = document.querySelector(".categoryList__Ul"); // Updated product grid container
const PARAMS = new URLSearchParams(window.location.search);
const SEARCH = PARAMS.get("search");
const API_URL = new URL("http://localhost:3000/products");
console.log(productGrid);

if (SEARCH) API_URL.searchParams.set("q", SEARCH);
/* else API_URL.searchParams.set("_limit", 5); */

fetch(API_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    data.forEach(function (product) {
      let theProduct = createItemLi(product);
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
      const productLi = createProductLi(result);
      productGrid.appendChild(productLi);
    });
  } else {
    productGrid.innerHTML = "No results found.";
  }
}

const productContainer = document.querySelector(".product__container");

// Function to create a product li
function createItemLi(item) {
  // Create a li element for the product
  const LI = document.createElement("li");
  LI.className = "product__box"

  LI.innerHTML = `

        <a href="/singleProduct.html?model=${item.id}" class"productList__link">
        <figure class="product__figure">
        <img src="${item.img}" alt="product photo" class="product__img">
        </figure>
        </a>

        <h3>${item.category} ${item.model}</h3>
        <p class="product__currentPrice">${item.currentPrice}</p>
        <p class="product__previousPrice">${item.previousPrice}</p>
        `;

        if (item.availability) {
          const SEEPRODUCT = document.createElement("button")
        SEEPRODUCT.innerHTML = item.availability
        SEEPRODUCT.className = "product__button"
        LI.appendChild(SEEPRODUCT)  
        }

  return LI;
}





// Below is the code before the function above was made

// Create and append elements for product properties
/*  const productTitle = document.createElement("h3");
  productTitle.textContent = `Product: ${item.product}`;

  const productModel = document.createElement("p");
  productModel.textContent = `Model: ${item.model}`;

  const productBrand = document.createElement("p");
  productBrand.textContent = `Brand: ${item.brand}`;

  const productWarranty = document.createElement("p");
  productWarranty.textContent = `Warranty: ${item.warranty}`;

  const productColor = document.createElement("p");
  productColor.textContent = `Color: ${
    item.color ? item.color.join(", ") : "N/A"
  }`;

  const productPrice = document.createElement("p");
  productPrice.textContent = `Price: ${item.price}`;
  productPrice.classList.add("price__text"); // Adds a class to the element

  const deliveryInfo = document.createElement("p");
  deliveryInfo.textContent = `Delivery Charge: ${item.delivery_charge}, Delivery Time: ${item.delivery_time}`;

  // Append all elements to the product div
  productLi.appendChild(productTitle);
  productLi.appendChild(productModel);
  productLi.appendChild(productBrand);
  productLi.appendChild(productWarranty);
  productLi.appendChild(productColor);
  productLi.appendChild(productPrice);
  productLi.appendChild(deliveryInfo);

  return productLi; */
