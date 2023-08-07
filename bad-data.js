const arr = [1, 2, 3, -5, -8, -4];

function findingBadData(items) {
  let count = 0;
  if (Array.isArray(items) === false) {
    return " please provide an array";
  } else {
    for (i = 0; i < items.length; i++) {
      if (typeof items[i] !== "number") {
        return " Please provide an array of numbers";
      } else {
        if (items[i] < 0) {
          count++;
        }
      }
    }
  }

  return count;
}

console.log("bad data count is ", findingBadData(arr));
