/* function convert(nota) {
    if (nota>=90){
        console.log('Nota: A');
    }else if (nota <= 89 && nota >= 80) {
        console.log('Nota: B');
    }else if (nota <= 79 && nota >= 70) {
        console.log('Nota: C');
    }else if (nota <= 69 && nota >= 60) {
        console.log('Nota: D')
    }else console.log('Nota: F')
}

convert(59); */

function getScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreE = score >= 50 && score <= 59;
    let scoreF = score < 50 && score >= 0;

    let finalScore;

    if (scoreA) {
        finalScore = 'A';
    } else if (scoreB) {
        finalScore = 'B';
    } else if (scoreC) {
        finalScore = 'C';
    } else if (scoreD) {
        finalScore = 'D';
    } else if (scoreE) {
        finalScore = 'E';
    } else if (scoreF) {
        finalScore = 'F';
    }else finalScore = 'Nota inválida';

    return finalScore; 
}

console.log(getScore(0));
console.log(getScore(-1));
console.log(getScore(10));
console.log(getScore(35));
console.log(getScore(60));
console.log(getScore(69));
console.log(getScore(65));
console.log(getScore(70));
console.log(getScore(75));
console.log(getScore(80));
console.log(getScore(85));
console.log(getScore(90));
console.log(getScore(95));
console.log(getScore(100));
console.log(getScore(105));
console.log(getScore(40));
console.log(getScore(45));
console.log(getScore(30));
console.log(getScore(50));



