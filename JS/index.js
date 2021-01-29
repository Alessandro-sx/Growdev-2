var nome = "Alessandro  Dos Santos Xavier";
var cargo = "Estudante de Análise e Desenvolvimento de Sistemas";

var nomeHtml = document.getElementById("nome-no-html");
var cargoHtml = document.getElementById("cargo-no-html");
var texto1 = document.getElementById("texto-1");
var texto2 = document.getElementById("texto-2");
var texto3 = document.getElementById("texto-3");

function colocarNomeNoHtml(nome) {
    nomeHtml.innerHTML = nome;
}

function colocarCargoNoHtml(cargo) {
    cargoHtml.innerHTML = cargo;
}

function clickNoExperiências(){
    console.log("clicou no botão Experiências");
    texto2.style.display ="block";
    texto1.style.display ="none";
    texto3.style.display ="none";
}

function  clickNoSobre(){
    console.log("clicou no botão Sobre");
    texto1.style.display ="block";
    texto2.style.display ="none";
    texto3.style.display ="none";
    
}
function  clickNoCursos(){
    console.log("clicou no botão cursos");
    texto3.style.display ="block";
    texto1.style.display ="none";
    texto2.style.display ="none";
}


colocarNomeNoHtml(nome);
colocarCargoNoHtml(cargo);
