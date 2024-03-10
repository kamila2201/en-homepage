console.log("Hello everyone!");

const body = document.querySelector(".js-body");
const button = document.querySelector(".js-button");
const themeName = document.querySelector(".js-themeName");

const toggleBackground = () => {
    body.classList.toggle("body--color");

    themeName.innerText = body.classList.contains("body--color")
        ? "image"
        : "color";
};

button.addEventListener("click", toggleBackground);

