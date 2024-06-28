import Image from "next/image";
import { ProductCard } from "./product-card";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

// export default function NewLine() {
//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-2xl font-bold tracking-tight text-gray-900">
//           Customers also purchased
//         </h2>

//         <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
//           <div className="group relative">
//             <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
//               <Image
//                 src="/placeholder.jpg"
//                 alt="Image"
//                 className="h-full w-full object-cover object-center lg:h-full lg:w-full"
//                 width={350}
//                 height={200}
//               />
//             </div>
//             <div className="mt-4 flex justify-between">
//               <div>
//                 <h3 className="text-sm text-gray-700">
//                   <a href="/">
//                     <span aria-hidden="true" className="absolute inset-0" />
//                     Name
//                   </a>
//                 </h3>
//                 <p className="mt-1 text-sm text-gray-500">Color</p>
//               </div>
//               <p className="text-sm font-medium text-gray-900">Price</p>
//             </div>
//           </div>

//           {/* <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard /> */}
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Customers also purchased
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <div className="h-[200px] w-[350px] overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
              <Image
                src="/placeholder.jpg"
                alt="Image"
                className="h-full w-full object-cover object-center"
                width={350}
                height={200}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0" />
                    Name
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Color</p>
              </div>
              <p className="text-sm font-medium text-gray-900">Price</p>
            </div>
          </div>
          {/* */}
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
        </div>
      </div>
    </div>
  );
}

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
