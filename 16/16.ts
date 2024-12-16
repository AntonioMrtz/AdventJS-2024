function removeSnow(s: string): string {
  if (!s) return "";

  function removeConsecutiveDuplicates(input: string): {
    modifiedString: string;
    isMatched: boolean;
  } {
    // Regular expression to match two consecutive identical characters
    const regex = /(.)\1/g;

    // Check if a match exists and remove duplicates
    const modifiedString = input.replace(regex, "");

    // Check if something matched (if the result is different from the input string)
    const isMatched = modifiedString !== input;

    return {
      modifiedString,
      isMatched,
    };
  }

  let result: {
    modifiedString: string;
    isMatched: boolean;
  };

  while (true) {
    result = removeConsecutiveDuplicates(s);
    if (!result.isMatched) {
      break;
    }
    s = result.modifiedString;
  }

  return result.modifiedString;
}

console.log(removeSnow("zxxzoz")); // -> "oz"
// 1. Remove "xx", resulting in "zzoz"
// 2. Remove "zz", resulting in "oz"

console.log(removeSnow("abcdd")); // -> "abc"
// 1. Remove "dd", resulting in "abc"

console.log(removeSnow("zzz")); // -> "z"
// 1. Remove "zz", resulting in "z"

console.log(removeSnow("a")); // -> "a"
// No duplicate piles
