const footer = document.querySelector(".site__footer")
footer.innerHTML =`
    <footer class="site__footer">
        <section class="flex__container__footer">
            <div class="left__container__footer">
                <p class="footer__paragh">Hi-Fi Corner</p>
                <p class="footer__paragh">Edinburgh 2 Joppa Road EH15 2EU</p>
                <p class="footer__paragh">Falkirk  44 Cow Wynd FK1 1PU</p>
            </div>
            <div class="left__container__footer">
                <a href="refunds.html" class="footer__tags">Returns & Refunds</a> | <a href="privacy.html" class="footer__tags">Privacy Policy</a>
            </div>
            <div class="right__container__footer">
                <img src="/img/PaymentLogos.PNG" alt="" srcset="">
            </div>
            <div class="right__container__footer">
                <img src="/img/SoMeTags.PNG" alt="Social Media Logos" >
            </div>
        </section>

    </footer>
`;
