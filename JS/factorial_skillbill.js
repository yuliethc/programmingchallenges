/* /*5! = 5 * 4 * 3 * 2 * 1
6! = 6 * 5 * 4 * 3 * 2 * 1
7! = 894*/

/*function fact(n) {
	let result = 1;
	for(i=n; i>=1;i--){
result *= i;
} 
return result;
} */


function factorial (n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total; 
}