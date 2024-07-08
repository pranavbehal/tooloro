// import Image from "next/image";
// import { OldProductCard, NewProductCard } from "./product-card";

// export function LineProductCards(props) {
//   return (
//     <>
//       <div className="container mx-auto p-0 mt-4 mb-12">
//         {props.title && (
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-2xl font-bold">{props.title}</h2>
//             <a
//               href="/products"
//               className="text-primary-background flex items-center"
//             >
//               View more
//               <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />{" "}
//             </a>
//           </div>
//         )}

//         <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
//           <NewProductCard deal={props.deals && props.deals[0]} />
//           <NewProductCard deal={props.deals && props.deals[1]} />
//           <NewProductCard deal={props.deals && props.deals[2]} />
//           <NewProductCard deal={props.deals && props.deals[3]} />
//         </div>
//       </div>
//     </>
//   );
// }

// function ArrowRightIcon(props) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M5 12h14" />
//       <path d="m12 5 7 7-7 7" />
//     </svg>
//   );
// }

import React from "react";
import { NewProductCard } from "./product-card";
import { ArrowRightIcon } from "lucide-react";

export function LineProductCards({ title, products, cta }) {
  return (
    <div className="max-w-[1600px] mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        {title && <h2 className="text-2xl font-bold">{title}</h2>}
        {cta && (
          <a
            href="/products"
            className="text-primary-background flex items-center"
          >
            {cta}
            <ArrowRightIcon className="inline-block w-4 h-4 ml-1" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product, index) => (
          <div key={product.id || index} className="flex justify-center">
            <NewProductCard
              image={product.image}
              logo={product.logo}
              name={product.tool_name}
              shortDescription={product.short_description}
              deal={product.deal}
              websiteLink={product.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
