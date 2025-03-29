document.querySelector(".fade-layer").addEventListener("click", showMenu)
document.querySelector(".menu-button").addEventListener("click", showMenu)
document.querySelector(".drop-button").addEventListener("click", showDropdown)

function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
    
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}

function showDropdown(){
    let aside = document.querySelector("aside");
    aside.classList.toggle("appear");
}    
