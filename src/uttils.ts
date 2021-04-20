export const swap = <T>(arr: T[], a: number, b: number) => {
  const temp: T = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
