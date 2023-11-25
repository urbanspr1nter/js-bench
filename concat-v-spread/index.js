/**
 * Array concat vs spread
 * Which is faster?
 */

const iterations = 10_000_000;

const input = new Array(100).fill("abc", 0);
doConcat(input);
doSpread(input);

function doConcat(arr) {
	const start = performance.now();
	
	let len = 0;
	for (let i = 0; i < iterations; i++) {
		const result = arr.concat(arr);
		
		len = result.length;

		if (len !== arr.length * 2) {
			throw Error("Something weird happened.");
		}
	}

	console.log(`array concat: ${performance.now() - start} ms`);
}

function doSpread(arr) {
	const start = performance.now();

	let len = 0;
	for (let i = 0; i < iterations; i++) {
		const result = [...arr, ...arr];
		
		len = result.length;

		if (len !== arr.length * 2) {
			throw Error("Something weird happened.");
		}
	}

	console.log(`array spread: ${performance.now() - start} ms`);
}

