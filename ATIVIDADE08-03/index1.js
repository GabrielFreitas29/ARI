var vcorfundo, vcortexto, vnome
function inicia(){
    if(localStorage.nome){
        
        /* se esse if for verdadeiro, significa que o LocalStorage já existe*/
        
        vcorfundo=localStorage.corfundo
        vcortexto=localStorage.cortexto
        vnome=localStorage.nome

        /* Chamamos a função defineCor(op,cor) */

        defineCor(1,vcorfundo)
        defineCor(2,vcortexto)
        document.getElementById("painel").innerHTML="Bem vindo " + vnome + "<hr>"
        Window.addEventListener("load",inicia)
}}


function defineCor(op,cor){
    // se op for igual a 1 alterna a cor de fundo
    if(op==1){
        document.body.style.backgroundColor=cor
    }else{
        document.body.style.color=cor
    }
}

{/* <form name = "dados">
    <label>Nome:</label><br>
    <input type="text" name="fnome" id="fnome" size="20"><br></br>
    <label>Cor fundo</label>
    </input>
</form> */}

function gravar(){
    var form=document.getElementById("fconf")
    //armazena o nome entrando no formulario na variavel vnome
    vnome=document.getElementById('fnome').ariaValueMax;
    //armazenando as informaçoes no localStorage
    localStorage.corfundo=vcorfundo
    localStorage.cortexto=vcorfonte
    localStorage.nome=vnome
    form.style.display="none"
}

function mostrarOpcoes(){
    let form=document.getElementById("fconf")
    form.style.display="block"
}


//para finalziar, vai no formulario, no input do botao