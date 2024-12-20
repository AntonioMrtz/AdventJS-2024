function drawRace(indices: number[], length: number): string {
  const LINE_CHARACTER = "~";
  const REINDEER_CHARACTER = "r";

  let raceDraw = "";

  if (indices.length === 0) {
    return "";
  }

  const totalIndices = indices.length;

  for (let index = 0; index < indices.length; index++) {
    let position = indices[index];
    const padding = totalIndices - (index + 1);

    if (position < 0) {
      position = length + position;
    }

    if (position === 0) {
      raceDraw += `${" ".repeat(padding)}${LINE_CHARACTER.repeat(length)} /${
        index + 1
      }`;
    } else {
      // Construct the race line
      raceDraw += `${" ".repeat(padding)}${LINE_CHARACTER.repeat(
        position,
      )}${REINDEER_CHARACTER}${LINE_CHARACTER.repeat(length - position - 1)} /${
        index + 1
      }`;
    }

    // Add a newline except after the last racer
    if (index !== totalIndices - 1) {
      raceDraw += "\n";
    }
  }

  return raceDraw;
}

console.log(drawRace([0, 5, -3], 10));
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

console.log(drawRace([2, -1, 0, 5], 8));
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

console.log(drawRace([3, 7, -2], 12));
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/
