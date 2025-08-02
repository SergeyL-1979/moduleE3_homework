const pow = (x, n) => {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  };
  
  console.log(pow(2, 3)); // Ожидается: 8
  console.log(pow(5, 2)); // Ожидается: 25
  console.log(pow(3, 4)); // Ожидается: 81
  