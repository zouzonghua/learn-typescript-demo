let isDone: boolean = false;

let age: number = 20;

let binaryNumber: number = 0b1111;

let firstName: string = 'zonghua';

let message: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;

let n: null = null;

let num: number = undefined;

let notSure: any = 4;
notSure = 'xxx';
notSure = true;

// 联合类型
let numberOrString: number | string;
numberOrString = 111;
numberOrString = 'abc';

// 数组
let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(1);

// 类数组
function test() {
  console.log(arguments);
}

// 元组
let user: [string, number] = ['zonghua', 20];
