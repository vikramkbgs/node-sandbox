
4. Explain  the cocept of **hosting** in javascript.
- Hoisting is a javascript mechansim that involves moving variables and function declarations to the top of their containing scope during the compiler phase. However, the assignments to these variables or the defintions of functions remain in place.
```javascript
console.log(myVar); // Undefined
var myVar = 5;

console.log(myVar); // 5

// The above code is equivalent to the following during the compile phase:
// var myVar;
// console.log(myVar);
// myVar = 5;

console.log(sayHello()); // "Hello, World!"
function sayHello() {
    return "Hello, World!";
}

// The above code is equivalent to the following during the compile phase:
// function sayHello() {
//     return "Hello, World!";
// }
// console.log(sayHello());
```


7. Describe **closure** in javascript. can you give and example?
- when a  **function** is defined within another function, it mantains a reference to the variables from the outer function, even after the outer function has completed execution and its local variable are typically no longer accessible.

```javascript

function createCounter() {
  let count = 0; // This variable is private to the outer function

  function increment(x) {
    let name = 1+x;
    console.log('name: ', name);
    count++; 
    console.log(count);
  }

  return increment;
}

let counter = createCounter();
counter(15); // Output: 1
counter(26); // Output: 2

```
