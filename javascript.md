
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

5. What is Scope in javascript?
- **Scope** defines the accessibility and lifetime of variables in a program. in javascript. there are two types of scope globel scope and local scope.

- global scope declared outside of a function is in the global scope. these can be accessed from both within functions and from other script tags.

- variables declared within a function having local scope, meaning they are only accessible within that function.


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

10. What are **template literals**  in javascript?
- Template literals are a feature in modern javascript version that offer a more flexible and readable way to work with strings. They are often referred to as template strings.

- Template literals support multiline string without requiring escape character or string concatenation with `+` sign.

- They enable the seamless embedding of javascript expression within strings, using `${}`.

11. What is a **higher-order function** in javascript?
- A higher-order function in javascript is a function that can take other function as arguments or can return functions. This feature enbles fuctional programming mechemism such as map, reduce and filter. Higher-order function offer versatility, modulartiy and efficient code.

```javascript

// Simple higher-order function
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}

// Invoke a higher-order function
const twice = multiplier(2);
console.log(twice(5));  // Output: 10

// Functional programming with higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(multiplier(2));  // [2, 4, 6, 8, 10]
const tripled = numbers.map(multiplier(3));
```
