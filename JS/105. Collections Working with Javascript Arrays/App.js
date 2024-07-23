var studentNames = ["Gen", "Anna", "Justin", "Phillip", "Levi"];

var userInput = prompt("Check Name : ").toLowerCase();
var lowerCaseNames = studentNames.map(name => name.toLowerCase()); 
if (lowerCaseNames.includes(userInput)){
    alert("Welcome!");
}else{
    alert("Maybe Next Time!");
}