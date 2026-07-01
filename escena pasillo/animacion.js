const can = document.querySelector('#cande');

document.getElementById("hoja3").addEventListener("click", function () {
    can.classList.remove("candelabro1Animacion");
    setTimeout(() => { can.classList.add("candelabro1Animacion"); }, 10);
});

document.getElementById("hoja4").addEventListener("click", function () {
    const puerta = document.getElementById("puerta");
    puerta.classList.add("puertaDesaparecer");
});

document.getElementById("hoja2").addEventListener("click", function () {
    document.getElementById("cuadro").classList.add("cuadroDesaparecer");
    document.getElementById("cuadros").classList.add("cuadroDesaparecer");
});