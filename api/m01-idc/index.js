import { get, post, del } from "../../utils/request.js";

export const M01_API_LIST = {
  // Login
  "0101": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/idc/user/login", data);
  },
};
