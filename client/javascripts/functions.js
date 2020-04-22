// jshint esversion: 6

// XC

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
console.log(containsDuplicates("Web App Dev"));
console.log(containsDuplicates("Od or Ev"));
console.log(containsDuplicates("Nth"));


// Req. 3a
revWords1 = (str) => {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
};

console.log(revWords1("Web App Dev"));
console.log(revWords1("Delta Echo"));


// Req. 3b
revWords2 = (str) => {
  var newString = "";
  var arr = str.split("");
  arr.forEach(function(item){
    newString = item + newString;
  });
    return newString;
  };
console.log(revWords2("Web App Dev"));
console.log(revWords2("Delta Echo"));


// Req. 3c
revWords3 = (str) => {
    var newString = "";
    for (let char of str) {
        newString = char + newString;
    }
    return newString;
};

console.log(revWords3("Web App Dev"));
console.log(revWords3("Delta Echo"));
