(function () {
  
  "use strict";
  const navbar = document.querySelector("nav");
  const dropdown = document.querySelector(".dropnav-content");
  const navbtn = navbar.querySelector(".dropnav-button");
  const toggleThemeBtn = document.querySelector(".toggle-theme");
  const rootElement = document.querySelector(":root");
  toggleThemeBtn.addEventListener("click",toggleThemeHandler);
  
  function toggleThemeHandler(){
    const rootComputed =getComputedStyle(rootElement); 
    const currentBg = rootComputed.getPropertyValue("--app-background");
    currentBg ==="#d8e2e0"?
     (rootElement.style.setProperty("--app-background"," #252526"))
     :(rootElement.style.setProperty("--app-background","#d8e2e0"));
  }

  /**
   * This function animates the navbar when the user scrolls.
   */
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

  /**
   * This function resizes the dropdown menu when the window is resized.
   */
  function windowResize() {
    if (window.innerWidth > 500) {
      dropdown.style.maxHeight = "1000px";
    } else {
      dropdown.style.maxHeight = "0px";
    }
  }

  /**
   * This function handles the click event on the navbar button.
   */
  function navClick() {
    let maxh = window.getComputedStyle(dropdown).maxHeight;
    if (maxh !== "0px") {
      dropdown.style.maxHeight = "0px";
      navbtn.textContent = "☰ MENU";
    } else {
      dropdown.style.maxHeight = "1000px";
      navbtn.textContent = "close";
    }
  }

  /**
   * This function handles the mouseenter event on the navbar.
   */
  function navHover() {
    navbtn.textContent = "Close";
    dropdown.style.maxHeight = "1000px";
  }

  /**
   * This function handles the mouseleave event on the navbar.
   */
  function navLeave() {
    navbtn.textContent = "☰ MENU";
    if (window.innerWidth <= 500) {
      dropdown.style.maxHeight = "0px";
    }
  }

  // Add event listeners to the window and navbar
  window.addEventListener("scroll", anim_nav);
  window.addEventListener("resize", windowResize);
  navbar.addEventListener("mouseenter", navHover);
  navbar.addEventListener("mouseleave", navLeave);
  navbtn.addEventListener("click", navClick);

  const mainContent = document.querySelector(".main-content");
  const buy_now = document.getElementById("buy-now");
  // buy_now.addEventListener(
  //   "click",
  //   (a, b) => (mainContent.textContent = "hello")
  // );

})();
