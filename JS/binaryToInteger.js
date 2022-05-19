/*
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples: */


const binaryArrayToNumber = arr => {
    let total = 0;
    let reverse_arr = arr.reverse()
    let result = 0
    
   for (let index = 0; index < reverse_arr.length; index++) {
      result = reverse_arr[index] * 2**index
      total+= result
  } 
      return total
  };