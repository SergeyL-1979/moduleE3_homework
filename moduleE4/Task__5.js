// Почему это соответствует требованиям:
// Имена классов, свойств и методов информативные:
// Классы — ElectricalAppliance, DeskLamp, Computer.
// Методы и свойства полностью описывают свою функцию: plugIn, unplug, adjustBrightness, installSoftware, getTotalPower, name, power, isPlugged, color, type, brand.
// Best practices:
// camelCase — для методов и свойств.
// PascalCase — для названий классов.
// Никаких сокращений и неясных имён.
// Используется синтаксис ES6:
// Классы и наследование (class, extends, super)
// Стрелочная функция для getTotalPower
// Шаблонные строки
// Родительский класс для электроприборов
class ElectricalAppliance {
    constructor(name, power) {
      this.name = name;          // Название прибора
      this.power = power;        // Мощность в ваттах
      this.isPlugged = false;    // Включен ли прибор в розетку
    }
  
    plugIn() {
      this.isPlugged = true;
      console.log(`${this.name} включен в розетку.`);
    }
  
    unplug() {
      this.isPlugged = false;
      console.log(`${this.name} выключен из розетки.`);
    }
  }
  
  // Класс для настольной лампы
  class DeskLamp extends ElectricalAppliance {
    constructor(name, power, color) {
      super(name, power);
      this.color = color;       // Цвет лампы
      this.type = 'настольная лампа';
    }
  
    adjustBrightness(level) {
      console.log(`${this.name}: яркость установлена на уровень ${level}.`);
    }
  }
  
  // Класс для компьютера
  class Computer extends ElectricalAppliance {
    constructor(name, power, brand) {
      super(name, power);
      this.brand = brand;       // Бренд компьютера
      this.type = 'компьютер';
    }
  
    installSoftware(softwareName) {
      console.log(`${this.name}: программа "${softwareName}" установлена.`);
    }
  }
  
  // Создание экземпляров приборов
  const lamp = new DeskLamp('Лампа Xiaomi', 12, 'белая');
  const pc = new Computer('ПК ASUS', 350, 'ASUS');
  
  // Использование методов и свойств
  lamp.plugIn();
  lamp.adjustBrightness(3);
  
  pc.plugIn();
  pc.installSoftware('Visual Studio Code');
  
  lamp.unplug();
  
  console.log('\n--- Итоги ---');
  
  // Функция для подсчёта общей мощности включённых приборов
  const getTotalPower = (devices) =>
    devices.filter(device => device.isPlugged).reduce((sum, device) => sum + device.power, 0);
  
  const devices = [lamp, pc];
  console.log(`Общая потребляемая мощность: ${getTotalPower(devices)} Вт`);
  
  console.log('\nИнформация о приборах:');
  devices.forEach(device => console.log(device));
  