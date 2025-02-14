"use client";

import React from "react";
import { QueryRef, useReadQuery } from "@apollo/client";
import EpisodeCard from "@/components/dashboard/episodes/episode-card";

export default function EpisodesList({ queryRef }: {
  queryRef: QueryRef<{
    episodes: {
      results: {
        id: string;
        name: string;
        air_date: string;
        episode: string
      }[];
    }
  }>
}) {
  const { data } = useReadQuery(queryRef);
  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Episodes List
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {data?.episodes?.results?.map((episode) => (
          <EpisodeCard
            key={episode?.id}
            name={episode?.name}
            episode={episode?.episode}
            air_date={episode.air_date}
          />
        ))}
      </div>
    </div>
  );
}
