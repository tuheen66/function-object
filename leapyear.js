const leapyear = function (n) {
  if ((n % 4 == 0 && n % 100 != 0) || n % 400 == 0) {
    console.log(n + " is a leapyear");
  } else {
    console.log(n + " is not a leapyear");
  }
};

const year = leapyear(2024);
