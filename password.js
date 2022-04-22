console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter you password here", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);

	if (mathSymbol === "+"){
		console.log(num1 + num2);
  } else if (mathSymbol === "-"){
		console.log(num1 - num2);
  } else if (mathSymbol === "/"){
	  	console.log(num1 / num2);
  } else if (mathSymbol === "*"){
	  	console.log(num1 * num2);
  } else if (mathSymbol === "%"){
	  	console.log(num1 % num2);
  } else {
	  console.log("Sorry, please try again")
  }

  	console.log
	// This line closes the connection to the command line interface.
	reader.close()

});