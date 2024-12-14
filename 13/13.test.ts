import { isRobotBack } from "./13";

describe("isRobotBack Tests", () => {
  it("should return correct results for test cases", () => {
    expect(isRobotBack("R")).toEqual([1, 0]);
    expect(isRobotBack("RL")).toBe(true);
    expect(isRobotBack("RLUD")).toBe(true);
    expect(isRobotBack("*RU")).toEqual([2, 1]);
    expect(isRobotBack("R*U")).toEqual([1, 2]);
    expect(isRobotBack("LLL!R")).toEqual([-4, 0]);
    expect(isRobotBack("R?R")).toEqual([1, 0]);
    expect(isRobotBack("U?D")).toBe(true);
    expect(isRobotBack("R!L")).toEqual([2, 0]);
    expect(isRobotBack("U!D")).toEqual([0, 2]);
    expect(isRobotBack("R?L")).toBe(true);
    expect(isRobotBack("U?U")).toEqual([0, 1]);
    expect(isRobotBack("*U?U")).toEqual([0, 2]);
    expect(isRobotBack("U?D?U")).toBe(true);

    // Step-by-step examples
    expect(isRobotBack("R!U?U")).toEqual([1, 0]); // 'R' -> moves to the right, '!U' -> inverts to 'D', '?U' -> moves upwards, as 'U' wasn't done yet
    expect(isRobotBack("UU!U?D")).toEqual([0, 1]); // 'U' -> move up, another 'U' -> move up, '!U' -> invert to 'D', '?D' -> skip since 'D' already happened
  });
});
