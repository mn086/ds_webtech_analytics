let myNumber = 123;
console.log(typeof myNumber);

const cs = 'ABC';

myNumber = '123';
console.log(typeof cs);

let a = 50;
let b = '50';

console.log(a == b);
console.log(a === b);

const namex = 'Chris';
const greeting = `Hello, ${namex}`;
console.log(greeting); // "Hello, Chris"

const birds = ['Parrot', 'Falcon', 'Owl'];

for (const bird of birds) {
    console.log(bird);
}

function double(number) {
    return number * 2;
}
  
const numbers = [5, 2, 7, 6];
const doubled = numbers.map(double);
console.log(doubled); // [ 10, 4, 14, 12 ]

function isLong(city) {
    return city.length > 8;
}
  
const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer); // [ "Liverpool", "Edinburgh" ]

let arr = [1, 2, 3, 4, 5];
arr.length = 10;
console.log(arr.length);
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
arr[42] = 42;
console.log(arr[42]);

console.log(arr.length);



