let nums = [100000];
let evenNumber = 0;

nums.forEach((num) => {
  let times = 0;
  while (num / 10 >= 1) {
    times++;
    num /= 10;
  }
  if (times % 2 != 0) {
    evenNumber++;
  }
});
console.log(evenNumber);
