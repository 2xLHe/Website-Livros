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
    var leitura = document.getElementById('leitura');

    if (control.style.display === "none") {
        control.style.display = "block";
    } else {
        control.style.display = "none";
    }

    leitura.style.fontSize = fontSize + 'px'; // Altera o tamanho da fonte da seção #leitura
    document.getElementById('current-font-size').innerText = fontSize;
    document.getElementById('font-size-control').style.display=flex;
}


function toggleEspacamentoLetras() {
    const root = document.querySelector(':root');
    if (root.classList.contains('espacado')) {
        root.classList.remove('espacado');
    } else {
        root.classList.add('espacado');
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    // Seleciona todos os botões do cabeçalho
    const botoesCabecalho = document.querySelectorAll('.cabecalho button');

    // Adiciona um evento de clique a cada botão
    botoesCabecalho.forEach((botao) => {
        botao.addEventListener('click', function(e) {
            e.preventDefault(); // Impede que o link seja seguido imediatamente

            // Substitua isso pela sua lógica de verificação de login
            const usuarioEstaLogado = localStorage.getItem('usuarioEstaLogado');

            if (!usuarioEstaLogado) {
                window.location.href = 'index.html';
            }
        });
    });
});




let fonteLeitura = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--texto-leitura'));

function increaseTextFontSize() {
    if (fonteLeitura >= 6) {
        return;
    }

    fonteLeitura *= 1.1;
    document.documentElement.style.setProperty('--texto-leitura', fonteLeitura + 'rem');
    fonteLeitura++;
}

function decreaseTextFontSize() {
    if (fonteLeitura < 0.8) {
        return;
    }

    fonteLeitura *= 0.9;
    document.documentElement.style.setProperty('--texto-leitura', fonteLeitura + 'rem');
    fonteLeitura--;
}


var isBold = false; // Variável para rastrear o estado do peso da fonte
let leitura = document.getElementById('leitura');

function boldar() {
    if (isBold) {
        leitura.style.fontWeight = 'normal';
        isBold = false;
    } else {
        leitura.style.fontWeight = 'bold';
        isBold = true;
    }
}


var escuro = 0;

function escurar(){
    if(escuro == 0){
        document.documentElement.style.setProperty('--bg1-color', 'black');
        document.documentElement.style.setProperty('--texto-color', 'white');
        escuro = 1;
    }else{
        document.documentElement.style.setProperty('--bg1-color', '#f0f0f0');
        document.documentElement.style.setProperty('--texto-color', 'black');
        escuro = 0;
    }
}

var espacamento = 0;
let espacamentoAtual = parseFloat(window.getComputedStyle(leitura).getPropertyValue('line-height')); // Corrigido para passar o elemento 'leitura'
let copia = espacamentoAtual;

function aumentarEspacamento() {
    console.log(espacamentoAtual);
    if(espacamentoAtual == 0){
        leitura.style.lineHeight = (espacamentoAtual * 1.2) + 'vh';
        espacamentoAtual++;
    }
    else{
        leitura.style.lineHeight = (copia) + 'px';
        espacamentoAtual--;
    }
}