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

document.querySelector(".left-top").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".top-left").style.cssText =
      "position: relative; top: 12rem; left: 5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".top-left").style.cssText = "position: static;";
  }
});

document.querySelector(".right-top").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".top-right").style.cssText =
      "position: relative; top: 12rem; left: -5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".top-right").style.cssText = "position: static;";
  }
});

document.querySelector(".left-bottom").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".bottom-left").style.cssText =
      "position: relative; top: -11rem; left: 5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".bottom-left").style.cssText = "position: static;";
  }
});

document.querySelector(".right-bottom").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".bottom-right").style.cssText =
      "position: relative; top: -11rem; left: -5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".bottom-right").style.cssText = "position: static;";
  }
});
