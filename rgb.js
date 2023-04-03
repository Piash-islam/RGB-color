const body = document.body;
const btn = document.querySelector('button');
const h2 = document.querySelector('h2');


body.style.backgroundColor = "rgb(152,120,220)";

btn.addEventListener('click', function(){
    const newColor = makeRandColor();
  
    body.style.backgroundColor = newColor;
    h2.innerText = newColor;
})


function makeRandColor(){
    const r = Math.floor(Math.random()*255)+1;
    const g = Math.floor(Math.random()*255)+1;
    const b = Math.floor(Math.random()*255)+1;

    return `rgb(${r}, ${g}, ${b})`;
}