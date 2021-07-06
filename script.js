var modal = document.querySelectorAll('a[href^="#"]');
var divs = document.querySelectorAll('.modal-overlay')
function adicionarClasse(index){
    divs[index].classList.add('ativo');
}

modal.forEach((itemModal, index)=>{
    itemModal.addEventListener('click', function(){
        adicionarClasse(index);
    })
})
var exit = document.querySelectorAll(".exit img");
function sairModal(index){
    divs[index].classList.remove('ativo');
}
exit.forEach((itemImg, index)=>{
    itemImg.addEventListener('click', function(){
        sairModal(index);
    })
})



function entrouMouse(){
    let imagens = document.querySelector("#img01").src = "img/hover1.svg";
    let texto = document.querySelector("#p01");
    texto.innerHTML = "Converse com a madrinha";
    texto.style.fontFamily = "Titillium Web";
    
}
function saiuMouse(){
    let imagens = document.querySelector("#img01").src = "img/Asset 2.svg";
    let texto = document.querySelector("#p01").innerHTML = " ";
}
function entrouMouse01(){
    let imagens = document.querySelector("#img02").src = "img/hover2.svg";
    let texto = document.querySelector("#p02");
    texto.innerHTML = "Solicitar troca de madrinha"
    texto.style.fontFamily = "Titillium Web";
}
function saiuMouse01(){
    let imagens = document.querySelector("#img02").src = "img/Asset 3.svg";
    let texto = document.querySelector("#p02").innerHTML = " ";
}

function ativarConversa(){
    const chatH1 = document.querySelector("#chat h1");
    const chat = document.querySelector("#chat");
    let imagem = document.getElementById("im");
    chat.classList.toggle("ativo");
    if(chatH1.innerHTML === "Solicitar troca de madrinha"){
        chatH1.innerHTML = "Madrinha"
    }
    imagem.src = "img/chat.svg";
}
function trocaMadrinha(){
    const chatH1 = document.querySelector("#chat h1");
    let imagem = document.getElementById("im");
    if(chatH1.innerHTML === "Madrinha"){
        chatH1.innerHTML = "Solicitar troca de madrinha"
    }
    const chat = document.querySelector("#chat");
    chat.classList.remove("ativo");
    imagem.src = "img/icontroca.svg";
}




