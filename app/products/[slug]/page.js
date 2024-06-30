import ProductInfo from "@/components/component/product-info";

export const revalidate = 420;

export async function generateStaticParams() {
  const posts = await fetch(process.env.URL + "/api/content").then((res) =>
    res.json()
  );

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }) {
  const posts = await fetch(process.env.URL + "/api/content").then((res) =>
    res.json()
  );

  const post = posts.find((post) => post.slug === params.slug);

  return (
    <>
      <ProductInfo
        title={post.title}
        description={post.description}
        content={post.content}
      />
    </>
  );
}
