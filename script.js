let counter, container, prevBtn, nextBtn;

counter = 3;
container = document.querySelector(".container");
prevBtn = document.querySelector(".prevBtn");
nextBtn = document.querySelector(".nextBtn");
btn = document.querySelector(".btn");

prevBtn.addEventListener("click", prev);
nextBtn.addEventListener("click", next);

function prev() {
  if (counter <= 1) {
    prevBtn.style.display = "none";
  } else {
    counter--;
    container.style.backgroundImage = `url("./img/slider-${counter}.jpg")`;
    nextBtn.style.display = "block";
    animation();
  }
}

function next() {
  if (counter >= 6) {
    nextBtn.style.display = "none";
  } else {
    counter++;
    container.style.backgroundImage = `url("./img/slider-${counter}.jpg")`;
    prevBtn.style.display = "block";
    animation();
  }
}

var animation = function animation() {
  container.animate([{ opacity: 0 }, { opacity: 1.0 }], {
    duration: 900,
    fill: "forwards"
  });
};
