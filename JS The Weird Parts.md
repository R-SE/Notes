Notes from JavaScript: The Weird Parts

----------------------------
### Execution Contexts
- When a JS file runs, it creates a global execution context, scans the code, and sets aside space in its memory for every function and variable name. The default placeholder value for variables is undefined, and the placeholder remains until the JS interpreter actually reaches the line where the value is assigned.
- Each time a function is invoked, it creates a separate execution context that is pushed to the stack, and being that stacks are FIFO, JS will run whatever's on top of the stack, until the stack is empty. Then, it'll enter an event loop where it watches the event queue for code that requires calling a function.
- The event queue is where all the HTTP requests, click events, etc wait.
- This means JavaScript runs its code **synchronously** or one expression at a time, *but* has **asynchronous** functionality in the browser, where the JS engine is hooked into several other engines like the rendering engine or HTTP Request engine, and those engines are running at the same time. This makes JS *seem* asynchronous, but the async part is actually done outside of the JS engine.

### Variable Environments
- Each execution context has its own variable environment. Variables will only work in their own scope, but can inner variables of the same name can *shadow* outer variables

### Scope Chain
- every execution context also has a reference to its outer environment, the environment inside which the function **declaration** is sitting lexically (where it's physically written).
- if a variable is unavailable for use, the JS parser will look for the variable outside the function's *outer environment*, not where the function was invoked.
- execution contexts determine what order each function will execute, but outer environments determine the value of a variable in the scope chain

### Context vs. Scope
- every function invocation has both an associated scope and a context
- context is object-based, and is always the value of `this`, which is a reference to the object that upon which the code is acting
- scope is function-based, and refers to its outer lexical environment where the function was declared


### Dynamic Typing vs Static Typing
- Other languages like Java or C are **static-typed**, meaning a developer must declare a type (e.g. bool, int) when declaring a variable, and that variable can only hold the specified type. If you later try to perform an operation on that variable that's inappropriate for its type (aka math on strings), the compiler will throw an error.
- In contrast, JS is **dynamically-typed** so all variables types can be declared with simply `var`, and the compiler will decide on-the-go *when evaluating your expression* what type your variable is. This means the same variable can hold many different types over its lifespan, as well as be *coerced*.
  - JS performs type-coercion, either *implicitly* (automatically), or *explicitly* (coded by the dev), to evaluate expressions without throwing errors. This comes up often in comparison expressions `0 == false`, and can result in unpredictable behavior if you don't understand JS.
  - Best practice: Use `===` (strict equality) in 99% of cases, and only `==` when you purposely want to take advantage of JS's implicit coercion.

### Operators
- Operators are actually special functions that are syntactically different.
- When we write `4 + 5`, we are essentially calling a function '+' like so `+(4, 5)`
  - Because such operations are common, the JS standard includes the shorter syntax for operators
  - Languages can prefix-notation (`++5`), infix notation (`4 + 5`), or post-fix notation (`5++`), so don't get caught up in how code looks superficially
- When deciding the order that an expression is evaluated in, the JS parser first looks to [**operator precedence** and then **associativity**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
  - The higher the operator precedence (e.g. grouping `()` being highest, `*` beating out `+`, etc), the sooner that expression wil be evaluated
  - In the case that remaining expressions have operators with equal precedence (`var a = b = c`), the parser checks the associativity of an operator. Most operators are *left-to-right* associative, but the assignment operator is actually *right-to-left*, meaning that in the example above, the parser first evaluates `b = c`.

### Namespaces
- Other languages have namespaces or containers for same-named variables and functions, to avoid namespace collision, but JS does not
- we can 'fake' namespaces by attaching variables and functions to objects, thus creating methods and properties, instead of leaving them floating in the global space

### First-class Functions
- like other values, functions can be copied, passed around, assigned to variables, created on the fly with function literal syntax (IIFEs);
- functions are a special kind of object, so you can attach props and methods, but **also** have special capabilities
  - doesn't have to have a name (anonymous function)
  - body of the function is put into the `code` property of the function object, and this property is **invocable**

### Function Statements vs Expressions
- statements do work but don't return values, while expressions return values
- function statements vs expressions -> hoisting, passing as callbacks, etc
#### IIFEs
- IIFEs are function expressions invoked immediately after creation by putting parens after it.

### Closures
- In other languages that don't have closures, a function invocation cannot use a variable not within its scope. The variable would have to be passed to it somehow, usually through the params.
- In JS, we have closures, which are simply functions and their outer lexical environments. If a variable is not available in the scope when a function is invoked, it can follow the scope chain to find the variable:
```
function a() {
  function b() {
    console.log(name);
  }
  var name = 'Rose';
  b();
  // use console.dir(b) to see the closure + scopes
}
a(); // 'Rose'
```
- a closure is the combo of a function with its outer lexical environment in which the function was declared (and the variables in-scope at the time of the function's creation). It doesn't have to be the environment immediately outside of it; Chrome seems to define the closure as the one containing the sought variable (will call 'c' the closure):
```
function c() {
  var name = 'Rose';
  function a() {
    function b() {
      console.log(name);
    }
    b(); console.dir(b);
  }
  a(); // 'Rose'
}
c();
```

### Passing by value vs by reference
- primitives are passed by value (the value is copied, and the names point to different memory addresses)
- objects are passed by reference (the names point to the same address)



### 'this' keyword cases
1) object declaration: `this` refers to the closest parent object of the method
  - free functions: `this` refers to the global object (in the console, this is the window). This is because global functions are attached to the global object
    - `console.log(this)` is actually `window.console.log(this)`
  - quirk: nested `this` inside object declaration will refer to the global object, despite sitting inside the declared object. one practice to circumvent this is to set a new variable equal to `this`, so that inner nested variable references can have access to `this`, like so: `var thiss = this`
2) object method invocation: `this` refers to the object 'left of the dot'
3) call/bind/apply: `this` refers to the object passed in as the first argument
4) `new` constructor function: `this` refers to the new object created

### arguments vs spread (..args)
- arguments is a keyword to represent the params of a function, and is a special array-like object (italicized brackets), but lacks some of the functionality of an array (like slicing)

### function overloading
- In other languages like C++/Java, functions that have the same name but different numbers of parameters... will be treated differently. This isn't possible in JS b/c functions are objects.
- Instead, we use other patterns:
1) a function that calls another function, passing in some params:
```
function greet(name, language) {
  //if lang == spanish, log one greeting
  // if lang == english, log another
}

function greetSpanish(name) {
  greet(name, 'spanish');
}
```
2)


### Whitespace
- invisible characters that create visual space in your code (carriage returns, tabs, spaces)
