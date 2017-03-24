// function add(a,b,c){
//   return a + c;
// }
// console.log(add(2, 3, 5));
//
// var toAdd = [9, 5, 6];
// console.log(add(...toAdd));

// var groupA = ['John', 'Cory'];
// var groupB = ['Matt'];
// var final = [...groupB, 3, ...groupA];
// console.log(final);

var person = ['Andrew', 25];
var personTwo = ['Jen', 29];

function greet(name, age) {
  console.log('Hi'+name+ ', you are '+age);
}

greet(...person);
greet(...personTwo);

var names = ['Mike', 'Ben'];
var final = ['Andy', ...names];

final.forEach(function (name){
  console.log('Hello'+ name);
});
