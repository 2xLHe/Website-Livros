// Variáveis para armazenar os tamanhos de fonte atuais
let tamanhoFonteXlLargeAtual = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--xl-large'));
let tamanhoFonteLargeAtual = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--large'));
let tamanhoFonteMediumAtual = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--medium'));
let tamanhoFonteSmallAtual = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--small'));


var tamanho = 0;

function aumentarTamanhos() {

    if(tamanho >= 4){
        document.querySelector('.aumentar').style.setProperty('color', 'gray');

        return;
    }
    document.querySelector('.diminuir').style.setProperty('color', 'black');


        tamanhoFonteXlLargeAtual *= 1.1;
        tamanhoFonteLargeAtual *= 1.1;
        tamanhoFonteMediumAtual *= 1.1;
        tamanhoFonteSmallAtual *= 1.1;
        
        document.documentElement.style.setProperty('--xl-large', tamanhoFonteXlLargeAtual + 'rem');
        document.documentElement.style.setProperty('--large', tamanhoFonteLargeAtual + 'rem');
        document.documentElement.style.setProperty('--medium', tamanhoFonteMediumAtual + 'rem');
        document.documentElement.style.setProperty('--small', tamanhoFonteSmallAtual + 'rem');
        tamanho++;

}

function diminuirTamanhos() {

    if (tamanho < 1){
        document.querySelector('.diminuir').style.setProperty('color', 'gray');

        return;
    }

    document.querySelector('.aumentar').style.setProperty('color', 'black');

    // Diminui os tamanhos de fonte em 10%
    tamanhoFonteXlLargeAtual *= 0.9;
    tamanhoFonteLargeAtual *= 0.9;
    tamanhoFonteMediumAtual *= 0.9;
    tamanhoFonteSmallAtual *= 0.9;
    
    // Aplica os novos tamanhos de fonte ao root
    document.documentElement.style.setProperty('--xl-large', tamanhoFonteXlLargeAtual + 'rem');
    document.documentElement.style.setProperty('--large', tamanhoFonteLargeAtual + 'rem');
    document.documentElement.style.setProperty('--medium', tamanhoFonteMediumAtual + 'rem');
    document.documentElement.style.setProperty('--small', tamanhoFonteSmallAtual + 'rem');

    tamanho--;
}


document.getElementById('btn-alto-contraste').addEventListener('click', toggleAltoContraste);
function toggleAltoContraste() {
    document.documentElement.classList.toggle('high-contrast');

    var abasElements = document.querySelectorAll('.abas *');
    abasElements.forEach(function(element) {
        element.style.setProperty('color', 'black');
    });
    document.querySelector('.atual').style.setProperty('color', 'white');   
}




// A função é chamada quando o botão é clicado
function toggleModoAtencao() {
    const leitura = document.getElementById('leitura');
    leitura.classList.toggle('modo-atencao');
}

// Event listener para o botão de alternância
document.addEventListener('DOMContentLoaded', function () {
    const btnModoAtencao = document.getElementById('modo-atencao');
    btnModoAtencao.addEventListener('click', toggleModoAtencao);
});



var fontSize = 16; // Tamanho inicial da fonte
var upArrow = document.querySelector('.fa-arrow-up');
var downArrow = document.querySelector('.fa-arrow-down');

function toggleFontSizeControl() {
    var control = document.getElementById('font-size-control');
    if (control.style.display === "none") {
        control.style.display = "block";
    } else {
        control.style.display = "none";
    }
    document.getElementById('current-font-size').innerText = fontSize;
}

function increaseFontSize() {
    

    if (fontSize < 24) {
        fontSize += 1;
        document.body.style.fontSize = fontSize + "px";
        document.getElementById('current-font-size').innerText = fontSize;
        downArrow.style.color = "black"; // reset the color of down arrow
    }

    // If font size reaches the upper limit, change the color of up arrow to gray
    if (fontSize === 24) {
        upArrow.style.setProperty('color', 'gray');
    }
}

function decreaseFontSize() {
    if (fontSize > 10) {
        fontSize -= 1;
        document.body.style.fontSize = fontSize + "px";
        document.getElementById('current-font-size').innerText = fontSize;
        upArrow.style.color = "black"; // reset the color of up arrow
    }

    // If font size reaches the lower limit, change the color of down arrow to gray
    if (fontSize === 10) {
        downArrow.style.setProperty('color', 'gray');
    }
}



