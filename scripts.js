const buy_now = document.getElementById("buy-now");
buy_now.addEventListener("click", ()=>window.document.location.href="booking-form.html")

const navbar = document.querySelector("nav");
// window.addEventListener("scroll",anim_nav)

function anim_nav(){
    nav_top = navbar.getBoundingClientRect().top
    if (nav_top == 0){
        navbar.style.borderRadius = "0" 
    }
    else{
        navbar.style.borderRadius = "50vh"
    }

}