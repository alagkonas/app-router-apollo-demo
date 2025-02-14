import React from "react";
import { Card, CardHeader } from "@/components/ui/card";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const HeroCardSkeleton = () => {
  return (
    <Card className="w-full overflow-hidden">
      <div className="relative w-full h-48">
        <div className={`absolute inset-0 bg-slate-200 dark:bg-slate-800 overflow-hidden ${shimmer}`} />
      </div>

      <CardHeader>
        <div className="space-y-3">
          <div className={`h-6 bg-slate-200 dark:bg-slate-800 rounded-md relative overflow-hidden ${shimmer}`} />
          <div className="space-y-2">
            <div className={`h-4 bg-slate-200 dark:bg-slate-800 rounded-md relative overflow-hidden ${shimmer}`} />
            <div className={`h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded-md relative overflow-hidden ${shimmer}`} />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export function TopHeroesSkeleton() {
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Top Heroes
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)]
          .map((_, index) => (
            <HeroCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export function HeroesListSkeleton() {
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Heroes List
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(20)]
          .map((_, index) => (
            <HeroCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
}
