var texts = ["pero si me mandas un nude me arrastro📸", "pero me excito si veo el sol sobre tus piernas☀️", "pero pienso en la salida si pienso en tus labios😺", "pero me lleno de esperanza si te siento llegando👽", "pero mis ramas se llenan si te siento a mi lado🔑", "pero mi amor se renueva si te veo cruzando👢", "pero mi sexo te llama si me mandas el mensaje🍑", "pero mis muslos te adoran si tu ubicación se va acercando🦵", "pero mi impaciencia se duplica si la aventura salpica💃", "pero el cuello me llama si tu clavícula suena🦧", "dame la señal que el sol de tu cintura me está llamando💃"];
var timer;

function changeText() {
  var randomIndex = Math.floor(Math.random() * texts.length);
  document.getElementById("sentence").textContent = texts[randomIndex];

  clearTimeout(timer);
  timer = setTimeout(resetText, 2000);
}

function resetText() {
  document.getElementById("sentence").textContent = "Odio el trabajo";
}

document.getElementById("sentence").addEventListener("mouseover", changeText);

// Array de colores para el fondo
var colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#00ffff", "#ff00ff"];

// Función para cambiar el color del fondo cada 2 segundos
function changeColor() {
  var randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}

// Ejecutar la función cada 2 segundos
setInterval(changeColor, 2000);