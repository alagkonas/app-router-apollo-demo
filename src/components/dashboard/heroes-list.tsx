import React from "react";
import HeroCard from "@/components/dashboard/hero-card";
import { getClient } from "@/services/apollo-client/ApolloClient";
import { GET_HEROES } from "@/components/dashboard/top-heroes";

export default async function HeroesList() {
  await new Promise(resolve => setTimeout(resolve, 4000)); // here we simulate a very slow request
  const { data } = await getClient()
    .query({
      query: GET_HEROES,
      variables: { page: 1 }
    });

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Heroes List
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.characters?.results?.map((hero, index) => (
          <HeroCard
            key={index}
            imageUrl={hero?.image}
            name={hero?.name}
            species={hero?.species}
          />
        ))}
      </div>
    </div>
  );
}
