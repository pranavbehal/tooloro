// import { createClient } from "../utils/supabase/server";
// import { cookies } from "next/headers";

// export default async function Page() {
//   const supabase = createClient();

//   const { data } = await supabase.from("software_advertise").select();

//   console.log(data);

//   return (
//     <ul>
//       {data?.map((item) => (
//         <li key={item}>{item}</li>
//       ))}
//     </ul>
//   );
// }

///////////////////////////////

// import { createClient } from "../utils/supabase/server";

// async function fetchSoftwareAdvertisements() {
//   const supabase = createClient();

//   const { data, error } = await supabase.from("software_advertise").select("*");

//   if (error) {
//     console.error("Error fetching data:", error);
//     return [];
//   }

//   return data;
// }

// export default async function HomePage() {
//   const data = await fetchSoftwareAdvertisements();

//   return (
//     <div>
//       <h1>Software Advertisements</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import { createClient } from "@supabase/supabase-js";
import { NewProductCard } from "@/components/component/product-card";

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase.from("software").select();

  if (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading products</div>;
  }

  return (
    <>
      {data.map((item) => (
        <NewProductCard
          key={item.id}
          image={item.image}
          logo={item.logo}
          name={item.tool_name}
          shortDescription={item.short_description}
          deal={item.deal}
          websiteLink={item.link}
        />
      ))}
    </>
  );
}

//key, image, logo, name, shortDescription, deal, website
