import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://kifhcpebtijtkbcbwdra.supabase.co";
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtpZmhjcGVidGlqdGtiY2J3ZHJhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI2MjE5NjIsImV4cCI6MjAwODE5Nzk2Mn0.ITBUazXkX0ovlSNmEovTGhfIOXm_3nKYgtl4QCoRFv0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
