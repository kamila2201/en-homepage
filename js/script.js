console.log("Hello everyone!");

let body = document.querySelector(".js-body");
let button = document.querySelector(".js-button");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("body--color");

    themeName.innerText = body.classList.contains("body--color")
        ? "image"
        : "color";
});

