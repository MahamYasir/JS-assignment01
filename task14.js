var a = 2, b = 1;
// var a = 2;      //1
// var b = 1;      //0 / 1 /0
var result = --a - --b + ++b + b--;   //3
// var result = 1 - 0 + 1 + 1;     
 
document.write('a is' + a);
document.write('<br> b is ' + b);
document.write('<br> result is ' + result);

/* Output at each stage:
--a; 1
--a - --b; 1 - 0 = 1
--a - --b + ++b; 1 - 0 + 1 = 2
--a - --b + ++b + b--; 1 - 0 + 1 + 1 = 3 */



