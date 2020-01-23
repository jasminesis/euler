function lcm(a, b) {
	console.log('finding LCM of ', a, ' and ', b);
	console.log('returns ', a * b);
	return a * b / gcd(a, b);
}

function gcd(a, b) {
	if (b === 0) return a;
	return gcd(b, a % b);
}

function smallestMult(n) {
	let maxLCM = 1;

	for (let i = 2; i <= n; i++) {
		maxLCM = lcm(maxLCM, i);
	}
	return maxLCM;
}

smallestMult(20);
