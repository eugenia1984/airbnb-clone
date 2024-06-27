import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader } from "@/components/ui/card"
import { Counter } from "@/app/components/Counter"

export default function DescriptionPage () {
  return(
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Please describe your home
        </h2>
      </div>
      <form>
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-5 mb-36">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input 
              name="title" 
              required 
              placeholder="Please add the title here ..."
              type="text"
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea 
              name="description"
              required
              placeholder="Please add the description here..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Price</Label>
            <Input 
              name="price" 
              required 
              type="number"
              placeholder="Price per night in EUR ..."
              min={10}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Image</Label>
            <Input 
              name="image" 
              required 
              type="file"
            />
          </div>
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">
                    Guest
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    How many guest ?
                  </p>
                </div>
                <Counter />
              </div>
            </CardHeader>
          </Card>
        </div>
      </form>
    </>
  )
}