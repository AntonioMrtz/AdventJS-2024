type Space = "·" | "@" | "*" | "o";
type Board = string[];
type Movement = "U" | "D" | "R" | "L";
type Result = "none" | "crash" | "eat";

function moveTrain(board: Board, mov: Movement): Result {
  const totalRows = board.length;
  type Coordinate = { j: number; i: number };

  if (totalRows == 0) {
    return "none";
  }

  const rowLength = board[0].length;

  const fruitCoordinates: Array<Coordinate> = [];
  const carriagesCoordinates: Array<Coordinate> = [];
  let engineCoordinates: Coordinate = { j: 0, i: 0 };

  for (let j = 0; j < totalRows; j++) {
    for (let i = 0; i < rowLength; i++) {
      if (board[j][i] === "@") {
        engineCoordinates = { i: i, j: j };
      }
      if (board[j][i] === "o") {
        carriagesCoordinates.push({ i: i, j: j });
      }
      if (board[j][i] === "*") {
        fruitCoordinates.push({ i: i, j: j });
      }
    }
  }

  if (mov == "U") {
    if (engineCoordinates.j === 0) {
      return "crash";
    }

    // Check if any carriage occupies the position just above the engine
    if (
      carriagesCoordinates.some((coord) => {
        return (
          coord.j === engineCoordinates.j - 1 && coord.i === engineCoordinates.i
        );
      })
    ) {
      return "crash";
    }

    // Move the engine up
    engineCoordinates.j -= 1;

    // Add the engine to the carriages
    carriagesCoordinates.push(engineCoordinates);

    // Check if the engine eats any fruit (only check for the engine)
    if (
      fruitCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "eat";
    }
  }

  if (mov == "D") {
    if (engineCoordinates.j === totalRows - 1) {
      // assuming `totalRows` is the total number of rows
      return "crash";
    }

    // Check if any carriage occupies the position just below the engine
    if (
      carriagesCoordinates.some((coord) => {
        return (
          coord.j === engineCoordinates.j + 1 && coord.i === engineCoordinates.i
        );
      })
    ) {
      return "crash";
    }

    // Move the engine down
    engineCoordinates.j += 1;

    // Add the engine to the carriages
    carriagesCoordinates.push(engineCoordinates);

    // Check if the engine eats any fruit (only check for the engine)
    if (
      fruitCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "eat";
    }
  }

  if (mov == "L") {
    if (engineCoordinates.i === 0) {
      // assuming `i` represents columns
      return "crash";
    }

    // Check if any carriage occupies the position just to the left of the engine
    if (
      carriagesCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i - 1 && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "crash";
    }

    // Move the engine left
    engineCoordinates.i -= 1;

    // Add the engine to the carriages
    carriagesCoordinates.push(engineCoordinates);

    // Check if the engine eats any fruit (only check for the engine)
    if (
      fruitCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "eat";
    }
  }

  if (mov == "R") {
    if (engineCoordinates.i === rowLength - 1) {
      // assuming `rowLength` is the total number of columns
      return "crash";
    }

    // Check if any carriage occupies the position just to the right of the engine
    if (
      carriagesCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i + 1 && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "crash";
    }

    // Move the engine right
    engineCoordinates.i += 1;

    // Add the engine to the carriages
    carriagesCoordinates.push(engineCoordinates);

    // Check if the engine eats any fruit (only check for the engine)
    if (
      fruitCoordinates.some((coord) => {
        return (
          coord.i === engineCoordinates.i && coord.j === engineCoordinates.j
        );
      })
    ) {
      return "eat";
    }
  }

  return "none";
}

const board = ["·····", "*····", "@····", "o····", "o····"];

console.log(moveTrain(board, "U"));
// ➞ 'eat'
// Because the train moves up and finds a magical fruit

console.log(moveTrain(board, "D"));
// ➞ 'crash'
// The train moves down and the head crashes into itself

console.log(moveTrain(board, "L"));
// ➞ 'crash'
// The train moves to the left and crashes into the wall

console.log(moveTrain(board, "R"));
// ➞ 'none'
// The train moves to the right and there is empty space on the right

// const boardMatrix: BoardMatrix = [
//   ['·', '·', '·', '·', '·'],
//   ['*', '·', '·', '·', '·'],
//   ['@', '·', '·', '·', '·'],
//   ['o', '·', '·', '·', '·'],
//   ['o', '·', '·', '·', '·']
// ];
