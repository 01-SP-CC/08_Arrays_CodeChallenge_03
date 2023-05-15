
/*** Mini-Challenge  */
// Satzbau + variable Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

// function getSentence(arr,op) {
   
   
   
//      return "toDo";
// }



// // Modul: Ausgabe in Konsole : Test
// // output("hi"); 
// function output(inputStr) {
//     console.log(inputStr);
// }


function getSentence(arr, op) {
    var toDo = arr.join(" ");

    switch (op) {
        case "S":
            toDo += ".";
            break;
        case "Q":
            toDo += "?";
            break;
        case "E":
            toDo += "!";
            break;
        default:
            console.log("Das hat nicht so ganz funktioniert...");
            return;
    }

    return toDo;
}

// mögliche Tests:
console.log(getSentence(["Ich","bin","Max"],"S")); // Output: Ich bin Max.
console.log(getSentence(["Bist","du","Max"],"Q")); // Output: Bist du Max?
console.log(getSentence(["Ich","bin"],"E")); // Output: Ich bin!
console.log(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q")); // Output: Ich hätt gern die Platt von dene zwei diwodaso Spass mache, habbe Sie die?
