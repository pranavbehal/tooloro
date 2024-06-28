import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

const cardContent = {
  title: "Lorem ipsum dolor",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, hic ipsum!",
};
const CardBody = ({ className = "" }) => (
  <div
    className={cn(
      "px-2 text-gray-100 sm:px-4 py-0 sm:pb-3 text-left",
      className
    )}
  >
    <h3 className="text-lg font-bold tracking-tighter mt-3 mb-1">
      {cardContent.title}
    </h3>
    <p className="text-sm leading-5">{cardContent.description}</p>
  </div>
);

export const Card_with_image_v5 = () => {
  return (
    <div
      style={{ width: "400px" }}
      className="rounded-xl dark:bg-zinc-950 bg-zinc-50 overflow-hidden p-2 border pb-3 mx-auto"
    >
      <div className="relative aspect-video">
        <Image fill className="rounded-xl" src="/test-photo.jpg" alt="image" />
      </div>
      <CardBody className="text-gray-800 dark:text-gray-200 mb-2 relative" />
      <div className="px-2">
        <Button className="w-full rounded-lg" asChild>
          <Link href="/docs/cards-with-image-bg">Learn more</Link>
        </Button>
      </div>
    </div>
  );
};
