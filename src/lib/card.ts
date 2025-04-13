export const Suite = {
  hearts: 0,
  diamonds: 1,
  clubs: 2,
  spades: 3,
} as const

export type Suite = (typeof Suite)[keyof typeof Suite]

export const Rank = {
  six: 0,
  seven: 1,
  eight: 2,
  nine: 3,
  ten: 4,
  jack: 5,
  queen: 6,
  king: 7,
  ace: 8,
} as const

export type Rank = (typeof Rank)[keyof typeof Rank]

export type Card = number

const SUITE_BIN_SIZE = 2
const RANK_BIN_SIZE = 4
const SUITE_MASK = (1 << SUITE_BIN_SIZE) - 1 // 0b11
const RANK_MASK = ((1 << (RANK_BIN_SIZE + SUITE_BIN_SIZE)) - 1) & ~SUITE_MASK // 0b1111_00

export const createCard = (suite: Suite, rank: Rank): Card => {
  return ((rank << SUITE_BIN_SIZE) & RANK_MASK) | (suite & SUITE_MASK)
}

export const getSuite = (card: Readonly<Card>): Suite => {
  return (card & SUITE_MASK) as Suite
}

export const getRank = (card: Readonly<Card>): Rank => {
  return ((card & RANK_MASK) >> SUITE_BIN_SIZE) as Rank
}

function getKeyByValue(object: Record<string, number>, value: number) {
  return Object.keys(object).find((key) => object[key] === value)
}

export const getCardString = (card: Readonly<Card>): string => {
  const rank = getRank(card)
  const suite = getSuite(card)
  return `${getKeyByValue(Rank, rank)} ${getKeyByValue(Suite, suite)}`
}
