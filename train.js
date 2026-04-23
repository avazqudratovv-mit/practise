/* D-TASK (NodeJS)

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

/* Masalaning yechimi: */
 
function getHighestIndex(intigers) {
    const max = Math.max(...intigers)
    const index = intigers.indexOf(max)
    return index
}

const result = getHighestIndex([59, 60, 3, 5, 99, 201])
console.log("result:", result) 




// ------------------------------------------------------

/* C-TASK (NodeJS)
Shunday function tuzing, u 2ta string parametr ega bolsin, hamda agar har ikkala string bir hil harflardan iborat bolsa true aks holda false qaytarsin
MASALAN checkContent("mitgroup", "gmtiprou") return qiladi true;
*/
/* function checkContent(word1, word2) {
    const sorted1 = word1.split("").sort().join("")
    const sorted2 = word2.split("").sort().join("")
    return sorted1 === sorted2
}

const result = checkContent("macos", "oscma")
console.log("result:", result) // true chiqdi
*/

// ------------------------------------------------------

/* B-TASK (NodeJS)

Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.
*/

/* function countDigits(parametr){
    let count = 0
    for(let x = 0; x < parametr.length; x++) {
        if (parametr[x] >= "0" && parametr[x] <= "9"){
            count++;
        }
    }
    return count;
}
const result = countDigits("cih29hr309824y308ch20h")
console.log("result:", result)
*/


// ------------------------------------------------------

/* A-TASK (NodeJS):
 Savol: Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
MASALAN countLetter("e", "engineer") 3ni return qiladi. */

/* Masalaning yechimi:
let count = 0;
function countLetter(letter, word) {
    for (let x = 3; x <= word.length; x++) {
        if (word[x] === letter) {
            count++;
        }
    } 
  return count;}
const result = countLetter("a", "javascript");
console.log("return:", result); 
*/