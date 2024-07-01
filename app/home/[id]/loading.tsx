import { Skeleton } from "@/components/ui/skeleton"

export default function HomePageLoading() {
  return (
    <div className="w-[75%] mx-auto mt-10">
      <Skeleton className="h-4 w-1/3" />
      <Skeleton className="w-full h-[520px] mt-5" />
      <section className="mt-6 justify-between gap-x-12">
        <div className="w-2/3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-4 w-1/3 mt-3" />
        </div>
        <div className="w-1/3">
          <Skeleton className="w-full h-8" />
        </div>
      </section>
    </div>
  )
}