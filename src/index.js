(function initCursor() {
  const outer = document.getElementById("cursorOuter");
  const inner = document.getElementById("cursorInner");
  if (!outer || !inner) return;

  let mouseX = -100, mouseY = -100;
  let outerX = -100, outerY = -100;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    inner.style.left = mouseX + "px";
    inner.style.top  = mouseY + "px";
  });

  document.addEventListener("mouseover", (e) => {
    const over = e.target.closest("button, a");
    outer.classList.toggle("is-hovering", !!over);
    inner.classList.toggle("is-hovering", !!over);
  });

  (function loop() {
    outerX += (mouseX - outerX) * 0.14;
    outerY += (mouseY - outerY) * 0.14;
    outer.style.left = outerX + "px";
    outer.style.top  = outerY + "px";
    requestAnimationFrame(loop);
  })();
})();

window.onload = function () {
  const bootLines = document.querySelectorAll(".boot-line");
  const bootDelays = [200, 700, 1300, 2000];

  bootLines.forEach((line, i) => {
    setTimeout(() => line.classList.add("visible"), bootDelays[i]);
  });

  setTimeout(() => {
    bootLines.forEach((line, i) => {
      if (i < bootLines.length - 1) line.classList.add("dim");
    });
  }, 2600);

  setTimeout(() => {
    $("#onload").fadeOut(500);
  }, 3000);

  setTimeout(() => {
    typeWriter("In Satoshi We Trust", "irwt-text", 55);
  }, 3600);

  document.getElementById("start").onclick = () => {
    const sc = document.getElementById("startContainer");
    sc.style.animationDuration = ".6s";
    sc.style.animationName = "hide";
    setTimeout(() => {
      sc.style.display = "none";
      document.getElementById("main").style.display = "block";
    }, 600);
    $("body").removeClass("hidden");
  };
};

function typeWriter(text, elementId, speed) {
  const el = document.getElementById(elementId);
  if (!el) return;
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, speed);
}

function showSection(sectionId, backId) {
  const main = document.getElementById("main");
  main.style.animationName = "hide";
  setTimeout(() => {
    const section = document.getElementById(sectionId);
    section.style.display = "block";
    main.style.display = "none";
    document.getElementById(backId).onclick = () => {
      main.style.animationName = "show";
      section.style.animationName = "hide";
      setTimeout(() => {
        section.style.display = "none";
        section.style.animationName = "show";
        main.style.display = "block";
      }, 450);
    };
  }, 450);
}

function WhoIAM() { showSection("section1", "home1"); }
function WhatIDo() { showSection("section2", "home2"); }
function Skills()  { showSection("section3", "home3"); }

(function setupScramble() {
  const chars = "!@#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const h1 = document.querySelector(".main h1");
  const original = "DECKLAN";

  function scramble() {
    let i = 0;
    const iv = setInterval(() => {
      const t = original.split("").map((c, idx) => {
        if (idx < i) return c;
        return chars[Math.floor(Math.random() * chars.length)];
      }).join("");
      h1.firstChild.nodeValue = " " + t;
      h1.setAttribute("data-text", t);
      i += 0.38;
      if (i > original.length) {
        h1.firstChild.nodeValue = " " + original;
        h1.setAttribute("data-text", original);
        clearInterval(iv);
      }
    }, 38);
  }

  setInterval(scramble, 5500);
})();
