var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var modal=document.querySelector (".modal");
var overlay=document.querySelector (".modal-overlay");
var orderBtn=document.querySelector (".product-of-week__btn");
var modalBtn=document.querySelector (".modal__btn");
var myMap = document.querySelector(".contacts__map");

myMap.classList.remove("contacts__map--nojs");
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

orderBtn.addEventListener("click", function (event) {
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

function initMap() {
  var myLatLng = {lat: 59.9387, lng: 30.3231};

  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17,
    center: myLatLng
  });

  var image = "img/icon-map-pin.svg";
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "Вязание на заказ",
    icon: image
  });
}
