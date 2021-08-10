var prev = document.getElementById(".prev");
function Prev(){
var small = document.querySelector("small");
small.innerHTML= "Loading Previous Message";
var notimg = document.querySelector(".notification-img img");
notimg.src ="../img/img-d.jpg";
} 
var next = document.getElementById(".next");
function Next() {
var small = document.querySelector("small");
small.innerHTML = "Loading Next Message";
var notimg = document.querySelector(".notification-img img");
notimg.src="../img/img-c.jpg";
}
