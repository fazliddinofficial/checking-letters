var text = prompt("Enter text...").toLowerCase();
var letter = prompt("Enter your letter").toLowerCase();

var arr = text.split(" ");
var word = arr[2];
if(letter === word.charAt(0) || letter === word){
    console.log("Letter or word is equal to the first letter or third word)");
}
else{
    console.log("They are not match(");
}
console.log(arr);
console.log(word);