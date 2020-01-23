// find all prime numbers until n

function isPrime(number) {
	let i = 2;
	while (i < number) {
		// console.log(`${number} / ${i} = ${number / i}`);
		if (Number.isInteger(number / i)) {
			return false;
		} else if (i === number - 1) {
			return true;
		}
		i++;
	}
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
	console.log(primes);
	console.log(primes[n - 1]);
	return primes[n - 1];
}

nthPrime(10);
// should be 29
