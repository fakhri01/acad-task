// Slide side nav
const icon = document.getElementById("slide-side-nav");
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
  } else {
    navBoolean = false;
    nav.classList.add("side-nav-slide-backwards");
    nav.classList.remove("side-nav-slide-forwards");
    headerTop.classList.add("slide-headertop-backwards");
    headerTop.classList.remove("slide-headertop-forwards");
  }
};

// document.addEventListener("click", (e) => {
//   if (!nav.contains(e.target)) {
//     nav.classList.add("side-nav-slide-backwards");
//     nav.classList.remove("side-nav-slide-forwards");
//     headerTop.classList.add("slide-headertop-backwards");
//     headerTop.classList.remove("slide-headertop-forwards");
//   }
// });

// Search Input
const search = document.getElementById("toggleSearchInput");
const searchInput = document.getElementById("SearchInput");
let chevron = document.getElementsByClassName(" fa-chevron-down");

search.addEventListener("click", () => {
  if (
    searchInput.style.display === "none" ||
    searchInput.style.display === " "
  ) {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
});

// Bug
document.addEventListener("mouseup", (e) => {
  if (!searchInput.contains(e.target)) {
    searchInput.style.display = "none";
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
      }
    }

    if (target.style.display === "none" || target.style.display === "") {
      target.style.display = "block";
    } else {
      target.style.display = "none";
    }
  };
}
window.onclick = function () {
  for (var j = 0; j < containers.length; j++) {
    containers[j].style.display = "none";
  }
};
