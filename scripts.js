const buy_now = document.getElementById("buy-now");
buy_now.addEventListener("click", ()=>{window.document.location.href="booking-form.html"})

const navbar = document.querySelector("nav");
window.addEventListener("scroll",extend_nav)

function extend_nav(){
    nav_top = navbar.getBoundingClientRect().top
    if (nav_top == 0){
        navbar.style.marginLeft = "-5vw"
        navbar.style.marginRight = "-5vw"
        navbar.style.borderRadius = "0"
        // navbar.style.animation = "extend_navbar 0.5s ease-in-out forwards"
    }
    else{
        navbar.style.marginLeft = "0"
        navbar.style.marginRight = "0"
        navbar.style.borderRadius = "50vh"
        // navbar.style.animation = "contract_navbar 0.5s ease-in-out forwards"
    }

}