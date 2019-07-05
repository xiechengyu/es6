// var f= Symbol();
// console.log(typeof(f));

// var g = Symbol('jspang');
// console.log(g);
// console.log(g.toString());

var jspang = Symbol();
var obj={
    [jspang]:'技术胖'
}
console.log(obj[jspang]);
obj[jspang]='web';
console.log(obj[jspang]);