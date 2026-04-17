/* A-TASK (NodeJS):
 Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi. */

// Masalaning yechimi:
let count = 0;
function countLetter(letter, word) {
    for (let x = 0; x <= word.length; x++) {
        if (word[x] === letter) {
            count++;
        }
    } 
  return count;}
const result = countLetter("a", "javascript");
console.log("return:", result); 