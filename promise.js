// Promis在现在的开发中使用率算是最高的，而且你面试前端都会考这个对象，一定要掌握好

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

const b = 1,
      c = 3
function ss(){
  var a = new Promise((b,c) => {
    if(b<c){
      return 0
    }else{
      return 1
    }
  }).then((val) => {
    console.log(val)
  }).catch((e) => {
    console.log("错误")
  })
  return a
}
ss()
