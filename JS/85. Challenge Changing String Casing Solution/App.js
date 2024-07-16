var name = prompt("What is your name?");
var slice = name.slice(0,1);
var upperCase = slice.toUpperCase();
var delExcess = name.slice(1,name.length); delExcess = delExcess.toLocaleLowerCase();
var capName = upperCase + delExcess;
alert("Hello! " + capName);

