var nome = document.getElementById("nome");
var email = document.getElementById("email");
var assunto = document.getElementById("assunto");
var mensagem = document.getElementById("mensagem");

//regex para validação de email
let reg = /^[\w.\+]+@\w+.\w{2,}(?:.\w{2})?$/;


function Envio(e) {
    e.preventDefault();
    var botao = document.getElementById("botao");
    botao.style.backgroundColor= 'green';
    botao.innerText= "Mensagem enviada";
    nome.value='';
    email.value='';
    assunto.value='';
    mensagem.value='';
}

function ehValido(campo){
   
    var spanNomeInvalido = document.getElementById("nomeInvalido");
    var spanEmailInvalido = document.getElementById("emailInvalido");
    var spanAssuntoInvalido = document.getElementById("assuntoInvalido");
    var spanMensagemInvalido = document.getElementById("mensagemInvalido");
    var botao = document.getElementById("botao");

    botao.disabled = true;
    botao.style.backgroundColor= "#2A7AE4";
    botao.innerText= "Enviar mensagem";


    if(ehBrancoOuVazio(nome.value)){  
        if(campo=='nome') spanNomeInvalido.innerText="Nome não pode ser vazio ou em branco!";
         return false;
    }
    else if(ehMaiorQueNumero(nome.value,50)){
        if(campo=='nome') spanNomeInvalido.innerText="Nome deve ter apenas 50 caracteres!";
        return false;
    }
    else
    {
        spanNomeInvalido.innerText="";
    }

    if(ehBrancoOuVazio(email.value)){
    
        if(campo=='email')spanEmailInvalido.innerText="Email não pode ser branco ou vazio!";
        return false;
    }
    else if(!reg.test(email.value)){
        if(campo=='email')spanEmailInvalido.innerText="Email invalido, deve ser: teste@gmail.com";
        return false;
    }
    else{
        spanEmailInvalido.innerText="";
    }

    if(ehBrancoOuVazio(assunto.value)){
    
        if(campo=='assunto')spanAssuntoInvalido.innerText="Assunto não pode ser vazio ou em branco!";
        return false;
    }
    else if(ehMaiorQueNumero(assunto.value,50)){
        if(campo=='assunto')spanAssuntoInvalido.innerText="Assunto deve ter apenas 50 caracteres!";
        return false;
    }
    else{
        spanAssuntoInvalido.innerText="";
    }

    if(ehBrancoOuVazio(mensagem.value)){
        if(campo=='mensagem') spanMensagemInvalido.innerText="Mensagem não pode ser vazio ou em branco!";
        return false;

    }else if(ehMaiorQueNumero(mensagem.value,300)){
        if(campo=='mensagem') spanMensagemInvalido.innerText="Mensagem deve ter apenas 300 caracteres!";
        return false;

    }else{
        spanMensagemInvalido.innerText="";
    }

    botao.style.backgroundColor= "darkblue";
    botao.disabled = false;
    
}

function  ehBrancoOuVazio(palavra){
    return (palavra=="" || palavra.replaceAll(' ','') == '')
}

function ehMaiorQueNumero(palavra, num){
    return (palavra.length > num) 
}