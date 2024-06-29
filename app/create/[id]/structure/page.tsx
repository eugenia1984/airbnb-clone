import { createCategoryPage } from "@/app/actions"

import { HeadlineH2, CreationButton, SelectCategory } from "@/app/components"

export default function StructureRoute({params}: {params: {id: string}}) {
  return (
    <>
      <section className="w-3/5 mx-auto pb-8">
        <HeadlineH2 text="Which of these best describe your Home?" />
      </section>
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