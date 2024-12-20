import { fixGiftList } from "./20";

describe("fixGiftList", () => {
  test("should identify missing and extra gifts correctly - Case 1", () => {
    const result = fixGiftList(
      ["puzzle", "car", "doll", "car"],
      ["car", "puzzle", "doll", "ball"],
    );
    expect(result).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 },
    });
  });

  test("should identify missing and extra gifts correctly - Case 2", () => {
    const result = fixGiftList(
      ["book", "train", "kite", "train"],
      ["train", "book", "kite", "ball", "kite"],
    );
    expect(result).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 },
    });
  });

  test("should identify missing and extra gifts correctly - Case 3", () => {
    const result = fixGiftList(
      ["bear", "bear", "car"],
      ["bear", "car", "puzzle", "bear", "car", "car"],
    );
    expect(result).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {},
    });
  });

  test("should handle cases with no missing or extra gifts", () => {
    const result = fixGiftList(
      ["bear", "bear", "car"],
      ["car", "bear", "bear"],
    );
    expect(result).toEqual({
      missing: {},
      extra: {},
    });
  });
});
