JSON
====

### JavaScript Object Notation
  - lightweight data-interchange format based off JS (basically, a way to store data)
  - often used with AJAX (more like AJAJ)

#### JSON Data Types
  * Data must be manipulated to fit these types if it doesn't already, though BSON used for MongoDB can expand types *
  Importantly, valid JS objects may not be valid JSON!
  - Number (default type)
  - String // must be wrapped in double-quotes " "
  - Boolean
  - Array // must be wrapped in brackets [ ]
  - Null (for empty value)
  - Object // both key and value must be wrapped in " "

  MIME type for RESTful APIs = "Application/json"


object = JSON.stringify(object);  // changes into string
object = JSON.parse(object);      // changes back object

JSON data must be pulled from elsewhere since it won't be in your JS file. To do this, we use AJAX.

#### XHR (XMLHttpRequest)
- tool for sending requests
```
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("outputArea").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();
```

#### Where to find JSON data
- depends on where the data is stored, whether Wordpress, an API, a Node module, a database, etc.

---------
*When installing NodeJS, use NVM don't install with root permissions or else NPM packages will ask for it too*
