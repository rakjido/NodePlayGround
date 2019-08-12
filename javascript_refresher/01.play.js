const name ='Max';
let age = 29;
const hashobbies = true;

//function summerizeUser(userName, userAge, userHasHobby) {

// 왜 arrow function을 사용하는가?

//const summerizeUser =  function(userName, userAge, userHasHobby) {

const summerizeUser =  (userName, userAge, userHasHobby) => {    
    return (
        'Name is ' + userName + ', age is ' + userAge + ' and user has hobbies:  ' + userHasHobby
    );
}

const add = (a,b) =>  a+b; 

console.log(summerizeUser(name, age, hashobbies));

console.log(add(1,2));

console.log(`Name is ${name} and age is ${age} and user has hobbies ${hashobbies}`);