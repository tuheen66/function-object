const names = ["sajid", "mamun", "kamal", "jabayer bin rased", "Chinku"];

function bestFriend(names) {
  let biggestName = names[0];
  for (i = 0; i < names.length; i++) {
    let name = names[i];
    if (name.length > biggestName.length) {
      biggestName = name;
    }
  }

  return biggestName;
}

const biggestName = bestFriend(names)
console.log(biggestName);
