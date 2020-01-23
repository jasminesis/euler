function multiplesOf3and5(number) {
var i;
	var sum = 0;

	for (i = number - 1; i > 0; i--) {
		if (i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}
	}
	console.log(sum);
	return sum;
}

multiplesOf3and5(1000);
