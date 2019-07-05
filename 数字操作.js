let a= 11/4;
// 数字验证Number.isFinite( xx )
console.log(Number.isFinite(a));//true
console.log(Number.isFinite(Infinity));//false
console.log(Number.isFinite('jspang'));//falses
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
// 判断是否为整数Number.isInteger(xx)
let b=123.1;
console.log(Number.isInteger(b)); //falseg