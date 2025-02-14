import HeroCard from "@/components/dashboard/hero-card";
import React from "react";

export default async function TopHeroes() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  const heroes =
    [...Array(3)
      .map((idx) => idx)
    ];

  return (
    <div className="pt-7">
      <h4 className="scroll-m-20 text-2xl gray-800 tracking-tight w-3/5 pt-2">
        Top Heroes
      </h4>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {heroes.map((card, index) => (
          <HeroCard
            key={index}
            imageUrl={"/public/vercel.svg"}
            title={"Hero Name"}
            description={"Hero Description"}
          />
        ))}
      </div>
    </div>
  );
}