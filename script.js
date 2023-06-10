/***** Theme change *****/
const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

btn.addEventListener("click", function () {
  if (prefersDarkScheme.matches) {
    document.body.classList.toggle("light-theme");
    
  } else {
    document.body.classList.toggle("dark-theme");
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


