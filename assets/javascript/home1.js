
let home = document.getElementById("home");
home.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function() {
    window.location.href = "../home";
  };
});
let events = document.getElementById("events");
events.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "../events";
  };
});
let artists = document.getElementById("artists");
artists.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "../artists";
  };
});
let sponsors = document.getElementById("sponsors");
sponsors.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "sponsors";
  };
});
let gallery = document.getElementById("gallery");
gallery.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "../gallery";
  };
});
let aboutus = document.getElementById("aboutus");
aboutus.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "../aboutus";
  };
});

// loader


// mobile navbar js
let toggle = document.querySelector(".toggle");
let mobileNav = document.querySelector(".mobile-nav");
let closeNav = document.querySelector(".close");
toggle.addEventListener("click", function () {
  toggle.style.display = "none";
  mobileNav.style.display = "block";
});
closeNav.addEventListener("click", function () {
  toggle.style.display = "block";
  mobileNav.style.display = "none";
});
