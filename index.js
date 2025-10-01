// Write a function that prints the first n square numbers and also calculates the sum of these numbers.
const printSquareNumbers = (n) => {
  //write code here
  for (let i = 1; i <= n; i++) {
    console.log(Math.floor(Math.pow(i, 2)));
  }
}
printSquareNumbers(5);
//will print: 1, 4, 9, 16, 25
// Final output is: 55