//GENERAL SELECTORS
const decimalNum = document.querySelector('.decimal');
const romanNum = document.querySelector('.roman');
const calculate = document.querySelector('.calculate');
const container = document.querySelector('.container');

//container selectors
const title = document.querySelector('.title');
const first_label = document.querySelector('.first');
const second_label = document.querySelector('.second');
const changeR2D = document.querySelector('.changeR2D');
const changeD2R = document.querySelector('.changeD2R');

function convertR2D() {
  changeR2D.classList.add('hide');
  changeD2R.classList.remove('hide');
  decimalNum.value = '';
  romanNum.value = '';
  title.innerHTML = 'Roman to Decimal Converter';
  first_label.innerHTML = 'Roman Number';
  second_label.innerHTML = 'Decimal Number';
  calculate.setAttribute('onclick', 'calculateRoToDec()');
}

function convertD2R() {
  changeR2D.classList.remove('hide');
  changeD2R.classList.add('hide');
  decimalNum.value = '';
  romanNum.value = '';
  title.innerHTML = 'Decimal to Roman Converter';
  first_label.innerHTML = 'Decimal Number';
  second_label.innerHTML = 'Roman Number';
  calculate.setAttribute('onclick', 'calculateDecToRo()');
}

//DECIMAL -> ROMAN
function calculateDecToRo() {
  const decimal = decimalNum.value;
  romanNum.value = decimalToRoman(decimal);
}

//ROMAN -> DECIMAL
function calculateRoToDec() {
  const decimal = decimalNum.value;
  romanNum.value = romanToDecimal(decimal);
}

var decimal_roman = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1,
};

const n = toString(decimalNum.value);

function romanToDecimal(n) {
  var decimal = 0;

  for (let i = 0; i < n.length; i++) {
    if (n[i] === 'I' && n[i + 1] === 'V') {
      decimal += 4;
      i++;
    } else if (n[i] === 'I' && n[i + 1] === 'X') {
      decimal += 9;
      i++;
    } else if (n[i] === 'X' && n[i + 1] === 'L') {
      decimal += 40;
      i++;
    } else if (n[i] === 'X' && n[i + 1] === 'C') {
      decimal += 90;
      i++;
    } else if (n[i] === 'C' && n[i + 1] === 'D') {
      decimal += 400;
      i++;
    } else if (n[i] === 'C' && n[i + 1] === 'M') {
      decimal += 900;
      i++;
    } else {
      decimal += decimal_roman[n[i]];
    }
  }
  return decimal;
}

function decimalToRoman(num) {
  var roman = '';

  for (var key in decimal_roman) {
    while (num >= decimal_roman[key]) {
      roman += key;
      num -= decimal_roman[key];
      //   console.log(num);
    }
  }

  return roman;
}
