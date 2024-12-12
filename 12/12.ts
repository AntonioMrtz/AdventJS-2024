function calculatePrice(ornaments: string): number | undefined {
  let previousOrnament: string = "";
  let currentOrnament: string = "";
  let previousValue: number = 0;
  let currentValue: number = 0;
  let price: number = 0;

  const values: Record<string, number> = {
    "*": 1,
    "o": 5,
    "^": 10,
    "#": 50,
    "@": 100,
  };

  for (let i = 1; i < ornaments.length; i++) {
    currentOrnament = ornaments[i];
    previousOrnament = ornaments[i - 1];

    currentValue = values[currentOrnament];
    previousValue = values[previousOrnament];

    if (currentValue === undefined) {
      return undefined;
    }

    if (currentValue > previousValue) {
      price -= previousValue;
    } else {
      price += previousValue;
    }
  }
  price += currentValue;
  return price;
}

console.log(calculatePrice("***")); // 3   (1 + 1 + 1)
console.log(calculatePrice("*o")); // 4   (5 - 1)
console.log(calculatePrice("o*")); // 6   (5 + 1)
console.log(calculatePrice("*o*")); // 5  (-1 + 5 + 1)
console.log(calculatePrice("**o*")); // 6  (1 - 1 + 5 + 1)
console.log(calculatePrice("o***")); // 8   (5 + 3)
console.log(calculatePrice("*o@")); // 94  (-5 - 1 + 100)
console.log(calculatePrice("*#")); // 49  (-1 + 50)
console.log(calculatePrice("@@@")); // 300 (100 + 100 + 100)
console.log(calculatePrice("#@")); // 50  (-50 + 100)
console.log(calculatePrice("#@Z")); // undefined (Z is unknown)
