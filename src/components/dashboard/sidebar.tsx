import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import NavLinks from "@/components/dashboard/navlinks";

export default function SideBar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20  items-center justify-start rounded-md bg-gray-50 p-4"
        href="/public"
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="pl-1.5 grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">{"name"}</span>
          <span className="truncate text-xs">{"email"}</span>
        </div>
      </Link>
      <div className="flex grow bg-gray-50 rounded-md flex-row justify-items-start space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
      </div>
    </div>
  );
}