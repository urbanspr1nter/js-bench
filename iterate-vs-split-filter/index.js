/**
 * Filtering a string. Do we iterate or do we split and filter?
 */

const iterations = 10_000_000;

const str = "hello this is a test string with some vowels! you are so cool!";
const vowelSet = new Set(["a", "e", "i", "o", "u"]);

measure(doIterate, str, iterations);
measure(doSplit, str, iterations);

measure(doSplit, str, iterations);
measure(doIterate, str, iterations);

function doIterate(str, iterations) {
	for (let i = 0; i < iterations; i++) {	
		let result = "";
		for (let j = 0; j < str.length; j++) {
			result += (vowelSet.has(str.charAt(j)) ? "" : str.charAt(j));	
		}
	}
}

function doSplit(str, iterations) {
	for (let i = 0; i < iterations; i++) {
		const result = str.split("").filter(c => !vowelSet.has(c)).join("");
	}	
}

function measure(action, str, iterations) {
	const start = performance.now();
	
	action(str, iterations);

	console.log(`${action.name} took: ${performance.now() - start} ms`);
}
