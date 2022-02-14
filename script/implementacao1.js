function implementacao1() {
    location = ("./html/implem1.html");
}

function parOuImpar() {

    var numero = Number(document.getElementById("numero").value);
    var result = document.querySelector("#resultado");

    if(numero >= 1 && numero <= 1000){
        if (numero % 2 == 0) {
        result.innerHTML = `O número digitado é par!`;

        } else {
        result.innerHTML = `O número digitado é impar!`;
        }
    } else {
        result.innerHTML = `<center>Digite um numero entre 1 e 1000<center>`;
    }
}

