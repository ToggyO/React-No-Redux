export const isEmptyObject = obj => {
  let flag = false;
  Object.keys(obj).forEach(key => {
    if (key) {
      flag = true;
    }
    return flag;
  });
  return flag;
};
// export const isEmptyObject = obj => {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// };
