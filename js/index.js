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
    document.querySelector(".x-top").style.cssText =
      "position: relative; top: 0.45rem; transform: rotate(-0.125turn); transition: 1s;";
    document.querySelector(".x-bottom").style.cssText =
      "position: relative; transform: rotate(0.125turn); transition: 1s;";
    document.querySelector(".top-left").style.cssText =
      "position: relative; top: 12rem; left: 5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".x-top").style.cssText = "position: static;";
    document.querySelector(".x-bottom").style.cssText = "position: static;";
    document.querySelector(".top-left").style.cssText = "position: static;";
  }
});

document.querySelector(".right-top").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".xx-top").style.cssText =
      "position: relative; top: 0.45rem; transform: rotate(-0.125turn); transition: 1s;";
    document.querySelector(".xx-bottom").style.cssText =
      "position: relative; transform: rotate(0.125turn); transition: 1s;";
    document.querySelector(".top-right").style.cssText =
      "position: relative; top: 12rem; left: -5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".xx-top").style.cssText = "position: static;";
    document.querySelector(".xx-bottom").style.cssText = "position: static;";
    document.querySelector(".top-right").style.cssText = "position: static;";
  }
});

document.querySelector(".left-bottom").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".xxx-top").style.cssText =
      "position: relative; top: 0.45rem; transform: rotate(-0.125turn); transition: 1s;";
    document.querySelector(".xxx-bottom").style.cssText =
      "position: relative; transform: rotate(0.125turn); transition: 1s;";
    document.querySelector(".bottom-left").style.cssText =
      "position: relative; top: -11rem; left: 5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".xxx-top").style.cssText = "position: static;";
    document.querySelector(".xxx-bottom").style.cssText = "position: static;";
    document.querySelector(".bottom-left").style.cssText = "position: static;";
  }
});

document.querySelector(".right-bottom").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    document.querySelector(".xxxx-top").style.cssText =
      "position: relative; top: 0.45rem; transform: rotate(-0.125turn); transition: 1s;";
    document.querySelector(".xxxx-bottom").style.cssText =
      "position: relative; transform: rotate(0.125turn); transition: 1s;";
    document.querySelector(".bottom-right").style.cssText =
      "position: relative; top: -11rem; left: -5.8rem; transform: scale(1.8); box-shadow: 0 0 0.5rem wheat;";
  } else {
    document.querySelector(".xxxx-top").style.cssText = "position: static;";
    document.querySelector(".xxxx-bottom").style.cssText = "position: static;";
    document.querySelector(".bottom-right").style.cssText = "position: static;";
  }
});
