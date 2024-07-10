"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchFilter } from "@/components/component/search-filter";
import { LineProductCards } from "@/components/component/line-product-cards";
import { getSoftwareData } from "@/lib/getSoftwareData";

export default function Products() {
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState({ tags: [], search: "" });
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    async function fetchAllData() {
      const data = await getSoftwareData({
        deals: true,
        sortBy: "created_at",
      });

      setAllData(data);
      setIsLoading(false);
    }
    fetchAllData();

    const searchQuery = searchParams.get("search") || "";
    const tagsQuery = searchParams.get("tags") || "";
    const tags = tagsQuery ? tagsQuery.split(",") : [];
    setFilters({ tags, search: searchQuery });
  }, [searchParams]);

  const handleFilterChange = ({ tags, search }) => {
    setFilters({ tags, search });

    const newSearchParams = new URLSearchParams(searchParams);
    if (tags.length > 0) {
      newSearchParams.set("tags", tags.join(","));
    } else {
      newSearchParams.delete("tags");
    }
    if (search) {
      newSearchParams.set("search", search);
    } else {
      newSearchParams.delete("search");
    }
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  const filteredData = allData.filter((item) => {
    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.every((tag) => item.tags.includes(tag));

    const searchTerm = filters.search.toLowerCase();
    const matchesSearch =
      filters.search === "" ||
      item.tool_name.toLowerCase().includes(searchTerm) ||
      item.short_description.toLowerCase().includes(searchTerm);

    return matchesTags && matchesSearch;
  });

  return (
    <div>
      <SearchFilter
        onFilterChange={handleFilterChange}
        initialSearch={filters.search}
        initialTags={filters.tags}
        title="Deals"
        subtitle="Find deals and discounts on software."
      />
      {isLoading ? (
        <p></p>
      ) : filteredData.length > 0 ? (
        <LineProductCards products={filteredData} />
      ) : (
        <div className="text-center py-20">
          <h2 className="text-3xl font-semibold text-gray-700">
            Sorry, but we couldn&apos;t find any results.
          </h2>
        </div>
      )}
    </div>
  );
}
