function echo<T>(arg: T): T {
  return arg;
}

const result = echo(124);
const result1 = echo('124');

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

const result2 = swap(['string', 123]);

function echoWithArray<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

const arr = echoWithArray([1, 23]);

interface IWithLength {
  length: number;
}

// 传入值满足我们的约束条件，而不是想传入啥就传啥
function echoWithLength<T extends IWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}

const str = echoWithLength('xxx');
const obj = echoWithLength({ length: 1 });
const arr1 = echoWithLength([1, 2, 3]);
