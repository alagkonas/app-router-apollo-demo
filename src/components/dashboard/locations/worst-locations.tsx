"use client";

import React from "react";
import { useQuery } from "@apollo/client";
import { GET_LOCATIONS } from "@/app/dashboard/locations/queries";
import LocationCard from "@/components/dashboard/locations/location-card";
import { WorstLocationsSkeleton } from "@/components/dashboard/locations/location-skeletons";

export default function WorstLocations() {
  const { data, loading } = useQuery(GET_LOCATIONS, {
    variables: {
      page: 1
    },
    ssr: false,
    fetchPolicy: "cache-only"
  });

  if (loading) return <WorstLocationsSkeleton />;

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Worst Locations
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.locations?.results?.slice(3, 6)
          .map((location) => (
            <LocationCard
              key={location?.id}
              name={location?.name}
              dimension={location?.dimension}
            />
          ))}
      </div>
    </div>
  );
}
