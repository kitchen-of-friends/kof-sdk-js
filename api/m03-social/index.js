import { get, post, del } from "../../utils/request.js";

export const M03_API_LIST = {
  // Get Party Detail
  "0301": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/party/detail", data);
  },

  // Get Party List
  "0302": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/party/list", data);
  },

  // Creat Party
  "0303": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/social/party", data);
  },

  // Get Template Detail
  "0304": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/template/detail", data);
  },

  // Get Template List
  "0305": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/template/list", data);
  },

  // Create Template
  "0306": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/social/template", data);
  },

  // Delete Template
  "0307": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/social/template", data);
  },

  // Get Service Detail
  "0308": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/service/detail", data);
  },

  // Get Service List
  "0309": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/service/list", data);
  },

  // Create Service
  "0310": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/social/service", data);
  },

  // Delete Service
  "0311": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/social/service", data);
  },

  // Get Enroll Detail
  "0312": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/enroll/detail", data);
  },

  // Get enroll List
  "0313": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/social/enroll/list", data);
  },

  // Create enroll
  "0314": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/social/enroll/apply", data);
  },

  // burn enroll
  "0315": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/social/enroll/burn", data);
  },

  // withdraw enroll
  "0316": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/social/enroll/withdraw", data);
  },

  // pegion enroll
  "0317": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/social/enroll/pegion", data);
  },
};
