import Link from "next/link";
import Image from "next/image";
import { HeroSearch } from "@/components/component/hero-search";
import { LineProductCards } from "@/components/component/line-product-cards";

export default function Home() {
  return (
    <>
      <HeroSearch />
      <LineProductCards />
    </>
  );
}
