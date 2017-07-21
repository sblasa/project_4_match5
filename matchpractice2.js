var somethingtoMatch = 10;

for(var i = 1; i <= 100; i++) {

	if(i % somethingtoMatch == 0) {
	
		console.log("MATCH ME!");
	} else {
		
		console.log(i);
	}


}