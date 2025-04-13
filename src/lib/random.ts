export const random = () =>
  crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32

export const randomInt = (minMax: number, max?: number) => {
  let min = minMax
  // if max is undefined, use minMax as max and set min to 0

  if (max === undefined) {
    max = minMax
    min = 0
  }

  return Math.floor(random() * (max - min)) + min
}
