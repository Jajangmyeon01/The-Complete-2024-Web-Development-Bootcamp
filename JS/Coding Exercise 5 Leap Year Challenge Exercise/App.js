function isLeap(year) {
    
    /**************Don't change the code above****************/    
        
        //Write your code here.    
        var cleanlyDivisbleBy4 = year % 4;
        var cleanlyDivisbleBy100 = year % 100;
        var cleanlyDivisibleBy400 = year % 400;
    
        if (cleanlyDivisbleBy4 !== 0) {
            console.log("Not leap year.");
        }
        else if (cleanlyDivisbleBy100 !== 0) {
            console.log("Leap year.");
        }
        else if (cleanlyDivisibleBy400 !== 0) {
            console.log("Not leap year.");      
        }else {
            console.log("Leap year.");
        }
    
        
    
    /**************Don't change the code below****************/    
    
    }