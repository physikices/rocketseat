/**
 * Variáveis e Tipos de Dados
 */

var nome;   //declaration

nome = "marcos";    //assignment value

console.log(typeof nome);   //tipo de dado


let age, isHuman;   //agrupamento de declaracoes

age = 28;
isHuman = "Humano";

console.log(nome, age, isHuman);    //agrupamento de retornos

console.log('O ' + nome + ' tem ' + age + ' e é ' + isHuman + '.'); //concatenando valores

console.log(`O ${nome} tem ${age} anos e não é ${isHuman}.`);    //interpolacao com template literals



const person = {    //Object declaration
    name: 'João',
    age: 28,
    weight: 80.5,
    isAdmin: true

};

console.log(`${person.name} tem ${person.age} anos e pesa ${person.weight}kg.`)

const jungle = [    //array declaration
    'Lion',
    'Monkey',
    'Cat',
    'Snake'
];

console.log(
    jungle[0],  //acessando algumas posicoes de arrays
    jungle[3],
);

console.log(jungle);    //acessando o array completo