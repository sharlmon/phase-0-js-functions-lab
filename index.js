//function to calculate taxvalue
function calculateTax(amount) {
  let taxValue = amount * 0.1;
  return taxValue;
}
result = calculateTax(10000);
console.log(result);

// This is required for the test to function properly
//module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };
