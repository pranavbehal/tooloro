import { createClient } from "../utils/supabase/server";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createClient();

  const { data } = await supabase.from("software_advertise").select();

  console.log(data);

  return (
    <ul>
      {data?.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
