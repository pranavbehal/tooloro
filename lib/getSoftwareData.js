import { createClient } from "@supabase/supabase-js";

export async function getSoftwareData(options = {}) {
  const {
    deals = false,
    // tags = [],
    sortBy = "created_at",
    sortOrder = "desc",
    limit = null,
  } = options;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let query = supabase.from("software").select();

  if (deals) {
    query = query.not("deal", "is", null);
  }

  query = query.order(sortBy, { ascending: sortOrder === "asc" });

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
