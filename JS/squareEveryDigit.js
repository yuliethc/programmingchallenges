/**
 * Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer
 * 
 */

// function squareDigits(num){
//     let arr = Array.from(num.toString());
//     result = [];
    
//       for (let index = 0; index < arr.length; index ++){
//         result.push(Number(arr[index])**2)
//       }
    
//     return Number(result.join(''));
//   }


/// 2022 version
function squareDigits(num){
  return Number(num.toString().split('').map(s=>(s*s)).join(''));
}