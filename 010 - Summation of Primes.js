function isPrime(number) {
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (Number.isInteger(number / i)) {
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
			sum += number;
		}
		number += 2;
	}
	return sum;
}

primeSummation(2000000);
