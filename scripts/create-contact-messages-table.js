import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('Error: Supabase URL and key must be set in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function createContactMessagesTable() {
  console.log('Creating contact_messages table...');
  
  try {
    // Check if the table exists
    const { data: existingTables } = await supabase
      .from('_metadata')
      .select('*')
      .eq('type', 'table');
    
    const tableExists = existingTables?.some(table => table.name === 'contact_messages');
    
    if (tableExists) {
      console.log('Table contact_messages already exists. Updating schema...');
      
      // Add 'subject' column if it doesn't exist
      const { error: alterError } = await supabase.rpc('extend_schema', {
        table_name: 'contact_messages',
        column_name: 'subject',
        column_type: 'text'
      });
      
      if (alterError) {
        console.error('Error adding subject column:', alterError);
        
        // Try SQL directly if RPC fails
        const { error: sqlError } = await supabase.query(`
          ALTER TABLE contact_messages 
          ADD COLUMN IF NOT EXISTS subject TEXT;
        `);
        
        if (sqlError) {
          console.error('Error executing SQL:', sqlError);
        } else {
          console.log('Added subject column using SQL');
        }
      } else {
        console.log('Added subject column using RPC');
      }
    } else {
      // Create the table
      const { error } = await supabase.query(`
        CREATE TABLE IF NOT EXISTS contact_messages (
          id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          subject TEXT,
          message TEXT NOT NULL,
          status TEXT DEFAULT 'new',
          created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
        );
      `);
      
      if (error) {
        console.error('Error creating table:', error);
      } else {
        console.log('Table contact_messages created successfully');
      }
    }
    
    // Verify the table exists and has the required columns
    const { data: tableInfo, error: infoError } = await supabase
      .from('contact_messages')
      .select('*')
      .limit(1);
    
    if (infoError) {
      console.error('Error verifying table:', infoError);
    } else {
      console.log('Table contact_messages verified');
    }
    
  } catch (error) {
    console.error('Unexpected error:', error);
  }
}

createContactMessagesTable();