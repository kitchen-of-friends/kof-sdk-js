// test/main.test.js
import { SFL } from "../main";
import { STG_BASE_URL, TEST_API_KEY } from "./vars";

// 基础语法测试
describe("Basic Test", () => {
  test("should create an instance of SFL", () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    expect(sdk).toBeInstanceOf(SFL);
  });
});

// Module 00 测试
describe("M00 Test", () => {
  // 0001 API 测试
  test("0001 response should be successful", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0001");
    expect(resp.msg).toEqual("success");
  });
});
