



const AREA = document.body;
const CIRCLE = document.querySelector('.circle');

var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
  var horizontalPosition = windowWidth - e.clientX - 26;
  var VerticlePosition = windowHeight - e.clientY - 26;


  CIRCLE.style.left = horizontalPosition + 'px';
  CIRCLE.style.top = VerticlePosition + 'px';
}

function changeColorOnTouch() {
  CIRCLE.style.backgroundImage = "url('../images/OJ2_Logo_Light.jpg')";
  CIRCLE.style.backgroundSize = "contain";
  CIRCLE.style.overflow = "hidden";
  CIRCLE.style.border = "none"
  CIRCLE.style.width = "52";
  CIRCLE.style.height = "52";

}


// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the circle, run the changeColorOnTouch function.
CIRCLE.addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the circle, remove inline styles with an anonymous function.
CIRCLE.addEventListener('mouseleave', function(){CIRCLE.removeAttribute("style");}, false);
