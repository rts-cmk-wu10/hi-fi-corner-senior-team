fetch("/package-lock.json/product-information")
  .then(function (response) {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error("Oops, something went wrong. Please try again later.");
    }
  })
  .then(function (data) {
    console.log(data);
    const DIV = document.querySelector(".productName");
    if (DIV) {
      DIV.innerHTML = `
        <h1>Marantz</h1>
        `;
    } else {
      console.error("Element with class 'productName' not found.");
    }
  })
  .catch(function (error) {
    console.error(error.message);
    // You can handle the error message here in a more user-friendly way.
  });