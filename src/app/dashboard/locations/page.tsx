import React, { Suspense } from "react";
import { LocationsListSkeleton, TopLocationsSkeleton } from "@/components/dashboard/locations/location-skeletons";
import TopLocations from "@/components/dashboard/locations/top-locations";
import WorstLocations from "@/components/dashboard/locations/worst-locations";
import LocationsList from "@/components/dashboard/locations/locations-list";

export const dynamic = "force-dynamic";

export default function LocationsPage() {
  return (
    <main>
      <h3 className="scroll-m-20 text-4xl gray-800 tracking-tight w-3/5">
        Locations
      </h3>

      <Suspense fallback={<TopLocationsSkeleton />}>
        <TopLocations />
      </Suspense>


      <Suspense fallback={<TopLocationsSkeleton />}>
        <WorstLocations />
      </Suspense>

      <Suspense fallback={<LocationsListSkeleton />}>
        <LocationsList />
      </Suspense>

    </main>
  );
}