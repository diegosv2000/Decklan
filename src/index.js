window.onload = function () {
  $("#onload").fadeOut();

  let start = document.getElementById("start");
  start.onclick = () => {
    document.getElementById("startContainer").style.animationDuration = ".7s";
    document.getElementById("startContainer").style.animationName = "hide";
    setTimeout(() => {
      document.getElementById("startContainer").style.display = "none";
      document.getElementById("start").style.animationName = "show";
      document.getElementById("main").style.display = "block";
    }, 700);
    $("body").removeClass("hidden");
  };
};
function WhoIAM() {
  document.getElementById("main").style.animationName = "hide";
  setTimeout(() => {
    let section = document.getElementById("section1");
    section.style.display = "block";
    document.getElementById("main").style.display = "none";
    let back = document.getElementById("home1");
    back.onclick = () => {
      document.getElementById("main").style.animationName = "show";
      section.style.animationName = "hide";
      setTimeout(() => {
        section.style.display = "none";
        section.style.animationName = "show";
        document.getElementById("main").style.display = "block";
      }, 500);
    };
  }, 500);
}
function WhatIDo() {
  document.getElementById("main").style.animationName = "hide";
  setTimeout(() => {
    let section = document.getElementById("section2");
    section.style.display = "block";
    document.getElementById("main").style.display = "none";
    let back = document.getElementById("home2");
    back.onclick = () => {
      document.getElementById("main").style.animationName = "show";
      section.style.animationName = "hide";
      setTimeout(() => {
        section.style.display = "none";
        section.style.animationName = "show";
        document.getElementById("main").style.display = "block";
      }, 500);
    };
  }, 500);
}
function Blog() {
  document.getElementById("main").style.animationName = "hide";
  setTimeout(() => {
    let section = document.getElementById("section3");
    section.style.display = "block";
    document.getElementById("main").style.display = "none";
    let back = document.getElementById("home3");
    back.onclick = () => {
      document.getElementById("main").style.animationName = "show";
      section.style.animationName = "hide";
      setTimeout(() => {
        section.style.display = "none";
        section.style.animationName = "show";
        document.getElementById("main").style.display = "block";
      }, 500);
    };
  }, 500);
}

function Start() {
  let start = document.getElementById("start");
  start.onclick = () => {
    document.getElementById("startContainer").style.animationDuration = ".7s";
    document.getElementById("startContainer").style.animationName = "hide";
    setTimeout(() => {
      document.getElementById("startContainer").style.display = "none";
      document.getElementById("start").style.animationName = "show";
      document.getElementById("main").style.display = "block";
    }, 700);
  };
  $("body").removeClass("hidden");
}
