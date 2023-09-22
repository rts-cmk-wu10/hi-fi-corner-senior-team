const HEADER = document.querySelector(".header__search")
HEADER.innerHTML = `
<section class="header__top">

<form action="#" class="search_form" autocomplete="off">
<input type="search" list="products" name="product" class="search_form--input">
<datalist id="products"></datalist>
<button type="submit" class="submit">Søg</button>
</form>

<i class="fa-solid fa-user"></i> account
<i class="fa-solid fa-cart-shopping"></i> cart
<i class="fa-solid fa-location-dot"></i>

</section>

<section class="header__navbar">
<nav>
<a href="index.html">home</a>
<a href="aboutUs.html">about us</a>
<a href="branch.html">brands</a>
<a href="#">blog</a>
<a href="#">events</a>
<a href="categoryList.html">shop</a>
<a href="contact.html">contact us</a>
</nav>
</section>
`