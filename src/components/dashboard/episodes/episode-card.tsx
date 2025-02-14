import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function EpisodeCard({
    name,
    air_date,
    episode
  }: {
    name: string;
    air_date: string;
    episode: string
  }
) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>{air_date}</CardDescription>
        <CardDescription>{episode}</CardDescription>
      </CardHeader>
    </Card>
  );
};