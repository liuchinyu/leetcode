let nums = [555, 901, 482, 1771];
let evenNumber = 0;

nums.forEach((num) => {
  let times = 0;
  while (num > 0) {
    times++;
    num = Math.floor(num / 10, 0);
    //預防小數
  }
  if (times % 2 == 0) {
    evenNumber++;
  }
});
console.log(evenNumber);
