const URL = new URLSearchParams(window.location.search)



fetch(`http://localhost:3000/products?q=${URL.get("category")}`)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)



        const productFocus = document.querySelector(".products__Ul")
        productFocus.innerHTML = "";

        


        data.forEach(function (item) {
        const li = document.createElement("li");
        li.className = "li_box"


        const h3 = document.createElement("h3");
        h3.textContent = item.model;
        li.appendChild(h3);

        const span = document.createElement("span");
        span.textContent = "Published: " + result.published;
        li.appendChild(span);

        productFocus.appendChild(li)
        })


    })


// http://localhost:3000/products?q=speaker



























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