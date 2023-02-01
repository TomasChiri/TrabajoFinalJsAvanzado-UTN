const video = document.getElementById("video");
const btnPlay = document.getElementById("play");
const btnPausa = document.getElementById("pausa");
const duracionVideo = document.getElementById("duracion")

btnPlay.addEventListener("click", () => {
    video.play();
})

btnPausa.addEventListener("click", ()=>{
    video.pause();
})

//Lo dejo comentado porque me sale NaN y no se como hacer que se vea
// duracionVideo.innerText = video.duration;
