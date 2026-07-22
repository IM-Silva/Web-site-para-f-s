const icon = document.getElementById("icon");
const icon1 = document.getElementById("a");
const icon2 = document.getElementById("b");
const icon3 = document.getElementById("c");
const nav = document.getElementById('nav');
const blue = document.getElementById("blue");

icon.addEventListener('click', function() {
  icon1.classList.toggle('a');
  icon2.classList.toggle('c');
  icon3.classList.toggle('b');
  nav.classList.toggle('show');
  blue.classList.toggle('slide');
});

const video = document.querySelector("#video");
const button = document.querySelector("#btn-play");

button.addEventListener("click", () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
const imagens = [
    "midia/02.jpg",
    "midia/03.png",
    "midia/04.webp",
    "midia/05.jpg",
    "midia/06.webp",
    "midia/07.jpg",
    "midia/08.webp",
    "midia/09.webp"
];
let indice = 0;
const img = document.getElementById("imagem-carrossel");
setInterval(trocarImagem, 3000);
function trocarImagem() {
    indice++;
    if (indice >= imagens.length){
        indice = 0;
    }
    img.src = imagens[indice];
}