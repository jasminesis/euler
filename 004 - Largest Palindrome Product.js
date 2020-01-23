console.log('moo');
function reverseString(str) {
	return str.split('').reverse().join('');
}

function largestPalindromeProduct(n) {
	let largest = '';
	let smallest = '';
	for (let i = 0; i < n; i++) {
		largest += '9';
		smallest += '1';
	}

	let largestNumber = parseInt(largest);

	let productArray = [];
	let product;

	for (let i = largestNumber; i >= parseInt(smallest); i--) {
		for (let j = largestNumber; j >= parseInt(smallest); j--) {
			product = i * j;
			if (reverseString(product.toString()) == product) {
				productArray.push(parseInt(product));
			}
		}
	}
	return Math.max.apply(null,productArray);
}

largestPalindromeProduct(2);
