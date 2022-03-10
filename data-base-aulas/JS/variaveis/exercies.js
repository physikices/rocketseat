/**
 * EXERCíCIO
 */

//1. Declare uma variável de nome weight
let weight;

//2. Que tipo de dado é a variável?
console.log(typeof weight); //Resp: undefined

/**
 * 3. Declare uma variável e atribua valores para cada um dos dados:
 *      - name: String
 *      - age: Number (integer)
 *      - stars: Number (float)
 *      - isSubscribed: Boolean
 */
let name, age, stars, isSubscribed;

nome    = 'Rodrigo';
age = 40;
stars   = 4.5;
isSubscribed    =   false;
console.log(typeof nome,age,stars,isSubscribed);


 //4. A variável student abaixo é de que tipo de dado?

let student = {};   //Tipo object
console.log(typeof student);

//4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
student = {
    nome:   'Rodrigo',
    age:    40,
    stars:  4.5,
    isSubscribed:   false,
    weight: 60,
};
console.log(student);

/**
 * 4.2 Mostre no console a seguinte mensagem:
 *      <nome> de idade <age> pesa <weight>kg.
 * Atenção, substitua <*> pelos seus respectivos valores e propriedades do objeto student.
 */
console.log(`${student.nome} de ${student.age} anos, pesa ${student.weight}kg.`);

/**
 * 5. Declare uma variável do tipo array, de nome student e atribua a ela nenhum valor, ou seja, somente array vazio
 */

students = [];

/**
 * 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array.
 */
students = [student];
console.log(students);

//7. Coloque no console o valor da posição zero do array acima
console.log(students[0]);

//8. Crie um novo student e coloque na posição 1 do array
const john = {
    nome: 'John',
    age: 38,
    stars: 5.8,
    isSubscribed: true,
    weight: 75,
}
students[1] = john;
console.log(students);

/**
 * 9. Sem rodar o código responda qual é a saída do código abaixo e por que? Após a sua resposta, rode o código e veja se você acertou.
 */
console.log(a);
var a = 1; //Resp: Undefined - porque a está sendo declarada como uma variável Global após a requisição do console.log() e sofrerá o hoisting (elevação).