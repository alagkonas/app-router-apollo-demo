import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function LocationCard({
    name,
    dimension
  }: {
    name: string;
    dimension: string;
  }
) {
  return (
    <Card className="w-full max-w-sm overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription>{dimension}</CardDescription>
      </CardHeader>
    </Card>
  );
};