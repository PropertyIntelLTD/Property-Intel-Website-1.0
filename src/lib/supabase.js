
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cueqivujzvdghjgyqlak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1ZXFpdnVqenZkZ2hqZ3lxbGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjkyMDksImV4cCI6MjA1ODc0NTIwOX0.5ttwFSlW4_4FKQCFjz--B2wu8JLMg8aWPGJvONBFfS0';

export const supabase = createClient(supabaseUrl, supabaseKey);
