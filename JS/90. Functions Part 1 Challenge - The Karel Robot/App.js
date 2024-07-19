// Challenge 1 //
function main(){
    putBeeper();
}
function moveFourTimes(){

}   

// Challenge 2 //
function main(){
    putBeeper();
    twoTimesMoveWithBeeper();
    twoTimesMove();
    turnLeftAnOneMove();
    putBeeper();
    twoTimesMoveWithBeeper();
    move();
    turnRightMove();
    putBeeper();
    twoTimesMoveWithBeeper();
    twoTimesMoveWithBeeper();
    turnLeftAnOneMove();
    putBeeper();
    twoTimesMoveWithBeeper();
    move();
    turnRightMove();
    putBeeper();
    twoTimesMoveWithBeeper();
    twoTimesMoveWithBeeper();
     
 }
 function twoTimesMove(){
    move();
    move();  
    putBeeper();
 }
 function twoTimesMoveWithBeeper(){
    move();
    move();
    putBeeper();
      
 }
 function turnLeftAnOneMove(){
    turnLeft();
    move();
    turnLeft();
    move();
 }
 function turnRightMove(){
    turnRight();
    move();
    turnRight();
 }  
 