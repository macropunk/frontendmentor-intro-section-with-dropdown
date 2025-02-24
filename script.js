const featuresButton = document.getElementById("features-button");
const companyButton = document.getElementById("company-button");

const featuresDropdown = document.querySelector(".features-dropdown");
const companyDropdown = document.querySelector(".company-dropdown");

/* when clicked the dropdown is activated */
featuresButton.addEventListener("click", ()=> {
    featuresDropdown.classList.toggle("active");
    if(featuresDropdown.classList.contains("active")){
        document.querySelector("#features-button img").src = "images/icon-arrow-up.svg";
    }else{
        document.querySelector("#features-button img").src = "images/icon-arrow-down.svg";
    }
});
companyButton.addEventListener("click", ()=> {
    companyDropdown.classList.toggle("active");
    if(companyDropdown.classList.contains("active")){
        document.querySelector("#company-button img").src = "images/icon-arrow-up.svg";
    }else{
        document.querySelector("#company-button img").src = "images/icon-arrow-down.svg";
    }
});

/* handles the image hero responsiveness */
window.addEventListener("resize", ()=>{
    const imageHero = document.getElementById("image-hero");
    if(window.innerWidth < 900){
        imageHero.src = "images/image-hero-mobile.png"
    }else{
        imageHero.src = "images/image-hero-desktop.png"
        bgShadow.style.display = "none";
    }
});

const bgShadow = document.querySelector(".bg-shadow");
const headerNav = document.querySelector(".header-nav");

document.getElementById("open-menu-button").addEventListener("click", ()=>{
    headerNav.classList.add("active");
    bgShadow.style.display = "block";
});
document.getElementById("close-menu-button").addEventListener("click", ()=>{
    headerNav.classList.remove("active");
    bgShadow.style.display = "none";
});

/* github.com/rezird */