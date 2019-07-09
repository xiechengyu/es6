// map是一个高效的键值对 比json快

let json = {
  name:'jspang',
  skill:'web'
}
console.log(json.name);

var map=new Map();
// map.set(json,'iam');
// console.log(map);

// 增
map.set(json,'jspang');

// 取
console.log(map.get('jspang'));

// 删
// map.delete(json);


console.log(map.size);

// 查
console.log(map.has('jspang'))

// 清除
map.clear()

console.log(map)

let a = new Map([
  ["ss", 11],
  ["dd",22]
])
console.log(
  a.has("ss")
)

// Map 的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
// 这就解决了同名属性碰撞（clash）的问题，我们扩展别人的库的时候，如果使用对象作为键名，就不用担心自己的属性与原作者的属性同名。

// Map 结构转为数组结构，比较快速的方法是使用扩展运算符（...）。
let b = [...a]
console.log("b:",b)

