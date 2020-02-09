console.log('Working');

function specialPythagoreanTriplet(n) {
	let sumOfabc = n;
	let a, b, c;

	for (b = 2; b < n; b++) {
		for (a = 1; a < b; a++) {
			c = n - a - b;
			if (c > 0 && c == Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))) {
				console.log('done!');
				return a * b * c;
			}
		}
	}
}

specialPythagoreanTriplet(24);
