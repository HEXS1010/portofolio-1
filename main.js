// toggle dan responsive
const navSlide = () => {
    const hamburger = document.querySelector(".hamburger")
    const navList = document.querySelector("nav")

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("nav-active")
        hamburger.classList.toggle("toggle-hamburger")
    });
};

navSlide();
