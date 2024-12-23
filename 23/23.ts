function findMissingNumbers(nums: number[]): number[] {
  if (!nums) return [];

  const maxNumber = Math.max(...nums);

  const completeNumbers = Array.from(
    { length: maxNumber },
    (_, index) => index + 1,
  );

  function differenceSets<T>(setA: Set<T>, setB: Set<T>): Set<T> {
    let difference = new Set(setA);
    // @ts-ignore
    for (let elem of setB.keys()) {
      difference.delete(elem);
    }
    return difference;
  }

  return Array.from(
    differenceSets(new Set(completeNumbers), new Set(nums)),
  ).sort((a, b) => {
    return a - b;
  });
}

console.log(findMissingNumbers([1, 2, 4, 6]));
// [3, 5]

console.log(findMissingNumbers([4, 8, 7, 2]));
// [1, 3, 5, 6]

console.log(findMissingNumbers([3, 2, 1, 1]));
// []

console.log(findMissingNumbers([5, 5, 5, 3, 3, 2, 1]));
// [4]
