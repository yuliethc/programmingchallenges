/**Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

 */

function disemvowel(str) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  var strArray = str.split("");
  var newStr = "";
  for (var i = 0; i < strArray.length; i++) {
    if (vowels.indexOf(strArray[i]) === -1) {
      //if the letter is not a vowel
      newStr += strArray[i];
    } //end if
  } //end for/
  return newStr;
} //end function  //
