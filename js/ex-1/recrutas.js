let firstName = prompt('Primeiro nome:');
let lastName = prompt('Sobrenome:');
let fieldOfStudy = prompt('Em qual campo você atua?');
let yearOfBirth = prompt('Em que ano você nasceu?');

alert
  ('Cadastro concluído com sucesso!\n' +
    'Nome completo: ' + firstName + ' ' + lastName +
    '\n Campo de estudo: ' + fieldOfStudy + '\n Idade:' +
    (2022 - yearOfBirth)); 