"use client";

import { DealsHero } from "@/components/component/deals-hero";
import { LineProductCards } from "@/components/component/line-product-cards";

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
      <DealsHero onFilterChange={handleFilterChange} />
      <LineProductCards
        posts={filteredPosts}
        deals={["33% off", "20% off", "Buy one get one free", "50% off"]}
      />
    </div>
  );
}
