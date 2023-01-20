
var mensagemUsuario = document.querySelector("#mensagem-usuario");
var mensagemCriptografada = document.querySelector(".texto-criptografado");  
var copiarMensagem = document.querySelector(".copiarMensagem");

var textoCriptografado = document.querySelector(".texto-criptografado");

var mensagem1 = document.querySelector(".mensagem1");
var mensagem2 = document.querySelector(".mensagem2");

function criptografar() {

    var mensagem = mensagemUsuario.value;

    var criptografado = mensagem.replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
        .replace(/E/g, "enter")
        .replace(/I/g, "imes")
        .replace(/A/g, "ai")
        .replace(/O/g, "ober")
        .replace(/U/g, "ufat");

        /*  Podemos esrever o replace " Substituir " também desta forma.
            .replaceAll("e","enter")
        */
    mensagemCriptografada.value = criptografado;
    style ();
}

    function decriptografar() {

        var mensagem = mensagemUsuario.value;

        var descriptografa = mensagem.replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u")
            .replace(/ENTER/g, "e")
            .replace(/IMES/g, "i")
            .replace(/AI/g, "a")
            .replace(/OBER/g, "o")
            .replace(/Ufat/g, "u")
            .replace(/Enter/g, "e")
            .replace(/Imes/g, "i")
            .replace(/Ai/g, "a")
            .replace(/Ober/g, "o")
            .replace(/Ufat/g, "u");

        mensagemCriptografada.value = descriptografa;
    }

    function copiarMensaguemCriptografada() {
          
        /*  Deixamos o texto selecionado (em azul) 
        */
        mensagemCriptografada.select();
        mensagemCriptografada.setSelectionRange(0, 99999); /* Para mobile */

        /*  Copia o texto que está selecionado 
        */
        document.execCommand("copy");

        /*  alert("Texto copiado: " + mensagemCriptografada.value);
        */
    }


    function style (){

        mensagem1.style.display = "none";
        mensagem2.style.display = "none";
        textoCriptografado.style.background = "#FFFFFF";
    
        copiarMensagem.style.display = "flex";
    }
