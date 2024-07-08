"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SearchWithTags } from "@/components/component/search-with-tags";

export function SearchFilter({ onFilterChange, title, subtitle }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const tags = searchParams.get("tags");
    const search = searchParams.get("search");
    if (tags) {
      setActiveFilters(tags.split(","));
    }
    if (search) {
      setSearchTerm(search);
    }
  }, [searchParams]);

  const handleFilterChange = ({ tags, search }) => {
    setActiveFilters(tags);
    setSearchTerm(search);

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
    router.push(`?${newSearchParams.toString()}`);
    onFilterChange({ tags, search });
  };

  return (
    <SearchWithTags
      activeFilters={activeFilters}
      searchTerm={searchTerm}
      onFilterChange={handleFilterChange}
      title={title}
      subtitle={subtitle}
    />
  );
}
