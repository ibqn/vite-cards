import { cn } from '@/utils/class-names'
import { type ComponentProps } from 'react'

type Props = ComponentProps<'div'>

export const CardHolder = ({ className, ...props }: Props) => {
  return (
    <div
      {...props}
      className={cn(
        'h-card-height w-card-width relative flex items-center justify-center rounded-lg outline-1 outline-offset-2 outline-zinc-400 outline-dashed md:outline-2',
        className
      )}
    />
  )
}
