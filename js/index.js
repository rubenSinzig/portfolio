let clicked = false;
document.querySelector(".hamburger").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".burger-top").style.cssText =
      "position: absolute; transform: rotate(-0.15turn); transition: 0.6s; width: 1.4rem;";
    document.querySelector(".burger-bottom").style.cssText =
      "position: relative; transform: rotate(0.15turn); transition: 0.6s; width: 1.4rem;";
    document.querySelector(".nav").style.cssText =
      "display: block; position: absolute; top: 7vh;";
  } else {
    document.querySelector(".burger-top").style.cssText = "position: static;";
    document.querySelector(".burger-bottom").style.cssText =
      "position: static;";
    document.querySelector(".nav").style.cssText = "display: none;";
  }
});
