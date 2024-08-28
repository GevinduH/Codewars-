const { positiveSum, multiplyAll } = require("./index");

test("Multiply all the elements by 2", () => {
  expect(multiplyAll([1,2,3])(2)).toEqual([2,4,6]);
});

test("Multiply all the elements by 1", () => {
  expect(multiplyAll([1, 2])(1)).toEqual([1,2]);
});

test("Multiply all the elements by 0", () => {
  expect(multiplyAll([1,2,3])(0)).toEqual([0,0,0]);
});


test("Add all positive number to be 15",()=> {
  expect(positiveSum([1,2,3,4,5]).toBe(15)
});

test("Add all positive number to be 15",()=> {
  expect(positiveSum([1,-2,3,4,5]).toBe(13)
});

test("Add all positive number to be 15",()=> {
  expect(positiveSum([]).toBe(0)
});

test("Add all positive number to be 15",()=> {
  expect(positiveSum([-1,-2,-3,-4,-5]).toBe(0)
});

test("Add all positive number to be 15",()=> {
  expect(positiveSum([-1,2,3,4,-5]).toBe(9)
});


