import { expect, test } from 'vitest'
import type { Card } from './card'
import { createCard, getCardString, getRank, getSuite } from './card'
import { Rank, Suite } from './card'

test('createCard', () => {
  const heartsSix: Card = createCard(Suite.hearts, Rank.six)
  expect(heartsSix).toBe(0b0000_00)

  const spadesAce = createCard(Suite.spades, Rank.ace)
  expect(spadesAce).toBe(0b1000_11)
})

test('getSuite', () => {
  const heartsSix = createCard(Suite.hearts, Rank.six)
  expect(getSuite(heartsSix)).toBe(Suite.hearts)

  const spadesAce = createCard(Suite.spades, Rank.ace)
  expect(getSuite(spadesAce)).toBe(Suite.spades)

  const diamondsTen = createCard(Suite.diamonds, Rank.ten)
  expect(getSuite(diamondsTen)).toBe(Suite.diamonds)

  const clubsJack = createCard(Suite.clubs, Rank.jack)
  expect(getSuite(clubsJack)).toBe(Suite.clubs)
})

test('getRank', () => {
  const heartsSix = createCard(Suite.hearts, Rank.six)
  expect(getRank(heartsSix)).toBe(Rank.six)

  const spadesAce = createCard(Suite.spades, Rank.ace)
  expect(getRank(spadesAce)).toBe(Rank.ace)

  const diamondsTen = createCard(Suite.diamonds, Rank.ten)
  expect(getRank(diamondsTen)).toBe(Rank.ten)

  const clubsJack = createCard(Suite.clubs, Rank.jack)
  expect(getRank(clubsJack)).toBe(Rank.jack)
})

test('getCardString', () => {
  const heartsSix = createCard(Suite.hearts, Rank.six)
  expect(getCardString(heartsSix)).toBe('six hearts')

  const spadesAce = createCard(Suite.spades, Rank.ace)
  expect(getCardString(spadesAce)).toBe('ace spades')

  const diamondsTen = createCard(Suite.diamonds, Rank.ten)
  expect(getCardString(diamondsTen)).toBe('ten diamonds')

  const clubsJack = createCard(Suite.clubs, Rank.jack)
  expect(getCardString(clubsJack)).toBe('jack clubs')
})
