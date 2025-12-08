import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://dfrjavvcaeuadoplkbom.supabase.co';
const SUPABASE_KEY = 'sb_publishable_Bs2mt5c4pj3568ph4MGwjQ_b9eBIq3-';

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
