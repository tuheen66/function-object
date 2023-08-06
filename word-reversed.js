// function reversedWords(text) {
//   const words = text.split(" ");
//   let revWord = "";
//   for (i = words.length - 1; i >= 0; i--) {
//     let element = words[i];
//     revWord = revWord + " " + element;
//   }
//   return revWord;

//   // console.log(words);
// }

function reversedWord(text) {
  const words = text.split(" ");
  let revWord = [];
  for (i = words.length - 1; i >= 0; i--) {
    let element = words[i];
    revWord.push(element);
  }
  const reversed = revWord.join(" ");
  return reversed;
  //console.log(revWord);
  // console.log(words);
}

const myString = "I am a good boy";
let revWords = reversedWords(myString);
// console.log(revWords);

console.log("-------------");

let revWord = reversedWord(myString);
console.log(revWord);
