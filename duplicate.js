const names = [
  "monir",
  "hassan",
  "shadman",
  "saqeeb",
  "ayman",
  "aqeeb",
  "monir",
  "monir",
  "abul",
  "abul",
  "babul",
  "babul",
  "kabul",
  "kabul",
];

function uniqueNames(array) {
  const newNames = [];
  for (i = 0; i < array.length; i++) {
    const element = array[i];
    if (newNames.includes(element) === false) {
      newNames.push(element);
    }
  }
  return newNames;
}

console.log(uniqueNames(names));

