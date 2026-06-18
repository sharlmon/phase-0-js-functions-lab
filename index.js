//function to calculate taxvalue
function calculateTax(amount) {
  let taxValue = amount * 0.1;
  return taxValue;
}
 result = calculateTax(10000);
 console.log(result);


//function to convert string to upperecase
function convertToUpperCase(text) {
  let bigText = text.toUpperCase();
  return bigText;
}
let result = convertToUpperCase("sharlmon");
console.log(result);


//fnction to fid the bigger number

function findMaximum(num1,num2){
  if (num1 > num2){
    return num1;
  }
  else if (num2 > num1){
    return num2
  }
  else{ 
    return("they are equal");
  }
}
let result = findMaximum(3,5);
console.log(result)


//function to find out if word is a palindrome
function isPalindrome(word) {
  let flippedword = word.split("").reverse().join("");
  if (word === flippedword) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("sharlmon"));
console.log(isPalindrome("mom"));


//fuction to calculate discounted price
function calculateDiscountedPrice(originalPrice, discountPercentage) {
 let discountAmount = (discountPercentage /100) * originalPrice ;
 let buyingPrice = originalPrice - discountAmount ;
 return buyingPrice;
}

let result = calculateDiscountedPrice(100,20);
console.log(result);






// This is required for the test to function properly
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
