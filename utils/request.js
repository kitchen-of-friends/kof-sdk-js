// GET
export const get = async (url, data, options = {}) => {
  const response = await fetch(fullUrl(url, data), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

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

  if (!response.ok) {
    throw new Error(response.statusText);
  }

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

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

// DELETE
export const del = async (url, data, options = {}) => {
  const response = await fetch(fullUrl(url, data), {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json();
};

const fullUrl = (url, data) => {
  const searchParams = new URLSearchParams();
  if (data) {
    Object.keys(data).forEach((key) => {
      searchParams.append(key, data[key]);
    });
  }

  const queryString = searchParams.toString();
  const fullUrl = queryString ? `${url}?${queryString}` : url;
  return fullUrl;
};
