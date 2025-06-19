var myItem = document.querySelectorAll(".item");
var boxModel = document.querySelector(".box-modal");
var box =document.querySelector(".box");

for (var i = 0; i < myItem.length; i++) {
    myItem[i].addEventListener('click', function(e){
        boxModel.classList.remove("d-none");
        var imgsrc = e.currentTarget.querySelector('img').getAttribute('src');
        box.style.setProperty('background-image' , `url(${imgsrc})`)
    })
}

