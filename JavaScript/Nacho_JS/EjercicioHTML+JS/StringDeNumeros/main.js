
const form = document.getElementById('form');
const input = document.getElementById('input');
const output = document.getElementById('output');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const texto = input.value.trim();

    const partes = texto.split(',');

    const array = [];
    for (let i = 0; i < texto.length; i++) {
        array.push(texto[i]);
    }

    output.innerHTML = `Array: ${JSON.stringify(array)}`;
});
