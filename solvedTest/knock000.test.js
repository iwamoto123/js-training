import { knock } from "../solvedSrc/knock000.js";

describe("No. 00 Hello World", () => {
  test("基本的なケース", () => {
    expect(knock()).toBe("Hello, World!\n");
  });
});
