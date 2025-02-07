"use strict"

totalGlobalVariable = "never ever do this!"

var globalVariable = "also never do this!"

	// global scope
	
	// rules:
	// always use const if you can get away with it
	// otherwise use let

function myFunction() {
    
}

//{
	// block scope
	var myValue = true;
	{
		var myValue = false;
	}
//	console.log(myValue};
//}

for (var i = 0; i <= 5; i++) {
	setTimeout(() => {
		console.log(i)
	}, 1000);
}



