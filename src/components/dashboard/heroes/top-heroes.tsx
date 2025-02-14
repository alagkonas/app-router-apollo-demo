import HeroCard from "@/components/dashboard/heroes/hero-card";
import React from "react";
import { getClient } from "@/services/apollo-client/ApolloClient";
import { gql, TypedDocumentNode } from "@apollo/client";

export default async function TopHeroes() {
  await new Promise(resolve => setTimeout(resolve, 2000)); // here we simulate a slow request
  const { data } = await getClient()
    .query({
      query: GET_HEROES,
      variables: { page: 1 }
    });

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Top Heroes
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.characters?.results?.slice(0, 3)
          .map((hero, index) => (
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

export const GET_HEROES: TypedDocumentNode<{
  characters: {
    results: {
      id: string;
      name: string;
      status: string;
      species: string;
      image: string;
    }[];
  }
}> = gql`
 query getAllCharacters($page: Int) {
  characters(page: $page,) {
    results {
      id
      name
      status
      species
      image
    }
  }
}
`;