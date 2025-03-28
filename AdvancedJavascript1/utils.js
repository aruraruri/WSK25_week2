// alphabetic sorting of names
export const alphabeticSort = (objectList) => {
  objectList.sort((a, b) => {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};
