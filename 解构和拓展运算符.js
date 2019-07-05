// const a = (...arg) => {
//   return arg
// }
// const b = a(1,2,3,{
//   b:11,
//   c:22
// })
// console.log(b[3].c)
let arr1=['www','jspang','com'];
let arr2=[...arr1];
console.log(arr2);
arr2.push('shengHongYu');
console.log(arr1);
console.log(arr2);