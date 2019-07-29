// async函数实际上是Generator函数的语法糖
// async function () 取代 function* ()
// await 取代 yield

const fs = require('fs');

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function(error, data) {
      if (error) return reject(error);
      resolve(data);
    });
  });
};

const gen = function* () {
  const f1 = yield readFile('/etc/fstab');
  const f2 = yield readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};
// 上面代码的函数gen可以写成async函数，就是下面这样。

const asyncReadFile = async function () {
  const f1 = await readFile('/etc/fstab');
  const f2 = await readFile('/etc/shells');
  console.log(f1.toString());
  console.log(f2.toString());
};

// async函数执行时不需要yield语句命令，直接类似于普通函数的调用

// async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。

// 进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。



// 函数声明
// async function foo() {}

// 函数表达式
// const foo = async function () {};

// 对象的方法
// let obj = { async foo() {} };
// obj.foo().then(...)

// Class 的方法
// class Storage {
//   constructor() {
//     this.cachePromise = caches.open('avatars');
//   }

//   async getAvatar(name) {
//     const cache = await this.cachePromise;
//     return cache.match(`/avatars/${name}.jpg`);
//   }
// }

// const storage = new Storage();
// storage.getAvatar('jake').then(…);

// 箭头函数
// const foo = async () => {};



// async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。
// 也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。



// 如果确实希望多个请求并发执行，可以使用Promise.all方法。当三个请求都会resolved时，下面两种写法效果相同。

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = await Promise.all(promises);
  console.log(results);
}

// 或者使用下面的写法

async function dbFuc(db) {
  let docs = [{}, {}, {}];
  let promises = docs.map((doc) => db.post(doc));

  let results = [];
  for (let promise of promises) {
    results.push(await promise);
  }
  console.log(results);
}