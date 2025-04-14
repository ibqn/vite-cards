import { Card } from '@/components/card'
import { cn } from '@/utils/class-names'
import { randomInt } from '@/lib/random'
import { shuffle } from '@/lib/shuffle'
import { useState } from 'react'
import type { Card as CardType } from '@/lib/card'
import { CardHolder } from '@/components/card-holder'
import { AnimatePresence } from 'motion/react'

export const App = () => {
  const [cards, setCards] = useState(() =>
    Array.from({ length: 36 }, (_, i) => i)
  )
  const [selectedCard, setSelectedCard] = useState<undefined | CardType>(
    undefined
  )

  return (
    <div className="grid min-h-screen items-center gap-2 bg-green-950 p-2">
      <div className="flex items-center gap-2">
        <Card />
        <div>
          <button
            className="flex cursor-pointer rounded border bg-white px-2 py-1 hover:bg-white/80"
            onClick={() => {
              setCards(shuffle(cards.slice()))
            }}
          >
            shuffle
          </button>
        </div>

        <CardHolder
          className="w-26"
          onClick={() => {
            const randomCard = selectedCard ? undefined : randomInt(36)
            console.log('selectedCard', randomCard)
            setSelectedCard(randomCard)

            let newCards = cards.slice()
            if (randomCard !== undefined) {
              newCards = newCards.filter((card) => card !== randomCard)
            } else {
              newCards.push(selectedCard!)
            }

            setCards(newCards)
          }}
        >
          <AnimatePresence mode="wait">
            {selectedCard && <Card card={selectedCard} flipped={false} />}
          </AnimatePresence>
        </CardHolder>
      </div>

      <div className="flex flex-row overflow-y-auto">
        {cards.map((card, idx) => (
          <Card
            key={card}
            flipped={false}
            card={card}
            className={cn(idx !== 0 && '-ml-26')}
          />
        ))}
      </div>
    </div>
  )
}
