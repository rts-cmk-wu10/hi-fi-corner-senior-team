// const URL = new URLSearchParams(window.location.search)

fetch(`http://localhost:3000/products/1`)
.then(function (response) {
        return response.json()
})
.then(function(data) {
    // console.log(data)

    const test = document.querySelector(".test")
    console.log(data.img)

    test.innerHTML = `
    <img src="${data.img}" class="test__img">
    `
})