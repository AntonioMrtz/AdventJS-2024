export function isRobotBack(moves: string): true | [number, number] {
  const invertedMovements: Record<string, string> = {
    "U": "D",
    "D": "U",
    "L": "R",
    "R": "L",
  };
  const allRegisteredMoves: Array<string> = [];

  class Coordinates {
    x: number;
    y: number;

    constructor(x: number = 0, y: number = 0) {
      this.x = x;
      this.y = y;
    }

    // Method to move by a certain distance
    move(dx: number, dy: number): void {
      this.x += dx;
      this.y += dy;
    }
  }
  const coordinates = new Coordinates();
  let nextMovement: number = 1;

  let doubleIntensityModifier = false;
  let invertedMovement = false;
  let conditionalMovement = false;

  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];

    if (doubleIntensityModifier) {
      nextMovement = 2;
    }
    if (invertedMovement) {
      move = invertedMovements[move];
    }
    if (conditionalMovement && allRegisteredMoves.includes(move)) {
      continue;
    }

    switch (move) {
      case "L":
        coordinates.move(-nextMovement, 0);
        allRegisteredMoves.push(move);
        break;

      case "R":
        coordinates.move(nextMovement, 0);
        allRegisteredMoves.push(move);
        break;

      case "U":
        coordinates.move(0, nextMovement);
        allRegisteredMoves.push(move);
        break;

      case "D":
        coordinates.move(0, -nextMovement);
        allRegisteredMoves.push(move);
        break;

      case "*":
        doubleIntensityModifier = true;
        continue;

      case "!":
        invertedMovement = true;
        continue;

      case "?":
        conditionalMovement = true;
        continue;

      default:
        break;
    }

    if (doubleIntensityModifier) {
      doubleIntensityModifier = false;
      nextMovement = 1;
    }
    if (invertedMovement) {
      invertedMovement = false;
    }
    if (conditionalMovement) {
      conditionalMovement = false;
    }
  }

  return coordinates.x === 0 && coordinates.y === 0
    ? true
    : [coordinates.x, coordinates.y];
}

console.log(isRobotBack("R")); // [1, 0]
console.log(isRobotBack("RL")); // true
console.log(isRobotBack("RLUD")); // true
console.log(isRobotBack("*RU")); // [2, 1]
console.log(isRobotBack("R*U")); // [1, 2]
console.log(isRobotBack("LLL!R")); // [-4, 0]
console.log(isRobotBack("R?R")); // [1, 0]
console.log(isRobotBack("U?D")); // true
console.log(isRobotBack("R!L")); // [2,0]
console.log(isRobotBack("U!D")); // [0,2]
console.log(isRobotBack("R?L")); // true
console.log(isRobotBack("U?U")); // [0,1]
console.log(isRobotBack("*U?U")); // [0,2]
console.log(isRobotBack("U?D?U")); // true

// Step-by-step examples:
console.log(isRobotBack("R!U?U")); // [1,0]
// 'R'  -> moves to the right
// '!U' -> inverts and becomes 'D'
// '?U' -> moves upwards, because the 'U' movement hasn't been done yet

console.log(isRobotBack("UU!U?D")); // [0,1]
// 'U'  -> moves upwards
// 'U'  -> moves upwards
// '!U' -> inverts and becomes 'D'
// '?D' -> does not move, since the 'D' movement has already been done
