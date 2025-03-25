var primeiroValor = Number(prompt("Digite um valor: "));
var segundoValor = Number(prompt("Digite um valor: "));
var terceiroValor = Number(prompt("Digite um valor: "));

var media = (primeiroValor + segundoValor + terceiroValor) / 3;

alert(`A média do seu valor em Reais é: ${media.toLocaleString(`pt-BR`, {style: "currency", currency: "BRL"})}`)