// function playHome() {

//     var audio = document.getElementById("myAudio");
//     audio.play();
//   }

//   function redirect() {
//     window.location.href = "nextpage.html"; // Replace "nextpage.html" with the URL of the next page you want to redirect to
//   }

let home = document.getElementById("home");
home.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function() {
    window.location.href = "/";
  };
});
let events = document.getElementById("events");
events.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "events";
  };
});
let artists = document.getElementById("artists");
artists.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "artists";
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
    window.location.href = "gallery";
  };
});
let aboutus = document.getElementById("aboutus");
aboutus.addEventListener("click", function (e) {
  e.preventDefault();
  
  var audio = document.getElementById("audio");
  audio.play();
  audio.onended = function () {
    window.location.href = "aboutus";
  };
});

// loader

document.addEventListener("DOMContentLoaded", function(event) {
  var gif = document.getElementById('loader');
  if(gif){
    setTimeout(function() {
      gif.src = gif.src;
      gif.style.display = 'none'; // Hide the GIF after 10 seconds
      document.getElementById('desktop').style.display = 'flex';
      document.getElementById('toggle').style.display = 'block';
      document.getElementById('logo-m').style.display = 'block';
      
    }, 3000); // 10000 milliseconds = 10 seconds
  }
  else{
    document.getElementById('logo-m').style.display = 'block';
    document.getElementById('desktop').style.display = 'flex';
    document.getElementById('toggle').style.display = 'block';

  }
  console.log('1');

});

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
