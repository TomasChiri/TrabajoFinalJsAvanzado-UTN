const video = document.getElementById("video");
const btnPlay = document.getElementById("play");
const btnPausa = document.getElementById("pausa");

btnPlay.addEventListener("click", () => {
    video.play();
})

btnPausa.addEventListener("click", ()=>{
    video.pause();
})