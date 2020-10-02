let x = 0;
const back = document.getElementById("back");
const forward = document.getElementById("forward");
const carousel = document.getElementById("carousel");
const CIRCLES = document.querySelector(".circles");
const PICTURES = document.querySelector(".pictures");
const circle = CIRCLES.children;
const picture = PICTURES.children;

//Line up pictures next to each other
const list = Array.from(PICTURES.children);
const pictureWidth = list[0].getBoundingClientRect().width;
const picturePosition = (list, index) => {
  list.style.left = pictureWidth * index + "px";
};
list.forEach(picturePosition);

// EVENT LISTENERS //

carousel.addEventListener("click", rotate);
CIRCLES.addEventListener("click", updateImgAndCircle);

carousel.addEventListener("mouseout", function () {
  back.style.opacity = "0";
  forward.style.opacity = "0";
  CIRCLES.style.opacity = "0";
});
carousel.addEventListener("mouseover", function () {
  back.style.opacity = "1";
  forward.style.opacity = "1";
  CIRCLES.style.opacity = "1";
});

//Prevent images from overlapping each other when resizing window
window.addEventListener("resize", function () {
  const list = Array.from(PICTURES.children);
  const pictureWidth = list[x].getBoundingClientRect().width;
  const picturePosition = (list, index) => {
    list.style.left = pictureWidth * index + "px";
  };
  list.forEach(picturePosition);
  PICTURES.style.transform = `translateX(-${list[x].style.left})`;
  PICTURES.style.transition = "none";
});

// FUNCTIONS AND EVENT HANDLERS //
function rotate(e) {
  if (e.target === forward) {
    resetCircle();
    x += 1;
    if (x >= list.length) {
      x = 0;
      updateImg();
    }
    updateImg();
  } else if (e.target === back) {
    resetCircle();
    x -= 1;
    if (x < 0) {
      x = list.length - 1;
      updateImg();
    }
    updateImg();
  }
}

function updateImgAndCircle(e) {
  for (let i = 0; i < list.length; i++) {
    if (e.target === CIRCLES.children[i]) {
      resetCircle();
      x = i;
      updateImg();
    }
  }
}

function resetCircle() {
  for (let i = 0; i < list.length; i++) {
    circle[i].style.background = "gray";
  }
}

function updateImg() {
  PICTURES.style.transition = "transform 800ms ease";
  PICTURES.style.transform = `translateX(-${list[x].style.left})`;
  circle[x].style.background = "white";

  //Transition options:
  //PICTURES.style.transition = "1s cubic-bezier(1,-0.52,0,1.57)";
  //PICTURES.style.transition = "1s cubic-bezier(0,-0.11,0,-0.37)";
}
