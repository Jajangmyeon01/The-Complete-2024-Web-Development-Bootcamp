prompt("Enter your name : ");
prompt("Enter your crush name : ");
var loveLetter = Math.random() * 100;
loveLetter = Math.floor(loveLetter) + 1;

if (loveLetter > 70) {
    alert(loveLetter + "%" + " You love each other");
if (loveLetter > 30 && loveLetter <= 70) {
    alert(loveLetter + "%" + " Not Bad");
}
if (loveLetter <= 30) {
    alert(loveLetter + "%" + " Lack of love");
}
}else{
    alert(loveLetter + "%" + " Stay Single");
}
