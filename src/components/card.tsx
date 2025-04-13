import { getRank, getSuite, Suite, Rank } from '@/lib/card'
import type { Card as CardType } from '@/lib/card'
import { cn } from '@/utils/class-names'
import type { ComponentProps } from 'react'

type Props = {
  card?: CardType
  flipped?: boolean
  noShadow?: boolean
} & ComponentProps<'div'>

export const Card = ({
  card,
  flipped,
  noShadow,
  className,
  ...props
}: Props) => {
  const isFace = !flipped && card !== undefined

  const src = isFace ? createCardSVGPath(card!) : CARD_BACK_SVG_PATH

  return (
    <div
      {...props}
      className={cn(
        'relative select-none',
        !noShadow && 'shadow-lg shadow-zinc-500/40 drop-shadow-xl',
        isFace && 'rounded-lg border-white bg-white p-1',
        className
      )}
    >
      <img src={src} />
    </div>
  )
}

const CARDS_PREFIX_PATH = '/cards/'
const CARD_BACK_SVG_PATH = `${CARDS_PREFIX_PATH}BACK.svg`

const createCardSVGPath = (card: Readonly<CardType>) =>
  `${CARDS_PREFIX_PATH}${getSuitePath(card)}-${getRankPath(card)}.svg`

const getSuitePath = (card: Readonly<CardType>): string => {
  const suite = getSuite(card)

  return {
    [Suite.clubs]: 'CLUB',
    [Suite.diamonds]: 'DIAMOND',
    [Suite.hearts]: 'HEART',
    [Suite.spades]: 'SPADE',
  }[suite]
}

const getRankPath = (card: Readonly<CardType>): string => {
  const rank = getRank(card)

  return {
    [Rank.six]: '6',
    [Rank.seven]: '7',
    [Rank.eight]: '8',
    [Rank.nine]: '9',
    [Rank.ten]: '10',
    [Rank.jack]: '11-JACK',
    [Rank.queen]: '12-QUEEN',
    [Rank.king]: '13-KING',
    [Rank.ace]: '1',
  }[rank]
}
