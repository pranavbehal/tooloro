import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="flex h-20 w-full items-center justify-between px-4 md:px-12 nav">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <Image src="/Tooloro_Black.svg" height="32" width="32" alt="logo" />
        <span className="text-xl font-semibold">Tooloro</span>
      </Link>
      {/* Go Back to Old Nav styling if I add login/signup back */}
      {/* <nav className="hidden lg:flex items-center gap-6"> */}
      <nav className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
        <Link
          href="/products"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          All Products
        </Link>
        <Link
          href="/chat"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Chat
        </Link>
        {/* <Link
          href="/learn"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Learn
        </Link> */}
        <Link
          href="/advertise"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Advertise/Add Product
        </Link>
        <Link
          href="/deals"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Deals
        </Link>
        <Link
          href="/blog"
          className="text-m font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          Blog
        </Link>
      </nav>
      {/* <div className="hidden lg:flex items-center gap-4">
        <Button variant="outline">Login</Button>
        <Button>Sign Up</Button>
      </div> */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid gap-4 py-6">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
              <Image
                src="/Tooloro_Black.svg"
                height="30"
                width="30"
                alt="logo"
              />
              <span className="text-lg font-semibold">Tooloro</span>
            </Link>
            <nav className="grid gap-2">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/products"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                All Products
              </Link>
              <Link
                href="/chat"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Chat
              </Link>
              {/* <Link
                href="/learn"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Learn
              </Link> */}
              <Link
                href="/advertise"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Advertise/Add Product
              </Link>
              <Link
                href="/deals"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Deals
              </Link>
              <Link
                href="/blog"
                className="flex items-center gap-2 text-lg font-medium"
                prefetch={false}
              >
                Blog
              </Link>
            </nav>
            {/* <div className="flex flex-col gap-2">
              <Button variant="outline">Login</Button>
              <Button>Sign Up</Button>
            </div> */}
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
