
jQuery Reference Chart
==========
|  Method    |    Vanilla JS |  jQuery  |
|--------|-------|---------------|
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
|add event listeners | `element.addEventListener('eventName', functionToRun)` | `element.eventName(functionToRun)`|
|add multiple event listeners | ? | `element.on('eventName eventName2', functionToRun)` |
|trigger event (after attaching listeners)| ? | `element.trigger('eventName')` or `element.eventName();`|
|remove event listener| ? | `element.off('eventName.namespace')`|
|event object |`this` will be bound to event element| `element.on('click',function(event){event.type/which/target/pageX/pageY}`|
|prevent default behavior| ? | `event.preventDefault()`|
|using event capturing over bubbling | useCapture = `true` as third arg in addEventListener | ? |


jQuery Animation Methods
==========
|  Method    |  jQuery  |
|------------|---------------|
|show selected element | `.show()`|
|hide selected element| `.hide()`|
|animate opacity to 0 | `.fadeOut()`|
|animate opacity to 100| `.fadeIn()`|
|display element by sliding| `slideDown()`|
|hide element by sliding| `slideUp()`|
|toggle sliding| `slideToggle()`|
|create custom animation |`.animate({prop1: value, prop2: value}, time, callback)`|
|stop running animation on element| `.stop()`|
|pause execution of next animation method| `.delay(ms)`|
These methods can all be passed a speed as in `.show(300)` or `.hide('slow')`, and new speeds can be defined like `jQuery.fx.speeds.customSpeed = 3000`.
They can also be passed a callback function to run upon completion like so: `$( 'p.old' ).fadeOut( 300, function() {
  $( this ).remove();
});`

AJAX
==========
- asynchronous javascript and xml/json
- uses the built-in browser XHR functionality to grab and handle data returned from the webserver
- jQuery has the $.ajax() method
 - We can pass it a configuration object like so:
 ```
 $.ajax({
 url: '/data/people.json',
 dataType: 'json',
 success: function( resp ) {
   $( '#target').html( resp.people[0].name );
 },
 error: function( req, status, err ) {
   console.log( 'something went wrong', status, err );
 }
});
```
or by passing a url and optional configuration object like so: `$.ajax(/data/people.json, configObj)`
- Upon receiving the JSON data (the string representation of an object), we must parse it into an actual JS object for use. jQuery takes care of this for us, but in vanillaJS, the methods are   `JSON.parse()` and `JSON.stringify()`
- jQuery also has `$.get()` and `$.post()` which take a url, optional config obj, and a callback
- we can send data from forms:
```
$( 'form' ).submit(function( event ) {
  event.preventDefault();
  var form = $( this );
  $.ajax({
    type: 'POST',
    url: '/data/save',
    data: form.serialize(),
    dataType: 'json',
    success: function( resp ) {
      console.log( resp );
    }
  });
  ```
  - Because `$.ajax()`, `$.post()`, and `$.get()` all return a jQuery XHR object, we can assign it to a variable: `var req = $.ajax(url.json)` and then attach callbacks to the request using `.then(successFunc, errorFunc)`, or separately `.done()` and `.fail()`, or to run regardless of success or error `.always()`

  ### JSONP Requests
  -XHRs to other domains (e.g. third-party APIs) are blocked by the browser and thus use JSON with Padding. The `$.getJSON()` method can be used to make a JSONP request, or by specifiying the datatype as JSONP when using `$.ajax()`
