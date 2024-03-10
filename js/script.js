console.log("Hello everyone!");


const button = document.querySelector(".js-button");

const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--color");

    themeName.innerText = body.classList.contains("body--color")
        ? "image"
        : "color";
};

button.addEventListener("click", toggleBackground);

