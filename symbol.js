// var f= Symbol();
// console.log(typeof(f));

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

// var jspang = Symbol();
// var obj={
//     [jspang]:'技术胖'
// }
// console.log(obj[jspang]);
// obj[jspang]='web';
// console.log(obj[jspang]);


// var obj={name:'jspang',skill:'web',age:18};
 
// for (let item in obj){
//     console.log(obj[item]);
// }

// let obj1={name:'jspang',skill:'web'};
// let age=Symbol();
// obj1[age]=18;
// for (let item in obj1){
//     console.log(obj1[item]);
// } 
// console.log(age);

const log = {};

log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
};
console.log(log.levels.DEBUG, 'debug message');
console.log(log.levels.INFO, 'info message');

const COLOR_RED    = Symbol();
const COLOR_GREEN  = Symbol();

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN;
    case COLOR_GREEN:
      return COLOR_RED;
    default:
      throw new Error('Undefined color');
    }
}
// 常量使用 Symbol 值最大的好处，就是其他任何值都不可能有相同的值了，因此可以保证上面的switch语句会按设计的方式工作。