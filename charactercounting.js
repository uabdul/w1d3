var output = {};

function countLetters(str) {
  var string = str.toLowerCase().split(' ').join('').split('');
  for (var i = 0; i < string.length; i++) {
    if (output[string[i]] === undefined) {
      output[string[i]] = 1;
    } else {
      output[string[i]] += 1;
    }
  }
console.log(output);
}

countLetters("lighthouse in the house")