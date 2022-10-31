console.log("loaded ");
const pageHeader = document.getElementById("page-header");
const searchWidjet = document.getElementById("search-widjet");
const pageNav = document.getElementById("page-nav");
const service = document.getElementById("service");

const serviceSearchBtn = document.getElementById("service-search-btn");
const serviceActionBtn = document.getElementById("service-action-btn");

const searchCloseBtn = document.getElementsByClassName("search-close-icon")[0];

function onSearchWidjectOpen(e) {
  e.preventDefault();
  console.log("onSearchWidjectOpen");
  pageNav.classList.toggle("hide");
  service.classList.toggle("hide");
  searchWidjet.classList.toggle("hide");
  pageHeader.classList.add("page-header__light");
}

function onSearchWidjetClose(e) {
  e.preventDefault();
  searchWidjet.classList.toggle("hide");
  pageNav.classList.toggle("hide");
  service.classList.toggle("hide");
  pageHeader.classList.remove("page-header__light");
}

serviceSearchBtn.addEventListener("click", onSearchWidjectOpen);
searchCloseBtn.addEventListener("click", onSearchWidjetClose);
