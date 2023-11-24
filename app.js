const adviceId = document.getElementsByClassName('id')[0]; /*<p> que motrara el numero del consejo */ 
const advice = document.getElementsByClassName('advice')[0]; /*H1 que mostrara el consejo*/
var btn = document.getElementById("ClickMe");  /*Obtiene el valor del boton */ 
btn.addEventListener("click",getData) /*Si se dio click ejecuta la función getData*/

function getData(){
    fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data)=>{
        adviceId.innerHTML = data.slip.id; /*Obtiene el ID al elemento P*/
        advice.innerHTML = "'"+data.slip.advice+"'"; /*Obtiene el consejo y se lo agrega al elemento H1*/
    });
}

window.onload = getData;
