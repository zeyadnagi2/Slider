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
  slideNext();
});

closeBtn.previousElementSibling.addEventListener("click", function () {
  slidePrevious();
});

function slideNext() {
  temp++;
  if (temp < myItem.length) {
    var imgsrc = myItem[temp].querySelector("img").getAttribute("src");
    box.style.setProperty("background-image", `url(${imgsrc})`);
  } else {
    temp = 0;
    var imgsrc = myItem[temp].querySelector("img").getAttribute("src");
    box.style.setProperty("background-image", `url(${imgsrc})`);
  }
}

function slidePrevious() {
  temp--;
  if (temp < 0) {
    temp = myItem.length - 1;
    var imgsrc = myItem[temp].querySelector("img").getAttribute("src");
    box.style.setProperty("background-image", `url(${imgsrc})`);
  } else {
    var imgsrc = myItem[temp].querySelector("img").getAttribute("src");
    box.style.setProperty("background-image", `url(${imgsrc})`);
  }
}
