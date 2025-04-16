import { Card } from '@/components/card'
import { randomInt } from '@/lib/random'
import { shuffle } from '@/lib/shuffle'
import { useState } from 'react'
import type { Card as CardType } from '@/lib/card'
import { CardHolder } from '@/components/card-holder'
import { AnimatePresence, motion } from 'motion/react'
import { produce } from 'immer'

export const App = () => {
  const [cards, setCards] = useState(() =>
    Array.from({ length: 36 }, (_, i) => i)
  )
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null)

  return (
    <div className="grid min-h-screen items-center gap-2 overflow-hidden bg-green-950 p-2">
      <div className="flex items-center gap-2">
        <Card />
        <div>
          <button
            className="flex cursor-pointer rounded border bg-white px-2 py-1 hover:bg-white/80"
            onClick={() => setCards(produce((draft) => shuffle(draft)))}
          >
            shuffle
          </button>
        </div>

        <CardHolder
          onClick={() => {
            const randomCard = selectedCard !== null ? null : randomInt(36)
            setSelectedCard(randomCard)

            setCards(
              produce((draft) => {
                if (randomCard !== null) {
                  const index = draft.findIndex((card) => card === randomCard)
                  if (index !== -1) {
                    draft.splice(index, 1)
                  }
                } else {
                  draft.push(selectedCard!)
                }
              })
            )
          }}
        >
          <AnimatePresence mode="wait">
            {selectedCard !== null && (
              <Card card={selectedCard} flipped={false} />
            )}
          </AnimatePresence>
        </CardHolder>
      </div>
      <div className="h-card-height relative flex flex-row">
        <AnimatePresence>
          {cards.map((card, idx) => (
            <motion.div
              className="absolute"
              key={card}
              animate={{ x: idx * 40, y: 0 }}
              transition={{ type: 'tween' }}
              onClick={() => {
                if (selectedCard !== null) {
                  return
                }
                setSelectedCard(card)
                setCards(
                  produce((draft) => {
                    const index = draft.findIndex((c) => c === card)
                    if (index !== -1) {
                      draft.splice(index, 1)
                    }
                  })
                )
              }}
            >
              <Card flipped={false} card={card} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
