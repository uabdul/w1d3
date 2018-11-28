
var output = {};

function characterPositioning(str) {
  var string = str.toLowerCase();
  for (var i = 0; i < string.length; i++ ){
    if (!output[string[i]]) {
      output[string[i]] = [];
      output[string[i]].push(i);
    } else {
      output[string[i]].push(i);
    }
  }
  console.log(output);
}

characterPositioning("lighthouse in the house");
