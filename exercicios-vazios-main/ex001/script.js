var valor = Number(prompt("Digite um valor: "));

alert(`O seu valor em Reais é: ${valor.toLocaleString(`pt-BR`, {style: "currency", currency: "BRL"})}`)