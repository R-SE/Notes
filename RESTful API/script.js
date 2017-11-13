// Single object in JSON
// var bestStudent = {
//   "name" : "Hermione",
//   "house" : "Gryffindor"
// }
//
// //array of objects in JSON
// var class = [
//   {
//     "name": "Hermione",
//     "house" : "Gryffindor"
//   },
//   {
//     "name": "Harry",
//     "house" : "Gryffindor"
//   },
//   {
//     "name": "Draco"
//     "house" : "Slytherin"
//   }
// ]

var pageCounter = 1;

//  INSTEAD OF DOING ALL THE BELOW, WE CAN USE A HTML TEMPLATING SERVICE LIKE HANDLEBARS.JS

//select HTML elements to use in JS
var myButton = document.getElementById("btn");
var objContainer = document.getElementById("button-output");
//event listener for button
myButton.addEventListener("click", function() {
  // this is a common vanillaJS request using XHR object; we can do it quicker with JQuery
  var myReq = new XMLHttpRequest();
  myReq.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json'); //GET receives, POST sends data
  myReq.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      var myResp = JSON.parse(this.responseText); //this parses the response data and assigns it to a variable myResp
      renderHTML(myResp);
    } else {
      console.log("ERROOOOOOOOOOOOOR");
    }
  }
  myReq.onerror = function() {
    console.log("Connection error");
  };
  myReq.send();
  //////////////////////
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me"); // adds CSS class "hide-me"
  }
});

//function for taking JSON data, formatting it, and outputting to the DOM
function renderHTML(data) {
  var htmlString = "";
  for (let i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";
      for (let ii = 0; ii < data[i].foods.likes.length; ii++) {
          if (ii == 0) {
            htmlString += data[i].foods.likes[ii];
          } else {
            htmlString += " and " + data[i].foods.likes[ii]
          }
      }
    htmlString += ".</p>"
  }
  objContainer.insertAdjacentHTML('beforeend', htmlString)
}
