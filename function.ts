// 函数声明
function add(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

let result = add(1, 2);

// 函数表达式
const add1 = function(x: number, y: number, z?: number): number {
  if (typeof z === 'number') {
    return x + y + z;
  } else {
    return x + y;
  }
}

const add2:(x: number, y: number, z?: number) => number = add1
