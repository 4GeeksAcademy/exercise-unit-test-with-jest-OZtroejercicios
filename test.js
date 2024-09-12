// // Importar la función sum del archivo app.js
// const { sum } = require('./app.js');

// // Comienza tu primera prueba
// test('adds 14 + 9 to equal 23', () => {
//     // Dentro de la prueba llamamos a nuestra función sum con 2 números
//     let total = sum(14, 9);

//     // Esperamos que la suma de esos 2 números sea 23
//     expect(total).toBe(23);
// });

const { fromDollarToYen, fromEuroToDollar, fromYenToPound } = require('./app');

test('Convierte de dólares a yenes correctamente', () => {
    expect(fromDollarToYen(1)).toBeCloseTo(146.26); /// 1 dólar debería ser aproximadamente 146.26 yenes
});

test('Convierte de euros a dólares correctamente', () => {
    expect(fromEuroToDollar(1)).toBeCloseTo(1.07); // 1 euro debería ser 1.07 dólares
});

test('Convierte de yenes a libras correctamente', () => {
    expect(fromYenToPound(156.5)).toBeCloseTo(0.87); // 156.5 yenes deberían ser aproximadamente 0.87 libras
});