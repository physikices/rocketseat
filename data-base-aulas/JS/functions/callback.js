function callBackFunction(params) {
    params();    
}

callBackFunction(
    () => {
        console.log('Resultado da callback');
    }
);