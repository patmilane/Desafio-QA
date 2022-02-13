//EXERCICIO 1

function implementacao1() {
    location = "./implem1.html";
}

function parOuImpar() {

    var numero = Number(document.getElementById("numero").value);
    var result = document.querySelector("#resultado");

    if (numero % 2 == 0) {
        result.innerHTML = `O número digitado é par!`

    } else {
        result.innerHTML = `O número digitado é impar!`
    }
}