const hobbies = ['Sports', 'Cooking'];

for (let hobby of hobbies){
    console.log(hobby);
}

console.log(hobbies.map(hobby => 'Hobby : ' + hobby));
console.log(hobbies);

hobbies.push('Programming');  // reference type이므로 const임에도 추가 가능 
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

const nestedArray = [...hobbies]; // spread operator(...) : 기존의 element값만 가져와 새로운 array를 만듦 
console.log(nestedArray);

// rest operators

// argument가 3개일 경우만 사용가능. 그 이상일 경우는? argument의 갯수를 모르는 경우는?
// const toArray = (arg1, arg2, arg3) => {
//     return [arg1, arg2, arg3];
// };

const toArray = (...args) => { // rest operator
    return args;
}

console.log(toArray(1, 2, 3));
console.log(toArray(1, 2, 3, 4, 5, 6));

