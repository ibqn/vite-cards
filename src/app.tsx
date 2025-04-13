import { Card } from '@/components/card'
import { cn } from './utils/class-names'
import { randomInt } from './lib/random'
import { shuffle } from './lib/shuffle'

export const App = () => {
  return (
    <div className="grid min-h-screen items-center bg-green-950 p-2">
      <div className="flex gap-2">
        <Card className="rounded-lg bg-white p-1" />
        <Card flipped={false} card={randomInt(36)} />
      </div>

      <div className="flex flex-row overflow-y-auto">
        {Array.from({ length: 36 }, (_, i) => (
          <Card
            key={i}
            flipped={false}
            card={i}
            className={cn(i !== 0 && '-ml-26')}
          />
        ))}
      </div>

      <div className="flex flex-row overflow-y-auto">
        {shuffle(Array.from({ length: 36 }, (_, i) => i)).map((card, idx) => (
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
