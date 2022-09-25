const numero = prompt('Escolha um número para ser multiplicado: ')
let resultado = ''


for (let i = 1; i <= 20; i++) {
  resultado += '->' + numero + ' * ' + i + ' = ' + (numero * i) + '\n'
}

alert('Resultado da tabuada de ' + numero + ':\n\n' + resultado)