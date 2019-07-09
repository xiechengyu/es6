// Proxy进行预处理 可以理解为是函数或者对象的生命周期。
// 第一个花括号就相当于我们方法的主体，后边的花括号就是Proxy代理处理区域，相当于我们写钩子函数的地方。

// get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
// target：得到的目标值
// key：目标的key值，相当于对象的属性
// property：这个不太常用，用法还在研究中，还请大神指教。
// set属性

// set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。
// target:目标值。
// key：目标的Key值。
// value：要改变的值。
// receiver：改变前的原始值。

// var pro = new Proxy({
//   add: function (val) {  
//       return val + 10;
//   },
//   name: 'I am Jspang'
// }, {
//       get:function(target,key){
//           console.log('come in Get');// 在获取前
//           return target[key];
//       },
//       set:function(target,key,value,receiver){
//           console.log(`\tsetting ${key} = ${value}`);// 在设值前
//           return target[key] = value;
//       }

//   });

// // console.log(pro.name);
// pro.name='技术胖';
// console.log(pro.name);


// get = function () {
//   return 'I am JSPang';
// };
// var handler = {
//   apply(target, ctx, args) {
//       console.log('do apply');
//       return Reflect.apply(...arguments);
//   }
// }

// var pro = new Proxy(target, handler);

// console.log(pro());