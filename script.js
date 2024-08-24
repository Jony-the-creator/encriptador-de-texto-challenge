document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.background-container');
    const numberOfDots = 100;

    for (let i = 0; i < numberOfDots; i++) {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        
        // Opción: Cambia el tamaño y color aleatoriamente
        const size = Math.random() * 3 + 2;
        dot.style.width = `${size}px`;
        dot.style.height = `${size}px`;
        dot.style.backgroundColor = `rgba(166, 213, 206, 0.8)`;

        const delay = Math.random() * 5; // Retraso entre 0s y 5s
        dot.style.animationDelay = `${delay}s`;
        
        container.appendChild(dot);
    }
});

function encryptText() {
    let inputText = document.getElementById('inputText').value;
    
    if (!/^[a-z\s]*$/.test(inputText)) {
        alert('Por favor, ingresa solo letras minúsculas sin acentos ni caracteres especiales.');
        return;
    }
    
    let encryptedText = inputText.replace(/e/g, "enter")
                                 .replace(/i/g, "imes")
                                 .replace(/a/g, "ai")
                                 .replace(/o/g, "ober")
                                 .replace(/u/g, "ufat");

    document.getElementById('outputText').value = encryptedText;
}

function decryptText() {
    let encryptedText = document.getElementById('inputText').value;

    let decryptedText = encryptedText.replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ai/g, "a")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");

    document.getElementById('outputText').value = decryptedText;
}

function copyText() {
    let outputText = document.getElementById('outputText');
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('encryptButton').addEventListener('click', mostrarOutput);
    document.getElementById('decryptButton').addEventListener('click', mostrarOutput);

    function mostrarOutput() {

        document.getElementById('placeholderImage').style.display = 'none';
        document.getElementById('placeholderTitle').style.display = 'none';
        document.getElementById('placeholderText').style.display = 'none';

        document.getElementById('outputText').style.display = 'block';
        document.getElementById('copyButton').style.display = 'block';
    }
});
