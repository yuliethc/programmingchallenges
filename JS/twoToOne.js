
/**
 * 
 *
 * Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, each taken only once - coming from s1 or s2.
Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */

// function longest(s1, s2) {
//     let array =  s1.concat(s2).split("");
//     let arraySorted = array.sort();
//     return array.filter((letter, index) =>(array.indexOf(letter)===index)).join("");
//   }

  

  /*others creation, alternative solution*/

  /**
   * const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')
   */


//2022 version

function longest(s1, s2) {
  c=s1+s2;
  d=new Set(c.split(""))
  e = [...d]
  return e.sort().join('')
}