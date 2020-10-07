const btn = document.querySelector(".start-btn");
const title = document.querySelector(".hero__title h3");

const eventHandler = {
    mouseOver: function() {
        title.innerText = "바뀜!";
    },
    mouseOut: function() {
        title.innerText = "제목";
    }
};
const {mouseOver, mouseOut} = eventHandler;

btn.addEventListener("mouseover", mouseOver);
btn.addEventListener("mouseout", mouseOut);