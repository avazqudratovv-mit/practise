

// ------------------------------------------------------

/* J-TASK (NodeJS)

Shunday function yozing, u parametridagi array ichida eng kop takrorlangan raqamni topib qaytarsin.
MASALAN: majorityElement([1,2,3,4,5,4,3,4]) return 4 */

/* Masalaning yechimi: */ 

// function majorityElement(a) {
//     let maxCount = 0
//     let result = a[0]
    
//     for (let i = 0; i < a.length; i++) {
//         const count = a.filter((num) => num === a[i]).length
//         if (count > maxCount) {
//             maxCount = count
//             result = a[i]
//         }
//     }
    
//     return result
// }

// const result = majorityElement([9, 1, 2, 4, 4, 9, 4, 1])
// console.log("result:", result) 

// ------------------------------------------------------

/* H-TASK (NodeJS)

shunday function tuzing, u integerlardan iborat arrayni argument sifatida qabul qilib, faqat positive qiymatlarni olib string holatda return qilsin
MASALAN: getPositive([1, -4, 2]) return qiladi "12" */

/* Masalaning yechimi: */

// function getPositive(a) {
//     const positive = a.filter((b) => b >= 0);
//     const string = positive.join("")
//     return string
// }
// const result = getPositive([1, -4, 2, 6, 5, -9, -1]);
// console.log("result:", result)

// ------------------------------------------------------

/* F-TASK (NodeJS)

Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib, agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
MASALAN: getReverse("hello") return true return qiladi */

/* Masalaning yechimi: */

/* function findDoublers(a) {
    const doubler = a.split("")
    for (let i = 0; i < doubler.length; i++){
        if (doubler.filter(l => l === doubler[i]).length > 1) {
            return true
        }
    }
return false
}
const result = findDoublers("bigger")
console.log("result:",result) */

// ------------------------------------------------------

/* E-TASK (NodeJS)

Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
MASALAN: getReverse("hello") return qilsin "olleh" */

/* Masalaning yechimi: */

/* function getReverse(a){
    const reverse = a.split("").reverse().join("")
    return reverse
}
const result = getReverse("enough")
console.log("result:",result) */

// ------------------------------------------------------

/* D-TASK (NodeJS)

Shunday function tuzingki unga integerlardan iborat array pass bolsin va function bizga osha arrayning eng katta qiymatiga tegishli birinchi indexni qaytarsin.
MASALAN: getHighestIndex([5, 21, 12, 21, 8]) return qiladi 1 sonini.
*/

/* Masalaning yechimi: */
 
/* function getHighestIndex(intigers) {
    const max = Math.max(...intigers)
    const index = intigers.indexOf(max)
    return index
}

const result = getHighestIndex([59, 60, 3, 5, 99, 201])
console.log("result:", result) */




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