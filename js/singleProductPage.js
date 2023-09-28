const URL = new URLSearchParams(window.location.search);

fetch(`http://localhost:3000/products/${URL.get("model")}`) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const PRODUCT_IMAGE = document.querySelector(".productImage");
    const PRODUCT_INFO = document.querySelector(".container__productInfo");
    PRODUCT_INFO.innerHTML = "";

    PRODUCT_IMAGE.src = data.img;
    PRODUCT_INFO.innerHTML = `
   
    <div class="container__productInfo">
       <h2 class="productName">${data.model}</h2>

      <div class="productPrice">
          <a href="/productList.html" class="otherProducts__p"> See other ${data.brand} products</a>
       
          <span class="previousPrice">${data.previousPrice}</span>
          <span class="currentPrice">${data.currentPrice}</span>
      </div>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed quas laudantium obcaecati quo alias
          deleniti inventore ut consequuntur dolores! Recusandae ratione eos qui dolorum nihil id at error
          quisquam quibusdam!</p>

    </div>
    `
  })

  .catch(function (error) {
    console.error(error.message);
  })
