const nomeTurista = prompt('Eai, turista! Qual é seu nome?')
let cidades = ''
let contagem = 0

let continuar = prompt('Você visitou alguma cidade? (Sim/Não)')

while (continuar === 'Sim') {
  let cidade = prompt('Qual foi o nome da cidade visitada?')
  cidades += ' - ' + cidade + '\n'
  contagem++
  continuar = prompt('Você visitou alguma outra cidade? (Sim/Não)')
}

alert(
  'Turista: ' + nomeTurista +
  '\nQuantidade de cidades visitadas: ' + contagem +
  '\nCidades visitadas:\n' + cidades
)









