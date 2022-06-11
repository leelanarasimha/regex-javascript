let text = 'Hello world leela';

let regex1 = new RegExp('hello');
let regex2 = /world/;
let regex3 = /\s/;

console.log(regex1.test(text)); //true
console.log(regex2.test(text)); //true

console.log(regex2.exec(text));

//String Methods

console.log(text.match(regex2));

console.log(text.search(regex2));

console.log(text.replace(regex2, 'globe'));

console.log(text.split(regex3));
