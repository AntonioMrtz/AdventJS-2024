function distributeWeight(weight: number): string {
  if (weight <= 0) {
    return "";
  }
  const initialWeight = weight;

  let boxes: string = "";

  const boxRepresentations: Record<number, string[]> = {
    1: [" _ ", "|_|"],
    2: [" ___ ", "|___|"],
    5: [" _____ ", "|     |", "|_____|"],
    10: [" _________ ", "|         |", "|_________|"],
  };
  const boxRepresentationsKeys = Object.keys(boxRepresentations).map((key) =>
    parseInt(key),
  );

  const boxRepresentationsKeysLength = boxRepresentationsKeys.length;

  const searchBetterBoxIndex = (weight: number) => {
    for (let i = boxRepresentationsKeysLength - 1; i >= 0; i--) {
      if (boxRepresentationsKeys[i] > weight) {
        continue;
      }
      return i;
    }
    throw Error(`Box not found for weight ${weight}`);
  };

  let partialBoxIndex: number = 0;
  let partialBoxWeigth: number = 0;
  let lastPartialBoxLength: number = -1;

  while (weight > 0) {
    partialBoxIndex = searchBetterBoxIndex(weight);
    partialBoxWeigth = boxRepresentationsKeys[partialBoxIndex];
    weight -= partialBoxWeigth;

    let topOfBox =
      weight === 0 ? boxRepresentations[partialBoxWeigth][0] + `\n` : "";

    let bottomOfBox = "";

    if (weight + partialBoxWeigth === initialWeight) {
      bottomOfBox = boxRepresentations[partialBoxWeigth].slice(1).join("\n");
    } else {
      let currentBoxLength =
        boxRepresentations[partialBoxWeigth][
          boxRepresentations[partialBoxWeigth].length - 1
        ].length;

      let underscoresToRepeat =
        currentBoxLength === lastPartialBoxLength
          ? 0
          : lastPartialBoxLength - currentBoxLength - 1;

      let middleBox =
        boxRepresentations[partialBoxWeigth].slice(1, -1).join("\n") || "";

      middleBox = middleBox ? middleBox + "\n" : middleBox;

      bottomOfBox =
        middleBox +
        boxRepresentations[partialBoxWeigth][
          boxRepresentations[partialBoxWeigth].length - 1
        ].concat(`${"_".repeat(underscoresToRepeat)}`) +
        `\n`;
    }

    boxes = topOfBox + bottomOfBox + boxes;

    lastPartialBoxLength = boxRepresentations[partialBoxWeigth][0].length;
  }

  return boxes;
}

console.log(distributeWeight(1));
// Returns:
//  _
// |_|

console.log(distributeWeight(2));
// Returns:
//  ___
// |___|

console.log(distributeWeight(3));
// Returns:
//  _
// |_|_
// |___|

console.log(distributeWeight(4));
// Returns:
//  ___
// |___|
// |___|

console.log(distributeWeight(5));
// Returns:
//  _____
// |     |
// |_____|

console.log(distributeWeight(6));
// Returns:
//  _
// |_|___
// |     |
// |_____|

console.log(distributeWeight(15));
