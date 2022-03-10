/**
 * Object
 *  -objeto
 *  -propriedades / atributos
 *  -funcionalidades / metodos
 * 
 * {propriedade: "valor"}
 * 
 * DESCRICAO:
 * O tipo de dado Object é estrutural, contendo atributos, ou propriedades, e métodos, ou funcionalidades. Um objeto é denotado com os caracteres { }, atributos e métodos com nome: valor . Por exemplo { nome: "João", idade: 20 }.
 */

var myObject = {
    nome:   ["Rodrigo", 'Nascimento'],  //suporta uso de array
    idade:  40, //suporta uso de number
    sexo:   'masculino',    //suporta uso de string
    interesses: ['música', 'física'],//mais um exemplo de array
    bio:    function() {   //suporta uso de funcao
        alert(this.nome[0] + ' ' + this.nome[1] + ' tem ' + this.idade + ' anos de idade. Ele gosta de ' + this.interesses[0] + ' e ' + this.interesses[1] + '.');
    },
    saudacao:   function () {   //mais um exemplo de funcao
        alert('Oi! Eu sou '+this.nome[0]+'.');        
    }
};
console.log(myObject.bio());
