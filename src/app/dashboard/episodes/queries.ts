import { gql, TypedDocumentNode } from "@apollo/client";

export const GET_EPISODES: TypedDocumentNode<{
  episodes: {
    results: {
      name: string;
      air_date: string;
      episode: string
    }[];
  }
}> = gql`
 query getAllEpisodes($page: Int) {
  episodes(page: $page) {
    results {
      id
      name
     air_date
      episode
      created
    }
  }
}
`;