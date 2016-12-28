var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modal=document.querySelector (".modal");
var overlay=document.querySelector (".modal-overlay");
var processBtn=document.querySelector (".process__order");
var modalBtn=document.querySelector (".modal__btn");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

processBtn.addEventListener("click", function (event) {
  event.preventDefault ();
  modal.classList.add ("modal--show");
  overlay.classList.add ("modal-overlay--show");
});

modalBtn.addEventListener("click", function (event) {
  event.preventDefault ();
  modal.classList.remove ("modal--show");
  overlay.classList.remove ("modal-overlay--show");
});

overlay.addEventListener("click", function (event) {
  event.preventDefault ();
  modal.classList.remove ("modal--show");
  overlay.classList.remove ("modal-overlay--show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (modal.classList.contains ("modal--show")) {
      modal.classList.remove ("modal--show");
      overlay.classList.remove ("modal-overlay--show");
    }
  }
})
