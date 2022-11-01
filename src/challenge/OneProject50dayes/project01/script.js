const panels = document.querySelectorAll(".panel");
//const panels = document.getElementsByClassName("panel");

console.log("panel");

panels.forEach((panel) => {
  console.log("panel");
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
