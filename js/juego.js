let cajas = document.querySelectorAll(".juego_caja");
let imagenes = document.querySelectorAll(".juego_imagen");
let btnReinicio = document.getElementById("btnReinicio");

//imagenes
for(let i = 0; i < imagenes.length; i++){
    let imagen = imagenes[i];

    imagen.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("Text", e.target.getAttribute("id"));
    })

    imagen.addEventListener("dragend", () => {
        imagen.style.display = "none";
    })
}

//cajas
for(let i = 0; i < cajas.length; i++){
    let caja = cajas[i];

    caja.addEventListener("dragover", (e) => {
        e.preventDefault();
    })

    caja.addEventListener("drop", (e)=> {
        let data = e.dataTransfer.getData("Text");
        let imagen = document.getElementById(data)
        caja.innerHTML=`<img class="juego_imagen" src="${imagen.src}">`
    })
}

//boton de reinicio
btnReinicio.addEventListener("click", () => {
    window.location.reload();
})