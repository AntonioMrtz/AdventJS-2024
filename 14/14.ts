function minMovesToStables(reindeer: number[], stables: number[]): number {
  let totalMoves = 0;

  function findClosestNumberWithIndex(
    array: number[],
    target: number,
  ): { number: number; index: number } | null {
    if (array.length === 0) return null;

    let closestIndex = 0;
    let smallestDifference = Math.abs(array[0] - target);

    for (let i = 1; i < array.length; i++) {
      const currentDifference = Math.abs(array[i] - target);

      if (currentDifference < smallestDifference) {
        smallestDifference = currentDifference;
        closestIndex = i;
      }
    }

    return { number: array[closestIndex], index: closestIndex };
  }

  reindeer = reindeer.sort((a, b) => {
    return a - b;
  });

  reindeer.forEach((el) => {
    let result = findClosestNumberWithIndex(stables, el);
    if (result !== null) {
      totalMoves += Math.abs(result.number - el);
      stables.splice(result.index, 1);
    }
  });

  return totalMoves;
}

console.log(minMovesToStables([2, 6, 9], [3, 8, 5])); // -> 3
// Explanation:
// Reindeer at positions: 2, 6, 9
// Stables at positions: 3, 8, 5
// 1st reindeer: moves from position 2 to the stable at position 3 (1 move).
// 2nd reindeer: moves from position 6 to the stable at position 5 (1 move)
// 3rd reindeer: moves from position 9 to the stable at position 8 (1 move).
// Total moves: 1 + 1 + 1 = 3 moves

console.log(minMovesToStables([1, 1, 3], [1, 8, 4]));
// Explanation:
// Reindeer at positions: 1, 1, 3
// Stables at positions: 1, 8, 4
// 1st reindeer: does not move (0 moves)
// 2nd reindeer: moves from position 1 to the stable at position 4 (3 moves)
// 3rd reindeer: moves from position 3 to the stable at position 8 (5 moves)
// Total moves: 0 + 3 + 5 = 8 moves
