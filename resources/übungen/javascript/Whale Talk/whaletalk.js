let input = "I can't wait to visit thailand again! Every day i dream about the islands.";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  let letter = input[i].toLowerCase();

  if (letter === 'e') {
    resultArray.push(letter);
  }

  if (letter === 'u') {
    resultArray.push(letter);
  }

  for (let j = 0; j < vowels.length; j++) {
    if (letter === vowels[j]) {
      resultArray.push(letter);
    }
  }
}

let resultString = resultArray.join('').toUpperCase();

console.log(resultString);

document.getElementById("result1").innerHTML = resultString