const HEADER = document.querySelector(".header__search")
HEADER.innerHTML = `
<section class="header__top">

<form action="#" class="search__form" autocomplete="off">
<input type="search" list="products" name="product" class="search_form--input" placeholder="Search entire store here...">
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
`