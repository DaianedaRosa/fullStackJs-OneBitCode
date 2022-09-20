// Sintaxe do if e else

const idade = prompt('Informe a sua idade: ')


// forma bagunçada:

if (idade > 18) {
  alert('Você é maior de idade!')
} else {
  alert('Você é menor de idade!')

  if (idade < 12) {
    alert('Você é criança!')
  }
}

//forma organizada e fácil de entender:

if (idade > 18) {
  alert('Você é maior de idade!')
} else if (idade > 12) {
  alert('Você é menor de idade!')
} else if (idade > 4) {
  alert('Você é criança!')
}

// Operador ternário

const resultado = (6 === 6) ? "verdadeiro" : "falso"



