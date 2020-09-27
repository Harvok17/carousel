let x = 0;
const arr = ["a", "b", "c", "d", "e"];
const back = document.getElementById("back");
const forward = document.getElementById("forward");
const carousel = document.getElementById("carousel");
const circles = document.querySelector(".circles");

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

circles.addEventListener("click", whiten);

function rotate(choice) {
  if (choice.target === forward) {
    reset();
    x += 1;
    if (x >= arr.length) {
      x = 0;
      carousel.style.backgroundImage = `url(/image/${arr[x]}.jpg)`;
      document.getElementById(`${arr[x]}`).style.background = "white";
    }
    carousel.style.backgroundImage = `url(/image/${arr[x]}.jpg)`;
    document.getElementById(`${arr[x]}`).style.background = "white";
  } else if (choice.target === back) {
    reset();
    x -= 1;
    if (x < 0) {
      x = arr.length - 1;
      carousel.style.backgroundImage = `url(/image/${arr[x]}.jpg)`;
      document.getElementById(`${arr[x]}`).style.background = "white";
    }
    carousel.style.backgroundImage = `url(/image/${arr[x]}.jpg)`;
    document.getElementById(`${arr[x]}`).style.background = "white";
  }
}

function whiten(e) {
  if (
    e.target.id === arr[0] ||
    e.target.id === arr[1] ||
    e.target.id === arr[2] ||
    e.target.id === arr[3] ||
    e.target.id === arr[4]
  ) {
    reset();
    x = arr.indexOf(e.target.id);
    carousel.style.backgroundImage = `url(/image/${arr[x]}.jpg)`;

    e.target.style.background = "white";
  }
}

function reset() {
  let list = circles.children;
  for (let i = 0; i < list.length; i++) {
    list[i].style.background = "gray";
  }
}
