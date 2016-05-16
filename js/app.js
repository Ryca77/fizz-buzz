$(document).ready(function() {

function fizzBuzz1() {
for (var fbGame = 1; fbGame <= 100; fbGame++) {
	if (fbGame % 3 === 0 & fbGame % 5 === 0) {
		console.log('fizzbuzz');
	}
	else if (fbGame % 3 === 0) {
		console.log('fizz');
	}
	else if (fbGame % 5 === 0) {
		console.log('buzz');
	}
	else {
		console.log(fbGame);
	}
}
}
fizzBuzz1();


function fizzBuzz2() {

var result = "";
  
for (var fbGame = 1; fbGame <= 100; fbGame++) {
    if (fbGame % 3 === 0 && fbGame % 5 === 0) {
      result += "fizzbuzz ";
    }
    else if (fbGame % 3 === 0) {
      result += "fizz ";
    }
    else if (fbGame % 5 === 0) {
      result += "buzz ";
    }
    else {
      result += fbGame + " ";
    }
  }
return result;
}
console.log(fizzBuzz2());

document.write(fizzBuzz2());

});