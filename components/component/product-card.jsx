import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function OldProductCard() {
  return (
    <>
      <Card className="w-[350px]">
        <Image
          src="/placeholder.jpg"
          alt="Product Image"
          width={350}
          height={200}
          className="w-full h-[200px] object-cover rounded-t-md"
        />
        <CardContent>
          <h3 className="text-xl font-bold mt-5">Product Name</h3>
          <p className="text-muted-foreground mt-1">
            A short description of the product.
          </p>
          <div className="flex justify-between mt-4">
            <Button variant="outline">Learn More</Button>
            <Button>Visit Product</Button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export function NewProductCard() {
  return (
    <>
      {" "}
      <div className="group relative">
        <Card className="w-[350px]">
          <div className="h-[200px] w-[350px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
            <Image
              src="/placeholder.jpg"
              alt="Image"
              className="h-full w-full object-cover object-center"
              width={350}
              height={200}
            />
          </div>
          <CardContent>
            <h3 className="text-xl font-bold mt-5">Product Name</h3>
            <p className="text-muted-foreground mt-1">
              A short description of the product.
            </p>
            <div className="flex justify-between mt-4">
              <Button variant="outline">Learn More</Button>
              <Button>Visit Product</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
