/**
 * Strings
 * 
 * Cadeia de caracteres
 * 
 * "" //aspas duplas
 * '' //aspas simples
 * `` //template literals ou template strings
 * 
 * DESCRICAO:
 * O tipo de dados String consiste em uma cadeia de caracteres, ou seja, textos. Para denotar string no JavaScript são usados aspas duplas ( " " ), aspas simples ( ' ' ) e template literals ou template strings ( ), template literals permitem textos multilinhas e expressões de linguagem com os caracteres ${ }, por exemplo: console.log(A soma de duas unidades é ${1+1}), já as outras não, por exemplo: console.log("Isso é um texto").
 */

console.log("Rodrigo"); //uso padrao
console.log('Rodrigo "aspas"'); //quando precisar usar "" na cadeia de carcteres
console.log(`
    Rodrigo
    'aspas simples'
    "aspas duplas"
    ${8*3}
    `); //flexivel para usar aspas, multilinhas e expressões de linguagens