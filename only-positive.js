const numbers = [45, 87, 96, 11, 63, -56, 71, 28];

function onlyPositive(numbers) {
  const positiveNumber = [];
  for (i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number > 0) {
      positiveNumber.push(number);
    } else {
      break;
    }
  }
  return positiveNumber;
}

const positive = onlyPositive(numbers);
console.log(positive);
