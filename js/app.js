// Slide side nav
const iconHolder = document.getElementById("slide-side-nav");
const icon = document.getElementById("icon");
const nav = document.getElementById("side-nav");
const headerTop = document.getElementById("header-top");

let navBoolean = false;

const closeSideNav = () => {
  if (!navBoolean) {
    navBoolean = true;
    nav.classList.remove("side-nav-slide-backwards");
    nav.classList.add("side-nav-slide-forwards");
    headerTop.classList.remove("slide-headertop-backwards");
    headerTop.classList.add("slide-headertop-forwards");
    icon.classList.remove("fa-bars", "fa-solid");
    icon.classList.add("fa-solid", "fa-xmark");
  } else {
    navBoolean = false
    nav.classList.add("side-nav-slide-backwards");
    nav.classList.remove("side-nav-slide-forwards");
    headerTop.classList.add("slide-headertop-backwards");
    headerTop.classList.remove("slide-headertop-forwards");
    icon.classList.remove("fa-solid", "fa-xmark");
    icon.classList.add("fa-bars", "fa-solid");
  }
};

// Search Input
const search = document.getElementById("toggleSearchInput");
const searchInput = document.getElementById("SearchInput");
let chevron = document.getElementsByClassName("fa-chevron-down");

let searchBool = false

search.addEventListener("click", () => {
  if (searchInput.classList.contains("fadeOut")) {
    searchBool = true
    searchInput.style.display = "block";
    searchInput.classList.add("fadeInAnimation");
    searchInput.classList.remove("fadeOut");
  }else{
    searchInput.classList.remove("fadeInAnimation");
    searchInput.classList.add("fadeOut");
  }
});

// Bug
document.addEventListener("mouseup", function (e) {
  if (!searchInput.contains(e.target) && !search.contains(e.target) && searchBool) {
    // searchInput.style.display = "none";
    searchInput.classList.add("fadeOut");
    searchInput.classList.remove("fadeInAnimation");
  }
  // Closing side nav
  if (!nav.contains(e.target) && !icon.contains(e.target) && navBoolean) {
    navBoolean = false
    nav.classList.add("side-nav-slide-backwards");
    nav.classList.remove("side-nav-slide-forwards");
    headerTop.classList.add("slide-headertop-backwards");
    headerTop.classList.remove("slide-headertop-forwards");
    icon.classList.remove("fa-solid", "fa-xmark");
    icon.classList.add("fa-bars", "fa-solid");
  }
});

// Navbar Dropdown

let triggers = document.querySelectorAll('[data-toggle="dropdown"]');
let containers = document.querySelectorAll(".dropdown-menu");

for (var i = 0; i < triggers.length; i++) {
  triggers[i].onclick = function (e) {
    e.stopPropagation();
    let target = document.getElementById(this.dataset.target);

    for (var j = 0; j < containers.length; j++) {
      if (containers[j].id != this.dataset.target) {
        containers[j].style.display = "none";
        containers[j].classList.add("fadeInAnimation");
        containers[j].parentElement.classList.remove("active");
      }
    }

    if (target.style.display === "none" || target.style.display === "") {
      target.style.display = "block";
      target.parentElement.classList.add("active");
    } else {
      target.style.display = "none";
      target.parentElement.classList.remove("active");
    }
  };
}
window.onclick = function () {
  for (var j = 0; j < containers.length; j++) {
    containers[j].style.display = "none";
    containers[j].parentElement.classList.remove("active");
  }
};
