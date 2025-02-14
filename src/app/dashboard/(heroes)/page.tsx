import React, { Suspense } from "react";
import HeroesList from "@/components/dashboard/heroes/heroes-list";
import { HeroesListSkeleton, TopHeroesSkeleton } from "@/components/dashboard/heroes/hero-skeletons";
import TopHeroes from "@/components/dashboard/heroes/top-heroes";

export const dynamic = 'force-dynamic';

export default function DashboardPage() {
  return (
    <main>
      <h3 className="scroll-m-20 text-4xl gray-800 tracking-tight w-3/5">
        Heroes
      </h3>
      <Suspense fallback={<TopHeroesSkeleton />}>
        <TopHeroes />
      </Suspense>
      <Suspense fallback={<HeroesListSkeleton />}>
        <HeroesList />
      </Suspense>
    </main>
  );
}
