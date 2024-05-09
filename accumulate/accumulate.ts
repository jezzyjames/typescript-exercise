

export function accumulate(list: String[] | number[], accumulator: any) {
  if (list.length === 0) {
    return [];
  }
  return list.map(accumulator);
}
