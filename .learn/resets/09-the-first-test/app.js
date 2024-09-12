// // One euro is:
// let oneEuroIs = {
//     "JPY": 156.5, // japan yen
//     "USD": 1.07, // us dollar
//     "GBP": 0.87, // british pound
// }

let fromDollarToYen = (dollarValor) => {
    let euroValor = dollarValor/1.07;
    let yenValor = euroValor*156.5;
    return yenValor
}

let fromEuroToDollar = (euroValor) => {
    return euroValor*1.07;
}

let fromYenToPound = (yenValor) => {
    let euroValor = yenValor / 156.5;
    let poundValor = euroValor*0.87;
    return poundValor
}
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };

