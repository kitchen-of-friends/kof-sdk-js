import { get, post, del } from "../../utils/request.js";

export const M04_API_LIST = {
  // Get Memory Detail
  "0401": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/memory/detail", data);
  },
  // Get Memory List
  "0402": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/memory/list", data);
  },
  // Post or Update Memory
  "0403": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/memory", data);
  },
  // Delete Memory
  "0404": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/memory", data);
  },

  // Get Article Detail
  "0405": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/article/detail", data);
  },
  // Get Article List
  "0406": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/article/list", data);
  },
  // Upsert Article
  "0407": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/article", data);
  },
  // Delete Article
  "0408": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/article", data);
  },

  // Get Comment Detail
  "0409": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/comment/detail", data);
  },
  // Get Comment List
  "0410": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/comment/list", data);
  },
  // Upsert Comment
  "0411": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/comment", data);
  },
  // Delete Comment
  "0412": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/comment", data);
  },

  // Get Course Detail
  "0413": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/course/detail", data);
  },
  // Get Course List
  "0414": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/course/list", data);
  },
  // Upsert Course
  "0415": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/course", data);
  },
  // Delete Course
  "0416": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/course", data);
  },

  // Get Like List
  "0417": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/like/list", data);
  },
  // Upsert Like
  "0418": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/like", data);
  },
  // Delete Like
  "0419": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/like", data);
  },

  // Get Collect List
  "0420": async (baseUrl, data = {}) => {
    return await get(baseUrl + "/content/collect/list", data);
  },
  // Upsert Collect
  "0421": async (baseUrl, data = {}) => {
    return await post(baseUrl + "/content/collect", data);
  },
  // Delete Collect
  "0422": async (baseUrl, data = {}) => {
    return await del(baseUrl + "/content/collect", data);
  },
};
