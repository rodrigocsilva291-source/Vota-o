// tipos de declaração de variáveis

function Verificador() {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const resultado = document.getElementById("resultado");
    
 resultado.innerHTML = `Seu nome é ${nome}, você tem ${idade} anos`


// condicional votar ou não

if (idade < 16) {
   resultado.innerHTML = `${nome}, você não pode votar, você tem ${idade} anos`;
 }else if (idade < 18 || idade >= 65) {
    resultado.innerHTML = `${nome}, não é obrigatório votar, você tem ${idade} anos`;
 }else{
     resultado.innerHTML = `${nome}, você é obrigatório a votar`;
 }

}