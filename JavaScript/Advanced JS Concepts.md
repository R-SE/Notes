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
  - all objects have a property called "prototype" which houses methods and properties; (inheritance and lookup via prototype chain instead of explicit declaration within each object)
### Keyword `this`
  - takes the value of the closest parent object, e.g. in an object declaration, `this` takes the value of the object
  - refers to the global object if not within an object declaration
  - when using `new` (constructor function), `this` will bind to the new object created
  - call, bind, apply
    - call & apply are invoked immediately. The first arg is the object that `this` should refer to
      ```javascript
      function add(b,c){return this.a + b + c);}
      var myObj = {a: 1, b: 2}
      add.call(myObj, 3, 4); //returns 8
      ```
### Closures
### Constructor functions
### IIFE
  - immediately-invoked function expression; usually used for data privacy b/c variables created w/in an IIFE cannot be accessed outside the scope of the function; IIFEs are anonymous functions and can only be used once
### Promises
  - code structure for avoiding callback hell; assumes user inputs are valid in order to continue through the function, & then checks at the end


Creating functions:
Declaration - `function myFunc(params) {statement}`
Expression w/ return value of function - `var myFunc = function() {logic}` OR `var myObj = {myFunc: function() {logic}}`

----------------------------
### HOW JS Actually runs
