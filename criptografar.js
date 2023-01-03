var mensagemUsuario = document.querySelector("#mensagem-usuario");
var mensagemCriptografada = document.querySelector(".texto-criptografado");
var meninoDaLupa = document.querySelector(".garoto_lupa");
var mensagem1 =  document.querySelector (".mensagem1");
var mensagem2 = document.querySelector (".mensagem2");
var aparenciaInicial = document.querySelector (".texto-sobrepor");

function remover (){

    meninoDaLupa.classList.remove("garoto_lupa");
    meninoDaLupa.classList.add("garoto_lupa2");
    mensagem1.classList.remove("mensagem1");
    mensagem1.classList.add("notmensage");
    mensagem2.classList.remove("mensagem2");
    mensagem2.classList.add("notmensage2");
    aparenciaInicial.classList.remove("texto-sobrepor");
    aparenciaInicial.classList.add("texto-sobrepor-none");
}


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


    /*    Podemos esrever o replace " Substituir " também desta forma.
    .replaceAll("e","enter")
    */
    remover ();
    mensagemCriptografada.value = criptografado;

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

        document.execCommand("copy");

    }
    