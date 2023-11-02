function verificar() {
    const num1 = document.getElementById('pass1').value;
    const num2 = document.getElementById('pass2').value;
    const num3 = document.getElementById('pass3').value;

    let password = num1 + num2 + num3;

    if (password == 911) {
       document.getElementById('ingresar').innerHTML = "password 1 correcto";
    }  else if  (password == 714) {
       document.getElementById('ingresar').innerHTML = "password 2 correcto";
    } else {
     document.getElementById('ingresar').innerHTML = "password incorrecta";
    }

}
