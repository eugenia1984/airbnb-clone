type Props = {
  title: string
  description: string
}

export function SearchModalButton({ title, description }: Props) {
  return (
    <div className="rounded-full py-2 px-4 flex items-center cursor-pointer gap-x-2 hover:bg-green-600/15">
      <div className="flex flex-col h-full font-medium px-2 py-1 rounded-full ">
        <p className="px-4">{title}</p>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  )
}