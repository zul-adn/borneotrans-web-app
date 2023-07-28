export const filterArr = (arr, key, filterPar) => {
  const a = arr.filter((v) => v[key] === "14");
  console.log(arr);
  console.log(filterPar);
  console.log(key);
  return a[0];
};
