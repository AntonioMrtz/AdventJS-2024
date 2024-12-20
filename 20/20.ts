export function fixGiftList(
  received: string[],
  expected: string[],
): { missing: Record<string, number>; extra: Record<string, number> } {
  function countOccurrences<T extends string | number>(
    arr: T[],
  ): Record<T, number> {
    return arr.reduce(
      (acc, item) => {
        acc[item] = (acc[item] || 0) + 1; // Increment count or initialize to 1
        return acc;
      },
      {} as Record<T, number>,
    );
  }
  const missing = received.filter((el) => {
    if (expected.includes(el)) {
      expected.splice(expected.indexOf(el), 1);
    } else {
      return el;
    }
  });

  return {
    missing: countOccurrences(expected),
    extra: countOccurrences(missing),
  };
}

console.log(
  fixGiftList(
    ["puzzle", "car", "doll", "car"],
    ["car", "puzzle", "doll", "ball"],
  ),
);
// Returns:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

console.log(
  fixGiftList(
    ["book", "train", "kite", "train"],
    ["train", "book", "kite", "ball", "kite"],
  ),
);
// Returns:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

console.log(
  fixGiftList(
    ["bear", "bear", "car"],
    ["bear", "car", "puzzle", "bear", "car", "car"],
  ),
);
// Returns:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

console.log(fixGiftList(["bear", "bear", "car"], ["car", "bear", "bear"]));
// Returns:
// {
//   missing: {},
//   extra: {}
// }
