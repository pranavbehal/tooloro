import { notFound } from "next/navigation";
import ProductInfo from "@/components/component/product-info";
import { getSoftwareData } from "@/lib/getSoftwareData";
export default async function ProductPage({ params }) {
  const { id } = params;

  const data = await getSoftwareData({ id });
  console.log(data);

  if (!data || data.length === 0) {
    notFound();
  }

  const product = data[0];

  return (
    <>
      <ProductInfo
        title={product.tool_name}
        short_description={product.short_description}
        long_description={product.long_description}
        link={product.link || ""}
        logo={product.logo}
        image={product.image || "/placeholder.jpg"}
        deal={product.deal || ""}
        tutorial={product.tutorial}
      />
    </>
  );
}
