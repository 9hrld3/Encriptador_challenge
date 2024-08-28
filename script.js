// Función para encriptar el texto
function encriptar(texto) {
    const llaves = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    return texto.replace(/[eioua]/g, letra => llaves[letra]);
}

// Función para desencriptar el texto
function desencriptar(texto) {
    const llaves = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };
    return texto.replace(/enter|imes|ai|ober|ufat/g, palabra => llaves[palabra]);
}

// Referencias a elementos del DOM
const inputText = document.getElementById('input-text');
const outputText = document.getElementById('output-text');
const encryptButton = document.getElementById('encrypt-button');
const decryptButton = document.getElementById('decrypt-button');
const copyButton = document.getElementById('copy-button');

// Eventos para los botones
encryptButton.addEventListener('click', () => {
    outputText.value = encriptar(inputText.value.toLowerCase());
});

decryptButton.addEventListener('click', () => {
    outputText.value = desencriptar(inputText.value.toLowerCase());
});

copyButton.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
});
