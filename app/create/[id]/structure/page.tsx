import { SelectCategory } from "@/app/components/SelectCategory"

import { createCategoryPage } from "@/app/actions"
import { CreationButton } from "@/app/components/CreationButton"
import { HeadlineH2 } from "@/app/components/ui/HeadlineH2"

export default function StructureRoute({params}: {params: {id: string}}) {
  return (
    <>
      <div className="w-3/5 mx-auto">
      <HeadlineH2 text="Which of these best describe your Home?" />
      </div>
      <form action={createCategoryPage}>
        <input 
          type="hidden"
          name="homeId"
          value={params.id}
        />
        <SelectCategory />
        <CreationButton />
      </form>
    </>
  )
}