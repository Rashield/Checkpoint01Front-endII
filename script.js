let formularios = document.querySelectorAll(".campo");
let titulo = document.getElementById("titulo");
let url = document.getElementById("url");
let descricao = document.getElementById("descricao");
let botaoEnviar = document.getElementById("botaoEnviar");
let cardExemplo = document.querySelector("#cardExemplo");

// ------------------------------- JS bootstrap--------------

    botaoEnviar.addEventListener('click', function(event) {
      // Pega todos os formulários que nós queremos aplicar estilos de validação Bootstrap personalizados.
      var forms = document.getElementsByClassName('needs-validation');
      // Faz um loop neles e evita o envio
      var validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
    

// ------------------------------- JS manual ----------------------------

let x=0;
function addCard(){
    let container = document.querySelector("#cards");
    let novoCard =  document.createElement("div");
    novoCard.className = "card col-md-6 mb-5";
    novoCard.innerHTML = 
`     
        <img class="card-img-top" src="${url.value}" alt="Imagem de capa do card">
        <div class="card-body"> 
            <h4 class="card-title"><strong>${titulo.value}</strong></h5>
            <p class="card-text">${descricao.value}</p>
            <i onClick="apagaCard(${x})" id="botaoDelete" class="fa-solid fa-trash float-right"></i>
        </div>
`
    container.appendChild(novoCard);
    cardExemplo.remove();
    x++;
}

botaoEnviar.addEventListener("click",function(evento){
    if(url.value && titulo.value && descricao.value){
        addCard();
        formularios.forEach(x=>x.value="");
        evento.preventDefault();}
});

function apagaCard(x){
    let botaoDelete = document.querySelectorAll("#botaoDelete");
    let cardsExistentes = document.querySelectorAll(".card");
    if(cardsExistentes.length>1){
    let confirma= confirm("Deseja deletar o card?");
      if(confirma){
      botaoDelete[x].parentElement.parentElement.remove();}
    }else{
      alert("Mínimo de 1 card atingido.");
    }
}