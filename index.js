function hasTargetSum(array, target) {
  for (const value of array) {
    if (value + array[1] === target) {
    return true
    } else if (value + array[2] === target) {
      return true
    } else if (value + array[3] === target) {
      return true
    } else if (value + array[4] === target) {
      return true
    } else if (value + array[5] === target) {
      return true
  } else if (value + array[6] === target) {
    return true
  } else if (value + array[7] === target) {
    return true
  } else return false
}
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  // Take in an array of integers and a target integer.
  // Check if the sums of any two numbers in the array add up to the target value.
  // If any two integers add up to the target value, return true, else return false.

  // Check if number[0] plus any other number = target
  // If false, check if number[1] plus any other number (except numer[0]) = target
  // If false, check if number[3] plusu any other = target
  // If true at any point, exit loop and return true

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
