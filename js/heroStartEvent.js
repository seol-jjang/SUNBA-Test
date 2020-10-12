const btn = document.querySelector(".start-btn");
const title = document.querySelector(".hero__title h3");
const span = title.querySelector("span");

const eventHandler = {
    mouseOver: function() {
        span.textContent = "유튜브";

    },
    mouseOut: function() {
        span.textContent = "유튜브";
    }
};
const {mouseOver, mouseOut} = eventHandler;

btn.addEventListener("mouseover", mouseOver);
btn.addEventListener("mouseout", mouseOut);