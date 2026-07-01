const can = document.querySelector('.candelabro');
const cande = document.querySelector('.candelabro2');
const candel = document.querySelector('.candelabro3');
const piano = document.querySelector('.piano');


document.getElementById("hojaCandelabros").addEventListener("click", function () {
  
    can.classList.remove("candelabro1Animacion");
    setTimeout(() => { can.classList.add("candelabro1Animacion"); }, 10);

  
    cande.classList.remove("candelabro2Animacion");
    setTimeout(() => { cande.classList.add("candelabro2Animacion"); }, 10);


    candel.classList.remove("candelabro3Animacion");
    setTimeout(() => { candel.classList.add("candelabro3Animacion"); }, 10);
});

document.getElementById("hojaPiano").addEventListener("click", function () {
    piano.classList.remove("piano1Animacion");
    setTimeout(() => { piano.classList.add("piano1Animacion"); }, 10);
});