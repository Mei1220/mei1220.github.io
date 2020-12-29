

//Typewritter
const texts = ["websites", "designs", "presentations"]
let count=0;  //0,1,2 (word count)
let index=0; // letter count
let currentText="";  //the selected text
let letter=""; //individual letter added one by one
(function type(){
if (count===texts.length){
    count=0;
}
currentText=texts[count];
letter=currentText.slice(0, ++index);

document.querySelector(".typing").textContent=letter;
if(letter.length===currentText.length){
    count++;
    index=0;
}
setTimeout(type, 250);
}()); //self invoked

