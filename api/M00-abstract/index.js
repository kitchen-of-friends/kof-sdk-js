import { get } from "../../utils/request.js";

export const M00_API_LIST = {
  // PING
  "0001": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/ping", data);
  },
};
