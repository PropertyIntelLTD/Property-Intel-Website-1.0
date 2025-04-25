import { drizzle } from 'drizzle-orm/postgres-js';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import postgres from 'postgres';
import dotenv from 'dotenv';
import * as schema from './shared/schema.ts';
import { sql } from 'drizzle-orm';

// Load environment variables
dotenv.config();

// Connection string from environment
const connectionString = process.env.DATABASE_URL;

// Initialize postgres connection
const queryClient = postgres(connectionString, { max: 1 });
const db = drizzle(queryClient, { schema });

async function main() {
  try {
    console.log('Creating enum types...');
    
    // Create user_role enum type if it doesn't exist
    await queryClient`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
          CREATE TYPE user_role AS ENUM ('admin', 'agent', 'landlord', 'tenant');
        END IF;
      END
      $$;
    `;
    
    // Create property_status enum type if it doesn't exist
    await queryClient`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'property_status') THEN
          CREATE TYPE property_status AS ENUM ('For Rent', 'For Sale', 'Sold', 'Rented');
        END IF;
      END
      $$;
    `;
    
    // Create property_type enum type if it doesn't exist
    await queryClient`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'property_type') THEN
          CREATE TYPE property_type AS ENUM ('Apartment', 'House', 'Villa', 'Loft', 'Studio', 'Penthouse', 'Cottage');
        END IF;
      END
      $$;
    `;
    
    console.log('Creating tables...');
    
    // Create the users table if it doesn't exist
    await queryClient`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        auth_id TEXT UNIQUE NOT NULL,
        name TEXT NOT NULL,
        email TEXT UNIQUE NOT NULL,
        phone TEXT,
        role user_role NOT NULL DEFAULT 'tenant',
        avatar TEXT,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;
    
    // Create the properties table if it doesn't exist
    await queryClient`
      CREATE TABLE IF NOT EXISTS properties (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        address TEXT NOT NULL,
        city TEXT NOT NULL,
        postcode TEXT NOT NULL,
        country TEXT NOT NULL DEFAULT 'United Kingdom',
        bedrooms INTEGER NOT NULL,
        bathrooms INTEGER NOT NULL,
        size INTEGER NOT NULL,
        rent INTEGER,
        price INTEGER,
        status property_status NOT NULL DEFAULT 'For Rent',
        type property_type NOT NULL DEFAULT 'Apartment',
        featured BOOLEAN NOT NULL DEFAULT FALSE,
        image TEXT,
        landlord_id INTEGER REFERENCES users(id),
        agent_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;
    
    // Create the blogs table if it doesn't exist
    await queryClient`
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        summary TEXT NOT NULL,
        image TEXT,
        author_id INTEGER REFERENCES users(id),
        published BOOLEAN NOT NULL DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT NOW() NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW() NOT NULL
      );
    `;
    
    console.log('Tables and enums created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    // Close the connection
    await queryClient.end();
  }
}

main().catch(console.error);