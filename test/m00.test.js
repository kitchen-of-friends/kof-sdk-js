// test/main.test.js
import { SFL } from "../main";
import { TEST_API_KEY } from "./vars";

// Module 00 测试
describe("M00 Test", () => {
  // 0001 API 测试
  test("0001 response should be successful", async () => {
    const sdk = new SFL(TEST_API_KEY);
    let resp = await sdk.call("0001");
    expect(resp.msg).toEqual("success");
  });
});
