// Code from https://supabase.com/docs/guides/auth/server-side/nextjs

// import { createServerClient } from "@supabase/ssr";
// import { cookies } from "next/headers";

// export function createClient() {
//   const cookieStore = cookies();

//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           try {
//             cookiesToSet.forEach(({ name, value, options }) =>
//               cookieStore.set(name, value, options)
//             );
//           } catch {
//             // The `setAll` method was called from a Server Component.
//             // This can be ignored if you have middleware refreshing
//             // user sessions.
//           }
//         },
//       },
//     }
//   );
// }

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export const supabaseAdmin = (cookieStore) => {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    // process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    process.env.SUPABASE_SECRET_KEY,
    {
      cookies: {
        get(name) {
          return cookieStore.get(name)?.value;
        },
        set(name, value, options) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // The `set` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
        remove(name, options) {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (error) {
            // The `delete` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  );
};
