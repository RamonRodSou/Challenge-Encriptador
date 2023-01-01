
var mensagemUsuario = document.querySelector("#mensagem-usuario");
var mensagemCriptografada = document.querySelector("#texto-criptografado");


function criptografar() {

    var mensagem = mensagemUsuario.value;

    var criptografado = mensagem.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

        /*    Podemos esrever o replace " Substituir " também desta forma.

        .replaceAll("e","enter")

        */ 

    mensagemCriptografada.value = criptografado

}

function decriptografar() {

    var mensagem = mensagemUsuario.value;

    var descriptografa = mensagem.replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

        mensagemCriptografada.value = descriptografa;

}

function copiar() {



}
