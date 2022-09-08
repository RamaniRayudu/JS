var number = 123
console.log(number)

var number = 151
console.log(number)

let number1 = 251
//console.log(number1)

number1 = 252;
console.log(number1)

const number2 = 161
console.log(number2)

//== and ===
let n1 = 21
let n2 = 23
let s1 = 'a'
let s2 = '21'

console.log(n1==n2)
console.log(n1===n2)
console.log(n1==s2)
console.log(n1===s2)


//functions and arrow functions
function sum(num1,num2){
    return num1+num2
}
console.log(sum(2,3))

let sum1 = (num1,num2) => {
    return num1+num2
}
console.log(sum1(5,5))

const materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length))
  console.log(materials.map(material => material.length>6))
  console.log(materials.filter(material => material.length>6))
  console.log(materials)
  console.log(materials.find(material => material.startsWith('H')))
  materials.forEach(material => console.log(material))

  //IIFE
//   (function() {
//     var counter = 0;

//     function add(a, b) {
//         return a + b;
//     }

//     console.log(add(10,20)); 
// })();

function myFunc()
{
    console.log("Welcome to");
    (function() { console.log("GeeksForGeeks!"); })();
    console.log("Hi There!");
}
  
myFunc();

//Promise

// Creation of Promise

const promise = new Promise((res, rej) => {
    setTimeout(() => {
  
        return res("Success");
    
      }, 1000);

    setTimeout(() => {
  
      return rej("Error");
  
    }, 1000);
  
  });
  
  
  
  // .then .catch
  
  const invokingFunction = () => {
  
    promise
  
      .then((res) => {
  
        console.log("resolved!! " + res);
  
      })
  
      .catch((err) => {
  
        console.log(err + " ThenCatch");
  
      });
  
  };
  
  invokingFunction();
  
  
  
  // Async Await Syntax
  
  const invokePromiseWithAsyncAwait = async () => {
  
    try {
  
      const result = await Promise;
  
      console.log(result, "Suceess");
  
    } catch (error) {
  
      console.log(error + "AsyncAwit");
  
    }
  
  };
  
  
  
  invokePromiseWithAsyncAwait();