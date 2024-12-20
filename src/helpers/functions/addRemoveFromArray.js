const addRemoveFromArray = (arr, val) => {
  if (arr.includes(val)) {
    return arr.filter((id) => id != val);
  } else {
    arr.push(val);
    return arr;
  }
};

export default addRemoveFromArray;
