import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Image } from "next/image";

export function HeroSearch() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 mb-8">
        <section className="bg-muted py-12 md:py-20 lg:py-24">
          <div className="container space-y-6 px-4 md:px-6 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
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
