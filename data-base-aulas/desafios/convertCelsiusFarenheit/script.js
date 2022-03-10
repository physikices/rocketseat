//transformDegree('50f');

//Coleta e padronização de dados
function transformDegree(degree) {
    //coleta entrada para escala celsius e coloca em caixa alta
    const celsiusExists = degree.toUpperCase().includes('C');
    //coleta entrada para escala fahrenheit e coloca em caixa alta
    const fahrenheitExists = degree.toUpperCase().includes('F');
    

    //valida se a escala digitada é em Celsius(C) ou Fahrenheit(F)
    if(!celsiusExists && !fahrenheitExists) {
        throw new Error('Use apenas uma das duas escalas (C) ou (F)');
    }
    //fluxo ideal, F (fahrenheit) para C (celsius)
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
    let transf = fahrenheit => (fahrenheit-32)*5/9;
    let degreeSign = '°C';

    //fluxo alternativo, C (celsius) para F (fahrenheit)
    if (celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C",""));
        transf = celsius => celsius*9/5 + 32;
        degreeSign = '°F';
    }

    return transf(updatedDegree) + degreeSign;
}

//tratamento de erros
try {
    console.log(transformDegree('100C')); //entrada de dados    
    console.log(transformDegree('100f')); //entrada de dados
    console.log(transformDegree('3z')); //entrada de dados
    
} catch (error) {
    console.log(error.message);
}