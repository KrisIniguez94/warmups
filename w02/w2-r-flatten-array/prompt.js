// Write a function that flattens an Array of Array objects into a flat Array.
// Your function must only do one level of flattening. Some examples:
  console.log(flatten([])) // should return []
  console.log(flatten([1, 2, 3])) //should return [1,2,3]
  console.log(flatten([[1, 2, 3], ["a", "b", "c"], [1, 2, 3]])) //should return [1, 2, 3, "a", "b", "c", 1, 2, 3]
console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]])) //should return [3, 4, 5, [9, 9, 9], "a,b,c"]

function flatten(array) {
  var myNewArr = array.reduce(function(prev, curr) {
    return prev.concat(curr);
  },[]);
return myNewArr
}

module.exports = {
  flatten:flatten,
  attendance:'RANDOM WORD HERE'
};
