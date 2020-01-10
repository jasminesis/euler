console.log('moo');
function reverseString(str) {
	return str.split('').reverse().join('');
}

function largestPalindromeProduct(n) {
	let largest = '';
	for (let i = 0; i < n; i++) {
		largest += '9';
	}
	let largestNumber = parseInt(largest);
	console.log(largestNumber);
	let product;
	for (let i = largestNumber; i > 0; i--) {
		product = largestNumber * i;
		console.log(largestNumber, i);
		if (reverseString(product.toString()) == product) {
			console.log('Largest!!! ', product);
			return;
		}
	}
}

largestPalindromeProduct(3);
