// XV 10+5
// XIV 10+(5-1)
// 
// 

const kewegoToRoman = {
  kil: 'I',
  jin: 'V',
  pol: 'X',
  kilow: 'L',
  jij: 'C',
  jinjin:	'D',
  polsx: 'M',
};

// XIV
const romanToDecimal = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const translateKwegoniantoRoman = (text) => {
    const numbers = text.split(' ');

  return numbers
    .map(number => kewegoToRoman[number])
}

const translateRomanToDecimal = (charsVector) => {
  let skip = false;

  return charsVector.reduce((acc, value, index) => {
    if (skip) {
      skip = false;
      
      return acc;
    }

    if (charsVector[index + 1]) {
      if (romanToDecimal[value] >= romanToDecimal[charsVector[index + 1]]) {
        skip = false;

        return acc + romanToDecimal[value];
      }
      else {
        skip = true;

        return acc + (romanToDecimal[charsVector[index + 1]] - romanToDecimal[value]);
      }
    }

    return acc + romanToDecimal[value];
  }, 0);
};

module.exports = {
  translateKwegoniantoRoman,
  translateRomanToDecimal,
}