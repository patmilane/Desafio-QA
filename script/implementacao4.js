function implementacao4() {
    location = ("../html/implem4.html");
}

function multiplos4pin() {

    let result = document.getElementById("resultado").innerHTML;

    for (let i = 1; i <= 1000; i++) {

        if (i % 4 == 0) {
            result += `${i}<span>pin</span>,`;

        } else {
            result += `${i}, `;
        }
    }

    document.getElementById("resultado").innerHTML = `\u{1F449}${result}\u{1F448}`;
}