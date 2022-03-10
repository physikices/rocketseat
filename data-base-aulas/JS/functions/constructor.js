/**
 * Function() constructor
 * 
 * expressão new
 * criar novo objeto
 * this keyword
 */

function Person(name) {
    this.name = name;
}
const rodrigo = new Person ('Rodrigo');
const pablo =   new Person ('Pablo');
console.log(rodrigo);
console.log(pablo);