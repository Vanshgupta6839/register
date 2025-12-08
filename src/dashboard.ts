import { supabase } from './supabaseClient'

export async function logoutUser() {
  await supabase.auth.signOut();
}
