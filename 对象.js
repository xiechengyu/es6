// 有时候我们会在后台取出key值，而不是我们前台定义好的，这时候我们如何构建我们的key值那。
// 比如我们在后台取了一个key值，然后可以用[ ] 的形式，进行对象的构建。
let key = 'haha';
let value = 'heihei'
var obj = {
  [key]: 'web',
  [value]: 'demo'
}
// console.log(obj.heihei);

// 用Object.is()方法进行对比
// ===为同值相等，is()为严格相等。
var obj1 = { name: 'jspang' };
var obj2 = { name: 'jspang' };
// console.log(obj1.name === obj2.name);//true
// console.log(Object.is(obj1.name,obj2.name)); //true

// Object.assign( )合并对象
// 操作数组时我们经常使用数组合并，那对象也有合并方法，那就是assgin( )。看一下啊具体的用法。

var a = { a: 'jspang' };
var b = { b: '技术胖' };
var c = {
  c: 'web',
  d: 'heihei'
};

let d = Object.assign(a, c, b)
console.log(d);