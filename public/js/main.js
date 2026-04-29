document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("runBtn");
    const gif = document.getElementById("actionGif");
    const duration = 1300;

    const staticImg = "../images/action-1-1.png";
    const animatedGif = "../images/dxs-action.gif";

    let isPlaying = false;
    
    button.addEventListener("click", () => {
        gif.src = animatedGif;

        setTimeout(() => {
            gif.src = "../images/action-10.png";
        }, duration);
    });    
});


const hero = document.querySelector(".flex-container");
const images = document.querySelectorAll(".img");
const stageBlock = document.querySelector(".flex-container:last-of-type");

window.addEventListener("scroll", () => {
    const y = window.scrollY;

    // HERO
    if (y > 100) {
        hero.classList.add("hero-up");
    } else {
        hero.classList.remove("hero-up");
    }

    // IMAGES (simple, reliable trigger)
    images.forEach(img => {
        const rect = img.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.85) {
            img.classList.add("show");
        }
    });

    // STAGE
    if (y > 800) {
        stageBlock.style.opacity = "1";
        stageBlock.style.transform = "translateY(0)";
    }
});