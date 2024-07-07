import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/component/home-hero";
import { LineProductCards } from "@/components/component/line-product-cards";

import { getSoftwareData } from "@/lib/getSoftwareData";
import { NewProductCard } from "@/components/component/product-card";

// Set it to 5-10 min for prod:
// export const revalidate = 600;
export const revalidate = 10;

export default async function Home() {
  const data = await getSoftwareData({
    filterDeals: true,
    sortBy: "created_at",
    sortOrder: "desc",
  });

  return (
    <>
      <HomeHero />
      {data.map((item) => (
        <NewProductCard
          key={item.id}
          image={item.image}
          logo={item.logo}
          name={item.tool_name}
          shortDescription={item.short_description}
          deal={item.deal}
          websiteLink={item.link}
        />
      ))}
      <LineProductCards title="New Software" />
      <LineProductCards title="Trending Software" />
      <LineProductCards title="Most Popular Software" />
    </>
  );
}
