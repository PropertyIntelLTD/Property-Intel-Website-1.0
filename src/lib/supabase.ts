import { createClient } from '@supabase/supabase-js';
import { Database } from './database.types';

// Supabase configuration
const supabaseUrl = 'https://cueqivujzvdghjgyqlak.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1ZXFpdnVqenZkZ2hqZ3lxbGFrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMxNjkyMDksImV4cCI6MjA1ODc0NTIwOX0.5ttwFSlW4_4FKQCFjz--B2wu8JLMg8aWPGJvONBFfS0';

// Initialize the Supabase client
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);

// Helper type for database tables
export type Tables = Database['public']['Tables'];

// Helper function to check if we're authenticated
export const isAuthenticated = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};

// Helper for logging out
export const logout = async () => {
  return await supabase.auth.signOut();
};