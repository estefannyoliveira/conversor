function Converter() {
  var valorElemento = document.getElementById("ivalor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  
  var valorEmReal = valorEmDolarNumerico * 5;
  console.log(valorEmReal);
  
  var elementoValorConvertido = document.getElementById("ValorConvertido")
  var valorConvertido = "O valor em real é R$ " + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}
