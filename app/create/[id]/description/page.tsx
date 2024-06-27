import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader } from "@/components/ui/card"
import { Counter } from "@/app/components/Counter"
import { CreationButton } from "@/app/components/CreationButton"
import { HeadlineH2 } from "@/app/components/ui/HeadlineH2"
import { SelectAmountItem } from "@/app/components/ui/SelectAmountItem"

export default function DescriptionPage () {
  return(
    <>
      <div className="w-3/5 mx-auto">
      <HeadlineH2 text="Please describe your home"/>
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
              <SelectAmountItem title="Guest" placeholder="How many guest?" name="guest" />
              <SelectAmountItem title="Rooms" placeholder="How many rooms?" name="rooms" />
              <SelectAmountItem title="Bathrooms" placeholder="How many bathrooms?" name="bathrooms" />
            </CardHeader>
          </Card>
        </div>
        <CreationButton />
      </form>
    </>
  )
}