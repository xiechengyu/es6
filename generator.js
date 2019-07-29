// 调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。
// value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。

// function* foo(x, y) { ··· }

// yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行

// Generator 可以独立使用 yield 不可以

// yield表达式如果用在另一个表达式之中，必须放在圆括号里面
// function* demo() {
//   console.log('Hello' + yield); // SyntaxError
//   console.log('Hello' + yield 123); // SyntaxError

//   console.log('Hello' + (yield)); // OK
//   console.log('Hello' + (yield 123)); // OK
// }


var myIterable = {};
myIterable[Symbol.iterator] = function* () {
  yield 1;
  yield 2;
  yield 3;
};

console.log([...myIterable]) // [1, 2, 3]
// 上面代码中，Generator 函数赋值给Symbol.iterator属性，从而使得myIterable对象具有了 Iterator 接口，可以被...运算符遍历了。