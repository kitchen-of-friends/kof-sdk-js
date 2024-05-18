// test/main.test.js
import { SFL } from "../main";
import { TEST_API_KEY } from "./utils";

// 基础语法测试
describe("Basic Test", () => {
  test("should create an instance of SFL", () => {
    const sdk = new SFL(TEST_API_KEY);
    expect(sdk).toBeInstanceOf(SFL);
  });
});
