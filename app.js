let x = 0;
const arr = ["a", "b", "c", "d", "e"];
const back = document.getElementById("back");
const forward = document.getElementById("forward");
const carousel = document.getElementById("carousel");
const circles = document.querySelector(".circles");
const pictures = document.querySelector(".pictures");

carousel.addEventListener("click", rotate);
carousel.addEventListener("mouseout", function () {
  back.style.opacity = "0";
  forward.style.opacity = "0";
  circles.style.opacity = "0";
});

carousel.addEventListener("mouseover", function () {
  back.style.opacity = "1";
  forward.style.opacity = "1";
  circles.style.opacity = "1";
});

circles.addEventListener("click", updateCircle);

//functions
function rotate(e) {
  if (e.target === forward) {
    resetCircle();
    resetImg();
    x += 1;
    if (x >= arr.length) {
      x = 0;
      updateImg();
    }
    updateImg();
  } else if (e.target === back) {
    resetCircle();
    resetImg();
    x -= 1;
    if (x < 0) {
      x = arr.length - 1;
      updateImg();
    }
    updateImg();
  }
}

function updateCircle(e) {
  if (
    e.target.id === arr[0] ||
    e.target.id === arr[1] ||
    e.target.id === arr[2] ||
    e.target.id === arr[3] ||
    e.target.id === arr[4]
  ) {
    resetCircle();
    resetImg();
    x = arr.indexOf(e.target.id);
    document.getElementById(`picture-${arr[x]}`).style.transform = "scale(1)";
    document.getElementById(`picture-${arr[x]}`).style.opacity = "1";
    e.target.style.background = "white";
  }
}

function resetCircle() {
  let list = circles.children;
  for (let i = 0; i < list.length; i++) {
    list[i].style.background = "gray";
  }
}

function resetImg() {
  let list = pictures.children;
  for (let i = 0; i < list.length; i++) {
    list[i].style.opacity = "0";
    list[i].style.transform = "scale(1.1)";
  }
}

function updateImg() {
  document.getElementById(`picture-${arr[x]}`).style.transform = "scale(1)";
  document.getElementById(`picture-${arr[x]}`).style.opacity = "1";
  document.getElementById(`${arr[x]}`).style.background = "white";
}
