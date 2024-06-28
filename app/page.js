import Link from "next/link";
import Image from "next/image";
import { HeroSearch } from "@/components/component/hero-search";
import { ProductCard } from "@/components/component/product-card";
import { Card_with_image_v5 } from "@/components/component/new-card";

export default function Home() {
  return (
    <>
      <HeroSearch />
      <Card_with_image_v5 />
      <ProductCard />
    </>
  );
}
