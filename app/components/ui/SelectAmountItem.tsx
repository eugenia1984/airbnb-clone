import { Counter } from "../Counter"

type Props = {
  title: string
  placeholder: string
}

export function SelectAmountItem({title, placeholder}: Props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col">
        <h3 className="underline font-medium">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">
          {placeholder}
        </p>
      </div>
      <Counter />
    </div>
  )
}