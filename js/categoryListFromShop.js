
const urlSearchParams = new URLSearchParams(window.location.search)
const fetchURL = new URL('http://localhost:3000/products')
fetchURL.searchParams.set('_sort', urlSearchParams.get("sort" ?? "currentPrice"))
fetchURL.searchParams.set('q', urlSearchParams.get("category"))


fetch(fetchURL)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        // console.log(data)

    // hvordan console.log jeg data uden for foreach hvor jeg laver hvert catch til et "item"-parameter
    //jeg tænker ikke det dur direkte på data da jeg søger category som er ens for dem alle på header h2 tagget og derfor SKAL det ind under foreach loopet


    const PREVIOUSFOCUS = document.querySelector(".categoryList__Ul");

    data.forEach(function (item) {
      const headerFocus = document.querySelector(".categoryList__h2");
      headerFocus.textContent = item.category;

      //li i ul
      const LI = document.createElement("li");
      LI.className = "product__box";
      LI.innerHTML = `
        <a href="/singleProduct.html?model=${item.id}">
        <figure class="product__figure">
        <img src="${item.img}" alt="product photo" class="product__img">
        </figure>
        </a>

        <h4>${item.category} ${item.model}</h4>
        <p class="product__currentPrice">${item.currentPrice}</p>
        <p class="product__previousPrice">${item.previousPrice}</p>
        `;
   
        
        if (item.availability) {
          const SEEPRODUCT = document.createElement("button")
        SEEPRODUCT.innerHTML = item.availability
        SEEPRODUCT.className = "product__button"
        LI.appendChild(SEEPRODUCT)  
        }
        
        PREVIOUSFOCUS.appendChild(LI)


        })

      if (item.availability) {
        const SEEPRODUCT = document.createElement("button");
        SEEPRODUCT.innerHTML = item.availability;
        LI.appendChild(SEEPRODUCT);
      }

      PREVIOUSFOCUS.appendChild(LI);
    });

    // ------------select / options--------------

const SORTBY = document.querySelector(".sortBy__options");

SORTBY.addEventListener("change", optionChange);

function optionChange() {
    const selectedOption = SORTBY.value

    const currentURL = new URL(window.location.href)

    currentURL.searchParams.set('sort', selectedOption)
    console.log(currentURL.href)

    window.location.href = currentURL
}

