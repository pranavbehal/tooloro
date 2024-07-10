import ProductInfo from "@/components/component/product-info";

const post = {
  title: "Example App",
  slug: "example",
  description:
    "An example app to show how this page will look when real apps are added",
};

export default async function BlogPostPage({ params }) {
  return (
    <>
      <ProductInfo
        title={post.title}
        short_description={post.description}
        content={post.content}
      />
    </>
  );
}
