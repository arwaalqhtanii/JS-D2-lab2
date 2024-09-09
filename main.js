
//q1
let numbers = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];
numbers.sort((a, b) => a - b);
console.log(  ` the sort :`, numbers); 
//2

let squaredNumbe = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];
let squares = squaredNumbe.map(numb => numb * numb);
console.log( ` the squars :`,squares); 



//3
let numberss = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10, 25, 39, 100];
let firstGreater25 = numberss.find(num => num > 25);
console.log( ` the graeter 25 :`,firstGreater25); 
//4
let allGreaterThan5 = numbers.every(num => num > 5);
console.log(' grater 5:', allGreaterThan5);

//5
let containsThree = numbers.includes(3);
console.log('arry  3:', containsThree);
 
//6
function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}
let evenNumbers = getEvenNumbers(numbers);
console.log('the even num:', evenNumbers);


//7
function removeMiddleElements(arr) {
    let midIndex = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        arr.splice(midIndex - 1, 2);
    } else {
        arr.splice(midIndex, 1); 
    }
    return arr;
}
let updatedNumbers = removeMiddleElements([...numbers]); 
console.log('delet middle:', updatedNumbers);
//8
let product = numbers.reduce((acc, num) => acc * num, 1);
console.log('all * :', product);
//9
let indexGreaterThan5 = numbers.findIndex(num => num > 5);
console.log(':', indexGreaterThan5);

// 10
let numbe = [1, 5, 3, 8, 2, 4, 6, 7, 9, 10];
let lastElement = numbe.pop();
console.log(' last elmint:', lastElement);
console.log('after delet:', numbe);

// 11
numbers.push(100);
console.log('add 100 :', numbers);

//12

let names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
let namesA = [];
for (let i = 0; i < names.length; i++) {
    if (names[i].toLowerCase().includes('a')) {
        namesA.push(names[i]);
    }
}
console.log('name with  "a":', namesA);
let namesString = namesA.join('-');
console.log('   string is :', namesString);


//13

let fruits = ['apple', 'banana', 'cherry', 'date', 'elephant', 'bird', 'lion'];
let nameB = fruits.some(fruit => fruit.startsWith('b'));
console.log(' name with "b":', nameB);
let Fruit = fruits.slice(1, 4);
console.log('the item from 2 to 4:', Fruit);
fruits.unshift('yellow');
console.log('after add yellow :', fruits);

//14


let words = ['hello', 'world', 'javascript', 'array', 'function'];
let lengths = [];
for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
}
console.log('length for word :', lengths);
let javascript = 'javascript';
let found = false;

for (let i = 0; i < words.length; i++) {
    if (words[i] === javascript) {
        console.log(' the item is found :', words[i]);
        found = true;
        break; 
    }
}
if (!found) {
    console.log(' the item is not found ');
}