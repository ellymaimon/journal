export function Entry(title, body) {
  this.title = title;
  this.body = body;
}

Entry.prototype.entryLength = function() {
  var splitBody = this.body.split(" ");
  var x = 0;
  splitBody.forEach(function(element){
    if(element == "") {
      splitBody.splice(x);
    }
    x++;
  });
  console.log(splitBody);
  var totalWords = splitBody.length;
  return totalWords;
}

Entry.prototype.vowels = function() {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var splitBody = this.body.toLowerCase().split("");
  var amountOfVowels = 0;
  splitBody.forEach(function(letter){
    if (vowels.includes(letter)) {
      amountOfVowels += 1
    }
  })
  return amountOfVowels;
}

Entry.prototype.consonants = function() {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  var newBody = this.body.replace(/[^a-zA-Z]/g, "");
  var splitBody = newBody.toLowerCase().split("");
  var amountOfConsonants = 0;
  splitBody.forEach(function(letter){
    if (!vowels.includes(letter)) {
      amountOfConsonants += 1
    }
  })
  return amountOfConsonants;
}
