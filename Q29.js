var firstPalindrome = function(words) {
    return words.find((x) => x === x.split("").reverse().join('')) || ""; 
  };
console.log(firstPalindrome(["abc","car","ada","racecar","cool"]));
