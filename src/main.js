import "./style.css";

// autoplay video ved load
// Vent, indtil dokumentet er indlæst
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("video");
  video.play(); // Start videoafspilning
});

// Hent referencer til billederne
const imageLeft = document.querySelector(".justify-self-start");
const imageRight = document.querySelector(".justify-self-end");

// Lyt efter scrollbegivenheder
window.addEventListener("scroll", () => {
  // Beregn scrolle-retningen
  const scrollPosition = window.scrollY;

  // Udfør animationen uanset scrolle-retningen
  imageLeft.style.transform = "translateY(-10%)";
  imageRight.style.transform = "translateY(-10%)";

  // Brug setTimeout til at returnere billederne til startpositionen efter animationen
  setTimeout(() => {
    imageLeft.style.transform = "translateY(0)";
    imageRight.style.transform = "translateY(0)";
  }, 400); // Ændr varigheden efter behov
});
