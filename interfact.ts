interface IPerson {
  readonly id: number; // 只读 用在属性上
  name: string;
  age: number;
  gender: 1 | 2;
}

let zonghua: IPerson = {
  id: 123,
  name: 'zonghua',
  age: 20,
  gender: 1
};
