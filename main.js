const power = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result *= x;
    }
    return result;
};

// Пример использования
const base = 2;
const exponent = 5;
const result = power(base, exponent);
console.log(`${base} в степени ${exponent} равно ${result}`); // Выведет: 2 в степени 5 равно 32
