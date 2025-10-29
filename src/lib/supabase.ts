import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface InquiryData {
  name: string;
  company?: string;
  position?: string;
  phone: string;
  email: string;
  message?: string;
}

export async function submitInquiry(data: InquiryData) {
  const { data: result, error } = await supabase
    .from('inquiries')
    .insert([data])
    .select()
    .maybeSingle();

  if (error) throw error;
  return result;
}
