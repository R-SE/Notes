Notes from JavaScript: The Weird Parts

----------------------------
### How JS Actually Runs
- When a JS file runs, it creates a global execution context, scans the code, and sets aside space in its memory for every function and variable name. The default placeholder value for variables is undefined, and the placeholder remains until the JS interpreter actually reaches the line where the value is assigned.
- Each time a function is invoked, it creates a separate execution context that is pushed to the stack, and being that stacks are FIFO, JS will run whatever's on top of the stack, until the stack is empty. Then, it'll enter an event loop where it watches the event queue for code that requires calling a function.
- The event queue is where all the HTTP requests, click events, etc wait.
- This means JavaScript runs its code **synchronously** or one expression at a time, *but* has **asynchronous** functionality in the browser, where the JS engine is hooked into several other engines like the rendering engine or HTTP Request engine, and those engines are running at the same time. This makes JS *seem* asynchronous, but the async part is actually done outside of the JS engine.

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
