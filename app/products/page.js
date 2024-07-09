"use client";

import { useState, useEffect, useMemo } from "react";
import { SearchFilter } from "@/components/component/search-filter";
import {
  LineProductCards,
  SkeletonLineProductCards,
} from "@/components/component/line-product-cards";
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
        filters.tags.every((tag) => item.tags.includes(tag));

      const searchTerm = filters.search.toLowerCase();
      const matchesSearch =
        filters.search === "" ||
        item.tool_name.toLowerCase().includes(searchTerm) ||
        item.short_description.toLowerCase().includes(searchTerm) ||
        item.long_description.toLowerCase().includes(searchTerm);

      return matchesTags && matchesSearch;
    });
  }, [allData, filters]);

  return (
    <div>
      <SearchFilter
        onFilterChange={handleFilterChange}
        title="All Products"
        subtitle="Explore our library of software to find the perfect fit for your needs."
      />
      {isLoading ? <p></p> : <LineProductCards products={filteredData} />}
    </div>
  );
}
