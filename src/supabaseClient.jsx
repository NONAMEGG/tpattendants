import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gdcegvzvjeyjhkucgrqt.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkY2Vndnp2amV5amhrdWNncnF0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMjg4MzI0NCwiZXhwIjoyMDQ4NDU5MjQ0fQ.1XPLRtZmcMc7QAAAPRV_FwNW5EybRcEwcktrqz28L5Y";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
