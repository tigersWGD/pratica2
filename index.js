function calcularMedia(arr) {
    if (arr.length === 0) return 0;
    const soma = arr.reduce((total, valor) => total + valor, 0);
    return soma / arr.length;
}
function calcularMediana(arr) {
    if (arr.length === 0) return 0;
    const sorted = arr.sort((a, b) => a - b);
    const meio = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (sorted[meio - 1] + sorted[meio]) / 2;
    } else {
        return sorted[meio];
    }
}
function calcularModa(arr) {
    if (arr.length === 0) return [];
    const frequencia = {};
    arr.forEach(element => {
        frequencia[element] = (frequencia[element] || 0) + 1;
    });
    let moda = [];
    let maxFrequencia = 0;
    for (const key in frequencia) {
        if (frequencia[key] > maxFrequencia) {
            moda = [parseInt(key)];
            maxFrequencia = frequencia[key];
        } else if (frequencia[key] === maxFrequencia) {
            moda.push(parseInt(key));
        }
    }
    return moda;
}

let numeros = [1, 11, 2, 2]
console.log(calcularModa(numeros))