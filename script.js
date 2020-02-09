console.log('Working');

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
function primeSummation(n) {
	let sum = 2;

	let number = 3;
	while (number < n) {
		if (isPrime(number)) {
			console.log(number);
			sum += number;
		}
		number += 2;
	}
	console.log(sum);
	return sum;
}

primeSummation(17);
