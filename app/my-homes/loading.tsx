import { HeadlineH2 } from "../components/HeadlineH2"
import { SkeltonCard } from "../components/SkeletonCard"

export default function MyHomesLoading() {
  return (
    <section className="container mx-auto px-5 lg:px-10 mt-10">
      <HeadlineH2 text="Your Homes" />
      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
        <SkeltonCard />
      </div>
    </section>
  )
}