document.addEventListener("DOMContentLoaded", function () {
    const modalButtons = document.querySelectorAll("[data-modal-btn]");
    const modalClose = document.querySelectorAll("[data-modal-overlay], [data-modal-close]");

    if (modalButtons.length) {
        modalButtons.forEach((item) => {
            item.addEventListener("click", (e) => {
                e.preventDefault();
                const hash = item.hash;
                const modalItem = document.querySelector(hash);
                if (modalItem) {
                    modalFadeIn(modalItem);
                    modalItem.classList.add("modal-open");
                }
            });
        });

        modalClose.forEach((item) => {
            item.addEventListener("click", () => {
                const modalOpen = document.querySelector("[data-modal].modal-open");
                if (modalOpen) {
                    modalFadeOut(modalOpen);
                    modalOpen.classList.remove("modal-open");
                }
            });
        });
    }
});

function modalFadeIn(el) {
    let opacity = 0.01;
    el.style.display = "block";
    let timer = setInterval(function () {
        if (opacity >= 1) {
            clearInterval(timer);
        }
        el.style.opacity = opacity;
        opacity += 0.03;
    }, 10);
}
function modalFadeOut(el) {
    let opacity = 1;
    let timer = setInterval(function () {
        if (opacity <= 0) {
            clearInterval(timer);
            el.style.display = "none";
        }
        el.style.opacity = opacity;
        opacity -= 0.03;
    }, 10);
}
