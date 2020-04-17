describe("split array function", function () {
  it("is able to split an array into two halves", function () {
    const arr1 = [1, 2, 3, 4];
    const arr2 = [1, 2, 3, 4, 5];
    const arr3 = [1];

    expect(split(arr1)).toBe([
      [1, 2],
      [3, 4],
    ]);

    expect(split(arr2)).toBe([
      [1, 2],
      [3, 4, 5],
    ]);
    expect(split(arr3)).toBe([[], [1]]);
  });
});

describe("test merge function", function () {
  it("is able to merge two sorted array into one sorted array", function () {
    const arr1a = [1, 4];
    const arr1b = [2, 3];
    const arr2a = [2, 3, 5];
    const arr2b = [1, 4];
    const arr3a = [1];
    const arr3b = [];

    expect(merge(arr1a, arr1b)).toBe([1, 2, 3, 4]);
    expect(merge(arr2a, arr2b)).toBe([1, 2, 3, 4, 5]);
    expect(merge(arr3a, arr3b)).toBe([1]);
  });
});
