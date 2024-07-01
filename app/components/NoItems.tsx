import { FileQuestion } from "lucide-react"

type Props = {
  title: string
  description: string
}

export function NoItems({ title, description }: Props) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-45 mt-10">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
        <FileQuestion className="h-12 w-12 text-primary" />
      </div>
      <h2 className="mt-6 text-xl font-semibold" >
        {title}
      </h2>
      <p className="mt-3 text-center text-sm leading-6 text-muted-foreground" >
        {description}
      </p>
    </div>
  )
}
