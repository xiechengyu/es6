// 只要是这种特殊的json格式都可以轻松使用ES6的语法转变成数组
let  json = {
  '0': 'jspang',
  '1': '技术胖',
  '2': '大胖逼逼叨',
  length:3
}
// let arr=Array.from(json);
// console.log(arr)

// 把一堆数据转成数组
// let arr =Array.of('技术胖','jspang','大胖逼逼叨',{s:11},88,[22,'fff']);
// console.log(arr);

// 这里的0指的是数组下标位置是否为空
let arr=[,,,,,];
console.log(0 in arr); //false
 
let arr1=['jspang','技术胖'];
console.log(0 in arr1);  // true