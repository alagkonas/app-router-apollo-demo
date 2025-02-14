"use client";

import React from "react";
import { useSuspenseQuery } from "@apollo/client";
import EpisodeCard from "@/components/dashboard/episodes/episode-card";
import { GET_EPISODES } from "@/app/dashboard/episodes/queries";

export default function TopEpisodes() {
  const { data } = useSuspenseQuery(GET_EPISODES, { variables: { pages: 1 } });

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Top Episodes
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.episodes?.results?.slice(0, 3)
          .map((episode, index) => (
            <EpisodeCard
              key={index}
              name={episode?.name}
              episode={episode?.episode}
              air_date={episode.air_date}
            />
          ))}
      </div>
    </div>
  );
}