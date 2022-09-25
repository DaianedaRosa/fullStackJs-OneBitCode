// inicialização ; condição ; finalização

for (alert('Inicializando o FOR');
  indice <= 10;
  alert('Finalizando um bloco de repetição')
) {
  alert("Indice = " + indice)
  indice++
}


let nome = 'daiane' // tamanho 6 -> 0, 1, 2, 3, 4, 5
for (let i = 0; i < nome.length; i++) {
  console.log(nome[i])
} 