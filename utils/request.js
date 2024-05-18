// GET
export const get = async (url, data, options = {}) => {
  const searchParams = new URLSearchParams();
  if (data) {
    Object.keys(data).forEach((key) => {
      searchParams.append(key, data[key]);
    });
  }

  const queryString = searchParams.toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;

  const response = await fetch(fullUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  return response.json();
};

// POST
export const post = async (url, data, options = {}) => {
  const { headers, ...postOptions } = options;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    ...postOptions,
  });

  return response.json();
};

// PUT
export const put = async (url, data, options = {}) => {
  const { headers, ...putOptions } = options;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(data),
    ...putOptions,
  });

  return response.json();
};

// DELETE
export const del = async (url, options = {}) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  return response.json();
};
