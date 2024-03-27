
7. Describe closure in javascript. can you give and example?
- when a  *function* is defined within another function, it mantains a reference to the variables from the outer function, even after the outer function has completed execution and its local variable are typically no longer accessible.

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