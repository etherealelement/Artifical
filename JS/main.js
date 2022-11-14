const btn = document.querySelector(".header__link"),
  overlay = document.querySelector(".overlay");
// btn.onclick = function viewFuck() {
//   alert("Fuck you...");
// };
// fuck();
// let i = 0;
const deleteElement = function name(e) {
  console.log(e.target);
  console.log(e.type);
  //   i++;
  //   if (i == 1) {
  //     btn.removeEventListener("mouseenter", deleteElement);
  //   }
};

btn.addEventListener("mouseenter", deleteElement);
overlay.addEventListener("mouseenter", deleteElement);
