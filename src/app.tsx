import { Card } from '@/components/card'
import { cn } from './utils/class-names'

export const App = () => {
  return (
    <div className="grid min-h-screen items-center bg-green-950 p-2">
      <div className="flex">
        <Card />
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
    </div>
  )
}
