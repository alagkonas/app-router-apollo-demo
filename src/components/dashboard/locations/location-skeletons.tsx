import React from "react";
import { Card, CardHeader } from "@/components/ui/card";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const LocationCardSkeleton = () => {
  return (
    <Card className="w-full overflow-hidden">
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

export function TopLocationsSkeleton() {
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Top Locations
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)]
          .map((_, index) => (
            <LocationCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export function WorstLocationsSkeleton() {
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Worst Locations
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(3)]
          .map((_, index) => (
            <LocationCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
};

export function LocationsListSkeleton() {
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Locations List
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {[...Array(20)]
          .map((_, index) => (
            <LocationCardSkeleton key={index} />
          ))}
      </div>
    </div>
  );
}
