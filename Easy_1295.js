let nums = [555, 901, 482, 1771];
let evenNumber = 0;

nums.forEach((num) => {
  let checkEven = num.toString().length;
  if (checkEven % 2 == 0) {
    evenNumber++;
  }
});
console.log(evenNumber);
