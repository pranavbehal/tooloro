import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "next/image";

import { Label } from "@/components/ui/label";
import { SearchIcon } from "lucide-react";

export function OldHomeHero() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 mb-8">
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container space-y-6 px-4 md:px-6 text-center">
            <div className="space-y-3">
              <h1 className="text-4xl font-bold  tracking-tighter sm:text-4xl md:text-4xl lg:text-6xl">
                Software for Your Needs
              </h1>
              <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl lg:text-base/relaxed">
                Explore our library of software to find the perfect fit for your
                needs.
              </p>
            </div>
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search software..."
                className="w-full rounded-lg bg-background pl-4"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function HomeHero() {
  return (
    <>
      <div className="relative overflow-hidden">
        <div className="container pt-16 pb-12 lg:pt-20 lg:pb-14">
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Software for Your Needs
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
          </div>
        </div>
      </div>
    </>
  );
}
