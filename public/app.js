var print = require('./print');
var calculator = require('./calculator');
var colors = require('colors');

//print('did this work');
//
// console.log(calculator.add(1,2));
// console.log(calculator.substract(5,2));
// console.log(calculator.divide(10,2));
// console.log(calculator.multiple(4,2));


console.log('first some yellow text'.yellow);
console.log('underline text'.underline.yellow);
console.log('bold red'.bold.red);
console.log('Double rainbows'.rainbow);
console.log('Drop the ball'.trap);
console.log('Drop the ball rainbox'.trap.rainbow);
console.log('bold red'.bold.red.underline);
console.log('So '.green + 'are'.underline +' '+ 'inverse'.inverse + ' '+ ' styles!'.yellow.bold);
console.log('Zebra'.zebra);
