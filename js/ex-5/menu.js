let opcoes = ''

do {
  opcoes = prompt(
    'Seja bem-vindo!\n' +
    '\nEscolha uma das opções abaixo: ' +
    '\n1 - Opção' +
    '\n2 - Opção' +
    '\n3 - Opção' +
    '\n4 - Opção' +
    '\n5 - Encerrar...'
  )

  switch (opcoes) {
    case "1":
      alert('Abrindo opções de cadastro...')
      break
    case "2":
      alert('Abrindo opções de login...')
      break
    case "3":
      alert('Voltando para home...')
      break
    case "4":
      alert('Abrindo extras...')
      break
    case '5':
      alert('Encerrando...')
      break
    default:
      alert("Entrada inválida! Escolha uma das cinco opções.")
  }
} while (opcoes !== '5');



