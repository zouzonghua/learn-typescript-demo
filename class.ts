class Animal {
  // public name: string; // 公开属性
  // private name: string; // 子类不能访问
  // protected name: string; // 子类能访问
  readonly name: string; // 只读
  static category: string[] = ['mammal', 'bird']; // 静态属性
  static isAnimal(a) {
    return a instanceof Animal;
  } // 静态方法
  constructor(name: string) {
    this.name = name;
  }
  run() {
    return `${this.name} is running`;
  }
}

const snake = new Animal('snake');
console.log(snake.run());

class Dog extends Animal {
  bark() {
    return `${this.name} is barking`;
  }
}

const dog = new Dog('dog');
console.log(dog.run());
console.log(dog.bark());

class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  // 重写父类方法
  run() {
    return 'Meow, ' + super.run();
  }
}

const cat = new Cat('cat');
console.log(cat.run());


// 功能提取接口实现
interface Radio {
  switchRadio(): void;
}

interface Battery {
  checkBatteryStatus():void;
}

// 接口继承
interface RadioWiteBattery extends Radio {
  checkBatteryStatus():void;
}

class Car implements Radio{
  switchRadio() {}
}

class Phone implements Radio, Battery {
  switchRadio() {}
  checkBatteryStatus() {}
}

class Phone1 implements RadioWiteBattery {
  switchRadio() {}
  checkBatteryStatus() {}
}
