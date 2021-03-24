let clicked = false;
document.querySelector(".hamburger").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".burger-top").style.cssText =
      "top: 1.8rem; transform: rotate(-0.125turn); transition: 0.6s; width: 1.25rem";
    document.querySelector(".burger-bottom").style.cssText =
      "top: 1.8rem; transform: rotate(0.125turn); transition: 0.6s; width: 1.25rem";
    document.querySelector(".nav").style.cssText = "display: block; top: 7vh;";
  } else {
    document.querySelector(".burger-top").style.cssText =
      "position: absolute; transition: 0.6s;";
    document.querySelector(".burger-bottom").style.cssText =
      "position: absolute; transition: 0.6s;";
    document.querySelector(".nav").style.cssText = "display: none;";
  }
});
