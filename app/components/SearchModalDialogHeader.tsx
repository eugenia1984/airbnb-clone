import { DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

type Props = {
  title: string
  description: string
}

export function SearchModalDialogHeader({ title, description }: Props) {
  return (
    <DialogHeader>
      <DialogTitle>
        {title}
      </DialogTitle>
      <DialogDescription>
        {description}
      </DialogDescription>
    </DialogHeader>
  )
}