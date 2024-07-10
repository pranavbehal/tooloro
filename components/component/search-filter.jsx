"use client";

import { useState, useEffect } from "react";
import { SearchWithTags } from "@/components/component/search-with-tags";

export function SearchFilter({
  onFilterChange,
  initialSearch,
  initialTags,
  title,
  subtitle,
}) {
  const [activeFilters, setActiveFilters] = useState(initialTags || []);
  const [searchTerm, setSearchTerm] = useState(initialSearch || "");

  useEffect(() => {
    setActiveFilters(initialTags || []);
    setSearchTerm(initialSearch || "");
  }, [initialTags, initialSearch]);

  const handleFilterChange = ({ tags, search }) => {
    setActiveFilters(tags);
    setSearchTerm(search);
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

// Old Code (Worked when not implementing checking URL for active tags when refreshed/navigated to)
// "use client";

// import { useState, useEffect } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { SearchWithTags } from "@/components/component/search-with-tags";

// export function SearchFilter({
//   onFilterChange,
//   initialSearch,
//   initialTags,
//   title,
//   subtitle,
// }) {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [activeFilters, setActiveFilters] = useState(initialTags || []);
//   const [searchTerm, setSearchTerm] = useState(initialSearch || "");

//   useEffect(() => {
//     const tags = searchParams.get("tags");
//     if (tags) {
//       setActiveFilters(tags.split(","));
//     }
//     setSearchTerm(initialSearch || "");
//   }, [searchParams, initialSearch, initialTags]);

//   const handleFilterChange = ({ tags, search }) => {
//     setActiveFilters(tags);
//     setSearchTerm(search);

//     const newSearchParams = new URLSearchParams(searchParams);
//     if (tags.length > 0) {
//       newSearchParams.set("tags", tags.join(","));
//     } else {
//       newSearchParams.delete("tags");
//     }
//     if (search) {
//       newSearchParams.set("search", search);
//     } else {
//       newSearchParams.delete("search");
//     }
//     router.push(`?${newSearchParams.toString()}`);
//     onFilterChange({ tags, search });
//   };

//   return (
//     <SearchWithTags
//       activeFilters={activeFilters}
//       searchTerm={searchTerm}
//       onFilterChange={handleFilterChange}
//       title={title}
//       subtitle={subtitle}
//     />
//   );
// }
