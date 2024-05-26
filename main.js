import { M00_API_LIST } from "./api/m00-abstract";
import { M03_API_LIST } from "./api/m03-social";
import { M04_API_LIST } from "./api/m04-content";

export class SFL {
  // 构造函数
  constructor(API_KEY, baseUrl) {
    // 初步检查 API_KEY 的有效性
    if (API_KEY.length != 12) {
      throw new Error("无效的 API_KEY");
    }

    // 检查输入点
    if (!baseUrl) {
      throw new Error("无效的 baseUrl");
    }

    // 设置 API_KEY
    this.API_KEY = API_KEY;

    // 设置基础 URL
    this.BASE_URL = baseUrl;

    // 初始化 API 列表
    this.API_MAP = {};

    // 注入多个 API 的调用
    this.injectApi(M00_API_LIST);
    this.injectApi(M03_API_LIST);
    this.injectApi(M04_API_LIST);
  }

  // 初始化 API 列表
  injectApi = (apiList) => {
    for (const [key, value] of Object.entries(apiList)) {
      this.API_MAP[key] = value;
    }
  };

  // 标准调用
  async call(code, data) {
    if (!this.API_MAP[code]) {
      throw new Error("API 不存在");
    }

    return await this.API_MAP[code](this.BASE_URL, data);
  }
}
