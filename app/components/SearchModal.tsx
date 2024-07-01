import { Dialog, DialogTrigger } from "@/components/ui/dialog"

import { Search } from "lucide-react"

export function SearchModal() {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="rounded-full py-2 px-5 border flex items-center cursor-pointer">
          <div className="flex h-full divide-x font-medium">
            <p className="px-4">Anywhere</p>
            <p className="px-4">Any Week</p>
            <p className="px-4">Add Guest</p>
          </div>
          <Search className="bg-primary text-white p-2 h-8 w-8 rounded-full" />
        </div>
      </DialogTrigger>
    </Dialog>
  )
}