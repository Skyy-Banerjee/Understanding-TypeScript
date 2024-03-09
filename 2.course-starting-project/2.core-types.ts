//object types, arrays types, tuple types, enum types

// const person: {
// 	name: string;
// 	age: number;
// } = {
//! tuples    
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]; //tuples, psuh() is allowed
// } = {

//! Enums
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {ADMIN=5, READ_ONLY, AUTHOR}; //5,6,7 also can mix it up


const person = {
	name: 'Skyy',
	age: 28,
	hobbies: ['Music', 'Reading'],
	// role: ADMIN
    role: Role.ADMIN,
};

// if(role ===)

// let favActivities: string[]; //any[] for mixed arrays,but avoid it.
// favActivities = ['Music', 'Reading'];

//! any, when u dont know what kinda data to store
let favActivities: string[];
favActivities = ['Walking', 'Cycling',];

console.log('The name: ', person.name);

//for (const hobby of person.hobbies) {
//	console.log(hobby.toUpperCase());
	// console.log(hobby.map()); //Error!!!
//}
