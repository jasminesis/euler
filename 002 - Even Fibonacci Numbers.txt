function fiboEvenSum(n) {
	// You can do it!
	let a = 1;
	let b = 2;
	let c;

	let counter = 0;
	let sum = 2;

	while (counter < n - 2) {
		c = a;
		a = b;
		b = b + c;

		if (b % 2 == 0) {
			sum += b;
		}
		
		counter += 1;
	}
  return sum;
}

fiboEvenSum(10);