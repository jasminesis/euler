console.log('moo');

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
		console.log(i, n);
		console.log(maxLCM);
	}
	return maxLCM;
}

// function smallestMult(n) {
// 	console.log(n);
// 	let number = n;
// 	let array = [];
// 	while (array.length != n) {
// 		for (let i = 2; i <= n; i++) {
// 			// console.log('in the for loop, i is ', i);
// 			if (number % i == 0) {
// 				array.push(number);
// 			}
// 		}
// 		if (array.length == n - 1) {
// 			console.log(number);
// 			return number;
// 		} else {
// 			array = [];
// 		}
// 		number += n;
// 	}
// }

smallestMult(20);
