console.log('moo');

function largestPrimeFactor(number) {
	// To find the largest prime factor of a number, we start from the smallest prime factor 2 and divide the number with it.
	// If the remainder is 0 that means the number is divisible by that prime number, we keep dividing the number by same prime number until that number is no more divisible by that prime number.
	// After that, we incrememnt the prime factor by 1 and repeat this process till the number becomes 1.

	for (let i = 2; i < number; i++) {
		if (number % i == 0) {
			while (Number.isInteger(number / i)) {
				number = number / i;
			}
		}
	}
	return number;
}

largestPrimeFactor(600851475143);
