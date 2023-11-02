function suma() {
    const num1 = Number(document.getElementById('numero1').value);
    const num2 = Number(document.getElementById('numero2').value);
    const num3 = Number(document.getElementById('numero3').value);
    const resul = document.getElementById('numero4');

    let total = num1 + num2 + num3;

 if  (total > 10) {
    resul.innerHTML = "Llevas demasiados stickers";
 } 
 else {
    resul.innerHTML = "Llevas " +  total + " stickers";
 }

}
console.log(numero4)