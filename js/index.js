var myItem = document.querySelectorAll(".item");
var boxModel = document.querySelector(".box-modal");
var box = document.querySelector(".box");
var closeBtn = document.querySelector("#closeBtn");

var temp;

for (let i = 0; i < myItem.length; i++) {
  myItem[i].addEventListener("click", function (e) {
    temp = i;
    boxModel.classList.remove("d-none");
    var imgsrc = e.currentTarget.querySelector("img").getAttribute("src");
    box.style.setProperty("background-image", `url(${imgsrc})`);
  });
}

closeBtn.nextElementSibling.addEventListener("click", function () {
  slide(1);
});

closeBtn.previousElementSibling.addEventListener("click", function () {
  slide(-1);
});

boxModel.addEventListener("click", function (e) {
  if (e.target == e.currentTarget || e.target == closeBtn) {
    closeModel();
  }
});

document.addEventListener("keydown", function (e) {
  console.log(e.key);

  if (e.key == "ArrowRight") {
    slide(1);
  } else if (e.key == "ArrowLeft") {
    slide(-1);
  } else if (e.key == "Escape") {
    closeModel();
  }
});

function slide(step) {
  temp = temp + step;
  if (temp >= myItem.length) {
    temp = 0;
  } else if (temp < 0) {
    temp = myItem.length - 1;
  }
  var imgsrc = myItem[temp].querySelector("img").getAttribute("src");
  box.style.setProperty("background-image", `url(${imgsrc})`);
}

function closeModel() {
  boxModel.classList.add("d-none");
}
