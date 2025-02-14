import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLinks from "@/components/dashboard/navlinks";
import { gql, TypedDocumentNode } from "@apollo/client";
import { getClient } from "@/services/apollo-client/ApolloClient";

export default async function SideBar() {
  // await new Promise(resolve => setTimeout(resolve, 2000)); // here we simulate a very slow request
  const { data } = await getClient()
    .query({
      query: GET_USER,
      variables: { id: "2" }
    });

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20  items-center justify-start rounded-md bg-gray-50 p-4"
        href="/dashboard"
      >
        <Avatar>
          <AvatarImage src={data?.character?.image} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pl-1.5 grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{data?.character?.name}</span>
          <span className="truncate text-xs">{data?.character?.status}</span>
        </div>
      </Link>
      <div className="flex grow bg-gray-50 rounded-md flex-row justify-items-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}


export const GET_USER: TypedDocumentNode<{
  character: {
    id: string;
    name: string;
    status: string;
    image: string;
  }
}> = gql`
query getCharacterById($id: ID!) {
  character(id: $id) {
    id
    name,
    status
    image
  }
}
`;