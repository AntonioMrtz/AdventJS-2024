function generateGiftSets(gifts: string[]): string[][] {
  if (!gifts) return [];

  const combinations: string[][] = [];

  const totalGifts = gifts.length;

  for (let length = 1; length <= totalGifts; length++) {
    const combination: string[] = [];

    const findCombinations = (currentIndex: number) => {
      if (combination.length === length) {
        combinations.push([...combination]);
        return;
      }

      for (let i = currentIndex; i < totalGifts; i++) {
        combination.push(gifts[i]);
        findCombinations(i + 1);
        combination.pop();
      }
    };

    findCombinations(0);
  }

  return combinations;
}

console.log(generateGiftSets(["apple", "banana", "cherry", "date"]));
// Expected:
// [
//   [
//     "apple"
//   ],
//   [
//     "banana"
//   ],
//   [
//     "cherry"
//   ],
//   [
//     "date"
//   ],
//   [
//     "apple",
//     "banana"
//   ],
//   [
//     "apple",
//     "cherry"
//   ],
//   [
//     "apple",
//     "date"
//   ],
//   [
//     "banana",
//     "cherry"
//   ],
//   [
//     "banana",
//     "date"
//   ],
//   [
//     "cherry",
//     "date"
//   ],
//   [
//     "apple",
//     "banana",
//     "cherry"
//   ],
//   [
//     "apple",
//     "banana",
//     "date"
//   ],
//   [
//     "apple",
//     "cherry",
//     "date"
//   ],
//   [
//     "banana",
//     "cherry",
//     "date"
//   ],
//   [
//     "apple",
//     "banana",
//     "cherry",
//     "date"
//   ]
// ]

console.log(generateGiftSets(["car", "doll", "puzzle"]));
// [
//   ['car'],
//   ['doll'],
//   ['puzzle'],
//   ['car', 'doll'],
//   ['car', 'puzzle'],
//   ['doll', 'puzzle'],
//   ['car', 'doll', 'puzzle']
// ]

console.log(generateGiftSets(["ball"]));
// [
//   ['ball']
// ]

console.log(generateGiftSets(["game", "pc"]));
// [
//   ['game'],
//   ['pc'],
//   ['game', 'pc']
// ]
