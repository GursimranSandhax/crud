import { createClient } from "@supabase/supabase-js";
const supabaseUrl='https://onzadvbanyxzxfgezarg.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9uemFkdmJhbnl4enhmZ2V6YXJnIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTkyMTU2OSwiZXhwIjoyMDQxNDk3NTY5fQ.VGwWxUp0G9-2i3hSOirP7P9qL2TyqNRbKeZ3_z3xF48';
export const supabase= createClient(supabaseUrl,supabaseKey);
