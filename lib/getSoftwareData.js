import { createClient } from "@supabase/supabase-js";

export async function getSoftwareData() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  );

  let query = supabase.from("software").select();

  const { data, error } = await query;

  if (error) {
    console.error("Error fetching data:", error);
    throw new Error("Failed to fetch data");
  }

  return data;
}
