function sumSquares(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += Math.pow(i, 2);
	}
	return sum;
}

function squaredSum(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += i;
	}
	return Math.pow(sum, 2);
}

function sumSquareDifference(n) {
	console.log(sumSquares(n) - squaredSum(n));
	return Math.abs(sumSquares(n) - squaredSum(n));
}