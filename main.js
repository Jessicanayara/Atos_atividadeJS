

//////////////////////1 exercicio////////////////////////////////


let nome = document.getElementById('nome');
let sobrenome = document.getElementById('sobrenome');
let login = document.getElementById('login');

nome.addEventListener('input',function(){
   
    escrevendo();
   
})


   sobrenome.addEventListener('input',function(){
        
        escrevendo();
        
    })

   
function escrevendo(){
    var name = nome.value.replace(/\D/g, '');;
    var lastname = sobrenome.value.replace(/\D/g, '');;
    
    var loginValue = `${name}.${lastname}`;
    login.value = loginValue.toLowerCase();


}

//////////////////////2 exercicio//////////////////////

let cepInput = document.getElementById('cep');
let cepErro = document.getElementById('cep-erro');
let enderecoInput = document.getElementById('endereco');
let complementoInput = document.getElementById('complemento');
let bairroInput = document.getElementById('bairro');
let cidadeInput = document.getElementById('cidade');
let estadoInput = document.getElementById('estado');

cepInput.addEventListener('input', function() {
  validarcep();});

function validarcep(){

  let cep = cepInput.value.replace(/\D/g, '');

  if (cep.length !== 8) {
    cepErro.style.display = 'block';
  }
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())
    .then(data => {
      if (data.erro) {
        cepErro.style.display = 'block';
      } else {
        cepErro.style.display = 'none';
        enderecoInput.value = data.logradouro;
        complementoInput.value = data.complemento;
        bairroInput.value = data.bairro;
        cidadeInput.value = data.localidade;
        estadoInput.value = data.uf;
       
      }
    })
}





/////////////////////////3 exercicio//////////////////////

let form = document.getElementById('formulario');
let curso=  document.getElementById('academia');
let prof=  document.getElementById('professor');
let termos=  document.getElementById('termos');

let notificacao= document.querySelector('input[name="info"]:checked');
let tabela= document.getElementById('tabela-dados');
form.addEventListener('submit', function(event) {
  event.preventDefault();dados();});

function dados(){
    let respostas= form.querySelectorAll('input');
    let campos = document.querySelectorAll('td');
   
    console.log(notificacao.value)
     for (let i = 0; i < respostas.length; i++) {
        let resposta = respostas[i];
        if (resposta.classList.contains('form-control')) {
           
           
            let campo = campos[i];
             campo.textContent = resposta.value;
          }
            
          let campoCurso = document.getElementById('t-academia');
          let campoProf = document.getElementById('t-professor');
          let campotermo = document.getElementById('t-termos');
          let campoNotificacao= document.getElementById('t-info');

          let selecionado = prof.selectedOptions[0].textContent;

        
          campoCurso.textContent = curso.value;
          campoProf.textContent = selecionado;
          campotermo.textContent=termos.value;
          campoNotificacao.textContent = notificacao.value;     
    
                                                                   
  }

  window.alert("cadastrado com sucesso");

  form.reset();

  tabela.style.display = 'block';

    
}