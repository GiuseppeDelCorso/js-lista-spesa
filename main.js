const listaDellaSpesa = [
    "acqua",
    "pane",
    "olio",
    "pomodori",
    "uova"
];

const contenitore = document.getElementById("listaSpesa");



let i = 0;


while(i < listaDellaSpesa.length) {
    
    const element = listaDellaSpesa[i];
    const elementHTML = document.createElement("li");
    elementHTML.innerHTML = element;
    contenitore.append(elementHTML);
    i++;
}
document.getElementById("addBtn").addEventListener("click", function() {
    const nuovoElemento = document.getElementById("newElement").value;
    listaDellaSpesa.push(nuovoElemento);
    contenitore.innerHTML += `<li>${nuovoElemento}</li>`;
    document.getElementById("newElement").value = "";

});