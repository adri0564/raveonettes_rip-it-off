import "./style.css";

// document.addEventListener("DOMContentLoaded", function () {
//   var section = document.getElementById("moe");
//   var overlayText = document.getElementById("text_overlay");

//   section.addEventListener("click", function () {
//     toggleOverlayOpacity(overlayText);
//   });
// });

// function toggleOverlayOpacity(element) {
//   if (element.style.opacity === "0" || element.style.opacity === "") {
//     element.style.opacity = "1";
//   } else {
//     element.style.opacity = "0";
//   }
// }

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
