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

export default async function Page() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  const { data, error } = await supabase.from("todos").select();
  console.log(data);
  // return (
  //   <ul>
  //     {data?.map((item) => (
  //       <li key={item}>{item}</li>
  //     ))}
  //   </ul>
  // );
}
