var numbers = [32, 33, 16, 40, 9, 7, 11, 2, 44, 1, 66];

function getNumbers(number) {
  return number > 15;
}

var hasil = numbers.filter(getNumbers);

console.log(hasil);
