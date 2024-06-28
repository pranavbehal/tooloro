import Image from "next/image";
import { OldProductCard, NewProductCard } from "./product-card";

export function LineProductCards(props) {
  return (
    <>
      <div className="container mx-auto p-0 mt-4 mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">{props.title}</h2>
          <a
            href="/products"
            className="text-primary-background flex items-center"
          >
            View more
            <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />{" "}
          </a>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
          <NewProductCard />
        </div>
      </div>
    </>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}