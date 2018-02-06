var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");
var fullName = firstName + " " + lastName
console.log("Your full name is " + fullName);
console.log("You are " + age + " years old.")

var h = document.createElement("h1");                // Create a <h1> element
var t = document.createTextNode(fullName);     // Create a text node
h.appendChild(t);
document.body.appendChild(h);