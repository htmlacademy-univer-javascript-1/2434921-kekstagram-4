const checkLengthString = function(string, length){
  return string.length <= length;
};
checkLengthString('Проверяемая строка: ', 20);
checkLengthString('Проверяемая строка: ', 18);
checkLengthString('Проверяемая строка: ', 10);

const checkPalindrome = function(string){
  const finisheString = string.replaceAll(' ','').toLowerCase();
  let reverseString = '';
  for (let i = finisheString.length - 1; i >= 0; i--) {
    reverseString += finisheString[i];
  }
  return finisheString === reverseString;
};
checkPalindrome('топот');
checkPalindrome('ДовОд');
checkPalindrome('Кекс');

const findNumber = function(string){
  const newString = string.toString();
  let number = '';
  for(let i = 0; i < newString.length; i++){
    if(!Number.isNaN(parseInt(newString[i], 10))){
      number += newString[i];
    }
  }
  return parseInt(number, 10);
};
findNumber('2023 год');
findNumber('ECMAScript 2022');
findNumber('а я томат');
