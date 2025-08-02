// E4.3 Прототип и конструктор объекта
// Задание 1
// Функция, которая выводит в консоль все ключи и значения только собственных свойств объекта:
function printOwnProperties(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        console.log(`${key}: ${obj[key]}`);
      }
    }
  }
  
  // Пример:
  const animal = { name: 'cat', sound: 'meow' };
  const pet = Object.create(animal);
  pet.color = 'white';
  
printOwnProperties(pet);
// Выведет только color: white
// ============================================================================
// Задание 2
// Функция, которая проверяет наличие свойства с данным именем (среди собственных свойств объекта):
function hasOwnProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  
  // Пример:
  const car = { brand: 'Toyota', year: 2020 };
  
  console.log(hasOwnProperty(car, 'brand')); // true
  console.log(hasOwnProperty(car, 'toString')); // false
// ============================================================================
// Задание 3
// Функция, создающая пустой объект без прототипа:
function createPureObject() {
    return Object.create(null);
  }
  
  // Пример:
  const obj = createPureObject();
  console.log(Object.getPrototypeOf(obj)); // null
// =============================================================================

// E4.4 ООП в JS
// Родительская функция-конструктор
function ElectricalAppliance(name, power) {
    this.name = name;
    this.power = power;     // мощность (Вт)
    this.isPlugged = false; // по умолчанию прибор выключен
  }
  
  // Методы для включения и выключения
  ElectricalAppliance.prototype.plugIn = function() {
    this.isPlugged = true;
    console.log(`${this.name} включен в розетку.`);
  };
  
  ElectricalAppliance.prototype.unplug = function() {
    this.isPlugged = false;
    console.log(`${this.name} выключен из розетки.`);
  };
  
  // Конструктор настольной лампы
  function DeskLamp(name, power, color) {
    ElectricalAppliance.call(this, name, power); // наследуем свойства
    this.color = color;
    this.type = 'настольная лампа';
  }
  
  // Делегирование прототипа
  DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
  DeskLamp.prototype.constructor = DeskLamp;
  
  // Собственный метод
  DeskLamp.prototype.adjustBrightness = function(level) {
    console.log(`${this.name}: яркость установлена на ${level} уровень.`);
  };
  
  // Конструктор компьютера
  function Computer(name, power, brand) {
    ElectricalAppliance.call(this, name, power);
    this.brand = brand;
    this.type = 'компьютер';
  }
  
  // Делегирование прототипа
  Computer.prototype = Object.create(ElectricalAppliance.prototype);
  Computer.prototype.constructor = Computer;
  
  // Собственный метод
  Computer.prototype.installSoftware = function(softwareName) {
    console.log(`${this.name}: программа "${softwareName}" установлена.`);
  };
  
  // Создание экземпляров
  const lamp = new DeskLamp('Лампа Xiaomi', 12, 'белая');
  const pc = new Computer('ПК ASUS', 350, 'ASUS');
  
  // Использование методов
  lamp.plugIn();
  lamp.adjustBrightness(5);
  
  pc.plugIn();
  pc.installSoftware('Visual Studio Code');
  
  lamp.unplug();
  
  console.log('\n--- Итоги ---');
  
  // Подсчет общей мощности включённых приборов
  function getTotalPower(devices) {
    return devices
      .filter(device => device.isPlugged)
      .reduce((sum, device) => sum + device.power, 0);
  }
  
  const devices = [lamp, pc];
  console.log(`Общая потребляемая мощность: ${getTotalPower(devices)} Вт`);
  
  console.log('\nИнформация о приборах:');
  devices.forEach(device => console.log(device));
  
// ==== ES6 =====
// Родительский класс
// class ElectricalAppliance {
//     constructor(name, power) {
//       this.name = name;
//       this.power = power;         // мощность в ваттах
//       this.isPlugged = false;     // по умолчанию прибор выключен из розетки
//     }
  
//     plugIn() {
//       this.isPlugged = true;
//       console.log(`${this.name} включен в розетку.`);
//     }
  
//     unplug() {
//       this.isPlugged = false;
//       console.log(`${this.name} выключен из розетки.`);
//     }
//   }
  
//   // Потомок - настольная лампа
//   class DeskLamp extends ElectricalAppliance {
//     constructor(name, power, color) {
//       super(name, power);
//       this.color = color;
//       this.type = "настольная лампа";
//     }
  
//     adjustBrightness(level) {
//       console.log(`${this.name}: яркость установлена на уровень ${level}.`);
//     }
//   }
  
//   // Потомок - компьютер
//   class Computer extends ElectricalAppliance {
//     constructor(name, power, brand) {
//       super(name, power);
//       this.brand = brand;
//       this.type = "компьютер";
//     }
  
//     installSoftware(software) {
//       console.log(`${this.name}: программа "${software}" установлена.`);
//     }
//   }
  
