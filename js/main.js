document.querySelector(".fade-layer").addEventListener("click", showMenu)
document.querySelector(".menu-button").addEventListener("click", showMenu)


function showMenu(){
    console.log("click menu");
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
    
    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");
}

    document.querySelector(".drop-button").addEventListener("click", showDropdown)
    
    function showDropdown(){
        console.log("click dropdown");
        let aside = document.querySelector("aside");
        aside.classList.toggle("appear");
        
    }    
