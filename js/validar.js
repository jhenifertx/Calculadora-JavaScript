
function verificar(numero){ //função com parâmetros

  var num = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = num + numero;
}

function limpar_valores() {

  document.getElementById('resultado').innerHTML = "";
  document.getElementById('conta').innerHTML = "";

}

function apagar_um() {

  var result = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = result.substring(0, result.length -1);

}

function calcular() {

  var resultado = document.getElementById('resultado').innerHTML;

  if (resultado === null){
    document.getElementById('resultado').innerHTML = "Não há numeros";
    
  } else {
    document.getElementById('resultado').innerHTML = eval(resultado);
    
  }

  
  if (conta === null){
    document.getElementById('conta').innerHTML = "Não há numeros";
    
  } else {
    document.getElementById('conta').innerHTML = resultado ;
    
  }
    
}


function porcentagem() {
	var resultado = document.getElementById('resultado').innerHTML;
	console.log(resultado);
	var calculo = eval(resultado) / 100;
	document.getElementById('resultado').innerHTML = calculo;
}

function trocar_sinal() {

  var result = document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = result * -1;

  return result;
}
