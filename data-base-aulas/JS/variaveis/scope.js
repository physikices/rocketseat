/**
 * Escopo
 *  - var   //variavel global e local (hoisting). Pode ser alterada (flexivel)
 *  - let   //variavel local. Pode ser alterada
 *  - const //igual o let mas NUNCA pode ser alterada em seu escopo
 * 
 */



console.log('> existe x ANTES do escopo? ', x);
{
    var x = 0;
    console.log('> existe x DENTRO do escopo? ', x);
}
console.log('> existe x DEPOIS do escopo? ', x);




{
    //console.log('> existe y ANTES da declaracao? ', y); //nao funciona antes da declaracao (comentar)
    let y = 1;
    console.log('> existe y dentro do escopo? ', y);
}
//console.log('> existe x FORA do escopo? ', y); //nao funciona fora do escopo (comentar)