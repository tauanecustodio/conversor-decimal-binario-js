function converter (num) {
    var decimal = parseInt(num);
    var binario;

    if (isNaN(num) || !num) {
        alert("Digite um número válido.");
    } else {
        binario = decimal.toString(2);
    document.getElementById('resultado').innerText = binario;
    }
}