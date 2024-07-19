function lifeInWeeks(age) {
    
    /************Don't change the code above************/    
        
        //Write your code here.
        var limitOfAge = 90;
        var daysInAYear = 365;
        var monthsInAYear = 12;
        var weeksInAYear = 52;
        var remainDays = (limitOfAge - age) * daysInAYear;
        var remainMonths = (limitOfAge - age) * monthsInAYear;
        var remainWeeks = (limitOfAge - age) * weeksInAYear;
        console.log("You have " + remainDays + " days" + ", " + remainWeeks + " weeks" + ", " + "and " + remainMonths + " months" + " left" + "." );
        
        
    /*************Don't change the code below**********/
    }
    lifeInWeeks(21);
    