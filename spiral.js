/*
# Spiral fill
# Calculate the size needed for a square matrix to hold n integers and
# add them to the matrix counter clockwise.

# You will only receive integers > 0 and < 999
# 
#
# Example 
#  spiralfill([1,2,3,4,5,6,7,8,9,10, 11])
#   
#      1   0    11  10
#      2   0    0   9
#      3   0    0   8    
#      4   5    6   7
# Example 
#  spiralfill(4, [1,2,3,4])
# 
#      1 4 
#      2 3 
#
# 
*/

/**
 * Calculate the size needed for a square matrix
 */
function spiralfill(data) {

  let size = Math.ceil(Math.sqrt(data.length));

  return {size};
}

/* Implement and run test cases for your function */
const resultados = spiralfill([1,2,3,4,5,6,7,8,9,10,11]);

console.log(resultados);