//EXERCICIO 2 

function implementacao2() {
    location = "./implem2.html";
}

function numerosPrimos() {

    var n = Number(document.getElementById("numero").value);
    var result = document.querySelector("#resultado");

    if (n == 1 || n == 2 || n == 3 || n == 5 || n == 7) {

        if (n == 1) {
            result.innerHTML = `O número não é primo!`;
        } else {
            result.innerHTML = `O número é primo!`;
        }

    } else if (n % 2 == 0 || n % 3 == 0 || n % 5 == 0 || n % 7 == 0) {
        result.innerHTML = `O número não é primo!`;

    } else {
        result.innerHTML = `O número é primo!`;
    }
}

