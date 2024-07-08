// "use client";

import { SearchWithTags } from "@/components/component/search-with-tags";
import { LineProductCards } from "@/components/component/line-product-cards";
import { getSoftwareData } from "@/lib/getSoftwareData";

// Set it to 5-10 min for prod:
// export const revalidate = 600;
export const revalidate = 10;

// import { useState, useEffect } from "react";

export default async function Products() {
  // const [filteredPosts, setFilteredPosts] = useState([]);

  // const handleFilterChange = ({ tags, search }) => {
  //   // Implement filtering logic here
  //   const filtered = allPosts.filter(
  //     (post) =>
  //       (tags.length === 0 || tags.some((tag) => post.tags.includes(tag))) &&
  //       (search === "" ||
  //         post.title.toLowerCase().includes(search.toLowerCase()))
  //   );
  //   setFilteredPosts(filtered);
  // };

  const data = await getSoftwareData({
    sortBy: "created_at",
    sortOrder: "des",
    limit: 4,
  });

  return (
    <div>
      <SearchWithTags onFilterChange={handleFilterChange} />
      {/* <LineProductCards products={filteredPosts} /> */}
      <LineProductCards title="New Software" products={data} cta="View All" />
    </div>
  );
}
