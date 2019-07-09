// let setArr = new Set(['jspang','技术胖','web','jspang','jspang']);
// console.log(setArr);//Set {"jspang", "技术胖", "web"}

// 增
// setArr.add('hahahah')
// console.log(setArr)

// 删
// setArr.delete('web')
// console.log(setArr)

// 查
// console.log(setArr.has('web'))

// for (let item of setArr){
//   console.log(item);
// }

// size属性可以获得Set值的数量
// console.log(setArr.size)

// let setArr = new Set(['jspang','技术胖','web','jspang']);
// setArr.forEach((value)=>console.log(value));


// let weakObj = new WeakSet();
// let obj = { a: 'jspang', b: '技术胖' }
// weakObj.add(obj);

// console.log(weakObj);

// 使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===），主要的区别是向 Set 加入值时认为NaN等于自身，而精确相等运算符认为NaN不等于自身。

// Array.from方法可以将 Set 结构转为数组。
// 可用于数组去重
const items = new Set([1, 2, 3, 4, 5, 3, 3]);
const array = Array.from(items);
console.log(array)
// 扩展运算符和 Set 结构相结合，也可以去除数组的重复成员。
let arr = [3, 5, 2, 2, 5, 5];
let unique = [...new Set(arr)];
console.log(unique)

// 因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}

// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}

// 差集
let difference = new Set([...a].filter(x => !b.has(x)));
// Set {1}
// 如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用Array.from方法。

// 方法一
let set = new Set([1, 2, 3]);
set = new Set([...set].map(val => val * 2));
// set的值是2, 4, 6

// 方法二
let set = new Set([1, 2, 3]);
set = new Set(Array.from(set, val => val * 2));
// set的值是2, 4, 6
// 上面代码提供了两种方法，直接在遍历操作中改变原来的 Set 结构。