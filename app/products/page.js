import { Suspense } from "react";
import { SearchFilter } from "@/components/component/search-filter";
import { LineProductCards } from "@/components/component/line-product-cards";
import { getSoftwareData } from "@/lib/getSoftwareData";

export const revalidate = 10;

export default async function Products({ searchParams }) {
  const initialData = await getSoftwareData({
    sortBy: "created_at",
    sortOrder: "desc",
    tags: searchParams.tags ? searchParams.tags.split(",") : [],
    search: searchParams.search || "",
  });

  return (
    <div>
      <SearchFilter />
      <Suspense fallback={<div>Loading...</div>}>
        <ProductList initialData={initialData} />
      </Suspense>
    </div>
  );
}

function ProductList({ initialData }) {
  return <LineProductCards products={initialData} />;
}
