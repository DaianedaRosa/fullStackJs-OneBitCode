let firstName = prompt('Primeiro nome:');
let lastName = prompt('Sobrenome:');
let campoDeEstudo = prompt('Em qual campo você atua?');
let anoDeNascimento = prompt('Em que ano você nasceu?');

alert
  ('Cadastro concluído com sucesso!\n' +
    'Nome completo: \n' + firstName + '' + lastName +
    '\n Campo de estudo: ' + campoDeEstudo + '\n Idade:' +
    (2022 - anoDeNascimento)); 