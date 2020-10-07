const start_btn = document.querySelector(".start-btn");
const hero = document.querySelector(".hero");
const qna = document.querySelector(".qna");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");

const handleStart = () => {
    hero.style.animation = "fade-out 0.3s forwards";
    qna.style.animation = "fade-in 0.3s forwards";
    setTimeout(()=> {
        hero.style.display = "none";
        qna.style.display = "block";
    }, 500);
}

function init() {
    start_btn.addEventListener("click", handleStart);
}

init();