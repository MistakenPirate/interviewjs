const nums = [1, 2, 3, 4];

const multiplyThree = nums.map((num, i, arr) => {
  return num * 3;
});
console.log(multiplyThree);

const moreThanTwo = nums.filter((num) => {
  return num > 2;
});
console.log(moreThanTwo);

const sum = nums.reduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(sum);

Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyFour = nums.myMap((num, i, arr) => {
  return num * 4;
});
console.log(multiplyFour);

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) temp.push(this[i]);
  }
  return temp;
};

const moreThanThree = nums.myFilter((num, i, arr) => {
  return num > 3;
});
console.log(moreThanThree);

Array.prototype.myReduce = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }

  return accumulator;
};

const mySum = nums.myReduce((acc, curr, i, arr) => {
  return acc + curr;
}, 0);
console.log(mySum);
