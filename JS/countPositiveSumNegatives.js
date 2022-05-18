/* 
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].


*/



function countPositivesSumNegatives(input) {
    let positive_numbers = input ? 
        input.filter(elemento => elemento > 0) : null;
    let positive_number_count = positive_numbers ? 
        positive_numbers.length : null;
    let negative_numbers =input ? 
        input.filter(elemento => elemento < 0) : null;
    let b = 0;
    let negative_numbers_sum = negative_numbers ? 
        negative_numbers.reduce(
      (s,e)=>s+e,
      b
      ): null; 
      return positive_number_count && negative_numbers_sum?
        [positive_number_count,negative_numbers_sum] : 
      [];
  }