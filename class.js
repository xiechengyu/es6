// ES6 的class可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的class写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }
// Point.prototype.toString = function () {
//   return '(' + this.x + ', ' + this.y + ')';
// };
// var p = new Point(1, 2);

// class Point {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return '(' + this.x + ', ' + this.y + ')';
//   }
// }


// 类的内部所有定义的方法，都是不可枚举的
// Object.keys(Point.prototype)
// []
// Object.getOwnPropertyNames(Point.prototype)
// ["constructor","toString"]

// constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。
// 一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

// 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

// 与 ES5 一样，实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。


// 可以通过实例的__proto__属性为“类”添加方法但是不推荐使用，推荐使用Object.getPrototypeOf 方法来获取实例对象的原型，然后再来为原型添加方法/属性。



// 与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

class MyClass {
  constructor() {
    // ...
  }
  get prop() {
    return 'getter';
  }
  set prop(value) {
    console.log('setter: '+value);
  }
}

let inst = new MyClass();

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'
// 上面代码中，prop属性有对应的存值函数和取值函数，因此赋值和读取行为都被自定义了。



// 类的属性名，可以采用表达式。
// let methodName = 'getArea';

// class Square {
//   constructor(length) {
//     // ...
//   }

//   [methodName]() {
//     // ...
//   }
// }