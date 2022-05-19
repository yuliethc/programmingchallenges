/* 
Write a function called repeatStr which repeats the given string string exactly n times.

repeatStr(6, "I") // "IIIIII"
repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

other solution: 

n = 5
s="ha"
multi=""
for (let index = 0; index < n; index++) {
    multi += s 
}
*/

function repeatStr (n, s) {
    return s.repeat(n);
  }