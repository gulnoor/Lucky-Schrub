(function () {
  "use strict";
  const navbar = document.querySelector("nav");
  const dropdown = document.querySelector(".dropnav-content");
  const navbtn = navbar.querySelector(".dropnav-button");

  window.addEventListener("scroll", anim_nav);
  window.addEventListener("resize", windowResize);
  navbar.addEventListener("mouseenter", navHover);
  navbar.addEventListener("mouseleave", navLeave);
  navbar.addEventListener("click", navClick);

  function windowResize() {
    if (window.innerWidth >= 600) {
      dropdown.style.maxHeight = "1000px";
    } else {
      dropdown.style.maxHeight = "0px";
    }
  }
  function navClick() {
    let maxh = window.getComputedStyle(dropdown).maxHeight;
    if (maxh !== "0px") {
      dropdown.style.maxHeight = "0px";
      navbtn.innerHTML = "☰ MENU";
      

    } else {
      dropdown.style.maxHeight = "1000px";
      navbtn.innerHTML = "&#x25BC;";
      


    }
  }

  function navHover() {
    navbtn.innerHTML = "&#x25BC;";
    dropdown.style.maxHeight = "1000px";
  }
  function navLeave() {
    navbtn.innerHTML = "☰ MENU";
    if (window.innerWidth < 600) {
      dropdown.style.maxHeight = "0px";
    }
  }
  function anim_nav() {
    let nav_top = navbar.getBoundingClientRect().top;
    if (nav_top === 0) {
      navbar.style.borderRadius = "0";
      navbar.style.marginLeft = "0";
      navbar.style.marginRight = "0";
    } else {
      navbar.style.borderRadius = "1rem";
      navbar.style.marginLeft = "1rem";
      navbar.style.marginRight = "1rem";
    }
  }

  const mainContent = document.querySelector(".main-content");
  const buy_now = document.getElementById("buy-now");
  buy_now.addEventListener("click", () => (mainContent.innerHTML = "hello"));
})();
