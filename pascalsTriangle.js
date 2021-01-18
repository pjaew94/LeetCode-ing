// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Example:
// Input: 6
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
//[1,5,10,10,5,1]
// ]











// Solution 1: Loopin
// Description: Create For loop nested inside of another to implement row/column strat.
// Steps:
// 1. Create base cases for when the numRows is 0 and 1
// 2. Create empty array for the result to be returned at the end.
// 3. Create first for loop starting at 1 (THIS WILL BE IMPORTANT LATER).
// 4. Create an empty array to pass the finished row after the nested for loop.
// 5. Create second for loop to fill in the row with columns.
// 6. If the current column is at position 0 or at the end of the row, then we will push 1 into the array.
// 7. The values inside the triangle consist of sum of the values one row above/one column behind + one row above/column above.
// 8. In order for us to access the one row above, we have to decrement the row value by 2 (because we started the first for loop at row = 1).
// 9. In order for us to access one column behind, we just subtract by 1 and access those values accordingly.
// 10. Then push that sum into the column for that row.
// 11. Once the row is finished, push it into the results array
// 12. Repeat until numRows value.
// 13. Return results.

const generate = (numRows) => {
  if (numRows === 0) return [];
  if (numRows === 1) return [[1]];

  const result = [];

  for (let row = 1; row <= numRows; row++) {
    let arr = [];
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1);
      } else {
        arr.push(result[row - 2][col - 1] + result[row - 2][col]);
      }
    }

    result.push(arr);
  }

  return result;
};

// row=1 col=0 arr=[1]         result=[]
// row=2 col=0 arr=[1]         result=[[1]]
// row=2 col=1 arr=[1,1]       result=[[1]]
// row=3 col=0 arr=[1]         result=[[1], [1,1]]
// row=3 col=1 arr=[1,2]       result=[[1], [1,1]]
// row=3 col=2 arr=[1,2,1 ]    result=[[1], [1,1], [1,2,1]]
