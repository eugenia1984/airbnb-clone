import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";

const MarketingPage = () => {
  return (
    <section className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4 bg-green-100 text-green-900 rounded-full uppercase">
          <Trophy className="h-6 w-6 mr-2"/>
          No. 1 task manager
        </div>
        <h1 className="text-4xl md:text-6xl text-center text-neutral-700 mb-12 mt-6 px-6">
          TrelloClone helps team move
        </h1>
        <div className="text-3xl md:text-6xl bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 p-2 rounded-md pb-4 w-fit">
          work forward
        </div>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-xs md:max-2xl text-center mx-auto py-6">
        Collaborate, manage projects and reach new productivity peaks. From high rises to the home office, the way your team works is unique - accomplish it all with TrelloClone.
      </div>
      <Button size="lg" asChild> 
        <Link href='/sign-up'>
          Get TrelloClone for free
        </Link>
      </Button>
    </section>
  )
}

export default MarketingPage;