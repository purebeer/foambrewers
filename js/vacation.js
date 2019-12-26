// if (new Date().getHours() < 18) {
//   document.getElementById("demo").innerHTML = "Good day!";
// }

document.addEventListener('load', myFunction());

function myFunction() {
  var vDisplayR27;
  var vDisplayR28;
  var vDisplayR31;
  var vDisplayR03;
  var vDisplayR04;
  var vDisplayR10;
  var vDisplayR11;
  var vDisplayNYE;

  var month = new Date().getMonth();
  var date = new Date().getDate();
  var time = new Date().getHours();

  if (month == 11 && date < 27) {
    vDisplayR27 = "block";
    vDisplayR28 = "block";
    vDisplayR31 = "block";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "none";
    vDisplayR11 = "none";

    vDisplayNYE = "block";
  } else if (month == 11 && date == 27 && time < 19) {
    vDisplayR27 = "block";
    vDisplayR28 = "block";
    vDisplayR31 = "block";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "none";
    vDisplayR11 = "none";

    vDisplayNYE = "block";
  } else if (month == 11 && date == 27 && time >= 19) {
    vDisplayR27 = "none";
    vDisplayR28 = "block";
    vDisplayR31 = "block";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "none";
    vDisplayR11 = "none";

    vDisplayNYE = "block";
  } else if (month == 11 && date == 28) {
    vDisplayR27 = "none";
    vDisplayR28 = "block";
    vDisplayR31 = "block";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "none";
    vDisplayR11 = "none";

    vDisplayNYE = "block";
  } else if (month == 11 && date >= 29) {
    vDisplayR27 = "none";
    vDisplayR28 = "none";
    vDisplayR31 = "block";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "none";
    vDisplayR11 = "none";

    vDisplayNYE = "block";
  } else if (month == 0 && date < 4) {
    vDisplayR27 = "none";
    vDisplayR28 = "none";
    vDisplayR31 = "none";
    vDisplayR03 = "block";
    vDisplayR04 = "block";
    vDisplayR10 = "block";
    vDisplayR11 = "block";

    vDisplayNYE = "none";
  } else if (month == 0 && date < 5) {
    vDisplayR27 = "none";
    vDisplayR28 = "none";
    vDisplayR31 = "none";
    vDisplayR03 = "none";
    vDisplayR04 = "block";
    vDisplayR10 = "block";
    vDisplayR11 = "block";
    vDisplayNYE = "none";
  } else if (month == 0 && date >= 5) {
    vDisplayR27 = "none";
    vDisplayR28 = "none";
    vDisplayR31 = "none";
    vDisplayR03 = "none";
    vDisplayR04 = "none";
    vDisplayR10 = "block";
    vDisplayR11 = "block";
    vDisplayNYE = "none";
  } else {
    vDisplayR27 = "inline";
    vDisplayR28 = "inline";
    vDisplayR31 = "inline";
    vDisplayR03 = "inline";
    vDisplayR04 = "inline";
    vDisplayR10 = "inline";
    vDisplayR11 = "inline";
    vDisplayNYE = "inline";
  }
  document.getElementById("release-27").style.display= vDisplayR27;
  document.getElementById("release-28").style.display= vDisplayR28;
  document.getElementById("release-31").style.display= vDisplayR31;
  document.getElementById("release-03").style.display= vDisplayR03;
  document.getElementById("release-04").style.display= vDisplayR04;
  document.getElementById("release-10").style.display= vDisplayR10;
  document.getElementById("release-11").style.display= vDisplayR11;

  document.getElementById("halloween").style.display= vDisplayNYE;
  document.getElementById("halloween-section").style.display= vDisplayNYE;
  document.getElementById("halloween-button").style.display= vDisplayNYE;
  document.getElementById("halloween-separator").style.display= vDisplayNYE;
}

//EXAMPLE SAVE
// document.addEventListener('load', myFunction());
//
// function myFunction() {
//   var vDisplay;
//   var time = new Date().getHours();
//   if (time < 10) {
//     vDisplay = "block";
//   } else if (time < 11) {
//     vDisplay = "none";
//   } else {
//     vDisplay = "inline";
//   }
//   document.getElementById("release-27").style.display= vDisplay;
// }






// document.addEventListener('load', imageAutoSwipe());
//
// function imageAutoSwipe() {
//   var numberPhotos = 20;
//
//   var carouselIndicators = "";
//
//   var carouselInner = "";
//
//   for ( i = 3; i < 18; i++ ) {
//     carouselIndicators += "<li data-target='#myCarousel' data-slide-to='" + i + "'></li>";
//
//     carouselInner += "<div class='item'><img src='gallery/" + [i] + "-compressor.jpg' alt='site-image' width='100%'></div>"
//   }
//
//   // document.getElementById('fb-js-carousel-indicators').innerHTML += carouselIndicators;
//
//   document.getElementById('fb-js-carousel-inner').innerHTML += carouselInner;
// }
// If Date is before or equal to 27, then do nothing
// If date is after 27, then document.getElementById('demo').style.display='none'
