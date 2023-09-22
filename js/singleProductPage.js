fetch('http://localhost:3000/products/1')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const PRODUCT_IMAGE = document.querySelector(".productImage");
    const PRODUCT_NAME = document.querySelector(".productName");
    const PRODUCT_OTHERS = document.querySelector(".otherProducts__p")
    const PREVIOUS_PRICE = document.querySelector(".previousPrize")
    const CURRENT_PRICE = document.querySelector(".currentPrize")

    console.log(data.img);

    PRODUCT_IMAGE.src = data.img;
    PRODUCT_NAME.innerHTML = `<h2 class="productName">${data.model}</h2>`
    PRODUCT_OTHERS.innerHTML = `<p>See other ${data.brand} products</p>`
    PREVIOUS_PRICE.innerHTML = `<span>${data.previous_price}</span>`
    CURRENT_PRICE.innerHTML = `<span>${data.currrent_price}</span>` 

  })
  
  .catch(function (error) {
    console.error(error.message);
    // You can handle the error message here in a more user-friendly way.
  });