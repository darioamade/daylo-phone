const getStarted = document.querySelector(".nav__login-button");
const blackBox = document.querySelector(".black-box");
const arrowToggle = document.getElementById("arrow-toggle");

arrowToggle.addEventListener("click", function () {
   getStarted.style.backgroundColor = "#97a0ff";
   blackBox.classList.toggle('hidden')
  console.log("kabuvLNAS");
});

arrowToggle.addEventListener("mouseleave", function () {
  getStarted.style.backgroundColor = "#ffcec7";
});
