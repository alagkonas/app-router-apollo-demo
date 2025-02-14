import React from "react";
import { GET_LOCATIONS } from "@/app/dashboard/locations/queries";
import LocationCard from "@/components/dashboard/locations/location-card";
import { getClient } from "@/services/apollo-client/ApolloClient";

export default async function LocationsList() {
  await new Promise(resolve => setTimeout(resolve, 3000)); // here we simulate a very slow request
  const { data } = await getClient()
    .query({
      query: GET_LOCATIONS,
      variables: { page: 1 }
    });

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Locations List
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.locations?.results?.map((location) => (
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
