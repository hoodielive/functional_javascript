# functional_javascript
Functional Javascript Basics and Libraries 

## Beware of Hype 
+ Often this is the wrong reason to pick a technology! 
+ Learn for edification and usefulness relative to your technological goals 
+ Why functional programming?
	+ Predictable 
	+ Modular (composability) 
	+ Safe (side-effect free, won't change in unexpected/unanticipated ways - its very deliberate) 

+ Key Terms and Concepts
	+ Pure Functions
	+ Composition
	+ Currying
	+ Immutable Data
	+ Closure 

+ Pure Function Contingenices:
	+ Side-Effect free 
	+ Same Output
	+ No External Dependencies 
	
const func1 = (a, b) => a + b; // this is a pure function because:
	+ No side effects
	+ Same output for same input 
	+ no external dependecies 

const c = 5; 
const func2 = (a,b) => a + b + c; // not pure because:
	+ it creates a dependency on an external variable (c) and will not give the same output if c were to change 

const func3 = (a,b) => a + b + func1(a, b); // this is not a pure function because:
	+ it creates a dependency on func1 and if that function changes, so does the output 

const e = 5; 
const func4 = (a, b) => {
  e = a + b; 
}; // is impure because it:
	+ creates a side-effect (changing the value of e which outside of the function) 
	+ doesn't return anything if can't or won't return anything: then why call it? functions are subtypes (callable objects) 
		+ to not return something from a function is a waste of cycles 

const func5 = (a, b) => {
  console.log(a + b);
}; // impure because it:
	+ changes the console *external dependency* 

const func6 = (a, b) => {
  func1(a, b);
  return a + b;
}; // impure because:
	+ it depends on something outside of the function it self which is (variable) 
	+ you can't be sure that func1 won't produce a side-effect

