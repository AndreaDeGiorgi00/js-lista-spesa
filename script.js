
const lista = ["pane" , "pasta" , "uova"];
const target = document.getElementById("target");
let contatore = 0;
let testoFinale = "<ul>" ;

while (contatore < lista.length){

    testoFinale += `<li> ${lista[contatore]} </li>`
    contatore++

}

testoFinale += "</ul>";
target.innerHTML = testoFinale;