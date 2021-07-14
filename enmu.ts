enum Direction { // 计算值不能使用 const
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// 常量枚举
const enum Direction1 { // 常量值
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

console.log(Direction.Up);
console.log(Direction[0]);

let value = 'Up';

if (value === Direction.Up) {
  console.log('go up!');
}

