let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slideshowContainer = document.querySelector(".slideshowContainer");

    let images = [
        {
            src: "/img/forside_marantz_slider_2.jpg", text: "MARANTZ"
        },
        {
            src: "/img/forside_slider1.jpg", text: "SONY SPEAKERS"
        },
        {
            src: "/img/meshuggah_apmlifier_slider_3.webp", text: "MESHUGGAH AMPLIFIER"
        }
    ]




    if (n > slides.length) {
        slideIndex = 1
    } // slideindex er større end slides.længde er indeks større end det maksimale indeks for slides og slides går tilbage til index 1 / SENDES TILBAGE TIL 1 VED KLIK
    if (n < 1) {
        slideIndex = slides.length
    } // modsat hvis slideindex er mindre end 1 sendes man til sidste slide i slide.array / SENDES TIL 3 VED KLIK

    for (i = 0; i < images.length; i++) {
        let slide = document.createElement("div");
        slide.className = "mySlides fade";
        slide.innerHTML = `
            <img class="slider_image" src="${images[i].src}" style="width:100%">
            <div class="text">${images[i].text}</div>

        `;
        slideshowContainer.appendChild(slide);
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    } // Sørger for at alle slides som udgangspunkt er skjulte


    slides[slideIndex - 1].style.display = "block";

    // Opret en <div> til knapperne
    let buttonContainer = document.createElement("div");
    buttonContainer.className = "buttonContainer"; // Du kan tilpasse klassenavnet

    // Opret "Previous" knap
    let prevButton = document.createElement("a");
    prevButton.className = "prev";
    prevButton.innerHTML = "&#10094;";
    prevButton.onclick = function () {
        plusSlides(-1);
    };

    // Opret "Next" knap
    let nextButton = document.createElement("a");
    nextButton.className = "next";
    nextButton.innerHTML = "&#10095;";
    nextButton.onclick = function () {
        plusSlides(1);
    };

    // Tilføj knapperne til knap-containeren
    buttonContainer.appendChild(prevButton);
    buttonContainer.appendChild(nextButton);

    // Tilføj knap-containeren til slideshowContainer
    slideshowContainer.appendChild(buttonContainer);
}


