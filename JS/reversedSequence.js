/*
Build a function that returns an array of integers from n to 1 where n>0.

Example : n=5 --> [5,4,3,2,1]
*/

const reverseSeq = n => {
    a=[]
    for (let index = 1; index < (n+1); index++) {
      a.push(index)
  }
    return a.reverse();
  };