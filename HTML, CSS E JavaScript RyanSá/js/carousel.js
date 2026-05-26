// carousel

let carouselArr = [];

class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                carouselArr = arr;

                const carouselDiv = document.getElementById("carousel");

                const btnPrev = document.createElement("button");
                btnPrev.id = "carousel-btn-prev";
                btnPrev.className = "carousel-nav-btn";
                btnPrev.innerHTML = "&#10094;";
                btnPrev.setAttribute("aria-label", "Anterior");
                btnPrev.onclick = function (e) {
                    e.stopPropagation();
                    clearInterval(Carousel._interval);
                    Carousel.Prev();
                    Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
                };

                const btnNext = document.createElement("button");
                btnNext.id = "carousel-btn-next";
                btnNext.className = "carousel-nav-btn";
                btnNext.innerHTML = "&#10095;";
                btnNext.setAttribute("aria-label", "Próximo");
                btnNext.onclick = function (e) {
                    e.stopPropagation();
                    clearInterval(Carousel._interval);
                    Carousel.Next();
                    Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
                };

                carouselDiv.appendChild(btnPrev);
                carouselDiv.appendChild(btnNext);

                Carousel.Show();
                Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Show() {
        const carousel = document.getElementById("carousel");
        const title = document.getElementById("carousel-title");
        const item = carouselArr[Carousel._sequence];

        carousel.style.backgroundImage = "url('" + item.image + "')";
        carousel.style.cursor = "pointer";
        carousel.onclick = function (e) {
            if (!e.target.classList.contains("carousel-nav-btn")) {
                window.location.href = item.url;
            }
        };

        title.innerHTML = '<a href="' + item.url + '">' + item.title + '</a>';
    }

    static Next() {
        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
        Carousel.Show();
    }

    static Prev() {
        Carousel._sequence--;
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        Carousel.Show();
    }
}
