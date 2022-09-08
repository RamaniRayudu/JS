// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object.
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target);
console.log(returnedTarget);

const target1 = { a: 1, b: 2,c: 9 };
const source1 = { b: 7, c: 5 };
const returnedTarget1 = Object.assign({}, source1);
console.log(target1);
console.log(returnedTarget1);

const target2 = {};
const source2 = {a: 5};
const returnedTarget2 = Object.assign(target2, source2);
console.log(target2);
console.log(returnedTarget2);

const target3 = { a: 'A', b: 'B' };
const source3 = { b: 'b', c: 'C'};
const returnedTarget3 = Object.assign(target3, source3);
console.log(returnedTarget3);


//The Object.defineProperties() method defines new or modifies existing properties directly on an object, returning the object
// const object1 = {}
// Object.defineProperties(object1, {
//     property1: {
//         name: "Ramani",
//         age: 25
//     },
//     property2: {}
// })
// console.log(object1.property1)


const object1 = {};

Object.defineProperties(object1, {
  property1: {
    value: "Ramani",
    writable: true
  },
  property2: {}
});

console.log(object1.property1);

//Object.entries()

const object2 = {
    a: 'Raman1',
    b: 26,
    c: 'Dancer'
  }
  
  for (const [key, value] of Object.entries(object2)) {
    console.log(`${key} : ${value}`)
  }

  //object.freeze()

  Object.freeze(object2)

  object2.b = 23
  console.log(object2)

  //The Object.fromEntries() method transforms a list of key-value pairs into an object

  const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42],
    ['ramani','Dancer'],
    ['Sister',''],
    ['Brother',],
    ['Mother','Bhavani','Rani']
  ])
  const obj = Object.fromEntries(entries);
  console.log(obj);

  //getOwnPropertyDescriptors

  const object3 = {
    property1: 42
  };
  
  const descriptors1 = Object.getOwnPropertyDescriptors(object3);
  
  console.log(descriptors1.property1);
  console.log(descriptors1.property1.writable)
  console.log(descriptors1.property1.value);

  //getOwnPropertyNames

  const object4 = {
    a: 1,
    b: 2,
    c: 3,
    'Ramani':''
  };
  
  console.log(Object.getOwnPropertyNames(object4));

  //Object.hasOwn()
  console.log(Object.hasOwn(object4,'a'))
  console.log(Object.hasOwn(object4,'Ramani'))
  console.log(Object.hasOwn(object4,''))
  console.log(Object.hasOwn(object4,'d'))

  //Object.is()

  console.log(Object.is(null,null))
  console.log(Object.is(undefined,undefined))
  console.log(Object.is(1,'1'))
  console.log(Object.is(2,2))
  console.log(Object.is('ramani','Ramani'))
  console.log()

//Object.isExtensible()
const object6 = {};
console.log(Object.isExtensible(object6));
Object.preventExtensions(object6);
console.log(Object.isExtensible(object6));

//Object.isFrozen()
console.log(Object.isFrozen(object2))
console.log()
  
//Object.isSealed()
const object7 = {
    name: 'Ramani',
    age: 24
}
console.log(Object.isSealed(object7))
Object.seal(object7)
console.log(Object.isSealed(object7))

//Object.Keys
console.log(Object.keys(object7))

//Object.Values()
console.log(Object.values(object7))