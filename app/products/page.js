"use client";

import { useState, useEffect, useMemo } from "react";
import { SearchFilter } from "@/components/component/search-filter";
import { LineProductCards } from "@/components/component/line-product-cards";
import { getSoftwareData } from "@/lib/getSoftwareData";

export default function Products() {
  const [allData, setAllData] = useState([]);
  const [filters, setFilters] = useState({ tags: [], search: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllData() {
      const data = await getSoftwareData();
      setAllData(data);
      setIsLoading(false);
    }
    fetchAllData();
  }, []);

  const handleFilterChange = ({ tags, search }) => {
    setFilters({ tags, search });
  };

  const filteredData = useMemo(() => {
    return allData.filter((item) => {
      const matchesTags =
        filters.tags.length === 0 ||
        filters.tags.some((tag) => item.tags.includes(tag));
      const matchesSearch =
        filters.search === "" ||
        item.title.toLowerCase().includes(filters.search.toLowerCase());
      return matchesTags && matchesSearch;
    });
  }, [allData, filters]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SearchFilter onFilterChange={handleFilterChange} />
      <LineProductCards products={filteredData} />
    </div>
  );
}
