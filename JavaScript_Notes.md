#ES6 Notation
======
  - template literals: e.g. `Hello, ${expression}! Your total is ${numberOfItem * itemPrice}.`
     - can be used in objects with the `this` keyword to reference other properties
     - great for reusable templates
  
  - var vs let vs const
    - var: function scope, can be redeclared in same scope and updated, attaches property to global object
    - let: {block/statement/expression scope}, doesn't hoist, cannot be redeclared in same scope, but can be updated; also, two let variables in different scopes are different
    - const: {block scope}, doesn't hoist, cannot be redeclared in same scope or reassigned entirely, but IS mutable
    
  - arrow functions
    - param => return expression
    - (param1, param2) => {statement}
    - warning: `this` keyword becomes unbound, so avoid in cases like object methods, click handlers, prototype methods
    
