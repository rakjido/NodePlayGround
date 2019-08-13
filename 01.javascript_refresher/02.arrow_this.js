const person = {
    name : 'Max',
    age : 29, 
    greet: function() {
        console.log('Hello, I am ' + this.name); // bind to object called
    },

    greet2: ()=> {
        console.log('Hello, I am ' + this.name); // bind to global
    }
    
};

person.greet();
person.greet2();

const person2 = {...person};
console.log(person2);