"use client";

import { SearchWithTags } from "@/components/component/search-with-tags";
import { LineProductCards } from "@/components/component/line-product-cards";

// export default function Products() {
//   return (
//     <>
//       <SearchWithTags />
//       <LineProductCards />
//       <LineProductCards />
//       <LineProductCards />
//     </>
//   );
// }

import { useState, useEffect } from "react";

export default function Products() {
  const [filteredPosts, setFilteredPosts] = useState([]);

  const handleFilterChange = ({ tags, search }) => {
    // Implement filtering logic here
    const filtered = allPosts.filter(
      (post) =>
        (tags.length === 0 || tags.some((tag) => post.tags.includes(tag))) &&
        (search === "" ||
          post.title.toLowerCase().includes(search.toLowerCase()))
    );
    setFilteredPosts(filtered);
  };

  return (
    <div>
      <SearchWithTags onFilterChange={handleFilterChange} />
      {/* Render your filtered posts here */}
      <LineProductCards posts={filteredPosts} />
    </div>
  );
}
