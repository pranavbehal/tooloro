import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/component/home-hero";
import { LineProductCards } from "@/components/component/line-product-cards";
import { getSoftwareData } from "@/lib/getSoftwareData";

// Set it to 5-10 min for prod:
// export const revalidate = 600;
export const revalidate = 10;

export default async function Home() {
  const data = await getSoftwareData({
    sortBy: "created_at",
    sortOrder: "des",
    limit: 4,
  });

  return (
    <>
      <HomeHero />
      <LineProductCards title="New Software" products={data} cta="View All" />
    </>
  );
}