//   // Экземпляры
//   const lamp = new DeskLamp("Лампа Xiaomi", 12, "белая");
//   const pc = new Computer("ПК ASUS", 350, "ASUS");
  
//   // Использование методов
//   lamp.plugIn();
//   lamp.adjustBrightness(4);
  
//   pc.plugIn();
//   pc.installSoftware("Visual Studio Code");
  
//   lamp.unplug();
  
//   console.log('\n--- Итоги ---');
  
//   // Подсчёт общей мощности включённых приборов
//   function calculateTotalPower(devices) {
//     return devices
//       .filter(device => device.isPlugged)
//       .reduce((sum, device) => sum + device.power, 0);
//   }
  
//   const devices = [lamp, pc];
//   console.log(`Общая потребляемая мощность: ${calculateTotalPower(devices)} Вт`);
  
//   console.log('\nИнформация о приборах:');
//   devices.forEach(device => console.log(device));
//   =====================================================================================
// Краткие пояснения:
// ElectricalAppliance — родительская функция-конструктор, содержит общие свойства и методы.
// DeskLamp и Computer — потомки, расширяют родителя собственными свойствами и методами.
// Используется делегирующая связь через Object.create.
// У каждого экземпляра свои свойства (color, brand и т.д.).
// Включаем/выключаем приборы, используем уникальные методы.
// Подсчитываем суммарную мощность включённых приборов.
// Всё по best practices: camelCase для методов, PascalCase для конструкторов.
// Родительская функция-конструктор
// function ElectricalAppliance(name, power) {
//     this.name = name;
//     this.power = power;         // мощность в ваттах
//     this.isPlugged = false;     // по умолчанию выключен из розетки
//   }
  
//   // Методы родителя
//   ElectricalAppliance.prototype.plugIn = function() {
//     this.isPlugged = true;
//     console.log(`${this.name} включен в розетку.`);
//   };
  
//   ElectricalAppliance.prototype.unplug = function() {
//     this.isPlugged = false;
//     console.log(`${this.name} выключен из розетки.`);
//   };
  
//   // Настольная лампа
//   function DeskLamp(name, power, color) {
//     ElectricalAppliance.call(this, name, power);
//     this.color = color;
//     this.type = "настольная лампа";
//   }
//   // Прототипная связь
//   DeskLamp.prototype = Object.create(ElectricalAppliance.prototype);
//   DeskLamp.prototype.constructor = DeskLamp;
  
//   // Свой метод для лампы
//   DeskLamp.prototype.adjustBrightness = function(level) {
//     console.log(`${this.name}: яркость установлена на уровень ${level}.`);
//   };
  
//   // Компьютер
//   function Computer(name, power, brand) {
//     ElectricalAppliance.call(this, name, power);
//     this.brand = brand;
//     this.type = "компьютер";
//   }
//   // Прототипная связь
//   Computer.prototype = Object.create(ElectricalAppliance.prototype);
//   Computer.prototype.constructor = Computer;
  
//   // Свой метод для компьютера
//   Computer.prototype.installSoftware = function(software) {
//     console.log(`${this.name}: программа "${software}" установлена.`);
//   };
  
//   // Экземпляры
//   const lamp = new DeskLamp("Лампа Xiaomi", 12, "белая");
//   const pc = new Computer("ПК ASUS", 350, "ASUS");
  
//   // Используем методы
//   lamp.plugIn();
//   lamp.adjustBrightness(5);
  
//   pc.plugIn();
//   pc.installSoftware("Visual Studio Code");
  
//   lamp.unplug();
  
//   console.log('\n--- Итоги ---');
  
//   // Подсчет общей мощности включенных приборов
//   function calculateTotalPower(devices) {
//     return devices
//       .filter(device => device.isPlugged)
//       .reduce((sum, device) => sum + device.power, 0);
//   }
  
//   const devices = [lamp, pc];
//   console.log(`Общая потребляемая мощность: ${calculateTotalPower(devices)} Вт`);
  
//   console.log('\nИнформация о приборах:');
//   devices.forEach(device => console.log(device));
// ==============

// E4.5 ООП в ES6
class PowerCalculator {
    // Можно использовать статический метод, если не требуется создавать экземпляры
    static calculatePower(base, exponent) {
      if (!Number.isInteger(base) || !Number.isInteger(exponent) || exponent < 0) {
        throw new Error('Аргументы должны быть целыми числами, а степень — неотрицательной');
      }
      let result = 1;
      for (let i = 0; i < exponent; i++) {
        result *= base;
      }
      return result;
    }
  }
  
  // Пример использования:
  try {
    console.log(PowerCalculator.calculatePower(2, 3)); // 8
    console.log(PowerCalculator.calculatePower(5, 2)); // 25
    console.log(PowerCalculator.calculatePower(3, 4)); // 81
    // console.log(PowerCalculator.calculatePower(2, -1)); // Бросит ошибку
  } catch (error) {
    console.error('Ошибка:', error.message);
  }
  