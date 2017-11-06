# Core programming concepts

### Event Delegation
  - the process of attaching an event-listener to an element so that event handlers can fire on any of its descendants
  - eg putting a listener on a `<ul>`, and having the event handler figure out which `<li>` to work with
  - eliminates the need to individually target each child, thus avoiding a lot of needless code (stay DRY)
### Event Bubbling
  - also known as Propagation, wherein events on one element will "bubble" upwards to affect all parents
  - eg clicking on the `<a>` within a `<li>` will also affect the `<li>` and its `<ul>` and the `<body>`
### Hoisting
  - behind the scenes, JS will hoist certain things to the top, including variable declarations (but not initializations) and function declarations
### Null vs Undefined
  - both are empty values, but 'undefined' is a placeholder JS uses for declared but uninitialized variables, whereas null is a user-assigned value. typeof(undefined) is undefined, but typeof(null) is object 
### Prototypical Inheritance
  - all objects have a property called "prototype" which houses methods and properties; *inheritance and lookup via prototype chain instead of explicit declaration within each object
### Keyword `this`:
  - takes the value of the closest parent object, e.g. in an object declaration, `this` takes the value of the object
  - refers to the global object if not within an object declaration
  - 
### Closures
### Constructor functions
### IIFE
  - immediately-invoked function expression; usually used for data privacy b/c variables created w/in an IIFE cannot be accessed outside the scope of the function; IIFEs are anonymous functions and can only be used once
### Promises
  - code structure for avoiding callback hell; assumes user inputs are valid in order to continue through the function, & then checks at the end 


Creating functions:
Declaration - function myFunc() {logic}
Expression w/ return value of function - var myFunc = function() {logic} OR var myObj = {myFunc: function() {logic}}

## Best Practices
- let & const don't hoist, use blockscope not function scope, & are only ES6. const cannot be reassigned
- 
- Use arrow notation () => {}
- Use === over == (both comparison operators, but == coerces the two values before checking for equality; === compares value & type)