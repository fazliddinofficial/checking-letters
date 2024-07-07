var text = prompt("Enter text...");
var letter = prompt("Enter your letter");

var arr = text.split(" ");
var word = arr[2];
if(letter === word.charAt(0)){
    console.log("Letter is equal to the first letter)");
}
else{
    console.log("They are not match(");
}
