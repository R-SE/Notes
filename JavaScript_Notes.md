ES6 Notation
=============
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
    
## Terms
- Parent/Ancestor, Child/Descendant, Siblings

    
  
jQuery Reference Chart
==========
|  Method             |    Vanilla JS    |  jQuery  |
|-------------|------------------|----------|
| wait for DOM load | `document.addEventListener("DOMContentLoaded", function() {//code });` | `$(document).ready(//code)` |
| object creation via selection (getter) | `document.getElementBy('Id/Tag/Class')` | `$('tag')` |
| getter | `document.querySelectorAll('.className')` | `$('.className')` |
| getter | `document.querySelector('#idName')` | `$('#idName')` |
|modifying element class list| `.classList.add/.remove/.toggle` | `.addClass/.removeClass/.toggleClass` |
|checking element for class | `.classList.contains("className", "className2")` | `.hasClass('className className2')`|
|iterating through each item in an element | `.forEach(function(){});` | `.each()` or implicit iteration |
|change html content | `.innerHTML()` | `.html('new content'/function())` |
|appending content | `parentNode.appendChild(newChild)` | `parentNode.append(newChild)` or `newChild.appendTo(parentNode)` |
|prepending content | `parentNode.insertBefore(newChild, refChild)` | `refChild.before(newChild)` or `newChild.insertBefore(refChild)`, also `element.insertAfter(refChild)`|
|filtering selection | ? | `element.filter('.special')` or `element.not('.special')` |
|finding element relative to selection | ? | `.first/.last/.next/.prev/.parent/.children()` |
|finding relatives with item | ? | `.find('.item')/.parents('.item')` |
|traversal methods| ? | `.end()` and `.addBack()` |
|select element w/ specific index | ? | `$("element.eq(index)")`
|set styles directly (not recommended) | ? | `.css('property', 'property value')` or `.css({'property' : 'property value'})`|
|change form values | ? | `$( 'input[type="text"]' ).val( 'new value' )` or `$( 'select' ).val( '2' )` |
|change element attributes| ? | `$( 'a' ).attr( 'title', 'Click me!' )` |
|copy elements | ? | `element.clone()`|
|remove element (unbinds handlers)| ? | `element.remove()`|
|remove element (keeps handlers) | ? | `element.detach()`|
|replaces elements (unbinds handlers) | ? | `.replaceWith('new stuff')`|
|add event listeners | `element.addEventListener('eventName', functionToRun)` | `element.on('eventName', functionToRun)` or `element.eventName(functionToRun)`|
|trigger event (after attaching listeners)| ? | `element.trigger('eventName')` or `element.eventName();`|
|remove event listener| ? | `element.off('eventName')`|


