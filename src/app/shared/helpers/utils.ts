export function getIndexBy(array: Array<{}>, { name, value }): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i][name] === value) {
      return i;
    }
  }
  return -1;
}

export function isPresent(obj: any): boolean {
  return obj !== undefined && obj !== null && obj !== '';
}

export function isPresentAndHasValue(obj: any): boolean {
  return isPresent(obj) && obj.length > 0;
}
