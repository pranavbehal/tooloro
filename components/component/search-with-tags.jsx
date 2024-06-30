import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PenLine,
  LineChart,
  SearchIcon,
  SettingsIcon,
  Paintbrush,
  ListChecks,
  Bot,
} from "lucide-react";

export function SearchWithTags() {
  const [toggles, setToggles] = useState({
    writing: false,
    management: false,
    marketing: false,
    design: false,
    ai: false,
    productivity: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const renderButton = (key, icon, label) => (
    <Button
      variant={toggles[key] ? "default" : "outline"}
      onClick={() => handleToggle(key)}
    >
      {icon}
      {label}
    </Button>
  );

  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container pt-16 pb-12 lg:pt-20 lg:pb-14">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              All Products
            </h1>
            <p className="mt-3 text-xl text-muted-foreground">
              Explore our library of software to find the perfect fit for your
              needs.
            </p>
            <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
              <form>
                <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                  <div className="flex-[1_0_0%]">
                    <Label htmlFor="product" className="sr-only">
                      Search for products
                    </Label>
                    <Input
                      name="article"
                      className="h-full"
                      id="article"
                      placeholder="Search for products"
                    />
                  </div>
                  <div className="flex-[0_0_auto]">
                    <Button size={"icon"}>
                      <SearchIcon />
                    </Button>
                  </div>
                </div>
              </form>
              {/* SVG Illustrations */}
              <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                <svg
                  className="w-16 h-auto text-orange-500"
                  width={121}
                  height={135}
                  viewBox="0 0 121 135"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                  <path
                    d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
                    stroke="currentColor"
                    strokeWidth={10}
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                <svg
                  className="w-40 h-auto text-cyan-500"
                  width={347}
                  height={188}
                  viewBox="0 0 347 188"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                    stroke="currentColor"
                    strokeWidth={7}
                    strokeLinecap="round"
                  />
                </svg>
              </div>{" "}
            </div>
            <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
              {renderButton(
                "writing",
                <PenLine className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Writing"
              )}
              {renderButton(
                "management",
                <SettingsIcon className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Management"
              )}
              {renderButton(
                "marketing",
                <LineChart className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Marketing"
              )}
              {renderButton(
                "design",
                <Paintbrush className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Design & Development"
              )}
              {renderButton(
                "ai",
                <Bot className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "AI"
              )}
              {renderButton(
                "productivity",
                <ListChecks className="flex-shrink-0 w-3.5 h-auto mr-2" />,
                "Productivity & Collaboration"
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  PenLine,
  LineChart,
  SearchIcon,
  SettingsIcon,
  Paintbrush,
  ListChecks,
  Bot,
} from "lucide-react";

export function SearchWithTags({ onFilterChange }) {
  const router = useRouter();
  const [activeFilters, setActiveFilters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Initialize filters from URL on component mount
    const { tags, search } = router.query;
    if (tags) {
      setActiveFilters(tags.split(","));
    }
    if (search) {
      setSearchTerm(search);
    }
  }, []);

  useEffect(() => {
    // Update URL when filters or search term change
    const query = {};
    if (activeFilters.length > 0) {
      query.tags = activeFilters.join(",");
    }
    if (searchTerm) {
      query.search = searchTerm;
    }
    router.push(
      {
        pathname: router.pathname,
        query: query,
      },
      undefined,
      { shallow: true }
    );

    // Notify parent component about filter changes
    onFilterChange({ tags: activeFilters, search: searchTerm });
  }, [activeFilters, searchTerm]);

  const toggleFilter = (filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter)
        ? prev.filter((f) => f !== filter)
        : [...prev, filter]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // The search term is already updated in state, so we just need to notify the parent
    onFilterChange({ tags: activeFilters, search: searchTerm });
  };

  const filterButtons = [
    { label: "Writing", icon: PenLine, value: "writing" },
    { label: "Management", icon: SettingsIcon, value: "management" },
    { label: "Marketing", icon: LineChart, value: "marketing" },
    { label: "Design & Development", icon: Paintbrush, value: "design" },
    { label: "AI", icon: Bot, value: "ai" },
    {
      label: "Productivity & Collaboration",
      icon: ListChecks,
      value: "productivity",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div className="container pt-16 pb-12 lg:pt-20 lg:pb-14">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            All Products
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            Explore our library of software to find the perfect fit for your
            needs.
          </p>
          <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
            <form onSubmit={handleSearch}>
              <div className="relative z-10 flex space-x-3 p-3 border bg-background rounded-lg shadow-lg">
                <div className="flex-[1_0_0%]">
                  <Label htmlFor="product" className="sr-only">
                    Search for products
                  </Label>
                  <Input
                    name="article"
                    className="h-full"
                    id="article"
                    placeholder="Search for products"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="flex-[0_0_auto]">
                  <Button type="submit" size={"icon"}>
                    <SearchIcon />
                  </Button>
                </div>
              </div>
            </form>
          </div>
          <div className="mt-10 sm:mt-20 flex flex-wrap gap-2 justify-center">
            {filterButtons.map(({ label, icon: Icon, value }) => (
              <Button
                key={value}
                variant={activeFilters.includes(value) ? "default" : "outline"}
                onClick={() => toggleFilter(value)}
              >
                <Icon className="flex-shrink-0 w-3.5 h-auto mr-2" />
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
*/
