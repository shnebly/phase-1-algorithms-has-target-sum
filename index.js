function hasTargetSum(array, target) {
    let sumArr = [];
    let sum3 = (array[0] + array[array.length-1])
    for(let i = 0; i < array.length; i++){
      let sum1 = (array[i] + array[i+1])
      let sum2 = (array[i] + array[i+2])
      sumArr.push(sum1,sum2,sum3)   
    }
    let foo = sumArr.includes(target, 0)
    return(foo)
}

/* 
  Write the Big O time complexity of your function here

  Function is definitely not the best, very limited in the number of elements it can cycle through
  Create an empty array, define three variables, iterate over the array, push three variables to the empty area, check new array if it includes target
  Time: 1+2+n+3+4+5+6+7 = 0(n)
  Space: 1+2+3+4+5+6+7 = 0(n)

*/

/* 
  Add your pseudocode here

  For each element of the array
  If that element plus one of the other elements equals the target value
  Then return true

  *Revised pseudocode
  Create a new array of each element summed with a neighbor element
  Check if the new array includes the target
*/

/*
  Add written explanation of your solution here

  This function will take two inputs, an array and a target number, and return a boolean
  It will return true if the sum of any two elements of the array equal the target number
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log('Checked as true');
  console.log('=>', hasTargetSum([1,2,3,4], 6));

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
