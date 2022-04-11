const name = 'Eliandro';
const sobreNome = 'Barbosa';
const idade = 30;
const altura = 1.80;
const peso = 84;
let imc = peso / (altura * altura); // peso / (altura * altura)
let anoNascimento = 2022 - idade;

console.log(`${name} ${sobreNome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc}`);

console.log(`${name} ${sobreNome}, nasceu em, ${anoNascimento}`);
