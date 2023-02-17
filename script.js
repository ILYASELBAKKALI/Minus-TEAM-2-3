
window.addEventListener("load", function() {
    let menu = this.document.querySelector(".menu");
    let navbar = this.document.querySelector(".navbar");
    let display = "none";

    menu.addEventListener("click", function() {
        display = display == "flex" ? "none" : "flex";
        navbar.style.display = display;
    });
});