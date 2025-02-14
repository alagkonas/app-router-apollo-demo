import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HeroCard({
    imageUrl,
    name,
    species
  }: {
    imageUrl: string;
    name: string;
    species: string;
  }
) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <div className="relative w-full h-48">
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>{species}</CardDescription>
      </CardHeader>
    </Card>
  );
}
;
