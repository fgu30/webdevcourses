var f = async function(){
  var x = 1;
  var y = await new Promise();
  var z = yield(x+y);
  return z;
}
const g = f()
var a = g.next();
console.log(a)

var b = g.next(10); 
console.log(b)

var c = g.next(12);
console.log(c)