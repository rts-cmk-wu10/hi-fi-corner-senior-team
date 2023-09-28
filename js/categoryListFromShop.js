const URL = new URLSearchParams(window.location.search)


fetch(`http://localhost:3000/products?q=${URL.get("category")}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)

        // hvordan console.log jeg data uden for foreach hvor jeg laver hvert catch til et "item"-parameter
        //jeg tænker ikke det dur direkte på data da jeg søger category som er ens for dem alle på header h2 tagget og derfor SKAL det ind under foreach loopet

        const PREVIOUSFOCUS = document.querySelector(".categoryList__Ul")
    

        data.forEach(function (item) {
            const headerFocus = document.querySelector(".categoryList__h2")
            headerFocus.textContent = item.category


        
        //li i ul
        const LI = document.createElement("li");
        LI.className = "li__box"
        LI.innerHTML =`
        <a href="/singleProduct.html?model=${item.id}" class"productList__link">
        <section class="div__img"> 
        <figure class="figure__img">
        <img src="${item.img}" alt="product photo" class="productList__img">
        </figure>
        </section>
        </a>
        <h3>${item.category} ${item.model}</h3>
        <p class="currentPrice">${item.currentPrice}</p>
        <p class="previousPrice">${item.previousPrice}</p>
        `
   
        
        if (item.availability) {
          const SEEPRODUCT = document.createElement("button")
        SEEPRODUCT.innerHTML = item.availability
        LI.appendChild(SEEPRODUCT)  
        }
        
        PREVIOUSFOCUS.appendChild(LI)


        })


    })


// http://localhost:3000/products?q=speaker


     //elements på li----------------

        //link omkring hele produktet
        // const LINK = document.createElement("a");
        // LINK.href = `/singleProduct.html?model=${item.id}`
        // LINK.className = "productList__link";
        // LI.appendChild(LINK)

        // const DIV_IMG = document.createElement("section")
        // DIV_IMG.className = "div__img"
        // LINK.appendChild(DIV_IMG)

        // const FIGURE_IMG = document.createElement("figure")
        // FIGURE_IMG.className = "figure__img"
        // DIV_IMG.appendChild(FIGURE_IMG)

        // const IMG = document.createElement("img")
        // IMG.src = item.img;
        // IMG.className = "productList__img"
        // FIGURE_IMG.appendChild(IMG)


        // const H3 = document.createElement("h3");
        // H3.textContent = item.category += " " + item.model;
        // LI.appendChild(H3);

        // const PRICE = document.createElement("p")
        // PRICE.textContent = item.currentPrice;
        // PRICE.className = "currentPrice"
        // LI.appendChild(PRICE);

        // const PREVIOUSPRICE = document.createElement("p")
        // PREVIOUSPRICE.textContent = item.previousPrice;
        // PREVIOUSPRICE.className = "previousPrice"
        // LI.appendChild(PREVIOUSPRICE);
























// {SEARCH ? "?q=" + SEARCH : ''}

// function getDataList(option) {
//     let url;
//     if (option === "amplifier") {
//         url = "https://pokeapi.co/api/v2/pokemon?limit=1350";
//     } else if (option === "speaker") {
//         url = "https://pokeapi.co/api/v2/type";
//     } else if (option === "turntables") {
//         url = "https://pokeapi.co/api/v2/ability";
//     } else if (option === "cd player") {
//         url = "https://pokeapi.co/api/v2/ability";
//     } else if (option === "streamers") {
//         url = "https://pokeapi.co/api/v2/ability";
//     }
    

//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             if (option === "pokemon") {
//                 data.results.forEach(function (pokemon) {
//                     const option = document.createElement("option");
//                     option.value = pokemon.name;
//                     DATALIST.appendChild(option);
//                 });
//             } else if (option === "type" || option === "ability") {
//                 DATALIST.innerHTML = ""
//                 data.results.forEach(function (item) {
//                     const option = document.createElement("option");
//                     option.value = item.name;
//                     DATALIST.appendChild(option);
//                 });
//             }
//         });
// }