import Link from "next/link";
import Image from "next/image";
import { HomeHero } from "@/components/component/home-hero";
import { LineProductCards } from "@/components/component/line-product-cards";

export default function Home() {
  return (
    <>
      <HomeHero />
      <LineProductCards title="New Software" />
      <LineProductCards title="Trending Software" />
      <LineProductCards title="Most Popular Software" />
    </>
  );
}
