// Without Filtering:
// import { createClient } from "@supabase/supabase-js";

// export async function getSoftwareData() {
//   const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
//   );

//   const { data, error } = await supabase
//     .from("software")
//     .select()
//     .neq("deal", null);

//   if (error) {
//     console.error("Error fetching data:", error);
//     throw new Error("Failed to fetch data");
//   }

//   return data;
// }

import { createClient } from "@supabase/supabase-js";

export async function getSoftwareData(options = {}) {
  const {
    filterDeals = false,
    tags = [],
    sortBy = "created_at",
    sortOrder = "desc",
    limit = null,
  } = options;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let query = supabase.from("software").select();

  // Filtering for deals only
  if (filterDeals) {
    query = query.not("deal", "is", null);
  }

  // Filtering based on tags
  if (tags.length > 0) {
    query = query.contains("tags", tags);
  }

  // Sorting
  query = query.order(sortBy, { ascending: sortOrder === "asc" });

  // Limiting the amount returned
  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }

  return data;
}
