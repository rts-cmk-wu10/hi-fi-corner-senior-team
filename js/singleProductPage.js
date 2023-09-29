const URL = new URLSearchParams(window.location.search);

fetch(`http://localhost:3000/products/${URL.get("model")}`) 
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const PRODUCT_IMAGE = document.querySelector(".productImage");
    const PRODUCT_INFO = document.querySelector(".container__productInfo");
    PRODUCT_INFO.innerHTML = "";
    const ADDITIONAL_PRODUCT_INFO = document.querySelector(".productInfo__additional")

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

    ADDITIONAL_PRODUCT_INFO.innerHTML = 

       ` <ul class="additional__ul">
        <li class="addInfo__li">
            <p>manufacturer</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.brand}</span></li>
        <li class="addInfo__li">
            <p>model</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.model}</span></li>
        <li class="addInfo__li">
            <p>free warranty</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.warranty}</span></li>
        <li class="addInfo__li">
            <p>delivery charge</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.delivery_charge}</span></li>
        <li class="addInfo__li">
            <p>delivery timme</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.delivery_time}</span></li>
        <li class="addInfo__li">
            <p>card surcharges</p>
        </li>
        <li class="addInfo__li"><span class="spanFetch">${data.card_surcharges}</span></li>
    </ul> `

            
  })

  .catch(function (error) {
    console.error(error.message);
  })

