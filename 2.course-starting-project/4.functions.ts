//Function return types & void
//Let TS do its job with 'inference'
//Function as Types

function add(n1: number, n2: number): number {
	return n1 + n2;
}

//void: doesn't return anything
// void, undefined (yes, a valid one)
function printResult(num: number): void {
	console.log('Result: ' + num);
}


printResult(add(5, 12));

let combineValues: (a: number, b: number) => number; // each parameter is a number, and the return type is a number.
// combineValues = printResult()
combineValues = add;

console.log(combineValues(8, 8));

//! Function types and callbacks
function addHandle(n1: number, n2: number, cb: (num:number)=>void){
    const res = n1 + n2;
    cb(res);
}
addHandle(23,24,(res)=>{
    console.log(res);
    //return res; //Does nuffin!
    
})
