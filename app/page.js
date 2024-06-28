import Link from "next/link";
import Image from "next/image";
import { HeroSearch } from "@/components/component/hero-search";
import { LineProductCards } from "@/components/component/line-product-cards";

export default function Home() {
  return (
    <>
      <HeroSearch />
      <LineProductCards title="New Software" />
      <LineProductCards title="Trending Software" />
      <LineProductCards title="Most Popular Software" />
    </>
  );
}
