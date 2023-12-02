// import {
//     createServerClient,
//     type CookieOptions,
//     createBrowserClient,
//   } from "@supabase/ssr";
//   import type { AstroCookies } from "astro";
//   import type { Database } from "../../types/supabase";

//   export function createSupabaseServer(cookies: AstroCookies) {
//     const supabase = createServerClient<Database>(
//       import.meta.env.PUBLIC_SUPABASE_URL,
//       import.meta.env.PUBLIC_SUPABASE_ANON_KEY,
//       {
//         cookies: {
//           get(key: string) {
//             return cookies.get(key)?.value;
//           },
//           set(key: string, value: string, options: CookieOptions) {
//             cookies.set(key, value, options);
//           },
//           remove(key: string, options) {
//             cookies.delete(key, options);
//           },
//         },
//       }
//     );
//     return supabase;
//   }

//   export function createSupabaseBrowser() {
//     const supabase = createBrowserClient<Database>(
//       import.meta.env.PUBLIC_SUPABASE_URL,
//       import.meta.env.PUBLIC_SUPABASE_ANON_KEY
//     );
//     return supabase;
//   }
