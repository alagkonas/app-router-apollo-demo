import { gql, TypedDocumentNode } from "@apollo/client";

export const GET_LOCATIONS: TypedDocumentNode<{
  locations: {
    results: {
      id: string;
      name: string;
      dimension: string;
    }[];
  }
}> = gql`
 query getAllLocations($page: Int) {
  locations(page: $page) {
    results {
      id
      name
      dimension
    }
  }
}
`;