const DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

const romanNum = (roman) => {
  let num = 0;
  let currentSym = 0;
  for (let i = roman.length - 1; i >= 0; i -= 1) {
    if (DIGIT_VALUES[roman[i]] < currentSym) {
      num -= DIGIT_VALUES[roman[i]];
    } else {
      currentSym = DIGIT_VALUES[roman[i]];
      num += currentSym;
    }
  }

  return num;
};

console.log(romanNum('VI'));
console.log(romanNum('IV'));
console.log(romanNum('MCMXCII'));
