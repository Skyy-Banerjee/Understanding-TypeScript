//! The 'unknown' type
//We ca store anything in there without encountering errors
//Opposite, better than 'any'

let userInput: unknown;
let userName: string;
userInput = 5;
userInput = 'Skyy';
//userName = userInput //! Error
//But..

if (typeof userInput === 'string') {
	userName = userInput;
}

//! The 'never' type

function generateErr(errMessage: string, errCode: number): never {
	throw { errMessage: errMessage, errCode: errCode };
	//Another fx to always return 'never' - infinite loops
}

//return type: never
const res = generateErr('Error Occured!', 500);
console.log(res);
