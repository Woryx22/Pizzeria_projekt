/***** Theme change *****/
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const themePreference = localStorage.getItem("themePreference");

// Nastavení theme preference na základě local storage nebo system preference
if (themePreference === "dark" || (themePreference === null && prefersDarkScheme.matches)) {
  document.body.classList.add("dark-theme");
} else {
  document.body.classList.add("light-theme");
}

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
    localStorage.setItem("themePreference", document.body.classList.contains("dark-theme") ? "dark" : "light");
  } else {
    document.body.classList.toggle("dark-theme");
    document.body.classList.toggle("light-theme");
    localStorage.setItem("themePreference", document.body.classList.contains("light-theme") ? "light" : "dark");
  }
});


/***** Top panel *****/
if (window.innerWidth < 768) {
  document.getElementById("mySidenav").className = "sidenav";
}
else{
  document.getElementById("mySidenav").className = "topnav";
}

window.onresize = function(){ location.reload(); }

/***** Side panel *****/
let panelWidth;
if (window.innerWidth > 500) {
  panelWidth = "500px"
}
else{
  panelWidth = "100%"
}
function openNav() {
  document.getElementById("mySidenav").style.width = panelWidth;
  document.getElementById("closeDivDark").style.width ="100%";
  document.getElementById("welcome").style.display = "none";

};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("closeDivDark").style.width ="0";
  document.getElementById("welcome").style.display = "block";
};
/***** scroll to na menu.html *****/
function scrolltoa(){
  var scrollDiv = document.getElementById("js-Appetizers").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltob(){
  var scrollDiv = document.getElementById("js-Flatbreads").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltoc(){
  var scrollDiv = document.getElementById("js-salads").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltod(){
  var scrollDiv = document.getElementById("js-Slices").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltoe(){
  var scrollDiv = document.getElementById("js-Pizza").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltof(){
  var scrollDiv = document.getElementById("js-Calzones").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltog(){
  var scrollDiv = document.getElementById("js-Lunch").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltoh(){
  var scrollDiv = document.getElementById("js-Wraps").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}
function scrolltoi(){
  var scrollDiv = document.getElementById("js-Dezerts").offsetTop;
  window.scrollTo({ top: scrollDiv-80, behavior: 'smooth'});
}


/***** locations preklikavani *****/
document.getElementById("js-select-1").style.backgroundColor = "#aaaaaa";
function section1() {
  document.getElementById("js-sec1").style.display = "grid";
  document.getElementById("js-select-1").style.backgroundColor = "#aaaaaa";
  document.getElementById("js-select-2").style.backgroundColor = "#ecc122";
  document.getElementById("js-select-3").style.backgroundColor = "#ecc122";
  document.getElementById("js-sec2").style.display = "none";
  document.getElementById("js-sec3").style.display = "none";

  // Uložení stavu vybrané sekce do localStorage
  localStorage.setItem("selectedSection", "section1");
}

function section2() {
  document.getElementById("js-sec1").style.display = "none";
  document.getElementById("js-sec2").style.display = "grid";
  document.getElementById("js-select-1").style.backgroundColor = "#ecc122";
  document.getElementById("js-select-2").style.backgroundColor = "#aaaaaa";
  document.getElementById("js-select-3").style.backgroundColor = "#ecc122";
  document.getElementById("js-sec3").style.display = "none";

  localStorage.setItem("selectedSection", "section2");
}

function section3() {
  document.getElementById("js-sec1").style.display = "none";
  document.getElementById("js-sec2").style.display = "none";
  document.getElementById("js-sec3").style.display = "grid";
  document.getElementById("js-select-1").style.backgroundColor = "#ecc122";
  document.getElementById("js-select-2").style.backgroundColor = "#ecc122";
  document.getElementById("js-select-3").style.backgroundColor = "#aaaaaa";

  localStorage.setItem("selectedSection", "section3");
}

// Obnovení vybrané sekce při načtení stránky
window.onload = function () {
  var selectedSection = localStorage.getItem("selectedSection");
  if (selectedSection === "section1") {
    section1();
  } else if (selectedSection === "section2") {
    section2();
  } else if (selectedSection === "section3") {
    section3();
  }
};



