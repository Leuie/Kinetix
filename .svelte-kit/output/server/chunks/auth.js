import { w as writable } from "./index.js";
import { createClient } from "@supabase/supabase-js";
import { B as BROWSER } from "./false.js";
const browser = BROWSER;
const supabaseUrl = "https://cwxbjlusciqgswyaaqvm.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3eGJqbHVzY2lxZ3N3eWFhcXZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU0NzU0NTksImV4cCI6MjA3MTA1MTQ1OX0.DV3JdCfiPREK2wQaAvmqbKvl6DHjZTvOO3kR4n6sR9A";
const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: browser,
    detectSessionInUrl: browser,
    flowType: "pkce"
  }
});
const user = writable(null);
const session = writable(null);
const loading = writable(true);
supabase.auth.getSession().then(({ data: { session: initialSession } }) => {
  session.set(initialSession);
  user.set(initialSession?.user ?? null);
  loading.set(false);
});
supabase.auth.onAuthStateChange((event, newSession) => {
  session.set(newSession);
  user.set(newSession?.user ?? null);
  loading.set(false);
});
export {
  loading as l,
  supabase as s,
  user as u
};
