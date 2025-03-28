// alphabetic sorting of names
export const alphabeticSort = (objectList) => {
  objectList.sort((a, b) => {
    return a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1;
  });
};
