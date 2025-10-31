let addBinary = function(a, b) {
    // 0x hexadecimal , 0o octal
    let numeroUno = BigInt("0b" + a);
    let numeroDos = BigInt("0b" + b);

    let suma = numeroUno + numeroDos;

    let binario = suma.toString(2);

    return binario;

};