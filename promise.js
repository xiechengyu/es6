// Promis在现在的开发中使用率算是最高的，而且你面试前端都会考这个对象，一定要掌握好
// 避免回调地狱

// let state=1;
 
// function step1(resolve,reject){
//     console.log('1.开始-洗菜做饭');
//     if(state==1){
//         resolve('洗菜做饭--完成');
//     }else{
//         reject('洗菜做饭--出错');
//     }
// }
 
 
// function step2(resolve,reject){
//     console.log('2.开始-坐下来吃饭');
//     if(state==1){
//         resolve('坐下来吃饭--完成');
//     }else{
//         reject('坐下来吃饭--出错');
//     }
// }
 
 
// function step3(resolve,reject){
//     console.log('3.开始-收拾桌子洗完');
//      if(state==1){
//         resolve('收拾桌子洗完--完成');
//     }else{
//         reject('收拾桌子洗完--出错');
//     }
// }
 
// new Promise(step1).then(function(val){
//     console.log(val);
//     return new Promise(step2);
 
// }).then(function(val){
//      console.log(val);
//     return new Promise(step3);
// }).then(function(val){
//     console.log(val);
//     return val;
// }).catch(function(e){
//   console.log(e)
// })

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// });



//先执行 resove  否则执行reject

// 三个状态 pending fullfilled rejected



// const p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// const p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2
//   .then(result => console.log(result))  // p1中返回的reject无法接受 传递到catch
//   .catch(error => console.log(error))
// Error: fail

// 注意，调用resolve或reject并不会终结 Promise 的参数函数的执行。

new Promise((resolve, reject) => {
  resolve(1);
  console.log(2);
}).then(r => {
  console.log(r);
});

// 一般来说，不要在then方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

// Promise 内部的错误不会影响到 Promise 外部的代码，通俗的说法就是“Promise 会吃掉错误”


// Promise.prototype.finally()  不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数
// finally相当于执行用resolve和reject执行同一段代码



// Promise.all(p1,p2,p3)
// （1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。
// （2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数
// 如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，并不会触发Promise.all()的catch方法。

// Promise.race(p1,p2,p3)
// 只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

// Promise.resolve()
// 将现有对象转为 Promise 对象 返回是resolve

// Promise.resolve()
// 将现有对象转为 Promise 对象 返回是reject