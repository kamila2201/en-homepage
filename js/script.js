const welcome = () => {
    console.log("Hello everyone!");
}

const toggleBackground = () => {
    const body = document.querySelector(".js-body");
    const themeName = document.querySelector(".js-themeName");

    body.classList.toggle("body--color");

    themeName.innerText = body.classList.contains("body--color")
        ? "image"
        : "color";
};

const init = () => {
    const button = document.querySelector(".js-button");
    button.addEventListener("click", toggleBackground);
    
    welcome(); 
}

init();
