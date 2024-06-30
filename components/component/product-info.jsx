import Image from "next/image";
import Link from "next/link";

export default function ProductInfo(props) {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {props.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            {props.description}
          </p>
          <Link
            href="#"
            className="inline-flex items-center justify-center h-10 px-6 rounded-md bg-primary text-primary-foreground font-medium shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Visit Website
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/placeholder.jpg"
            alt={props.title}
            width={600}
            height={400}
            className="w-full h-auto rounded-lg overflow-hidden"
          />
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Features
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Feature 1</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Feature 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Feature 3</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Feature 4</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 md:mt-16 lg:mt-20">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          How to Use
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Step 1</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Step 2</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Step 3</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
          <div className="grid gap-2">
            <h3 className="text-xl font-semibold">Step 4</h3>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id mi
              a nisl sodales, imperdiet purus eget, tincidunt dui.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
