var nome = document.getElementById("nome")
var email = document.getElementById("email")
var assunto = document.getElementById("assunto")
var mensagem = document.getElementById("mensagem")


function Envio(e) {
    alert("Mensagem enviada!");
    e.preventDefault();
}

function ehValido(campo){
var spanNomeInvalido = document.getElementById("nomeInvalido");
var spanEmailInvalido = document.getElementById("emailInvalido");
var spanAssuntoInvalido = document.getElementById("assuntoInvalido");
var spanMensagemInvalido = document.getElementById("mensagemInvalido");

    if(ehBrancoOuVazio(nome.value)){

        if(campo=='nome')
            spanNomeInvalido.innerText="Nome não pode ser vazio ou em branco!";
        return false;
    }else{
        spanNomeInvalido.innerText="";
    }


    if(ehMaiorQueNumero(nome.value,50)){
        if(campo=='nome')
        
        spanNomeInvalido.innerText="Nome deve ter apenas 50 caracteres!";
        return false;
    }else{
        spanNomeInvalido.innerText="";
    }

    if(ehBrancoOuVazio(email.value)){
        if(campo=='email')
        spanEmailInvalido.innerText="Email não pode ser branco ou vazio!";
        return false;
    }else{
        spanEmailInvalido.innerText="";
    }
    /*Deve estar em formato de e-mail contendo o caractere especial @ seguido por um domínio ou provedor seguido por um ponto (.)
    Exemplo: text@texto.com*/

    if(ehBrancoOuVazio(assunto.value)){
        if(campo=='assunto')
        spanAssuntoInvalido.innerText="Assunto não pode ser vazio ou em branco!";
        return false;
    }else{
        spanAssuntoInvalido.innerText="";
    }
    if(ehMaiorQueNumero(assunto.value,50)){
        if(campo=='assunto')
        spanAssuntoInvalido.innerText="Assunto deve ter apenas 50 caracteres!";
        return false;
    }else{
        spanAssuntoInvalido.innerText="";
    }

    if(ehBrancoOuVazio(mensagem.value)){
        if(campo=='mensagem')
        spanMensagemInvalido.innerText="Mensagem não pode ser vazio ou em branco!";
        return false;
    }else{
        spanMensagemInvalido.innerText="";
    }


    if(ehMaiorQueNumero(mensagem.value,300)){
        if(campo=='mensagem')
        spanMensagemInvalido.innerText="Mensagem deve ter apenas 300 caracteres!";
        return false;
    }else{
        spanMensagemInvalido.innerText="";
    }

    var botao = document.getElementById("botao");
    botao.style.backgroundColor= "green";
    botao.disabled = false;
}

function  ehBrancoOuVazio(palavra){
    return (palavra=="" || palavra.replaceAll(' ','') == '')
}

function ehMaiorQueNumero(palavra, num){
    return (palavra.length > num) 
}