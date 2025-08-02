class PowerCalculator {
    // Конструктор можно опустить, если не требуется сохранять состояние
    static pow(base, exponent) {
      if (!Number.isInteger(base) || !Number.isInteger(exponent) || exponent < 0) {
        throw new Error('Аргументы должны быть натуральными числами, а степень — неотрицательной');
      }
  
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  }
  
  // Демонстрация работы в консоли:
  try {
    console.log(PowerCalculator.pow(2, 3)); // 8
    console.log(PowerCalculator.pow(5, 2)); // 25
    console.log(PowerCalculator.pow(3, 4)); // 81
    // console.log(PowerCalculator.pow(2, -1)); // Бросит ошибку
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
  