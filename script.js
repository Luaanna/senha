const numeroSenha = document.querySelector('.parametro-senha_texto');
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;
const letrasMaiusculas = 'ABCDEFJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefjklmnopqrstuvwxyz';
const numeros = '0123456789';
const simbolos = '!@%*?';
const botoes = document.querySelectorAll('.parametr-senha_botao');
const campoSenha = document.querySelectorAll('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');
const forcaSenha = document.querySelectorAll('forca');
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
     if(tamanhoSenha >1){
        tamanhoSenha--;
     }
     numeroSenha.textContent = tamanhoSenha;
     geraSenha();
}

function aumentaTamanho(){
    if(tamanhoSenha < 20){
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}
function geraSenha(){
    let alfabeto = '';
    if (checkbox[0].checked)alfabeto+=letrasMaiusculas;
    if (checkbox[1].checked)alfabeto+=letrasMinusculas;
    if (checkbox[2].ckecked)alfabeto+=numeros;
    if (checkbox[3].checked)alfabeto+=simbolos;

    if(alfabeto.length===0){
        campoSenha.values = '';
        classificaSenha(1)
        return;
    }
    let senha= '';
    for(let i=0; i < tamanhoSenha; i++);{
    const numeroAleatorio = Math.floor(Math.random()* alfabeto.length);
    senha+=alfabeto[numeroAleatorio];}
    
    campoSenha.value=senha;
    classificaSenha(alfabeto.length);
}

function classificaSenha(tamanhoAlfabeto) {
    let entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto);
    forcaSenha.classList.remove('fraca', 'media', 'forte');
    if (entropia > 57) {
        forcaSenha.classList.add('forte');
    } else if (entropia > 35 && entropia <= 57) {
        forcaSenha.classList.add('media');
    } else {
        forcaSenha.classList.add('fraca');
    }
    const valorEntropia = document.querySelector('.entropia');
    valorEntropia.textContent = "Um computador pode levar até " + Math.floor(2 ** entropia / (100e6 * 60 * 60 * 24)) + " dias para descobrir essa senha.";
}

geraSenha();
