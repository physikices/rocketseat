
let cxFamily = {
    receitas: [1500, 1500],
    despesas: [60.5, 120, 235.68, 1000],
}

function soma(array) {
    let total=0;
    for (const index of array) {
        total += index;
    }
    return total;    
}

(function () {
    const calcReceitas = soma(cxFamily.receitas);
    const calcDespesas = soma(cxFamily.despesas);

    const total = calcReceitas - calcDespesas;
    

    if (total >= 0) {
        console.log(`saldo positivo: R$ ${total.toFixed(2)}`);
        
    } else {
        console.log(`saldo NEGATIVO: R$ ${total.toFixed(2)}`);
    }
})();



