function detectBombs(grid: boolean[][]): number[][] {
  const dangerousArea: number[][] = [];
  if (grid.length === 0) return [];

  function getAdjacentValues(
    grid: boolean[][],
    row: number,
    col: number,
  ): boolean[] {
    const directions = [
      [-1, 0], // Up
      [1, 0], // Down
      [0, -1], // Left
      [0, 1], // Right
      [-1, -1], // Top-left
      [-1, 1], // Top-right
      [1, -1], // Bottom-left
      [1, 1], // Bottom-right
    ];

    const adjacentValues: boolean[] = [];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      // Check if the neighbor is within bounds
      if (
        newRow >= 0 &&
        newRow < grid.length &&
        newCol >= 0 &&
        newCol < grid[newRow].length
      ) {
        adjacentValues.push(grid[newRow][newCol]);
      }
    }

    return adjacentValues;
  }

  const totalRows = grid.length;
  const totalColumns = grid[0].length;
  let adjacentValues: number = 0;

  for (let j = 0; j < totalRows; j++) {
    let row: number[] = [];
    for (let i = 0; i < totalColumns; i++) {
      adjacentValues = getAdjacentValues(grid, j, i).reduce(
        (accumulator, currentValue) => {
          return accumulator + (currentValue ? 1 : 0);
        },
        0,
      );
      row.push(adjacentValues);
    }
    dangerousArea.push(row);
  }

  return dangerousArea;
}

console.log(
  detectBombs([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ]),
);
[
  [1, 2, 1],
  [2, 1, 1],
  [1, 1, 1],
];

console.log(
  detectBombs([
    [true, false],
    [false, false],
  ]),
);
[
  [0, 1],
  [1, 1],
];

console.log(
  detectBombs([
    [true, true],
    [false, false],
    [true, true],
  ]),
);

[
  [1, 1],
  [4, 4],
  [1, 1],
];
