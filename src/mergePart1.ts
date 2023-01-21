function merge01(arr1: Array<number>, arr2: Array<number>): Array<number> {
  const merged: Array<number> = [];
  for (let i = 0; i < arr1.length; i += 1) {
    merged.push(arr1[i]);
    merged.push(arr2[i]);
  }

  return merged;
}

export { merge01 };
