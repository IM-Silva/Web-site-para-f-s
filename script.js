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
