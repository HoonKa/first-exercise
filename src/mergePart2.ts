function merge02(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const merged: Array<number> = [];
  let size: number;
  if (arr1.length < arr2.length) {
    size = arr2.length;
  } else {
    size = arr1.length;
  }

  let count = 0;
  while (count !== size) {
    if (count < arr1.length) {
      merged.push(arr1[count]);
    }

    if (count < arr2.length) {
      merged.push(arr2[count]);
    }
    count += 1;
  }

  return merged;
}

export { merge02 };
