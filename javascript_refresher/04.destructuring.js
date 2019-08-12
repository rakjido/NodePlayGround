const person = {
    name : 'Max',
    age : 29, 
    greet() {
        console.log('Hello, I am ' + this.name);
    }    
};

// const printName = (personData) => {
//     console.log(personData.name);
// }

// object destructuring : { }
const printName = ({name}) => {
    console.log(name);
} 

printName(person);

// object destructuring
const {name, age} = person;
console.log(name, age);

// array destructure
const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);