const veiculo1 = prompt('Insira também o nome do primeiro veículo: ')
const velocidade1 = prompt('Insira a velocidade do primeiro veículo: ')

const veiculo2 = prompt('Insira também o nome do segundo veículo: ')
const velocidade2 = prompt('Insira a velocidade do segundo veículo: ')


if (velocidade1 > velocidade2) {
  alert('O ' + veiculo1 + ' é mais rápido que ' + veiculo2)
} else if (velocidade1 < velocidade2) {
  alert('O ' + veiculo2 + 'é mais rápido que ' + veiculo1)
} else {
  alert(veiculo1 + 'e' + veiculo2 + 'possuem velocidades iguais.')
}

