//core data types: number, string, boolean, object, arrays, tuples, enums
//primitive types: number, string, boolean, object, arrays,
//custom  types: tuples, enums

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
	let result = n1 + n2;
	if (showResult) {
		console.log(phrase + result);
	} else {
		return n1 + n2;
	}
}

//type inference

const printResult = true;
const resPhrase = 'The result is: ';

// const result = add(1,2.66);
//! const result1 = add('12',2.66);
//console.log(add(2,66, printResult));

add(4, 6.77, printResult, resPhrase);
