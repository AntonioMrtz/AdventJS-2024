export function drawTable(
  data: Array<Record<string, string | number>>,
): string {
  const capitalizeString = (value: string | number): string => {
    if (typeof value === "string") {
      return value
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else if (typeof value === "number") {
      return String(value);
    }
    return String(value);
  };

  if (data.length === 0) return "";

  let drawedTable = "";

  const keys: string[] = Object.keys(data[0]);

  const maxLengths: number[] = keys.map((key) =>
    Math.max(key.length, ...data.map((row) => String(row[key]).length)),
  );

  let drawedSeparator = "";

  for (let i = 0; i < maxLengths.length; i++) {
    drawedSeparator += `+${"-".repeat(maxLengths[i] + 2)}`;
  }
  drawedSeparator += "+";

  drawedTable += drawedSeparator + "\n";

  for (let i = 0; i < maxLengths.length; i++) {
    drawedTable += `| ${capitalizeString(keys[i])}${" ".repeat(maxLengths[i] - keys[i].length)} `;
  }

  drawedTable += "|\n" + drawedSeparator + "\n";

  let elValue = "";

  data.forEach((el) => {
    for (let i = 0; i < maxLengths.length; i++) {
      elValue = String(el[keys[i]]);
      drawedTable += `| ${elValue}${" ".repeat(maxLengths[i] - elValue.length)} `;
    }
    drawedTable += `|\n`;
  });

  drawedTable += drawedSeparator;

  return drawedTable;
}

console.log(
  drawTable([
    { name: "Alice", city: "London", citi: "London" },
    { name: "Bob", city: "Paris", citi: "London" },
    { name: "Charlie", city: "New York", citi: "London" },
  ]),
);
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

// console.log(
//   drawTable([
//     { gift: "Doll", quantity: 10 },
//     { gift: "Book", quantity: 5 },
//     { gift: "Music CD", quantity: 1 },
//   ]),
// );
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
