// find all prime numbers until n

function isPrime(number) {
	for (let i = 2; i <= Math.sqrt(number); i++) {
		// console.log(`${number} / ${i} = ${number / i}`);
		if (Number.isInteger(number / i)) {
			console.log(number, 'is not prime');
			return false;
		}
	}
	return true;
}

function nthPrime(n) {
	let primes = [ 2 ];
	let number = 3;
	while (primes.length < n) {
		// while (number < 50) {
		if (isPrime(number)) {
			primes.push(number);
			console.log(number, ' is a prime');
		}
		number += 2;
	}
	console.log(primes[n - 1]);
	return primes[n - 1];
}

nthPrime(104743);
// should be 29
