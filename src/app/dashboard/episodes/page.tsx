import React, { Suspense } from "react";
import { EpisodesListSkeleton, TopEpisodesSkeleton } from "@/components/dashboard/episodes/episode-skeletons";
import TopEpisodes from "@/components/dashboard/episodes/top-episodes";
import EpisodesList from "@/components/dashboard/episodes/episodes-list";
import { PreloadQuery } from "@/services/apollo-client/ApolloClient";
import { GET_EPISODES } from "@/app/dashboard/episodes/queries";

export const dynamic = "force-dynamic";

export default function EpisodesPage() {
  return (
    <main>
      <h3 className="scroll-m-20 text-4xl gray-800 tracking-tight w-3/5">
        Episodes
      </h3>

      <PreloadQuery
        query={GET_EPISODES}
        variables={{
          page: 1
        }}
      >
        <Suspense fallback={<TopEpisodesSkeleton />}>
          <TopEpisodes />
        </Suspense>
      </PreloadQuery>

      <PreloadQuery
        query={GET_EPISODES}
        variables={{
          page: 1
        }}
      >
        {(queryRef) => (
          <Suspense fallback={<EpisodesListSkeleton />}>
            <EpisodesList queryRef={queryRef}/>
          </Suspense>
        )}
      </PreloadQuery>
    </main>
  );
}