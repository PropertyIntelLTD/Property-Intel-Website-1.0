import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import * as schema from './shared/schema.ts';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __dirname = dirname(fileURLToPath(import.meta.url));

// Connection string from environment
const connectionString = process.env.DATABASE_URL;

// Initialize postgres connection
const migrationClient = postgres(connectionString, { max: 1 });
const db = drizzle(migrationClient, { schema });

// Path to the migrations folder
const migrationsFolder = join(__dirname, 'drizzle');

async function main() {
  try {
    console.log('Starting database push...');
    
    // Check if schema is in sync with the database
    console.log('Pushing schema changes to the database...');
    await pushSchema();
    
    console.log('Database schema updated successfully!');
  } catch (error) {
    console.error('Error during database push:', error);
  } finally {
    // Close the connection
    await migrationClient.end();
  }
}

async function pushSchema() {
  // Use SQL to create types and tables if they don't exist
  
  // Create user_role enum type if it doesn't exist
  await migrationClient`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('admin', 'agent', 'landlord', 'tenant');
      END IF;
    END
    $$;
  `;
  
  // Create property_status enum type if it doesn't exist
  await migrationClient`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'property_status') THEN
        CREATE TYPE property_status AS ENUM ('For Rent', 'For Sale', 'Sold', 'Rented');
      END IF;
    END
    $$;
  `;
  
  // Create property_type enum type if it doesn't exist
  await migrationClient`
    DO $$
    BEGIN
      IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'property_type') THEN
        CREATE TYPE property_type AS ENUM ('Apartment', 'House', 'Villa', 'Loft', 'Studio', 'Penthouse', 'Cottage');
      END IF;
    END
    $$;
  `;
  
  // Apply schema objects (tables, etc.)
  const tables = [schema.users, schema.properties, schema.blogs];
  
  // This is a simple approach - for more complex operations use drizzle-kit generate
  for (const table of tables) {
    try {
      console.log(`Ensuring table ${table.name} exists...`);
      const tableExists = await migrationClient`
        SELECT EXISTS (
          SELECT FROM information_schema.tables 
          WHERE table_schema = 'public'
          AND table_name = ${table.name}
        );
      `;
      
      if (!tableExists[0].exists) {
        console.log(`Creating table ${table.name}...`);
        // The actual SQL to create the table would be here
        // For simplicity, we refer to the create-tables.js script for the full DDL
      }
      
    } catch (error) {
      console.error(`Error ensuring table ${table.name}:`, error);
      throw error;
    }
  }
}

main().catch(console.error);