var array = [1,2,3,4,5]
array.push(6)
console.log(array)
console.log(array.length)
console.log(array[2])
console.log(array[3])
console.log(array[0])


//join method
var array1 = array.join('-')
console.log(array1)
console.log(array.indexOf(2))
console.log(array.indexOf(6))
console.log(array.indexOf(8))

array.pop()
console.log(array)

let start = 4
let removedArray = array.splice(start)
console.log(array)
console.log(removedArray)

console.log(Array.isArray(array))

//Array.of
console.log(Array.of(5))
console.log(Array.of(1,2,3,4))
console.log(Array.of("Apple","Banana","Orange"))

console.log(Array(7))

//Length

let fruits = ["Apple","Banana","Orange","Pomogranate","Grapes"]
console.log(fruits.length)

let even = [2,4,6,8,10,12,14]
console.log(even.length)

let odd = new Array(6)
console.log(odd.length)
odd.push(1)
console.log(odd)

//Array.at(index) Gives the element present in that particular index

console.log(even.at(3))
console.log(fruits.at(-1))
console.log(fruits.at(5))
console.log(even.at(-8))

//concat

let smallLetters= ['a','b','c','d']
let capitalLetters = ['A','B','C','D']
console.log(smallLetters.concat(capitalLetters))

//copies part of an array to another location in the same array and returns it without modifying its length.
//copywithin()

console.log(smallLetters.copyWithin(0,2,3))
console.log(smallLetters.copyWithin(0,1,3))
console.log(capitalLetters.copyWithin(2,1,3))
console.log(capitalLetters.copyWithin(0,1,2))
console.log()

//The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array.
console.log(smallLetters)
const iterator1 = smallLetters.entries()
console.log(iterator1.next().value)

//The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
console.log(even.fill(1,2,4))
let prime = [1,3,5,7,9,11,13]
console.log(prime.fill(3,3))
console.log(prime)
console.log(prime.fill(7))

//filter
let result = even.filter(ev => ev > 2)
console.log(result)
console.log()

//find
let result1 = even.find(ev => ev < 10)
console.log(result1)

//findIndex
const isLargeNumber = (element) => element>2
console.log(even.findIndex(isLargeNumber))

//unshift  adds one or more elements beginning of the array
let evenResult = even.unshift(32,26)
console.log(even)
console.log()

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
even.shift()
console.log(even)

let ages = [21,31,41,51,61,71,81,91,11]

//The findLast() method returns the value of the last element in an array that satisfies the provided testing function.
// let lastElement = even.findLast(element => element>6)
// console.log(lastElement)

//The findLastIndex() method returns the index of the last element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned

// let lastElement = (element) => element > 6
// console.log(ages.findLastIndex(lastElement))


//The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const arr1 = [0, 1, 2, [3, 4]]

console.log(arr1.flat())

const arr2 = [0, 1, 2, [[[3, 4]]]]

console.log(arr2.flat(2))

//The flat method removes empty slots in arrays:

const arr3 = [1,2,3, ,4,5]
console.log(arr3)
console.log(arr3.length)
console.log(arr3.flat())
console.log(arr3.length) ///after flat also length doesn't change.
console.log()

//forEach
arr3.forEach(num => console.log(num))

//Splice()

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);

//The toString() method returns a string representing the specified array and its elements
let arr4 = [1,2,'a','1b']
console.log(arr4)
console.log(arr4.toString())

// Array De=Structuring

let destructArray = [1,4,6,22,77,11,0,9,]
let [a,b] = destructArray
console.log(a)
console.log(b)

const foo = ['one', 'two'];

const [red, yellow, green, blue] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // undefined
console.log(blue); 

function f(){
    return [1,2]
}
const [m,n] = f();
console.log(m)
console.log(n)
console.log()

function f1(){
    return [11, ,22]
}
const [o,p,q] = f1();
console.log(o)
console.log(p)
console.log(q)

let check = () => {
    if(o===11){
        return true
    }
}
console.log(check())
