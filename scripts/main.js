function runSimulation() {
    var output = document.getElementById('output');
    output.innerHTML = '';

    output.innerHTML += '<strong>Bucle for:</strong><br>';
    for (var i = 1; i <= 5; i++) {
        output.innerHTML += 'Iteración ' + i + '<br>';
    }

    output.innerHTML += '<br><strong>Bucle while:</strong><br>';
    var j = 1;
    while (j <= 3) {
        output.innerHTML += 'Iteración ' + j + '<br>';
        j++;
    }

    var condition = true;
    output.innerHTML += '<br><strong>Condicional if-else:</strong><br>';
    if (condition) {
        output.innerHTML += 'La condición es verdadera.<br>';
    } else {
        output.innerHTML += 'La condición es falsa.<br>';
    }

    output.innerHTML += '<br><strong>Llamada a función:</strong><br>';
    output.innerHTML += 'Resultado de la función: ' + add(10, 5) + '<br>';
}
function add(a, b) {
    return a + b;
}