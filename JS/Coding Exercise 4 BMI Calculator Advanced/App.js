function bmiCalculator(weight, height) {
    
    var bmiStats = weight / (Math.pow(height, 2));
    
    var userInput = "";

if (bmiStats < 18.5) {
    
     userInput = "Your BMI is " + bmiStats + ", so you are underweight.";
     
     return userInput;
} 

else if (bmiStats >= 18.5 && bmiStats <= 24.9) {
        
     userInput = "Your BMI is " + bmiStats + ", so you have a normal weight.";
        
     return userInput;
}

else {
     userInput = "Your BMI is " + bmiStats + ", so you are overweight.";
     
     return userInput;
    }
}
