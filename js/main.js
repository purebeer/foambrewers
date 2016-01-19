var width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

// var ptop = document.getElementById("pouring-soon").style.top = ((width * 1.25)/16) + 100;

document.documentElement.width = width;

console.log(document.documentElement.width);
// if ( width < 900 ) {
//   document.getElementsbyClassName("logo").style.width = width;
// }
