var userInput = [];
var count = 1;

function fizzBuzz() {

if (count % 3 === 0 && count % 5 === 0) {
    userInput.push("FizzBuzz");
}
if (count % 3 === 0) {
    userInput.push("Fizz");
}
else if (count % 5 === 0) {
    userInput.push("Buzz");
}
else{
    userInput.push(count);
}
    count++;
    
console.log(userInput);
}