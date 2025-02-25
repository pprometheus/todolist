export const fetchData = async (url, requestBody = {}) => {
  const response = await fetch(url, requestBody);
  return response.ok ? response.json() : Promise.reject("Failed to fetch");
};

export const stringifyData = (data ) => {
  return JSON.stringify(data);
};

