// function add(a,b=1){
   
//   if(a == 0){
//       throw new Error('This is error')
//   }
//    return a+b;
// }

// console.log(add(0));


let json = {
  a:'jspang',
  b:'技术胖'
}
// 默认值的用法 以及对象解构
function fun({a,b='jspang'}){
  console.log(a,b);
}
fun(json);