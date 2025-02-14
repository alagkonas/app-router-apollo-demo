"use client";

import {
  HomeIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Heroes", href: "/dashboard", icon: HomeIcon },
  {
    name: "Episodes",
    href: "/dashboard/episodes",
    icon: HomeIcon
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] text-gray-800 bg-gray-50 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-gray-100 hover:text-gray-800 md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-gray-200 text-gray-50": pathname === link.href
              }
            )}>
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}