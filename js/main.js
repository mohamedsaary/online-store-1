let toggleNavStatus = false;

let toggleNav = function() {
    let getSideBar = document.querySelector(".nav-sidebar");

    if (toggleNavStatus === false) {
        getSideBar.style.display = "block";
        toggleNavStatus = true;
    } 
    else if (toggleNavStatus === true) {
        getSideBar.style.display = "none";
        toggleNavStatus = false;
    }
}