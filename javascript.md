1. What are the **data types** present in javascript?
- There is two data types in javascript primitive data type and composite data type.
- in primitive data type there is 7 data type boolean, number, undefined, null, string, bigint, symbol
- in composite data type there is object, function.
- object: object represents a set of key-value pairs and is used for more complex data structures.
- function is a callable object that can be defined using regular function syntax or using the `new function` constructor.

3. How does javascript handle **type coercion**?
- **Type coercion** in javascript refter to the automatic conversion of values from one data type to another.

- there are two type of coercion, explicit and implicit coercion. explicit corecion achieved through method such as parseInt(), Number() and toString(). implicit coercion automatically occurs during operation or comparisons. for example combining a string and a number.

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

22. What is **callback function** in javascript?
- Callbacks are a fundament concept in javascript used to manage asynchronous operations and ensure that certain code executes only after other code has finished running. They are functions that are passed as arguments to other functions and are executed once the operation they are associated with is complete.

```javascript
function fetchData(callback) {
    // Simulating asynchronous operation (e.g., fetching data from a server)
    setTimeout(function() {
        const data = { name: 'John', age: 30 };
        // Simulating error
        const error = null; // Set to null for success
        // Invoke the callback function
        callback(error, data);
    }, 2000);
}

// Callback function to handle the fetched data
function handleData(error, data) {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
}

// Initiating the asynchronous operation with a callback
fetchData(handleData);

console.log('Fetching data...');
```
31. What are the new feature introduced in ES6?
- let and const: These are new ways to declare variables in JavaScript. let allows you to declare variables that are scoped to the block they are defined in, while const allows you to declare variables that cannot be reassigned.

- Arrow functions: Arrow functions provide a more concise syntax for writing functions in JavaScript. They also handle the scope of this differently compared to regular functions.

- Template literals: Template literals allow you to create strings that can contain placeholders for variables. These placeholders are indicated by ${} and can contain expressions.

- Enhanced object literals: Object literals in ES6 have several new features, including shorthand property syntax, computed property names, and method definitions.

- Classes: ES6 introduces a new syntax for defining classes in JavaScript, making it easier to create object-oriented code.

- Promises: Promises provide a way to handle asynchronous operations in JavaScript more easily and cleanly than using callbacks.

- Destructuring: Destructuring allows you to extract values from arrays or objects and assign them to variables in a more concise way.

- Default parameters: ES6 allows you to specify default values for function parameters, so you don't have to check for undefined values inside the function.

- Rest and spread operators: The rest and spread operators (...) provide a way to work with arrays and objects more easily. The rest operator allows you to collect multiple function arguments into an array, while the spread operator allows you to spread an array or object into multiple arguments or elements.

- Modules: ES6 introduces a standardized module system for JavaScript, making it easier to organize and reuse code across multiple files.

32. How do you use destructuring assignments in ES6?
- Destructuring allow you to extract values from arrays or objects and assign them to variables in a more concise way.

```javascript

// Basic array destructuring
const [a, b] = [1, 2];
console.log(a); // Output: 1
console.log(b); // Output: 2

// Skipping elements
const [x, , z] = [1, 2, 3];
console.log(x); // Output: 1
console.log(z); // Output: 3

// Default values
const [p, q, r = 3] = [1, 2];
console.log(r); // Output: 3 (default value)

// Swapping variables
let m = 5;
let n = 10;
[n, m] = [m, n];
console.log(m); // Output: 10 (swapped value)
console.log(n); // Output: 5 (swapped value)
```
```javascript
// Basic object destructuring
const person = { name: 'John', age: 30 };
const { name, age } = person;
console.log(name); // Output: John
console.log(age); // Output: 30

// Changing variable names
const { name: personName, age: personAge } = person;
console.log(personName); // Output: John
console.log(personAge); // Output: 30

// Default values
const { city = 'Unknown' } = person;
console.log(city); // Output: Unknown (default value)

// Nested object destructuring
const student = {
  name: 'Alice',
  info: {
    age: 25,
    university: 'XYZ'
  }
};
const { name: studentName, info: { age: studentAge, university } } = student;
console.log(studentName); // Output: Alice
console.log(studentAge); // Output: 25
console.log(university); // Output: XYZ
```

32. Explain the use of `const` and `let` keywords?
- Constant Value: Variables declared with const are constant, meaning their value cannot be reassigned or changed once it's assigned.
```javascript
const PI = 3.14;
PI = 3; // Error: Assignment to constant variable
```
- const variables are block-scoped, meaning they are only accessible within the block they are defined in.
``` javascript
if (true) {
  const x = 10;
}
console.log(x); // Error: x is not defined
```
- Declaration and Initialization Required: When declaring a variable with const, you must initialize it with a value.
``` javascript
const y; // Error: Missing initializer in const declaration
```
- Mutable Value: Variables declared with let can have their values reassigned or changed.
``` javascript
let count = 10;
count = 20; // Valid: Reassignment


```
- Block Scoped: Similar to const, let variables are block-scoped, meaning they are only accessible within the block they are defined in.
```javascript
if (true) {
  let message = 'Hello';
}
console.log(message); // Error: message is not defined
```
- Declaration and Initialization Optional: When declaring a variable with let, initialization is optional.
```javascript
let z; // Valid: Declaration without initialization
z = 5; // Valid: Initialization later

```