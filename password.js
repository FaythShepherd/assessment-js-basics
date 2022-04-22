console.log("Welcome to the password validator tool!");

const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

reader.question("Please enter you password here", function(password){

	if (password.length >= 10){
		console.log("Successful");
  } else {
      console.log("oh on, that did not work honey!")
  }

  	console.log
	// This line closes the connection to the command line interface.
	reader.close()

});