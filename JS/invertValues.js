/*Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
invert([]) == []
You can assume that all values are integers. Do not mutate the input array/list */
              



function invert(array) {
    array_inverted = []
    
    for (let index = 0; index < array.length; index ++){
    array_inverted.push(array[index]*-1)
  }
    return array_inverted;
  }