import { drawTable } from "./15";

describe("drawTable function", () => {
  test("draws the correct table for names and cities", () => {
    const data = [
      { name: "Alice", city: "London" },
      { name: "Bob", city: "Paris" },
      { name: "Charlie", city: "New York" },
    ];

    const expectedOutput = `
+---------+----------+
| Name    | City     |
+---------+----------+
| Alice   | London   |
| Bob     | Paris    |
| Charlie | New York |
+---------+----------+`;

    // Remove extra whitespace from the generated output
    expect(drawTable(data).trim()).toBe(expectedOutput.trim());
  });

  test("draws the correct table for gifts and quantities", () => {
    const data = [
      { gift: "Doll", quantity: 10 },
      { gift: "Book", quantity: 5 },
      { gift: "Music CD", quantity: 1 },
    ];

    const expectedOutput = `
+----------+----------+
| Gift     | Quantity |
+----------+----------+
| Doll     | 10       |
| Book     | 5        |
| Music CD | 1        |
+----------+----------+`;

    // Remove extra whitespace from the generated output
    expect(drawTable(data).trim()).toBe(expectedOutput.trim());
  });

  test("draws the correct table for three column data", () => {
    const data = [
      { name: "Alice", city: "London", age: 30 },
      { name: "Bob", city: "Paris", age: 25 },
      { name: "Charlie", city: "New York", age: 35 },
    ];

    const expectedOutput = `
+---------+----------+-----+
| Name    | City     | Age |
+---------+----------+-----+
| Alice   | London   | 30  |
| Bob     | Paris    | 25  |
| Charlie | New York | 35  |
+---------+----------+-----+`;

    // Remove extra whitespace from the generated output
    expect(drawTable(data).trim()).toBe(expectedOutput.trim());
  });
});
