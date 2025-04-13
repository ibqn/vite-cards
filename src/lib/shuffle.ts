import { randomInt } from './random'

export const shuffle = <T>(array: T[]): T[] => {
  // Fisher-Yates shuffle algorithm
  for (let i = array.length - 1; i > 0; i--) {
    const j = randomInt(i + 1)

    // Swap elements at indices i and j
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
