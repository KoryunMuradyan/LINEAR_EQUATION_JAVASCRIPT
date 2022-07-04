
/*
 * this function gets ab as string read from input file
 * and returns them as float type array
 */
function get_nums(ab_str) {
	let ab = ab_str.split(' ')
	let nums = [0, 0]
	nums[0] = parseFloat(ab[0])
	nums[1] = parseFloat(ab[1])
	return nums
}

/*
 * this function gets ab as float type array
 * and returns the solution if any
 */
function solve(ab) {
	return -(ab[1]/ab[0]);
}

/*
 * this function gets result (float)
 * compares it with the gold one from golden file
 * and according th comparison result returns true or false
 */
function test(x) {
	const fs = require("fs");
	const buffer = fs.readFileSync('golden.txt');
	golds_str = buffer.toString()
	let g_x = parseFloat(golds_str)
	if((x == g_x)) {
		return true
	} else {
		return false
	}
}

/*
 * this function gets the result (x) and test result (bool)
 * generates an output file containing the programm generated result with feedback
 * according to test result
 */
function generate_output_file(x, test_result) {
	try {
		const fs = require('fs')
		let content = x.toString()
		if(test_result) {
			content += '  Rught result\n'
		} else {
			content += '  Wrong result\n'
		}
		fs.writeFile('output.txt', content, err => {
			if (err) {
				console.error(err)
				return
			}
		})
	}
	catch(err) {
		console.log("File of this name exist")
		process.exit(0);
	}
}

function main() {
	try {
		let arguments = process.argv;
		const fs = require("fs");
		const buffer = fs.readFileSync(arguments[2]);
		expr = buffer.toString()
		let roots = solve(get_nums(expr))
		generate_output_file(roots, test(roots))
	}
	catch(err) {
		console.log("File of this name exist")
		process.exit(0);
	}
}

main();
