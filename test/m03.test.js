// test/main.test.js
import { SFL } from "../main";
import { STG_BASE_URL, STG_TEST_WSP_INFO, TEST_API_KEY } from "./vars";

// Module 03 Party 测试
describe("M03 Party Test", () => {
  // 0301 API 测试
  test("0301 should get a party", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0301", { pid: "6623a0727837d627f21aceef" });
    expect(resp.data.name).toEqual("Party");
  });

  // 0302 API 测试
  test("0302 should get a party list", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0302", { ...STG_TEST_WSP_INFO });
    expect(resp.msg).toEqual("获取 Party 列表成功");
  });

  // 0303 API 测试
  test("0303 should create a party", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0303", {
      ...STG_TEST_WSP_INFO,
      name: "Test Party",
      content: "Test Description",
    });
    expect(resp.msg).toEqual("创建 Party 成功");
  });

  // 0304 API 测试
  test("0304 should get a template's detail", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0304", {
      id: "664c8525a095f10580fe18d3",
    });
    expect(resp.msg).toEqual("获取 Template 信息成功");
  });

  // 0305 API 测试
  test("0305 should get template list", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0305", {});
    expect(resp.msg).toEqual("获取 Template 列表成功");
  });

  // 0306 API 测试
  test("0306 should create a template", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0306", {
      name: "测试模板",
      avatar: "123.jpg",
      type: 1,
      tmplt_desc: {
        name: "template party name",
      },
    });
    expect(resp.msg).toEqual("创建模板成功");
  });

  // 0306 API 测试
  test("0306 should update a template", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0306", {
      id: "664c86c7a7d4aab9bbca037a",
      name: "测试模板 UPDATED2",
      avatar: "456.jpg",
      type: 1,
      tmplt_desc: {
        name: "template party name",
      },
    });
    expect(resp.msg).toEqual("修改模板成功");
  });

  // 0307 API 测试 - 删除一个模板
  test("0307 should delete a template", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0307", {
      id: "664c86c7a7d4aab9bbca037a",
    });
    expect(resp.msg).toEqual("删除模板成功");
  });

  // 0308 API 测试
  test("0308 should get a service's detail", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0308", {
      id: "664ca37a1393af18d7cb0c2d",
    });
    expect(resp.msg).toEqual("获取 Service 信息成功");
  });

  // 0309 API 测试
  test("0309 should get service list", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0309", {});
    expect(resp.msg).toEqual("获取 Service 列表成功");
  });

  // 0310 API 测试
  test("0310 should create a service", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0310", {
      name: "测试service",
      avatar: "123.jpg",
      type: 1,
      tmplt_desc: {
        name: "service party name",
      },
    });
    expect(resp.msg).toEqual("创建服务成功");
  });

  // 0310 API 测试
  test("0310 should update a service", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0310", {
      id: "664ca37a1393af18d7cb0c2d",
      name: "测试service UPDATED2",
      avatar: "456.jpg",
      type: 1,
      tmplt_desc: {
        name: "service service name",
      },
    });
    expect(resp.msg).toEqual("修改服务成功");
  });

  // 0311 API 测试 - 删除一个service
  test("0311 should delete a template", async () => {
    const sdk = new SFL(TEST_API_KEY, STG_BASE_URL);
    let resp = await sdk.call("0311", {
      id: "664ca37a1393af18d7cb0c2d",
    });
    expect(resp.msg).toEqual("删除服务成功");
  });
});
