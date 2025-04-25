import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';
import * as schema from './shared/schema.js';
import * as dotenv from 'dotenv';

dotenv.config();

async function main() {
  console.log('Creating pool with connection string:', process.env.DATABASE_URL);
  
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
  });
  
  console.log('Pool created');
  
  const db = drizzle(pool, { schema });
  
  console.log('Creating tables...');
  
  try {
    // Create tables
    await db.execute(`
      CREATE TYPE user_role AS ENUM ('admin', 'agent', 'landlord', 'tenant');
      CREATE TYPE property_status AS ENUM ('For Rent', 'For Sale', 'Sold', 'Rented');
      CREATE TYPE property_type AS ENUM ('Apartment', 'House', 'Villa', 'Loft', 'Studio', 'Penthouse', 'Cottage');
      
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        auth_id TEXT NOT NULL UNIQUE,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        phone TEXT,
        role user_role NOT NULL DEFAULT 'tenant',
        avatar TEXT,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      
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
        featured BOOLEAN NOT NULL DEFAULT false,
        image TEXT,
        landlord_id INTEGER REFERENCES users(id),
        agent_id INTEGER REFERENCES users(id),
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
      
      CREATE TABLE IF NOT EXISTS blogs (
        id SERIAL PRIMARY KEY,
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        summary TEXT NOT NULL,
        image TEXT,
        author_id INTEGER REFERENCES users(id),
        published BOOLEAN NOT NULL DEFAULT false,
        created_at TIMESTAMP NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMP NOT NULL DEFAULT NOW()
      );
    `);
    
    console.log('Tables created successfully!');
  } catch (error) {
    console.error('Error creating tables:', error);
  } finally {
    await pool.end();
  }
}

main();