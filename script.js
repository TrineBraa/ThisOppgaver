// function changeColor(ElementID){
//     document.getElementById(ElementID).style.backgroundColor="green";
    
// }

//Dette er den originale måten å gjøre det på. Det over er en forenklet metode med tanke på DRY= Do not repeat yourself

// function changeColorRed(){
//     document.getElementById("redBox").style.backgroundColor="green";
// }
// function changeColorBlue(){
//     document.getElementById("blueBox").style.backgroundColor="green";
// }


//Denne funksjonen tar imot hele diven som et parameter.
//this kan også bruker til å hente andre elementer
function changeColor(element){
    element.style.backgroundColor="green";
    element.innerHTML= 'hallo';
    
}