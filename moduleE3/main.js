// E3.2. Функции без параметров
function countEvenOddZero(arr) {
    let evenCount = 0;
    let oddCount = 0;
    let zeroCount = 0;
  
    for (const el of arr) {
      if (typeof el === 'number' && !isNaN(el)) {
        if (el === 0) {
          zeroCount++;
        } else if (el % 2 === 0) {
          evenCount++;
        } else {
          oddCount++;
        }
      }
    }
  
    console.log(`Четных элементов: ${evenCount}`);
    console.log(`Нечетных элементов: ${oddCount}`);
    console.log(`Нулевых элементов: ${zeroCount}`);
  }
  
  // Пример вызова функции:
  const exampleArray = [1, 2, 3, 0, 4, null, 0, "a", undefined, 7, 8, false, NaN];
  countEvenOddZero(exampleArray);
  // =================================================================================

// E3.4. Параметры и возвращаемое значение
// Объяснение:
//  - Функция называется checkPrimeNumber — информативно.
//  - Проверяется, что число не больше 1000 и является числом.
//  - 0 и 1 не считаются простыми.
//  - Проверка простоты числа идет до квадратного корня (быстрее, чем до самого числа).
//  - Результат выводится в консоль: простое или нет, либо сообщение об ошибке ввода.
function checkPrimeNumber(num) {
// Проверка на корректность диапазона
if (typeof num !== 'number' || !isFinite(num) || num > 1000) {
    console.log('Данные неверны');
    return;
}
if (num < 2) {
    console.log('Число не является простым');
    return;
}

// Проверка на простое число
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
    console.log('Число не является простым');
    return;
    }
}
console.log('Число является простым');
}

// Примеры вызова:
checkPrimeNumber(7);    // Число является простым
checkPrimeNumber(10);   // Число не является простым
checkPrimeNumber(0);    // Число не является простым
checkPrimeNumber(1001); // Данные неверны
checkPrimeNumber(997);  // Число является простым
// =============================================================

// E3.5. Функции высшего порядка
// Кратко о синтаксисе:
// createAdder — функция, принимающая число x.
// Она возвращает новую функцию, принимающую число y.
// Эта внутренняя функция возвращает сумму x и y.
// Пример:
// createAdder(5) создаёт функцию, которая к любому числу прибавит 5.
// addFive(7) даст 12.
function createAdder(x) {
    return function(y) {
      return x + y;
    };
  }
  
  // Пример использования:
  const addFive = createAdder(5); // addFive — это функция, прибавляющая 5 к переданному числу
  const result = addFive(7); // 5 + 7 = 12
  
  console.log(result); // 12
  
  // Можно сразу вызвать:
  console.log(createAdder(10)(3)); // 13
// Если нужна стрелочная версия, она будет выглядеть так:
const createAdder = x => y => x + y;
console.log(createAdder(2)(8)); // 10
// =============================================================================

// E3.7. Функции обратного вызова
// Как это работает:
// Функция printNumbersInterval принимает два числа: начальное (from) и конечное (to).
// Внутри создаётся переменная current, которая изначально равна from.
// С помощью setInterval каждую секунду (1000 мс) в консоль выводится текущее значение.
// После вывода увеличиваем current на 1.
function printNumbersInterval(from, to) {
    let current = from;
  
    const timerId = setInterval(() => {
      console.log(current);
      if (current === to) {
        clearInterval(timerId); // Останавливаем, когда дошли до "to"
      }
      current++;
    }, 1000);
  }
  
// Пример вызова:
printNumbersInterval(5, 15);
// ==============================================================================

// E3.8. Функции в ES6
// Кратко:
// Стрелочная функция pow принимает x и n.
// Используется цикл для умножения x на себя n раз.
// Возвращается результат.
const pow = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  };
  
  // Примеры вызова:
  console.log(pow(2, 3)); // 8
  console.log(pow(5, 2)); // 25
  console.log(pow(3, 4)); // 81
  