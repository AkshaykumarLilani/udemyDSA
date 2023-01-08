const readline = require("readline-sync");

function binarySearch(sortedArr, value){
	console.log(sortedArr, val, sortedArr.length)
	let left = 0;
	let right = sortedArr.length-1;
	let returnVal = -1;

	while(left <= right){
		console.log("left = ", left, "right = ", right);
		let middle = Math.floor((left + right)/2);
		console.log("middle = ", middle)
		if (sortedArr[middle] === value){
			returnVal = middle
		} else if (sortedArr[middle] > value){
			right = middle -1
		} else {
			left = middle + 1;
		}
	}
	console.log("return value = ", returnVal)
}

let arr = [1,2,3,4,5,6,7,8,9]
let val = readline.question("Input value: ");

binarySearch(arr, val);
