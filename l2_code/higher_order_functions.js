function takesAFunction(fn, z) {
	return fn('khu' + z); 
}

function returnsAFunction() {
	return function(param1) {
		console.log('hello ' + param1) 
	}
}

takesAFunction(returnsAFunction(), '!');
