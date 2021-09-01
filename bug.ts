export async function buggyExample() {
	console.log("bug-check:always");

	if (process.browser) {
		console.log("bug-check:browser-only");
	} else {
		// this await breaks dead code elimination
		/* await */new Promise((res) => res(null));
		console.log("bug-check:server-only");
	}
}
